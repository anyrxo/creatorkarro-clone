import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Lead Generation Automation: Build Systems That Generate 10K+ Qualified Leads/Month | IImagined.ai',
  description: 'Master lead generation automation with AI prospecting, email sequences, and qualification systems. Build automated lead generation that scales massively.',
  keywords: [
    'lead generation automation',
    'automated lead generation',
    'lead generation systems',
    'lead automation tools',
    'automated prospecting',
    'lead qualification automation',
    'b2b lead generation automation',
    'lead generation scaling',
    'automated lead capture',
    'lead nurturing automation',
    'lead generation ai',
    'automated sales leads',
    'lead generation workflows',
    'lead automation software'
  ],
  openGraph: {
    title: 'Lead Generation Automation: Generate 10K+ Qualified Leads/Month',
    description: 'Advanced lead generation automation with AI prospecting and qualification systems for massive lead scaling.',
    type: 'article',
    publishedTime: '2024-09-25T10:00:00.000Z',
    authors: ['Anyro'],
    tags: ['Lead Generation', 'Sales Automation', 'B2B Marketing', 'Prospecting', 'Marketing Automation'],
    images: [
      {
        url: 'https://iimagined.ai/blog/lead-generation-automation/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Lead Generation Automation - Qualified Lead Systems'
      }
    ]
  }
}

export default function LeadGenerationLayout({ children }: { children: React.ReactNode }) {
  return children
}