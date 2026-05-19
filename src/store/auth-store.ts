import { create } from 'zustand'

type User = { id: string; email: string; fullName?: string }

interface AuthState {
  user: User | null
  setUser: (u: User | null) => void
  logout: () => void
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  setUser: (u) => set({ user: u }),
  logout: () => set({ user: null })
}))
