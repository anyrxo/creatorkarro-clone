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

      {/* Pulsing Hexagonal Nodes */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Slow breathing hex nodes */}
        {[...Array(8)].map((_, i) => {
          const positions = [
            { left: '15%', top: '20%' },
            { left: '85%', top: '25%' },
            { left: '25%', top: '70%' },
            { left: '75%', top: '80%' },
            { left: '50%', top: '15%' },
            { left: '10%', top: '60%' },
            { left: '90%', top: '65%' },
            { left: '60%', top: '45%' }
          ]
          
          return (
            <motion.div
              key={`hex-${i}`}
              className="absolute"
              style={positions[i]}
              animate={{
                scale: [0.8, 1.4, 0.8],
                opacity: [0.3, 0.9, 0.3],
                rotate: [0, 360],
              }}
              transition={{
                duration: 4 + i * 0.5, // Staggered breathing
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.8
              }}
            >
              {/* Hexagon shape with stronger pulse */}
              <motion.div 
                className={`relative w-8 h-8 ${
                  i % 3 === 0 ? 'bg-blue-400/60' :
                  i % 3 === 1 ? 'bg-purple-400/60' : 
                  'bg-cyan-400/60'
                }`}
                style={{
                  clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
                  boxShadow: '0 0 30px currentColor, 0 0 60px currentColor',
                  filter: 'brightness(1.2)'
                }}
                animate={{
                  boxShadow: [
                    '0 0 10px currentColor, 0 0 20px currentColor',
                    '0 0 40px currentColor, 0 0 80px currentColor',
                    '0 0 10px currentColor, 0 0 20px currentColor'
                  ]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
          )
        })}
        
        {/* Quick zap hex nodes */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={`zap-${i}`}
            className="absolute"
            style={{
              left: `${5 + Math.random() * 90}%`,
              top: `${5 + Math.random() * 90}%`,
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{
              scale: [0, 1.5, 0],
              opacity: [0, 1, 0],
              rotate: [0, 60],
            }}
            transition={{
              duration: 0.8, // Quick zap
              repeat: Infinity,
              delay: Math.random() * 15, // Random intervals
              ease: "easeOut",
              repeatDelay: 8 + Math.random() * 12 // 8-20 second gaps
            }}
          >
            {/* Small hex with electric effect */}
            <div className={`relative w-3 h-3 ${
              i % 4 === 0 ? 'bg-yellow-300/80' :
              i % 4 === 1 ? 'bg-cyan-300/80' :
              i % 4 === 2 ? 'bg-purple-300/80' :
              'bg-white/80'
            }`}
            style={{
              clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
              boxShadow: '0 0 15px currentColor, 0 0 30px currentColor'
            }} />
          </motion.div>
        ))}
        
        {/* Connecting lines between some nodes */}
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={`line-${i}`}
            className="absolute w-px bg-gradient-to-b from-transparent via-blue-400/30 to-transparent"
            style={{
              left: `${20 + i * 20}%`,
              top: '20%',
              height: '60%',
            }}
            initial={{ scaleY: 0, opacity: 0 }}
            animate={{
              scaleY: [0, 1, 0],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 2,
              ease: "easeInOut",
              repeatDelay: 10
            }}
          />
        ))}
      </div>
    </motion.section>
  )
}