import React from 'react'
import { notFound } from 'next/navigation'

export default async function BlogSlugPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  // Temporarily disabled for build
  return (
    <div className="min-h-screen bg-dark flex items-center justify-center">
      <p className="text-gray-400">Dynamic blog page temporarily disabled due to build issues.</p>
    </div>
  )
}