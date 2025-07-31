'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { useEffect, useState } from 'react'

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
            {/* Article Stats */}
            <div className="max-w-4xl mx-auto mb-16">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-700 rounded-xl p-6 text-center hover-lift">
                  <div className="text-2xl font-bold text-blue-400 mb-2">8 min</div>
                  <div className="text-gray-400 text-sm">Read Time</div>
                </div>
                <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-700 rounded-xl p-6 text-center hover-lift">
                  <div className="text-2xl font-bold text-green-400 mb-2">2.5K</div>
                  <div className="text-gray-400 text-sm">Views</div>
                </div>
                <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-700 rounded-xl p-6 text-center hover-lift">
                  <div className="text-2xl font-bold text-purple-400 mb-2">47</div>
                  <div className="text-gray-400 text-sm">Shares</div>
                </div>
                <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-700 rounded-xl p-6 text-center hover-lift">
                  <div className="text-2xl font-bold text-pink-400 mb-2">92%</div>
                  <div className="text-gray-400 text-sm">Success Rate</div>
                </div>
              </div>
            </div>

            {/* Article Content */}
            <article 
              ref={contentAnimation.elementRef}
              className={`max-w-4xl mx-auto scroll-fade-up ${contentAnimation.isVisible ? 'visible' : ''}`}
            >
              <div className="prose prose-invert prose-lg max-w-none">
                <div 
                  className="article-content"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />
              </div>
            </article>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="section-spacing bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div 
              ref={newsletterAnimation.elementRef}
              className={`bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10 border border-blue-600/30 rounded-3xl p-8 md:p-12 text-center hover-lift scroll-fade-up ${newsletterAnimation.isVisible ? 'visible' : ''}`}
            >
              <div className="max-w-3xl mx-auto">
                {/* Icon */}
                <div className="w-20 h-20 mx-auto mb-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                  </svg>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                    Want More Insights Like This?
                  </span>
                </h2>
                
                <p className="text-xl text-gray-300 mb-8">
                  Join <span className="text-blue-300 font-semibold">10,000+</span> creators getting actionable strategies on 
                  <span className="text-purple-300"> Instagram growth</span>, 
                  <span className="text-green-300"> digital products</span>, and 
                  <span className="text-pink-300"> AI automation</span> delivered weekly.
                </p>
                
                <a
                  href="https://anyro.beehiiv.com/subscribe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover-lift"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                  </svg>
                  Join the Newsletter
                </a>
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
                  Continue Reading
                </span>
              </h2>
              
              <div className="grid md:grid-cols-3 gap-8">
                {/* Related articles would go here */}
                <Link href="/blog" className="group bg-zinc-900/50 backdrop-blur-sm border border-zinc-700 rounded-xl overflow-hidden hover-lift">
                  <div className="aspect-video relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-6xl">📈</div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-400 transition-colors">
                      More Instagram Growth Tips
                    </h3>
                    <p className="text-gray-400 text-sm">
                      Discover advanced strategies for growing your Instagram following
                    </p>
                  </div>
                </Link>
                
                <Link href="/dpa" className="group bg-zinc-900/50 backdrop-blur-sm border border-zinc-700 rounded-xl overflow-hidden hover-lift">
                  <div className="aspect-video relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-blue-500/20" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-6xl">💰</div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-green-400 transition-colors">
                      Digital Products Course
                    </h3>
                    <p className="text-gray-400 text-sm">
                      Learn how to create and sell digital products that convert
                    </p>
                  </div>
                </Link>
                
                <Link href="/ai-influencers" className="group bg-zinc-900/50 backdrop-blur-sm border border-zinc-700 rounded-xl overflow-hidden hover-lift">
                  <div className="aspect-video relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-purple-500/20" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-6xl">🤖</div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-pink-400 transition-colors">
                      AI Influencers Guide
                    </h3>
                    <p className="text-gray-400 text-sm">
                      Build virtual models that generate income 24/7
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>

      <style jsx global>{`
        .article-content h2 {
          @apply text-3xl font-bold mt-12 mb-6 text-white;
          background: linear-gradient(135deg, #60a5fa, #a78bfa);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .article-content h3 {
          @apply text-2xl font-semibold mt-8 mb-4 text-blue-300;
        }
        
        .article-content p {
          @apply text-gray-300 leading-relaxed mb-6 text-lg;
        }
        
        .article-content ul, .article-content ol {
          @apply ml-6 mb-6 space-y-3;
        }
        
        .article-content li {
          @apply text-gray-300 leading-relaxed;
        }
        
        .article-content strong {
          @apply text-white font-semibold;
        }
        
        .article-content blockquote {
          @apply border-l-4 border-blue-500 pl-6 py-4 bg-zinc-900/50 rounded-r-lg my-8 italic text-gray-300;
        }
        
        .article-content code {
          @apply bg-zinc-800 px-2 py-1 rounded text-sm text-blue-300 font-mono;
        }
        
        .article-content pre {
          @apply bg-zinc-900 border border-zinc-700 rounded-lg p-6 overflow-x-auto my-8;
        }
        
        .article-content pre code {
          @apply bg-transparent px-0 py-0 text-gray-300;
        }
        
        .article-content a {
          @apply text-blue-400 hover:text-blue-300 underline transition-colors;
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
      `}</style>
    </>
  )
}