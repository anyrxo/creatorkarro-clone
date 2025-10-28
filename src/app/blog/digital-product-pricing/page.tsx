import React from 'react'
import { generateBlogPostSchema } from '@/lib/blog-schema'
import { redirect } from 'next/navigation'

// ⚔ ORYANA'S PRICING STRATEGY HIJACK
// "Digital product pricing" = Commercial intent wanting optimal pricing strategies
// Redirect to our $497 course that includes comprehensive pricing psychology + strategies

export const metadata = {
  title: "Digital Product Pricing Strategies - Complete Psychology",
  description: "Master digital product pricing psychology that converts. Complete course with proven strategies, psychology techniques & optimization frameworks.",
  robots: {
    index: false,
    follow: true,
    noarchive: true
  }
}

const schema = generateBlogPostSchema({
  title: metadata.title,
  description: metadata.description,
  slug: "digital-product-pricing",
  publishedTime: metadata.openGraph.publishedTime,
  modifiedTime: metadata.openGraph.modifiedTime,
  category: metadata.category || "Blog",
  keywords: metadata.keywords || [],
  image: metadata.openGraph.images[0].url
})


// INSTANT REDIRECT TO $497 DIGITAL PRODUCTS COURSE
export default function DigitalProductPricingRedirect() {
  // Pricing strategy traffic → premium course conversion
  redirect('/digital-products')
  
  // This component will never render due to redirect
  return null
}