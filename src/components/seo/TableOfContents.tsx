// Table of Contents Component - Navigation & SEO Optimization
'use client'

import { useEffect, useState } from 'react'

interface TOCHeading {
  id: string
  text: string
  level: number
}

interface TableOfContentsProps {
  headings?: TOCHeading[]
  title?: string
  autoGenerate?: boolean
}

export default function TableOfContents({
  headings = [],
  title = 'Table of Contents',
  autoGenerate = true
}: TableOfContentsProps) {
  const [tocHeadings, setTocHeadings] = useState<TOCHeading[]>(headings)
  const [activeId, setActiveId] = useState<string>('')

  useEffect(() => {
    if (autoGenerate && headings.length === 0) {
      // Auto-generate TOC from DOM headings
      const articleHeadings = document.querySelectorAll('article h2, article h3')
      const generatedHeadings: TOCHeading[] = []

      articleHeadings.forEach((heading, index) => {
        const id = heading.id || `heading-${index}`
        if (!heading.id) {
          heading.id = id
        }

        generatedHeadings.push({
          id,
          text: heading.textContent || '',
          level: parseInt(heading.tagName.charAt(1))
        })
      })

      setTocHeadings(generatedHeadings)
    }

    // Track active heading for scroll spy
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      {
        rootMargin: '-80px 0px -80% 0px'
      }
    )

    tocHeadings.forEach(({ id }) => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [autoGenerate, headings, tocHeadings])

  if (tocHeadings.length === 0) return null

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      window.history.pushState(null, '', `#${id}`)
    }
  }

  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: title,
    numberOfItems: tocHeadings.length,
    itemListElement: tocHeadings.map((heading, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: heading.text,
      url: `#${heading.id}`
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
        aria-label="Table of contents"
        data-toc="true"
        className="sticky top-24 my-8 p-6 bg-white dark:bg-gray-800 rounded-xl border-2 border-gray-200 dark:border-gray-700 shadow-lg max-h-[calc(100vh-8rem)] overflow-y-auto"
      >
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
          <span aria-hidden="true">📋</span>
          {title}
        </h2>

        <nav aria-label="Table of contents navigation">
          <ol
            role="list"
            className="space-y-2"
            itemScope
            itemType="https://schema.org/ItemList"
          >
            {tocHeadings.map((heading, index) => (
              <li
                key={heading.id}
                itemProp="itemListElement"
                itemScope
                itemType="https://schema.org/ListItem"
                style={{
                  marginLeft: `${(heading.level - 2) * 1}rem`
                }}
                data-toc-level={heading.level}
              >
                <meta itemProp="position" content={String(index + 1)} />
                <a
                  href={`#${heading.id}`}
                  onClick={(e) => handleClick(e, heading.id)}
                  itemProp="url"
                  className={`
                    block py-2 px-3 rounded-lg text-sm transition-all duration-200
                    ${activeId === heading.id
                      ? 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 font-semibold border-l-4 border-purple-600'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border-l-4 border-transparent'
                    }
                  `}
                  aria-current={activeId === heading.id ? 'location' : undefined}
                >
                  <span itemProp="name">{heading.text}</span>
                </a>
              </li>
            ))}
          </ol>
        </nav>

        {/* Jump to Top Button */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="mt-6 w-full py-2 px-4 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors text-sm font-medium"
          aria-label="Scroll to top"
        >
          ↑ Back to Top
        </button>

        {/* AI Context Metadata */}
        <div style={{ display: 'none' }} aria-hidden="true">
          <meta name="toc-sections" content={String(tocHeadings.length)} />
          <meta name="content-structure" content="organized" />
          <meta name="navigation-optimized" content="true" />
        </div>
      </aside>
    </>
  )
}

// Compact TOC for mobile or inline use
export function CompactTOC({ headings }: { headings: TOCHeading[] }) {
  const [isExpanded, setIsExpanded] = useState(false)

  if (headings.length === 0) return null

  return (
    <div
      className="my-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800"
      data-compact-toc="true"
    >
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-between text-left font-semibold text-blue-900 dark:text-blue-100"
        aria-expanded={isExpanded}
      >
        <span className="flex items-center gap-2">
          <span aria-hidden="true">📋</span>
          Jump to Section
        </span>
        <span aria-hidden="true">{isExpanded ? '▼' : '▶'}</span>
      </button>

      {isExpanded && (
        <ol className="mt-4 space-y-2 text-sm">
          {headings.map((heading) => (
            <li
              key={heading.id}
              style={{ marginLeft: `${(heading.level - 2) * 0.75}rem` }}
            >
              <a
                href={`#${heading.id}`}
                className="text-blue-700 dark:text-blue-300 hover:underline"
              >
                {heading.text}
              </a>
            </li>
          ))}
        </ol>
      )}
    </div>
  )
}
