import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'PBN Management System - Private Blog Network Builder | IImagined.ai',
  description: 'Professional PBN management system for building and maintaining private blog networks. Advanced domain sourcing, content automation, and link deployment strategies.',
  keywords: [
    'pbn management',
    'private blog network',
    'pbn builder',
    'expired domain finder',
    'pbn hosting',
    'link network',
    'domain authority building',
    'pbn automation',
    'backlink network',
    'seo network',
    'link building network',
    'authority sites'
  ],
  openGraph: {
    title: 'PBN Management System - Private Blog Network Builder',
    description: 'Professional system for building and managing private blog networks for advanced SEO.',
    type: 'website',
    images: [
      {
        url: 'https://iimagined.ai/pbn-og.png',
        width: 1200,
        height: 630,
        alt: 'PBN Management System - Network Building Tools'
      }
    ]
  }
}

export default function PBNLayout({ children }: { children: React.ReactNode }) {
  return children
}