'use client'

import { useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'

interface ScrollAnimationProps {
  children: React.ReactNode
  className?: string
  animation?: 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'scale' | 'rotate' | 'blur' | 'slide' | 'bounce'
  delay?: number
  duration?: number
  threshold?: number
  once?: boolean
}

export default function ScrollAnimation({
  children,
  className,
  animation = 'fade-up',
  delay = 0,
  duration = 800,
  threshold = 0.1,
  once = true
}: ScrollAnimationProps) {
  const [isVisible, setIsVisible] = useState(false)
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (once && elementRef.current) {
            observer.unobserve(elementRef.current)
          }
        } else if (!once) {
          setIsVisible(false)
        }
      },
      { threshold, rootMargin: '0px 0px -50px 0px' }
    )

    if (elementRef.current) {
      observer.observe(elementRef.current)
    }

    return () => observer.disconnect()
  }, [threshold, once])

  const getAnimationClasses = () => {
    const baseClasses = 'transition-all ease-out'
    const hiddenClasses = {
      'fade-up': 'opacity-0 translate-y-10',
      'fade-down': 'opacity-0 -translate-y-10',
      'fade-left': 'opacity-0 translate-x-10',
      'fade-right': 'opacity-0 -translate-x-10',
      'scale': 'opacity-0 scale-95',
      'rotate': 'opacity-0 rotate-12',
      'blur': 'opacity-0 blur-sm',
      'slide': 'opacity-0 translate-x-full',
      'bounce': 'opacity-0 translate-y-10'
    }

    const visibleClasses = {
      'fade-up': 'opacity-100 translate-y-0',
      'fade-down': 'opacity-100 translate-y-0',
      'fade-left': 'opacity-100 translate-x-0',
      'fade-right': 'opacity-100 translate-x-0',
      'scale': 'opacity-100 scale-100',
      'rotate': 'opacity-100 rotate-0',
      'blur': 'opacity-100 blur-0',
      'slide': 'opacity-100 translate-x-0',
      'bounce': 'opacity-100 translate-y-0 animate-bounce'
    }

    return cn(
      baseClasses,
      isVisible ? visibleClasses[animation] : hiddenClasses[animation]
    )
  }

  return (
    <div
      ref={elementRef}
      className={cn(getAnimationClasses(), className)}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`
      }}
    >
      {children}
    </div>
  )
}

// Staggered animation wrapper
interface StaggeredAnimationProps {
  children: React.ReactNode[]
  className?: string
  staggerDelay?: number
  animation?: ScrollAnimationProps['animation']
}

export function StaggeredAnimation({
  children,
  className,
  staggerDelay = 100,
  animation = 'fade-up'
}: StaggeredAnimationProps) {
  return (
    <div className={className}>
      {children.map((child, index) => (
        <ScrollAnimation
          key={index}
          animation={animation}
          delay={index * staggerDelay}
        >
          {child}
        </ScrollAnimation>
      ))}
    </div>
  )
}

// Parallax scrolling component
interface ParallaxProps {
  children: React.ReactNode
  className?: string
  speed?: number
  offset?: number
}

export function Parallax({
  children,
  className,
  speed = 0.5,
  offset = 0
}: ParallaxProps) {
  const [translateY, setTranslateY] = useState(0)
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!elementRef.current) return

      const rect = elementRef.current.getBoundingClientRect()
      const windowHeight = window.innerHeight
      const elementTop = rect.top
      const elementHeight = rect.height

      // Calculate if element is in viewport
      if (elementTop < windowHeight && elementTop + elementHeight > 0) {
        const scrollProgress = (windowHeight - elementTop) / (windowHeight + elementHeight)
        const parallaxOffset = (scrollProgress - 0.5) * 2 * 100 * speed + offset
        setTranslateY(parallaxOffset)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Initial calculation

    return () => window.removeEventListener('scroll', handleScroll)
  }, [speed, offset])

  return (
    <div
      ref={elementRef}
      className={cn('will-change-transform', className)}
      style={{
        transform: `translateY(${translateY}px)`
      }}
    >
      {children}
    </div>
  )
}

// Text scramble animation
interface TextScrambleProps {
  text: string
  className?: string
  scrambleSpeed?: number
  revealSpeed?: number
}

export function TextScramble({
  text,
  className,
  scrambleSpeed = 50,
  revealSpeed = 100
}: TextScrambleProps) {
  const [displayText, setDisplayText] = useState(text)
  const [isScrambling, setIsScrambling] = useState(false)
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isScrambling) {
          setIsScrambling(true)
          scrambleText()
        }
      },
      { threshold: 0.5 }
    )

    if (elementRef.current) {
      observer.observe(elementRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const scrambleText = () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*'
    let iterations = 0
    
    const interval = setInterval(() => {
      setDisplayText(
        text
          .split('')
          .map((char, index) => {
            if (index < iterations) {
              return text[index]
            }
            return chars[Math.floor(Math.random() * chars.length)]
          })
          .join('')
      )

      iterations += 1 / 3

      if (iterations >= text.length) {
        clearInterval(interval)
        setDisplayText(text)
      }
    }, scrambleSpeed)
  }

  return (
    <div ref={elementRef} className={className}>
      {displayText}
    </div>
  )
}

// Count up animation
interface CountUpProps {
  end: number
  start?: number
  duration?: number
  suffix?: string
  prefix?: string
  className?: string
  decimals?: number
}

export function CountUp({
  end,
  start = 0,
  duration = 2000,
  suffix = '',
  prefix = '',
  className,
  decimals = 0
}: CountUpProps) {
  const [count, setCount] = useState(start)
  const [isVisible, setIsVisible] = useState(false)
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
          animateCount()
        }
      },
      { threshold: 0.5 }
    )

    if (elementRef.current) {
      observer.observe(elementRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const animateCount = () => {
    const startTime = Date.now()
    const endTime = startTime + duration

    const update = () => {
      const now = Date.now()
      const progress = Math.min((now - startTime) / duration, 1)
      
      // Easing function
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      const currentCount = start + (end - start) * easeOutQuart

      setCount(currentCount)

      if (progress < 1) {
        requestAnimationFrame(update)
      }
    }

    requestAnimationFrame(update)
  }

  return (
    <div ref={elementRef} className={className}>
      {prefix}{count.toFixed(decimals)}{suffix}
    </div>
  )
}