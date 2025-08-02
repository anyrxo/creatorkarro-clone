import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Accounting Automation Tools: Streamline Financial Processes & Save 100+ Hours/Month | IImagined.ai',
  description: 'Master accounting automation with invoicing, expense tracking, and financial reporting systems. Automate bookkeeping tasks and improve financial accuracy.',
  keywords: [
    'accounting automation tools',
    'automated accounting software',
    'bookkeeping automation',
    'financial automation systems',
    'automated invoicing',
    'expense tracking automation',
    'accounting process automation',
    'automated financial reporting',
    'payroll automation',
    'tax automation software',
    'automated reconciliation',
    'financial workflow automation',
    'accounting software automation',
    'automated bookkeeping'
  ],
  openGraph: {
    title: 'Accounting Automation Tools: Streamline Financial Processes & Save 100+ Hours/Month',
    description: 'Advanced accounting automation tools for invoicing, expense tracking, and financial reporting automation.',
    type: 'article',
    publishedTime: '2024-07-15T10:00:00.000Z',
    authors: ['Anyro'],
    tags: ['Accounting Automation', 'Financial Software', 'Bookkeeping', 'Business Finance', 'Process Automation'],
    images: [
      {
        url: 'https://iimagined.ai/blog/accounting-automation-tools/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Accounting Automation Tools - Financial Process Automation'
      }
    ]
  }
}

export default function AccountingAutomationLayout({ children }: { children: React.ReactNode }) {
  return children
}