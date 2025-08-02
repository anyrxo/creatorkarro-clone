'use client'

import { useEffect, useRef } from 'react'
import { BeautifulHero } from '@/components/BeautifulHero'
import { InfiniteGallery } from '@/components/InfiniteGallery'
import { Interactive3DCard } from '@/components/Interactive3DCard'
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion'
import { initInteractiveSounds, soundManager } from '@/lib/soundManager'
import { createRevealAnimation, createMagneticHover, revealAnimationStyles } from '@/lib/smoothScroll'
import TestimonialCarousel from '@/components/TestimonialCarousel'
import Link from 'next/link'
import Image from 'next/image'

export default function HomePage() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll()
  
  // Smooth spring for parallax effects
  const springConfig = { damping: 15, stiffness: 100 }
  const backgroundY = useSpring(useTransform(scrollYProgress, [0, 1], [0, -300]), springConfig)

  useEffect(() => {
    // Initialize sounds
    initInteractiveSounds()
    
    // Start ambient sound on first interaction
    const startAmbient = () => {
      soundManager.startAmbient()
      window.removeEventListener('click', startAmbient)
    }
    window.addEventListener('click', startAmbient)

    // Initialize reveal animations
    const reveals = document.querySelectorAll('.reveal-animation')
    createRevealAnimation(reveals)

    // Add magnetic hover to buttons
    const buttons = document.querySelectorAll('.magnetic-button')
    buttons.forEach(button => {
      createMagneticHover(button as HTMLElement, 0.3)
    })

    // Add reveal animation styles
    const style = document.createElement('style')
    style.textContent = revealAnimationStyles
    document.head.appendChild(style)

    return () => {
      soundManager.stopAmbient()
      window.removeEventListener('click', startAmbient)
    }
  }, [])

  const courses = [
    {
      id: 'instagram-ignited',
      title: 'Instagram Ignited',
      subtitle: '0 to 500K Followers',
      description: 'Transform your Instagram into a thriving business with viral strategies.',
      gradient: 'from-blue-600 to-cyan-600',
      icon: '📱',
      stats: '8,000+ students',
      link: '/instagram-ignited'
    },
    {
      id: 'digital-products',
      title: 'Digital Products',
      subtitle: 'Passive Income Empire',
      description: 'Create and sell digital products that generate income while you sleep.',
      gradient: 'from-green-600 to-emerald-600',
      icon: '💰',
      stats: '3,000+ students',
      link: '/digital-products'
    },
    {
      id: 'n8n-automations',
      title: 'N8N AI Automations',
      subtitle: 'Automate Everything',
      description: 'Build AI-powered systems that work 24/7 for your business.',
      gradient: 'from-purple-600 to-pink-600',
      icon: '🤖',
      stats: '1,800+ students',
      link: '/n8n-ai-automations'
    }
  ]

  const testimonials = [
    {
      name: "Marcus Rivera",
      role: "Content Creator",
      course: "Instagram Ignited",
      avatar: "https://ext.same-assets.com/1161517358/1430260149.webp",
      content: "Instagram Ignited completely transformed my content strategy! I went from 800 followers to 125K in just 8 months. My engagement rate jumped from 2% to 12%, and I'm now making $15K/month!",
      rating: 5
    },
    {
      name: "Jake Chen",
      role: "Digital Entrepreneur", 
      course: "Digital Products",
      avatar: "https://ext.same-assets.com/1161517358/3465280603.webp",
      content: "The Digital Products course is pure gold! I launched my first info product and hit $10K in sales within 3 weeks. Now running a sustainable $25K/month business!",
      rating: 5
    },
    {
      name: "Devon Mitchell",
      role: "Automation Specialist",
      course: "N8N AI Automations", 
      avatar: "https://ext.same-assets.com/1161517358/366375215.webp",
      content: "N8N AI Automations saved me 40+ hours per week! Automated my entire content workflow. The productivity gains are incredible!",
      rating: 5
    }
  ]

  const partners = [
    { name: 'Google Gemini', logo: '/partners/google-gemini.png' },
    { name: 'Claude AI', logo: '/partners/claude.png' },
    { name: 'n8n', logo: '/partners/n8n.png' },
    { name: 'Make', logo: '/partners/make.png' },
    { name: 'Zapier', logo: '/partners/zapier.png' },
    { name: 'NVIDIA', logo: '/partners/nvidia.png' }
  ]

  return (
    <div ref={containerRef} className="bg-black overflow-hidden">
      {/* Beautiful Hero Section */}
      <BeautifulHero />

      {/* Floating Partners Section */}
      <section className="relative py-20 bg-gradient-to-b from-black to-zinc-900">
        <motion.div 
          className="absolute inset-0"
          style={{ y: backgroundY }}
        >
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
        </motion.div>

        <div className="relative z-10 container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-sm text-zinc-400 uppercase tracking-[0.2em] mb-4">TRUSTED BY INDUSTRY LEADERS</p>
            <div className="flex flex-wrap justify-center items-center gap-12">
              {partners.map((partner, index) => (
                <motion.div
                  key={partner.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="group"
                >
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={120}
                    height={40}
                    className="h-10 w-auto filter invert opacity-40 group-hover:opacity-80 transition-all duration-300"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3D Interactive Courses Section */}
      <section className="relative py-20 bg-zinc-900">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-900 via-black to-zinc-900" />
        </div>

        <div className="relative z-10 container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Transform Your
              <span className="block bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Creative Journey
              </span>
            </h2>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
              Master the tools and strategies that turned thousands of creators into successful entrepreneurs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {courses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <Link href={course.link} className="block magnetic-button">
                  <Interactive3DCard>
                    <div className="text-center space-y-4">
                      <motion.div 
                        className="text-6xl"
                        animate={{ 
                          rotate: [0, 10, -10, 0],
                          scale: [1, 1.1, 1]
                        }}
                        transition={{ 
                          duration: 4,
                          repeat: Infinity,
                          repeatDelay: 2
                        }}
                      >
                        {course.icon}
                      </motion.div>
                      <h3 className="text-2xl font-bold text-white">{course.title}</h3>
                      <p className="text-sm text-zinc-400 uppercase tracking-wider">{course.subtitle}</p>
                      <p className="text-zinc-400">{course.description}</p>
                      <div className="pt-4">
                        <motion.div
                          className={`h-1 bg-gradient-to-r ${course.gradient} rounded-full`}
                          initial={{ scaleX: 0 }}
                          whileInView={{ scaleX: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: 0.5 }}
                        />
                        <p className="text-sm text-zinc-500 mt-4">{course.stats}</p>
                      </div>
                    </div>
                  </Interactive3DCard>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Beautiful Stats Section */}
      <section className="relative py-20 bg-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-4 gap-8 text-center"
          >
            {[
              { value: '12K+', label: 'Active Students' },
              { value: '500K', label: 'Followers Built' },
              { value: '$2M+', label: 'Student Revenue' },
              { value: '4.9★', label: 'Average Rating' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <motion.div
                  className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent"
                  whileHover={{ scale: 1.1 }}
                >
                  {stat.value}
                </motion.div>
                <p className="text-zinc-500 mt-2">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials with Beautiful Animation */}
      <section className="relative py-20 bg-gradient-to-b from-black via-zinc-900 to-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Success Stories
            </h2>
            <p className="text-xl text-zinc-400">From our incredible community</p>
          </motion.div>

          <TestimonialCarousel 
            testimonials={testimonials}
            autoPlay={true}
            interval={5000}
          />
        </div>
      </section>

      {/* Infinite Gallery Section */}
      <InfiniteGallery />

      {/* Final CTA with Beautiful Design */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 via-black to-black" />
          <motion.div
            className="absolute inset-0"
            animate={{
              backgroundPosition: ['0% 0%', '100% 100%']
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: 'reverse'
            }}
            style={{
              backgroundImage: 'radial-gradient(circle at 20% 50%, purple 0%, transparent 50%), radial-gradient(circle at 80% 80%, blue 0%, transparent 50%)',
              backgroundSize: '200% 200%'
            }}
          />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-6xl md:text-8xl font-bold text-white mb-8">
              Ready to
              <span className="block bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Create?
              </span>
            </h2>
            <p className="text-2xl text-zinc-400 mb-12">
              Join thousands of creators building their dream businesses
            </p>
            <motion.div
              className="inline-block"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/instagram-ignited"
                className="magnetic-button inline-block px-12 py-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-xl rounded-full hover:shadow-[0_0_40px_rgba(168,85,247,0.5)] transition-all duration-300"
              >
                Start Your Journey
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}