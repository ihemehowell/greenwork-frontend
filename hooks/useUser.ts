'use client'

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { usersService } from '@/services/users.service'

export function useUser() {
  return useQuery({
    queryKey: ['user', 'profile'],
    queryFn: () => usersService.getProfile(),
    select: (data: any) => data.data.data,
  })
}

export function useUpdateProfile() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (updates: any) => usersService.updateProfile(updates),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['user', 'profile'] })
    },
  })
}

export function useChangePassword() {
  return useMutation({
    mutationFn: (payload: { currentPassword: string; newPassword: string }) =>
      usersService.changePassword(payload),
  })
}

export function usePublicProfile(userId: string | null) {
  return useQuery({
    queryKey: ['user', userId],
    queryFn: () => usersService.getPublicProfile(userId!),
    enabled: !!userId,
    select: (data: any) => data.data.data,
  })
}
