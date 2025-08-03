'use client'

import React from 'react'
import Link from 'next/link'

export default function DartAiFreeAgenticProjectManagerPage() {
  return (
    <div className="min-h-screen bg-dark">
      <section className="section-spacing">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Dart Ai Free Agentic Project Manager
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              This page is being rebuilt with improved content. Please check back soon.
            </p>
            <Link 
              href="/blog" 
              className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Back to Blog
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
