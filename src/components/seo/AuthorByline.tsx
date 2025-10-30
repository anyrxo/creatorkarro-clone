// Author Byline Component - E-E-A-T Optimization
'use client'

interface AuthorBylineProps {
  author?: string
  authorUrl?: string
  authorImage?: string
  authorBio?: string
  datePublished?: string
  dateModified?: string
  readingTime?: number
  credentials?: string[]
  showFullBio?: boolean
}

export default function AuthorByline({
  author = 'Anyro',
  authorUrl = 'https://iimagined.ai/about',
  authorImage = 'https://iimagined.ai/anyro.png',
  authorBio = 'AI Automation Expert & Instagram Growth Strategist. Built multiple 6-figure businesses through automation and social media. Teaching 127K+ students worldwide.',
  datePublished,
  dateModified,
  readingTime,
  credentials = [
    'AI Automation Specialist',
    'Instagram Growth Expert',
    '127K+ Students Taught',
    '$2.3M+ Student Revenue Generated'
  ],
  showFullBio = false
}: AuthorBylineProps) {

  const authorSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: author,
    url: authorUrl,
    image: authorImage,
    description: authorBio,
    jobTitle: 'AI Automation Expert & Instagram Growth Strategist',
    knowsAbout: [
      'AI Automation',
      'Instagram Marketing',
      'Social Media Growth',
      'Digital Products',
      'N8N Workflows',
      'Content Creation',
      'Claude AI',
      'ChatGPT',
      'Marketing Automation'
    ],
    hasCredential: credentials,
    sameAs: [
      'https://twitter.com/anyro',
      'https://instagram.com/anyro',
      'https://youtube.com/@anyro',
      'https://linkedin.com/in/anyro'
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(authorSchema) }}
      />

      <div
        role="contentinfo"
        aria-label="Author information"
        data-author-byline="true"
        className="flex items-start gap-4 p-6 my-8 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 rounded-xl border border-gray-200 dark:border-gray-700"
        itemScope
        itemType="https://schema.org/Person"
      >
        {/* Author Image */}
        <a
          href={authorUrl}
          className="flex-shrink-0"
          aria-label={`View ${author}'s profile`}
        >
          <img
            src={authorImage}
            alt={author}
            itemProp="image"
            className="w-16 h-16 rounded-full border-2 border-purple-500 object-cover"
            width={64}
            height={64}
          />
        </a>

        {/* Author Info */}
        <div className="flex-1 min-w-0">
          {/* Name and Credentials */}
          <div className="mb-2">
            <a
              href={authorUrl}
              itemProp="url"
              className="text-lg font-bold text-gray-900 dark:text-white hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
            >
              <span itemProp="name">{author}</span>
            </a>
            <meta itemProp="jobTitle" content="AI Automation Expert & Instagram Growth Strategist" />
          </div>

          {/* Short Bio */}
          <p
            className="text-sm text-gray-700 dark:text-gray-300 mb-3"
            itemProp="description"
          >
            {authorBio}
          </p>

          {/* Credentials */}
          {credentials.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-3">
              {credentials.map((credential, index) => (
                <span
                  key={index}
                  className="inline-flex items-center gap-1 px-2 py-1 text-xs font-medium text-purple-700 dark:text-purple-300 bg-purple-100 dark:bg-purple-900/30 rounded-full"
                  itemProp="hasCredential"
                >
                  <span aria-hidden="true">✓</span>
                  {credential}
                </span>
              ))}
            </div>
          )}

          {/* Article Metadata */}
          {(datePublished || dateModified || readingTime) && (
            <div className="flex flex-wrap items-center gap-4 text-xs text-gray-600 dark:text-gray-400">
              {datePublished && (
                <time
                  dateTime={datePublished}
                  itemProp="datePublished"
                  className="flex items-center gap-1"
                >
                  <span aria-hidden="true">📅</span>
                  Published {new Date(datePublished).toLocaleDateString()}
                </time>
              )}
              {dateModified && dateModified !== datePublished && (
                <time
                  dateTime={dateModified}
                  itemProp="dateModified"
                  className="flex items-center gap-1"
                >
                  <span aria-hidden="true">🔄</span>
                  Updated {new Date(dateModified).toLocaleDateString()}
                </time>
              )}
              {readingTime && (
                <span className="flex items-center gap-1">
                  <span aria-hidden="true">⏱</span>
                  {readingTime} min read
                </span>
              )}
            </div>
          )}

          {/* Social Links */}
          <div className="flex items-center gap-3 mt-3">
            <a
              href="https://twitter.com/anyro"
              target="_blank"
              rel="noopener noreferrer"
              itemProp="sameAs"
              className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
              aria-label="Follow on Twitter"
            >
              <span className="sr-only">Twitter</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
            <a
              href="https://instagram.com/anyro"
              target="_blank"
              rel="noopener noreferrer"
              itemProp="sameAs"
              className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
              aria-label="Follow on Instagram"
            >
              <span className="sr-only">Instagram</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
              </svg>
            </a>
            <a
              href="https://youtube.com/@anyro"
              target="_blank"
              rel="noopener noreferrer"
              itemProp="sameAs"
              className="text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
              aria-label="Subscribe on YouTube"
            >
              <span className="sr-only">YouTube</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Hidden metadata for AI/SEO */}
      <div style={{ display: 'none' }} aria-hidden="true">
        <meta name="author-expertise" content="verified" />
        <meta name="author-authority" content="high" />
        <meta name="expert-content" content="true" />
      </div>
    </>
  )
}
