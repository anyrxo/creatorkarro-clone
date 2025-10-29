import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Data Entry Automation: Eliminate Manual Data Entry & Save 200+ Hours/Month | IImagined.ai',
  description: 'Master data entry automation with OCR, form processing, and database integration. Eliminate manual data entry tasks and improve accuracy with automation.',
  keywords: [
    'data entry automation',
    'automated data entry',
    'data processing automation',
    'ocr automation',
    'form processing automation',
    'data extraction automation',
    'automated data capture',
    'data input automation',
    'document processing automation',
    'automated data migration',
    'data entry software',
    'automated data collection',
    'data automation tools',
    'manual data entry elimination'
  ],
  openGraph: {
    title: 'Data Entry Automation: Eliminate Manual Data Entry & Save 200+ Hours/Month',
    description: 'Advanced data entry automation with OCR and form processing for eliminating manual data tasks.',
    type: 'article',
    publishedTime: '2024-07-05T10:00:00.000Z',
    authors: ['Anyro'],
    tags: ['Data Entry', 'Process Automation', 'OCR Technology', 'Data Processing', 'Business Efficiency'],
    images: [
      {
        url: 'https://iimagined.ai/blog/data-entry-automation/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Data Entry Automation - Automated Data Processing Systems'
      }
    ]
  }
}

export default function DataEntryAutomationLayout({ children }: { children: React.ReactNode }) {
  return children
}