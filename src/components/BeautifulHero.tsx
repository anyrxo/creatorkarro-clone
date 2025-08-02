'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion'
import Link from 'next/link'

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

  // Text scramble effect
  const scrambleText = (text: string, duration: number = 1000) => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    let scrambled = text
    let currentIndex = 0
    
    const interval = setInterval(() => {
      scrambled = text
        .split('')
        .map((char, index) => {
          if (index < currentIndex) return text[index]
          return chars[Math.floor(Math.random() * chars.length)]
        })
        .join('')
      
      if (titleRef.current) {
        titleRef.current.textContent = scrambled
      }
      
      currentIndex++
      if (currentIndex > text.length) {
        clearInterval(interval)
        if (titleRef.current) {
          titleRef.current.textContent = text
        }
      }
    }, duration / text.length)
  }

  useEffect(() => {
    if (isInView && titleRef.current) {
      scrambleText('CREATE THE FUTURE', 1500)
    }
  }, [isInView])

  return (
    <motion.section 
      ref={containerRef}
      className="relative min-h-screen overflow-hidden bg-gradient-to-b from-black via-zinc-900 to-black"
      style={{ y, opacity, scale }}
    >
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute w-[800px] h-[800px] rounded-full bg-gradient-to-r from-purple-600/20 to-blue-600/20 blur-3xl"
          animate={{
            x: mousePosition.x * 100,
            y: mousePosition.y * 100,
          }}
          transition={{ type: "spring", damping: 30 }}
          style={{ left: '20%', top: '10%' }}
        />
        <motion.div
          className="absolute w-[600px] h-[600px] rounded-full bg-gradient-to-r from-pink-600/20 to-purple-600/20 blur-3xl"
          animate={{
            x: mousePosition.x * -80,
            y: mousePosition.y * -80,
          }}
          transition={{ type: "spring", damping: 25 }}
          style={{ right: '10%', bottom: '20%' }}
        />
        <motion.div
          className="absolute w-[400px] h-[400px] rounded-full bg-gradient-to-r from-blue-600/20 to-cyan-600/20 blur-3xl"
          animate={{
            x: mousePosition.x * 60,
            y: mousePosition.y * -60,
          }}
          transition={{ type: "spring", damping: 35 }}
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
          
          <h1 
            ref={titleRef}
            className="mb-8 text-6xl md:text-8xl lg:text-9xl font-bold bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent"
            style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
          >
            CREATE THE FUTURE
          </h1>

          <motion.p 
            className="mb-12 text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.8 }}
          >
            Join 12,000+ creators who've built thriving businesses with our proven 
            Instagram growth, digital products, and AI automation strategies.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2.2 }}
          >
            <Link href="/instagram-ignited">
              <motion.button
                className="group relative px-8 py-4 bg-white text-black font-medium rounded-full overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">Start Learning Today</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.span
                  className="absolute inset-0 flex items-center justify-center text-white font-medium"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  Start Learning Today
                </motion.span>
              </motion.button>
            </Link>

            <Link href="/story">
              <motion.button
                className="px-8 py-4 border border-zinc-700 text-white font-medium rounded-full backdrop-blur-sm hover:bg-white/5 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Read My Story
              </motion.button>
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

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
            initial={{
              x: `${Math.random() * 100}%`,
              y: '110%',
            }}
            animate={{
              y: '-10%',
              x: `${Math.random() * 100}%`,
            }}
            transition={{
              duration: Math.random() * 20 + 10,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 10,
            }}
          />
        ))}
      </div>
    </motion.section>
  )
}