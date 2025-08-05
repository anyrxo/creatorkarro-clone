'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion'
import Link from 'next/link'
import ScrambleText from '@/components/magicui/scramble-text'
import ShimmerButton from '@/components/magicui/shimmer-button'

export function BeautifulHero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const isInView = useInView(titleRef, { once: true })
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  // Smooth spring animations
  const springConfig = { damping: 15, stiffness: 100 }
  const y = useSpring(useTransform(scrollYProgress, [0, 1], [0, -200]), springConfig)
  const opacity = useSpring(useTransform(scrollYProgress, [0, 0.5], [1, 0]), springConfig)
  const scale = useSpring(useTransform(scrollYProgress, [0, 0.5], [1, 0.8]), springConfig)

  // Remove mouse tracking - not needed anymore

  // TypingAnimation now provides the scramble effect

  return (
    <motion.section 
      ref={containerRef}
      className="relative min-h-screen overflow-hidden bg-gradient-to-b from-black via-zinc-900 to-black"
      style={{ y, opacity, scale }}
    >
      {/* Static gradient orbs - no mouse following */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute w-[1000px] h-[1000px] rounded-full bg-gradient-to-r from-purple-600/30 to-blue-600/30 blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 360],
          }}
          transition={{ 
            scale: { duration: 8, repeat: Infinity, ease: "easeInOut" },
            rotate: { duration: 20, repeat: Infinity, ease: "linear" }
          }}
          style={{ left: '15%', top: '5%' }}
        />
        <motion.div
          className="absolute w-[800px] h-[800px] rounded-full bg-gradient-to-r from-pink-600/25 to-purple-600/25 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [360, 0],
          }}
          transition={{ 
            scale: { duration: 12, repeat: Infinity, ease: "easeInOut" },
            rotate: { duration: 15, repeat: Infinity, ease: "linear" }
          }}
          style={{ right: '5%', bottom: '15%' }}
        />
        <motion.div
          className="absolute w-[600px] h-[600px] rounded-full bg-gradient-to-r from-cyan-600/20 to-blue-600/20 blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
          }}
          transition={{ 
            scale: { duration: 10, repeat: Infinity, ease: "easeInOut" }
          }}
          style={{ left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}
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
            TRANSFORM YOUR PASSION INTO PROFIT
          </motion.p>
          
          <div className="mb-8" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
            <ScrambleText
              text="CREATE THE FUTURE"
              className="text-6xl md:text-8xl lg:text-9xl font-bold bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent leading-none tracking-tight"
              scrambleSpeed={20}
              revealSpeed={80}
            />
          </div>

          <motion.p 
            className="mb-12 text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.8 }}
          >
            Master the systems that built 4,000+ successful creators.
          </motion.p>

          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2.2 }}
          >
            <motion.div
              className="inline-block"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href="/instagram-ignited" className="focus:outline-none focus:ring-4 focus:ring-blue-500/50" aria-label="Build your empire with Instagram Ignited course">
                <ShimmerButton
                  className="shadow-2xl"
                  shimmerColor="#ffffff"
                  shimmerSize="0.1em"
                  background="linear-gradient(135deg, #2563eb, #9333ea)"
                  borderRadius="9999px"
                >
                  <span className="whitespace-nowrap text-lg font-bold px-6 py-2 flex items-center gap-3">
                    <motion.span
                      className="text-2xl"
                      animate={{ 
                        rotate: [0, 10, -10, 0],
                        scale: [1, 1.1, 1]
                      }}
                      transition={{ 
                        duration: 3, 
                        repeat: Infinity,
                        repeatDelay: 2
                      }}
                    >
                      🚀
                    </motion.span>
                    Build Your Empire
                  </span>
                </ShimmerButton>
              </Link>
            </motion.div>
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

      {/* Pulsing Grid Lines */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Horizontal Grid Lines */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={`h-line-${i}`}
            className="absolute w-full h-px"
            style={{
              top: `${8 + i * 8}%`,
              background: 'linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.4), transparent)'
            }}
            animate={{
              opacity: [0, 0.8, 0],
              scaleX: [0, 1, 0],
              background: [
                'linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.2), transparent)',
                'linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.8), transparent)',
                'linear-gradient(90deg, transparent, rgba(147, 51, 234, 0.6), transparent)',
                'linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.2), transparent)'
              ]
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: i * 0.3,
              ease: "easeInOut"
            }}
          />
        ))}

        {/* Vertical Grid Lines */}
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={`v-line-${i}`}
            className="absolute h-full w-px"
            style={{
              left: `${10 + i * 8}%`,
              background: 'linear-gradient(180deg, transparent, rgba(147, 51, 234, 0.4), transparent)'
            }}
            animate={{
              opacity: [0, 0.6, 0],
              scaleY: [0, 1, 0],
              background: [
                'linear-gradient(180deg, transparent, rgba(147, 51, 234, 0.2), transparent)',
                'linear-gradient(180deg, transparent, rgba(147, 51, 234, 0.7), transparent)',
                'linear-gradient(180deg, transparent, rgba(6, 182, 212, 0.5), transparent)',
                'linear-gradient(180deg, transparent, rgba(147, 51, 234, 0.2), transparent)'
              ]
            }}
            transition={{
              duration: 5 + Math.random() * 2,
              repeat: Infinity,
              delay: i * 0.4 + 1,
              ease: "easeInOut"
            }}
          />
        ))}

        {/* Pulse Wave Effect - Horizontal */}
        <motion.div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(0deg, transparent 0%, rgba(59, 130, 246, 0.1) 50%, transparent 100%)'
          }}
          animate={{
            y: ['-100%', '100%'],
            opacity: [0, 1, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            repeatDelay: 4
          }}
        />

        {/* Pulse Wave Effect - Vertical */}
        <motion.div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(90deg, transparent 0%, rgba(147, 51, 234, 0.1) 50%, transparent 100%)'
          }}
          animate={{
            x: ['-100%', '100%'],
            opacity: [0, 1, 0]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            repeatDelay: 6,
            delay: 2
          }}
        />

        {/* Grid Intersection Points */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={`dot-${i}`}
            className="absolute w-1 h-1 rounded-full"
            style={{
              left: `${10 + (i % 8) * 10}%`,
              top: `${20 + Math.floor(i / 8) * 15}%`,
              background: 'rgba(59, 130, 246, 0.6)'
            }}
            animate={{
              scale: [0, 2, 0],
              opacity: [0, 1, 0],
              boxShadow: [
                '0 0 0px rgba(59, 130, 246, 0)',
                '0 0 20px rgba(59, 130, 246, 0.8)',
                '0 0 0px rgba(59, 130, 246, 0)'
              ]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: Math.random() * 6,
              ease: "easeInOut",
              repeatDelay: 8 + Math.random() * 4
            }}
          />
        ))}
      </div>
    </motion.section>
  )
}