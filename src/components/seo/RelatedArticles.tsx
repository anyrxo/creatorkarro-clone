// Related Articles Component - Internal Linking Powerhouse
'use client'

interface Article {
  title: string
  slug: string
  excerpt: string
  category?: string
  readingTime?: number
  datePublished?: string
}

interface RelatedArticlesProps {
  articles: Article[]
  currentSlug?: string
  title?: string
}

export default function RelatedArticles({
  articles,
  currentSlug,
  title = 'Related Articles'
}: RelatedArticlesProps) {
  // Filter out current article
  const filteredArticles = currentSlug
    ? articles.filter(article => article.slug !== currentSlug)
    : articles

  // Limit to 3-6 related articles
  const displayArticles = filteredArticles.slice(0, 6)

  if (displayArticles.length === 0) return null

  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: title,
    numberOfItems: displayArticles.length,
    itemListElement: displayArticles.map((article, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      url: `https://iimagined.ai/blog/${article.slug}`,
      name: article.title,
      description: article.excerpt
    }))
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />

      <aside
        role="complementary"
        aria-label="Related articles"
        data-related-content="true"
        className="my-12 p-8 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700"
      >
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
          <span aria-hidden="true">📚</span>
          {title}
        </h2>

        <nav aria-label="Related articles navigation">
          <ul
            role="list"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {displayArticles.map((article, index) => (
              <li
                key={article.slug}
                itemScope
                itemType="https://schema.org/Article"
                data-related-article={index + 1}
                className="group"
              >
                <a
                  href={`/blog/${article.slug}`}
                  itemProp="url"
                  className="block h-full p-6 bg-white dark:bg-gray-800 rounded-xl border-2 border-gray-200 dark:border-gray-700 hover:border-purple-500 dark:hover:border-purple-500 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                  aria-label={`Read: ${article.title}`}
                >
                  {/* Category Badge */}
                  {article.category && (
                    <span
                      className="inline-block px-3 py-1 text-xs font-semibold text-purple-700 dark:text-purple-300 bg-purple-100 dark:bg-purple-900/30 rounded-full mb-3"
                      itemProp="articleSection"
                    >
                      {article.category}
                    </span>
                  )}

                  {/* Title */}
                  <h3
                    className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors"
                    itemProp="headline"
                  >
                    {article.title}
                  </h3>

                  {/* Excerpt */}
                  <p
                    className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2"
                    itemProp="description"
                  >
                    {article.excerpt}
                  </p>

                  {/* Metadata */}
                  <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-500">
                    {article.readingTime && (
                      <span className="flex items-center gap-1">
                        <span aria-hidden="true">⏱</span>
                        {article.readingTime} min read
                      </span>
                    )}
                    {article.datePublished && (
                      <time
                        dateTime={article.datePublished}
                        itemProp="datePublished"
                      >
                        {new Date(article.datePublished).toLocaleDateString()}
                      </time>
                    )}
                  </div>

                  {/* Hidden metadata for AI */}
                  <meta itemProp="author" content="Anyro" />
                  <meta itemProp="publisher" content="IImagined.ai" />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* AI-Friendly Context */}
        <div style={{ display: 'none' }} aria-hidden="true">
          <meta name="related-content-count" content={String(displayArticles.length)} />
          <meta name="internal-linking" content="optimized" />
          <meta name="content-cluster" content="true" />
        </div>
      </aside>
    </>
  )
}

// Category-Based Related Articles
export function CategoryRelatedArticles({
  category,
  articles,
  currentSlug,
  maxItems = 3
}: {
  category: string
  articles: Article[]
  currentSlug?: string
  maxItems?: number
}) {
  const categoryArticles = articles
    .filter(article => article.category === category && article.slug !== currentSlug)
    .slice(0, maxItems)

  return (
    <RelatedArticles
      articles={categoryArticles}
      currentSlug={currentSlug}
      title={`More ${category} Articles`}
    />
  )
}

// "Continue Reading" Single Article Suggestion
export function ContinueReading({ article }: { article: Article }) {
  return (
    <aside
      role="complementary"
      aria-label="Continue reading"
      data-continue-reading="true"
      className="my-8 p-6 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl border-2 border-purple-200 dark:border-purple-800"
    >
      <p className="text-sm font-semibold text-purple-700 dark:text-purple-300 mb-2">
        CONTINUE READING
      </p>
      <a
        href={`/blog/${article.slug}`}
        className="block group"
        aria-label={`Continue reading: ${article.title}`}
      >
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
          {article.title}
        </h3>
        <p className="text-gray-700 dark:text-gray-300">
          {article.excerpt}
        </p>
      </a>
    </aside>
  )
}
