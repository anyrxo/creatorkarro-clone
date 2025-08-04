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
import { ChevronRight } from 'lucide-react'

export default function InstagramIgnitedPage() {
  // Crypto checkout state
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false)

  // Product information for Instagram Ignited
  const product = {
    id: 'instagram-ignited',
    name: 'Instagram Ignited: 0 to 500K Followers',
    price: 147,
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
      "price": "147",
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
  const moduleCards = useScrollAnimations(10, { threshold: 0.1 })
  const bonusCards = useScrollAnimations(6, { threshold: 0.1 })
  const testimonialCards = useScrollAnimations(3, { threshold: 0.1 })
  const faqCards = useScrollAnimations(12, { threshold: 0.1 })
  const storiesAnimation = useScrollAnimation({ threshold: 0.1 })

  return (
    <>
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
      {/* 1. Hero Section */}
      <div ref={heroAnimation.elementRef}>
        <HeroSection
          badge="🔥 INSTAGRAM EMPIRE BUILDER 🔥"
          badgeColor="bg-gradient-to-r from-red-600/30 to-orange-600/30 text-red-300 border border-red-500/50"
          title="Your Complete <span className='text-blue-400'>System</span> to <span className='text-blue-400'>Grow an Audience</span> and Turn It Into <span className='text-blue-400'>Income</span>"
          description="The ONLY proven system that takes you from Instagram ghost to algorithm dominator in 90 days or less. Now includes Digital Product Academy and Viral Carousels Mastery in one bundle."
          ctaText="🚀 Claim Instagram Ignited Bundle"
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
                word="You're Getting DESTROYED by"
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
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              While your competitors are building million-dollar personal brands, you're stuck in Instagram hell...
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            {[
              {
                icon: "chart-down",
                title: "Posting Daily, Getting 10 Likes",
                description: "You're grinding every single day, creating content, writing captions... and getting the same pathetic 8-15 likes from your mom and closest friends. Your reach is DEAD."
              },
              {
                icon: "fire",
                title: "Watching Competitors Blow Up",
                description: "That person who started after you? They just hit 100K followers while you're stuck at 2,400. Their 'worse' content is getting 50K views while yours gets 200."
              },
              {
                icon: "skull",
                title: "Algorithm Changes Killing You",
                description: "Every time Instagram updates, your already terrible reach gets even worse. You have ZERO control over your visibility and you're at the mercy of a broken system."
              },
              {
                icon: "ghost",
                title: "You're Completely Invisible",
                description: "Despite posting quality content, you might as well not exist. No one sees your posts, no one engages, no one cares. You're screaming into the void."
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
                <p className="text-gray-300 leading-relaxed">{problem.description}</p>
              </div>
            ))}
          </div>

          <div className={`text-center scroll-fade-up ${problemAnimation.isVisible ? 'visible scroll-stagger-6' : ''}`}>
            <div className="bg-zinc-900 border border-red-900/30 rounded-2xl p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl md:text-4xl font-bold mb-4 text-red-400">
                The Painful Reality...
              </h3>
              <p className="text-lg md:text-xl text-gray-300 mb-6">
                Every day you wait, your competitors get further ahead. Every month you stay stuck, that's $5K-$20K in lost income. 
                Every year you struggle with Instagram, that's a potential $100K+ business that never gets built.
              </p>
              <div className="bg-zinc-900 border border-red-500 rounded-lg p-6">
                <p className="text-xl font-bold text-red-400 mb-2">
                  💔 You're not just losing followers... you're losing your dreams.
                </p>
                <p className="text-gray-300">
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
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
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
                    <p className="text-gray-300">Starting with zero followers, this system built a massive, engaged audience that actually converts.</p>
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
                    <p className="text-gray-300">This isn't just about followers - it's about building a real business that pays you monthly.</p>
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
                    <p className="text-gray-300">These viral content strategies consistently generate massive reach and engagement.</p>
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
                    <p className="text-gray-300">This system works for everyone - beginners to advanced creators across every niche.</p>
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
                    <p className="text-gray-300">Turn Instagram followers into owned audience that generates consistent monthly income.</p>
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
                    <p className="text-gray-300">Whether you have 0 or 10K followers, this system accelerates your growth immediately.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <div className="bg-yellow-500/20 border border-yellow-500 rounded-2xl p-6">
                <h4 className="text-2xl font-bold text-yellow-400 mb-2">⚡ This System is BATTLE-TESTED</h4>
                <p className="text-gray-300 text-lg">
                  No theory, no guesswork, no "try this and see what happens." Every strategy is proven to work 
                  across thousands of students and millions of dollars in results.
                </p>
              </div>
            </div>
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
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
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
            <p className="text-lg md:text-xl text-gray-400 mb-8">Ready to take your brand to the next level?</p>
            <button onClick={handleBuyNow} className="cta-button inline-block cursor-pointer">
              Claim Full Creator Bundle
            </button>
          </div>
        </div>
      </section>

      {/* Instagram Content Tools Section */}
      <section className="py-16 bg-gradient-to-b from-zinc-900/30 to-black border-t border-zinc-700/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Master the <span className="text-blue-400">Instagram Creator Stack</span>
            </h2>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
              Learn to create, grow, and monetize with the same tools successful creators use
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { platform: 'instagram', name: 'Instagram', category: 'Core Platform' },
              { platform: 'tiktok', name: 'TikTok', category: 'Content Creation' },
              { platform: 'youtube', name: 'YouTube', category: 'Long-form Content' },
              { platform: 'facebook', name: 'Facebook', category: 'Cross-posting' },
              { platform: 'linkedin', name: 'LinkedIn', category: 'Professional' },
              { platform: 'beehiiv', name: 'Beehiiv', category: 'Email Marketing' },
              { platform: 'fanvue', name: 'Fanvue', category: 'Monetization' },
              { platform: 'loom', name: 'Loom', category: 'Video Content' }
            ].map((tool, index) => (
              <div
                key={tool.platform}
                className="group relative bg-zinc-800/50 backdrop-blur-sm rounded-xl p-4 border border-zinc-700/50 hover:border-blue-500/50 transition-all duration-300 hover:scale-105"
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
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-zinc-400 mb-6">
              Plus content creation tools, analytics platforms, and scheduling software
            </p>
            <button onClick={handleBuyNow} className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors cursor-pointer">
              <span>Master All Platforms</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Who is this for Section */}
      <section className="section-spacing">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={whoForAnimation.elementRef}
            className={`text-center mb-16 scroll-fade-up ${whoForAnimation.isVisible ? 'visible' : ''}`}
          >
            <p className="text-sm text-gray-400 uppercase tracking-wider mb-4">IS THIS YOU?</p>
            <h2 className="text-3xl md:text-5xl font-bold">Who is this for?</h2>
            <p className="text-lg md:text-xl text-gray-400 mt-4">See if you can relate.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div
              ref={whoForCards.setElementRef(0)}
              className={`testimonial-card text-center hover-lift scroll-fade-up ${whoForCards.visibleElements[0] ? 'visible scroll-stagger-1' : ''}`}
            >
              <h3 className="text-xl md:text-2xl font-bold mb-4">Total Beginners</h3>
              <p className="text-gray-400">
                People who've never made a dollar online and want a bulletproof way to start earning consistently.
              </p>
            </div>
            <div
              ref={whoForCards.setElementRef(1)}
              className={`testimonial-card text-center hover-lift scroll-fade-up ${whoForCards.visibleElements[1] ? 'visible scroll-stagger-2' : ''}`}
            >
              <h3 className="text-xl md:text-2xl font-bold mb-4">Content Creators</h3>
              <p className="text-gray-400">
                Someone who's grown an audience but struggles to monetize it consistently and earn enough.
              </p>
            </div>
            <div
              ref={whoForCards.setElementRef(2)}
              className={`testimonial-card text-center hover-lift scroll-fade-up ${whoForCards.visibleElements[2] ? 'visible scroll-stagger-3' : ''}`}
            >
              <h3 className="text-xl md:text-2xl font-bold mb-4">Small Businesses</h3>
              <p className="text-gray-400">
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
            <p className="text-sm text-gray-400 uppercase tracking-wider mb-4">RESULTS</p>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Real People, Real Results</h2>
            <p className="text-lg md:text-xl text-gray-400">I don't brag, but my students do...</p>
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
            <p className="text-lg md:text-xl text-gray-400 mb-8">Join IImagined and turn content creation into a full-time career!</p>
            <button onClick={handleBuyNow} className="cta-button inline-block cursor-pointer">
              Join IImagined 4.0
            </button>
          </div>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="section-spacing">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={modulesAnimation.elementRef}
            className={`text-center mb-16 scroll-fade-up ${modulesAnimation.isVisible ? 'visible' : ''}`}
          >
            <p className="text-sm text-gray-400 uppercase tracking-wider mb-4">MODULAR</p>
            <h2 className="text-3xl md:text-5xl font-bold">What to expect</h2>
            <p className="text-lg md:text-xl text-gray-400 mt-4">We've split the course into a number of modules.</p>
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
                <p className="text-gray-400 leading-relaxed">{module.description}</p>
              </div>
            ))}
          </div>

          <div className={`text-center mt-16 scroll-fade-up ${modulesAnimation.isVisible ? 'visible scroll-stagger-6' : ''}`}>
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Join & get a personalized page audit.</h3>
            <p className="text-lg md:text-xl text-gray-400 mb-8">
              Access all recorded page audits, lessons, and our private community in the evergreen, constantly updated program.
            </p>
            <button onClick={handleBuyNow} className="cta-button inline-block cursor-pointer">
              Join IImagined 4.0
            </button>
            <p className="text-sm text-gray-400 mt-4">And claim all the bonuses</p>
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
            <p className="text-sm text-gray-400 uppercase tracking-wider mb-4">BONUS</p>
            <h2 className="text-3xl md:text-5xl font-bold">Comes with lifetime access.</h2>
            <p className="text-lg md:text-xl text-gray-400 mt-4">Join now and get all these bonuses included.</p>
          </div>

          <div className="mb-12 text-center">
            <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500 rounded-3xl p-8">
              <h3 className="text-3xl md:text-5xl font-bold mb-4 text-yellow-400">
                🔥 INSANE Bonuses Worth $8,879 🔥
              </h3>
              <p className="text-xl text-gray-300">
                These bonuses alone are worth more than most courses. But you get them FREE when you join today.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "🎯 365 Days of Content Ideas",
                value: "$997",
                description: "Never run out of content again! A full year of proven, viral-ready post ideas, hooks, and concepts. Just pick one and create - guaranteed engagement every single day."
              },
              {
                title: "🎬 Viral Reel Templates",
                value: "$797",
                description: "Copy-paste templates for the 25 highest-performing Reel formats. These templates have generated over 50M views combined - just plug in your content and watch it explode."
              },
              {
                title: "📝 Caption Swipe File",
                value: "$497",
                description: "500+ high-converting captions that drive engagement, followers, and sales. Categorized by niche and goal - just copy, customize, and post for instant results."
              },
              {
                title: "🤝 Influencer Outreach Scripts",
                value: "$397",
                description: "The exact DM templates that got me collaborations with 7-figure creators. These scripts have a 67% response rate and have led to millions in combined reach."
              },
              {
                title: "📊 Monthly Algorithm Updates",
                value: "$1,997/year",
                description: "Stay ahead of every Instagram change forever. Monthly reports on algorithm updates, new features, and strategy adjustments - so you're always winning while others struggle."
              },
              {
                title: "👥 Private Mastermind Access",
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
                <h3 className="text-lg md:text-xl font-bold mb-4 text-yellow-400">{bonus.title}</h3>
                <p className="text-gray-300 leading-relaxed">{bonus.description}</p>
              </div>
            ))}
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
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Let's do the math on what you're actually getting today...
            </p>
          </div>

          {/* Value Stack */}
          <div className={`max-w-4xl mx-auto mb-16 scroll-scale ${pricingAnimation.isVisible ? 'visible scroll-stagger-2' : ''}`}>
            <div className="bg-zinc-900 border border-green-500/30 rounded-3xl p-8 md:p-12">
              <h3 className="text-3xl font-bold mb-8 text-center text-green-400">Total Value Breakdown</h3>
              
              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center py-3 border-b border-zinc-700">
                  <span className="text-lg">10 Core Modules</span>
                  <span className="text-xl font-bold text-green-400">$1,297</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-zinc-700">
                  <span className="text-lg">365 Days Content Ideas</span>
                  <span className="text-xl font-bold text-green-400">$247</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-zinc-700">
                  <span className="text-lg">Viral Reel Templates</span>
                  <span className="text-xl font-bold text-green-400">$197</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-zinc-700">
                  <span className="text-lg">Caption Swipe File</span>
                  <span className="text-xl font-bold text-green-400">$147</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-zinc-700">
                  <span className="text-lg">Influencer Outreach Scripts</span>
                  <span className="text-xl font-bold text-green-400">$127</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-zinc-700">
                  <span className="text-lg">Monthly Algorithm Updates</span>
                  <span className="text-xl font-bold text-green-400">$397</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-zinc-700">
                  <span className="text-lg">Private Mastermind Access</span>
                  <span className="text-xl font-bold text-green-400">$697</span>
                </div>
                
                <div className="flex justify-between items-center py-6 bg-green-900/20 rounded-lg px-6 mt-6">
                  <span className="text-2xl font-bold">TOTAL VALUE:</span>
                  <span className="text-3xl font-black text-green-400">$3,109</span>
                </div>
              </div>
            </div>
          </div>

          {/* Pricing Comparison */}
          <div className={`mb-16 scroll-fade-up ${pricingAnimation.isVisible ? 'visible scroll-stagger-3' : ''}`}>
            <h3 className="text-3xl md:text-4xl font-bold mb-12 text-center">Compare Your Options</h3>
            
            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {/* Trial & Error Method - Disabled */}
              <div className="bg-zinc-900 border border-red-500 rounded-2xl p-6 text-center opacity-60">
                <h4 className="text-lg font-bold mb-4 text-red-400">Trial & Error Method</h4>
                <div className="text-2xl font-black mb-4 text-red-400">$0</div>
                <div className="text-sm text-gray-400 mb-6">BUT COSTS YOU EVERYTHING</div>
                <ul className="text-left space-y-2 text-gray-300 text-sm">
                  <li>• Years of failed launches</li>
                  <li>• Wasted time and money</li>
                  <li>• No guidance or system</li>
                  <li>• High stress and frustration</li>
                  <li>• No guarantee of success</li>
                </ul>
                <div className="mt-6 bg-red-900/30 border border-red-500 rounded-lg p-3">
                  <p className="text-red-400 font-bold text-sm">❌ NOT RECOMMENDED</p>
                </div>
              </div>

              {/* Instagram Ignited - POPULAR */}
              <div className="bg-gradient-to-br from-green-900/30 to-blue-900/30 border-2 border-green-500 rounded-2xl p-6 text-center relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 bg-green-500 text-black text-sm font-bold py-2">
                  🔥 POPULAR - LIFETIME ACCESS 🔥
                </div>
                <div className="mt-8">
                  <h4 className="text-lg font-bold mb-4 text-green-400">Instagram Ignited</h4>
                  <div className="mb-2">
                    <span className="text-sm text-gray-400 line-through">$3,109</span>
                  </div>
                  <div className="text-3xl font-black mb-4 text-green-400">$147</div>
                  <div className="text-sm text-gray-400 mb-6">ONE-TIME PAYMENT</div>
                  <ul className="text-left space-y-2 text-gray-300 text-sm">
                    <li>• Complete system education</li>
                    <li>• Proven viral strategies</li>
                    <li>• Lifetime access</li>
                    <li>• $3,109 worth of bonuses</li>
                    <li>• Results guaranteed</li>
                  </ul>
                </div>
              </div>
              
              {/* Whop All-Access */}
              <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 border-2 border-purple-500 rounded-2xl p-6 text-center relative overflow-hidden hover:scale-105 transition-transform duration-300 cursor-pointer">
                <div className="absolute top-0 left-0 right-0 bg-purple-500 text-white text-sm font-bold py-2">
                  🚀 ALL 5 COURSES 🚀
                </div>
                <div className="mt-8">
                  <h4 className="text-lg font-bold mb-4 text-purple-400">Whop All-Access</h4>
                  <div className="mb-2">
                    <span className="text-sm text-gray-400 line-through">$881 individual</span>
                  </div>
                  <div className="text-3xl font-black mb-4 text-purple-400">$39.99</div>
                  <div className="text-sm text-gray-400 mb-6">PER MONTH</div>
                  <ul className="text-left space-y-2 text-gray-300 text-sm mb-6">
                    <li>• All 5 complete courses</li>
                    <li>• Instagram + AI + Automation</li>
                    <li>• Monthly updates</li>
                    <li>• Community access</li>
                    <li>• Cancel anytime</li>
                  </ul>
                  <Link
                    href="https://whop.com/IImagined"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-purple-500 hover:bg-purple-600 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300 w-full"
                  >
                    Join Whop All-Access
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Scarcity & Urgency */}
          <div className={`max-w-4xl mx-auto text-center scroll-fade-up ${pricingAnimation.isVisible ? 'visible scroll-stagger-4' : ''}`}>
            <div className="bg-zinc-900 border border-red-500 rounded-3xl p-8 mb-8">
              <h3 className="text-3xl md:text-4xl font-bold mb-6 text-red-400">
                ⚠️ Limited Time Special Offer ⚠️
              </h3>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-zinc-900 rounded-2xl p-6">
                  <div className="text-2xl font-bold text-red-400 mb-2">48 HOURS</div>
                  <p className="text-gray-300">Price jumps to $697 after the weekend</p>
                </div>
                <div className="bg-zinc-900 rounded-2xl p-6">
                  <div className="text-2xl font-bold text-red-400 mb-2">MIDNIGHT</div>
                  <p className="text-gray-300">All bonuses expire at 11:59 PM tonight</p>
                </div>
                <div className="bg-zinc-900 rounded-2xl p-6">
                  <div className="text-2xl font-bold text-red-400 mb-2">50 SPOTS</div>
                  <p className="text-gray-300">Only accepting 50 students this round</p>
                </div>
              </div>
              
              <p className="text-xl text-gray-300 mb-6">
                I'm keeping this group small so I can personally help everyone get results. 
                Once we hit 50 students, enrollment closes and the price increases.
              </p>
              
              <div className="bg-yellow-500/20 border border-yellow-500 rounded-2xl p-6 mb-8">
                <h4 className="text-2xl font-bold text-yellow-400 mb-3">🚨 Don't Wait - Here's Why:</h4>
                <div className="text-left space-y-2 text-gray-300">
                  <p>• Every day you wait, your competitors get further ahead</p>
                  <p>• Each month of delay = $5K-$20K in lost potential income</p>
                  <p>• The algorithm favors accounts with momentum (start NOW)</p>
                  <p>• These bonuses will NEVER be offered at this price again</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <button
                onClick={handleBuyNow}
                className="inline-block bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white font-bold py-4 px-12 rounded-2xl text-2xl transition-all duration-300 transform hover:scale-105 animate-pulse cursor-pointer"
              >
                🔥 CLAIM INSTAGRAM IGNITED NOW - $147 🔥
              </button>
              
              <p className="text-sm text-gray-400">
                ✅ Instant Access • ✅ Lifetime Updates • ✅ 30-Day Money-Back Guarantee
              </p>
              
              <div className="bg-zinc-900 border border-green-500 rounded-2xl p-6 max-w-2xl mx-auto">
                <h4 className="text-xl font-bold text-green-400 mb-3">💯 Zero-Risk Guarantee</h4>
                <p className="text-gray-300">
                  Try Instagram Ignited for 30 days. If you don't see massive improvement in your growth, 
                  engagement, and content quality, I'll refund every penny. No questions asked.
                </p>
              </div>
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
            <p className="text-lg md:text-xl text-gray-400">Everything you need to know before joining Instagram Ignited</p>
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
                <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className={`text-center mt-16 scroll-fade-up ${faqAnimation.isVisible ? 'visible scroll-stagger-6' : ''}`}>
            <div className="bg-gradient-to-r from-blue-900/30 to-green-900/30 border border-blue-500/30 rounded-3xl p-8 max-w-3xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Still Have Questions?</h3>
              <p className="text-lg text-gray-300 mb-6">
                Join the private mastermind and ask me directly on our weekly live calls. 
                You'll get personalized answers and strategies specific to your situation.
              </p>
              <button
                onClick={handleBuyNow}
                className="cta-button inline-block text-lg cursor-pointer"
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
                <button onClick={handleBuyNow} className="cta-button inline-block cursor-pointer">
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
                content: "Instagram Ignited completely transformed my content strategy! I went from 800 followers to 125K in just 8 months using Anyro's viral carousel techniques. My engagement rate jumped from 2% to 12%, and I'm now making $15K/month through sponsored posts and my own digital products. The community support is incredible!"
              },
              {
                name: "Allan Rodriguez",
                role: "Lifestyle Blogger • $25K Brand Deal",
                avatar: "https://i.pravatar.cc/150?img=88",
                content: "The Instagram OS module alone was worth the entire course! I finally understood the algorithm and my first viral carousel got 2.3M views. Within 3 months, I grew from 5K to 85K followers and landed my first $25K brand partnership. Anyro's strategies actually work!"
              },
              {
                name: "David Chen",
                role: "Fitness Coach • $22K/Month",
                avatar: "https://i.pravatar.cc/150?img=23",
                content: "I was skeptical about another Instagram course, but Instagram Ignited delivered results immediately. My engagement went from 300 likes to 8K+ per post. The monetization strategies helped me scale my coaching business to $22K/month. The ROI was instant!"
              },
              {
                name: "Jake Martinez",
                role: "Business Coach • 180K Followers",
                avatar: "https://i.pravatar.cc/150?img=45",
                content: "As someone who struggled with Instagram for years, this course was a game-changer. The Niche OS helped me find my perfect audience, and within 6 months I had 180K engaged followers. My course sales increased 400% thanks to the Instagram traffic. Absolutely life-changing!"
              },
              {
                name: "Brendan Thompson",
                role: "Digital Entrepreneur • $35K/Month",
                avatar: "https://i.pravatar.cc/150?img=65",
                content: "Instagram Ignited took me from 1,200 followers to 240K in 10 months! The content templates and posting strategies are pure gold. I'm now generating $35K/month through affiliate marketing and my own products. This program is the real deal - no fluff, just results!"
              },
              {
                name: "Aria Williams",
                role: "Fashion Influencer • $50K Brand Deals",
                avatar: "https://i.pravatar.cc/150?img=42",
                content: "The editing techniques in Instagram Ignited are incredible! My content quality skyrocketed and so did my follower count - from 3K to 95K in 7 months. I've secured partnerships with major fashion brands worth over $50K. The community mastermind calls are invaluable!"
              },
              {
                name: "Ryan Foster",
                role: "Tech Reviewer • 165K Followers",
                avatar: "https://i.pravatar.cc/150?img=52",
                content: "I was stuck at 12K followers for months until I found Instagram Ignited. The mindset shifts and content frameworks helped me break through to 165K followers. My tech review videos now get 500K+ views regularly, and I've monetized through courses making $18K/month!"
              },
              {
                name: "Ashton Torres",
                role: "Travel Blogger • $28K/Month",
                avatar: "https://i.pravatar.cc/150?img=12",
                content: "Instagram Ignited taught me how to turn my travel passion into profit! From 2K to 130K followers in 9 months, with engagement rates of 15%+. The newsletter strategies helped me build a 25K email list. I'm now earning $28K/month through travel partnerships and my own courses!"
              },
              {
                name: "Cameron Lee",
                role: "Food Creator • 200K Followers",
                avatar: "https://i.pravatar.cc/150?img=71",
                content: "The Instagram Ignited program is pure genius! My food content went from a few hundred views to consistently hitting 100K+ views per post. Grew from 4K to 200K followers in under a year. Restaurant partnerships and cookbook sales now bring in $32K/month. Best investment ever!"
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
            "Went from 800 to 125K followers using Anyro's techniques! 🚀",
            "My first viral carousel got 2.3M views after this course 💥",
            "Landed my first $25K brand partnership within 3 months! 💰",
            "From 2% to 12% engagement rate - this system works! 📈",
            "Made $35K/month from Instagram using these strategies 💸",
            "240K followers in 10 months - no fluff, just results! ⭐",
            "Secured $50K brand deals with major fashion brands! 👗",
            "My tech videos now get 500K+ views regularly 📱",
            "15%+ engagement rates and $28K/month from travel content ✈️",
            "From 4K to 200K followers in under a year! 🎯"
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
            
            <div className="bg-gradient-to-r from-red-900/30 to-orange-900/30 border border-red-500 rounded-2xl p-6 mb-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-red-400 mb-3">⏰ FINAL WARNING</h3>
              <p className="text-gray-300 mb-4">
                This INSANE $147 price and $8,879 in bonuses expire at MIDNIGHT tonight. After that, you'll pay $297 without any bonuses.
              </p>
              <p className="text-lg font-bold text-yellow-400">
                Don't let another month pass watching others succeed while you stay stuck!
              </p>
            </div>
            
            <button onClick={handleBuyNow} className="inline-block bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white font-bold py-4 px-12 rounded-2xl text-2xl transition-all duration-300 transform hover:scale-105 animate-pulse mb-4 cursor-pointer">
              🚀 TRANSFORM MY INSTAGRAM NOW - $147 🚀
            </button>
            
            <p className="text-sm text-gray-400 mb-6">
              ✅ Instant Access • ✅ 30-Day Guarantee • ✅ Lifetime Updates • ✅ $8,879 in Bonuses
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
