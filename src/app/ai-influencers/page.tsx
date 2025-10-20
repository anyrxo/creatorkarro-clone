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
import { Rocket, Video, Bot, Users, Zap, Target, Shield, AlertTriangle, Gem, TrendingUp, Flame, CheckCircle, DollarSign, Phone } from 'lucide-react'

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
  '169',
  'Anyro'
)

export default function AIInfluencersPage() {
  // Scroll animations for different sections
  const heroAnimation = useScrollAnimation({ threshold: 0.2 })
  const problemAnimation = useScrollAnimation({ threshold: 0.1 })
  const solutionAnimation = useScrollAnimation({ threshold: 0.1 })
  const curriculumAnimation = useScrollAnimation({ threshold: 0.1 })
  const bonusAnimation = useScrollAnimation({ threshold: 0.1 })
  const valueAnimation = useScrollAnimation({ threshold: 0.1 })
  const pricingAnimation = useScrollAnimation({ threshold: 0.2 })
  const testimonialsAnimation = useScrollAnimation({ threshold: 0.1 })
  const faqAnimation = useScrollAnimation({ threshold: 0.1 })
  const urgencyAnimation = useScrollAnimation({ threshold: 0.1 })
  const ctaAnimation = useScrollAnimation({ threshold: 0.3 })

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
      "price": "169",
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
      title: "AI Character Creation Mastery",
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
      price: "$169",
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
      badgeColor: "bg-red-500"
    },
    {
      name: "Whop All-Access",
      description: "PER MONTH",
      price: "$39.99",
      originalPrice: "$99.99",
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
      badge: "POPULAR - ALL 5 COURSES",
      badgeColor: "bg-purple-500",
      popular: true,
      hoverEffect: true,
      buttonText: "Join Whop All-Access",
      buttonLink: "https://whop.com/anyro/premium-monthly-0a/"
    }
  ]

  return (
    <>
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
      {/* Hero Section */}
      <div ref={heroAnimation.elementRef} className="relative z-10">
        <HeroSection
          badge="LIMITED TIME OFFER: Price increasing soon"
          badgeColor="bg-yellow-600/30 text-yellow-300"
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

      {/* Value Stack & Pricing Section */}
      <section className="section-spacing bg-gradient-to-b from-zinc-900/50 to-black" id="packages">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={valueAnimation.elementRef}>
            <SectionHeader
              badge="LIMITED TIME OFFER"
              badgeColor="text-red-400"
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
            <Link href="/checkout?course=ai-influencers" className="inline-block focus:outline-none focus:ring-4 focus:ring-pink-500/50 rounded-full">
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

                <Link href="/checkout?course=ai-influencers" className="inline-block focus:outline-none focus:ring-4 focus:ring-red-500/50 rounded-full">
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
              <Link href="/checkout?course=ai-influencers" className="inline-block focus:outline-none focus:ring-4 focus:ring-pink-500/50 rounded-full">
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