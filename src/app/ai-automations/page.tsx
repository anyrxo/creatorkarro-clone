'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { useScrollAnimation, useScrollAnimations } from '@/hooks/useScrollAnimation'
import SocialIcon from '@/components/SocialIcon'
import PainPointIcon from '@/components/PainPointIcon'
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
import CryptoCheckout from '@/components/checkout/CryptoCheckout'
import AnimatedGradientText from '@/components/magicui/animated-gradient-text'
import NumberTicker from '@/components/magicui/number-ticker'
import Marquee from '@/components/magicui/marquee'
import ShimmerButton from '@/components/magicui/shimmer-button'
import WordRotate from '@/components/magicui/word-rotate'
import BlurIn from '@/components/magicui/blur-in'
import TypingAnimation from '@/components/magicui/typing-animation'
import AIContentDeclaration from '@/components/seo/AIContentDeclaration'
import SocialProof from '@/components/seo/SocialProof'
import StandardCTA from '@/components/StandardCTA'
import StickyCTA from '@/components/StickyCTA'
import EcosystemGraph from '@/components/EcosystemGraph'
import AgencyScaler from '@/components/tools/AgencyScaler'
import { 
  ChevronRight, 
  Target, 
  Video, 
  FileText, 
  Users, 
  BarChart3, 
  Handshake, 
  Zap, 
  Flame, 
  CheckCircle, 
  XCircle, 
  AlertTriangle, 
  Bot, 
  Workflow, 
  Code, 
  DollarSign,
  Check,
  Crown
} from 'lucide-react'

// Icon mapping function
const getIcon = (iconName: string, className?: string) => {
  const iconProps = { className: className || "w-6 h-6", strokeWidth: 2 }
  const icons: { [key: string]: JSX.Element } = {
    target: <Target {...iconProps} />,
    video: <Video {...iconProps} />,
    fileText: <FileText {...iconProps} />,
    users: <Users {...iconProps} />,
    barChart3: <BarChart3 {...iconProps} />,
    handshake: <Handshake {...iconProps} />,
    zap: <Zap {...iconProps} />,
    flame: <Flame {...iconProps} />,
    checkCircle: <CheckCircle {...iconProps} />,
    xCircle: <XCircle {...iconProps} />,
    alertTriangle: <AlertTriangle {...iconProps} />,
    bot: <Bot {...iconProps} />,
    workflow: <Workflow {...iconProps} />,
    code: <Code {...iconProps} />,
    dollarSign: <DollarSign {...iconProps} />
  }
  return icons[iconName] || <Target {...iconProps} />
}

