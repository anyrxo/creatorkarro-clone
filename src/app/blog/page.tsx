'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Search, Clock, Tag, TrendingUp } from 'lucide-react'

interface BlogPost {
  slug: string
  title: string
  description: string
  category: string
  readTime: string
  publishedAt: string
  featured?: boolean
}

const blogPosts: BlogPost[] = [
  {
    slug: 'digital-products-ideas-2025',
    title: '50 Digital Product Ideas That Are Printing Money in 2025',
    description: 'From $9 templates to $10K masterclasses - discover exact products earning creators $50K+/month with zero inventory',
    category: 'Digital Products',
    readTime: '8 min',
    publishedAt: 'Jan 15, 2025',
    featured: true
  },
  {
    slug: 'instagram-growth-2025',
    title: 'Instagram Growth Strategies That Actually Work in 2025',
    description: 'Latest tactics and techniques to grow your Instagram following organically - proven methods used by top creators',
    category: 'Social Media',
    readTime: '6 min',
    publishedAt: 'Jan 20, 2025',
    featured: true
  },
  {
    slug: 'ai-automation-guide',
    title: 'Complete AI Automation Guide for Creators',
    description: 'Step-by-step guide to automate your content creation and business processes using AI tools',
    category: 'AI & Automation',
    readTime: '12 min',
    publishedAt: 'Jan 18, 2025'
  },
  {
    slug: 'passive-income-blueprint',
    title: 'The Complete Passive Income Blueprint for 2025',
    description: 'Build multiple streams of passive income using digital products, courses, and automation',
    category: 'Business',
    readTime: '10 min',
    publishedAt: 'Jan 16, 2025'
  },
  {
    slug: 'cursor-ai-coding',
    title: 'Cursor AI: The Future of Coding is Here',
    description: 'How Cursor AI is revolutionizing software development with intelligent code completion',
    category: 'AI & Tools',
    readTime: '7 min',
    publishedAt: 'Jan 14, 2025'
  },
  {
    slug: 'windsurf-ai-coding',
    title: 'Windsurf vs Cursor: Which AI Coding Tool Wins?',
    description: 'Comprehensive comparison of the top AI-powered coding assistants for developers',
    category: 'AI & Tools',
    readTime: '9 min',
    publishedAt: 'Jan 12, 2025'
  },
  {
    slug: 'instagram-monetization-guide',
    title: 'How to Monetize Instagram: Complete 2025 Guide',
    description: 'Turn your Instagram following into a profitable business with these proven strategies',
    category: 'Social Media',
    readTime: '11 min',
    publishedAt: 'Jan 10, 2025'
  },
  {
    slug: 'youtube-shorts-strategy',
    title: 'YouTube Shorts Strategy That Gets Millions of Views',
    description: 'The exact formula top creators use to create viral YouTube Shorts consistently',
    category: 'Content Creation',
    readTime: '8 min',
    publishedAt: 'Jan 8, 2025'
  }
]

const categories = ['All', 'Digital Products', 'Social Media', 'AI & Automation', 'Business', 'AI & Tools', 'Content Creation']

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const featuredPosts = blogPosts.filter(post => post.featured)
  const regularPosts = filteredPosts.filter(post => !post.featured)

  return (
    <div className="min-h-screen bg-dark">
      {/* Header */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Creator <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Blog</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Insights, strategies, and tutorials to help you build a thriving creator business with AI automation, 
              digital products, and proven growth tactics.
            </p>
          </div>

          {/* Search and Filter */}
          <div className="flex flex-col md:flex-row gap-6 mb-12">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
              />
            </div>
            
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full transition-all ${
                    selectedCategory === category
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Featured Posts */}
          {searchTerm === '' && selectedCategory === 'All' && (
            <div className="mb-16">
              <div className="flex items-center gap-2 mb-8">
                <TrendingUp className="w-6 h-6 text-yellow-400" />
                <h2 className="text-2xl font-bold text-white">Featured Articles</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                {featuredPosts.map((post) => (
                  <Link key={post.slug} href={`/blog/${post.slug}`}>
                    <article className="group bg-gray-800/50 rounded-xl p-8 border border-gray-700 hover:border-blue-500/50 transition-all cursor-pointer">
                      <div className="flex items-center gap-4 mb-4">
                        <span className="bg-blue-600/20 text-blue-300 px-3 py-1 rounded-full text-sm font-medium">
                          {post.category}
                        </span>
                        <span className="bg-yellow-600/20 text-yellow-300 px-3 py-1 rounded-full text-sm font-medium">
                          Featured
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-gray-300 mb-6 leading-relaxed">
                        {post.description}
                      </p>
                      <div className="flex items-center justify-between text-sm text-gray-400">
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            <span>{post.readTime}</span>
                          </div>
                          <span>{post.publishedAt}</span>
                        </div>
                        <span className="text-blue-400 group-hover:text-blue-300 transition-colors">
                          Read Article →
                        </span>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* All Posts */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-white mb-8">
              {searchTerm || selectedCategory !== 'All' ? 'Search Results' : 'Latest Articles'}
              <span className="text-gray-400 ml-2">({filteredPosts.length})</span>
            </h2>
            
            {filteredPosts.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-400 text-lg">No articles found matching your criteria.</p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {(searchTerm === '' && selectedCategory === 'All' ? regularPosts : filteredPosts).map((post) => (
                  <Link key={post.slug} href={`/blog/${post.slug}`}>
                    <article className="group bg-gray-800/30 rounded-lg p-6 border border-gray-700 hover:border-gray-600 transition-all cursor-pointer hover:bg-gray-800/50">
                      <div className="flex items-center gap-2 mb-3">
                        <Tag className="w-4 h-4 text-gray-400" />
                        <span className="text-sm text-blue-300 font-medium">{post.category}</span>
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-300 transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                        {post.description}
                      </p>
                      <div className="flex items-center justify-between text-xs text-gray-400">
                        <div className="flex items-center gap-3">
                          <div className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            <span>{post.readTime}</span>
                          </div>
                          <span>{post.publishedAt}</span>
                        </div>
                        <span className="text-blue-400 group-hover:text-blue-300 transition-colors">
                          Read →
                        </span>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-xl p-8 border border-blue-600/30 text-center mt-16">
            <h3 className="text-2xl font-bold text-white mb-4">Want More Creator Insights?</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join 12,000+ creators getting exclusive strategies, tools, and behind-the-scenes insights 
              delivered straight to their inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/instagram-ignited">
                <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  Start Learning Today
                </button>
              </Link>
              <Link href="/digital-products">
                <button className="border border-blue-600 text-blue-300 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600/10 transition-colors">
                  Browse Products
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
