// VideoObject Schema Component - Rich Video Snippets in Search
'use client'

import { siteConfig } from '@/config/seo'

interface VideoObjectSchemaProps {
  name: string
  description: string
  thumbnailUrl: string
  uploadDate: string
  contentUrl?: string
  embedUrl?: string
  duration?: string // ISO 8601 duration (e.g., "PT10M30S" for 10 min 30 sec)
  transcript?: string
  interactionStatistic?: {
    interactionType: 'WatchAction'
    userInteractionCount: number
  }
  expires?: string
  genre?: string[]
  keywords?: string[]
  isLiveBroadcast?: boolean
  regionsAllowed?: string[]
}

export default function VideoObjectSchema({
  name,
  description,
  thumbnailUrl,
  uploadDate,
  contentUrl,
  embedUrl,
  duration,
  transcript,
  interactionStatistic,
  expires,
  genre = [],
  keywords = [],
  isLiveBroadcast = false,
  regionsAllowed = []
}: VideoObjectSchemaProps) {
  const videoSchema = {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name,
    description,
    thumbnailUrl: [thumbnailUrl],
    uploadDate,
    ...(contentUrl && { contentUrl }),
    ...(embedUrl && { embedUrl }),
    ...(duration && { duration }),
    ...(transcript && { transcript }),
    ...(interactionStatistic && { interactionStatistic }),
    ...(expires && { expires }),
    ...(genre.length > 0 && { genre }),
    publisher: {
      '@type': 'Organization',
      name: 'IImagined.ai',
      logo: {
        '@type': 'ImageObject',
        url: `${siteConfig.url}/logo.png`,
        width: 200,
        height: 60
      }
    },
    author: {
      '@type': 'Person',
      name: 'Anyro',
      url: `${siteConfig.url}/about`
    },
    ...(keywords.length > 0 && { keywords: keywords.join(', ') }),
    isLiveBroadcast,
    ...(regionsAllowed.length > 0 && { regionsAllowed }),
    inLanguage: 'en-US',
    isFamilyFriendly: true
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema) }}
    />
  )
}

// Pre-configured video schemas
export const videoSchemas = {
  courseIntro: (courseTitle: string) => ({
    name: `${courseTitle} - Course Introduction`,
    description: `Watch this comprehensive introduction to ${courseTitle} and discover what you'll learn, the transformation you'll experience, and why thousands of students have chosen this course.`,
    thumbnailUrl: `${siteConfig.url}/courses/${courseTitle.toLowerCase().replace(/\s+/g, '-')}/intro-thumb.jpg`,
    uploadDate: new Date().toISOString(),
    duration: 'PT5M', // 5 minutes
    genre: ['Educational', 'Tutorial', 'Business'],
    keywords: [courseTitle, 'course introduction', 'tutorial', 'learning']
  }),

  tutorial: (title: string, topic: string) => ({
    name: title,
    description: `Step-by-step tutorial on ${topic}. Learn the exact process, tools, and strategies to master ${topic} and get results fast.`,
    thumbnailUrl: `${siteConfig.url}/tutorials/${topic.toLowerCase().replace(/\s+/g, '-')}-thumb.jpg`,
    uploadDate: new Date().toISOString(),
    duration: 'PT15M',
    genre: ['Educational', 'How-to', 'Tutorial'],
    keywords: [topic, 'tutorial', 'how to', 'guide', 'learn']
  }),

  testimonial: (studentName: string, courseName: string) => ({
    name: `${studentName} Success Story - ${courseName}`,
    description: `Hear how ${studentName} transformed their business using ${courseName}. Real results, real strategies, real success.`,
    thumbnailUrl: `${siteConfig.url}/testimonials/${studentName.toLowerCase().replace(/\s+/g, '-')}-thumb.jpg`,
    uploadDate: new Date().toISOString(),
    duration: 'PT3M',
    genre: ['Review', 'Testimonial', 'Success Story'],
    keywords: [courseName, 'testimonial', 'success story', 'review', 'results']
  })
}

// Video Gallery/Playlist Schema
interface VideoGallerySchemaProps {
  name: string
  description: string
  videos: Array<{
    name: string
    description: string
    thumbnailUrl: string
    contentUrl: string
    uploadDate: string
  }>
}

export function VideoGallerySchema({ name, description, videos }: VideoGallerySchemaProps) {
  const gallerySchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name,
    description,
    numberOfItems: videos.length,
    itemListElement: videos.map((video, index) => ({
      '@type': 'VideoObject',
      position: index + 1,
      name: video.name,
      description: video.description,
      thumbnailUrl: video.thumbnailUrl,
      contentUrl: video.contentUrl,
      uploadDate: video.uploadDate,
      publisher: {
        '@type': 'Organization',
        name: 'IImagined.ai',
        logo: {
          '@type': 'ImageObject',
          url: `${siteConfig.url}/logo.png`
        }
      }
    }))
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(gallerySchema) }}
    />
  )
}
