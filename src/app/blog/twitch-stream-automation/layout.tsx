import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Twitch Stream Automation: Scale to 50K+ Followers & $20K+/Month Revenue | IImagined.ai',
  description: 'Master Twitch streaming automation with chatbots, overlay systems, and monetization strategies. Build automated streaming systems that scale massively.',
  keywords: [
    'twitch stream automation',
    'twitch bot automation',
    'twitch streaming tools',
    'twitch growth automation',
    'twitch monetization automation',
    'twitch chatbot automation',
    'twitch overlay automation',
    'streaming automation tools',
    'twitch follower automation',
    'twitch revenue automation',
    'automated streaming systems',
    'twitch channel automation',
    'twitch marketing automation',
    'streaming business automation'
  ],
  openGraph: {
    title: 'Twitch Stream Automation: Scale to 50K+ Followers & $20K+/Month',
    description: 'Advanced Twitch streaming automation with chatbots, overlays, and monetization systems for massive growth.',
    type: 'article',
    publishedTime: '2024-11-30T10:00:00.000Z',
    authors: ['Anyro'],
    tags: ['Twitch Streaming', 'Stream Automation', 'Gaming Business', 'Content Creation', 'Live Streaming'],
    images: [
      {
        url: 'https://iimagined.ai/blog/twitch-stream-automation/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Twitch Stream Automation - Automated Streaming Systems'
      }
    ]
  }
}

export default function TwitchStreamLayout({ children }: { children: React.ReactNode }) {
  return children
}