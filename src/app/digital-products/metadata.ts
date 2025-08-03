import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How To Create Digital Products Course | Make Money Online Training',
  description: 'Learn how to create and sell digital products for passive income. Complete course on digital product creation, online marketing, and automated sales funnels. Join 1,500+ successful students.',
  keywords: [
    // Primary Digital Product Keywords
    'how to create digital products', 'digital products course', 'digital product creation', 'sell digital products online',
    'digital product ideas', 'digital product business', 'create and sell digital products', 'digital product marketing',
    // Passive Income Keywords
    'passive income course', 'how to make passive income', 'passive income ideas', 'passive income online',
    'make money while you sleep', 'passive income streams', 'automated income systems',
    // Online Business Keywords
    'online business course', 'make money online course', 'start online business', 'online entrepreneurship',
    'digital business training', 'online business ideas', 'internet marketing course',
    // Product Types Keywords
    'online course creation', 'ebook creation', 'digital templates', 'digital downloads',
    'membership site creation', 'saas product creation', 'digital coaching programs'
  ],
  authors: [{ name: 'Anyro', url: 'https://iimagined.ai/story' }],
  creator: 'Anyro',
  publisher: 'IImagined',
  category: 'Education',
  classification: 'Business Training',
  openGraph: {
    title: 'Digital Products Empire: Complete Business Course',
    description: 'Master the art of creating and selling digital products. Learn to build profitable digital products, marketing strategies, and automated sales systems that generate passive income.',
    url: 'https://iimagined.ai/digital-products',
    siteName: 'IImagined',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: 'https://iimagined.ai/images/digital-products-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Digital Products Course - Build Your Online Empire',
        type: 'image/jpeg'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    site: '@anyrxo',
    creator: '@anyrxo',
    title: 'Digital Products Empire: Complete Business Course',
    description: 'Master the art of creating and selling digital products. Learn marketing strategies and automated sales systems that generate passive income.',
    images: ['https://iimagined.ai/images/digital-products-og.jpg']
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  alternates: {
    canonical: 'https://iimagined.ai/digital-products'
  },
  other: {
    'course:author': 'Anyro',
    'course:duration': '20+ hours',
    'course:price': '$497',
    'course:currency': 'USD',
    'course:level': 'Beginner to Advanced',
    'course:language': 'English',
    'course:category': 'Business',
    'course:students': '1500+',
    'course:rating': '4.9',
    'course:modules': '10'
  }
}