// Key Takeaways Component - AI Summary Optimization
'use client'

import { Lightbulb } from 'lucide-react'

interface KeyTakeawaysProps {
  takeaways: string[]
  title?: string
}

export default function KeyTakeaways({
  takeaways,
  title = 'Key Takeaways'
}: KeyTakeawaysProps) {

  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: title,
    numberOfItems: takeaways.length,
    itemListElement: takeaways.map((takeaway, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: takeaway
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
        aria-label="Key takeaways"
        data-key-takeaways="true"
        data-ai-summary="true"
        className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 my-8 rounded-lg border-2 border-purple-200 dark:border-purple-800"
      >
        <h3 className="text-2xl font-bold text-purple-900 dark:text-purple-100 mb-4 flex items-center gap-2">
          <Lightbulb className="w-6 h-6 text-purple-600 dark:text-purple-400" aria-hidden="true" />
          {title}
        </h3>

        <ul
          className="space-y-3"
          role="list"
          itemScope
          itemType="https://schema.org/ItemList"
        >
          {takeaways.map((takeaway, index) => (
            <li
              key={index}
              className="flex items-start gap-3 text-gray-800 dark:text-gray-200"
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/ListItem"
              data-takeaway={index + 1}
            >
              <meta itemProp="position" content={String(index + 1)} />
              <span
                className="text-purple-600 dark:text-purple-400 font-bold flex-shrink-0 mt-1"
                aria-hidden="true"
              >
                ✓
              </span>
              <span
                itemProp="name"
                className="text-base leading-relaxed"
                data-ai-summary-point="true"
              >
                {takeaway}
              </span>
            </li>
          ))}
        </ul>

        {/* AI Context Metadata */}
        <div style={{ display: 'none' }} aria-hidden="true">
          <meta name="content-summary" content={takeaways.join(' | ')} />
          <meta name="key-points" content={takeaways.join(', ')} />
        </div>
      </aside>
    </>
  )
}
