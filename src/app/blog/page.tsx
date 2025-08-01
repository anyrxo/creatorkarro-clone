'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useScrollAnimation, useScrollAnimations } from '@/hooks/useScrollAnimation'

const blogPosts = [
  {
    title: "How Marcus Rivera Grew from 800 to 125K Instagram Followers in 8 Months with Instagram Ignited",
    category: "SUCCESS STORY",
    categoryColor: "purple",
    excerpt: "Discover the exact strategies Marcus used to transform his Instagram presence and build a $15K/month business.",
    readTime: "12 min",
    date: "Jan 8, 2024",
    slug: "instagram-ignited-success-stories"
  },
  {
    title: "From $0 to $25K/Month: How Sophia Chen Launched Her Digital Product Empire",
    category: "SUCCESS STORY",
    categoryColor: "green",
    excerpt: "Learn how Sophia built a profitable digital product business from scratch using proven launch strategies.",
    readTime: "15 min",
    date: "Jan 10, 2024",
    slug: "digital-product-success-story"
  },
  {
    title: "How Devon Mitchell Automated His Entire Business with N8N AI Workflows",
    category: "AUTOMATION",
    categoryColor: "blue",
    excerpt: "See how Devon saved 40+ hours per week by automating his content workflow across 5 platforms.",
    readTime: "10 min",
    date: "Jan 12, 2024",
    slug: "n8n-automation-success"
  },
  {
    title: "The AI Influencer Revolution: How Isabella Torres Built Virtual Personas Earning $8K/Month",
    category: "AI STRATEGY",
    categoryColor: "pink",
    excerpt: "Discover how Isabella created AI models that generate content 24/7 and earn through partnerships.",
    readTime: "14 min",
    date: "Jan 14, 2024",
    slug: "ai-influencer-success"
  },
  {
    title: "ComfyUI Mastery: Ryan Blackwood's Journey to $10K/Month AI Art Business",
    category: "AI TOOLS",
    categoryColor: "purple",
    excerpt: "Learn how Ryan increased his client work rate by 500% using AI-enhanced design workflows.",
    readTime: "13 min",
    date: "Jan 16, 2024",
    slug: "comfyui-success-story"
  },
  {
    title: "Instagram Algorithm Secrets: What Anyro's 500K+ Followers Taught Him",
    category: "GROWTH GUIDE",
    categoryColor: "blue",
    excerpt: "The complete Instagram blueprint that took me from zero to half a million followers and $15K/month.",
    readTime: "12 min",
    date: "Jan 15, 2024",
    slug: "500k-followers"
  },
  {
    title: "Why Most Digital Products Fail (And How to Build One That Sells $1K+/Day)",
    category: "MONETIZATION",
    categoryColor: "green",
    excerpt: "Avoid the common pitfalls and learn the psychology behind successful digital product launches.",
    readTime: "16 min",
    date: "Jan 18, 2024",
    slug: "digital-products-that-sell"
  },
  {
    title: "The Complete Guide to Viral Instagram Carousels That Convert",
    category: "CONTENT STRATEGY",
    categoryColor: "purple",
    excerpt: "Master the art of creating carousels that get 3-5x more engagement and drive sales.",
    readTime: "11 min",
    date: "Jan 20, 2024",
    slug: "viral-carousel-guide"
  },
  {
    title: "How I Built a $50K/Month Business Using Only AI Tools and Automation",
    category: "CASE STUDY",
    categoryColor: "blue",
    excerpt: "A deep dive into the exact AI stack and automation workflows that power my business.",
    readTime: "18 min",
    date: "Jan 22, 2024",
    slug: "ai-automation-business"
  },
  {
    title: "From Zero to AI Influencer: Creating Virtual Personas That Actually Make Money",
    category: "AI STRATEGY",
    categoryColor: "pink",
    excerpt: "Step-by-step guide to building AI influencers that generate content and revenue on autopilot.",
    readTime: "15 min",
    date: "Jan 24, 2024",
    slug: "creating-ai-influencers"
  },
  {
    title: "The Psychology Behind $10K+ Digital Product Sales Pages",
    category: "SALES",
    categoryColor: "green",
    excerpt: "Discover the psychological triggers and copywriting techniques that convert visitors into buyers.",
    readTime: "14 min",
    date: "Jan 26, 2024",
    slug: "sales-page-psychology"
  },
  {
    title: "7 N8N Workflows Every Content Creator Needs to Automate Their Business",
    category: "AUTOMATION",
    categoryColor: "blue",
    excerpt: "Save 20+ hours per week with these essential automation workflows for content creators.",
    readTime: "13 min",
    date: "Jan 28, 2024",
    slug: "essential-n8n-workflows"
  },
  {
    title: "ComfyUI vs. Other AI Art Tools: Why Professionals Choose ComfyUI",
    category: "AI TOOLS",
    categoryColor: "purple",
    excerpt: "An honest comparison of AI art tools and why ComfyUI is the professional's choice.",
    readTime: "10 min",
    date: "Jan 30, 2024",
    slug: "comfyui-comparison"
  },
  {
    title: "Instagram Growth Hacks That Actually Work in 2024",
    category: "GROWTH GUIDE",
    categoryColor: "blue",
    excerpt: "Proven strategies to grow your Instagram following organically and sustainably.",
    readTime: "12 min",
    date: "Feb 1, 2024",
    slug: "instagram-growth-2024"
  },
  {
    title: "How to Price Your Digital Products for Maximum Profit (With Real Examples)",
    category: "PRICING",
    categoryColor: "green",
    excerpt: "Learn the psychology of pricing and see real examples of successful product pricing strategies.",
    readTime: "15 min",
    date: "Feb 3, 2024",
    slug: "digital-product-pricing"
  },
  {
    title: "The Future of AI Influencers: Trends Every Creator Should Know",
    category: "TRENDS",
    categoryColor: "pink",
    excerpt: "Stay ahead of the curve with these emerging trends in AI-generated content and virtual personas.",
    readTime: "11 min",
    date: "Feb 5, 2024",
    slug: "ai-influencer-trends"
  },
  {
    title: "Building Your Personal Brand: Lessons from 500K+ Instagram Followers",
    category: "BRANDING",
    categoryColor: "purple",
    excerpt: "How to create a memorable personal brand that attracts followers and converts them into customers.",
    readTime: "16 min",
    date: "Feb 7, 2024",
    slug: "personal-brand-building"
  },
  {
    title: "Why Most Automation Tools Fail (And Why N8N is Different)",
    category: "AUTOMATION",
    categoryColor: "blue",
    excerpt: "Understanding the limitations of popular automation tools and why N8N is the superior choice.",
    readTime: "9 min",
    date: "Feb 9, 2024",
    slug: "why-n8n-is-different"
  },
  {
    title: "My Biggest Instagram Mistakes (And How They Led to $100K+ Revenue)",
    category: "LESSONS",
    categoryColor: "red",
    excerpt: "Learn from my failures and discover how mistakes can become your biggest opportunities.",
    readTime: "14 min",
    date: "Feb 11, 2024",
    slug: "instagram-mistakes-lessons"
  },
  {
    title: "The Complete ComfyUI Workflow Library: 50+ Professional Templates",
    category: "RESOURCES",
    categoryColor: "purple",
    excerpt: "Access my personal collection of ComfyUI workflows that generate stunning AI art in minutes.",
    readTime: "20 min",
    date: "Feb 13, 2024",
    slug: "comfyui-workflow-library"
  },
  {
    title: "How I Make $5K+ Per Month with AI-Generated Content",
    category: "INCOME REPORT",
    categoryColor: "green",
    excerpt: "Full breakdown of my AI content monetization strategy and income streams.",
    readTime: "13 min",
    date: "Feb 15, 2024",
    slug: "ai-content-income"
  },
  {
    title: "Digital Product Launch Strategy: From Idea to $10K in 30 Days",
    category: "LAUNCH GUIDE",
    categoryColor: "blue",
    excerpt: "The exact launch sequence I use to generate $10K+ with every digital product release.",
    readTime: "17 min",
    date: "Feb 17, 2024",
    slug: "product-launch-strategy"
  },
  {
    title: "The Ultimate Guide to Instagram Monetization: 7 Proven Strategies",
    category: "MONETIZATION",
    categoryColor: "green",
    excerpt: "Turn your Instagram followers into multiple revenue streams with these proven strategies.",
    readTime: "15 min",
    date: "Feb 19, 2024",
    slug: "instagram-monetization-guide"
  },
  {
    title: "High-Income Skills for the AI Era: What to Learn in 2024",
    category: "SKILLS",
    categoryColor: "purple",
    excerpt: "Future-proof your career with these high-demand skills in the age of AI.",
    readTime: "12 min",
    date: "Feb 21, 2024",
    slug: "ai-era-skills"
  },
  {
    title: "Why 2024 is the Best Time to Start Creating AI Content",
    category: "OPPORTUNITY",
    categoryColor: "pink",
    excerpt: "The AI content revolution is here - discover why now is the perfect time to start.",
    readTime: "10 min",
    date: "Feb 23, 2024",
    slug: "ai-content-opportunity"
  },
  {
    title: "The Ultimate Whop Clipping Strategy",
    category: "MONETIZATION GUIDE",
    categoryColor: "green",
    excerpt: "Turn Twitch streams into a $10K/month business with this proven system.",
    readTime: "15 min",
    date: "Jan 22, 2024",
    slug: "whop-clipping"
  }
]

