'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import { cn } from '@/lib/utils'

// 3D Tilt Card
interface TiltCardProps {
  children: React.ReactNode
  className?: string
  maxTilt?: number
  perspective?: number
  scale?: number
  glare?: boolean
}

export function TiltCard({
  children,
  className,
  maxTilt = 15,
  perspective = 1000,
  scale = 1.05,
  glare = true
}: TiltCardProps) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const [glarePosition, setGlarePosition] = useState({ x: 50, y: 50 })
  const cardRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return

    const rect = cardRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    const percentX = (e.clientX - rect.left) / rect.width
    const percentY = (e.clientY - rect.top) / rect.height

    const tiltX = (percentY - 0.5) * maxTilt
    const tiltY = (0.5 - percentX) * maxTilt

    setTilt({ x: tiltX, y: tiltY })
    setGlarePosition({ x: percentX * 100, y: percentY * 100 })
  }

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 })
    setGlarePosition({ x: 50, y: 50 })
  }

  return (
    <div
      ref={cardRef}
      className={cn('relative transform-gpu transition-all duration-300 ease-out', className)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(${perspective}px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale(${tilt.x === 0 && tilt.y === 0 ? 1 : scale})`,
        transformStyle: 'preserve-3d'
      }}
    >
      {glare && (
        <div
          className="absolute inset-0 rounded-inherit pointer-events-none opacity-0 hover:opacity-100 transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle at ${glarePosition.x}% ${glarePosition.y}%, rgba(255,255,255,0.3) 0%, transparent 60%)`
          }}
        />
      )}
      {children}
    </div>
  )
}

// Magnetic Button
interface MagneticButtonProps {
  children: React.ReactNode
  className?: string
  strength?: number
  radius?: number
}

export function MagneticButton({
  children,
  className,
  strength = 0.3,
  radius = 100
}: MagneticButtonProps) {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const buttonRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!buttonRef.current) return

    const rect = buttonRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    const distanceX = e.clientX - centerX
    const distanceY = e.clientY - centerY
    const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY)

    if (distance < radius) {
      const pullStrength = (radius - distance) / radius
      setPosition({
        x: distanceX * strength * pullStrength,
        y: distanceY * strength * pullStrength
      })
    } else {
      setPosition({ x: 0, y: 0 })
    }
  }, [radius, strength])

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 })
  }

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [handleMouseMove])

  return (
    <div
      ref={buttonRef}
      className={cn('transform-gpu transition-transform duration-200 ease-out', className)}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`
      }}
    >
      {children}
    </div>
  )
}

// Spotlight Card
interface SpotlightCardProps {
  children: React.ReactNode
  className?: string
  spotlightColor?: string
  spotlightSize?: number
}

export function SpotlightCard({
  children,
  className,
  spotlightColor = 'rgba(59, 130, 246, 0.5)',
  spotlightSize = 400
}: SpotlightCardProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return

    const rect = cardRef.current.getBoundingClientRect()
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    })
  }

  return (
    <div
      ref={cardRef}
      className={cn('relative overflow-hidden', className)}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="absolute inset-0 opacity-0 transition-opacity duration-300 pointer-events-none"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(circle ${spotlightSize}px at ${mousePosition.x}px ${mousePosition.y}px, ${spotlightColor}, transparent)`
        }}
      />
      {children}
    </div>
  )
}

// Reveal on Hover
interface RevealOnHoverProps {
  children: React.ReactNode
  revealContent: React.ReactNode
  className?: string
  direction?: 'up' | 'down' | 'left' | 'right'
}

export function RevealOnHover({
  children,
  revealContent,
  className,
  direction = 'up'
}: RevealOnHoverProps) {
  const getTransform = () => {
    switch (direction) {
      case 'up':
        return 'translateY(100%)'
      case 'down':
        return 'translateY(-100%)'
      case 'left':
        return 'translateX(100%)'
      case 'right':
        return 'translateX(-100%)'
    }
  }

  return (
    <div className={cn('relative overflow-hidden group', className)}>
      <div className="transition-all duration-300 group-hover:opacity-0">
        {children}
      </div>
      <div
        className="absolute inset-0 transition-transform duration-300 transform"
        style={{
          transform: getTransform()
        }}
      >
        <div className="group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-300 h-full">
          {revealContent}
        </div>
      </div>
    </div>
  )
}

// Morphing Card
interface MorphingCardProps {
  children: React.ReactNode
  className?: string
  morphClassName?: string
}

export function MorphingCard({
  children,
  className,
  morphClassName
}: MorphingCardProps) {
  const [isMorphed, setIsMorphed] = useState(false)

  return (
    <div
      className={cn(
        'transition-all duration-700 ease-in-out cursor-pointer',
        isMorphed ? morphClassName : className
      )}
      onMouseEnter={() => setIsMorphed(true)}
      onMouseLeave={() => setIsMorphed(false)}
    >
      {children}
    </div>
  )
}

// Elastic Button
interface ElasticButtonProps {
  children: React.ReactNode
  className?: string
  elasticity?: number
}

export function ElasticButton({
  children,
  className,
  elasticity = 0.2
}: ElasticButtonProps) {
  const [isPressed, setIsPressed] = useState(false)

  return (
    <button
      className={cn(
        'transform transition-transform',
        isPressed ? `scale-[${1 - elasticity}]` : 'scale-100',
        className
      )}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      onMouseLeave={() => setIsPressed(false)}
      style={{
        transition: 'transform 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55)'
      }}
    >
      {children}
    </button>
  )
}

// Liquid Button
interface LiquidButtonProps {
  children: React.ReactNode
  className?: string
  liquidColor?: string
}

export function LiquidButton({
  children,
  className,
  liquidColor = 'rgba(59, 130, 246, 0.3)'
}: LiquidButtonProps) {
  const [ripples, setRipples] = useState<Array<{ id: number; x: number; y: number }>>([])

  const createRipple = (e: React.MouseEvent<HTMLButtonElement>) => {
    const button = e.currentTarget
    const rect = button.getBoundingClientRect()
    const size = Math.max(rect.width, rect.height)
    const x = e.clientX - rect.left - size / 2
    const y = e.clientY - rect.top - size / 2

    const newRipple = {
      id: Date.now(),
      x,
      y
    }

    setRipples(prev => [...prev, newRipple])

    setTimeout(() => {
      setRipples(prev => prev.filter(ripple => ripple.id !== newRipple.id))
    }, 1000)
  }

  return (
    <button
      className={cn('relative overflow-hidden', className)}
      onClick={createRipple}
    >
      {ripples.map(ripple => (
        <span
          key={ripple.id}
          className="absolute rounded-full animate-liquid-ripple pointer-events-none"
          style={{
            left: ripple.x,
            top: ripple.y,
            width: '100%',
            height: '100%',
            backgroundColor: liquidColor
          }}
        />
      ))}
      <span className="relative z-10">{children}</span>
    </button>
  )
}