import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Student Success Stories & Testimonials - Real Results from AI & Instagram Courses | IImagined.ai',
  description: 'Read real success stories from 127K+ students who transformed their businesses with AI automation and Instagram growth strategies. Verified results and testimonials.',
  keywords: [
    'student testimonials',
    'success stories',
    'ai automation results',
    'instagram growth results',
    'course reviews',
    'student results',
    'digital product success',
    'automation success stories',
    'social media success',
    'business transformation',
    'ai course testimonials',
    'instagram course reviews',
    'real results',
    'verified testimonials'
  ],
  openGraph: {
    title: 'Student Success Stories - Real Results from AI & Instagram Courses',
    description: 'Verified success stories from 127K+ students who achieved remarkable results with AI automation and Instagram growth.',
    type: 'website',
    images: [
      {
        url: 'https://iimagined.ai/testimonials-og.png',
        width: 1200,
        height: 630,
        alt: 'Student Success Stories - Real Results & Testimonials'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Student Success Stories - Real Results from AI & Instagram Courses',
    description: 'Verified testimonials and success stories from 127K+ successful students.',
    creator: '@anyro'
  }
}

export default function TestimonialsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}