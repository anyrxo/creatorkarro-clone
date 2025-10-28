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



// INSTANT 301 REDIRECT TO AUTHORITY PILLAR
export default function VoiceAIAutomationRedirect() {
  // Server-side redirect to authority page
  redirect('/blog/ai-automation-guide')
  
  // This component will never render due to redirect
  return null
}