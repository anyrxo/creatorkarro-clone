interface CTAProps {
  cta: {
    text: string
    urgency: string
  }
  countryCode: string
  urgency: string
}

export default function CTA({ cta, countryCode, urgency }: CTAProps) {
  return (
    <section className="py-20 bg-gradient-to-r from-purple-900 to-purple-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Ready to Transform Your Life?
        </h2>
        <p className="text-xl text-purple-200 mb-8">
          Join thousands of successful entrepreneurs in {countryCode} who are already living their dream life
        </p>
        
        <div className="space-y-6">
          <button className="bg-white hover:bg-gray-100 text-purple-900 font-bold py-5 px-12 rounded-lg text-xl transition-all transform hover:scale-105 shadow-2xl">
            {cta.text}
          </button>
          
          <p className="text-yellow-300 text-lg font-bold animate-pulse">
            {urgency}
          </p>
          
          <div className="flex justify-center gap-8 text-white">
            <div className="flex items-center">
              <span className="text-2xl mr-2">✓</span>
              <span>Instant Access</span>
            </div>
            <div className="flex items-center">
              <span className="text-2xl mr-2">✓</span>
              <span>30-Day Guarantee</span>
            </div>
            <div className="flex items-center">
              <span className="text-2xl mr-2">✓</span>
              <span>24/7 Support</span>
            </div>
          </div>
        </div>
        
        <div className="mt-12 p-6 bg-white/10 backdrop-blur-sm rounded-lg">
          <p className="text-purple-200 text-sm">
            ⚠ Warning: Due to high demand in {countryCode}, we may need to close registration at any time. 
            The current special price is only guaranteed for the next 24 hours.
          </p>
        </div>
      </div>
    </section>
  )
}