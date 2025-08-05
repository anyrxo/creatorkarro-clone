'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion'
import Link from 'next/link'
import ScrambleText from '@/components/magicui/scramble-text'

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

  // Floating animation for background elements
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e
      const { innerWidth, innerHeight } = window
      setMousePosition({
        x: (clientX - innerWidth / 2) / innerWidth,
        y: (clientY - innerHeight / 2) / innerHeight
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  // TypingAnimation now provides the scramble effect

  return (
    <motion.section 
      ref={containerRef}
      className="relative min-h-screen overflow-hidden bg-gradient-to-b from-black via-zinc-900 to-black"
      style={{ y, opacity, scale }}
    >
      {/* Premium Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute w-[1000px] h-[1000px] rounded-full bg-gradient-to-r from-purple-600/30 to-blue-600/30 blur-3xl"
          animate={{
            x: mousePosition.x * 120,
            y: mousePosition.y * 120,
            rotate: [0, 360],
          }}
          transition={{ 
            x: { type: "spring", damping: 30 },
            y: { type: "spring", damping: 30 },
            rotate: { duration: 20, repeat: Infinity, ease: "linear" }
          }}
          style={{ left: '15%', top: '5%' }}
        />
        <motion.div
          className="absolute w-[800px] h-[800px] rounded-full bg-gradient-to-r from-pink-600/25 to-purple-600/25 blur-3xl"
          animate={{
            x: mousePosition.x * -100,
            y: mousePosition.y * -100,
            rotate: [360, 0],
          }}
          transition={{ 
            x: { type: "spring", damping: 25 },
            y: { type: "spring", damping: 25 },
            rotate: { duration: 15, repeat: Infinity, ease: "linear" }
          }}
          style={{ right: '5%', bottom: '15%' }}
        />
        <motion.div
          className="absolute w-[600px] h-[600px] rounded-full bg-gradient-to-r from-cyan-600/20 to-blue-600/20 blur-3xl"
          animate={{
            x: mousePosition.x * 80,
            y: mousePosition.y * -80,
            scale: [1, 1.2, 1],
          }}
          transition={{ 
            x: { type: "spring", damping: 35 },
            y: { type: "spring", damping: 35 },
            scale: { duration: 8, repeat: Infinity, ease: "easeInOut" }
          }}
          style={{ left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}
        />
        
        {/* Additional Premium Orbs */}
        <motion.div
          className="absolute w-[300px] h-[300px] rounded-full bg-gradient-to-r from-yellow-500/15 to-orange-500/15 blur-2xl"
          animate={{
            x: mousePosition.x * -50,
            y: mousePosition.y * 70,
            rotate: [0, 180, 360],
          }}
          transition={{ 
            x: { type: "spring", damping: 40 },
            y: { type: "spring", damping: 40 },
            rotate: { duration: 12, repeat: Infinity, ease: "linear" }
          }}
          style={{ left: '80%', top: '20%' }}
        />
        <motion.div
          className="absolute w-[400px] h-[400px] rounded-full bg-gradient-to-r from-green-500/10 to-cyan-500/10 blur-2xl"
          animate={{
            x: mousePosition.x * 90,
            y: mousePosition.y * 90,
            rotate: [180, 540],
          }}
          transition={{ 
            x: { type: "spring", damping: 20 },
            y: { type: "spring", damping: 20 },
            rotate: { duration: 18, repeat: Infinity, ease: "linear" }
          }}
          style={{ left: '10%', bottom: '10%' }}
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
              scrambleSpeed={30}
              revealSpeed={150}
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
            <Link href="/instagram-ignited" className="inline-block">
              <motion.div
                className="group relative cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {/* Glass Button */}
                <motion.button
                  className="relative px-12 py-6 bg-white/10 backdrop-blur-xl border border-white/20 text-white font-bold text-xl rounded-full shadow-2xl overflow-hidden transition-all duration-500 hover:bg-white/20 hover:border-white/30 hover:shadow-[0_20px_40px_rgba(59,130,246,0.4)]"
                  whileHover={{ 
                    boxShadow: "0 20px 40px rgba(59, 130, 246, 0.4)",
                  }}
                >
                  {/* Glass shimmer effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full"
                    animate={{
                      translateX: ['-100%', '200%']
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatDelay: 3,
                      ease: "easeInOut"
                    }}
                  />
                  
                  <span className="relative z-10 flex items-center gap-3">
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
                </motion.button>
              </motion.div>
            </Link>
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

      {/* Premium floating particles with magic trails */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute rounded-full ${
              i % 4 === 0 ? 'w-2 h-2 bg-gradient-to-r from-blue-400/60 to-cyan-400/60' :
              i % 4 === 1 ? 'w-1.5 h-1.5 bg-gradient-to-r from-purple-400/50 to-pink-400/50' :
              i % 4 === 2 ? 'w-1 h-1 bg-gradient-to-r from-yellow-400/40 to-orange-400/40' :
              'w-0.5 h-0.5 bg-white/30'
            } shadow-lg`}
            initial={{
              x: `${Math.random() * 100}%`,
              y: '110%',
              scale: 0,
              opacity: 0,
            }}
            animate={{
              y: '-10%',
              x: `${Math.random() * 100}%`,
              scale: [0, 1, 1, 0],
              opacity: [0, 0.8, 0.8, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: Math.random() * 20 + 15,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 10,
            }}
          />
        ))}
        
        {/* Magical star bursts */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`star-${i}`}
            className="absolute"
            style={{
              left: `${20 + Math.random() * 60}%`,
              top: `${20 + Math.random() * 60}%`,
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
              rotate: [0, 180],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: Math.random() * 8,
              ease: "easeInOut"
            }}
          >
            <div className="relative">
              <div className="w-1 h-6 bg-gradient-to-t from-transparent via-white/60 to-transparent rotate-0" />
              <div className="w-1 h-6 bg-gradient-to-t from-transparent via-white/60 to-transparent rotate-45 absolute top-0" />
              <div className="w-1 h-6 bg-gradient-to-t from-transparent via-white/60 to-transparent rotate-90 absolute top-0" />
              <div className="w-1 h-6 bg-gradient-to-t from-transparent via-white/60 to-transparent rotate-135 absolute top-0" />
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}