import React from 'react'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { allBlogPosts } from '@/data/blog-posts'
import { ArrowLeft, Calendar, Clock, Tag, Share, BookOpen } from 'lucide-react'

interface BlogPostPageProps {
  params: Promise<{ slug: string }>
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  
  // Find the blog post
  const post = allBlogPosts.find(post => post.slug === slug)
  
  if (!post) {
    notFound()
  }


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
          <div className="prose prose-invert prose-lg max-w-none">
            
            {/* Introduction */}
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
                  <div className="text-purple-400 font-semibold mb-2"> Implementation</div>
                  <div className="text-gray-300 text-sm">Step-by-step implementation guide</div>
                </div>
                <div className="bg-gray-900 rounded-lg p-4">
                  <div className="text-green-400 font-semibold mb-2"> Real Examples</div>
                  <div className="text-gray-300 text-sm">Case studies and practical examples</div>
                </div>
                <div className="bg-gray-900 rounded-lg p-4">
                  <div className="text-yellow-400 font-semibold mb-2"> Pro Tips</div>
                  <div className="text-gray-300 text-sm">Advanced techniques and optimizations</div>
                </div>
              </div>
            </div>

            {/* Main content sections */}
            <h2 className="text-3xl font-bold text-white mb-6">Getting Started</h2>
            <p className="text-gray-300 mb-8 leading-relaxed">
              {post.title} has become increasingly important in today's digital landscape. Whether you're a business owner, 
              content creator, or developer, understanding how to effectively implement and leverage these strategies can 
              significantly impact your success.
            </p>

            <div className="bg-blue-600/10 border-l-4 border-blue-600 rounded-r-lg p-6 mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold"></span>
                </div>
                <h3 className="text-blue-300 font-semibold">Pro Tip</h3>
              </div>
              <p className="text-gray-300">
                Before diving deep into implementation, make sure you have a clear understanding of your goals 
                and target audience. This will help you choose the right approach and avoid common pitfalls.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-white mb-6">Key Strategies</h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                <h3 className="text-xl font-bold text-white mb-4">Strategy 1: Foundation Building</h3>
                <p className="text-gray-300 mb-4">
                  Start with a solid foundation by understanding the core principles and establishing 
                  proper processes from the beginning.
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li>• Research your target market</li>
                  <li>• Define clear objectives</li>
                  <li>• Set up tracking and analytics</li>
                  <li>• Create a content calendar</li>
                </ul>
              </div>

              <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                <h3 className="text-xl font-bold text-white mb-4">Strategy 2: Implementation</h3>
                <p className="text-gray-300 mb-4">
                  Focus on systematic implementation with continuous testing and optimization 
                  to achieve the best results.
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li>• Start with small tests</li>
                  <li>• Monitor key metrics</li>
                  <li>• Iterate and improve</li>
                  <li>• Scale successful approaches</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-white mb-6">Best Practices</h2>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Based on extensive research and real-world implementation, here are the most effective practices 
              for {post.title.toLowerCase()}:
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4 p-4 bg-gray-800/30 rounded-lg">
                <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center mt-1">
                  <span className="text-white text-xs">✓</span>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">Consistency is Key</h4>
                  <p className="text-gray-300">Maintain consistent effort and messaging across all your initiatives.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-gray-800/30 rounded-lg">
                <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mt-1">
                  <span className="text-white text-xs">✓</span>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">Data-Driven Decisions</h4>
                  <p className="text-gray-300">Use analytics and metrics to guide your strategy and optimization efforts.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-gray-800/30 rounded-lg">
                <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center mt-1">
                  <span className="text-white text-xs">✓</span>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">Continuous Learning</h4>
                  <p className="text-gray-300">Stay updated with the latest trends and best practices in your field.</p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-white mb-6">Common Mistakes to Avoid</h2>
            
            <div className="bg-red-600/10 border border-red-600/20 rounded-xl p-6 mb-8">
              <h3 className="text-red-300 font-semibold mb-4">⚠ Warning: Avoid These Pitfalls</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="text-red-400">×</span>
                  <span>Trying to do everything at once without proper planning</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400">×</span>
                  <span>Ignoring your target audience's preferences and needs</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400">×</span>
                  <span>Not tracking and measuring your results properly</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-400">×</span>
                  <span>Giving up too early before seeing results</span>
                </li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-white mb-6">Next Steps</h2>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Now that you understand the fundamentals of {post.title.toLowerCase()}, it's time to put these 
              strategies into action. Start with the basics and gradually implement more advanced techniques 
              as you gain experience and confidence.
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

// VERCEL OPTIMIZATION: Generate static params for only the most important posts
// The rest will be generated on-demand (ISR)
export async function generateStaticParams() {
  // Only pre-generate the first 50 most important/featured posts to avoid routes-manifest.json error
  const featuredPosts = allBlogPosts
    .filter(post => post.featured)
    .slice(0, 20); // Featured posts first
    
  const recentPosts = allBlogPosts
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 30); // Most recent posts
    
  // Combine and deduplicate
  const importantPosts = [...featuredPosts, ...recentPosts]
    .filter((post, index, arr) => arr.findIndex(p => p.slug === post.slug) === index)
    .slice(0, 50); // Maximum 50 pre-generated routes
  
  console.log(`🚀 Pre-generating ${importantPosts.length} most important blog posts for Vercel`);
  
  return importantPosts.map((post) => ({
    slug: post.slug,
  }))
}

// Force dynamic rendering for non-pre-generated posts
export const dynamic = 'force-dynamic'
export const dynamicParams = true // Enable ISR for other posts

// Generate metadata for each blog post
export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = allBlogPosts.find(post => post.slug === slug)
  
  if (!post) {
    return {
      title: 'Blog Post Not Found',
      description: 'The requested blog post could not be found.'
    }
  }

  return {
    title: `${post.title} | IImagined`,
    description: post.description,
    keywords: post.tags,
    authors: [{ name: "anyro", url: "https://iimagined.ai" }],
    creator: "anyro",
    publisher: "IImagined",
    category: post.category,
    openGraph: {
      title: post.title,
      description: post.description,
      url: `https://iimagined.ai/blog/${post.slug}`,
      siteName: "IImagined",
      type: 'article',
      publishedTime: post.date,
      modifiedTime: new Date().toISOString(),
      authors: ["anyro"],
      tags: post.tags,
      images: [{
        url: `https://iimagined.ai/images/${post.slug}-og.jpg`,
        width: 1200,
        height: 630,
        alt: post.title,
        type: "image/jpeg"
      }],
      locale: "en_US"
    },
    twitter: {
      card: 'summary_large_image',
      site: '@anyrxo',
      creator: '@anyrxo',
      title: post.title,
      description: post.description,
      images: [{
        url: `https://iimagined.ai/images/${post.slug}-og.jpg`,
        alt: post.title
      }]
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1
      }
    },
    alternates: {
      canonical: `https://iimagined.ai/blog/${post.slug}`
    }
  }
}