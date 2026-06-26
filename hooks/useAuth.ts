import type { AxiosResponse } from 'axios'
import { useMutation } from '@tanstack/react-query'
import { authService } from '@/services/auth.service'
import { useAuthStore } from '@/store/auth-store'
import { getFriendlyErrorMessage } from '../lib/errors'

type AuthPayload = {
  user?: { id: string; email: string; fullName?: string; role?: 'seeker' | 'business' }
  token?: string
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null
}

function extractAuthPayloadFromResponse(response: AxiosResponse | unknown): AuthPayload {
  if (!isRecord(response)) {
    return {}
  }

  const responseData = response.data

  if (isRecord(responseData) && isRecord(responseData.data)) {
    return responseData.data as AuthPayload
  }

  if (isRecord(responseData)) {
    return responseData as AuthPayload
  }

  return response as AuthPayload
}

export function useAuth() {
  const { user, setUser, logout } = useAuthStore()

  const loginMutation = useMutation({
    mutationFn: ({ email, password }: { email: string; password: string }) =>
      authService.login(email, password),
    onSuccess: (response: AxiosResponse | unknown) => {
      const payload = extractAuthPayloadFromResponse(response)

      if (payload.user) {
        setUser(payload.user)
      }

      if (payload.token && typeof window !== 'undefined') {
        localStorage.setItem('token', payload.token)
      }
    },
    onError: (error: unknown) => {
      const message = getFriendlyErrorMessage(error, 'Login failed', process.env.NEXT_PUBLIC_API_BASE_URL)
      if (process.env.NODE_ENV !== 'production' && message !== 'Login failed') {
        console.warn('Login error:', message)
      }
    },
  })

  const signupMutation = useMutation({
    mutationFn: (payload: { email: string; password: string; fullName?: string; role?: 'seeker' | 'business' }) =>
      authService.signup(payload),
    onSuccess: (response: AxiosResponse | unknown) => {
      const payload = extractAuthPayloadFromResponse(response)

      if (payload.user) {
        setUser(payload.user)
      }

      if (payload.token && typeof window !== 'undefined') {
        localStorage.setItem('token', payload.token)
      }
    },
    onError: (error: unknown) => {
      const message = getFriendlyErrorMessage(error, 'Signup failed', process.env.NEXT_PUBLIC_API_BASE_URL)
      if (process.env.NODE_ENV !== 'production' && message !== 'Signup failed') {
        console.warn('Signup error:', message)
      }
    },
  })

  const handleLogout = () => {
    logout()
    if (typeof window !== 'undefined') {
      localStorage.removeItem('token')
    }
  }

  return {
    user,
    login: loginMutation,
    signup: signupMutation,
    logout: handleLogout,
    isAuthenticated: !!user,
  }
}
