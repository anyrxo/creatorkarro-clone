export default function BlogLoading() {
  return (
    <div className="min-h-screen bg-dark">
      {/* Header Skeleton */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-900 to-black"></div>

        <div className="relative z-10 container mx-auto text-center">
          <div className="animate-pulse space-y-8">
            {/* Title skeleton */}
            <div className="h-16 bg-zinc-800 rounded-lg w-2/3 mx-auto"></div>

            {/* Description skeleton */}
            <div className="h-6 bg-zinc-800 rounded-lg w-1/2 mx-auto"></div>

            {/* Search bar skeleton */}
            <div className="h-14 bg-zinc-800 rounded-xl w-full max-w-2xl mx-auto mt-12"></div>
          </div>
        </div>
      </section>

      {/* Content Skeleton */}
      <section className="relative py-12 px-4">
        <div className="container mx-auto">
          <div className="animate-pulse">
            {/* Category pills skeleton */}
            <div className="flex flex-wrap gap-3 justify-center mb-12">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="h-10 bg-zinc-800 rounded-full w-24"></div>
              ))}
            </div>

            {/* Featured section skeleton */}
            <div className="mb-16">
              <div className="h-10 bg-zinc-800 rounded-lg w-48 mb-8"></div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="bg-zinc-900 rounded-xl p-6 h-80">
                    <div className="space-y-4">
                      <div className="flex gap-2">
                        <div className="h-6 bg-zinc-800 rounded-full w-20"></div>
                        <div className="h-6 bg-zinc-800 rounded-full w-16"></div>
                      </div>
                      <div className="h-8 bg-zinc-800 rounded-lg w-full"></div>
                      <div className="h-4 bg-zinc-800 rounded-lg w-full"></div>
                      <div className="h-4 bg-zinc-800 rounded-lg w-5/6"></div>
                      <div className="flex gap-4 mt-6">
                        <div className="h-4 bg-zinc-800 rounded w-20"></div>
                        <div className="h-4 bg-zinc-800 rounded w-16"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* All posts grid skeleton */}
            <div className="h-10 bg-zinc-800 rounded-lg w-48 mb-8"></div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="bg-zinc-900 rounded-xl p-6 h-80">
                  <div className="space-y-4">
                    <div className="flex gap-2">
                      <div className="h-6 bg-zinc-800 rounded-full w-20"></div>
                    </div>
                    <div className="h-8 bg-zinc-800 rounded-lg w-full"></div>
                    <div className="h-4 bg-zinc-800 rounded-lg w-full"></div>
                    <div className="h-4 bg-zinc-800 rounded-lg w-5/6"></div>
                    <div className="flex gap-4 mt-6">
                      <div className="h-4 bg-zinc-800 rounded w-20"></div>
                      <div className="h-4 bg-zinc-800 rounded w-16"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
