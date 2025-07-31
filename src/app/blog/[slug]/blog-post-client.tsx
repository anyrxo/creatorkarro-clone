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
  
  // Get consistent stats based on post title (deterministic)
  const getAgeBasedStats = (dateStr: string, title: string) => {
    // Create a simple hash from the title for consistency
    let hash = 0
    for (let i = 0; i < title.length; i++) {
      const char = title.charCodeAt(i)
      hash = ((hash << 5) - hash) + char
      hash = hash & hash // Convert to 32bit integer
    }
    
    // Use absolute value to ensure positive numbers
    const seed = Math.abs(hash)
    
    const postDate = new Date(dateStr)
    const today = new Date('2025-01-31')
    const daysDiff = Math.floor((today.getTime() - postDate.getTime()) / (1000 * 60 * 60 * 24))
    
    // Base stats that grow over time (deterministic based on title)
    const baseViews = 500 + (seed % 1000)
    const baseLikes = 50 + (seed % 100)
    
    // Daily growth (deterministic)
    const dailyViewGrowth = 14 + (seed % 40) // 14-53 views per day
    const dailyLikeGrowth = 1 + (seed % 3) // 1-3 likes per day
    
    const totalLikes = baseLikes + (dailyLikeGrowth * daysDiff)
    // Shares are 13-18% of likes (deterministic)
    const shareRatio = 0.13 + ((seed % 5) * 0.01) // 13-18%
    const totalShares = Math.floor(totalLikes * shareRatio)
    
    return {
      views: baseViews + (dailyViewGrowth * daysDiff),
      likes: totalLikes,
      shares: totalShares
    }
  }
  
  const stats = getAgeBasedStats(post.date, post.title)
  
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
        <section className="relative bg-zinc-900">
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
              {/* Add a beautiful intro section */}
              <div className="mb-12 p-8 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10 rounded-2xl border border-blue-500/20">
                <p className="text-xl text-gray-200 leading-relaxed">
                  Welcome to this comprehensive guide where we dive deep into actionable strategies and proven methods. Get ready to transform your approach and achieve remarkable results.
                </p>
              </div>
              
              <div className="blog-content" style={{ 
                color: '#ffffff !important', 
                position: 'relative', 
                zIndex: 100,
                backgroundColor: '#000000',
                padding: '2rem',
                borderRadius: '1rem',
                border: '2px solid #333'
              }}>
                <style dangerouslySetInnerHTML={{ __html: `
                  .blog-content * {
                    color: #ffffff !important;
                    opacity: 1 !important;
                    visibility: visible !important;
                  }
                  .blog-content p,
                  .blog-content h1,
                  .blog-content h2,
                  .blog-content h3,
                  .blog-content h4,
                  .blog-content h5,
                  .blog-content h6,
                  .blog-content li,
                  .blog-content strong,
                  .blog-content em,
                  .blog-content span,
                  .blog-content div {
                    color: #ffffff !important;
                    opacity: 1 !important;
                  }
                `}} />
                <div dangerouslySetInnerHTML={{ __html: post.content }} />
              </div>
              
              {/* Add a beautiful conclusion section */}
              <div className="mt-16 p-8 bg-gradient-to-r from-purple-600/10 via-pink-600/10 to-red-600/10 rounded-2xl border border-purple-500/20">
                <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Key Takeaways
                </h3>
                <p className="text-lg text-gray-200">
                  This guide provided you with practical strategies and real-world examples. Remember, success comes from consistent implementation and continuous learning. Start applying these techniques today and watch your results transform.
                </p>
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
        /* Beautiful blog content styles */
        .blog-content {
          color: #ffffff !important;
          font-size: 1.125rem;
          line-height: 1.75;
          max-width: none;
          position: relative !important;
          z-index: 10 !important;
        }
        
        .blog-content * {
          color: #ffffff !important;
        }
        
        .blog-content p {
          margin-bottom: 1.5rem;
          color: #ffffff !important;
          font-size: 1.125rem;
          line-height: 1.75;
        }
        
        .blog-content h1,
        .blog-content h2,
        .blog-content h3,
        .blog-content h4,
        .blog-content h5,
        .blog-content h6 {
          font-weight: 700;
          line-height: 1.2;
          margin-top: 2.5rem;
          margin-bottom: 1rem;
          color: #ffffff !important;
        }
        
        .blog-content h1 {
          font-size: 2.5rem;
        }
        
        .blog-content h2 {
          font-size: 2rem;
        }
        
        .blog-content h3 {
          font-size: 1.75rem;
        }
        
        .blog-content h4 {
          font-size: 1.5rem;
        }
        
        .blog-content a {
          color: #60a5fa;
          text-decoration: none;
          font-weight: 500;
          transition: color 0.2s;
        }
        
        .blog-content a:hover {
          color: #93bbfc;
          text-decoration: underline;
        }
        
        .blog-content strong {
          color: #ffffff !important;
          font-weight: 600;
        }
        
        .blog-content em {
          color: #ffffff !important;
          font-style: italic;
        }
        
        .blog-content ul,
        .blog-content ol {
          margin-bottom: 1.5rem;
          padding-left: 1.5rem;
          color: #ffffff !important;
        }
        
        .blog-content ul li,
        .blog-content ol li {
          margin-bottom: 0.5rem;
          color: #ffffff !important;
          line-height: 1.75;
        }
        
        .blog-content ul li::marker {
          color: #60a5fa;
        }
        
        .blog-content ol li::marker {
          color: #60a5fa;
          font-weight: 600;
        }
        
        .blog-content blockquote {
          border-left: 4px solid #60a5fa;
          padding-left: 1.5rem;
          margin: 2rem 0;
          font-style: italic;
          color: #d1d5db;
          background: rgba(59, 130, 246, 0.05);
          padding: 1.5rem;
          border-radius: 0.5rem;
        }
        
        .blog-content pre {
          background: #1f2937;
          border: 1px solid #374151;
          border-radius: 0.5rem;
          padding: 1.5rem;
          overflow-x: auto;
          margin-bottom: 1.5rem;
        }
        
        .blog-content code {
          background: #1f2937;
          color: #60a5fa;
          padding: 0.25rem 0.5rem;
          border-radius: 0.25rem;
          font-size: 0.875rem;
          font-family: 'Fira Code', monospace;
        }
        
        .blog-content pre code {
          background: transparent;
          padding: 0;
          border-radius: 0;
        }
        
        .blog-content img {
          max-width: 100%;
          height: auto;
          border-radius: 0.75rem;
          margin: 2rem 0;
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.5);
        }
        
        .blog-content table {
          width: 100%;
          border-collapse: collapse;
          margin-bottom: 2rem;
          background: #1f2937;
          border-radius: 0.5rem;
          overflow: hidden;
        }
        
        .blog-content table th {
          background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);
          color: white;
          padding: 1rem;
          text-align: left;
          font-weight: 600;
        }
        
        .blog-content table td {
          padding: 1rem;
          border-bottom: 1px solid #374151;
          color: #e5e7eb;
        }
        
        .blog-content table tr:hover {
          background: rgba(59, 130, 246, 0.1);
        }
        
        .blog-content hr {
          border: none;
          height: 1px;
          background: linear-gradient(90deg, transparent, #60a5fa, transparent);
          margin: 3rem 0;
        }
        
        /* Interactive elements from blog posts */
        .blog-content .animated-intro {
          animation: fadeInUp 1s ease-out;
          margin-bottom: 3rem;
        }
        
        .blog-content .lead-text {
          font-size: 1.5rem;
          line-height: 1.6;
          color: #f3f4f6;
          margin-bottom: 1.5rem;
        }
        
        .blog-content .highlight-green {
          color: #10b981;
          font-weight: 700;
        }
        
        .blog-content .highlight-red {
          color: #ef4444;
          font-weight: 700;
        }
        
        .blog-content .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1.5rem;
          margin: 3rem 0;
        }
        
        .blog-content .stat-card {
          background: #1f2937;
          border: 1px solid #374151;
          border-radius: 1rem;
          padding: 2rem;
          text-align: center;
          transition: all 0.3s ease;
        }
        
        .blog-content .stat-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        }
        
        .blog-content .stat-card.blue {
          border-color: #3b82f6;
          background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), transparent);
        }
        
        .blog-content .stat-card.green {
          border-color: #10b981;
          background: linear-gradient(135deg, rgba(16, 185, 129, 0.1), transparent);
        }
        
        .blog-content .stat-card.purple {
          border-color: #8b5cf6;
          background: linear-gradient(135deg, rgba(139, 92, 246, 0.1), transparent);
        }
        
        .blog-content .stat-number {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
          color: #60a5fa !important;
        }
        
        .blog-content .stat-label {
          color: #9ca3af;
          font-size: 0.875rem;
        }
        
        .blog-content .gradient-heading {
          color: #ffffff !important;
          font-size: 2.5rem;
          font-weight: 800;
          margin: 3rem 0 1.5rem;
        }
        
        .blog-content .problem-solution-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
          margin: 2rem 0;
        }
        
        @media (max-width: 768px) {
          .blog-content .problem-solution-grid {
            grid-template-columns: 1fr;
          }
        }
        
        .blog-content .problem-card,
        .blog-content .solution-card {
          background: #1f2937;
          border-radius: 1rem;
          padding: 2rem;
          border: 1px solid #374151;
        }
        
        .blog-content .problem-card {
          border-color: #ef4444;
          background: linear-gradient(135deg, rgba(239, 68, 68, 0.1), transparent);
        }
        
        .blog-content .solution-card {
          border-color: #10b981;
          background: linear-gradient(135deg, rgba(16, 185, 129, 0.1), transparent);
        }
        
        .blog-content .case-study-box {
          background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(139, 92, 246, 0.1));
          border: 1px solid #3b82f6;
          border-radius: 1rem;
          padding: 2rem;
          margin: 2rem 0;
        }
        
        .blog-content .case-study-insight {
          font-style: italic;
          color: #93bbfc;
          margin-top: 1rem;
        }
        
        .blog-content .framework-visual {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin: 2rem 0;
          flex-wrap: wrap;
          gap: 1rem;
        }
        
        .blog-content .framework-step {
          flex: 1;
          min-width: 200px;
          background: #1f2937;
          border: 1px solid #374151;
          border-radius: 1rem;
          padding: 1.5rem;
          text-align: center;
        }
        
        .blog-content .step-number {
          width: 40px;
          height: 40px;
          background: linear-gradient(135deg, #3b82f6, #8b5cf6);
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          margin: 0 auto 1rem;
        }
        
        .blog-content .framework-arrow {
          color: #60a5fa;
          font-size: 2rem;
        }
        
        @media (max-width: 768px) {
          .blog-content .framework-arrow {
            display: none;
          }
        }
        
        .blog-content .implementation-box {
          background: #1f2937;
          border-left: 4px solid #60a5fa;
          padding: 1.5rem;
          margin: 2rem 0;
          border-radius: 0.5rem;
        }
        
        .blog-content .revenue-chart {
          background: #1f2937;
          border-radius: 1rem;
          padding: 2rem;
          margin: 2rem 0;
        }
        
        .blog-content .chart-bar {
          position: relative;
          background: linear-gradient(90deg, #3b82f6, #8b5cf6);
          height: 40px;
          border-radius: 0.5rem;
          margin-bottom: 1rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 1rem;
          width: var(--width);
          animation: growWidth 1s ease-out;
        }
        
        @keyframes growWidth {
          from {
            width: 0;
          }
        }
        
        .blog-content .bar-label {
          color: white;
          font-weight: 600;
        }
        
        .blog-content .bar-value {
          color: white;
          font-weight: 700;
        }
        
        .blog-content .numbered-list {
          counter-reset: item;
          list-style: none;
          padding-left: 0;
        }
        
        .blog-content .numbered-list li {
          counter-increment: item;
          position: relative;
          padding-left: 3rem;
          margin-bottom: 1rem;
        }
        
        .blog-content .numbered-list li::before {
          content: counter(item);
          position: absolute;
          left: 0;
          top: 0;
          width: 2rem;
          height: 2rem;
          background: linear-gradient(135deg, #3b82f6, #8b5cf6);
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
        }
        
        .blog-content .warning-box {
          background: rgba(239, 68, 68, 0.1);
          border: 1px solid #ef4444;
          border-radius: 1rem;
          padding: 2rem;
          margin: 2rem 0;
        }
        
        .blog-content .email-stats {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: 1.5rem;
          margin: 2rem 0;
        }
        
        .blog-content .email-metric {
          text-align: center;
          background: #1f2937;
          border-radius: 1rem;
          padding: 2rem 1rem;
          border: 1px solid #374151;
          transition: all 0.3s ease;
        }
        
        .blog-content .email-metric:hover {
          transform: translateY(-4px);
          border-color: #60a5fa;
          box-shadow: 0 10px 30px rgba(59, 130, 246, 0.2);
        }
        
        .blog-content .metric-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
        }
        
        .blog-content .metric-value {
          font-size: 2.5rem;
          font-weight: 700;
          color: #60a5fa;
          margin-bottom: 0.5rem;
        }
        
        .blog-content .metric-label {
          color: #9ca3af;
          font-size: 0.875rem;
        }
        
        .blog-content .email-sequence {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1rem;
          margin: 2rem 0;
        }
        
        .blog-content .email-card {
          background: #1f2937;
          border: 1px solid #374151;
          border-radius: 0.75rem;
          padding: 1.5rem;
          transition: all 0.3s ease;
        }
        
        .blog-content .email-card:hover {
          border-color: #60a5fa;
          transform: translateY(-2px);
        }
        
        .blog-content .automation-pyramid {
          margin: 2rem 0;
        }
        
        .blog-content .pyramid-level {
          background: #1f2937;
          border: 1px solid #374151;
          padding: 1.5rem;
          margin-bottom: 0.5rem;
          border-radius: 0.5rem;
          transition: all 0.3s ease;
        }
        
        .blog-content .pyramid-level.level-1 {
          width: 100%;
        }
        
        .blog-content .pyramid-level.level-2 {
          width: 85%;
          margin-left: auto;
          margin-right: auto;
        }
        
        .blog-content .pyramid-level.level-3 {
          width: 70%;
          margin-left: auto;
          margin-right: auto;
        }
        
        .blog-content .pyramid-level.level-4 {
          width: 55%;
          margin-left: auto;
          margin-right: auto;
        }
        
        .blog-content .pyramid-level:hover {
          border-color: #60a5fa;
          transform: translateY(-2px);
        }
        
        .blog-content .time-savings-calculator {
          background: linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(59, 130, 246, 0.1));
          border: 1px solid #10b981;
          border-radius: 1rem;
          padding: 2rem;
          margin: 2rem 0;
          text-align: center;
        }
        
        .blog-content .pricing-comparison {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
          margin: 2rem 0;
        }
        
        @media (max-width: 768px) {
          .blog-content .pricing-comparison {
            grid-template-columns: 1fr;
          }
        }
        
        .blog-content .pricing-column {
          background: #1f2937;
          border-radius: 1rem;
          padding: 2rem;
          text-align: center;
          border: 2px solid;
        }
        
        .blog-content .pricing-column.low {
          border-color: #ef4444;
        }
        
        .blog-content .pricing-column.high {
          border-color: #10b981;
        }
        
        .blog-content .price {
          font-size: 3rem;
          font-weight: 700;
          margin: 1.5rem 0;
        }
        
        .blog-content .pricing-column.low .price {
          color: #ef4444;
        }
        
        .blog-content .pricing-column.high .price {
          color: #10b981;
        }
        
        .blog-content .value-stack {
          background: #1f2937;
          border-radius: 1rem;
          padding: 2rem;
          margin: 2rem 0;
        }
        
        .blog-content .stack-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem 0;
          border-bottom: 1px solid #374151;
        }
        
        .blog-content .item-name {
          color: #e5e7eb;
        }
        
        .blog-content .item-value {
          color: #9ca3af;
          text-decoration: line-through;
        }
        
        .blog-content .stack-total {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1.5rem 0;
          border-bottom: 2px solid #374151;
          margin-bottom: 1rem;
        }
        
        .blog-content .total-label {
          font-weight: 600;
          color: #e5e7eb;
        }
        
        .blog-content .total-value {
          font-size: 1.5rem;
          font-weight: 700;
          color: #9ca3af;
          text-decoration: line-through;
        }
        
        .blog-content .stack-price {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem 0;
        }
        
        .blog-content .price-label {
          font-size: 1.25rem;
          font-weight: 700;
          color: #10b981;
        }
        
        .blog-content .price-value {
          font-size: 2rem;
          font-weight: 700;
          color: #10b981;
        }
        
        .blog-content .roadmap-timeline {
          margin: 2rem 0;
        }
        
        .blog-content .timeline-phase {
          background: #1f2937;
          border-left: 4px solid;
          padding: 2rem;
          margin-bottom: 2rem;
          border-radius: 0.5rem;
          position: relative;
        }
        
        .blog-content .timeline-phase:nth-child(1) {
          border-color: #3b82f6;
        }
        
        .blog-content .timeline-phase:nth-child(2) {
          border-color: #8b5cf6;
        }
        
        .blog-content .timeline-phase:nth-child(3) {
          border-color: #ec4899;
        }
        
        .blog-content .phase-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
        }
        
        .blog-content .phase-goal {
          background: linear-gradient(135deg, #3b82f6, #8b5cf6);
          color: white;
          padding: 0.5rem 1rem;
          border-radius: 2rem;
          font-size: 0.875rem;
          font-weight: 600;
        }
        
        .blog-content .success-stories {
          margin: 4rem 0;
        }
        
        .blog-content .story-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          margin: 2rem 0;
        }
        
        .blog-content .story-card {
          background: #1f2937;
          border: 1px solid #374151;
          border-radius: 1rem;
          padding: 2rem;
          text-align: center;
          transition: all 0.3s ease;
        }
        
        .blog-content .story-card:hover {
          transform: translateY(-4px);
          border-color: #60a5fa;
          box-shadow: 0 10px 30px rgba(59, 130, 246, 0.2);
        }
        
        .blog-content .story-card img {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          margin: 0 auto 1rem;
          object-fit: cover;
        }
        
        .blog-content .story-niche {
          color: #60a5fa;
          font-size: 0.875rem;
          margin-bottom: 0.5rem;
        }
        
        .blog-content .story-result {
          font-size: 1.25rem;
          font-weight: 700;
          color: #10b981;
          margin-bottom: 1rem;
        }
        
        .blog-content .story-quote {
          font-style: italic;
          color: #9ca3af;
          font-size: 0.875rem;
        }
        
        .blog-content .final-cta {
          margin-top: 4rem;
        }
        
        .blog-content .cta-lead {
          font-size: 1.25rem;
          color: #e5e7eb;
          margin-bottom: 1.5rem;
        }
        
        .blog-content .guarantee-box {
          background: linear-gradient(135deg, rgba(16, 185, 129, 0.1), transparent);
          border: 2px solid #10b981;
          border-radius: 1rem;
          padding: 2rem;
          margin: 2rem 0;
        }
        
        .blog-content .course-options {
          margin: 2rem 0;
        }
        
        .blog-content .course-card {
          background: #1f2937;
          border: 2px solid #374151;
          border-radius: 1rem;
          padding: 2rem;
          text-align: center;
          transition: all 0.3s ease;
        }
        
        .blog-content .course-card.featured {
          border-color: #60a5fa;
          background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), transparent);
        }
        
        .blog-content .course-desc {
          color: #9ca3af;
          margin-bottom: 1rem;
        }
        
        .blog-content .course-price {
          font-size: 2rem;
          font-weight: 700;
          margin-bottom: 1.5rem;
        }
        
        .blog-content .strikethrough {
          text-decoration: line-through;
          color: #6b7280;
          font-size: 1.5rem;
        }
        
        .blog-content .course-button {
          display: inline-block;
          background: linear-gradient(135deg, #3b82f6, #8b5cf6);
          color: white;
          padding: 1rem 2rem;
          border-radius: 0.5rem;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s ease;
        }
        
        .blog-content .course-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(59, 130, 246, 0.3);
        }
        
        .blog-content .course-bonus {
          margin-top: 1rem;
          color: #10b981;
          font-weight: 600;
        }
        
        .blog-content .urgency-notice {
          background: rgba(239, 68, 68, 0.1);
          border: 1px solid #ef4444;
          border-radius: 0.5rem;
          padding: 1.5rem;
          text-align: center;
          margin: 2rem 0;
        }
        
        .blog-content .final-thought {
          background: #1f2937;
          border-radius: 1rem;
          padding: 2rem;
          margin: 2rem 0;
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        /* Removed conflicting prose styles */
          font-weight: 800 !important;
          line-height: 1.1 !important;
          background: linear-gradient(to right, #60a5fa, #a78bfa, #ec4899) !important;
          -webkit-background-clip: text !important;
          -webkit-text-fill-color: transparent !important;
          background-clip: text !important;
          text-align: center !important;
          letter-spacing: -0.02em !important;
        }
        
        .prose h2 {
          margin-top: 4rem !important;
          margin-bottom: 2rem !important;
          font-size: 2.5rem !important;
          font-weight: 700 !important;
          line-height: 1.2 !important;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%) !important;
          -webkit-background-clip: text !important;
          -webkit-text-fill-color: transparent !important;
          background-clip: text !important;
          letter-spacing: -0.01em !important;
          position: relative !important;
          padding-bottom: 1rem !important;
        }
        
        .prose h2::after {
          content: '' !important;
          position: absolute !important;
          bottom: 0 !important;
          left: 0 !important;
          width: 100px !important;
          height: 4px !important;
          background: linear-gradient(to right, #667eea, #764ba2) !important;
          border-radius: 2px !important;
        }
        
        .prose h3 {
          margin-top: 3rem !important;
          margin-bottom: 1.5rem !important;
          font-size: 1.875rem !important;
          font-weight: 600 !important;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%) !important;
          -webkit-background-clip: text !important;
          -webkit-text-fill-color: transparent !important;
          background-clip: text !important;
          letter-spacing: -0.01em !important;
        }
        
        .prose p {
          margin-bottom: 2rem !important;
          color: #e5e7eb !important;
          font-size: 1.25rem !important;
          line-height: 1.8 !important;
          font-weight: 300 !important;
          letter-spacing: 0.01em !important;
        }
        
        .prose p:first-of-type {
          font-size: 1.5rem !important;
          line-height: 1.7 !important;
          color: #f3f4f6 !important;
          font-weight: 300 !important;
          margin-bottom: 2.5rem !important;
        }
        
        .prose ul,
        .prose ol {
          margin: 2rem 0 !important;
          padding-left: 0 !important;
          list-style: none !important;
        }
        
        .prose li {
          margin-bottom: 1.25rem !important;
          color: #e5e7eb !important;
          font-size: 1.125rem !important;
          line-height: 1.75 !important;
          padding-left: 2rem !important;
          position: relative !important;
          font-weight: 300 !important;
        }
        
        .prose ul > li::before {
          content: '→' !important;
          position: absolute !important;
          left: 0 !important;
          color: #60a5fa !important;
          font-weight: 600 !important;
          font-size: 1.25rem !important;
        }
        
        .prose ol {
          counter-reset: li-counter !important;
        }
        
        .prose ol > li {
          counter-increment: li-counter !important;
        }
        
        .prose ol > li::before {
          content: counter(li-counter) !important;
          position: absolute !important;
          left: 0 !important;
          color: #a78bfa !important;
          font-weight: 700 !important;
          font-size: 1rem !important;
          background: rgba(167, 139, 250, 0.1) !important;
          width: 28px !important;
          height: 28px !important;
          border-radius: 50% !important;
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          top: 2px !important;
        }
        
        .prose strong {
          color: #ffffff !important;
          font-weight: 600 !important;
          background: linear-gradient(to right, #60a5fa, #a78bfa) !important;
          -webkit-background-clip: text !important;
          -webkit-text-fill-color: transparent !important;
          background-clip: text !important;
        }
        
        .prose em {
          color: #f3f4f6 !important;
          font-style: italic !important;
        }
        
        .prose blockquote {
          border-left: 4px solid transparent !important;
          border-image: linear-gradient(to bottom, #60a5fa, #a78bfa) 1 !important;
          padding: 2rem !important;
          padding-left: 2.5rem !important;
          margin: 3rem 0 !important;
          background: linear-gradient(135deg, rgba(96, 165, 250, 0.05) 0%, rgba(167, 139, 250, 0.05) 100%) !important;
          border-radius: 0.75rem !important;
          position: relative !important;
          font-size: 1.25rem !important;
          line-height: 1.75 !important;
          color: #f3f4f6 !important;
          font-style: italic !important;
        }
        
        .prose blockquote::before {
          content: '"' !important;
          position: absolute !important;
          top: -10px !important;
          left: 20px !important;
          font-size: 4rem !important;
          color: rgba(96, 165, 250, 0.3) !important;
          font-family: Georgia, serif !important;
        }
        
        .prose a {
          color: #60a5fa !important;
          text-decoration: none !important;
          border-bottom: 2px solid transparent !important;
          transition: all 0.3s ease !important;
          font-weight: 500 !important;
        }
        
        .prose a:hover {
          border-bottom-color: #60a5fa !important;
          color: #93c5fd !important;
        }
        
        .prose hr {
          margin: 4rem 0 !important;
          border: none !important;
          height: 1px !important;
          background: linear-gradient(to right, transparent, rgba(167, 139, 250, 0.5), transparent) !important;
        }
        
        .prose code {
          background: rgba(96, 165, 250, 0.1) !important;
          color: #93c5fd !important;
          padding: 0.25rem 0.5rem !important;
          border-radius: 0.375rem !important;
          font-size: 0.875rem !important;
          font-family: 'Fira Code', monospace !important;
        }
        
        .prose pre {
          background: #1a1b26 !important;
          padding: 1.5rem !important;
          border-radius: 0.75rem !important;
          overflow-x: auto !important;
          margin: 2rem 0 !important;
          border: 1px solid rgba(96, 165, 250, 0.2) !important;
        }
        
        .prose pre code {
          background: transparent !important;
          padding: 0 !important;
          color: #e5e7eb !important;
        }
        
        /* Add visual interest with pseudo elements */
        .prose h2:first-of-type {
          margin-top: 0 !important;
        }
        
        /* Improve list item hover effects */
        .prose li {
          transition: all 0.3s ease !important;
        }
        
        .prose li:hover {
          padding-left: 2.5rem !important;
          color: #f9fafb !important;
        }
        
        /* Add subtle animations */
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .prose > * {
          animation: fadeInUp 0.6s ease forwards !important;
          animation-delay: 0.1s !important;
        }
        
        /* Responsive typography */
        @media (max-width: 768px) {
          .prose h1 {
            font-size: 2.5rem !important;
          }
          
          .prose h2 {
            font-size: 2rem !important;
          }
          
          .prose h3 {
            font-size: 1.5rem !important;
          }
          
          .prose p {
            font-size: 1.125rem !important;
          }
          
          .prose p:first-of-type {
            font-size: 1.25rem !important;
          }
        }
        
        /* Force all blog content to be visible */
        .blog-content * {
          opacity: 1 !important;
          visibility: visible !important;
        }
        
        /* Interactive Elements CSS */
        .animated-intro {
          animation: fadeInUp 1s ease;
          margin-bottom: 3rem;
        }
        
        .lead-text {
          font-size: 1.5rem !important;
          line-height: 1.8 !important;
          color: #f3f4f6 !important;
          font-weight: 300 !important;
        }
        
        .highlight-green {
          color: #10b981 !important;
          font-weight: 700 !important;
          background: linear-gradient(120deg, rgba(16, 185, 129, 0.1) 0%, rgba(16, 185, 129, 0.2) 100%) !important;
          padding: 0.125rem 0.5rem !important;
          border-radius: 0.25rem !important;
        }
        
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 2rem;
          margin: 3rem 0;
        }
        
        .stat-card {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 1rem;
          padding: 2rem;
          text-align: center;
          transition: all 0.3s ease;
        }
        
        .stat-card:hover {
          transform: translateY(-5px);
        }
        
        .blue-glow {
          box-shadow: 0 0 30px rgba(59, 130, 246, 0.3);
        }
        
        .purple-glow {
          box-shadow: 0 0 30px rgba(147, 51, 234, 0.3);
        }
        
        .pink-glow {
          box-shadow: 0 0 30px rgba(236, 72, 153, 0.3);
        }
        
        .stat-number {
          font-size: 3rem;
          font-weight: 800;
          background: linear-gradient(135deg, #60a5fa 0%, #a78bfa 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin-bottom: 0.5rem;
        }
        
        .stat-label {
          color: #9ca3af;
          font-size: 1.125rem;
        }
        
        .interactive-box {
          background: linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(147, 51, 234, 0.1) 100%);
          border: 1px solid rgba(59, 130, 246, 0.3);
          border-radius: 1rem;
          padding: 2rem;
          margin: 2rem 0;
        }
        
        .conversion-chart {
          display: flex;
          align-items: flex-end;
          justify-content: space-around;
          height: 200px;
          margin-top: 2rem;
        }
        
        .chart-bar {
          width: 30%;
          background: linear-gradient(to top, rgba(59, 130, 246, 0.3), rgba(147, 51, 234, 0.3));
          border-radius: 0.5rem 0.5rem 0 0;
          position: relative;
          display: flex;
          align-items: flex-end;
          justify-content: center;
          padding-bottom: 1rem;
          transition: all 0.3s ease;
          animation: growUp 1s ease forwards;
        }
        
        @keyframes growUp {
          from {
            height: 0;
          }
        }
        
        .chart-bar.highlighted {
          background: linear-gradient(to top, #3b82f6, #9333ea);
        }
        
        .chart-bar span {
          position: absolute;
          bottom: -2rem;
          font-size: 0.875rem;
          color: #9ca3af;
          text-align: center;
          width: 100%;
        }
        
        .chart-bar .value {
          position: absolute;
          top: -2rem;
          font-weight: 700;
          color: #f3f4f6;
        }
        
        .pro-tip {
          background: linear-gradient(135deg, rgba(34, 197, 94, 0.1) 0%, rgba(16, 185, 129, 0.1) 100%);
          border: 1px solid rgba(34, 197, 94, 0.3);
          border-radius: 1rem;
          padding: 2rem;
          margin: 2rem 0;
        }
        
        .pro-tip h4 {
          color: #10b981 !important;
          margin-bottom: 1rem !important;
        }
        
        .timeline {
          position: relative;
          padding: 2rem 0;
        }
        
        .timeline::before {
          content: '';
          position: absolute;
          left: 2rem;
          top: 0;
          bottom: 0;
          width: 2px;
          background: linear-gradient(to bottom, #3b82f6, #9333ea);
        }
        
        .timeline-item {
          display: flex;
          margin-bottom: 2rem;
          position: relative;
          animation: slideInLeft 0.6s ease forwards;
        }
        
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .timeline-marker {
          background: linear-gradient(135deg, #3b82f6 0%, #9333ea 100%);
          color: white;
          padding: 0.5rem 1rem;
          border-radius: 2rem;
          font-weight: 700;
          min-width: 100px;
          text-align: center;
          z-index: 1;
        }
        
        .timeline-content {
          margin-left: 2rem;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 0.75rem;
          padding: 1.5rem;
          flex: 1;
        }
        
        .product-stack {
          display: grid;
          gap: 1rem;
          margin: 2rem 0;
        }
        
        .stack-item {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 0.75rem;
          padding: 1.5rem;
          transition: all 0.3s ease;
        }
        
        .stack-item.free {
          border-color: rgba(156, 163, 175, 0.3);
        }
        
        .stack-item.low {
          border-color: rgba(34, 197, 94, 0.3);
        }
        
        .stack-item.mid {
          border-color: rgba(59, 130, 246, 0.3);
        }
        
        .stack-item.high {
          border-color: rgba(147, 51, 234, 0.3);
          background: linear-gradient(135deg, rgba(147, 51, 234, 0.05) 0%, rgba(236, 72, 153, 0.05) 100%);
        }
        
        .stack-item:hover {
          transform: translateX(10px);
        }
        
        .automation-flow {
          background: rgba(59, 130, 246, 0.05);
          border-radius: 1rem;
          padding: 2rem;
          margin: 2rem 0;
        }
        
        .flow-diagram {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: 2rem;
          flex-wrap: wrap;
        }
        
        .flow-step {
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 0.5rem;
          padding: 1rem 1.5rem;
          font-weight: 600;
          transition: all 0.3s ease;
        }
        
        .flow-step.highlighted {
          background: linear-gradient(135deg, #10b981 0%, #059669 100%);
          border-color: #10b981;
          color: white;
          transform: scale(1.1);
          animation: pulse 2s infinite;
        }
        
        @keyframes pulse {
          0%, 100% {
            transform: scale(1.1);
          }
          50% {
            transform: scale(1.15);
          }
        }
        
        .flow-arrow {
          color: #60a5fa;
          font-size: 2rem;
          margin: 0 1rem;
        }
        
        .automation-list {
          list-style: none;
          padding: 0;
        }
        
        .automation-list li {
          display: flex;
          align-items: flex-start;
          margin-bottom: 1.5rem;
          padding: 1.5rem;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 0.75rem;
          transition: all 0.3s ease;
        }
        
        .automation-list li:hover {
          transform: translateX(10px);
          border-color: rgba(59, 130, 246, 0.5);
        }
        
        .automation-list .icon {
          font-size: 2rem;
          margin-right: 1.5rem;
        }
        
        .case-study {
          background: linear-gradient(135deg, rgba(236, 72, 153, 0.1) 0%, rgba(251, 113, 133, 0.1) 100%);
          border: 1px solid rgba(236, 72, 153, 0.3);
          border-radius: 1rem;
          padding: 2rem;
          margin: 2rem 0;
        }
        
        .metrics-dashboard {
          background: rgba(0, 0, 0, 0.3);
          border-radius: 1rem;
          padding: 2rem;
          margin: 2rem 0;
        }
        
        .metric-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: 1.5rem;
          margin-top: 1.5rem;
        }
        
        .metric-card {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 0.75rem;
          padding: 1.5rem;
          text-align: center;
          transition: all 0.3s ease;
        }
        
        .metric-card:hover {
          transform: translateY(-5px);
          border-color: rgba(59, 130, 246, 0.5);
        }
        
        .metric-label {
          color: #9ca3af;
          font-size: 0.875rem;
          margin-bottom: 0.5rem;
        }
        
        .metric-value {
          font-size: 2rem;
          font-weight: 800;
          color: #f3f4f6;
          margin-bottom: 0.5rem;
        }
        
        .metric-change {
          font-size: 0.875rem;
          font-weight: 600;
        }
        
        .metric-change.positive {
          color: #10b981;
        }
        
        .metric-change.negative {
          color: #ef4444;
        }
        
        .checklist {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 0.75rem;
          padding: 1.5rem;
          margin: 2rem 0;
        }
        
        .checklist label {
          display: block;
          margin-bottom: 1rem;
          cursor: pointer;
          transition: all 0.3s ease;
          color: #e5e7eb;
        }
        
        .checklist label:hover {
          padding-left: 1rem;
          color: #60a5fa;
        }
        
        .checklist input[type="checkbox"] {
          margin-right: 1rem;
          width: 1.25rem;
          height: 1.25rem;
          cursor: pointer;
          accent-color: #60a5fa;
        }
        
        .scaling-pyramid {
          margin: 2rem 0;
        }
        
        .pyramid {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0;
        }
        
        .pyramid-level {
          text-align: center;
          padding: 1.5rem;
          position: relative;
          margin-bottom: -1px;
          transition: all 0.3s ease;
        }
        
        .pyramid-level:hover {
          transform: scale(1.05);
          z-index: 1;
        }
        
        .pyramid-level.level-1 {
          width: 100%;
          background: rgba(59, 130, 246, 0.1);
          border: 1px solid rgba(59, 130, 246, 0.3);
          border-radius: 0 0 0.75rem 0.75rem;
        }
        
        .pyramid-level.level-2 {
          width: 75%;
          background: rgba(147, 51, 234, 0.1);
          border: 1px solid rgba(147, 51, 234, 0.3);
        }
        
        .pyramid-level.level-3 {
          width: 50%;
          background: rgba(236, 72, 153, 0.1);
          border: 1px solid rgba(236, 72, 153, 0.3);
        }
        
        .pyramid-level.level-4 {
          width: 25%;
          background: linear-gradient(135deg, #10b981 0%, #059669 100%);
          border: 1px solid #10b981;
          border-radius: 0.75rem 0.75rem 0 0;
          color: white;
        }
        
        .pyramid-level h4 {
          margin-bottom: 0.5rem !important;
          font-weight: 700 !important;
        }
        
        .roadmap {
          display: grid;
          gap: 2rem;
          margin: 2rem 0;
        }
        
        .roadmap-phase {
          background: rgba(255, 255, 255, 0.02);
          border-left: 4px solid transparent;
          border-image: linear-gradient(to bottom, #3b82f6, #9333ea) 1;
          padding: 1.5rem;
          border-radius: 0 0.75rem 0.75rem 0;
          transition: all 0.3s ease;
        }
        
        .roadmap-phase:hover {
          transform: translateX(10px);
          background: rgba(255, 255, 255, 0.05);
        }
        
        .roadmap-phase h4 {
          color: #60a5fa !important;
          margin-bottom: 1rem !important;
        }
        
        .final-cta {
          background: linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(147, 51, 234, 0.1) 100%);
          border: 2px solid transparent;
          border-image: linear-gradient(135deg, #3b82f6 0%, #9333ea 100%) 1;
          border-radius: 1rem;
          padding: 3rem;
          margin: 3rem 0;
          text-align: center;
        }
        
        .action-steps {
          background: rgba(0, 0, 0, 0.3);
          border-radius: 0.75rem;
          padding: 2rem;
          margin-top: 2rem;
        }
        
        .action-steps ol {
          text-align: left;
          max-width: 500px;
          margin: 0 auto;
        }
        
        @media (max-width: 768px) {
          .flow-diagram {
            flex-direction: column;
            gap: 1rem;
          }
          
          .flow-arrow {
            transform: rotate(90deg);
          }
          
          .stats-grid,
          .metric-grid {
            grid-template-columns: 1fr;
          }
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