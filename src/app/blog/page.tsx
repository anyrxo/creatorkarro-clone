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
import ShimmerButton from '@/components/magicui/shimmer-button'
import WordRotate from '@/components/magicui/word-rotate'
import BlurIn from '@/components/magicui/blur-in'

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
      {/* Header with Beautiful Animations */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="container mx-auto max-w-6xl relative">
          <div className="text-center mb-12">
            <ScrollAnimation animation="fade-up" delay={200}>
              <BlurIn 
                word="Creator Blog"
                className="text-5xl md:text-6xl font-bold text-white mb-6"
                duration={1000}
              />
            </ScrollAnimation>
            
            <ScrollAnimation animation="fade-up" delay={400}>
              <AnimatedText
                animation="reveal"
                className="text-xl text-gray-300 max-w-3xl mx-auto mb-6"
                stagger={50}
              >
                Insights, strategies, and tutorials to help you build a thriving creator business with AI automation, digital products, and proven growth tactics.
              </AnimatedText>
            </ScrollAnimation>

            <ScrollAnimation animation="fade-up" delay={600}>
              <div className="flex items-center justify-center gap-6 mt-8 text-gray-400">
                <div className="flex items-center gap-2">
                  <NumberTicker value={allBlogPosts.length} className="text-2xl font-bold text-blue-400" />
                  <span>Articles</span>
                </div>
                <span>•</span>
                <div className="flex items-center gap-2">
                  <NumberTicker value={categories.length} className="text-2xl font-bold text-purple-400" />
                  <span>Categories</span>
                </div>
                <span>•</span>
                <div className="flex items-center gap-2">
                  <NumberTicker value={featuredPosts.length} className="text-2xl font-bold text-pink-400" />
                  <span>Featured</span>
                </div>
              </div>
            </ScrollAnimation>
          </div>

          {/* Search and Filter with Beautiful Styling */}
          <ScrollAnimation animation="fade-up" delay={800}>
            <div className="flex flex-col md:flex-row gap-6 mb-12">
              <SpotlightCard className="relative flex-1 bg-gray-800/80 border border-gray-600 rounded-xl overflow-hidden backdrop-blur-sm">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-300 w-5 h-5 z-10" />
                  <input
                    type="text"
                    placeholder="Search articles, topics, or tags..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 bg-transparent text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500/50 rounded-xl relative z-10 text-base"
                  />
                </div>
              </SpotlightCard>
              
              <div className="flex flex-wrap gap-3">
                {displayCategories.map((category, index) => (
                  <ScrollAnimation 
                    key={category} 
                    animation="fade-up" 
                    delay={900 + index * 50}
                    className="inline-block"
                  >
                    <button
                      onClick={() => setSelectedCategory(category)}
                      className={`px-5 py-3 rounded-full transition-all duration-300 text-sm font-medium backdrop-blur-sm border transform hover:scale-105 ${
                        selectedCategory === category
                          ? 'bg-blue-600 text-white border-blue-500 shadow-lg shadow-blue-500/25'
                          : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border-gray-600 hover:border-gray-500'
                      }`}
                    >
                      {category}
                    </button>
                  </ScrollAnimation>
                ))}
              </div>
            </div>
          </ScrollAnimation>

          {/* Featured Posts with Beautiful TiltCard Animation */}
          {searchTerm === '' && selectedCategory === 'All' && featuredPosts.length > 0 && (
            <ScrollAnimation animation="fade-up" delay={1000}>
              <div className="mb-16">
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-2 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <AnimatedGradientText className="text-3xl font-bold">
                    Featured Articles
                  </AnimatedGradientText>
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
                                <span className="text-xs">✨</span>
                                <span className="hidden sm:inline">Featured</span>
                                <span className="sm:hidden">✨</span>
                              </span>
                            </div>

                            {/* Title */}
                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors line-clamp-2 leading-tight">
                              {post.title}
                            </h3>

                            {/* Description */}
                            <p className="text-gray-300 mb-4 leading-relaxed text-sm line-clamp-3 flex-grow">
                              {post.description}
                            </p>

                            {/* Meta Info */}
                            <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
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
                                  <div className="flex items-center gap-4 text-xs text-gray-400">
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
          <ScrollAnimation animation="fade-up" delay={1200}>
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-8">
                <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  {searchTerm || selectedCategory !== 'All' ? 'Search Results' : 'Latest Articles'}
                </h2>
                <div className="px-3 py-1 bg-gray-800/50 rounded-full border border-gray-700">
                  <NumberTicker value={filteredPosts.length} className="text-sm font-medium text-blue-300" />
                </div>
              </div>
              
              {filteredPosts.length === 0 ? (
                <div className="text-center py-16">
                  <div className="max-w-md mx-auto">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gray-800 rounded-full flex items-center justify-center">
                      <Search className="w-8 h-8 text-gray-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-300 mb-2">No articles found</h3>
                    <p className="text-gray-400 mb-6">Try adjusting your search terms or filters</p>
                    <ShimmerButton
                      onClick={() => {
                        setSearchTerm('')
                        setSelectedCategory('All')
                      }}
                      className="bg-blue-600 text-white px-6 py-2 rounded-lg"
                    >
                      Clear filters
                    </ShimmerButton>
                  </div>
                </div>
              ) : (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredPosts
                    .filter(post => !(searchTerm === '' && selectedCategory === 'All' && post.featured))
                    .map((post, index) => (
                    <ScrollAnimation key={post.slug} animation="fade-up" delay={1200 + index * 100}>
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
                                    <span className="text-xs text-yellow-300 sm:hidden">✨</span>
                                  </div>
                                )}
                              </div>

                              {/* Title */}
                              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors line-clamp-2 leading-tight">
                                {post.title}
                              </h3>

                              {/* Description */}
                              <p className="text-gray-300 text-sm mb-6 line-clamp-3 leading-relaxed flex-grow">
                                {post.description}
                              </p>

                              {/* Meta Info */}
                              <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center gap-3 text-xs text-gray-400">
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
                                      <div className="flex items-center gap-4 text-xs text-gray-400">
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
                                      <div className="flex items-center gap-1 text-gray-400 hover:text-purple-400 transition-colors cursor-pointer">
                                        <Share2 className="w-3 h-3" />
                                        <span className="text-xs">{metrics.shares}</span>
                                      </div>
                                    </>
                                  )
                                })()}
                              </div>
                              
                              {/* Tags */}
                              {post.tags.length > 0 && (
                                <div className="flex flex-wrap gap-2 pt-3 mt-3 border-t border-gray-700/30">
                                  {post.tags.slice(0, 3).map((tag, tagIndex) => (
                                    <span key={tagIndex} className="text-xs bg-gray-700/30 text-gray-300 px-2 py-1 rounded-md hover:bg-gray-600/30 transition-colors border border-gray-600/30">
                                      #{tag}
                                    </span>
                                  ))}
                                  {post.tags.length > 3 && (
                                    <span className="text-xs text-gray-500">+{post.tags.length - 3} more</span>
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
          <ScrollAnimation animation="fade-up" delay={1400}>
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
                  className="text-gray-300 mb-8 max-w-2xl mx-auto text-lg leading-relaxed"
                  stagger={30}
                  delay={300}
                >
                  Join 12,000+ creators getting exclusive strategies, tools, and behind-the-scenes insights delivered straight to their inbox.
                </AnimatedText>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <ScrollAnimation animation="fade-up" delay={500}>
                    <Link href="/instagram-ignited">
                      <ShimmerButton className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300">
                        Start Learning Today
                      </ShimmerButton>
                    </Link>
                  </ScrollAnimation>
                  
                  <ScrollAnimation animation="fade-up" delay={600}>
                    <Link href="/digital-products">
                      <TiltCard>
                        <button className="border border-blue-500/50 bg-gray-800/50 backdrop-blur-sm text-blue-300 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-600/10 hover:border-blue-400 transition-all duration-300">
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