'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from 'react'
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
import StandardCTA from '@/components/StandardCTA'
import StickyCTA from '@/components/StickyCTA'
import EcosystemGraph from '@/components/EcosystemGraph'
import RevenueCalculator from '@/components/tools/RevenueCalculator'
import AnimatedGradientText from '@/components/magicui/animated-gradient-text'
import NumberTicker from '@/components/magicui/number-ticker'
import Marquee from '@/components/magicui/marquee'
import ShimmerButton from '@/components/magicui/shimmer-button'
import WordRotate from '@/components/magicui/word-rotate'
import BlurIn from '@/components/magicui/blur-in'
import TypingAnimation from '@/components/magicui/typing-animation'
import AIContentDeclaration from '@/components/seo/AIContentDeclaration'
import SocialProof from '@/components/seo/SocialProof'
import { 
  Rocket, 
  Video, 
  Bot, 
  Users, 
  Zap, 
  Target, 
  Shield, 
  AlertTriangle, 
  Gem, 
  TrendingUp, 
  Flame, 
  CheckCircle, 
  DollarSign, 
  Phone, 
  ChevronRight, 
  XCircle,
  Check,
  Crown
} from 'lucide-react'
import * as analytics from '@/lib/analytics'

// Icon mapping function
const getIcon = (iconName: string, className?: string) => {
  const iconProps = { className: className || "w-6 h-6", strokeWidth: 2 }
  const icons: { [key: string]: JSX.Element } = {
    rocket: <Rocket {...iconProps} />,
    video: <Video {...iconProps} />,
    bot: <Bot {...iconProps} />,
    users: <Users {...iconProps} />,
    zap: <Zap {...iconProps} />,
    target: <Target {...iconProps} />,
    shield: <Shield {...iconProps} />,
    alertTriangle: <AlertTriangle {...iconProps} />,
    gem: <Gem {...iconProps} />,
    trendingUp: <TrendingUp {...iconProps} />,
    flame: <Flame {...iconProps} />,
    checkCircle: <CheckCircle {...iconProps} />,
    dollarSign: <DollarSign {...iconProps} />,
    phone: <Phone {...iconProps} />
  }
  return icons[iconName] || <Target {...iconProps} />
}

