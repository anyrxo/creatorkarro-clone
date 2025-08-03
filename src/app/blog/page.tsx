'use client'

import React, { useState, useMemo } from 'react'
import Link from 'next/link'
import { Search, Calendar, Clock, Tag, Filter, ArrowRight, TrendingUp } from 'lucide-react'
import { allBlogPosts, categories, allTags, featuredPosts, type BlogPost } from '@/data/blog-posts'

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredPosts = useMemo(() => {
    return allBlogPosts.filter(post => {
      const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           post.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory
      return matchesSearch && matchesCategory
    })
  }, [searchTerm, selectedCategory])

  const displayCategories = ['All', ...categories]

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
            <div className="flex items-center justify-center gap-4 mt-6 text-gray-400">
              <span>{allBlogPosts.length} Articles</span>
              <span>•</span>
              <span>{categories.length} Categories</span>
              <span>•</span>
              <span>{featuredPosts.length} Featured</span>
            </div>
          </div>

          {/* Search and Filter */}
          <div className="flex flex-col md:flex-row gap-6 mb-12">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles, topics, or tags..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
              />
            </div>
            
            <div className="flex flex-wrap gap-2">
              {displayCategories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full transition-all text-sm font-medium ${
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
          {searchTerm === '' && selectedCategory === 'All' && featuredPosts.length > 0 && (
            <div className="mb-16">
              <div className="flex items-center gap-2 mb-8">
                <TrendingUp className="w-6 h-6 text-yellow-400" />
                <h2 className="text-2xl font-bold text-white">Featured Articles</h2>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {featuredPosts.map((post) => (
                  <Link key={post.slug} href={`/blog/${post.slug}`}>
                    <article className="group bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-blue-500/50 transition-all cursor-pointer">
                      <div className="flex items-center gap-2 mb-4">
                        <span className="bg-blue-600/20 text-blue-300 px-3 py-1 rounded-full text-sm font-medium">
                          {post.category}
                        </span>
                        <span className="bg-yellow-600/20 text-yellow-300 px-3 py-1 rounded-full text-sm font-medium">
                          Featured
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-gray-300 mb-4 leading-relaxed text-sm line-clamp-3">
                        {post.description}
                      </p>
                      <div className="flex items-center justify-between text-sm text-gray-400">
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            <span>{post.readTime} min</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            <span>{post.date}</span>
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-blue-400 group-hover:text-blue-300 transition-colors" />
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
                <button 
                  onClick={() => {
                    setSearchTerm('')
                    setSelectedCategory('All')
                  }}
                  className="mt-4 text-blue-400 hover:text-blue-300 transition-colors"
                >
                  Clear filters
                </button>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredPosts
                  .filter(post => !(searchTerm === '' && selectedCategory === 'All' && post.featured))
                  .map((post) => (
                  <Link key={post.slug} href={`/blog/${post.slug}`}>
                    <article className="group bg-gray-800/30 rounded-lg p-6 border border-gray-700 hover:border-gray-600 transition-all cursor-pointer hover:bg-gray-800/50">
                      <div className="flex items-center gap-2 mb-3">
                        <Tag className="w-4 h-4 text-gray-400" />
                        <span className="text-sm text-blue-300 font-medium">{post.category}</span>
                      </div>
                      <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-blue-300 transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                        {post.description}
                      </p>
                      <div className="flex items-center justify-between text-xs text-gray-400">
                        <div className="flex items-center gap-3">
                          <div className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            <span>{post.readTime} min</span>
                          </div>
                          <span>{post.date}</span>
                        </div>
                        <ArrowRight className="w-3 h-3 text-blue-400 group-hover:text-blue-300 transition-colors" />
                      </div>
                      
                      {/* Tags */}
                      {post.tags.length > 0 && (
                        <div className="flex flex-wrap gap-1 mt-3">
                          {post.tags.slice(0, 3).map((tag, index) => (
                            <span key={index} className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded">
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
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