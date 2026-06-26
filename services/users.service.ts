import { apiClient } from './api-client'

export const usersService = {
  getProfile: () => apiClient.get('/api/v1/users/profile'),
  updateProfile: (payload: any) => apiClient.patch('/api/v1/users/profile', payload),
  changePassword: (payload: any) => apiClient.post('/api/v1/users/change-password', payload),
  getPublicProfile: (userId: string) => apiClient.get(`/api/v1/users/${userId}`),
}
