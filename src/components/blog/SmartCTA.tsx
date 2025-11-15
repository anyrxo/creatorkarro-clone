'use client'

import Link from 'next/link'
import { getRecommendedCourse } from '@/config/courses'
import { ArrowRight, Sparkles } from 'lucide-react'

interface SmartCTAProps {
  blogSlug: string
  variant?: 'default' | 'inline' | 'sidebar'
  className?: string
}

/**
 * Smart CTA Component
 * Automatically recommends the right course based on blog post topic
 */
export default function SmartCTA({ blogSlug, variant = 'default', className = '' }: SmartCTAProps) {
  const course = getRecommendedCourse(blogSlug)

  if (variant === 'inline') {
    return (
      <div className={`bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-blue-500/30 rounded-lg p-6 my-8 ${className}`}>
        <div className="flex items-start gap-4">
          <div className="p-2 bg-blue-500/20 rounded-lg">
            <Sparkles className="w-5 h-5 text-blue-400" />
          </div>
          <div className="flex-1">
            <h4 className="text-lg font-semibold text-white mb-2">
              Ready to take action?
            </h4>
            <p className="text-gray-300 mb-3">
              {course.shortDescription}
            </p>
            <Link
              href={`/${course.slug}`}
              className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium transition-colors"
            >
              {course.ctaText}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    )
  }

  if (variant === 'sidebar') {
    return (
      <div className={`bg-zinc-900 border border-gray-800 rounded-xl p-6 sticky top-24 ${className}`}>
        <div className="flex items-center gap-2 mb-3">
          <Sparkles className="w-5 h-5 text-blue-400" />
          <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wide">
            Recommended Course
          </h4>
        </div>
        <h3 className="text-xl font-bold text-white mb-3">
          {course.name}
        </h3>
        <p className="text-gray-300 mb-4 text-sm leading-relaxed">
          {course.shortDescription}
        </p>
        <div className="space-y-2 mb-4">
          {course.features.slice(0, 3).map((feature, index) => (
            <div key={index} className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 flex-shrink-0" />
              <p className="text-sm text-gray-400">{feature}</p>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-between mb-4">
          <span className="text-2xl font-bold text-white">${course.price}</span>
          <span className="text-sm text-gray-400">one-time</span>
        </div>
        <Link
          href={`/${course.slug}`}
          className="block w-full text-center bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all transform hover:scale-105"
        >
          {course.ctaText}
        </Link>
      </div>
    )
  }

  // Default variant - Full width CTA at bottom of blog post
  return (
    <section className={`bg-gradient-to-b from-zinc-900 to-black border-y border-gray-800 py-16 my-12 ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 rounded-full px-4 py-2 mb-4">
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-semibold text-blue-400 uppercase tracking-wide">
              Recommended for You
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {course.name}
          </h2>
          <p className="text-xl text-gray-300 mb-6">
            {course.description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 mb-8">
          {course.features.map((feature, index) => (
            <div key={index} className="flex items-start gap-3 bg-zinc-900/50 rounded-lg p-4">
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 mt-2 flex-shrink-0" />
              <p className="text-gray-300">{feature}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href={`/${course.slug}`}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold text-lg px-8 py-4 rounded-lg transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            {course.ctaText}
            <ArrowRight className="w-5 h-5" />
          </Link>
          <div className="text-center sm:text-left">
            <div className="text-3xl font-bold text-white">${course.price}</div>
            <div className="text-sm text-gray-400">One-time payment • Lifetime access</div>
          </div>
        </div>
      </div>
    </section>
  )
}
