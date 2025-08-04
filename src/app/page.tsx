'use client'

import { useEffect, useRef } from 'react'
import { BeautifulHero } from '@/components/BeautifulHero'
import { Interactive3DCard } from '@/components/Interactive3DCard'
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion'
import { initInteractiveSounds, soundManager } from '@/lib/soundManager'
import { createRevealAnimation, createMagneticHover, revealAnimationStyles } from '@/lib/smoothScroll'
import TestimonialCarousel from '@/components/TestimonialCarousel'
import PartnerSlider from '@/components/PartnerSlider'
import Link from 'next/link'
import Image from 'next/image'
import AnimatedGradientText from '@/components/magicui/animated-gradient-text'
import NumberTicker from '@/components/magicui/number-ticker'
import Marquee from '@/components/magicui/marquee'
import ShimmerButton from '@/components/magicui/shimmer-button'
import WordRotate from '@/components/magicui/word-rotate'
import BlurIn from '@/components/magicui/blur-in'
import TypingAnimation from '@/components/magicui/typing-animation'
import PainPointIcon from '@/components/PainPointIcon'
import { ChevronRight, Smartphone, CreditCard, Bot } from 'lucide-react'

export default function HomePage() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll()
  
  // Smooth spring for parallax effects
  const springConfig = { damping: 15, stiffness: 100 }
  const backgroundY = useSpring(useTransform(scrollYProgress, [0, 1], [0, -300]), springConfig)

  useEffect(() => {
    // Removed sound initialization for better performance and user experience
    // Sounds can be enabled later with user opt-in

    // Initialize reveal animations with better performance
    const reveals = document.querySelectorAll('.reveal-animation')
    if (reveals.length > 0) {
      createRevealAnimation(reveals)
    }

    // Add magnetic hover with reduced intensity for better accessibility
    const buttons = document.querySelectorAll('.magnetic-button')
    buttons.forEach(button => {
      createMagneticHover(button as HTMLElement, 0.15) // Reduced from 0.3 to 0.15
    })

    // Add reveal animation styles efficiently
    if (!document.getElementById('reveal-styles')) {
      const style = document.createElement('style')
      style.id = 'reveal-styles'
      style.textContent = revealAnimationStyles
      document.head.appendChild(style)
    }

    return () => {
      // Cleanup any remaining event listeners
      const styleElement = document.getElementById('reveal-styles')
      if (styleElement) {
        styleElement.remove()
      }
    }
  }, [])

  const courses = [
    {
      id: 'instagram-ignited',
      title: 'Instagram Ignited',
      subtitle: '0 to 500K Followers',
      description: 'Transform your Instagram into a thriving business with viral strategies.',
      gradient: 'from-blue-600 to-cyan-600',
      icon: 'smartphone',
      stats: '6,000+ students',
      link: '/instagram-ignited'
    },
    {
      id: 'digital-products',
      title: 'Digital Products',
      subtitle: 'Passive Income Empire',
      description: 'Create and sell digital products that generate income while you sleep.',
      gradient: 'from-green-600 to-emerald-600',
      icon: 'credit-card',
      stats: '3,500+ students',
      link: '/digital-products'
    },
    {
      id: 'n8n-automations',
      title: 'N8N AI Automations',
      subtitle: 'Automate Everything',
      description: 'Build AI-powered systems that work 24/7 for your business.',
      gradient: 'from-purple-600 to-pink-600',
      icon: 'bot',
      stats: '2,000+ students',
      link: '/n8n-ai-automations'
    }
  ]

  const testimonials = [
    {
      name: "Marcus Rivera",
      role: "Content Creator",
      course: "Instagram Ignited",
      avatar: "https://i.pravatar.cc/150?img=32",
      content: "Instagram Ignited completely transformed my content strategy! I went from 800 followers to 125K in just 8 months. My engagement rate jumped from 2% to 12%, and I'm now making $15K/month!",
      rating: 5
    },
    {
      name: "Jake Chen",
      role: "Digital Entrepreneur", 
      course: "Digital Products",
      avatar: "https://i.pravatar.cc/150?img=45",
      content: "The Digital Products course is pure gold! I launched my first info product and hit $10K in sales within 3 weeks. Now running a sustainable $25K/month business!",
      rating: 5
    },
    {
      name: "Devon Mitchell",
      role: "Automation Specialist",
      course: "N8N AI Automations", 
      avatar: "https://i.pravatar.cc/150?img=78",
      content: "N8N AI Automations saved me 40+ hours per week! Automated my entire content workflow. The productivity gains are incredible!",
      rating: 5
    }
  ]

  const features = [
    {
      icon: 'rocket',
      title: 'Launch in Days, Not Months',
      description: 'Get your first 1000 followers within 30 days using our proven growth framework'
    },
    {
      icon: 'diamond',
      title: 'Premium Templates & Tools',
      description: 'Access our exclusive library of viral content templates and automation tools'
    },
    {
      icon: 'graduation',
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
                 <hr className="mx-2 h-4 w-[1px] shrink-0 bg-zinc-300" />{" "}
                <span className="inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent">
                  Introducing our proven system
                </span>
                <ChevronRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
              </AnimatedGradientText>
            </div>
            <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15, duration: 0.6 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="text-center group cursor-pointer"
                >
                  <motion.div
                    className="inline-flex items-center justify-center w-20 h-20 mb-6 rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-blue-500/20 group-hover:border-blue-400/40 group-hover:bg-blue-500/20 transition-all duration-300"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <PainPointIcon 
                      type={feature.icon as any} 
                      size={32} 
                      className="text-blue-400 group-hover:text-blue-300 transition-colors duration-300" 
                      color="currentColor"
                    />
                  </motion.div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors duration-300">{feature.title}</h3>
                  <p className="text-zinc-300 leading-relaxed text-sm md:text-base group-hover:text-zinc-200 transition-colors duration-300">{feature.description}</p>
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
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              <BlurIn
                word="Transform Your"
                className="text-5xl md:text-7xl font-bold text-white"
                duration={0.8}
              />
              <div className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                <WordRotate
                  words={["Creative Journey", "Digital Empire", "Content Strategy", "Revenue Streams"]}
                  className="text-5xl md:text-7xl font-bold"
                  duration={3000}
                />
              </div>
            </h1>
            <p className="text-xl text-zinc-200 max-w-2xl mx-auto">
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
                <Link href={course.link} className="block magnetic-button h-full focus:outline-none focus:ring-4 focus:ring-blue-500/50" aria-label={`View ${course.title} course details`}>
                  <Interactive3DCard>
                    <div className="text-center space-y-4 h-full flex flex-col justify-between p-8">
                      <motion.div 
                        className="flex justify-center"
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
                        {course.icon === 'smartphone' && <Smartphone size={64} className="text-blue-400" />}
                        {course.icon === 'credit-card' && <CreditCard size={64} className="text-green-400" />}
                        {course.icon === 'bot' && <Bot size={64} className="text-purple-400" />}
                      </motion.div>
                      <h3 className="text-2xl font-bold text-white">{course.title}</h3>
                      <p className="text-sm text-zinc-300 uppercase tracking-wider">{course.subtitle}</p>
                      <p className="text-zinc-200">{course.description}</p>
                      <div className="pt-4">
                        <motion.div
                          className={`h-1 bg-gradient-to-r ${course.gradient} rounded-full`}
                          initial={{ scaleX: 0 }}
                          whileInView={{ scaleX: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: 0.5 }}
                        />
                        <p className="text-sm text-zinc-300 mt-4">{course.stats}</p>
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
      <section className="relative py-20 bg-black overflow-hidden">
        <div className="container mx-auto px-6 sm:px-8 max-w-7xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center"
          >
            {[
              { value: 13000, suffix: '+', label: 'Active Students', displayValue: '13K' },
              { value: 10000000, suffix: '+', label: 'Followers Built', displayValue: '10M' },
              { value: 5000000, prefix: '$', suffix: '+', label: 'Student Revenue', displayValue: '5M' },
              { value: 4.9, suffix: '★', label: 'Average Rating', decimals: 1 }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group px-4 py-4"
              >
                <motion.div
                  className="space-y-2"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold text-white">
                    <span>{stat.prefix}</span>
                    {stat.displayValue ? (
                      <span>{stat.displayValue}</span>
                    ) : (
                      <NumberTicker 
                        value={stat.value} 
                        delay={0.5 + index * 0.2}
                        decimalPlaces={stat.decimals || 0}
                        className="inline-block"
                      />
                    )}
                    <span>{stat.suffix}</span>
                  </div>
                  <p className="text-sm sm:text-base text-zinc-300 font-medium">{stat.label}</p>
                </motion.div>
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
            <p className="text-lg md:text-xl text-zinc-300 leading-relaxed">From our incredible community of successful creators</p>
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
            "Just hit 100K followers using these strategies! ",
            "Made my first $10K month with digital products ",
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
              <span className="text-zinc-200">{review}</span>
            </div>
          ))}
        </Marquee>
      </section>

      {/* Partner Slider */}
      <PartnerSlider />

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
            <TypingAnimation
              text="Master Every Skill"
              className="text-5xl md:text-7xl font-bold text-white mb-6"
              duration={150}
            />
            <p className="text-lg md:text-xl text-zinc-200 max-w-2xl mx-auto leading-relaxed">
              From viral content creation to automated business systems that scale
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              {
                icon: 'target',
                title: 'Viral Content Strategy',
                description: 'Create content that reaches millions and drives real engagement'
              },
              {
                icon: 'analytics',
                title: 'Growth Analytics',
                description: 'Track, analyze, and optimize your growth with data-driven insights'
              },
              {
                icon: 'automation',
                title: 'AI Automation',
                description: 'Build systems that work 24/7 while you focus on creativity'
              },
              {
                icon: 'monetization',
                title: 'Monetization',
                description: 'Turn your audience into a sustainable business empire'
              },
              {
                icon: 'content',
                title: 'Content Creation',
                description: 'Professional tools and techniques for stunning visuals'
              },
              {
                icon: 'platform',
                title: 'Platform Mastery',
                description: 'Dominate Instagram, TikTok, YouTube, and emerging platforms'
              },
              {
                icon: 'scaling',
                title: 'Scaling Systems',
                description: 'Go from solo creator to automated business owner'
              },
              {
                icon: 'psychology',
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
                <div className="p-6 lg:p-8 rounded-2xl bg-zinc-900/60 backdrop-blur-sm border border-zinc-800 hover:border-blue-500/50 hover:bg-zinc-800/60 transition-all duration-300 h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative z-10">
                    <motion.div 
                      className="inline-flex items-center justify-center w-14 h-14 mb-6 rounded-xl bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors duration-300"
                      whileHover={{ scale: 1.1 }}
                    >
                      <PainPointIcon 
                        type={skill.icon as any} 
                        size={28} 
                        className="text-blue-400 group-hover:text-blue-300 transition-colors duration-300" 
                        color="currentColor"
                      />
                    </motion.div>
                    <h3 className="text-lg lg:text-xl font-semibold text-white mb-3 group-hover:text-blue-200 transition-colors duration-300">{skill.title}</h3>
                    <p className="text-sm lg:text-base text-zinc-300 leading-relaxed group-hover:text-zinc-200 transition-colors duration-300">{skill.description}</p>
                  </div>
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
                        <p className="text-zinc-200">{point.description}</p>
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
                          <p className="text-sm text-zinc-300 mt-1">{stat.label}</p>
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
            <div className="text-6xl md:text-8xl font-bold text-white mb-8">
              <BlurIn
                word="Ready to"
                className="text-6xl md:text-8xl font-bold text-white"
                duration={1}
              />
              <div className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                <WordRotate
                  words={["Create?", "Scale?", "Grow?", "Succeed?"]}
                  className="text-6xl md:text-8xl font-bold"
                  duration={2500}
                />
              </div>
            </div>
            <p className="text-xl md:text-2xl text-zinc-200 mb-12 leading-relaxed max-w-3xl mx-auto">
              Join 13,000+ creators who've already transformed their passion into profitable businesses
            </p>
            <motion.div
              className="inline-block"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href="/instagram-ignited" className="focus:outline-none focus:ring-4 focus:ring-blue-500/50" aria-label="Start your journey with Instagram Ignited course">
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