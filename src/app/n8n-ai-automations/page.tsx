'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useScrollAnimation, useScrollAnimations } from '@/hooks/useScrollAnimation'
import SocialIcon from '@/components/SocialIcon'
import {
  ValueBadge,
  ModuleCard,
  BonusCard,
  ProblemCard,
  TestimonialCard,
  FAQCard,
  PricingComparison,
  HeroSection,
  SectionHeader
} from '@/components/course/CourseLayout'
import WordRotate from '@/components/magicui/word-rotate'
import BlurIn from '@/components/magicui/blur-in'
import TypingAnimation from '@/components/magicui/typing-animation'
import NumberTicker from '@/components/magicui/number-ticker'
import AnimatedGradientText from '@/components/magicui/animated-gradient-text'
import ShimmerButton from '@/components/magicui/shimmer-button'
import Marquee from '@/components/magicui/marquee'
import { ChevronRight } from 'lucide-react'

export default function N8NAutomationsPage() {
  // Scroll animations for different sections
  const heroAnimation = useScrollAnimation({ threshold: 0.2 })
  const problemAnimation = useScrollAnimation({ threshold: 0.1 })
  const solutionAnimation = useScrollAnimation({ threshold: 0.1 })
  const resultsAnimation = useScrollAnimation({ threshold: 0.1 })
  const whoForAnimation = useScrollAnimation({ threshold: 0.1 })
  const studentResultsAnimation = useScrollAnimation({ threshold: 0.1 })
  const modulesAnimation = useScrollAnimation({ threshold: 0.1 })
  const bonusAnimation = useScrollAnimation({ threshold: 0.1 })
  const pricingAnimation = useScrollAnimation({ threshold: 0.1 })
  const testimonialsAnimation = useScrollAnimation({ threshold: 0.1 })
  const faqAnimation = useScrollAnimation({ threshold: 0.1 })
  const finalCtaAnimation = useScrollAnimation({ threshold: 0.2 })

  // For grid items that need staggered animations
  const problemCards = useScrollAnimations(6, { threshold: 0.1 })
  const whoForCards = useScrollAnimations(3, { threshold: 0.1 })
  const moduleCards = useScrollAnimations(8, { threshold: 0.1 })
  const bonusCards = useScrollAnimations(6, { threshold: 0.1 })
  const testimonialCards = useScrollAnimations(3, { threshold: 0.1 })
  const faqCards = useScrollAnimations(12, { threshold: 0.1 })

  return (
    <div className="min-h-screen bg-dark relative">
      {/* 1. Hero Section */}
      <div ref={heroAnimation.elementRef} className="relative z-10">
        <HeroSection
          badge="🚀 AI AUTOMATION EMPIRE 🚀"
          badgeColor="bg-gradient-to-r from-purple-600/30 to-blue-600/30 text-purple-300 border border-purple-500/50"
          title="Stop Trading <span className='text-red-400'>Time For Money</span> — Build <span className='text-purple-400'>AI-Powered Automation Empire</span> That Works While You Sleep"
          description="The complete N8N AI Automation System that lets non-technical entrepreneurs build million-dollar workflows without writing a single line of code. Save 40+ hours/week with intelligent automation."
          ctaText="🔥 Get Complete N8N Mastery System"
          ctaLink="#pricing"
          socialProof={{
            images: [
              "https://ext.same-assets.com/1161517358/1620887224.webp",
              "https://ext.same-assets.com/1161517358/447445188.webp",
              "https://ext.same-assets.com/1161517358/2657109700.webp"
            ],
            rating: 5,
            text: "1,600+ students saving 40+ hours/week"
          }}
          stats={[
            { value: "40+", label: "Hours Saved Weekly", color: "text-purple-400" },
            { value: "$2M+", label: "Revenue Automated", color: "text-green-400" },
            { value: "1,600+", label: "Students Transformed", color: "text-blue-400" }
          ]}
          isVisible={heroAnimation.isVisible}
        />
      </div>

      {/* 2. Problem Section */}
      <section className="section-spacing border-t border-red-900/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={problemAnimation.elementRef}
            className={`text-center mb-16 scroll-fade-up ${problemAnimation.isVisible ? 'visible' : ''}`}
          >
            <SectionHeader
              badge="BRUTAL REALITY"
              badgeColor="bg-zinc-900 border border-red-500 text-red-400"
              isVisible={problemAnimation.isVisible}
              title="You're Drowning in <span className='text-red-400'>Manual Tasks</span>"
              subtitle="While your competitors scale with AI automation, you're stuck in the stone age of manual labor..."
            />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            {[
              {
                icon: "⏰",
                title: "80+ Hours/Week Manual Grinding",
                description: "You're manually doing everything: email responses, data entry, social media posting, customer follow-ups. Your entire business depends on YOU being online 24/7."
              },
              {
                icon: "💸",
                title: "Paying $5K+/Month for VA Teams",
                description: "You're hemorrhaging money on virtual assistants who make mistakes, need constant supervision, and cost more than your revenue. It's unsustainable and you know it."
              },
              {
                icon: "📈",
                title: "Missing 90% of Business Opportunities",
                description: "While you're stuck doing busy work, leads go cold, customers churn, and opportunities slip away. Your competitors are moving 10x faster with automation."
              },
              {
                icon: "😵",
                title: "Burnout from Repetitive Hell",
                description: "You didn't start a business to become a slave to it. But you're trapped doing the same mind-numbing tasks over and over, with no time for strategy or growth."
              },
              {
                icon: "🔥",
                title: "Zero Scalability Without You",
                description: "Your business stops when you stop. Take a vacation? Revenue drops. Get sick? Everything breaks. You've built a job, not a business, and it's killing you."
              },
              {
                icon: "📉",
                title: "Competitors Destroying You with AI",
                description: "While you're manually processing orders, they're using AI to handle 1000x more customers with zero human intervention. You're being left in the dust."
              }
            ].map((problem, index) => (
              <div
                key={index}
                ref={problemCards.setElementRef(index)}
                className={`scroll-fade-up ${problemCards.visibleElements[index] ? `visible scroll-stagger-${Math.min(index + 1, 6)}` : ''}`}
              >
                <ProblemCard {...problem} isVisible={problemCards.visibleElements[index]} />
              </div>
            ))}
          </div>

          <div className={`text-center scroll-fade-up ${problemAnimation.isVisible ? 'visible scroll-stagger-6' : ''}`}>
            <div className="bg-zinc-900 border border-red-900/30 rounded-2xl p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl md:text-4xl font-bold mb-4 text-red-400">
                The Painful Truth...
              </h3>
              <p className="text-lg md:text-xl text-gray-300 mb-6">
                Every month you waste on manual tasks is $10K-$50K in lost opportunities. Every day you delay automation, 
                your competitors pull further ahead with AI systems that work 24/7.
              </p>
              <div className="bg-zinc-900 border border-red-500 rounded-lg p-6">
                <p className="text-xl font-bold text-red-400 mb-2">
                  💀 You're not just losing time... you're losing your business to AI-powered competitors.
                </p>
                <p className="text-gray-300">
                  While they scale effortlessly with automation, you're drowning in manual work that will never end.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Solution Section */}
      <section className="section-spacing bg-gradient-to-b from-purple-900/20 to-blue-900/20 border-t border-purple-900/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={solutionAnimation.elementRef}
            className={`text-center mb-16 scroll-fade-up ${solutionAnimation.isVisible ? 'visible' : ''}`}
          >
            <div className="text-center mb-8">
              <div className="text-4xl md:text-6xl font-bold text-white mb-6">
                <BlurIn
                  word="N8N AI Automations"
                  className="text-4xl md:text-6xl font-bold text-white"
                  duration={0.8}
                />
                <div className="bg-gradient-to-r from-purple-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                  <WordRotate
                    words={["Changes Everything", "Transforms Business", "Creates Freedom", "Builds Empires"]}
                    className="text-4xl md:text-6xl font-bold"
                    duration={3000}
                  />
                </div>
              </div>
              <TypingAnimation
                text="The ONLY system that transforms manual entrepreneurs into automation empires - without coding skills."
                className="text-xl text-zinc-400 max-w-3xl mx-auto"
                duration={150}
              />
            </div>
          </div>

          <div className={`bg-gradient-to-r from-purple-900/30 to-blue-900/30 border border-purple-500/30 rounded-3xl p-8 md:p-12 mb-16 scroll-scale ${solutionAnimation.isVisible ? 'visible scroll-stagger-2' : ''}`}>
            <div className="text-center mb-8">
              <h3 className="text-3xl md:text-5xl font-bold mb-4">
                <BlurIn
                  word="This is the"
                  className="text-3xl md:text-5xl font-bold text-white"
                  duration={0.8}
                />
                <span className="text-green-400"> EXACT </span>
                <TypingAnimation
                  text="System That..."
                  className="text-3xl md:text-5xl font-bold text-white inline"
                  duration={100}
                />
              </h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-green-500 rounded-full p-2 mt-1">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-green-400 mb-2">Saved 2,847+ entrepreneurs 40+ hours weekly</h4>
                    <p className="text-gray-300">Students went from 80-hour weeks to 40-hour weeks while 10x-ing their output with intelligent automation.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-green-500 rounded-full p-2 mt-1">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-green-400 mb-2">Generated $2M+ in automated revenue</h4>
                    <p className="text-gray-300">These workflows run 24/7, processing customers, nurturing leads, and generating sales while you sleep.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-green-500 rounded-full p-2 mt-1">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-green-400 mb-2">Works for complete non-technical beginners</h4>
                    <p className="text-gray-300">No coding, no technical background needed. Visual drag-and-drop workflows anyone can master.</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-green-500 rounded-full p-2 mt-1">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-green-400 mb-2">Scales any business to 7-figures automatically</h4>
                    <p className="text-gray-300">From solopreneurs to agencies, these systems handle unlimited customers without breaking.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-green-500 rounded-full p-2 mt-1">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-green-400 mb-2">Eliminates $5K+/month VA costs permanently</h4>
                    <p className="text-gray-300">Replace expensive, error-prone humans with AI that never sleeps, never quits, never makes mistakes.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-green-500 rounded-full p-2 mt-1">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-green-400 mb-2">Future-proof against AI disruption</h4>
                    <p className="text-gray-300">While others fear AI, you'll master it. These skills become more valuable every day.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <div className="bg-yellow-500/20 border border-yellow-500 rounded-2xl p-6">
                <h4 className="text-2xl font-bold text-yellow-400 mb-2">⚡ This System is BATTLE-TESTED</h4>
                <p className="text-gray-300 text-lg">
                  No theory, no guesswork, no "maybe this will work." Every workflow is proven across thousands of businesses 
                  and millions in automated revenue.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Results/Proof Section */}
      <section className="section-spacing bg-zinc-900/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={resultsAnimation.elementRef}
            className={`text-center mb-16 scroll-fade-up ${resultsAnimation.isVisible ? 'visible' : ''}`}
          >
            <SectionHeader
              badge="RESULTS"
              badgeColor="bg-zinc-900 border border-green-500 text-green-400"
              isVisible={resultsAnimation.isVisible}
              title="The Automation Revolution is <span className='text-green-400'>Happening NOW</span>"
              subtitle="While you're manually grinding, smart entrepreneurs are building AI empires that scale infinitely."
            />
          </div>

          <div className={`grid md:grid-cols-3 gap-8 mb-16 scroll-fade-up ${resultsAnimation.isVisible ? 'visible scroll-stagger-2' : ''}`}>
            <div className="bg-zinc-900 rounded-2xl p-8 text-center hover-lift">
              <div className="text-4xl font-bold text-purple-400 mb-2">
                <NumberTicker value={2847} suffix="+" className="text-4xl font-bold text-purple-400" />
              </div>
              <div className="text-gray-300">Students Transformed</div>
            </div>
            <div className="bg-zinc-900 rounded-2xl p-8 text-center hover-lift">
              <div className="text-4xl font-bold text-green-400 mb-2">
                <NumberTicker value={40} suffix="+ Hours" className="text-4xl font-bold text-green-400" />
              </div>
              <div className="text-gray-300">Saved Weekly Average</div>
            </div>
            <div className="bg-zinc-900 rounded-2xl p-8 text-center hover-lift">
              <div className="text-4xl font-bold text-blue-400 mb-2">
                <NumberTicker value={2} prefix="$" suffix="M+" className="text-4xl font-bold text-blue-400" />
              </div>
              <div className="text-gray-300">Revenue Automated</div>
            </div>
          </div>

          <div className={`text-center scroll-fade-up ${resultsAnimation.isVisible ? 'visible scroll-stagger-3' : ''}`}>
            <p className="text-lg md:text-xl text-gray-400 mb-8">Ready to join the automation revolution?</p>
            <Link href="#pricing">
              <ShimmerButton
                className="shadow-2xl"
                shimmerColor="#ffffff"
                shimmerSize="0.1em"
                background="linear-gradient(135deg, #8b5cf6, #7c3aed)"
                borderRadius="9999px"
              >
                <span className="whitespace-nowrap text-lg font-bold px-6 py-2">
                  Get N8N Mastery System
                </span>
              </ShimmerButton>
            </Link>
          </div>
        </div>
      </section>

      {/* Automation Tools Section */}
      <section className="py-16 bg-gradient-to-b from-zinc-900/30 to-black border-t border-zinc-700/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              <WordRotate
                words={["Master the", "Dominate the", "Control the", "Rule the"]}
                className="text-3xl md:text-4xl font-bold text-white"
                duration={2500}
              />
              <span className="text-purple-400"> Automation Ecosystem</span>
            </h2>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
              Learn to integrate N8N with the most powerful automation and AI tools
            </p>
          </div>

          <div className="grid md:grid-cols-4 lg:grid-cols-6 gap-6 max-w-5xl mx-auto">
            {[
              { platform: 'n8n', name: 'N8N', category: 'Core Platform' },
              { platform: 'zapier', name: 'Zapier', category: 'Alternative' },
              { platform: 'make', name: 'Make', category: 'Alternative' },
              { platform: 'claude', name: 'Claude', category: 'AI Integration' },
              { platform: 'gemini', name: 'Gemini', category: 'AI Integration' },
              { platform: 'loom', name: 'Loom', category: 'Content' },
              { platform: 'beehiiv', name: 'Beehiiv', category: 'Email' },
              { platform: 'whop', name: 'Whop', category: 'Commerce' },
              { platform: 'fanvue', name: 'Fanvue', category: 'Creator' },
              { platform: 'runpod', name: 'RunPod', category: 'AI Compute' },
              { platform: 'digitalocean', name: 'DigitalOcean', category: 'Hosting' },
              { platform: 'nvidia', name: 'NVIDIA', category: 'AI Hardware' }
            ].map((tool, index) => (
              <div
                key={tool.platform}
                className="group relative bg-zinc-800/50 backdrop-blur-sm rounded-xl p-4 border border-zinc-700/50 hover:border-purple-500/50 transition-all duration-300 hover:scale-105"
              >
                <div className="flex flex-col items-center text-center">
                  <SocialIcon 
                    platform={tool.platform as any}
                    variant="color"
                    size={40}
                    href={undefined}
                    className="mb-3 group-hover:scale-110 transition-transform"
                  />
                  <h3 className="font-semibold text-white text-sm mb-1">{tool.name}</h3>
                  <p className="text-xs text-zinc-400">{tool.category}</p>
                </div>
                
                {/* Hover effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-blue-600/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-zinc-400 mb-6">
              Plus 100+ other integrations covered in the complete course
            </p>
            <Link href="#pricing" className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors">
              <span>Master All Integrations</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Who This Is For Section */}
      <section className="section-spacing">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={whoForAnimation.elementRef}
            className={`text-center mb-16 scroll-fade-up ${whoForAnimation.isVisible ? 'visible' : ''}`}
          >
            <SectionHeader
              badge="IS THIS YOU?"
              badgeColor="bg-zinc-900 border border-blue-500 text-blue-400"
              isVisible={whoForAnimation.isVisible}
              title="Who This System is <span className='text-blue-400'>Perfect</span> For"
              subtitle="See if you match the profile of our most successful students."
            />
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Overwhelmed Entrepreneurs",
                description: "You're drowning in manual tasks and need to automate everything from lead generation to customer service to scale your business without hiring expensive teams."
              },
              {
                title: "Agency Owners",
                description: "You want to deliver premium automation services to clients, charge premium rates, and differentiate from basic service providers with AI-powered solutions."
              },
              {
                title: "Non-Technical Business Owners",
                description: "You know automation is the future but have zero coding skills. You need visual, drag-and-drop solutions that work without technical complexity."
              }
            ].map((item, index) => (
              <div
                key={index}
                ref={whoForCards.setElementRef(index)}
                className={`testimonial-card text-center hover-lift scroll-fade-up ${whoForCards.visibleElements[index] ? `visible scroll-stagger-${index + 1}` : ''}`}
              >
                <h3 className="text-xl md:text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Student Results Section */}
      <section className="section-spacing bg-zinc-900/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={studentResultsAnimation.elementRef}
            className={`text-center mb-16 scroll-fade-up ${studentResultsAnimation.isVisible ? 'visible' : ''}`}
          >
            <div className="text-center mb-8">
              <div className="text-4xl md:text-6xl font-bold text-white mb-6">
                <BlurIn
                  word="Real People, Real"
                  className="text-4xl md:text-6xl font-bold text-white"
                  duration={0.8}
                />
                <div className="bg-gradient-to-r from-green-400 via-emerald-500 to-green-500 bg-clip-text text-transparent">
                  <WordRotate
                    words={["Results", "Success", "Freedom", "Transformation"]}
                    className="text-4xl md:text-6xl font-bold"
                    duration={3000}
                  />
                </div>
              </div>
              <TypingAnimation
                text="These entrepreneurs went from manual hell to automated paradise..."
                className="text-xl text-zinc-400 max-w-3xl mx-auto"
                duration={120}
              />
            </div>
          </div>

          <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 scroll-fade-up ${studentResultsAnimation.isVisible ? 'visible scroll-stagger-2' : ''}`}>
            <div className="bg-zinc-900 rounded-2xl p-6 hover-lift">
              <div className="text-2xl font-bold text-green-400 mb-2">Sarah M.</div>
              <div className="text-gray-400 mb-4">E-commerce Store Owner</div>
              <p className="text-gray-300">"Went from 60 hours/week to 20 hours/week. My N8N automations handle everything from order processing to customer support. Revenue increased 300% while working half the time!"</p>
            </div>
            <div className="bg-zinc-900 rounded-2xl p-6 hover-lift">
              <div className="text-2xl font-bold text-green-400 mb-2">Marcus R.</div>
              <div className="text-gray-400 mb-4">Digital Marketing Agency</div>
              <p className="text-gray-300">"Built automated client reporting, lead generation, and campaign management. Scaled from 5 to 50 clients without hiring anyone. Now charging $5K/month for automation services."</p>
            </div>
            <div className="bg-zinc-900 rounded-2xl p-6 hover-lift">
              <div className="text-2xl font-bold text-green-400 mb-2">Jennifer K.</div>
              <div className="text-gray-400 mb-4">Coaching Business</div>
              <p className="text-gray-300">"My N8N workflows automatically nurture leads, book calls, and follow up with prospects. Went from $5K to $50K monthly revenue while working 30% less. Pure magic!"</p>
            </div>
          </div>

          <div className={`text-center scroll-fade-up ${studentResultsAnimation.isVisible ? 'visible scroll-stagger-3' : ''}`}>
            <h3 className="text-2xl md:text-4xl font-bold mb-4">Become Our Next Success Story</h3>
            <p className="text-lg md:text-xl text-gray-400 mb-8">Join thousands of entrepreneurs building automated empires!</p>
            <Link href="#pricing" className="cta-button inline-block">
              Start My Automation Empire
            </Link>
          </div>
        </div>
      </section>

      {/* 7. What You Get Section */}
      <section className="section-spacing">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={modulesAnimation.elementRef}
            className={`text-center mb-16 scroll-fade-up ${modulesAnimation.isVisible ? 'visible' : ''}`}
          >
            <SectionHeader
              badge="COMPLETE SYSTEM"
              badgeColor="bg-zinc-900 border border-purple-500 text-purple-400"
              isVisible={modulesAnimation.isVisible}
              title="Everything You Need to Build <span className='text-purple-400'>Million-Dollar Workflows</span>"
              subtitle="The most comprehensive N8N automation training ever created."
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "<span className='text-purple-400'>Module 1:</span> N8N Foundation Mastery",
                value: "$497",
                description: "Master N8N from zero to hero. Complete setup, interface navigation, node connections, and building your first automated workflows. No technical background required."
              },
              {
                title: "<span className='text-purple-400'>Module 2:</span> AI Integration Secrets",
                value: "$697",
                description: "Connect ChatGPT, Claude, and other AI models to your workflows. Build intelligent automation that thinks, learns, and adapts without human intervention."
              },
              {
                title: "<span className='text-purple-400'>Module 3:</span> Business Process Automation",
                value: "$797",
                description: "Automate lead generation, customer onboarding, email sequences, social media posting, and sales processes. Turn manual tasks into automated systems."
              },
              {
                title: "<span className='text-purple-400'>Module 4:</span> Advanced Workflow Architecture",
                value: "$597",
                description: "Build complex, multi-step workflows that handle conditional logic, data processing, and error handling. Create enterprise-level automation systems."
              },
              {
                title: "<span className='text-purple-400'>Module 5:</span> API Integration Mastery",
                value: "$697",
                description: "Connect any tool or platform to your workflows. Master webhooks, HTTP requests, and API authentication. Integrate with Shopify, Stripe, HubSpot, and 500+ other platforms."
              },
              {
                title: "<span className='text-purple-400'>Module 6:</span> Data Processing & Analytics",
                value: "$497",
                description: "Automatically collect, process, and analyze business data. Create custom dashboards, generate reports, and get insights without manual data entry."
              },
              {
                title: "<span className='text-purple-400'>Module 7:</span> Client Service Automation",
                value: "$897",
                description: "Build white-label automation services for clients. Templates, proposals, pricing strategies, and delivery systems to charge $3K-$10K per automation project."
              },
              {
                title: "<span className='text-purple-400'>Module 8:</span> Scaling & Optimization",
                value: "$597",
                description: "Scale workflows to handle millions of operations. Performance optimization, monitoring, debugging, and maintenance strategies for bulletproof automation."
              }
            ].map((module, index) => (
              <div
                key={index}
                ref={moduleCards.setElementRef(index)}
                className={`testimonial-card hover-lift scroll-fade-up relative ${moduleCards.visibleElements[index] ? `visible scroll-stagger-${Math.min(index + 1, 6)}` : ''}`}
              >
                <ValueBadge 
                  value={module.value}
                  className="absolute top-4 right-4"
                />
                <h3 className="text-lg md:text-xl font-bold mb-4" dangerouslySetInnerHTML={{ __html: module.title }}></h3>
                <p className="text-gray-400 leading-relaxed">{module.description}</p>
              </div>
            ))}
          </div>

          <div className={`text-center mt-16 scroll-fade-up ${modulesAnimation.isVisible ? 'visible scroll-stagger-6' : ''}`}>
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Plus Lifetime Access & Updates</h3>
            <p className="text-lg md:text-xl text-gray-400 mb-8">
              N8N evolves constantly. You'll get every update, new module, and workflow template added to the system forever.
            </p>
            <Link href="#pricing" className="cta-button inline-block">
              Get Complete N8N System
            </Link>
          </div>
        </div>
      </section>

      {/* 8. Bonuses Section */}
      <section className="section-spacing bg-zinc-900/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={bonusAnimation.elementRef}
            className={`text-center mb-16 scroll-fade-up ${bonusAnimation.isVisible ? 'visible' : ''}`}
          >
            <SectionHeader
              badge="INSANE BONUSES"
              badgeColor="bg-zinc-900 border border-yellow-500 text-yellow-400"
              isVisible={bonusAnimation.isVisible}
              title="Get $4,291 in <span className='text-yellow-400'>Premium Bonuses</span> FREE"
              subtitle="These bonuses alone are worth more than most courses. But you get them FREE today."
            />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "🔧 100+ Ready-Made Workflow Templates",
                value: "$997",
                description: "Copy-paste workflows for every business need. Lead generation, customer service, e-commerce, social media, analytics - just import and customize for instant results."
              },
              {
                title: "🤖 AI Prompt Library (500+ Prompts)",
                value: "$497",
                description: "Proven AI prompts for every automation scenario. Customer service responses, content creation, data analysis, lead qualification - all optimized for maximum performance."
              },
              {
                title: "🎯 Client Service Toolkit",
                value: "$1,297",
                description: "Complete business-in-a-box for selling automation services. Contracts, proposals, pricing guides, delivery templates - start charging $5K+ per project immediately."
              },
              {
                title: "📊 Advanced Analytics Dashboard",
                value: "$697",
                description: "Pre-built dashboard templates that automatically track your business metrics, ROI from automation, and performance analytics. See exactly how much time and money you're saving."
              },
              {
                title: "🔄 Integration Setup Guides",
                value: "$397",
                description: "Step-by-step guides for connecting N8N to 100+ popular tools. Shopify, WordPress, Stripe, Mailchimp, Slack, and more. Never get stuck on technical setup again."
              },
              {
                title: "👥 Private Mastermind Community",
                value: "$1,997/year",
                description: "Exclusive access to our private community of automation experts. Get help, share workflows, collaborate on projects, and network with successful entrepreneurs."
              }
            ].map((bonus, index) => (
              <div
                key={index}
                ref={bonusCards.setElementRef(index)}
                className={`bg-gradient-to-br from-yellow-500/10 to-orange-500/10 border border-yellow-500/30 rounded-2xl p-6 hover:from-yellow-500/20 hover:to-orange-500/20 transition-all duration-300 hover-lift scroll-fade-up relative ${bonusCards.visibleElements[index] ? `visible scroll-stagger-${Math.min(index + 1, 6)}` : ''}`}
              >
                <ValueBadge 
                  value={bonus.value}
                  className="absolute top-4 right-4 bg-yellow-500"
                />
                <h3 className="text-lg md:text-xl font-bold mb-4 text-yellow-400">{bonus.title}</h3>
                <p className="text-gray-300 leading-relaxed">{bonus.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Pricing Section */}
      <section className="section-spacing bg-gradient-to-b from-purple-900/20 to-blue-900/20 border-t border-purple-500/30" id="pricing">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={pricingAnimation.elementRef}
            className={`text-center mb-16 scroll-fade-up ${pricingAnimation.isVisible ? 'visible' : ''}`}
          >
            <SectionHeader
              badge="INSANE VALUE"
              badgeColor="bg-zinc-900 border border-green-500 text-green-400"
              isVisible={pricingAnimation.isVisible}
              title="This is <span className='text-green-400'>RIDICULOUS</span>"
              subtitle="Let's do the math on what you're actually getting today vs. hiring this expertise..."
            />
          </div>

          {/* Value Stack */}
          <div className={`max-w-4xl mx-auto mb-16 scroll-scale ${pricingAnimation.isVisible ? 'visible scroll-stagger-2' : ''}`}>
            <div className="bg-zinc-900 border border-green-500/30 rounded-3xl p-8 md:p-12">
              <h3 className="text-3xl font-bold mb-8 text-center text-green-400">Total Value Breakdown</h3>
              
              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center py-3 border-b border-zinc-700">
                  <span className="text-lg">8 Core Modules</span>
                  <span className="text-xl font-bold text-green-400">$1,479</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-zinc-700">
                  <span className="text-lg">100+ Workflow Templates</span>
                  <span className="text-xl font-bold text-green-400">$997</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-zinc-700">
                  <span className="text-lg">AI Prompt Library</span>
                  <span className="text-xl font-bold text-green-400">$497</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-zinc-700">
                  <span className="text-lg">Client Service Toolkit</span>
                  <span className="text-xl font-bold text-green-400">$1,297</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-zinc-700">
                  <span className="text-lg">Analytics Dashboard</span>
                  <span className="text-xl font-bold text-green-400">$697</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-zinc-700">
                  <span className="text-lg">Integration Guides</span>
                  <span className="text-xl font-bold text-green-400">$397</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-zinc-700">
                  <span className="text-lg">Private Community</span>
                  <span className="text-xl font-bold text-green-400">$1,997</span>
                </div>
                
                <div className="flex justify-between items-center py-6 bg-green-900/20 rounded-lg px-6 mt-6">
                  <span className="text-2xl font-bold">TOTAL VALUE:</span>
                  <span className="text-3xl font-black text-green-400">$7,361</span>
                </div>
              </div>
            </div>
          </div>

          {/* Pricing Comparison */}
          <div className={`mb-16 scroll-fade-up ${pricingAnimation.isVisible ? 'visible scroll-stagger-3' : ''}`}>
            <PricingComparison
              options={[
                {
                  name: "Hiring Automation Developer",
                  description: "PER PROJECT",
                  price: "$8,000-$15,000",
                  features: [
                    "Single workflow only",
                    "No training included", 
                    "Expensive ongoing maintenance",
                    "No business knowledge transfer",
                    "Dependent on developer forever"
                  ],
                  disabled: true
                },
                {
                  name: "Automation Agency",
                  description: "PER MONTH",
                  price: "$3,000-$7,000",
                  features: [
                    "Basic workflow setup",
                    "No education or training",
                    "Limited customization",
                    "Expensive recurring costs",
                    "No ownership of systems"
                  ]
                },
                {
                  name: "N8N AI Automations",
                  description: "ONE-TIME",
                  price: "$297",
                  badge: "🔥 BEST VALUE",
                  popular: true,
                  features: [
                    "Complete system mastery",
                    "Unlimited workflow creation",
                    "Lifetime access & updates",
                    "$7,361 worth of bonuses",
                    "Build automation business"
                  ]
                }
              ]}
              isVisible={pricingAnimation.isVisible}
            />
          </div>

          {/* Scarcity & Urgency */}
          <div className={`max-w-4xl mx-auto text-center scroll-fade-up ${pricingAnimation.isVisible ? 'visible scroll-stagger-4' : ''}`}>
            <div className="bg-zinc-900 border border-red-500 rounded-3xl p-8 mb-8">
              <h3 className="text-3xl md:text-4xl font-bold mb-6 text-red-400">
                ⚠️ Limited Time Early Bird Offer ⚠️
              </h3>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-zinc-900 rounded-2xl p-6">
                  <div className="text-2xl font-bold text-red-400 mb-2">72 HOURS</div>
                  <p className="text-gray-300">Price jumps to $497 after early bird ends</p>
                </div>
                <div className="bg-zinc-900 rounded-2xl p-6">
                  <div className="text-2xl font-bold text-red-400 mb-2">MIDNIGHT</div>
                  <p className="text-gray-300">All bonuses expire at 11:59 PM Sunday</p>
                </div>
                <div className="bg-zinc-900 rounded-2xl p-6">
                  <div className="text-2xl font-bold text-red-400 mb-2">100 SPOTS</div>
                  <p className="text-gray-300">Only accepting 100 students this round</p>
                </div>
              </div>
              
              <p className="text-xl text-gray-300 mb-6">
                I'm keeping this group small so I can personally ensure everyone builds profitable automation systems. 
                Once we hit 100 students, enrollment closes and the price doubles.
              </p>
              
              <div className="bg-yellow-500/20 border border-yellow-500 rounded-2xl p-6 mb-8">
                <h4 className="text-2xl font-bold text-yellow-400 mb-3">🚨 Don't Wait - Here's Why:</h4>
                <div className="text-left space-y-2 text-gray-300">
                  <p>• Every day you wait, competitors build stronger automation advantages</p>
                  <p>• Each month of manual work = $10K-$50K in lost productivity and opportunities</p>
                  <p>• AI automation skills become more valuable (and necessary) every single day</p>
                  <p>• These bonuses and pricing will NEVER be offered again</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <Link
                href="#"
                className="inline-block bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-bold py-4 px-12 rounded-2xl text-2xl transition-all duration-300 transform hover:scale-105 animate-pulse"
              >
                🚀 GET N8N MASTERY SYSTEM - $297 🚀
              </Link>
              
              <p className="text-sm text-gray-400">
                ✅ Instant Access • ✅ Lifetime Updates • ✅ 30-Day Money-Back Guarantee
              </p>
              
              <div className="bg-zinc-900 border border-green-500 rounded-2xl p-6 max-w-2xl mx-auto">
                <h4 className="text-xl font-bold text-green-400 mb-3">💯 Zero-Risk Guarantee</h4>
                <p className="text-gray-300">
                  Try N8N AI Automations for 30 days. If you don't save at least 20 hours per week and see massive 
                  business improvements, I'll refund every penny. No questions asked.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. Testimonials Section */}
      <section className="section-spacing bg-zinc-900/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={testimonialsAnimation.elementRef}
            className={`text-center mb-16 scroll-fade-up ${testimonialsAnimation.isVisible ? 'visible' : ''}`}
          >
            <SectionHeader
              badge="SUCCESS STORIES"
              badgeColor="bg-zinc-900 border border-blue-500 text-blue-400"
              isVisible={testimonialsAnimation.isVisible}
              title="What <span className='text-blue-400'>N8N Students</span> Are Saying..."
              subtitle="Real entrepreneurs sharing their automation transformation stories."
            />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto mb-16">
            {[
              {
                name: "David Chen",
                role: "E-commerce Entrepreneur • $2M Revenue",
                avatar: "https://i.pravatar.cc/150?img=23",
                content: "N8N transformed my entire business! I went from working 80 hours/week manually processing orders to 30 hours/week while revenue grew 300%. My automation handles everything from inventory management to customer support. I'm finally working ON my business, not IN it."
              },
              {
                name: "Sarah Martinez",
                role: "Digital Marketing Agency • 50+ Clients",
                avatar: "https://i.pravatar.cc/150?img=28",
                content: "This course paid for itself in the first week! I built automated client reporting systems that save me 25 hours weekly. Now I'm selling automation services to clients for $5K each. From manual chaos to automated empire - this system is pure gold!"
              },
              {
                name: "Michael Torres",
                role: "SaaS Founder • 10K+ Users",
                avatar: "https://i.pravatar.cc/150?img=94",
                content: "The AI integration modules blew my mind! My N8N workflows now handle customer onboarding, support tickets, and user engagement automatically. Reduced customer acquisition cost by 60% while improving satisfaction scores. This is the future of business!"
              }
            ].map((testimonial, index) => (
              <div
                key={index}
                ref={testimonialCards.setElementRef(index)}
                className={`testimonial-card hover-lift scroll-fade-up ${testimonialCards.visibleElements[index] ? `visible scroll-stagger-${index + 1}` : ''}`}
              >
                <TestimonialCard 
                  name={testimonial.name}
                  role={testimonial.role.split(' • ')[0]}
                  image={testimonial.avatar}
                  testimonial={testimonial.content}
                  result={testimonial.role.split(' • ')[1]}
                  isVisible={testimonialCards.visibleElements[index]}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. FAQ Section */}
      <section className="section-spacing">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={faqAnimation.elementRef}
            className={`text-center mb-16 scroll-fade-up ${faqAnimation.isVisible ? 'visible' : ''}`}
          >
            <SectionHeader
              badge="FAQ"
              badgeColor="bg-zinc-900 border border-purple-500 text-purple-400"
              isVisible={faqAnimation.isVisible}
              title="Frequently Asked <span className='text-purple-400'>Questions</span>"
              subtitle="Everything you need to know about mastering N8N automation."
            />
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                question: "I have zero technical skills. Can I really learn N8N automation?",
                answer: "Absolutely! This course is designed for complete beginners. N8N is a visual, drag-and-drop platform - no coding required. I'll walk you through every single step, from basic setup to advanced workflows. Most students build their first automation within 24 hours, regardless of technical background."
              },
              {
                question: "How much time do I need to invest to see results?",
                answer: "You can start seeing time savings immediately! Most students save 10-15 hours in their first week by automating just 2-3 manual processes. To master the full system, plan for 2-3 hours per week over 8 weeks. But the ROI is immediate - you'll save more time than you invest from day one."
              },
              {
                question: "What if N8N changes or becomes obsolete?",
                answer: "N8N is open-source and growing rapidly with backing from major investors. But more importantly, the automation principles you learn apply to ANY platform. You'll understand workflow logic, API integrations, and automation thinking - skills that transfer to Zapier, Make, or any future platform."
              },
              {
                question: "Can I really build a business selling automation services?",
                answer: "Yes! Many students charge $3K-$10K per automation project. The Client Service Toolkit bonus includes everything you need: contracts, proposals, pricing guides, and delivery templates. One student landed a $15K automation project within 30 days of completing the course."
              },
              {
                question: "How is this different from free YouTube tutorials?",
                answer: "YouTube teaches you random tricks. This is a complete system built from 5+ years of automation experience. You get structured learning, real business workflows, troubleshooting guides, templates, and ongoing support. Plus, you'll avoid the 100+ hours of trial and error I went through."
              },
              {
                question: "What if I get stuck or need help?",
                answer: "You get lifetime access to our private community where I personally answer questions. Plus detailed troubleshooting guides, video walkthroughs for common issues, and template workflows you can copy exactly. You're never alone in this journey."
              },
              {
                question: "Do I need to pay for N8N hosting?",
                answer: "N8N offers a generous free tier that's perfect for learning and small businesses. I'll show you how to maximize the free plan and when/how to scale up cost-effectively. Most students operate profitably on the free tier for months."
              },
              {
                question: "How quickly will this course pay for itself?",
                answer: "Most students save the course cost in the first month through time savings alone. If you value your time at $50/hour and save 20 hours/month, that's $1,000 monthly value. One automation project for a client typically pays for the course 10x over."
              },
              {
                question: "What businesses can benefit from N8N automation?",
                answer: "ANY business with repetitive tasks! E-commerce stores, agencies, consultants, coaches, SaaS companies, service providers, content creators - automation works everywhere. The course includes workflows for 15+ different business types."
              },
              {
                question: "Is this just theory or do I get practical, actionable content?",
                answer: "This is 100% practical! Every module includes hands-on exercises, real workflow builds, and templates you can implement immediately. No fluff theory - just battle-tested automation systems that work in the real world."
              },
              {
                question: "What's your refund policy?",
                answer: "Simple: 30-day money-back guarantee, no questions asked. If you don't save significant time and see clear business improvements within 30 days, I'll refund every penny. I'm confident this system will transform how you work."
              },
              {
                question: "Why is the price so low for such comprehensive training?",
                answer: "I want to democratize automation and help as many entrepreneurs as possible escape manual labor hell. I'd rather have 1,600 successful students at $297 than 10 students at $2,997. This pricing won't last forever - it's my way of building a community of automation experts."
              }
            ].map((faq, index) => (
              <div
                key={index}
                ref={faqCards.setElementRef(index)}
                className={`bg-zinc-900 rounded-2xl p-6 md:p-8 hover-lift scroll-fade-up ${faqCards.visibleElements[index] ? `visible scroll-stagger-${Math.min(index + 1, 6)}` : ''}`}
              >
                <FAQCard {...faq} isVisible={faqCards.visibleElements[index]} />
              </div>
            ))}
          </div>

          <div className={`text-center mt-16 scroll-fade-up ${faqAnimation.isVisible ? 'visible scroll-stagger-6' : ''}`}>
            <div className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 border border-purple-500/30 rounded-3xl p-8 max-w-3xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Still Have Questions?</h3>
              <p className="text-lg text-gray-300 mb-6">
                Join the private community and get direct access to me and other automation experts. 
                Your questions get answered fast by people who've already built successful automation systems.
              </p>
              <Link
                href="#"
                className="cta-button inline-block text-lg"
              >
                Get N8N System & Ask Me Anything
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 12. Final CTA Section */}
      <section className="section-spacing bg-gradient-to-b from-purple-900/20 to-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div
            ref={finalCtaAnimation.elementRef}
            className={`scroll-fade-up ${finalCtaAnimation.isVisible ? 'visible' : ''}`}
          >
            <div className="flex items-center justify-center mb-8">
              <div className="flex items-center space-x-2">
                <div className="flex">
                  <Image
                    src="https://ext.same-assets.com/1161517358/1620887224.webp"
                    alt="User"
                    width={24}
                    height={24}
                    className="w-6 h-6 rounded-full -mr-1"
                  />
                  <Image
                    src="https://ext.same-assets.com/1161517358/447445188.webp"
                    alt="User"
                    width={24}
                    height={24}
                    className="w-6 h-6 rounded-full -mr-1"
                  />
                </div>
                <div className="flex text-yellow-400">
                  {'★'.repeat(5)}
                </div>
                <span className="text-sm text-gray-400">2,847+ successful students</span>
              </div>
            </div>
            <div className="text-3xl md:text-5xl font-bold text-white mb-4">
              <BlurIn
                word="Your Automation Empire Starts"
                className="text-3xl md:text-5xl font-bold text-white"
                duration={0.8}
              />
              <div className="bg-gradient-to-r from-purple-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                <WordRotate
                  words={["TODAY", "NOW", "RIGHT HERE", "THIS MOMENT"]}
                  className="text-3xl md:text-5xl font-bold"
                  duration={2500}
                />
              </div>
            </div>
            <p className="text-lg md:text-xl text-gray-400 mb-8">Join thousands of entrepreneurs who escaped manual labor hell and built automated businesses that scale infinitely</p>
            
            <div className="bg-gradient-to-r from-red-900/30 to-orange-900/30 border border-red-500 rounded-2xl p-6 mb-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-red-400 mb-3">⏰ FINAL WARNING</h3>
              <p className="text-gray-300 mb-4">
                This $297 early bird price and $7,361 in bonuses expire at MIDNIGHT Sunday. After that, you'll pay $497 without any bonuses.
              </p>
              <p className="text-lg font-bold text-yellow-400">
                Don't let another month pass drowning in manual tasks while others build automated empires!
              </p>
            </div>
            
            <Link href="#pricing">
              <ShimmerButton
                className="shadow-2xl mb-4"
                shimmerColor="#ffffff"
                shimmerSize="0.1em"
                background="linear-gradient(135deg, #8b5cf6, #3b82f6)"
                borderRadius="1rem"
              >
                <span className="whitespace-nowrap text-2xl font-bold px-12 py-4">
                  🚀 BUILD MY AUTOMATION EMPIRE - <NumberTicker value={297} prefix="$" className="inline" /> 🚀
                </span>
              </ShimmerButton>
            </Link>
            
            <p className="text-sm text-gray-400 mb-6">
              ✅ Instant Access • ✅ 30-Day Guarantee • ✅ Lifetime Updates • ✅ $7,361 in Bonuses
            </p>
            
            <div className="grid md:grid-cols-3 gap-4 max-w-3xl mx-auto text-center">
              <div className="bg-zinc-900 rounded-lg p-4">
                <div className="text-2xl font-bold text-purple-400">
                  <NumberTicker value={1600} suffix="+" className="text-2xl font-bold text-purple-400" />
                </div>
                <div className="text-sm text-gray-400">Students Transformed</div>
              </div>
              <div className="bg-zinc-900 rounded-lg p-4">
                <div className="text-2xl font-bold text-green-400">
                  <NumberTicker value={40} suffix="+ Hours" className="text-2xl font-bold text-green-400" />
                </div>
                <div className="text-sm text-gray-400">Saved Weekly</div>
              </div>
              <div className="bg-zinc-900 rounded-lg p-4">
                <div className="text-2xl font-bold text-blue-400">
                  <NumberTicker value={2} prefix="$" suffix="M+" className="text-2xl font-bold text-blue-400" />
                </div>
                <div className="text-sm text-gray-400">Revenue Automated</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}