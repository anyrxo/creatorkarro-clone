import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Automation Agency Scaling: Build Service Business That Generates $500K+/Year | IImagined.ai',
  description: 'Master automation agency scaling with client acquisition, service delivery, and team management. Build agencies that dominate the automation market.',
  keywords: [
    'automation agency',
    'agency scaling automation',
    'automation service business',
    'digital agency automation',
    'automation consulting business',
    'agency automation tools',
    'automation agency growth',
    'service business automation',
    'automation agency revenue',
    'agency client automation',
    'automation business scaling',
    'digital agency scaling',
    'automation agency systems',
    'service delivery automation'
  ],
  openGraph: {
    title: 'Automation Agency Scaling: Build Service Business Generating $500K+/Year',
    description: 'Advanced automation agency scaling strategies for client acquisition, service delivery, and massive revenue growth.',
    type: 'article',
    publishedTime: '2024-09-15T10:00:00.000Z',
    authors: ['Anyro'],
    tags: ['Automation Agency', 'Service Business', 'Agency Scaling', 'Business Growth', 'Digital Services'],
    images: [
      {
        url: 'https://iimagined.ai/blog/automation-agency-scaling/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Automation Agency Scaling - Service Business Growth'
      }
    ]
  }
}

export default function AutomationAgencyLayout({ children }: { children: React.ReactNode }) {
  return children
}