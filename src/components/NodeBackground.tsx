'use client'

import { useEffect, useRef } from 'react'

interface Node {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
}

export default function NodeBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const nodesRef = useRef<Node[]>([])
  const animationRef = useRef<number>()
  const mouseRef = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d', { 
      alpha: true,
      desynchronized: true 
    })
    if (!ctx) return

    // High quality rendering settings
    const dpr = window.devicePixelRatio || 1
    
    const resizeCanvas = () => {
      const { innerWidth, innerHeight } = window
      
      // Set display size
      canvas.style.width = `${innerWidth}px`
      canvas.style.height = `${innerHeight}px`
      
      // Set actual size in memory (scaled for retina displays)
      canvas.width = innerWidth * dpr
      canvas.height = innerHeight * dpr
      
      // Scale all drawing operations by the dpr
      ctx.scale(dpr, dpr)
      
      // Reinitialize nodes on resize
      initNodes()
    }

    const initNodes = () => {
      const { innerWidth, innerHeight } = window
      nodesRef.current = []
      
      // Calculate node count based on screen size
      const nodeCount = Math.min(
        Math.floor((innerWidth * innerHeight) / 50000), 
        30
      )
      
      for (let i = 0; i < nodeCount; i++) {
        nodesRef.current.push({
          x: Math.random() * innerWidth,
          y: Math.random() * innerHeight,
          vx: (Math.random() - 0.5) * 0.2,
          vy: (Math.random() - 0.5) * 0.2,
          radius: Math.random() * 3 + 2
        })
      }
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY }
    }

    const updateNodes = () => {
      const { innerWidth, innerHeight } = window
      
      nodesRef.current.forEach(node => {
        // Update position
        node.x += node.vx
        node.y += node.vy
        
        // Bounce off edges smoothly
        if (node.x <= node.radius || node.x >= innerWidth - node.radius) {
          node.vx *= -0.9
        }
        if (node.y <= node.radius || node.y >= innerHeight - node.radius) {
          node.vy *= -0.9
        }
        
        // Keep nodes in bounds
        node.x = Math.max(node.radius, Math.min(innerWidth - node.radius, node.x))
        node.y = Math.max(node.radius, Math.min(innerHeight - node.radius, node.y))
        
        // Mouse repulsion
        const dx = mouseRef.current.x - node.x
        const dy = mouseRef.current.y - node.y
        const distance = Math.sqrt(dx * dx + dy * dy)
        
        if (distance < 100 && distance > 0) {
          const force = (100 - distance) / 100
          node.vx -= (dx / distance) * force * 0.02
          node.vy -= (dy / distance) * force * 0.02
        }
        
        // Limit velocity
        const speed = Math.sqrt(node.vx * node.vx + node.vy * node.vy)
        if (speed > 1) {
          node.vx = (node.vx / speed) * 1
          node.vy = (node.vy / speed) * 1
        }
      })
    }

    const drawNodes = () => {
      const { innerWidth, innerHeight } = window
      
      // Clear canvas
      ctx.clearRect(0, 0, innerWidth, innerHeight)
      
      // Draw connections
      ctx.strokeStyle = 'rgba(59, 130, 246, 0.1)'
      ctx.lineWidth = 1
      
      nodesRef.current.forEach((node, i) => {
        nodesRef.current.slice(i + 1).forEach(otherNode => {
          const dx = node.x - otherNode.x
          const dy = node.y - otherNode.y
          const distance = Math.sqrt(dx * dx + dy * dy)
          
          if (distance < 150) {
            ctx.beginPath()
            ctx.moveTo(node.x, node.y)
            ctx.lineTo(otherNode.x, otherNode.y)
            
            // Gradient opacity based on distance
            const opacity = (1 - distance / 150) * 0.15
            ctx.strokeStyle = `rgba(59, 130, 246, ${opacity})`
            ctx.stroke()
          }
        })
      })
      
      // Draw nodes
      nodesRef.current.forEach(node => {
        // Node glow
        const gradient = ctx.createRadialGradient(
          node.x, node.y, 0,
          node.x, node.y, node.radius * 4
        )
        gradient.addColorStop(0, 'rgba(59, 130, 246, 0.1)')
        gradient.addColorStop(0.5, 'rgba(59, 130, 246, 0.05)')
        gradient.addColorStop(1, 'rgba(59, 130, 246, 0)')
        
        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(node.x, node.y, node.radius * 4, 0, Math.PI * 2)
        ctx.fill()
        
        // Node core
        ctx.fillStyle = 'rgba(59, 130, 246, 0.3)'
        ctx.beginPath()
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2)
        ctx.fill()
        
        // Node border
        ctx.strokeStyle = 'rgba(59, 130, 246, 0.5)'
        ctx.lineWidth = 0.5
        ctx.beginPath()
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2)
        ctx.stroke()
      })
    }

    const animate = () => {
      updateNodes()
      drawNodes()
      animationRef.current = requestAnimationFrame(animate)
    }

    // Initialize
    resizeCanvas()
    animate()

    // Event listeners
    window.addEventListener('resize', resizeCanvas)
    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      window.removeEventListener('mousemove', handleMouseMove)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ 
        width: '100%',
        height: '100%',
        opacity: 0.6,
        zIndex: 0
      }}
    />
  )
}