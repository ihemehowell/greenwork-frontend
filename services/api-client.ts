import axios, { AxiosInstance, AxiosError } from 'axios'

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:5000'

class ApiClient {
  client: AxiosInstance
  private refreshPromise: Promise<string> | null = null
  private lastRequestId: string | null = null

  private shouldSkipAuthRefresh(url?: string) {
    return !!url && (
      url.includes('/api/v1/auth/login') ||
      url.includes('/api/v1/auth/signup') ||
      url.includes('/api/v1/auth/refresh')
    )
  }

  constructor() {
    this.client = axios.create({
      baseURL: API_BASE_URL,
      timeout: 10000,
      withCredentials: true,
    })

    // Request interceptor: Add token to headers and propagate request ID
    this.client.interceptors.request.use((config) => {
      try {
        const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null
        if (token && config.headers) {
          config.headers.Authorization = `Bearer ${token}`
        }
        // Propagate request ID if available
        if (this.lastRequestId && config.headers) {
          config.headers['X-Request-ID'] = this.lastRequestId
        }
      } catch (e) {
        console.error('Error reading token or request ID:', e)
      }
      return config
    })

    // Response interceptor: Capture request ID and handle 401 and refresh token
    this.client.interceptors.response.use(
      (response) => {
        // Capture request ID from response header for correlation
        if (response.headers['x-request-id']) {
          this.lastRequestId = response.headers['x-request-id']
        }
        return response
      },
      async (error: AxiosError) => {
        const originalRequest = error.config as any
        const requestUrl = originalRequest?.url as string | undefined

        if (error.response?.status === 401 && !originalRequest._retry && !this.shouldSkipAuthRefresh(requestUrl)) {
          originalRequest._retry = true

          if (!this.refreshPromise) {
            this.refreshPromise = this.performTokenRefresh()
          }

          try {
            const newToken = await this.refreshPromise
            this.refreshPromise = null
            if (newToken) {
              originalRequest.headers.Authorization = `Bearer ${newToken}`
              return this.client(originalRequest)
            }
          } catch (refreshError) {
            this.refreshPromise = null
            if (typeof window !== 'undefined') {
              localStorage.removeItem('token')
              window.location.href = '/login'
            }
          }
        }

        return Promise.reject(error)
      }
    )
  }

  private async performTokenRefresh(): Promise<string> {
    try {
      const response = await this.client.post('/api/v1/auth/refresh')
      const { token } = response.data.data
      if (typeof window !== 'undefined') {
        localStorage.setItem('token', token)
      }
      return token
    } catch (err) {
      throw err
    }
  }

  get<T>(url: string, config = {}) {
    return this.client.get<T>(url, config)
  }

  post<T>(url: string, data?: any, config = {}) {
    return this.client.post<T>(url, data, config)
  }

  patch<T>(url: string, data?: any, config = {}) {
    return this.client.patch<T>(url, data, config)
  }

  delete<T>(url: string, config = {}) {
    return this.client.delete<T>(url, config)
  }

  // Get the last captured request ID (for debugging/correlation)
  getLastRequestId(): string | null {
    return this.lastRequestId
  }
}

export const apiClient = new ApiClient()
