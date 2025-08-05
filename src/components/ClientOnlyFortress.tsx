'use client'

import dynamic from 'next/dynamic'
import { ReactNode } from 'react'

const FortressProvider = dynamic(
  () => import('./FortressProvider').then(mod => ({ default: mod.FortressProvider })),
  {
    ssr: false,
    loading: () => null
  }
)

interface ClientOnlyFortressProps {
  children: ReactNode
}

export default function ClientOnlyFortress({ children }: ClientOnlyFortressProps) {
  return (
    <FortressProvider>
      {children}
    </FortressProvider>
  )
}