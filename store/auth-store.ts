import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type User = { id: string; email: string; fullName?: string; role?: 'seeker' | 'business' }

interface AuthState {
  user: User | null
  setUser: (u: User | null) => void
  logout: () => void
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      setUser: (u) => set({ user: u }),
      logout: () => set({ user: null }),
    }),
    {
      name: 'auth-store',
    }
  )
)
