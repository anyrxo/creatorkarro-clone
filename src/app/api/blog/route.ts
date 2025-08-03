import { NextResponse } from 'next/server'
import { getAllBlogPosts, getAllNewsArticles } from '@/utils/getBlogPosts'

export async function GET() {
  try {
    const [blogPosts, newsArticles] = await Promise.all([
      getAllBlogPosts(),
      getAllNewsArticles()
    ])
    
    return NextResponse.json({
      blogPosts,
      newsArticles,
      total: blogPosts.length + newsArticles.length,
      blogCount: blogPosts.length,
      newsCount: newsArticles.length
    })
  } catch (error) {
    console.error('Error fetching blog data:', error)
    return NextResponse.json({ error: 'Failed to fetch blog data' }, { status: 500 })
  }
}