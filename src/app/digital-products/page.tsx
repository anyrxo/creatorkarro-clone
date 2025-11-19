'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useScrollAnimation, useScrollAnimations } from '@/hooks/useScrollAnimation'
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
import PainPointIcon from '@/components/PainPointIcon'
import StandardCTA from '@/components/StandardCTA'
import StickyCTA from '@/components/StickyCTA'
import EcosystemGraph from '@/components/EcosystemGraph'
import ProductLaunchSimulator from '@/components/tools/ProductLaunchSimulator'
import WordRotate from '@/components/magicui/word-rotate'
import BlurIn from '@/components/magicui/blur-in'
import TypingAnimation from '@/components/magicui/typing-animation'
import NumberTicker from '@/components/magicui/number-ticker'
import AnimatedGradientText from '@/components/magicui/animated-gradient-text'
import ShimmerButton from '@/components/magicui/shimmer-button'
import Marquee from '@/components/magicui/marquee'
import AIContentDeclaration from '@/components/seo/AIContentDeclaration'
import SocialProof from '@/components/seo/SocialProof'
import { 
  ChevronRight, 
  Target, 
  Flame, 
  Zap, 
  Rocket, 
  DollarSign, 
  Mail, 
  BarChart3, 
  Users, 
  AlertTriangle, 
  CheckCircle, 
  Gem, 
  XCircle, 
  Package,
  Check,
  Crown
} from 'lucide-react'

// Icon mapping function
const getIcon = (iconName: string, className?: string) => {
  const iconProps = { className: className || "w-6 h-6", strokeWidth: 2 }
  const icons: { [key: string]: JSX.Element } = {
    target: <Target {...iconProps} />,
    flame: <Flame {...iconProps} />,
    zap: <Zap {...iconProps} />,
    rocket: <Rocket {...iconProps} />,
    dollarSign: <DollarSign {...iconProps} />,
    mail: <Mail {...iconProps} />,
    barChart3: <BarChart3 {...iconProps} />,
    users: <Users {...iconProps} />,
    alertTriangle: <AlertTriangle {...iconProps} />,
    checkCircle: <CheckCircle {...iconProps} />,
    gem: <Gem {...iconProps} />,
    xCircle: <XCircle {...iconProps} />,
    package: <Package {...iconProps} />
  }
  return icons[iconName] || <Target {...iconProps} />
}

