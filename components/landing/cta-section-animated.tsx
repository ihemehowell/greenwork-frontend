import { AnimateOnView } from './animations'

type CtaSectionAnimatedProps = {
  onCreateAccount: () => void
  onSignIn: () => void
}

export function CtaSectionAnimated({ onCreateAccount, onSignIn }: CtaSectionAnimatedProps) {
  return (
    <section className="border-t border-gray-200 py-16 md:py-24">
      <AnimateOnView animation="slide-up">
        <div className="rounded-2xl bg-linear-to-br from-emerald-50 to-green-50 px-8 py-16 text-center md:px-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Ready to find your next opportunity?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Join hundreds of professionals building careers in sustainability and renewable energy.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <button
              onClick={onCreateAccount}
              className="rounded-lg bg-emerald-600 px-8 py-3 text-sm font-semibold text-white transition hover:bg-emerald-700"
            >
              Create Account
            </button>
            <button
              onClick={onSignIn}
              className="rounded-lg border border-emerald-600 bg-white px-8 py-3 text-sm font-semibold text-emerald-600 transition hover:bg-emerald-50"
            >
              Sign In to Continue
            </button>
          </div>
        </div>
      </AnimateOnView>
    </section>
  )
}
