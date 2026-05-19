import { apiClient } from './api-client'

export const authService = {
  login: (email: string, password: string) =>
    apiClient.post('/api/v1/auth/login', { email, password }),
  signup: (payload: any) => apiClient.post('/api/v1/auth/signup', payload),
  refresh: () => apiClient.post('/api/v1/auth/refresh')
}
