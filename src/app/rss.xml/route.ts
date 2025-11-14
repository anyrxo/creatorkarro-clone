// RSS Feed Generator - TOXIC SEO Domination
import { NextResponse } from 'next/server'
import { siteConfig } from '@/config/seo'




export async function GET() {
  const blogPosts = [
    {
      title: 'Claude 4 Agentic Coding Revolution - Build Full Apps in Minutes',
      description: 'Discover how Claude 4 is revolutionizing development with agentic coding capabilities that can build entire applications automatically.',
      slug: 'claude-4-agentic-coding-revolution',
      date: '2024-12-15',
      category: 'AI Development'
    },
    {
      title: 'DeepSeek R1 Open Source AI Revolution - Better Than GPT-4?',
      description: 'DeepSeek R1 is changing the AI landscape with open-source intelligence that rivals GPT-4. Learn how to leverage this breakthrough.',
      slug: 'deepseek-r1-open-source-ai-revolution',
      date: '2024-12-14',
      category: 'AI News'
    },
    {
      title: 'Instagram Growth 2025 - Ultimate Guide to 100K Followers',
      description: 'Master Instagram growth with the latest 2025 strategies. Proven methods to reach 100K followers and monetize your audience.',
      slug: 'instagram-growth-2025',
      date: '2024-12-10',
      category: 'Social Media'
    },
    {
      title: 'Gemini 2 Pro + Bolt.DIY = Full Stack Revolution',
      description: 'Combine Gemini 2 Pro with Bolt.DIY to build production-ready applications with zero coding experience.',
      slug: 'gemini-2-pro-bolt-diy-full-stack-revolution',
      date: '2024-12-08',
      category: 'AI Development'
    },
    {
      title: 'AI Automation Business - $10K/Month Blueprint',
      description: 'Step-by-step guide to building a profitable AI automation business that generates $10K+ monthly revenue.',
      slug: 'ai-automation-business',
      date: '2024-12-05',
      category: 'Business'
    }
  ]

  const rssXml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:content="http://purl.org/rss/1.0/modules/content/" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:media="http://search.yahoo.com/mrss/">
  <channel>
    <title>IImagined.ai Blog - AI Automation &amp; Instagram Growth</title>
    <description>Latest guides on AI automation, Instagram growth, digital products, and online business. Learn from proven strategies that generate real results.</description>
    <link>${siteConfig.url}/blog</link>
    <language>en-US</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <pubDate>${new Date().toUTCString()}</pubDate>
    <ttl>60</ttl>
    <image>
      <url>${siteConfig.url}/logo.png</url>
      <title>IImagined.ai</title>
      <link>${siteConfig.url}</link>
      <width>512</width>
      <height>512</height>
    </image>
    <atom:link href="${siteConfig.url}/rss.xml" rel="self" type="application/rss+xml"/>
    <managingEditor>anyro@iimagined.ai (Anyro)</managingEditor>
    <webMaster>support@iimagined.ai (IImagined.ai Support)</webMaster>
    <copyright>© ${new Date().getFullYear()} IImagined.ai. All rights reserved.</copyright>
    <category>Technology</category>
    <category>Business</category>
    <category>Education</category>
    <generator>IImagined.ai RSS Generator v1.0</generator>
${blogPosts
  .map(
    (post) => `    <item>
      <title><![CDATA[${post.title}]]></title>
      <description><![CDATA[${post.description}]]></description>
      <link>${siteConfig.url}/blog/${post.slug}</link>
      <guid isPermaLink="true">${siteConfig.url}/blog/${post.slug}</guid>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <author>anyro@iimagined.ai (Anyro)</author>
      <category><![CDATA[${post.category}]]></category>
      <content:encoded><![CDATA[
        <p>${post.description}</p>
        <p><a href="${siteConfig.url}/blog/${post.slug}">Read the full article on IImagined.ai</a></p>
        <img src="${siteConfig.url}/blog/${post.slug}/og-image.jpg" alt="${post.title}" />
      ]]></content:encoded>
      <media:content url="${siteConfig.url}/blog/${post.slug}/og-image.jpg" type="image/jpeg" medium="image">
        <media:title><![CDATA[${post.title}]]></media:title>
        <media:description><![CDATA[${post.description}]]></media:description>
      </media:content>
    </item>`
  )
  .join('\n')}
  </channel>
</rss>`

  return new NextResponse(rssXml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  })
}