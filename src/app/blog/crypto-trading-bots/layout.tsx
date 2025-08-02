import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Crypto Trading Bots: Build Automated Systems That Generate $100K+/Year Profits | IImagined.ai',
  description: 'Master crypto trading bot development with advanced algorithms and risk management. Learn to build automated trading systems that generate massive profits.',
  keywords: [
    'crypto trading bots',
    'automated crypto trading',
    'cryptocurrency bots',
    'crypto bot development',
    'trading automation',
    'crypto algorithm trading',
    'bitcoin trading bots',
    'crypto arbitrage bots',
    'automated trading systems',
    'crypto bot strategies',
    'trading bot programming',
    'crypto market automation',
    'algorithmic trading crypto',
    'crypto bot profits'
  ],
  openGraph: {
    title: 'Crypto Trading Bots: Automated Systems Generating $100K+/Year',
    description: 'Advanced crypto trading bot development with algorithms and risk management for massive automated profits.',
    type: 'article',
    publishedTime: '2024-11-25T10:00:00.000Z',
    authors: ['Anyro'],
    tags: ['Crypto Trading', 'Trading Bots', 'Cryptocurrency', 'Algorithmic Trading', 'Financial Automation'],
    images: [
      {
        url: 'https://iimagined.ai/blog/crypto-trading-bots/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Crypto Trading Bots - Automated Profit Systems'
      }
    ]
  }
}

export default function CryptoTradingLayout({ children }: { children: React.ReactNode }) {
  return children
}