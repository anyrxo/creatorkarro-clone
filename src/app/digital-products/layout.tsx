import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Digital Products That Sell 2025 - Complete Course Ideas & Pricing Psychology | How To Create Profitable Digital Products Empire | 50+ Proven Ideas Making $10K+/Month',
  description: 'Learn which digital products actually sell in 2025. Complete course with 50+ proven product ideas, pricing strategies, creation frameworks, and empire-building systems. Join 1,500+ successful students.',
  keywords: [
    'digital products',
    'ai courses',
    'instagram growth course',
    'comfyui workflows',
    'n8n automation course',
    'ai influencers course',
    'digital product empire',
    'online courses',
    'automation training',
    'social media courses',
    'ai training',
    'business courses',
    'digital products marketplace',
    'premium courses'
  ],
  openGraph: {
    title: 'Digital Products That Sell 2025 - Complete Course Ideas & Pricing Psychology | 50+ Proven Ideas Making $10K+/Month',
    description: 'Learn which digital products actually sell in 2025. Complete course with 50+ proven product ideas, pricing strategies, and empire-building systems.',
    type: 'website',
    images: [
      {
        url: 'https://iimagined.ai/digital-products-og.png',
        width: 1200,
        height: 630,
        alt: 'Digital Products Empire - Premium AI & Instagram Courses'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Products That Sell 2025 - Complete Course Ideas & Pricing Psychology | 50+ Proven Ideas',
    description: 'Learn which digital products actually sell in 2025. Complete course with 50+ proven product ideas and pricing strategies.',
    creator: '@anyro'
  }
}

export default function DigitalProductsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}