'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Leaf, Mail, ArrowLeft, CheckCircle2 } from 'lucide-react'

export default function ForgotPasswordPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setIsLoading(true)

    if (!email) {
      setError('Please enter your email address')
      setIsLoading(false)
      return
    }

    // TODO: Implement forgot password API call
    // For now, simulate the request
    setTimeout(() => {
      setSubmitted(true)
      setIsLoading(false)
    }, 1000)
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
          {!submitted ? (
            <>
              <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Forgot password?</h1>
                <p className="text-gray-600">Enter your email and we&apos;ll send you a link to reset your password.</p>
              </div>

              {error && (
                <div className="mb-6 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg flex gap-2">
                  <CheckCircle2 className="h-5 w-5 shrink-0 mt-0.5" />
                  <p className="text-sm">{error}</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
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

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full mt-6 bg-emerald-600 hover:bg-emerald-700 disabled:bg-gray-400 text-white font-semibold py-2.5 px-4 rounded-lg transition"
                >
                  {isLoading ? 'Sending...' : 'Send reset link'}
                </button>
              </form>

              <Link
                href="/login"
                className="mt-6 inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-medium text-sm"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to login
              </Link>
            </>
          ) : (
            <div className="text-center space-y-4">
              <div className="flex justify-center mb-4">
                <div className="rounded-full bg-green-100 p-3">
                  <CheckCircle2 className="h-6 w-6 text-green-600" />
                </div>
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Check your email</h2>
              <p className="text-gray-600">
                We&apos;ve sent a password reset link to <span className="font-semibold">{email}</span>
              </p>
              <p className="text-sm text-gray-500">
                The link will expire in 24 hours. If you don&apos;t receive it, check your spam folder.
              </p>

              <div className="mt-6 space-y-3">
                <button
                  onClick={() => router.push('/login')}
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2.5 px-4 rounded-lg transition"
                >
                  Back to login
                </button>
                <button
                  onClick={() => {
                    setSubmitted(false)
                    setEmail('')
                  }}
                  className="w-full border border-gray-300 bg-white hover:bg-gray-50 text-gray-900 font-medium py-2.5 px-4 rounded-lg transition"
                >
                  Try another email
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Footer Link */}
        {!submitted && (
          <p className="mt-8 text-center text-sm text-gray-600">
            Remember your password?{' '}
            <Link href="/login" className="text-emerald-600 hover:text-emerald-700 font-semibold">
              Sign in here
            </Link>
          </p>
        )}
      </div>
    </main>
  )
}
