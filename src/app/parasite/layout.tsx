import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Parasite SEO System - Leverage High Authority Platforms for Rankings | IImagined.ai',
  description: 'Advanced parasite SEO system to leverage high authority platforms for instant rankings. Exploit Medium, LinkedIn, Reddit, and other platforms for rapid SEO gains.',
  keywords: [
    'parasite seo',
    'high authority platforms',
    'parasite seo strategy',
    'platform exploitation',
    'medium seo',
    'linkedin seo',
    'reddit seo',
    'quora seo',
    'web 2.0 seo',
    'authority platform seo',
    'parasite link building',
    'platform ranking system'
  ],
  openGraph: {
    title: 'Parasite SEO System - Leverage High Authority Platforms',
    description: 'Exploit high authority platforms like Medium, LinkedIn, and Reddit for instant SEO rankings.',
    type: 'website',
    images: [
      {
        url: 'https://iimagined.ai/parasite-og.png',
        width: 1200,
        height: 630,
        alt: 'Parasite SEO System - Platform Exploitation Tools'
      }
    ]
  }
}

export default function ParasiteLayout({ children }: { children: React.ReactNode }) {
  return children
}