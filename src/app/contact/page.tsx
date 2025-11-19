'use client'

import Link from 'next/link'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import AnimatedGradientText from '@/components/magicui/animated-gradient-text'
import ShimmerButton from '@/components/magicui/shimmer-button'
import BlurIn from '@/components/magicui/blur-in'
import TypingAnimation from '@/components/magicui/typing-animation'
import WordRotate from '@/components/magicui/word-rotate'
import ScrambleText from '@/components/magicui/scramble-text'
import HeroBackground from '@/components/HeroBackground'
import StickyCTA from '@/components/StickyCTA'
import { Mail, MessageSquare, HelpCircle, Clock, ArrowRight, CheckCircle, AlertCircle } from 'lucide-react'

export default function ContactPage() {
  const heroAnimation = useScrollAnimation({ threshold: 0.3 })
  const contentAnimation = useScrollAnimation({ threshold: 0.2 })
  const faqAnimation = useScrollAnimation({ threshold: 0.1 })

  return (
    <div className="min-h-screen bg-dark relative selection:bg-blue-500/30 selection:text-blue-200">
      <StickyCTA 
        price="$99/mo" 
        originalPrice="$399" 
        ctaLink="/checkout?course=empire-bundle"
        productName="Empire Pass All Access" 
      />

      {/* MAGICAL HEADER */}
      <section className="relative py-24 px-4 overflow-hidden">
        <HeroBackground variant="default" />
        
        <div className="container mx-auto max-w-6xl relative z-10 text-center">
          <div ref={heroAnimation.elementRef} className={`scroll-fade-up ${heroAnimation.isVisible ? 'visible' : ''}`}>
             <div className="inline-flex items-center gap-2 bg-zinc-800/50 border border-white/10 rounded-full px-4 py-1.5 mb-8 backdrop-blur-md">
               <MessageSquare className="w-4 h-4 text-blue-400" />
               <span className="text-zinc-300 text-sm font-medium uppercase tracking-wider">Direct Line</span>
             </div>

             <h1 className="text-6xl md:text-8xl font-black text-white mb-8 tracking-tight drop-shadow-2xl">
               Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">Talk.</span>
             </h1>

             <div className="max-w-2xl mx-auto">
               <p className="text-xl md:text-2xl text-zinc-400 leading-relaxed font-medium">
                 Questions about the Empire? Need support?
                 <br />
                 I'm here to help you build.
               </p>
             </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 section-spacing">
        <div className="max-w-4xl mx-auto">

          {/* Contact Grid */}
          <div ref={contentAnimation.elementRef} className={`grid md:grid-cols-2 gap-8 mb-24 scroll-fade-up ${contentAnimation.isVisible ? 'visible' : ''}`}>
             
             {/* Support Card */}
             <div className="bg-zinc-900/50 border border-zinc-800 rounded-3xl p-8 hover:border-blue-500/30 transition-all duration-300 group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative z-10">
                   <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6 border border-blue-500/20">
                      <HelpCircle className="w-6 h-6 text-blue-400" />
                   </div>
                   <h3 className="text-2xl font-bold text-white mb-2">Student Support</h3>
                   <p className="text-zinc-400 mb-6">
                      Already a member? Get priority support inside the community or email our dedicated team.
                   </p>
                   <div className="space-y-3">
                      <div className="flex items-center gap-3 text-sm text-zinc-300">
                         <CheckCircle className="w-4 h-4 text-green-400" />
                         <span>24/7 Community Access</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm text-zinc-300">
                         <CheckCircle className="w-4 h-4 text-green-400" />
                         <span>Technical Support</span>
                      </div>
                   </div>
                   <div className="mt-8">
                      <a href="mailto:support@iimagined.ai" className="text-blue-400 font-bold flex items-center gap-2 hover:gap-3 transition-all">
                         support@iimagined.ai <ArrowRight className="w-4 h-4" />
                      </a>
                   </div>
                </div>
             </div>

             {/* Direct Contact Card */}
             <div className="bg-zinc-900/50 border border-zinc-800 rounded-3xl p-8 hover:border-purple-500/30 transition-all duration-300 group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative z-10">
                   <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center mb-6 border border-purple-500/20">
                      <Mail className="w-6 h-6 text-purple-400" />
                   </div>
                   <h3 className="text-2xl font-bold text-white mb-2">General Inquiries</h3>
                   <p className="text-zinc-400 mb-6">
                      Questions about the courses? Partnership opportunities? Send me a direct message.
                   </p>
                   <div className="space-y-3">
                      <div className="flex items-center gap-3 text-sm text-zinc-300">
                         <Clock className="w-4 h-4 text-purple-400" />
                         <span>12-24 Hour Response Time</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm text-zinc-300">
                         <AlertCircle className="w-4 h-4 text-purple-400" />
                         <span>No Spam Please</span>
                      </div>
                   </div>
                   <div className="mt-8">
                      <a href="mailto:anyro@iimagined.ai" className="text-purple-400 font-bold flex items-center gap-2 hover:gap-3 transition-all">
                         anyro@iimagined.ai <ArrowRight className="w-4 h-4" />
                      </a>
                   </div>
                </div>
             </div>

          </div>

          {/* FAQ Section */}
          <div ref={faqAnimation.elementRef} className={`scroll-fade-up ${faqAnimation.isVisible ? 'visible' : ''}`}>
             <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-white mb-4">Before you ask...</h2>
                <p className="text-zinc-400">Here are the most common questions I get.</p>
             </div>

             <div className="grid md:grid-cols-2 gap-6">
                {[
                   { q: "Do I get lifetime access?", a: "Yes. One payment (or subscription) gets you in forever. Including all future updates." },
                   { q: "Is this suitable for beginners?", a: "100%. I built these systems specifically for people starting from zero. No prior experience needed." },
                   { q: "What if I'm not happy?", a: "We have a 60-day action-based guarantee. If you do the work and don't see results, you get a refund." },
                   { q: "How much time do I need?", a: "Most students start with 1-2 hours a day. The systems are designed for efficiency, not grinding." }
                ].map((faq, i) => (
                   <div key={i} className="bg-zinc-900/30 border border-zinc-800/50 p-6 rounded-2xl">
                      <h4 className="font-bold text-white mb-2">{faq.q}</h4>
                      <p className="text-zinc-400 text-sm leading-relaxed">{faq.a}</p>
                   </div>
                ))}
             </div>
          </div>

        </div>
      </div>
    </div>
  )
}
