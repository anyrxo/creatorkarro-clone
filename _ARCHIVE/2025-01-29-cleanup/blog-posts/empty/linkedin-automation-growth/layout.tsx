import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'LinkedIn Automation Growth: Scale to 100K+ Connections & $50K+/Month Leads | IImagined.ai',
  description: 'Master LinkedIn automation for lead generation and network growth. Learn connection automation, messaging sequences, and strategies that generate massive B2B leads.',
  keywords: [
    'linkedin automation',
    'linkedin growth automation',
    'linkedin lead generation',
    'linkedin connection automation',
    'linkedin marketing automation',
    'linkedin outreach automation',
    'linkedin messaging automation',
    'linkedin prospecting automation',
    'linkedin sales automation',
    'linkedin network growth',
    'b2b lead generation',
    'linkedin automation tools',
    'linkedin scaling strategies',
    'professional networking automation'
  ],
  openGraph: {
    title: 'LinkedIn Automation Growth: Scale to 100K+ Connections & $50K+ Leads',
    description: 'Advanced LinkedIn automation strategies for massive network growth and B2B lead generation.',
    type: 'article',
    publishedTime: '2025-01-13T10:00:00.000Z',
    authors: ['Anyro'],
    tags: ['LinkedIn Automation', 'Lead Generation', 'B2B Marketing', 'Professional Networking', 'Sales Automation'],
    images: [
      {
        url: 'https://iimagined.ai/blog/linkedin-automation-growth/og-image.png',
        width: 1200,
        height: 630,
        alt: 'LinkedIn Automation Growth - B2B Lead Generation'
      }
    ]
  }
}

export default function LinkedInAutomationLayout({ children }: { children: React.ReactNode }) {
  return children
}