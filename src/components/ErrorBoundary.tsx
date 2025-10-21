'use client'

import React, { Component, ReactNode } from 'react'
import { ChevronRight, RefreshCcw, Home } from 'lucide-react'
import Link from 'next/link'

interface ErrorBoundaryProps {
  children: ReactNode
  fallback?: ReactNode
  onError?: (error: Error, errorInfo: React.ErrorInfo) => void
}

interface ErrorBoundaryState {
  hasError: boolean
  error: Error | null
  errorInfo: React.ErrorInfo | null
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null
    }
  }

  static getDerivedStateFromError(error: Error): Partial<ErrorBoundaryState> {
    // Update state so the next render will show the fallback UI
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // Log error to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('ErrorBoundary caught an error:', error, errorInfo)
    }

    // Update state with error details
    this.setState({
      error,
      errorInfo
    })

    // Call optional error handler
    if (this.props.onError) {
      this.props.onError(error, errorInfo)
    }

    // You could also log to an error reporting service here
    // Example: logErrorToService(error, errorInfo)
  }

  handleReset = () => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null
    })
  }

  handleReload = () => {
    window.location.reload()
  }

  render() {
    if (this.state.hasError) {
      // Custom fallback UI if provided
      if (this.props.fallback) {
        return this.props.fallback
      }

      // Default error UI
      return (
        <div className="min-h-screen bg-gradient-to-b from-black via-zinc-900 to-black flex items-center justify-center px-4">
          <div className="max-w-2xl w-full">
            {/* Error Icon */}
            <div className="flex justify-center mb-8">
              <div className="relative">
                <div className="absolute inset-0 bg-red-500/20 blur-3xl rounded-full" />
                <div className="relative bg-gradient-to-br from-red-500 to-red-600 p-6 rounded-full">
                  <svg
                    className="w-16 h-16 text-white"
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
            </div>

            {/* Error Message */}
            <div className="text-center mb-8">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Oops! Something went wrong
              </h1>
              <p className="text-xl text-zinc-300 mb-2">
                We encountered an unexpected error while rendering this page.
              </p>
              <p className="text-lg text-zinc-400">
                Don't worry, we're working on fixing it!
              </p>
            </div>

            {/* Error Details (Development Only) */}
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <div className="mb-8 p-6 bg-zinc-900/80 backdrop-blur-sm border border-red-500/30 rounded-xl">
                <h2 className="text-lg font-semibold text-red-400 mb-3">
                  Error Details (Development Only)
                </h2>
                <div className="space-y-2">
                  <div>
                    <p className="text-sm font-medium text-zinc-400">Error:</p>
                    <p className="text-sm text-red-300 font-mono bg-black/50 p-3 rounded mt-1 overflow-x-auto">
                      {this.state.error.toString()}
                    </p>
                  </div>
                  {this.state.errorInfo && (
                    <div>
                      <p className="text-sm font-medium text-zinc-400 mt-3">
                        Component Stack:
                      </p>
                      <pre className="text-xs text-zinc-300 font-mono bg-black/50 p-3 rounded mt-1 overflow-x-auto max-h-64 overflow-y-auto">
                        {this.state.errorInfo.componentStack}
                      </pre>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={this.handleReload}
                className="group flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50"
              >
                <RefreshCcw className="w-5 h-5 group-hover:rotate-180 transition-transform duration-500" />
                Reload Page
              </button>

              <Link
                href="/"
                className="group flex items-center justify-center gap-2 px-8 py-4 bg-zinc-800 hover:bg-zinc-700 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 border border-zinc-700 hover:border-zinc-600"
              >
                <Home className="w-5 h-5" />
                Go Home
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>

            {/* Support Message */}
            <div className="mt-12 text-center">
              <p className="text-sm text-zinc-400">
                If this problem persists, please{' '}
                <Link
                  href="/contact"
                  className="text-blue-400 hover:text-blue-300 underline underline-offset-4"
                >
                  contact support
                </Link>
              </p>
            </div>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
