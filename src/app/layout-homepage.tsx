import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'IImagined.ai - Master Claude 4 AI, Gemini 2 Pro & Instagram Growth | 127K+ Students Creating $10K+/Month',
  description: 'Learn cutting-edge AI automation with Claude 4, Gemini 2 Pro, DeepSeek R1, and proven Instagram growth strategies. Join 127K+ creators building profitable businesses with advanced AI tools and social media mastery.',
  keywords: [
    // AI Models (Highest Priority)
    'claude 4 ai',
    'claude 4 automation',
    'claude 4 sonnet',
    'gemini 2 pro',
    'gemini 2 pro flash',
    'deepseek r1',
    'deepseek r1 browser use',
    'gpt-4.1',
    'llama 4',
    'qwen 3',
    
    // AI Automation
    'ai automation',
    'ai agents',
    'ai workflow automation',
    'n8n automation',
    'ai business automation',
    'ai content creation',
    'ai influencers',
    'multimodal ai',
    'ai models comparison',
    
    // Social Media Growth
    'instagram growth',
    'instagram growth 2025',
    'instagram automation',
    'instagram reels strategy',
    'tiktok growth hacks',
    'youtube automation',
    'social media marketing',
    'viral content strategy',
    'faceless youtube',
    
    // Digital Business
    'digital products',
    'passive income',
    'online business',
    'make money online',
    'digital marketing',
    'content strategy',
    'email marketing',
    'comfyui workflows',
    'ai image generation',
    
    // Brand & Personal
    'iimagined',
    'anyro',
    'ai course',
    'instagram course',
    'automation course'
  ],
  openGraph: {
    title: 'IImagined.ai - Master Claude 4 AI & Instagram Growth | 127K+ Students',
    description: 'Learn Claude 4, Gemini 2 Pro, and Instagram growth strategies. Join 127K+ creators building $10K+/month businesses with AI automation.',
    type: 'website',
    url: 'https://iimagined.ai',
    siteName: 'IImagined.ai',
    images: [
      {
        url: 'https://iimagined.ai/og-image.png',
        width: 1200,
        height: 630,
        alt: 'IImagined.ai - Master AI Automation & Instagram Growth'
      }
    ],
    locale: 'en_US'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IImagined.ai - Master Claude 4 AI & Instagram Growth',
    description: 'Learn cutting-edge AI automation and proven Instagram strategies. Join 127K+ successful creators.',
    creator: '@anyro',
    site: '@anyro'
  },
  alternates: {
    canonical: 'https://iimagined.ai'
  },
  other: {
    'theme-color': '#0f172a',
    'color-scheme': 'dark light',
    'twitter:label1': 'Students',
    'twitter:data1': '127,000+',
    'twitter:label2': 'Success Rate',
    'twitter:data2': '89%'
  }
}

export default function HomepageLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}