'use client'

import { useEffect, useRef, useState } from 'react'

interface Orb {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  color: string
  pulsePhase: number
}

export default function InteractiveBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const orbsRef = useRef<Orb[]>([])
  const mouseRef = useRef({ x: 0, y: 0 })
  const animationRef = useRef<number>()
  const [isInteracting, setIsInteracting] = useState(false)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d', { alpha: true })
    if (!ctx) return
    
    // Enable high-quality rendering
    ctx.imageSmoothingEnabled = true
    ctx.imageSmoothingQuality = 'high'

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      initOrbs()
    }

    // Initialize orbs
    const initOrbs = () => {
      orbsRef.current = []
      const orbCount = Math.min(8, Math.floor(window.innerWidth / 200))
      
      for (let i = 0; i < orbCount; i++) {
        orbsRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          radius: Math.random() * 80 + 40,
          color: ['#3b82f6', '#8b5cf6', '#ec4899'][Math.floor(Math.random() * 3)],
          pulsePhase: Math.random() * Math.PI * 2
        })
      }
    }

    // Mouse handlers
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY }
    }

    const handleMouseDown = () => setIsInteracting(true)
    const handleMouseUp = () => setIsInteracting(false)

    // Update orbs
    const updateOrbs = () => {
      orbsRef.current.forEach(orb => {
        // Basic movement
        orb.x += orb.vx
        orb.y += orb.vy

        // Bounce off walls
        if (orb.x - orb.radius < 0 || orb.x + orb.radius > canvas.width) {
          orb.vx *= -1
        }
        if (orb.y - orb.radius < 0 || orb.y + orb.radius > canvas.height) {
          orb.vy *= -1
        }

        // Mouse interaction
        const dx = mouseRef.current.x - orb.x
        const dy = mouseRef.current.y - orb.y
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance < 200) {
          const force = (200 - distance) / 200
          if (isInteracting) {
            // Attract to mouse
            orb.vx += (dx / distance) * force * 0.5
            orb.vy += (dy / distance) * force * 0.5
          } else {
            // Repel from mouse
            orb.vx -= (dx / distance) * force * 0.2
            orb.vy -= (dy / distance) * force * 0.2
          }
        }

        // Limit velocity
        const speed = Math.sqrt(orb.vx * orb.vx + orb.vy * orb.vy)
        if (speed > 2) {
          orb.vx = (orb.vx / speed) * 2
          orb.vy = (orb.vy / speed) * 2
        }

        // Update pulse
        orb.pulsePhase += 0.02
      })
    }

    // Draw orbs
    const drawOrbs = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw connections
      orbsRef.current.forEach((orb, i) => {
        orbsRef.current.slice(i + 1).forEach(otherOrb => {
          const dx = orb.x - otherOrb.x
          const dy = orb.y - otherOrb.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 300) {
            const opacity = (1 - distance / 300) * 0.08 // Very subtle connections
            ctx.strokeStyle = `rgba(147, 51, 234, ${opacity})`
            ctx.lineWidth = 0.5 // Thinner lines
            ctx.beginPath()
            ctx.moveTo(orb.x, orb.y)
            ctx.lineTo(otherOrb.x, otherOrb.y)
            ctx.stroke()
          }
        })
      })

      // Draw orbs
      orbsRef.current.forEach(orb => {
        const pulseSize = Math.sin(orb.pulsePhase) * 10

        // Outer glow
        const glowGradient = ctx.createRadialGradient(
          orb.x, orb.y, 0,
          orb.x, orb.y, orb.radius + pulseSize + 30
        )
        glowGradient.addColorStop(0, orb.color + '20') // Reduced opacity
        glowGradient.addColorStop(0.5, orb.color + '10') // Reduced opacity
        glowGradient.addColorStop(1, 'transparent')

        ctx.fillStyle = glowGradient
        ctx.beginPath()
        ctx.arc(orb.x, orb.y, orb.radius + pulseSize + 30, 0, Math.PI * 2)
        ctx.fill()

        // Inner orb
        const orbGradient = ctx.createRadialGradient(
          orb.x - orb.radius / 3, orb.y - orb.radius / 3, 0,
          orb.x, orb.y, orb.radius + pulseSize
        )
        orbGradient.addColorStop(0, orb.color + '30') // Reduced opacity
        orbGradient.addColorStop(0.5, orb.color + '15') // Reduced opacity
        orbGradient.addColorStop(1, orb.color + '05') // Reduced opacity

        ctx.fillStyle = orbGradient
        ctx.beginPath()
        ctx.arc(orb.x, orb.y, orb.radius + pulseSize, 0, Math.PI * 2)
        ctx.fill()
      })
    }

    // Animation loop
    const animate = () => {
      updateOrbs()
      drawOrbs()
      animationRef.current = requestAnimationFrame(animate)
    }

    // Initialize
    resizeCanvas()
    animate()

    // Event listeners
    window.addEventListener('resize', resizeCanvas)
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mousedown', handleMouseDown)
    window.addEventListener('mouseup', handleMouseUp)

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('mouseup', handleMouseUp)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [isInteracting])

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
      style={{ 
        mixBlendMode: 'screen',
        opacity: 0.3 // Lower overall opacity for subtlety
      }}
    />
  )
}