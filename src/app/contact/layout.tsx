import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Anyro - AI Automation Expert & Instagram Growth Strategist | IImagined.ai',
  description: 'Get in touch with Anyro for AI automation consulting, Instagram growth strategy, and custom digital product development. Expert guidance for scaling your business with proven systems.',
  keywords: [
    'contact anyro',
    'ai automation consulting',
    'instagram growth expert',
    'digital product development',
    'business automation consulting',
    'ai strategy consulting',
    'custom automation development',
    'instagram marketing consultant',
    'digital marketing expert',
    'business growth consultant',
    'ai implementation consulting',
    'social media growth expert'
  ],
  openGraph: {
    title: 'Contact Anyro - AI Automation & Instagram Growth Expert',
    description: 'Connect with Anyro for expert AI automation and Instagram growth consulting. Custom solutions for scaling your business.',
    type: 'article',
    images: [
      {
        url: 'https://iimagined.ai/contact-og.png',
        width: 1200,
        height: 630,
        alt: 'Contact Anyro - AI Automation Expert'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Anyro - AI Automation & Instagram Growth Expert',
    description: 'Get expert consulting on AI automation and Instagram growth strategies.',
    creator: '@anyro'
  }
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}