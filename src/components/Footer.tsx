import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-dark border-t border-zinc-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          {/* Social Links */}
          <div className="flex items-center space-x-6">
            <Link
              href="https://twitter.com/anyrxo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              Twitter
            </Link>
            <Link
              href="https://www.youtube.com/@anyrxo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              Youtube
            </Link>
            <Link
              href="https://www.instagram.com/anyrxo/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              Instagram
            </Link>
            <Link
              href="/refund-policy"
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              Refund Policy
            </Link>
          </div>

          {/* Copyright */}
          <div className="text-gray-400 text-sm">
            © 2025 IIMAGINED
          </div>
        </div>
      </div>
    </footer>
  )
}
