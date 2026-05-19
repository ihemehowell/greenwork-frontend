"use client"
import { useMutation } from '@tanstack/react-query'
import { authService } from '@/services/auth.service'
import { useAuthStore } from '@/store/auth-store'

export function useAuth() {
  const setUser = useAuthStore((s) => s.setUser)

  const login = useMutation(({ email, password }: { email: string; password: string }) =>
    authService.login(email, password).then((r) => r.data)
  , {
    onSuccess: (data) => {
      const { token, user } = data.data
      try { localStorage.setItem('token', token) } catch (e) {}
      setUser({ id: user.id, email: user.email, fullName: user.fullName })
    }
  })

  const signup = useMutation((payload: any) => authService.signup(payload).then((r) => r.data), {
    onSuccess: (data) => {
      const { token, user } = data.data
      try { localStorage.setItem('token', token) } catch (e) {}
      setUser({ id: user.id, email: user.email, fullName: user.fullName })
    }
  })

  const logout = () => {
    try { localStorage.removeItem('token') } catch (e) {}
    useAuthStore.getState().logout()
  }

  return { login, signup, logout }
}
