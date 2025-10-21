import Image from 'next/image'

interface TestimonialsProps {
  testimonials: Array<{
    name: string
    result: string
    image: string
  }>
  countryCode: string
  country: string
}

export default function Testimonials({ testimonials, countryCode, country }: TestimonialsProps) {
  return (
    <section className="py-20 bg-purple-900" data-section="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Success Stories from {country}
          </h2>
          <p className="text-xl text-purple-200 max-w-3xl mx-auto">
            Real results from real people in {country} using our AI automation system
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.name} className="bg-white/10 backdrop-blur-sm p-8 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={64}
                    height={64}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="ml-4">
                  <h4 className="text-white font-bold text-lg">{testimonial.name}</h4>
                  <p className="text-purple-200 text-sm">{countryCode} Student</p>
                </div>
              </div>
              <p className="text-white italic">"{testimonial.result}"</p>
              <div className="mt-4 flex">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">★</span>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-purple-200 text-lg">
            Join thousands of successful entrepreneurs in {country}
          </p>
        </div>
      </div>
    </section>
  )
}