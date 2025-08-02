import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Content Cluster System - Topical Authority & Semantic SEO | IImagined.ai',
  description: 'Advanced content cluster system for building topical authority and semantic SEO. Create interconnected content networks that dominate search results and establish expertise.',
  keywords: [
    'content clusters',
    'topical authority',
    'semantic seo',
    'content hub strategy',
    'pillar content',
    'topic clusters',
    'content networking',
    'internal linking strategy',
    'content silo',
    'semantic content',
    'authority building',
    'content architecture'
  ],
  openGraph: {
    title: 'Content Cluster System - Build Topical Authority',
    description: 'Advanced content clustering for topical authority and semantic SEO dominance.',
    type: 'website',
    images: [
      {
        url: 'https://iimagined.ai/clusters-og.png',
        width: 1200,
        height: 630,
        alt: 'Content Cluster System - Topical Authority Tools'
      }
    ]
  }
}

export default function ClustersLayout({ children }: { children: React.ReactNode }) {
  return children
}