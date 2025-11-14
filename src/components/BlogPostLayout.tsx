'use client'

import React, { ReactNode } from 'react'
import Link from 'next/link'
import { ArrowRight, BookOpen, Clock, Calendar, User, TrendingUp, Sparkles, ChevronRight } from 'lucide-react'
import { SpotlightCard } from '@/components/HoverEffects'
import ScrollAnimation from '@/components/ScrollAnimation'
import AnimatedGradientText from '@/components/magicui/animated-gradient-text'

interface CourseMapping {
  'AI Automations': { title: string; link: string; description: string; gradient: string }
  'AI Influencers': { title: string; link: string; description: string; gradient: string }
  'Instagram Growth': { title: string; link: string; description: string; gradient: string }
  'Digital Products': { title: string; link: string; description: string; gradient: string }
}

const COURSE_MAPPING: CourseMapping = {
  'AI Automations': {
    title: 'AI Automations Course',
    link: '/ai-automations',
    description: 'Master AI automation with N8N, ChatGPT, and more',
    gradient: 'from-blue-500 to-cyan-500'
  },
  'AI Influencers': {
    title: 'AI Influencers Course',
    link: '/ai-influencers',
    description: 'Learn to create and monetize AI influencers',
    gradient: 'from-purple-500 to-pink-500'
  },
  'Instagram Growth': {
    title: 'Instagram Ignited Course',
    link: '/instagram-ignited',
    description: 'Grow your Instagram from 0 to 10K+ followers',
    gradient: 'from-pink-500 to-rose-500'
  },
  'Digital Products': {
    title: 'Digital Products Course',
    link: '/digital-products',
    description: 'Build and sell profitable digital products',
    gradient: 'from-indigo-500 to-violet-500'
  }
}

interface BlogPostLayoutProps {
  category: keyof CourseMapping
  title: string
  description: string
  date: string
  readTime: number
  author?: {
    name: string
    role: string
    avatar?: string
  }
  children: ReactNode
  relatedPosts?: Array<{
    title: string
    slug: string
    description: string
    readTime: number
  }>
}

