'use client'

import { useRef, useState, useEffect } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

interface Card3DProps {
  children: React.ReactNode
  className?: string
}

export function Interactive3DCard({ children, className = '' }: Card3DProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)

  // Motion values for 3D rotation
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // Smooth spring animations
  const springConfig = { damping: 20, stiffness: 300 }
  const rotateX = useSpring(useTransform(mouseY, [-1, 1], [30, -30]), springConfig)
  const rotateY = useSpring(useTransform(mouseX, [-1, 1], [-30, 30]), springConfig)

  // Glow effect position
  const glowX = useTransform(mouseX, [-1, 1], [0, 100])
  const glowY = useTransform(mouseY, [-1, 1], [0, 100])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return

    const rect = cardRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    // Normalize mouse position to -1 to 1
    const normalizedX = ((e.clientX - centerX) / (rect.width / 2))
    const normalizedY = ((e.clientY - centerY) / (rect.height / 2))

    mouseX.set(normalizedX)
    mouseY.set(normalizedY)
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
    setIsHovered(false)
  }

  return (
    <motion.div
      ref={cardRef}
      className={`relative preserve-3d ${className}`}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
        perspective: '1000px'
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.05 }}
      transition={{ scale: { duration: 0.2 } }}
    >
      {/* Glow effect */}
      <motion.div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle at ${glowX}% ${glowY}%, rgba(168, 85, 247, 0.3) 0%, transparent 60%)`,
          filter: 'blur(40px)',
          transform: 'translateZ(-50px)'
        }}
      />

      {/* Main card content */}
      <div className="relative rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800 group">
        {/* Holographic overlay */}
        <motion.div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `
              linear-gradient(105deg, 
                transparent 40%, 
                rgba(255, 255, 255, 0.1) 45%, 
                rgba(255, 255, 255, 0.05) 50%, 
                transparent 60%
              )`,
            mixBlendMode: 'overlay',
            transform: 'translateZ(1px)'
          }}
          animate={isHovered ? {
            x: ['0%', '200%'],
            transition: { duration: 1.5, repeat: Infinity }
          } : {}}
        />

        {/* Animated border gradient */}
        <motion.div
          className="absolute inset-0 rounded-2xl"
          style={{
            background: 'linear-gradient(135deg, #6366f1, #8b5cf6, #ec4899, #6366f1)',
            backgroundSize: '300% 300%',
            padding: '1px',
            transform: 'translateZ(0px)'
          }}
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%', '0% 0%']
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'linear'
          }}
        >
          <div className="absolute inset-[1px] bg-zinc-900 rounded-2xl" />
        </motion.div>

        {/* Content with depth */}
        <div className="relative z-10 p-8" style={{ transform: 'translateZ(20px)' }}>
          {children}
        </div>

        {/* Floating particles */}
        {isHovered && (
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-purple-400 rounded-full"
                initial={{
                  x: Math.random() * 100 + '%',
                  y: '100%',
                  opacity: 0
                }}
                animate={{
                  y: '-20%',
                  opacity: [0, 1, 0]
                }}
                transition={{
                  duration: 2 + Math.random() * 2,
                  repeat: Infinity,
                  delay: i * 0.2,
                  ease: 'easeOut'
                }}
              />
            ))}
          </div>
        )}
      </div>

      {/* Shadow that responds to tilt */}
      <motion.div
        className="absolute -bottom-4 left-4 right-4 h-8 bg-purple-600/20 rounded-full blur-xl"
        style={{
          transform: 'translateZ(-100px)',
          scaleX: useTransform(rotateY, [-30, 30], [0.8, 1.2]),
          scaleY: useTransform(rotateX, [-30, 30], [0.8, 1.2]),
        }}
      />
    </motion.div>
  )
}

// Example usage component
export function Example3DCards() {
  const cards = [
    {
      title: 'AI Generation',
      description: 'Create stunning visuals with advanced AI models',
      icon: '🎨',
      gradient: 'from-purple-600 to-blue-600'
    },
    {
      title: 'Real-time Rendering',
      description: 'Experience lightning-fast 3D graphics processing',
      icon: '⚡',
      gradient: 'from-blue-600 to-cyan-600'
    },
    {
      title: 'Cloud Computing',
      description: 'Harness unlimited computational power',
      icon: '☁️',
      gradient: 'from-pink-600 to-purple-600'
    }
  ]

  return (
    <section className="min-h-screen bg-black flex items-center justify-center p-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {cards.map((card, index) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <Interactive3DCard>
              <div className="text-center">
                <div className="text-6xl mb-4">{card.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-3">{card.title}</h3>
                <p className="text-zinc-400">{card.description}</p>
                
                <motion.div
                  className={`mt-6 h-1 bg-gradient-to-r ${card.gradient} rounded-full`}
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                />
              </div>
            </Interactive3DCard>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

// CSS needed for 3D transforms
export const styles3D = `
  .preserve-3d {
    transform-style: preserve-3d;
  }
`