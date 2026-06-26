import { Leaf } from 'lucide-react'

type LandingHeaderProps = {
  isAuthenticated: boolean
  userName?: string
  userRole?: string
  onHome: () => void
  onLogin: () => void
  onSignup: () => void
  onLogout: () => void
}

export function LandingHeader({
  isAuthenticated,
  userName,
  userRole,
  onHome,
  onLogin,
  onSignup,
  onLogout,
}: LandingHeaderProps) {
  return (
    <header className="border-b border-gray-200">
      <div className="flex items-center justify-between py-6">
        <button onClick={onHome} className="flex items-center gap-3 transition hover:opacity-80">
          <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-600 text-white">
            <Leaf className="h-5 w-5" />
          </span>
          <span>
            <span className="block text-base font-bold text-gray-900">GreenWork</span>
            <span className="block text-xs text-gray-600">Career Platform</span>
          </span>
        </button>

        <nav className="hidden items-center gap-8 md:flex">
          <a href="#jobs" className="text-sm font-medium text-gray-600 transition hover:text-gray-900">
            Opportunities
          </a>
          <a href="#features" className="text-sm font-medium text-gray-600 transition hover:text-gray-900">
            Why GreenWork
          </a>
        </nav>

        <div className="flex items-center gap-4">
          {isAuthenticated ? (
            <div className="flex items-center gap-4">
              <div className="hidden text-right sm:block">
                <p className="text-sm font-medium text-gray-900">{userName}</p>
                <p className="text-xs text-gray-500 capitalize">{userRole}</p>
              </div>
              <button
                onClick={onLogout}
                className="rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-900 transition hover:bg-gray-200"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-3">
              <button onClick={onLogin} className="text-sm font-medium text-gray-900 transition hover:text-emerald-600">
                Login
              </button>
              <button
                onClick={onSignup}
                className="rounded-lg bg-emerald-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-emerald-700"
              >
                Get Started
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
