// Enhanced Article Schema - Maximum Rich Snippet Optimization
'use client'

import { siteConfig } from '@/config/seo'

interface ArticleSchemaProps {
  headline: string
  description: string
  image: string | string[]
  datePublished: string
  dateModified: string
  author?: {
    name: string
    url?: string
    image?: string
  }
  category?: string
  keywords?: string[]
  articleSection?: string
  wordCount?: number
  timeRequired?: string // Reading time in ISO 8601 (e.g., "PT5M" for 5 minutes)
  mainEntityOfPage?: string
  speakable?: {
    type: string[]
    cssSelector: string[]
  }
}

export default function ArticleSchema({
  headline,
  description,
  image,
  datePublished,
  dateModified,
  author = {
    name: 'Anyro',
    url: `${siteConfig.url}/about`,
    image: `${siteConfig.url}/anyro.jpg`
  },
  category = 'Technology',
  keywords = [],
  articleSection,
  wordCount,
  timeRequired,
  mainEntityOfPage,
  speakable
}: ArticleSchemaProps) {
  const images = Array.isArray(image) ? image : [image]
  const articleUrl = mainEntityOfPage || siteConfig.url

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${articleUrl}#article`,
    headline,
    description,
    image: images.map(img => ({
      '@type': 'ImageObject',
      url: img,
      width: 1200,
      height: 630
    })),
    datePublished,
    dateModified,
    author: {
      '@type': 'Person',
      name: author.name,
      url: author.url || `${siteConfig.url}/about`,
      image: {
        '@type': 'ImageObject',
        url: author.image || `${siteConfig.url}/anyro.jpg`
      },
      sameAs: [
        'https://twitter.com/anyro',
        'https://instagram.com/anyrxo',
        'https://youtube.com/@anyrxo'
      ]
    },
    publisher: {
      '@type': 'Organization',
      '@id': `${siteConfig.url}#organization`,
      name: 'IImagined.ai',
      logo: {
        '@type': 'ImageObject',
        url: `${siteConfig.url}/logo.png`,
        width: 200,
        height: 60
      },
      url: siteConfig.url,
      sameAs: Object.values(siteConfig.links).filter(link => link.includes('http'))
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': articleUrl
    },
    ...(category && { articleSection: category }),
    ...(keywords.length > 0 && { keywords: keywords.join(', ') }),
    ...(wordCount && { wordCount }),
    ...(timeRequired && { timeRequired }),
    inLanguage: 'en-US',
    isAccessibleForFree: true,
    isPartOf: {
      '@type': 'Blog',
      '@id': `${siteConfig.url}/blog#blog`,
      name: 'IImagined.ai Blog',
      description: 'AI automation, Instagram growth, and digital product strategies'
    },
    ...(speakable && { speakable })
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
    />
  )
}

// Enhanced version with @graph for multiple entity types
interface EnhancedArticleSchemaProps extends ArticleSchemaProps {
  breadcrumbs?: Array<{
    name: string
    url: string
  }>
  relatedArticles?: Array<{
    headline: string
    url: string
    image: string
  }>
}

export function EnhancedArticleSchema({
  breadcrumbs = [],
  relatedArticles = [],
  ...articleProps
}: EnhancedArticleSchemaProps) {
  const articleUrl = articleProps.mainEntityOfPage || siteConfig.url

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      // Main Article
      {
        '@type': 'Article',
        '@id': `${articleUrl}#article`,
        headline: articleProps.headline,
        description: articleProps.description,
        image: Array.isArray(articleProps.image)
          ? articleProps.image
          : [articleProps.image],
        datePublished: articleProps.datePublished,
        dateModified: articleProps.dateModified,
        author: {
          '@type': 'Person',
          '@id': `${siteConfig.url}/about#person`,
          name: articleProps.author?.name || 'Anyro'
        },
        publisher: {
          '@type': 'Organization',
          '@id': `${siteConfig.url}#organization`
        },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': articleUrl
        },
        ...(articleProps.keywords && { keywords: articleProps.keywords.join(', ') }),
        ...(articleProps.wordCount && { wordCount: articleProps.wordCount }),
        ...(articleProps.timeRequired && { timeRequired: articleProps.timeRequired })
      },
      // Breadcrumbs
      ...(breadcrumbs.length > 0 ? [{
        '@type': 'BreadcrumbList',
        '@id': `${articleUrl}#breadcrumb`,
        itemListElement: breadcrumbs.map((crumb, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: crumb.name,
          item: crumb.url
        }))
      }] : []),
      // Related Articles Collection
      ...(relatedArticles.length > 0 ? [{
        '@type': 'ItemList',
        '@id': `${articleUrl}#related`,
        name: 'Related Articles',
        itemListElement: relatedArticles.map((article, index) => ({
          '@type': 'Article',
          position: index + 1,
          headline: article.headline,
          url: article.url,
          image: article.image
        }))
      }] : []),
      // Author Person
      {
        '@type': 'Person',
        '@id': `${siteConfig.url}/about#person`,
        name: articleProps.author?.name || 'Anyro',
        url: articleProps.author?.url || `${siteConfig.url}/about`,
        image: articleProps.author?.image || `${siteConfig.url}/anyro.jpg`,
        sameAs: [
          'https://twitter.com/anyro',
          'https://instagram.com/anyrxo',
          'https://youtube.com/@anyrxo'
        ],
        jobTitle: 'AI Automation Expert & Instagram Growth Strategist'
      },
      // Organization
      {
        '@type': 'Organization',
        '@id': `${siteConfig.url}#organization`,
        name: 'IImagined.ai',
        url: siteConfig.url,
        logo: {
          '@type': 'ImageObject',
          url: `${siteConfig.url}/logo.png`
        }
      }
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

// Helper to calculate reading time from word count
export function calculateReadingTime(wordCount: number): string {
  const wordsPerMinute = 200
  const minutes = Math.ceil(wordCount / wordsPerMinute)
  return `PT${minutes}M`
}

// Helper to count words in HTML content
export function countWords(html: string): number {
  const text = html.replace(/<[^>]*>/g, ' ')
  const words = text.trim().split(/\s+/)
  return words.filter(word => word.length > 0).length
}
