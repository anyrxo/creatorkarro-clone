// International SEO Domination System - Multi-Language & Multi-Country
export interface InternationalConfig {
  country: string
  language: string
  currency: string
  domain?: string
  hreflang: string
  timezone: string
}

export interface LocalizedContent {
  title: string
  description: string
  keywords: string[]
  currency: string
  pricing: {
    symbol: string
    amount: number
    tax: string
  }
  testimonials: string[]
  urgency: string
  cta: string
}

// International market configuration
export const INTERNATIONAL_MARKETS: Record<string, InternationalConfig> = {
  'US': {
    country: 'United States',
    language: 'English',
    currency: 'USD',
    hreflang: 'en-US',
    timezone: 'America/New_York'
  },
  'CA': {
    country: 'Canada',
    language: 'English',
    currency: 'CAD',
    hreflang: 'en-CA',
    timezone: 'America/Toronto'
  },
  'GB': {
    country: 'United Kingdom',
    language: 'English',
    currency: 'GBP',
    hreflang: 'en-GB',
    timezone: 'Europe/London'
  },
  'AU': {
    country: 'Australia',
    language: 'English',
    currency: 'AUD',
    hreflang: 'en-AU',
    timezone: 'Australia/Sydney'
  },
  'DE': {
    country: 'Germany',
    language: 'German',
    currency: 'EUR',
    hreflang: 'de-DE',
    timezone: 'Europe/Berlin'
  },
  'FR': {
    country: 'France',
    language: 'French',
    currency: 'EUR',
    hreflang: 'fr-FR',
    timezone: 'Europe/Paris'
  },
  'ES': {
    country: 'Spain',
    language: 'Spanish',
    currency: 'EUR',
    hreflang: 'es-ES',
    timezone: 'Europe/Madrid'
  },
  'IT': {
    country: 'Italy',
    language: 'Italian',
    currency: 'EUR',
    hreflang: 'it-IT',
    timezone: 'Europe/Rome'
  },
  'BR': {
    country: 'Brazil',
    language: 'Portuguese',
    currency: 'BRL',
    hreflang: 'pt-BR',
    timezone: 'America/Sao_Paulo'
  },
  'MX': {
    country: 'Mexico',
    language: 'Spanish',
    currency: 'MXN',
    hreflang: 'es-MX',
    timezone: 'America/Mexico_City'
  },
  'IN': {
    country: 'India',
    language: 'English',
    currency: 'INR',
    hreflang: 'en-IN',
    timezone: 'Asia/Kolkata'
  },
  'JP': {
    country: 'Japan',
    language: 'Japanese',
    currency: 'JPY',
    hreflang: 'ja-JP',
    timezone: 'Asia/Tokyo'
  },
  'SG': {
    country: 'Singapore',
    language: 'English',
    currency: 'SGD',
    hreflang: 'en-SG',
    timezone: 'Asia/Singapore'
  }
}

