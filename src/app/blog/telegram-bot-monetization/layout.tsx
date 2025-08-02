import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Telegram Bot Monetization: Build Bots That Generate $15K+/Month Revenue | IImagined.ai',
  description: 'Master Telegram bot monetization with subscription models, premium features, and automated revenue systems. Build profitable bots that scale to massive income.',
  keywords: [
    'telegram bot monetization',
    'telegram bot revenue',
    'telegram bot business',
    'telegram bot subscription',
    'telegram bot premium features',
    'telegram bot payments',
    'telegram bot automation',
    'telegram bot scaling',
    'telegram bot marketing',
    'telegram bot growth',
    'telegram channel monetization',
    'telegram bot development',
    'telegram bot api',
    'telegram bot income'
  ],
  openGraph: {
    title: 'Telegram Bot Monetization: Build Bots Generating $15K+/Month',
    description: 'Advanced Telegram bot monetization strategies and systems that generate massive recurring revenue.',
    type: 'article',
    publishedTime: '2025-01-03T10:00:00.000Z',
    authors: ['Anyro'],
    tags: ['Telegram Bots', 'Bot Monetization', 'Telegram Marketing', 'Bot Revenue', 'Automation'],
    images: [
      {
        url: 'https://iimagined.ai/blog/telegram-bot-monetization/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Telegram Bot Monetization - Revenue Generation Systems'
      }
    ]
  }
}

export default function TelegramBotMonetizationLayout({ children }: { children: React.ReactNode }) {
  return children
}