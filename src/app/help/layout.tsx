import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Help Center - IImagined Support & Resources',
  description: 'Get help with IImagined courses. Access FAQs, documentation, community support, and contact our team. Find answers to questions about Instagram growth, AI automation, and digital products.',
  openGraph: {
    title: 'Help Center - IImagined Support & Resources',
    description: 'Get help with IImagined courses. Access FAQs, documentation, community support, and contact our team.',
    type: 'website',
  },
}

export default function HelpLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
