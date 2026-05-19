import { apiClient } from './api-client'

export const jobsService = {
  listJobs: (params?: any) => apiClient.get('/api/v1/jobs', { params }),
  getJob: (id: string) => apiClient.get(`/api/v1/jobs/${id}`),
  createJob: (payload: any) => apiClient.post('/api/v1/jobs', payload)
}