// Localized content database
export const LOCALIZED_CONTENT: Record<string, LocalizedContent> = {
  'US': {
    title: 'Master AI Automation & Instagram Growth | #1 Course in America',
    description: 'Join 127K+ American entrepreneurs mastering AI automation and Instagram growth. Proven strategies generating $2.3M+ revenue across the United States.',
    keywords: [
      'ai automation usa', 'instagram growth america', 'make money online usa',
      'digital marketing course america', 'passive income strategies usa',
      'chatgpt business automation', 'social media marketing usa'
    ],
    currency: 'USD',
    pricing: { symbol: '$', amount: 497, tax: 'Plus applicable state taxes' },
    testimonials: [
      'Sarah from New York: "Went from $0 to $15K/month in 4 months!"',
      'Mike from California: "This course changed my life - now making $25K monthly"',
      'Jessica from Texas: "Finally found a system that actually works!"'
    ],
    urgency: 'Limited time offer - US residents only!',
    cta: 'Join 127K+ American Success Stories'
  },
  'CA': {
    title: 'AI Automation & Instagram Growth Course | #1 in Canada',
    description: 'Top-rated AI automation course for Canadian entrepreneurs. Join thousands of Canadians building profitable online businesses with proven strategies.',
    keywords: [
      'ai automation canada', 'instagram growth canadian', 'make money online canada',
      'digital marketing course toronto', 'passive income vancouver',
      'online business montreal', 'social media marketing calgary'
    ],
    currency: 'CAD',
    pricing: { symbol: 'C$', amount: 647, tax: 'HST/GST included' },
    testimonials: [
      'David from Toronto: "Made C$18K in my first 3 months!"',
      'Emma from Vancouver: "Best investment I ever made - C$22K monthly now"',
      'Alex from Montreal: "Finally, a course that delivers results!"'
    ],
    urgency: 'Exclusive Canadian launch pricing - Save C$300!',
    cta: 'Join Thousands of Canadian Winners'
  },
  'GB': {
    title: 'AI Automation & Instagram Growth | UK\'s #1 Course',
    description: 'Britain\'s leading AI automation and Instagram growth course. Join UK entrepreneurs generating substantial income with our Brexit-proof strategies.',
    keywords: [
      'ai automation uk', 'instagram growth britain', 'make money online uk',
      'digital marketing course london', 'passive income manchester',
      'online business birmingham', 'social media marketing scotland'
    ],
    currency: 'GBP',
    pricing: { symbol: '£', amount: 397, tax: 'VAT included' },
    testimonials: [
      'James from London: "Generated £12K in just 2 months!"',
      'Sophie from Manchester: "This system is brilliant - now earning £20K monthly"',
      'Tom from Edinburgh: "Best decision I made this year!"'
    ],
    urgency: 'Brexit-proof income strategies - Limited UK access!',
    cta: 'Join British Success Stories'
  },
  'AU': {
    title: 'AI Automation & Instagram Growth | Australia\'s Premier Course',
    description: 'Australia\'s top-rated AI automation course. Join Aussie entrepreneurs from Sydney to Perth building successful online businesses.',
    keywords: [
      'ai automation australia', 'instagram growth aussie', 'make money online australia',
      'digital marketing course sydney', 'passive income melbourne',
      'online business brisbane', 'social media marketing perth'
    ],
    currency: 'AUD',
    pricing: { symbol: 'A$', amount: 697, tax: 'GST included' },
    testimonials: [
      'Steve from Sydney: "Made A$16K in my first quarter!"',
      'Kate from Melbourne: "This course is a game-changer - A$28K monthly!"',
      'Chris from Brisbane: "Finally cracked the code to online success!"'
    ],
    urgency: 'Australian exclusive access - Don\'t miss out!',
    cta: 'Join Aussie Winners Today'
  },
  'DE': {
    title: 'KI-Automatisierung & Instagram-Wachstum | #1 Kurs in Deutschland',
    description: 'Deutschlands führender KI-Automatisierungs- und Instagram-Wachstumskurs. Schließen Sie sich deutschen Unternehmern an, die profitable Online-Businesses aufbauen.',
    keywords: [
      'ki automatisierung deutschland', 'instagram wachstum german', 'geld verdienen online deutschland',
      'digital marketing kurs berlin', 'passives einkommen münchen',
      'online business hamburg', 'social media marketing köln'
    ],
    currency: 'EUR',
    pricing: { symbol: '€', amount: 447, tax: 'MwSt. inklusive' },
    testimonials: [
      'Hans aus Berlin: "€14K in nur 3 Monaten verdient!"',
      'Anna aus München: "Dieser Kurs hat mein Leben verändert - €21K monatlich!"',
      'Klaus aus Hamburg: "Endlich ein System, das funktioniert!"'
    ],
    urgency: 'DSGVO-konforme Strategien - Begrenzte deutsche Verfügbarkeit!',
    cta: 'Deutschen Erfolgsgeschichten beitreten'
  },
  'FR': {
    title: 'Automatisation IA & Croissance Instagram | Cours #1 en France',
    description: 'Le cours d\'automatisation IA et de croissance Instagram le plus populaire en France. Rejoignez les entrepreneurs français qui réussissent.',
    keywords: [
      'automatisation ia france', 'croissance instagram français', 'gagner argent en ligne france',
      'cours marketing digital paris', 'revenu passif lyon',
      'business en ligne marseille', 'marketing médias sociaux toulouse'
    ],
    currency: 'EUR',
    pricing: { symbol: '€', amount: 447, tax: 'TVA incluse' },
    testimonials: [
      'Pierre de Paris: "14K€ générés en 3 mois seulement!"',
      'Marie de Lyon: "Ce cours a changé ma vie - 21K€ par mois!"',
      'Jean de Marseille: "Enfin un système qui marche vraiment!"'
    ],
    urgency: 'Offre limitée pour les résidents français!',
    cta: 'Rejoindre les Success Stories Françaises'
  },
  'ES': {
    title: 'Automatización IA y Crecimiento Instagram | Curso #1 en España',
    description: 'El curso líder de automatización IA y crecimiento de Instagram en España. Únete a emprendedores españoles que construyen negocios exitosos.',
    keywords: [
      'automatización ia españa', 'crecimiento instagram español', 'ganar dinero online españa',
      'curso marketing digital madrid', 'ingresos pasivos barcelona',
      'negocio online valencia', 'marketing redes sociales sevilla'
    ],
    currency: 'EUR',
    pricing: { symbol: '€', amount: 447, tax: 'IVA incluido' },
    testimonials: [
      'Carlos de Madrid: "¡14K€ generados en solo 3 meses!"',
      'Ana de Barcelona: "Este curso cambió mi vida - ¡21K€ mensuales!"',
      'Miguel de Valencia: "¡Por fin un sistema que realmente funciona!"'
    ],
    urgency: '¡Oferta limitada para residentes españoles!',
    cta: 'Únete a Historias de Éxito Españolas'
  },
  'IT': {
    title: 'Automazione IA e Crescita Instagram | Corso #1 in Italia',
    description: 'Il corso di automazione IA e crescita Instagram più popolare in Italia. Unisciti agli imprenditori italiani che costruiscono business di successo.',
    keywords: [
      'automazione ia italia', 'crescita instagram italiano', 'guadagnare online italia',
      'corso marketing digitale roma', 'reddito passivo milano',
      'business online napoli', 'marketing social media torino'
    ],
    currency: 'EUR',
    pricing: { symbol: '€', amount: 447, tax: 'IVA inclusa' },
    testimonials: [
      'Marco da Roma: "14K€ generati in soli 3 mesi!"',
      'Giulia da Milano: "Questo corso ha cambiato la mia vita - 21K€ al mese!"',
      'Antonio da Napoli: "Finalmente un sistema che funziona davvero!"'
    ],
    urgency: 'Offerta limitata per residenti italiani!',
    cta: 'Unisciti alle Storie di Successo Italiane'
  },
  'BR': {
    title: 'Automação IA e Crescimento Instagram | Curso #1 no Brasil',
    description: 'O curso líder de automação IA e crescimento do Instagram no Brasil. Junte-se a empreendedores brasileiros construindo negócios lucrativos.',
    keywords: [
      'automação ia brasil', 'crescimento instagram brasileiro', 'ganhar dinheiro online brasil',
      'curso marketing digital são paulo', 'renda passiva rio janeiro',
      'negócio online brasília', 'marketing mídias sociais salvador'
    ],
    currency: 'BRL',
    pricing: { symbol: 'R$', amount: 1897, tax: 'Impostos inclusos' },
    testimonials: [
      'João de São Paulo: "R$52K gerados em apenas 3 meses!"',
      'Maria do Rio: "Este curso mudou minha vida - R$78K mensais!"',
      'Carlos de Brasília: "Finalmente um sistema que realmente funciona!"'
    ],
    urgency: 'Oferta limitada para residentes brasileiros!',
    cta: 'Junte-se às Histórias de Sucesso Brasileiras'
  },
  'MX': {
    title: 'Automatización IA y Crecimiento Instagram | Curso #1 en México',
    description: 'El curso líder de automatización IA y crecimiento de Instagram en México. Únete a emprendedores mexicanos construyendo negocios exitosos.',
    keywords: [
      'automatización ia méxico', 'crecimiento instagram mexicano', 'ganar dinero online méxico',
      'curso marketing digital ciudad méxico', 'ingresos pasivos guadalajara',
      'negocio online monterrey', 'marketing redes sociales puebla'
    ],
    currency: 'MXN',
    pricing: { symbol: '$', amount: 8497, tax: 'IVA incluido' },
    testimonials: [
      'Luis de Ciudad de México: "$240K MXN generados en 3 meses!"',
      'Carmen de Guadalajara: "Este curso cambió mi vida - $360K MXN mensuales!"',
      'Roberto de Monterrey: "¡Por fin un sistema que funciona!"'
    ],
    urgency: '¡Oferta limitada para residentes mexicanos!',
    cta: 'Únete a Historias de Éxito Mexicanas'
  },
  'IN': {
    title: 'AI Automation & Instagram Growth | India\'s #1 Course',
    description: 'India\'s leading AI automation and Instagram growth course. Join Indian entrepreneurs from Mumbai to Bangalore building successful online businesses.',
    keywords: [
      'ai automation india', 'instagram growth indian', 'make money online india',
      'digital marketing course mumbai', 'passive income bangalore',
      'online business delhi', 'social media marketing chennai'
    ],
    currency: 'INR',
    pricing: { symbol: '₹', amount: 34997, tax: 'GST included' },
    testimonials: [
      'Raj from Mumbai: "Generated ₹1.2L in just 2 months!"',
      'Priya from Bangalore: "This course is amazing - now earning ₹2.5L monthly!"',
      'Amit from Delhi: "Best investment for Indian entrepreneurs!"'
    ],
    urgency: 'Exclusive launch pricing for Indian residents!',
    cta: 'Join Indian Success Stories'
  },
  'JP': {
    title: 'AI自動化＆Instagramグロース | 日本の#1コース',
    description: '日本で最も人気のAI自動化とInstagramグロースコース。成功したオンラインビジネスを構築する日本の起業家に参加してください。',
    keywords: [
      'ai自動化 日本', 'instagram成長 日本語', 'オンラインで稼ぐ 日本',
      'デジタルマーケティング講座 東京', '受動的収入 大阪',
      'オンラインビジネス 名古屋', 'ソーシャルメディアマーケティング 福岡'
    ],
    currency: 'JPY',
    pricing: { symbol: '¥', amount: 54997, tax: '消費税込み' },
    testimonials: [
      '東京の田中さん: "わずか3ヶ月で150万円を獲得！"',
      '大阪の佐藤さん: "このコースは人生を変えました - 月収250万円！"',
      '名古屋の鈴木さん: "ついに本当に機能するシステムを見つけました！"'
    ],
    urgency: '日本居住者限定オファー！',
    cta: '日本のサクセスストーリーに参加'
  },
  'SG': {
    title: 'AI Automation & Instagram Growth | Singapore\'s Premier Course',
    description: 'Singapore\'s top-rated AI automation and Instagram growth course. Join Singaporean entrepreneurs building profitable online businesses.',
    keywords: [
      'ai automation singapore', 'instagram growth singaporean', 'make money online singapore',
      'digital marketing course singapore', 'passive income singapore',
      'online business singapore', 'social media marketing singapore'
    ],
    currency: 'SGD',
    pricing: { symbol: 'S$', amount: 697, tax: 'GST included' },
    testimonials: [
      'Wei Ming from Singapore: "Generated S$18K in 3 months!"',
      'Sarah from Singapore: "This course is incredible - S$30K monthly now!"',
      'Ahmad from Singapore: "Best decision for my business!"'
    ],
    urgency: 'Exclusive Singapore launch pricing!',
    cta: 'Join Singapore Success Stories'
  }
}

