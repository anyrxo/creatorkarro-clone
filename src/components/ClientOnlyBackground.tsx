'use client'

import dynamic from 'next/dynamic'

const NodeBackground = dynamic(
  () => import('./NodeBackground'),
  {
    ssr: false,
    loading: () => null
  }
)

export default function ClientOnlyBackground() {
  return <NodeBackground />
}