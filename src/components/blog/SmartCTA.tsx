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
  const courseData = getRecommendedCourse(blogSlug)
  const course = courseData as any
  const highlightedCourse = (courseData as any).highlightedCourse

  if (variant === 'inline') {
    return (
      <div className={`bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-blue-500/30 rounded-lg p-6 my-8 ${className}`}>
        <div className="flex items-start gap-4">
          <div className="p-2 bg-blue-500/20 rounded-lg">
            <Sparkles className="w-5 h-5 text-blue-400" />
          </div>
          <div className="flex-1">
            <h4 className="text-lg font-semibold text-white mb-2">
              Want to learn {highlightedCourse || 'this'} and more?
            </h4>
            <p className="text-gray-300 mb-3">
              Get all courses, templates, and automation systems for just <span className="text-white font-bold">$99/month</span>
            </p>
            <Link
              href={course.whopUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium transition-colors"
            >
              Start Learning for $99/month
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
            All Access Pass
          </h4>
        </div>
        {highlightedCourse && (
          <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-3 mb-3">
            <p className="text-sm text-blue-400 font-semibold">
              ✨ Learn {highlightedCourse}
            </p>
            <p className="text-xs text-gray-400 mt-1">+ 3 more complete courses</p>
          </div>
        )}
        <h3 className="text-xl font-bold text-white mb-3">
          Complete Creator Academy
        </h3>
        <p className="text-gray-300 mb-4 text-sm leading-relaxed">
          All courses, templates, and automation systems in one subscription
        </p>
        <div className="space-y-2 mb-4">
          {course.features.slice(0, 4).map((feature, index) => (
            <div key={index} className="flex items-start gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 flex-shrink-0" />
              <p className="text-sm text-gray-400">{feature}</p>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-between mb-4">
          <div>
            <span className="text-3xl font-bold text-white">${course.price}</span>
            <span className="text-gray-400">/mo</span>
          </div>
          <span className="text-xs text-gray-400">Cancel anytime</span>
        </div>
        <Link
          href={course.whopUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full text-center bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all transform hover:scale-105"
        >
          Get All Access Now
        </Link>
        <p className="text-center text-xs text-gray-500 mt-3">
          100+ hours of content • All updates included
        </p>
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
              All Access Pass
            </span>
          </div>
          {highlightedCourse && highlightedCourse !== 'All Courses' && (
            <p className="text-blue-400 font-semibold mb-2">
              Want to master {highlightedCourse}? Get it + 3 more complete courses
            </p>
          )}
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Complete Creator Academy - All Courses
          </h2>
          <p className="text-xl text-gray-300 mb-6">
            Master Instagram growth, AI influencers, n8n automation, and digital products for just <span className="text-white font-bold">$99/month</span>. Cancel anytime.
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

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link
            href={course.whopUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold text-lg px-8 py-4 rounded-lg transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Get All Access for $99/month
            <ArrowRight className="w-5 h-5" />
          </Link>
          <div className="text-center sm:text-left">
            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-bold text-white">${course.price}</span>
              <span className="text-xl text-gray-400">/month</span>
            </div>
            <div className="text-sm text-gray-400">Cancel anytime • 100+ hours of content</div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-400 text-sm">
            ✨ Includes: Instagram Ignited • AI Influencers Academy • AI Automations • Digital Products Empire
          </p>
        </div>
      </div>
    </section>
  )
}
