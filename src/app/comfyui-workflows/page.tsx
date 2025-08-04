'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from 'react'
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
import NumberTicker from '@/components/magicui/number-ticker'
import WordRotate from '@/components/magicui/word-rotate'
import BlurIn from '@/components/magicui/blur-in'
import TypingAnimation from '@/components/magicui/typing-animation'
import AnimatedGradientText from '@/components/magicui/animated-gradient-text'
import ShimmerButton from '@/components/magicui/shimmer-button'
import { Palette, Layers, Wand2, BookOpen, Video, Users } from 'lucide-react'

// Icon mapping function
const getIcon = (iconName: string, className?: string) => {
  const iconProps = { className: className || "w-6 h-6", strokeWidth: 2 }
  const icons: { [key: string]: JSX.Element } = {
    palette: <Palette {...iconProps} />,
    layers: <Layers {...iconProps} />,
    wand2: <Wand2 {...iconProps} />,
    bookOpen: <BookOpen {...iconProps} />,
    video: <Video {...iconProps} />,
    users: <Users {...iconProps} />
  }
  return icons[iconName] || <Palette {...iconProps} />
}

export default function ComfyUIWorkflowsPage() {
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

  // Schema markup for ComfyUI Workflows Course
  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "ComfyUI Workflows: Ultimate AI Image Generation Course",
    "description": "Master ComfyUI with professional workflows for AI image generation. Learn advanced techniques, custom nodes, and automated image generation systems from industry experts.",
    "provider": {
      "@type": "Organization",
      "name": "IImagined",
      "url": "https://iimagined.ai"
    },
    "instructor": {
      "@type": "Person",
      "name": "Anyro",
      "url": "https://iimagined.ai/story",
      "jobTitle": "AI Image Generation Expert",
      "alumniOf": "ComfyUI Professional"
    },
    "courseMode": "online",
    "educationalLevel": "Beginner to Advanced",
    "teaches": [
      "ComfyUI Workflow Creation",
      "AI Image Generation",
      "Custom Node Development",
      "Automation Systems",
      "Professional Image Production",
      "Advanced AI Techniques"
    ],
    "offers": {
      "@type": "Offer",
      "price": "247",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock",
      "category": "AI Education Course",
      "hasCourseInstance": {
        "@type": "CourseInstance",
        "courseMode": "online",
        "courseWorkload": "15+ hours",
        "instructor": "Anyro"
      }
    },
    "totalTime": "PT15H",
    "numberOfCredits": 8,
    "educationalCredentialAwarded": "ComfyUI Professional Certificate",
    "audience": {
      "@type": "EducationalAudience",
      "educationalRole": "student",
      "audienceType": ["AI Enthusiasts", "Graphic Designers", "Content Creators", "Digital Artists"]
    },
    "coursePrerequisites": "Basic computer skills - suitable for beginners",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "1200",
      "bestRating": "5"
    }
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the best ComfyUI course for beginners?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "ComfyUI Workflows by IImagined is the most comprehensive beginner-friendly ComfyUI course, featuring step-by-step workflows, professional techniques, and hands-on projects for mastering AI image generation."
        }
      },
      {
        "@type": "Question", 
        "name": "Do I need prior AI experience for ComfyUI?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No prior AI experience required! The ComfyUI Workflows course starts with fundamentals and progressively builds to advanced techniques. Perfect for complete beginners to AI image generation."
        }
      },
      {
        "@type": "Question",
        "name": "What can I create with ComfyUI?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "With ComfyUI, you can create professional AI images, automated workflows, custom art styles, batch processing systems, and advanced image generation pipelines for any creative project."
        }
      },
      {
        "@type": "Question",
        "name": "How is ComfyUI different from other AI image tools?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "ComfyUI offers node-based workflow creation, unlimited customization, local processing, and professional-grade control over AI image generation - far more powerful than simple prompt-based tools."
        }
      }
    ]
  }

  // Define modules data for ComfyUI
  const modules = [
    {
      number: 1,
      title: "ComfyUI Fundamentals & Setup",
      description: "Master the core concepts and get your environment optimized",
      color: "text-orange-400",
      bgColor: "bg-gradient-to-r from-orange-900/20 to-red-900/20",
      borderColor: "border-orange-500/30",
      whatYouLearn: [
        "Complete ComfyUI installation & optimization",
        "Understanding nodes and workflow logic",
        "Interface navigation and shortcuts",
        "Hardware requirements and setup",
        "Troubleshooting common issues"
      ],
      deliverables: [
        "Optimized ComfyUI installation",
        "Essential node reference guide",
        "Performance optimization checklist",
        "Hardware compatibility matrix"
      ],
      value: "$147"
    },
    {
      number: 2,
      title: "Essential Workflows Collection",
      description: "50+ proven workflows for every content creation need",
      color: "text-blue-400",
      bgColor: "bg-gradient-to-r from-blue-900/20 to-cyan-900/20",
      borderColor: "border-blue-500/30",
      whatYouLearn: [
        "Portrait and character workflows",
        "Landscape and environment creation",
        "Product photography workflows",
        "Style transfer and artistic effects",
        "Batch processing systems"
      ],
      tools: [
        "50+ ready-to-use workflows",
        "Workflow modification guides",
        "Custom node collections",
        "Parameter optimization sheets"
      ],
      value: "$197"
    },
    {
      number: 3,
      title: "Advanced Image Control",
      description: "Precision control over every aspect of your generated images",
      color: "text-purple-400",
      bgColor: "bg-gradient-to-r from-purple-900/20 to-indigo-900/20",
      borderColor: "border-purple-500/30",
      whatYouLearn: [
        "ControlNet integration and usage",
        "Pose control and character consistency",
        "Face restoration and enhancement",
        "Image upscaling and refinement",
        "Style consistency across batches"
      ],
      deliverables: [
        "ControlNet workflow library",
        "Pose reference collections",
        "Enhancement preset library",
        "Consistency maintenance guides"
      ],
      value: "$167"
    },
    {
      number: 4,
      title: "Automation & Batch Processing",
      description: "Scale your content creation with automated workflows",
      color: "text-green-400",
      bgColor: "bg-gradient-to-r from-green-900/20 to-emerald-900/20",
      borderColor: "border-green-500/30",
      whatYouLearn: [
        "Queue management and automation",
        "Batch processing large datasets",
        "Automated parameter variation",
        "Output organization systems",
        "Error handling and recovery"
      ],
      tools: [
        "Automation script templates",
        "Batch processing workflows",
        "Queue optimization tools",
        "Output management systems"
      ],
      value: "$147"
    },
    {
      number: 5,
      title: "Custom Nodes & Extensions",
      description: "Extend ComfyUI with powerful custom functionality",
      color: "text-pink-400",
      bgColor: "bg-gradient-to-r from-pink-900/20 to-purple-900/20",
      borderColor: "border-pink-500/30",
      whatYouLearn: [
        "Essential custom node installation",
        "Node development fundamentals",
        "Community extension integration",
        "Creating custom workflows",
        "Advanced node combinations"
      ],
      deliverables: [
        "Custom node collection",
        "Installation automation scripts",
        "Node development templates",
        "Advanced workflow examples"
      ],
      value: "$127"
    },
    {
      number: 6,
      title: "Business Integration & Monetization",
      description: "Turn your ComfyUI skills into profitable ventures",
      color: "text-yellow-400",
      bgColor: "bg-gradient-to-r from-yellow-900/20 to-orange-900/20",
      borderColor: "border-yellow-500/30",
      whatYouLearn: [
        "Client service workflow optimization",
        "Pricing strategies for AI services",
        "Portfolio development and presentation",
        "Client communication and delivery",
        "Scaling your AI image business"
      ],
      deliverables: [
        "Business workflow templates",
        "Pricing calculation sheets",
        "Client presentation materials",
        "Service delivery systems"
      ],
      value: "$197"
    }
  ]

  // Define bonuses data
  const bonuses = [
    {
      icon: "palette",
      title: "Premium Model Collection",
      description: "50+ high-quality models and checkpoints",
      value: "$197"
    },
    {
      icon: "wand2",
      title: "Workflow Optimizer Tool",
      description: "Automated workflow performance optimization",
      value: "$127"
    },
    {
      icon: "video",
      title: "Video Tutorial Library",
      description: "100+ step-by-step video tutorials",
      value: "$147"
    },
    {
      icon: "layers",
      title: "Custom Node Pack",
      description: "Exclusive collection of custom nodes",
      value: "$97"
    },
    {
      icon: "bookOpen",
      title: "Business Templates",
      description: "Client contracts and pricing templates",
      value: "$127"
    },
    {
      icon: "",
      title: "1-on-1 Setup Session",
      description: "Personal optimization consultation",
      value: "$147"
    }
  ]

  // Define testimonials data
  const testimonials = [
    {
      name: "Sarah Mitchell",
      role: "Digital Artist",
      image: "https://ext.same-assets.com/1161517358/3820475784.webp",
      testimonial: "ComfyUI Workflows transformed my creative process! I went from spending hours tweaking settings to having professional results in minutes. The workflows are incredibly well-designed and save me 5+ hours daily. My client turnaround time improved by 80%!",
      result: "5+ hours saved daily, 80% faster turnaround"
    },
    {
      name: "Marcus Chen",
      role: "Content Creator",
      image: "https://ext.same-assets.com/1161517358/3495288803.webp",
      testimonial: "I was struggling with inconsistent results until I found these workflows. Now I can produce consistent, high-quality content at scale. My social media engagement increased 300% because I can focus on creativity instead of technical setup.",
      result: "300% engagement increase, consistent quality"
    },
    {
      name: "Elena Rodriguez",
      role: "AI Service Provider",
      image: "https://ext.same-assets.com/1161517358/2908592891.webp",
      testimonial: "The business integration module was a game-changer. I built a $15K/month AI image service using these workflows. The client delivery systems and automation tools make it possible to serve 50+ clients efficiently.",
      result: "$15K/month AI service business"
    }
  ]

  // Define FAQ data
  const faqs = [
    {
      question: "Do I need coding experience to use ComfyUI workflows?",
      answer: "No coding required! Our workflows are designed for visual learners. You'll learn through drag-and-drop interfaces and we provide step-by-step video tutorials for everything. Most students are creating professional results within their first week."
    },
    {
      question: "What hardware do I need to run ComfyUI effectively?",
      answer: "While ComfyUI can run on various hardware, we recommend at least 8GB GPU VRAM for optimal performance. We include a complete hardware guide and optimization techniques to maximize performance on your current setup, plus cloud alternatives if needed."
    },
    {
      question: "How is this different from using Stable Diffusion interfaces?",
      answer: "ComfyUI offers unprecedented control and automation capabilities. While other interfaces are simplified, ComfyUI lets you create complex, reproducible workflows. Our training bridges the gap, making this advanced tool accessible to everyone."
    },
    {
      question: "Can I use these workflows for commercial projects?",
      answer: "Absolutely! All workflows are designed for commercial use. We include business templates, pricing guides, and client delivery systems. Many students build profitable AI image services using our workflows and business integration strategies."
    },
    {
      question: "How often are the workflows updated?",
      answer: "We constantly update our workflow collection as new models and techniques emerge. Lifetime access includes all future updates, new workflows, and technique refinements. You'll always have access to cutting-edge methods."
    },
    {
      question: "What if I get stuck or need help?",
      answer: "Comprehensive support is included! You get access to our private community, weekly Q&A calls, troubleshooting guides, and direct access to our team. Plus detailed documentation for every workflow and technique."
    },
    {
      question: "How long does it take to become proficient?",
      answer: "Most students see dramatic improvements within the first week. Full proficiency typically develops over 30-60 days of practice. Our structured learning path and hands-on exercises ensure steady progress from beginner to advanced."
    },
    {
      question: "Are the workflows compatible with my existing models?",
      answer: "Yes! Our workflows are designed to work with popular models and checkpoints. We include compatibility guides and show you how to adapt workflows for different models. Plus we provide our premium model collection as a bonus."
    },
    {
      question: "Can I modify the workflows for my specific needs?",
      answer: "Definitely! We teach you not just how to use workflows, but how to understand and modify them. You'll learn to create custom variations and build entirely new workflows for your unique requirements."
    },
    {
      question: "What's included in lifetime access?",
      answer: "Everything! All current workflows, future updates, new technique releases, community access, and ongoing support. No recurring fees ever. As ComfyUI evolves, your access evolves with it."
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
      name: "Complete Workflow Mastery",
      description: "Self-paced comprehensive training",
      price: "$247",
      originalPrice: "$1,747",
      features: [
        "Cut image creation time from 4 hours to 15 minutes",
        "Build $12K/month AI image service business",
        "Replace $3K/month designer costs with automation",
        "Avoid $8K in failed AI tool subscriptions",
        "Generate 100+ images per hour with batch processing",
        "$1,500 worth of workflows & models included"
      ],
      badge: "LIFETIME ACCESS",
      badgeColor: "bg-green-500"
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
      buttonLink: "https://whop.com/IImagined"
    }
  ]

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

      <div className="min-h-screen bg-dark relative">
      {/* Hero Section */}
      <div ref={heroAnimation.elementRef} className="relative z-10">
        <HeroSection
          badge="EARLY BIRD SPECIAL: Professional ComfyUI mastery at an unbeatable price"
          badgeColor="bg-green-600/30 text-green-300"
          title={<>Stop Wasting Hours on <span className="text-red-400">Inconsistent AI Results</span> - Master <span className="text-orange-400">ComfyUI Workflows</span> That Actually Work</>}
          description={<>Transform from frustrated AI user to <span className="text-orange-300">workflow master</span> - Create professional content 10x faster with bulletproof systems that deliver <span className="text-green-400">consistent, stunning results</span> every single time</>}
          ctaText="Lock In Early Bird Price →"
          ctaLink="#packages"
          socialProof={{
            images: [
              "https://ext.same-assets.com/1161517358/3820475784.webp",
              "https://ext.same-assets.com/1161517358/3495288803.webp",
              "https://ext.same-assets.com/1161517358/2908592891.webp"
            ],
            rating: 5,
            text: "847+ creators earning $5-15K/month with ComfyUI"
          }}
          stats={[
            { value: "10x", label: "Faster Creation", color: "text-green-400" },
            { value: "95%", label: "Time Saved", color: "text-blue-400" },
            { value: "$12K", label: "Avg Monthly Revenue", color: "text-purple-400" }
          ]}
          isVisible={heroAnimation.isVisible}
        />
      </div>

      {/* Problem Section */}
      <section className="section-spacing">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={problemAnimation.elementRef}>
            <SectionHeader
              badge="THE FRUSTRATING REALITY"
              badgeColor="text-red-400"
              title="Why Most People Struggle With AI Image Generation"
              description="The hidden problems keeping you from professional results"
              isVisible={problemAnimation.isVisible}
            />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <ProblemCard
              icon="palette"
              title="Inconsistent Results"
              description="You get amazing results sometimes, but can't reliably reproduce them. Every generation feels like rolling dice."
              isVisible={problemAnimation.isVisible}
              staggerClass="scroll-stagger-1"
            />
            <ProblemCard
              icon="wand2"
              title="Endless Tweaking"
              description="Hours spent adjusting parameters, trying different prompts, and still not getting what you envisioned."
              isVisible={problemAnimation.isVisible}
              staggerClass="scroll-stagger-2"
            />
            <ProblemCard
              icon="layers"
              title="Wasted GPU Credits"
              description="Burning through expensive GPU time with failed generations and parameter testing."
              isVisible={problemAnimation.isVisible}
              staggerClass="scroll-stagger-3"
            />
            <ProblemCard
              icon="palette"
              title="Technical Overwhelm"
              description="Complex interfaces, confusing settings, and steep learning curves that kill your creativity."
              isVisible={problemAnimation.isVisible}
              staggerClass="scroll-stagger-4"
            />
            <ProblemCard
              icon="wand2"
              title="Poor Quality Control"
              description="Artifacts, distortions, and unprofessional results that you can't use for client work."
              isVisible={problemAnimation.isVisible}
              staggerClass="scroll-stagger-5"
            />
            <ProblemCard
              icon="layers"
              title="Manual Repetition"
              description="Doing the same steps over and over manually instead of having automated, reliable workflows."
              isVisible={problemAnimation.isVisible}
              staggerClass="scroll-stagger-6"
            />
          </div>

          <div className={`text-center mt-16 scroll-fade-up ${problemAnimation.isVisible ? 'visible' : ''}`}>
            <div className="bg-zinc-900 border border-red-500/30 rounded-lg p-8 max-w-3xl mx-auto card-hover">
              <h3 className="text-2xl font-bold mb-4 text-red-400">The Hidden Cost of Inefficient AI Workflows</h3>
              <p className="text-lg text-gray-300 mb-4">
                Most creators spend <span className="text-red-400 font-bold">80% of their time</span> fighting with settings and only 
                <span className="text-red-400 font-bold"> 20% creating</span>
              </p>
              <p className="text-gray-400">
                This backwards approach kills creativity and makes profitable AI work nearly impossible
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="section-spacing bg-zinc-900/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={solutionAnimation.elementRef}>
            <SectionHeader
              badge="THE GAME CHANGER"
              badgeColor="text-green-400"
              title="ComfyUI Workflow Mastery: Your Professional Solution"
              description="Proven workflows that deliver consistent, professional results every time"
              isVisible={heroAnimation.isVisible}
            />
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto items-center mb-16">
            <div className={`scroll-fade-up ${solutionAnimation.isVisible ? 'visible' : ''}`}>
              <h3 className="text-3xl font-bold mb-6 text-green-400">What if you could...</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="text-green-400 text-xl">✓</div>
                  <p className="text-gray-300">Generate professional results consistently, every single time</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="text-green-400 text-xl">✓</div>
                  <p className="text-gray-300">Cut your creation time from hours to minutes with proven workflows</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="text-green-400 text-xl">✓</div>
                  <p className="text-gray-300">Scale your content production with automated batch processing</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="text-green-400 text-xl">✓</div>
                  <p className="text-gray-300">Build a profitable AI image service with client-ready systems</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="text-green-400 text-xl">✓</div>
                  <p className="text-gray-300">Master advanced techniques without technical complexity</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="text-green-400 text-xl">✓</div>
                  <p className="text-gray-300">Access cutting-edge AI capabilities before they go mainstream</p>
                </div>
              </div>
            </div>
            <div className={`scroll-fade-up ${solutionAnimation.isVisible ? 'visible scroll-stagger-2' : ''}`}>
              <div className="bg-gradient-to-br from-orange-600/20 to-red-600/20 border border-orange-500/30 rounded-2xl p-8">
                <h4 className="text-2xl font-bold mb-4 text-center">The ComfyUI Advantage</h4>
                <div className="text-center mb-6">
                  <div className="text-4xl font-bold text-orange-400 mb-2">
                    <NumberTicker value={10} className="text-4xl font-bold text-orange-400" />x Faster
                  </div>
                  <p className="text-gray-300">Professional Content Creation</p>
                </div>
                <div className="space-y-3 text-sm">
                  <div className="bg-zinc-800/50 rounded-lg p-3">
                    <span className="text-orange-400 font-semibold">Step 1:</span> Load proven workflow template
                  </div>
                  <div className="bg-zinc-800/50 rounded-lg p-3">
                    <span className="text-orange-400 font-semibold">Step 2:</span> Input your creative parameters
                  </div>
                  <div className="bg-zinc-800/50 rounded-lg p-3">
                    <span className="text-orange-400 font-semibold">Step 3:</span> Generate professional results
                  </div>
                  <div className="bg-zinc-800/50 rounded-lg p-3">
                    <span className="text-orange-400 font-semibold">Step 4:</span> Scale with automation
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
              badge="COMPLETE SYSTEM"
              badgeColor="text-gray-400"
              title="The Complete ComfyUI Workflow Mastery System"
              description="6 comprehensive modules + 50+ professional workflows"
              isVisible={heroAnimation.isVisible}
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
                isVisible={heroAnimation.isVisible}
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
                $<NumberTicker value={1082} className="text-5xl font-bold text-yellow-400" />
              </div>
              <p className="text-gray-300">6 comprehensive modules + 50+ workflows</p>
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
              description="Limited-time bonuses worth over $800"
              isVisible={heroAnimation.isVisible}
            />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {bonuses.map((bonus, index) => (
              <BonusCard
                key={index}
                icon={bonus.icon}
                title={bonus.title}
                description={bonus.description}
                value={bonus.value}
                isVisible={heroAnimation.isVisible}
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
                $<NumberTicker value={842} className="text-4xl font-bold text-gold-400" />
              </div>
              <p className="text-gray-300">Free when you join today</p>
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
              description="Complete ComfyUI Workflow Mastery System + Bonuses"
              isVisible={heroAnimation.isVisible}
            />
          </div>

          {/* Value Stack */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className={`bg-gradient-to-br from-zinc-900 to-zinc-800 border-2 border-gold-500/50 rounded-2xl p-8 scroll-fade-up ${valueAnimation.isVisible ? 'visible' : ''}`}>
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold mb-4 text-gold-400">Total Package Value Breakdown</h3>
                <p className="text-gray-300">Everything you need to master ComfyUI workflows</p>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center py-3 border-b border-gray-700">
                  <span className="text-gray-300">✓ 6 Complete Training Modules</span>
                  <span className="text-gold-400 font-bold">$797</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-700">
                  <span className="text-gray-300">✓ 50+ Professional Workflows</span>
                  <span className="text-gold-400 font-bold">$197</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-700">
                  <span className="text-gray-300">✓ Premium Model Collection</span>
                  <span className="text-gold-400 font-bold">$147</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-700">
                  <span className="text-gray-300">✓ Video Tutorial Library</span>
                  <span className="text-gold-400 font-bold">$97</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-700">
                  <span className="text-gray-300">✓ Custom Node Pack</span>
                  <span className="text-gold-400 font-bold">$69</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-700">
                  <span className="text-gray-300">✓ Business Templates</span>
                  <span className="text-gold-400 font-bold">$97</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-700">
                  <span className="text-gray-300">✓ 1-on-1 Setup Session</span>
                  <span className="text-gold-400 font-bold">$97</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-gray-300">✓ 60-Day Money-Back Guarantee</span>
                  <span className="text-gold-400 font-bold">Priceless</span>
                </div>
              </div>

              <div className="border-t-2 border-gold-500/50 pt-6">
                <div className="flex justify-between items-center text-2xl font-bold">
                  <span className="text-white">TOTAL VALUE:</span>
                  <span className="text-gold-400">
                    $<NumberTicker value={1500} className="text-2xl font-bold text-gold-400" />
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Pricing Comparison */}
          <div ref={pricingAnimation.elementRef}>
            <PricingComparison
              options={pricingOptions}
              isVisible={heroAnimation.isVisible}
            />
          </div>

          {/* Risk Reversal */}
          <div className={`text-center mt-16 scroll-fade-up ${pricingAnimation.isVisible ? 'visible' : ''}`}>
            <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-8 max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold mb-4 text-green-400">60-Day "Master ComfyUI" Guarantee</h3>
              <p className="text-gray-300 mb-4">
                Try ComfyUI Workflow Mastery for 60 full days. If you don't achieve dramatically better, more consistent results, I'll refund every penny. No questions asked.
              </p>
              <p className="text-sm text-gray-400">
                That's how confident I am this will transform your AI workflow. You have ZERO risk.
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
              title={<>Real <span className="text-orange-400">ComfyUI</span> Results</>}
              description="Students mastering professional AI workflows"
              isVisible={heroAnimation.isVisible}
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
                isVisible={heroAnimation.isVisible}
                staggerClass={`scroll-stagger-${index + 1}`}
              />
            ))}
          </div>

          <div className={`text-center scroll-fade-up ${testimonialsAnimation.isVisible ? 'visible' : ''}`}>
            <h3 className="text-3xl font-bold mb-4">
              <BlurIn
                word="Become our next ComfyUI"
                className="text-3xl font-bold text-white"
                duration={0.8}
              />
              <div className="text-orange-400">
                <WordRotate
                  words={["success story", "master creator", "profit machine", "AI expert"]}
                  className="text-3xl font-bold"
                  duration={2500}
                />
              </div>
            </h3>
            <p className="text-xl text-gray-400 mb-8">Join creators mastering professional AI workflows and building profitable services</p>
            <Link href="#packages" className="inline-block">
              <ShimmerButton
                className="shadow-2xl"
                shimmerColor="#ffffff"
                shimmerSize="0.1em"
                background="linear-gradient(135deg, #f97316, #ea580c)"
                borderRadius="9999px"
              >
                <span className="whitespace-nowrap text-lg font-bold px-6 py-2">
                  Start Your ComfyUI Journey
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
              description="Everything you need to know about mastering ComfyUI workflows"
              isVisible={heroAnimation.isVisible}
            />
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <FAQCard
                key={index}
                question={faq.question}
                answer={faq.answer}
                isVisible={heroAnimation.isVisible}
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
                   <TypingAnimation
                    text="Early Bird Pricing Ends Soon"
                    className="text-4xl md:text-5xl font-bold text-red-400 inline"
                    duration={100}
                  />
                </h2>
                
                <div className="bg-zinc-900 border border-red-500/30 rounded-lg p-8 mb-8 card-hover">
                  <h3 className="text-2xl font-bold mb-4 text-red-300">Why This Price Won't Last</h3>
                  <div className="grid md:grid-cols-2 gap-6 text-left">
                    <div>
                      <h4 className="font-bold text-white mb-2">Increasing Value</h4>
                      <p className="text-gray-300 mb-4">We're constantly adding new workflows, techniques, and bonuses. Early adopters lock in the current price before it reflects the growing value.</p>
                      
                      <h4 className="font-bold text-white mb-2">Community Size</h4>
                      <p className="text-gray-300">Limited spots ensure quality support and community interaction. Too many members would compromise the experience.</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-2">AI Evolution</h4>
                      <p className="text-gray-300 mb-4">ComfyUI is becoming the industry standard. Get in now before it's mainstream and competition increases.</p>
                      
                      <h4 className="font-bold text-white mb-2">Market Demand</h4>
                      <p className="text-gray-300">As more people discover ComfyUI's power, training costs will increase. Early bird pricing won't be available forever.</p>
                    </div>
                  </div>
                </div>

                <p className="text-xl text-gray-300 mb-8">
                  The AI revolution is happening now. Don't get left behind while others master the tools that will define the future.
                </p>

                <Link href="#packages">
                  <ShimmerButton
                    className="shadow-2xl"
                    shimmerColor="#ffffff"
                    shimmerSize="0.1em"
                    background="linear-gradient(135deg, #dc2626, #b91c1c)"
                    borderRadius="9999px"
                  >
                    <span className="text-xl md:text-2xl font-bold px-8 py-4 text-center block">
                      SECURE EARLY BIRD PRICING<br className="md:hidden" /> - $<NumberTicker value={247} className="inline" /> 
                    </span>
                  </ShimmerButton>
                </Link>

                <p className="text-sm text-green-400 mt-4 font-bold">
                  Lifetime access + 60-day money-back guarantee
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
                  word="Ready to master ComfyUI"
                  className="text-4xl md:text-5xl font-bold text-white"
                  duration={0.8}
                />
                <div className="text-orange-400">
                  <WordRotate
                    words={["workflows?", "automation?", "mastery?", "profits?"]}
                    className="text-4xl md:text-5xl font-bold"
                    duration={2500}
                  />
                </div>
              </h2>
              <p className="text-xl text-gray-400 mb-8">
                Join creators generating professional AI content <NumberTicker value={10} className="text-orange-400 font-bold inline" />x faster with proven workflows
              </p>
              <Link href="#packages">
                <ShimmerButton
                  className="shadow-2xl"
                  shimmerColor="#ffffff"
                  shimmerSize="0.1em"
                  background="linear-gradient(135deg, #f97316, #ea580c)"
                  borderRadius="9999px"
                >
                  <span className="whitespace-nowrap text-lg font-bold px-8 py-3">
                    Start Your ComfyUI Journey
                  </span>
                </ShimmerButton>
              </Link>
              <p className="text-sm text-gray-400 mt-4">60-day money-back guarantee</p>
            </div>
          </div>
        </div>
      </section>
      </div>
    </>
  )
}