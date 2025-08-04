'use client'

import React, { useState, useMemo } from 'react'
import Link from 'next/link'
import { Search, Calendar, Clock, Tag, Filter, ArrowRight, TrendingUp, Eye, Heart, MessageCircle, Share2, ChevronRight } from 'lucide-react'
import { allBlogPosts, categories, allTags, featuredPosts, type BlogPost } from '@/data/blog-posts'
import { calculateBlogMetrics } from '@/utils/blogMetrics'
import { TiltCard, SpotlightCard } from '@/components/HoverEffects'
import AnimatedText, { GradientText } from '@/components/AnimatedText'
import ScrollAnimation, { StaggeredAnimation, CountUp } from '@/components/ScrollAnimation'
import AnimatedGradientText from '@/components/magicui/animated-gradient-text'
import NumberTicker from '@/components/magicui/number-ticker'
import WordRotate from '@/components/magicui/word-rotate'
import BlurIn from '@/components/magicui/blur-in'

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredPosts = useMemo(() => {
    let posts = allBlogPosts

    // Apply category filter
    if (selectedCategory !== 'All') {
      posts = posts.filter(post => post.category === selectedCategory)
    }

    // Apply search filter
    if (searchTerm.trim()) {
      posts = posts.filter(post => {
        const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                             post.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                             post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
        return matchesSearch
      })
    }

    // Note: When showing "All", we show all posts including featured ones
    // The featured section is shown separately above, but users expect to see ALL posts in the main list

    return posts
  }, [searchTerm, selectedCategory])

  const displayCategories = ['All', ...categories]

  return (
    <div className="min-h-screen bg-dark">
      {/* Header with Beautiful Animations */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="container mx-auto max-w-6xl relative">
          <div className="text-center mb-12">
            <ScrollAnimation animation="fade-up" delay={200}>
              <BlurIn 
                word="Creator Knowledge Hub"
                className="text-5xl md:text-7xl lg:text-8xl font-black bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-4 tracking-tight"
                duration={1000}
              />
              <div className="text-lg md:text-xl text-zinc-400 font-medium tracking-wide mb-8">
                INSIGHTS • STRATEGIES • TUTORIALS
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation animation="fade-up" delay={400}>
              <AnimatedText
                animation="reveal"
                className="text-xl text-zinc-200 max-w-3xl mx-auto mb-6 leading-relaxed"
                stagger={50}
              >
                Insights, strategies, and tutorials to help you build a thriving creator business with AI automation, digital products, and proven growth tactics.
              </AnimatedText>
            </ScrollAnimation>

            <ScrollAnimation animation="fade-up" delay={600}>
              <div className="flex items-center justify-center gap-6 mt-8 text-zinc-300">
                <div className="flex items-center gap-2">
                  <NumberTicker value={allBlogPosts.length} className="text-2xl font-bold text-blue-400" />
                  <span className="font-medium">Articles</span>
                </div>
                <span className="text-zinc-500">•</span>
                <div className="flex items-center gap-2">
                  <NumberTicker value={categories.length} className="text-2xl font-bold text-purple-400" />
                  <span className="font-medium">Categories</span>
                </div>
                <span className="text-zinc-500">•</span>
                <div className="flex items-center gap-2">
                  <NumberTicker value={featuredPosts.length} className="text-2xl font-bold text-pink-400" />
                  <span className="font-medium">Featured</span>
                </div>
              </div>
            </ScrollAnimation>
          </div>

          {/* Category Filters */}
          <ScrollAnimation animation="fade-up" delay={800}>
            <div className="flex flex-wrap gap-3 justify-center mb-8">
              {displayCategories.map((category, index) => (
                <ScrollAnimation 
                  key={category} 
                  animation="fade-up" 
                  delay={900 + index * 50}
                  className="inline-block"
                >
                  <button
                    onClick={() => setSelectedCategory(category)}
                    className={`px-6 py-3 rounded-xl transition-all duration-300 text-sm font-medium border transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-500/50 ${
                      selectedCategory === category
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white border-blue-500/50 shadow-lg shadow-blue-500/25'
                        : 'bg-zinc-800/60 text-zinc-200 hover:bg-zinc-700/60 border-zinc-600/50 hover:border-zinc-500/50 backdrop-blur-sm hover:text-white'
                    }`}
                    aria-label={`Filter articles by ${category} category`}
                    aria-pressed={selectedCategory === category}
                  >
                    {category}
                  </button>
                </ScrollAnimation>
              ))}
            </div>
          </ScrollAnimation>

          {/* Search Box with Gradient Flow Effect - Positioned Below Filters */}
          <ScrollAnimation animation="fade-up" delay={1000}>
            <div className="w-full flex justify-center mb-12">
              <div className="relative w-full max-w-2xl">
                <div className="relative group">
                  {/* Gradient background that shows on focus */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl opacity-0 group-focus-within:opacity-100 transition-opacity duration-500 blur-sm z-0 pointer-events-none"></div>
                  
                  {/* Search input container */}
                  <div className="relative bg-zinc-900/90 backdrop-blur-sm rounded-xl border border-zinc-700/50 group-focus-within:border-transparent transition-all duration-300 z-10">
                    <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 text-zinc-400 group-focus-within:text-blue-400 w-6 h-6 z-20 transition-colors duration-300 pointer-events-none" />
                    <input
                      type="text"
                      placeholder="Search articles, topics, or tags..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="relative w-full pl-16 pr-14 py-5 bg-transparent text-white placeholder-zinc-400 focus:outline-none text-lg rounded-xl z-30"
                      aria-label="Search blog articles by title, description, or tags"
                    />
                    {searchTerm && (
                      <button
                        onClick={() => setSearchTerm('')}
                        className="absolute right-5 top-1/2 transform -translate-y-1/2 text-zinc-400 hover:text-white transition-colors duration-200 text-xl font-light w-8 h-8 flex items-center justify-center rounded-full hover:bg-zinc-700/50 z-20 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                        aria-label="Clear search"
                      >
                        ×
                      </button>
                    )}
                  </div>
                  
                  {/* Animated gradient border */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl opacity-0 group-focus-within:opacity-20 transition-opacity duration-500 z-0 pointer-events-none"></div>
                </div>
              </div>
            </div>
          </ScrollAnimation>

          {/* Featured Posts with Beautiful TiltCard Animation - Only show when no search/filter */}
          {searchTerm === '' && selectedCategory === 'All' && featuredPosts.length > 0 && (
            <ScrollAnimation animation="fade-up" delay={1200}>
              <div className="mb-16">
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-2 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
                    Featured Articles
                  </h2>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {featuredPosts.map((post, index) => (
                    <ScrollAnimation key={post.slug} animation="fade-up" delay={1000 + index * 150}>
                      <TiltCard className="h-full">
                      <Link href={`/blog/${post.slug}`}>
                        <SpotlightCard 
                          className="h-full bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 cursor-pointer transition-all duration-300 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/10"
                          spotlightColor="rgba(59, 130, 246, 0.3)"
                        >
                          <div className="h-full flex flex-col">
                            {/* Badge Section */}
                            <div className="flex items-center gap-2 mb-4">
                              <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-2 py-1 rounded-full text-xs font-medium shadow-lg">
                                {post.category}
                              </span>
                              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-2 py-1 rounded-full text-xs font-medium shadow-lg animate-pulse flex items-center gap-1">
                                <span className="text-xs"></span>
                                <span className="hidden sm:inline">Featured</span>
                                <span className="sm:hidden"></span>
                              </span>
                            </div>

                            {/* Title */}
                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors line-clamp-2 leading-tight">
                              {post.title}
                            </h3>

                            {/* Description */}
                            <p className="text-zinc-200 mb-4 leading-relaxed text-sm line-clamp-3 flex-grow">
                              {post.description}
                            </p>

                            {/* Meta Info */}
                            <div className="flex items-center justify-between text-sm text-zinc-300 mb-4">
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
                              <div className="flex items-center gap-1 text-blue-400 group-hover:text-blue-300 transition-colors">
                                <span className="text-xs font-medium">Read</span>
                                <ChevronRight className="w-4 h-4" />
                              </div>
                            </div>

                            {/* Engagement Metrics */}
                            <div className="flex items-center justify-between pt-3 border-t border-gray-700/50">
                              {(() => {
                                const metrics = calculateBlogMetrics(post.date, post.slug)
                                return (
                                  <div className="flex items-center gap-4 text-xs text-zinc-300">
                                    <div className="flex items-center gap-1 hover:text-blue-400 transition-colors cursor-pointer">
                                      <Eye className="w-3 h-3" />
                                      <span>{metrics.views}</span>
                                    </div>
                                    <div className="flex items-center gap-1 hover:text-red-400 transition-colors cursor-pointer">
                                      <Heart className="w-3 h-3" />
                                      <span>{metrics.likes}</span>
                                    </div>
                                    <div className="flex items-center gap-1 hover:text-green-400 transition-colors cursor-pointer">
                                      <MessageCircle className="w-3 h-3" />
                                      <span>{metrics.comments}</span>
                                    </div>
                                    <div className="flex items-center gap-1 hover:text-purple-400 transition-colors cursor-pointer">
                                      <Share2 className="w-3 h-3" />
                                      <span>{metrics.shares}</span>
                                    </div>
                                  </div>
                                )
                              })()}
                            </div>
                          </div>
                        </SpotlightCard>
                      </Link>
                    </TiltCard>
                    </ScrollAnimation>
                  ))}
                </div>
              </div>
            </ScrollAnimation>
          )}

          {/* All Posts with Beautiful Grid Layout */}
          <ScrollAnimation animation="fade-up" delay={1400}>
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-8">
                <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  {searchTerm ? 'Search Results' : selectedCategory !== 'All' ? `${selectedCategory} Articles` : (searchTerm === '' ? 'Latest Articles' : 'All Articles')}
                </h2>
                <div className="px-3 py-1 bg-gray-800/50 rounded-full border border-gray-700">
                  <NumberTicker value={filteredPosts.length} className="text-sm font-medium text-blue-300" />
                </div>
              </div>
              
              {filteredPosts.length === 0 ? (
                <div className="text-center py-16">
                  <div className="max-w-md mx-auto">
                    <div className="w-16 h-16 mx-auto mb-4 bg-zinc-800 rounded-full flex items-center justify-center">
                      <Search className="w-8 h-8 text-zinc-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-zinc-200 mb-2">No articles found</h3>
                    <p className="text-zinc-300 mb-6">Try adjusting your search terms or filters</p>
                    <button
                      onClick={() => {
                        setSearchTerm('')
                        setSelectedCategory('All')
                      }}
                      className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:from-blue-500 hover:to-purple-500 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-500/50"
                    >
                      Clear filters
                    </button>
                  </div>
                </div>
              ) : (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredPosts.map((post, index) => (
                    <ScrollAnimation key={post.slug} animation="fade-up" delay={1400 + index * 100}>
                      <TiltCard className="h-full">
                        <Link href={`/blog/${post.slug}`}>
                          <SpotlightCard 
                            className="h-full bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 cursor-pointer transition-all duration-300 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/10 group relative overflow-hidden"
                            spotlightColor="rgba(59, 130, 246, 0.2)"
                          >
                            <div className="h-full flex flex-col relative z-10">
                              {/* Category Badge */}
                              <div className="flex items-center justify-between mb-4">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 backdrop-blur-sm">
                                  <Tag className="w-3 h-3 text-blue-400" />
                                  <span className="text-xs text-blue-300 font-semibold uppercase tracking-wide">{post.category}</span>
                                </div>
                                {post.featured && (
                                  <div className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-gradient-to-r from-yellow-400/20 to-orange-500/20 border border-yellow-500/30 backdrop-blur-sm">
                                    <TrendingUp className="w-3 h-3 text-yellow-400 flex-shrink-0" />
                                    <span className="text-xs text-yellow-300 font-semibold hidden sm:inline">FEATURED</span>
                                    <span className="text-xs text-yellow-300 sm:hidden"></span>
                                  </div>
                                )}
                              </div>

                              {/* Title */}
                              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors line-clamp-2 leading-tight">
                                {post.title}
                              </h3>

                              {/* Description */}
                              <p className="text-zinc-200 text-sm mb-6 line-clamp-3 leading-relaxed flex-grow">
                                {post.description}
                              </p>

                              {/* Meta Info */}
                              <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center gap-3 text-xs text-zinc-300">
                                  <div className="flex items-center gap-1">
                                    <Calendar className="w-3 h-3" />
                                    <span>{post.date}</span>
                                  </div>
                                  <div className="flex items-center gap-1">
                                    <Clock className="w-3 h-3" />
                                    <span>{post.readTime} min</span>
                                  </div>
                                </div>
                                <div className="flex items-center gap-1 text-blue-400 group-hover:text-blue-300 transition-colors">
                                  <span className="text-xs font-medium">Read</span>
                                  <ChevronRight className="w-3 h-3 transform group-hover:translate-x-1 transition-transform" />
                                </div>
                              </div>

                              {/* Engagement Metrics */}
                              <div className="flex items-center justify-between pt-3 border-t border-gray-700/50">
                                {(() => {
                                  const metrics = calculateBlogMetrics(post.date, post.slug)
                                  return (
                                    <>
                                      <div className="flex items-center gap-4 text-xs text-zinc-300">
                                        <div className="flex items-center gap-1 hover:text-blue-400 transition-colors cursor-pointer">
                                          <Eye className="w-3 h-3" />
                                          <span>{metrics.views}</span>
                                        </div>
                                        <div className="flex items-center gap-1 hover:text-red-400 transition-colors cursor-pointer">
                                          <Heart className="w-3 h-3" />
                                          <span>{metrics.likes}</span>
                                        </div>
                                        <div className="flex items-center gap-1 hover:text-green-400 transition-colors cursor-pointer">
                                          <MessageCircle className="w-3 h-3" />
                                          <span>{metrics.comments}</span>
                                        </div>
                                      </div>
                                      <div className="flex items-center gap-1 text-zinc-300 hover:text-purple-400 transition-colors cursor-pointer">
                                        <Share2 className="w-3 h-3" />
                                        <span className="text-xs">{metrics.shares}</span>
                                      </div>
                                    </>
                                  )
                                })()}
                              </div>
                              
                              {/* Tags */}
                              {post.tags.length > 0 && (
                                <div className="flex flex-wrap gap-2 pt-3 mt-3 border-t border-zinc-700/30">
                                  {post.tags.slice(0, 3).map((tag, tagIndex) => (
                                    <span key={tagIndex} className="text-xs bg-zinc-700/30 text-zinc-200 px-2 py-1 rounded-md hover:bg-zinc-600/30 transition-colors border border-zinc-600/30">
                                      #{tag}
                                    </span>
                                  ))}
                                  {post.tags.length > 3 && (
                                    <span className="text-xs text-zinc-400">+{post.tags.length - 3} more</span>
                                  )}
                                </div>
                              )}
                            </div>

                            {/* Gradient Overlay Effect */}
                            <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-blue-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                          </SpotlightCard>
                        </Link>
                      </TiltCard>
                    </ScrollAnimation>
                  ))}
                </div>
              )}
            </div>
          </ScrollAnimation>

          {/* Beautiful CTA Section */}
          <ScrollAnimation animation="fade-up" delay={1600}>
            <SpotlightCard 
              className="bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-pink-600/20 backdrop-blur-sm border border-blue-600/30 rounded-2xl p-8 text-center mt-16 relative overflow-hidden"
              spotlightColor="rgba(59, 130, 246, 0.4)"
            >
              <div className="relative z-10">
                <AnimatedText
                  animation="fade"
                  className="text-3xl md:text-4xl font-bold text-white mb-4"
                  delay={100}
                >
                  Want More Creator Insights?
                </AnimatedText>
                
                <AnimatedText
                  animation="reveal"
                  className="text-zinc-200 mb-8 max-w-2xl mx-auto text-lg leading-relaxed"
                  stagger={30}
                  delay={300}
                >
                  Join our community of 4,000+ students getting exclusive strategies, tools, and behind-the-scenes insights for building profitable creator businesses.
                </AnimatedText>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <ScrollAnimation animation="fade-up" delay={500}>
                    <Link href="/instagram-ignited" className="focus:outline-none focus:ring-4 focus:ring-blue-500/50 rounded-xl">
                      <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:from-blue-500 hover:to-purple-500 transition-all duration-300 transform hover:scale-105 focus:outline-none">
                        Start Learning Today
                      </button>
                    </Link>
                  </ScrollAnimation>
                  
                  <ScrollAnimation animation="fade-up" delay={600}>
                    <Link href="/digital-products" className="focus:outline-none focus:ring-4 focus:ring-blue-500/50 rounded-xl">
                      <TiltCard>
                        <button className="border border-blue-500/50 bg-zinc-800/50 backdrop-blur-sm text-blue-300 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-600/10 hover:border-blue-400 transition-all duration-300 focus:outline-none">
                          Browse Products
                        </button>
                      </TiltCard>
                    </Link>
                  </ScrollAnimation>
                </div>
              </div>
              
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-4 left-4 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                <div className="absolute top-8 right-8 w-3 h-3 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                <div className="absolute bottom-4 left-8 w-2 h-2 bg-pink-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute bottom-8 right-4 w-3 h-3 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
              </div>
            </SpotlightCard>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  )
}