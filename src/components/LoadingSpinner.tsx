'use client'

import { cn } from '@/lib/utils'

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl'
  variant?: 'dots' | 'spinner' | 'pulse' | 'bars' | 'gradient'
  className?: string
  color?: 'blue' | 'purple' | 'green' | 'red' | 'white'
}

export default function LoadingSpinner({ 
  size = 'md', 
  variant = 'spinner',
  className,
  color = 'blue' 
}: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6', 
    lg: 'w-8 h-8',
    xl: 'w-12 h-12'
  }

  const colorClasses = {
    blue: 'text-blue-500 border-blue-500',
    purple: 'text-purple-500 border-purple-500',
    green: 'text-green-500 border-green-500', 
    red: 'text-red-500 border-red-500',
    white: 'text-white border-white'
  }

  if (variant === 'dots') {
    return (
      <div className={cn('loading-dots', className)}>
        <span className={cn('bg-current', colorClasses[color])}></span>
        <span className={cn('bg-current', colorClasses[color])}></span>
        <span className={cn('bg-current', colorClasses[color])}></span>
      </div>
    )
  }

  if (variant === 'pulse') {
    return (
      <div className={cn(
        sizeClasses[size],
        'rounded-full animate-pulse',
        `bg-${color}-500/20`,
        className
      )}>
        <div className={cn(
          'w-full h-full rounded-full animate-ping',
          `bg-${color}-500`
        )} />
      </div>
    )
  }

  if (variant === 'bars') {
    return (
      <div className={cn('flex items-center gap-1', className)}>
        {[0, 1, 2, 3].map(index => (
          <div
            key={index}
            className={cn(
              'w-1 rounded-full animate-pulse',
              `bg-${color}-500`,
              {
                'h-3': size === 'sm',
                'h-4': size === 'md',
                'h-6': size === 'lg',
                'h-8': size === 'xl'
              }
            )}
            style={{
              animationDelay: `${index * 0.1}s`,
              animationDuration: '0.8s'
            }}
          />
        ))}
      </div>
    )
  }

  if (variant === 'gradient') {
    return (
      <div className={cn(
        sizeClasses[size],
        'animate-spin rounded-full',
        'bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500',
        'p-1',
        className
      )}>
        <div className="w-full h-full rounded-full bg-gray-900" />
      </div>
    )
  }

  // Default spinner
  return (
    <div className={cn(
      sizeClasses[size],
      'animate-spin rounded-full border-2 border-transparent',
      `border-t-${color}-500 border-r-${color}-500`,
      colorClasses[color],
      className
    )} />
  )
}

// Skeleton loader component
interface SkeletonProps {
  className?: string
  lines?: number
  avatar?: boolean
}

export function Skeleton({ className, lines = 1, avatar = false }: SkeletonProps) {
  return (
    <div className={cn('animate-pulse', className)}>
      {avatar && (
        <div className="w-12 h-12 bg-gray-700 rounded-full mb-4" />
      )}
      <div className="space-y-3">
        {Array.from({ length: lines }).map((_, index) => (
          <div
            key={index}
            className={cn(
              'h-4 bg-gray-700 rounded skeleton',
              {
                'w-full': index < lines - 1,
                'w-3/4': index === lines - 1
              }
            )}
          />
        ))}
      </div>
    </div>
  )
}

// Progress bar component
interface ProgressBarProps {
  progress: number
  className?: string
  showText?: boolean
  color?: 'blue' | 'green' | 'purple' | 'red'
}

export function ProgressBar({ 
  progress, 
  className, 
  showText = false,
  color = 'blue' 
}: ProgressBarProps) {
  const clampedProgress = Math.max(0, Math.min(100, progress))
  
  return (
    <div className={cn('w-full', className)}>
      {showText && (
        <div className="flex justify-between text-sm text-gray-400 mb-2">
          <span>Progress</span>
          <span>{Math.round(clampedProgress)}%</span>
        </div>
      )}
      <div className="progress-bar">
        <div 
          className={cn(
            'progress-bar-fill transition-all duration-700 ease-out',
            `from-${color}-500 to-${color}-600`
          )}
          style={{ width: `${clampedProgress}%` }}
        />
      </div>
    </div>
  )
}