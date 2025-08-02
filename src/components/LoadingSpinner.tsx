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
      <div className={cn(\n        sizeClasses[size],\n        'rounded-full animate-pulse',\n        `bg-${color}-500/20`,\n        className\n      )}>\n        <div className={cn(\n          'w-full h-full rounded-full animate-ping',\n          `bg-${color}-500`\n        )} />\n      </div>\n    )\n  }\n\n  if (variant === 'bars') {\n    return (\n      <div className={cn('flex items-center gap-1', className)}>\n        {[0, 1, 2, 3].map(index => (\n          <div\n            key={index}\n            className={cn(\n              'w-1 rounded-full animate-pulse',\n              `bg-${color}-500`,\n              {\n                'h-3': size === 'sm',\n                'h-4': size === 'md',\n                'h-6': size === 'lg',\n                'h-8': size === 'xl'\n              }\n            )}\n            style={{\n              animationDelay: `${index * 0.1}s`,\n              animationDuration: '0.8s'\n            }}\n          />\n        ))}\n      </div>\n    )\n  }\n\n  if (variant === 'gradient') {\n    return (\n      <div className={cn(\n        sizeClasses[size],\n        'animate-spin rounded-full',\n        'bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500',\n        'p-1',\n        className\n      )}>\n        <div className=\"w-full h-full rounded-full bg-gray-900\" />\n      </div>\n    )\n  }\n\n  // Default spinner\n  return (\n    <div className={cn(\n      sizeClasses[size],\n      'animate-spin rounded-full border-2 border-transparent',\n      `border-t-${color}-500 border-r-${color}-500`,\n      colorClasses[color],\n      className\n    )} />\n  )\n}\n\n// Skeleton loader component\ninterface SkeletonProps {\n  className?: string\n  lines?: number\n  avatar?: boolean\n}\n\nexport function Skeleton({ className, lines = 1, avatar = false }: SkeletonProps) {\n  return (\n    <div className={cn('animate-pulse', className)}>\n      {avatar && (\n        <div className=\"w-12 h-12 bg-gray-700 rounded-full mb-4\" />\n      )}\n      <div className=\"space-y-3\">\n        {Array.from({ length: lines }).map((_, index) => (\n          <div\n            key={index}\n            className={cn(\n              'h-4 bg-gray-700 rounded skeleton',\n              {\n                'w-full': index < lines - 1,\n                'w-3/4': index === lines - 1\n              }\n            )}\n          />\n        ))}\n      </div>\n    </div>\n  )\n}\n\n// Progress bar component\ninterface ProgressBarProps {\n  progress: number\n  className?: string\n  showText?: boolean\n  color?: 'blue' | 'green' | 'purple' | 'red'\n}\n\nexport function ProgressBar({ \n  progress, \n  className, \n  showText = false,\n  color = 'blue' \n}: ProgressBarProps) {\n  const clampedProgress = Math.max(0, Math.min(100, progress))\n  \n  return (\n    <div className={cn('w-full', className)}>\n      {showText && (\n        <div className=\"flex justify-between text-sm text-gray-400 mb-2\">\n          <span>Progress</span>\n          <span>{Math.round(clampedProgress)}%</span>\n        </div>\n      )}\n      <div className=\"progress-bar\">\n        <div \n          className={cn(\n            'progress-bar-fill transition-all duration-700 ease-out',\n            `from-${color}-500 to-${color}-600`\n          )}\n          style={{ width: `${clampedProgress}%` }}\n        />\n      </div>\n    </div>\n  )\n}