export default function AIAutomationsPage() {
  // Crypto checkout state
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false)

  // Product information for AI Automations
  const product = {
    id: 'ai-automations',
    name: 'AI Automations: Build 6-Figure Automation Agency',
    price: 399,
    description: 'Complete automation agency system with 12+ modules, 150+ lessons, and client acquisition blueprints'
  }

  // Schema markup for AI Automations Course
  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "AI Automations: Build 6-Figure AI Automation Agency",
    "description": "Complete AI automation agency training for entrepreneurs. Master n8n, Zapier, Make workflow automation + ChatGPT, Claude AI, Midjourney integrations.",
    "provider": {
      "@type": "Organization",
      "name": "IImagined",
      "url": "https://iimagined.ai"
    },
    "offers": {
      "@type": "Offer",
      "price": "399",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    }
  }

  const handleBuyNow = () => {
    window.open('https://whop.com/iimagined/ai-automations-reimagined/', '_blank', 'noopener,noreferrer')
  }

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
  const moduleCards = useScrollAnimations(12, { threshold: 0.1 })
  const bonusCards = useScrollAnimations(5, { threshold: 0.1 })
  const testimonialCards = useScrollAnimations(3, { threshold: 0.1 })
  const faqCards = useScrollAnimations(10, { threshold: 0.1 })

  return (
    <>
      <StickyCTA 
        price="$99/mo" 
        originalPrice="$399" 
        ctaLink="https://buy.polar.sh/polar_cl_RZqECtx9qQzbriWQHfGfIc2JxkSL17qSERkbq3MVgw5"
        productName="Empire Pass All Access" 
      />

      <AIContentDeclaration
        title="AI Automations: Build 6-Figure Automation Agency - Complete n8n, Zapier, Make Course"
        description="Master AI automation agency business with proven AI integration strategies. Learn n8n, Zapier, Make + ChatGPT, Claude, Midjourney integrations."
        contentType="course"
        primaryTopic="AI Automation Agency"
        keywords={['AI automation agency', 'AI chatbot development', 'ChatGPT integration', 'n8n AI automation', 'Zapier AI integration']}
        author="Anyro"
        datePublished="2025-01-01"
        dateModified="2025-01-29"
        readingTime={15}
        isAccessibleForFree={false}
        expertiseLevel="beginner"
      />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }} />

      <div className="min-h-screen bg-dark relative selection:bg-orange-500/30 selection:text-orange-200">
        <h1 className="sr-only">AI Automations: Build 6-Figure Automation Agency</h1>

        {/* Hero Section */}
        <div ref={heroAnimation.elementRef}>
          <HeroSection
            badge="AI AUTOMATION AGENCY BUILDER"
            badgeColor="bg-orange-600/20 text-orange-300 border border-orange-500/30 backdrop-blur-sm"
            title={<>Build a <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">6-Figure AI Agency</span> Offering <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-pink-500">Intelligent Automation</span></>}
            description="The ONLY complete system to launch an AI automation consulting business. Build AI chatbots, AI workflows, and intelligent automation services. Land $2K-$10K monthly AI service retainers in 90 days or less."
            ctaText="Start Your Agency"
            ctaLink="#pricing"
            socialProof={{
              images: [
                "https://i.pravatar.cc/150?img=32",
                "https://i.pravatar.cc/150?img=45",
                "https://i.pravatar.cc/150?img=78"
              ],
              rating: 5,
              text: "800+ students building automation businesses"
            }}
            stats={[
              { value: "800+", label: "Students Enrolled", color: "text-orange-400" },
              { value: "$400K+", label: "Student Revenue", color: "text-green-400" },
              { value: "5-15", label: "Avg Clients Landed", color: "text-red-400" }
            ]}
            isVisible={heroAnimation.isVisible}
          />
        </div>

        {/* Social Proof */}
        <div className="container mx-auto px-4">
          <SocialProof
            students={800}
            revenue="$400K+"
            rating={4.9}
            reviews={800}
            companies={30}
            showAll={true}
          />
        </div>

        {/* PROBLEM Section */}
        <section className="section-spacing relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-orange-900/10 to-transparent pointer-events-none" />
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div ref={problemAnimation.elementRef} className={`text-center mb-16 scroll-fade-up ${problemAnimation.isVisible ? 'visible' : ''}`}>
              <div className="inline-block bg-zinc-900/80 backdrop-blur-sm border border-orange-500/30 rounded-full px-4 py-2 mb-6">
                <span className="text-orange-400 text-sm font-bold uppercase tracking-wider flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4" />
                  THE MARKET GAP
                </span>
              </div>
              <div className="text-3xl md:text-6xl font-black mb-6 text-white tracking-tight">
                <BlurIn
                  word="Every Business Needs AI"
                  className="text-3xl md:text-6xl font-black text-white"
                  duration={0.8}
                />
              </div>
              <p className="text-xl md:text-2xl text-zinc-400 mb-8 max-w-3xl mx-auto leading-relaxed font-medium">
                But 99% don't know how to implement it. This is your opportunity.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mb-16">
              {[
                {
                  icon: "xCircle",
                  title: "Drowning in Manual Work",
                  description: "Companies waste 40+ hours weekly on repetitive tasks like data entry and email. They NEED automation."
                },
                {
                  icon: "dollarSign",
                  title: "Expensive Dev Agencies",
                  description: "Traditional agencies charge $50K+ for custom code. Small businesses are priced out and desperate for alternatives."
                },
                {
                  icon: "bot",
                  title: "Unused AI Tools",
                  description: "Businesses pay for ChatGPT but don't integrate it. They need experts to build custom workflows that actually save money."
                },
                {
                  icon: "users",
                  title: "Client Acquisition Struggle",
                  description: "You have skills but no clients. Without a proven outreach system, your talents go to waste."
                },
                {
                  icon: "workflow",
                  title: "Tool Overload",
                  description: "n8n, Zapier, Make, Integromat... paralysis by analysis. You need a clear tech stack that scales."
                },
                {
                  icon: "alertTriangle",
                  title: "Scaling Bottlenecks",
                  description: "Stuck as a freelancer doing everything yourself. Learn to build systems and teams for true agency growth."
                }
              ].map((problem, index) => (
                <div
                  key={index}
                  ref={problemCards.setElementRef(index)}
                  className={`bg-zinc-900/50 border border-orange-900/20 rounded-2xl p-6 hover:bg-orange-900/10 hover:border-orange-500/30 transition-all duration-300 hover-lift scroll-fade-up ${problemCards.visibleElements[index] ? `visible scroll-stagger-${Math.min(index + 1, 6)}` : ''}`}
                >
                  <div className="mb-4 bg-orange-500/10 w-12 h-12 rounded-xl flex items-center justify-center">
                    <PainPointIcon
                      type={problem.icon as any}
                      size={24}
                      className="text-orange-500"
                      color="currentColor"
                    />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-white">{problem.title}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">{problem.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SOLUTION Section */}
        <section className="section-spacing bg-zinc-950 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-orange-600/20 blur-[120px] rounded-full opacity-30 pointer-events-none" />

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div ref={solutionAnimation.elementRef} className={`text-center mb-16 scroll-fade-up ${solutionAnimation.isVisible ? 'visible' : ''}`}>
              <div className="inline-block bg-zinc-900/80 backdrop-blur-sm border border-orange-500/30 rounded-full px-4 py-2 mb-6">
                <span className="text-orange-400 text-sm font-bold uppercase tracking-wider flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  THE AGENCY MODEL
                </span>
              </div>
              <h2 className="text-3xl md:text-6xl font-black mb-6 text-white tracking-tight">
                Launch Your <span className="text-orange-500">AI Agency</span>
              </h2>
              <p className="text-xl md:text-2xl text-zinc-400 mb-8 max-w-4xl mx-auto">
                Master AI integrations, build intelligent chatbots, and land high-ticket monthly retainers.
              </p>
            </div>

            <div className={`bg-zinc-900/50 border border-zinc-800 rounded-3xl p-8 md:p-12 mb-16 scroll-scale relative overflow-hidden ${solutionAnimation.isVisible ? 'visible scroll-stagger-2' : ''}`}>
              <div className="grid md:grid-cols-2 gap-12 relative z-10">
                <div className="space-y-8">
                  <h3 className="text-2xl font-bold text-white mb-6">Why This Model Wins:</h3>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-orange-500/20 p-3 rounded-lg"><Workflow className="w-6 h-6 text-orange-400" /></div>
                    <div>
                      <h4 className="text-lg font-bold text-white mb-2">Recurring Revenue</h4>
                      <p className="text-zinc-400 text-sm">Charge monthly retainers ($2K-$10K) for maintenance and optimization. Predictable income.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-orange-500/20 p-3 rounded-lg"><Bot className="w-6 h-6 text-orange-400" /></div>
                    <div>
                      <h4 className="text-lg font-bold text-white mb-2">High Demand</h4>
                      <p className="text-zinc-400 text-sm">Every business wants AI but lacks the technical know-how. You bridge the gap.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-orange-500/20 p-3 rounded-lg"><Zap className="w-6 h-6 text-orange-400" /></div>
                    <div>
                      <h4 className="text-lg font-bold text-white mb-2">Scalable Delivery</h4>
                      <p className="text-zinc-400 text-sm">Build once, deploy many times. Use templates to deliver faster and more profitably.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-8 flex flex-col justify-center">
                  <div className="text-center mb-6">
                    <p className="text-zinc-400 text-sm uppercase tracking-wider mb-2">AGENCY POTENTIAL</p>
                    <h3 className="text-3xl font-bold text-white">Scale Fast</h3>
                  </div>
                  <div className="space-y-4">
                     <div className="flex items-center justify-between p-3 bg-zinc-900 rounded-lg border border-zinc-800">
                       <span className="text-zinc-300">Monthly Retainer</span>
                       <span className="text-green-400 font-mono font-bold">$5,000+</span>
                     </div>
                     <div className="flex items-center justify-between p-3 bg-zinc-900 rounded-lg border border-zinc-800">
                       <span className="text-zinc-300">Profit Margin</span>
                       <span className="text-orange-400 font-mono font-bold">85%+</span>
                     </div>
                     <div className="flex items-center justify-between p-3 bg-zinc-900 rounded-lg border border-zinc-800">
                       <span className="text-zinc-300">Clients Needed</span>
                       <span className="text-red-400 font-mono font-bold">Just 5-10</span>
                     </div>
                  </div>
                  <div className="mt-8">
                     <StandardCTA
                      text="Start Your Agency"
                      href="#pricing"
                      variant="primary"
                      className="w-full justify-center"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Agency Scaler Simulator */}
            <div className="mb-16">
              <AgencyScaler />
            </div>
          </div>
        </section>

        {/* TOOLS & PLATFORMS */}
        <section className="section-spacing bg-gradient-to-b from-black to-zinc-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/30 rounded-full px-6 py-2 mb-6">
                <Bot className="w-5 h-5 text-orange-400" />
                <span className="text-orange-300 font-semibold">AI TECH STACK</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Master the <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">Complete AI Stack</span>
              </h2>
              <p className="text-xl text-zinc-200 max-w-3xl mx-auto">
                Build enterprise-grade automation using these powerful no-code tools
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {[
                { name: 'ChatGPT', category: 'AI Model', icon: '🤖' },
                { name: 'Claude AI', category: 'AI Model', icon: '🧠' },
                { name: 'Midjourney', category: 'Image Gen', icon: '🎨' },
                { name: 'n8n', category: 'Automation', icon: '⚡' },
                { name: 'Zapier', category: 'Automation', icon: '⚙️' },
                { name: 'Make.com', category: 'Automation', icon: '🔧' },
                { name: 'Airtable', category: 'Database', icon: '📊' },
                { name: 'Notion', category: 'Workspace', icon: '📝' },
                { name: 'Slack', category: 'Communication', icon: '💬' },
                { name: 'Discord', category: 'Community', icon: '🎮' },
                { name: 'Google Sheets', category: 'Data', icon: '📈' },
                { name: 'Telegram', category: 'Messaging', icon: '✉️' }
              ].map((tool, index) => (
                <div
                  key={tool.name}
                  className="group relative bg-zinc-900/60 backdrop-blur-sm rounded-xl p-6 border border-zinc-800 hover:border-orange-500/50 transition-all duration-300 hover:scale-105"
                >
                  <div className="flex flex-col items-center text-center">
                    <span className="text-4xl mb-3 group-hover:scale-110 transition-transform">{tool.icon}</span>
                    <h3 className="font-semibold text-white text-sm mb-1">{tool.name}</h3>
                    <p className="text-xs text-zinc-400">{tool.category}</p>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-600/10 to-red-600/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PRICING Section */}
        <section className="section-spacing bg-zinc-950 border-t border-zinc-800" id="pricing">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div ref={pricingAnimation.elementRef} className={`text-center mb-16 scroll-fade-up ${pricingAnimation.isVisible ? 'visible' : ''}`}>
              <div className="inline-block bg-orange-500/10 border border-orange-500/30 rounded-full px-4 py-2 mb-6">
                <span className="text-orange-400 text-sm font-bold uppercase tracking-wider">CHOOSE YOUR PATH</span>
              </div>
              <h2 className="text-3xl md:text-6xl font-black mb-6 text-white">
                Build Your Agency Today
              </h2>
              <p className="text-xl text-zinc-400 mb-8 max-w-2xl mx-auto">
                Start offering high-value AI services and escape the hourly trap.
              </p>
            </div>

            <div className={`max-w-5xl mx-auto grid md:grid-cols-2 gap-8 ${pricingAnimation.isVisible ? 'visible' : ''}`}>
              {/* Standard Option */}
              <div className="bg-zinc-900 rounded-3xl border border-zinc-800 p-8 flex flex-col relative overflow-hidden">
                 <div className="mb-8">
                  <h3 className="text-xl font-bold text-zinc-400 mb-2">Single Course</h3>
                  <h4 className="text-3xl font-bold text-white mb-4">AI Automations Agency</h4>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold text-white">$399</span>
                    <span className="text-zinc-500">one-time</span>
                  </div>
                  <p className="text-zinc-400 text-sm mt-4">Lifetime access to AI Automations course only.</p>
                </div>
                <ul className="space-y-4 mb-8 flex-1">
                  <li className="flex items-center gap-3 text-zinc-300">
                    <Check className="w-5 h-5 text-orange-500" /> 12 Modules
                  </li>
                  <li className="flex items-center gap-3 text-zinc-300">
                    <Check className="w-5 h-5 text-orange-500" /> All Bonuses Included
                  </li>
                  <li className="flex items-center gap-3 text-zinc-300">
                    <Check className="w-5 h-5 text-orange-500" /> Lifetime Updates
                  </li>
                </ul>
                <StandardCTA
                  text="Buy Course Only"
                  href="https://buy.polar.sh/polar_cl_wHteicqGV6kYtZZ2wZO5PgSqXznsQm84Uhct12ICuhC"
                  variant="outline"
                  className="w-full justify-center"
                />
              </div>

              {/* Godlike Option */}
              <div className="bg-zinc-900 rounded-3xl border border-purple-500/50 p-8 flex flex-col relative overflow-hidden shadow-2xl shadow-purple-900/20">
                <div className="absolute top-0 right-0 bg-purple-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg uppercase tracking-wider">
                  Best Value
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 to-transparent pointer-events-none" />
                
                <div className="mb-8 relative z-10">
                   <h3 className="text-xl font-bold text-purple-400 mb-2 flex items-center gap-2">
                     <Crown className="w-5 h-5" /> All Access
                   </h3>
                  <h4 className="text-3xl font-bold text-white mb-4">Empire Pass</h4>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold text-white">$99</span>
                    <span className="text-zinc-400 text-xl">/mo</span>
                  </div>
                  <p className="text-zinc-400 text-sm mt-4">Access to EVERYTHING. Cancel anytime.</p>
                </div>
                
                <ul className="space-y-4 mb-8 flex-1 relative z-10">
                  <li className="flex items-center gap-3 text-white font-medium">
                    <div className="bg-purple-500/20 p-1 rounded-full"><Check className="w-4 h-4 text-purple-400" /></div>
                    <span>Access to Automation Agency ($399)</span>
                  </li>
                   <li className="flex items-center gap-3 text-white font-medium">
                    <div className="bg-purple-500/20 p-1 rounded-full"><Check className="w-4 h-4 text-purple-400" /></div>
                    <span>Access to Instagram Ignited ($399)</span>
                  </li>
                   <li className="flex items-center gap-3 text-white font-medium">
                    <div className="bg-purple-500/20 p-1 rounded-full"><Check className="w-4 h-4 text-purple-400" /></div>
                    <span>Access to AI Influencers ($399)</span>
                  </li>
                   <li className="flex items-center gap-3 text-white font-medium">
                    <div className="bg-purple-500/20 p-1 rounded-full"><Check className="w-4 h-4 text-purple-400" /></div>
                    <span>Access to Digital Products ($399)</span>
                  </li>
                  <li className="flex items-center gap-3 text-white font-medium">
                    <div className="bg-purple-500/20 p-1 rounded-full"><Check className="w-4 h-4 text-purple-400" /></div>
                    <span>Private Inner Circle Community</span>
                  </li>
                </ul>
                
                <StandardCTA
                  text="Get All Access Pass"
                  href="https://buy.polar.sh/polar_cl_RZqECtx9qQzbriWQHfGfIc2JxkSL17qSERkbq3MVgw5"
                  variant="primary"
                  className="w-full justify-center relative z-10"
                />
                <p className="text-center text-zinc-500 text-xs mt-4 relative z-10">30-day money-back guarantee. Secure checkout.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 bg-black text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8">
              Your Agency Starts Now
            </h2>
            <StandardCTA
               text="Join AI Automations"
               href="#pricing"
               size="lg"
               variant="primary"
            />
          </div>
        </section>

        {/* Crypto Checkout Modal */}
        <CryptoCheckout
          isOpen={isCheckoutOpen}
          onClose={() => setIsCheckoutOpen(false)}
          product={product}
        />
      </div>
    </>
  )
}
