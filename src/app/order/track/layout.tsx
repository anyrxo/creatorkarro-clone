import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Track Your Order - IImagined.ai Order Status & Delivery Information',
  description: 'Track your IImagined.ai course order status, delivery information, and download links. Get real-time updates on your AI automation and digital marketing courses.',
  keywords: [
    'order tracking',
    'order status',
    'course delivery',
    'download links',
    'purchase confirmation',
    'order history',
    'delivery status',
    'course access',
    'purchase tracking',
    'order information'
  ],
  openGraph: {
    title: 'Track Your Order - IImagined.ai Course Delivery Status',
    description: 'Track your course order status and get instant access to your AI automation and digital marketing training.',
    type: 'website',
    images: [
      {
        url: 'https://iimagined.ai/order-tracking-og.png',
        width: 1200,
        height: 630,
        alt: 'Order Tracking - IImagined.ai Course Delivery'
      }
    ]
  }
}

export default function OrderTrackLayout({ children }: { children: React.ReactNode }) {
  return children
}