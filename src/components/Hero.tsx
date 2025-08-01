interface HeroProps {
  title: string
  description: string
  cta: {
    text: string
    urgency: string
  }
  countryCode: string
  currency: string
  urgency: string
}

export default function Hero({ title, description, cta, countryCode, currency, urgency }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-purple-800 to-purple-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          {title}
        </h1>
        <p className="text-xl md:text-2xl text-purple-200 mb-8 max-w-3xl mx-auto">
          {description}
        </p>
        <div className="space-y-4">
          <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 px-8 rounded-lg text-xl transition-all transform hover:scale-105">
            {cta.text}
          </button>
          <p className="text-yellow-300 text-lg font-semibold animate-pulse">
            {urgency}
          </p>
        </div>
        <div className="mt-12 flex flex-wrap justify-center gap-8 text-white">
          <div className="text-center">
            <div className="text-4xl font-bold">{currency}10K+</div>
            <div className="text-sm text-purple-200">Monthly Revenue</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold">24/7</div>
            <div className="text-sm text-purple-200">AI Automation</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold">100%</div>
            <div className="text-sm text-purple-200">Success Rate</div>
          </div>
        </div>
      </div>
    </section>
  )
}