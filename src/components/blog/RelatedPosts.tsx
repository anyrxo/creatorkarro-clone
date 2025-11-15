'use client'

import Link from 'next/link'
import { getRelatedPosts } from '@/lib/internal-links'
import { ArrowRight, BookOpen } from 'lucide-react'

interface RelatedPostsProps {
  currentSlug: string
  limit?: number
  className?: string
}

const blogTitles: Record<string, string> = {
  'instagram-growth-2025': 'Instagram Growth Guide 2025',
  '500k-followers': 'How to Reach 500K Instagram Followers',
  'viral-carousel-guide': 'Viral Instagram Carousel Guide',
  'scale-content-creation': 'Scale Content Creation',
  'ai-influencer-success': 'AI Influencer Success Guide',
  'monetize-with-ai': 'How to Monetize with AI',
  'personal-brand-building': 'Personal Brand Building',
  'youtube-shorts-strategy': 'YouTube Shorts Strategy',
}

export default function RelatedPosts({ currentSlug, limit = 3, className = '' }: RelatedPostsProps) {
  const relatedSlugs = getRelatedPosts(currentSlug, limit)

  if (relatedSlugs.length === 0) {
    return null
  }

  return (
    <section className={`bg-zinc-900/50 rounded-2xl border border-gray-800 p-8 my-12 ${className}`}>
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 bg-blue-500/10 rounded-lg">
          <BookOpen className="w-5 h-5 text-blue-400" />
        </div>
        <h3 className="text-2xl font-bold text-white">Continue Reading</h3>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {relatedSlugs.map((slug) => {
          const title = blogTitles[slug] || slug.split('-').map(word =>
            word.charAt(0).toUpperCase() + word.slice(1)
          ).join(' ')

          return (
            <Link
              key={slug}
              href={`/blog/${slug}`}
              className="group bg-zinc-900 hover:bg-zinc-800 border border-gray-800 hover:border-blue-500/50 rounded-xl p-6 transition-all"
            >
              <h4 className="text-lg font-semibold text-white group-hover:text-blue-400 mb-3 line-clamp-2">
                {title}
              </h4>
              <p className="text-sm text-gray-400 flex items-center gap-2">
                Read article
                <ArrowRight className="w-4 h-4" />
              </p>
            </Link>
          )
        })}
      </div>
    </section>
  )
}
