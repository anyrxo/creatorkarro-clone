'use client'

import Link from 'next/link'
import { ChevronRight, Home } from 'lucide-react'
import type { Breadcrumb } from '@/lib/internal-links'

interface BreadcrumbsProps {
  breadcrumbs: Breadcrumb[]
  className?: string
}

/**
 * Breadcrumb Component
 * SEO-friendly navigation trail with schema.org markup
 */
export default function Breadcrumbs({ breadcrumbs, className = '' }: BreadcrumbsProps) {
  // Schema.org BreadcrumbList markup
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": crumb.label,
      ...(crumb.url && { "item": `https://creatorkarro.com${crumb.url}` })
    }))
  }

  return (
    <>
      {/* Schema.org markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Visual breadcrumbs */}
      <nav aria-label="Breadcrumb" className={`mb-6 ${className}`}>
        <ol className="flex items-center flex-wrap gap-2 text-sm">
          {breadcrumbs.map((crumb, index) => {
            const isLast = index === breadcrumbs.length - 1
            const isHome = index === 0

            return (
              <li key={index} className="flex items-center gap-2">
                {index > 0 && (
                  <ChevronRight className="w-4 h-4 text-gray-600" />
                )}

                {isLast || !crumb.url ? (
                  <span className="text-gray-400 font-medium line-clamp-1">
                    {isHome && <Home className="w-4 h-4 inline mr-1" />}
                    {crumb.label}
                  </span>
                ) : (
                  <Link
                    href={crumb.url}
                    className="text-blue-400 hover:text-blue-300 transition-colors font-medium flex items-center gap-1"
                  >
                    {isHome && <Home className="w-4 h-4" />}
                    {crumb.label}
                  </Link>
                )}
              </li>
            )
          })}
        </ol>
      </nav>
    </>
  )
}