export default function DigitalProductsPage() {
  // Scroll animations
  const heroAnimation = useScrollAnimation({ threshold: 0.2 })
  const problemAnimation = useScrollAnimation({ threshold: 0.1 })
  const solutionAnimation = useScrollAnimation({ threshold: 0.1 })
  const toolsAnimation = useScrollAnimation({ threshold: 0.1 })
  const resultsAnimation = useScrollAnimation({ threshold: 0.1 })
  const whoForAnimation = useScrollAnimation({ threshold: 0.1 })
  const studentResultsAnimation = useScrollAnimation({ threshold: 0.1 })
  const modulesAnimation = useScrollAnimation({ threshold: 0.1 })
  const bonusAnimation = useScrollAnimation({ threshold: 0.1 })
  const journeyAnimation = useScrollAnimation({ threshold: 0.1 })
  const whatYouLearnAnimation = useScrollAnimation({ threshold: 0.1 })
  const comparisonAnimation = useScrollAnimation({ threshold: 0.1 })
  const pricingAnimation = useScrollAnimation({ threshold: 0.1 })
  const testimonialsAnimation = useScrollAnimation({ threshold: 0.1 })
  const faqAnimation = useScrollAnimation({ threshold: 0.1 })
  const finalCtaAnimation = useScrollAnimation({ threshold: 0.2 })

  // Staggered animations
  const problemCards = useScrollAnimations(6, { threshold: 0.1 })
  const whoForCards = useScrollAnimations(3, { threshold: 0.1 })
  const moduleCards = useScrollAnimations(8, { threshold: 0.1 })
  const bonusCards = useScrollAnimations(6, { threshold: 0.1 })
  const testimonialCards = useScrollAnimations(3, { threshold: 0.1 })
  const faqCards = useScrollAnimations(12, { threshold: 0.1 })

  // Schema Markup
  const digitalProductsSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "Digital Products Empire: Complete Business Course",
    "description": "Master the art of creating and selling digital products. Learn to build profitable digital products, marketing strategies, and automated sales systems that generate passive income.",
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

  const modules = [
    {
      title: "<span className='text-green-400'>Module 1:</span> Product Idea Validation",
      value: "$497",
      description: "Never build a product that doesn't sell. Learn the exact validation process to identify profitable ideas before you create anything."
    },
    {
      title: "<span className='text-green-400'>Module 2:</span> High-Converting Product Creation",
      value: "$697",
      description: "Transform raw knowledge into irresistible digital products. Courses, eBooks, templates, tools - learn what formats work best."
    },
    {
      title: "<span className='text-green-400'>Module 3:</span> Pricing Psychology Mastery",
      value: "$597",
      description: "Price your products for maximum profit and positioning. Psychology-based pricing strategies that let you charge 10x more."
    },
    {
      title: "<span className='text-green-400'>Module 4:</span> Zero-Ad Launch Strategies",
      value: "$797",
      description: "Launch profitable products without spending a dime on ads. Organic marketing strategies and launch sequences that generate massive buzz."
    },
    {
      title: "<span className='text-green-400'>Module 5:</span> Sales Funnel Automation",
      value: "$897",
      description: "Build automated sales systems that work 24/7 using N8N workflows. Advanced email sequences and landing pages."
    },
    {
      title: "<span className='text-green-400'>Module 6:</span> Customer Success Systems",
      value: "$497",
      description: "Keep customers happy and buying more. Onboarding sequences and support systems that turn one-time buyers into lifetime fans."
    },
    {
      title: "<span className='text-green-400'>Module 7:</span> Scaling to Multiple Products",
      value: "$897",
      description: "Expand from one product to an entire empire. Product suites, membership sites, and mastermind programs."
    },
    {
      title: "<span className='text-green-400'>Module 8:</span> Business Operations & Growth",
      value: "$597",
      description: "Build systems that scale without you. Team building, automation tools, and financial management for long-term success."
    }
  ]

  const bonuses = [
    {
      title: "50+ Product Templates",
      icon: "target",
      value: "$797",
      description: "Done-for-you templates for courses, eBooks, worksheets, checklists, and more."
    },
    {
      title: "Pricing Calculator Tool",
      icon: "dollarSign",
      value: "$297",
      description: "Scientific pricing calculator that determines the optimal price point for maximum revenue."
    },
    {
      title: "Email Sequence Library",
      icon: "mail",
      value: "$697",
      description: "100+ high-converting email templates for launches, nurturing, sales, and success."
    },
    {
      title: "Launch Checklist System",
      icon: "target",
      value: "$197",
      description: "Step-by-step launch checklists that ensure nothing falls through the cracks."
    },
    {
      title: "Analytics & Tracking Templates",
      icon: "barChart3",
      value: "$397",
      description: "Spreadsheet templates and dashboard setups to track every metric that matters."
    },
    {
      title: "Private Mastermind Access",
      icon: "users",
      value: "$1,997",
      description: "Exclusive access to our private community of successful digital product creators."
    }
  ]

  return (
    <>
      <StickyCTA 
        price="$99/mo" 
        originalPrice="$399" 
        ctaLink="/checkout?course=empire-bundle"
        productName="Empire Pass All Access" 
      />

      <AIContentDeclaration
        title="Digital Products Academy: Build $500K+ Digital Empire with Automated Funnels"
        description="Complete system for creating, launching, and scaling digital products. Learn product creation, N8N automation, sales funnels, and systems that generate $10K-$50K monthly on autopilot."
        contentType="course"
        primaryTopic="Digital Product Creation & Business Automation"
        keywords={['digital products', 'online course creation', 'N8N automation', 'sales funnels', 'passive income']}
        author="Anyro"
        datePublished="2024-03-01"
        dateModified="2025-10-31"
        readingTime={15}
        isAccessibleForFree={false}
        expertiseLevel="beginner"
      />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(digitalProductsSchema) }} />

      <div className="min-h-screen bg-dark relative selection:bg-green-500/30 selection:text-green-200">
        <h1 className="sr-only">Digital Products Academy: Create, Launch & Scale Profitable Digital Products</h1>

        {/* Hero Section */}
        <div ref={heroAnimation.elementRef} className="relative z-10">
          <HeroSection
            badge="DIGITAL EMPIRE BUILDER"
            badgeColor="bg-green-600/20 text-green-300 border border-green-500/30 backdrop-blur-sm"
            title={<>Turn Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500">Knowledge</span> Into a <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">$500K+ Digital Empire</span> Without Ads</>}
            description="The complete Digital Products Academy that shows you how to create, launch, and scale high-converting digital products that generate consistent $10K-$50K months on autopilot."
            ctaText="Start Your Digital Empire"
            ctaLink="#pricing"
            socialProof={{
              images: [
                "https://ext.same-assets.com/1161517358/2822588328.webp",
                "https://ext.same-assets.com/1161517358/3376144705.webp",
                "https://ext.same-assets.com/1161517358/2657109700.webp"
              ],
              rating: 5,
              text: "3,500+ students earning $10K+ monthly"
            }}
            stats={[
              { value: "$5M+", label: "Student Revenue", color: "text-green-400" },
              { value: "4,200+", label: "Products Launched", color: "text-emerald-400" },
              { value: "89%", label: "Success Rate", color: "text-teal-400" }
            ]}
            isVisible={heroAnimation.isVisible}
          />
        </div>

        {/* Social Proof */}
        <div className="container mx-auto px-4 relative z-10">
          <SocialProof
            students={1200}
            revenue="$5M+"
            rating={4.9}
            reviews={950}
            companies={30}
            showAll={true}
          />
        </div>

        {/* PROBLEM Section - The Gap */}
        <section className="section-spacing relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-green-900/10 to-transparent pointer-events-none" />
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div
              ref={problemAnimation.elementRef}
              className={`text-center mb-16 scroll-fade-up ${problemAnimation.isVisible ? 'visible' : ''}`}
            >
              <div className="inline-block bg-zinc-900/80 backdrop-blur-sm border border-green-500/30 rounded-full px-4 py-2 mb-6">
                <span className="text-green-400 text-sm font-bold uppercase tracking-wider flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4" />
                  THE TIME TRAP
                </span>
              </div>
              <div className="text-3xl md:text-6xl font-black mb-6 text-white tracking-tight">
                <BlurIn
                  word="Stop Trading Time For Money"
                  className="text-3xl md:text-6xl font-black text-white"
                  duration={0.8}
                />
              </div>
              <p className="text-xl md:text-2xl text-zinc-400 mb-8 max-w-3xl mx-auto leading-relaxed font-medium">
                While others build digital assets that pay them 24/7, you're stuck in the manual labor trap.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mb-16">
              {[
                {
                  icon: "dollarSign",
                  title: "Income Capped by Time",
                  description: "You can only work so many hours. Your income hits a ceiling while expenses keep rising."
                },
                {
                  icon: "target",
                  title: "Knowledge Wasted",
                  description: "You have valuable expertise that could help thousands, but no way to package and sell it."
                },
                {
                  icon: "alertTriangle",
                  title: "Information Overload",
                  description: "Confused by contradictory advice on courses, ebooks, and platforms. Analysis paralysis."
                },
                {
                  icon: "xCircle",
                  title: "Failed Launches",
                  description: "Wasted months building products nobody wanted. Zero sales and crushed confidence."
                },
                {
                  icon: "flame",
                  title: "Competitors Winning",
                  description: "Watching people with less skill make millions because they have a product strategy."
                },
                {
                  icon: "zap",
                  title: "Zero Freedom",
                  description: "If you stop working, the money stops. You own a job, not a business."
                }
              ].map((problem, index) => (
                <div
                  key={index}
                  ref={problemCards.setElementRef(index)}
                  className={`bg-zinc-900/50 border border-green-900/20 rounded-2xl p-6 hover:bg-green-900/10 hover:border-green-500/30 transition-all duration-300 hover-lift scroll-fade-up ${problemCards.visibleElements[index] ? `visible scroll-stagger-${Math.min(index + 1, 6)}` : ''}`}
                >
                  <div className="mb-4 bg-green-500/10 w-12 h-12 rounded-xl flex items-center justify-center">
                    <PainPointIcon
                      type={problem.icon as any}
                      size={24}
                      className="text-green-500"
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
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-green-600/20 blur-[120px] rounded-full opacity-30 pointer-events-none" />

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div ref={solutionAnimation.elementRef} className={`text-center mb-16 scroll-fade-up ${solutionAnimation.isVisible ? 'visible' : ''}`}>
              <div className="inline-block bg-zinc-900/80 backdrop-blur-sm border border-green-500/30 rounded-full px-4 py-2 mb-6">
                <span className="text-green-400 text-sm font-bold uppercase tracking-wider flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  THE DIGITAL PRODUCT SYSTEM
                </span>
              </div>
              <h2 className="text-3xl md:text-6xl font-black mb-6 text-white tracking-tight">
                Build Once, <span className="text-green-500">Sell Forever</span>
              </h2>
              <p className="text-xl md:text-2xl text-zinc-400 mb-8 max-w-4xl mx-auto">
                The proven framework to package your knowledge into high-ticket assets that generate revenue while you sleep.
              </p>
            </div>

            <div className={`bg-zinc-900/50 border border-zinc-800 rounded-3xl p-8 md:p-12 mb-16 scroll-scale relative overflow-hidden ${solutionAnimation.isVisible ? 'visible scroll-stagger-2' : ''}`}>
              <div className="grid md:grid-cols-2 gap-12 relative z-10">
                <div className="space-y-8">
                  <h3 className="text-2xl font-bold text-white mb-6">Why This System Works:</h3>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-green-500/20 p-3 rounded-lg"><DollarSign className="w-6 h-6 text-green-400" /></div>
                    <div>
                      <h4 className="text-lg font-bold text-white mb-2">$5M+ Student Revenue</h4>
                      <p className="text-zinc-400 text-sm">Proven across thousands of students in every niche imaginable.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-green-500/20 p-3 rounded-lg"><Rocket className="w-6 h-6 text-green-400" /></div>
                    <div>
                      <h4 className="text-lg font-bold text-white mb-2">4,200+ Products Launched</h4>
                      <p className="text-zinc-400 text-sm">From simple ebooks to comprehensive masterminds, we've launched it all.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-green-500/20 p-3 rounded-lg"><Zap className="w-6 h-6 text-green-400" /></div>
                    <div>
                      <h4 className="text-lg font-bold text-white mb-2">True Passive Income</h4>
                      <p className="text-zinc-400 text-sm">Build the asset once, set up the funnel, and let it run on autopilot forever.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-8 flex flex-col justify-center">
                  <div className="text-center mb-6">
                    <p className="text-zinc-400 text-sm uppercase tracking-wider mb-2">POTENTIAL RESULTS</p>
                    <h3 className="text-3xl font-bold text-white">Financial Freedom</h3>
                  </div>
                  <div className="space-y-4">
                     <div className="flex items-center justify-between p-3 bg-zinc-900 rounded-lg border border-zinc-800">
                       <span className="text-zinc-300">Monthly Revenue</span>
                       <span className="text-green-400 font-mono font-bold">$50,000+</span>
                     </div>
                     <div className="flex items-center justify-between p-3 bg-zinc-900 rounded-lg border border-zinc-800">
                       <span className="text-zinc-300">Profit Margin</span>
                       <span className="text-blue-400 font-mono font-bold">95%+</span>
                     </div>
                     <div className="flex items-center justify-between p-3 bg-zinc-900 rounded-lg border border-zinc-800">
                       <span className="text-zinc-300">Work Hours</span>
                       <span className="text-purple-400 font-mono font-bold">Automated</span>
                     </div>
                  </div>
                  <div className="mt-8">
                     <StandardCTA
                      text="Start Building"
                      href="#pricing"
                      variant="primary"
                      className="w-full justify-center"
                    />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Product Launch Simulator */}
            <div className="mb-16">
              <ProductLaunchSimulator />
            </div>
          </div>
        </section>

        {/* CURRICULUM Section */}
        <section className="section-spacing bg-zinc-900/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div ref={curriculumAnimation.elementRef}>
              <SectionHeader
                badge="COMPLETE SYSTEM"
                badgeColor="text-green-400"
                title="The Digital Product Blueprint"
                description="8 comprehensive modules + bonuses worth over $8,000"
                isVisible={curriculumAnimation.isVisible}
              />
            </div>

            <div className="space-y-8 max-w-6xl mx-auto">
              {modules.map((module, index) => (
                <div
                  key={index}
                  ref={moduleCards.setElementRef(index)}
                  className={`bg-zinc-900 border border-zinc-800 rounded-2xl p-8 hover:border-green-500/30 transition-all duration-300 scroll-fade-up ${moduleCards.visibleElements[index] ? `visible scroll-stagger-${Math.min(index + 1, 6)}` : ''}`}
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                    <h3 className="text-xl font-bold text-white" dangerouslySetInnerHTML={{ __html: module.title }} />
                    <span className="text-green-400 font-mono font-bold">{module.value}</span>
                  </div>
                  <p className="text-zinc-400">{module.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* BONUSES Section */}
        <section className="section-spacing">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div ref={bonusAnimation.elementRef}>
              <SectionHeader
                badge="EXCLUSIVE BONUSES"
                badgeColor="text-yellow-400"
                title="Tools to Accelerate Your Success"
                description="Included free when you join today"
                isVisible={bonusAnimation.isVisible}
              />
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {bonuses.map((bonus, index) => (
                <BonusCard
                  key={index}
                  icon={getIcon(bonus.icon)}
                  title={bonus.title}
                  description={bonus.description}
                  value={bonus.value}
                  isVisible={bonusAnimation.isVisible}
                  staggerClass={`scroll-stagger-${index + 1}`}
                />
              ))}
            </div>
          </div>
        </section>
        
        {/* Ecosystem Graph */}
        <EcosystemGraph currentCourseId="digital-products" />

        {/* PRICING Section */}
        <section className="section-spacing bg-zinc-950 border-t border-zinc-800" id="pricing">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div ref={pricingAnimation.elementRef} className={`text-center mb-16 scroll-fade-up ${pricingAnimation.isVisible ? 'visible' : ''}`}>
              <div className="inline-block bg-green-500/10 border border-green-500/30 rounded-full px-4 py-2 mb-6">
                <span className="text-green-400 text-sm font-bold uppercase tracking-wider">CHOOSE YOUR PATH</span>
              </div>
              <h2 className="text-3xl md:text-6xl font-black mb-6 text-white">
                Start Your Empire Today
              </h2>
              <p className="text-xl text-zinc-400 mb-8 max-w-2xl mx-auto">
                Stop trading time for money. Build assets that pay you forever.
              </p>
            </div>

            <div className={`max-w-5xl mx-auto grid md:grid-cols-2 gap-8 ${pricingAnimation.isVisible ? 'visible' : ''}`}>
              {/* Standard Option */}
              <div className="bg-zinc-900 rounded-3xl border border-zinc-800 p-8 flex flex-col relative overflow-hidden">
                 <div className="mb-8">
                  <h3 className="text-xl font-bold text-zinc-400 mb-2">Single Course</h3>
                  <h4 className="text-3xl font-bold text-white mb-4">Digital Products Academy</h4>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold text-white">$399</span>
                    <span className="text-zinc-500">one-time</span>
                  </div>
                  <p className="text-zinc-400 text-sm mt-4">Lifetime access to Digital Products course only.</p>
                </div>
                <ul className="space-y-4 mb-8 flex-1">
                  <li className="flex items-center gap-3 text-zinc-300">
                    <Check className="w-5 h-5 text-green-500" /> 8 Modules
                  </li>
                  <li className="flex items-center gap-3 text-zinc-300">
                    <Check className="w-5 h-5 text-green-500" /> All Bonuses Included
                  </li>
                  <li className="flex items-center gap-3 text-zinc-300">
                    <Check className="w-5 h-5 text-green-500" /> Lifetime Updates
                  </li>
                </ul>
                <StandardCTA
                  text="Buy Course Only"
                  href="https://buy.polar.sh/polar_cl_bL05hR1eXtSx6TUqsQ5OogpSVa3vwTyerCjmO3PCl4N"
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
                    <span>Access to Digital Products ($399)</span>
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
                    <span>Access to Automation Agency ($399)</span>
                  </li>
                  <li className="flex items-center gap-3 text-white font-medium">
                    <div className="bg-purple-500/20 p-1 rounded-full"><Check className="w-4 h-4 text-purple-400" /></div>
                    <span>Private Inner Circle Community</span>
                  </li>
                </ul>
                
                <StandardCTA
                  text="Get All Access Pass"
                  href="/checkout?course=empire-bundle"
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
              Your Empire Starts Now
            </h2>
            <StandardCTA
               text="Join Digital Products Academy"
               href="#pricing"
               size="lg"
               variant="primary"
            />
          </div>
        </section>
      </div>
    </>
  )
}
