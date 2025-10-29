import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'SEO Automation Tools: Build Systems That Rank #1 & Generate $80K+/Month Traffic | IImagined.ai',
  description: 'Master SEO automation with advanced tools and strategies. Learn keyword research automation, content optimization, and link building systems that dominate Google.',
  keywords: [
    'seo automation tools',
    'seo automation software',
    'automated seo systems',
    'seo workflow automation',
    'seo content automation',
    'keyword research automation',
    'seo link building automation',
    'seo ranking automation',
    'automated seo optimization',
    'seo automation strategies',
    'seo tools automation',
    'seo process automation',
    'automated seo campaigns',
    'seo scaling automation'
  ],
  openGraph: {
    title: 'SEO Automation Tools: Systems That Rank #1 & Generate $80K+/Month',
    description: 'Advanced SEO automation tools and strategies for keyword research, content optimization, and massive traffic generation.',
    type: 'article',
    publishedTime: '2024-11-15T10:00:00.000Z',
    authors: ['Anyro'],
    tags: ['SEO Automation', 'SEO Tools', 'Search Engine Optimization', 'Traffic Generation', 'SEO Systems'],
    images: [
      {
        url: 'https://iimagined.ai/blog/seo-automation-tools/og-image.png',
        width: 1200,
        height: 630,
        alt: 'SEO Automation Tools - Ranking & Traffic Systems'
      }
    ]
  }
}

export default function SEOAutomationLayout({ children }: { children: React.ReactNode }) {
  return children
}