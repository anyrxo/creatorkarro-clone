import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Database Automation Systems: Automate Data Management & Reduce Errors by 95% | IImagined.ai',
  description: 'Master database automation with backup, migration, optimization, and monitoring systems. Automate database operations and ensure data reliability at scale.',
  keywords: [
    'database automation',
    'automated database management',
    'database backup automation',
    'database migration automation',
    'sql automation',
    'database monitoring automation',
    'automated database optimization',
    'database maintenance automation',
    'data pipeline automation',
    'database scaling automation',
    'automated database security',
    'database performance automation',
    'automated data archiving',
    'database automation tools'
  ],
  openGraph: {
    title: 'Database Automation Systems: Automate Data Management & Reduce Errors by 95%',
    description: 'Advanced database automation for backup, migration, optimization, and monitoring at enterprise scale.',
    type: 'article',
    publishedTime: '2024-06-10T10:00:00.000Z',
    authors: ['Anyro'],
    tags: ['Database Management', 'Data Automation', 'Database Administration', 'Data Pipeline', 'Enterprise Systems'],
    images: [
      {
        url: 'https://iimagined.ai/blog/database-automation-systems/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Database Automation Systems - Automated Data Management'
      }
    ]
  }
}

export default function DatabaseAutomationLayout({ children }: { children: React.ReactNode }) {
  return children
}