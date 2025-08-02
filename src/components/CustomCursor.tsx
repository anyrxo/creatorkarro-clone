'use client'

import { useState, useEffect, useRef } from 'react'

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const cursorRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    // Check if user is on mobile/touch device
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0
    if (isTouchDevice) return

    const updateCursorPosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
      setIsVisible(true)
    }

    const handleMouseEnter = () => setIsVisible(true)
    const handleMouseLeave = () => setIsVisible(false)

    // Add hover detection for interactive elements
    const handleElementHover = (e: Event) => {
      const target = e.target as HTMLElement
      const isInteractive = target.matches(
        'a, button, [role="button"], input, textarea, select, .cursor-pointer, [data-cursor="pointer"]'
      )
      setIsHovering(isInteractive)
    }

    const handleElementLeave = () => {
      setIsHovering(false)
    }

    // Mouse events
    document.addEventListener('mousemove', updateCursorPosition, { passive: true })
    document.addEventListener('mouseenter', handleMouseEnter)
    document.addEventListener('mouseleave', handleMouseLeave)

    // Hover detection
    document.addEventListener('mouseover', handleElementHover, { passive: true })
    document.addEventListener('mouseout', handleElementLeave, { passive: true })

    // Hide default cursor
    document.body.style.cursor = 'none'

    return () => {
      document.removeEventListener('mousemove', updateCursorPosition)
      document.removeEventListener('mouseenter', handleMouseEnter)
      document.removeEventListener('mouseleave', handleMouseLeave)
      document.removeEventListener('mouseover', handleElementHover)
      document.removeEventListener('mouseout', handleElementLeave)
      document.body.style.cursor = 'auto'
    }
  }, [])

  if (!isVisible) return null

  return (
    <div
      ref={cursorRef}
      className={`custom-cursor ${isHovering ? 'hovering' : ''}`}
      style={{
        left: position.x - (isHovering ? 20 : 10),
        top: position.y - (isHovering ? 20 : 10),
      }}
    />
  )
}