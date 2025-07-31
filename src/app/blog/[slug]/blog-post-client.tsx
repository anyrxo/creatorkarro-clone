'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'

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

  return (
    <div className="min-h-screen bg-dark">
      {/* Header */}
      <section className="section-spacing">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            ref={headerAnimation.elementRef}
            className={`max-w-4xl mx-auto text-center scroll-fade-up ${headerAnimation.isVisible ? 'visible' : ''}`}
          >
            <Link href="/blog" className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-8">
              ← Back to Blog
            </Link>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">{post.title}</h1>
            
            <div className="flex items-center justify-center space-x-4 text-gray-400 mb-8">
              <span>{post.date}</span>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
            
            <div className="aspect-video relative rounded-2xl overflow-hidden">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-spacing">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            ref={contentAnimation.elementRef}
            className={`max-w-4xl mx-auto prose prose-invert prose-lg scroll-fade-up ${contentAnimation.isVisible ? 'visible' : ''}`}
          >
            <div 
              dangerouslySetInnerHTML={{ __html: post.content }} 
              className="text-gray-300 leading-relaxed"
            />
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="section-spacing bg-zinc-900/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            ref={newsletterAnimation.elementRef}
            className={`max-w-2xl mx-auto text-center scroll-fade-up ${newsletterAnimation.isVisible ? 'visible' : ''}`}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Want more content like this?</h2>
            <p className="text-xl text-gray-400 mb-8">Join thousands getting actionable insights delivered weekly</p>
            <Link href="/blog" className="cta-button inline-block btn-animate animate-glow hover-lift">
              Read More Posts
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}