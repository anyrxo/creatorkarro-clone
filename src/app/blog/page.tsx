'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useScrollAnimation, useScrollAnimations } from '@/hooks/useScrollAnimation'

export default function BlogPage() {
  // Scroll animations
  const headerAnimation = useScrollAnimation({ threshold: 0.2 })
  const newsletterAnimation = useScrollAnimation({ threshold: 0.2 })
  const blogPosts = [
    {
      title: "How Marcus Rivera Grew from 800 to 125K Instagram Followers in 8 Months with Instagram Ignited",
      slug: "instagram-ignited-success-stories",
      image: "https://ext.same-assets.com/1161517358/3768082061.png"
    },
    {
      title: "From $0 to $25K/Month: How Sophia Chen Launched Her Digital Product Empire",
      slug: "digital-products-success-story",
      image: "https://ext.same-assets.com/1161517358/3352557511.jpeg"
    },
    {
      title: "How Devon Mitchell Automated His Entire Business with N8N AI Workflows",
      slug: "n8n-automation-case-study",
      image: "https://ext.same-assets.com/1161517358/2233149341.jpeg"
    },
    {
      title: "The AI Influencer Revolution: How Isabella Torres Built Virtual Personas Earning $8K/Month",
      slug: "ai-influencers-breakthrough",
      image: "https://ext.same-assets.com/1161517358/3158317405.jpeg"
    },
    {
      title: "ComfyUI Mastery: Ryan Blackwood's Journey to $10K/Month AI Art Business",
      slug: "comfyui-success-story",
      image: "https://ext.same-assets.com/1161517358/3907883451.jpeg"
    },
    {
      title: "Instagram Algorithm Secrets: What Anyro's 500K+ Followers Taught Him",
      slug: "instagram-algorithm-secrets",
      image: "https://ext.same-assets.com/1161517358/3486675981.webp"
    },
    {
      title: "Why Most Digital Products Fail (And How to Build One That Sells $1K+/Day)",
      slug: "digital-products-that-sell",
      image: "https://ext.same-assets.com/1161517358/191600949.png"
    },
    {
      title: "The Complete Guide to Viral Instagram Carousels That Convert",
      slug: "viral-carousel-guide",
      image: "https://ext.same-assets.com/1161517358/2372176800.jpeg"
    },
    {
      title: "How I Built a $50K/Month Business Using Only AI Tools and Automation",
      slug: "ai-automation-business",
      image: "https://ext.same-assets.com/1161517358/371774701.png"
    },
    {
      title: "From Zero to AI Influencer: Creating Virtual Personas That Actually Make Money",
      slug: "ai-influencer-creation-guide",
      image: "https://ext.same-assets.com/1161517358/4208462077.jpeg"
    },
    {
      title: "The Psychology Behind $10K+ Digital Product Sales Pages",
      slug: "digital-product-psychology",
      image: "https://ext.same-assets.com/1161517358/422346753.png"
    },
    {
      title: "7 N8N Workflows Every Content Creator Needs to Automate Their Business",
      slug: "essential-n8n-workflows",
      image: "https://ext.same-assets.com/1161517358/1954019985.png"
    },
    {
      title: "ComfyUI vs. Other AI Art Tools: Why Professionals Choose ComfyUI",
      slug: "comfyui-comparison",
      image: "https://ext.same-assets.com/1161517358/3253216564.png"
    },
    {
      title: "Instagram Growth Hacks That Actually Work in 2024",
      slug: "instagram-growth-hacks-2024",
      image: "https://ext.same-assets.com/1161517358/3692619406.png"
    },
    {
      title: "How to Price Your Digital Products for Maximum Profit (With Real Examples)",
      slug: "digital-product-pricing-strategy",
      image: "https://ext.same-assets.com/1161517358/4097775543.png"
    },
    {
      title: "The Future of AI Influencers: Trends Every Creator Should Know",
      slug: "ai-influencer-trends",
      image: "https://ext.same-assets.com/1161517358/518336580.png"
    },
    {
      title: "Building Your Personal Brand: Lessons from 500K+ Instagram Followers",
      slug: "personal-brand-building",
      image: "https://ext.same-assets.com/1161517358/1556582572.png"
    },
    {
      title: "Why Most Automation Tools Fail (And Why N8N is Different)",
      slug: "n8n-vs-other-automation-tools",
      image: "https://ext.same-assets.com/1161517358/1982036823.png"
    },
    {
      title: "My Biggest Instagram Mistakes (And How They Led to $100K+ Revenue)",
      slug: "instagram-mistakes-to-success",
      image: "https://ext.same-assets.com/1161517358/2786752937.png"
    },
    {
      title: "The Complete ComfyUI Workflow Library: 50+ Professional Templates",
      slug: "comfyui-workflow-library",
      image: "https://ext.same-assets.com/1161517358/3425573237.png"
    },
    {
      title: "How I Make $5K+ Per Month with AI-Generated Content",
      slug: "ai-content-monetization",
      image: "https://ext.same-assets.com/1161517358/575595742.png"
    },
    {
      title: "Digital Product Launch Strategy: From Idea to $10K in 30 Days",
      slug: "digital-product-launch-strategy",
      image: "https://ext.same-assets.com/1161517358/4169895119.png"
    },
    {
      title: "The Ultimate Guide to Instagram Monetization: 7 Proven Strategies",
      slug: "instagram-monetization-guide",
      image: "https://ext.same-assets.com/1161517358/4095419434.png"
    },
    {
      title: "High-Income Skills for the AI Era: What to Learn in 2024",
      slug: "high-income-skills-ai-era",
      image: "https://ext.same-assets.com/1161517358/616695064.png"
    },
    {
      title: "Why 2024 is the Best Time to Start Creating AI Content",
      slug: "ai-content-opportunity-2024",
      image: "https://ext.same-assets.com/1161517358/990247447.png"
    }
  ]

  // Scroll animations for blog posts
  const { setElementRef, visibleElements } = useScrollAnimations(blogPosts.length)

  return (
    <div className="min-h-screen bg-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 section-spacing">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div 
            ref={headerAnimation.elementRef}
            className={`text-center mb-16 scroll-fade-up ${headerAnimation.isVisible ? 'visible' : ''}`}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-8">
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                BLOG
              </span>
            </h1>
            <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
              Success stories, strategies, and insights from <span className="text-blue-400">Anyro</span> and <span className="text-purple-400">IImagined</span> students
            </p>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {blogPosts.map((post, index) => (
              <div
                key={index}
                ref={setElementRef(index)}
                className={`scroll-fade-up ${visibleElements[index] ? 'visible' : ''}`}
              >
                <Link
                  href={`/blog/${post.slug}`}
                  className="group bg-zinc-900 rounded-lg overflow-hidden hover:bg-zinc-800 transition-colors duration-200 card-hover hover-lift block"
                >
                <div className="aspect-video relative">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-200"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold group-hover:text-blue-400 transition-colors duration-200">
                    {post.title}
                  </h3>
                </div>
                </Link>
              </div>
            ))}
          </div>

          {/* Newsletter Section */}
          <div 
            ref={newsletterAnimation.elementRef}
            className={`bg-zinc-900/50 rounded-2xl p-8 text-center card-hover hover-lift scroll-fade-up ${newsletterAnimation.isVisible ? 'visible' : ''}`}
          >
            <p className="text-sm text-gray-400 uppercase tracking-wider mb-4">NEWSLETTER</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Want more from <span className="text-blue-400">Anyro</span>?
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Join thousands of creators getting <span className="text-purple-300">actionable insights</span> on Instagram growth, 
              digital products, AI automation, and <span className="text-blue-300">monetization strategies</span> delivered weekly.
            </p>
            <a
              href="https://anyro.beehiiv.com/subscribe"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button inline-block btn-animate animate-glow hover-lift"
            >
              Join +10k creators
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
