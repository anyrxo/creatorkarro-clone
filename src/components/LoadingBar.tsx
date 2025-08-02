'use client'

import { useEffect, useState } from 'react'

export default function LoadingBar() {
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    // Simulate page loading
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer)
          setTimeout(() => setIsLoading(false), 200)
          return 100
        }
        return prev + Math.random() * 15
      })
    }, 100)

    return () => clearInterval(timer)
  }, [])

  if (!isLoading) return null

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-zinc-800 z-50">
      <div
        className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition-all duration-300 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  )
}