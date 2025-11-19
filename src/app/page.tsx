'use client'

import { useEffect, useRef } from 'react'
import { BeautifulHero } from '@/components/BeautifulHero'
import { Interactive3DCard } from '@/components/Interactive3DCard'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { createRevealAnimation, createMagneticHover, revealAnimationStyles } from '@/lib/smoothScroll'
import TestimonialCarousel from '@/components/TestimonialCarousel'
import PartnerSlider from '@/components/PartnerSlider'
import Link from 'next/link'
import AnimatedGradientText from '@/components/magicui/animated-gradient-text'
import WordRotate from '@/components/magicui/word-rotate'
import BlurIn from '@/components/magicui/blur-in'
import TypingAnimation from '@/components/magicui/typing-animation'
import PainPointIcon from '@/components/PainPointIcon'
import StandardCTA from '@/components/StandardCTA'
import AIContentDeclaration from '@/components/seo/AIContentDeclaration'
import { ChevronRight, Smartphone, CreditCard, Bot, Crown, Check, Star, Lock, ArrowRight } from 'lucide-react'
import Marquee from '@/components/magicui/marquee'
import ShimmerButton from '@/components/magicui/shimmer-button'

export default function HomePage() {
  const containerRef = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    try {
      const reveals = document.querySelectorAll('.reveal-animation')
      if (reveals.length > 0) createRevealAnimation(reveals)

      const buttons = document.querySelectorAll('.magnetic-button')
      buttons.forEach(button => {
        try { createMagneticHover(button as HTMLElement, 0.15) } catch (e) {}
      })

      if (!document.getElementById('reveal-styles')) {
        const style = document.createElement('style')
        style.id = 'reveal-styles'
        style.textContent = revealAnimationStyles
        document.head.appendChild(style)
      }
    } catch (error) {
      console.error('Animation initialization failed:', error)
    }
  }, [])

  const allAccessFeatures = [
    { text: "Full access to all 4 Flagship Systems", highlight: "4 Premium Systems" },
    { text: "Weekly Live Coaching Calls with Anyro", highlight: "Live Coaching" },
    { text: "Private 'Empire Collective' Community", highlight: "Empire Collective" },
    { text: "Exclusive Resource Library (Templates, Prompts)", highlight: "Resource Library" },
    { text: "Lifetime Updates & New Modules", highlight: "Lifetime Updates" }
  ]

  const courses = [
    {
      id: 'instagram-ignited',
      title: "Instagram Ignited",
      tagline: "Master Growth & Engagement",
      subtitle: '0 TO 500K FOLLOWERS SYSTEM',
      description: 'The psychological hooks and viral frameworks that generated 10M+ combined follower growth.',
      gradient: 'from-blue-600 to-cyan-600',
      icon: 'smartphone',
      link: '/instagram-ignited'
    },
    {
      id: 'ai-influencers',
      title: 'AI Influencers',
      tagline: "Virtual Models & Content",
      subtitle: 'VIRTUAL MODELS & AI CONTENT',
      description: 'Build faceless creator brands generating revenue through photorealistic AI models.',
      gradient: 'from-pink-600 to-purple-600',
      icon: 'smartphone',
      link: '/ai-influencers'
    },
    {
      id: 'digital-products',
      title: 'Digital Products',
      tagline: "Automated Business Empire",
      subtitle: 'AUTOMATED INCOME SYSTEMS',
      description: 'Launch profitable digital products in 72 hours using automation that sells while you sleep.',
      gradient: 'from-green-600 to-emerald-600',
      icon: 'credit-card',
      link: '/digital-products'
    },
    {
      id: 'ai-automations',
      title: 'AI Automations',
      tagline: "Agency & Consulting",
      subtitle: 'AI AUTOMATION AGENCY',
      description: 'Build a profitable agency offering AI-powered services to businesses using n8n and LLMs.',
      gradient: 'from-orange-600 to-red-600',
      icon: 'bot',
      link: '/ai-automations'
    }
  ]

  const testimonials = [
    {
      name: "Elena Rodriguez",
      role: "Content Creator",
      course: "Instagram Ignited",
      avatar: "https://i.pravatar.cc/150?img=32",
      content: "Instagram Ignited completely transformed my content strategy! I went from 800 followers to 125K in just 8 months.",
      rating: 5
    },
    {
      name: "Sarah M.",
      role: "Digital Entrepreneur", 
      course: "Digital Products",
      avatar: "https://i.pravatar.cc/150?img=45",
      content: "I launched my first info product and hit $10K in sales within 3 weeks. Now running a sustainable $25K/month business!",
      rating: 5
    },
    {
      name: "Marcus Thorne",
      role: "Automation Specialist",
      course: "N8N AI Automations", 
      avatar: "https://i.pravatar.cc/150?img=78",
      content: "N8N AI Automations saved me 40+ hours per week! Automated my entire content workflow. The productivity gains are incredible!",
      rating: 5
    }
  ]

  return (
    <div ref={containerRef} className="bg-black overflow-hidden font-sans text-zinc-100 selection:bg-purple-500/30">
      <AIContentDeclaration
        title="IImagined.ai - The All Access Creator Empire System"
        description="Master Instagram growth, AI influencers, automation, and digital products with the All Access Pass."
        contentType="system"
        primaryTopic="Creator Economy"
        keywords={['All Access Pass', 'Creator Economy', 'AI Automation', 'Instagram Growth']}
        author="Anyro"
        datePublished="2024-01-01"
        dateModified="2025-11-19"
      />

      <BeautifulHero />

      {/* === THE GAP / PROBLEM SECTION === */}
      {/* Psychology: Agitate the problem (Overwhelm, Fragmentation) before offering the solution */}
      <section className="relative py-32 bg-black z-10">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="max-w-6xl mx-auto"
          >
            <div className="text-center mb-16">
              <span className="text-xs font-bold tracking-[0.2em] text-red-500 uppercase mb-4 block">The Problem</span>
              <h2 className="text-4xl md:text-7xl font-bold mb-8 text-white tracking-tight">
                The "Fragmented" <br/> Creator Trap
              </h2>
              <p className="text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
                Most creators buy a system on growth. Then another on sales. Then another on automation. 
                <span className="text-white font-medium"> They end up with pieces that don't fit together.</span>
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* The Old Way */}
              <div className="relative group">
                <div className="absolute inset-0 bg-red-500/5 rounded-3xl blur-2xl group-hover:bg-red-500/10 transition-all duration-500" />
                <div className="relative bg-zinc-900/50 border border-zinc-800 p-8 rounded-3xl backdrop-blur-sm">
                  <div className="flex items-center gap-3 mb-6">
                     <div className="p-2 bg-red-500/10 rounded-lg text-red-500"><Lock size={24} /></div>
                     <h3 className="text-xl font-bold text-zinc-300">The Old Way</h3>
                  </div>
                  <ul className="space-y-4 text-zinc-400">
                    <li className="flex items-start gap-3">
                      <span className="text-red-500 font-bold">×</span> Buying 5 different generic courses ($5k+)
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-500 font-bold">×</span> Strategies that conflict with each other
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-500 font-bold">×</span> Zero community support
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-red-500 font-bold">×</span> Outdated information
                    </li>
                  </ul>
                </div>
              </div>

              {/* The IImagined Way */}
              <div className="relative group">
                <div className="absolute inset-0 bg-blue-500/10 rounded-3xl blur-2xl group-hover:bg-blue-500/20 transition-all duration-500" />
                <div className="relative bg-gradient-to-b from-zinc-900 to-black border border-blue-500/30 p-8 rounded-3xl backdrop-blur-sm shadow-2xl shadow-blue-900/20">
                  <div className="absolute -top-4 -right-4 bg-blue-600 text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg">
                    THE SOLUTION
                  </div>
                  <div className="flex items-center gap-3 mb-6">
                     <div className="p-2 bg-blue-500/20 rounded-lg text-blue-400"><Crown size={24} /></div>
                     <h3 className="text-xl font-bold text-white">The Empire System</h3>
                  </div>
                  <ul className="space-y-4 text-zinc-300">
                    <li className="flex items-start gap-3">
                      <Check className="text-blue-400 mt-1" size={16} /> Everything in ONE ecosystem
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="text-blue-400 mt-1" size={16} /> Unified strategies that scale together
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="text-blue-400 mt-1" size={16} /> Live coaching & elite community
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="text-blue-400 mt-1" size={16} /> Continuous updates included
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* === THE SOLUTION: ALL ACCESS PASS === */}
      <section id="empire-pass" className="relative py-20 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-zinc-900/30" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-600/20 blur-[120px] rounded-full opacity-50 pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            {/* The Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative rounded-[2rem] border border-zinc-700/50 bg-zinc-900/80 backdrop-blur-xl overflow-hidden shadow-2xl group hover:border-purple-500/30 transition-colors duration-500"
            >
              {/* Holographic Shine Effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <div className="grid md:grid-cols-2 gap-0">
                {/* Left: Visual/Product */}
                <div className="p-10 md:p-16 flex flex-col justify-between bg-gradient-to-br from-zinc-950 via-black to-zinc-900 relative overflow-hidden">
                  {/* Content */}
                  <div className="relative z-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-bold tracking-wider uppercase mb-6">
                      <Star size={12} className="fill-purple-500" /> Most Popular Choice
                    </div>
                    <h3 className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tight leading-[0.9]">
                      ALL ACCESS <br />
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
                        EMPIRE PASS
                      </span>
                    </h3>
                    <p className="text-zinc-400 text-lg leading-relaxed max-w-md">
                      Unlock the complete suite of 4 premium systems, the private community, and weekly live coaching.
                    </p>
                  </div>

                  <div className="mt-12 space-y-6 relative z-10">
                     <div className="flex items-end gap-3">
                       <span className="text-6xl font-bold text-white tracking-tighter">$99</span>
                       <div className="flex flex-col mb-2">
                         <span className="text-zinc-400 font-medium text-lg">/month</span>
                         <span className="text-zinc-600 line-through text-sm">Total Ecosystem Value: $2,500+</span>
                       </div>
                     </div>
                     
                     <div className="flex flex-col gap-3">
                        <Link href="https://buy.polar.sh/polar_cl_RZqECtx9qQzbriWQHfGfIc2JxkSL17qSERkbq3MVgw5" className="w-full group relative">
                          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 opacity-50 group-hover:opacity-100 blur-sm transition duration-200"></div>
                          <div className="relative w-full bg-black rounded-xl leading-none flex items-center justify-center px-8 py-4 border border-zinc-800 group-hover:border-purple-500/50">
                            <span className="text-white font-bold text-lg group-hover:text-gray-100 transition duration-200 flex items-center gap-2">
                              Get Instant Access <ArrowRight size={18} />
                            </span>
                          </div>
                        </Link>
                        <p className="text-xs text-zinc-500 font-medium text-center">
                          Cancel anytime. 30-day money-back guarantee.
                        </p>
                     </div>
                  </div>
                </div>

                {/* Right: Features/Benefits */}
                <div className="p-10 md:p-16 bg-zinc-900/30 border-l border-zinc-800/50 flex flex-col justify-center relative">
                  <h4 className="text-xl font-bold text-white mb-8 flex items-center gap-2">
                    <Crown size={20} className="text-yellow-500 fill-yellow-500" /> Everything included:
                  </h4>
                  <ul className="space-y-6">
                    {allAccessFeatures.map((feature, i) => (
                      <motion.li 
                        key={i} 
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-start gap-4 group cursor-default"
                      >
                        <div className="mt-1 w-6 h-6 rounded-full bg-green-500/10 flex items-center justify-center text-green-400 group-hover:bg-green-500/20 group-hover:scale-110 transition-all duration-300">
                          <Check size={14} strokeWidth={3} />
                        </div>
                        <div className="flex-1">
                          <span className="text-zinc-300 text-base font-medium group-hover:text-white transition-colors">
                            {feature.text}
                          </span>
                        </div>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* === THE 4 PILLARS (Sub-Products) === */}
      <section id="courses" className="relative py-24 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
             <span className="text-blue-500 font-bold tracking-widest uppercase text-xs">The Ecosystem</span>
             <h2 className="text-3xl md:text-5xl font-bold text-white mt-4 mb-6">4 Pillars of Mastery</h2>
             <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
               Each system is a deep dive into a specific aspect of the digital economy. 
               Master one, or master them all with the Pass.
             </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {courses.map((course, index) => (
              <Link key={course.id} href={course.link} className="group block h-full">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="h-full p-8 md:p-10 rounded-3xl bg-zinc-900/50 border border-zinc-800 hover:border-zinc-700 hover:bg-zinc-900 transition-all duration-500 relative overflow-hidden group-hover:shadow-2xl group-hover:shadow-blue-900/10"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${course.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                  
                  <div className="flex justify-between items-start mb-8 relative z-10">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full bg-zinc-800 text-[10px] font-bold text-zinc-300 uppercase tracking-wider border border-zinc-700 group-hover:border-zinc-600 transition-colors`}>
                      {course.subtitle}
                    </span>
                    <div className="text-zinc-500 group-hover:text-white transition-colors duration-300">
                      {course.icon === 'smartphone' && <Smartphone size={32} strokeWidth={1.5} />}
                      {course.icon === 'credit-card' && <CreditCard size={32} strokeWidth={1.5} />}
                      {course.icon === 'bot' && <Bot size={32} strokeWidth={1.5} />}
                    </div>
                  </div>

                  <div className="relative z-10">
                    <h3 className="text-3xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-zinc-400 transition-all duration-300">
                      {course.title}
                    </h3>
                    <p className="text-zinc-400 mb-8 leading-relaxed text-base">
                      {course.description}
                    </p>
                    <div className="flex items-center text-sm font-bold text-white group-hover:translate-x-2 transition-transform duration-300">
                      Explore Module <ChevronRight size={16} className="ml-1" />
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* === SOCIAL PROOF === */}
      <section className="py-24 bg-black border-t border-zinc-900">
        <div className="container mx-auto px-4 text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Success Leaves Clues</h2>
          <p className="text-zinc-400">Join 4,000+ students building their empires.</p>
        </div>
        <TestimonialCarousel 
          testimonials={testimonials}
          autoPlay={true}
          interval={5000}
        />
         <div className="mt-16">
            <Marquee className="[--duration:40s] border-y border-zinc-900 py-6 bg-zinc-900/20" pauseOnHover>
              {[
                "Hit 127K followers in 90 days",
                "$10K month in week 6",
                "Saved 35+ hours weekly",
                "From 800 to 50K followers",
                "ROI 47x in 6 months",
                "Unmatched community support",
                "300% engagement increase"
              ].map((review, i) => (
                <div key={i} className="mx-8 flex items-center gap-3">
                  <Star size={16} className="text-yellow-500 fill-yellow-500" />
                  <span className="text-zinc-300 text-lg font-medium">{review}</span>
                </div>
              ))}
            </Marquee>
        </div>
      </section>

      <PartnerSlider />

      {/* === FINAL CTA === */}
      <section className="relative py-40 bg-black text-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.08),transparent_70%)] pointer-events-none" />
        
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-5xl md:text-8xl font-bold text-white mb-8 tracking-tighter">
            Your Empire <br /> Starts <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">Now.</span>
          </h2>
          <p className="text-xl text-zinc-400 mb-12 max-w-2xl mx-auto">
            Don't let another year pass watching others succeed. Get the blueprint, the tools, and the community you need to win.
          </p>
          <div className="flex justify-center">
            <Link href="https://buy.polar.sh/polar_cl_RZqECtx9qQzbriWQHfGfIc2JxkSL17qSERkbq3MVgw5" className="group relative inline-flex h-14 items-center justify-center overflow-hidden rounded-full bg-white px-8 font-medium text-black transition-all duration-300 hover:bg-zinc-200 hover:w-64 w-56">
              <span className="mr-2 text-lg font-bold">Get Full Access</span>
              <ArrowRight className="transition-all duration-300 group-hover:translate-x-1" size={20} />
              <div className="absolute inset-0 -z-10 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
