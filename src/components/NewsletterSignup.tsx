export default function NewsletterSignup() {
  return (
    <section className="section-spacing bg-zinc-900/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-zinc-900/50 rounded-2xl p-8 text-center max-w-4xl mx-auto">
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
            className="cta-button inline-block"
          >
            Join +10k creators
          </a>
        </div>
      </div>
    </section>
  )
}
