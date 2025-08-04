// FAQ Main Page - Comprehensive FAQ System
import { Metadata } from 'next'
import Link from 'next/link'
import { faqGenerator } from '@/lib/faq-schema-generator'
import FAQSection from '@/components/FAQSection'
import BlurIn from '@/components/magicui/blur-in'
import WordRotate from '@/components/magicui/word-rotate'
import TypingAnimation from '@/components/magicui/typing-animation'
import ShimmerButton from '@/components/magicui/shimmer-button'

export const metadata: Metadata = {
  title: 'Frequently Asked Questions | IImagined.ai',
  description: 'Get answers to all your questions about AI automation, Instagram growth, digital marketing, and online business. Comprehensive FAQ with expert insights.',
  keywords: [
    'faq', 'questions', 'ai automation faq', 'instagram growth questions',
    'digital marketing help', 'online business faq', 'support'
  ],
  openGraph: {
    title: 'FAQ - All Your Questions Answered | IImagined.ai',
    description: 'Comprehensive FAQ covering AI automation, Instagram growth, digital marketing, and online business questions.',
    type: 'website',
    url: 'https://iimagined.ai/faq'
  }
}

export default function FAQPage() {
  // Generate FAQ systems for all major topics
  const topics = ['ai-automation', 'instagram-growth', 'digital-marketing', 'online-business', 'passive-income']
  
  const faqSystems = faqGenerator.generateBulkFAQSystems(topics, {
    industry: 'digital marketing',
    tone: 'professional',
    targetKeywords: ['course', 'training', 'system', 'strategy'],
    includeLocalSEO: false
  })

  // Combined schema for all FAQ systems
  const combinedSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': Object.values(faqSystems).flatMap(system => 
      system.questions.slice(0, 3).map(q => q.schema)
    )
  }

  return (
    <>
      {/* Combined FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(combinedSchema) }}
      />
      
      <div className="min-h-screen bg-zinc-900">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-zinc-800 to-zinc-900 py-20">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              <BlurIn
                word="Frequently Asked"
                className="text-4xl md:text-5xl font-bold text-white inline-block mr-4"
                duration={0.8}
              />
              <WordRotate
                words={["Questions", "Answers", "Help", "Support"]}
                className="text-4xl md:text-5xl font-bold text-white inline-block"
                duration={2500}
              />
            </h1>
            <TypingAnimation
              text="Get instant answers to all your questions about AI automation, Instagram growth, digital marketing, and building a successful online business."
              className="text-xl text-zinc-200 mb-8 leading-relaxed"
              duration={50}
            />
            <div className="flex flex-wrap justify-center gap-4">
              {Object.keys(faqSystems).map(topic => (
                <a
                  key={topic}
                  href={`#${topic}`}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-500/50 hover:scale-105 shadow-lg hover:shadow-blue-500/25"
                  aria-label={`Jump to ${topic.replace('-', ' ')} questions`}
                >
                  {topic.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Categories */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4">
            {Object.entries(faqSystems).map(([topic, system]) => (
              <div key={topic} id={topic} className="mb-20">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-white mb-4">
                    {system.name} FAQ
                  </h2>
                  <p className="text-zinc-200 text-lg leading-relaxed">
                    {system.description}
                  </p>
                </div>
                
                <FAQSection 
                  questions={system.questions}
                  category={system.name}
                  collapsible={true}
                />
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-zinc-800 py-20">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <BlurIn
              word="Still Have Questions?"
              className="text-3xl font-bold text-white mb-6"
              duration={0.8}
            />
            <p className="text-zinc-200 text-lg mb-8 leading-relaxed">
              Can't find what you're looking for? Our expert support team is here to help 24/7.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-zinc-700 p-6 rounded-lg hover:bg-zinc-600/50 transition-all duration-300 border border-zinc-600/50 hover:border-zinc-500/50">
                <h3 className="text-xl font-semibold text-white mb-3">📧 Email Support</h3>
                <p className="text-zinc-200 mb-4">Get detailed answers within 24 hours</p>
                <a 
                  href="mailto:support@iimagined.ai" 
                  className="text-blue-400 hover:text-blue-300 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500/50 rounded px-2 py-1"
                  aria-label="Send email to support team"
                >
                  support@iimagined.ai
                </a>
              </div>
              
              <div className="bg-zinc-700 p-6 rounded-lg hover:bg-zinc-600/50 transition-all duration-300 border border-zinc-600/50 hover:border-zinc-500/50">
                <h3 className="text-xl font-semibold text-white mb-3">💬 Live Chat</h3>
                <p className="text-zinc-200 mb-4">Real-time support during business hours</p>
                <button 
                  className="text-blue-400 hover:text-blue-300 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500/50 rounded px-2 py-1"
                  aria-label="Start live chat with support"
                >
                  Start Live Chat
                </button>
              </div>
              
              <div className="bg-zinc-700 p-6 rounded-lg hover:bg-zinc-600/50 transition-all duration-300 border border-zinc-600/50 hover:border-zinc-500/50">
                <h3 className="text-xl font-semibold text-white mb-3">📚 Help Center</h3>
                <p className="text-zinc-200 mb-4">Comprehensive guides and tutorials</p>
                <Link 
                  href="/help" 
                  className="text-blue-400 hover:text-blue-300 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500/50 rounded px-2 py-1"
                  aria-label="Browse help center articles"
                >
                  Browse Help Center
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Popular Questions */}
        <section className="py-20 bg-zinc-900">
          <div className="max-w-4xl mx-auto px-4">
            <BlurIn
              word="Most Popular Questions"
              className="text-3xl font-bold text-white text-center mb-12"
              duration={0.8}
            />
            
            <div className="grid gap-6">
              {/* Extract top 5 highest priority questions across all categories */}
              {Object.values(faqSystems)
                .flatMap(system => system.questions)
                .sort((a, b) => b.priority - a.priority)
                .slice(0, 5)
                .map((faq, index) => (
                  <div key={faq.id} className="bg-zinc-800 p-6 rounded-lg border-l-4 border-blue-500 hover:bg-zinc-700/50 transition-all duration-300">
                    <h3 className="text-lg font-semibold text-white mb-3">
                      {index + 1}. {faq.question}
                    </h3>
                    <p className="text-zinc-200 leading-relaxed">
                      {faq.answer}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {faq.keywords.slice(0, 3).map(keyword => (
                        <span 
                          key={keyword}
                          className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm"
                        >
                          {keyword}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </section>

        {/* FAQ Search */}
        <section className="py-12 bg-zinc-800">
          <div className="max-w-2xl mx-auto px-4">
            <div className="bg-zinc-700 p-8 rounded-lg border border-zinc-600/50">
              <h3 className="text-2xl font-bold text-white text-center mb-6">
                Search FAQ
              </h3>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for answers..."
                  className="w-full p-4 bg-zinc-600 text-white rounded-lg pr-12 focus:outline-none focus:ring-4 focus:ring-blue-500/50 placeholder-zinc-300 transition-all duration-300"
                  id="faq-search"
                  aria-label="Search frequently asked questions"
                />
                <button 
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-zinc-400 hover:text-white transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500/50 rounded"
                  aria-label="Search FAQ"
                >
                  🔍
                </button>
              </div>
              <div id="search-results" className="mt-4 space-y-2"></div>
            </div>
          </div>
        </section>
      </div>

      {/* FAQ Search Functionality */}
      <script dangerouslySetInnerHTML={{ __html: `
        document.addEventListener('DOMContentLoaded', function() {
          const searchInput = document.getElementById('faq-search');
          const searchResults = document.getElementById('search-results');
          
          // All FAQ questions and answers for search
          const allFAQs = ${JSON.stringify(
            Object.values(faqSystems)
              .flatMap(system => system.questions)
              .map(q => ({ question: q.question, answer: q.answer, category: q.category }))
          )};
          
          searchInput.addEventListener('input', function(e) {
            const query = e.target.value.toLowerCase();
            
            if (query.length < 2) {
              searchResults.innerHTML = '';
              return;
            }
            
            const matches = allFAQs.filter(faq => 
              faq.question.toLowerCase().includes(query) || 
              faq.answer.toLowerCase().includes(query)
            ).slice(0, 5);
            
            if (matches.length === 0) {
              searchResults.innerHTML = '<p class="text-gray-400 p-2">No matches found</p>';
              return;
            }
            
            searchResults.innerHTML = matches.map(faq => 
              '<div class="bg-gray-600 p-3 rounded cursor-pointer hover:bg-gray-500" onclick="scrollToFAQ(\\''+faq.question+'\\')">'+
                '<div class="text-white font-medium">'+faq.question+'</div>'+
                '<div class="text-gray-300 text-sm">'+faq.category+'</div>'+
              '</div>'
            ).join('');
          });
        });
        
        function scrollToFAQ(question) {
          const elements = document.querySelectorAll('.faq-question');
          for (let el of elements) {
            if (el.textContent.trim() === question) {
              el.scrollIntoView({ behavior: 'smooth', block: 'center' });
              el.click(); // Open if collapsible
              break;
            }
          }
        }
      `}} />
    </>
  )
}