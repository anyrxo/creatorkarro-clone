'use client'

import { useEffect, useRef, useState } from 'react'

interface UseScrollAnimationOptions {
  threshold?: number
  rootMargin?: string
  triggerOnce?: boolean
}

export function useScrollAnimation(options: UseScrollAnimationOptions = {}) {
  const [isVisible, setIsVisible] = useState(false)
  const elementRef = useRef<HTMLDivElement>(null)

  const {
    threshold = 0.1,
    rootMargin = '0px 0px -50px 0px',
    triggerOnce = true
  } = options

  useEffect(() => {
    const element = elementRef.current

    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (triggerOnce) {
            observer.unobserve(element)
          }
        } else if (!triggerOnce) {
          setIsVisible(false)
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
  }, [threshold, rootMargin, triggerOnce])

  return { elementRef, isVisible }
}

export function useScrollAnimations(count: number, options: UseScrollAnimationOptions = {}) {
  const [visibleElements, setVisibleElements] = useState<boolean[]>(new Array(count).fill(false))
  const elementRefs = useRef<(HTMLDivElement | null)[]>(new Array(count).fill(null))

  const {
    threshold = 0.1,
    rootMargin = '0px 0px -50px 0px',
    triggerOnce = true
  } = options

  useEffect(() => {
    const observers: IntersectionObserver[] = []

    elementRefs.current.forEach((element, index) => {
      if (!element) return

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleElements(prev => {
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
              newState[index] = false
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
  }, [threshold, rootMargin, triggerOnce])

  const setElementRef = (index: number) => (ref: HTMLDivElement | null) => {
    elementRefs.current[index] = ref
  }

  return { setElementRef, visibleElements }
}
