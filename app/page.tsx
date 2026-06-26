'use client'

import { useRouter } from 'next/navigation'
import { useAuth } from '@/hooks/useAuth'
import { useJobs } from '@/hooks/useJobs'
import { CtaSectionAnimated } from '@/components/landing/cta-section-animated'
import { faqItems, howItWorks, stats, testimonials, valueProps } from '@/components/landing/data'
import { FaqSectionAnimated } from '@/components/landing/faq-section-animated'
import { FeaturesSectionAnimated } from '@/components/landing/features-section-animated'
import { HeroSectionAnimated } from '@/components/landing/hero-section-animated'
import { LandingFooter } from '@/components/landing/landing-footer'
import { LandingHeader } from '@/components/landing/landing-header'
import { NewsletterSectionAnimated } from '@/components/landing/newsletter-section-animated'
import { TestimonialsSectionAnimated } from '@/components/landing/testimonials-section-animated'
import { HowItWorksSectionAnimated } from '@/components/landing/how-it-works-section-animated'
import type { FeaturedJob } from '@/components/landing/types'

export default function Home() {
  const { user, logout, isAuthenticated } = useAuth()
  const { data: jobs, isLoading } = useJobs({ limit: 3 })
  const router = useRouter()

  const featuredJobs = (Array.isArray(jobs?.data) ? jobs.data : []).slice(0, 3) as FeaturedJob[]

  return (
    <main className="min-h-screen bg-white text-gray-900">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <LandingHeader
          isAuthenticated={isAuthenticated}
          userName={user?.fullName || user?.email}
          userRole={user?.role}
          onHome={() => router.push('/')}
          onLogin={() => router.push('/login')}
          onSignup={() => router.push('/signup')}
          onLogout={() => {
            logout()
            router.push('/login')
          }}
        />

        <HeroSectionAnimated
          stats={stats}
          isLoading={isLoading}
          featuredJobs={featuredJobs}
          onExploreJobs={() => router.push('/signup')}
          onSignIn={() => router.push('/login')}
        />

        <FeaturesSectionAnimated valueProps={valueProps} />
        <CtaSectionAnimated onCreateAccount={() => router.push('/signup')} onSignIn={() => router.push('/login')} />
        <HowItWorksSectionAnimated items={howItWorks} />
        <TestimonialsSectionAnimated testimonials={testimonials} />
        <FaqSectionAnimated items={faqItems} />
        <NewsletterSectionAnimated />
        <LandingFooter />
      </div>
    </main>
  )
}
