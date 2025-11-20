import Link from 'next/link'
import { Suspense } from 'react'

export default function NotFound() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
        <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-center">
            <h1 className="text-6xl font-bold text-white mb-4">404</h1>
            <h2 className="text-2xl text-gray-300 mb-8">Page Not Found</h2>
            <Link href="/" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            Go Home
            </Link>
        </div>
        </div>
    </Suspense>
  )
}
