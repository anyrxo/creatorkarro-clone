import React from 'react'
import { generateBlogPostSchema } from '@/lib/blog-schema'
import { redirect } from 'next/navigation'

// ⚔ ORYANA'S HIGH-INTENT TRAFFIC HIJACK
// "Digital products that sell" = HIGH commercial intent wanting proven products
// Redirect to our $497 course that teaches exactly what sells and how to create it

export const metadata = {
  title: "Digital Products That Sell - Complete Creation Course 2025",
  description: "Discover which digital products actually sell. Complete course reveals exact products generating $10K+/month & step-by-step creation blueprints.",
  robots: {
    index: false,
    follow: true,
    noarchive: true
  }
}

const schema = generateBlogPostSchema({
  title: metadata.title,
  description: metadata.description,
  slug: "digital-products-that-sell",
  publishedTime: metadata.openGraph.publishedTime,
  modifiedTime: metadata.openGraph.modifiedTime,
  category: metadata.category || "Blog",
  keywords: metadata.keywords || [],
  image: metadata.openGraph.images[0].url
})


// INSTANT REDIRECT TO $497 DIGITAL PRODUCTS COURSE
export default function DigitalProductsThatSellRedirect() {
  // Direct traffic to highest-value course for maximum revenue
  redirect('/digital-products')
  
  // This component will never render due to redirect
  return null
}