// Last Updated Component - Content Freshness Signal
'use client'

import { useEffect, useState } from 'react'

interface LastUpdatedProps {
  datePublished: string
  dateModified?: string
  showRelativeTime?: boolean
  showFactCheck?: boolean
}

export default function LastUpdated({
  datePublished,
  dateModified,
  showRelativeTime = true,
  showFactCheck = true
}: LastUpdatedProps) {
  const [relativeTime, setRelativeTime] = useState<string>('')

  const effectiveDate = dateModified || datePublished
  const publishDate = new Date(datePublished)
  const modifiedDate = dateModified ? new Date(dateModified) : null

  useEffect(() => {
    if (showRelativeTime) {
      setRelativeTime(getRelativeTime(effectiveDate))

      // Update relative time every minute
      const interval = setInterval(() => {
        setRelativeTime(getRelativeTime(effectiveDate))
      }, 60000)

      return () => clearInterval(interval)
    }
  }, [effectiveDate, showRelativeTime])

  function getRelativeTime(date: string): string {
    const now = Date.now()
    const then = new Date(date).getTime()
    const diffMs = now - then
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24))

    if (diffDays === 0) return 'Today'
    if (diffDays === 1) return 'Yesterday'
    if (diffDays < 7) return `${diffDays} days ago`
    if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`
    if (diffDays < 365) return `${Math.floor(diffDays / 30)} months ago`
    return `${Math.floor(diffDays / 365)} years ago`
  }

  function getFreshnessColor(): string {
    const daysSinceUpdate = Math.floor((Date.now() - new Date(effectiveDate).getTime()) / (1000 * 60 * 60 * 24))

    if (daysSinceUpdate < 30) return 'text-green-600 dark:text-green-400'
    if (daysSinceUpdate < 90) return 'text-blue-600 dark:text-blue-400'
    if (daysSinceUpdate < 180) return 'text-yellow-600 dark:text-yellow-400'
    return 'text-gray-600 dark:text-gray-400'
  }

  function getFreshnessIcon(): string {
    const daysSinceUpdate = Math.floor((Date.now() - new Date(effectiveDate).getTime()) / (1000 * 60 * 60 * 24))

    if (daysSinceUpdate < 30) return '🆕'
    if (daysSinceUpdate < 90) return '🔄'
    return '📅'
  }

  return (
    <aside
      role="contentinfo"
      aria-label="Content freshness information"
      data-last-updated="true"
      className="my-6 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700"
    >
      <div className="flex items-center justify-between flex-wrap gap-4">
        {/* Last Updated Info */}
        <div className="flex items-center gap-3">
          <span
            className="text-2xl"
            aria-hidden="true"
          >
            {getFreshnessIcon()}
          </span>
          <div>
            <div className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">
              {dateModified ? 'Last Updated' : 'Published'}
            </div>
            <time
              dateTime={effectiveDate}
              className={`text-sm font-bold ${getFreshnessColor()}`}
            >
              {new Date(effectiveDate).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
              {showRelativeTime && relativeTime && (
                <span className="ml-2 text-gray-500 dark:text-gray-400 font-normal">
                  ({relativeTime})
                </span>
              )}
            </time>
          </div>
        </div>

        {/* Fact-Checked Badge */}
        {showFactCheck && (
          <div className="flex items-center gap-2 px-3 py-2 bg-green-100 dark:bg-green-900/30 rounded-full border border-green-300 dark:border-green-700">
            <span aria-hidden="true" className="text-green-600 dark:text-green-400">
              ✓
            </span>
            <span className="text-xs font-semibold text-green-700 dark:text-green-300">
              Fact-Checked
            </span>
          </div>
        )}
      </div>

      {/* Show both published and modified dates if different */}
      {modifiedDate && modifiedDate.getTime() !== publishDate.getTime() && (
        <div className="mt-3 pt-3 border-t border-gray-200 dark:border-gray-700">
          <div className="text-xs text-gray-600 dark:text-gray-400">
            Originally published{' '}
            <time dateTime={datePublished}>
              {publishDate.toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </time>
          </div>
        </div>
      )}

      {/* Hidden metadata for SEO/AI */}
      <div style={{ display: 'none' }} aria-hidden="true">
        <meta name="date-published" content={datePublished} />
        {dateModified && <meta name="date-modified" content={dateModified} />}
        <meta name="content-freshness" content={relativeTime} />
        <meta name="fact-checked" content={showFactCheck ? 'true' : 'false'} />
        <meta name="content-verified" content="true" />
      </div>
    </aside>
  )
}

// Inline Last Updated Text (for headers)
export function InlineLastUpdated({ dateModified }: { dateModified: string }) {
  return (
    <span
      className="inline-flex items-center gap-1 text-xs text-gray-600 dark:text-gray-400"
      data-inline-updated="true"
    >
      <span aria-hidden="true">🔄</span>
      Updated{' '}
      <time dateTime={dateModified}>
        {new Date(dateModified).toLocaleDateString()}
      </time>
    </span>
  )
}

// Freshness Badge
export function FreshnessBadge({ datePublished }: { datePublished: string }) {
  const daysSincePublish = Math.floor((Date.now() - new Date(datePublished).getTime()) / (1000 * 60 * 60 * 24))

  if (daysSincePublish > 30) return null

  return (
    <span
      className="inline-flex items-center gap-1 px-2 py-1 text-xs font-bold text-green-700 dark:text-green-300 bg-green-100 dark:bg-green-900/30 rounded-full border border-green-300 dark:border-green-700"
      data-freshness-badge="true"
    >
      <span aria-hidden="true">🆕</span>
      {daysSincePublish === 0 ? 'NEW TODAY' : `NEW - ${daysSincePublish} days ago`}
    </span>
  )
}
