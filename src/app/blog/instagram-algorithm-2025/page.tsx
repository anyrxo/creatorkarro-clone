import { Metadata } from 'next'
import { generateOptimizedMeta } from '@/utils/metaGenerator'
import FAQSchema from '@/components/seo/FAQSchema'

export const metadata: Metadata = {
  "title": "Instagram Algorithm 2025: Complete Guide [2025] | IImagined.ai",
  "description": "Master Instagram Algorithm 2025 with this comprehensive guide. Step-by-step tutorials, expert tips, and proven strategies for real results.",
  "keywords": "instagram growth, instagram marketing, instagram strategy, instagram algorithm, instagram engagement, instagram followers, instagram content creation, social media marketing, influencer marketing, instagram business, Instagram Algorithm 2025, Instagram Algorithm 2025 course, Instagram Algorithm 2025 training, learn Instagram Algorithm 2025, Instagram Algorithm 2025 mastery",
  "openGraph": {
    "title": "Instagram Algorithm 2025: Complete Guide [2025] | IImagined.ai",
    "description": "Master Instagram Algorithm 2025 with this comprehensive guide. Step-by-step tutorials, expert tips, and proven strategies for real results.",
    "images": [
      {
        "url": "/api/og?title=Instagram%20Algorithm%202025%3A%20Complete%20Guide%20%5B2025%5D&urgency=true",
        "width": 1200,
        "height": 630,
        "alt": "Instagram Algorithm 2025: Complete Guide [2025] | IImagined.ai"
      }
    ],
    "type": "website",
    "siteName": "IImagined.ai"
  },
  "twitter": {
    "card": "summary_large_image",
    "title": "Instagram Algorithm 2025: Complete Guide [2025] | IImagined.ai",
    "description": "Master Instagram Algorithm 2025 with this comprehensive guide. Step-by-step tutorials, expert tips, and proven strategies for real results.",
    "images": [
      "/api/og?title=Instagram%20Algorithm%202025%3A%20Complete%20Guide%20%5B2025%5D&urgency=true"
    ]
  },
  "robots": {
    "index": true,
    "follow": true,
    "googleBot": {
      "index": true,
      "follow": true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  },
  "alternates": {
    "canonical": "https://iimagined.ai/instagram-algorithm-2025"
  }
}

export default function InstagramAlgorithm2025Page() {
  const tableOfContents = ["How the Instagram Algorithm Really Works","The 30-Minute Window Strategy","Content Format Prioritization","Engagement Velocity Hacking","Advanced Algorithm Secrets"]
  const faqs = [{"question":"How does the Instagram algorithm work in 2025?","answer":"The Instagram algorithm prioritizes content based on interest prediction, relationship strength, timeliness, and performance history."},{"question":"What is the golden 30-minute window?","answer":"The first 30 minutes after posting is when the algorithm determines your content's distribution potential based on engagement velocity."}]

  return (
    <div className="min-h-screen bg-dark text-white">
      <FAQSchema faqs={faqs} displayType="accordion" />
      
      <article className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Instagram Algorithm 2025: Complete Mastery Guide</h1>
          <p className="text-xl text-zinc-300 mb-8">Master the Instagram algorithm in 2025 with insider strategies that drive explosive growth and engagement.</p>
          
          {/* Table of Contents */}
          <div className="bg-zinc-900/50 rounded-xl p-6 mb-12">
            <h2 className="text-2xl font-bold mb-4">Table of Contents</h2>
            <ul className="space-y-2">
              {tableOfContents.map((item, index) => (
                <li key={index}>
                  <a href={`#section-${index + 1}`} className="text-blue-400 hover:text-blue-300">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Content sections would go here */}
          /* Content sections would be generated here */
          
          {/* FAQ Section */}
          <section className="mt-16">
            <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
            <FAQSchema faqs={faqs} displayType="accordion" />
          </section>
          
          {/* CTA Section */}
          <section className="mt-16 text-center bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-2xl p-8">
            <h2 className="text-3xl font-bold mb-4">Ready to Master Instagram Algorithm 2025?</h2>
            <p className="text-xl text-zinc-300 mb-6">
              Join 127K+ students who have transformed their results with our proven system.
            </p>
            <a 
              href="/instagram-ignited"
              className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-4 px-8 rounded-xl text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
            >
              Get Started Today - 73% OFF
            </a>
          </section>
        </div>
      </article>
    </div>
  )
}