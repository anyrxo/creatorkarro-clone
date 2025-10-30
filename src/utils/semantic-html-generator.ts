// Semantic HTML Generator - Maximum AI & Search Engine Understanding

export interface SemanticElement {
  type: 'article' | 'section' | 'aside' | 'nav' | 'header' | 'footer' | 'main'
  role?: string
  ariaLabel?: string
  itemType?: string
  dataAttributes?: Record<string, string>
}

// Generate proper semantic HTML structure
export function generateSemanticWrapper(
  element: SemanticElement,
  content: string
): string {
  const {
    type,
    role,
    ariaLabel,
    itemType,
    dataAttributes = {}
  } = element

  const attributes: string[] = []

  if (role) attributes.push(`role="${role}"`)
  if (ariaLabel) attributes.push(`aria-label="${ariaLabel}"`)
  if (itemType) {
    attributes.push('itemScope')
    attributes.push(`itemType="${itemType}"`)
  }

  for (const [key, value] of Object.entries(dataAttributes)) {
    attributes.push(`data-${key}="${value}"`)
  }

  const attrString = attributes.length > 0 ? ' ' + attributes.join(' ') : ''

  return `<${type}${attrString}>${content}</${type}>`
}

// Generate semantic article structure
export function generateArticleStructure(config: {
  title: string
  content: string
  author: string
  datePublished: string
  category?: string
  tags?: string[]
}): string {
  const { title, content, author, datePublished, category, tags = [] } = config

  return `
<article role="article" itemscope itemtype="https://schema.org/Article" data-article-type="educational">
  <header role="banner" aria-label="Article header">
    <h1 itemprop="name" data-article-title="true">${title}</h1>

    <div role="contentinfo" aria-label="Article metadata">
      <div itemprop="author" itemscope itemtype="https://schema.org/Person">
        <meta itemprop="name" content="${author}" />
        <meta itemprop="url" content="https://iimagined.ai/about" />
      </div>

      <time datetime="${datePublished}" itemprop="datePublished" data-published="${datePublished}">
        ${new Date(datePublished).toLocaleDateString()}
      </time>

      ${category ? `<meta itemprop="articleSection" content="${category}" />` : ''}
      ${tags.map(tag => `<meta itemprop="keywords" content="${tag}" />`).join('\n      ')}
    </div>
  </header>

  <section role="main" itemprop="articleBody" data-article-content="true">
    ${content}
  </section>
</article>
  `.trim()
}

// Add semantic navigation structure
export function generateNavigationStructure(links: Array<{ text: string; url: string; description?: string }>): string {
  return `
<nav role="navigation" aria-label="Site navigation" itemscope itemtype="https://schema.org/SiteNavigationElement">
  <ul role="list">
    ${links.map((link, index) => `
    <li itemprop="name">
      <a href="${link.url}" itemprop="url" ${link.description ? `aria-label="${link.description}"` : ''}>
        ${link.text}
      </a>
    </li>
    `).join('')}
  </ul>
</nav>
  `.trim()
}

// Generate semantic section with proper attributes
export function generateSection(config: {
  heading: string
  content: string
  ariaLabel?: string
  id?: string
  dataAttributes?: Record<string, string>
}): string {
  const { heading, content, ariaLabel, id, dataAttributes = {} } = config

  const attrs = Object.entries(dataAttributes)
    .map(([key, value]) => `data-${key}="${value}"`)
    .join(' ')

  return `
<section ${id ? `id="${id}"` : ''} role="region" ${ariaLabel ? `aria-label="${ariaLabel}"` : ''} ${attrs}>
  <h2>${heading}</h2>
  ${content}
</section>
  `.trim()
}

// Generate FAQ section with proper schema
export function generateFAQSection(faqs: Array<{ question: string; answer: string }>): string {
  return `
<section role="region" aria-label="Frequently asked questions" itemscope itemtype="https://schema.org/FAQPage">
  ${faqs.map((faq, index) => `
  <div itemprop="mainEntity" itemscope itemtype="https://schema.org/Question" data-faq-item="${index + 1}">
    <h3 itemprop="name" data-question="true">${faq.question}</h3>
    <div itemprop="acceptedAnswer" itemscope itemtype="https://schema.org/Answer">
      <div itemprop="text" data-answer="true">
        ${faq.answer}
      </div>
    </div>
  </div>
  `).join('')}
</section>
  `.trim()
}

