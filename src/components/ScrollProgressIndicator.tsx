'use client'

import { useState, useEffect } from 'react'

export default function ScrollProgressIndicator() {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const updateScrollProgress = () => {
      const currentScroll = window.pageYOffset
      const scrollHeight = document.body.scrollHeight - window.innerHeight
      const progress = (currentScroll / scrollHeight) * 100
      setScrollProgress(Math.min(progress, 100))
    }

    window.addEventListener('scroll', updateScrollProgress, { passive: true })
    updateScrollProgress() // Initial call

    return () => window.removeEventListener('scroll', updateScrollProgress)
  }, [])

  return (
    <div 
      className="scroll-indicator"
      style={{ transform: `scaleX(${scrollProgress / 100})` }}
    />
  )
}