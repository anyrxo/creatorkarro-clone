import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'SEO Defense System - Protect Your Rankings from Negative SEO Attacks | IImagined.ai',
  description: 'Advanced SEO defense system to protect your website from negative SEO attacks, toxic backlinks, and competitor sabotage. Real-time monitoring and automated protection.',
  keywords: [
    'seo defense',
    'negative seo protection',
    'toxic backlink removal',
    'seo attack protection',
    'website protection',
    'ranking defense',
    'competitor sabotage protection',
    'seo monitoring',
    'link disavow',
    'seo security',
    'ranking protection system',
    'negative seo defense'
  ],
  openGraph: {
    title: 'SEO Defense System - Protect Rankings from Attacks',
    description: 'Advanced protection system against negative SEO attacks and toxic backlinks.',
    type: 'website',
    images: [
      {
        url: 'https://iimagined.ai/defense-og.png',
        width: 1200,
        height: 630,
        alt: 'SEO Defense System - Ranking Protection'
      }
    ]
  }
}

export default function DefenseLayout({ children }: { children: React.ReactNode }) {
  return children
}