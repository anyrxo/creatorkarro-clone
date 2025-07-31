'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useScrollAnimation, useScrollAnimations } from '@/hooks/useScrollAnimation'

export default function BlogPage() {
  // Scroll animations
  const headerAnimation = useScrollAnimation({ threshold: 0.2 })
  const newsletterAnimation = useScrollAnimation({ threshold: 0.2 })
  const blogPosts = [
    {
      title: "How to Make $10K/Month Clipping with Whop (Using AI)",
      slug: "whop-clipping",
      image: "https://ext.same-assets.com/1161517358/3768082061.png"
    },
    {
      title: "How Arnas Made $500K from Faceless YouTube Channels Before 25",
      slug: "faceless-youtube",
      image: "https://ext.same-assets.com/1161517358/3352557511.jpeg"
    },
    {
      title: "5 Rules for Creating Digital Products That Earn $1,000+/Day",
      slug: "5-rules-for-1000-per-day-digital-products",
      image: "https://ext.same-assets.com/1161517358/2233149341.jpeg"
    },
    {
      title: "5 Profitable Business Ideas for Creators",
      slug: "5-business-ideas",
      image: "https://ext.same-assets.com/1161517358/3158317405.jpeg"
    },
    {
      title: "What I Learned After Creating 629 Instagram Posts",
      slug: "629-posts",
      image: "https://ext.same-assets.com/1161517358/3907883451.jpeg"
    },
    {
      title: "Why 'Work Harder' Is the Worst Advice You'll Ever Get",
      slug: "why-work-harder-is-the-worst-advice-you-ll-ever-get",
      image: "https://ext.same-assets.com/1161517358/3486675981.webp"
    },
    {
      title: "Why you're not growing on Instagram",
      slug: "instagram-stagnation",
      image: "https://ext.same-assets.com/1161517358/191600949.png"
    },
    {
      title: "5 Steps to go Viral on Instagram",
      slug: "go-viral",
      image: "https://ext.same-assets.com/1161517358/2372176800.jpeg"
    },
    {
      title: "Make 2024 The Best Year of Your Life - Here's How",
      slug: "2024",
      image: "https://ext.same-assets.com/1161517358/371774701.png"
    },
    {
      title: "How I Stole Iman Gadzhi's Business Model and Made $300K in 2023: A Value Creator's Journey",
      slug: "value-creator",
      image: "https://ext.same-assets.com/1161517358/4208462077.jpeg"
    },
    {
      title: "500K+ Followers In 10 Months (What I've Learned)",
      slug: "500k-followers",
      image: "https://ext.same-assets.com/1161517358/422346753.png"
    },
    {
      title: "7 Deadly Mistakes in Launching an Online Business",
      slug: "7-mistakes",
      image: "https://ext.same-assets.com/1161517358/1954019985.png"
    },
    {
      title: "7 Steps To $10K/mo With Digital Products",
      slug: "10k-month",
      image: "https://ext.same-assets.com/1161517358/3253216564.png"
    },
    {
      title: "Your Path to first $10,000 as a Content Creator",
      slug: "creator-path",
      image: "https://ext.same-assets.com/1161517358/3692619406.png"
    },
    {
      title: "Adding Alex Hormozi Captions with Just One Click Using AI",
      slug: "ai-captions",
      image: "https://ext.same-assets.com/1161517358/4097775543.png"
    },
    {
      title: "Overcoming The Fear of Posting on Social Media",
      slug: "fear-of-posting",
      image: "https://ext.same-assets.com/1161517358/518336580.png"
    },
    {
      title: "The Hidden Power of Your Personal Brand",
      slug: "personal-brand",
      image: "https://ext.same-assets.com/1161517358/1556582572.png"
    },
    {
      title: "Influencers are Lying to You, why Just Keep Posting is a terrible advice",
      slug: "influencers-are-lying",
      image: "https://ext.same-assets.com/1161517358/1982036823.png"
    },
    {
      title: "Biggest Brand Deal Ever: My Success Story",
      slug: "brand-deals",
      image: "https://ext.same-assets.com/1161517358/2786752937.png"
    },
    {
      title: "Zero to 100K+ Followers in 60 Days: Your Instagram Growth Blueprint",
      slug: "instagram-growth-blueprint",
      image: "https://ext.same-assets.com/1161517358/3425573237.png"
    },
    {
      title: "How I Made $5,000 in One Day While Traveling: A Content Creator's Journey",
      slug: "content-income",
      image: "https://ext.same-assets.com/1161517358/575595742.png"
    },
    {
      title: "Sales Notifications While Enjoying Coffee? Here's How:",
      slug: "sales-notifications",
      image: "https://ext.same-assets.com/1161517358/4169895119.png"
    },
    {
      title: "On Cloud Nine: $3,000+ Profit Using Airplane Mode",
      slug: "airplane-mode",
      image: "https://ext.same-assets.com/1161517358/4095419434.png"
    },
    {
      title: "These High Income Skills Will Make You RICH",
      slug: "high-income-skills",
      image: "https://ext.same-assets.com/1161517358/616695064.png"
    },
    {
      title: "Is It Too Late to Start on YouTube in 2023?",
      slug: "youtube-2023",
      image: "https://ext.same-assets.com/1161517358/990247447.png"
    }
  ]

  // Scroll animations for blog posts
  const { setElementRef, visibleElements } = useScrollAnimations(blogPosts.length)

  return (
    <div className="min-h-screen bg-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 section-spacing">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div 
            ref={headerAnimation.elementRef}
            className={`text-center mb-16 scroll-fade-up ${headerAnimation.isVisible ? 'visible' : ''}`}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-8">BLOG</h1>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {blogPosts.map((post, index) => (
              <div
                key={index}
                ref={setElementRef(index)}
                className={`scroll-fade-up ${visibleElements[index] ? 'visible' : ''}`}
              >
                <Link
                  href={`/blog/${post.slug}`}
                  className="group bg-zinc-900 rounded-lg overflow-hidden hover:bg-zinc-800 transition-colors duration-200 card-hover hover-lift block"
                >
                <div className="aspect-video relative">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-200"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold group-hover:text-blue-400 transition-colors duration-200">
                    {post.title}
                  </h3>
                </div>
                </Link>
              </div>
            ))}
          </div>

          {/* Newsletter Section */}
          <div 
            ref={newsletterAnimation.elementRef}
            className={`bg-zinc-900/50 rounded-2xl p-8 text-center card-hover hover-lift scroll-fade-up ${newsletterAnimation.isVisible ? 'visible' : ''}`}
          >
            <p className="text-sm text-gray-400 uppercase tracking-wider mb-4">NEWSLETTER</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Want more from me?</h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Sign up for my newsletter to receive 3 emails per week on content creation,
              audience building, marketing and more.
            </p>
            <a
              href="https://anyro.beehiiv.com/subscribe"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button inline-block btn-animate animate-glow hover-lift"
            >
              Join +10k creators
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
