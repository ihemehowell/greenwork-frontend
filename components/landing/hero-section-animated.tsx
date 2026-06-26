import { ArrowRight, BarChart3, BriefcaseBusiness, MapPin, Users } from 'lucide-react'
import type { FeaturedJob, LandingStat } from './types'
import { AnimateOnView } from './animations'

type HeroSectionAnimatedProps = {
  stats: LandingStat[]
  isLoading: boolean
  featuredJobs: FeaturedJob[]
  onExploreJobs: () => void
  onSignIn: () => void
}

export function HeroSectionAnimated({
  stats,
  isLoading,
  featuredJobs,
  onExploreJobs,
  onSignIn,
}: HeroSectionAnimatedProps) {
  return (
    <section className="py-16 md:py-24">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div className="space-y-8">
          <AnimateOnView animation="fade-in" delay={0}>
            <div className="space-y-4">
              <div className="inline-block rounded-full bg-emerald-50 px-4 py-2">
                <span className="text-sm font-semibold text-emerald-700">Careers in Sustainability</span>
              </div>
              <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl lg:text-6xl">
                Build a career with purpose
              </h1>
              <p className="text-lg text-gray-600 sm:text-xl">
                Connect with leading employers in Nigeria&apos;s green sector. Find roles in renewable energy,
                sustainability, and climate tech.
              </p>
            </div>
          </AnimateOnView>

          <AnimateOnView animation="slide-up" delay={100}>
            <div className="flex flex-col gap-4 sm:flex-row">
              <button
                onClick={onExploreJobs}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700"
              >
                Explore Jobs
                <ArrowRight className="h-4 w-4" />
              </button>
              <button
                onClick={onSignIn}
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-900 transition hover:border-gray-400 hover:bg-gray-50"
              >
                Sign In
              </button>
            </div>
          </AnimateOnView>

          <AnimateOnView animation="slide-up" delay={200}>
            <div className="grid gap-4 pt-4 sm:grid-cols-3">
              {stats.map((stat, index) => (
                <AnimateOnView key={stat.label} animation="zoom-in" delay={300 + index * 50}>
                  <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
                    <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                    <p className="mt-1 text-sm text-gray-600">{stat.label}</p>
                  </div>
                </AnimateOnView>
              ))}
            </div>
          </AnimateOnView>
        </div>

        <AnimateOnView animation="slide-left" delay={150} className="h-full">
          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-8">
            <div className="mb-8 space-y-2">
              <h2 className="text-2xl font-bold text-gray-900">Featured Roles</h2>
              <p className="text-sm text-gray-600">{isLoading ? 'Loading opportunities...' : `${featuredJobs.length} active positions`}</p>
            </div>

            <div id="jobs" className="space-y-4">
              {isLoading ? (
                <div className="rounded-lg bg-white p-6 text-center text-sm text-gray-500">Loading opportunities...</div>
              ) : featuredJobs.length > 0 ? (
                featuredJobs.map((job, index) => (
                  <AnimateOnView
                    key={job._id}
                    animation="slide-up"
                    delay={400 + index * 75}
                  >
                    <div className="rounded-lg border border-gray-200 bg-white p-5 transition hover:shadow-md">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1 space-y-3">
                          <div className="flex flex-wrap gap-2">
                            {job.category && (
                              <span className="inline-block rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-700">
                                {job.category}
                              </span>
                            )}
                            {job.location && (
                              <span className="inline-flex items-center gap-1 rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-600">
                                <MapPin className="h-3.5 w-3.5" />
                                {job.location}
                              </span>
                            )}
                          </div>
                          <h3 className="font-semibold text-gray-900">{job.title}</h3>
                          <p className="line-clamp-2 text-sm text-gray-600">{job.description}</p>
                        </div>
                        <BriefcaseBusiness className="h-5 w-5 shrink-0 text-emerald-600" />
                      </div>
                    </div>
                  </AnimateOnView>
                ))
              ) : (
                <div className="rounded-lg bg-white p-6 text-center text-sm text-gray-500">
                  No positions available at this time.
                </div>
              )}
            </div>

            <div className="mt-6 grid gap-4 border-t border-gray-200 pt-6 sm:grid-cols-2">
              <AnimateOnView animation="zoom-in" delay={500}>
                <div className="rounded-lg bg-white p-4">
                  <p className="flex items-center gap-2 text-sm text-gray-600">
                    <Users className="h-4 w-4 text-emerald-600" />
                    Trusted by employers
                  </p>
                  <p className="mt-2 text-2xl font-bold text-gray-900">40+</p>
                </div>
              </AnimateOnView>
              <AnimateOnView animation="zoom-in" delay={550}>
                <div className="rounded-lg bg-white p-4">
                  <p className="flex items-center gap-2 text-sm text-gray-600">
                    <BarChart3 className="h-4 w-4 text-emerald-600" />
                    Placement rate
                  </p>
                  <p className="mt-2 text-2xl font-bold text-gray-900">85%</p>
                </div>
              </AnimateOnView>
            </div>
          </div>
        </AnimateOnView>
      </div>
    </section>
  )
}
