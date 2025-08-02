'use client'

import { useEffect, useRef } from 'react'

interface TrailDot {
  x: number
  y: number
  opacity: number
  scale: number
  id: number
}

export default function CursorTrail() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const trailRef = useRef<TrailDot[]>([])
  const mouseRef = useRef({ x: 0, y: 0 })
  const animationRef = useRef<number>()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY }
      
      // Add new trail dot
      if (trailRef.current.length === 0 || 
          Math.abs(e.clientX - trailRef.current[trailRef.current.length - 1].x) > 5 ||
          Math.abs(e.clientY - trailRef.current[trailRef.current.length - 1].y) > 5) {
        trailRef.current.push({
          x: e.clientX,
          y: e.clientY,
          opacity: 0.5,
          scale: 1,
          id: Date.now()
        })
      }

      // Limit trail length
      if (trailRef.current.length > 20) {
        trailRef.current.shift()
      }
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update and draw trail
      trailRef.current = trailRef.current.filter(dot => {
        dot.opacity -= 0.02
        dot.scale -= 0.01

        if (dot.opacity <= 0) return false

        // Draw gradient circle
        const gradient = ctx.createRadialGradient(dot.x, dot.y, 0, dot.x, dot.y, 15 * dot.scale)
        gradient.addColorStop(0, `rgba(59, 130, 246, ${dot.opacity * 0.6})`)
        gradient.addColorStop(0.5, `rgba(147, 51, 234, ${dot.opacity * 0.3})`)
        gradient.addColorStop(1, 'rgba(236, 72, 153, 0)')

        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(dot.x, dot.y, 15 * dot.scale, 0, Math.PI * 2)
        ctx.fill()

        return true
      })

      animationRef.current = requestAnimationFrame(animate)
    }

    // Start animation
    animate()

    // Event listeners
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('resize', resizeCanvas)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('resize', resizeCanvas)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-[100]"
      style={{ mixBlendMode: 'screen' }}
    />
  )
}