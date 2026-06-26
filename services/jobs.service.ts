import { apiClient } from './api-client'

export const jobsService = {
  listJobs: (filters?: any) => apiClient.get('/api/v1/jobs', { params: filters }),
  getJob: (id: string) => apiClient.get(`/api/v1/jobs/${id}`),
  createJob: (payload: any) => apiClient.post('/api/v1/jobs', payload),
  updateJob: (id: string, payload: any) => apiClient.patch(`/api/v1/jobs/${id}`, payload),
  deleteJob: (id: string) => apiClient.delete(`/api/v1/jobs/${id}`),
  applyForJob: (id: string, payload: any) => apiClient.post(`/api/v1/jobs/${id}/apply`, payload),
}
