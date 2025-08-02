'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

interface PageTransitionProps {
  children: React.ReactNode
}

export default function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname()
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [displayChildren, setDisplayChildren] = useState(children)

  useEffect(() => {
    setIsTransitioning(true)
    
    const timer = setTimeout(() => {
      setDisplayChildren(children)
      setIsTransitioning(false)
    }, 600)

    return () => clearTimeout(timer)
  }, [pathname, children])

  return (
    <>
      {/* Transition overlay */}
      <div
        className={cn(
          'fixed inset-0 z-50 pointer-events-none',
          'bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600',
          'transition-all duration-600 ease-in-out',
          isTransitioning ? 'opacity-100' : 'opacity-0'
        )}
      >
        <div className="absolute inset-0 bg-black/50" />
        
        {/* Animated elements */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className={cn(
            'flex gap-4',
            'transition-all duration-600 delay-200',
            isTransitioning ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
          )}>
            <div className="w-4 h-4 bg-white rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
            <div className="w-4 h-4 bg-white rounded-full animate-bounce" style={{ animationDelay: '100ms' }} />
            <div className="w-4 h-4 bg-white rounded-full animate-bounce" style={{ animationDelay: '200ms' }} />
          </div>
        </div>

        {/* Sliding panels */}
        <div className={cn(
          'absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-blue-600 to-transparent',
          'transition-transform duration-600 ease-in-out',
          isTransitioning ? 'translate-x-0' : '-translate-x-full'
        )} />
        <div className={cn(
          'absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-pink-600 to-transparent',
          'transition-transform duration-600 ease-in-out delay-100',
          isTransitioning ? 'translate-x-0' : 'translate-x-full'
        )} />
      </div>

      {/* Page content */}
      <div className={cn(
        'transition-all duration-600 ease-out',
        isTransitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
      )}>
        {displayChildren}
      </div>
    </>
  )
}

// Route loading indicator
export function RouteLoader() {
  const [progress, setProgress] = useState(0)
  const pathname = usePathname()

  useEffect(() => {
    setProgress(0)
    
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 90) {
          clearInterval(interval)
          return prev
        }
        return prev + Math.random() * 30
      })
    }, 100)

    const completeTimer = setTimeout(() => {
      setProgress(100)
      clearInterval(interval)
    }, 600)

    return () => {
      clearInterval(interval)
      clearTimeout(completeTimer)
    }
  }, [pathname])

  useEffect(() => {
    if (progress === 100) {
      const timer = setTimeout(() => setProgress(0), 400)
      return () => clearTimeout(timer)
    }
  }, [progress])

  if (progress === 0) return null

  return (
    <div className="fixed top-0 left-0 w-full h-1 z-[60] overflow-hidden">
      <div
        className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition-all duration-300 ease-out"
        style={{ 
          width: `${progress}%`,
          boxShadow: '0 0 10px rgba(59, 130, 246, 0.8)'
        }}
      />
    </div>
  )
}