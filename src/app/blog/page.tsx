'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useScrollAnimation, useScrollAnimations } from '@/hooks/useScrollAnimation'

export default function BlogPage() {
  // Scroll animations
  const headerAnimation = useScrollAnimation({ threshold: 0.2 })
  const newsletterAnimation = useScrollAnimation({ threshold: 0.2 })
  // Only show blog posts that actually exist
  const blogPosts = [
    {
      title: "From 0 to 500K followers in 10 months. Here's everything I learned about Instagram growth",
      slug: "digital-products-success-story",
      image: "https://ext.same-assets.com/1161517358/3768082061.png",
      excerpt: "Complete Instagram growth blueprint with actionable strategies, monetization tips, and real case studies.",
      date: "January 8, 2024",
      readTime: "12 min read"
    },
    {
      title: "How Marcus Rivera Grew from 800 to 125K Instagram Followers in 8 Months with Instagram Ignited",
      slug: "instagram-ignited-success-stories",
      image: "https://ext.same-assets.com/1161517358/3768082061.png",
      excerpt: "Marcus's complete transformation story using Instagram Ignited strategies to build a $15K/month business.",
      date: "January 8, 2024", 
      readTime: "12 min read"
    }
  ]
  
  // Coming soon posts for visual appeal
  const comingSoonPosts = [
    {
      title: "The AI Influencer Revolution: Building Virtual Personas That Earn $8K/Month",
      image: "https://ext.same-assets.com/1161517358/3158317405.jpeg",
      isComingSoon: true
    },
    {
      title: "ComfyUI Mastery: From Beginner to $10K/Month AI Art Business",
      image: "https://ext.same-assets.com/1161517358/3907883451.jpeg",
      isComingSoon: true
    },
    {
      title: "N8N Automation Secrets: How to Build a $50K/Month Business",
      image: "https://ext.same-assets.com/1161517358/2233149341.jpeg",
      isComingSoon: true
    },
    {
      title: "Digital Product Psychology: Why Some Products Sell $1K+/Day",
      image: "https://ext.same-assets.com/1161517358/422346753.png",
      isComingSoon: true
    }
  ]

  // Scroll animations for all posts
  const allPosts = [...blogPosts, ...comingSoonPosts]
  const { setElementRef, visibleElements } = useScrollAnimations(allPosts.length)

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
                SUCCESS STORIES
              </span>
            </h1>
            <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
              Real transformations, proven strategies, and actionable insights from <span className="text-blue-400">Anyro</span> and <span className="text-purple-400">IImagined</span> students
            </p>
          </div>

          {/* Featured Posts (Working) */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-8 text-center">
              📚 <span className="text-green-400">Available Now</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {blogPosts.map((post, index) => (
                <div
                  key={index}
                  ref={setElementRef(index)}
                  className={`scroll-fade-up ${visibleElements[index] ? 'visible' : ''}`}
                >
                  <Link
                    href={`/blog/${post.slug}`}
                    className="group bg-gradient-to-r from-green-500/10 to-blue-500/10 border-2 border-green-500/30 rounded-xl overflow-hidden hover:border-green-400 transition-all duration-300 card-hover hover-lift block"
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
                      <div className="flex items-center text-xs text-gray-400 mb-3">
                        <span>{post.date}</span>
                        <span className="mx-2">•</span>
                        <span>{post.readTime}</span>
                        <span className="ml-auto bg-green-500 text-white px-2 py-1 rounded-full text-xs">LIVE</span>
                      </div>
                      <h3 className="text-xl font-semibold mb-3 group-hover:text-green-400 transition-colors duration-200">
                        {post.title}
                      </h3>
                      <p className="text-gray-400 text-sm">
                        {post.excerpt}
                      </p>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Coming Soon Posts */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-8 text-center">
              🚀 <span className="text-yellow-400">Coming Soon</span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {comingSoonPosts.map((post, index) => (
                <div
                  key={index + blogPosts.length}
                  ref={setElementRef(index + blogPosts.length)}
                  className={`scroll-fade-up ${visibleElements[index + blogPosts.length] ? 'visible' : ''}`}
                >
                  <div className="group bg-zinc-900/50 border border-zinc-700 rounded-xl overflow-hidden opacity-75 hover:opacity-90 transition-all duration-200">
                    <div className="aspect-video relative">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                        <span className="bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-bold">
                          Coming Soon
                        </span>
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-gray-300">
                        {post.title}
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
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
