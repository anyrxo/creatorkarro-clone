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

  const baseStyles = cn(\n    'relative overflow-hidden font-semibold transition-all duration-300 transform-gpu',\n    'disabled:opacity-50 disabled:cursor-not-allowed',\n    'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500',\n    {\n      // Variants\n      'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg hover:shadow-xl hover:from-blue-700 hover:to-purple-700 hover:-translate-y-1 hover:scale-105': variant === 'primary',\n      'bg-gray-800 text-white border border-gray-700 hover:bg-gray-700 hover:border-gray-600 hover:-translate-y-1': variant === 'secondary',\n      'border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white hover:-translate-y-1': variant === 'outline',\n      'text-gray-300 hover:text-white hover:bg-gray-800 hover:-translate-y-1': variant === 'ghost',\n      \n      // Sizes\n      'px-3 py-1.5 text-sm rounded-md': size === 'sm',\n      'px-6 py-3 text-base rounded-lg': size === 'md',\n      'px-8 py-4 text-lg rounded-xl': size === 'lg',\n    },\n    className\n  )

  const Component = href ? 'a' : 'button'

  return (\n    <Component\n      ref={buttonRef as any}\n      className={baseStyles}\n      onClick={href ? undefined : handleClick}\n      href={href}\n      disabled={disabled || loading}\n    >\n      {/* Shimmer effect */}\n      <div className=\"absolute inset-0 -top-1 -bottom-1 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:animate-shimmer\" />\n      \n      {/* Ripple effects */}\n      {ripples.map(ripple => (\n        <span\n          key={ripple.id}\n          className=\"absolute rounded-full bg-white/30 animate-ping\"\n          style={{\n            left: ripple.x - 10,\n            top: ripple.y - 10,\n            width: 20,\n            height: 20,\n          }}\n        />\n      ))}\n      \n      {/* Content */}\n      <span className={cn('relative z-10 flex items-center justify-center gap-2', {\n        'opacity-0': loading\n      })}>\n        {children}\n      </span>\n      \n      {/* Loading spinner */}\n      {loading && (\n        <div className=\"absolute inset-0 flex items-center justify-center\">\n          <div className=\"loading-dots\">\n            <span></span>\n            <span></span>\n            <span></span>\n          </div>\n        </div>\n      )}\n    </Component>\n  )\n}\n\n// Utility hook for magnetic effect\nexport function useMagneticEffect() {\n  const elementRef = useRef<HTMLElement>(null)\n\n  const handleMouseMove = (e: MouseEvent) => {\n    const element = elementRef.current\n    if (!element) return\n\n    const rect = element.getBoundingClientRect()\n    const x = e.clientX - rect.left - rect.width / 2\n    const y = e.clientY - rect.top - rect.height / 2\n\n    const maxDistance = 50\n    const distance = Math.sqrt(x * x + y * y)\n    \n    if (distance < maxDistance) {\n      const strength = (maxDistance - distance) / maxDistance\n      const moveX = (x / distance) * strength * 10\n      const moveY = (y / distance) * strength * 10\n      \n      element.style.transform = `translate(${moveX}px, ${moveY}px)`\n    } else {\n      element.style.transform = 'translate(0px, 0px)'\n    }\n  }\n\n  const handleMouseLeave = () => {\n    const element = elementRef.current\n    if (!element) return\n    element.style.transform = 'translate(0px, 0px)'\n  }\n\n  return {\n    elementRef,\n    magneticProps: {\n      onMouseMove: handleMouseMove,\n      onMouseLeave: handleMouseLeave,\n      className: 'transition-transform duration-300 ease-out'\n    }\n  }\n}