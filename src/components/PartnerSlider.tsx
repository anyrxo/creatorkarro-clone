'use client'

import SocialIcon from './SocialIcon'
import { motion } from 'framer-motion'

export default function PartnerSlider() {
  // Explicitly map to the correct file paths in public/logos/ or default to public/social-icons/
  // If src is provided, it overrides the default SocialIcon logic.
  const partners = [
    { platform: 'nvidia', name: 'NVIDIA', src: '/logos/nvidia-removebg-preview.png' },
    { platform: 'digitalocean', name: 'DigitalOcean', src: '/logos/digitalocean.png' },
    { platform: 'n8n', name: 'N8N', src: '/logos/N8n-logo-new.png' },
    { platform: 'zapier', name: 'Zapier', src: '/logos/Zapier_logo-removebg_edited.png' },
    { platform: 'make', name: 'Make', src: '/logos/make-logo-freelogovectors.net_.png' },
    { platform: 'loom', name: 'Loom', src: '/logos/loom_logo_color.png' },
    { platform: 'beehiiv', name: 'Beehiiv', src: '/logos/beehiv.png' }, // Note typo in filename from user
    { platform: 'whop', name: 'Whop', src: '/logos/whop.png' },
    { platform: 'claude', name: 'Claude', src: '/logos/claude.png' },
    { platform: 'gemini', name: 'Gemini', src: '/logos/Google_Gemini_logo.svg.png' },
    { platform: 'runpod', name: 'RunPod', src: '/logos/runpod.avif' },
    { platform: 'fanvue', name: 'Fanvue', src: '/logos/fanvue.png' },
    { platform: 'manus', name: 'Manus', src: '/logos/manus.png' },
    { platform: 'kling', name: 'Kling AI', src: '/logos/kling.webp' }
  ]

  // Double the array for seamless loop
  const doubledPartners = [...partners, ...partners]

  return (
    <section className="py-16 bg-zinc-900/50 overflow-hidden">
      <div className="container mx-auto px-4 text-center mb-12">
        <motion.h2 
          className="text-2xl md:text-3xl font-bold text-white mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Trusted by Creators Using
        </motion.h2>
        <motion.p 
          className="text-zinc-400"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          Tools and platforms that power modern creator businesses
        </motion.p>
      </div>

      <div className="relative">
        <div className="flex animate-scroll">
          {doubledPartners.map((partner, index) => (
            <div
              key={`${partner.platform}-${index}`}
              className="flex-shrink-0 mx-8 flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity duration-300"
            >
              <SocialIcon 
                platform={partner.platform as any}
                variant="color"
                size={64}
                href={undefined}
                src={partner.src} // Pass the explicit source
                className="hover:scale-110 transition-transform"
              />
            </div>
          ))}
        </div>

        {/* Gradient overlays for smooth fade */}
        <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-zinc-900 to-transparent pointer-events-none z-10" />
        <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-zinc-900 to-transparent pointer-events-none z-10" />
      </div>
    </section>
  )
}
