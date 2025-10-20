// BlogPosting Schema Generator for SEO Enhancement
// Generates comprehensive JSON-LD structured data for blog posts

export interface BlogPostSchemaOptions {
  title: string
  description: string
  slug: string
  publishedTime: string
  modifiedTime: string
  category: string
  keywords: string[]
  author?: string
  image?: string
  wordCount?: number
  readingTime?: string
}

export function generateBlogPostSchema(post: BlogPostSchemaOptions) {
  const canonical = `https://iimagined.ai/blog/${post.slug}`
  const baseUrl = 'https://iimagined.ai'

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": `${canonical}#article`,
        "headline": post.title,
        "description": post.description,
        "datePublished": post.publishedTime,
        "dateModified": post.modifiedTime,
        "author": {
          "@type": "Person",
          "name": post.author || "Anyro",
          "url": `${baseUrl}/about`,
          "image": `${baseUrl}/anyro.jpg`,
          "sameAs": [
            "https://twitter.com/anyro",
            "https://instagram.com/anyro",
            "https://linkedin.com/in/anyro"
          ]
        },
        "publisher": {
          "@type": "Organization",
          "@id": `${baseUrl}#organization`,
          "name": "IImagined.ai",
          "url": baseUrl,
          "logo": {
            "@type": "ImageObject",
            "url": `${baseUrl}/logo.png`,
            "width": 200,
            "height": 60
          },
          "sameAs": [
            "https://twitter.com/iimagined_ai",
            "https://instagram.com/iimagined.ai",
            "https://linkedin.com/company/iimagined",
            "https://youtube.com/@iimaginedai"
          ]
        },
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": canonical
        },
        "image": {
          "@type": "ImageObject",
          "url": post.image || `${baseUrl}/images/${post.slug}-og.jpg`,
          "width": 1200,
          "height": 630
        },
        "keywords": post.keywords.join(", "),
        "articleSection": post.category,
        "inLanguage": "en-US",
        "isPartOf": {
          "@type": "Blog",
          "@id": `${baseUrl}/blog#blog`
        },
        ...(post.wordCount && { "wordCount": post.wordCount }),
        ...(post.readingTime && { "timeRequired": post.readingTime })
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${canonical}#breadcrumbs`,
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": baseUrl
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Blog",
            "item": `${baseUrl}/blog`
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": post.title,
            "item": canonical
          }
        ]
      },
      {
        "@type": "WebSite",
        "@id": `${baseUrl}#website`,
        "url": baseUrl,
        "name": "IImagined.ai",
        "description": "AI-Powered Automation and Digital Products - Transform Your Business with AI",
        "publisher": {
          "@type": "Organization",
          "@id": `${baseUrl}#organization`
        },
        "potentialAction": {
          "@type": "SearchAction",
          "target": `${baseUrl}/search?q={search_term_string}`,
          "query-input": "required name=search_term_string"
        }
      }
    ]
  }
}

// Helper function to extract schema data from Next.js metadata
export function extractSchemaFromMetadata(metadata: any, slug: string, options?: {
  wordCount?: number
  readingTime?: string
}) {
  return generateBlogPostSchema({
    title: metadata.title,
    description: metadata.description,
    slug: slug,
    publishedTime: metadata.openGraph?.publishedTime || new Date().toISOString(),
    modifiedTime: metadata.openGraph?.modifiedTime || new Date().toISOString(),
    category: metadata.category || 'Technology',
    keywords: Array.isArray(metadata.keywords) ? metadata.keywords : [],
    author: metadata.openGraph?.authors?.[0] || metadata.authors?.[0]?.name || 'Anyro',
    image: metadata.openGraph?.images?.[0]?.url,
    wordCount: options?.wordCount,
    readingTime: options?.readingTime
  })
}
