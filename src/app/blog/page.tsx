'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useScrollAnimation, useScrollAnimations } from '@/hooks/useScrollAnimation'

const blogPosts = [
  // Existing posts
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
    title: "Instagram Reels Mastery: The Ultimate Guide to Viral Content",
    category: "CONTENT STRATEGY",
    categoryColor: "purple",
    excerpt: "Master the art of creating Instagram Reels that go viral and drive massive engagement.",
    readTime: "14 min",
    date: "Feb 11, 2024",
    slug: "instagram-reels-guide"
  },
  {
    title: "TikTok Growth Hacks: 0 to 100K Followers in 90 Days",
    category: "GROWTH GUIDE",
    categoryColor: "pink",
    excerpt: "The exact blueprint I used to explode on TikTok and how you can replicate it.",
    readTime: "13 min",
    date: "Feb 12, 2024",
    slug: "tiktok-growth-hacks"
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
    title: "YouTube Shorts: The Secret to 1M Views in 30 Days",
    category: "VIDEO STRATEGY",
    categoryColor: "red",
    excerpt: "How to crack the YouTube Shorts algorithm and build a massive following fast.",
    readTime: "15 min",
    date: "Feb 14, 2024",
    slug: "youtube-shorts-strategy"
  },
  {
    title: "Scale Your Content Creation: 100 Posts in 2 Hours",
    category: "PRODUCTIVITY",
    categoryColor: "blue",
    excerpt: "My exact system for creating a month's worth of content in a single afternoon.",
    readTime: "12 min",
    date: "Feb 15, 2024",
    slug: "scale-content-creation"
  },
  {
    title: "The 30-Day Social Media Calendar That Tripled My Sales",
    category: "CONTENT STRATEGY",
    categoryColor: "green",
    excerpt: "Copy my exact posting schedule and content themes that convert followers into customers.",
    readTime: "11 min",
    date: "Feb 16, 2024",
    slug: "social-media-calendar"
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
    title: "AI Automation Guide: Build Your $10K/Month Business Machine",
    category: "AUTOMATION",
    categoryColor: "purple",
    excerpt: "Complete blueprint for automating your entire business with AI tools and workflows.",
    readTime: "18 min",
    date: "Feb 18, 2024",
    slug: "ai-automation-guide"
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
    title: "Email Marketing Mastery: Turn Subscribers into $100K Revenue",
    category: "MARKETING",
    categoryColor: "blue",
    excerpt: "The email sequences and strategies that generate 40% of my total revenue.",
    readTime: "14 min",
    date: "Feb 20, 2024",
    slug: "email-marketing-guide"
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
    title: "How I Built a Digital Product Empire That Makes $50K/Month",
    category: "CASE STUDY",
    categoryColor: "green",
    excerpt: "Behind the scenes of my digital product business and the strategies that drive success.",
    readTime: "16 min",
    date: "Feb 22, 2024",
    slug: "digital-products-empire"
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
    title: "50 Digital Product Ideas That Are Printing Money in 2024",
    category: "2024 TRENDS",
    categoryColor: "pink",
    excerpt: "From $47 templates to $10K masterclasses - find your perfect product.",
    readTime: "25 min",
    date: "Feb 23, 2024",
    slug: "digital-products-ideas-2024"
  },
  {
    title: "How I Built 5 Faceless Channels to $500K/Year",
    category: "STRATEGY",
    categoryColor: "purple",
    excerpt: "The complete blueprint to anonymous content empire building.",
    readTime: "19 min",
    date: "Feb 24, 2024",
    slug: "faceless-content-strategy"
  },
  {
    title: "How I Make $47,000/Month Selling Simple Templates",
    category: "GUIDE",
    categoryColor: "green",
    excerpt: "The exact blueprint to turn 2-hour projects into passive income machines.",
    readTime: "17 min",
    date: "Feb 25, 2024",
    slug: "how-to-sell-templates"
  },
  {
    title: "Create Your First Faceless YouTube Channel in 7 Days",
    category: "YOUTUBE",
    categoryColor: "red",
    excerpt: "The complete guide to building a profitable faceless YouTube channel from scratch.",
    readTime: "18 min",
    date: "Feb 26, 2024",
    slug: "create-faceless-youtube-channel"
  },
  {
    title: "23 Ways to Monetize AI and Make $10K+/Month",
    category: "MONETIZATION",
    categoryColor: "green",
    excerpt: "Real businesses making real money with AI (with proof).",
    readTime: "24 min",
    date: "Feb 27, 2024",
    slug: "monetize-with-ai"
  },
  {
    title: "AI Image Generation: The Complete Guide for Content Creators",
    category: "AI TOOLS",
    categoryColor: "purple",
    excerpt: "Master every AI image tool from Midjourney to Stable Diffusion and create stunning visuals.",
    readTime: "16 min",
    date: "Feb 28, 2024",
    slug: "ai-image-generation-guide"
  },
  {
    title: "37 ChatGPT Automation Hacks That Save 20+ Hours/Week",
    category: "PRODUCTIVITY",
    categoryColor: "blue",
    excerpt: "Transform ChatGPT into your personal AI assistant with these game-changing automation tips.",
    readTime: "15 min",
    date: "Feb 29, 2024",
    slug: "chatgpt-automation-tips"
  },
  {
    title: "The C.A.S.H. Framework: Create 1,000 Pieces of Content Per Month",
    category: "FRAMEWORK",
    categoryColor: "green",
    excerpt: "My proven system for scaling content creation without burning out.",
    readTime: "14 min",
    date: "Mar 1, 2024",
    slug: "content-scaling-framework"
  },
  {
    title: "n8n for Beginners: Automate Everything Without Code",
    category: "AUTOMATION",
    categoryColor: "orange",
    excerpt: "The complete guide to workflow automation that saves 20+ hours/week.",
    readTime: "21 min",
    date: "Mar 1, 2024",
    slug: "n8n-beginners-guide"
  },
  {
    title: "The $100K/Year Passive Income Blueprint I Actually Use",
    category: "PASSIVE INCOME",
    categoryColor: "green",
    excerpt: "7 income streams that generate $8,400/month while I sleep.",
    readTime: "22 min",
    date: "Mar 2, 2024",
    slug: "passive-income-blueprint"
  },
  {
    title: "Prompt Engineering: The $150/Hour Skill Nobody's Teaching Right",
    category: "AI MASTERY",
    categoryColor: "purple",
    excerpt: "Master the art of AI communication with battle-tested frameworks and 100+ examples.",
    readTime: "28 min",
    date: "Mar 3, 2024",
    slug: "prompt-engineering-guide"
  },
  {
    title: "Social Media Automation: Post to 10 Platforms in 10 Minutes",
    category: "AUTOMATION",
    categoryColor: "blue",
    excerpt: "The complete system I use to manage 50+ accounts with 2 hours/week.",
    readTime: "20 min",
    date: "Mar 4, 2024",
    slug: "social-media-automation"
  }
]

export default function BlogPage() {
  const heroAnimation = useScrollAnimation({ threshold: 0.2 })
  const contentAnimation = useScrollAnimation({ threshold: 0.1 })
  const { setElementRef, visibleElements } = useScrollAnimations(blogPosts.length, { threshold: 0.1 })

  const getCategoryColor = (color: string) => {
    const colors: { [key: string]: string } = {
      blue: 'bg-blue-500/10 border-blue-500/20 text-blue-400',
      purple: 'bg-purple-500/10 border-purple-500/20 text-purple-400',
      green: 'bg-green-500/10 border-green-500/20 text-green-400',
      pink: 'bg-pink-500/10 border-pink-500/20 text-pink-400',
      red: 'bg-red-500/10 border-red-500/20 text-red-400',
      orange: 'bg-orange-500/10 border-orange-500/20 text-orange-400'
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
                ref={setElementRef(index)}
                className={`bg-zinc-900 rounded-2xl p-8 hover:bg-zinc-800 transition-all duration-300 group cursor-pointer hover-lift scroll-fade-up ${visibleElements[index] ? 'visible' : ''}`}
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