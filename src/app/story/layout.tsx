import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Anyro\'s Story - From 0 to 500K+ Followers & $2M+ Revenue | IImagined.ai',
  description: 'Discover how Anyro built a 500K+ follower empire and generated $2M+ revenue through AI automation and Instagram growth strategies.',
  keywords: [
    'anyro story',
    'entrepreneur success story',
    'instagram success story',
    '500k followers story',
    'digital entrepreneur journey',
    'ai automation success',
    'instagram growth success',
    'content creator story',
    'social media success story',
    'online business success',
    'passive income success story'
  ],
  openGraph: {
    title: 'Anyro\'s Story - From 0 to 500K Followers & $2M+ Revenue',
    description: 'The inspiring journey of how Anyro built a social media empire and multi-million dollar business from nothing.',
    type: 'article',
    images: [
      {
        url: 'https://iimagined.ai/story-og.png',
        width: 1200,
        height: 630,
        alt: 'Anyro\'s Success Story - From 0 to 500K Followers'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Anyro\'s Story - From 0 to 500K Followers & $2M+ Revenue',
    description: 'Inspiring journey from 0 to social media empire and $2M+ business.',
    creator: '@anyro'
  }
}

export default function StoryLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}