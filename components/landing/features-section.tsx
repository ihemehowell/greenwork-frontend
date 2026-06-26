import { CheckCircle2, Leaf, TrendingUp } from 'lucide-react'
import type { ValueProp } from './types'

const icons = [CheckCircle2, Leaf, TrendingUp]

type FeaturesSectionProps = {
  valueProps: ValueProp[]
}

export function FeaturesSection({ valueProps }: FeaturesSectionProps) {
  return (
    <section id="features" className="border-t border-gray-200 py-16 md:py-24">
      <div className="space-y-12">
        <div className="space-y-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Why choose GreenWork?</h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            We&apos;re building a marketplace that connects talent with purpose in Nigeria&apos;s growing green sector.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {valueProps.map((item, index) => {
            const Icon = icons[index] ?? CheckCircle2
            return (
              <div key={item.title} className="rounded-xl border border-gray-200 bg-white p-8 transition hover:shadow-lg">
                <div className="inline-flex rounded-lg bg-emerald-100 p-3">
                  <Icon className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="mt-6 text-xl font-bold text-gray-900">{item.title}</h3>
                <p className="mt-3 text-gray-600">{item.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
