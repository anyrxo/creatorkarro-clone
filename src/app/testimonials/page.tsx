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
import HeroBackground from '@/components/HeroBackground'
import AIContentDeclaration from '@/components/seo/AIContentDeclaration'
import StickyCTA from '@/components/StickyCTA'
import EcosystemGraph from '@/components/EcosystemGraph'
import { Play, BarChart2, ArrowUpRight, Quote, UserCheck, AlertTriangle, CheckCircle, XCircle, Video } from 'lucide-react'

// Review Schema.org markup for testimonials
const testimonialsSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "name": "IImagined.ai",
  "url": "https://iimagined.ai",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "4000",
    "bestRating": "5",
    "worstRating": "1"
  },
  "review": []
}

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
        students: 4000,
        views: 500,
        followers: 3,
        revenue: 5
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
      name: "Elena Rodriguez",
      role: "Content Creator",
      course: "Instagram Ignited",
      avatar: "https://i.pravatar.cc/150?img=32",
      content: "Honestly didn't expect much at first, but the carousel strategies actually work. Went from 800 followers to 125K in 8 months. The engagement stuff is what really changed things - my posts went from getting like 15 likes to thousands. Now brands actually reach out to me instead of the other way around.",
      results: "800 → 125K followers in 8 months"
    },
    {
      name: "Sarah Jenkins",
      role: "Digital Entrepreneur",
      course: "Digital Products",
      avatar: "https://i.pravatar.cc/150?img=28",
      content: "I was stuck in analysis paralysis for months before this. The course basically forced me to validate my idea first, then launch fast. Hit $10K in sales the first 3 weeks which was wild. The pricing psychology section made me realize I was undercharging by like 3x.",
      results: "$10K first launch, now doing $25K/mo"
    },
    {
      name: "Marcus Thorne",
      role: "Automation Consultant",
      course: "AI Automations",
      avatar: "https://i.pravatar.cc/150?img=67",
      content: "Went from zero automation knowledge to landing 5 clients in 90 days. Built n8n workflows that save my clients 40+ hours weekly. Now making $12K/month with monthly retainers. The client acquisition templates were game-changing.",
      results: "5 clients, $12K/mo recurring"
    },
    {
      name: "Julian Chen",
      role: "AI Content Creator",
      course: "AI Influencers",
      avatar: "https://i.pravatar.cc/150?img=12",
      content: "Made 3 AI models that post while I sleep. Sounds weird but it works - they've got 200K followers combined now. Getting partnership offers I would've never gotten with just my personal account. It's like having a team working 24/7 except it's just me and some AI models.",
      results: "200K followers, $8K/mo from AI content"
    },
    {
      name: "Alex V.",
      role: "Digital Entrepreneur",
      course: "Digital Products",
      avatar: "https://i.pravatar.cc/150?img=52",
      content: "Used to take me 3-4 months to launch a product. Now I can validate and launch in 2 weeks. Raised my prices 2x after the pricing module and people still buy. Turns out I was just scared to charge what I'm worth. My revenue went up but I'm working way less.",
      results: "2x pricing, launches in weeks not months"
    },
    {
      name: "Mateo Cruz",
      role: "Lifestyle Blogger",
      course: "Instagram Ignited",
      avatar: "https://i.pravatar.cc/150?img=88",
      content: "That algorithm breakdown was actually useful. Made my first carousel using the template and it got 2.3M views which was insane. Went from 5K to 85K followers in 3 months. Got my first $25K brand deal right after hitting 50K. Still feels unreal tbh.",
      results: "2.3M views, 5K → 85K followers"
    },
    {
      name: "Jordan K.",
      role: "Tech Entrepreneur",
      course: "AI Influencers",
      avatar: "https://i.pravatar.cc/150?img=71",
      content: "Built AI personas for customer support and content. My team was drowning in DMs and comments before. Now the AI handles most of it and we can focus on actual work. Scaled to 3x the customers without hiring anyone new. Pretty wild honestly.",
      results: "3x customers, same team size"
    },
    {
      name: "Priya Patel",
      role: "Digital Product Creator",
      course: "Digital Products",
      avatar: "https://i.pravatar.cc/150?img=23",
      content: "Did the validation steps before building anything this time (learned that lesson the hard way before). Launched in 2 weeks and made $22K first week. The pricing psychology stuff is legit - I doubled my prices and my conversion rate actually went UP.",
      results: "$22K first week, 2x higher prices"
    },
    {
      name: "Liam O'Connor",
      role: "Instagram Creator",
      course: "Instagram Ignited",
      avatar: "https://i.pravatar.cc/150?img=65",
      content: "My posts were getting maybe 50 likes before. Started using the carousel framework and things changed fast. Grew 4x in followers and now I have brands DMing me for collabs instead of me pitching them. That's the real win honestly.",
      results: "4x follower growth, inbound brand deals"
    },
    {
      name: "Kaelen Moss",
      role: "Content Creator",
      course: "Instagram Ignited",
      avatar: "https://i.pravatar.cc/150?img=18",
      content: "Started with a few hundred followers, hit 100K about 6 months later. The engagement tactics work better than just posting more. Launched a paid community last month and got 200 members week one. Feels good to finally monetize.",
      results: "100K followers, paid community launched"
    },
    {
      name: "Kenji T.",
      role: "Fashion Blogger",
      course: "Instagram Ignited",
      avatar: "https://i.pravatar.cc/150?img=33",
      content: "Literally started from zero followers. Thought I was too late to Instagram but tried anyway. Hit 45K in 6 months which seemed impossible at first. The carousel templates saved me so much time. Got my first $5K brand deal at 30K followers.",
      results: "0 → 45K in 6 months, first $5K deal"
    },
    {
      name: "David P.",
      role: "Fitness Coach",
      course: "Digital Products",
      avatar: "https://i.pravatar.cc/150?img=85",
      content: "Almost built a massive course nobody wanted (been there before). This time I validated first with a $50 pilot, got 20 people, then built the full thing. Launch did $50K which blew my mind. Now I have 500+ students and actual testimonials.",
      results: "$50K launch, 500+ students"
    },
    {
      name: "H. Thompson",
      role: "Travel Blogger",
      course: "Instagram Ignited",
      avatar: "https://i.pravatar.cc/150?img=17",
      content: "Was spending like 30 hours a week on content planning and it still felt random. Now I batch everything using the system and spend maybe 5 hours. My content performs better and I actually have time to travel. That was kind of the whole point lol.",
      results: "25 hours saved weekly, better results"
    },
    {
      name: "Jay Wilson",
      role: "Tech Reviewer",
      course: "AI Influencers",
      avatar: "https://i.pravatar.cc/150?img=94",
      content: "Made an AI that reviews tech products based on my style. Posts daily and people don't even realize it's AI half the time. Making about $4K/month from it now. Weirdest passive income I've ever had but it works.",
      results: "$4K/mo from AI reviewer account"
    },
    {
      name: "Elise D.",
      role: "Life Coach",
      course: "Instagram Ignited",
      avatar: "https://i.pravatar.cc/150?img=89",
      content: "2K to 75K in 5 months. The engagement stuff is what made the difference - I was posting into the void before. Now people actually respond and DM me. My coaching business went from struggling to waitlist in 3 months.",
      results: "2K → 75K, coaching waitlist"
    },
    {
      name: "Michael B.",
      role: "Photographer & Automation Specialist",
      course: "AI Automations",
      avatar: "https://i.pravatar.cc/150?img=76",
      content: "Added automation services to my photography business. Built AI chatbots and workflow automations for 8 clients. Now have dual income streams - photography and $8K monthly from automation retainers. Best decision ever.",
      results: "8 clients, dual income streams"
    },
    {
      name: "Rob J.",
      role: "Nutritionist",
      course: "Digital Products",
      avatar: "https://i.pravatar.cc/150?img=50",
      content: "Turned my meal plans into a $47 guide. Made $15K first month which was way more than I expected. The pricing module convinced me to charge more than $19 (which is what I almost did). Now it brings in $5K+ monthly on autopilot.",
      results: "$15K launch, $5K/mo passive"
    },
    {
      name: "Rachel G.",
      role: "Music Producer",
      course: "Digital Products",
      avatar: "https://i.pravatar.cc/150?img=41",
      content: "Was just selling beats for like $50 each. Made a production course instead and now I make $8K/month teaching. Still sell beats but the course revenue is way more consistent. Wish I did this years ago.",
      results: "Beats → Course, $8K/mo passive"
    },
    {
      name: "Amara W.",
      role: "Beauty Influencer",
      course: "Instagram Ignited",
      avatar: "https://i.pravatar.cc/150?img=21",
      content: "First carousel using the formula got 1.2M views and 15K followers overnight. Completely changed my account. Now brands reach out to me instead of ignoring my emails. Hit $10K in brand deals last month.",
      results: "1.2M views, $10K/mo in deals"
    },
    {
      name: "Marcus W.",
      role: "Business Coach",
      course: "Digital Products",
      avatar: "https://i.pravatar.cc/150?img=7",
      content: "Launch did $35K which was wild because my list was only like 800 people. The email sequences and scarcity tactics actually work. On track for 6 figures this year which seemed impossible 6 months ago.",
      results: "$35K launch, 6-fig trajectory"
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
    <>
      <StickyCTA 
        price="$99/mo" 
        originalPrice="$399" 
        ctaLink="https://buy.polar.sh/polar_cl_RZqECtx9qQzbriWQHfGfIc2JxkSL17qSERkbq3MVgw5"
        productName="Empire Pass All Access" 
      />

      {/* SEO: AI Content Declaration for Testimonials Page */}
      <AIContentDeclaration
        title="Student Success Stories & Testimonials - IImagined.ai"
        description="Real success stories from 4,000+ students who transformed their lives through Instagram growth, AI influencers, AI automation agencies, and digital products courses. Verified results and testimonials."
        contentType="review"
        primaryTopic="Student Success Stories & Course Reviews"
        keywords={[
          'student success stories',
          'course testimonials',
          'Instagram growth results',
          'AI influencer success',
          'digital product sales',
          'AI automation wins',
          'online course reviews',
          'creator economy',
          'business transformation',
          'verified testimonials'
        ]}
        author="Anyro"
        datePublished="2024-01-01"
        dateModified="2025-10-31"
        readingTime={10}
        isAccessibleForFree={true}
        expertiseLevel="beginner"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            ...testimonialsSchema,
            review: testimonials.map(t => ({
              "@type": "Review",
              "author": {
                "@type": "Person",
                "name": t.name
              },
              "reviewRating": {
                "@type": "Rating",
                "ratingValue": "5",
                "bestRating": "5"
              },
              "reviewBody": t.content,
              "itemReviewed": {
                "@type": "Course",
                "name": t.course,
                "provider": {
                  "@type": "Organization",
                  "name": "IImagined.ai"
                }
              }
            }))
          })
        }}
      />

      <div className="min-h-screen bg-dark">
        {/* MAGICAL HEADER */}
        <section className="relative py-20 px-4 overflow-hidden">
          <HeroBackground variant="default" />

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
                <NumberTicker value={4000} className="text-3xl md:text-4xl font-bold text-blue-400" />+
              </div>
              <p className="text-zinc-300 text-sm md:text-base font-medium">Students Enrolled</p>
            </div>
            <div className={`bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-xl p-6 text-center border border-zinc-700 hover:border-green-500/50 transition-all duration-300 hover-lift scroll-scale ${statsAnimation.isVisible ? 'visible scroll-stagger-2' : ''}`}>
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-green-400 to-green-500 bg-clip-text text-transparent mb-2">
                <NumberTicker value={500} className="text-3xl md:text-4xl font-bold text-green-400" />M+
              </div>
              <p className="text-zinc-300 text-sm md:text-base font-medium">Total Views Generated</p>
            </div>
            <div className={`bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-xl p-6 text-center border border-zinc-700 hover:border-purple-500/50 transition-all duration-300 hover-lift scroll-scale ${statsAnimation.isVisible ? 'visible scroll-stagger-3' : ''}`}>
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-purple-500 bg-clip-text text-transparent mb-2">
                <NumberTicker value={3} className="text-3xl md:text-4xl font-bold text-purple-400" />M+
              </div>
              <p className="text-zinc-300 text-sm md:text-base font-medium">Combined Followers</p>
            </div>
            <div className={`bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-xl p-6 text-center border border-zinc-700 hover:border-yellow-500/50 transition-all duration-300 hover-lift scroll-scale ${statsAnimation.isVisible ? 'visible scroll-stagger-4' : ''}`}>
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent mb-2">
                $<NumberTicker value={5} className="text-3xl md:text-4xl font-bold text-orange-400" />M+
              </div>
              <p className="text-gray-400 text-sm md:text-base">Combined Student Earnings</p>
            </div>
          </div>

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
                    testimonial.course === 'AI Influencers' ? 'bg-pink-500/20 text-pink-400' :
                    testimonial.course === 'AI Automations' ? 'bg-orange-500/20 text-orange-400' :
                    'bg-purple-500/20 text-purple-400'
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
              {/* Danni's Journey */}
              <div className={`relative overflow-hidden bg-gradient-to-br from-zinc-900 via-blue-900/20 to-zinc-900 rounded-2xl p-8 md:p-12 hover-lift scroll-scale ${successAnimation.isVisible ? 'visible scroll-stagger-1' : ''}`}>
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <Image
                      src="https://i.pravatar.cc/150?img=29"
                      alt="Danni"
                      width={80}
                      height={80}
                      className="w-20 h-20 rounded-full ring-4 ring-blue-500/50 mr-6"
                    />
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-white">Danni's Instagram Journey</h3>
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
                    "I was stuck at 3K followers for like a year. Then I actually followed the carousel framework instead of just
                    winging it. First one got 2.8M views which was insane. Now I'm averaging 100K+ views per post and actually
                    making money from my followers instead of just having them. The algorithm stuff really works."
                  </p>
                  
                  <div className="flex flex-wrap gap-3">
                    <span className="px-4 py-2 bg-blue-500/20 text-blue-400 rounded-full text-sm font-medium">Viral Carousels</span>
                    <span className="px-4 py-2 bg-green-500/20 text-green-400 rounded-full text-sm font-medium">567% Growth</span>
                    <span className="px-4 py-2 bg-purple-500/20 text-purple-400 rounded-full text-sm font-medium">6-Figure Trajectory</span>
                  </div>
                </div>
              </div>

              {/* Aubrey's Transformation */}
              <div className={`relative overflow-hidden bg-gradient-to-br from-zinc-900 via-purple-900/20 to-zinc-900 rounded-2xl p-8 md:p-12 hover-lift scroll-scale ${successAnimation.isVisible ? 'visible scroll-stagger-2' : ''}`}>
                <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <Image
                      src="https://i.pravatar.cc/150?img=36"
                      alt="Aubrey"
                      width={80}
                      height={80}
                      className="w-20 h-20 rounded-full ring-4 ring-purple-500/50 mr-6"
                    />
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-white">Aubrey's Complete Transformation</h3>
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
                    "Had 400 followers and no clue what I was doing. Instagram Ignited showed me how to actually grow an account.
                    Then I took the Digital Products course and turned that audience into a real business. Now I'm doing multiple 6-figures
                    selling courses. My students are getting similar results which is wild to see."
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

          {/* Skeptic's Corner */}
          <div className="mb-24 max-w-5xl mx-auto">
             <div className="text-center mb-12">
                <p className="text-zinc-500 font-medium text-sm uppercase tracking-wider mb-2">Brutal Honesty</p>
                <h2 className="text-3xl md:text-4xl font-bold text-white">"I thought this was a scam..."</h2>
             </div>
             <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    quote: "I've bought so many 'guru' courses that turned out to be garbage. I was 100% sure this would be another one. I only bought it because of the refund policy. Turns out, it's the only one that actually taught me something tangible. The n8n module alone is worth 10x the price.",
                    author: "Marcus Chen",
                    role: "Formerly Skeptical Dev"
                  },
                  {
                    quote: "I didn't think I had time. I work a 9-5 and have 2 kids. The '2 Hours a Day' claim sounded like marketing BS. But the systems actually work. I do most of my work on my commute and on weekends. It's not magic, it's just efficient.",
                    author: "Sarah Jenkins",
                    role: "Busy Mom & Entrepreneur"
                  }
                ].map((item, i) => (
                  <div key={i} className="bg-zinc-900/30 border border-zinc-800 p-8 rounded-2xl relative">
                     <Quote className="w-10 h-10 text-zinc-700 absolute top-6 left-6 opacity-50" />
                     <p className="text-zinc-300 relative z-10 pl-8 mb-6 italic leading-relaxed">"{item.quote}"</p>
                     <div className="flex items-center gap-3 pl-8">
                        <div className="w-10 h-10 bg-zinc-800 rounded-full flex items-center justify-center text-zinc-500 font-bold">
                          {item.author[0]}
                        </div>
                        <div>
                           <p className="text-white font-bold text-sm">{item.author}</p>
                           <p className="text-zinc-500 text-xs">{item.role}</p>
                        </div>
                     </div>
                  </div>
                ))}
             </div>
          </div>

          {/* Ecosystem Graph */}
          <EcosystemGraph currentCourseId="instagram-ignited" /> {/* Defaulting to IG for visual anchor */}

          {/* CTA Section */}
          <div
            ref={ctaAnimation.elementRef}
            className={`relative overflow-hidden bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20 rounded-2xl p-8 md:p-12 text-center hover-lift scroll-fade-up ${ctaAnimation.isVisible ? 'visible' : ''}`}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
            <div className="relative z-10">
              <div className="inline-block px-4 py-2 bg-zinc-800 rounded-full text-sm text-zinc-200 mb-6">
                <span className="text-green-400">★</span> Join 4,000+ students
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
                Everyone here started where you are now - probably doubting if this stuff actually works.
                They just followed the systems and put in the work. The difference between them and people who
                don't see results? They actually did it instead of just thinking about it.
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
    </>
  )
}
