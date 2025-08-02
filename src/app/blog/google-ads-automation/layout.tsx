import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Google Ads Automation: Build PPC Systems That Generate $300K+/Month ROI | IImagined.ai',
  description: 'Master Google Ads automation with smart bidding, keyword optimization, and campaign scaling. Build PPC systems that maximize ROI automatically.',
  keywords: [
    'google ads automation',
    'google adwords automation',
    'ppc automation',
    'google ads ai optimization',
    'automated google campaigns',
    'google ads scaling automation',
    'google ads automation tools',
    'ppc campaign automation',
    'google ads bid automation',
    'automated ppc management',
    'google ads optimization automation',
    'search ads automation',
    'google ads automation strategies',
    'ppc automation software'
  ],
  openGraph: {
    title: 'Google Ads Automation: Build PPC Systems Generating $300K+/Month ROI',
    description: 'Advanced Google Ads automation with smart bidding and optimization systems for maximum PPC ROI.',
    type: 'article',
    publishedTime: '2024-10-15T10:00:00.000Z',
    authors: ['Anyro'],
    tags: ['Google Ads', 'PPC Marketing', 'Digital Advertising', 'Campaign Automation', 'ROI Optimization'],
    images: [
      {
        url: 'https://iimagined.ai/blog/google-ads-automation/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Google Ads Automation - PPC ROI Systems'
      }
    ]
  }
}

export default function GoogleAdsLayout({ children }: { children: React.ReactNode }) {
  return children
}