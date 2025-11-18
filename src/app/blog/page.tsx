'use client'

import React, { useState, useMemo, useEffect, useRef } from 'react'
import Link from 'next/link'
import { useSearchParams, useRouter } from 'next/navigation'
import { Search, Calendar, Clock, Tag, Filter, ArrowRight, TrendingUp, Eye, Heart, MessageCircle, Share2, ChevronRight } from 'lucide-react'
import { allBlogPosts, categories, tags, featuredPosts, type BlogPost } from '@/data/blog-posts'
import { calculateBlogMetrics } from '@/utils/blogMetrics'
import { TiltCard, SpotlightCard } from '@/components/HoverEffects'
import AnimatedText, { GradientText } from '@/components/AnimatedText'
import ScrollAnimation, { StaggeredAnimation, CountUp } from '@/components/ScrollAnimation'
import AnimatedGradientText from '@/components/magicui/animated-gradient-text'
import NumberTicker from '@/components/magicui/number-ticker'
import WordRotate from '@/components/magicui/word-rotate'
import BlurIn from '@/components/magicui/blur-in'
import ScrambleText from '@/components/magicui/scramble-text'
import HeroBackground from '@/components/HeroBackground'

export default function BlogPage() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const [searchTerm, setSearchTerm] = useState('')
  const searchInputRef = useRef<HTMLInputElement>(null)

  // Get category from URL params or default to 'All'
  const selectedCategory = searchParams.get('category') || 'All'

  // Initialize search from URL on mount ONCE
  useEffect(() => {
    const search = searchParams.get('search')
    if (search) {
      setSearchTerm(search)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // Update category in URL
  const updateCategory = (category: string) => {
    const params = new URLSearchParams(searchParams.toString())

    if (category === 'All') {
      params.delete('category')
    } else {
      params.set('category', category)
    }

    // Preserve search if it exists
    const search = searchParams.get('search')
    if (search) {
      params.set('search', search)
    }

    router.push(`/blog?${params.toString()}`, { scroll: false })
  }

  // Update search in URL with debounce
  useEffect(() => {
    const timer = setTimeout(() => {
      const currentSearch = searchParams.get('search') || ''
      const currentCategory = searchParams.get('category')

      // Only update if search term actually changed
      if (currentSearch === searchTerm.trim()) return

      const params = new URLSearchParams()

      if (searchTerm.trim()) {
        params.set('search', searchTerm)
      }

      // Preserve category if it exists
      if (currentCategory) {
        params.set('category', currentCategory)
      }

      const newUrl = params.toString() ? `/blog?${params.toString()}` : '/blog'
      router.push(newUrl, { scroll: false })
    }, 500) // 500ms debounce

    return () => clearTimeout(timer)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchTerm])

  // Keyboard shortcut for search focus (Cmd+K / Ctrl+K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Cmd+K (Mac) or Ctrl+K (Windows/Linux)
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        searchInputRef.current?.focus()
      }
      // Alternative: / for search (but only when not in input/textarea)
      if (e.key === '/' && !['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement).tagName)) {
        e.preventDefault()
        searchInputRef.current?.focus()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

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

    return posts
  }, [searchTerm, selectedCategory])

  const displayCategories = ['All', ...categories]

  return (
    <div className="min-h-screen bg-dark w-full overflow-x-hidden">
      {/* MAGICAL HEADER */}
      <section className="relative py-20 px-4 overflow-hidden">
        <HeroBackground variant="default" />

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <ScrollAnimation animation="fade-up" delay={200}>
              <div className="relative inline-block">
                {/* Main Title with Magical Effects */}
                <div className="mb-8" style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}>
                  <ScrambleText
                    text="Creator Blog"
                    className="text-7xl md:text-8xl lg:text-9xl font-black text-white tracking-tight drop-shadow-2xl"
                    scrambleSpeed={1}
                    revealSpeed={1}
                  />
                </div>
                
                {/* Magical Glowing Border */}
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 via-purple-600 via-pink-600 to-yellow-600 rounded-2xl opacity-20 blur-xl animate-pulse"></div>
                
                {/* Floating Magic Elements Around Title */}
                <div className="absolute -top-8 -left-8 w-6 h-6 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full animate-spin opacity-80" style={{animationDuration: '8s'}}></div>
                <div className="absolute -top-4 -right-12 w-4 h-4 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-spin opacity-70" style={{animationDuration: '10s', animationDirection: 'reverse'}}></div>
                <div className="absolute -bottom-6 -left-12 w-5 h-5 bg-gradient-to-r from-pink-400 to-red-400 rounded-full animate-spin opacity-75" style={{animationDuration: '12s'}}></div>
                <div className="absolute -bottom-8 -right-8 w-3 h-3 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full animate-spin opacity-90" style={{animationDuration: '6s', animationDirection: 'reverse'}}></div>
              </div>
            </ScrollAnimation>
            
            <ScrollAnimation animation="fade-up" delay={400}>
              <div className="relative">
                <AnimatedText
                  animation="reveal"
                  className="text-2xl md:text-3xl text-white max-w-5xl mx-auto mb-8 leading-relaxed font-medium drop-shadow-lg"
                  stagger={20}
                >
                  Master Creator Entrepreneurship • AI Automation • Growth Strategies • Digital Business Mastery
                </AnimatedText>
                
                {/* Subtitle Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent blur-sm"></div>
              </div>
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
          <ScrollAnimation animation="fade-up" delay={700}>
            <div className="flex flex-wrap gap-3 justify-center mb-8">
              {displayCategories.map((category, index) => (
                <ScrollAnimation 
                  key={category} 
                  animation="fade-up" 
                  delay={900 + index * 50}
                  className="inline-block"
                >
                  <button
                    onClick={() => updateCategory(category)}
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

          {/* Search Box */}
          <ScrollAnimation animation="fade-up" delay={800}>
            <div className="w-full flex justify-center mb-8">
              <div className="relative w-full max-w-2xl">
                <div className="relative bg-zinc-900/60 backdrop-blur-sm rounded-xl border border-zinc-700/50 focus-within:border-blue-500/50 transition-all">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-zinc-400 w-5 h-5 pointer-events-none" />
                  <input
                    ref={searchInputRef}
                    type="text"
                    placeholder="Search articles..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 bg-transparent text-white placeholder-zinc-500 focus:outline-none rounded-xl"
                    aria-label="Search blog articles"
                  />
                  {searchTerm && (
                    <button
                      onClick={() => setSearchTerm('')}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-zinc-400 hover:text-white text-xl w-6 h-6 flex items-center justify-center"
                      aria-label="Clear search"
                    >
                      ×
                    </button>
                  )}
                </div>
              </div>
            </div>
          </ScrollAnimation>

          {/* Featured Posts - Only show when All is selected and no search */}
          {searchTerm === '' && selectedCategory === 'All' && featuredPosts.length > 0 && (
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
                  {featuredPosts.map((post, idx) => {
                    const categoryColors: Record<string, {bg: string, border: string, text: string, gradient: string}> = {
                      'AI Influencers': {bg: 'from-purple-500/30 to-pink-500/30', border: 'border-purple-500/40', text: 'text-purple-300', gradient: 'from-purple-600/10 via-pink-600/10 to-purple-600/10'},
                      'Futures Trading': {bg: 'from-green-500/30 to-emerald-500/30', border: 'border-green-500/40', text: 'text-green-300', gradient: 'from-green-600/10 via-emerald-600/10 to-green-600/10'},
                      'Instagram Growth': {bg: 'from-pink-500/30 to-rose-500/30', border: 'border-pink-500/40', text: 'text-pink-300', gradient: 'from-pink-600/10 via-rose-600/10 to-pink-600/10'},
                      'AI Automation': {bg: 'from-blue-500/30 to-cyan-500/30', border: 'border-blue-500/40', text: 'text-blue-300', gradient: 'from-blue-600/10 via-cyan-600/10 to-blue-600/10'},
                      'N8N': {bg: 'from-orange-500/30 to-yellow-500/30', border: 'border-orange-500/40', text: 'text-orange-300', gradient: 'from-orange-600/10 via-yellow-600/10 to-orange-600/10'},
                    }
                    const colors = categoryColors[post.category] || {bg: 'from-blue-500/30 to-purple-500/30', border: 'border-blue-500/40', text: 'text-blue-300', gradient: 'from-blue-600/10 via-purple-600/10 to-blue-600/10'}

                    return (
                    <ScrollAnimation key={post.slug} animation="fade-up" delay={1000 + idx * 100}>
                      <TiltCard className="h-full">
                      <Link href={`/blog/${post.slug}`} className="block h-full group">
                        <SpotlightCard
                          className="h-full bg-gradient-to-br from-gray-800/70 to-gray-900/70 backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 hover:border-yellow-500/50 hover:shadow-2xl hover:shadow-yellow-500/20 transform hover:-translate-y-1"
                          spotlightColor="rgba(251, 191, 36, 0.4)"
                        >
                          <div className="h-full flex flex-col">
                            {/* Featured Image Section */}
                            <div className={`relative h-40 bg-gradient-to-br ${colors.bg} overflow-hidden`}>
                              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent"></div>

                              {/* Decorative elements */}
                              <div className="absolute inset-0 opacity-20">
                                <div className="absolute top-2 left-2 w-16 h-16 border-2 border-white rounded-full animate-pulse"></div>
                                <div className="absolute bottom-2 right-2 w-24 h-24 border-2 border-white rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                              </div>

                              {/* Badges on Image */}
                              <div className="absolute top-3 left-3 flex flex-wrap gap-2 z-10">
                                <span className={`bg-gradient-to-r ${colors.bg} border ${colors.border} text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg backdrop-blur-md`}>
                                  {post.category}
                                </span>
                                <span className="bg-gradient-to-r from-yellow-400/95 to-orange-500/95 border border-yellow-500/50 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg animate-pulse backdrop-blur-md">
                                  ⭐ FEATURED
                                </span>
                              </div>

                              {/* Reading Time */}
                              <div className="absolute bottom-3 right-3 z-10">
                                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-xs text-white font-medium shadow-lg">
                                  <Clock className="w-3 h-3" />
                                  {post.readTime} min
                                </span>
                              </div>
                            </div>

                            <div className="p-6 flex flex-col flex-grow">
                              {/* Title */}
                              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-yellow-300 transition-colors line-clamp-2 leading-tight min-h-[3.5rem]">
                                {post.title}
                              </h3>

                              {/* Description */}
                              <p className="text-zinc-300 mb-4 leading-relaxed text-sm line-clamp-3 flex-grow">
                                {post.description}
                              </p>

                              {/* Meta Info */}
                              <div className="flex items-center justify-between text-xs text-zinc-400 mb-4 pt-3 border-t border-gray-700/50">
                                <div className="flex items-center gap-3">
                                  <span className="flex items-center gap-1">
                                    <Calendar className="w-3 h-3" />
                                    {post.date}
                                  </span>
                                </div>
                                <div className="flex items-center gap-1 text-yellow-400 group-hover:text-yellow-300 transition-colors font-semibold">
                                  <span className="text-xs">Read</span>
                                  <ChevronRight className="w-3 h-3 transform group-hover:translate-x-1 transition-transform" />
                                </div>
                              </div>

                              {/* Engagement Metrics */}
                              <div className="flex items-center justify-between pt-3 border-t border-gray-700/50">
                                {(() => {
                                  const metrics = calculateBlogMetrics(post.date, post.slug)
                                  return (
                                    <div className="flex items-center gap-4 text-xs text-zinc-400">
                                      <div className="flex items-center gap-1 hover:text-blue-400 transition-colors cursor-pointer group/metric">
                                        <Eye className="w-3 h-3 group-hover/metric:scale-110 transition-transform" />
                                        <span className="font-medium">{metrics.views}</span>
                                      </div>
                                      <div className="flex items-center gap-1 hover:text-red-400 transition-colors cursor-pointer group/metric">
                                        <Heart className="w-3 h-3 group-hover/metric:scale-110 transition-transform" />
                                        <span className="font-medium">{metrics.likes}</span>
                                      </div>
                                      <div className="flex items-center gap-1 hover:text-green-400 transition-colors cursor-pointer group/metric">
                                        <MessageCircle className="w-3 h-3 group-hover/metric:scale-110 transition-transform" />
                                        <span className="font-medium">{metrics.comments}</span>
                                      </div>
                                      <div className="flex items-center gap-1 hover:text-purple-400 transition-colors cursor-pointer group/metric">
                                        <Share2 className="w-3 h-3 group-hover/metric:scale-110 transition-transform" />
                                        <span className="font-medium">{metrics.shares}</span>
                                      </div>
                                    </div>
                                  )
                                })()}
                              </div>
                            </div>
                          </div>
                        </SpotlightCard>
                      </Link>
                    </TiltCard>
                    </ScrollAnimation>
                  )
                })}
                </div>
              </div>
            )}

          {/* All Posts with Beautiful Grid Layout */}
          <div className="mb-8">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-white">
                  {searchTerm ? 'Search Results' : selectedCategory !== 'All' ? `${selectedCategory}` : 'All Articles'}
                </h2>
                <div className="text-sm text-zinc-400">
                  <NumberTicker value={filteredPosts.length} className="text-blue-400 font-semibold" /> of {allBlogPosts.length}
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
                        router.push('/blog', { scroll: false })
                      }}
                      className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:from-blue-500 hover:to-purple-500 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-500/50"
                    >
                      Clear filters
                    </button>
                  </div>
                </div>
              ) : (
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {(filteredPosts.length > 0 ? filteredPosts : allBlogPosts.slice(0, 12)).map((post, index) => {
                      // Category-specific color schemes
                      const categoryColors: Record<string, {bg: string, border: string, text: string, hover: string, gradient: string}> = {
                        'AI Influencers': {bg: 'from-purple-500/20 to-pink-500/20', border: 'border-purple-500/30', text: 'text-purple-300', hover: 'group-hover:border-purple-500/50 group-hover:shadow-purple-500/10', gradient: 'from-purple-600/5 via-pink-600/5 to-purple-600/5'},
                        'Futures Trading': {bg: 'from-green-500/20 to-emerald-500/20', border: 'border-green-500/30', text: 'text-green-300', hover: 'group-hover:border-green-500/50 group-hover:shadow-green-500/10', gradient: 'from-green-600/5 via-emerald-600/5 to-green-600/5'},
                        'Instagram Growth': {bg: 'from-pink-500/20 to-rose-500/20', border: 'border-pink-500/30', text: 'text-pink-300', hover: 'group-hover:border-pink-500/50 group-hover:shadow-pink-500/10', gradient: 'from-pink-600/5 via-rose-600/5 to-pink-600/5'},
                        'AI Automation': {bg: 'from-blue-500/20 to-cyan-500/20', border: 'border-blue-500/30', text: 'text-blue-300', hover: 'group-hover:border-blue-500/50 group-hover:shadow-blue-500/10', gradient: 'from-blue-600/5 via-cyan-600/5 to-blue-600/5'},
                        'N8N': {bg: 'from-orange-500/20 to-yellow-500/20', border: 'border-orange-500/30', text: 'text-orange-300', hover: 'group-hover:border-orange-500/50 group-hover:shadow-orange-500/10', gradient: 'from-orange-600/5 via-yellow-600/5 to-orange-600/5'},
                        'Digital Products': {bg: 'from-indigo-500/20 to-violet-500/20', border: 'border-indigo-500/30', text: 'text-indigo-300', hover: 'group-hover:border-indigo-500/50 group-hover:shadow-indigo-500/10', gradient: 'from-indigo-600/5 via-violet-600/5 to-indigo-600/5'},
                        'ComfyUI': {bg: 'from-cyan-500/20 to-teal-500/20', border: 'border-cyan-500/30', text: 'text-cyan-300', hover: 'group-hover:border-cyan-500/50 group-hover:shadow-cyan-500/10', gradient: 'from-cyan-600/5 via-teal-600/5 to-cyan-600/5'},
                        'AI Models': {bg: 'from-violet-500/20 to-fuchsia-500/20', border: 'border-violet-500/30', text: 'text-violet-300', hover: 'group-hover:border-violet-500/50 group-hover:shadow-violet-500/10', gradient: 'from-violet-600/5 via-fuchsia-600/5 to-violet-600/5'},
                      }
                      const colors = categoryColors[post.category] || {bg: 'from-blue-500/20 to-purple-500/20', border: 'border-blue-500/30', text: 'text-blue-300', hover: 'group-hover:border-blue-500/50 group-hover:shadow-blue-500/10', gradient: 'from-blue-600/5 via-purple-600/5 to-blue-600/5'}

                      return (
                      <article key={post.slug} className={`group relative bg-gradient-to-br from-gray-800/60 to-gray-900/80 backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${colors.hover}`}>
                        {/* Animated gradient overlay effect */}
                        <div className={`absolute inset-0 bg-gradient-to-r ${colors.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                        <Link href={`/blog/${post.slug}`} className="block relative z-10">
                          <div className="relative">
                            {/* Featured Image Placeholder with Category Gradient */}
                            <div className={`relative h-48 bg-gradient-to-br ${colors.bg} overflow-hidden`}>
                              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent"></div>

                              {/* Decorative Pattern */}
                              <div className="absolute inset-0 opacity-10">
                                <div className="absolute top-4 left-4 w-20 h-20 border-2 border-white rounded-full"></div>
                                <div className="absolute bottom-4 right-4 w-32 h-32 border-2 border-white rounded-full"></div>
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 border-2 border-white rounded-full"></div>
                              </div>

                              {/* Category Badge on Image */}
                              <div className="absolute top-4 left-4 z-10">
                                <span className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r ${colors.bg} border ${colors.border} backdrop-blur-md text-xs ${colors.text} font-semibold uppercase tracking-wide shadow-lg`}>
                                  <Tag className="w-3 h-3" />
                                  {post.category}
                                </span>
                              </div>

                              {/* Featured Badge */}
                              {post.featured && (
                                <div className="absolute top-4 right-4 z-10">
                                  <span className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-gradient-to-r from-yellow-400/90 to-orange-500/90 border border-yellow-500/50 backdrop-blur-md text-xs text-white font-semibold shadow-lg animate-pulse">
                                    <TrendingUp className="w-3 h-3" />
                                    <span>FEATURED</span>
                                  </span>
                                </div>
                              )}

                              {/* Reading Time Badge */}
                              <div className="absolute bottom-4 right-4 z-10">
                                <span className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-xs text-white font-medium">
                                  <Clock className="w-3 h-3" />
                                  {post.readTime} min read
                                </span>
                              </div>
                            </div>

                            <div className="p-6 space-y-4">
                              {/* Title */}
                              <h3 className={`text-xl font-bold text-white group-hover:${colors.text} transition-colors leading-tight line-clamp-2 min-h-[3.5rem]`}>
                                {post.title}
                              </h3>

                              {/* Description */}
                              <p className="text-zinc-300 text-sm leading-relaxed line-clamp-3 min-h-[4rem]">
                                {post.description}
                              </p>

                              {/* Meta Info */}
                              <div className="flex items-center justify-between text-xs text-zinc-400 pt-2 border-t border-gray-700/30">
                                <div className="flex items-center gap-3">
                                  <span className="flex items-center gap-1">
                                    <Calendar className="w-3 h-3" />
                                    {post.date}
                                  </span>
                                </div>
                                <span className={`${colors.text} group-hover:brightness-125 flex items-center gap-1 font-semibold transition-all`}>
                                  Read <ChevronRight className="w-3 h-3 transform group-hover:translate-x-1 transition-transform" />
                                </span>
                              </div>

                              {/* Engagement Metrics */}
                              <div className="flex items-center justify-between pt-3 border-t border-gray-700/30">
                                {(() => {
                                  const metrics = calculateBlogMetrics(post.date, post.slug)
                                  return (
                                    <div className="flex items-center gap-4 text-xs text-zinc-400">
                                      <div className="flex items-center gap-1 hover:text-blue-400 transition-colors cursor-pointer group/metric">
                                        <Eye className="w-3 h-3 group-hover/metric:scale-110 transition-transform" />
                                        <span className="font-medium">{metrics.views}</span>
                                      </div>
                                      <div className="flex items-center gap-1 hover:text-red-400 transition-colors cursor-pointer group/metric">
                                        <Heart className="w-3 h-3 group-hover/metric:scale-110 transition-transform" />
                                        <span className="font-medium">{metrics.likes}</span>
                                      </div>
                                      <div className="flex items-center gap-1 hover:text-green-400 transition-colors cursor-pointer group/metric">
                                        <MessageCircle className="w-3 h-3 group-hover/metric:scale-110 transition-transform" />
                                        <span className="font-medium">{metrics.comments}</span>
                                      </div>
                                      <div className="flex items-center gap-1 hover:text-purple-400 transition-colors cursor-pointer group/metric">
                                        <Share2 className="w-3 h-3 group-hover/metric:scale-110 transition-transform" />
                                        <span className="font-medium">{metrics.shares}</span>
                                      </div>
                                    </div>
                                  )
                                })()}
                              </div>

                              {/* Tags */}
                              {post.tags.length > 0 && (
                                <div className="flex flex-wrap gap-2 pt-3 border-t border-gray-700/30">
                                  {post.tags.slice(0, 2).map((tag, tagIndex) => (
                                    <span key={tagIndex} className={`text-xs bg-gradient-to-r ${colors.bg} border ${colors.border} ${colors.text} px-2.5 py-1 rounded-full font-medium hover:brightness-125 transition-all`}>
                                      #{tag}
                                    </span>
                                  ))}
                                  {post.tags.length > 2 && (
                                    <span className="text-xs text-zinc-500 px-2 py-1">+{post.tags.length - 2}</span>
                                  )}
                                </div>
                              )}
                            </div>
                          </div>
                        </Link>
                      </article>
                    )}
                  )}
                </div>
              )}
            </div>

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