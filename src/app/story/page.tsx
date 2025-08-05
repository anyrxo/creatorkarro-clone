'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import BlurIn from '@/components/magicui/blur-in'
import TypingAnimation from '@/components/magicui/typing-animation'
import NumberTicker from '@/components/magicui/number-ticker'
import ShimmerButton from '@/components/magicui/shimmer-button'
import WordRotate from '@/components/magicui/word-rotate'
import ScrambleText from '@/components/magicui/scramble-text'

export default function StoryPage() {
  // Scroll animations for different sections
  const heroAnimation = useScrollAnimation({ threshold: 0.3 })
  const imageAnimation = useScrollAnimation({ threshold: 0.2 })
  const storyAnimation = useScrollAnimation({ threshold: 0.1 })
  const statsAnimation = useScrollAnimation({ threshold: 0.2 })
  const missionAnimation = useScrollAnimation({ threshold: 0.2 })
  const ctaAnimation = useScrollAnimation({ threshold: 0.3 })

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
                    text="My Story" 
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
                  text="From zero followers to building a multi-million dollar creator empire. This is how I transformed passion into profit using AI, automation, and proven systems."
                  className="text-2xl md:text-3xl text-white leading-relaxed font-medium drop-shadow-lg"
                  duration={40}
                />
              </div>
              
              {/* Subtitle Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent blur-sm"></div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 section-spacing">
        <div className="max-w-4xl mx-auto">

          {/* Hero Image */}
          <div
            ref={imageAnimation.elementRef}
            className={`mb-16 text-center scroll-scale ${imageAnimation.isVisible ? 'visible' : ''}`}
          >
            <Image
              src="/anyro.png"
              alt="Anyro - Founder of IImagined, AI automation expert and content creator"
              width={300}
              height={300}
              className="w-48 md:w-64 lg:w-72 h-48 md:h-64 lg:h-72 rounded-full mx-auto object-cover hover-lift hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 ring-4 ring-blue-500/20 hover:ring-blue-400/40"
              priority
            />
          </div>

          {/* Story Content */}
          <div
            ref={storyAnimation.elementRef}
            className={`space-y-6 md:space-y-8 text-base md:text-lg lg:text-xl text-zinc-200 leading-relaxed scroll-fade-up ${storyAnimation.isVisible ? 'visible' : ''}`}
          >
            <div className="relative bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10 rounded-2xl p-6 md:p-8 border border-blue-500/20 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-2xl"></div>
              <div className="relative z-10">
                <p className="text-lg md:text-xl lg:text-2xl font-medium bg-gradient-to-r from-blue-200 to-purple-200 bg-clip-text text-transparent mb-4">
                  "What started as me posting random stuff online has somehow turned into a 7-figure business."
                </p>
                <p className="text-base md:text-lg text-zinc-300 italic">
                  - From zero to millions, one system at a time
                </p>
              </div>
            </div>

            <p>
              Hey, I'm Anyro. I create content, build businesses, and teach others how to do the same. But here's the truth - I started out completely lost, just like you might be right now.
            </p>

            <p>
              I was watching every YouTube video, buying every course, trying to find my path. But instead of chasing quick wins, I went deep on what actually fascinated me - AI, automation, and content creation. That obsession changed everything.
            </p>

            <p>
              I started experimenting with everything - building AI influencers that generate income 24/7, automating entire businesses with N8N, creating viral content with ComfyUI, mastering the algorithm on every platform, and packaging my knowledge into digital products. Each success built on the last, and suddenly I wasn't just learning - I was earning.
            </p>

            <div
              ref={statsAnimation.elementRef}
              className={`bg-zinc-900 rounded-2xl p-6 md:p-8 my-12 hover-lift scroll-scale ${statsAnimation.isVisible ? 'visible scroll-stagger-2' : ''}`}
            >
              <BlurIn
                word="The Numbers"
                className="text-2xl md:text-3xl font-bold mb-6 text-center bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent"
                duration={0.8}
              />
              <div className="grid md:grid-cols-3 gap-6 md:gap-8 text-center">
                <div className={`p-4 rounded-xl bg-blue-500/10 hover:bg-blue-500/20 transition-all duration-300 hover-lift scroll-fade-up ${statsAnimation.isVisible ? 'visible scroll-stagger-3' : ''}`}>
                  <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">
                    <NumberTicker value={4} />K+
                  </div>
                  <p className="text-zinc-300 font-medium">Active Students</p>
                </div>
                <div className={`p-4 rounded-xl bg-green-500/10 hover:bg-green-500/20 transition-all duration-300 hover-lift scroll-fade-up ${statsAnimation.isVisible ? 'visible scroll-stagger-4' : ''}`}>
                  <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">
                    $<NumberTicker value={5} />M+
                  </div>
                  <p className="text-zinc-300 font-medium">Student Revenue</p>
                </div>
                <div className={`p-4 rounded-xl bg-purple-500/10 hover:bg-purple-500/20 transition-all duration-300 hover-lift scroll-fade-up ${statsAnimation.isVisible ? 'visible scroll-stagger-5' : ''}`}>
                  <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">
                    <NumberTicker value={4.9} decimalPlaces={1} />★
                  </div>
                  <p className="text-zinc-300 font-medium">Average Rating</p>
                </div>
              </div>
            </div>

            <p>
              Here's what I discovered: success isn't about picking one thing - it's about stacking skills that multiply each other. My AI influencers drive traffic to my digital products. My N8N automations handle the backend while I sleep. ComfyUI lets me create content at scale. Going viral brings in the audience. And digital products turn that audience into revenue. It's all connected.
            </p>

            <p>
              IImagined isn't just another course. It's the exact blueprint for all 5 systems that built my empire. No fluff, no theory - just proven methods: AI influencers, N8N automations, ComfyUI workflows, viral content strategies, and digital product funnels. Everything that took me to $3M+, and everything my students are using to build their own success.
            </p>

            <p>
              Look, I'm not special. I don't have some secret talent. I just found what works and went all in. These 5 methods aren't random - they're the future of online business. Master them now while most people are still figuring out basic social media.
            </p>

            <div
              ref={missionAnimation.elementRef}
              className={`relative bg-gradient-to-br from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-2xl p-8 md:p-10 text-center scroll-scale ${missionAnimation.isVisible ? 'visible' : ''} overflow-hidden`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10 rounded-2xl"></div>
              <div className="relative z-10">
                <TypingAnimation
                  text="My Mission"
                  className="text-2xl md:text-3xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
                  duration={100}
                />
                <p className="text-lg md:text-xl lg:text-2xl leading-relaxed text-zinc-100 font-medium">
                  To help as many people as possible escape the 9-5, build real wealth through content, and actually enjoy their life while doing it.
                </p>
                <p className="text-base md:text-lg text-zinc-300 mt-4 italic">
                  Because making money online shouldn't feel like torture.
                </p>
              </div>
            </div>

            <p>
              When I'm not working (which is rare because I'm obsessed with this stuff), I'm probably traveling somewhere random, trying weird foods, or deep in a YouTube rabbit hole learning something new. Living an interesting life makes creating content way easier.
            </p>

            <p>
              Whether you're at zero or already making money, there's always another level. I'm here to help you hit it. Let's get after it.
            </p>
          </div>

          {/* CTA Section */}
          <div
            ref={ctaAnimation.elementRef}
            className={`mt-16 text-center bg-zinc-900/50 rounded-2xl p-6 md:p-8 scroll-fade-up ${ctaAnimation.isVisible ? 'visible' : ''}`}
          >
            <BlurIn
              word="Ready to start your journey?"
              className="text-2xl md:text-3xl font-bold mb-4"
              duration={0.8}
            />
            <p className="text-lg md:text-xl text-zinc-200 mb-8 leading-relaxed">
              Join 4,000+ students who have already transformed their passion into profitable businesses using my proven systems.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8 text-sm md:text-base text-zinc-200">
              <div className="flex items-center gap-2">
                <span className="text-green-400">✓</span>
                <span>AI Automation Mastery</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-400">✓</span>
                <span>Viral Content Systems</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-400">✓</span>
                <span>Digital Product Empire</span>
              </div>
            </div>
            <Link href="/instagram-ignited" className="inline-block focus:outline-none focus:ring-4 focus:ring-blue-500/50 rounded-full" aria-label="Start your transformation with Instagram Ignited course">
              <ShimmerButton
                className="shadow-2xl hover:shadow-blue-500/25 transition-all duration-300"
                shimmerColor="#ffffff"
                shimmerSize="0.1em"
                background="linear-gradient(135deg, #2563eb, #9333ea)"
                borderRadius="9999px"
              >
                <span className="whitespace-nowrap text-lg font-bold px-8 py-3">
                  Start Your Transformation
                </span>
              </ShimmerButton>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
