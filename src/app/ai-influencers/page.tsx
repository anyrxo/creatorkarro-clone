'use client'

import Image from 'next/image'
import Link from 'next/link'
import { generateCourseStructuredData } from '@/lib/structured-data'
import { siteConfig } from '@/config/seo'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import {
  HeroSection,
  SectionHeader,
  ProblemCard,
  ModuleCard,
  BonusCard,
  TestimonialCard,
  FAQCard,
  PricingComparison
} from '@/components/course/CourseLayout'
import ScrollAnimation from '@/components/ScrollAnimation'
import NumberTicker from '@/components/magicui/number-ticker'
import WordRotate from '@/components/magicui/word-rotate'
import BlurIn from '@/components/magicui/blur-in'
import TypingAnimation from '@/components/magicui/typing-animation'
import AnimatedGradientText from '@/components/magicui/animated-gradient-text'
import ShimmerButton from '@/components/magicui/shimmer-button'
import AIContentDeclaration from '@/components/seo/AIContentDeclaration'
import SocialProof from '@/components/seo/SocialProof'
import { Rocket, Video, Bot, Users, Zap, Target, Shield, AlertTriangle, Gem, TrendingUp, Flame, CheckCircle, DollarSign, Phone, ChevronRight, XCircle } from 'lucide-react'
import * as analytics from '@/lib/analytics'
import { useEffect } from 'react'

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

const courseStructuredData = generateCourseStructuredData(
  'AI Influencers Mastery Course',
  'Complete course on creating virtual AI influencers that generate passive income through automated content creation and brand partnerships.',
  '399',
  'Anyro'
)

