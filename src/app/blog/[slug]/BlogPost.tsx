'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

interface BlogPost {
  title: string
  image: string
  date: string
  readTime: string
  content: string
}

interface BlogPostProps {
  post: BlogPost
}

export default function BlogPost({ post }: BlogPostProps) {
  const [liked, setLiked] = useState(false)
  const [likeCount, setLikeCount] = useState(247)
  const [shareCount, setShareCount] = useState(34)

  const handleLike = () => {
    if (liked) {
      setLikeCount(prev => prev - 1)
    } else {
      setLikeCount(prev => prev + 1)
    }
    setLiked(!liked)
  }

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href)
    setShareCount(prev => prev + 1)
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
              <span style={{ 
                background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 50%, #ec4899 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                {post.title}
              </span>
            </h1>
            
            <div className="flex items-center justify-center space-x-6 text-gray-400 mb-8">
              <span>{post.date}</span>
              <span>•</span>
              <span>{post.readTime}</span>
              <span>•</span>
              <span>1.2K views</span>
            </div>

            {/* Engagement Buttons */}
            <div className="flex items-center justify-center space-x-6 mb-12">
              <button 
                onClick={handleLike}
                className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all ${
                  liked ? 'bg-red-500/20 text-red-400' : 'bg-zinc-800 text-gray-400 hover:text-red-400'
                }`}
              >
                <svg className="w-5 h-5" fill={liked ? 'currentColor' : 'none'} stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                <span>{likeCount}</span>
              </button>
              
              <button 
                onClick={handleShare}
                className="flex items-center space-x-2 px-4 py-2 rounded-full bg-zinc-800 text-gray-400 hover:text-blue-400 transition-all"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m9.632 4.268C18.114 15.562 18 16.018 18 16.5c0 .482.114.938.316 1.342m0-2.684a3 3 0 110 2.684M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Share ({shareCount})</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Featured Image */}
            <div className="relative aspect-video rounded-2xl overflow-hidden mb-12">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Blog Content with Inline Styles */}
            <article 
              className="prose prose-lg max-w-none"
              style={{
                color: '#ffffff',
                fontSize: '18px',
                lineHeight: '1.8'
              }}
              dangerouslySetInnerHTML={{ 
                __html: post.content
                  .replace(/<p>/g, '<p style="color: #ffffff; margin-bottom: 24px; font-size: 18px; line-height: 1.8;">')
                  .replace(/<h1>/g, '<h1 style="color: #ffffff; font-size: 36px; font-weight: 700; margin: 48px 0 24px 0; background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 50%, #ec4899 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">')
                  .replace(/<h2>/g, '<h2 style="color: #ffffff; font-size: 28px; font-weight: 700; margin: 40px 0 20px 0; background: linear-gradient(135deg, #60a5fa 0%, #a78bfa 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">')
                  .replace(/<h3>/g, '<h3 style="color: #ffffff; font-size: 22px; font-weight: 600; margin: 32px 0 16px 0;">')
                  .replace(/<ul>/g, '<ul style="color: #ffffff; margin: 24px 0; padding-left: 32px;">')
                  .replace(/<ol>/g, '<ol style="color: #ffffff; margin: 24px 0; padding-left: 32px;">')
                  .replace(/<li>/g, '<li style="color: #ffffff; margin-bottom: 12px; line-height: 1.7;">')
                  .replace(/<strong>/g, '<strong style="color: #ffffff; font-weight: 600;">')
                  .replace(/<blockquote>/g, '<blockquote style="color: #ffffff; border-left: 4px solid #3b82f6; padding: 24px; margin: 32px 0; background: rgba(59, 130, 246, 0.1); border-radius: 8px;">')
              }} 
            />
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 mx-auto mb-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
              <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
              </svg>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span style={{ 
                background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 50%, #ec4899 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                Get The Creator Playbook
              </span>
            </h2>
            
            <p className="text-xl text-gray-200 mb-8">
              Join <span className="text-blue-300 font-bold">10,000+</span> creators getting actionable strategies delivered weekly.
            </p>
            
            <a
              href="https://anyro.beehiiv.com/subscribe"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-lg font-bold rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
              </svg>
              Join Free Newsletter
            </a>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              <span style={{ 
                background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 50%, #ec4899 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                More Success Stories
              </span>
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Link href="/blog/instagram-ignited-success-stories" className="group bg-zinc-900 border border-zinc-700 rounded-xl overflow-hidden hover:border-blue-500 transition-all">
                <div className="aspect-video relative bg-gradient-to-br from-blue-500 to-purple-600">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">📈</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-blue-400 transition-colors">
                    Marcus Rivera's 125K Growth Story
                  </h3>
                  <p className="text-gray-400 text-sm">
                    How Marcus went from 800 to 125K followers in 8 months
                  </p>
                </div>
              </Link>
              
              <Link href="/blog/digital-products-success-story" className="group bg-zinc-900 border border-zinc-700 rounded-xl overflow-hidden hover:border-green-500 transition-all">
                <div className="aspect-video relative bg-gradient-to-br from-green-500 to-blue-600">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">💰</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-green-400 transition-colors">
                    From 0 to 500K Followers Blueprint
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Complete Instagram growth strategy and monetization guide
                  </p>
                </div>
              </Link>
              
              <div className="group bg-zinc-900 border border-zinc-700 rounded-xl overflow-hidden opacity-50">
                <div className="aspect-video relative bg-gradient-to-br from-pink-500 to-purple-600">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">🚀</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-2">
                    More Stories Coming Soon
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Subscribe to get notified about new success stories
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}