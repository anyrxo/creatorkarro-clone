import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Discord Automation Bots: Build Server Management Systems That Scale to 1M+ Users | IImagined.ai',
  description: 'Master Discord bot development with advanced automation features. Learn moderation, engagement, monetization, and scaling strategies for massive Discord communities.',
  keywords: [
    'discord bot development',
    'discord automation',
    'discord server management',
    'discord bot monetization',
    'discord community automation',
    'discord moderation bots',
    'discord engagement bots',
    'discord scaling automation',
    'discord bot api',
    'discord server growth',
    'discord automation tools',
    'discord bot programming',
    'discord business automation',
    'discord revenue systems'
  ],
  openGraph: {
    title: 'Discord Automation Bots: Scale Server Management to 1M+ Users',
    description: 'Advanced Discord bot development and automation systems for massive community management and monetization.',
    type: 'article',
    publishedTime: '2024-12-20T10:00:00.000Z',
    authors: ['Anyro'],
    tags: ['Discord Bots', 'Community Management', 'Discord Automation', 'Server Scaling', 'Bot Development'],
    images: [
      {
        url: 'https://iimagined.ai/blog/discord-automation-bots/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Discord Automation Bots - Server Management Systems'
      }
    ]
  }
}

export default function DiscordAutomationLayout({ children }: { children: React.ReactNode }) {
  return children
}