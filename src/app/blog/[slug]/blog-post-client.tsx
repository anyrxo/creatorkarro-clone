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
}

interface BlogPostClientProps {
  post: BlogPost
}

export default function BlogPostClient({ post }: BlogPostClientProps) {
  // Scroll animations
  const headerAnimation = useScrollAnimation({ threshold: 0.2 })
  const contentAnimation = useScrollAnimation({ threshold: 0.1 })
  const newsletterAnimation = useScrollAnimation({ threshold: 0.1 })
  
  // Reading progress
  const [readingProgress, setReadingProgress] = useState(0)
  
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

  // Copy code function
  const copyCode = (text: string) => {
    navigator.clipboard.writeText(text)
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
            <div className="inline-flex items-center space-x-4 bg-zinc-900/50 backdrop-blur-sm border border-zinc-700 rounded-full px-6 py-2 mb-8">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
              <span className="text-gray-300 text-sm">{post.date}</span>
              <span className="text-gray-500">•</span>
              <span className="text-gray-300 text-sm">{post.readTime}</span>
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
              <div className="prose prose-lg prose-invert prose-blue max-w-none
                             prose-headings:font-bold prose-headings:tracking-tight
                             prose-h2:text-4xl prose-h2:mt-16 prose-h2:mb-8 prose-h2:text-center
                             prose-h3:text-2xl prose-h3:mt-12 prose-h3:mb-6 prose-h3:text-blue-300
                             prose-p:text-gray-300 prose-p:leading-relaxed prose-p:mb-8
                             prose-strong:text-white prose-strong:font-semibold
                             prose-ul:space-y-4 prose-ul:my-8
                             prose-ol:space-y-4 prose-ol:my-8
                             prose-li:text-gray-300 prose-li:leading-relaxed
                             prose-blockquote:border-blue-500 prose-blockquote:bg-zinc-900/50 prose-blockquote:rounded-lg prose-blockquote:my-8
                             prose-code:bg-zinc-800 prose-code:text-blue-300 prose-code:px-1 prose-code:rounded
                             prose-pre:bg-zinc-900 prose-pre:border prose-pre:border-zinc-700"
              >
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
                  Join <span className="text-blue-300 font-bold text-2xl md:text-3xl">10,000+</span> creators getting proven strategies that actually work
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
        /* Force proper spacing and formatting */
        .prose h2 {
          margin-top: 3rem !important;
          margin-bottom: 2rem !important;
          font-size: 2.25rem !important;
          font-weight: 700 !important;
          background: linear-gradient(135deg, #60a5fa, #a78bfa, #f472b6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          line-height: 1.3 !important;
        }
        
        .prose h3 {
          margin-top: 2.5rem !important;
          margin-bottom: 1.5rem !important;
          font-size: 1.875rem !important;
          font-weight: 700 !important;
          color: #93c5fd !important;
          line-height: 1.4 !important;
        }
        
        .prose p {
          margin-bottom: 1.5rem !important;
          color: #d1d5db !important;
          font-size: 1.125rem !important;
          line-height: 1.75 !important;
        }
        
        .prose ul,
        .prose ol {
          margin-top: 1.5rem !important;
          margin-bottom: 1.5rem !important;
          padding-left: 1.5rem !important;
        }
        
        .prose li {
          margin-bottom: 0.5rem !important;
          color: #d1d5db !important;
          font-size: 1.125rem !important;
          line-height: 1.75 !important;
        }
        
        .prose ul li {
          list-style-type: disc !important;
          list-style-position: outside !important;
        }
        
        .prose ol li {
          list-style-type: decimal !important;
          list-style-position: outside !important;
        }
        
        .prose li::marker {
          color: #60a5fa !important;
        }
        
        .prose strong {
          color: #ffffff !important;
          font-weight: 600 !important;
        }
        
        .prose blockquote {
          border-left: 4px solid #3b82f6 !important;
          padding-left: 1.5rem !important;
          margin: 2rem 0 !important;
          background: rgba(31, 41, 55, 0.5) !important;
          padding: 1.5rem !important;
          border-radius: 0 0.5rem 0.5rem 0 !important;
          font-style: italic !important;
          color: #e5e7eb !important;
        }
        
        .prose code {
          background: #1f2937 !important;
          color: #93c5fd !important;
          padding: 0.125rem 0.375rem !important;
          border-radius: 0.25rem !important;
          font-size: 0.875rem !important;
        }
        
        .prose pre {
          background: #111827 !important;
          border: 1px solid #374151 !important;
          border-radius: 0.5rem !important;
          padding: 1.5rem !important;
          margin: 2rem 0 !important;
          overflow-x: auto !important;
        }
        
        .prose pre code {
          background: transparent !important;
          padding: 0 !important;
          color: #e5e7eb !important;
          font-size: 0.875rem !important;
        }
        
        .prose a {
          color: #60a5fa !important;
          text-decoration: underline !important;
          text-underline-offset: 2px !important;
          transition: all 0.2s !important;
        }
        
        .prose a:hover {
          color: #93c5fd !important;
          text-underline-offset: 4px !important;
        }
        
        /* First paragraph styling */
        .prose > p:first-child {
          font-size: 1.25rem !important;
          line-height: 1.8 !important;
          color: #e5e7eb !important;
          margin-bottom: 2rem !important;
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