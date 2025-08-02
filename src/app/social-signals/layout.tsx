import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Social Signals Automation - Boost SEO with Social Media Engagement | IImagined.ai',
  description: 'Automated social signals system to boost SEO rankings through social media engagement. Generate likes, shares, comments, and social proof across all platforms.',
  keywords: [
    'social signals',
    'social seo',
    'social media automation',
    'social engagement boost',
    'social proof automation',
    'social signals seo',
    'automated social media',
    'social media seo',
    'social signals generator',
    'social engagement automation',
    'social media marketing automation',
    'social proof system'
  ],
  openGraph: {
    title: 'Social Signals Automation - Boost SEO with Social Engagement',
    description: 'Automated system to generate social signals and boost SEO rankings through social media engagement.',
    type: 'website',
    images: [
      {
        url: 'https://iimagined.ai/social-signals-og.png',
        width: 1200,
        height: 630,
        alt: 'Social Signals Automation - SEO Social Engagement'
      }
    ]
  }
}

export default function SocialSignalsLayout({ children }: { children: React.ReactNode }) {
  return children
}