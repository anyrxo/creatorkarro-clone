export default function CourseLoading() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-zinc-900 to-black">
      {/* Hero Section Skeleton */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="container mx-auto">
          <div className="animate-pulse space-y-8 text-center">
            {/* Badge */}
            <div className="h-8 bg-zinc-800 rounded-full w-64 mx-auto"></div>

            {/* Title */}
            <div className="space-y-4">
              <div className="h-16 bg-zinc-800 rounded-lg w-3/4 mx-auto"></div>
              <div className="h-16 bg-zinc-800 rounded-lg w-2/3 mx-auto"></div>
            </div>

            {/* Description */}
            <div className="space-y-3">
              <div className="h-6 bg-zinc-800 rounded-lg w-5/6 mx-auto"></div>
              <div className="h-6 bg-zinc-800 rounded-lg w-4/5 mx-auto"></div>
            </div>

            {/* CTA Buttons */}
            <div className="flex gap-4 justify-center mt-8">
              <div className="h-14 bg-zinc-800 rounded-xl w-48"></div>
              <div className="h-14 bg-zinc-800 rounded-xl w-40"></div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto mt-12">
              {[1, 2, 3].map((i) => (
                <div key={i} className="space-y-2">
                  <div className="h-10 bg-zinc-800 rounded-lg mx-auto w-20"></div>
                  <div className="h-4 bg-zinc-800 rounded mx-auto w-32"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section Skeleton */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto">
          <div className="animate-pulse">
            <div className="h-12 bg-zinc-800 rounded-lg w-64 mx-auto mb-12"></div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="bg-zinc-900 rounded-xl p-8 h-64">
                  <div className="space-y-4">
                    <div className="h-12 w-12 bg-zinc-800 rounded-xl"></div>
                    <div className="h-6 bg-zinc-800 rounded-lg w-3/4"></div>
                    <div className="h-4 bg-zinc-800 rounded-lg w-full"></div>
                    <div className="h-4 bg-zinc-800 rounded-lg w-5/6"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Loading Indicator */}
      <div className="fixed bottom-8 right-8">
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 rounded-full border-4 border-zinc-800"></div>
          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-green-500 border-r-emerald-500 animate-spin"></div>
        </div>
      </div>
    </div>
  )
}
