import { ArrowRight } from 'lucide-react'
import type { FaqItem } from './types'

type FaqSectionProps = {
  items: FaqItem[]
}

export function FaqSection({ items }: FaqSectionProps) {
  return (
    <section className="border-t border-gray-200 py-16 md:py-24">
      <div className="mx-auto max-w-3xl space-y-8">
        <div className="space-y-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Frequently asked questions</h2>
          <p className="text-lg text-gray-600">Find answers to common questions about GreenWork and how to get started.</p>
        </div>

        <div className="space-y-4">
          {items.map((item) => (
            <details
              key={item.question}
              className="group rounded-lg border border-gray-200 bg-white p-6 transition hover:shadow-md open:bg-emerald-50"
            >
              <summary className="flex cursor-pointer items-center justify-between font-semibold text-gray-900">
                {item.question}
                <ArrowRight className="h-5 w-5 transition group-open:rotate-90" />
              </summary>
              <p className="mt-4 text-gray-600">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
