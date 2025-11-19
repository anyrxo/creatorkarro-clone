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
import FollowerGrowthSimulator from '@/components/tools/FollowerGrowthSimulator'
import { ChevronRight, Target, Video, FileText, Users, BarChart3, Handshake, Zap, Flame, CheckCircle, XCircle, AlertTriangle, Instagram, Check, Star, Crown } from 'lucide-react'

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
    instagram: <Instagram {...iconProps} />
  }
  return icons[iconName] || <Target {...iconProps} />
}

export default function InstagramIgnitedPage() {
  // Crypto checkout state
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false)

  // Product information for Instagram Ignited
  const product = {
    id: 'instagram-ignited',
    name: 'Instagram Ignited: 0 to 500K Followers',
    price: 399,
    description: 'Complete Instagram growth system with 10+ modules, 100+ lessons, and $8,879 worth of bonuses'
  }

  // Schema markup for Instagram Ignited Course
  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "Instagram Ignited: 0 to 500K Followers",
    "description": "Complete Instagram growth system for entrepreneurs. Learn viral content strategies, algorithm domination, and monetization techniques from growing 0 to 500K followers.",
    "provider": {
      "@type": "Organization",
      "name": "IImagined",
      "url": "https://iimagined.ai"
    },
    "instructor": {
      "@type": "Person",
      "name": "Anyro",
      "url": "https://iimagined.ai/story",
      "jobTitle": "Instagram Growth Expert",
      "alumniOf": "500K+ Instagram Following"
    },
    "courseMode": "online",
    "educationalLevel": "Beginner to Advanced",
    "teaches": [
      "Instagram Algorithm Mastery",
      "Viral Content Creation",
      "Instagram Monetization",
      "Reel Psychology",
      "Story Engagement",
      "Instagram Growth Strategies"
    ],
    "offers": {
      "@type": "Offer",
      "price": "399",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock",
      "category": "Instagram Marketing Course",
      "hasCourseInstance": {
        "@type": "CourseInstance",
        "courseMode": "online",
        "courseWorkload": "10+ hours",
        "instructor": "Anyro"
      }
    },
    "totalTime": "PT20H",
    "numberOfCredits": 10,
    "educationalCredentialAwarded": "Instagram Growth Certificate",
    "audience": {
      "@type": "EducationalAudience",
      "educationalRole": "student",
      "audienceType": ["Content Creators", "Business Owners", "Social Media Managers", "Entrepreneurs"]
    },
    "coursePrerequisites": "None - suitable for complete beginners",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "2000",
      "bestRating": "5"
    }
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the best Instagram growth course for beginners?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Instagram Ignited by IImagined is the most comprehensive beginner-friendly Instagram course, featuring proven strategies that grew a following from 0 to 500K+ and generated over $2.5M in revenue."
        }
      },
      {
        "@type": "Question",
        "name": "How quickly will I see Instagram growth results?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most students see significant improvements within 2-4 weeks of implementing the strategies, with better engagement and reach almost immediately. Consistent follower growth typically begins within 30 days."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need expensive equipment for Instagram growth?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Not at all! Everything can be done with just your smartphone. Instagram Ignited shows you free tools and apps for editing, scheduling, and analytics. Focus on strategy first, equipment second."
        }
      },
      {
        "@type": "Question",
        "name": "Can I make money with Instagram?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely! Students are earning $5K-$50K monthly through various revenue streams including digital products, affiliate marketing, sponsorships, coaching, and consulting using Instagram Ignited strategies."
        }
      }
    ]
  }

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "IImagined",
    "url": "https://iimagined.ai",
    "logo": "https://iimagined.ai/logo.png",
    "description": "Leading Instagram growth and digital marketing education platform",
    "foundingDate": "2023",
    "founder": {
      "@type": "Person",
      "name": "Anyro",
      "url": "https://iimagined.ai/story"
    },
    "sameAs": [
      "https://twitter.com/anyrxo",
      "https://linkedin.com/in/anyro",
      "https://youtube.com/@iimagined"
    ]
  }

  const handleBuyNow = () => {
    setIsCheckoutOpen(true)
  }
  // Scroll animations for different sections
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
  const skillsAnimation = useScrollAnimation({ threshold: 0.1 })
  const comparisonAnimation = useScrollAnimation({ threshold: 0.1 })
  const pricingAnimation = useScrollAnimation({ threshold: 0.1 })
  const testimonialsAnimation = useScrollAnimation({ threshold: 0.1 })
  const faqAnimation = useScrollAnimation({ threshold: 0.1 })
  const finalCtaAnimation = useScrollAnimation({ threshold: 0.2 })

  // For grid items that need staggered animations
  const problemCards = useScrollAnimations(8, { threshold: 0.1 })
  const whoForCards = useScrollAnimations(3, { threshold: 0.1 })
  const moduleCards = useScrollAnimations(10, { threshold: 0.1 })
  const bonusCards = useScrollAnimations(6, { threshold: 0.1 })
  const testimonialCards = useScrollAnimations(3, { threshold: 0.1 })
  const faqCards = useScrollAnimations(12, { threshold: 0.1 })
  const storiesAnimation = useScrollAnimation({ threshold: 0.1 })

  return (
    <>
      <StickyCTA 
        price="$99/mo" 
        originalPrice="$399" 
        ctaLink="/checkout?course=empire-bundle"
        productName="Empire Pass All Access" 
      />

      {/* SEO: AI Content Declaration for Instagram Ignited Course Page */}
      <AIContentDeclaration
        title="Instagram Ignited: 0 to 500K Followers System - Complete Instagram Growth Course"
        description="Master Instagram growth with proven strategies that built 10M+ followers for students. Learn viral content, algorithm domination, monetization, and scaling from 0 to 500K followers."
        contentType="course"
        primaryTopic="Instagram Growth & Monetization Training"
        keywords={[
          'Instagram growth',
          'Instagram marketing',
          'social media marketing',
          'Instagram algorithm',
          'viral content',
          'Instagram monetization',
          'content creation',
          'Instagram reels',
          'engagement strategies',
          'Instagram followers',
          'social media strategy',
          'influencer marketing',
          'Instagram course',
          'brand partnerships',
          'creator economy'
        ]}
        author="Anyro"
        datePublished="2024-01-01"
        dateModified="2025-10-31"
        readingTime={15}
        isAccessibleForFree={false}
        expertiseLevel="beginner"
      />

      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />

      <div className="min-h-screen bg-dark relative selection:bg-red-500/30 selection:text-red-200">
      <h1 className="sr-only">
        Instagram Ignited: Complete Instagram Growth & Monetization Course
      </h1>
      {/* 1. Hero Section */}
      <div ref={heroAnimation.elementRef}>
        <HeroSection
          badge="INSTAGRAM EMPIRE BUILDER"
          badgeColor="bg-gradient-to-r from-red-600/20 to-orange-600/20 text-red-300 px-4 py-2 rounded-full border border-red-500/30 backdrop-blur-sm"
          title={<>Stop Wasting Time on <span className='text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400'>Dead Content</span>. Build a <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500'>500K+ Empire</span> That Pays You</>}
          description="2,000+ students went from invisible to influencer in 30 days. Stop guessing. Start dominating. This is the EXACT system that built 10M+ followers and $2.5M+ in revenue."
          ctaText="Start Your Journey"
          ctaLink="#pricing"
          socialProof={{
            images: [
              "https://ext.same-assets.com/1161517358/2822588328.webp",
              "https://ext.same-assets.com/1161517358/3376144705.webp",
              "https://ext.same-assets.com/1161517358/2657109700.webp"
            ],
            rating: 5,
            text: "6,000+ students transformed"
          }}
          stats={[
            { value: "10M+", label: "Followers Grown", color: "text-red-400" },
            { value: "$2.5M+", label: "Revenue Generated", color: "text-green-400" },
            { value: "250M+", label: "Views Created", color: "text-orange-400" }
          ]}
          isVisible={heroAnimation.isVisible}
        />
      </div>

      {/* SEO: Social Proof Component */}
      <div className="container mx-auto px-4 relative z-10">
        <SocialProof
          students={6000}
          revenue="$2.5M+"
          rating={4.9}
          reviews={2000}
          companies={50}
          showAll={true}
        />
      </div>

      {/* PROBLEM Section - The Gap */}
      <section className="section-spacing relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-red-900/10 to-transparent pointer-events-none" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div
            ref={problemAnimation.elementRef}
            className={`text-center mb-16 scroll-fade-up ${problemAnimation.isVisible ? 'visible' : ''}`}
          >
            <div className="inline-block bg-zinc-900/80 backdrop-blur-sm border border-red-500/30 rounded-full px-4 py-2 mb-6">
              <span className="text-red-400 text-sm font-bold uppercase tracking-wider flex items-center gap-2">
                <AlertTriangle className="w-4 h-4" />
                THE BRUTAL TRUTH
              </span>
            </div>
            <div className="text-3xl md:text-6xl font-black mb-6 text-white tracking-tight">
              <BlurIn
                word="Your Growth is Being Limited by"
                className="text-3xl md:text-6xl font-black text-white"
                duration={0.8}
              />
              <div className="mt-2">
                <WordRotate
                  words={["Instagram", "The Algorithm", "Your Competition", "This System"]}
                  className="text-3xl md:text-6xl font-black text-red-500"
                  duration={2500}
                />
              </div>
            </div>
            <p className="text-xl md:text-2xl text-zinc-400 mb-8 max-w-3xl mx-auto leading-relaxed font-medium">
              While your competitors are building million-dollar personal brands, you're struggling with inconsistent growth...
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-16">
            {[
              {
                icon: "chart-down",
                title: "Posting into the Void",
                description: "Grinding daily for 8-15 likes per post. It feels like shouting into an empty room."
              },
              {
                icon: "fire",
                title: "Competitors Winning",
                description: "Watching 'worse' creators hit 100K followers while you're stuck at 2,400."
              },
              {
                icon: "skull",
                title: "Algorithm Hell",
                description: "Every update kills your reach. You have zero control over your visibility."
              },
              {
                icon: "money-off",
                title: "Zero Revenue",
                description: "Missing out on the $10K-$50K monthly income streams your audience should generate."
              }
            ].map((problem, index) => (
              <div
                key={index}
                ref={problemCards.setElementRef(index)}
                className={`bg-zinc-900/50 border border-red-900/20 rounded-2xl p-6 hover:bg-red-900/10 hover:border-red-500/30 transition-all duration-300 hover-lift scroll-fade-up ${problemCards.visibleElements[index] ? `visible scroll-stagger-${Math.min(index + 1, 6)}` : ''}`}
              >
                <div className="mb-4 bg-red-500/10 w-12 h-12 rounded-xl flex items-center justify-center">
                  <PainPointIcon
                    type={problem.icon as any}
                    size={24}
                    className="text-red-500"
                    color="currentColor"
                  />
                </div>
                <h3 className="text-lg font-bold mb-2 text-white">{problem.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{problem.description}</p>
              </div>
            ))}
          </div>

          <div className={`text-center scroll-fade-up ${problemAnimation.isVisible ? 'visible scroll-stagger-6' : ''}`}>
            <div className="bg-zinc-950 border border-red-500/30 rounded-2xl p-8 max-w-4xl mx-auto shadow-2xl shadow-red-900/20">
               <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                The Painful Reality...
              </h3>
              <p className="text-lg text-zinc-400 mb-6">
                Every day you wait, your competitors get further ahead. Every month you stay stuck is <span className="text-red-400 font-bold">$5K-$20K in lost income</span>.
              </p>
              <div className="bg-red-500/10 border border-red-500/50 rounded-lg p-6 flex gap-4 items-start text-left">
                <XCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-lg font-bold text-red-400 mb-1">
                    You're not just losing followers... you're losing your dreams.
                  </p>
                  <p className="text-zinc-300 text-sm">
                    While others are quitting their jobs, traveling the world, and building empires... you're still stuck posting to crickets.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SOLUTION Section */}
      <section className="section-spacing bg-zinc-950 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-600/20 blur-[120px] rounded-full opacity-30 pointer-events-none" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div
            ref={solutionAnimation.elementRef}
            className={`text-center mb-16 scroll-fade-up ${solutionAnimation.isVisible ? 'visible' : ''}`}
          >
             <div className="inline-block bg-zinc-900/80 backdrop-blur-sm border border-orange-500/30 rounded-full px-4 py-2 mb-6">
              <span className="text-orange-400 text-sm font-bold uppercase tracking-wider flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                THE SOLUTION
              </span>
            </div>
            <div className="text-3xl md:text-6xl font-black mb-6 text-white tracking-tight">
              <BlurIn
                word="Instagram"
                className="text-3xl md:text-6xl font-black text-white"
                duration={0.8}
              />
              <span className="text-red-500 mx-3">
                <TypingAnimation
                  text="Ignited"
                  className="text-3xl md:text-6xl font-black text-red-500 inline"
                  duration={100}
                />
              </span>
              <div className="mt-2 text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">
                Changes Everything
              </div>
            </div>
            <p className="text-xl md:text-2xl text-zinc-400 mb-8 max-w-4xl mx-auto">
              The ONLY proven system that takes you from Instagram ghost to algorithm dominator in 90 days or less.
            </p>
          </div>

          <div className={`bg-zinc-900/50 border border-zinc-800 rounded-3xl p-8 md:p-12 mb-16 scroll-scale relative overflow-hidden ${solutionAnimation.isVisible ? 'visible scroll-stagger-2' : ''}`}>
            <div className="absolute inset-0 bg-gradient-to-br from-red-900/10 to-transparent pointer-events-none" />
            
            <div className="grid md:grid-cols-2 gap-12 relative z-10">
              <div className="space-y-8">
                <h3 className="text-2xl font-bold text-white mb-6">Why this system works:</h3>
                
                <div className="flex items-start gap-4">
                  <div className="bg-green-500/20 p-3 rounded-lg">
                    <Target className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-2">Grew from 0 to 500K+</h4>
                    <p className="text-zinc-400 text-sm">Starting with zero followers, this system built a massive, engaged audience that actually converts.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-green-500/20 p-3 rounded-lg">
                    <BarChart3 className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-2">Generated $2.5M+ Revenue</h4>
                    <p className="text-zinc-400 text-sm">This isn't just about followers - it's about building a real business that pays you monthly.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                   <div className="bg-green-500/20 p-3 rounded-lg">
                    <Flame className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-2">100M+ Views Created</h4>
                    <p className="text-zinc-400 text-sm">These viral content strategies consistently generate massive reach and engagement.</p>
                  </div>
                </div>
              </div>

              <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-8 flex flex-col justify-center">
                <div className="text-center mb-6">
                  <p className="text-zinc-400 text-sm uppercase tracking-wider mb-2">THE RESULT</p>
                  <h3 className="text-3xl font-bold text-white">Total Freedom</h3>
                </div>
                <div className="space-y-4">
                   <div className="flex items-center justify-between p-3 bg-zinc-900 rounded-lg border border-zinc-800">
                     <span className="text-zinc-300">Monthly Revenue</span>
                     <span className="text-green-400 font-mono font-bold">$50,000+</span>
                   </div>
                   <div className="flex items-center justify-between p-3 bg-zinc-900 rounded-lg border border-zinc-800">
                     <span className="text-zinc-300">Daily Work</span>
                     <span className="text-orange-400 font-mono font-bold">2 Hours</span>
                   </div>
                   <div className="flex items-center justify-between p-3 bg-zinc-900 rounded-lg border border-zinc-800">
                     <span className="text-zinc-300">Location</span>
                     <span className="text-red-400 font-mono font-bold">Anywhere</span>
                   </div>
                </div>
                <div className="mt-8">
                   <StandardCTA
                    text="Get The System"
                    href="#pricing"
                    variant="primary"
                    className="w-full justify-center"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Follower Growth Simulator */}
          <div className="mb-16">
            <FollowerGrowthSimulator />
          </div>
        </div>
      </section>

      {/* 90-DAY TRANSFORMATION JOURNEY Section */}
      <section className="section-spacing bg-black border-t border-zinc-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
             <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/30 rounded-full px-6 py-2 mb-6">
              <Zap className="w-5 h-5 text-purple-400" />
              <span className="text-purple-300 font-semibold">YOUR JOURNEY</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">
              From <span className="bg-gradient-to-r from-zinc-400 to-zinc-600 bg-clip-text text-transparent">Zero</span> to <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">10K+ Followers</span>
            </h2>
            <p className="text-xl text-zinc-400 max-w-3xl mx-auto">
              The aggressive growth roadmap 2,000+ students used to explode their Instagram following in 30 days.
            </p>
          </div>

          <div className="max-w-5xl mx-auto space-y-8 relative">
             {/* Vertical Line */}
             <div className="absolute left-8 md:left-12 top-8 bottom-8 w-0.5 bg-zinc-800 hidden md:block" />

            {[
              {
                phase: "Days 1-7",
                title: "Viral Foundation Blitz",
                description: "Your first Reel will hit 10K+ views in 48 hours using the Viral Hook Framework. Install the algorithm blueprint and optimize your profile.",
                outcomes: ["First Reel hits 10K+ views", "Create 20 viral-ready posts", "Convert 40%+ visitors"]
              },
              {
                phase: "Days 8-14",
                title: "Content Explosion",
                description: "Post 15 Reels, get 150K+ total views, gain your first 1,000 followers. Deploy the viral content system.",
                outcomes: ["150K+ total views", "500+ daily Story views", "Hit 1,000 followers"]
              },
              {
                phase: "Days 15-21",
                title: "Algorithmic Takeover",
                description: "Hit Explore 5+ times, collaborate with 3 creators, reach 5,000 followers. Watch your growth 5x.",
                outcomes: ["Hit Explore page 5+ times", "Collab with 3 creators", "Reach 5,000 followers"]
              },
              {
                phase: "Days 22-30",
                title: "Monetization Ignition",
                description: "Land your first $1K-$5K brand deal, cross 10K followers, enable monetization. Start earning real money.",
                outcomes: ["First $1K-$5K deal", "Cross 10K followers", "Enable monetization"]
              }
            ].map((phase, index) => (
              <div key={index} className="relative md:pl-32 pl-0">
                
                <div className="hidden md:flex absolute left-0 top-0 w-24 h-24 rounded-full bg-zinc-900 border-4 border-zinc-950 items-center justify-center z-10 shadow-xl">
                  <span className="text-2xl font-bold text-zinc-500">{index + 1}</span>
                </div>

                <div className="bg-zinc-900/40 backdrop-blur-sm border border-zinc-800/60 rounded-2xl p-8 hover:border-purple-500/30 transition-all duration-300 group">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-white group-hover:text-purple-400 transition-colors">{phase.title}</h3>
                    <span className="text-xs font-bold uppercase tracking-wider text-zinc-500 border border-zinc-800 px-3 py-1 rounded-full">{phase.phase}</span>
                  </div>
                  <p className="text-zinc-400 text-lg mb-6">{phase.description}</p>
                  <div className="grid sm:grid-cols-3 gap-4">
                    {phase.outcomes.map((outcome, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-zinc-300">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span>{outcome}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
             <StandardCTA
              text="Start Your Journey Today"
              href="#pricing"
              variant="primary"
              size="lg"
            />
          </div>
        </div>
      </section>
      
      {/* Ecosystem Graph */}
      <EcosystemGraph currentCourseId="instagram-ignited" />

      {/* PRICING & SCARCITY Section */}
      <section className="section-spacing bg-zinc-950 border-t border-zinc-800" id="pricing">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={pricingAnimation.elementRef}
            className={`text-center mb-16 scroll-fade-up ${pricingAnimation.isVisible ? 'visible' : ''}`}
          >
            <div className="inline-block bg-green-500/10 border border-green-500/30 rounded-full px-4 py-2 mb-6">
              <span className="text-green-400 text-sm font-bold uppercase tracking-wider">INSANE VALUE</span>
            </div>
            <h2 className="text-3xl md:text-6xl font-black mb-6 text-white">
              Choose Your Path
            </h2>
            <p className="text-xl text-zinc-400 mb-8 max-w-2xl mx-auto">
              Stop buying fragmented courses. Get the entire ecosystem.
            </p>
          </div>

          <div className={`max-w-5xl mx-auto grid md:grid-cols-2 gap-8 ${pricingAnimation.isVisible ? 'visible' : ''}`}>
             {/* Standard Option */}
            <div className="bg-zinc-900 rounded-3xl border border-zinc-800 p-8 flex flex-col relative overflow-hidden">
               <div className="mb-8">
                <h3 className="text-xl font-bold text-zinc-400 mb-2">Single Course</h3>
                <h4 className="text-3xl font-bold text-white mb-4">Instagram Ignited</h4>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-white">$399</span>
                  <span className="text-zinc-500">one-time</span>
                </div>
                <p className="text-zinc-400 text-sm mt-4">Lifetime access to Instagram Ignited only.</p>
              </div>
              <ul className="space-y-4 mb-8 flex-1">
                <li className="flex items-center gap-3 text-zinc-300">
                  <Check className="w-5 h-5 text-green-500" /> 10+ Modules
                </li>
                <li className="flex items-center gap-3 text-zinc-300">
                  <Check className="w-5 h-5 text-green-500" /> $8,879 in Bonuses
                </li>
                <li className="flex items-center gap-3 text-zinc-300">
                  <Check className="w-5 h-5 text-green-500" /> Lifetime Updates
                </li>
              </ul>
              <StandardCTA
                text="Buy Course Only"
                href="https://buy.polar.sh/polar_cl_VUiP4zHtlE9yZDStI4TRd0PvIE5Eho6A5VPWP2smv9n"
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
            Ready to Build Your Empire?
          </h2>
          <StandardCTA
             text="Join Instagram Ignited Now"
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
