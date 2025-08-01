import { Metadata } from 'next'
import { pageSEO, siteConfig } from '@/config/seo'

export const homeMetadata: Metadata = {
  title: pageSEO.home.title,
  description: pageSEO.home.description,
  keywords: pageSEO.home.keywords,
  openGraph: {
    title: pageSEO.home.title,
    description: pageSEO.home.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: 'IImagined.ai - Master Instagram Growth & AI Automation',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: pageSEO.home.title,
    description: pageSEO.home.description,
    creator: '@anyro',
    images: [siteConfig.ogImage],
  },
  alternates: {
    canonical: siteConfig.url,
  },
}

export const coursesMetadata: Metadata = {
  title: pageSEO.courses.title,
  description: pageSEO.courses.description,
  keywords: pageSEO.courses.keywords,
  openGraph: {
    title: pageSEO.courses.title,
    description: pageSEO.courses.description,
    url: `${siteConfig.url}/courses`,
    siteName: siteConfig.name,
    images: [
      {
        url: `${siteConfig.url}/courses-og.png`,
        width: 1200,
        height: 630,
        alt: 'Premium Courses by IImagined.ai',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: `${siteConfig.url}/courses`,
  },
}

export const blogMetadata: Metadata = {
  title: pageSEO.blog.title,
  description: pageSEO.blog.description,
  keywords: pageSEO.blog.keywords,
  openGraph: {
    title: pageSEO.blog.title,
    description: pageSEO.blog.description,
    url: `${siteConfig.url}/blog`,
    siteName: siteConfig.name,
    images: [
      {
        url: `${siteConfig.url}/blog-og.png`,
        width: 1200,
        height: 630,
        alt: 'IImagined.ai Blog',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: `${siteConfig.url}/blog`,
  },
}

export const resourcesMetadata: Metadata = {
  title: pageSEO.resources.title,
  description: pageSEO.resources.description,
  keywords: pageSEO.resources.keywords,
  openGraph: {
    title: pageSEO.resources.title,
    description: pageSEO.resources.description,
    url: `${siteConfig.url}/resources`,
    siteName: siteConfig.name,
    images: [
      {
        url: `${siteConfig.url}/resources-og.png`,
        width: 1200,
        height: 630,
        alt: 'Free Resources by IImagined.ai',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: `${siteConfig.url}/resources`,
  },
}

export const aboutMetadata: Metadata = {
  title: pageSEO.about.title,
  description: pageSEO.about.description,
  keywords: pageSEO.about.keywords,
  openGraph: {
    title: pageSEO.about.title,
    description: pageSEO.about.description,
    url: `${siteConfig.url}/about`,
    siteName: siteConfig.name,
    images: [
      {
        url: `${siteConfig.url}/about-og.png`,
        width: 1200,
        height: 630,
        alt: 'About Anyro - IImagined.ai',
      },
    ],
    locale: 'en_US',
    type: 'profile',
  },
  alternates: {
    canonical: `${siteConfig.url}/about`,
  },
}