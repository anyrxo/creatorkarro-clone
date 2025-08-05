import dynamic from 'next/dynamic'
import React, { ReactNode } from 'react'

// NoSSR wrapper component
export function NoSSR({ children, fallback = null }: { children: ReactNode; fallback?: ReactNode }) {
  const [hasMounted, setHasMounted] = React.useState(false)

  React.useEffect(() => {
    setHasMounted(true)
  }, [])

  if (!hasMounted) {
    return <>{fallback}</>
  }

  return <>{children}</>
}

// Dynamic wrapper for client-only components
export const ClientOnly = dynamic(() => Promise.resolve(({ children }: { children: ReactNode }) => <>{children}</>), {
  ssr: false
})

export default NoSSR