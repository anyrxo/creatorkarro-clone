import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'LinkedIn Growth Strategies 2025: Build Authority & Generate Leads | IImagined.ai',
  description: 'Master LinkedIn growth with proven strategies for 2025. Build thought leadership, generate quality leads, and grow your professional network exponentially.',
  keywords: [
    'linkedin growth strategies',
    'linkedin marketing 2025',
    'how to grow on linkedin',
    'linkedin lead generation',
    'linkedin content strategy',
    'linkedin algorithm 2025',
    'linkedin personal branding',
    'linkedin networking tips',
    'linkedin engagement strategy',
    'linkedin business growth',
    'linkedin thought leadership',
    'linkedin automation',
    'linkedin prospecting',
    'linkedin sales strategy'
  ],
  openGraph: {
    title: 'LinkedIn Growth Strategies 2025: Build Authority & Generate Leads',
    description: 'Master LinkedIn growth with proven strategies to build authority and generate high-quality leads in 2025.',
    type: 'article',
    publishedTime: '2024-12-05T10:00:00.000Z',
    authors: ['Anyro'],
    tags: ['LinkedIn Growth', 'Lead Generation', 'Professional Networking', 'B2B Marketing', 'Personal Branding'],
    images: [
      {
        url: 'https://iimagined.ai/blog/linkedin-growth-strategies-2025/og-image.png',
        width: 1200,
        height: 630,
        alt: 'LinkedIn Growth Strategies 2025'
      }
    ]
  }
}

export default function LinkedInGrowthLayout({ children }: { children: React.ReactNode }) {
  return children
}