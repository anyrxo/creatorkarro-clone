import React from 'react'

export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-zinc-900 to-black flex items-center justify-center">
      <div className="text-center">
        {/* Spinner */}
        <div className="relative w-24 h-24 mx-auto mb-8">
          {/* Outer ring */}
          <div className="absolute inset-0 rounded-full border-4 border-zinc-800"></div>

          {/* Animated gradient ring */}
          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-blue-500 border-r-purple-500 animate-spin"></div>

          {/* Inner glow */}
          <div className="absolute inset-3 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 blur-xl"></div>

          {/* Center dot */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 animate-pulse"></div>
          </div>
        </div>

        {/* Loading text */}
        <div className="space-y-3">
          <h2 className="text-2xl font-bold text-white">
            Loading
            <span className="inline-block animate-bounce ml-1">.</span>
            <span className="inline-block animate-bounce animation-delay-200 ml-0.5">.</span>
            <span className="inline-block animate-bounce animation-delay-400 ml-0.5">.</span>
          </h2>
          <p className="text-zinc-400">Please wait while we prepare your experience</p>
        </div>

        {/* Loading bar */}
        <div className="mt-8 w-64 h-1 mx-auto bg-zinc-800 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-shimmer bg-[length:200%_100%]"></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite linear;
        }
        .animation-delay-200 {
          animation-delay: 200ms;
        }
        .animation-delay-400 {
          animation-delay: 400ms;
        }
      `}</style>
    </div>
  )
}
