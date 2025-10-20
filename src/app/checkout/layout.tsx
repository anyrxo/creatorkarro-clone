import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Secure Checkout | IImagined AI',
  description: 'Complete your purchase securely. 60-day money-back guarantee. Join 4,000+ students building successful AI businesses.',
  robots: 'noindex, nofollow', // Prevent indexing of checkout pages
  openGraph: {
    title: 'Secure Checkout | IImagined AI',
    description: 'Complete your purchase securely. 60-day money-back guarantee.',
    type: 'website',
  },
}

export default function CheckoutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
