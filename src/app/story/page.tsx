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
import HeroBackground from '@/components/HeroBackground'
import AIContentDeclaration from '@/components/seo/AIContentDeclaration'
import PersonSchema, { personSchemas } from '@/components/seo/PersonSchema'
import StickyCTA from '@/components/StickyCTA'
import EcosystemGraph from '@/components/EcosystemGraph'
import { ArrowRight, Target, Zap, TrendingUp, Crown, Quote } from 'lucide-react'

export default function StoryPage() {
  const heroAnimation = useScrollAnimation({ threshold: 0.3 })
  const timelineAnimation = useScrollAnimation({ threshold: 0.1 })
  const philosophyAnimation = useScrollAnimation({ threshold: 0.2 })
  const ctaAnimation = useScrollAnimation({ threshold: 0.3 })

  const timelineEvents = [
    {
      year: "The Realization",
      title: "The Pharmacy Trap",
      description: "Studying pharmacy, working in hospitals. I looked at the doctors and pharmacists around me—stressed, overworked, capped income. I realized I was training for a life I didn't want. I knew there had to be more than trading time for money.",
      icon: <Target className="w-6 h-6 text-zinc-500" />
    },
    {
      year: "The First Win",
      title: "Instagram Mastery",
      description: "I stopped trying to do 10 things and focused on ONE: Instagram. I obsessed over algorithms, content psychology, and viral hooks. Result? Reached millions, grew accounts to 500K+, and finally saw 6-figures.",
      icon: <Zap className="w-6 h-6 text-blue-400" />
    },
    {
      year: "The Leverage",
      title: "AI & Automation",
      description: "I realized I couldn't scale with manual work. I went deep into AI (ComfyUI, SDXL) and Automation (n8n). Built AI influencers that printed money while I slept. My output increased 100x.",
      icon: <TrendingUp className="w-6 h-6 text-pink-400" />
    },
    {
      year: "The Empire",
      title: "Building The Ecosystem",
      description: "Now I stack wins. IImagined (Education), 1abel (Fashion), Seology (SaaS). It's all connected. I don't just build businesses; I build ecosystems.",
      icon: <Crown className="w-6 h-6 text-yellow-400" />
    }
  ]

  return (
    <div className="min-h-screen bg-dark selection:bg-purple-500/30 selection:text-purple-200">
      <StickyCTA 
        price="$99/mo" 
        originalPrice="$399" 
        ctaLink="https://buy.polar.sh/polar_cl_RZqECtx9qQzbriWQHfGfIc2JxkSL17qSERkbq3MVgw5"
        productName="Empire Pass All Access" 
      />

      <AIContentDeclaration
        title="My Story - Anyro: From Broke to Digital Empire"
        description="The unfiltered story of how Anyro built multiple 7-figure businesses by mastering one skill at a time. From Instagram to AI Automation to SaaS."
        contentType="article"
        primaryTopic="Entrepreneurship & Business Journey"
        keywords={['entrepreneurship', 'business story', 'Anyro', 'IImagined', 'AI automation', 'success mindset']}
        author="Anyro"
        datePublished="2024-01-15"
        dateModified="2025-11-01"
        readingTime={8}
        isAccessibleForFree={true}
        expertiseLevel="intermediate"
      />
      <PersonSchema {...personSchemas.anyro} />

      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center justify-center px-4 overflow-hidden">
        <HeroBackground variant="default" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/80 to-zinc-950 pointer-events-none" />

        <div className="container mx-auto max-w-5xl relative z-10 text-center">
           <div ref={heroAnimation.elementRef} className={`scroll-fade-up ${heroAnimation.isVisible ? 'visible' : ''}`}>
              <div className="inline-flex items-center gap-2 bg-zinc-800/50 border border-white/10 rounded-full px-4 py-1.5 mb-8 backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-zinc-300 text-sm font-medium uppercase tracking-wider">The Unfiltered Truth</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-8 tracking-tight leading-[1.1]">
                I Was <span className="text-zinc-600 line-through decoration-blue-500/50 decoration-4">Studying Pharmacy</span>. <br />
                Now I Run An <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">Empire.</span>
              </h1>

              <p className="text-xl md:text-2xl text-zinc-400 max-w-3xl mx-auto mb-12 leading-relaxed">
                I looked around the hospital and realized I was training for a life I didn't want.
                Here is exactly how I pivoted from prescriptions to multiple 7-figure businesses.
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-4">
                 <Link href="#timeline">
                    <ShimmerButton className="shadow-2xl" background="linear-gradient(135deg, #3f3f46, #18181b)">
                       <span className="text-white font-bold px-8 py-3 flex items-center gap-2">
                          Read The Journey <ArrowRight className="w-4 h-4" />
                       </span>
                    </ShimmerButton>
                 </Link>
              </div>
           </div>
        </div>
      </section>

      {/* THE TIMELINE */}
      <section id="timeline" className="py-24 bg-zinc-950 relative">
         <div className="container mx-auto px-4 max-w-4xl">
            <div ref={timelineAnimation.elementRef} className="relative">
               {/* Vertical Line */}
               <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-zinc-800 md:-translate-x-1/2" />

               {timelineEvents.map((event, index) => (
                  <div key={index} className={`relative flex items-center gap-8 mb-16 md:mb-24 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                     {/* Timeline Dot */}
                     <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-zinc-950 border-4 border-white rounded-full z-10 md:-translate-x-1/2 translate-y-1.5 shadow-[0_0_15px_rgba(255,255,255,0.5)]" />

                     {/* Content */}
                     <div className="pl-20 md:pl-0 md:w-1/2">
                        <div className={`bg-zinc-900/50 border border-white/5 p-8 rounded-2xl hover:border-white/10 transition-all duration-300 hover:bg-zinc-900 group ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                           <div className={`flex items-center gap-3 mb-4 ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}>
                              <span className="text-sm font-bold text-zinc-500 uppercase tracking-widest">{event.year}</span>
                              {event.icon}
                           </div>
                           <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">{event.title}</h3>
                           <p className="text-zinc-400 leading-relaxed">{event.description}</p>
                        </div>
                     </div>
                     
                     {/* Empty space for alternating layout */}
                     <div className="hidden md:block md:w-1/2" />
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* THE PHILOSOPHY */}
      <section className="py-32 bg-black relative overflow-hidden">
         <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10" />
         <div className="container mx-auto px-4 max-w-5xl relative z-10">
            <div ref={philosophyAnimation.elementRef} className={`text-center scroll-scale ${philosophyAnimation.isVisible ? 'visible' : ''}`}>
               <Quote className="w-12 h-12 text-purple-500 mx-auto mb-8 opacity-50" />
               <h2 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight">
                  "You don't need <span className="text-zinc-600 line-through">talent</span>.<br />
                  You need <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Obsession.</span>"
               </h2>
               <p className="text-xl md:text-2xl text-zinc-400 max-w-3xl mx-auto leading-relaxed mb-12">
                  I see people failing not because they aren't smart, but because they dabble. 
                  They try 5 things for a week. I tried <strong className="text-white">ONE thing for a year.</strong>
                  <br /><br />
                  That is the cheat code. Pick one skill. Master it until you're in the top 1%. 
                  Then stack the next skill. That is how you build an empire.
               </p>
               
               <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                  <div className="p-6 bg-zinc-900 rounded-2xl border border-zinc-800">
                     <div className="text-3xl font-black text-white mb-1">4K+</div>
                     <div className="text-xs text-zinc-500 uppercase tracking-wider">Students</div>
                  </div>
                  <div className="p-6 bg-zinc-900 rounded-2xl border border-zinc-800">
                     <div className="text-3xl font-black text-white mb-1">$5M+</div>
                     <div className="text-xs text-zinc-500 uppercase tracking-wider">Revenue</div>
                  </div>
                  <div className="p-6 bg-zinc-900 rounded-2xl border border-zinc-800">
                     <div className="text-3xl font-black text-white mb-1">4</div>
                     <div className="text-xs text-zinc-500 uppercase tracking-wider">Businesses</div>
                  </div>
                  <div className="p-6 bg-zinc-900 rounded-2xl border border-zinc-800">
                     <div className="text-3xl font-black text-white mb-1">∞</div>
                     <div className="text-xs text-zinc-500 uppercase tracking-wider">Potential</div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* ECOSYSTEM GRAPH */}
      <EcosystemGraph currentCourseId="instagram-ignited" />

      {/* FINAL CTA */}
      <section className="py-24 bg-zinc-950 text-center border-t border-zinc-900">
         <div className="container mx-auto px-4 max-w-3xl">
            <div ref={ctaAnimation.elementRef} className={`scroll-fade-up ${ctaAnimation.isVisible ? 'visible' : ''}`}>
               <h2 className="text-4xl md:text-6xl font-black text-white mb-8">
                  Stop Reading.<br />Start Building.
               </h2>
               <p className="text-xl text-zinc-400 mb-12">
                  I've packaged 5 years of failure and success into a blueprint you can copy.
                  You don't need to guess anymore.
               </p>
               <Link href="https://buy.polar.sh/polar_cl_RZqECtx9qQzbriWQHfGfIc2JxkSL17qSERkbq3MVgw5">
                  <ShimmerButton
                     className="shadow-2xl w-full md:w-auto"
                     shimmerColor="#ffffff"
                     shimmerSize="0.1em"
                     background="linear-gradient(135deg, #2563eb, #9333ea)"
                     borderRadius="12px"
                  >
                     <span className="whitespace-nowrap text-xl font-bold px-10 py-4">
                        Get The Empire Pass
                     </span>
                  </ShimmerButton>
               </Link>
            </div>
         </div>
      </section>
    </div>
  )
}