export default function AIInfluencersPage() {
  // Scroll animations for different sections
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

  // Initialize analytics tracking on mount
  useEffect(() => {
    // Track page view
    analytics.trackPageView('/ai-influencers', 'AI Influencers Mastery Course')

    // Track product view
    analytics.trackProductView(
      'ai-influencers',
      'AI Influencers Mastery Course',
      169,
      'Course'
    )

    // Initialize scroll and time tracking
    const scrollTracker = new analytics.ScrollDepthTracker('/ai-influencers')
    const timeTracker = new analytics.TimeOnPageTracker('/ai-influencers')

    // Cleanup on unmount
    return () => {
      scrollTracker.destroy()
      timeTracker.destroy()
    }
  }, [])

  // Enhanced Schema markup for AI Influencers Course
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
    "instructor": {
      "@type": "Person",
      "name": "Anyro",
      "url": "https://iimagined.ai/story",
      "jobTitle": "AI Influencer & Virtual Content Expert",
      "alumniOf": "Virtual Influencer Pioneer"
    },
    "courseMode": "online",
    "educationalLevel": "Beginner to Advanced",
    "teaches": [
      "AI Character Creation",
      "Virtual Influencer Development",
      "Automated Content Generation",
      "Brand Partnership Strategies",
      "Virtual Presence Monetization",
      "AI Content Automation"
    ],
    "offers": {
      "@type": "Offer",
      "price": '399',
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock",
      "category": "AI Business Course",
      "hasCourseInstance": {
        "@type": "CourseInstance",
        "courseMode": "online",
        "courseWorkload": "25+ hours",
        "instructor": "Anyro"
      }
    },
    "totalTime": "PT25H",
    "numberOfCredits": 12,
    "educationalCredentialAwarded": "AI Influencer Business Certificate",
    "audience": {
      "@type": "EducationalAudience",
      "educationalRole": "student",
      "audienceType": ["Entrepreneurs", "Content Creators", "Digital Marketers", "AI Enthusiasts"]
    },
    "coursePrerequisites": "Basic computer skills and marketing interest",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "800",
      "bestRating": "5"
    }
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is an AI influencer and how can I create one?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "An AI influencer is a virtual character created using AI technology that can generate content, engage with audiences, and create revenue streams. Our course teaches you to create, develop, and monetize AI influencers from scratch."
        }
      },
      {
        "@type": "Question",
        "name": "Can AI influencers really make money?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! AI influencers can generate income through brand partnerships, product promotions, virtual merchandise, content licensing, and automated affiliate marketing. Some virtual influencers earn millions annually."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need technical skills to create AI influencers?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No technical background required! Our course covers everything from basic AI character creation to advanced monetization strategies, with step-by-step tutorials for complete beginners."
        }
      },
      {
        "@type": "Question",
        "name": "What's the difference between AI influencers and regular influencers?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "AI influencers can work 24/7, never age, create unlimited content, have perfect consistency, no scandals, and can be completely controlled for brand partnerships and messaging."
        }
      }
    ]
  }

  // Define modules data
  const modules = [
    {
      number: 1,
      title: "AI Character Creation Mastery: Complete Guide & Expert",
      description: "Learn to create photorealistic AI models that look and feel authentic",
      color: "text-pink-400",
      bgColor: "bg-gradient-to-r from-pink-900/20 to-purple-900/20",
      borderColor: "border-pink-500/30",
      whatYouLearn: [
        "Advanced Flux & SDXL model training",
        "LoRA training for consistent faces",
        "Character personality development",
        "Facial expression control",
        "Age, ethnicity, and style variations"
      ],
      deliverables: [
        "3+ photorealistic AI characters",
        "Character style guides",
        "Training datasets",
        "Custom LoRA models"
      ],
      value: "$197"
    },
    {
      number: 2,
      title: "Content Automation Engine",
      description: "Build systems that generate unlimited content automatically",
      color: "text-blue-400",
      bgColor: "bg-gradient-to-r from-blue-900/20 to-cyan-900/20",
      borderColor: "border-blue-500/30",
      whatYouLearn: [
        "ComfyUI automation workflows",
        "Batch image generation",
        "Video content creation",
        "Custom request fulfillment",
        "Content scheduling systems"
      ],
      tools: [
        "50+ ComfyUI workflows",
        "Automation scripts",
        "Content templates",
        "Scheduling tools"
      ],
      value: "$147"
    },
    {
      number: 3,
      title: "Platform Domination Strategy",
      description: "Master every major platform with AI influencer specific strategies",
      color: "text-green-400",
      bgColor: "bg-gradient-to-r from-green-900/20 to-emerald-900/20",
      borderColor: "border-green-500/30",
      whatYouLearn: [
        "Instagram growth & monetization",
        "TikTok viral strategies",
        "Twitter/X engagement tactics",
        "YouTube Shorts automation",
        "Fanvue & OnlyFans optimization"
      ],
      deliverables: [
        "Algorithm optimization",
        "Hashtag research systems",
        "Engagement automation",
        "Cross-platform synergy"
      ],
      value: "$197"
    },
    {
      number: 4,
      title: "Monetization Mastery",
      description: "Turn your AI influencers into profit-generating machines",
      color: "text-purple-400",
      bgColor: "bg-gradient-to-r from-purple-900/20 to-indigo-900/20",
      borderColor: "border-purple-500/30",
      whatYouLearn: [
        "Brand partnerships & sponsorships",
        "Custom content & PPV sales",
        "Subscription tier optimization",
        "Affiliate marketing systems",
        "Premium content upsells"
      ],
      deliverables: [
        "Value-based pricing models",
        "Scarcity & urgency tactics",
        "Tier structure optimization",
        "Conversion rate optimization"
      ],
      value: "$147"
    },
    {
      number: 5,
      title: "Scaling & Automation Systems",
      description: "Scale to multiple AI models and automate everything",
      color: "text-orange-400",
      bgColor: "bg-gradient-to-r from-orange-900/20 to-red-900/20",
      borderColor: "border-orange-500/30",
      whatYouLearn: [
        "Multi-model management",
        "Team building & delegation",
        "Workflow optimization",
        "Quality control systems",
        "Performance tracking"
      ],
      tools: [
        "Conversation automation",
        "Content distribution systems",
        "Customer service bots",
        "Analytics dashboards"
      ],
      value: "$197"
    },
    {
      number: 6,
      title: "Legal & Compliance Framework",
      description: "Stay compliant and protect your business legally",
      color: "text-teal-400",
      bgColor: "bg-gradient-to-r from-teal-900/20 to-cyan-900/20",
      borderColor: "border-teal-500/30",
      whatYouLearn: [
        "AI content disclosure requirements",
        "Platform terms of service",
        "Copyright & trademark protection",
        "Tax implications & structures",
        "International compliance"
      ],
      deliverables: [
        "Disclosure templates",
        "Terms of service templates",
        "Privacy policy generators",
        "Contract templates"
      ],
      value: "$127"
    },
    {
      number: 7,
      title: "Advanced Psychology & Engagement",
      description: "Master the psychology behind viral AI influencers",
      color: "text-yellow-400",
      bgColor: "bg-gradient-to-r from-yellow-900/20 to-orange-900/20",
      borderColor: "border-yellow-500/30",
      whatYouLearn: [
        "Parasocial relationship building",
        "Emotional trigger identification",
        "Addiction mechanics in content",
        "Persona development psychology",
        "Fan loyalty & retention"
      ],
      deliverables: [
        "Conversation starter frameworks",
        "Community building strategies",
        "Interactive content formats",
        "Feedback loop optimization"
      ],
      value: "$127"
    },
    {
      number: 8,
      title: "Case Studies & Implementation",
      description: "Real examples and step-by-step implementation guides",
      color: "text-rose-400",
      bgColor: "bg-gradient-to-r from-rose-900/20 to-pink-900/20",
      borderColor: "border-rose-500/30",
      whatYouLearn: [
        "$50K/month fitness influencer",
        "$30K/month lifestyle brand",
        "$25K/month fashion model",
        "$40K/month gaming personality",
        "Multi-niche empire breakdown"
      ],
      deliverables: [
        "30-day launch roadmap",
        "Daily action checklists",
        "Troubleshooting guides",
        "Success metrics tracking"
      ],
      value: "$147"
    }
  ]

  // Define bonuses data
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

  // Define testimonials data
  const testimonials = [
    {
      name: "Ashton Torres",
      role: "AI Content Creator",
      image: "https://ext.same-assets.com/1161517358/432373971.webp",
      testimonial: "AI Influencers opened up a completely new revenue stream for me! I created 3 AI models that generate content 24/7. Within 2 months, my AI models gained 200K combined followers and started earning $8K/month through partnerships. Anyro's approach is revolutionary!",
      result: "200K combined followers, $8K/month AI revenue"
    },
    {
      name: "Jake Harrison",
      role: "Virtual Model Creator",
      image: "https://ext.same-assets.com/1161517358/2908592891.webp",
      testimonial: "I was skeptical about AI models until I tried Anyro's system. Now I manage 5 different AI models across Instagram and TikTok. They work around the clock while I sleep! Last month alone, my AI models generated $12K through brand deals and custom content requests.",
      result: "5 AI models, $12K/month revenue"
    },
    {
      name: "Jason Chen",
      role: "Digital Entrepreneur",
      image: "https://ext.same-assets.com/1161517358/1695287196.jpeg",
      testimonial: "The AI Influencers course changed everything for me. I went from struggling to grow my personal brand to managing multiple AI models that each have their own fanbase. My virtual models are now booking paid collaborations and I'm scaling to 6 figures!",
      result: "Multiple AI models, scaling to 6 figures"
    }
  ]

  // Define FAQ data
  const faqs = [
    {
      question: "Is this legal? Can I really make money with AI influencers?",
      answer: "Absolutely legal and highly profitable. AI-generated content is completely legal when properly disclosed. Many AI influencers are already making $10K-50K+ per month. We cover all legal requirements and disclosure best practices in Module 6. The AI influencer market is projected to reach $15+ billion by 2025."
    },
    {
      question: "Do I need technical skills or expensive equipment?",
      answer: "No technical background required. You just need a computer and internet connection. We provide all the tools, templates, and step-by-step tutorials. Our students range from complete beginners to experienced marketers - everyone succeeds with our system."
    },
    {
      question: "How long before I see results?",
      answer: "Most students create their first AI influencer within 7-14 days and start generating income within 30 days. Sarah M. made $3,200 in her first month. Jake hit $12K/month by month 3. Results depend on implementation, but our fast-track system is designed for quick wins."
    },
    {
      question: "What if platforms ban AI-generated content?",
      answer: "We stay ahead of platform policies and teach compliant strategies. Most platforms allow AI content with proper disclosure. We also show you how to build platform-independent audiences and diversify across multiple channels to protect your business."
    },
    {
      question: "Can I create AI influencers in any niche?",
      answer: "Yes! Our system works for any niche - fitness, lifestyle, gaming, fashion, travel, business, etc. We provide niche-specific strategies and show you how to research profitable niches. Many students run multiple AI influencers across different niches."
    },
    {
      question: "How much time does this require daily?",
      answer: "Initially 1-2 hours daily for setup and learning. Once automated, just 30 minutes daily for monitoring and optimization. The beauty of AI influencers is they work 24/7 while you sleep. Scale to multiple models without proportionally increasing time investment."
    },
    {
      question: "What's included in the private community?",
      answer: "Access to our exclusive Discord server with 500+ active members, weekly live Q&A calls, case study breakdowns, tool recommendations, troubleshooting help, and networking opportunities. Plus direct access to me and my team for support."
    },
    {
      question: "Is there ongoing support and updates?",
      answer: "Lifetime access includes all future updates, new modules, tool additions, and platform strategy changes. Our community and support never expires. As AI technology evolves, we evolve with it and share everything with our members."
    },
    {
      question: "What if I don't get results?",
      answer: "60-day money-back guarantee. If you implement our system and don't see progress building your AI influencer within 60 days, we'll refund every penny. We're confident this works because we've seen it work for hundreds of students."
    },
    {
      question: "How is this different from other AI courses?",
      answer: "This is the most comprehensive AI influencer system available. While others teach basic AI image generation, we cover the complete business model: character creation, content automation, platform strategies, monetization, scaling, legal compliance, and psychology. Plus real case studies and ongoing support."
    }
  ]

  // Define pricing options
  const pricingOptions = [
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
      disabled: true
    },
    {
      name: "Complete Course System",
      description: "Self-paced comprehensive training",
      price: "$399",
      originalPrice: "$3,169",
      features: [
        "Build your first AI model in 7 days",
        "Generate $5K/month without showing your face",
        "Replace $2K/month content creator costs",
        "Avoid $25K in failed AI experiments",
        "Scale to multiple $10K+ virtual personalities",
        "$3,000 worth of AI tools & templates included"
      ],
      badge: "LIFETIME ACCESS",
      badgeColor: "bg-red-500",
      buttonText: "Get AI Influencers Course",
      buttonLink: "https://whop.com/iimagined/ai-influencers-reimagined/"
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
        "ComfyUI: Professional AI image business",
        "Live coaching calls + private community",
        "New courses added monthly (5+ planned)",
        "Cancel anytime, keep what you downloaded"
      ],
      badge: "POPULAR - ALL 4 COURSES",
      badgeColor: "bg-purple-500",
      popular: true,
      hoverEffect: true,
      buttonText: "Join Whop All-Access",
      buttonLink: "https://whop.com/iimagined/all-access-reimagined/"
    }
  ]

  return (
    <>
      {/* SEO: AI Content Declaration for AI Influencers Course */}
      <AIContentDeclaration
        title="AI Influencers Mastery: Create Photorealistic Virtual Models & Earn $10K/Month"
        description="Master ComfyUI, SDXL, and AI workflows to create photorealistic AI influencers. Build virtual models that generate content 24/7 without showing your face. Complete training system."
        contentType="course"
        primaryTopic="AI Influencer Creation & Monetization"
        keywords={[
          'AI influencers',
          'ComfyUI',
          'SDXL',
          'virtual models',
          'AI image generation',
          'stable diffusion',
          'AI content creation',
          'faceless income',
          'digital models',
          'AI automation',
          'passive income',
          'virtual influencers',
          'AI workflows',
          'GPU rendering',
          'creator economy'
        ]}
        author="Anyro"
        datePublished="2024-02-01"
        dateModified="2025-10-31"
        readingTime={15}
        isAccessibleForFree={false}
        expertiseLevel="intermediate"
      />

      {/* Enhanced Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aiInfluencersSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="min-h-screen bg-dark relative">
      <h1 className="sr-only">
        AI Influencers Mastery: Build Your AI-Powered Virtual Influencer Empire
      </h1>
      {/* Hero Section */}
      <div ref={heroAnimation.elementRef} className="relative z-10">
        <HeroSection
          badge="AI INFLUENCER MASTERY"
          badgeColor="bg-pink-600/30 text-pink-300"
          title={<>Build Your <span className="text-pink-400">AI Influencer Empire</span> And Make <span className="text-pink-400">$10K/Month</span> Without Showing Your Face</>}
          description={<>The complete system to create, grow, and monetize <span className="text-pink-300">AI-powered virtual models</span></>}
          ctaText="Start Building Your AI Influencer"
          ctaLink="#packages"
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

      {/* SEO: Social Proof Component */}
      <div className="container mx-auto px-4">
        <SocialProof
          students={1500}
          revenue="$800K+"
          rating={4.9}
          reviews={800}
          companies={25}
          showAll={true}
        />
      </div>

      {/* Problem/Pain Points Section */}
      <section className="section-spacing">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={problemAnimation.elementRef}>
            <SectionHeader
              badge="THE BRUTAL TRUTH"
              badgeColor="text-red-400"
              title="Why Most Content Creators Are Stuck"
              description="The hidden problems keeping you from scaling your influence"
              isVisible={problemAnimation.isVisible}
            />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <ProblemCard
              icon={getIcon("alertTriangle")}
              title="Burnout From Face-To-Camera"
              description="Constantly showing your face, maintaining appearance, and being 'on' 24/7 is exhausting and unsustainable"
              isVisible={problemAnimation.isVisible}
              staggerClass="scroll-stagger-1"
            />
            <ProblemCard
              icon={getIcon("target")}
              title="Time Prison"
              description="Your income is directly tied to your time. Can't scale beyond 24 hours in a day"
              isVisible={problemAnimation.isVisible}
              staggerClass="scroll-stagger-2"
            />
            <ProblemCard
              icon={getIcon("dollarSign")}
              title="High Overhead Costs"
              description="Expensive equipment, editing, photoshoots, and team members eating into profits"
              isVisible={problemAnimation.isVisible}
              staggerClass="scroll-stagger-3"
            />
            <ProblemCard
              icon={getIcon("shield")}
              title="Privacy Invasion"
              description="Your personal life becomes public content. No boundaries between work and private life"
              isVisible={problemAnimation.isVisible}
              staggerClass="scroll-stagger-4"
            />
            <ProblemCard
              icon={getIcon("trendingUp")}
              title="Inconsistent Content"
              description="Bad days, sick days, vacation days = no content = no income. One person can't be everywhere"
              isVisible={problemAnimation.isVisible}
              staggerClass="scroll-stagger-5"
            />
            <ProblemCard
              icon={getIcon("users")}
              title="Platform Dependency"
              description="One algorithm change or account ban can destroy years of work instantly"
              isVisible={problemAnimation.isVisible}
              staggerClass="scroll-stagger-6"
            />
          </div>

          <div className={`text-center mt-16 scroll-fade-up ${problemAnimation.isVisible ? 'visible' : ''}`}>
            <div className="bg-zinc-900 border border-red-500/30 rounded-lg p-8 max-w-3xl mx-auto card-hover">
              <h3 className="text-2xl font-bold mb-4 text-red-400">The Real Cost of Traditional Content Creation</h3>
              <p className="text-lg text-zinc-200 mb-4">
                Most creators spend <span className="text-red-400 font-bold">80% of their time</span> on content creation and only
                <span className="text-red-400 font-bold"> 20% on revenue generation</span>
              </p>
              <p className="text-zinc-300">
                This backwards approach keeps you trapped in a cycle of constant work with limited income potential
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Solution Section */}
      <section className="section-spacing bg-zinc-900/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={solutionAnimation.elementRef}>
            <SectionHeader
              badge="THE BREAKTHROUGH"
              badgeColor="text-green-400"
              title="AI Influencer Empire: The Ultimate Solution"
              description="How to build a scalable, profitable content empire without showing your face"
              isVisible={solutionAnimation.isVisible}
            />
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto items-center mb-16">
            <div className={`scroll-fade-up ${solutionAnimation.isVisible ? 'visible' : ''}`}>
              <h3 className="text-3xl font-bold mb-6 text-green-400">What if you could...</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="text-green-400 text-xl">✓</div>
                  <p className="text-zinc-200">Create multiple AI models that work 24/7 while you sleep</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="text-green-400 text-xl">✓</div>
                  <p className="text-zinc-200">Generate unlimited content without ever showing your face</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="text-green-400 text-xl">✓</div>
                  <p className="text-zinc-200">Scale to multiple platforms simultaneously with zero extra effort</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="text-green-400 text-xl">✓</div>
                  <p className="text-zinc-200">Keep 100% of your profits with virtually no overhead costs</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="text-green-400 text-xl">✓</div>
                  <p className="text-zinc-200">Build a brand that's platform-independent and algorithm-proof</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="text-green-400 text-xl">✓</div>
                  <p className="text-zinc-200">Maintain complete privacy while building massive influence</p>
                </div>
              </div>
            </div>
            <div className={`scroll-fade-up ${solutionAnimation.isVisible ? 'visible scroll-stagger-2' : ''}`}>
              <div className="bg-gradient-to-br from-pink-600/20 to-purple-600/20 border border-pink-500/30 rounded-2xl p-8">
                <h4 className="text-2xl font-bold mb-4 text-center">AI Influencer Empire Formula</h4>
                <div className="text-center mb-6">
                  <div className="text-4xl font-bold text-pink-400 mb-2">
                    $<NumberTicker value={10} className="text-4xl font-bold text-pink-400 inline-block" />K-
                    $<NumberTicker value={50} className="text-4xl font-bold text-pink-400 inline-block" />K/Month
                  </div>
                  <p className="text-zinc-200">Per AI Influencer Model</p>
                </div>
                <div className="space-y-3 text-sm">
                  <div className="bg-zinc-800/50 rounded-lg p-3">
                    <span className="text-pink-400 font-semibold">Step 1:</span> Create photorealistic AI character
                  </div>
                  <div className="bg-zinc-800/50 rounded-lg p-3">
                    <span className="text-pink-400 font-semibold">Step 2:</span> Build automated content system
                  </div>
                  <div className="bg-zinc-800/50 rounded-lg p-3">
                    <span className="text-pink-400 font-semibold">Step 3:</span> Deploy across multiple platforms
                  </div>
                  <div className="bg-zinc-800/50 rounded-lg p-3">
                    <span className="text-pink-400 font-semibold">Step 4:</span> Scale to multiple AI models
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 1: TOOLS & PLATFORMS GRID */}
      <section className="section-spacing bg-gradient-to-b from-black to-zinc-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={toolsAnimation.elementRef}>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-pink-500/10 border border-pink-500/30 rounded-full px-6 py-2 mb-6">
                <Bot className="w-5 h-5 text-pink-400" />
                <span className="text-pink-300 font-semibold">AI TOOLS & PLATFORMS</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Master the <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">Complete AI Influencer Stack</span>
              </h2>
              <p className="text-xl text-zinc-200 max-w-3xl mx-auto">
                Create photorealistic AI influencers using professional-grade AI and ComfyUI tools
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {[
                { name: 'ComfyUI', category: 'Workflow Engine', icon: '🎨' },
                { name: 'Stable Diffusion', category: 'AI Generator', icon: '🤖' },
                { name: 'Midjourney', category: 'AI Art', icon: '✨' },
                { name: 'DALL-E', category: 'OpenAI Image', icon: '🧠' },
                { name: 'ChatGPT', category: 'AI Writing', icon: '💬' },
                { name: 'Claude', category: 'AI Assistant', icon: '🎯' },
                { name: 'RunwayML', category: 'AI Video', icon: '🎬' },
                { name: 'Fooocus', category: 'AI Generator', icon: '⚡' },
                { name: 'Leonardo.AI', category: 'AI Creation', icon: '🖼️' },
                { name: 'Adobe Firefly', category: 'Creative AI', icon: '🔥' },
                { name: 'Photoshop', category: 'Editing', icon: '🎨' },
                { name: 'After Effects', category: 'Video/Motion', icon: '🎥' }
              ].map((tool, index) => (
                <div
                  key={tool.name}
                  className="group relative bg-zinc-900/60 backdrop-blur-sm rounded-xl p-6 border border-zinc-800 hover:border-pink-500/50 transition-all duration-300 hover:scale-105"
                >
                  <div className="flex flex-col items-center text-center">
                    <span className="text-4xl mb-3 group-hover:scale-110 transition-transform">{tool.icon}</span>
                    <h3 className="font-semibold text-white text-sm mb-1">{tool.name}</h3>
                    <p className="text-xs text-zinc-400">{tool.category}</p>
                  </div>

                  {/* Hover effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-600/10 to-purple-600/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-zinc-300 mb-6">
                Plus LoRA training, FaceSwap, upscaling tools, and 50+ custom ComfyUI workflows
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section className="section-spacing bg-zinc-900/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={curriculumAnimation.elementRef}>
            <SectionHeader
              badge="COMPLETE CURRICULUM"
              badgeColor="text-gray-400"
              title="The Complete AI Influencer Empire System"
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
                deliverables={module.deliverables}
                tools={module.tools}
                value={module.value}
                isVisible={curriculumAnimation.isVisible}
                staggerClass={`scroll-stagger-${index + 1}`}
              />
            ))}
          </div>

          {/* Total Value */}
          <div className={`text-center mt-16 scroll-fade-up ${curriculumAnimation.isVisible ? 'visible' : ''}`}>
            <div className="bg-gradient-to-r from-gold-900/30 to-yellow-900/30 border border-gold-500/50 rounded-lg p-8 max-w-2xl mx-auto">
              <h3 className="text-3xl font-bold mb-4 text-yellow-400">
                <TypingAnimation
                  text="Total Curriculum Value"
                  className="text-3xl font-bold text-yellow-400"
                  duration={100}
                />
              </h3>
              <div className="text-5xl font-bold text-yellow-400 mb-2">
                $<NumberTicker value={1397} className="text-5xl font-bold text-yellow-400" />
              </div>
              <p className="text-zinc-200">8 comprehensive modules + implementation guides</p>
            </div>
          </div>
        </div>
      </section>

      {/* Bonuses Section */}
      <section className="section-spacing">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={bonusAnimation.elementRef}>
            <SectionHeader
              badge="EXCLUSIVE BONUSES"
              badgeColor="text-gold-400"
              title="But Wait, There's More!"
              description="Limited-time bonuses worth over $1,000"
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

          <div className={`text-center mt-16 scroll-fade-up ${bonusAnimation.isVisible ? 'visible' : ''}`}>
            <div className="bg-gradient-to-r from-gold-900/30 to-yellow-900/30 border border-gold-500/50 rounded-lg p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4 text-gold-400">
                <BlurIn
                  word="Total Bonus Value"
                  className="text-2xl font-bold text-gold-400"
                  duration={0.8}
                />
              </h3>
              <div className="text-4xl font-bold text-gold-400 mb-2">
                $<NumberTicker value={1032} className="text-4xl font-bold text-gold-400" />
              </div>
              <p className="text-zinc-200">Free when you join today</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: 90-DAY TRANSFORMATION JOURNEY */}
      <section className="section-spacing bg-gradient-to-b from-black to-zinc-900 border-t border-pink-900/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={journeyAnimation.elementRef}>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-pink-500/10 border border-pink-500/30 rounded-full px-6 py-2 mb-6">
                <Zap className="w-5 h-5 text-pink-400" />
                <span className="text-pink-300 font-semibold">YOUR TRANSFORMATION</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                From <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">Zero</span> to <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">$10K/Month</span> in 30 Days
              </h2>
              <p className="text-xl text-zinc-200 max-w-3xl mx-auto">
                The ruthlessly efficient playbook 1,500+ students used to monetize AI influencers FAST
              </p>
            </div>

            <div className="max-w-5xl mx-auto space-y-8">
              {[
                {
                  phase: "Days 1-7",
                  title: "AI Character Creation Blitz",
                  description: "Install ComfyUI, generate 500+ images, and lock in your AI influencer's face in under 7 days. No theory—just pure character creation.",
                  outcomes: ["Install ComfyUI + 20 models in 24 hours", "Generate 500+ character images", "Lock 99% face consistency"]
                },
                {
                  phase: "Days 8-14",
                  title: "Content Arsenal Build",
                  description: "Create 100+ professional-grade images, build a 30-day content calendar, and launch your AI influencer with a bang. First 1K followers incoming.",
                  outcomes: ["Create 100+ viral-ready images", "Launch Instagram account", "Hit 1K followers in 7 days"]
                },
                {
                  phase: "Days 15-21",
                  title: "Viral Growth Explosion",
                  description: "Post 3x daily, collab with other AI creators, and trigger Explore page features. Watch your following explode to 10K+ as people discover your AI character.",
                  outcomes: ["Post 60+ images (3x daily)", "Get featured on Explore 5+ times", "Reach 10K followers"]
                },
                {
                  phase: "Days 22-30",
                  title: "Monetization Ignition",
                  description: "Close 3+ brand deals ($500-$2K each), launch digital products, and hit your first $10K month. While others are still learning ComfyUI, you're cashing checks.",
                  outcomes: ["Land 3+ brand partnerships", "Launch products/subscriptions", "Generate $10K+ first month"]
                }
              ].map((phase, index) => (
                <div key={index} className="relative">
                  {/* Connection line */}
                  {index < 3 && (
                    <div className="absolute left-12 top-full h-8 w-0.5 bg-gradient-to-b from-pink-500 to-pink-500/0 hidden md:block" />
                  )}

                  <div className="flex items-start gap-6">
                    {/* Phase number */}
                    <div className="flex-shrink-0 w-24 h-24 rounded-full bg-gradient-to-br from-pink-600 to-purple-600 flex items-center justify-center text-2xl font-bold text-white border-4 border-zinc-900">
                      {index + 1}
                    </div>

                    {/* Content */}
                    <div className="flex-1 bg-zinc-900/60 backdrop-blur-sm border border-zinc-800 rounded-2xl p-8 hover:border-pink-500/50 transition-all duration-300">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-3xl font-bold text-white">{phase.title}</h3>
                        <span className="text-pink-400 font-semibold px-4 py-2 bg-pink-500/10 rounded-full">{phase.phase}</span>
                      </div>
                      <p className="text-zinc-200 text-lg mb-6">{phase.description}</p>
                      <div className="space-y-2">
                        {phase.outcomes.map((outcome, i) => (
                          <div key={i} className="flex items-center gap-3">
                            <CheckCircle className="w-5 h-5 text-pink-400" />
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
                Ready to start your AI influencer journey?
              </p>
              <Link
                href="#packages"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 text-white font-semibold text-lg rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-pink-500/25"
              >
                Start Your Journey Today
                <ChevronRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: WHAT YOU'LL ACTUALLY LEARN */}
      <section className="section-spacing bg-zinc-900/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={learningAnimation.elementRef}>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-pink-500/10 border border-pink-500/30 rounded-full px-6 py-2 mb-6">
                <Target className="w-5 h-5 text-pink-400" />
                <span className="text-pink-300 font-semibold">SPECIFIC OUTCOMES</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                What You'll <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">Actually Learn</span>
              </h2>
              <p className="text-xl text-zinc-200 max-w-3xl mx-auto">
                Not theory. Practical skills that generate revenue from day one.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
              {[
                {
                  category: "Technical Skills",
                  skills: [
                    "Master ComfyUI workflow builder for AI image generation",
                    "Train LoRA models for perfect character consistency",
                    "Use FaceSwap and face-fixing techniques professionally",
                    "Build automated content generation workflows",
                    "Implement batch processing and upscaling automation",
                    "Master Stable Diffusion, SDXL, and Flux models",
                    "Create custom ComfyUI nodes and extensions"
                  ]
                },
                {
                  category: "Character Creation",
                  skills: [
                    "Create photorealistic AI characters with unique features",
                    "Develop consistent character style and branding",
                    "Generate unlimited poses, expressions, and scenarios",
                    "Build character personality and storytelling",
                    "Master lighting, composition, and aesthetics",
                    "Create seasonal and themed content variations",
                    "Maintain brand consistency across platforms"
                  ]
                },
                {
                  category: "Content Strategy",
                  skills: [
                    "Create viral Instagram Reels and TikTok content",
                    "Design engaging carousels and static posts",
                    "Write compelling hooks and captions that convert",
                    "Master hashtag research and SEO optimization",
                    "Implement posting timing and frequency strategies",
                    "Build engagement loops and community interaction",
                    "Analyze analytics and optimize performance"
                  ]
                },
                {
                  category: "Monetization",
                  skills: [
                    "Land brand deals and sponsorship partnerships",
                    "Create and sell digital products and merchandise",
                    "Build subscription-based revenue streams",
                    "Master affiliate marketing with AI influencers",
                    "License AI character usage and content",
                    "Scale to multiple income streams simultaneously",
                    "Automate sales funnels and customer journeys"
                  ]
                }
              ].map((category, index) => (
                <div key={index} className="bg-zinc-900/60 backdrop-blur-sm border border-zinc-800 rounded-2xl p-8 hover:border-pink-500/50 transition-all duration-300">
                  <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                    <CheckCircle className="w-8 h-8 text-pink-400" />
                    {category.category}
                  </h3>
                  <ul className="space-y-4">
                    {category.skills.map((skill, i) => (
                      <li key={i} className="flex items-start gap-3 text-zinc-200">
                        <ChevronRight className="w-5 h-5 text-pink-400 flex-shrink-0 mt-0.5" />
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: COMPARISON TABLE */}
      <section className="section-spacing bg-gradient-to-b from-black to-zinc-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={comparisonAnimation.elementRef}>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-pink-500/10 border border-pink-500/30 rounded-full px-6 py-2 mb-6">
                <TrendingUp className="w-5 h-5 text-pink-400" />
                <span className="text-pink-300 font-semibold">THE DIFFERENCE</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI Influencer vs <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">Broke Traditional Influencer</span>
              </h2>
              <p className="text-xl text-zinc-200 max-w-3xl mx-auto">
                Why showing your face and burning out is the dumbest way to make money online
              </p>
            </div>

            <div className="max-w-5xl mx-auto bg-zinc-900/60 backdrop-blur-sm border border-zinc-800 rounded-2xl overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="bg-zinc-800/50">
                    <th className="px-6 py-4 text-left text-zinc-400 font-semibold">Factor</th>
                    <th className="px-6 py-4 text-left text-pink-400 font-semibold">AI Influencer</th>
                    <th className="px-6 py-4 text-left text-red-400 font-semibold">Traditional Influencer</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-800">
                  {[
                    {
                      factor: "Content Creation Speed",
                      ai: "500+ posts in 24 hours on autopilot",
                      traditional: "10 posts per week if you grind 40 hours"
                    },
                    {
                      factor: "Monthly Costs",
                      ai: "$100/month (ComfyUI, hosting, tools)",
                      traditional: "$5K-$15K (camera, crew, props, editing, travel)"
                    },
                    {
                      factor: "Scalability",
                      ai: "Run 10 AI influencers at once = 10x revenue",
                      traditional: "1 face, 1 brand, stuck at $20K/month max"
                    },
                    {
                      factor: "Privacy & Safety",
                      ai: "100% anonymous. No stalkers, no doxxing",
                      traditional: "Your face everywhere. Stalkers. Burnout. No life."
                    },
                    {
                      factor: "Appearance Control",
                      ai: "Perfect body, perfect face, ANY style imaginable",
                      traditional: "Stuck with genetics. Age 30+ = irrelevant"
                    },
                    {
                      factor: "Work-Life Balance",
                      ai: "2 hours/day generating content. Rest = chill",
                      traditional: "60+ hours/week. No vacations. Constant stress."
                    },
                    {
                      factor: "Income Ceiling",
                      ai: "$50K-$200K/month running multiple AI characters",
                      traditional: "$10K-$30K/month if you're lucky + dying inside"
                    },
                    {
                      factor: "Business Longevity",
                      ai: "Forever. AI never ages, quits, or has drama",
                      traditional: "5-7 years max before burnout or irrelevance"
                    }
                  ].map((row, index) => (
                    <tr key={index} className="hover:bg-zinc-800/30 transition-colors">
                      <td className="px-6 py-4 text-zinc-300 font-semibold">{row.factor}</td>
                      <td className="px-6 py-4 text-green-400">
                        <div className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                          <span>{row.ai}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-zinc-400">
                        <div className="flex items-start gap-2">
                          <XCircle className="w-5 h-5 flex-shrink-0 mt-0.5 text-red-400" />
                          <span>{row.traditional}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="text-center mt-12">
              <p className="text-xl text-zinc-200 mb-6">
                The choice is clear. Start building your AI influencer empire today.
              </p>
              <Link
                href="#packages"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 text-white font-semibold text-lg rounded-xl transition-all duration-300 transform hover:scale-105"
              >
                Join AI Influencers Course
                <ChevronRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Value Stack & Pricing Section */}
      <section className="section-spacing bg-gradient-to-b from-zinc-900/50 to-black" id="packages">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={valueAnimation.elementRef}>
            <SectionHeader
              badge="COMPLETE PACKAGE"
              badgeColor="text-pink-400"
              title="Here's Everything You Get"
              description="Complete AI Influencer Empire System + Bonuses"
              isVisible={valueAnimation.isVisible}
            />
          </div>

          {/* Value Stack */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className={`bg-gradient-to-br from-zinc-900 to-zinc-800 border-2 border-gold-500/50 rounded-2xl p-8 scroll-fade-up ${valueAnimation.isVisible ? 'visible' : ''}`}>
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold mb-4 text-gold-400">Total Package Value Breakdown</h3>
                <p className="text-zinc-200">Everything you need to build a successful AI influencer empire</p>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center py-3 border-b border-gray-700">
                  <span className="text-zinc-200">✓ 8 Complete Training Modules</span>
                  <span className="text-gold-400 font-bold">$1,497</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-700">
                  <span className="text-zinc-200">✓ AI Model Library (50+ Models)</span>
                  <span className="text-gold-400 font-bold">$397</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-700">
                  <span className="text-zinc-200">✓ Content Template Vault (1000+ Templates)</span>
                  <span className="text-gold-400 font-bold">$297</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-700">
                  <span className="text-zinc-200">✓ Complete Automation Scripts</span>
                  <span className="text-gold-400 font-bold">$247</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-700">
                  <span className="text-zinc-200">✓ Private Mastermind Community</span>
                  <span className="text-gold-400 font-bold">$297</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-700">
                  <span className="text-zinc-200">✓ 1-on-1 Strategy Call with Me</span>
                  <span className="text-gold-400 font-bold">$197</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-700">
                  <span className="text-zinc-200">✓ 30-Day Fast-Track Implementation</span>
                  <span className="text-gold-400 font-bold">$97</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-zinc-200">✓ 60-Day Money-Back Guarantee</span>
                  <span className="text-gold-400 font-bold">Priceless</span>
                </div>
              </div>

              <div className="border-t-2 border-gold-500/50 pt-6">
                <div className="flex justify-between items-center text-2xl font-bold">
                  <span className="text-white">TOTAL VALUE:</span>
                  <span className="text-gold-400">
                    $<NumberTicker value={3000} className="text-2xl font-bold text-gold-400" />
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Pricing Comparison */}
          <div ref={pricingAnimation.elementRef}>
            <PricingComparison
              options={pricingOptions}
              isVisible={pricingAnimation.isVisible}
            />
          </div>

          {/* Risk Reversal */}
          <div className={`text-center mt-16 scroll-fade-up ${pricingAnimation.isVisible ? 'visible' : ''}`}>
            <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-8 max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold mb-4 text-green-400 flex items-center justify-center gap-2">
                <Shield className="w-6 h-6" />
                60-Day "Build Your Empire" Guarantee
              </h3>
              <p className="text-zinc-200 mb-4">
                Try the AI Influencer Empire system for 60 full days. If you don't see real progress building your first AI influencer and generating income within 60 days, I'll refund every penny.
              </p>
              <p className="text-sm text-zinc-300">
                That's how confident I am this works. You have ZERO risk.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-spacing">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={testimonialsAnimation.elementRef}>
            <SectionHeader
              badge="SUCCESS STORIES"
              badgeColor="text-gray-400"
              title={<>Real <span className="text-pink-400">AI Influencer</span> Results</>}
              description="Students building successful virtual models"
              isVisible={testimonialsAnimation.isVisible}
            />
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                name={testimonial.name}
                role={testimonial.role}
                image={testimonial.image}
                testimonial={testimonial.testimonial}
                result={testimonial.result}
                isVisible={testimonialsAnimation.isVisible}
                staggerClass={`scroll-stagger-${index + 1}`}
              />
            ))}
          </div>

          <div className={`text-center scroll-fade-up ${testimonialsAnimation.isVisible ? 'visible' : ''}`}>
            <h3 className="text-3xl font-bold mb-4">
              <BlurIn
                word="Become our next AI influencer"
                className="text-3xl font-bold text-white"
                duration={0.8}
              />
              <div className="text-pink-400">
                <WordRotate
                  words={["success story", "millionaire", "empire builder", "AI mogul"]}
                  className="text-3xl font-bold"
                  duration={2500}
                />
              </div>
            </h3>
            <p className="text-xl text-zinc-300 mb-8">
              Join creators building profitable virtual models with zero face-to-camera content
            </p>
            <Link
              href="/checkout?course=ai-influencers"
              className="inline-block focus:outline-none focus:ring-4 focus:ring-pink-500/50 rounded-full"
              aria-label="Start your AI influencer empire - Get course for $399"
              onClick={() => analytics.trackCTAClick(
                'testimonials_section',
                'Start Your AI Empire',
                '/checkout?course=ai-influencers'
              )}
            >
              <ShimmerButton
                className="shadow-2xl"
                shimmerColor="#ffffff"
                shimmerSize="0.1em"
                background="linear-gradient(135deg, #ec4899, #be185d)"
                borderRadius="9999px"
              >
                <span className="whitespace-nowrap text-lg font-bold px-6 py-2">
                  Start Your AI Empire
                </span>
              </ShimmerButton>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-spacing bg-zinc-900/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={faqAnimation.elementRef}>
            <SectionHeader
              badge="FREQUENTLY ASKED"
              badgeColor="text-gray-400"
              title="Got Questions? We Have Answers"
              description="Everything you need to know about building AI influencer empires"
              isVisible={faqAnimation.isVisible}
            />
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <FAQCard
                key={index}
                question={faq.question}
                answer={faq.answer}
                isVisible={faqAnimation.isVisible}
                staggerClass={`scroll-stagger-${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Urgency & Scarcity Section */}
      <section className="section-spacing border-t border-red-500/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={urgencyAnimation.elementRef}>
            <div className={`text-center scroll-fade-up ${urgencyAnimation.isVisible ? 'visible' : ''}`}>
              <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-red-400">
                  <div className="flex items-center justify-center gap-2">
                    <AlertTriangle className="w-8 h-8 text-red-400" />
                    <TypingAnimation
                      text="This Offer Won't Last Forever"
                      className="text-4xl md:text-5xl font-bold text-red-400 inline"
                      duration={100}
                    />
                  </div>
                </h2>

                <div className="bg-zinc-900 border border-red-500/30 rounded-lg p-8 mb-8 card-hover">
                  <h3 className="text-2xl font-bold mb-4 text-red-300">Why I'm Limiting This Offer</h3>
                  <div className="grid md:grid-cols-2 gap-6 text-left">
                    <div>
                      <h4 className="font-bold text-white mb-2 flex items-center gap-2">
                        <Target className="w-5 h-5" />
                        Quality Control
                      </h4>
                      <p className="text-zinc-200 mb-4">I personally review every student's progress and provide 1-on-1 guidance. Too many students would compromise the quality of support.</p>

                      <h4 className="font-bold text-white mb-2 flex items-center gap-2">
                        <Gem className="w-5 h-5" />
                        Exclusivity Protection
                      </h4>
                      <p className="text-zinc-200">If everyone has access to these exact strategies, the market becomes saturated. Limited access keeps the advantage for our community.</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-2 flex items-center gap-2">
                        <Rocket className="w-5 h-5" />
                        Early Adopter Advantage
                      </h4>
                      <p className="text-zinc-200 mb-4">AI influencers are still new. Early adopters get the biggest market share before mainstream adoption.</p>

                      <h4 className="font-bold text-white mb-2 flex items-center gap-2">
                        <TrendingUp className="w-5 h-5" />
                        Rising Costs
                      </h4>
                      <p className="text-zinc-200">As we add more content and tools, the value increases. Early members lock in the current price forever.</p>
                    </div>
                  </div>
                </div>

                <p className="text-xl text-zinc-200 mb-8">
                  Don't let this opportunity slip away. Every day you wait is money left on the table while others build their AI empires.
                </p>

                <Link
                  href="/checkout?course=ai-influencers"
                  className="inline-block focus:outline-none focus:ring-4 focus:ring-red-500/50 rounded-full"
                  aria-label="Secure your spot now - Get AI Influencers course for $399"
                  onClick={() => analytics.trackCTAClick(
                    'urgency_section',
                    'Secure Your Spot Now - $169',
                    '/checkout?course=ai-influencers'
                  )}
                >
                  <ShimmerButton
                    className="shadow-2xl"
                    shimmerColor="#ffffff"
                    shimmerSize="0.1em"
                    background="linear-gradient(135deg, #dc2626, #b91c1c)"
                    borderRadius="9999px"
                  >
                    <span className="text-xl md:text-2xl font-bold px-8 py-4 text-center block">
                      SECURE YOUR SPOT NOW<br className="md:hidden" /> - $<NumberTicker value={169} className="inline" />
                    </span>
                  </ShimmerButton>
                </Link>

                <p className="text-sm text-green-400 mt-4 font-bold">
                  <div className="flex items-center justify-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    Lifetime access + 60-day money-back guarantee
                  </div>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-spacing bg-zinc-900/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div ref={ctaAnimation.elementRef}>
            <div className={`scroll-fade-up ${ctaAnimation.isVisible ? 'visible' : ''}`}>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                <BlurIn
                  word="Ready to build your AI influencer"
                  className="text-4xl md:text-5xl font-bold text-white"
                  duration={0.8}
                />
                <div className="text-pink-400">
                  <WordRotate
                    words={["empire?", "kingdom?", "dynasty?", "fortune?"]}
                    className="text-4xl md:text-5xl font-bold"
                    duration={2500}
                  />
                </div>
              </h2>
              <p className="text-xl text-zinc-300 mb-8">
                Join hundreds of creators who are already making $<NumberTicker value={10} className="text-pink-400 font-bold inline" />K+ per month with faceless AI brands
              </p>
              <Link
                href="/checkout?course=ai-influencers"
                className="inline-block focus:outline-none focus:ring-4 focus:ring-pink-500/50 rounded-full"
                aria-label="Start creating your AI influencer empire today - $399"
                onClick={() => analytics.trackCTAClick(
                  'final_cta_section',
                  'Start Creating Today',
                  '/checkout?course=ai-influencers'
                )}
              >
                <ShimmerButton
                  className="shadow-2xl"
                  shimmerColor="#ffffff"
                  shimmerSize="0.1em"
                  background="linear-gradient(135deg, #ec4899, #be185d)"
                  borderRadius="9999px"
                >
                  <span className="whitespace-nowrap text-lg font-bold px-8 py-3">
                    Start Creating Today
                  </span>
                </ShimmerButton>
              </Link>
              <p className="text-sm text-zinc-300 mt-4">60-day money-back guarantee</p>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  )
}
