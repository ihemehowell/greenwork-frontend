import { Star } from 'lucide-react'
import type { Testimonial } from './types'
import { AnimateOnView } from './animations'

type TestimonialsSectionAnimatedProps = {
  testimonials: Testimonial[]
}

export function TestimonialsSectionAnimated({ testimonials }: TestimonialsSectionAnimatedProps) {
  return (
    <section className="border-t border-gray-200 bg-gray-50 py-16 md:py-24">
      <div className="space-y-12">
        <AnimateOnView animation="fade-in">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Success stories from our community</h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              Hear from professionals who found their dream roles through GreenWork.
            </p>
          </div>
        </AnimateOnView>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <AnimateOnView
              key={testimonial.name}
              animation="slide-up"
              delay={index * 100}
            >
              <div className="rounded-2xl border border-gray-200 bg-white p-8">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-sm font-bold text-emerald-700">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <div className="mt-4 flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="mt-4 text-gray-600 italic">&quot;{testimonial.text}&quot;</p>
                <p className="mt-4 text-sm font-medium text-emerald-600">{testimonial.company}</p>
              </div>
            </AnimateOnView>
          ))}
        </div>
      </div>
    </section>
  )
}
