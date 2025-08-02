import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Competitor Backlink Analysis & Replication System | IImagined.ai',
  description: 'Advanced competitor backlink analysis and replication system. Discover your competitors\' link strategies, replicate their backlinks, and dominate your niche with superior link profiles.',
  keywords: [
    'competitor backlink analysis',
    'backlink replication',
    'competitor seo analysis',
    'link building strategy',
    'backlink research',
    'competitor research',
    'link profile analysis',
    'backlink gap analysis',
    'competitor link building',
    'seo competitor analysis',
    'backlink intelligence',
    'link building automation'
  ],
  openGraph: {
    title: 'Competitor Backlink Analysis & Replication System',
    description: 'Discover and replicate your competitors\' backlink strategies with advanced analysis tools.',
    type: 'website',
    images: [
      {
        url: 'https://iimagined.ai/competitor-backlinks-og.png',
        width: 1200,
        height: 630,
        alt: 'Competitor Backlink Analysis Tools'
      }
    ]
  }
}

export default function CompetitorBacklinksLayout({ children }: { children: React.ReactNode }) {
  return children
}