import React from 'react'
import { generateBlogPostSchema } from '@/lib/blog-schema'
import { redirect } from 'next/navigation'

// ⚔ ORYANA'S MONETIZATION TRAFFIC HIJACK
// "Instagram monetization" searchers want to make money → send them to our $297 course
// This is HIGH commercial intent traffic that converts at premium rates

export const metadata = {
  title: "Instagram Monetization Course - Make Money on Instagram 2025",
  description: "Ready to monetize your Instagram? Get the complete system that helped 1,800+ creators build profitable Instagram businesses. Proven monetization...",
  robots: {
    index: false,
    follow: true,
    noarchive: true
  }
}

const schema = generateBlogPostSchema({
  title: metadata.title,
  description: metadata.description,
  slug: "instagram-monetization-guide",
  publishedTime: metadata.openGraph.publishedTime,
  modifiedTime: metadata.openGraph.modifiedTime,
  category: metadata.category || "Blog",
  keywords: metadata.keywords || [],
  image: metadata.openGraph.images[0].url
})


// DIRECT TRAFFIC HIJACK TO INSTAGRAM COURSE
export default function InstagramMonetizationRedirect() {
  // Instant redirect to high-converting money page
  redirect('/instagram-ignited')
  
  // This component will never render due to redirect
  return null
}