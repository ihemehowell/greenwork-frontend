import { CSSProperties } from 'react'

type GlowingShapeProps = {
  position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'center'
  size?: 'small' | 'medium' | 'large'
  color?: 'emerald' | 'green' | 'blue' | 'purple'
  className?: string
}

export function GlowingShape({
  position = 'top-right',
  size = 'large',
  color = 'emerald',
  className = '',
}: GlowingShapeProps) {
  const sizeMap = {
    small: 'w-48 h-48',
    medium: 'w-96 h-96',
    large: 'w-full h-full max-w-2xl max-h-2xl',
  }

  const positionMap = {
    'top-right': '-top-40 -right-40',
    'top-left': '-top-40 -left-40',
    'bottom-right': '-bottom-40 -right-40',
    'bottom-left': '-bottom-40 -left-40',
    center: 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
  }

  const colorMap = {
    emerald: 'from-emerald-400/30 via-emerald-500/20 to-transparent',
    green: 'from-green-400/30 via-green-500/20 to-transparent',
    blue: 'from-blue-400/30 via-blue-500/20 to-transparent',
    purple: 'from-purple-400/30 via-purple-500/20 to-transparent',
  }

  const glowColorMap = {
    emerald: 'shadow-2xl shadow-emerald-500/50',
    green: 'shadow-2xl shadow-green-500/50',
    blue: 'shadow-2xl shadow-blue-500/50',
    purple: 'shadow-2xl shadow-purple-500/50',
  }

  const animationStyle: CSSProperties = {
    animation: 'float 6s ease-in-out infinite',
  }

  return (
    <>
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) scale(1);
            opacity: 0.4;
          }
          50% {
            transform: translateY(-20px) scale(1.05);
            opacity: 0.6;
          }
        }
        
        @keyframes glow {
          0%, 100% {
            filter: blur(40px) brightness(1);
          }
          50% {
            filter: blur(50px) brightness(1.2);
          }
        }

        .animate-glow {
          animation: glow 4s ease-in-out infinite;
        }
      `}</style>
      <div
        className={`
          absolute ${positionMap[position]} ${sizeMap[size]}
          rounded-full bg-gradient-to-br ${colorMap[color]}
          blur-3xl pointer-events-none ${glowColorMap[color]}
          animate-glow ${className}
        `}
        style={animationStyle}
      />
    </>
  )
}
