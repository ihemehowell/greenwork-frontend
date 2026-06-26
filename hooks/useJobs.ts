'use client'

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { jobsService } from '@/services/jobs.service'

export function useJobs(filters?: { page?: number; limit?: number; category?: string; location?: string }) {
  return useQuery({
    queryKey: ['jobs', filters],
    queryFn: () => jobsService.listJobs(filters),
    select: (data: any) => data.data,
  })
}

export function useJob(id: string | null) {
  return useQuery({
    queryKey: ['jobs', id],
    queryFn: () => jobsService.getJob(id!),
    enabled: !!id,
    select: (data: any) => data.data,
  })
}

export function useCreateJob() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (jobData: any) => jobsService.createJob(jobData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['jobs'] })
    },
  })
}

export function useUpdateJob() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: any }) => jobsService.updateJob(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['jobs'] })
    },
  })
}

export function useDeleteJob() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (id: string) => jobsService.deleteJob(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['jobs'] })
    },
  })
}

export function useApplyForJob() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: ({ jobId, coverLetter }: { jobId: string; coverLetter?: string }) =>
      jobsService.applyForJob(jobId, { coverLetter }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['jobs'] })
    },
  })
}
