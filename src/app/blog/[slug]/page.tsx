import React from 'react'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { allBlogPosts } from '@/data/blog-posts'
import { ArrowLeft, Calendar, Clock, Tag, Share, BookOpen } from 'lucide-react'
import ReactMarkdown from 'react-markdown'
import fs from 'fs'
import path from 'path'

interface BlogPostPageProps {
  params: Promise<{ slug: string }>
}

// Generate static params for ALL blog posts
export async function generateStaticParams() {
  // Generate params for ALL 550 blog posts to ensure no 404s
  return allBlogPosts.map((post) => ({
    slug: post.slug,
  }))
}

// Get blog content from markdown files
async function getBlogContent(slug: string): Promise<string | null> {
  const possiblePaths = [
    path.join(process.cwd(), 'src/app/blog-content', `${slug}.md`),  // Gemini-generated
    path.join(process.cwd(), 'src/app/blog-posts-content', `${slug}.md`),  // Manual-generated
  ];
  
  for (const filepath of possiblePaths) {
    try {
      return await fs.promises.readFile(filepath, 'utf-8');
    } catch (error) {
      // File doesn't exist, try next path
      continue;
    }
  }
  
  return null; // No content found
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  
  // Find the blog post
  const post = allBlogPosts.find(post => post.slug === slug)
  
  if (!post) {
    notFound()
  }

  // Get rich blog content
  const blogContent = await getBlogContent(slug);

  return (
    <div className="min-h-screen bg-dark">
      {/* Header */}
      <section className="py-12 px-4 border-b border-gray-800">
        <div className="container mx-auto max-w-4xl">
          {/* Back link */}
          <Link href="/blog" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>

          {/* Article header */}
          <div className="mb-8">
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span className="bg-blue-600/20 text-blue-300 px-3 py-1 rounded-full text-sm font-medium">
                {post.category}
              </span>
              {post.featured && (
                <span className="bg-yellow-600/20 text-yellow-300 px-3 py-1 rounded-full text-sm font-medium">
                  Featured
                </span>
              )}
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              {post.title}
            </h1>

            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              {post.description}
            </p>

            {/* Meta info */}
            <div className="flex flex-wrap items-center gap-6 text-gray-400">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{post.readTime} min read</span>
              </div>
              <div className="flex items-center gap-2">
                <BookOpen className="w-4 h-4" />
                <span>Article</span>
              </div>
            </div>
          </div>

          {/* Tags */}
          {post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag, index) => (
                <span key={index} className="flex items-center gap-1 bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm">
                  <Tag className="w-3 h-3" />
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Article content */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          {blogContent ? (
            // Rich SEO-optimized content
            <div className="prose prose-invert prose-lg prose-blue max-w-none">
              <ReactMarkdown
                components={{
                  h1: ({children}) => <h1 className="text-4xl font-bold text-white mb-8 leading-tight">{children}</h1>,
                  h2: ({children}) => <h2 className="text-3xl font-bold text-white mb-6 mt-12">{children}</h2>,
                  h3: ({children}) => <h3 className="text-2xl font-bold text-white mb-4 mt-8">{children}</h3>,
                  p: ({children}) => <p className="text-gray-300 mb-6 leading-relaxed text-lg">{children}</p>,
                  ul: ({children}) => <ul className="text-gray-300 mb-6 space-y-2 list-disc list-inside">{children}</ul>,
                  ol: ({children}) => <ol className="text-gray-300 mb-6 space-y-2 list-decimal list-inside">{children}</ol>,
                  li: ({children}) => <li className="text-gray-300 leading-relaxed">{children}</li>,
                  blockquote: ({children}) => (
                    <blockquote className="border-l-4 border-blue-600 pl-6 py-4 bg-blue-600/10 rounded-r-lg my-8">
                      <div className="text-blue-300 font-semibold">{children}</div>
                    </blockquote>
                  ),
                  strong: ({children}) => <strong className="text-white font-bold">{children}</strong>,
                  em: ({children}) => <em className="text-blue-300 italic">{children}</em>,
                  a: ({href, children}) => (
                    <Link href={href || '#'} className="text-blue-400 hover:text-blue-300 transition-colors underline">
                      {children}
                    </Link>
                  ),
                  code: ({children}) => (
                    <code className="bg-gray-800 text-yellow-300 px-2 py-1 rounded text-sm font-mono">
                      {children}
                    </code>
                  )
                }}
              >
                {blogContent}
              </ReactMarkdown>
            </div>
          ) : (
            // Fallback to original content
            <div className="prose prose-invert prose-lg max-w-none">
              <div className="bg-gray-800/50 rounded-xl p-8 mb-12 border border-gray-700">
                <h2 className="text-2xl font-bold text-white mb-4">What You'll Learn</h2>
                <p className="text-gray-300 mb-6">
                  This comprehensive guide covers everything you need to know about {post.title.toLowerCase()}. 
                  Whether you're just getting started or looking to optimize your existing setup, this article provides 
                  actionable insights and proven strategies.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-gray-900 rounded-lg p-4">
                    <div className="text-blue-400 font-semibold mb-2">✅ Core Concepts</div>
                    <div className="text-gray-300 text-sm">Fundamental principles and best practices</div>
                  </div>
                  <div className="bg-gray-900 rounded-lg p-4">
                    <div className="text-purple-400 font-semibold mb-2">⚡ Implementation</div>
                    <div className="text-gray-300 text-sm">Step-by-step implementation guide</div>
                  </div>
                  <div className="bg-gray-900 rounded-lg p-4">
                    <div className="text-green-400 font-semibold mb-2">🎯 Real Examples</div>
                    <div className="text-gray-300 text-sm">Case studies and practical examples</div>
                  </div>
                  <div className="bg-gray-900 rounded-lg p-4">
                    <div className="text-yellow-400 font-semibold mb-2">💡 Pro Tips</div>
                    <div className="text-gray-300 text-sm">Advanced techniques and optimizations</div>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-white mb-6">Getting Started</h2>
              <p className="text-gray-300 mb-8 leading-relaxed">
                {post.title} has become increasingly important in today's digital landscape. Whether you're a business owner, 
                content creator, or developer, understanding how to effectively implement and leverage these strategies can 
                significantly impact your success.
              </p>

              <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-xl p-8 border border-blue-600/30">
                <h3 className="text-2xl font-bold text-white mb-4">Ready to Get Started?</h3>
                <p className="text-gray-300 mb-6">
                  Take action today and begin implementing these strategies. Remember, success comes from 
                  consistent effort and continuous improvement.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/digital-products" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center">
                    Explore Our Products
                  </Link>
                  <Link href="/blog" className="border border-blue-600 text-blue-300 px-6 py-3 rounded-lg font-semibold hover:bg-blue-600/10 transition-colors text-center">
                    Read More Articles
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Related posts */}
      <section className="py-16 px-4 bg-gray-900/50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl font-bold text-white mb-8">Related Articles</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {allBlogPosts
              .filter(relatedPost => 
                relatedPost.slug !== post.slug && 
                relatedPost.category === post.category
              )
              .slice(0, 4)
              .map((relatedPost) => (
                <Link key={relatedPost.slug} href={`/blog/${relatedPost.slug}`}>
                  <article className="bg-gray-800/50 rounded-lg p-6 border border-gray-700 hover:border-gray-600 transition-all cursor-pointer hover:bg-gray-800/70">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-sm text-blue-300 font-medium">{relatedPost.category}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-3 line-clamp-2">
                      {relatedPost.title}
                    </h3>
                    <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                      {relatedPost.description}
                    </p>
                    <div className="flex items-center justify-between text-xs text-gray-400">
                      <div className="flex items-center gap-3">
                        <span>{relatedPost.readTime} min</span>
                        <span>{relatedPost.date}</span>
                      </div>
                      <span className="text-blue-400">Read →</span>
                    </div>
                  </article>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </div>
  )
}