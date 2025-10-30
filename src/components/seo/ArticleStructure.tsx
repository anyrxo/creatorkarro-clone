// Semantic HTML Article Structure - AI & Search Engine Optimized
'use client'

import { ReactNode } from 'react'

interface ArticleStructureProps {
  children: ReactNode
  title: string
  description: string
  datePublished: string
  dateModified?: string
  author?: string
  category?: string
  tags?: string[]
  readingTime?: number
}

export default function ArticleStructure({
  children,
  title,
  description,
  datePublished,
  dateModified,
  author = 'Anyro',
  category,
  tags = [],
  readingTime
}: ArticleStructureProps) {

  return (
    <article
      role="article"
      itemScope
      itemType="https://schema.org/Article"
      data-article-type="educational-content"
      aria-label={title}
    >
      {/* Article Header with Semantic Markup */}
      <header
        role="banner"
        itemProp="headline"
        aria-label="Article header"
      >
        <h1
          itemProp="name"
          data-article-title="true"
        >
          {title}
        </h1>

        {/* Article Metadata */}
        <div
          role="contentinfo"
          aria-label="Article metadata"
          data-article-meta="true"
        >
          <meta itemProp="description" content={description} />

          {/* Author Information */}
          <div itemProp="author" itemScope itemType="https://schema.org/Person">
            <meta itemProp="name" content={author} />
            <meta itemProp="url" content="https://iimagined.ai/about" />
            <span className="sr-only">By {author}</span>
          </div>

          {/* Publication Dates with ISO 8601 Format */}
          <time
            dateTime={datePublished}
            itemProp="datePublished"
            data-published={datePublished}
          >
            <span className="sr-only">Published on {new Date(datePublished).toLocaleDateString()}</span>
          </time>

          {dateModified && (
            <time
              dateTime={dateModified}
              itemProp="dateModified"
              data-modified={dateModified}
            >
              <span className="sr-only">Last updated {new Date(dateModified).toLocaleDateString()}</span>
            </time>
          )}

          {/* Reading Time */}
          {readingTime && (
            <meta
              itemProp="timeRequired"
              content={`PT${readingTime}M`}
              data-reading-time={readingTime}
            />
          )}

          {/* Category */}
          {category && (
            <span
              itemProp="articleSection"
              data-category={category}
              className="sr-only"
            >
              Category: {category}
            </span>
          )}

          {/* Tags/Keywords */}
          {tags.length > 0 && tags.map((tag, index) => (
            <meta
              key={index}
              itemProp="keywords"
              content={tag}
              data-tag={tag}
            />
          ))}
        </div>
      </header>

      {/* Main Article Content */}
      <section
        role="main"
        itemProp="articleBody"
        data-article-content="true"
        aria-label="Main article content"
      >
        {children}
      </section>

      {/* Publisher Information (for AI attribution) */}
      <aside
        role="complementary"
        aria-label="Publisher information"
        style={{ display: 'none' }}
      >
        <div itemProp="publisher" itemScope itemType="https://schema.org/Organization">
          <meta itemProp="name" content="IImagined.ai" />
          <meta itemProp="url" content="https://iimagined.ai" />
          <div itemProp="logo" itemScope itemType="https://schema.org/ImageObject">
            <meta itemProp="url" content="https://iimagined.ai/logo.png" />
            <meta itemProp="width" content="512" />
            <meta itemProp="height" content="512" />
          </div>
        </div>
      </aside>
    </article>
  )
}
