import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cloud Automation Infrastructure: Build Scalable Systems That Handle Millions of Users | IImagined.ai',
  description: 'Master cloud automation with AWS, Azure, and GCP. Build auto-scaling infrastructure, serverless systems, and cloud-native applications that scale infinitely.',
  keywords: [
    'cloud automation',
    'aws automation',
    'azure automation',
    'gcp automation',
    'cloud infrastructure automation',
    'serverless automation',
    'auto scaling automation',
    'cloud deployment automation',
    'infrastructure as code',
    'cloud orchestration',
    'automated cloud provisioning',
    'cloud resource automation',
    'cloud monitoring automation',
    'cloud cost optimization automation'
  ],
  openGraph: {
    title: 'Cloud Automation Infrastructure: Build Scalable Systems Handling Millions of Users',
    description: 'Advanced cloud automation with AWS, Azure, and GCP for building infinitely scalable infrastructure.',
    type: 'article',
    publishedTime: '2024-05-15T10:00:00.000Z',
    authors: ['Anyro'],
    tags: ['Cloud Computing', 'Infrastructure Automation', 'AWS', 'Azure', 'Scalable Systems'],
    images: [
      {
        url: 'https://iimagined.ai/blog/cloud-automation-infrastructure/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Cloud Automation Infrastructure - Scalable Cloud Systems'
      }
    ]
  }
}

export default function CloudAutomationLayout({ children }: { children: React.ReactNode }) {
  return children
}