export default function BlogPostLayout({
  category,
  title,
  description,
  date,
  readTime,
  author = { name: 'Karro', role: 'Founder & Creator Entrepreneur' },
  children,
  relatedPosts = []
}: BlogPostLayoutProps) {
  const course = COURSE_MAPPING[category]

  const categoryColors = {
    'AI Automations': { bg: 'from-blue-500/20 to-cyan-500/20', border: 'border-blue-500/30', text: 'text-blue-300', gradient: 'from-blue-600 via-cyan-600 to-blue-600' },
    'AI Influencers': { bg: 'from-purple-500/20 to-pink-500/20', border: 'border-purple-500/30', text: 'text-purple-300', gradient: 'from-purple-600 via-pink-600 to-purple-600' },
    'Instagram Growth': { bg: 'from-pink-500/20 to-rose-500/20', border: 'border-pink-500/30', text: 'text-pink-300', gradient: 'from-pink-600 via-rose-600 to-pink-600' },
    'Digital Products': { bg: 'from-indigo-500/20 to-violet-500/20', border: 'border-indigo-500/30', text: 'text-indigo-300', gradient: 'from-indigo-600 via-violet-600 to-indigo-600' }
  }

  const colors = categoryColors[category]

  return (
    <div className="min-h-screen bg-dark">
      {/* Beautiful Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden border-b border-gray-800">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className={`absolute inset-0 bg-gradient-to-br ${colors.bg} opacity-30`}></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]"></div>

          {/* Animated Gradient Orbs */}
          <div className={`absolute top-20 left-20 w-72 h-72 bg-gradient-to-r ${colors.gradient} rounded-full blur-3xl opacity-20 animate-pulse`}></div>
          <div className={`absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r ${colors.gradient} rounded-full blur-3xl opacity-20 animate-pulse`} style={{animationDelay: '1s'}}></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto">
            <ScrollAnimation animation="fade-up" delay={100}>
              <div className="flex items-center gap-4 mb-6 flex-wrap">
                <span className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${colors.bg} border ${colors.border} backdrop-blur-sm text-sm ${colors.text} font-semibold uppercase tracking-wide`}>
                  <Sparkles className="w-4 h-4" />
                  {category}
                </span>
                <span className="flex items-center gap-2 text-gray-400 text-sm">
                  <Calendar className="w-4 h-4" />
                  {date}
                </span>
                <span className="flex items-center gap-2 text-gray-400 text-sm">
                  <Clock className="w-4 h-4" />
                  {readTime} min read
                </span>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="fade-up" delay={200}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
                {title}
              </h1>
            </ScrollAnimation>

            <ScrollAnimation animation="fade-up" delay={300}>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                {description}
              </p>
            </ScrollAnimation>

            {/* Author Section with E-A-T */}
            <ScrollAnimation animation="fade-up" delay={400}>
              <div className="flex items-center gap-4 p-6 bg-zinc-900/60 backdrop-blur-sm border border-gray-700/50 rounded-xl">
                <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${course.gradient} flex items-center justify-center text-white text-2xl font-bold`}>
                  {author.name.charAt(0)}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <p className="text-white font-semibold text-lg">{author.name}</p>
                    <span className={`px-2 py-0.5 rounded-full bg-gradient-to-r ${colors.bg} border ${colors.border} text-xs ${colors.text} font-medium`}>
                      Verified Expert
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm">{author.role} • 4,000+ Students Taught</p>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <article className="prose prose-invert prose-lg max-w-none">
              {children}
            </article>
          </div>
        </div>
      </section>

      {/* Course CTA Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <ScrollAnimation animation="fade-up">
              <SpotlightCard
                className={`relative overflow-hidden bg-gradient-to-br from-gray-800/70 to-gray-900/70 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 md:p-12`}
                spotlightColor="rgba(139, 92, 246, 0.3)"
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className={`absolute inset-0 bg-gradient-to-r ${colors.gradient}`}></div>
                </div>

                <div className="relative z-10">
                  <div className="flex items-start gap-4 mb-6">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${course.gradient}`}>
                      <BookOpen className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                        Want to Learn More?
                      </h3>
                      <p className="text-gray-300 text-lg mb-6">
                        {course.description}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
                    <div>
                      <p className={`text-2xl font-bold bg-gradient-to-r ${course.gradient} bg-clip-text text-transparent mb-2`}>
                        {course.title}
                      </p>
                      <p className="text-gray-400 text-sm">Join 4,000+ successful students</p>
                    </div>
                    <Link href={course.link} className="group">
                      <button className={`flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r ${course.gradient} text-white font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105`}>
                        Enroll Now
                        <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                      </button>
                    </Link>
                  </div>

                  {/* Social Proof */}
                  <div className="mt-8 pt-8 border-t border-gray-700/50">
                    <div className="grid grid-cols-3 gap-6 text-center">
                      <div>
                        <p className={`text-3xl font-bold bg-gradient-to-r ${course.gradient} bg-clip-text text-transparent mb-1`}>
                          4,000+
                        </p>
                        <p className="text-gray-400 text-sm">Students</p>
                      </div>
                      <div>
                        <p className={`text-3xl font-bold bg-gradient-to-r ${course.gradient} bg-clip-text text-transparent mb-1`}>
                          4.8/5
                        </p>
                        <p className="text-gray-400 text-sm">Rating</p>
                      </div>
                      <div>
                        <p className={`text-3xl font-bold bg-gradient-to-r ${course.gradient} bg-clip-text text-transparent mb-1`}>
                          100%
                        </p>
                        <p className="text-gray-400 text-sm">Online</p>
                      </div>
                    </div>
                  </div>
                </div>
              </SpotlightCard>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Related Posts Section */}
      {relatedPosts.length > 0 && (
        <section className="py-16 px-4 border-t border-gray-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <ScrollAnimation animation="fade-up">
                <div className="flex items-center gap-3 mb-8">
                  <TrendingUp className={`w-6 h-6 ${colors.text}`} />
                  <h3 className="text-2xl md:text-3xl font-bold text-white">
                    Related Articles
                  </h3>
                </div>
              </ScrollAnimation>

              <div className="grid md:grid-cols-3 gap-6">
                {relatedPosts.map((post, index) => (
                  <ScrollAnimation key={post.slug} animation="fade-up" delay={100 + index * 100}>
                    <Link href={`/blog/${post.slug}`}>
                      <div className="group h-full bg-gradient-to-br from-gray-800/60 to-gray-900/80 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-gray-500/50 transition-all duration-300 transform hover:-translate-y-1">
                        <h4 className="text-lg font-bold text-white mb-3 line-clamp-2 group-hover:text-blue-300 transition-colors">
                          {post.title}
                        </h4>
                        <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                          {post.description}
                        </p>
                        <div className="flex items-center justify-between text-sm">
                          <span className="flex items-center gap-1 text-gray-500">
                            <Clock className="w-3 h-3" />
                            {post.readTime} min
                          </span>
                          <span className={`flex items-center gap-1 ${colors.text} group-hover:brightness-125 transition-colors font-medium`}>
                            Read
                            <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                          </span>
                        </div>
                      </div>
                    </Link>
                  </ScrollAnimation>
                ))}
              </div>

              <ScrollAnimation animation="fade-up" delay={400}>
                <div className="text-center mt-8">
                  <Link href="/blog">
                    <button className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-zinc-800/60 backdrop-blur-sm border border-gray-700/50 text-gray-300 hover:text-white hover:border-gray-500/50 transition-all duration-300`}>
                      View All Articles
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </Link>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
