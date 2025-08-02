import { Metadata } from 'next'
import { siteConfig } from '@/config/seo'

export const metadata: Metadata = {
  title: 'AI Influencers Course - Create Virtual Influencers That Make $10K+/Month | IImagined.ai',
  description: 'Master AI influencer creation with Claude 4, Midjourney, and ComfyUI. Build virtual personalities that generate passive income through automated content creation and brand partnerships.',
  keywords: [
    'ai influencers',
    'virtual influencers',
    'ai character creation',
    'ai content creation',
    'claude 4 ai',
    'midjourney ai',
    'comfyui workflows',
    'ai automation',
    'digital personas',
    'ai marketing',
    'virtual personalities',
    'ai generated content',
    'artificial intelligence course',
    'ai business model',
    'automated content creation'
  ],
  openGraph: {
    title: 'AI Influencers Course - Create Virtual Influencers That Make $10K+/Month',
    description: 'Master AI influencer creation with Claude 4, Midjourney, and ComfyUI. Build virtual personalities that generate passive income.',
    url: `${siteConfig.url}/ai-influencers`,
    siteName: siteConfig.name,
    images: [
      {
        url: `${siteConfig.url}/ai-influencers-og.png`,
        width: 1200,
        height: 630,
        alt: 'AI Influencers Course by IImagined.ai',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Influencers Course - Create Virtual Influencers That Make $10K+/Month',
    description: 'Master AI influencer creation with Claude 4, Midjourney, and ComfyUI.',
    creator: '@anyro',
    images: [`${siteConfig.url}/ai-influencers-og.png`],
  },
  alternates: {
    canonical: `${siteConfig.url}/ai-influencers`,
  },
}

export default function AIInfluencersLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}