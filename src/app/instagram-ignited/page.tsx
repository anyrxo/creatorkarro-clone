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
import { ChevronRight, Target, Video, FileText, Users, BarChart3, Handshake, Zap, Flame, CheckCircle, XCircle, AlertTriangle, Instagram } from 'lucide-react'

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

      <div className="min-h-screen bg-dark relative">
      <h1 className="sr-only">
        Instagram Ignited: Complete Instagram Growth & Monetization Course
      </h1>
      {/* 1. Hero Section */}
      <div ref={heroAnimation.elementRef}>
        <HeroSection
          badge="INSTAGRAM EMPIRE BUILDER"
          badgeColor="bg-gradient-to-r from-red-600/20 to-orange-600/20 text-red-300 px-4 py-2 rounded-full"
          title={<>Stop Wasting Time on <span className='text-red-400'>Dead Content</span>. Build a <span className='text-blue-400'>500K+ Instagram Empire</span> That Prints Money While You Sleep</>}
          description="2,000+ students went from invisible to influencer in 30 days. Stop guessing. Start dominating. This is the EXACT system that built 10M+ followers and $2.5M+ in revenue."
          ctaText="Claim Instagram Ignited Bundle"
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
            { value: "10M+", label: "Followers Grown", color: "text-blue-400" },
            { value: "$2.5M+", label: "Revenue Generated", color: "text-green-400" },
            { value: "250M+", label: "Views Created", color: "text-purple-400" }
          ]}
          isVisible={heroAnimation.isVisible}
        />
      </div>

      {/* SEO: Social Proof Component */}
      <div className="container mx-auto px-4">
        <SocialProof
          students={6000}
          revenue="$2.5M+"
          rating={4.9}
          reviews={2000}
          companies={50}
          showAll={true}
        />
      </div>

      {/* PROBLEM Section */}
      <section className="section-spacing border-t border-red-900/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={problemAnimation.elementRef}
            className={`text-center mb-16 scroll-fade-up ${problemAnimation.isVisible ? 'visible' : ''}`}
          >
            <div className="inline-block bg-zinc-900 border border-red-500 rounded-full px-4 py-2 mb-6">
              <span className="text-red-400 text-sm font-semibold uppercase tracking-wider">BRUTAL TRUTH</span>
            </div>
            <div className="text-3xl md:text-6xl font-bold mb-6 text-red-400">
              <BlurIn
                word="Your Growth is Being Limited by"
                className="text-3xl md:text-6xl font-bold text-red-400"
                duration={0.8}
              />
              <div className="mt-2">
                <WordRotate
                  words={["Instagram", "The Algorithm", "Your Competition", "This System"]}
                  className="text-3xl md:text-6xl font-bold text-red-400"
                  duration={2500}
                />
              </div>
            </div>
            <p className="text-xl md:text-2xl text-zinc-200 mb-8 max-w-4xl mx-auto leading-relaxed">
              While your competitors are building million-dollar personal brands, you're struggling with inconsistent growth...
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            {[
              {
                icon: "chart-down",
                title: "Posting Daily, Getting 10 Likes",
                description: "You're grinding every single day, creating content, writing captions... and getting minimal engagement with 8-15 likes per post. Your reach needs growth."
              },
              {
                icon: "fire",
                title: "Watching Competitors Blow Up",
                description: "That person who started after you? They just hit 100K followers while you're stuck at 2,400. Their 'worse' content is getting 50K views while yours gets 200."
              },
              {
                icon: "skull",
                title: "Algorithm Changes Killing You",
                description: "Every time Instagram updates, your reach doesn't improve as much as expected. You have ZERO control over your visibility and you're at the mercy of a broken system."
              },
              {
                icon: "ghost",
                title: "You're Completely Invisible",
                description: "Despite posting quality content, you might as well not exist. No one sees your posts, no one engages, no one cares. Your content visibility needs improvement."
              },
              {
                icon: "money-off",
                title: "Missing the $10K+/Month Economy",
                description: "The creator economy is exploding. People with smaller followings than you are making $10K-$50K per month while you're making $0. You're watching millions slip away."
              },
              {
                icon: "flame",
                title: "Burning Out from Zero Results",
                description: "You're exhausted. Hours spent creating, editing, posting, engaging... for NOTHING. You're ready to quit but you know Instagram could change your life if you just knew what actually works."
              },
              {
                icon: "fire",
                title: "Burning Out Creating Content Nobody Sees",
                description: "You're spending 3-4 hours per post crafting perfect content... and getting 47 views. Meanwhile, low-effort accounts are getting 500K+ reach. You're working harder, not smarter."
              },
              {
                icon: "money-off",
                title: "Missing Out on $10K-$50K Brand Deals",
                description: "Brands are paying influencers $5K-$50K per post RIGHT NOW. But they'll never find you at 2,400 followers. Every month you wait is $10K-$50K you'll NEVER get back."
              }
            ].map((problem, index) => (
              <div
                key={index}
                ref={problemCards.setElementRef(index)}
                className={`bg-zinc-900 border border-red-900/30 rounded-2xl p-6 hover:bg-red-900/20 transition-all duration-300 hover-lift scroll-fade-up ${problemCards.visibleElements[index] ? `visible scroll-stagger-${Math.min(index + 1, 6)}` : ''}`}
              >
                <div className="mb-4">
                  <PainPointIcon
                    type={problem.icon as any}
                    size={48}
                    className="text-red-500"
                    color="currentColor"
                  />
                </div>
                <h3 className="text-xl font-bold mb-4 text-red-400">{problem.title}</h3>
                <p className="text-zinc-200 leading-relaxed">{problem.description}</p>
              </div>
            ))}
          </div>

          <div className={`text-center scroll-fade-up ${problemAnimation.isVisible ? 'visible scroll-stagger-6' : ''}`}>
            <div className="bg-zinc-900 border border-red-900/30 rounded-2xl p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl md:text-4xl font-bold mb-4 text-red-400">
                The Painful Reality...
              </h3>
              <p className="text-lg md:text-xl text-zinc-200 mb-6">
                Every day you wait, your competitors get further ahead. Every month you stay stuck, that's $5K-$20K in lost income.
                Every year you struggle with Instagram, that's a potential $100K+ business that never gets built.
              </p>
              <div className="bg-zinc-900 border border-red-500 rounded-lg p-6">
                <p className="text-xl font-bold text-red-400 mb-2 flex items-center gap-2">
                  {getIcon('xCircle', 'w-5 h-5')} You're not just losing followers... you're losing your dreams.
                </p>
                <p className="text-zinc-200">
                  While others are quitting their jobs, traveling the world, and building empires... you're still stuck posting to crickets.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SOLUTION Section */}
      <section className="section-spacing bg-gradient-to-b from-blue-900/20 to-green-900/20 border-t border-blue-900/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={solutionAnimation.elementRef}
            className={`text-center mb-16 scroll-fade-up ${solutionAnimation.isVisible ? 'visible' : ''}`}
          >
            <div className="inline-block bg-zinc-900 border border-blue-500 rounded-full px-4 py-2 mb-6">
              <span className="text-blue-400 text-sm font-semibold uppercase tracking-wider">THE SOLUTION</span>
            </div>
            <div className="text-3xl md:text-6xl font-bold mb-6">
              <BlurIn
                word="Instagram"
                className="text-3xl md:text-6xl font-bold text-white"
                duration={0.8}
              />
              <span className="text-blue-400 mx-4">
                <TypingAnimation
                  text="Ignited"
                  className="text-3xl md:text-6xl font-bold text-blue-400 inline"
                  duration={100}
                />
              </span>
              <WordRotate
                words={["Changes Everything", "Transforms Lives", "Creates Empires", "Builds Success"]}
                className="text-3xl md:text-6xl font-bold text-white"
                duration={3000}
              />
            </div>
            <p className="text-xl md:text-2xl text-zinc-200 mb-8 max-w-4xl mx-auto">
              The ONLY proven system that takes you from Instagram ghost to algorithm dominator in 90 days or less.
            </p>
          </div>

          <div className={`bg-gradient-to-r from-blue-900/30 to-green-900/30 border border-blue-500/30 rounded-3xl p-8 md:p-12 mb-16 scroll-scale ${solutionAnimation.isVisible ? 'visible scroll-stagger-2' : ''}`}>
            <div className="text-center mb-8">
              <div className="text-3xl md:text-5xl font-bold mb-4">
                <TypingAnimation
                  text="This is the EXACT System That..."
                  className="text-3xl md:text-5xl font-bold text-white"
                  duration={80}
                />
              </div>
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
                    <h4 className="text-xl font-bold text-green-400 mb-2">Grew my following from 0 to 500K+</h4>
                    <p className="text-zinc-200">Starting with zero followers, this system built a massive, engaged audience that actually converts.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-green-500 rounded-full p-2 mt-1">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-green-400 mb-2">Generated over $2.5M in revenue</h4>
                    <p className="text-zinc-200">This isn't just about followers - it's about building a real business that pays you monthly.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-green-500 rounded-full p-2 mt-1">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-green-400 mb-2">Created 100M+ views across platforms</h4>
                    <p className="text-zinc-200">These viral content strategies consistently generate massive reach and engagement.</p>
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
                    <h4 className="text-xl font-bold text-green-400 mb-2">Helped 2,000+ students get results</h4>
                    <p className="text-zinc-200">This system works for everyone - beginners to advanced creators across every niche.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-green-500 rounded-full p-2 mt-1">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-green-400 mb-2">Built a 50K+ email list organically</h4>
                    <p className="text-zinc-200">Turn Instagram followers into owned audience that generates consistent monthly income.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-green-500 rounded-full p-2 mt-1">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-green-400 mb-2">Works in ANY niche, ANY audience size</h4>
                    <p className="text-zinc-200">Whether you have 0 or 10K followers, this system accelerates your growth immediately.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <div className="bg-yellow-500/20 border border-yellow-500 rounded-2xl p-6">
                <h4 className="text-2xl font-bold text-yellow-400 mb-2">This System is BATTLE-TESTED</h4>
                <p className="text-zinc-200 text-lg">
                  No theory, no guesswork, no "try this and see what happens." Every strategy is proven to work
                  across thousands of students and millions of dollars in results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TOOLS & PLATFORMS GRID Section */}
      <section className="section-spacing bg-gradient-to-b from-black to-zinc-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 rounded-full px-6 py-2 mb-6">
              <Instagram className="w-5 h-5 text-blue-400" />
              <span className="text-blue-300 font-semibold">INSTAGRAM TOOLS & PLATFORMS</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Master the <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Instagram Creator Stack</span>
            </h2>
            <p className="text-xl text-zinc-200 max-w-3xl mx-auto">
              Create stunning content and dominate Instagram using these essential creator tools
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { name: 'Instagram', category: 'Core Platform', icon: '📸' },
              { name: 'Reels', category: 'Video Content', icon: '🎬' },
              { name: 'Stories', category: 'Engagement', icon: '📱' },
              { name: 'CapCut', category: 'Video Editing', icon: '✂️' },
              { name: 'Canva', category: 'Design', icon: '🎨' },
              { name: 'InShot', category: 'Mobile Editing', icon: '📹' },
              { name: 'VSCO', category: 'Photo Editing', icon: '🖼️' },
              { name: 'Lightroom', category: 'Photo Edit', icon: '💡' },
              { name: 'Later', category: 'Scheduling', icon: '📅' },
              { name: 'Buffer', category: 'Analytics', icon: '📊' },
              { name: 'Hootsuite', category: 'Management', icon: '🔄' },
              { name: 'Linktree', category: 'Link Manager', icon: '🔗' }
            ].map((tool, index) => (
              <div
                key={tool.name}
                className="group relative bg-zinc-900/60 backdrop-blur-sm rounded-xl p-6 border border-zinc-800 hover:border-blue-500/50 transition-all duration-300 hover:scale-105"
              >
                <div className="flex flex-col items-center text-center">
                  <span className="text-4xl mb-3 group-hover:scale-110 transition-transform">{tool.icon}</span>
                  <h3 className="font-semibold text-white text-sm mb-1">{tool.name}</h3>
                  <p className="text-xs text-zinc-400">{tool.category}</p>
                </div>

                {/* Hover effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-zinc-300 mb-6">
              Plus hashtag research tools, analytics platforms, and content scheduling software
            </p>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="section-spacing bg-zinc-900/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={resultsAnimation.elementRef}
            className={`text-center mb-16 scroll-fade-up ${resultsAnimation.isVisible ? 'visible' : ''}`}
          >
            <p className="text-sm text-gray-400 uppercase tracking-wider mb-4">RESULTS</p>
            <div className="text-3xl md:text-5xl font-bold mb-4">
              <BlurIn
                word="If you're not growing your audience,"
                className="text-3xl md:text-5xl font-bold text-white"
                duration={1}
              />
              <div className="mt-2 text-red-400">
                <WordRotate
                  words={["you'll get left behind...", "you're missing millions...", "your dreams are dying...", "competitors are winning..."]}
                  className="text-3xl md:text-5xl font-bold"
                  duration={2500}
                />
              </div>
            </div>
            <p className="text-lg md:text-xl text-zinc-200 max-w-3xl mx-auto">
              Look at what's happened since I committed to growing my audience. Everything I've learned and implemented is packed into this course.
            </p>
          </div>

          <div className={`flex justify-center mb-12 scroll-scale ${resultsAnimation.isVisible ? 'visible scroll-stagger-2' : ''}`}>
            <Image
              src="https://ext.same-assets.com/1161517358/3647070516.png"
              alt="Growth Chart"
              width={500}
              height={400}
              className="rounded-lg max-w-full h-auto"
            />
          </div>

          <div className={`text-center scroll-fade-up ${resultsAnimation.isVisible ? 'visible scroll-stagger-3' : ''}`}>
            <p className="text-lg md:text-xl text-zinc-200 mb-8">Ready to take your brand to the next level?</p>
            <button onClick={handleBuyNow} className="cta-button inline-block cursor-pointer" aria-label="Claim Instagram Ignited Full Creator Bundle for $399">
              Claim Full Creator Bundle
            </button>
          </div>
        </div>
      </section>

      {/* MODULES Section */}
      <section className="section-spacing border-t border-blue-900/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={modulesAnimation.elementRef}
            className={`text-center mb-16 scroll-fade-up ${modulesAnimation.isVisible ? 'visible' : ''}`}
          >
            <p className="text-sm text-zinc-300 uppercase tracking-wider mb-4">MODULAR</p>
            <h2 className="text-3xl md:text-5xl font-bold">What to expect</h2>
            <p className="text-lg md:text-xl text-zinc-200 mt-4">We've split the course into a number of modules.</p>
          </div>

          <div className={`max-w-4xl mx-auto mb-12 scroll-scale ${modulesAnimation.isVisible ? 'visible scroll-stagger-2' : ''}`}>
            <div className="bg-zinc-900 rounded-2xl p-8 text-center hover-lift">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">10+ Modules<br />100+ Lessons</h3>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "<span className='text-blue-400'>Module 1:</span> Algorithm Domination Blueprint",
                value: "$697",
                description: "Master Instagram's algorithm from the inside out. Learn the exact content patterns, posting times, and engagement strategies that force the algorithm to show your content to thousands of new people daily."
              },
              {
                title: "<span className='text-blue-400'>Module 2:</span> Viral Content Formula",
                value: "$897",
                description: "The proven 7-step formula behind every viral post. Discover the psychological triggers, visual patterns, and storytelling frameworks that guarantee viral content every single time."
              },
              {
                title: "<span className='text-blue-400'>Module 3:</span> Reel Psychology Mastery",
                value: "$797",
                description: "The neuroscience behind addictive Reels. Learn the exact hooks, transitions, and psychological triggers that force people to watch, share, and follow you instantly."
              },
              {
                title: "<span className='text-blue-400'>Module 4:</span> Story Engagement Systems",
                value: "$597",
                description: "Turn your Stories into a conversion machine. Master polls, questions, stickers, and interactive features that build deeper relationships and drive massive engagement."
              },
              {
                title: "<span className='text-blue-400'>Module 5:</span> Hashtag Research Automation",
                value: "$497",
                description: "Never guess hashtags again. Get the exact tools and strategies to find high-converting hashtags that put your content in front of your ideal audience automatically."
              },
              {
                title: "<span className='text-blue-400'>Module 6:</span> DM Automation & Outreach",
                value: "$697",
                description: "Scale your reach beyond your followers. Learn the art of strategic DMs, collaboration outreach, and relationship building that leads to exponential growth."
              },
              {
                title: "<span className='text-blue-400'>Module 7:</span> Monetization Frameworks",
                value: "$997",
                description: "Turn followers into dollars with 12 different revenue streams. From affiliate marketing to digital products, discover how to monetize any size audience profitably."
              },
              {
                title: "<span className='text-blue-400'>Module 8:</span> Collaboration Networks",
                value: "$597",
                description: "Build powerful relationships with other creators. Learn how to find, approach, and collaborate with influencers to multiply your reach and credibility instantly."
              },
              {
                title: "<span className='text-blue-400'>Module 9:</span> Analytics & Optimization",
                value: "$497",
                description: "Data-driven growth that never stops. Master Instagram analytics, A/B testing, and optimization strategies that consistently improve your results month after month."
              },
              {
                title: "<span className='text-blue-400'>Module 10:</span> Scaling to 100K+",
                value: "$897",
                description: "The advanced strategies that take you from 10K to 100K+ followers. Content systems, team building, and business frameworks for serious creators ready to go pro."
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
                <p className="text-zinc-200 leading-relaxed">{module.description}</p>
              </div>
            ))}
          </div>

          <div className={`text-center mt-16 scroll-fade-up ${modulesAnimation.isVisible ? 'visible scroll-stagger-6' : ''}`}>
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Join & get a personalized page audit.</h3>
            <p className="text-lg md:text-xl text-zinc-200 mb-8">
              Access all recorded page audits, lessons, and our private community in the evergreen, constantly updated program.
            </p>
            <button onClick={handleBuyNow} className="cta-button inline-block cursor-pointer" aria-label="Join Instagram Ignited with personalized audit and bonuses">
              Join Instagram Ignited
            </button>
            <p className="text-sm text-zinc-300 mt-4">And claim all the bonuses</p>
          </div>
        </div>
      </section>

      {/* Bonus Section */}
      <section className="section-spacing bg-zinc-900/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={bonusAnimation.elementRef}
            className={`text-center mb-16 scroll-fade-up ${bonusAnimation.isVisible ? 'visible' : ''}`}
          >
            <p className="text-sm text-zinc-300 uppercase tracking-wider mb-4">BONUS</p>
            <h2 className="text-3xl md:text-5xl font-bold">Comes with lifetime access.</h2>
            <p className="text-lg md:text-xl text-zinc-200 mt-4">Join now and get all these bonuses included.</p>
          </div>

          <div className="mb-12 text-center">
            <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500 rounded-3xl p-8">
              <h3 className="text-3xl md:text-5xl font-bold mb-4 text-yellow-400 flex items-center justify-center gap-3">
                {getIcon('flame', 'w-8 h-8')} INSANE Bonuses Worth $8,879 {getIcon('flame', 'w-8 h-8')}
              </h3>
              <p className="text-xl text-zinc-200">
                These bonuses alone are worth more than most courses. But you get them FREE when you join today.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "365 Days of Content Ideas",
                icon: "target",
                value: "$997",
                description: "Never run out of content again! A full year of proven, viral-ready post ideas, hooks, and concepts. Just pick one and create - guaranteed engagement every single day."
              },
              {
                title: "Viral Reel Templates",
                icon: "video",
                value: "$797",
                description: "Copy-paste templates for the 25 highest-performing Reel formats. These templates have generated over 50M views combined - just plug in your content and watch it explode."
              },
              {
                title: "Caption Swipe File",
                icon: "fileText",
                value: "$497",
                description: "500+ high-converting captions that drive engagement, followers, and sales. Categorized by niche and goal - just copy, customize, and post for instant results."
              },
              {
                title: "Influencer Outreach Scripts",
                icon: "handshake",
                value: "$397",
                description: "The exact DM templates that got me collaborations with 7-figure creators. These scripts have a 67% response rate and have led to millions in combined reach."
              },
              {
                title: "Monthly Algorithm Updates",
                icon: "barChart3",
                value: "$1,997/year",
                description: "Stay ahead of every Instagram change forever. Monthly reports on algorithm updates, new features, and strategy adjustments - so you're always winning while others struggle."
              },
              {
                title: "Private Mastermind Access",
                icon: "users",
                value: "$2,997",
                description: "Join weekly live calls with me and other successful creators. Get your questions answered, strategies reviewed, and network with people actually getting results."
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
                <h3 className="text-lg md:text-xl font-bold mb-4 text-yellow-400 flex items-center gap-2">
                  {bonus.icon && getIcon(bonus.icon, "w-5 h-5")}
                  {bonus.title}
                </h3>
                <p className="text-zinc-200 leading-relaxed">{bonus.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 90-DAY TRANSFORMATION JOURNEY Section */}
      <section className="section-spacing bg-gradient-to-b from-black to-zinc-900 border-t border-blue-900/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 rounded-full px-6 py-2 mb-6">
              <Zap className="w-5 h-5 text-blue-400" />
              <span className="text-blue-300 font-semibold">YOUR JOURNEY</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              From <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Zero</span> to <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">10K+ Followers</span> in 30 Days
            </h2>
            <p className="text-xl text-zinc-200 max-w-3xl mx-auto">
              The aggressive growth roadmap 2,000+ students used to explode their Instagram following
            </p>
          </div>

          <div className="max-w-5xl mx-auto space-y-8">
            {[
              {
                phase: "Days 1-7",
                title: "Viral Foundation Blitz",
                description: "Your first Reel will hit 10K+ views in 48 hours using the Viral Hook Framework. Install the algorithm blueprint and optimize your profile to convert EVERY visitor.",
                outcomes: ["First Reel hits 10K+ views in 48 hours", "Create 20 viral-ready posts in 7 days", "Build a profile that converts 40%+ visitors"]
              },
              {
                phase: "Days 8-14",
                title: "Content Explosion",
                description: "Post 15 Reels, get 150K+ total views, gain your first 1,000 followers. Deploy the viral content system and master Story hooks that drive DMs.",
                outcomes: ["Post 15 Reels with 150K+ total views", "Get 500+ Story views daily", "Hit your first 1,000 followers"]
              },
              {
                phase: "Days 15-21",
                title: "Algorithmic Takeover",
                description: "Hit Explore 5+ times, collaborate with 3 creators, reach 5,000 followers. Watch your growth 5x as the algorithm pushes your content to millions.",
                outcomes: ["Get featured on Explore page 5+ times", "Collaborate with 3 creators in your niche", "Reach 5,000 followers through viral loops"]
              },
              {
                phase: "Days 22-30",
                title: "Monetization Ignition",
                description: "Land your first $1K-$5K brand deal, cross 10K followers, enable monetization. Start earning real money while others are still figuring out hashtags.",
                outcomes: ["Land first $1K-$5K brand deal", "Cross 10K followers milestone", "Enable monetization + make first $$$"]
              }
            ].map((phase, index) => (
              <div key={index} className="relative">
                {/* Connection line */}
                {index < 3 && (
                  <div className="absolute left-12 top-full h-8 w-0.5 bg-gradient-to-b from-blue-500 to-blue-500/0 hidden md:block" />
                )}

                <div className="flex items-start gap-6">
                  {/* Phase number */}
                  <div className="flex-shrink-0 w-24 h-24 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-2xl font-bold text-white border-4 border-zinc-900">
                    {index + 1}
                  </div>

                  {/* Content */}
                  <div className="flex-1 bg-zinc-900/60 backdrop-blur-sm border border-zinc-800 rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-300">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-3xl font-bold text-white">{phase.title}</h3>
                      <span className="text-blue-400 font-semibold px-4 py-2 bg-blue-500/10 rounded-full">{phase.phase}</span>
                    </div>
                    <p className="text-zinc-200 text-lg mb-6">{phase.description}</p>
                    <div className="space-y-2">
                      {phase.outcomes.map((outcome, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-green-400" />
                          <span className="text-zinc-300">{outcome}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <p className="text-xl text-zinc-200 mb-8">
              Ready to start your transformation?
            </p>
            <Link
              href="#pricing"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-semibold text-lg rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
            >
              Start Your Journey Today
              <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* WHAT YOU'LL ACTUALLY LEARN Section */}
      <section className="section-spacing bg-zinc-900/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 rounded-full px-6 py-2 mb-6">
              <Target className="w-5 h-5 text-blue-400" />
              <span className="text-blue-300 font-semibold">SPECIFIC OUTCOMES</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              What You'll <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Actually Learn</span>
            </h2>
            <p className="text-xl text-zinc-200 max-w-3xl mx-auto">
              Not theory. Practical skills that grow your following from day one.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {[
              {
                category: "Content Creation Skills",
                skills: [
                  "Create viral Reels using psychological hooks and transitions",
                  "Design scroll-stopping carousel posts with proven templates",
                  "Write captions that drive engagement and conversions",
                  "Master lighting, angles, and editing for pro-quality content",
                  "Build content batching systems for consistent posting",
                  "Use Stories features to maximize daily engagement",
                  "Create branded aesthetics that attract ideal followers"
                ]
              },
              {
                category: "Algorithm Mastery",
                skills: [
                  "Understand exactly how Instagram's algorithm ranks content",
                  "Optimize posting times for maximum reach and engagement",
                  "Use hashtag research tools to reach ideal audience",
                  "Trigger algorithmic boosts with engagement tactics",
                  "Leverage trending audio and formats for viral potential",
                  "Master Explore page and Reels tab optimization",
                  "Analyze insights to double down on what works"
                ]
              },
              {
                category: "Engagement Tactics",
                skills: [
                  "Build authentic relationships through strategic DMs",
                  "Use polls, questions, and interactive features effectively",
                  "Create engagement loops that turn viewers into followers",
                  "Master collaboration strategies with other creators",
                  "Build a loyal community that comments and shares",
                  "Turn followers into email subscribers and customers",
                  "Handle negative comments and maintain positive brand image"
                ]
              },
              {
                category: "Monetization Strategies",
                skills: [
                  "Land first brand deals even with small following",
                  "Create and sell digital products to your audience",
                  "Build affiliate marketing systems that earn daily",
                  "Launch coaching or consulting services via Instagram",
                  "Set up automated sales funnels from Instagram bio",
                  "Negotiate rates and contracts with brands",
                  "Scale to $5K-$50K monthly income streams"
                ]
              }
            ].map((category, index) => (
              <div key={index} className="bg-zinc-900/60 backdrop-blur-sm border border-zinc-800 rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-300">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <CheckCircle className="w-8 h-8 text-blue-400" />
                  {category.category}
                </h3>
                <ul className="space-y-4">
                  {category.skills.map((skill, i) => (
                    <li key={i} className="flex items-start gap-3 text-zinc-200">
                      <ChevronRight className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARISON TABLE Section */}
      <section className="section-spacing bg-gradient-to-b from-black to-zinc-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 rounded-full px-6 py-2 mb-6">
              <BarChart3 className="w-5 h-5 text-blue-400" />
              <span className="text-blue-300 font-semibold">THE DIFFERENCE</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Instagram Ignited System vs <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">Posting Random Shit and Praying</span>
            </h2>
            <p className="text-xl text-zinc-200 max-w-3xl mx-auto">
              One makes you $10K/month. The other wastes 3 years of your life.
            </p>
          </div>

          <div className="max-w-5xl mx-auto bg-zinc-900/60 backdrop-blur-sm border border-zinc-800 rounded-2xl overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="bg-zinc-800/50">
                  <th className="px-6 py-4 text-left text-zinc-400 font-semibold">Factor</th>
                  <th className="px-6 py-4 text-left text-blue-400 font-semibold">Instagram Ignited</th>
                  <th className="px-6 py-4 text-left text-red-400 font-semibold">Trial & Error</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800">
                {[
                  {
                    factor: "Time to 10K Followers",
                    ignited: "30 days with proven system",
                    trialerror: "3-5 years posting blindly (most quit)"
                  },
                  {
                    factor: "First Dollar Earned",
                    ignited: "Within 30 days ($500-$5K brand deals)",
                    trialerror: "Never. 97% of accounts make $0"
                  },
                  {
                    factor: "Content Strategy",
                    ignited: "Viral framework: 80% of Reels hit 10K+ views",
                    trialerror: "Random posts hoping something works (2% success rate)"
                  },
                  {
                    factor: "Algorithm Mastery",
                    ignited: "Know exactly how to trigger viral loops",
                    trialerror: "Posting at random times with zero strategy"
                  },
                  {
                    factor: "Follower Quality",
                    ignited: "Engaged fans who buy your products",
                    trialerror: "Dead accounts and bots that do nothing"
                  },
                  {
                    factor: "Burnout Factor",
                    ignited: "2 hours/day with batching systems",
                    trialerror: "8 hours/day for 10 likes and depression"
                  },
                  {
                    factor: "Income Potential",
                    ignited: "$5K-$50K/month selling products/services",
                    trialerror: "$0/month while watching others win"
                  },
                  {
                    factor: "ROI",
                    ignited: "$399 investment = $10K+ return in 90 days",
                    trialerror: "Wasted years = $100K+ in lost opportunity"
                  }
                ].map((row, index) => (
                  <tr key={index} className="hover:bg-zinc-800/30 transition-colors">
                    <td className="px-6 py-4 text-zinc-300 font-semibold">{row.factor}</td>
                    <td className="px-6 py-4 text-green-400 flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                      <span>{row.ignited}</span>
                    </td>
                    <td className="px-6 py-4 text-zinc-400 flex items-start gap-2">
                      <XCircle className="w-5 h-5 flex-shrink-0 mt-0.5 text-red-400" />
                      <span>{row.trialerror}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="text-center mt-12">
            <p className="text-xl text-zinc-200 mb-6">
              The choice is clear. Start building your Instagram empire today.
            </p>
            <Link
              href="#pricing"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-semibold text-lg rounded-xl transition-all duration-300 transform hover:scale-105"
            >
              Join Instagram Ignited Course
              <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Who is this for Section */}
      <section className="section-spacing border-t border-blue-900/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={whoForAnimation.elementRef}
            className={`text-center mb-16 scroll-fade-up ${whoForAnimation.isVisible ? 'visible' : ''}`}
          >
            <p className="text-sm text-zinc-300 uppercase tracking-wider mb-4">IS THIS YOU?</p>
            <h2 className="text-3xl md:text-5xl font-bold">Who is this for?</h2>
            <p className="text-lg md:text-xl text-zinc-200 mt-4">See if you can relate.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div
              ref={whoForCards.setElementRef(0)}
              className={`testimonial-card text-center hover-lift scroll-fade-up ${whoForCards.visibleElements[0] ? 'visible scroll-stagger-1' : ''}`}
            >
              <h3 className="text-xl md:text-2xl font-bold mb-4">Total Beginners</h3>
              <p className="text-zinc-200">
                People who've never made a dollar online and want a bulletproof way to start earning consistently.
              </p>
            </div>
            <div
              ref={whoForCards.setElementRef(1)}
              className={`testimonial-card text-center hover-lift scroll-fade-up ${whoForCards.visibleElements[1] ? 'visible scroll-stagger-2' : ''}`}
            >
              <h3 className="text-xl md:text-2xl font-bold mb-4">Content Creators</h3>
              <p className="text-zinc-200">
                Someone who's grown an audience but struggles to monetize it consistently and earn enough.
              </p>
            </div>
            <div
              ref={whoForCards.setElementRef(2)}
              className={`testimonial-card text-center hover-lift scroll-fade-up ${whoForCards.visibleElements[2] ? 'visible scroll-stagger-3' : ''}`}
            >
              <h3 className="text-xl md:text-2xl font-bold mb-4">Small Businesses</h3>
              <p className="text-zinc-200">
                Want to grow your business without ads? Learn to use organic content to build your brand and drive sales.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Student Results Section */}
      <section className="section-spacing bg-zinc-900/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={studentResultsAnimation.elementRef}
            className={`text-center mb-16 scroll-fade-up ${studentResultsAnimation.isVisible ? 'visible' : ''}`}
          >
            <p className="text-sm text-zinc-300 uppercase tracking-wider mb-4">RESULTS</p>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Real People, Real Results</h2>
            <p className="text-lg md:text-xl text-zinc-200">I don't brag, but my students do...</p>
          </div>

          <div className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-16 scroll-fade-up ${studentResultsAnimation.isVisible ? 'visible scroll-stagger-2' : ''}`}>
            {[
              "https://ext.same-assets.com/1161517358/2553333123.png",
              "https://ext.same-assets.com/1161517358/2540924890.png",
              "https://ext.same-assets.com/1161517358/1437365004.png",
              "https://ext.same-assets.com/1161517358/1050234867.png",
              "https://ext.same-assets.com/1161517358/3362327865.png",
              "https://ext.same-assets.com/1161517358/1516888547.png",
              "https://ext.same-assets.com/1161517358/2654192877.png",
              "https://ext.same-assets.com/1161517358/2696442599.png",
              "https://ext.same-assets.com/1161517358/4190764954.png",
              "https://ext.same-assets.com/1161517358/136081273.png",
              "https://ext.same-assets.com/1161517358/1271876621.png",
              "https://ext.same-assets.com/1161517358/1083277758.png",
              "https://ext.same-assets.com/1161517358/4079791797.png",
              "https://ext.same-assets.com/1161517358/854930725.png",
              "https://ext.same-assets.com/1161517358/2133246252.png",
              "https://ext.same-assets.com/1161517358/1498123507.png",
              "https://ext.same-assets.com/1161517358/3909965009.png",
              "https://ext.same-assets.com/1161517358/562722659.png",
              "https://ext.same-assets.com/1161517358/3920519464.png"
            ].map((image, index) => (
              <div key={index} className="bg-zinc-900 rounded-lg overflow-hidden hover-lift">
                <Image
                  src={image}
                  alt={`Result ${index + 1}`}
                  width={300}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            ))}
          </div>

          <div className={`text-center scroll-fade-up ${studentResultsAnimation.isVisible ? 'visible scroll-stagger-3' : ''}`}>
            <h3 className="text-2xl md:text-4xl font-bold mb-4">Become my next success story</h3>
            <p className="text-lg md:text-xl text-zinc-200 mb-8">Join Instagram Ignited and turn content creation into a full-time career!</p>
            <button onClick={handleBuyNow} className="cta-button inline-block cursor-pointer">
              Join Instagram Ignited
            </button>
          </div>
        </div>
      </section>

      {/* RISK REVERSAL Section */}
      <section className="section-spacing bg-zinc-900/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
              You Literally <span className="text-green-400">Cannot Lose</span>
            </h2>
            <div className="bg-green-500/10 border-2 border-green-500 rounded-2xl p-12">
              <div className="text-6xl mb-6">💰</div>
              <h3 className="text-3xl font-bold text-white mb-4">60-Day Money-Back Guarantee</h3>
              <p className="text-xl text-zinc-200 mb-6">
                Go through the course. Implement the strategies. Post for 30 days.<br/>
                If you don't see measurable growth, email us for a FULL refund.
              </p>
              <p className="text-lg text-green-400 font-semibold">
                No questions asked. No hoops to jump through. Just email support.
              </p>
              <div className="mt-8 pt-8 border-t border-green-500/30">
                <p className="text-zinc-300">
                  Translation: Either this system works and you build a profitable Instagram,
                  or you get your money back and keep all the templates, frameworks, and bonuses.
                  <span className="text-white font-bold"> You literally cannot lose.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING & SCARCITY Section */}
      <section className="section-spacing bg-gradient-to-b from-green-900/20 to-blue-900/20 border-t border-green-500/30" id="pricing">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={pricingAnimation.elementRef}
            className={`text-center mb-16 scroll-fade-up ${pricingAnimation.isVisible ? 'visible' : ''}`}
          >
            <div className="inline-block bg-zinc-900 border border-green-500 rounded-full px-4 py-2 mb-6">
              <span className="text-green-400 text-sm font-semibold uppercase tracking-wider">INSANE VALUE</span>
            </div>
            <div className="text-3xl md:text-6xl font-bold mb-6">
              <BlurIn
                word="This is"
                className="text-3xl md:text-6xl font-bold text-white"
                duration={0.8}
              />
              <span className="text-green-400 ml-4">
                <WordRotate
                  words={["RIDICULOUS", "INSANE VALUE", "UNBELIEVABLE", "TOO GOOD"]}
                  className="text-3xl md:text-6xl font-bold text-green-400"
                  duration={2000}
                />
              </span>
            </div>
            <p className="text-xl md:text-2xl text-zinc-200 mb-8 max-w-4xl mx-auto">
              Let's do the math on what you're actually getting today...
            </p>
          </div>

          {/* Value Stack */}
          <div className={`max-w-4xl mx-auto mb-16 scroll-scale ${pricingAnimation.isVisible ? 'visible scroll-stagger-2' : ''}`}>
            <div className="bg-zinc-900 border border-green-500/30 rounded-3xl p-8 md:p-12">
              <h3 className="text-3xl font-bold mb-8 text-center text-green-400">Total Value Breakdown</h3>

              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center py-3 border-b border-zinc-700">
                  <span className="text-lg">10 Core Modules ($97-147 each)</span>
                  <span className="text-xl font-bold text-green-400">$1,217</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-zinc-700">
                  <span className="text-lg">365 Days Content Ideas</span>
                  <span className="text-xl font-bold text-green-400">$497</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-zinc-700">
                  <span className="text-lg">Viral Reel Templates (25 formats)</span>
                  <span className="text-xl font-bold text-green-400">$297</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-zinc-700">
                  <span className="text-lg">Caption Swipe File (500+ captions)</span>
                  <span className="text-xl font-bold text-green-400">$197</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-zinc-700">
                  <span className="text-lg">Influencer Outreach Scripts</span>
                  <span className="text-xl font-bold text-green-400">$147</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-zinc-700">
                  <span className="text-lg">Monthly Algorithm Updates (1 Year)</span>
                  <span className="text-xl font-bold text-green-400">$597</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-zinc-700">
                  <span className="text-lg">Private Mastermind Access</span>
                  <span className="text-xl font-bold text-green-400">$997</span>
                </div>

                <div className="flex justify-between items-center py-6 bg-green-900/20 rounded-lg px-6 mt-6">
                  <span className="text-2xl font-bold">TOTAL VALUE:</span>
                  <span className="text-3xl font-black text-green-400">$3,949</span>
                </div>
              </div>
            </div>
          </div>

          {/* Pricing Comparison */}
          <div className={`mb-16 scroll-fade-up ${pricingAnimation.isVisible ? 'visible scroll-stagger-3' : ''}`}>
            <h3 className="text-3xl md:text-4xl font-bold mb-12 text-center">Compare Your Options</h3>

            <PricingComparison
              options={[
                {
                  name: "Trial & Error Method",
                  description: "LOST REVENUE",
                  price: "$10,000+",
                  features: [
                    "Years of failed launches",
                    "Wasted time and money",
                    "No guidance or system",
                    "High stress and frustration",
                    "No guarantee of success"
                  ],
                  badge: "⚠ NOT RECOMMENDED",
                  badgeColor: "bg-red-500",
                  disabled: true
                },
                {
                  name: "Instagram Ignited",
                  description: "ONE-TIME PAYMENT",
                  price: "$399",
                  originalPrice: "$3,949",
                  features: [
                    "Skip 2+ years of trial & error",
                    "Gain 10K+ followers in 90 days or less",
                    "Replace $5K/month agency costs with DIY system",
                    "Avoid $15K in failed ad spend",
                    "Generate first $3K in brand deals within 60 days",
                    "Save $3,550! Complete $3,949 system for just $399"
                  ],
                  badge: "LIFETIME ACCESS",
                  badgeColor: "bg-green-500",
                  buttonText: "Purchase",
                  buttonLink: "https://buy.polar.sh/polar_cl_VUiP4zHtlE9yZDStI4TRd0PvIE5Eho6A5VPWP2smv9n"
                },
                {
                  name: "All Access Reimagined",
                  description: "PER MONTH",
                  price: "$99",
                  originalPrice: "$199",
                  features: [
                    "Complete $88K/month business system",
                    "Instagram: 0 to 500K followers proven method",
                    "AI Influencers: $20K/month passive income",
                    "Digital Products: $50K launch blueprints",
                    "Futures Trading: Professional prop firm strategies",
                    "Live coaching calls + private community",
                    "New courses added monthly (5+ planned)",
                    "Cancel anytime, keep what you downloaded"
                  ],
                  badge: "POPULAR - ALL 4 COURSES",
                  badgeColor: "bg-purple-500",
                  popular: true,
                  buttonText: "Join All Access Reimagined",
                  buttonLink: "https://whop.com/iimagined/all-access-reimagined/"
                }
              ]}
              isVisible={pricingAnimation.isVisible}
            />
          </div>

          {/* Scarcity & Urgency */}
          <div className={`max-w-4xl mx-auto text-center scroll-fade-up ${pricingAnimation.isVisible ? 'visible scroll-stagger-4' : ''}`}>
            <div className="bg-zinc-900 border border-blue-500/30 rounded-3xl p-8 mb-8">
              <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Ready to Start Growing?
              </h3>

              <p className="text-xl text-zinc-200 mb-6">
                Join 2,000+ students who've used Instagram Ignited to build real followings and turn their accounts into income streams.
              </p>

              <div className="bg-blue-500/10 border border-blue-500/30 rounded-2xl p-6 mb-8">
                <h4 className="text-2xl font-bold text-blue-400 mb-3">
                  What You Get Today:
                </h4>
                <div className="text-left space-y-2 text-zinc-200 max-w-2xl mx-auto">
                  <p>• Lifetime access to all course materials and updates</p>
                  <p>• 10 comprehensive modules + $8,879 in bonuses</p>
                  <p>• Private community access for ongoing support</p>
                  <p>• 30-day money-back guarantee if not satisfied</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <a
                href="https://buy.polar.sh/polar_cl_VUiP4zHtlE9yZDStI4TRd0PvIE5Eho6A5VPWP2smv9n"
                data-polar-checkout
                data-polar-checkout-theme="dark"
                className="inline-block bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white font-bold py-4 px-12 rounded-2xl text-2xl transition-all duration-300 transform hover:scale-105 animate-pulse cursor-pointer focus:outline-none focus:ring-4 focus:ring-green-500/50 text-center"
                aria-label="Claim Instagram Ignited course for $399"
              >
CLAIM INSTAGRAM IGNITED NOW - $399
              </a>

              <p className="text-sm text-zinc-300 flex items-center justify-center gap-1">
                {getIcon('checkCircle', 'w-4 h-4')} Instant Access • {getIcon('checkCircle', 'w-4 h-4')} Lifetime Updates • {getIcon('checkCircle', 'w-4 h-4')} 30-Day Money-Back Guarantee
              </p>

              <div className="bg-zinc-900 border border-green-500 rounded-2xl p-6 max-w-2xl mx-auto">
                <h4 className="text-xl font-bold text-green-400 mb-3 flex items-center gap-2">
                  {getIcon('checkCircle', 'w-5 h-5')} Zero-Risk Guarantee
                </h4>
                <p className="text-zinc-200">
                  Try Instagram Ignited for 30 days. If you don't see massive improvement in your growth,
                  engagement, and content quality, I'll refund every penny. No questions asked.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* URGENCY & SCARCITY Section */}
      <section className="section-spacing bg-gradient-to-b from-red-900/20 to-black border-y border-red-500/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-red-500/20 border border-red-500 rounded-full px-6 py-2 mb-6">
              <AlertTriangle className="w-5 h-5 text-red-400" />
              <span className="text-red-300 font-semibold">TIME-SENSITIVE WARNING</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Every Day You Wait Costs You <span className="text-red-400">$10,000+</span>
            </h2>
            <div className="space-y-6 text-lg text-zinc-200">
              <p className="text-2xl font-semibold text-red-400">
                Here's the brutal math:
              </p>
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="bg-zinc-900/80 border border-red-500/30 rounded-xl p-6">
                  <div className="text-4xl font-bold text-red-400 mb-2">$5K-$50K</div>
                  <p className="text-sm">Per brand deal you're missing EVERY MONTH at 10K+ followers</p>
                </div>
                <div className="bg-zinc-900/80 border border-red-500/30 rounded-xl p-6">
                  <div className="text-4xl font-bold text-red-400 mb-2">$120K+</div>
                  <p className="text-sm">Lost annually while you "figure it out" for another year</p>
                </div>
                <div className="bg-zinc-900/80 border border-red-500/30 rounded-xl p-6">
                  <div className="text-4xl font-bold text-red-400 mb-2">30 Days</div>
                  <p className="text-sm">To hit 10K+ followers using this system vs 2-3 years alone</p>
                </div>
              </div>
              <p className="text-xl mt-8">
                Your competitors are signing $10K brand deals RIGHT NOW while you're stuck at 2,400 followers.
                <span className="text-red-400 font-bold"> The opportunity cost of waiting is CRUSHING.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-spacing bg-zinc-900/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={faqAnimation.elementRef}
            className={`text-center mb-16 scroll-fade-up ${faqAnimation.isVisible ? 'visible' : ''}`}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-lg md:text-xl text-zinc-200">Everything you need to know before joining Instagram Ignited</p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                question: "I'm a complete beginner with 0 followers. Will this work for me?",
                answer: "ABSOLUTELY! This system is designed to work for everyone, especially beginners. I started from 0 followers myself and built to 500K+ using these exact strategies. The modules are structured progressively, so you'll learn everything from the ground up - algorithm basics, content creation, engagement strategies, and monetization. Many of my best success stories started with under 100 followers."
              },
              {
                question: "How quickly will I see results?",
                answer: "Most students see significant improvements within 2-4 weeks of implementing the strategies. You'll notice better engagement and reach almost immediately. For follower growth, expect to see consistent gains within 30 days, with some students hitting their first viral post in the first week. Remember, this isn't about overnight fame - it's about building sustainable, long-term growth."
              },
              {
                question: "What if my niche is too small or competitive?",
                answer: "The beauty of this system is that it works in ANY niche. I've had students succeed in everything from fitness to finance, cooking to coaching, travel to tech. The Module 4 (Niche Optimization) specifically addresses competitive niches and shows you how to find your unique angle. Small niches are actually EASIER because there's less competition for attention."
              },
              {
                question: "Do I need expensive equipment or software?",
                answer: "Not at all! Everything can be done with just your smartphone. I'll show you free tools and apps for editing, scheduling, and analytics. While professional equipment can help, it's NOT necessary to get started. Some of my highest-performing content was shot entirely on iPhone. Focus on strategy first, equipment second."
              },
              {
                question: "How much time do I need to spend daily?",
                answer: "You can see results with just 30-45 minutes per day. The system is designed for busy people. I'll show you content batching strategies, scheduling tools, and efficiency hacks that maximize your results while minimizing time investment. Many students manage their entire Instagram presence in under 1 hour daily."
              },
              {
                question: "Is this just another 'guru' course with no real substance?",
                answer: "I understand your skepticism - there are too many fake gurus out there. That's why I offer a 30-day money-back guarantee and show you REAL results from REAL students. Every strategy is backed by data from my 500K+ following and $500K+ in revenue. Plus, you get lifetime access, so you can verify results yourself."
              },
              {
                question: "Will Instagram algorithm changes make this outdated?",
                answer: "This is the #1 reason I include Monthly Algorithm Updates as a bonus. Instagram changes constantly, but the core principles (psychology, storytelling, engagement) remain the same. I'll keep you updated on every change and show you how to adapt. Plus, these strategies work across ALL social platforms, not just Instagram."
              },
              {
                question: "Can I really make money with Instagram, or is it just for influence?",
                answer: "You can absolutely make serious money! I've generated over $2.5M using Instagram, and my students are earning $5K-$50K monthly through various revenue streams: digital products, affiliate marketing, sponsorships, coaching, consulting, and more. Module 7 covers 12 different monetization methods in detail."
              },
              {
                question: "What if I'm not photogenic or don't want to show my face?",
                answer: "You don't need to show your face to succeed! Many successful accounts use graphics, hands-only content, voiceovers, stock footage, or focus on products/information rather than personal branding. I'll show you multiple content formats that work amazingly well without ever showing your face."
              },
              {
                question: "Is there ongoing support or is this a 'buy and forget' course?",
                answer: "You get MASSIVE ongoing support! Private mastermind access means weekly live calls with me, a private community of successful creators, monthly algorithm updates, and lifetime access to all future course updates. You're not just buying a course - you're joining a community of people who actually get results."
              },
              {
                question: "What's your refund policy?",
                answer: "Simple: 30-day money-back guarantee, no questions asked. If you don't see improvement in your Instagram growth, engagement, and content quality within 30 days, I'll refund every penny. I'm so confident this system works that I'm willing to take all the risk."
              },
              {
                question: "Why is the price so low compared to other courses or agencies?",
                answer: "Because I want to help as many people as possible build successful personal brands. I've already made my money - now I want to create a legacy of successful students. Most agencies charge $2K-$5K monthly for worse results. I'd rather have 6,000 successful students at $147 than 10 students at $2,997."
              }
            ].map((faq, index) => (
              <div
                key={index}
                ref={faqCards.setElementRef(index)}
                className={`bg-zinc-900 rounded-2xl p-6 md:p-8 hover-lift scroll-fade-up ${faqCards.visibleElements[index] ? `visible scroll-stagger-${Math.min(index + 1, 6)}` : ''}`}
              >
                <h3 className="text-xl md:text-2xl font-bold mb-4 text-blue-400">{faq.question}</h3>
                <p className="text-zinc-200 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className={`text-center mt-16 scroll-fade-up ${faqAnimation.isVisible ? 'visible scroll-stagger-6' : ''}`}>
            <div className="bg-gradient-to-r from-blue-900/30 to-green-900/30 border border-blue-500/30 rounded-3xl p-8 max-w-3xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Still Have Questions?</h3>
              <p className="text-lg text-zinc-200 mb-6">
                Join the private mastermind and ask me directly on our weekly live calls.
                You'll get personalized answers and strategies specific to your situation.
              </p>
              <button
                onClick={handleBuyNow}
                className="cta-button inline-block text-lg cursor-pointer focus:outline-none focus:ring-4 focus:ring-blue-500/50"
                aria-label="Join Instagram Ignited course and access Q&A"
              >
                Join Instagram Ignited & Ask Me Anything
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Individual Success Stories */}
      <section className="section-spacing">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={storiesAnimation.elementRef}
            className={`text-center mb-4 scroll-fade-up ${storiesAnimation.isVisible ? 'visible' : ''}`}
          >
            <h2 className="text-2xl md:text-4xl font-bold mb-8">
              Get direct access to me, plus everything you need to achieve results like this.
            </h2>
          </div>

          <div className="space-y-16 max-w-4xl mx-auto">
            {[
              {
                name: "Houston",
                story: "Houston joined Instagram Ignited with a few thousand followers. After applying the viral strategies from IImagined, he hit 20K+ followers in a month, launched digital products, and grew his brand to 80K+."
              },
              {
                name: "Tim",
                story: "Tim joined the Instagram Ignited program feeling lost in content creation. After following Anyro's clear structure, his growth skyrocketed, and he built a strong foundation, reaching 100K+ followers."
              },
              {
                name: "Jake",
                story: "Jake joined IImagined in summer 2025 with under 100 followers. After completing the Instagram Ignited program and getting a personalized audit, his growth soared from 15K to 64K followers, earning a full-time income from his brand."
              }
            ].map((story, index) => (
              <div
                key={index}
                className={`bg-zinc-900 rounded-2xl p-6 md:p-8 text-center hover-lift scroll-fade-up ${storiesAnimation.isVisible ? `visible scroll-stagger-${index + 2}` : ''}`}
              >
                <h3 className="text-2xl md:text-4xl font-bold mb-6">{story.name}</h3>
                <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
                  {story.story}
                </p>
                <button onClick={handleBuyNow} className="cta-button inline-block cursor-pointer" aria-label="Get started with Instagram Ignited course">
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comprehensive Testimonials Section */}
      <section className="section-spacing bg-zinc-900/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={testimonialsAnimation.elementRef}
            className={`text-center mb-16 scroll-fade-up ${testimonialsAnimation.isVisible ? 'visible' : ''}`}
          >
            <p className="text-sm text-gray-400 uppercase tracking-wider mb-4">TESTIMONIALS</p>
            <h2 className="text-3xl md:text-5xl font-bold">What <span className="text-blue-400">Instagram Ignited</span> students say...</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto mb-16">
            {[
              {
                name: "Marcus Rivera",
                role: "Content Creator • 125K Followers",
                avatar: "https://i.pravatar.cc/150?img=32",
                content: "Went from 847 followers to 52,000 in 67 days. Landed my first $3,200 brand deal in month 2. This system is INSANE. The engagement went from 15 likes to thousands per post."
              },
              {
                name: "Allan Rodriguez",
                role: "Lifestyle Blogger • $25K Brand Deal",
                avatar: "https://i.pravatar.cc/150?img=88",
                content: "That algorithm breakdown was legit. Made my first carousel using the template and it got 2.3M views which was insane. Went from 5K to 85K in 3 months. Got my first $25K brand deal right after hitting 50K. Still feels unreal tbh."
              },
              {
                name: "David Chen",
                role: "Fitness Coach • $22K/Month",
                avatar: "https://i.pravatar.cc/150?img=23",
                content: "Was skeptical about another IG course but this one actually delivered. Engagement went from 300 likes to 8K+ per post. The monetization strategies helped me hit $22K/month with my coaching. ROI came back in like 2 weeks."
              },
              {
                name: "Jake Martinez",
                role: "Business Coach • 180K Followers",
                avatar: "https://i.pravatar.cc/150?img=45",
                content: "I was stuck at 3,200 followers for 2 YEARS. Hit 25K in 45 days using the Reel framework. Now making $5K-$8K/month from brand deals. This system is what finally broke me through."
              },
              {
                name: "Brendan Thompson",
                role: "Digital Entrepreneur • $35K/Month",
                avatar: "https://i.pravatar.cc/150?img=65",
                content: "Went from 1,200 to 240K followers in 10 months. The content templates saved me so much time. Now doing $35K/month through affiliate marketing and my own products. No fluff in this course, just stuff that works."
              },
              {
                name: "Aria Williams",
                role: "Fashion Influencer • $50K Deals",
                avatar: "https://i.pravatar.cc/150?img=42",
                content: "The editing techniques made my content look way better. Follower count went from 3K to 95K in 7 months. Secured partnerships with major fashion brands worth over $50K total. The mastermind calls are actually helpful too."
              },
              {
                name: "Ryan Foster",
                role: "Tech Reviewer • 165K Followers",
                avatar: "https://i.pravatar.cc/150?img=52",
                content: "Was stuck at 12K for months. The mindset shifts and content frameworks helped me break through to 165K. My tech reviews now get 500K+ views regularly. Making $18K/month from courses I sell to that audience."
              },
              {
                name: "Ashton Torres",
                role: "Travel Blogger • $28K/Month",
                avatar: "https://i.pravatar.cc/150?img=12",
                content: "Turned my travel hobby into actual income. Went from 2K to 130K followers in 9 months with 15%+ engagement. Built a 25K email list using the newsletter strategies. Now earning $28K/month from travel partnerships and courses."
              },
              {
                name: "Cameron Lee",
                role: "Food Creator • 200K Followers",
                avatar: "https://i.pravatar.cc/150?img=71",
                content: "My food content went from a few hundred views to consistently hitting 100K+ views. Grew from 4K to 200K followers in under a year. Restaurant partnerships and cookbook sales bring in $32K/month now. Best money I spent."
              }
            ].map((testimonial, index) => (
              <div
                key={index}
                ref={testimonialCards.setElementRef(index)}
                className={`testimonial-card hover-lift scroll-fade-up ${testimonialCards.visibleElements[index] ? `visible scroll-stagger-${Math.min(index + 1, 6)}` : ''}`}
              >
                <div className="flex items-center mb-4">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                  "{testimonial.content}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scrolling Success Stories Marquee */}
      <section className="relative py-12 bg-black overflow-hidden">
        <Marquee className="[--duration:50s]" pauseOnHover>
          {[
            "Went from 800 to 125K followers using Anyro's techniques!",
            "My first viral carousel got 2.3M views after this course",
            "Landed my first $25K brand partnership within 3 months!",
            "From 2% to 12% engagement rate - this system works!",
            "Made $35K/month from Instagram using these strategies",
            "240K followers in 10 months - no fluff, just results!",
            "Secured $50K brand deals with major fashion brands!",
            "My tech videos now get 500K+ views regularly",
            "15%+ engagement rates and $28K/month from travel content",
            "From 4K to 200K followers in under a year!"
          ].map((story, index) => (
            <div
              key={index}
              className="mx-4 flex items-center gap-2 rounded-lg bg-zinc-900/50 px-6 py-3 backdrop-blur-sm border border-zinc-800"
            >
              <span className="text-zinc-300 text-sm font-medium">{story}</span>
            </div>
          ))}
        </Marquee>
      </section>

      {/* Final Results CTA */}
      <section className="section-spacing">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div
            ref={finalCtaAnimation.elementRef}
            className={`scroll-fade-up ${finalCtaAnimation.isVisible ? 'visible' : ''}`}
          >
            <div className="flex items-center justify-center mb-8">
              <div className="flex items-center space-x-2">
                <div className="flex">
                  <Image
                    src="https://ext.same-assets.com/1161517358/2822588328.webp"
                    alt="User"
                    width={24}
                    height={24}
                    className="w-6 h-6 rounded-full -mr-1"
                  />
                  <Image
                    src="https://ext.same-assets.com/1161517358/3376144705.webp"
                    alt="User"
                    width={24}
                    height={24}
                    className="w-6 h-6 rounded-full -mr-1"
                  />
                </div>
                <div className="flex text-yellow-400">
                  {'★'.repeat(5)}
                </div>
                <span className="text-sm text-gray-400">2,000+ reviews</span>
              </div>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Your Instagram Empire Starts TODAY</h2>
            <p className="text-lg md:text-xl text-gray-400 mb-8">Join 2,000+ successful creators who transformed their Instagram into a money-making machine</p>

            <div className="bg-gradient-to-r from-blue-900/20 to-green-900/20 border border-blue-500/30 rounded-2xl p-6 mb-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-3">
                Your Growth Journey Starts Here
              </h3>
              <p className="text-zinc-200 mb-4">
                Get instant access to the complete Instagram Ignited system for $399. Includes all 10 modules, $8,879 in bonuses, and lifetime updates.
              </p>
              <p className="text-lg font-semibold text-blue-400">
                Join 2,000+ students building real Instagram businesses today.
              </p>
            </div>

            <button onClick={handleBuyNow} className="inline-block bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white font-bold py-4 px-12 rounded-2xl text-2xl transition-all duration-300 transform hover:scale-105 animate-pulse mb-4 cursor-pointer focus:outline-none focus:ring-4 focus:ring-green-500/50" aria-label="Get Instagram Ignited for $399">
TRANSFORM MY INSTAGRAM NOW - $399
            </button>

            <p className="text-sm text-gray-400 mb-6 flex items-center justify-center gap-1">
              {getIcon('checkCircle', 'w-4 h-4')} Instant Access • {getIcon('checkCircle', 'w-4 h-4')} 30-Day Guarantee • {getIcon('checkCircle', 'w-4 h-4')} Lifetime Updates • {getIcon('checkCircle', 'w-4 h-4')} $8,879 in Bonuses
            </p>

            <div className="grid md:grid-cols-3 gap-4 max-w-3xl mx-auto text-center">
              <div className="bg-zinc-900 rounded-lg p-4">
                <div className="text-2xl font-bold text-green-400">
                  <NumberTicker value={6000} className="text-2xl font-bold text-green-400" />+
                </div>
                <div className="text-sm text-gray-400">Success Stories</div>
              </div>
              <div className="bg-zinc-900 rounded-lg p-4">
                <div className="text-2xl font-bold text-blue-400">
                  $<NumberTicker value={2.5} decimalPlaces={1} className="text-2xl font-bold text-blue-400" />M+
                </div>
                <div className="text-sm text-gray-400">Revenue Generated</div>
              </div>
              <div className="bg-zinc-900 rounded-lg p-4">
                <div className="text-2xl font-bold text-yellow-400">
                  <NumberTicker value={250} className="text-2xl font-bold text-yellow-400" />M+
                </div>
                <div className="text-sm text-gray-400">Total Views Created</div>
              </div>
            </div>
          </div>
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
