import { NextResponse } from 'next/server'
import { siteConfig } from '@/config/seo'

const blogPosts = [
  {
    title: "Instagram Growth Hacks That Actually Work in 2025",
    description: "Discover the underground Instagram growth strategies that top creators don't want you to know.",
    link: `${siteConfig.url}/blog/instagram-growth-2025`,
    pubDate: "Mon, 01 Jan 2025 00:00:00 GMT",
    category: "Growth Guide"
  },
  {
    title: "Instagram Reels Mastery: The Ultimate Guide to Viral Content",
    description: "Master the art of creating Instagram Reels that go viral consistently.",
    link: `${siteConfig.url}/blog/instagram-reels-guide`,
    pubDate: "Thu, 11 Jan 2025 00:00:00 GMT",
    category: "Content Strategy"
  },
  {
    title: "TikTok Growth Hacks: 0 to 100K Followers in 90 Days",
    description: "The exact blueprint I used to explode on TikTok, gaining 127K followers in just 90 days.",
    link: `${siteConfig.url}/blog/tiktok-growth-hacks`,
    pubDate: "Fri, 12 Jan 2025 00:00:00 GMT",
    category: "Growth Guide"
  },
  {
    title: "The Complete ComfyUI Workflow Library: 50+ Professional Templates",
    description: "Access my personal collection of ComfyUI workflows worth $5,000+.",
    link: `${siteConfig.url}/blog/comfyui-workflow-library`,
    pubDate: "Sat, 13 Jan 2025 00:00:00 GMT",
    category: "Resources"
  },
  {
    title: "YouTube Shorts: The Secret to 1M Views in 30 Days",
    description: "Crack the YouTube Shorts algorithm with my proven formula.",
    link: `${siteConfig.url}/blog/youtube-shorts-strategy`,
    pubDate: "Sun, 14 Jan 2025 00:00:00 GMT",
    category: "Video Strategy"
  },
  {
    title: "Scale Your Content Creation: 100 Posts in 2 Hours",
    description: "My exact system for creating a month's worth of content in a single afternoon.",
    link: `${siteConfig.url}/blog/scale-content-creation`,
    pubDate: "Mon, 15 Jan 2025 00:00:00 GMT",
    category: "Productivity"
  },
  {
    title: "The 30-Day Social Media Calendar That Tripled My Sales",
    description: "Copy my exact posting schedule that took me from $14K to $147K/month.",
    link: `${siteConfig.url}/blog/social-media-calendar`,
    pubDate: "Tue, 16 Jan 2025 00:00:00 GMT",
    category: "Content Strategy"
  },
  {
    title: "Digital Product Launch Strategy: From Idea to $10K in 30 Days",
    description: "The exact launch sequence I use to generate $10K+ with every digital product.",
    link: `${siteConfig.url}/blog/product-launch-strategy`,
    pubDate: "Wed, 17 Jan 2025 00:00:00 GMT",
    category: "Launch Guide"
  },
  {
    title: "AI Automation Guide: Build Your $10K/Month Business Machine",
    description: "Complete blueprint for automating your entire business with AI.",
    link: `${siteConfig.url}/blog/ai-automation-guide`,
    pubDate: "Thu, 18 Jan 2025 00:00:00 GMT",
    category: "Automation"
  },
  {
    title: "The Ultimate Guide to Instagram Monetization: 7 Proven Strategies",
    description: "Turn your Instagram followers into multiple revenue streams.",
    link: `${siteConfig.url}/blog/instagram-monetization-guide`,
    pubDate: "Fri, 19 Jan 2025 00:00:00 GMT",
    category: "Monetization"
  },
  {
    title: "Email Marketing Mastery: Turn Subscribers into $100K Revenue",
    description: "The email sequences and psychological triggers that generate 40% of my total revenue.",
    link: `${siteConfig.url}/blog/email-marketing-guide`,
    pubDate: "Sat, 20 Jan 2025 00:00:00 GMT",
    category: "Marketing"
  },
  {
    title: "High-Income Skills for the AI Era: What to Learn in 2025",
    description: "Future-proof your career with these high-demand skills.",
    link: `${siteConfig.url}/blog/ai-era-skills`,
    pubDate: "Sun, 21 Jan 2025 00:00:00 GMT",
    category: "Skills"
  },
  {
    title: "How I Built a Digital Product Empire That Makes $50K/Month",
    description: "Behind the scenes of my $2.3M digital product empire.",
    link: `${siteConfig.url}/blog/digital-products-empire`,
    pubDate: "Mon, 22 Jan 2025 00:00:00 GMT",
    category: "Case Study"
  },
  {
    title: "Why 2025 is the Best Time to Start Creating AI Content",
    description: "The AI content gold rush is here. Market analysis shows unprecedented opportunity.",
    link: `${siteConfig.url}/blog/ai-content-opportunity`,
    pubDate: "Tue, 23 Jan 2025 00:00:00 GMT",
    category: "Opportunity"
  },
  {
    title: "50 Digital Product Ideas That Are Printing Money in 2025",
    description: "From $47 templates to $10K masterclasses - discover the hottest digital products.",
    link: `${siteConfig.url}/blog/digital-products-ideas-2025`,
    pubDate: "Tue, 23 Jan 2025 00:00:00 GMT",
    category: "2025 Trends"
  },
  {
    title: "How I Built 5 Faceless Channels to $500K/Year",
    description: "The complete blueprint to building anonymous content empires.",
    link: `${siteConfig.url}/blog/faceless-content-strategy`,
    pubDate: "Wed, 24 Jan 2025 00:00:00 GMT",
    category: "Strategy"
  },
  {
    title: "How I Make $47,000/Month Selling Simple Templates",
    description: "The exact blueprint to turn 2-hour template projects into $47K monthly income.",
    link: `${siteConfig.url}/blog/how-to-sell-templates`,
    pubDate: "Thu, 25 Jan 2025 00:00:00 GMT",
    category: "Guide"
  },
  {
    title: "Create Your First Faceless YouTube Channel in 7 Days",
    description: "Step-by-step guide to launching a profitable faceless YouTube channel.",
    link: `${siteConfig.url}/blog/create-faceless-youtube-channel`,
    pubDate: "Fri, 26 Jan 2025 00:00:00 GMT",
    category: "YouTube"
  },
  {
    title: "23 Ways to Monetize AI and Make $10K+/Month",
    description: "Real businesses making real money with AI.",
    link: `${siteConfig.url}/blog/monetize-with-ai`,
    pubDate: "Sat, 27 Jan 2025 00:00:00 GMT",
    category: "Monetization"
  },
  {
    title: "AI Image Generation: The Complete Guide for Content Creators",
    description: "Master every AI image tool from Midjourney to Stable Diffusion.",
    link: `${siteConfig.url}/blog/ai-image-generation-guide`,
    pubDate: "Sun, 28 Jan 2025 00:00:00 GMT",
    category: "AI Tools"
  },
  {
    title: "37 ChatGPT Automation Hacks That Save 20+ Hours/Week",
    description: "Transform ChatGPT into your personal AI assistant.",
    link: `${siteConfig.url}/blog/chatgpt-automation-tips`,
    pubDate: "Mon, 29 Jan 2025 00:00:00 GMT",
    category: "Productivity"
  },
  {
    title: "The C.A.S.H. Framework: Create 1,000 Pieces of Content Per Month",
    description: "My proprietary C.A.S.H. system for massive content production.",
    link: `${siteConfig.url}/blog/content-scaling-framework`,
    pubDate: "Thu, 01 Mar 2025 00:00:00 GMT",
    category: "Framework"
  },
  {
    title: "n8n for Beginners: Automate Everything Without Code",
    description: "The complete beginner's guide to n8n automation.",
    link: `${siteConfig.url}/blog/n8n-beginners-guide`,
    pubDate: "Thu, 01 Mar 2025 00:00:00 GMT",
    category: "Automation"
  },
  {
    title: "The $100K/Year Passive Income Blueprint I Actually Use",
    description: "My exact blueprint for generating $8,400/month in passive income.",
    link: `${siteConfig.url}/blog/passive-income-blueprint`,
    pubDate: "Fri, 02 Mar 2025 00:00:00 GMT",
    category: "Passive Income"
  },
  {
    title: "Prompt Engineering: The $150/Hour Skill Nobody's Teaching Right",
    description: "Master the highest-paid AI skill of 2025.",
    link: `${siteConfig.url}/blog/prompt-engineering-guide`,
    pubDate: "Sat, 03 Mar 2025 00:00:00 GMT",
    category: "AI Mastery"
  },
  {
    title: "Social Media Automation: Post to 10 Platforms in 10 Minutes",
    description: "The complete automation system I use to manage 50+ social accounts.",
    link: `${siteConfig.url}/blog/social-media-automation`,
    pubDate: "Sun, 04 Mar 2025 00:00:00 GMT",
    category: "Automation"
  }
]

export async function GET() {
  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:content="http://purl.org/rss/1.0/modules/content/" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${siteConfig.name} Blog</title>
    <description>${siteConfig.description}</description>
    <link>${siteConfig.url}</link>
    <language>en-US</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${siteConfig.url}/rss.xml" rel="self" type="application/rss+xml" />
    <copyright>© ${new Date().getFullYear()} ${siteConfig.name}. All rights reserved.</copyright>
    <generator>Next.js</generator>
    <webMaster>support@iimagined.ai (IImagined.ai Support)</webMaster>
    <managingEditor>anyro@iimagined.ai (Anyro)</managingEditor>
    ${blogPosts
      .map(
        (post) => `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <description><![CDATA[${post.description}]]></description>
      <link>${post.link}</link>
      <guid isPermaLink="true">${post.link}</guid>
      <pubDate>${post.pubDate}</pubDate>
      <category>${post.category}</category>
      <dc:creator>Anyro</dc:creator>
    </item>`
      )
      .join('')}
  </channel>
</rss>`

  return new NextResponse(rss, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600',
    },
  })
}
