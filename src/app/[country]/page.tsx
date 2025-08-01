// International Home Page - Country-specific content
import { notFound } from "next/navigation"
import { Metadata } from "next"
import Hero from "@/components/Hero"
import Features from "@/components/Features" 
import Testimonials from "@/components/Testimonials"
import Pricing from "@/components/Pricing"
import CTA from "@/components/CTA"
import { 
  INTERNATIONAL_MARKETS, 
  getLocalizedContent,
  generateInternationalMeta,
  generateInternationalSchema
} from "@/lib/international-seo"

interface Props {
  params: Promise<{ country: string }>
}

// Generate metadata for country-specific home pages
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params
  const countryCode = resolvedParams.country.toUpperCase()
  
  if (!INTERNATIONAL_MARKETS[countryCode]) {
    return {}
  }
  
  const meta = generateInternationalMeta(countryCode, '/')
  
  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    alternates: {
      canonical: meta.canonical
    },
    openGraph: {
      title: meta.openGraph.title,
      description: meta.openGraph.description,
      url: meta.openGraph.url,
      locale: meta.openGraph.locale,
      siteName: meta.openGraph.site_name,
      type: 'website',
      images: [{
        url: 'https://iimagined.ai/og-image.jpg',
        width: 1200,
        height: 630,
        alt: meta.title
      }]
    }
  }
}

export default async function CountryHomePage({ params }: Props) {
  const resolvedParams = await params
  const countryCode = resolvedParams.country.toUpperCase()
  
  // Return 404 if country not supported
  if (!INTERNATIONAL_MARKETS[countryCode]) {
    notFound()
  }
  
  const config = INTERNATIONAL_MARKETS[countryCode]
  const content = getLocalizedContent(countryCode)
  const schema = generateInternationalSchema(countryCode, 'home')
  
  return (
    <>
      {/* Country-specific structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      
      {/* International Hero Section */}
      <Hero 
        title={content.title}
        description={content.description}
        cta={{ text: content.cta, urgency: content.urgency }}
        countryCode={countryCode}
        currency={content.currency}
        urgency={content.urgency}
      />
      
      {/* Localized Features */}
      <Features 
        countryCode={countryCode}
        language={config.language}
      />
      
      {/* Country-specific Testimonials */}
      <Testimonials 
        testimonials={content.testimonials.map((testimonial, index) => {
          // Parse testimonial string format: "Name from Location: 'Quote'"
          const match = testimonial.match(/^([^:]+):\s*"([^"]+)"$/)
          if (match) {
            const [, nameLocation, result] = match
            return {
              name: nameLocation.trim(),
              result: result.trim(),
              image: '/placeholder-testimonial.jpg'
            }
          }
          // Fallback for unparseable testimonials
          return {
            name: `Customer ${index + 1}`,
            result: testimonial,
            image: '/placeholder-testimonial.jpg'
          }
        })}
        countryCode={countryCode}
        country={config.country}
      />
      
      {/* Localized Pricing */}
      <Pricing 
        pricing={{
          amount: `${content.pricing.symbol}${content.pricing.amount}`,
          originalAmount: `${content.pricing.symbol}${content.pricing.amount + 200}`, // Assuming 200 discount
          discount: `${content.pricing.symbol}200`,
          tax: content.pricing.tax
        }}
        currency={content.currency}
        countryCode={countryCode}
        urgency={content.urgency}
      />
      
      {/* International CTA */}
      <CTA 
        cta={content.cta}
        countryCode={countryCode}
        urgency={content.urgency}
      />
      
      {/* Country-specific FAQ Schema */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">
            Frequently Asked Questions - {config.country}
          </h2>
          
          <div className="space-y-6">
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-3">
                How fast can I see results in {config.country}?
              </h3>
              <p className="text-gray-300">
                Most students in {config.country} see initial results within 7-14 days of implementing our AI automation strategies. 
                The strategies are specifically optimized for the {config.country} market and comply with local regulations.
              </p>
            </div>
            
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-3">
                Is this course suitable for {config.country} residents?
              </h3>
              <p className="text-gray-300">
                Absolutely! This course is specifically tailored for {config.country} entrepreneurs. 
                All strategies are tested and proven to work in the {config.country} market, 
                with pricing in {content.currency} and local success stories.
              </p>
            </div>
            
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-3">
                What about taxes and compliance in {config.country}?
              </h3>
              <p className="text-gray-300">
                All our strategies are fully compliant with {config.country} laws and regulations. 
                Pricing includes {content.pricing.tax}, and we provide guidance on local tax implications 
                for your online business income.
              </p>
            </div>
            
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibent text-white mb-3">
                Do you have {config.country}-specific support?
              </h3>
              <p className="text-gray-300">
                Yes! We have dedicated support for {config.country} students in their timezone ({config.timezone}). 
                Our team understands the local market and can provide region-specific guidance.
              </p>
            </div>
          </div>
        </div>
        
        {/* FAQ Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": `How fast can I see results in ${config.country}?`,
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": `Most students in ${config.country} see initial results within 7-14 days of implementing our AI automation strategies. The strategies are specifically optimized for the ${config.country} market.`
                  }
                },
                {
                  "@type": "Question",
                  "name": `Is this course suitable for ${config.country} residents?`,
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": `Absolutely! This course is specifically tailored for ${config.country} entrepreneurs. All strategies are tested and proven to work in the ${config.country} market.`
                  }
                },
                {
                  "@type": "Question",
                  "name": `What about taxes and compliance in ${config.country}?`,
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": `All our strategies are fully compliant with ${config.country} laws and regulations. Pricing includes ${content.pricing.tax}.`
                  }
                },
                {
                  "@type": "Question", 
                  "name": `Do you have ${config.country}-specific support?`,
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": `Yes! We have dedicated support for ${config.country} students in their timezone (${config.timezone}). Our team understands the local market.`
                  }
                }
              ]
            })
          }}
        />
      </section>
      
      {/* Country-specific tracking */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            // Track country-specific page view
            if (typeof gtag !== 'undefined') {
              gtag('event', 'country_home_view', {
                event_category: 'International',
                country: '${countryCode}',
                currency: '${content.currency}',
                language: '${config.language}'
              });
            }
            
            // Track pricing visibility
            const observer = new IntersectionObserver((entries) => {
              entries.forEach(entry => {
                if (entry.isIntersecting && typeof gtag !== 'undefined') {
                  gtag('event', 'pricing_view', {
                    event_category: 'International',
                    country: '${countryCode}',
                    price: '${content.pricing.amount}',
                    currency: '${content.currency}'
                  });
                }
              });
            });
            
            // Observe pricing section when it loads
            document.addEventListener('DOMContentLoaded', () => {
              const pricingSection = document.querySelector('[data-section="pricing"]');
              if (pricingSection) {
                observer.observe(pricingSection);
              }
            });
          `
        }}
      />
    </>
  )
}