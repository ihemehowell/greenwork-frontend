import { Globe, Leaf, Send, Code2 } from 'lucide-react'

export function LandingFooter() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50 py-12">
      <div className="grid gap-8 md:grid-cols-4 lg:grid-cols-5">
        <div className="md:col-span-1">
          <div className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-600 text-white">
              <Leaf className="h-4 w-4" />
            </span>
            <span className="font-bold text-gray-900">GreenWork</span>
          </div>
          <p className="mt-2 text-sm text-gray-600">Building sustainable careers across Nigeria.</p>
        </div>

        <div>
          <h4 className="font-semibold text-gray-900">Platform</h4>
          <ul className="mt-3 space-y-2 text-sm text-gray-600">
            <li><a href="#" className="transition hover:text-emerald-600">Find Jobs</a></li>
            <li><a href="#" className="transition hover:text-emerald-600">Post Jobs</a></li>
            <li><a href="#" className="transition hover:text-emerald-600">Browse</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-gray-900">Company</h4>
          <ul className="mt-3 space-y-2 text-sm text-gray-600">
            <li><a href="#" className="transition hover:text-emerald-600">About Us</a></li>
            <li><a href="#" className="transition hover:text-emerald-600">Blog</a></li>
            <li><a href="#" className="transition hover:text-emerald-600">Contact</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-gray-900">Legal</h4>
          <ul className="mt-3 space-y-2 text-sm text-gray-600">
            <li><a href="#" className="transition hover:text-emerald-600">Privacy</a></li>
            <li><a href="#" className="transition hover:text-emerald-600">Terms</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-gray-900">Follow</h4>
          <div className="mt-3 flex gap-4">
            <a href="#" className="text-gray-600 transition hover:text-emerald-600" aria-label="LinkedIn">
              <Globe className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-600 transition hover:text-emerald-600" aria-label="Twitter">
              <Send className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-600 transition hover:text-emerald-600" aria-label="GitHub">
              <Code2 className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-8 border-t border-gray-200 pt-8 text-center text-sm text-gray-600">
        <p>© 2026 GreenWork. All rights reserved. Building sustainable careers across Nigeria.</p>
      </div>
    </footer>
  )
}
