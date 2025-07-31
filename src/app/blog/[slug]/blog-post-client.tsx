'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { useEffect, useState } from 'react'
import { additionalBlogPosts } from './blog-data'

interface BlogPost {
  title: string
  image: string
  date: string
  readTime: string
  content: string
  slug?: string
}

interface BlogPostClientProps {
  post: BlogPost
}

export default function BlogPostClient({ post }: BlogPostClientProps) {
  // Scroll animations
  const headerAnimation = useScrollAnimation({ threshold: 0.2 })
  const contentAnimation = useScrollAnimation({ threshold: 0.1 })
  const newsletterAnimation = useScrollAnimation({ threshold: 0.1 })
  
  // Get age-based stats based on post date
  const getAgeBasedStats = (dateStr: string) => {
    const postDate = new Date(dateStr)
    const today = new Date('2025-08-01')
    const daysDiff = Math.floor((today.getTime() - postDate.getTime()) / (1000 * 60 * 60 * 24))
    
    // Base stats that grow over time
    const baseViews = 500
    const baseLikes = 50
    
    // Daily growth
    const dailyViewGrowth = Math.floor(Math.random() * 40) + 14 // 14-53 views per day
    const dailyLikeGrowth = Math.floor(Math.random() * 3) + 1 // 1-3 likes per day
    
    const totalLikes = baseLikes + (dailyLikeGrowth * daysDiff)
    // Shares are 13-18% of likes
    const shareRatio = 0.13 + (Math.random() * 0.05) // 13-18%
    const totalShares = Math.floor(totalLikes * shareRatio)
    
    return {
      views: baseViews + (dailyViewGrowth * daysDiff),
      likes: totalLikes,
      shares: totalShares
    }
  }
  
  const stats = getAgeBasedStats(post.date)
  
  // Reading progress
  const [readingProgress, setReadingProgress] = useState(0)
  const [liked, setLiked] = useState(false)
  const [likeCount, setLikeCount] = useState(stats.likes)
  const [shareCount, setShareCount] = useState(stats.shares)
  const [viewCount] = useState(stats.views)
  const [copied, setCopied] = useState(false)
  const [hasShared, setHasShared] = useState(false)
  
  useEffect(() => {
    const updateReadingProgress = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = (scrollTop / docHeight) * 100
      setReadingProgress(Math.min(progress, 100))
    }

    window.addEventListener('scroll', updateReadingProgress)
    return () => window.removeEventListener('scroll', updateReadingProgress)
  }, [])

  // Copy link function
  const copyLink = () => {
    const url = window.location.href
    navigator.clipboard.writeText(url)
    setCopied(true)
    
    // Only increment share count once per session
    if (!hasShared) {
      setShareCount(prev => prev + 1)
      setHasShared(true)
    }
    
    setTimeout(() => setCopied(false), 2000)
  }
  
  // Handle like
  const handleLike = () => {
    if (!liked) {
      setLiked(true)
      setLikeCount(prev => prev + 1)
    } else {
      setLiked(false)
      setLikeCount(prev => prev - 1)
    }
  }

  return (
    <>
      {/* Reading Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-zinc-800 z-50">
        <div 
          className="h-full bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 transition-all duration-300 ease-out"
          style={{ width: `${readingProgress}%` }}
        />
      </div>

      <div className="min-h-screen bg-dark">
        {/* Hero Section with Floating Navigation */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover opacity-20"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/50 via-zinc-900/80 to-zinc-900" />
          </div>
          
          {/* Floating Back Button */}
          <Link 
            href="/blog" 
            className="fixed top-6 left-6 z-40 bg-zinc-900/80 backdrop-blur-sm border border-zinc-700 rounded-full px-6 py-3 text-white hover:bg-zinc-800 transition-all duration-300 hover:scale-105 hover-lift"
          >
            ← Back to Blog
          </Link>
          
          {/* Hero Content */}
          <div 
            ref={headerAnimation.elementRef}
            className={`relative z-10 max-w-5xl mx-auto text-center px-4 sm:px-6 lg:px-8 scroll-fade-up ${headerAnimation.isVisible ? 'visible' : ''}`}
          >
            {/* Article Meta */}
            <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
              <div className="inline-flex items-center space-x-2 bg-zinc-900/50 backdrop-blur-sm border border-zinc-700 rounded-full px-4 py-2">
                <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-300 text-sm">{post.readTime}</span>
              </div>
              <div className="inline-flex items-center space-x-2 bg-zinc-900/50 backdrop-blur-sm border border-zinc-700 rounded-full px-4 py-2">
                <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                  <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-300 text-sm">{viewCount.toLocaleString()} views</span>
              </div>
              <div className="inline-flex items-center space-x-2 bg-zinc-900/50 backdrop-blur-sm border border-zinc-700 rounded-full px-4 py-2">
                <svg className="w-4 h-4 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zM4 8h12v8H4V8z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-300 text-sm">{post.date}</span>
              </div>
            </div>
            
            {/* Article Title */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
              <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
                {post.title}
              </span>
            </h1>
            
            {/* Scroll Indicator */}
            <div className="animate-bounce mt-16">
              <div className="w-6 h-10 border-2 border-blue-400 rounded-full flex justify-center">
                <div className="w-1 h-3 bg-blue-400 rounded-full mt-2 animate-pulse" />
              </div>
            </div>
          </div>
        </section>

        {/* Floating Action Bar */}
        <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-40">
          <div className="bg-zinc-900/90 backdrop-blur-lg border border-zinc-700 rounded-full px-6 py-3 flex items-center space-x-6 shadow-2xl">
            <button 
              onClick={handleLike}
              className={`flex items-center space-x-2 transition-all ${liked ? 'text-red-500' : 'text-gray-400 hover:text-red-500'}`}
            >
              <svg className="w-5 h-5" fill={liked ? 'currentColor' : 'none'} stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              <span className="text-sm font-medium">{likeCount}</span>
            </button>
            
            <button 
              onClick={copyLink}
              className="flex items-center space-x-2 text-gray-400 hover:text-blue-400 transition-all"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m9.632 4.268C18.114 15.562 18 16.018 18 16.5c0 .482.114.938.316 1.342m0-2.684a3 3 0 110 2.684M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="text-sm font-medium">{copied ? 'Copied!' : `Share (${shareCount})`}</span>
            </button>
          </div>
        </div>

        {/* Content Section */}
        <section className="relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
            {/* Featured Image */}
            <div className="max-w-4xl mx-auto mb-16">
              <div className="relative aspect-video rounded-2xl overflow-hidden hover-lift">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/60 via-transparent to-transparent" />
              </div>
            </div>

            {/* Article Content */}
            <article 
              ref={contentAnimation.elementRef}
              className={`max-w-4xl mx-auto scroll-fade-up ${contentAnimation.isVisible ? 'visible' : ''}`}
            >
              <div className="prose prose-lg prose-invert max-w-none blog-content">
                <div dangerouslySetInnerHTML={{ __html: post.content }} />
              </div>
            </article>
          </div>
        </section>

        {/* Newsletter Section - PROMINENT */}
        <section className="section-spacing relative overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20">
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
          </div>
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div 
              ref={newsletterAnimation.elementRef}
              className={`bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 backdrop-blur-sm border-2 border-blue-500/50 rounded-3xl p-12 md:p-16 text-center hover-lift shadow-2xl shadow-blue-500/20 scroll-fade-up ${newsletterAnimation.isVisible ? 'visible' : ''}`}
            >
              <div className="max-w-3xl mx-auto">
                {/* Icon */}
                <div className="w-20 h-20 mx-auto mb-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                  </svg>
                </div>
                
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient">
                    Get The Creator Playbook
                  </span>
                </h2>
                
                <p className="text-xl md:text-2xl text-gray-200 mb-6 font-light">
                  Join <span className="text-blue-300 font-bold text-2xl md:text-3xl">10,000+</span> creators getting actionable strategies on 
                  <span className="text-purple-300"> Instagram growth</span>, 
                  <span className="text-green-300"> digital products</span>, and 
                  <span className="text-pink-300"> AI automation</span> delivered weekly.
                </p>
                
                <div className="grid md:grid-cols-3 gap-6 mb-10 max-w-3xl mx-auto">
                  <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                    <div className="text-3xl mb-2">📈</div>
                    <p className="text-sm text-gray-300">Instagram Growth</p>
                  </div>
                  <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                    <div className="text-3xl mb-2">💰</div>
                    <p className="text-sm text-gray-300">Digital Products</p>
                  </div>
                  <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                    <div className="text-3xl mb-2">🤖</div>
                    <p className="text-sm text-gray-300">AI Automation</p>
                  </div>
                </div>
                
                <a
                  href="https://anyro.beehiiv.com/subscribe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-10 py-5 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-lg font-bold rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover-lift shadow-xl shadow-blue-500/30 animate-glow"
                >
                  <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                  </svg>
                  Join Free Newsletter →
                </a>
                
                <p className="text-sm text-gray-400 mt-6">
                  Get actionable tips delivered to your inbox every week. No spam, ever.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Related Articles */}
        <section className="section-spacing">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  More Success Stories
                </span>
              </h2>
              
              <div className="grid md:grid-cols-3 gap-8">
                {/* Show actual blog posts */}
                <Link href="/blog/500k-followers" className="group bg-zinc-900/50 backdrop-blur-sm border border-zinc-700 rounded-xl overflow-hidden hover-lift">
                  <div className="aspect-video relative">
                    <Image
                      src={additionalBlogPosts['500k-followers'].image}
                      alt={additionalBlogPosts['500k-followers'].title}
                      fill
                      className="object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/50 to-transparent" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-blue-400 transition-colors line-clamp-2">
                      {additionalBlogPosts['500k-followers'].title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-3">
                      Learn how Anyro built a massive following and 7-figure business
                    </p>
                    <div className="flex items-center text-xs text-gray-500">
                      <span>{additionalBlogPosts['500k-followers'].date}</span>
                      <span className="mx-2">•</span>
                      <span>{additionalBlogPosts['500k-followers'].readTime}</span>
                    </div>
                  </div>
                </Link>
                
                <Link href="/blog/10k-month" className="group bg-zinc-900/50 backdrop-blur-sm border border-zinc-700 rounded-xl overflow-hidden hover-lift">
                  <div className="aspect-video relative">
                    <Image
                      src={additionalBlogPosts['10k-month'].image}
                      alt={additionalBlogPosts['10k-month'].title}
                      fill
                      className="object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/50 to-transparent" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-green-400 transition-colors line-clamp-2">
                      {additionalBlogPosts['10k-month'].title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-3">
                      Step-by-step guide to reaching $10K/month with content
                    </p>
                    <div className="flex items-center text-xs text-gray-500">
                      <span>{additionalBlogPosts['10k-month'].date}</span>
                      <span className="mx-2">•</span>
                      <span>{additionalBlogPosts['10k-month'].readTime}</span>
                    </div>
                  </div>
                </Link>
                
                <Link href="/blog/creator-path" className="group bg-zinc-900/50 backdrop-blur-sm border border-zinc-700 rounded-xl overflow-hidden hover-lift">
                  <div className="aspect-video relative">
                    <Image
                      src={additionalBlogPosts['creator-path'].image}
                      alt={additionalBlogPosts['creator-path'].title}
                      fill
                      className="object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/50 to-transparent" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-pink-400 transition-colors line-clamp-2">
                      {additionalBlogPosts['creator-path'].title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-3">
                      Essential skills to build a profitable creator business
                    </p>
                    <div className="flex items-center text-xs text-gray-500">
                      <span>{additionalBlogPosts['creator-path'].date}</span>
                      <span className="mx-2">•</span>
                      <span>{additionalBlogPosts['creator-path'].readTime}</span>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>

      <style jsx global>{`
        /* Force blog content styles */
        .prose h2 {
          margin-top: 3rem !important;
          margin-bottom: 2rem !important;
          font-size: 2.25rem !important;
          font-weight: 700 !important;
          background: linear-gradient(to right, #60a5fa, #a78bfa) !important;
          -webkit-background-clip: text !important;
          -webkit-text-fill-color: transparent !important;
          background-clip: text !important;
        }
        
        .prose h3 {
          margin-top: 2.5rem !important;
          margin-bottom: 1.5rem !important;
          font-size: 1.875rem !important;
          font-weight: 700 !important;
          color: #93c5fd !important;
        }
        
        .prose p {
          margin-bottom: 1.5rem !important;
          color: #ffffff !important;
          font-size: 1.125rem !important;
          line-height: 1.8 !important;
        }
        
        .prose ul,
        .prose ol {
          margin: 1.5rem 0 !important;
          padding-left: 1.5rem !important;
        }
        
        .prose li {
          margin-bottom: 0.75rem !important;
          color: #f3f4f6 !important;
          font-size: 1.125rem !important;
          line-height: 1.75 !important;
        }
        
        .prose ul > li {
          list-style-type: disc !important;
          list-style-position: outside !important;
        }
        
        .prose ol > li {
          list-style-type: decimal !important;
          list-style-position: outside !important;
        }
        
        .prose strong {
          color: #ffffff !important;
          font-weight: 600 !important;
        }
        
        .prose blockquote {
          border-left: 4px solid #3b82f6 !important;
          padding: 1.5rem !important;
          margin: 2rem 0 !important;
          background: rgba(31, 41, 55, 0.5) !important;
          border-radius: 0 0.5rem 0.5rem 0 !important;
          font-style: italic !important;
          color: #e5e7eb !important;
        }
        
        /* Force all prose text to be visible */
        .prose * {
          color: inherit !important;
        }
        
        .prose a {
          color: #60a5fa !important;
          text-decoration: underline !important;
        }
        
        /* Specific blog content styling */
        .blog-content p {
          color: #ffffff !important;
          opacity: 1 !important;
          visibility: visible !important;
        }
        
        .blog-content li {
          color: #f3f4f6 !important;
          opacity: 1 !important;
          visibility: visible !important;
        }
        
        .blog-content h2,
        .blog-content h3,
        .blog-content h4 {
          opacity: 1 !important;
          visibility: visible !important;
        }
        
        .blog-content * {
          opacity: 1 !important;
          visibility: visible !important;
        }
        
        .hover-lift {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .hover-lift:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        }
        
        .scroll-fade-up {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }
        
        .scroll-fade-up.visible {
          opacity: 1;
          transform: translateY(0);
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 5s ease infinite;
        }
        
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        .animate-glow {
          animation: glow 2s ease-in-out infinite alternate;
        }
        
        @keyframes glow {
          from {
            box-shadow: 0 0 20px rgba(59, 130, 246, 0.5), 0 0 40px rgba(59, 130, 246, 0.3);
          }
          to {
            box-shadow: 0 0 30px rgba(59, 130, 246, 0.7), 0 0 60px rgba(59, 130, 246, 0.4);
          }
        }
        
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </>
  )
}