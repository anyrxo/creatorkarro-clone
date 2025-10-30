'use client'

import { useState, useRef } from 'react'
import { cn } from '@/lib/utils'

interface EnhancedButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  onClick?: () => void
  disabled?: boolean
  loading?: boolean
  href?: string
}

export default function EnhancedButton({
  children,
  variant = 'primary',
  size = 'md',
  className,
  onClick,
  disabled = false,
  loading = false,
  href
}: EnhancedButtonProps) {
  const [ripples, setRipples] = useState<Array<{ x: number; y: number; id: number }>>([])
  const buttonRef = useRef<HTMLButtonElement>(null)

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (disabled || loading) return

    const button = buttonRef.current
    if (!button) return

    const rect = button.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const newRipple = {
      x,
      y,
      id: Date.now()
    }

    setRipples(prev => [...prev, newRipple])

    // Remove ripple after animation
    setTimeout(() => {
      setRipples(prev => prev.filter(ripple => ripple.id !== newRipple.id))
    }, 600)

    if (onClick) onClick()
  }

  const baseStyles = cn(
    'relative overflow-hidden font-semibold transition-all duration-300 transform-gpu',
    'disabled:opacity-50 disabled:cursor-not-allowed',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 focus-visible:ring-offset-zinc-900',
    {
      // Variants
      'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg hover:shadow-xl hover:from-blue-700 hover:to-purple-700 hover:-translate-y-1 hover:scale-105': variant === 'primary',
      'bg-gray-800 text-white border border-gray-700 hover:bg-gray-700 hover:border-gray-600 hover:-translate-y-1': variant === 'secondary',
      'border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white hover:-translate-y-1': variant === 'outline',
      'text-gray-300 hover:text-white hover:bg-gray-800 hover:-translate-y-1': variant === 'ghost',
      
      // Sizes
      'px-3 py-1.5 text-sm rounded-md': size === 'sm',
      'px-6 py-3 text-base rounded-lg': size === 'md',
      'px-8 py-4 text-lg rounded-xl': size === 'lg',
    },
    className
  )

  const Component = href ? 'a' : 'button'

  return (
    <Component
      ref={buttonRef as any}
      className={baseStyles}
      onClick={href ? undefined : (handleClick as any)}
      href={href}
      disabled={disabled || loading}
    >
      {/* Shimmer effect */}
      <div className="absolute inset-0 -top-1 -bottom-1 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:animate-shimmer" />
      
      {/* Ripple effects */}
      {ripples.map(ripple => (
        <span
          key={ripple.id}
          className="absolute rounded-full bg-white/30 animate-ping"
          style={{
            left: ripple.x - 10,
            top: ripple.y - 10,
            width: 20,
            height: 20,
          }}
        />
      ))}
      
      {/* Content */}
      <span className={cn('relative z-10 flex items-center justify-center gap-2', {
        'opacity-0': loading
      })}>
        {children}
      </span>
      
      {/* Loading spinner */}
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="loading-dots">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      )}
    </Component>
  )
}

// Utility hook for magnetic effect
export function useMagneticEffect() {
  const elementRef = useRef<HTMLElement>(null)

  const handleMouseMove = (e: MouseEvent) => {
    const element = elementRef.current
    if (!element) return

    const rect = element.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2

    const maxDistance = 50
    const distance = Math.sqrt(x * x + y * y)
    
    if (distance < maxDistance) {
      const strength = (maxDistance - distance) / maxDistance
      const moveX = (x / distance) * strength * 10
      const moveY = (y / distance) * strength * 10
      
      element.style.transform = `translate(${moveX}px, ${moveY}px)`
    } else {
      element.style.transform = 'translate(0px, 0px)'
    }
  }

  const handleMouseLeave = () => {
    const element = elementRef.current
    if (!element) return
    element.style.transform = 'translate(0px, 0px)'
  }

  return {
    elementRef,
    magneticProps: {
      onMouseMove: handleMouseMove,
      onMouseLeave: handleMouseLeave,
      className: 'transition-transform duration-300 ease-out'
    }
  }
}