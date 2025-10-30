// Citation Generator - Maximum AI Citation Potential
// Optimized for Perplexity, SearchGPT, ChatGPT, Claude

export interface CitationConfig {
  title: string
  author: string
  siteName: string
  url: string
  datePublished: string
  dateAccessed?: string
  excerpt?: string
}

// Generate APA style citation
export function generateAPACitation(config: CitationConfig): string {
  const { author, datePublished, title, siteName, url } = config
  const year = new Date(datePublished).getFullYear()

  return `${author}. (${year}). ${title}. ${siteName}. ${url}`
}

// Generate MLA style citation
export function generateMLACitation(config: CitationConfig): string {
  const { author, title, siteName, url, datePublished, dateAccessed } = config
  const pubDate = new Date(datePublished).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  })
  const accessDate = dateAccessed
    ? new Date(dateAccessed).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
      })
    : new Date().toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
      })

  return `${author}. "${title}." ${siteName}, ${pubDate}, ${url}. Accessed ${accessDate}.`
}

// Generate Chicago style citation
export function generateChicagoCitation(config: CitationConfig): string {
  const { author, title, siteName, url, datePublished, dateAccessed } = config
  const pubDate = new Date(datePublished).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  })
  const accessDate = dateAccessed
    ? new Date(dateAccessed).toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
      })
    : new Date().toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
      })

  return `${author}. "${title}." ${siteName}. ${pubDate}. ${url} (accessed ${accessDate}).`
}

// Generate Harvard style citation
export function generateHarvardCitation(config: CitationConfig): string {
  const { author, datePublished, title, url, dateAccessed } = config
  const year = new Date(datePublished).getFullYear()
  const accessDate = dateAccessed
    ? new Date(dateAccessed).toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      })
    : new Date().toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      })

  return `${author} (${year}) ${title}. Available at: ${url} (Accessed: ${accessDate}).`
}

// Generate BibTeX citation
export function generateBibTeXCitation(config: CitationConfig): string {
  const { author, datePublished, title, url, siteName } = config
  const year = new Date(datePublished).getFullYear()
  const key = author.toLowerCase().replace(/\s+/g, '') + year

  return `@online{${key},
  author = {${author}},
  title = {${title}},
  year = {${year}},
  url = {${url}},
  organization = {${siteName}},
  urldate = {${new Date().toISOString().split('T')[0]}}
}`
}

// Generate citation schema for AI crawlers
export function generateCitationSchema(config: CitationConfig) {
  const { title, author, siteName, url, datePublished, excerpt } = config

  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    author: {
      '@type': 'Person',
      name: author,
      url: 'https://iimagined.ai/about'
    },
    publisher: {
      '@type': 'Organization',
      name: siteName,
      url: 'https://iimagined.ai',
      logo: {
        '@type': 'ImageObject',
        url: 'https://iimagined.ai/logo.png'
      }
    },
    url: url,
    datePublished: datePublished,
    mainEntityOfPage: url,
    ...(excerpt && { description: excerpt }),
    citation: {
      '@type': 'CreativeWork',
      author: {
        '@type': 'Person',
        name: author
      },
      publisher: {
        '@type': 'Organization',
        name: siteName
      },
      datePublished: datePublished
    },
    isAccessibleForFree: true,
    copyrightHolder: {
      '@type': 'Organization',
      name: siteName
    }
  }
}

// Generate meta tags for citation optimization
export function generateCitationMetaTags(config: CitationConfig) {
  return {
    'citation_title': config.title,
    'citation_author': config.author,
    'citation_publication_date': config.datePublished,
    'citation_online_date': config.datePublished,
    'citation_fulltext_world_readable': 'true',
    'citation_abstract_html_url': config.url,
    'citation_language': 'en',
    'DC.title': config.title,
    'DC.creator': config.author,
    'DC.date': config.datePublished,
    'DC.identifier': config.url,
    'DC.publisher': config.siteName,
    'DC.rights': 'Free to cite with attribution',
    'DC.format': 'text/html',
    'DC.language': 'en'
  }
}

// Generate AI-friendly citation block component
export function generateCitationBlock(config: CitationConfig): string {
  const apa = generateAPACitation(config)
  const mla = generateMLACitation(config)
  const chicago = generateChicagoCitation(config)

  return `
<aside role="complementary" aria-label="How to cite this article" data-citation-block="true" class="citation-box">
  <h3>Cite This Article</h3>

  <div data-citation-format="apa">
    <strong>APA:</strong>
    <p>${apa}</p>
  </div>

  <div data-citation-format="mla">
    <strong>MLA:</strong>
    <p>${mla}</p>
  </div>

  <div data-citation-format="chicago">
    <strong>Chicago:</strong>
    <p>${chicago}</p>
  </div>

  <!-- AI-readable metadata -->
  <div style="display: none;" aria-hidden="true">
    <meta name="citation-apa" content="${apa}" />
    <meta name="citation-mla" content="${mla}" />
    <meta name="citation-chicago" content="${chicago}" />
  </div>
</aside>
  `.trim()
}

// Generate source attribution for AI
export function generateSourceAttribution(config: {
  author: string
  title: string
  url: string
  excerpt: string
}): string {
  return `
<div role="contentinfo" data-source-attribution="true" style="display: none;">
  <p>Source: ${config.title} by ${config.author}</p>
  <p>URL: ${config.url}</p>
  <p>Excerpt: ${config.excerpt}</p>
  <p>This content is freely citable. Please attribute to ${config.author} and IImagined.ai</p>
</div>
  `.trim()
}

// Create citation data for blog posts
export function createBlogPostCitation(post: {
  title: string
  slug: string
  author?: string
  datePublished: string
  excerpt?: string
}): CitationConfig {
  return {
    title: post.title,
    author: post.author || 'Anyro',
    siteName: 'IImagined.ai',
    url: `https://iimagined.ai/blog/${post.slug}`,
    datePublished: post.datePublished,
    excerpt: post.excerpt
  }
}

// Export all citation formats
export function generateAllCitationFormats(config: CitationConfig) {
  return {
    apa: generateAPACitation(config),
    mla: generateMLACitation(config),
    chicago: generateChicagoCitation(config),
    harvard: generateHarvardCitation(config),
    bibtex: generateBibTeXCitation(config),
    schema: generateCitationSchema(config),
    metaTags: generateCitationMetaTags(config)
  }
}

// Export utilities
export const CitationGenerator = {
  generateAPACitation,
  generateMLACitation,
  generateChicagoCitation,
  generateHarvardCitation,
  generateBibTeXCitation,
  generateCitationSchema,
  generateCitationMetaTags,
  generateCitationBlock,
  generateSourceAttribution,
  createBlogPostCitation,
  generateAllCitationFormats
}