// Generate how-to steps with proper markup
export function generateHowToSteps(steps: Array<{ title: string; description: string; image?: string }>): string {
  return `
<section role="region" aria-label="Step-by-step guide" itemscope itemtype="https://schema.org/HowTo">
  <ol role="list">
    ${steps.map((step, index) => `
    <li itemprop="step" itemscope itemtype="https://schema.org/HowToStep" data-step="${index + 1}">
      <meta itemprop="position" content="${index + 1}" />
      <h3 itemprop="name">${step.title}</h3>
      <div itemprop="text">${step.description}</div>
      ${step.image ? `<img itemprop="image" src="${step.image}" alt="${step.title}" />` : ''}
    </li>
    `).join('')}
  </ol>
</section>
  `.trim()
}

// Add proper time elements with ISO 8601 format
export function generateTimeElement(date: string, label?: string): string {
  const isoDate = new Date(date).toISOString()
  return `<time datetime="${isoDate}" data-date="${isoDate}">${label || new Date(date).toLocaleDateString()}</time>`
}

// Generate breadcrumb navigation
export function generateBreadcrumbs(crumbs: Array<{ name: string; url: string }>): string {
  return `
<nav aria-label="Breadcrumb" role="navigation">
  <ol itemscope itemtype="https://schema.org/BreadcrumbList" role="list">
    ${crumbs.map((crumb, index) => `
    <li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
      <meta itemprop="position" content="${index + 1}" />
      <a itemprop="item" href="${crumb.url}">
        <span itemprop="name">${crumb.name}</span>
      </a>
    </li>
    `).join('')}
  </ol>
</nav>
  `.trim()
}

// Generate table of contents with anchor links
export function generateTableOfContents(headings: Array<{ text: string; id: string; level: number }>): string {
  return `
<aside role="complementary" aria-label="Table of contents" data-toc="true">
  <nav aria-label="Table of contents">
    <h2>Table of Contents</h2>
    <ol role="list">
      ${headings.map((heading, index) => `
      <li style="margin-left: ${(heading.level - 2) * 20}px">
        <a href="#${heading.id}" aria-label="Jump to ${heading.text}">
          ${heading.text}
        </a>
      </li>
      `).join('')}
    </ol>
  </nav>
</aside>
  `.trim()
}

// Add microdata to existing HTML content
export function enhanceWithMicrodata(html: string): string {
  return html
    // Add itemprops to common elements
    .replace(/<h1>(.*?)<\/h1>/gi, '<h1 itemprop="headline">$1</h1>')
    .replace(/<h2>(.*?)<\/h2>/gi, '<h2 itemprop="name">$1</h2>')
    .replace(/<img([^>]+)src="([^"]+)"([^>]*)>/gi, '<img$1src="$2" itemprop="image"$3>')
    .replace(/<time([^>]*)>(.*?)<\/time>/gi, '<time$1 itemprop="datePublished">$2</time>')
    // Add semantic roles
    .replace(/<div class="content">/gi, '<div class="content" role="main">')
    .replace(/<ul>/gi, '<ul role="list">')
    .replace(/<ol>/gi, '<ol role="list">')
}

// Generate citation-friendly content blocks
export function generateCitationBlock(config: {
  quote: string
  author: string
  source?: string
  url?: string
}): string {
  const { quote, author, source, url } = config

  return `
<aside role="complementary" aria-label="Citation" data-citation="true">
  <blockquote itemprop="citation" itemscope itemtype="https://schema.org/Quotation">
    <p itemprop="text">"${quote}"</p>
    <footer>
      <cite>
        <span itemprop="author" itemscope itemtype="https://schema.org/Person">
          <span itemprop="name">${author}</span>
        </span>
        ${source ? `from <span itemprop="isPartOf">${source}</span>` : ''}
        ${url ? `<a href="${url}" itemprop="url" rel="nofollow">Source</a>` : ''}
      </cite>
    </footer>
  </blockquote>
</aside>
  `.trim()
}

// Export all utilities
export const SemanticHTMLGenerator = {
  generateSemanticWrapper,
  generateArticleStructure,
  generateNavigationStructure,
  generateSection,
  generateFAQSection,
  generateHowToSteps,
  generateTimeElement,
  generateBreadcrumbs,
  generateTableOfContents,
  enhanceWithMicrodata,
  generateCitationBlock
}
