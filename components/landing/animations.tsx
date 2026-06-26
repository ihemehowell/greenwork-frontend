import { useInView } from '@/hooks/useInView'
import { ReactNode } from 'react'

type AnimationType = 'fade-in' | 'slide-up' | 'slide-down' | 'slide-left' | 'slide-right' | 'zoom-in' | 'bounce-in'

type AnimateOnViewProps = {
  children: ReactNode
  animation?: AnimationType
  delay?: number
  className?: string
}

export function AnimateOnView({
  children,
  animation = 'fade-in',
  delay = 0,
  className = '',
}: AnimateOnViewProps) {
  const { ref, isInView } = useInView()

  const animationClasses: Record<AnimationType, string> = {
    'fade-in': 'opacity-0',
    'slide-up': 'opacity-0 translate-y-8',
    'slide-down': 'opacity-0 -translate-y-8',
    'slide-left': 'opacity-0 translate-x-8',
    'slide-right': 'opacity-0 -translate-x-8',
    'zoom-in': 'opacity-0 scale-95',
    'bounce-in': 'opacity-0 scale-90',
  }

  const animationDurationClasses: Record<AnimationType, string> = {
    'fade-in': 'duration-600',
    'slide-up': 'duration-700',
    'slide-down': 'duration-700',
    'slide-left': 'duration-700',
    'slide-right': 'duration-700',
    'zoom-in': 'duration-500',
    'bounce-in': 'duration-500',
  }

  return (
    <div
      ref={ref}
      className={`
        transition-all ease-out
        ${animationDurationClasses[animation]}
        ${isInView ? 'opacity-100 translate-y-0 translate-x-0 scale-100' : animationClasses[animation]}
        ${className}
      `}
      style={{
        transitionDelay: isInView ? `${delay}ms` : '0ms',
      }}
    >
      {children}
    </div>
  )
}
