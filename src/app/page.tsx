'use client'

import { useEffect, useRef } from 'react'
import { BeautifulHero } from '@/components/BeautifulHero'
import { Interactive3DCard } from '@/components/Interactive3DCard'
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion'
import { initInteractiveSounds, soundManager } from '@/lib/soundManager'
import { createRevealAnimation, createMagneticHover, revealAnimationStyles } from '@/lib/smoothScroll'
import TestimonialCarousel from '@/components/TestimonialCarousel'
import Link from 'next/link'
import Image from 'next/image'
import AnimatedGradientText from '@/components/magicui/animated-gradient-text'
import NumberTicker from '@/components/magicui/number-ticker'
import Marquee from '@/components/magicui/marquee'
import ShimmerButton from '@/components/magicui/shimmer-button'
import { ChevronRight } from 'lucide-react'

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

  const features = [
    {
      icon: '🚀',
      title: 'Launch in Days, Not Months',
      description: 'Get your first 1000 followers within 30 days using our proven growth framework'
    },
    {
      icon: '💎',
      title: 'Premium Templates & Tools',
      description: 'Access our exclusive library of viral content templates and automation tools'
    },
    {
      icon: '🎓',
      title: 'Step-by-Step Training',
      description: 'Follow along with detailed video tutorials and implementation guides'
    }
  ]

  return (
    <div ref={containerRef} className="bg-black overflow-hidden">
      {/* Beautiful Hero Section */}
      <BeautifulHero />

      {/* Key Features Section */}
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
            className="max-w-6xl mx-auto"
          >
            <div className="flex justify-center mb-8">
              <AnimatedGradientText>
                🚀 <hr className="mx-2 h-4 w-[1px] shrink-0 bg-gray-300" />{" "}
                <span className="inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent">
                  Introducing our proven system
                </span>
                <ChevronRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
              </AnimatedGradientText>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{ y: -5 }}
                  className="text-center"
                >
                  <motion.div
                    className="inline-block text-5xl mb-4"
                    animate={{ 
                      rotate: [0, 10, -10, 0],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ 
                      duration: 3,
                      repeat: Infinity,
                      repeatDelay: index + 1
                    }}
                  >
                    {feature.icon}
                  </motion.div>
                  <h3 className="text-2xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-zinc-400">{feature.description}</p>
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
                        {index === 0 && (
                          <div className="mt-4 flex justify-center">
                            <AnimatedGradientText className="text-xs">
                              <span className="inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent">
                                Most Popular
                              </span>
                            </AnimatedGradientText>
                          </div>
                        )}
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
              { value: 12000, suffix: '+', label: 'Active Students' },
              { value: 500000, suffix: '', label: 'Followers Built' },
              { value: 2000000, prefix: '$', suffix: '+', label: 'Student Revenue' },
              { value: 4.9, suffix: '★', label: 'Average Rating', decimals: 1 }
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
                  {stat.prefix}
                  <NumberTicker 
                    value={stat.value} 
                    delay={0.5 + index * 0.2}
                    decimalPlaces={stat.decimals || 0}
                  />
                  {stat.suffix}
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

      {/* Scrolling Testimonials Marquee */}
      <section className="relative py-12 bg-black overflow-hidden">
        <Marquee className="[--duration:40s]" pauseOnHover>
          {[
            "Just hit 100K followers using these strategies! 🚀",
            "Made my first $10K month with digital products 💰",
            "The automation course saved me 40 hours per week!",
            "From 0 to 50K in 3 months - this system works!",
            "Best investment I've made in my creator journey",
            "The community support is incredible!",
            "Already seeing massive growth in week 1",
            "These strategies actually work - 250K followers now!"
          ].map((review, index) => (
            <div
              key={index}
              className="mx-4 flex items-center gap-2 rounded-lg bg-zinc-900/50 px-6 py-3 backdrop-blur-sm border border-zinc-800"
            >
              <span className="text-zinc-400">{review}</span>
            </div>
          ))}
        </Marquee>
      </section>

      {/* What You'll Learn Section */}
      <section className="relative py-20 bg-black overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-900 to-black" />
        </div>

        <div className="relative z-10 container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Master Every Skill
            </h2>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
              From viral content creation to automated business systems
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              {
                icon: '🎯',
                title: 'Viral Content Strategy',
                description: 'Create content that reaches millions and drives real engagement'
              },
              {
                icon: '📊',
                title: 'Growth Analytics',
                description: 'Track, analyze, and optimize your growth with data-driven insights'
              },
              {
                icon: '🤖',
                title: 'AI Automation',
                description: 'Build systems that work 24/7 while you focus on creativity'
              },
              {
                icon: '💸',
                title: 'Monetization',
                description: 'Turn your audience into a sustainable business empire'
              },
              {
                icon: '🎨',
                title: 'Content Creation',
                description: 'Professional tools and techniques for stunning visuals'
              },
              {
                icon: '📱',
                title: 'Platform Mastery',
                description: 'Dominate Instagram, TikTok, YouTube, and emerging platforms'
              },
              {
                icon: '🚀',
                title: 'Scaling Systems',
                description: 'Go from solo creator to automated business owner'
              },
              {
                icon: '🧠',
                title: 'AI Psychology',
                description: 'Understand what makes content viral and audiences engage'
              }
            ].map((skill, index) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="relative group"
              >
                <div className="p-6 rounded-2xl bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 hover:border-zinc-700 transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <motion.div 
                    className="text-4xl mb-4"
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
                  >
                    {skill.icon}
                  </motion.div>
                  <h3 className="text-xl font-semibold text-white mb-2">{skill.title}</h3>
                  <p className="text-sm text-zinc-400">{skill.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="relative py-20 bg-gradient-to-b from-black via-zinc-900 to-black">
        <div className="absolute inset-0">
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
              backgroundSize: '200% 200%',
              opacity: 0.1
            }}
          />
        </div>

        <div className="relative z-10 container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
                  Why Creators
                  <span className="block bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                    Choose Us
                  </span>
                </h2>
                <div className="space-y-6">
                  {[
                    {
                      title: 'Battle-Tested Strategies',
                      description: 'Every technique we teach has been proven to work across thousands of successful accounts'
                    },
                    {
                      title: 'Real Results, Fast',
                      description: 'Our students see measurable growth within the first 30 days of implementation'
                    },
                    {
                      title: 'Lifetime Access & Updates',
                      description: 'Get instant access to all future updates and new strategies as platforms evolve'
                    },
                    {
                      title: 'Community Support',
                      description: 'Join a thriving community of creators who support and inspire each other daily'
                    }
                  ].map((point, index) => (
                    <motion.div
                      key={point.title}
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex gap-4"
                    >
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-1">{point.title}</h3>
                        <p className="text-zinc-400">{point.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="relative rounded-2xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20" />
                  <div className="p-8 bg-zinc-900/50 backdrop-blur-sm border border-zinc-800">
                    <div className="grid grid-cols-2 gap-6">
                      {[
                        { value: '95%', label: 'Success Rate' },
                        { value: '24/7', label: 'Support' },
                        { value: '30+', label: 'Hours of Content' },
                        { value: '100+', label: 'Templates' }
                      ].map((stat, index) => (
                        <motion.div
                          key={stat.label}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.5 + index * 0.1 }}
                          className="text-center"
                        >
                          <div className="text-3xl font-bold bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
                            {stat.value}
                          </div>
                          <p className="text-sm text-zinc-500 mt-1">{stat.label}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Floating elements */}
                <motion.div
                  className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 blur-2xl"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0.8, 0.5]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity
                  }}
                />
                <motion.div
                  className="absolute -bottom-4 -left-4 w-32 h-32 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 blur-2xl"
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.5, 0.7, 0.5]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity
                  }}
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

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
              <Link href="/instagram-ignited">
                <ShimmerButton
                  className="shadow-2xl"
                  shimmerColor="#ffffff"
                  shimmerSize="0.1em"
                  background="linear-gradient(135deg, #2563eb, #9333ea)"
                  borderRadius="9999px"
                >
                  <span className="whitespace-nowrap text-lg font-bold px-6 py-2">
                    Start Your Journey
                  </span>
                </ShimmerButton>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}