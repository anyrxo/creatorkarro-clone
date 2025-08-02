'use client'

import { useEffect, useRef, useState, useCallback } from 'react'

interface UseIntersectionObserverOptions {
  threshold?: number | number[]
  rootMargin?: string
  triggerOnce?: boolean
  skip?: boolean
}

export function useIntersectionObserver(options: UseIntersectionObserverOptions = {}) {
  const [isVisible, setIsVisible] = useState(false)
  const [hasTriggered, setHasTriggered] = useState(false)
  const elementRef = useRef<HTMLElement>(null)

  const {
    threshold = 0.1,
    rootMargin = '0px 0px -50px 0px',
    triggerOnce = true,
    skip = false
  } = options

  useEffect(() => {
    const element = elementRef.current

    if (!element || skip) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        const isIntersecting = entry.isIntersecting

        if (isIntersecting && (!triggerOnce || !hasTriggered)) {
          setIsVisible(true)
          setHasTriggered(true)
          
          if (triggerOnce) {
            observer.unobserve(element)
          }
        } else if (!triggerOnce) {
          setIsVisible(isIntersecting)
        }
      },
      {
        threshold,
        rootMargin
      }
    )

    observer.observe(element)

    return () => {
      observer.unobserve(element)
    }
  }, [threshold, rootMargin, triggerOnce, skip, hasTriggered])

  return { elementRef, isVisible, hasTriggered }
}

// Hook for multiple elements
export function useIntersectionObserverMultiple(count: number, options: UseIntersectionObserverOptions = {}) {
  const [visibleElements, setVisibleElements] = useState<boolean[]>(new Array(count).fill(false))
  const [triggeredElements, setTriggeredElements] = useState<boolean[]>(new Array(count).fill(false))
  const elementRefs = useRef<(HTMLElement | null)[]>(new Array(count).fill(null))

  const {
    threshold = 0.1,
    rootMargin = '0px 0px -50px 0px',
    triggerOnce = true,
    skip = false
  } = options

  useEffect(() => {
    if (skip) return

    const observers: IntersectionObserver[] = []

    elementRefs.current.forEach((element, index) => {
      if (!element) return

      const observer = new IntersectionObserver(
        ([entry]) => {
          const isIntersecting = entry.isIntersecting

          if (isIntersecting && (!triggerOnce || !triggeredElements[index])) {
            setVisibleElements(prev => {
              const newState = [...prev]
              newState[index] = true
              return newState
            })
            
            setTriggeredElements(prev => {
              const newState = [...prev]
              newState[index] = true
              return newState
            })
            
            if (triggerOnce) {
              observer.unobserve(element)
            }
          } else if (!triggerOnce) {
            setVisibleElements(prev => {
              const newState = [...prev]
              newState[index] = isIntersecting
              return newState
            })
          }
        },
        {
          threshold,
          rootMargin
        }
      )

      observer.observe(element)
      observers.push(observer)
    })

    return () => {
      observers.forEach(observer => observer.disconnect())
    }
  }, [threshold, rootMargin, triggerOnce, skip, triggeredElements])

  const setElementRef = useCallback((index: number) => (element: HTMLElement | null) => {
    elementRefs.current[index] = element
  }, [])

  return { setElementRef, visibleElements, triggeredElements }
}

// Hook for parallax effects
export function useParallax() {
  const [offset, setOffset] = useState(0)
  const elementRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!elementRef.current) return

      const rect = elementRef.current.getBoundingClientRect()
      const scrolled = window.pageYOffset
      const rate = scrolled * -0.5
      
      setOffset(rate)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return { elementRef, offset }
}

// Hook for magnetic mouse effect
export function useMagneticEffect(strength = 0.3) {
  const elementRef = useRef<HTMLElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!elementRef.current) return

    const rect = elementRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    
    const deltaX = (e.clientX - centerX) * strength
    const deltaY = (e.clientY - centerY) * strength
    
    setPosition({ x: deltaX, y: deltaY })
  }, [strength])

  const handleMouseLeave = useCallback(() => {
    setPosition({ x: 0, y: 0 })
  }, [])

  const magneticProps = {
    onMouseMove: handleMouseMove,
    onMouseLeave: handleMouseLeave,
    style: {
      transform: `translate(${position.x}px, ${position.y}px)`,
      transition: 'transform 0.3s cubic-bezier(0.23, 1, 0.32, 1)'
    }
  }

  return { elementRef, magneticProps }
}

// Hook for scroll-triggered counter animation  
export function useCounterAnimation(endValue: number, duration = 2000) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const elementRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
        }
      },
      { threshold: 0.5 }
    )

    if (elementRef.current) {
      observer.observe(elementRef.current)
    }

    return () => observer.disconnect()
  }, [isVisible])

  useEffect(() => {
    if (!isVisible) return

    const startTime = Date.now()
    const startValue = 0

    const animate = () => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)
      
      // Easing function (ease-out cubic)
      const easeOut = 1 - Math.pow(1 - progress, 3)
      const currentValue = Math.floor(startValue + (endValue - startValue) * easeOut)
      
      setCount(currentValue)
      
      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }
    
    animate()
  }, [isVisible, endValue, duration])

  return { elementRef, count }
}