'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion'
import Link from 'next/link'
import ScrambleText from '@/components/magicui/scramble-text'
import ShimmerButton from '@/components/magicui/shimmer-button'
import StandardCTA from '@/components/StandardCTA'

export function BeautifulHero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const isInView = useInView(titleRef, { once: true })
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Detect mobile devices for performance optimization
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  // Disable heavy animations on mobile for better performance
  const springConfig = { damping: 15, stiffness: 100 }
  const y = useSpring(useTransform(scrollYProgress, [0, 1], [0, isMobile ? -100 : -200]), springConfig)
  const opacity = useSpring(useTransform(scrollYProgress, [0, 0.5], [1, 0]), springConfig)
  const scale = useSpring(useTransform(scrollYProgress, [0, 0.5], [1, isMobile ? 0.95 : 0.8]), springConfig)

  return (
    <motion.section
      ref={containerRef}
      className="relative min-h-screen overflow-hidden bg-gradient-to-b from-black via-zinc-900 to-black"
      style={{ y: isMobile ? 0 : y, opacity, scale: isMobile ? 1 : scale }}
    >
      {/* Optimized gradient orbs - better mobile performance */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Use CSS animations instead of JS for better performance */}
        <div 
          className="absolute w-[800px] h-[800px] rounded-full bg-gradient-to-r from-purple-600/20 to-blue-600/20 blur-2xl animate-pulse opacity-60"
          style={{ 
            left: '15%', 
            top: '5%',
            animationDuration: '4s'
          }}
        />
        <div 
          className="absolute w-[600px] h-[600px] rounded-full bg-gradient-to-r from-pink-600/15 to-purple-600/15 blur-2xl animate-pulse opacity-50"
          style={{ 
            right: '5%', 
            bottom: '15%',
            animationDuration: '6s',
            animationDelay: '1s'
          }}
        />
        <div 
          className="absolute w-[400px] h-[400px] rounded-full bg-gradient-to-r from-cyan-600/15 to-blue-600/15 blur-xl animate-pulse opacity-40"
          style={{ 
            left: '50%', 
            top: '50%', 
            transform: 'translate(-50%, -50%)',
            animationDuration: '5s',
            animationDelay: '2s'
          }}
        />
      </div>

      {/* Noise texture overlay */}
      <div 
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '128px 128px'
        }}
      />

      {/* Grid pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px]" />
      </div>

      {/* Main content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-center"
        >
          <motion.p
            className="mb-4 text-sm font-light tracking-[0.2em] text-zinc-400"
            initial={{ opacity: 0, letterSpacing: "0.5em" }}
            animate={{ opacity: 1, letterSpacing: "0.2em" }}
            transition={{ duration: 1.5, delay: 0.5 }}
          >
            $5M+ IN COMBINED STUDENT EARNINGS
          </motion.p>

          <h1 className="mb-8" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
            <ScrambleText
              text="CREATE THE FUTURE"
              className="text-6xl md:text-8xl lg:text-9xl font-bold bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent leading-none tracking-tight"
              scrambleSpeed={1}
              revealSpeed={1}
            />
          </h1>

          <motion.p
            className="mb-12 text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.8 }}
          >
            The exact systems used by 4,000+ students to build profitable businesses. From zero to first revenue in 45 days.
          </motion.p>

          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2.2 }}
          >
            <StandardCTA
              variant="primary"
              text="Start Building Your Empire"
              href="/instagram-ignited"
              size="lg"
            />
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2.5 }}
        >
          <motion.div
            className="w-6 h-10 rounded-full border-2 border-zinc-600 p-1"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.div
              className="w-1 h-2 bg-zinc-400 rounded-full mx-auto"
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Heartbeat Grid Pulsing from Center - Simplified on mobile */}
      {!isMobile && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Center Point - Heart of the pulse */}
          <motion.div
            className="absolute w-4 h-4 rounded-full"
            style={{
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
              background: 'rgba(59, 130, 246, 0.8)'
            }}
            animate={{
              scale: [1, 3, 1],
              opacity: [0.8, 1, 0.8],
              boxShadow: [
                '0 0 20px rgba(59, 130, 246, 0.5)',
                '0 0 60px rgba(59, 130, 246, 1)',
                '0 0 20px rgba(59, 130, 246, 0.5)'
              ]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          {/* Horizontal Grid Lines - Pulse from center outward */}
          {[...Array(14)].map((_, i) => {
          const distanceFromCenter = Math.abs(i - 7)
          const delay = distanceFromCenter * 0.1
          
          return (
            <motion.div
              key={`h-line-${i}`}
              className="absolute w-full h-px"
              style={{
                top: `${5 + i * 7}%`,
                left: '0%',
                background: 'linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.2), transparent)'
              }}
              animate={{
                opacity: [0, 1, 0],
                scaleX: [0, 1, 0],
                background: [
                  'linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.2), transparent)',
                  'linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.8), transparent)',
                  'linear-gradient(90deg, transparent, rgba(147, 51, 234, 0.6), transparent)',
                  'linear-gradient(90deg, transparent, rgba(6, 182, 212, 0.4), transparent)',
                  'linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.2), transparent)'
                ]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: delay,
                ease: "easeInOut",
                repeatDelay: 1
              }}
            />
          )
        })}

        {/* Vertical Grid Lines - Pulse from center outward */}
        {[...Array(12)].map((_, i) => {
          const distanceFromCenter = Math.abs(i - 6)
          const delay = distanceFromCenter * 0.15
          
          return (
            <motion.div
              key={`v-line-${i}`}
              className="absolute h-full w-px"
              style={{
                left: `${8 + i * 7}%`,
                top: '0%',
                background: 'linear-gradient(180deg, transparent, rgba(147, 51, 234, 0.2), transparent)'
              }}
              animate={{
                opacity: [0, 1, 0],
                scaleY: [0, 1, 0],
                background: [
                  'linear-gradient(180deg, transparent, rgba(147, 51, 234, 0.2), transparent)',
                  'linear-gradient(180deg, transparent, rgba(147, 51, 234, 0.8), transparent)',
                  'linear-gradient(180deg, transparent, rgba(6, 182, 212, 0.6), transparent)',
                  'linear-gradient(180deg, transparent, rgba(236, 72, 153, 0.4), transparent)',
                  'linear-gradient(180deg, transparent, rgba(147, 51, 234, 0.2), transparent)'
                ]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: delay + 0.3,
                ease: "easeInOut",
                repeatDelay: 1
              }}
            />
          )
        })}

        {/* Diagonal Lines - Creating web effect */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`diag-${i}`}
            className="absolute w-px origin-center"
            style={{
              left: '50%',
              top: '50%',
              height: '70%',
              transform: `translate(-50%, -50%) rotate(${i * 45}deg)`,
              background: 'linear-gradient(180deg, transparent, rgba(59, 130, 246, 0.3), transparent)'
            }}
            animate={{
              opacity: [0, 0.8, 0],
              scaleY: [0, 1, 0],
              background: [
                'linear-gradient(180deg, transparent, rgba(59, 130, 246, 0.2), transparent)',
                'linear-gradient(180deg, transparent, rgba(147, 51, 234, 0.8), transparent)',
                'linear-gradient(180deg, transparent, rgba(6, 182, 212, 0.6), transparent)',
                'linear-gradient(180deg, transparent, rgba(59, 130, 246, 0.2), transparent)'
              ]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 0.2 + 1,
              ease: "easeInOut",
              repeatDelay: 2
            }}
          />
        ))}

        {/* Concentric Circles - Heartbeat ripples */}
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={`circle-${i}`}
            className="absolute rounded-full border"
            style={{
              left: '50%',
              top: '50%',
              width: `${(i + 1) * 200}px`,
              height: `${(i + 1) * 200}px`,
              transform: 'translate(-50%, -50%)',
              borderColor: 'rgba(59, 130, 246, 0.2)',
              borderWidth: '1px'
            }}
            animate={{
              scale: [0, 1.2, 0],
              opacity: [0, 0.6, 0],
              borderColor: [
                'rgba(59, 130, 246, 0.2)',
                'rgba(59, 130, 246, 0.8)',
                'rgba(147, 51, 234, 0.6)',
                'rgba(6, 182, 212, 0.4)',
                'rgba(59, 130, 246, 0.2)'
              ]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeOut",
              repeatDelay: 3
            }}
          />
        ))}
        </div>
      )}
    </motion.section>
  )
}