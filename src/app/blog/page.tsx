'use client'

import Link from 'next/link'
import { useScrollAnimation, useScrollAnimations } from '@/hooks/useScrollAnimation'
import { calculateBlogMetrics, formatBlogDate } from '@/utils/blogMetrics'
import { useEffect, useState } from 'react'
import ScrollAnimation, { StaggeredAnimation, CountUp } from '@/components/ScrollAnimation'
import { TiltCard, SpotlightCard } from '@/components/HoverEffects'
import AnimatedText, { GradientText } from '@/components/AnimatedText'
import AnimatedGradientText from '@/components/magicui/animated-gradient-text'
import NumberTicker from '@/components/magicui/number-ticker'
import ShimmerButton from '@/components/magicui/shimmer-button'
import WordRotate from '@/components/magicui/word-rotate'
import BlurIn from '@/components/magicui/blur-in'
import { ChevronRight } from 'lucide-react'
import { BlogPost, NewsArticle } from '@/utils/getBlogPosts'

export default function BlogPage() {
  const [activeTab, setActiveTab] = useState<'general' | 'news'>('general')
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([])
  const [newsArticles, setNewsArticles] = useState<NewsArticle[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  
  const heroAnimation = useScrollAnimation({ threshold: 0.2 })
  const contentAnimation = useScrollAnimation({ threshold: 0.1 })
  
  // Fetch blog data from API
  useEffect(() => {
    async function fetchBlogData() {
      try {
        setLoading(true)
        const response = await fetch('/api/blog')
        if (!response.ok) {
          throw new Error('Failed to fetch blog data')
        }
        const data = await response.json()
        setBlogPosts(data.blogPosts || [])
        setNewsArticles(data.newsArticles || [])
        setError(null)
        
        console.log('Dynamic blog data loaded:', {
          blogPosts: data.blogCount,
          newsArticles: data.newsCount,
          total: data.total
        })
      } catch (err) {
        console.error('Error fetching blog data:', err)
        setError('Failed to load blog posts')
        // Fallback to empty arrays
        setBlogPosts([])
        setNewsArticles([])
      } finally {
        setLoading(false)
      }
    }
    
    fetchBlogData()
  }, [])
  
  const currentPosts = activeTab === 'general' ? blogPosts : newsArticles
  const { setElementRef, visibleElements } = useScrollAnimations(currentPosts.length, { threshold: 0.1 })

  // Debug logging
  console.log('Active tab:', activeTab)
  console.log('Current posts count:', currentPosts.length)
  console.log('Blog posts count:', blogPosts.length)
  console.log('News articles count:', newsArticles.length)

  return (
    <div className="min-h-screen bg-dark relative">

      <section className="pt-16 pb-8 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div
            ref={heroAnimation.elementRef}
            className={`text-center max-w-4xl mx-auto scroll-fade-up `}
          >
                <AnimatedGradientText className="mb-6">
              📝 <hr className="mx-2 h-4 w-[1px] shrink-0 bg-gray-300" />{" "}
                    <span className="inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent">
                Blog & News
                    </span>
                    <ChevronRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
                </AnimatedGradientText>

                <div className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                    <BlurIn
                word="Success Stories, Growth Hacks &"
                className="text-4xl md:text-6xl font-bold text-white"
                duration={0.8}
              />
                        <div className="mt-2">
                            <span className="text-white">AI Strategies from </span>
                            <div className="bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-clip-text text-transparent inline-block">
                                <WordRotate
                    words={["IImagined.ai", "Anyro", "Industry Experts", "Growth Masters"]}
                    className="text-4xl md:text-6xl font-bold"
                    duration={3500}
                  />
                                </div>
                            </div>
                        </div>

                        <div className="max-w-3xl mx-auto mb-8">
                            <AnimatedText 
                text="From viral TikTok strategies to advanced AI automation, discover proven tactics used by successful creators and entrepreneurs."
                className="text-lg md:text-xl text-gray-300 leading-relaxed"
                              animation="slideUp"
                              delay={0.6}
              />
                        </div>

                        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                            <ShimmerButton className="shadow-2xl">
                                <span className="text-sm font-medium text-white tracking-wide">
                                    Explore All Articles →
                                </span>
                            </ShimmerButton>
                            <Link 
                href="/ai-agents"
                className="text-primary hover:text-primary-light transition-colors duration-300 font-medium"
              >
                                Check our courses
                            </Link>
                        </div><div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-2xl mx-auto">
                            <div className="text-center">
                                <div className="text-2xl md:text-3xl font-bold text-primary mb-2">
                                    <NumberTicker value={blogPosts.length} />
                                </div>
                                <div className="text-sm text-gray-400">Blog Articles</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl md:text-3xl font-bold text-secondary mb-2">
                                    <NumberTicker value={newsArticles.length} />
                                </div>
                                <div className="text-sm text-gray-400">News Updates</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl md:text-3xl font-bold text-accent mb-2">
                                    <NumberTicker value={blogPosts.length + newsArticles.length} />
                                </div>
                                <div className="text-sm text-gray-400">Total Posts</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl md:text-3xl font-bold text-primary-light mb-2">
                                    <NumberTicker value={Math.round((blogPosts.length + newsArticles.length) * 15)} />
                                </div>
                                <div className="text-sm text-gray-400">Minutes Reading</div>
                            </div>
                        </div>
                    </div>
        </div>
      </section>

      <section className="py-12 border-t border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center mb-12">
            <div className="bg-gray-900 rounded-xl p-2 flex space-x-2">
              <button
                onClick={() => setActiveTab('general')}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeTab === 'general'
                    ? 'bg-primary text-white shadow-lg'
                    : 'text-gray-400 hover:text-white hover:bg-gray-800'
                }`}
              >
                Blog Articles ({blogPosts.length})
              </button>
              <button
                onClick={() => setActiveTab('news')}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeTab === 'news'
                    ? 'bg-primary text-white shadow-lg'
                    : 'text-gray-400 hover:text-white hover:bg-gray-800'
                }`}
              >
                News & Updates ({newsArticles.length})
              </button>
            </div>
          </div>

          
          {loading && (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
              <p className="text-gray-400">Loading blog posts...</p>
            </div>
          )}

          
          {error && (
            <div className="text-center py-12">
              <div className="bg-red-900/20 border border-red-700 rounded-lg p-6 max-w-md mx-auto">
                <p className="text-red-400 mb-4">{error}</p>
                <button 
                  onClick={() => window.location.reload()}
                  className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-colors"
                >
                  Retry
                </button>
              </div>
            </div>
          )}

          
          {!loading && !error && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentPosts.map((post, index) => (
                <div
                  key={post.slug}
                  ref={(el) => setElementRef(index, el)}
                  className={`transition-all duration-700 ${
                    visibleElements[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <SpotlightCard className="h-full">
                    <Link href={`/blog/${post.slug}`} className="block h-full">
                      <div className="bg-gray-900 rounded-xl overflow-hidden h-full hover:shadow-2xl transition-all duration-300 group"><div className="p-6 pb-4">
                          <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium mb-4 ${
                            post.categoryColor === 'blue' ? 'bg-blue-900/30 text-blue-400 border border-blue-700/30' :
                            post.categoryColor === 'purple' ? 'bg-purple-900/30 text-purple-400 border border-purple-700/30' :
                            post.categoryColor === 'pink' ? 'bg-pink-900/30 text-pink-400 border border-pink-700/30' :
                            post.categoryColor === 'green' ? 'bg-green-900/30 text-green-400 border border-green-700/30' :
                            post.categoryColor === 'red' ? 'bg-red-900/30 text-red-400 border border-red-700/30' :
                            post.categoryColor === 'cyan' ? 'bg-cyan-900/30 text-cyan-400 border border-cyan-700/30' :
                            'bg-gray-800/30 text-gray-400 border border-gray-700/30'
                          }`}>
                            {post.category}
                          </div>
                          
                          <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors line-clamp-2">
                            {post.title}
                          </h3>
                          
                          <p className="text-gray-400 mb-4 line-clamp-3 leading-relaxed">
                            {post.excerpt}
                          </p>
                          
                          <div className="flex items-center justify-between text-sm text-gray-500">
                            <span>{post.readTime}</span>
                            <span>{formatBlogDate(post.date)}</span>
                          </div>
                        </div><div className="px-6 pb-6">
                          <div className="flex items-center text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-2">
                            <span className="text-sm font-medium mr-2">Read Article</span>
                            <ChevronRight className="w-4 h-4" />
                          </div>
                        </div>
                      </div>
                    </Link>
                  </SpotlightCard>
                </div>
              ))}
            </div>
          )}

          
          {!loading && !error && currentPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-400 mb-4">No {activeTab === 'general' ? 'blog posts' : 'news articles'} found.</p>
              <button 
                onClick={() => window.location.reload()}
                className="bg-primary hover:bg-primary-light text-white px-4 py-2 rounded-lg transition-colors"
              >
                Refresh
              </button>
            </div>
          )}
        </div>
      </section>

      <section className="py-20 border-t border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Join thousands of creators and entrepreneurs who are already implementing these strategies to build their online empires.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link href="/ai-agents">
                <ShimmerButton className="shadow-2xl">
                  <span className="text-sm font-medium text-white tracking-wide">
                    Explore Our Courses →
                  </span>
                </ShimmerButton>
              </Link>
              <Link 
                href="/contact"
                className="text-primary hover:text-primary-light transition-colors duration-300 font-medium"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}