export default function AIInfluencersPage() {
  // Scroll animations
  const heroAnimation = useScrollAnimation({ threshold: 0.2 })
  const problemAnimation = useScrollAnimation({ threshold: 0.1 })
  const solutionAnimation = useScrollAnimation({ threshold: 0.1 })
  const toolsAnimation = useScrollAnimation({ threshold: 0.1 })
  const curriculumAnimation = useScrollAnimation({ threshold: 0.1 })
  const bonusAnimation = useScrollAnimation({ threshold: 0.1 })
  const journeyAnimation = useScrollAnimation({ threshold: 0.1 })
  const learningAnimation = useScrollAnimation({ threshold: 0.1 })
  const comparisonAnimation = useScrollAnimation({ threshold: 0.1 })
  const valueAnimation = useScrollAnimation({ threshold: 0.1 })
  const pricingAnimation = useScrollAnimation({ threshold: 0.2 })
  const testimonialsAnimation = useScrollAnimation({ threshold: 0.1 })
  const faqAnimation = useScrollAnimation({ threshold: 0.1 })
  const urgencyAnimation = useScrollAnimation({ threshold: 0.1 })
  const ctaAnimation = useScrollAnimation({ threshold: 0.3 })

  // Stagger animations
  const problemCards = useScrollAnimations(6, { threshold: 0.1 })
  
  // Initialize analytics
  useEffect(() => {
    analytics.trackPageView('/ai-influencers', 'AI Influencers Mastery Course')
    analytics.trackProductView('ai-influencers', 'AI Influencers Mastery Course', 399, 'Course')
    const scrollTracker = new analytics.ScrollDepthTracker('/ai-influencers')
    const timeTracker = new analytics.TimeOnPageTracker('/ai-influencers')
    return () => {
      scrollTracker.destroy()
      timeTracker.destroy()
    }
  }, [])

  // Schema Markup
  const aiInfluencersSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "AI Influencers Mastery: Virtual Influencer Business Course",
    "description": "Complete course on creating virtual AI influencers that generate passive income through automated content creation, brand partnerships, and virtual presence monetization.",
    "provider": {
      "@type": "Organization",
      "name": "IImagined",
      "url": "https://iimagined.ai"
    },
    "offers": {
      "@type": "Offer",
      "price": '399',
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    }
  }

  const modules = [
    {
      number: 1,
      title: "AI Character Creation Mastery",
      description: "Create photorealistic AI models for any niche: Fashion, Fitness, Cosplay, or Adult/Fanvue.",
      color: "text-pink-400",
      bgColor: "bg-gradient-to-r from-pink-900/20 to-purple-900/20",
      borderColor: "border-pink-500/30",
      whatYouLearn: [
        "Flux & SDXL for SFW & NSFW models",
        "Consistent face training (LoRA)",
        "Realistic skin textures & lighting",
        "Body type & ethnicity customization",
        "Styling for specific niches"
      ],
      deliverables: [
        "3+ Market-Ready AI Models",
        "Character Style Guide",
        "Custom LoRA Models",
        "Niche-Specific Portfolios"
      ],
      value: "$197"
    },
    {
      number: 2,
      title: "Multi-Media Content Engine",
      description: "Generate viral content formats: Images, AI Video, and AI Audio voiceovers.",
      color: "text-purple-400",
      bgColor: "bg-gradient-to-r from-purple-900/20 to-fuchsia-900/20",
      borderColor: "border-purple-500/30",
      whatYouLearn: [
        "Viral TikTok dance generation",
        "Ultra-realistic image sets",
        "AI Voice cloning & Audio messages",
        "Lip-syncing & talking head videos",
        "Deepfake technology (Ethical use)"
      ],
      deliverables: [
        "Viral Video Library",
        "Custom Voice Clones",
        "Automated Content Calendar",
        "Multi-Format Content Pipeline"
      ],
      value: "$147"
    },
    {
      number: 3,
      title: "Platform Domination Strategy",
      description: "Master every major platform with AI influencer specific strategies.",
      color: "text-fuchsia-400",
      bgColor: "bg-gradient-to-r from-fuchsia-900/20 to-pink-900/20",
      borderColor: "border-fuchsia-500/30",
      whatYouLearn: [
        "Instagram growth & monetization",
        "TikTok viral strategies",
        "Twitter/X engagement tactics",
        "YouTube Shorts automation",
        "Fanvue & OnlyFans optimization"
      ],
      deliverables: [
        "Cross-Platform Growth Strategy",
        "Fanvue Launch Plan",
        "Hashtag & Trend Strategy",
        "Community Management Scripts"
      ],
      value: "$197"
    },
    {
      number: 4,
      title: "Monetization Mastery",
      description: "Turn followers into paying subscribers. SFW brand deals & NSFW subscription models.",
      color: "text-pink-300",
      bgColor: "bg-gradient-to-r from-pink-900/20 to-rose-900/20",
      borderColor: "border-pink-500/30",
      whatYouLearn: [
        "Fanvue & Subscription optimization",
        "Selling custom content (PPV)",
        "SFW Brand sponsorships",
        "Chatting scripts that convert",
        "High-ticket private requests"
      ],
      deliverables: [
        "Monetization Roadmap",
        "PPV Pricing Strategy",
        "Chatter Training Guide",
        "Sponsorship Media Kit"
      ],
      value: "$147"
    },
    {
      number: 5,
      title: "Scaling & Automation Systems",
      description: "Scale to multiple AI models and automate everything.",
      color: "text-violet-400",
      bgColor: "bg-gradient-to-r from-violet-900/20 to-purple-900/20",
      borderColor: "border-violet-500/30",
      whatYouLearn: [
        "Multi-model management",
        "Team building & delegation",
        "Workflow optimization",
        "Quality control systems",
        "Performance tracking"
      ],
      deliverables: [
        "Agency SOPs",
        "Hiring Templates",
        "Scaling Roadmap",
        "Multi-Model Dashboard"
      ],
      value: "$197"
    },
    {
      number: 6,
      title: "Legal & Compliance Framework",
      description: "Stay compliant and protect your business legally.",
      color: "text-rose-400",
      bgColor: "bg-gradient-to-r from-rose-900/20 to-pink-900/20",
      borderColor: "border-rose-500/30",
      whatYouLearn: [
        "AI content disclosure requirements",
        "Platform terms of service",
        "Copyright & trademark protection",
        "Tax implications & structures",
        "International compliance"
      ],
      deliverables: [
        "Legal Contract Templates",
        "Disclosure Checklists",
        "Copyright Guides",
        "Compliance Audit Tool"
      ],
      value: "$127"
    }
  ]

  const bonuses = [
    {
      icon: "rocket",
      title: "AI Model Library",
      description: "50+ pre-trained AI models ready to use",
      value: "$197"
    },
    {
      icon: "video",
      title: "Content Template Vault",
      description: "1000+ proven content templates",
      value: "$147"
    },
    {
      icon: "bot",
      title: "Automation Scripts",
      description: "Complete automation toolkit",
      value: "$127"
    },
    {
      icon: "users",
      title: "Private Mastermind",
      description: "Exclusive community access",
      value: "$147"
    },
    {
      icon: "phone",
      title: "1-on-1 Strategy Call",
      description: "Personal consultation with me",
      value: "$197"
    },
    {
      icon: "zap",
      title: "Fast-Track Checklist",
      description: "30-day implementation roadmap",
      value: "$97"
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
        title="AI Influencers Mastery: Create Photorealistic Virtual Models & Earn $10K/Month"
        description="Master ComfyUI, SDXL, and AI workflows to create photorealistic AI influencers for any niche (SFW/NSFW). Build virtual models that generate content 24/7."
        contentType="course"
        primaryTopic="AI Influencer Creation & Monetization"
        keywords={['AI influencers', 'ComfyUI', 'SDXL', 'Fanvue', 'virtual models', 'AI image generation', 'passive income', 'NSFW AI', 'SFW AI']}
        author="Anyro"
        datePublished="2024-02-01"
        dateModified="2025-10-31"
        readingTime={15}
        isAccessibleForFree={false}
        expertiseLevel="intermediate"
      />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aiInfluencersSchema) }} />

      <div className="min-h-screen bg-dark relative selection:bg-pink-500/30 selection:text-pink-200">
        <h1 className="sr-only">AI Influencers Mastery: Build Your AI-Powered Virtual Influencer Empire (SFW & NSFW)</h1>

        {/* Hero Section */}
        <div ref={heroAnimation.elementRef} className="relative z-10">
          <HeroSection
            badge="AI INFLUENCER MASTERY"
            badgeColor="bg-pink-600/20 text-pink-300 border border-pink-500/30 backdrop-blur-sm"
            title={<>Build Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-500">AI Influencer Empire</span> And Make <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">$10K/Month</span> Without Showing Your Face</>}
            description="The complete system to create, grow, and monetize AI-powered virtual models across ANY niche—from Fashion & Lifestyle to Fanvue & Adult content. Master AI video, audio, and images."
            ctaText="Start Building Your AI Influencer"
            ctaLink="#pricing"
            socialProof={{
              images: [
                "https://ext.same-assets.com/1161517358/1620887224.webp",
                "https://ext.same-assets.com/1161517358/447445188.webp"
              ],
              rating: 5,
              text: "500+ students creating AI influencers"
            }}
            isVisible={heroAnimation.isVisible}
          />
        </div>

        {/* Social Proof */}
        <div className="container mx-auto px-4 relative z-10">
          <SocialProof
            students={1500}
            revenue="$800K+"
            rating={4.9}
            reviews={800}
            companies={25}
            showAll={true}
          />
        </div>

        {/* PROBLEM Section - The Gap */}
        <section className="section-spacing relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-pink-900/10 to-transparent pointer-events-none" />
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div
              ref={problemAnimation.elementRef}
              className={`text-center mb-16 scroll-fade-up ${problemAnimation.isVisible ? 'visible' : ''}`}
            >
              <div className="inline-block bg-zinc-900/80 backdrop-blur-sm border border-pink-500/30 rounded-full px-4 py-2 mb-6">
                <span className="text-pink-400 text-sm font-bold uppercase tracking-wider flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4" />
                  THE CREATOR TRAP
                </span>
              </div>
              <div className="text-3xl md:text-6xl font-black mb-6 text-white tracking-tight">
                <BlurIn
                  word="Why Most Creators Burn Out"
                  className="text-3xl md:text-6xl font-black text-white"
                  duration={0.8}
                />
              </div>
              <p className="text-xl md:text-2xl text-zinc-400 mb-8 max-w-3xl mx-auto leading-relaxed font-medium">
                Trading your time and privacy for likes is a broken model.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mb-16">
              {[
                {
                  icon: "alertTriangle",
                  title: "Face-to-Camera Burnout",
                  description: "Constantly maintaining appearance and being 'on' 24/7 is exhausting and unsustainable."
                },
                {
                  icon: "target",
                  title: "Time Prison",
                  description: "Your income is directly tied to your time. You can't scale beyond 24 hours in a day."
                },
                {
                  icon: "shield",
                  title: "Privacy Invasion",
                  description: "Your personal life becomes public content. No boundaries between work and private life."
                },
                {
                  icon: "trendingUp",
                  title: "Inconsistent Income",
                  description: "Bad days or sick days mean no content and no income. One person can't be everywhere."
                },
                {
                  icon: "users",
                  title: "Platform Risk",
                  description: "One algorithm change or ban can destroy years of work instantly. You own nothing."
                },
                {
                  icon: "dollarSign",
                  title: "High Overhead",
                  description: "Expensive equipment, editing, and teams eat into your profits before you even start."
                }
              ].map((problem, index) => (
                <div
                  key={index}
                  ref={problemCards.setElementRef(index)}
                  className={`bg-zinc-900/50 border border-pink-900/20 rounded-2xl p-6 hover:bg-pink-900/10 hover:border-pink-500/30 transition-all duration-300 hover-lift scroll-fade-up ${problemCards.visibleElements[index] ? `visible scroll-stagger-${Math.min(index + 1, 6)}` : ''}`}
                >
                  <div className="mb-4 bg-pink-500/10 w-12 h-12 rounded-xl flex items-center justify-center">
                    <PainPointIcon
                      type={problem.icon as any}
                      size={24}
                      className="text-pink-500"
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
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-pink-600/20 blur-[120px] rounded-full opacity-30 pointer-events-none" />

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div ref={solutionAnimation.elementRef} className={`text-center mb-16 scroll-fade-up ${solutionAnimation.isVisible ? 'visible' : ''}`}>
              <div className="inline-block bg-zinc-900/80 backdrop-blur-sm border border-pink-500/30 rounded-full px-4 py-2 mb-6">
                <span className="text-pink-400 text-sm font-bold uppercase tracking-wider flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  THE AI REVOLUTION
                </span>
              </div>
              <h2 className="text-3xl md:text-6xl font-black mb-6 text-white tracking-tight">
                Build a <span className="text-pink-500">Scalable Empire</span> Without Being Famous
              </h2>
              <p className="text-xl md:text-2xl text-zinc-400 mb-8 max-w-4xl mx-auto">
                Create digital assets that work 24/7, never complain, and generate passive income while you sleep.
              </p>
            </div>

            <div className={`bg-zinc-900/50 border border-zinc-800 rounded-3xl p-8 md:p-12 mb-16 scroll-scale relative overflow-hidden ${solutionAnimation.isVisible ? 'visible scroll-stagger-2' : ''}`}>
              <div className="grid md:grid-cols-2 gap-12 relative z-10">
                <div className="space-y-8">
                  <h3 className="text-2xl font-bold text-white mb-6">Why AI Influencers Win:</h3>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-pink-500/20 p-3 rounded-lg"><Rocket className="w-6 h-6 text-pink-400" /></div>
                    <div>
                      <h4 className="text-lg font-bold text-white mb-2">Unlimited Scale</h4>
                      <p className="text-zinc-400 text-sm">Run 10+ influencer accounts simultaneously. 10x your revenue without 10x the work.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-pink-500/20 p-3 rounded-lg"><Bot className="w-6 h-6 text-pink-400" /></div>
                    <div>
                      <h4 className="text-lg font-bold text-white mb-2">Total Control</h4>
                      <p className="text-zinc-400 text-sm">Perfect consistency. No bad hair days. No aging. Complete brand safety.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-pink-500/20 p-3 rounded-lg"><Shield className="w-6 h-6 text-pink-400" /></div>
                    <div>
                      <h4 className="text-lg font-bold text-white mb-2">100% Privacy</h4>
                      <p className="text-zinc-400 text-sm">Make millions without anyone knowing who you are. Keep your private life private.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-8 flex flex-col justify-center">
                  <div className="text-center mb-6">
                    <p className="text-zinc-400 text-sm uppercase tracking-wider mb-2">POTENTIAL RESULTS</p>
                    <h3 className="text-3xl font-bold text-white">Digital Freedom</h3>
                  </div>
                  <div className="space-y-4">
                     <div className="flex items-center justify-between p-3 bg-zinc-900 rounded-lg border border-zinc-800">
                       <span className="text-zinc-300">Monthly Revenue</span>
                       <span className="text-green-400 font-mono font-bold">$20,000+</span>
                     </div>
                     <div className="flex items-center justify-between p-3 bg-zinc-900 rounded-lg border border-zinc-800">
                       <span className="text-zinc-300">Work Hours</span>
                       <span className="text-blue-400 font-mono font-bold">Flexible</span>
                     </div>
                     <div className="flex items-center justify-between p-3 bg-zinc-900 rounded-lg border border-zinc-800">
                       <span className="text-zinc-300">Location</span>
                       <span className="text-purple-400 font-mono font-bold">Global</span>
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

            {/* Revenue Calculator */}
            <div className="mb-16">
              <RevenueCalculator />
            </div>
          </div>
        </section>

        {/* CURRICULUM Section */}
        <section className="section-spacing bg-zinc-900/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div ref={curriculumAnimation.elementRef}>
              <SectionHeader
                badge="COMPLETE SYSTEM"
                badgeColor="text-pink-400"
                title="The AI Influencer Blueprint"
                description="8 comprehensive modules + bonuses worth over $8,000"
                isVisible={curriculumAnimation.isVisible}
              />
            </div>

            <div className="space-y-8 max-w-6xl mx-auto">
              {modules.map((module, index) => (
                <ModuleCard
                  key={module.number}
                  number={module.number}
                  title={module.title}
                  description={module.description}
                  color={module.color}
                  bgColor={module.bgColor}
                  borderColor={module.borderColor}
                  whatYouLearn={module.whatYouLearn}
                  value={module.value}
                  isVisible={curriculumAnimation.isVisible}
                  staggerClass={`scroll-stagger-${index + 1}`}
                />
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
        <EcosystemGraph currentCourseId="ai-influencers" />

        {/* PRICING Section */}
        <section className="section-spacing bg-zinc-950 border-t border-zinc-800" id="pricing">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div ref={pricingAnimation.elementRef} className={`text-center mb-16 scroll-fade-up ${pricingAnimation.isVisible ? 'visible' : ''}`}>
              <div className="inline-block bg-pink-500/10 border border-pink-500/30 rounded-full px-4 py-2 mb-6">
                <span className="text-pink-400 text-sm font-bold uppercase tracking-wider">CHOOSE YOUR PATH</span>
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
                  <h4 className="text-3xl font-bold text-white mb-4">AI Influencers Mastery</h4>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold text-white">$399</span>
                    <span className="text-zinc-500">one-time</span>
                  </div>
                  <p className="text-zinc-400 text-sm mt-4">Lifetime access to AI Influencers course only.</p>
                </div>
                <ul className="space-y-4 mb-8 flex-1">
                  <li className="flex items-center gap-3 text-zinc-300">
                    <Check className="w-5 h-5 text-pink-500" /> 8 Modules
                  </li>
                  <li className="flex items-center gap-3 text-zinc-300">
                    <Check className="w-5 h-5 text-pink-500" /> All Bonuses Included
                  </li>
                  <li className="flex items-center gap-3 text-zinc-300">
                    <Check className="w-5 h-5 text-pink-500" /> Lifetime Updates
                  </li>
                </ul>
                <StandardCTA
                  text="Buy Course Only"
                  href="https://buy.polar.sh/polar_cl_HcgnXcPKJUUn75RUv8Bodu1E8P2f6fqRzOsCS100zLw"
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
                    <span>Access to AI Influencers ($399)</span>
                  </li>
                   <li className="flex items-center gap-3 text-white font-medium">
                    <div className="bg-purple-500/20 p-1 rounded-full"><Check className="w-4 h-4 text-purple-400" /></div>
                    <span>Access to Instagram Ignited ($399)</span>
                  </li>
                   <li className="flex items-center gap-3 text-white font-medium">
                    <div className="bg-purple-500/20 p-1 rounded-full"><Check className="w-4 h-4 text-purple-400" /></div>
                    <span>Access to Digital Products ($399)</span>
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
              Your AI Empire Awaits
            </h2>
            <StandardCTA
               text="Start Building Now"
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
