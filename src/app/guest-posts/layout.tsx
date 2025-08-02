import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Guest Post Automation System - Scale Your Link Building Campaign | IImagined.ai',
  description: 'Automated guest post system for scalable link building. Find prospects, automate outreach, and secure high-quality backlinks from authoritative websites.',
  keywords: [
    'guest post automation',
    'link building automation',
    'guest posting system',
    'automated outreach',
    'backlink building',
    'guest post outreach',
    'link building campaign',
    'guest blogging automation',
    'seo outreach',
    'automated link building',
    'guest post prospects',
    'link building tools'
  ],
  openGraph: {
    title: 'Guest Post Automation System - Scale Link Building',
    description: 'Automate your guest posting and link building campaigns with advanced outreach systems.',
    type: 'website',
    images: [
      {
        url: 'https://iimagined.ai/guest-posts-og.png',
        width: 1200,
        height: 630,
        alt: 'Guest Post Automation System - Link Building Tools'
      }
    ]
  }
}

export default function GuestPostsLayout({ children }: { children: React.ReactNode }) {
  return children
}