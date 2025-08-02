import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Web Scraping Automation: Build Data Mining Systems That Generate $45K+/Month | IImagined.ai',
  description: 'Master web scraping automation with Python, APIs, and anti-detection techniques. Build data mining systems that extract valuable information at scale.',
  keywords: [
    'web scraping automation',
    'automated web scraping',
    'web scraping tools',
    'data mining automation',
    'web scraping python',
    'scraping automation systems',
    'web data extraction',
    'automated data collection',
    'web scraping bots',
    'scraping api automation',
    'web scraping scaling',
    'data harvesting automation',
    'web scraping business',
    'automated web crawling'
  ],
  openGraph: {
    title: 'Web Scraping Automation: Build Data Mining Systems Generating $45K+/Month',
    description: 'Advanced web scraping automation with Python and anti-detection techniques for valuable data extraction at scale.',
    type: 'article',
    publishedTime: '2024-10-30T10:00:00.000Z',
    authors: ['Anyro'],
    tags: ['Web Scraping', 'Data Mining', 'Automation', 'Python', 'Data Extraction'],
    images: [
      {
        url: 'https://iimagined.ai/blog/web-scraping-automation/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Web Scraping Automation - Data Mining Systems'
      }
    ]
  }
}

export default function WebScrapingLayout({ children }: { children: React.ReactNode }) {
  return children
}