export default function BlogPage() {
  const heroAnimation = useScrollAnimation({ threshold: 0.2 })
  const contentAnimation = useScrollAnimation({ threshold: 0.1 })
  const postAnimations = useScrollAnimations(blogPosts.length, { threshold: 0.1 })

  const getCategoryColor = (color: string) => {
    const colors: { [key: string]: string } = {
      blue: 'bg-blue-500/10 border-blue-500/20 text-blue-400',
      purple: 'bg-purple-500/10 border-purple-500/20 text-purple-400',
      green: 'bg-green-500/10 border-green-500/20 text-green-400',
      pink: 'bg-pink-500/10 border-pink-500/20 text-pink-400',
      red: 'bg-red-500/10 border-red-500/20 text-red-400'
    }
    return colors[color] || colors.blue
  }

  return (
    <div className="min-h-screen bg-dark">
      {/* Hero Section */}
      <section className="section-spacing overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div
            ref={heroAnimation.elementRef}
            className={`text-center max-w-4xl mx-auto scroll-fade-up ${heroAnimation.isVisible ? 'visible' : ''}`}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-800 mb-6">
              <span className="text-gray-300 text-sm font-semibold">BLOG</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Success stories, strategies, and insights from <span className="text-blue-400">Anyro</span> and <span className="text-purple-400">IImagined</span> students
            </h1>

            <p className="text-lg md:text-xl text-gray-400">
              Learn from real creators who transformed their passion into profitable businesses
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section 
        ref={contentAnimation.elementRef}
        className={`section-spacing scroll-fade-up ${contentAnimation.isVisible ? 'visible' : ''}`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article 
                key={index}
                ref={postAnimations[index].elementRef}
                className={`bg-zinc-900 rounded-2xl p-8 hover:bg-zinc-800 transition-all duration-300 group cursor-pointer hover-lift scroll-fade-up ${postAnimations[index].isVisible ? 'visible' : ''}`}
              >
                <Link href={`/blog/${post.slug}`} className="block">
                  <div className="mb-6">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${getCategoryColor(post.categoryColor)}`}>
                      {post.category}
                    </span>
                  </div>
                  
                  <h2 className="text-xl font-bold mb-4 group-hover:text-blue-400 transition-colors duration-300 line-clamp-3">
                    {post.title}
                  </h2>
                  
                  <p className="text-gray-400 mb-6 line-clamp-2">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>{post.readTime} read</span>
                      </div>
                      <span>•</span>
                      <span>{post.date}</span>
                    </div>
                    
                    <svg className="w-5 h-5 text-gray-600 group-hover:text-blue-400 group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="section-spacing bg-zinc-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Want more from <span className="text-blue-400">Anyro</span>?
          </h2>
          
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Join thousands of creators getting actionable insights on Instagram growth, digital products, AI automation, and monetization strategies delivered weekly.
          </p>
          
          <a
            href="https://anyro.beehiiv.com/subscribe"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button inline-flex items-center gap-3"
          >
            Join +10k creators
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </section>
    </div>
  )
}