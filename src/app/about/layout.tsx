import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About IImagined - Creator Education & AI Automation',
  description: 'Learn about IImagined\'s mission to help creators build profitable businesses through AI automation, Instagram growth, and digital products. Join 4,000+ successful students.',
  openGraph: {
    title: 'About IImagined - Creator Education & AI Automation',
    description: 'Learn about IImagined\'s mission to help creators build profitable businesses through AI automation, Instagram growth, and digital products. Join 4,000+ successful students.',
    type: 'website',
  },
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
