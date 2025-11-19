'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion'
import Link from 'next/link'
import ScrambleText from '@/components/magicui/scramble-text'
import StandardCTA from '@/components/StandardCTA'
import { ChevronDown } from 'lucide-react'

export function BeautifulHero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
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

  const springConfig = { damping: 15, stiffness: 100 }
  const y = useSpring(useTransform(scrollYProgress, [0, 1], [0, isMobile ? -50 : -150]), springConfig)
  const opacity = useSpring(useTransform(scrollYProgress, [0, 0.5], [1, 0]), springConfig)
  const scale = useSpring(useTransform(scrollYProgress, [0, 0.5], [1, 0.95]), springConfig)

  return (
    <motion.section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
      style={{ opacity }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient Orbs - Smoother & Slower */}
        <motion.div 
          className="absolute w-[800px] h-[800px] rounded-full bg-blue-600/10 blur-[120px]"
          animate={{
            x: ['-20%', '20%', '-20%'],
            y: ['-20%', '10%', '-20%'],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          style={{ left: '10%', top: '0%' }}
        />
        <motion.div 
          className="absolute w-[600px] h-[600px] rounded-full bg-purple-600/10 blur-[100px]"
          animate={{
            x: ['20%', '-20%', '20%'],
            y: ['20%', '-10%', '20%'],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          style={{ right: '10%', bottom: '0%' }}
        />
        
        {/* Heartbeat Grid Pulsing from Center */}
        {!isMobile && (
          <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30">
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
      </div>

      {/* Content */}
      <motion.div 
        className="relative z-10 container mx-auto px-4 text-center"
        style={{ y, scale }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-block mb-4"
          >
            <span className="py-1 px-3 rounded-full border border-white/10 bg-white/5 text-xs md:text-sm text-zinc-400 backdrop-blur-sm tracking-wide font-medium uppercase">
              $5M+ in Student Earnings
            </span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/50 leading-none">
             <ScrambleText
              text="CREATE THE FUTURE"
              className="block"
              scrambleSpeed={0.5}
              revealSpeed={0.8}
            />
          </h1>

          <p className="max-w-2xl mx-auto text-lg md:text-xl text-zinc-400 leading-relaxed">
            The exact systems used by 4,000+ students to build profitable businesses. 
            <span className="block mt-2 text-zinc-500">From zero to first revenue in 45 days.</span>
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8"
          >
            <StandardCTA
              variant="primary"
              text="Start Building"
              href="#empire-pass"
              size="lg"
            />
            <StandardCTA
              variant="secondary"
              text="View Courses"
              href="#courses"
              size="lg"
              className="bg-white/5 hover:bg-white/10 border border-white/10"
            />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-zinc-500"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDown size={32} strokeWidth={1.5} />
      </motion.div>
    </motion.section>
  )
}
