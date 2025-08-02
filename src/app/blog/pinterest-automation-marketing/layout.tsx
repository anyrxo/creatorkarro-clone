import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pinterest Automation Marketing: Drive 10M+ Monthly Views & $40K+/Month Traffic | IImagined.ai',
  description: 'Master Pinterest automation with AI pin creation, scheduling systems, and viral growth strategies. Build automated Pinterest systems that drive massive traffic.',
  keywords: [
    'pinterest automation',
    'pinterest marketing automation',
    'pinterest pin automation',
    'pinterest growth automation',
    'pinterest traffic automation',
    'pinterest scheduling automation',
    'automated pinterest marketing',
    'pinterest viral automation',
    'pinterest business automation',
    'pinterest seo automation',
    'pinterest content automation',
    'pinterest scaling strategies',
    'pinterest automation tools',
    'pinterest revenue automation'
  ],
  openGraph: {
    title: 'Pinterest Automation Marketing: Drive 10M+ Monthly Views & $40K+ Traffic',
    description: 'Advanced Pinterest automation with AI pin creation and viral growth strategies for massive traffic generation.',
    type: 'article',
    publishedTime: '2024-10-05T10:00:00.000Z',
    authors: ['Anyro'],
    tags: ['Pinterest Marketing', 'Social Media Automation', 'Traffic Generation', 'Visual Marketing', 'Pinterest Growth'],
    images: [
      {
        url: 'https://iimagined.ai/blog/pinterest-automation-marketing/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Pinterest Automation Marketing - Viral Traffic Systems'
      }
    ]
  }
}

export default function PinterestAutomationLayout({ children }: { children: React.ReactNode }) {
  return children
}