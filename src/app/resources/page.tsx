'use client'

import { useScrollAnimation, useScrollAnimations } from '@/hooks/useScrollAnimation'
import SocialIcon from '@/components/SocialIcon'
import BlurIn from '@/components/magicui/blur-in'
import WordRotate from '@/components/magicui/word-rotate'
import TypingAnimation from '@/components/magicui/typing-animation'
import ShimmerButton from '@/components/magicui/shimmer-button'
import ScrambleText from '@/components/magicui/scramble-text'
import HeroBackground from '@/components/HeroBackground'
import StickyCTA from '@/components/StickyCTA'
import { Wrench, Zap, BarChart3, Video, Cloud, Calendar, ExternalLink, ArrowRight } from 'lucide-react'

export default function ResourcesPage() {
  const heroAnimation = useScrollAnimation({ threshold: 0.3 })
  const categoryAnimations = useScrollAnimations(6, { threshold: 0.1 })

  const resources = [
    {
      category: "AI & Automation",
      icon: <Zap className="w-6 h-6 text-purple-400" />,
      gradient: "from-purple-500/20 to-pink-500/20",
      border: "border-purple-500/30",
      tools: [
        {
          name: "RunPod",
          description: "GPU cloud computing for AI training. Essential for ComfyUI & SDXL.",
          link: "https://runpod.io?ref=yf9yht6f",
          tag: "Infrastructure"
        },
        {
          name: "Fanvue",
          description: "The monetization platform for AI influencers. Higher margins than OF.",
          link: "https://www.fanvue.com/signup?referral=FV-33CETP",
          tag: "Monetization"
        },
        {
          name: "Beehiiv",
          description: "Newsletter platform built for growth. Own your audience.",
          link: "https://www.beehiiv.com?via=AbdulMannan1",
          tag: "Growth"
        }
      ]
    },
    {
      category: "Content Engine",
      icon: <Video className="w-6 h-6 text-blue-400" />,
      gradient: "from-blue-500/20 to-cyan-500/20",
      border: "border-blue-500/30",
      tools: [
        {
          name: "CapCut",
          description: "Speed is everything. Edit viral reels in minutes, not hours.",
          link: "https://www.capcut.com/",
          tag: "Editing"
        },
        {
          name: "Canva",
          description: "Quick thumbnails and carousel slides. Don't overcomplicate design.",
          link: "https://www.canva.com/",
          tag: "Design"
        },
        {
          name: "Loom",
          description: "Record SOPs and course content. Systematize your knowledge.",
          link: "https://loom.com/",
          tag: "Systems"
        }
      ]
    },
    {
      category: "Business Stack",
      icon: <BarChart3 className="w-6 h-6 text-green-400" />,
      gradient: "from-green-500/20 to-emerald-500/20",
      border: "border-green-500/30",
      tools: [
        {
          name: "Whop",
          description: "Where I host my entire empire. Payments, community, and courses in one.",
          link: "https://whop.com/agencypartners?a=anyro",
          tag: "Platform"
        },
        {
          name: "Notion",
          description: "The operating system for my life and businesses. Chaos killer.",
          link: "https://notion.so/",
          tag: "Operations"
        },
        {
          name: "Google Analytics",
          description: "If you can't measure it, you can't improve it. Track everything.",
          link: "https://analytics.google.com/",
          tag: "Data"
        }
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-dark selection:bg-blue-500/30 selection:text-blue-200">
      <StickyCTA 
        price="$99/mo" 
        originalPrice="$399" 
        ctaLink="https://buy.polar.sh/polar_cl_RZqECtx9qQzbriWQHfGfIc2JxkSL17qSERkbq3MVgw5"
        productName="Empire Pass All Access" 
      />

      {/* MAGICAL HEADER */}
      <section className="relative py-24 px-4 overflow-hidden">
        <HeroBackground variant="default" />
        
        <div className="container mx-auto max-w-6xl relative z-10 text-center">
          <div ref={heroAnimation.elementRef} className={`scroll-fade-up ${heroAnimation.isVisible ? 'visible' : ''}`}>
             <div className="inline-flex items-center gap-2 bg-zinc-800/50 border border-white/10 rounded-full px-4 py-1.5 mb-8 backdrop-blur-md">
               <Wrench className="w-4 h-4 text-blue-400" />
               <span className="text-zinc-300 text-sm font-medium uppercase tracking-wider">The Creator Stack</span>
             </div>

             <h1 className="text-6xl md:text-8xl font-black text-white mb-8 tracking-tight drop-shadow-2xl">
               My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">Arsenal.</span>
             </h1>

             <div className="max-w-3xl mx-auto">
               <p className="text-xl md:text-2xl text-zinc-400 leading-relaxed font-medium">
                 I don't use 50 tools. I use a few powerful ones.
                 <br />
                 Here is the exact tech stack that runs my 7-figure ecosystem.
               </p>
             </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 section-spacing">
        <div className="max-w-5xl mx-auto">
          
          <div className="space-y-12">
            {resources.map((category, index) => (
              <div 
                key={index}
                ref={categoryAnimations.setElementRef(index)}
                className={`scroll-fade-up ${categoryAnimations.visibleElements[index] ? 'visible' : ''}`}
              >
                <div className="flex items-center gap-3 mb-6">
                   <div className={`p-2 rounded-lg bg-gradient-to-br ${category.gradient} border ${category.border}`}>
                      {category.icon}
                   </div>
                   <h2 className="text-2xl font-bold text-white">{category.category}</h2>
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  {category.tools.map((tool, tIndex) => (
                    <a 
                      key={tIndex}
                      href={tool.link}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="group block bg-zinc-900/50 border border-zinc-800 hover:border-zinc-600 rounded-xl p-5 transition-all duration-300 hover:bg-zinc-800 hover:-translate-y-1"
                    >
                      <div className="flex justify-between items-start mb-3">
                         <h3 className="font-bold text-white group-hover:text-blue-400 transition-colors">{tool.name}</h3>
                         <ExternalLink className="w-4 h-4 text-zinc-600 group-hover:text-zinc-400" />
                      </div>
                      <p className="text-zinc-400 text-sm mb-4 h-10 line-clamp-2">{tool.description}</p>
                      <span className="text-xs font-mono bg-white/5 px-2 py-1 rounded text-zinc-500 uppercase tracking-wider">
                        {tool.tag}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Free Resources CTA */}
          <div className="mt-24 relative overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/50 p-12 text-center">
             <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-blue-500/10 pointer-events-none" />
             <div className="relative z-10">
                <h2 className="text-3xl font-bold text-white mb-4">Want the free stuff?</h2>
                <p className="text-zinc-400 mb-8 max-w-xl mx-auto">
                   I've dumped a ton of templates, guides, and checklists onto my Gumroad. 
                   Grab them before I decide to charge for them.
                </p>
                <a
                  href="https://anyrxo.gumroad.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <ShimmerButton
                    className="shadow-2xl"
                    shimmerColor="#ffffff"
                    shimmerSize="0.1em"
                    background="linear-gradient(135deg, #10b981, #059669)"
                    borderRadius="12px"
                  >
                    <span className="whitespace-nowrap text-lg font-bold px-8 py-3 flex items-center gap-2">
                      Access Free Vault <ArrowRight className="w-4 h-4" />
                    </span>
                  </ShimmerButton>
                </a>
             </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-xs text-zinc-600 max-w-2xl mx-auto">
              Transparency: Some of these are affiliate links. I only recommend tools I actually use to print money. 
              If you use them, I might buy a coffee. Win-win.
            </p>
          </div>

        </div>
      </div>
    </div>
  )
}
