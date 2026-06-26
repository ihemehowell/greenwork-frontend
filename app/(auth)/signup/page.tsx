'use client'

import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/hooks/useAuth'
import Link from 'next/link'
import { getFriendlyErrorMessage } from '../../../lib/errors'
import { Leaf, Mail, Lock, User, CheckCircle2, Briefcase, Eye, EyeOff } from 'lucide-react'

export default function SignupPage() {
  const router = useRouter()
  const { signup, user } = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [fullName, setFullName] = useState('')
  const [role, setRole] = useState<'seeker' | 'business'>('seeker')
  const [error, setError] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  // Redirect if already logged in
  useEffect(() => {
    if (user) {
      router.push('/')
    }
  }, [user, router])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (!email || !password || !fullName) {
      setError('Please fill in all fields')
      return
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters')
      return
    }

    signup.mutate(
      { email, password, fullName, role },
      {
        onSuccess: () => {
          router.push('/')
        },
        onError: (err: unknown) => {
          const errorMessage = getFriendlyErrorMessage(err, 'Signup failed', process.env.NEXT_PUBLIC_API_BASE_URL)
          setError(errorMessage)
        },
      }
    )
  }

  return (
    <main className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="mb-8 text-center">
          <Link href="/" className="inline-flex items-center gap-2 transition hover:opacity-80">
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-600 text-white">
              <Leaf className="h-5 w-5" />
            </span>
            <span className="font-bold text-gray-900">GreenWork</span>
          </Link>
        </div>

        {/* Card */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Create account</h1>
            <p className="text-gray-600">Join GreenWork and start your green career journey</p>
          </div>

          {error && (
            <div className="mb-6 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg flex gap-2">
              <CheckCircle2 className="h-5 w-5 shrink-0 mt-0.5" />
              <p className="text-sm">{error}</p>
            </div>
          )}

          {/* Social Sign Up */}
          <button
            type="button"
            onClick={() => {
              /* TODO: Implement Google OAuth */
              alert('Google sign-up coming soon')
            }}
            className="w-full mb-6 border border-gray-300 bg-white hover:bg-gray-50 text-gray-900 font-medium py-2.5 px-4 rounded-lg transition flex items-center justify-center gap-2"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="currentColor"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="currentColor"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="currentColor"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            Sign up with Google
          </button>

          <div className="relative mb-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">Or sign up with email</span>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Full name</label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="John Doe"
                  className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email address</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-10 pr-10 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition"
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
              <p className="text-xs text-gray-600 mt-1">Minimum 6 characters</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">I am a...</label>
              <div className="grid grid-cols-2 gap-3">
                <label
                  className={`flex items-center gap-3 p-3 rounded-lg border-2 cursor-pointer transition ${
                    role === 'seeker' ? 'border-emerald-600 bg-emerald-50' : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <input
                    type="radio"
                    value="seeker"
                    checked={role === 'seeker'}
                    onChange={(e) => setRole(e.target.value as 'seeker' | 'business')}
                    className="w-4 h-4"
                  />
                  <div>
                    <User className="h-4 w-4 text-emerald-600 mb-1" />
                    <span className="text-sm font-medium text-gray-900">Job Seeker</span>
                  </div>
                </label>
                <label
                  className={`flex items-center gap-3 p-3 rounded-lg border-2 cursor-pointer transition ${
                    role === 'business' ? 'border-emerald-600 bg-emerald-50' : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <input
                    type="radio"
                    value="business"
                    checked={role === 'business'}
                    onChange={(e) => setRole(e.target.value as 'seeker' | 'business')}
                    className="w-4 h-4"
                  />
                  <div>
                    <Briefcase className="h-4 w-4 text-emerald-600 mb-1" />
                    <span className="text-sm font-medium text-gray-900">Business</span>
                  </div>
                </label>
              </div>
            </div>

            <button
              type="submit"
              disabled={signup.isPending}
              className="w-full mt-6 bg-emerald-600 hover:bg-emerald-700 disabled:bg-gray-400 text-white font-semibold py-2.5 px-4 rounded-lg transition"
            >
              {signup.isPending ? 'Creating account...' : 'Create account'}
            </button>
          </form>

          <p className="mt-6 text-center text-gray-600 text-sm">
            Already have an account?{' '}
            <Link href="/login" className="text-emerald-600 hover:text-emerald-700 font-semibold">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </main>
  )
}
