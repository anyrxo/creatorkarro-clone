import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Link Wheel Construction System - Advanced Link Building Network | IImagined.ai',
  description: 'Build powerful link wheels and tiered link networks for maximum SEO impact. Advanced link wheel construction with automated management and tracking systems.',
  keywords: [
    'link wheel',
    'tiered link building',
    'link network',
    'link wheel construction',
    'advanced link building',
    'link building network',
    'seo link wheel',
    'link pyramid',
    'backlink network',
    'link building strategy',
    'network link building',
    'link wheel system'
  ],
  openGraph: {
    title: 'Link Wheel Construction System - Advanced Link Networks',
    description: 'Build powerful link wheels and tiered networks for maximum SEO impact and ranking power.',
    type: 'website',
    images: [
      {
        url: 'https://iimagined.ai/link-wheel-og.png',
        width: 1200,
        height: 630,
        alt: 'Link Wheel Construction System - Advanced Networks'
      }
    ]
  }
}

export default function LinkWheelLayout({ children }: { children: React.ReactNode }) {
  return children
}