// Generate hreflang tags for international SEO
export function generateHreflangTags(currentPath: string): string[] {
  const hreflangs: string[] = []
  
  Object.entries(INTERNATIONAL_MARKETS).forEach(([countryCode, config]) => {
    const url = countryCode === 'US' 
      ? `https://iimagined.ai${currentPath}`
      : `https://iimagined.ai/${countryCode.toLowerCase()}${currentPath}`
    
    hreflangs.push(`<link rel="alternate" hreflang="${config.hreflang}" href="${url}" />`)
  })
  
  // Add x-default for fallback
  hreflangs.push(`<link rel="alternate" hreflang="x-default" href="https://iimagined.ai${currentPath}" />`)
  
  return hreflangs
}

// Get localized content based on country
export function getLocalizedContent(countryCode: string): LocalizedContent {
  return LOCALIZED_CONTENT[countryCode] || LOCALIZED_CONTENT['US']
}

// Generate international sitemap
export function generateInternationalSitemap(): string[] {
  const baseUrls = [
    '/',
    '/courses',
    '/blog',
    '/about',
    '/resources',
    '/instagram-ignited'
  ]
  
  const urls: string[] = []
  
  baseUrls.forEach(path => {
    Object.keys(INTERNATIONAL_MARKETS).forEach(countryCode => {
      const url = countryCode === 'US' 
        ? `https://iimagined.ai${path}`
        : `https://iimagined.ai/${countryCode.toLowerCase()}${path}`
      
      urls.push(`
  <url>
    <loc>${url}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>`)
    })
  })
  
  return urls
}

