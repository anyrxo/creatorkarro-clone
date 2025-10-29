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
        
        {/* Heartbeat Grid Pulsing from Center */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Center Point - Heart of the pulse */}
          <div
            className="absolute w-4 h-4 rounded-full"
            style={{
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
              background: 'rgba(59, 130, 246, 0.8)',
              boxShadow: '0 0 20px rgba(59, 130, 246, 0.5)',
              animation: 'pulse 2s infinite ease-in-out'
            }}
          />
          
          {/* Grid Lines radiating from center */}
          <svg className="absolute inset-0 w-full h-full" style={{ opacity: 0.1 }}>
            <defs>
              <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
                <path d="M 50 0 L 0 0 0 50" fill="none" stroke="rgba(59, 130, 246, 0.3)" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
          
          {/* Pulsing lines from center */}
          <div className="absolute inset-0">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"
                style={{
                  left: '50%',
                  top: '50%',
                  width: '200px',
                  height: '1px',
                  transformOrigin: '0 0',
                  transform: `translate(-50%, -50%) rotate(${i * 45}deg)`,
                  animation: `pulse 2s infinite ease-in-out ${i * 0.1}s`
                }}
              />
            ))}
          </div>
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
                  text="From marketing agency grunt work to AI influencer empire, futures trader, and digital product mogul. This is the unconventional path nobody talks about."
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
              src="/anyro.webp"
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
                  "I manage real influencers AND create AI influencers. I trade prop firms AND my own capital. I run agencies AND teach digital products. Seven years of mastery, packaged for anyone willing to work."
                </p>
                <p className="text-base md:text-lg text-zinc-300 italic">
                  - Real + AI = Unfair Advantage
                </p>
              </div>
            </div>

            <p>
              Hey, I'm Anyro. Most people try to sell you one thing. I'm going to tell you the truth: <strong className="text-blue-400">you need to pick something and actually get good at it.</strong> Not dabble. Not "try it out." Get obsessed.
            </p>

            <p>
              I started running a marketing agency for influencers. <strong className="text-white">Real humans. Real brands. Real results.</strong> I was scheduling posts, negotiating brand deals, managing campaigns - and I still work with them today. But I learned <em className="text-purple-400">how the game actually works</em> - what makes content pop, how algorithms reward consistency, why certain accounts blow up overnight.
            </p>

            <p>
              Then I added something nobody else was doing: <strong className="text-yellow-400">AI influencers.</strong> ComfyUI, SDXL, graphic cards rendering 24/7, Hunyuan, Wan - the full tech stack. Here's the thing: <span className="text-green-400 font-semibold">AI influencers = higher profit margins + complete control over every detail.</span> I can optimize facial expressions, lighting, poses, aesthetics down to the pixel. That level of control means I can grow people's earnings and social media reach to levels they couldn't hit before. I've landed brand deals for clients they never could have gotten on their own.
            </p>

            <p>
              <strong className="text-blue-400">Both work. Real + AI = unfair advantage.</strong> Real influencers bring authenticity and relatability. AI influencers bring consistency and scalability. Use both, dominate harder.
            </p>

            <p>
              While building that, I got into futures trading. Started with <strong className="text-orange-400">prop firms</strong> (FTMO, Topstep) to learn with funded capital - less risk, more upside. Once I figured out order flow and actual market structure (not YouTube candlestick BS), I moved into trading with my own funds. S&P 500, Nasdaq, Gold. Built enough consistency that I launched <strong className="text-blue-400">FuturesHive.com</strong> to teach the exact prop firm process and funded trading strategies.
            </p>

            <p>
              Then came <strong className="text-purple-400">digital products.</strong> Communities on Discord, Telegram, even IRL were asking me non-stop: <em>"How do you do this? Can you teach me?"</em> The demand was insane. So I sat down and packaged everything - AI workflows, trading strategies, Instagram systems, automation - into courses anyone can start with and actually make money from. <span className="text-yellow-400 font-semibold">Seven years of trial, error, and mastery, condensed into actionable systems.</span>
            </p>

            <p>
              As for <strong className="text-pink-400">1abel.com</strong>? That's my side project. Clothing I'd actually wear. Stuff I don't have to think twice about in a busy life. Simple, clean, functional. Currently working on it in my spare time because even side hustles should align with who you are.
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
              Here's the pattern I see everywhere: <strong className="text-red-400">people fail because they're lazy, not because they're stupid.</strong> They want the result without the reps. They want to "try" five things instead of mastering one. They watch YouTube for 6 hours but won't spend 30 minutes actually building something.
            </p>

            <p>
              <span className="text-2xl font-bold text-yellow-400">The truth?</span> You can make money with ANY of this stuff - AI influencers, real influencers, prop firm trading, content creation, digital products, whatever. But you have to <em className="text-purple-400 font-semibold">pick one and go insane on it.</em> Not for a week. Not for a month. Until you're better than 95% of people talking about it.
            </p>

            <p>
              That's what IImagined is: <strong className="text-blue-400">seven years of mastery, packaged into systems anyone can start with.</strong> No fluff about "finding your why" or "mindset hacks." Just the technical breakdowns, the exact workflows, the tools I use daily. Real influencer management + AI influencer creation with ComfyUI and SDXL. Prop firm funded trading strategies with real order flow. Building digital products that convert. Instagram growth with real brand deals.
            </p>

            <p className="text-xl font-semibold text-green-400">
              Pick one. Master it. Stack money. Then stack the next skill.
            </p>

            <p>
              Look, I'm not here to motivate you with quotes and morning routines. I'm here to show you what's possible when you commit to one path for years, not days. There are <span className="text-yellow-400 font-bold">infinite ways to make money</span> - I've spent seven years proving it across AI, trading, agencies, and digital products. Now I'm handing you the shortcuts.
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
                  To prove that you can start with nothing, pick literally anything, go all in, and build a life most people only dream about.
                </p>
                <p className="text-base md:text-lg text-zinc-300 mt-4 italic">
                  Stop dabbling. Start dominating.
                </p>
              </div>
            </div>

            <p>
              When I'm not working on one of these businesses, I'm probably testing a new vertical, diving into some random technical rabbit hole, or figuring out how to optimize something nobody else is paying attention to. <strong className="text-blue-400">Obsession is the cheat code.</strong>
            </p>

            <p>
              Bottom line: <span className="text-yellow-400 font-bold">you don't need permission, you don't need "the perfect idea," and you don't need more information.</span> You need to pick something real - AI, trading, content, products, whatever - and execute until you're undeniable. That's what I did. That's what my students are doing. That's what you can do if you stop being lazy.
            </p>

            <p className="text-xl font-semibold text-purple-400">
              Whether you're at zero or already making money, there's always another level. Let's get after it.
            </p>
          </div>

          {/* CTA Section */}
          <div
            ref={ctaAnimation.elementRef}
            className={`mt-16 text-center bg-zinc-900/50 rounded-2xl p-6 md:p-8 scroll-fade-up ${ctaAnimation.isVisible ? 'visible' : ''}`}
          >
            <BlurIn
              word="Ready to pick your path?"
              className="text-2xl md:text-3xl font-bold mb-4"
              duration={0.8}
            />
            <p className="text-lg md:text-xl text-zinc-200 mb-8 leading-relaxed">
              Join 4,000+ students who stopped dabbling and started dominating. Pick one. Master it. Stack money.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8 text-sm md:text-base text-zinc-200">
              <div className="flex items-center gap-2">
                <span className="text-green-400">✓</span>
                <span>Real + AI Influencer Systems</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-400">✓</span>
                <span>Prop Firm + Personal Trading</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-400">✓</span>
                <span>Digital Product Creation</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-400">✓</span>
                <span>Agency Management + Brand Deals</span>
              </div>
            </div>
            <Link href="/instagram-ignited" className="inline-block focus:outline-none focus:ring-4 focus:ring-blue-500/50 rounded-full" aria-label="Stop being lazy and start your transformation">
              <ShimmerButton
                className="shadow-2xl hover:shadow-blue-500/25 transition-all duration-300"
                shimmerColor="#ffffff"
                shimmerSize="0.1em"
                background="linear-gradient(135deg, #2563eb, #9333ea)"
                borderRadius="9999px"
              >
                <span className="whitespace-nowrap text-lg font-bold px-8 py-3">
                  Stop Being Lazy. Start Here
                </span>
              </ShimmerButton>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
