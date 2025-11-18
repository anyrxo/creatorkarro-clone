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
import StandardCTA from '@/components/StandardCTA'
import AIContentDeclaration from '@/components/seo/AIContentDeclaration'
import { ChevronRight, Smartphone, CreditCard, Bot } from 'lucide-react'

export default function HomePage() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll()
  
  // Smooth spring for parallax effects
  const springConfig = { damping: 15, stiffness: 100 }
  const backgroundY = useSpring(useTransform(scrollYProgress, [0, 1], [0, -300]), springConfig)

  useEffect(() => {
    // Simplified initialization to prevent crashes on static export
    try {
      // Initialize reveal animations with better performance
      const reveals = document.querySelectorAll('.reveal-animation')
      if (reveals.length > 0) {
        createRevealAnimation(reveals)
      }

      // Add magnetic hover with reduced intensity for better accessibility
      const buttons = document.querySelectorAll('.magnetic-button')
      buttons.forEach(button => {
        try {
          createMagneticHover(button as HTMLElement, 0.15)
        } catch (e) {
          // Fail silently if hover effect fails
        }
      })

      // Add reveal animation styles efficiently
      if (!document.getElementById('reveal-styles')) {
        const style = document.createElement('style')
        style.id = 'reveal-styles'
        style.textContent = revealAnimationStyles
        document.head.appendChild(style)
      }
    } catch (error) {
      // Fail gracefully if animations can't initialize
      console.error('Animation initialization failed:', error)
    }

    return () => {
      try {
        // Cleanup any remaining event listeners
        const styleElement = document.getElementById('reveal-styles')
        if (styleElement) {
          styleElement.remove()
        }
      } catch (e) {
        // Ignore cleanup errors
      }
    }
  }, [])

  const courses = [
    {
      id: 'instagram-ignited',
      title: "Instagram Ignited",
      tagline: "Master Growth & Engagement in 2025",
      subtitle: '0 TO 500K FOLLOWERS SYSTEM',
      description: 'The exact growth blueprint that took 127 students from under 1K to 50K+ followers in 90 days. Learn the psychological hooks, viral frameworks, and automation systems that generated 10M+ combined follower growth. 2,000+ students earning $1.2M+ combined monthly revenue.',
      gradient: 'from-blue-600 to-cyan-600',
      icon: 'smartphone',
      stats: '2,000+ students • $1.2M+ student revenue',
      price: '$399',
      value: '$3,109',
      link: '/instagram-ignited'
    },
    {
      id: 'ai-influencers',
      title: 'AI Influencers',
      tagline: "Virtual Models & AI Content",
      subtitle: 'VIRTUAL MODELS & AI CONTENT',
      description: 'Build faceless creator brands generating $5K-$50K monthly through photorealistic AI models. Master ComfyUI workflows that produce unlimited content without cameras, models, or showing your face. Students running 10+ AI influencer accounts simultaneously.',
      gradient: 'from-pink-600 to-purple-600',
      icon: 'smartphone',
      stats: '1,500+ students • $800K+ student revenue',
      price: '$399',
      value: '$3,169',
      link: '/ai-influencers'
    },
    {
      id: 'digital-products',
      title: 'Digital Products',
      tagline: "Automated Business Empire",
      subtitle: 'AUTOMATED BUSINESS EMPIRE',
      description: 'Launch profitable digital products in 72 hours using N8N automation that handles customer onboarding, email sequences, and delivery while you sleep. Students averaging $8K-$25K monthly from automated info products with zero fulfillment work.',
      gradient: 'from-green-600 to-emerald-600',
      icon: 'credit-card',
      stats: '1,200+ students • $750K+ student revenue',
      price: '$399',
      value: '$5,959',
      link: '/digital-products'
    },
    {
      id: 'ai-automations',
      title: 'AI Automations',
      tagline: "AI-Powered Automation Agency",
      subtitle: 'AI AUTOMATION AGENCY & AI CONSULTING',
      description: 'Build a profitable AI automation agency offering AI-powered services to businesses. Master n8n, Zapier, Make + AI integrations (ChatGPT, Claude, Midjourney). Build AI chatbots, AI workflows, intelligent automation. Land $2K-$10K monthly AI service retainers serving 5-15 clients generating $8K-$35K monthly with AI automation.',
      gradient: 'from-orange-600 to-red-600',
      icon: 'bot',
      stats: '800+ students • $400K+ student revenue',
      price: '$399',
      value: '$2,197',
      link: '/ai-automations'
    }
  ]

  const testimonials = [
    {
      name: "Amanda Rivera",
      role: "Content Creator",
      course: "Instagram Ignited",
      avatar: "https://i.pravatar.cc/150?img=32",
      content: "Instagram Ignited completely transformed my content strategy! I went from 800 followers to 125K in just 8 months. My engagement rate jumped from 2% to 12%, and I'm now making $15K/month!",
      rating: 5
    },
    {
      name: "Sarah Mitchell",
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
      {/* SEO: AI Content Declaration for maximum discoverability */}
      <AIContentDeclaration
        title="Build Your Creator Empire: Master Instagram Growth, AI Influencers, AI Automation & Digital Products"
        description="IImagined.ai teaches proven systems for Instagram growth (0-500K followers), AI influencer creation, AI automation agencies, and digital products. Join 4,000+ students building real businesses."
        contentType="course"
        primaryTopic="Creator Economy & Digital Business Education"
        keywords={[
          'Instagram growth',
          'AI influencers',
          'ComfyUI',
          'AI automation',
          'digital products',
          'content creation',
          'social media marketing',
          'passive income',
          'online courses',
          'creator economy',
          'N8N automation',
          'AI chatbots',
          'Instagram monetization',
          'viral content',
          'business automation'
        ]}
        author="Anyro"
        datePublished="2024-01-01"
        dateModified="2025-10-31"
        readingTime={5}
        isAccessibleForFree={true}
        expertiseLevel="beginner"
      />

      <h1 className="sr-only">
        Build Your Creator Empire: Master Instagram Growth, AI Influencers, AI Automation & Digital Products
      </h1>
      {/* Beautiful Hero Section */}
      <BeautifulHero />

      {/* What Makes IImagined Different */}
      <section className="relative py-32 bg-gradient-to-b from-black to-zinc-900">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
          <motion.div
            className="absolute inset-0"
            animate={{
              backgroundPosition: ['0% 0%', '100% 100%']
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              repeatType: 'reverse'
            }}
            style={{
              backgroundImage: 'radial-gradient(circle at 30% 40%, rgba(59, 130, 246, 0.05) 0%, transparent 50%), radial-gradient(circle at 70% 60%, rgba(147, 51, 234, 0.05) 0%, transparent 50%)',
              backgroundSize: '200% 200%'
            }}
          />
        </div>

        <div className="relative z-10 container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            {/* Section Header */}
            <div className="text-center mb-16">
              <div className="flex justify-center mb-8">
                <AnimatedGradientText>
                  <hr className="mx-2 h-4 w-[1px] shrink-0 bg-zinc-300" />{" "}
                  <span className="inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent">
                    Beyond What You Ever IImagined
                  </span>
                  <ChevronRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
                </AnimatedGradientText>
              </div>
              <div className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 tracking-tight">
                <BlurIn
                  word="Systems That Scale"
                  className="text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tight"
                  duration={0.8}
                />
                <div className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  <WordRotate
                    words={["Beyond Limits", "Past Dreams", "Above Expectations", "Through Barriers"]}
                    className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight"
                    duration={3500}
                  />
                </div>
              </div>
              <div className="text-xl md:text-2xl text-zinc-300 max-w-4xl mx-auto leading-relaxed">
                <TypingAnimation
                  text="Most courses teach theory. We provide the exact systems that generated $5M+ in combined student earnings. These are battle-tested frameworks used by 4,000+ students building real businesses."
                  className="text-xl md:text-2xl text-zinc-300"
                  duration={30}
                />
              </div>
            </div>

            {/* Core Pillars */}
            <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
              {[
                {
                  icon: 'rocket',
                  title: 'AI-Powered Automation',
                  description: 'Deploy systems that generate content, qualify leads, and process customers 24/7. Our students save 30+ hours weekly using N8N, ComfyUI, and custom workflows handling everything from DMs to product delivery.',
                  gradient: 'from-blue-500 to-cyan-500'
                },
                {
                  icon: 'analytics',
                  title: 'Viral Psychology Mastery',
                  description: 'The 7 psychological triggers behind every viral post with 1M+ views. Learn pattern recognition that identifies winning content before posting. Students see 3-8x engagement increases in 30 days.',
                  gradient: 'from-purple-500 to-pink-500'
                },
                {
                  icon: 'diamond',
                  title: 'Revenue-First Systems',
                  description: 'Follower counts mean nothing without revenue. Build monetization systems from day one. Our students average $2.37 earnings per 100 followers versus industry standard of $0.50.',
                  gradient: 'from-emerald-500 to-teal-500'
                }
              ].map((pillar) => (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group cursor-pointer relative"
                >
                  {/* Background Glow */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${pillar.gradient} opacity-0 group-hover:opacity-10 rounded-3xl blur-xl transition-all duration-500`} />
                  
                  <div className="relative bg-zinc-900/60 backdrop-blur-sm border border-zinc-800 group-hover:border-zinc-700 rounded-3xl p-8 h-full transition-all duration-300">
                    <motion.div
                      className={`inline-flex items-center justify-center w-20 h-20 mb-6 rounded-2xl bg-gradient-to-br ${pillar.gradient} bg-opacity-20 group-hover:scale-110 transition-all duration-300`}
                    >
                      <PainPointIcon 
                        type={pillar.icon as any} 
                        size={36} 
                        className="text-white group-hover:scale-110 transition-transform duration-300" 
                        color="currentColor"
                      />
                    </motion.div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-zinc-300 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                      {pillar.title}
                    </h3>
                    <p className="text-zinc-300 leading-relaxed text-base group-hover:text-zinc-200 transition-colors duration-300">
                      {pillar.description}
                    </p>
                  </div>
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
            <div className="flex justify-center mb-8">
              <AnimatedGradientText>
                <hr className="mx-2 h-4 w-[1px] shrink-0 bg-zinc-300" />{" "}
                <span className="inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent">
                  Our Flagship Programs
                </span>
                <ChevronRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
              </AnimatedGradientText>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight">
              <BlurIn
                word="Choose Your"
                className="text-5xl md:text-7xl font-black text-white tracking-tight"
                duration={0.8}
              />
              <div className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                <WordRotate
                  words={["Empire Path", "Success Route", "Growth Journey", "Wealth Strategy"]}
                  className="text-5xl md:text-7xl font-black tracking-tight"
                  duration={3000}
                />
              </div>
            </h1>
            <p className="text-xl md:text-2xl text-zinc-200 max-w-4xl mx-auto leading-relaxed">
              Four proven paths to building your creator empire. Each program delivers complete systems,
              not just information. Pick the model that fits your goals.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {courses.map((course) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Link href={course.link} className="block magnetic-button h-full focus:outline-none focus:ring-4 focus:ring-blue-500/50" aria-label={`View ${course.title} course details`}>
                  <Interactive3DCard>
                    <div className="h-full flex flex-col p-10 space-y-6">
                      {/* Icon */}
                      <motion.div
                        className="flex justify-center"
                        animate={{
                          rotate: [0, 5, -5, 0],
                          scale: [1, 1.05, 1]
                        }}
                        transition={{
                          duration: 5,
                          repeat: Infinity,
                          repeatDelay: 3
                        }}
                      >
                        <div className={`p-4 rounded-2xl bg-gradient-to-br ${course.gradient} bg-opacity-10`}>
                          {course.icon === 'smartphone' && <Smartphone size={48} className={`bg-gradient-to-r ${course.gradient} bg-clip-text text-transparent`} strokeWidth={2} />}
                          {course.icon === 'credit-card' && <CreditCard size={48} className={`bg-gradient-to-r ${course.gradient} bg-clip-text text-transparent`} strokeWidth={2} />}
                          {course.icon === 'bot' && <Bot size={48} className={`bg-gradient-to-r ${course.gradient} bg-clip-text text-transparent`} strokeWidth={2} />}
                        </div>
                      </motion.div>

                      {/* Title */}
                      <div className="text-center">
                        <h3 className="text-3xl font-bold text-white mb-2">{course.title}</h3>
                        <p className="text-xs text-zinc-400 uppercase tracking-widest font-bold">{course.subtitle}</p>
                      </div>

                      {/* Description */}
                      <p className="text-zinc-300 text-base leading-relaxed text-center flex-grow">{course.description}</p>

                      {/* Stats */}
                      <div className="space-y-3 text-center">
                        <p className="text-sm text-zinc-400 font-medium">{course.stats}</p>

                        {/* Progress Bar */}
                        <motion.div
                          className={`h-1.5 bg-gradient-to-r ${course.gradient} rounded-full`}
                          initial={{ scaleX: 0 }}
                          whileInView={{ scaleX: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.3 }}
                        />
                      </div>
                    </div>
                  </Interactive3DCard>
                </Link>
              </motion.div>
            ))}
          </div>
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
            <div className="text-5xl md:text-7xl font-bold text-white mb-6">
              <BlurIn
                word="Success Stories"
                className="text-5xl md:text-7xl font-bold text-white"
                duration={0.8}
              />
            </div>
            <div className="text-lg md:text-xl text-zinc-300 leading-relaxed">
              <TypingAnimation
                text="From our incredible community of successful creators"
                className="text-lg md:text-xl text-zinc-300"
                duration={40}
              />
            </div>
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
            "Hit 127K followers in 90 days - this blueprint works! ",
            "First $10K month happened in week 6 with digital products ",
            "Saved 35+ hours weekly with these automation systems!",
            "From 800 followers to 50K in 12 weeks - verified results!",
            "ROI was 47x in first 6 months - best business investment ever",
            "4,000+ students helping each other win daily - unmatched support!",
            "300% engagement increase in first 30 days of implementation",
            "Went from zero to $8.5K monthly recurring revenue!"
          ].map((review) => (
            <div
              key={review}
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
            <div className="text-5xl md:text-7xl font-bold text-white mb-6">
              <BlurIn
                word="Master Every"
                className="text-5xl md:text-7xl font-bold text-white"
                duration={0.8}
              />
              <div className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                <WordRotate
                  words={["Skill", "Strategy", "System", "Secret"]}
                  className="text-5xl md:text-7xl font-bold"
                  duration={2800}
                />
              </div>
            </div>
            <div className="text-lg md:text-xl text-zinc-200 max-w-2xl mx-auto leading-relaxed">
              <TypingAnimation
                text="From viral content creation to automated business systems that scale"
                className="text-lg md:text-xl text-zinc-200"
                duration={35}
              />
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              {
                icon: 'target',
                title: 'Viral Content Strategy',
                description: '12 content frameworks with 89% success rate. Identify winning topics before creating. Students hit 100K+ views within first 30 days.'
              },
              {
                icon: 'analytics',
                title: 'Growth Analytics',
                description: 'Track the 5 metrics that matter. Optimize based on data, not guesswork. Increase ROI by identifying what converts.'
              },
              {
                icon: 'automation',
                title: 'AI Automation',
                description: 'Build N8N workflows that save 30+ hours weekly. Automate content, customer service, and fulfillment while maintaining quality.'
              },
              {
                icon: 'monetization',
                title: 'Monetization',
                description: 'Generate revenue from day one. 6 income streams you can activate before hitting 10K followers. Average $4,200 first 90 days.'
              },
              {
                icon: 'content',
                title: 'Content Creation',
                description: 'Professional production using AI tools. Create studio-quality content with phone + ComfyUI. No expensive equipment needed.'
              },
              {
                icon: 'platform',
                title: 'Platform Mastery',
                description: 'Algorithm optimization for Instagram, TikTok, YouTube. Platform-specific strategies that work in 2025. Multi-platform growth systems.'
              },
              {
                icon: 'scaling',
                title: 'Scaling Systems',
                description: 'Transition from creator to CEO. Hire, delegate, and scale to 7-figures. Students managing teams of 5-20 within 12 months.'
              },
              {
                icon: 'psychology',
                title: 'Engagement Psychology',
                description: 'The 7 triggers behind viral content. Pattern recognition that predicts engagement. Turn viewers into buyers systematically.'
              }
            ].map((skill) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
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
                <div className="text-5xl md:text-6xl font-bold text-white mb-8">
                  <BlurIn
                    word="Why Creators"
                    className="text-5xl md:text-6xl font-bold text-white"
                    duration={0.8}
                  />
                  <div className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                    <WordRotate
                      words={["Choose Us", "Trust Us", "Love Us", "Join Us"]}
                      className="text-5xl md:text-6xl font-bold"
                      duration={3200}
                    />
                  </div>
                </div>
                <div className="space-y-6">
                  {[
                    {
                      title: 'Proven Systems, Not Theory',
                      description: 'Every strategy generated real results. 4,000+ students, $5M+ in student earnings, 10M+ followers grown. These systems work in competitive markets.'
                    },
                    {
                      title: 'Results in 30 Days or Less',
                      description: '89% of students see measurable growth in first 30 days. Average 312% engagement increase. First revenue within 45 days for 73% of students.'
                    },
                    {
                      title: 'Lifetime Access + Updates',
                      description: 'Algorithms change. Your access never expires. Monthly updates with current strategies. $12,000+ in added content since launch at no extra cost.'
                    },
                    {
                      title: 'Active Community + Support',
                      description: '4,000+ students sharing wins, strategies, and support. Direct access to successful students. Response time under 6 hours for questions.'
                    }
                  ].map((point) => (
                    <motion.div
                      key={point.title}
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5 }}
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
                      ].map((stat) => (
                        <motion.div
                          key={stat.label}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5 }}
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
            <div className="text-xl md:text-2xl text-zinc-200 mb-12 leading-relaxed max-w-3xl mx-auto">
              <TypingAnimation
                text="Join 4,000+ students who've earned $5M+ combined. Your empire starts today."
                className="text-xl md:text-2xl text-zinc-200"
                duration={40}
              />
            </div>
            <StandardCTA
              variant="primary"
              text="Start Building Your Empire"
              href="/instagram-ignited"
              size="lg"
            />
          </motion.div>
        </div>
      </section>
    </div>
  )
}