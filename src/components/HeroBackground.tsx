'use client'

interface HeroBackgroundProps {
  variant?: 'default' | 'footer'
  className?: string
}

/**
 * Animated pulsing background with gradients and grid pattern
 * Shared component used across hero sections and footer to reduce bundle size
 */
export default function HeroBackground({
  variant = 'default',
  className = ''
}: HeroBackgroundProps) {
  // Adjust animation properties based on variant
  const isFooter = variant === 'footer'

  return (
    <>
      {/* Base gradient */}
      <div className={`absolute inset-0 bg-gradient-to-b from-zinc-900 via-black to-zinc-900 ${className}`}></div>

      {/* Pulsing gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Purple-blue orb */}
        <div
          className="absolute rounded-full bg-gradient-to-r blur-2xl animate-pulse"
          style={{
            width: '600px',
            height: '600px',
            left: '10%',
            top: isFooter ? '20%' : '20%',
            background: 'linear-gradient(to right, rgba(147, 51, 234, 0.1), rgba(37, 99, 235, 0.1))',
            animationDuration: '6s',
            opacity: 0.4
          }}
        />

        {/* Pink-purple orb */}
        <div
          className="absolute rounded-full blur-2xl animate-pulse"
          style={{
            width: '500px',
            height: '500px',
            right: '10%',
            bottom: '20%',
            background: 'linear-gradient(to right, rgba(219, 39, 119, 0.08), rgba(147, 51, 234, 0.08))',
            animationDuration: '8s',
            animationDelay: '2s',
            opacity: 0.3
          }}
        />

        {/* Cyan-blue orb */}
        <div
          className="absolute rounded-full blur-xl animate-pulse"
          style={{
            width: '400px',
            height: '400px',
            left: '60%',
            top: isFooter ? '60%' : '60%',
            transform: 'translate(-50%, -50%)',
            background: 'linear-gradient(to right, rgba(34, 197, 94, 0.08), rgba(37, 99, 235, 0.08))',
            animationDuration: '7s',
            animationDelay: '4s',
            opacity: 0.25
          }}
        />
      </div>

      {/* Grid pattern with heartbeat pulse */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Center pulse point */}
        <div
          className="absolute w-3 h-3 rounded-full"
          style={{
            left: '50%',
            top: isFooter ? '40%' : '50%',
            transform: 'translate(-50%, -50%)',
            background: 'rgba(59, 130, 246, 0.6)',
            boxShadow: '0 0 15px rgba(59, 130, 246, 0.4)',
            animation: isFooter ? 'pulse 3s infinite ease-in-out' : 'pulse 2s infinite ease-in-out'
          }}
        />

        {/* Grid lines */}
        <svg className="absolute inset-0 w-full h-full" style={{ opacity: isFooter ? 0.05 : 0.1 }}>
          <defs>
            <pattern
              id={`grid-${variant}`}
              width={isFooter ? '40' : '50'}
              height={isFooter ? '40' : '50'}
              patternUnits="userSpaceOnUse"
            >
              <path
                d={isFooter ? 'M 40 0 L 0 0 0 40' : 'M 50 0 L 0 0 0 50'}
                fill="none"
                stroke="rgba(59, 130, 246, 0.3)"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill={`url(#grid-${variant})`} />
        </svg>

        {/* Radiating lines from center */}
        <div className="absolute inset-0">
          {[...Array(isFooter ? 6 : 8)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-gradient-to-r"
              style={{
                left: '50%',
                top: isFooter ? '40%' : '50%',
                width: isFooter ? '150px' : '200px',
                height: '1px',
                transformOrigin: '0 0',
                transform: `translate(-50%, -50%) rotate(${i * (isFooter ? 60 : 45)}deg)`,
                background: isFooter
                  ? 'linear-gradient(to right, transparent, rgba(59, 130, 246, 0.1), transparent)'
                  : 'linear-gradient(to right, transparent, rgba(59, 130, 246, 0.2), transparent)',
                animation: isFooter
                  ? `pulse 3s infinite ease-in-out ${i * 0.2}s`
                  : `pulse 2s infinite ease-in-out ${i * 0.1}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Floating Elements - only for default variant */}
      {!isFooter && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-20 w-4 h-4 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full animate-bounce opacity-60" style={{animationDuration: '3s'}}></div>
          <div className="absolute top-32 right-32 w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-bounce opacity-50" style={{animationDuration: '4s', animationDelay: '0.5s'}}></div>
          <div className="absolute bottom-40 left-16 w-5 h-5 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full animate-bounce opacity-70" style={{animationDuration: '3.5s', animationDelay: '1s'}}></div>
          <div className="absolute bottom-32 right-20 w-2 h-2 bg-gradient-to-r from-green-400 to-teal-400 rounded-full animate-bounce opacity-60" style={{animationDuration: '4.5s', animationDelay: '1.5s'}}></div>
        </div>
      )}
    </>
  )
}
