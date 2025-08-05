'use client'

import { useScrollAnimation, useScrollAnimations } from '@/hooks/useScrollAnimation'
import SocialIcon from '@/components/SocialIcon'
import BlurIn from '@/components/magicui/blur-in'
import WordRotate from '@/components/magicui/word-rotate'
import TypingAnimation from '@/components/magicui/typing-animation'
import ShimmerButton from '@/components/magicui/shimmer-button'

export default function ResourcesPage() {
  // Scroll animations for different sections
  const heroAnimation = useScrollAnimation({ threshold: 0.3 })
  const freeResourcesAnimation = useScrollAnimation({ threshold: 0.2 })
  const disclaimerAnimation = useScrollAnimation({ threshold: 0.2 })

  // For category animations (6 categories)
  const categoryAnimations = useScrollAnimations(6, { threshold: 0.1 })

  const resources = [
    {
      category: "Content Creation",
      tools: [
        {
          name: "CapCut",
          description: "Free video editing software perfect for creating Instagram Reels and TikToks",
          link: "https://www.capcut.com/",
          type: "Free",
          icon: null
        },
        {
          name: "Canva",
          description: "Design tool for creating thumbnails, graphics, and social media posts",
          link: "https://www.canva.com/",
          type: "Freemium",
          icon: null
        },
        {
          name: "Unsplash",
          description: "High-quality stock photos for your content",
          link: "https://unsplash.com/",
          type: "Free",
          icon: null
        }
      ]
    },
    {
      category: "Email Marketing",
      tools: [
        {
          name: "Beehiiv",
          description: "Newsletter platform I use for my email list. Get a 30-day trial + 20% OFF for 3 months.",
          link: "https://www.beehiiv.com?via=AbdulMannan1",
          type: "Freemium",
          icon: "beehiiv"
        },
        {
          name: "ConvertKit",
          description: "Email marketing automation for creators",
          link: "https://convertkit.com/",
          type: "Paid",
          icon: null
        }
      ]
    },
    {
      category: "Analytics & Growth",
      tools: [
        {
          name: "Later",
          description: "Social media scheduling and analytics",
          link: "https://later.com/",
          type: "Freemium",
          icon: null
        },
        {
          name: "Google Analytics",
          description: "Track your website traffic and user behavior",
          link: "https://analytics.google.com/",
          type: "Free",
          icon: null
        }
      ]
    },
    {
      category: "Course Creation",
      tools: [
        {
          name: "Whop",
          description: "Platform I use to host all my courses",
          link: "https://whop.com/agencypartners?a=anyro",
          type: "Platform",
          icon: "whop"
        },
        {
          name: "Loom",
          description: "Screen recording for course content",
          link: "https://loom.com/",
          type: "Freemium",
          icon: "loom"
        }
      ]
    },
    {
      category: "Productivity",
      tools: [
        {
          name: "Notion",
          description: "All-in-one workspace for notes, planning, and organization",
          link: "https://notion.so/",
          type: "Freemium",
          icon: null
        },
        {
          name: "Calendly",
          description: "Scheduling tool for calls and meetings",
          link: "https://calendly.com/",
          type: "Freemium",
          icon: null
        }
      ]
    },
    {
      category: "AI & Cloud Computing",
      tools: [
        {
          name: "RunPod",
          description: "GPU cloud computing for AI development. Get a one-time random credit bonus from $5-500 when you sign up and load $10 for the first time. Instant access to RunPod's GPU resources.",
          link: "https://runpod.io?ref=yf9yht6f",
          type: "Cloud Service",
          icon: "runpod"
        },
        {
          name: "Fanvue",
          description: "Creator platform for building your audience and monetizing content",
          link: "https://www.fanvue.com/signup?referral=FV-33CETP",
          type: "Platform",
          icon: "fanvue"
        }
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-dark">
      {/* MAGICAL HEADER */}
      <section className="relative py-32 px-4 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/10 to-pink-900/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-pink-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-20 w-4 h-4 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full animate-bounce opacity-60" style={{animationDuration: '3s'}}></div>
          <div className="absolute top-32 right-32 w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-bounce opacity-50" style={{animationDuration: '4s', animationDelay: '0.5s'}}></div>
          <div className="absolute bottom-40 left-16 w-5 h-5 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full animate-bounce opacity-70" style={{animationDuration: '3.5s', animationDelay: '1s'}}></div>
          <div className="absolute bottom-32 right-20 w-2 h-2 bg-gradient-to-r from-green-400 to-teal-400 rounded-full animate-bounce opacity-60" style={{animationDuration: '4.5s', animationDelay: '1.5s'}}></div>
        </div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <div
              ref={heroAnimation.elementRef}
              className={`scroll-fade-up ${heroAnimation.isVisible ? 'visible' : ''}`}
            >
              <div className="relative inline-block">
                {/* Main Title with Magical Effects */}
                <h1 className="text-7xl md:text-8xl lg:text-9xl font-black text-white mb-8 tracking-tight drop-shadow-2xl">
                  Resources
                </h1>
                
                {/* Magical Glowing Border */}
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 via-purple-600 via-pink-600 to-yellow-600 rounded-2xl opacity-20 blur-xl animate-pulse"></div>
                
                {/* Floating Magic Elements Around Title */}
                <div className="absolute -top-8 -left-8 w-6 h-6 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full animate-spin opacity-80" style={{animationDuration: '8s'}}></div>
                <div className="absolute -top-4 -right-12 w-4 h-4 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-spin opacity-70" style={{animationDuration: '10s', animationDirection: 'reverse'}}></div>
                <div className="absolute -bottom-6 -left-12 w-5 h-5 bg-gradient-to-r from-pink-400 to-red-400 rounded-full animate-spin opacity-75" style={{animationDuration: '12s'}}></div>
                <div className="absolute -bottom-8 -right-8 w-3 h-3 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full animate-spin opacity-90" style={{animationDuration: '6s', animationDirection: 'reverse'}}></div>
              </div>
            </div>
            
            <div className="relative">
              <div className="max-w-5xl mx-auto mt-6">
                <TypingAnimation
                  text="Here are the tools and resources I personally use and recommend to build and grow your online business."
                  className="text-2xl md:text-3xl text-white leading-relaxed font-medium drop-shadow-lg"
                  duration={50}
                />
              </div>
              
              {/* Subtitle Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent blur-sm"></div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 section-spacing">
        <div className="max-w-6xl mx-auto">
          {/* Resources Grid */}
          <div className="space-y-16">
            {resources.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <div
                  ref={categoryAnimations.setElementRef(categoryIndex)}
                  className={`text-center mb-8 scroll-fade-up ${categoryAnimations.visibleElements[categoryIndex] ? 'visible' : ''}`}
                >
                  <WordRotate
                    words={[category.category, `${category.category} Tools`, `Best ${category.category}`]}
                    className="text-2xl md:text-3xl font-bold"
                    duration={3000}
                  />
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                  {category.tools.map((tool, toolIndex) => (
                    <div
                      key={toolIndex}
                      className={`testimonial-card hover-lift scroll-fade-up ${categoryAnimations.visibleElements[categoryIndex] ? `visible scroll-stagger-${toolIndex + 1}` : ''}`}
                    >
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                          {tool.icon && (
                            <SocialIcon 
                              platform={tool.icon as any} 
                              variant="color" 
                              size={24} 
                              href={undefined}
                            />
                          )}
                          <h3 className="text-lg md:text-xl font-bold">{tool.name}</h3>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-sm ${
                          tool.type === 'Free' ? 'bg-green-600/20 text-green-400' :
                          tool.type === 'Freemium' ? 'bg-blue-600/20 text-blue-400' :
                          tool.type === 'Platform' ? 'bg-purple-600/20 text-purple-400' :
                          tool.type === 'Cloud Service' ? 'bg-cyan-600/20 text-cyan-400' :
                          'bg-orange-600/20 text-orange-400'
                        }`}>
                          {tool.type}
                        </span>
                      </div>
                      <p className="text-gray-400 mb-6 text-sm md:text-base">{tool.description}</p>
                      <a
                        href={tool.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300 font-medium transition-colors duration-200"
                      >
                        Check it out →
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Free Resources Section */}
          <div
            ref={freeResourcesAnimation.elementRef}
            className={`mt-24 bg-zinc-900/50 rounded-2xl p-6 md:p-8 text-center hover-lift scroll-scale ${freeResourcesAnimation.isVisible ? 'visible' : ''}`}
          >
            <BlurIn
              word="Free Resources"
              className="text-2xl md:text-3xl font-bold mb-6"
              duration={0.8}
            />
            <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
              I also create free resources to help you get started. Check out my Gumroad for templates, guides, and more.
            </p>
            <a
              href="https://anyrxo.gumroad.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <ShimmerButton
                className="shadow-2xl"
                shimmerColor="#ffffff"
                shimmerSize="0.1em"
                background="linear-gradient(135deg, #10b981, #059669)"
                borderRadius="9999px"
              >
                <span className="whitespace-nowrap text-lg font-bold px-6 py-2">
                  Access Free Resources
                </span>
              </ShimmerButton>
            </a>
          </div>

          {/* Disclaimer */}
          <div
            ref={disclaimerAnimation.elementRef}
            className={`mt-16 bg-zinc-900 border border-zinc-700 rounded-lg p-6 scroll-fade-up ${disclaimerAnimation.isVisible ? 'visible' : ''}`}
          >
            <p className="text-sm text-gray-400 text-center">
              <strong>Disclaimer:</strong> Some of the links above may be affiliate links, which means I may earn a commission if you make a purchase. This doesn't affect the price you pay, and I only recommend tools I genuinely use and believe in.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
