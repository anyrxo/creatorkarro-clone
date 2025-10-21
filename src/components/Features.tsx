interface FeaturesProps {
  countryCode: string
  language: string
}

export default function Features({ countryCode, language }: FeaturesProps) {
  const features = [
    {
      title: "AI-Powered Automation",
      description: "Let artificial intelligence handle your business operations 24/7",
      icon: ""
    },
    {
      title: "Instant Setup",
      description: "Get started in minutes with our step-by-step guidance",
      icon: ""
    },
    {
      title: "Proven Results",
      description: "Join thousands who are already earning passive income",
      icon: ""
    },
    {
      title: "Local Support",
      description: `Support available in ${language} for ${countryCode} market`,
      icon: ""
    },
    {
      title: "Money-Back Guarantee",
      description: "30-day guarantee if you don't see results",
      icon: ""
    },
    {
      title: "Lifetime Updates",
      description: "Get all future updates and strategies for free",
      icon: ""
    }
  ]

  return (
    <section className="py-20 bg-gray-50" data-section="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose Our AI Automation System?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to build a successful online business in {countryCode}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}