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
import { ChevronRight, Target, Video, FileText, Users, BarChart3, Handshake, Zap, Flame, CheckCircle, XCircle, AlertTriangle, Bot, Workflow, Code, DollarSign } from 'lucide-react'

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
    "name": "AI Automations: Build 6-Figure AI Automation Agency - ChatGPT, Claude, n8n, Zapier, Make",
    "description": "Complete AI automation agency training for entrepreneurs. Master n8n, Zapier, Make workflow automation + ChatGPT, Claude AI, Midjourney integrations. Build AI chatbots, AI workflows, intelligent automation services. Learn client acquisition to land $2K-$10K monthly AI service retainers. Build profitable AI consulting business serving 5-15 clients generating $10K-$50K monthly.",
    "provider": {
      "@type": "Organization",
      "name": "IImagined",
      "url": "https://iimagined.ai",
      "description": "Leading AI automation and digital business education platform"
    },
    "instructor": {
      "@type": "Person",
      "name": "Anyro",
      "url": "https://iimagined.ai/story",
      "jobTitle": "AI Automation Expert & Agency Builder",
      "description": "Built multiple 6-figure automation businesses helping 800+ students launch AI automation agencies"
    },
    "courseMode": "online",
    "educationalLevel": "Beginner to Advanced",
    "teaches": [
      "n8n Workflow Automation & AI Integration",
      "Zapier AI Integration & Consulting",
      "Make.com Automation Workflows",
      "ChatGPT API Integration for Business",
      "Claude AI Automation Services",
      "Midjourney AI Image Generation Automation",
      "AI Chatbot Development & Deployment",
      "Intelligent Workflow Automation",
      "Business Process Automation",
      "Automation Client Acquisition & Sales",
      "Automation Agency Service Delivery",
      "Automation Pricing & Retainer Models",
      "Agency Scaling & Team Building"
    ],
    "hasCourseInstance": {
      "@type": "CourseInstance",
      "courseMode": "online",
      "courseWorkload": "PT25H",
      "instructor": {
        "@type": "Person",
        "name": "Anyro"
      }
    },
    "offers": {
      "@type": "Offer",
      "price": "399",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock",
      "url": "https://iimagined.ai/ai-automations",
      "category": "AI Automation Agency & Consulting Course",
      "validFrom": "2025-01-01",
      "priceValidUntil": "2025-12-31"
    },
    "totalTime": "PT25H",
    "inLanguage": "en-US",
    "numberOfCredits": 12,
    "educationalCredentialAwarded": "AI Automation Agency Mastery Certificate",
    "syllabusSections": [
      {
        "@type": "Syllabus",
        "name": "Automation Foundations",
        "description": "n8n, Zapier, Make fundamentals and automation business models"
      },
      {
        "@type": "Syllabus",
        "name": "AI Integration Mastery",
        "description": "ChatGPT, Claude, Midjourney API integrations and AI chatbot development"
      },
      {
        "@type": "Syllabus",
        "name": "Client Acquisition System",
        "description": "Cold outreach, proposals, discovery calls to land automation clients"
      },
      {
        "@type": "Syllabus",
        "name": "Agency Scaling",
        "description": "Team building, delegation, and scaling to $50K+ monthly revenue"
      }
    ],
    "audience": {
      "@type": "EducationalAudience",
      "educationalRole": "student",
      "audienceType": ["Entrepreneurs", "Freelancers", "Consultants", "Tech Enthusiasts", "Business Owners", "Automation Specialists"]
    },
    "coursePrerequisites": "None - No coding or automation experience required. Complete beginner-friendly training.",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "800",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Marcus Thompson"
        },
        "reviewBody": "Went from zero automation knowledge to landing 6 clients in 90 days. Now making $12K/month with n8n automation services. The client acquisition templates were game-changing!"
      },
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Sarah Chen"
        },
        "reviewBody": "Added automation services to my marketing agency. Increased client LTV from $3K to $10K. Now have 8 clients on monthly retainers. Best business decision ever!"
      }
    ]
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the best AI automation agency course for beginners in 2025?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "AI Automations by IImagined is the most comprehensive beginner-friendly AI automation agency course in 2025, featuring proven strategies for building a profitable automation consulting business. Learn n8n, Zapier, Make workflow automation plus ChatGPT, Claude AI, and Midjourney integrations. Build AI chatbots, AI workflows, and intelligent automation services to offer businesses."
        }
      },
      {
        "@type": "Question",
        "name": "How quickly can I start landing automation clients and making money?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most students land their first automation client within 30-60 days of implementing the cold outreach and client acquisition strategies taught in the course. You'll learn proven cold email templates (80% open rates), LinkedIn outreach, proposals, discovery calls, and service delivery to start generating $2K-$10K monthly retainers quickly."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need coding or programming experience for AI automation?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Not at all! n8n, Zapier, and Make are no-code/low-code automation platforms with visual workflow builders. ChatGPT, Claude, and Midjourney integrate via simple APIs. AI Automations course teaches you everything from scratch with step-by-step tutorials. Zero programming or technical background required to build AI chatbots and automation services."
        }
      },
      {
        "@type": "Question",
        "name": "How much can I charge for AI automation and AI chatbot services?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Students typically charge $2K-$10K monthly retainers per client for ongoing automation and AI integration services. One-time AI chatbot or workflow projects range from $1K-$5K. With 5-10 clients, you can build a $10K-$50K monthly AI automation agency. AI services command premium pricing due to high ROI for businesses."
        }
      },
      {
        "@type": "Question",
        "name": "What AI tools and automation platforms will I learn to master?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You'll master n8n, Zapier, and Make.com for workflow automation, plus ChatGPT API, Claude AI, and Midjourney for AI integrations. Learn to build AI chatbots, intelligent document processing, automated content generation, lead qualification AI, email response automation, CRM integrations, and 100+ other app connections to offer comprehensive AI automation services."
        }
      },
      {
        "@type": "Question",
        "name": "Can I build an AI automation agency with no prior business experience?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely! The course covers everything from technical automation skills to complete business systems: client acquisition, pricing strategies, service delivery, contracts, proposals, and scaling. 800+ students started with zero automation or business experience and now run profitable AI automation agencies earning $10K-$50K monthly."
        }
      },
      {
        "@type": "Question",
        "name": "What types of AI automation services can I offer to clients?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can offer AI chatbots for customer service, automated lead generation and qualification, email marketing automation, CRM workflow automation, AI-powered content creation, document processing with AI, social media automation, data enrichment and web scraping, Slack/Discord automation, customer onboarding sequences, and custom AI integrations tailored to any business need."
        }
      },
      {
        "@type": "Question",
        "name": "Is there a refund policy for the AI Automations course?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! We offer a 30-day money-back guarantee. If you go through the AI automation training, implement the strategies, and don't see results or value, just email us for a full refund. No questions asked. We're confident you'll build a profitable automation business."
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
    "description": "Leading AI automation and digital business education platform",
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
  const storiesAnimation = useScrollAnimation({ threshold: 0.1 })

  return (
    <>
      {/* SEO: AI Content Declaration for AI Automations Course Page */}
      <AIContentDeclaration
        title="AI Automations: Build 6-Figure Automation Agency - Complete n8n, Zapier, Make, ChatGPT, Claude AI Course"
        description="Master AI automation agency business with proven AI integration strategies. Learn n8n, Zapier, Make + ChatGPT, Claude, Midjourney integrations. Build AI chatbots, AI workflows, intelligent automation. Land $2K-$10K monthly AI service retainers serving businesses with automation consulting."
        contentType="course"
        primaryTopic="AI Automation Agency, AI Services, & AI Consulting Business Training"
        keywords={[
          'AI automation agency',
          'AI services business',
          'AI chatbot development',
          'AI workflow automation',
          'ChatGPT integration',
          'Claude AI automation',
          'Midjourney automation',
          'intelligent automation',
          'AI consulting business',
          'n8n AI automation',
          'Zapier AI integration',
          'Make AI workflows',
          'automation agency business',
          'AI automation consultant',
          'AI integration services',
          'business process automation',
          'workflow automation tools',
          'AI powered automation',
          'automation services consulting',
          'no-code AI automation',
          'AI chatbots for business',
          'automation retainer clients',
          'AI automation freelancing',
          'automation course 2025',
          'build AI chatbots',
          'AI automation training',
          'automation agency course',
          'AI services consulting',
          'intelligent workflow automation'
        ]}
        author="Anyro"
        datePublished="2025-01-01"
        dateModified="2025-01-29"
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
        AI Automations: Build 6-Figure Automation Agency - Complete n8n, Zapier, Make Course
      </h1>
      {/* 1. Hero Section */}
      <div ref={heroAnimation.elementRef}>
        <HeroSection
          badge="AI AUTOMATION AGENCY BUILDER"
          badgeColor="bg-gradient-to-r from-orange-600/20 to-red-600/20 text-orange-300 px-4 py-2 rounded-full"
          title="Build a <span className='text-orange-400'>6-Figure AI Automation Agency</span> Offering <span className='text-orange-400'>AI Services & Intelligent Automation</span>"
          description="The ONLY complete system to launch an AI automation consulting business. Build AI chatbots, AI workflows, and intelligent automation services. Land $2K-$10K monthly AI service retainers in 90 days or less."
          ctaText="Start Your AI Automation Agency"
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
            { value: "5-15", label: "Avg Clients Landed", color: "text-purple-400" }
          ]}
          isVisible={heroAnimation.isVisible}
        />
      </div>

      {/* SEO: Social Proof Component */}
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
      <section className="section-spacing border-t border-orange-900/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={problemAnimation.elementRef}>
            <SectionHeader
              badge="THE AI AUTOMATION OPPORTUNITY"
              title="Every Business Needs AI Automation... But Nobody Knows How to Build It"
              subtitle="The $200 billion AI automation market is exploding. 92% of businesses want AI chatbots, AI workflows, and intelligent automation but lack expertise. This is YOUR opportunity to offer AI services."
              isVisible={problemAnimation.isVisible}
            />
          </div>

          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: '❌',
                title: 'Businesses Drowning in Manual Work',
                description: 'Companies waste 40+ hours weekly on repetitive tasks: data entry, email responses, customer onboarding, reporting. They NEED automation but don\'t know where to start.'
              },
              {
                icon: '❌',
                title: 'Agencies Charging $10K+ for Simple Workflows',
                description: 'Traditional dev agencies charge $10K-$50K for basic automation that takes 5-10 hours to build. Small businesses can\'t afford it, creating massive demand for affordable automation services.'
              },
              {
                icon: '❌',
                title: 'AI Tools Sitting Unused',
                description: 'Businesses subscribe to ChatGPT, Claude, Midjourney but never integrate them. They desperately need AI consultants who can build custom AI chatbots, AI workflows, and intelligent automation that actually saves time and money.'
              },
              {
                icon: '❌',
                title: 'No Idea How to Find Clients',
                description: 'You learn automation but struggle to land clients. Without outreach systems, proposal templates, and pricing strategies, your skills sit unused while businesses desperately need help.'
              },
              {
                icon: '❌',
                title: 'Overwhelmed by Tools & Options',
                description: 'n8n, Zapier, Make, Integromat, Pipedream... which one? How do they compare? You waste months learning the wrong tools instead of building profitable client projects.'
              },
              {
                icon: '❌',
                title: 'Can\'t Scale Past Freelancing',
                description: 'You land a few clients but get stuck doing all the work yourself. No systems for delegation, white-labeling, or scaling means you trade time for money forever.'
              }
            ].map((problem, index) => (
              <div key={index} ref={problemCards.setElementRef(index)}>
                <ProblemCard
                  icon={problem.icon}
                  title={problem.title}
                  description={problem.description}
                  isVisible={problemCards.visibleElements[index]}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOLUTION Section */}
      <section className="section-spacing bg-gradient-to-b from-black to-zinc-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={solutionAnimation.elementRef}>
            <SectionHeader
              badge="THE COMPLETE AI SOLUTION"
              title="Build a Profitable AI Automation Agency from Scratch"
              subtitle="Master AI integrations (ChatGPT, Claude, Midjourney) + automation tools (n8n, Zapier, Make). Build AI chatbots, AI workflows, intelligent automation. Scale to $10K-$50K monthly offering AI services."
              isVisible={solutionAnimation.isVisible}
            />
          </div>

          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: 'workflow',
                color: 'from-orange-400 to-red-400',
                title: 'Master All Automation Tools',
                description: 'n8n, Zapier, Make deep-dives with 50+ workflow templates. Build anything from simple Slack notifications to complex CRM + AI + email automations.'
              },
              {
                icon: 'bot',
                color: 'from-purple-400 to-pink-400',
                title: 'AI Services Mastery',
                description: 'Master ChatGPT, Claude, Midjourney integrations. Build AI chatbots for customer service, AI content generators, AI-powered lead qualification. Offer premium AI services that sell for $3K-$10K.'
              },
              {
                icon: 'users',
                color: 'from-blue-400 to-cyan-400',
                title: 'Client Acquisition System',
                description: 'Cold outreach templates, proposal frameworks, discovery call scripts. Land 5-10 clients in 90 days with proven acquisition playbooks.'
              },
              {
                icon: 'dollarSign',
                color: 'from-green-400 to-emerald-400',
                title: 'Pricing & Packaging',
                description: 'Monthly retainer structures, project pricing, upsell strategies. Charge $2K-$10K/month per client with packaged automation services.'
              }
            ].map((solution, index) => (
              <div key={index} className="text-center">
                <div className={`inline-flex items-center justify-center w-16 h-16 mb-6 rounded-2xl bg-gradient-to-br ${solution.color} bg-opacity-10`}>
                  {getIcon(solution.icon, `bg-gradient-to-r ${solution.color} bg-clip-text text-transparent w-8 h-8`)}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{solution.title}</h3>
                <p className="text-zinc-300">{solution.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TOOLS & PLATFORMS Section */}
      <section className="section-spacing bg-gradient-to-b from-black to-zinc-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/30 rounded-full px-6 py-2 mb-6">
              <Bot className="w-5 h-5 text-orange-400" />
              <span className="text-orange-300 font-semibold">AI TOOLS & PLATFORMS</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Master the <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">Entire AI Automation Stack</span>
            </h2>
            <p className="text-xl text-zinc-200 max-w-3xl mx-auto">
              Build AI chatbots, intelligent workflows, and automation services using industry-leading platforms
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { name: 'ChatGPT', category: 'AI Model', icon: '🤖' },
              { name: 'Claude AI', category: 'AI Model', icon: '🧠' },
              { name: 'Midjourney', category: 'AI Image Gen', icon: '🎨' },
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

                {/* Hover effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-600/10 to-red-600/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-zinc-300 mb-6">
              Plus 100+ additional app integrations, APIs, webhooks, and custom AI models
            </p>
          </div>
        </div>
      </section>

      {/* MODULES Section */}
      <section className="section-spacing border-t border-orange-900/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={modulesAnimation.elementRef}>
            <SectionHeader
              badge="COMPLETE CURRICULUM"
              title="12 Modules • 150+ Lessons • 25+ Hours"
              subtitle="Everything you need to build, launch, and scale a profitable AI automation agency"
              isVisible={modulesAnimation.isVisible}
            />
          </div>

          <div className="mt-16 grid md:grid-cols-2 gap-6">
            {[
              {
                number: 1,
                title: 'Automation Foundations',
                description: 'Automation fundamentals, tool landscape, business models, and getting started with your first workflows.',
                color: 'text-orange-400',
                bgColor: 'bg-orange-900/20',
                borderColor: 'border-orange-500/30',
                whatYouLearn: ['Automation business models', 'n8n vs Zapier vs Make comparison', 'Setting up your automation toolkit', 'First workflow in 30 minutes'],
                value: '2 hours • 12 lessons'
              },
              {
                number: 2,
                title: 'n8n Mastery',
                description: 'Complete n8n training from basic workflows to advanced multi-step automations with error handling.',
                color: 'text-blue-400',
                bgColor: 'bg-blue-900/20',
                borderColor: 'border-blue-500/30',
                whatYouLearn: ['n8n fundamentals & interface', 'HTTP requests & webhooks', 'Database integrations', 'Advanced workflow patterns', 'Error handling & monitoring'],
                value: '3.5 hours • 18 lessons'
              },
              {
                number: 3,
                title: 'Zapier & Make Deep-Dive',
                description: 'Master Zapier and Make.com for client projects. Build complex multi-app automations with conditional logic.',
                color: 'text-purple-400',
                bgColor: 'bg-purple-900/20',
                borderColor: 'border-purple-500/30',
                whatYouLearn: ['Zapier multi-step zaps', 'Make.com scenarios & routers', 'App integrations (100+ apps)', 'Conditional logic & filters', 'When to use which tool'],
                value: '2.5 hours • 15 lessons'
              },
              {
                number: 4,
                title: 'AI Integration',
                description: 'Connect ChatGPT, Claude, and AI models to business workflows. Build intelligent automation that commands premium pricing.',
                color: 'text-pink-400',
                bgColor: 'bg-pink-900/20',
                borderColor: 'border-pink-500/30',
                whatYouLearn: ['OpenAI API integration', 'AI chatbot workflows', 'Content generation automation', 'AI-powered lead qualification', 'Custom GPT integrations'],
                value: '2.5 hours • 14 lessons'
              },
              {
                number: 5,
                title: 'Client Acquisition',
                description: 'Proven systems to land 5-10 clients in 90 days. Cold outreach, proposals, discovery calls, and closing.',
                color: 'text-green-400',
                bgColor: 'bg-green-900/20',
                borderColor: 'border-green-500/30',
                whatYouLearn: ['Ideal client identification', 'Cold email templates (80% open rate)', 'LinkedIn outreach playbook', 'Discovery call framework', 'Proposal templates that close'],
                value: '3 hours • 16 lessons'
              },
              {
                number: 6,
                title: 'Service Delivery',
                description: 'Project management, client onboarding, workflow documentation, and delivering world-class automation services.',
                color: 'text-cyan-400',
                bgColor: 'bg-cyan-900/20',
                borderColor: 'border-cyan-500/30',
                whatYouLearn: ['Client onboarding process', 'Requirements gathering', 'Project scoping & estimates', 'Workflow documentation', 'Handoff & training'],
                value: '2.5 hours • 13 lessons'
              },
              {
                number: 7,
                title: 'Pricing & Packaging',
                description: 'Price confidently at $2K-$10K/month. Monthly retainers, project pricing, and premium service packages.',
                color: 'text-yellow-400',
                bgColor: 'bg-yellow-900/20',
                borderColor: 'border-yellow-500/30',
                whatYouLearn: ['Monthly retainer structures', 'Project-based pricing', 'Value-based pricing framework', 'Upsell strategies', 'Contracts & agreements'],
                value: '2 hours • 10 lessons'
              },
              {
                number: 8,
                title: 'Niche Selection',
                description: 'Choose profitable niches: e-commerce, real estate, SaaS, agencies. Industry-specific automation blueprints.',
                color: 'text-red-400',
                bgColor: 'bg-red-900/20',
                borderColor: 'border-red-500/30',
                whatYouLearn: ['High-paying niches analysis', 'E-commerce automation workflows', 'Real estate lead nurturing', 'Agency automation services', 'SaaS customer onboarding'],
                value: '1.5 hours • 8 lessons'
              },
              {
                number: 9,
                title: 'Workflow Templates',
                description: '50+ copy-paste workflow templates you can sell immediately. CRM automation, email sequences, data sync, and more.',
                color: 'text-indigo-400',
                bgColor: 'bg-indigo-900/20',
                borderColor: 'border-indigo-500/30',
                whatYouLearn: ['CRM automation templates', 'Email marketing workflows', 'Lead generation automation', 'Customer onboarding sequences', 'Reporting & analytics'],
                value: '3 hours • 20 lessons'
              },
              {
                number: 10,
                title: 'Scaling Your Agency',
                description: 'Hire, delegate, and scale from solopreneur to agency owner. Build systems that don\'t require you.',
                color: 'text-teal-400',
                bgColor: 'bg-teal-900/20',
                borderColor: 'border-teal-500/30',
                whatYouLearn: ['Hiring automation specialists', 'White-label partnerships', 'SOP documentation', 'Team management', 'Scaling to $50K+ monthly'],
                value: '2.5 hours • 12 lessons'
              },
              {
                number: 11,
                title: 'Advanced Integrations',
                description: 'Complex API integrations, webhooks, custom functions, and building enterprise-level automations.',
                color: 'text-violet-400',
                bgColor: 'bg-violet-900/20',
                borderColor: 'border-violet-500/30',
                whatYouLearn: ['REST API fundamentals', 'Webhook automation', 'Custom code in n8n', 'Database automation', 'Enterprise integrations'],
                value: '2.5 hours • 14 lessons'
              },
              {
                number: 12,
                title: 'Business Systems',
                description: 'Operating your agency: contracts, invoicing, client management, marketing, and long-term growth.',
                color: 'text-emerald-400',
                bgColor: 'bg-emerald-900/20',
                borderColor: 'border-emerald-500/30',
                whatYouLearn: ['Legal & contracts', 'Invoicing & payments', 'CRM for agencies', 'Content marketing', 'Long-term client retention'],
                value: '2 hours • 10 lessons'
              }
            ].map((module, index) => (
              <div key={index} ref={moduleCards.setElementRef(index)}>
                <ModuleCard
                  number={module.number}
                  title={module.title}
                  description={module.description}
                  color={module.color}
                  bgColor={module.bgColor}
                  borderColor={module.borderColor}
                  whatYouLearn={module.whatYouLearn}
                  value={module.value}
                  isVisible={moduleCards.visibleElements[index]}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BONUSES Section */}
      <section className="section-spacing bg-gradient-to-b from-zinc-900 to-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={bonusAnimation.elementRef}>
            <SectionHeader
              badge="EXCLUSIVE BONUSES"
              title="$3,479 Worth of Bonuses Included"
              subtitle="Templates, scripts, and resources to accelerate your automation agency"
              isVisible={bonusAnimation.isVisible}
            />
          </div>

          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: '50+ Workflow Templates',
                value: '$997',
                icon: '🤖',
                description: 'Copy-paste n8n, Zapier, and Make templates you can sell immediately to clients. CRM automation, email workflows, lead gen, customer onboarding, and reporting templates.'
              },
              {
                title: 'Client Acquisition Swipe File',
                value: '$497',
                icon: '📧',
                description: 'Cold email templates (80% open rate), LinkedIn outreach scripts, 5 proposal templates, discovery call scripts, and pricing calculator.'
              },
              {
                title: 'AI Integration Blueprints',
                value: '$697',
                icon: '🧠',
                description: 'Pre-built AI automation workflows: ChatGPT chatbots, content generators, lead qualifiers, email response automation, and data enrichment AI.'
              },
              {
                title: 'Agency Legal Pack',
                value: '$397',
                icon: '📄',
                description: 'Contracts, NDAs, service agreements, SOWs, monthly retainer contracts, and independent contractor agreements reviewed by attorneys.'
              },
              {
                title: 'Private Community Access',
                value: '$891',
                icon: '👥',
                description: 'Join 800+ automation agency owners in exclusive Discord. Weekly Q&A calls, workflow sharing, client acquisition tactics, and partnership opportunities.'
              }
            ].map((bonus, index) => (
              <div key={index} ref={bonusCards.setElementRef(index)}>
                <BonusCard
                  title={bonus.title}
                  value={bonus.value}
                  icon={bonus.icon}
                  description={bonus.description}
                  isVisible={bonusCards.visibleElements[index]}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* YOUR TRANSFORMATION JOURNEY Section */}
      <section className="section-spacing bg-gradient-to-b from-black to-zinc-900 border-t border-orange-900/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/30 rounded-full px-6 py-2 mb-6">
              <Zap className="w-5 h-5 text-orange-400" />
              <span className="text-orange-300 font-semibold">YOUR JOURNEY</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              From <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">Zero</span> to <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">$10K/Month</span> in 90 Days
            </h2>
            <p className="text-xl text-zinc-200 max-w-3xl mx-auto">
              Follow the exact roadmap 800+ students used to build profitable AI automation agencies
            </p>
          </div>

          <div className="max-w-5xl mx-auto space-y-8">
            {[
              {
                phase: "Week 1-2",
                title: "Foundation & Setup",
                description: "Master n8n, Zapier, Make fundamentals. Build your first 5 automation workflows. Set up your automation agency foundation.",
                outcomes: ["Complete 5 automation workflows", "Set up agency infrastructure", "Build portfolio pieces"]
              },
              {
                phase: "Week 3-4",
                title: "AI Integration Mastery",
                description: "Integrate ChatGPT, Claude, Midjourney into workflows. Build AI chatbots, content generators, and intelligent automation systems.",
                outcomes: ["Build 3 AI-powered automations", "Master AI API integrations", "Create client demo workflows"]
              },
              {
                phase: "Week 5-8",
                title: "Client Acquisition",
                description: "Launch cold email campaigns, LinkedIn outreach. Book 10+ discovery calls. Close your first 2-3 clients at $2K-$5K monthly retainers.",
                outcomes: ["Send 500+ cold emails", "Book 10+ discovery calls", "Land first 2-3 paying clients"]
              },
              {
                phase: "Week 9-12",
                title: "Scale to $10K/Month",
                description: "Deliver exceptional results. Get referrals and testimonials. Scale to 5-10 clients. Build systems and potentially hire VAs.",
                outcomes: ["Grow to 5-10 clients", "Generate $10K-$30K monthly", "Build scalable systems"]
              }
            ].map((phase, index) => (
              <div key={index} className="relative">
                {/* Connection line */}
                {index < 3 && (
                  <div className="absolute left-12 top-full h-8 w-0.5 bg-gradient-to-b from-orange-500 to-orange-500/0 hidden md:block" />
                )}

                <div className="flex items-start gap-6">
                  {/* Phase number */}
                  <div className="flex-shrink-0 w-24 h-24 rounded-full bg-gradient-to-br from-orange-600 to-red-600 flex items-center justify-center text-2xl font-bold text-white border-4 border-zinc-900">
                    {index + 1}
                  </div>

                  {/* Content */}
                  <div className="flex-1 bg-zinc-900/60 backdrop-blur-sm border border-zinc-800 rounded-2xl p-8 hover:border-orange-500/50 transition-all duration-300">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-3xl font-bold text-white">{phase.title}</h3>
                      <span className="text-orange-400 font-semibold px-4 py-2 bg-orange-500/10 rounded-full">{phase.phase}</span>
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
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-500 hover:to-red-500 text-white font-semibold text-lg rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-orange-500/25"
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
            <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/30 rounded-full px-6 py-2 mb-6">
              <Target className="w-5 h-5 text-orange-400" />
              <span className="text-orange-300 font-semibold">SPECIFIC OUTCOMES</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              What You'll <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">Actually Learn</span>
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
                  "Build complex multi-step workflows in n8n, Zapier, Make",
                  "Integrate ChatGPT & Claude AI into automation workflows",
                  "Create AI chatbots that handle customer support autonomously",
                  "Build automated lead generation & qualification systems",
                  "Set up CRM automation (HubSpot, Salesforce, Pipedrive)",
                  "Create email marketing automation sequences",
                  "Build data enrichment & web scraping automations"
                ]
              },
              {
                category: "Business Skills",
                skills: [
                  "Find & qualify automation clients in any industry",
                  "Conduct discovery calls & needs assessments",
                  "Create compelling proposals & close deals",
                  "Price your services at $2K-$10K monthly retainers",
                  "Deliver client projects on time & exceed expectations",
                  "Generate referrals & build long-term client relationships",
                  "Scale from solo consultant to automation agency"
                ]
              },
              {
                category: "AI Integration",
                skills: [
                  "Master ChatGPT API for content generation & analysis",
                  "Integrate Claude AI for complex reasoning tasks",
                  "Use Midjourney for automated image generation",
                  "Build AI-powered email response systems",
                  "Create intelligent document processing workflows",
                  "Automate content creation with AI writing tools",
                  "Build custom GPTs for specific business use cases"
                ]
              },
              {
                category: "Client Acquisition",
                skills: [
                  "Write cold emails with 40%+ open rates & 8% reply rates",
                  "LinkedIn outreach strategies that book meetings",
                  "Create automation service packages clients want to buy",
                  "Build a portfolio that attracts premium clients",
                  "Network & get referrals from existing clients",
                  "Run discovery calls that close 60%+ of prospects",
                  "Create case studies that sell your services"
                ]
              }
            ].map((category, index) => (
              <div key={index} className="bg-zinc-900/60 backdrop-blur-sm border border-zinc-800 rounded-2xl p-8 hover:border-orange-500/50 transition-all duration-300">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <CheckCircle className="w-8 h-8 text-orange-400" />
                  {category.category}
                </h3>
                <ul className="space-y-4">
                  {category.skills.map((skill, i) => (
                    <li key={i} className="flex items-start gap-3 text-zinc-200">
                      <ChevronRight className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
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
            <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/30 rounded-full px-6 py-2 mb-6">
              <BarChart3 className="w-5 h-5 text-orange-400" />
              <span className="text-orange-300 font-semibold">THE DIFFERENCE</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI Automation Agency vs <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">Traditional Dev Work</span>
            </h2>
            <p className="text-xl text-zinc-200 max-w-3xl mx-auto">
              Why automation consulting is the smarter path in 2025
            </p>
          </div>

          <div className="max-w-5xl mx-auto bg-zinc-900/60 backdrop-blur-sm border border-zinc-800 rounded-2xl overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="bg-zinc-800/50">
                  <th className="px-6 py-4 text-left text-zinc-400 font-semibold">Factor</th>
                  <th className="px-6 py-4 text-left text-orange-400 font-semibold">AI Automation Agency</th>
                  <th className="px-6 py-4 text-left text-red-400 font-semibold">Traditional Dev/Freelancing</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800">
                {[
                  {
                    factor: "Learning Curve",
                    automation: "2-4 weeks to build sellable workflows",
                    traditional: "6-12 months to learn coding/frameworks"
                  },
                  {
                    factor: "Revenue Model",
                    automation: "$2K-$10K monthly retainers per client",
                    traditional: "One-time project fees ($3K-$15K)"
                  },
                  {
                    factor: "Income Stability",
                    automation: "Predictable recurring revenue",
                    traditional: "Feast or famine project cycles"
                  },
                  {
                    factor: "Client Demand",
                    automation: "$200B market growing 40% yearly",
                    traditional: "Saturated, competitive market"
                  },
                  {
                    factor: "Delivery Time",
                    automation: "1-2 weeks to deliver automation",
                    traditional: "2-6 months for custom development"
                  },
                  {
                    factor: "Profit Margins",
                    automation: "70-90% profit margins",
                    traditional: "40-60% profit margins"
                  },
                  {
                    factor: "Scalability",
                    automation: "Easy to hire VAs, scale to team",
                    traditional: "Hard to find/afford skilled developers"
                  },
                  {
                    factor: "Client Results",
                    automation: "Save clients 40+ hours/week immediately",
                    traditional: "Unclear ROI, harder to prove value"
                  }
                ].map((row, index) => (
                  <tr key={index} className="hover:bg-zinc-800/30 transition-colors">
                    <td className="px-6 py-4 text-zinc-300 font-semibold">{row.factor}</td>
                    <td className="px-6 py-4 text-green-400 flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                      <span>{row.automation}</span>
                    </td>
                    <td className="px-6 py-4 text-zinc-400 flex items-start gap-2">
                      <XCircle className="w-5 h-5 flex-shrink-0 mt-0.5 text-red-400" />
                      <span>{row.traditional}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="text-center mt-12">
            <p className="text-xl text-zinc-200 mb-6">
              The choice is clear. Start building your automation empire today.
            </p>
            <Link
              href="#pricing"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-500 hover:to-red-500 text-white font-semibold text-lg rounded-xl transition-all duration-300 transform hover:scale-105"
            >
              Join AI Automations Course
              <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* WHO IS THIS FOR Section */}
      <section className="section-spacing border-t border-orange-900/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={whoForAnimation.elementRef}>
            <SectionHeader
              badge="IS THIS FOR YOU?"
              title="Perfect For Entrepreneurs, Freelancers & Consultants"
              subtitle="Whether you're starting from scratch or adding automation services to your existing business"
              isVisible={whoForAnimation.isVisible}
            />
          </div>

          <div className="mt-16 grid md:grid-cols-3 gap-8">
            {[
              {
                icon: 'checkCircle',
                title: 'Aspiring Automation Consultants',
                description: 'You want to build a location-independent consulting business serving clients with automation. Start from zero and land your first 5 clients in 90 days.',
                points: ['No automation experience needed', 'Complete beginner-friendly', 'Step-by-step client acquisition', 'Land first client in 30-60 days']
              },
              {
                icon: 'checkCircle',
                title: 'Freelancers & Agencies',
                description: 'You offer web design, marketing, or other services. Add high-margin automation services to increase client LTV from $2K to $10K+.',
                points: ['Upsell existing clients', 'Add recurring revenue streams', 'Differentiate from competition', 'Increase client retention']
              },
              {
                icon: 'checkCircle',
                title: 'Tech-Savvy Entrepreneurs',
                description: 'You love technology and problem-solving. Build a scalable business helping companies save 40+ hours weekly with intelligent automation.',
                points: ['High-demand skillset', 'Recession-proof business model', 'Scale beyond freelancing', 'Build systems & teams']
              }
            ].map((persona, index) => (
              <div key={index} ref={whoForCards.setElementRef(index)}>
                <div className={`h-full p-8 rounded-2xl bg-zinc-900/60 backdrop-blur-sm border border-zinc-800 hover:border-orange-500/50 transition-all duration-300 ${whoForCards.visibleElements[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                  style={{ transitionDelay: `${index * 0.1}s` }}>
                  <div className="flex items-center gap-3 mb-6">
                    <CheckCircle className="w-8 h-8 text-green-400" strokeWidth={2} />
                    <h3 className="text-2xl font-bold text-white">{persona.title}</h3>
                  </div>
                  <p className="text-zinc-300 mb-6">{persona.description}</p>
                  <ul className="space-y-3">
                    {persona.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-2 text-zinc-200">
                        <ChevronRight className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STUDENT RESULTS Section */}
      <section className="section-spacing bg-gradient-to-b from-black to-zinc-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={studentResultsAnimation.elementRef}>
            <SectionHeader
              badge="REAL RESULTS"
              title="Students Building $10K-$50K Monthly Agencies"
              subtitle="From complete beginners to profitable automation consultants"
              isVisible={studentResultsAnimation.isVisible}
            />
          </div>

          <div className="mt-16 grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Marcus Thompson",
                role: "Automation Consultant",
                image: "https://i.pravatar.cc/150?img=12",
                result: "$12K Monthly Revenue",
                testimonial: "Went from zero automation knowledge to landing 6 clients in 90 days. Now making $12K/month with n8n automation services. The client acquisition templates were game-changing!"
              },
              {
                name: "Sarah Chen",
                role: "Agency Owner",
                image: "https://i.pravatar.cc/150?img=23",
                result: "$28K Monthly Revenue",
                testimonial: "Added automation services to my marketing agency. Increased client LTV from $3K to $10K. Now have 8 clients on monthly retainers. Best business decision ever!"
              },
              {
                name: "Jake Rodriguez",
                role: "Freelance Automation Specialist",
                image: "https://i.pravatar.cc/150?img=34",
                result: "$8K First Month",
                testimonial: "Landed my first client in 45 days using the cold email templates. Made $8K in my first month. Now working on scaling to 10 clients. The workflow templates are incredible!"
              }
            ].map((testimonial, index) => (
              <div key={index} ref={testimonialCards.setElementRef(index)}>
                <TestimonialCard
                  {...testimonial}
                  isVisible={testimonialCards.visibleElements[index]}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING Section */}
      <section id="pricing" className="section-spacing border-t border-orange-900/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={pricingAnimation.elementRef}>
            <SectionHeader
              badge="LIMITED TIME OFFER"
              title="Build Your Automation Agency Today"
              subtitle="Complete course + bonuses + lifetime updates"
              isVisible={pricingAnimation.isVisible}
            />
          </div>

          <div className={`mt-16 max-w-4xl mx-auto transition-all duration-700 ${pricingAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-orange-600/20 to-red-600/20 rounded-3xl blur-xl" />

              <div className="relative bg-zinc-900/80 backdrop-blur-sm border-2 border-orange-500/50 rounded-3xl p-10 lg:p-12">
                <div className="text-center mb-10">
                  <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/30 rounded-full px-6 py-2 mb-6">
                    <Flame className="w-5 h-5 text-orange-400" />
                    <span className="text-orange-300 font-semibold">Launch Special - 50% Off</span>
                  </div>
                  <h3 className="text-4xl lg:text-5xl font-black text-white mb-4">AI Automations Complete</h3>
                  <p className="text-xl text-zinc-300">12 Modules • 150+ Lessons • $3,479 in Bonuses</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-10">
                  <div>
                    <h4 className="text-lg font-bold text-white mb-4">What's Included:</h4>
                    <ul className="space-y-3">
                      {[
                        '12 comprehensive modules (25+ hours)',
                        'n8n, Zapier, Make mastery',
                        '50+ workflow templates',
                        'Client acquisition system',
                        'AI integration blueprints',
                        'Pricing & proposal templates'
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-zinc-200">
                          <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-4">Exclusive Bonuses:</h4>
                    <ul className="space-y-3">
                      {[
                        'Agency legal pack ($397 value)',
                        'Private community access (lifetime)',
                        'Weekly Q&A calls',
                        'Workflow swipe files',
                        'Lifetime updates',
                        '30-day money-back guarantee'
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-zinc-200">
                          <CheckCircle className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="text-center border-t border-zinc-700 pt-10">
                  <div className="mb-6">
                    <div className="flex items-center justify-center gap-4 mb-2">
                      <span className="text-3xl text-zinc-400 line-through">$797</span>
                      <span className="text-6xl font-black bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">$399</span>
                    </div>
                    <p className="text-zinc-300">One-time payment • Lifetime access</p>
                  </div>

                  <button
                    onClick={handleBuyNow}
                    className="w-full md:w-auto px-12 py-5 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-500 hover:to-red-500 text-white text-xl font-bold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/50"
                  >
                    Start Building Your Agency Now →
                  </button>

                  <p className="mt-6 text-sm text-zinc-400">
                    <CheckCircle className="w-4 h-4 inline text-green-400 mr-1" />
                    30-day money-back guarantee • Secure checkout
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-spacing bg-gradient-to-b from-zinc-900 to-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={faqAnimation.elementRef}>
            <SectionHeader
              badge="FAQ"
              title="Frequently Asked Questions"
              subtitle="Everything you need to know about building an automation agency"
              isVisible={faqAnimation.isVisible}
            />
          </div>

          <div className="mt-16 max-w-4xl mx-auto space-y-4">
            {[
              {
                question: 'Do I need coding experience?',
                answer: 'Not at all! n8n, Zapier, and Make are no-code/low-code platforms designed for non-programmers. We teach you everything from scratch with visual drag-and-drop interfaces. If you can use Google Docs, you can build automation workflows.'
              },
              {
                question: 'How quickly can I start landing clients?',
                answer: 'Most students land their first client within 30-60 days using our client acquisition templates and outreach strategies. You\'ll learn proven cold email, LinkedIn outreach, and proposal frameworks that get responses from businesses actively looking for automation help.'
              },
              {
                question: 'What kind of clients will I work with?',
                answer: 'You\'ll serve small-to-medium businesses in niches like e-commerce, real estate, SaaS, agencies, and consultants. These businesses have 5-50 employees, budgets of $2K-$10K monthly, and desperate need for automation to save time and scale.'
              },
              {
                question: 'How much can I charge for automation services?',
                answer: 'Students typically charge $2K-$10K monthly retainers per client depending on scope and niche. One-time projects range from $1K-$5K. With 5-10 clients, you can realistically build a $10K-$50K monthly consulting business.'
              },
              {
                question: 'Is this different from freelancing?',
                answer: 'Yes! We teach you to build a scalable agency, not just trade time for money. You\'ll learn to hire, delegate, white-label services, and build systems that run without you. This is about building a real business, not just another freelance gig.'
              },
              {
                question: 'What tools do I need to get started?',
                answer: 'You\'ll need n8n (free self-hosted or $20/month cloud), and either Zapier or Make ($20-$40/month). Total investment: $20-$60 monthly for tools. We provide all training, templates, and resources - no expensive software required.'
              },
              {
                question: 'How is this different from other automation courses?',
                answer: 'Most courses teach you tools but leave you stuck on "how do I find clients?" We provide the COMPLETE system: tool mastery, client acquisition, service delivery, pricing, scaling, and legal templates. It\'s everything you need to run a profitable agency from day one.'
              },
              {
                question: 'What if I get stuck or have questions?',
                answer: 'You get lifetime access to our private Discord community with 800+ automation agency owners, plus weekly Q&A calls where we answer your questions live. You\'re never alone - we\'re here to help you succeed.'
              },
              {
                question: 'Is there a refund policy?',
                answer: 'Absolutely! We offer a 30-day money-back guarantee. If you go through the course, implement the strategies, and don\'t see results or value, just email us for a full refund. No questions asked.'
              },
              {
                question: 'Will this work in my country/location?',
                answer: 'Yes! Automation is a global service delivered remotely. Students from US, UK, Canada, Europe, Asia, and Latin America are successfully landing clients worldwide. All you need is internet access and the ability to communicate in English.'
              }
            ].map((faq, index) => (
              <div key={index} ref={faqCards.setElementRef(index)}>
                <FAQCard
                  question={faq.question}
                  answer={faq.answer}
                  isVisible={faqCards.visibleElements[index]}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-spacing border-t border-orange-900/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={finalCtaAnimation.elementRef}>
            <div className={`max-w-4xl mx-auto text-center transition-all duration-700 ${finalCtaAnimation.isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
              <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/30 rounded-full px-6 py-2 mb-8">
                <Flame className="w-5 h-5 text-orange-400" />
                <span className="text-orange-300 font-semibold">Limited Time: 50% Launch Discount</span>
              </div>

              <h2 className="text-5xl lg:text-7xl font-black text-white mb-6">
                Ready to Build Your
                <span className="block bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                  Automation Agency?
                </span>
              </h2>

              <p className="text-xl lg:text-2xl text-zinc-200 mb-12 leading-relaxed">
                Join 800+ students building profitable automation consulting businesses. Master n8n, Zapier, Make, and AI integrations. Land $2K-$10K monthly retainers. Build a scalable, location-independent business.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
                <button
                  onClick={handleBuyNow}
                  className="w-full sm:w-auto px-12 py-5 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-500 hover:to-red-500 text-white text-xl font-bold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/50"
                >
                  Start Your Agency Today - $399 →
                </button>
              </div>

              <p className="text-sm text-zinc-400">
                <CheckCircle className="w-4 h-4 inline text-green-400 mr-1" />
                30-day money-back guarantee • Lifetime access • Instant access after purchase
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Crypto Checkout Modal */}
      {isCheckoutOpen && (
        <CryptoCheckout
          product={product}
          isOpen={isCheckoutOpen}
          onClose={() => setIsCheckoutOpen(false)}
        />
      )}
    </div>
    </>
  )
}
