'use client'

import Head from 'next/head'
import { usePathname } from 'next/navigation'
import { siteConfig } from '@/config/seo'

interface SEOHeadProps {
  title: string
  description: string
  keywords?: string[]
  ogImage?: string
  ogType?: string
  article?: {
    publishedTime: string
    author: string
    tags: string[]
  }
  structuredData?: Record<string, unknown>
}

export default function SEOHead({ 
  title, 
  description, 
  keywords = [],
  ogImage,
  ogType = 'website',
  article,
  structuredData
}: SEOHeadProps) {
  const pathname = usePathname()
  const url = `${siteConfig.url}${pathname}`
  const imageUrl = ogImage || siteConfig.ogImage

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords.length > 0 && (
        <meta name="keywords" content={keywords.join(', ')} />
      )}
      
      {/* Open Graph */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:site_name" content={siteConfig.name} />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
      <meta name="twitter:creator" content={siteConfig.creator} />
      
      {/* Article specific */}
      {article && (
        <>
          <meta property="article:published_time" content={article.publishedTime} />
          <meta property="article:author" content={article.author} />
          {article.tags.map((tag, index) => (
            <meta key={index} property="article:tag" content={tag} />
          ))}
        </>
      )}
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
      
      {/* Structured Data */}
      {structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      )}
    </Head>
  )
}