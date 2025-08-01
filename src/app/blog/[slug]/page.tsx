import Link from 'next/link'
import { notFound } from 'next/navigation'
import BlogComingSoon from './BlogComingSoon'

// List of blog posts that have actual pages
const existingPosts = [
  '500k-followers',
  'ai-content-income',
  'digital-product-success-story',
  'digital-products-that-sell',
  'instagram-growth-2025',
  'instagram-ignited-success-stories',
  'whop-clipping'
]

export default async function BlogPostPage({ 
  params 
}: { 
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  // Ensure we have a slug
  if (!slug) {
    notFound()
  }

  // If this is one of our existing posts, redirect to the actual page
  if (existingPosts.includes(slug)) {
    // This shouldn't happen as Next.js should route to the actual page first
    // But just in case, we'll handle it
    notFound()
  }

  // For all other slugs, show a coming soon page
  return <BlogComingSoon />
}