// Generate structured data for international markets
export function generateInternationalSchema(countryCode: string, pageType: 'home' | 'course' | 'blog') {
  const config = INTERNATIONAL_MARKETS[countryCode] || INTERNATIONAL_MARKETS['US']
  const content = getLocalizedContent(countryCode)
  
  const baseUrl = countryCode === 'US' 
    ? 'https://iimagined.ai'
    : `https://iimagined.ai/${countryCode.toLowerCase()}`
  
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: `IImagined.ai - ${config.country}`,
    alternateName: 'IImagined',
    url: baseUrl,
    logo: `${baseUrl}/logo.png`,
    description: content.description,
    foundingDate: '2023',
    address: {
      '@type': 'PostalAddress',
      addressCountry: countryCode
    },
    offers: {
      '@type': 'Offer',
      price: content.pricing.amount.toString(),
      priceCurrency: content.currency,
      availability: 'https://schema.org/InStock',
      priceValidUntil: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString()
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '2847',
      bestRating: '5'
    },
    sameAs: [
      `${baseUrl}/twitter`,
      `${baseUrl}/instagram`,
      `${baseUrl}/youtube`
    ]
  }
  
  return schema
}

// Currency conversion utilities
export function convertCurrency(baseAmount: number, fromCurrency: string, toCurrency: string): number {
  // Exchange rates (simplified - in production, use real-time rates)
  const exchangeRates: Record<string, number> = {
    'USD': 1.0,
    'CAD': 1.35,
    'GBP': 0.82,
    'EUR': 0.92,
    'AUD': 1.52,
    'BRL': 5.2,
    'MXN': 17.8,
    'INR': 82.5,
    'JPY': 149.0,
    'SGD': 1.36
  }
  
  const usdAmount = baseAmount / (exchangeRates[fromCurrency] || 1)
  return Math.round(usdAmount * (exchangeRates[toCurrency] || 1))
}

