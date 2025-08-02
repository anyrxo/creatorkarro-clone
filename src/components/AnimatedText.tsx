'use client'

import { useState, useEffect, useRef } from 'react'
import { cn } from '@/lib/utils'

interface AnimatedTextProps {
  children: string
  className?: string
  animation?: 'fade' | 'slide' | 'reveal' | 'typewriter' | 'counter'
  delay?: number
  duration?: number
  stagger?: number
  countTo?: number
  suffix?: string
}

export default function AnimatedText({
  children,
  className,
  animation = 'fade',
  delay = 0,
  duration = 1000,
  stagger = 100,
  countTo,
  suffix = ''
}: AnimatedTextProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [currentCount, setCurrentCount] = useState(0)
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay)
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    if (elementRef.current) {
      observer.observe(elementRef.current)
    }

    return () => observer.disconnect()
  }, [delay])

  // Counter animation
  useEffect(() => {
    if (animation === 'counter' && isVisible && countTo) {
      const startTime = Date.now()
      const startValue = 0
      const change = countTo - startValue

      const animate = () => {
        const elapsed = Date.now() - startTime
        const progress = Math.min(elapsed / duration, 1)
        
        // Easing function (ease-out)
        const easeOut = 1 - Math.pow(1 - progress, 3)
        const currentValue = Math.floor(startValue + change * easeOut)
        
        setCurrentCount(currentValue)
        
        if (progress < 1) {
          requestAnimationFrame(animate)
        }
      }
      
      animate()
    }
  }, [isVisible, countTo, duration, animation])

  const renderTypewriter = () => {
    if (!isVisible) return null
    
    return (
      <span className={cn('typewriter', className)}>
        {children}
      </span>
    )
  }

  const renderReveal = () => {
    const words = children.split(' ')
    
    return (
      <span className={cn('text-reveal', className)}>
        {words.map((word, index) => (
          <span
            key={index}
            className={cn(
              'inline-block overflow-hidden',
              {
                'animate-[text-reveal_1.2s_cubic-bezier(0.77,0,0.175,1)_forwards]': isVisible
              }
            )}
            style={{
              animationDelay: `${index * stagger}ms`
            }}
          >
            <span className="inline-block">
              {word}{index < words.length - 1 ? '\u00A0' : ''}
            </span>
          </span>
        ))}
      </span>
    )
  }

  const renderStaggered = () => {
    const letters = children.split('')
    
    return (
      <span className={className}>
        {letters.map((letter, index) => (
          <span
            key={index}
            className={cn(
              'inline-block transition-all duration-700 ease-out',
              'transform-gpu',
              {
                'translate-y-0 opacity-100': isVisible,
                'translate-y-8 opacity-0': !isVisible,
              }
            )}
            style={{
              transitionDelay: `${delay + index * stagger}ms`
            }}
          >
            {letter === ' ' ? '\u00A0' : letter}
          </span>
        ))}
      </span>
    )
  }

  const renderCounter = () => {
    return (
      <span className={className}>
        {currentCount.toLocaleString()}{suffix}
      </span>
    )
  }

  const renderBasic = () => {
    return (
      <span
        className={cn(
          'block transition-all duration-700 ease-out transform-gpu',
          {
            'translate-y-0 opacity-100': isVisible,
            'translate-y-8 opacity-0': !isVisible,
            'translate-x-0': animation === 'slide' && isVisible,
            '-translate-x-8': animation === 'slide' && !isVisible,
          },
          className
        )}
        style={{
          transitionDelay: `${delay}ms`
        }}
      >
        {children}
      </span>
    )
  }

  return (
    <div ref={elementRef} className="relative">
      {animation === 'typewriter' && renderTypewriter()}
      {animation === 'reveal' && renderReveal()}
      {animation === 'counter' && renderCounter()}
      {(animation === 'fade' || animation === 'slide') && renderBasic()}
      {!['typewriter', 'reveal', 'counter', 'fade', 'slide'].includes(animation) && renderStaggered()}
    </div>
  )
}

// Gradient text component
interface GradientTextProps {
  children: React.ReactNode
  className?: string
  gradient?: 'primary' | 'secondary' | 'rainbow' | 'sunset'
}

export function GradientText({ children, className, gradient = 'primary' }: GradientTextProps) {
  const gradients = {
    primary: 'from-blue-400 via-purple-500 to-pink-500',
    secondary: 'from-green-400 to-blue-500',
    rainbow: 'from-red-500 via-yellow-500 via-green-500 via-blue-500 to-purple-500',
    sunset: 'from-orange-400 via-red-500 to-pink-500'
  }

  return (
    <span className={cn(
      'bg-gradient-to-r bg-clip-text text-transparent animated-gradient',
      gradients[gradient],
      className
    )}>
      {children}
    </span>
  )
}

// Glitch text component
interface GlitchTextProps {
  children: string
  className?: string
}

export function GlitchText({ children, className }: GlitchTextProps) {
  return (
    <span className={cn('relative inline-block', className)}>
      <span className="relative z-10">{children}</span>
      <span 
        className="absolute top-0 left-0 text-red-500 -z-10 glitch"
        aria-hidden="true"
      >
        {children}
      </span>
      <span 
        className="absolute top-0 left-0 text-blue-500 -z-20 glitch"
        aria-hidden="true"
        style={{ animationDelay: '0.1s' }}
      >
        {children}
      </span>
    </span>
  )
}