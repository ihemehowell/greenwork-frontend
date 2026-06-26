import { Briefcase, FileText, Search } from 'lucide-react'
import type { StepItem } from './types'

const icons = [Search, FileText, Briefcase]

type HowItWorksSectionProps = {
  items: StepItem[]
}

export function HowItWorksSection({ items }: HowItWorksSectionProps) {
  return (
    <section className="border-t border-gray-200 py-16 md:py-24">
      <div className="space-y-12">
        <div className="space-y-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">How it works</h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Get started in three simple steps and begin your journey in Nigeria&apos;s growing green sector.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {items.map((item, index) => {
            const Icon = icons[index] ?? Search
            return (
              <div key={item.step} className="relative">
                <div className="h-full rounded-2xl border border-gray-200 bg-white p-8 text-center">
                  <div className="inline-flex rounded-full bg-emerald-100 p-4">
                    <Icon className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div className="absolute -left-4 top-8 inline-flex h-8 w-8 items-center justify-center rounded-full bg-emerald-600 text-sm font-bold text-white">
                    {item.step}
                  </div>
                  <h3 className="mt-6 text-xl font-bold text-gray-900">{item.title}</h3>
                  <p className="mt-3 text-gray-600">{item.description}</p>
                </div>
                {item.step < items.length && (
                  <div className="absolute -right-4 top-1/2 hidden h-1 w-8 -translate-y-1/2 bg-gradient-to-r from-emerald-200 to-transparent md:block" />
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