// Generate international meta tags
export function generateInternationalMeta(countryCode: string, path: string) {
  const config = INTERNATIONAL_MARKETS[countryCode] || INTERNATIONAL_MARKETS['US']
  const content = getLocalizedContent(countryCode)
  
  const canonicalUrl = countryCode === 'US' 
    ? `https://iimagined.ai${path}`
    : `https://iimagined.ai/${countryCode.toLowerCase()}${path}`
  
  return {
    title: content.title,
    description: content.description,
    keywords: content.keywords.join(', '),
    canonical: canonicalUrl,
    language: config.hreflang,
    currency: content.currency,
    openGraph: {
      title: content.title,
      description: content.description,
      url: canonicalUrl,
      locale: config.hreflang,
      site_name: `IImagined.ai - ${config.country}`
    },
    twitter: {
      title: content.title,
      description: content.description,
      card: 'summary_large_image'
    }
  }
}

// Auto-detect user's preferred market
export function detectUserMarket(acceptLanguage: string, country: string): string {
  // Priority: geo-location, then language preference
  if (INTERNATIONAL_MARKETS[country]) {
    return country
  }
  
  // Fallback to language detection
  const languageMap: Record<string, string> = {
    'de': 'DE',
    'fr': 'FR',
    'es': 'ES',
    'it': 'IT',
    'pt': 'BR',
    'ja': 'JP',
    'en-CA': 'CA',
    'en-GB': 'GB',
    'en-AU': 'AU',
    'en-IN': 'IN',
    'en-SG': 'SG'
  }
  
  const detectedLang = acceptLanguage.split(',')[0].trim()
  return languageMap[detectedLang] || 'US'
}

// Generate country-specific URLs
export function generateCountryUrls(basePath: string): Record<string, string> {
  const urls: Record<string, string> = {}
  
  Object.keys(INTERNATIONAL_MARKETS).forEach(countryCode => {
    urls[countryCode] = countryCode === 'US' 
      ? `https://iimagined.ai${basePath}`
      : `https://iimagined.ai/${countryCode.toLowerCase()}${basePath}`
  })
  
  return urls
}