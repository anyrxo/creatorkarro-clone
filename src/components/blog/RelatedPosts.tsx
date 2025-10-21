import React from 'react'
import Link from 'next/link'
import { getRelatedPosts } from '@/lib/blog-metadata'

interface RelatedPostsProps {
  currentSlug: string
  limit?: number
}

export default function RelatedPosts({ currentSlug, limit = 6 }: RelatedPostsProps) {
  const relatedPosts = getRelatedPosts(currentSlug, limit)

  if (relatedPosts.length === 0) {
    return null
  }

  return (
    <div className="mt-16 pt-12 border-t border-gray-700">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-white mb-2">Related Articles</h2>
        <p className="text-gray-400">Continue exploring related topics and strategies</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {relatedPosts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group block p-6 bg-gray-800/30 rounded-xl hover:bg-gray-800/50 transition-all duration-300 border border-gray-700 hover:border-blue-600/50 hover:shadow-lg hover:shadow-blue-600/10"
          >
            <div className="mb-3">
              <span className="inline-block px-3 py-1 text-xs font-semibold text-blue-400 bg-blue-600/20 rounded-full">
                {post.category}
              </span>
            </div>

            <h3 className="font-bold text-white group-hover:text-blue-300 transition-colors mb-3 text-lg leading-tight">
              {post.title}
            </h3>

            <p className="text-gray-400 text-sm mb-4 line-clamp-2">
              {post.description}
            </p>

            <div className="flex items-center justify-between text-xs text-gray-500">
              <span>{post.readTime || '5 min read'}</span>
              <span className="text-blue-400 group-hover:translate-x-1 transition-transform">
                Read more →
              </span>
            </div>

            {post.tags.length > 0 && (
              <div className="mt-3 flex flex-wrap gap-1">
                {post.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="text-xs text-gray-500 bg-gray-700/50 px-2 py-1 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </Link>
        ))}
      </div>
    </div>
  )
}
