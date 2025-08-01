interface PricingProps {
  pricing: {
    amount: string
    originalAmount: string
    discount: string
    tax: string
  }
  currency: string
  countryCode: string
  urgency: string
}

export default function Pricing({ pricing, currency, countryCode, urgency }: PricingProps) {
  return (
    <section className="py-20 bg-gray-50" data-section="pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Get Instant Access Today
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Special pricing for {countryCode} residents - Limited time offer
          </p>
        </div>
        
        <div className="max-w-lg mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="bg-gradient-to-r from-purple-600 to-purple-700 p-8 text-center">
              <h3 className="text-3xl font-bold text-white mb-2">Complete AI Business System</h3>
              <p className="text-purple-200">Everything you need to succeed online</p>
            </div>
            
            <div className="p-8">
              <div className="text-center mb-8">
                <div className="flex items-center justify-center gap-4">
                  <span className="text-3xl text-gray-400 line-through">{currency}{pricing.originalAmount}</span>
                  <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    {pricing.discount} OFF
                  </span>
                </div>
                <div className="text-6xl font-bold text-gray-900 mt-2">
                  {currency}{pricing.amount}
                </div>
                <p className="text-gray-600 mt-2">One-time payment • {pricing.tax} included</p>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <span className="text-green-500 font-bold text-xl mr-3">✓</span>
                  <span className="text-gray-700">Complete AI automation training</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 font-bold text-xl mr-3">✓</span>
                  <span className="text-gray-700">Done-for-you templates & systems</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 font-bold text-xl mr-3">✓</span>
                  <span className="text-gray-700">24/7 support in your timezone</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 font-bold text-xl mr-3">✓</span>
                  <span className="text-gray-700">Lifetime updates & new strategies</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 font-bold text-xl mr-3">✓</span>
                  <span className="text-gray-700">30-day money-back guarantee</span>
                </li>
              </ul>
              
              <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 rounded-lg text-xl transition-all transform hover:scale-105">
                Get Instant Access Now
              </button>
              
              <p className="text-center text-red-600 font-bold mt-4 animate-pulse">
                {urgency}
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-600">
            🔒 Secure checkout • 🌍 Available in {countryCode} • 💳 All payment methods accepted
          </p>
        </div>
      </div>
    </section>
  )
}