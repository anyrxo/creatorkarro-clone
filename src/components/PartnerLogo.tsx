import Image from 'next/image'

export type PartnerPlatform = 
  | 'n8n'
  | 'zapier'
  | 'make'
  | 'claude'
  | 'gemini'
  | 'loom'
  | 'nvidia'
  | 'digitalocean'
  | 'whop'
  | 'manus'

interface PartnerLogoProps {
  platform: PartnerPlatform
  size?: number
  className?: string
}

// Map platforms to their PNG files
const platformLogos: Record<PartnerPlatform, string> = {
  n8n: '/partners/n8n.png',
  zapier: '/partners/zapier.png',
  make: '/partners/make.png',
  claude: '/partners/claude.png',
  gemini: '/partners/google-gemini.png',
  loom: '/partners/loom.png',
  nvidia: '/partners/nvidia.png',
  digitalocean: '/partners/digitalocean.png',
  whop: '/partners/whop.png',
  manus: '/partners/manus-ai.png'
}

// Platform display names
const platformNames: Record<PartnerPlatform, string> = {
  n8n: 'N8N',
  zapier: 'Zapier',
  make: 'Make',
  claude: 'Claude',
  gemini: 'Gemini',
  loom: 'Loom',
  nvidia: 'NVIDIA',
  digitalocean: 'DigitalOcean',
  whop: 'Whop',
  manus: 'Manus AI'
}

export default function PartnerLogo({
  platform,
  size = 40,
  className = ''
}: PartnerLogoProps) {
  const logoPath = platformLogos[platform]
  const displayName = platformNames[platform]
  
  if (!logoPath) {
    // Fallback to letter-based icon if logo not found
    return (
      <div
        className={`inline-flex items-center justify-center rounded-lg bg-zinc-700 font-bold text-white ${className}`}
        style={{
          width: size,
          height: size,
          fontSize: size * 0.35
        }}
      >
        {displayName.substring(0, 2).toUpperCase()}
      </div>
    )
  }

  return (
    <div 
      className={`relative inline-block ${className}`}
      style={{ width: size, height: size }}
    >
      <Image
        src={logoPath}
        alt={`${displayName} logo`}
        width={size}
        height={size}
        className="object-contain"
        loading="lazy"
      />
    </div>
  )
}

// Convenience component for partner logo grids
export interface PartnerLogosProps {
  partners: {
    platform: PartnerPlatform
    name?: string
    category?: string
  }[]
  size?: number
  className?: string
  gap?: string
}

export function PartnerLogos({
  partners,
  size = 40,
  className = '',
  gap = 'gap-4'
}: PartnerLogosProps) {
  return (
    <div className={`flex ${gap} ${className}`}>
      {partners.map(({ platform }) => (
        <PartnerLogo
          key={platform}
          platform={platform}
          size={size}
        />
      ))}
    </div>
  )
}