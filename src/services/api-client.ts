import axios, { AxiosInstance } from 'axios'

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3001'

class ApiClient {
  client: AxiosInstance

  constructor() {
    this.client = axios.create({ baseURL: API_BASE_URL, timeout: 10000 })
    this.client.defaults.withCredentials = true
    this.client.interceptors.request.use((config) => {
      // attach token if present
      try {
        const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null
        if (token && config.headers) config.headers.Authorization = `Bearer ${token}`
      } catch (e) {}
      return config
    })
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
}

export const apiClient = new ApiClient()
