import React from 'react'
import { generateBlogPostSchema } from '@/lib/blog-schema'
import { redirect } from 'next/navigation'

// ⚔ ORYANA'S AUTHORITY CONSOLIDATION
// Instagram mistakes/lessons content consolidated into our comprehensive growth guide
// Eliminates thin content while strengthening our Instagram authority pillar

export const metadata = {
  title: "Instagram Mistakes & Lessons - Complete Growth Guide 2025",
  description: "This content has been consolidated into our comprehensive Instagram growth guide featuring common mistakes, lessons learned, and advanced strategies for...",
  robots: {
    index: false,
    follow: true,
    noarchive: true
  }
}

const schema = generateBlogPostSchema({
  title: metadata.title,
  description: metadata.description,
  slug: "instagram-mistakes-lessons",
  publishedTime: metadata.openGraph.publishedTime,
  modifiedTime: metadata.openGraph.modifiedTime,
  category: metadata.category || "Blog",
  keywords: metadata.keywords || [],
  image: metadata.openGraph.images[0].url
})


// REDIRECT TO INSTAGRAM GROWTH AUTHORITY PILLAR
export default function InstagramMistakesLessonsRedirect() {
  // Redirect to comprehensive Instagram growth guide
  redirect('/blog/instagram-growth-2025')
  
  // This component will never render due to redirect
  return null
}