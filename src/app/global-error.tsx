'use client'

import { useEffect } from 'react'
import { RefreshCcw } from 'lucide-react'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('Global error caught by global-error.tsx:', error)
    }
  }, [error])

  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0, fontFamily: 'system-ui, sans-serif' }}>
        <div
          style={{
            minHeight: '100vh',
            background: 'linear-gradient(to bottom, #000000, #18181b, #000000)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1rem',
          }}
        >
          <div style={{ maxWidth: '42rem', width: '100%', textAlign: 'center' }}>
            {/* Error Icon */}
            <div style={{ marginBottom: '2rem' }}>
              <div
                style={{
                  display: 'inline-block',
                  background: 'linear-gradient(to bottom right, #ef4444, #dc2626)',
                  padding: '1.5rem',
                  borderRadius: '9999px',
                }}
              >
                <svg
                  style={{ width: '4rem', height: '4rem', color: 'white' }}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
              </div>
            </div>

            {/* Error Message */}
            <h1
              style={{
                fontSize: '3rem',
                fontWeight: 'bold',
                color: 'white',
                marginBottom: '1rem',
              }}
            >
              Critical Error
            </h1>
            <p
              style={{
                fontSize: '1.25rem',
                color: '#d4d4d8',
                marginBottom: '0.5rem',
              }}
            >
              A critical error occurred while loading the application.
            </p>
            <p style={{ fontSize: '1.125rem', color: '#a1a1aa' }}>
              Please try reloading the page.
            </p>

            {/* Error Details (Development Only) */}
            {process.env.NODE_ENV === 'development' && (
              <div
                style={{
                  marginTop: '2rem',
                  padding: '1.5rem',
                  background: 'rgba(24, 24, 27, 0.8)',
                  border: '1px solid rgba(239, 68, 68, 0.3)',
                  borderRadius: '0.75rem',
                  textAlign: 'left',
                }}
              >
                <h2
                  style={{
                    fontSize: '1.125rem',
                    fontWeight: '600',
                    color: '#f87171',
                    marginBottom: '0.75rem',
                  }}
                >
                  Error Details (Development Only)
                </h2>
                <div>
                  <p style={{ fontSize: '0.875rem', color: '#a1a1aa', marginBottom: '0.25rem' }}>
                    Error:
                  </p>
                  <p
                    style={{
                      fontSize: '0.875rem',
                      color: '#fca5a5',
                      fontFamily: 'monospace',
                      background: 'rgba(0, 0, 0, 0.5)',
                      padding: '0.75rem',
                      borderRadius: '0.375rem',
                      overflowX: 'auto',
                    }}
                  >
                    {error.message || error.toString()}
                  </p>
                  {error.digest && (
                    <div style={{ marginTop: '0.75rem' }}>
                      <p
                        style={{
                          fontSize: '0.875rem',
                          color: '#a1a1aa',
                          marginBottom: '0.25rem',
                        }}
                      >
                        Digest:
                      </p>
                      <p
                        style={{
                          fontSize: '0.875rem',
                          color: '#d4d4d8',
                          fontFamily: 'monospace',
                          background: 'rgba(0, 0, 0, 0.5)',
                          padding: '0.75rem',
                          borderRadius: '0.375rem',
                        }}
                      >
                        {error.digest}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div style={{ marginTop: '2rem' }}>
              <button
                onClick={reset}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '1rem 2rem',
                  background: 'linear-gradient(to right, #2563eb, #9333ea)',
                  color: 'white',
                  fontWeight: '600',
                  borderRadius: '0.75rem',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '1rem',
                  transition: 'transform 0.3s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.05)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)'
                }}
              >
                <RefreshCcw style={{ width: '1.25rem', height: '1.25rem' }} />
                Reload Application
              </button>
            </div>
          </div>
        </div>
      </body>
    </html>
  )
}
