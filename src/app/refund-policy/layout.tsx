import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Refund Policy - 60-Day Money-Back Guarantee | IImagined.ai',
  description: 'IImagined.ai refund policy with 60-day money-back guarantee on all AI automation and digital marketing courses. Fair, transparent refund process.',
  keywords: [
    'refund policy',
    'money back guarantee',
    '60 day guarantee',
    'course refund',
    'return policy',
    'satisfaction guarantee',
    'refund process',
    'cancellation policy',
    'course guarantee',
    'customer protection'
  ],
  openGraph: {
    title: 'Refund Policy - 60-Day Money-Back Guarantee | IImagined.ai',
    description: 'Transparent refund policy with 30-day money-back guarantee on all courses. Customer satisfaction guaranteed.',
    type: 'website',
    images: [
      {
        url: 'https://iimagined.ai/refund-policy-og.png',
        width: 1200,
        height: 630,
        alt: 'Refund Policy - 60-Day Guarantee'
      }
    ]
  }
}

export default function RefundPolicyLayout({ children }: { children: React.ReactNode }) {
  return children
}