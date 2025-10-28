import React from 'react'
import { generateBlogPostSchema } from '@/lib/blog-schema'
import { redirect } from 'next/navigation'

// ⚔ ORYANA'S 301 REDIRECT - VOICE AI AUTOMATION CONSOLIDATION
// Redirects voice AI automation traffic to our comprehensive guide
// Voice AI is covered as part of our complete automation strategy

export const metadata = {
  title: "Voice AI Automation Guide - Complete Implementation",
  description: "This content has been consolidated into our comprehensive AI automation guide which includes advanced voice AI automation strategies and implementation...",
  robots: {
    index: false,
    follow: true,
    noarchive: true
  }
}

const schema = generateBlogPostSchema({
  title: metadata.title,
  description: metadata.description,
  slug: "voice-ai-automation",
  publishedTime: metadata.openGraph.publishedTime,
  modifiedTime: metadata.openGraph.modifiedTime,
  category: metadata.category || "Blog",
  keywords: metadata.keywords || [],
  image: metadata.openGraph.images[0].url
})


// INSTANT 301 REDIRECT TO AUTHORITY PILLAR
export default function VoiceAIAutomationRedirect() {
  // Server-side redirect to authority page
  redirect('/blog/ai-automation-guide')
  
  // This component will never render due to redirect
  return null
}