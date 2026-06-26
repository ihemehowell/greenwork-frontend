import { Mail } from 'lucide-react'

export function NewsletterSection() {
  return (
    <section className="border-t border-gray-200 py-12 md:py-16">
      <div className="rounded-2xl bg-emerald-600 px-8 py-12 text-center md:px-12">
        <h3 className="text-2xl font-bold text-white sm:text-3xl">Stay updated on green jobs</h3>
        <p className="mx-auto mt-3 max-w-xl text-emerald-100">
          Subscribe to our newsletter for weekly updates on the latest opportunities in Nigeria&apos;s green sector.
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="rounded-lg border-0 px-4 py-3 text-gray-900 placeholder-gray-500 outline-none focus:ring-2 focus:ring-white"
          />
          <button className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-3 font-semibold text-emerald-600 transition hover:bg-gray-50">
            <Mail className="h-4 w-4" />
            Subscribe
          </button>
        </div>
      </div>
    </section>
  )
}
