'use client'

import { ReactNode } from 'react'

interface ClientOnlyFortressProps {
  children: ReactNode
}

export default function ClientOnlyFortress({ children }: ClientOnlyFortressProps) {
  // Completely disabled fortress functionality to prevent SSR issues
  return (
    <>
      {children}
    </>
  )
}