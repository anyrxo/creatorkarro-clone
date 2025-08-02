import PartnerLogo, { PartnerPlatform } from './PartnerLogo'

interface PartnersSectionProps {
  title?: string
  subtitle?: string
  className?: string
}

const partners: { platform: PartnerPlatform; name: string; category: string }[] = [
  { platform: 'n8n', name: 'N8N', category: 'Automation' },
  { platform: 'zapier', name: 'Zapier', category: 'Automation' },
  { platform: 'make', name: 'Make', category: 'Automation' },
  { platform: 'claude', name: 'Claude', category: 'AI Assistant' },
  { platform: 'gemini', name: 'Gemini', category: 'AI Assistant' },
  { platform: 'loom', name: 'Loom', category: 'Recording' },
  { platform: 'nvidia', name: 'NVIDIA', category: 'AI Computing' },
  { platform: 'digitalocean', name: 'DigitalOcean', category: 'Cloud Hosting' },
  { platform: 'whop', name: 'Whop', category: 'Course Platform' },
  { platform: 'manus', name: 'Manus AI', category: 'AI Tools' }
]

export default function PartnersSection({
  title = "Trusted by Industry Leaders",
  subtitle = "Learn with the tools that power modern businesses",
  className = ""
}: PartnersSectionProps) {
  return (
    <section className={`py-16 bg-zinc-900/30 ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{title}</h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">{subtitle}</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
          {partners.map((partner) => (
            <div
              key={partner.platform}
              className="group relative bg-zinc-800/50 backdrop-blur-sm rounded-xl p-6 border border-zinc-700/50 hover:border-blue-500/50 transition-all duration-300 hover:scale-105"
            >
              <div className="flex flex-col items-center text-center">
                <PartnerLogo 
                  platform={partner.platform}
                  size={48}
                  className="mb-4 group-hover:scale-110 transition-transform opacity-80 group-hover:opacity-100"
                />
                <h3 className="font-semibold text-white text-sm mb-1">{partner.name}</h3>
                <p className="text-xs text-zinc-400">{partner.category}</p>
              </div>
              
              {/* Hover effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Compact version for smaller sections
export function PartnersLogosRow({ 
  logoSize = 40,
  gap = "gap-8",
  className = "" 
}: {
  logoSize?: number
  gap?: string
  className?: string
}) {
  return (
    <div className={`flex flex-wrap justify-center items-center ${gap} ${className}`}>
      {partners.map((partner) => (
        <div
          key={partner.platform}
          className="opacity-60 hover:opacity-100 transition-opacity duration-300"
          title={partner.name}
        >
          <PartnerLogo 
            platform={partner.platform}
            size={logoSize}
          />
        </div>
      ))}
    </div>
  )
}