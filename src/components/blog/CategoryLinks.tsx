import React from 'react'
import Link from 'next/link'
import { BLOG_CATEGORIES, getPostsByCategory } from '@/lib/blog-metadata'

interface CategoryLinksProps {
  currentCategory: string
}

export default function CategoryLinks({ currentCategory }: CategoryLinksProps) {
  const categoryPosts = getPostsByCategory(currentCategory)

  // Get 3-5 random posts from the same category
  const randomPosts = categoryPosts
    .sort(() => Math.random() - 0.5)
    .slice(0, 4)

  if (randomPosts.length === 0) {
    return null
  }

  return (
    <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 p-6 rounded-xl border border-blue-600/20 mb-8">
      <h3 className="text-xl font-bold text-white mb-4 flex items-center">
        <span className="mr-2">🔗</span>
        More in {currentCategory}
      </h3>
      <div className="space-y-3">
        {randomPosts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="block p-3 bg-gray-800/30 rounded-lg hover:bg-gray-800/50 transition-colors border border-gray-700/50 hover:border-blue-600/50 group"
          >
            <h4 className="font-semibold text-white group-hover:text-blue-300 transition-colors text-sm">
              {post.title}
            </h4>
            {post.tags.length > 0 && (
              <div className="mt-2 flex flex-wrap gap-1">
                {post.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="text-xs text-gray-500 bg-gray-700/50 px-2 py-0.5 rounded"
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
