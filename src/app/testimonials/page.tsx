'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useScrollAnimation, useScrollAnimations } from '@/hooks/useScrollAnimation'
import { useState, useEffect } from 'react'
import NumberTicker from '@/components/magicui/number-ticker'
import WordRotate from '@/components/magicui/word-rotate'
import BlurIn from '@/components/magicui/blur-in'
import TypingAnimation from '@/components/magicui/typing-animation'
import AnimatedGradientText from '@/components/magicui/animated-gradient-text'
import ShimmerButton from '@/components/magicui/shimmer-button'
import ScrambleText from '@/components/magicui/scramble-text'

export default function TestimonialsPage() {
  // Scroll animations for different sections
  const heroAnimation = useScrollAnimation({ threshold: 0.3 })
  const statsAnimation = useScrollAnimation({ threshold: 0.2 })
  const videoAnimation = useScrollAnimation({ threshold: 0.2 })
  const successAnimation = useScrollAnimation({ threshold: 0.1 })
  const ctaAnimation = useScrollAnimation({ threshold: 0.3 })
  
  // Animated counters for stats
  const [animatedStats, setAnimatedStats] = useState({
    students: 0,
    views: 0,
    followers: 0,
    revenue: 0
  })
  
  useEffect(() => {
    if (statsAnimation.isVisible) {
      const duration = 2000
      const steps = 60
      const interval = duration / steps
      
      const targets = {
        students: 13000,
        views: 125,
        followers: 10,
        revenue: 5.0
      }
      
      let currentStep = 0
      const timer = setInterval(() => {
        currentStep++
        const progress = currentStep / steps
        
        setAnimatedStats({
          students: Math.floor(targets.students * progress),
          views: Math.floor(targets.views * progress),
          followers: Math.floor(targets.followers * progress),
          revenue: Number((targets.revenue * progress).toFixed(1))
        })
        
        if (currentStep >= steps) {
          clearInterval(timer)
        }
      }, interval)
      
      return () => clearInterval(timer)
    }
  }, [statsAnimation.isVisible])

  // For testimonial grid animations - set to handle more testimonials
  const testimonialAnimations = useScrollAnimations(50, { threshold: 0.1 })
  
  // Filter state
  const [activeFilter, setActiveFilter] = useState('all')

  const testimonials = [
    {
      name: "Marcus Rivera",
      role: "Content Creator",
      course: "Instagram Ignited",
      avatar: "https://i.pravatar.cc/150?img=32",
      content: "Instagram Ignited completely transformed my content strategy! I went from 800 followers to 125K in just 8 months using Anyro's viral carousel techniques. My engagement rate jumped from 2% to 12%, and I'm now making $15K/month through sponsored posts and digital products.",
      results: "800 to 125K followers, $15K/month revenue"
    },
    {
      name: "Sophia Chen",
      role: "Digital Entrepreneur",
      course: "Digital Products",
      avatar: "https://i.pravatar.cc/150?img=28",
      content: "The Digital Products course is pure gold! I launched my first info product and hit $10K in sales within 3 weeks. Anyro's pricing psychology and launch strategies are game-changing. I've now built a sustainable $25K/month business selling educational content.",
      results: "$10K in 3 weeks, $25K/month business"
    },
    {
      name: "Devon Mitchell",
      role: "Automation Specialist",
      course: "N8N AI Automations",
      avatar: "https://i.pravatar.cc/150?img=67",
      content: "N8N AI Automations saved me 40+ hours per week! I automated my entire content workflow - from research to posting across 5 platforms. My productivity skyrocketed and I can now focus on strategy instead of repetitive tasks. The workflows Anyro provides are incredibly detailed!",
      results: "40+ hours saved weekly, 5x productivity increase"
    },
    {
      name: "Ashton Torres",
      role: "AI Content Creator",
      course: "AI Influencers",
      avatar: "https://i.pravatar.cc/150?img=12",
      content: "AI Influencers opened up a completely new revenue stream for me! I created 3 AI models that generate content 24/7. Within 2 months, my AI models gained 200K combined followers and started earning $8K/month through partnerships. Anyro's approach is revolutionary!",
      results: "200K combined followers, $8K/month AI revenue"
    },
    {
      name: "Ryan Blackwood",
      role: "Visual Artist",
      course: "ComfyUI & Workflows",
      avatar: "https://i.pravatar.cc/150?img=52",
      content: "ComfyUI & Workflows turned me into an AI art powerhouse! I can now create stunning visuals in minutes instead of hours. My client work rate increased 500% and I'm charging premium prices for AI-enhanced designs. The workflow templates are incredibly professional!",
      results: "500% productivity increase, premium pricing"
    },
    {
      name: "Allan Rodriguez",
      role: "Lifestyle Blogger",
      course: "Instagram Ignited",
      avatar: "https://i.pravatar.cc/150?img=88",
      content: "The Instagram OS module alone was worth the entire course! I finally understood the algorithm and my first viral carousel got 2.3M views. Within 3 months, I grew from 5K to 85K followers and landed my first $25K brand partnership.",
      results: "2.3M views, 5K to 85K followers, $25K partnership"
    },
    {
      name: "Cameron Lee",
      role: "Tech Entrepreneur",
      course: "N8N AI Automations",
      avatar: "https://i.pravatar.cc/150?img=71",
      content: "N8N AI Automations completely transformed my business operations! I automated lead generation, customer onboarding, and content distribution. My team productivity increased 300% and we're scaling without adding headcount. Incredible ROI!",
      results: "300% team productivity, automated business operations"
    },
    {
      name: "Alex Morgan",
      role: "Digital Product Creator",
      course: "Digital Products",
      avatar: "https://i.pravatar.cc/150?img=23",
      content: "The Digital Products framework is genius! I used Anyro's validation methods to test my course idea, then his launch strategies to generate $22K in the first week. The pricing psychology section alone 3x my conversion rates!",
      results: "$22K first week launch, 3x conversion rates"
    },
    {
      name: "Brendan Williams",
      role: "AI Artist",
      course: "ComfyUI & Workflows",
      avatar: "https://i.pravatar.cc/150?img=65",
      content: "ComfyUI & Workflows opened up endless creative possibilities! I went from basic Midjourney prompts to creating complex, professional AI art workflows. My art business revenue jumped 400% and I'm booked solid with client work!",
      results: "400% revenue increase, booked solid"
    },
    {
      name: "Jack Connors",
      role: "Content Creator",
      course: "Instagram Ignited",
      avatar: "https://i.pravatar.cc/150?img=18",
      content: "After joining the program and applying the teachings, I saw rapid results. I went from a few hundred followers to 50K, and now I've reached 100K+ followers and launched my own paid community.",
      results: "100K+ followers, paid community"
    },
    {
      name: "Maria Gonzalez",
      role: "Fashion Blogger",
      course: "Instagram Ignited",
      avatar: "https://i.pravatar.cc/150?img=33",
      content: "As a complete beginner with no followers, I was skeptical. But the step-by-step guidance helped me grow to 45K followers in 6 months. The carousel strategies alone changed everything for me!",
      results: "0 to 45K followers, first brand deal at $5K"
    },
    {
      name: "David Park",
      role: "Fitness Coach",
      course: "Digital Products",
      avatar: "https://i.pravatar.cc/150?img=85",
      content: "I turned my fitness knowledge into a $50K product launch! The validation framework helped me test my idea before building, and the launch strategy exceeded all expectations.",
      results: "$50K launch, 500+ happy customers"
    },
    {
      name: "Lisa Thompson",
      role: "Travel Blogger",
      course: "N8N AI Automations",
      avatar: "https://i.pravatar.cc/150?img=17",
      content: "Managing content across 6 platforms was killing me. N8N automations gave me my life back! Now everything posts automatically while I focus on creating.",
      results: "6 platforms automated, 30 hours saved weekly"
    },
    {
      name: "James Wilson",
      role: "Tech Reviewer",
      course: "AI Influencers",
      avatar: "https://i.pravatar.cc/150?img=94",
      content: "I created an AI tech reviewer that posts daily content. It's like having a full team working 24/7. The passive income from this is incredible!",
      results: "AI generates $4K/month passively"
    },
    {
      name: "Emma Davis",
      role: "Life Coach",
      course: "Instagram Ignited",
      avatar: "https://i.pravatar.cc/150?img=89",
      content: "From 2K to 75K followers in 5 months! The engagement strategies taught me how to build a real community, not just numbers. My coaching business exploded!",
      results: "2K to 75K followers, $20K/month coaching"
    },
    {
      name: "Michael Brown",
      role: "Photographer",
      course: "ComfyUI & Workflows",
      avatar: "https://i.pravatar.cc/150?img=76",
      content: "AI art workflows transformed my photography business. I can now offer unique AI-enhanced portraits that clients pay premium for. Game changer!",
      results: "3x pricing, fully booked 3 months out"
    },
    {
      name: "Sarah Johnson",
      role: "Nutritionist",
      course: "Digital Products",
      avatar: "https://i.pravatar.cc/150?img=50",
      content: "My meal plan guide made $15K in the first month! The pricing psychology module helped me position it perfectly. Now it's consistent passive income.",
      results: "$15K first month, $5K/month passive"
    },
    {
      name: "Robert Garcia",
      role: "Music Producer",
      course: "N8N AI Automations",
      avatar: "https://i.pravatar.cc/150?img=41",
      content: "Automated my entire music promotion workflow. What used to take days now happens automatically. More time for creating, less time on admin!",
      results: "80% time saved, 2x release schedule"
    },
    {
      name: "Amanda White",
      role: "Beauty Influencer",
      course: "Instagram Ignited",
      avatar: "https://i.pravatar.cc/150?img=21",
      content: "The viral carousel formula is INSANE! My first one got 1.2M views and 15K new followers. Now brands are reaching out to ME!",
      results: "1.2M viral views, $10K brand deals"
    },
    {
      name: "Kevin Martinez",
      role: "Business Coach",
      course: "Digital Products",
      avatar: "https://i.pravatar.cc/150?img=7",
      content: "Launched my coaching program to $35K using Anyro's strategies. The email sequences and launch tactics were pure gold. Best investment ever!",
      results: "$35K launch, 6-figure run rate"
    }
  ]
  
  // Filter testimonials based on active filter
  const filteredTestimonials = activeFilter === 'all' 
    ? testimonials 
    : testimonials.filter(t => t.course === activeFilter)
  
  // Get unique courses for filter buttons
  const courses = ['all', ...Array.from(new Set(testimonials.map(t => t.course)))]
  
  // Debug: Log testimonial counts
  console.log('Total testimonials:', testimonials.length)
  console.log('Filtered testimonials:', filteredTestimonials.length)
  console.log('Active filter:', activeFilter)

  return (
    <div className="min-h-screen bg-dark">
      {/* MAGICAL HEADER */}
      <section className="relative py-20 px-4 overflow-hidden">
        {/* Beautiful Pulsing Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-blue-900/20 to-pink-900/30"></div>
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-[32rem] h-[32rem] bg-gradient-to-r from-blue-400/20 via-purple-500/30 to-pink-500/20 rounded-full blur-2xl animate-pulse opacity-60"></div>
          <div className="absolute top-1/3 right-1/4 w-[28rem] h-[28rem] bg-gradient-to-r from-purple-400/25 via-pink-500/35 to-blue-500/25 rounded-full blur-2xl animate-pulse opacity-70" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-1/4 left-1/3 w-[24rem] h-[24rem] bg-gradient-to-r from-pink-400/30 via-blue-500/40 to-purple-500/30 rounded-full blur-2xl animate-pulse opacity-80" style={{animationDelay: '2s'}}></div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-20 w-4 h-4 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full animate-bounce opacity-60" style={{animationDuration: '3s'}}></div>
          <div className="absolute top-32 right-32 w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-bounce opacity-50" style={{animationDuration: '4s', animationDelay: '0.5s'}}></div>
          <div className="absolute bottom-40 left-16 w-5 h-5 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full animate-bounce opacity-70" style={{animationDuration: '3.5s', animationDelay: '1s'}}></div>
          <div className="absolute bottom-32 right-20 w-2 h-2 bg-gradient-to-r from-green-400 to-teal-400 rounded-full animate-bounce opacity-60" style={{animationDuration: '4.5s', animationDelay: '1.5s'}}></div>
        </div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <div
              ref={heroAnimation.elementRef}
              className={`scroll-fade-up ${heroAnimation.isVisible ? 'visible' : ''}`}
            >
              <div className="relative inline-block">
                {/* Main Title with ScrambleText Morphing Effect */}
                <h1 className="text-7xl md:text-8xl lg:text-9xl font-black text-white mb-8 tracking-tight drop-shadow-2xl">
                  <ScrambleText 
                    text="Testimonials" 
                    className="text-7xl md:text-8xl lg:text-9xl font-black text-white tracking-tight drop-shadow-2xl" 
                    scrambleSpeed={1} 
                    revealSpeed={1} 
                  />
                </h1>
                
                {/* Magical Glowing Border */}
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 via-purple-600 via-pink-600 to-yellow-600 rounded-2xl opacity-20 blur-xl animate-pulse"></div>
                
                {/* Floating Magic Elements Around Title */}
                <div className="absolute -top-8 -left-8 w-6 h-6 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full animate-spin opacity-80" style={{animationDuration: '8s'}}></div>
                <div className="absolute -top-4 -right-12 w-4 h-4 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-spin opacity-70" style={{animationDuration: '10s', animationDirection: 'reverse'}}></div>
                <div className="absolute -bottom-6 -left-12 w-5 h-5 bg-gradient-to-r from-pink-400 to-red-400 rounded-full animate-spin opacity-75" style={{animationDuration: '12s'}}></div>
                <div className="absolute -bottom-8 -right-8 w-3 h-3 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full animate-spin opacity-90" style={{animationDuration: '6s', animationDirection: 'reverse'}}></div>
              </div>
            </div>
            
            <div className="relative">
              <div className="max-w-5xl mx-auto mt-6">
                <TypingAnimation
                  text="Real creators sharing their transformation journeys. Every story started with a single decision to invest in themselves."
                  className="text-2xl md:text-3xl text-white leading-relaxed font-medium drop-shadow-lg"
                  duration={50}
                />
              </div>
              
              {/* Subtitle Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent blur-sm"></div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 section-spacing">
        <div className="max-w-7xl mx-auto">
          
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {courses.map(course => (
              <button
                key={course}
                onClick={() => setActiveFilter(course)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-500/50 ${
                  activeFilter === course
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg shadow-blue-500/25'
                    : 'bg-zinc-800 text-zinc-200 hover:bg-zinc-700 hover:text-white'
                }`}
                aria-label={`Filter testimonials by ${course === 'all' ? 'all courses' : course}`}
                aria-pressed={activeFilter === course}
              >
                {course === 'all' ? 'All Stories' : course}
              </button>
            ))}
          </div>

          {/* Stats Section */}
          <div
            ref={statsAnimation.elementRef}
            className={`grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-16 scroll-fade-up ${statsAnimation.isVisible ? 'visible' : ''}`}
          >
            <div className={`bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-xl p-6 text-center border border-zinc-700 hover:border-blue-500/50 transition-all duration-300 hover-lift scroll-scale ${statsAnimation.isVisible ? 'visible scroll-stagger-1' : ''}`}>
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent mb-2">
                <NumberTicker value={13000} className="text-3xl md:text-4xl font-bold text-blue-400" />+
              </div>
              <p className="text-zinc-300 text-sm md:text-base font-medium">Happy Students</p>
            </div>
            <div className={`bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-xl p-6 text-center border border-zinc-700 hover:border-green-500/50 transition-all duration-300 hover-lift scroll-scale ${statsAnimation.isVisible ? 'visible scroll-stagger-2' : ''}`}>
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-green-400 to-green-500 bg-clip-text text-transparent mb-2">
                <NumberTicker value={125} className="text-3xl md:text-4xl font-bold text-green-400" />M+
              </div>
              <p className="text-zinc-300 text-sm md:text-base font-medium">Views Generated</p>
            </div>
            <div className={`bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-xl p-6 text-center border border-zinc-700 hover:border-purple-500/50 transition-all duration-300 hover-lift scroll-scale ${statsAnimation.isVisible ? 'visible scroll-stagger-3' : ''}`}>
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-purple-500 bg-clip-text text-transparent mb-2">
                <NumberTicker value={10} className="text-3xl md:text-4xl font-bold text-purple-400" />M+
              </div>
              <p className="text-zinc-300 text-sm md:text-base font-medium">Followers Gained</p>
            </div>
            <div className={`bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-xl p-6 text-center border border-zinc-700 hover:border-yellow-500/50 transition-all duration-300 hover-lift scroll-scale ${statsAnimation.isVisible ? 'visible scroll-stagger-4' : ''}`}>
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent mb-2">
                $<NumberTicker value={5} className="text-3xl md:text-4xl font-bold text-orange-400" />M+
              </div>
              <p className="text-gray-400 text-sm md:text-base">Student Revenue</p>
            </div>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {filteredTestimonials.map((testimonial, index) => (
              <div
                key={`${testimonial.name}-${index}`}
                ref={testimonialAnimations.setElementRef(index)}
                className="bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-xl p-6 border border-zinc-700 hover:border-blue-500/50 transition-all duration-300 group hover-lift scroll-fade-up visible"
              >
                {/* Course Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-xs px-3 py-1 rounded-full ${
                    testimonial.course === 'Instagram Ignited' ? 'bg-blue-500/20 text-blue-400' :
                    testimonial.course === 'Digital Products' ? 'bg-green-500/20 text-green-400' :
                    testimonial.course === 'N8N AI Automations' ? 'bg-purple-500/20 text-purple-400' :
                    testimonial.course === 'AI Influencers' ? 'bg-pink-500/20 text-pink-400' :
                    'bg-orange-500/20 text-orange-400'
                  }`}>
                    {testimonial.course}
                  </span>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                
                {/* Profile */}
                <div className="flex items-center mb-4">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    width={56}
                    height={56}
                    className="w-14 h-14 rounded-full mr-4 ring-2 ring-zinc-700 group-hover:ring-blue-500/50 transition-all duration-300"
                  />
                  <div>
                    <h4 className="font-semibold text-white group-hover:text-blue-400 transition-colors duration-300">{testimonial.name}</h4>
                    <p className="text-sm text-zinc-300">{testimonial.role}</p>
                  </div>
                </div>
                
                {/* Testimonial Content */}
                <p className="text-zinc-200 leading-relaxed mb-6 text-sm md:text-base">
                  "{testimonial.content}"
                </p>
                
                {/* Results */}
                <div className="pt-4 border-t border-zinc-700">
                  <p className="text-sm font-medium text-zinc-300 mb-2">Key Results:</p>
                  <p className="text-base font-semibold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    {testimonial.results}
                  </p>
                </div>
              </div>
            ))}
          </div>


          {/* Success Story Highlights */}
          <div
            ref={successAnimation.elementRef}
            className={`mb-16 scroll-fade-up ${successAnimation.isVisible ? 'visible' : ''}`}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              <AnimatedGradientText>
                <span className="inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent">
                  Featured
                </span>
              </AnimatedGradientText>{" "}
              <TypingAnimation
                text="Success Stories"
                className="text-3xl md:text-4xl font-bold text-white inline"
                duration={100}
              />
            </h2>
            
            <div className="space-y-16">
              {/* Houston's Journey */}
              <div className={`relative overflow-hidden bg-gradient-to-br from-zinc-900 via-blue-900/20 to-zinc-900 rounded-2xl p-8 md:p-12 hover-lift scroll-scale ${successAnimation.isVisible ? 'visible scroll-stagger-1' : ''}`}>
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <Image
                      src="https://i.pravatar.cc/150?img=29"
                      alt="Houston"
                      width={80}
                      height={80}
                      className="w-20 h-20 rounded-full ring-4 ring-blue-500/50 mr-6"
                    />
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-white">Houston's Instagram Journey</h3>
                      <p className="text-zinc-300">From Unknown to 80K+ Followers</p>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-zinc-800/50 rounded-xl p-4 text-center border border-zinc-700">
                      <p className="text-sm text-zinc-300 mb-1 font-medium">Starting Point</p>
                      <p className="text-2xl font-bold text-blue-400">
                        <NumberTicker value={3} className="text-2xl font-bold text-blue-400" />K Followers
                      </p>
                    </div>
                    <div className="bg-zinc-800/50 rounded-xl p-4 text-center border border-zinc-700">
                      <p className="text-sm text-zinc-300 mb-1 font-medium">First Month</p>
                      <p className="text-2xl font-bold text-green-400">
                        <NumberTicker value={20} className="text-2xl font-bold text-green-400" />K Followers
                      </p>
                    </div>
                    <div className="bg-zinc-800/50 rounded-xl p-4 text-center border border-zinc-700">
                      <p className="text-sm text-gray-400 mb-1">Monthly Revenue</p>
                      <p className="text-2xl font-bold text-yellow-400">
                        $<NumberTicker value={7} className="text-2xl font-bold text-yellow-400" />K+
                      </p>
                    </div>
                  </div>
                  
                  <p className="text-lg text-zinc-200 leading-relaxed mb-6">
                    "Instagram Ignited didn't just teach me how to grow followers - it showed me how to build a real business. 
                    The viral carousel strategies were a game-changer. My first carousel using Anyro's formula got 2.8M views! 
                    Now I'm consistently hitting 100K+ views and converting followers into paying customers."
                  </p>
                  
                  <div className="flex flex-wrap gap-3">
                    <span className="px-4 py-2 bg-blue-500/20 text-blue-400 rounded-full text-sm font-medium">Viral Carousels</span>
                    <span className="px-4 py-2 bg-green-500/20 text-green-400 rounded-full text-sm font-medium">567% Growth</span>
                    <span className="px-4 py-2 bg-purple-500/20 text-purple-400 rounded-full text-sm font-medium">6-Figure Trajectory</span>
                  </div>
                </div>
              </div>

              {/* Tochi's Transformation */}
              <div className={`relative overflow-hidden bg-gradient-to-br from-zinc-900 via-purple-900/20 to-zinc-900 rounded-2xl p-8 md:p-12 hover-lift scroll-scale ${successAnimation.isVisible ? 'visible scroll-stagger-2' : ''}`}>
                <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <Image
                      src="https://i.pravatar.cc/150?img=36"
                      alt="Tochi"
                      width={80}
                      height={80}
                      className="w-20 h-20 rounded-full ring-4 ring-purple-500/50 mr-6"
                    />
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-white">Tochi's Complete Transformation</h3>
                      <p className="text-zinc-300">From 400 to 240K Followers + Digital Empire</p>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-zinc-800/50 rounded-xl p-4 text-center border border-zinc-700">
                      <p className="text-sm text-zinc-300 mb-1 font-medium">Year 1 Growth</p>
                      <p className="text-2xl font-bold text-purple-400">
                        <NumberTicker value={60000} className="text-2xl font-bold text-purple-400" />%
                      </p>
                    </div>
                    <div className="bg-zinc-800/50 rounded-xl p-4 text-center border border-zinc-700">
                      <p className="text-sm text-zinc-300 mb-1 font-medium">Products Launched</p>
                      <p className="text-2xl font-bold text-pink-400">
                        <NumberTicker value={5} className="text-2xl font-bold text-pink-400" /> Courses
                      </p>
                    </div>
                    <div className="bg-zinc-800/50 rounded-xl p-4 text-center border border-zinc-700">
                      <p className="text-sm text-gray-400 mb-1">Student Community</p>
                      <p className="text-2xl font-bold text-blue-400">
                        <NumberTicker value={3000} className="text-2xl font-bold text-blue-400" />+
                      </p>
                    </div>
                  </div>
                  
                  <p className="text-lg text-zinc-200 leading-relaxed mb-6">
                    "I was completely lost with just 400 followers. Instagram Ignited gave me the exact blueprint I needed. 
                    But the real transformation came when I combined it with the Digital Products course. I went from struggling 
                    creator to running a multiple 6-figure education business. My students now achieve similar transformations!"
                  </p>
                  
                  <div className="flex flex-wrap gap-3">
                    <span className="px-4 py-2 bg-purple-500/20 text-purple-400 rounded-full text-sm font-medium">240K Followers</span>
                    <span className="px-4 py-2 bg-pink-500/20 text-pink-400 rounded-full text-sm font-medium">Digital Products</span>
                    <span className="px-4 py-2 bg-yellow-500/20 text-yellow-400 rounded-full text-sm font-medium">Multiple 6-Figures</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div
            ref={ctaAnimation.elementRef}
            className={`relative overflow-hidden bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20 rounded-2xl p-8 md:p-12 text-center hover-lift scroll-fade-up ${ctaAnimation.isVisible ? 'visible' : ''}`}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
            <div className="relative z-10">
              <div className="inline-block px-4 py-2 bg-zinc-800 rounded-full text-sm text-zinc-200 mb-6">
                <span className="text-green-400">★</span> Join 13,000+ successful students
              </div>
              
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                <BlurIn
                  word="Your Success Story"
                  className="text-3xl md:text-5xl font-bold text-white"
                  duration={0.8}
                />
                <br />
                <div className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  <WordRotate
                    words={["Starts Today", "Begins Now", "Awaits You", "Is Coming"]}
                    className="text-3xl md:text-5xl font-bold"
                    duration={2500}
                  />
                </div>
              </h2>
              
              <p className="text-lg md:text-xl text-zinc-200 mb-8 max-w-3xl mx-auto leading-relaxed">
                Every testimonial on this page started exactly where you are now. They took action, 
                followed the proven systems, and transformed their lives. You have the same potential.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <Link href="/instagram-ignited" className="focus:outline-none focus:ring-4 focus:ring-blue-500/50 rounded-full">
                  <ShimmerButton
                    className="shadow-2xl"
                    shimmerColor="#ffffff"
                    shimmerSize="0.1em"
                    background="linear-gradient(135deg, #2563eb, #9333ea)"
                    borderRadius="9999px"
                  >
                    <span className="whitespace-nowrap text-lg font-bold px-6 py-2">
                      Start Your Journey Today
                    </span>
                  </ShimmerButton>
                </Link>
                <Link
                  href="/story"
                  className="text-blue-400 hover:text-blue-300 font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500/50 rounded px-2 py-1"
                  aria-label="Read Anyro's personal story and journey"
                >
                  Read Anyro's Story →
                </Link>
              </div>
              
              <div className="flex flex-wrap justify-center gap-6 text-sm text-zinc-300">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="font-medium">Lifetime Access</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="font-medium">30-Day Guarantee</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="font-medium">Weekly Updates</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
