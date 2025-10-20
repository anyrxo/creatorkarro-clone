const fs = require('fs');
const path = require('path');

const BLOG_DIR = path.join(__dirname, '../src/app/blog');

// List of all 7 trading blog posts to beautify
const tradingPosts = [
  'topstep-vs-myfundedtrader-comparison',
  'ftmo-vs-topstep-prop-firm-review',
  'trading-psychology-master-your-emotions',
  'rsi-trading-strategy-complete-guide',
  'macd-indicator-trading-strategy',
  'futures-trading-for-beginners-guide',
  'es-futures-trading-strategy'
];

console.log('🎨 Beautifying 7 trading blog posts with visual elements...\n');

let updated = 0;

tradingPosts.forEach(slug => {
  const filePath = path.join(BLOG_DIR, slug, 'page.tsx');

  if (!fs.existsSync(filePath)) {
    console.log(`⏭️  Skipping ${slug} - file not found`);
    return;
  }

  let content = fs.readFileSync(filePath, 'utf8');

  // Check if already beautified (has grid layouts)
  if (content.includes('grid-cols-2 md:grid-cols-4') || content.includes('bg-zinc-900 rounded-xl')) {
    console.log(`✓ ${slug} - already beautified`);
    return;
  }

  // Find the closing </section> tag for the header
  const headerEndMatch = content.match(/(      <\/section>[\s\S]*?<section className="py-16 px-4">)/);

  if (!headerEndMatch) {
    console.log(`⚠️  ${slug} - couldn't find header section`);
    return;
  }

  // Add stats section after header (customize per post)
  let statsSection = '';

  if (slug.includes('topstep') || slug.includes('ftmo')) {
    statsSection = `      </section>

      {/* Key Stats Section */}
      <section className="py-16 px-4 border-y border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">$50K-$150K</div>
              <div className="text-gray-400">Account Sizes</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">80-90%</div>
              <div className="text-gray-400">Profit Split</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-pink-400 mb-2">5-14 Days</div>
              <div className="text-gray-400">Evaluation Time</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">5-7 Days</div>
              <div className="text-gray-400">Payout Speed</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-spacing">`;
  } else if (slug.includes('psychology')) {
    statsSection = `      </section>

      {/* Key Stats Section */}
      <section className="py-16 px-4 border-y border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">90%</div>
              <div className="text-gray-400">Psychology Impact</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">70%</div>
              <div className="text-gray-400">Traders Fail Mentally</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-pink-400 mb-2">3-6 Months</div>
              <div className="text-gray-400">Discipline Building</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">2-5%</div>
              <div className="text-gray-400">Consistent Winners</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-spacing">`;
  } else if (slug.includes('rsi') || slug.includes('macd')) {
    statsSection = `      </section>

      {/* Key Stats Section */}
      <section className="py-16 px-4 border-y border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">14 Period</div>
              <div className="text-gray-400">Default Setting</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">70/30</div>
              <div className="text-gray-400">Buy/Sell Zones</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-pink-400 mb-2">All Markets</div>
              <div className="text-gray-400">Universal Indicator</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">60-70%</div>
              <div className="text-gray-400">Win Rate Potential</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-spacing">`;
  } else {
    statsSection = `      </section>

      {/* Key Stats Section */}
      <section className="py-16 px-4 border-y border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">$50-$500</div>
              <div className="text-gray-400">Starting Capital</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">24/5</div>
              <div className="text-gray-400">Trading Hours</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-pink-400 mb-2">5-10x</div>
              <div className="text-gray-400">Leverage Available</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">Unlimited</div>
              <div className="text-gray-400">Profit Potential</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-spacing">`;
  }

  // Replace the section break with stats section
  content = content.replace(
    /(      <\/section>)([\s\S]*?)(<section className="py-16 px-4">)/,
    statsSection
  );

  // Add colored gradients to h1 title
  content = content.replace(
    /(<h1 className="text-3xl md:text-6xl font-bold mb-6 leading-tight text-white">[\s]*)(.*?)([\s]*<\/h1>)/,
    (match, opening, title, closing) => {
      // Split title to add gradient to last few words
      const words = title.trim().split(' ');
      if (words.length > 3) {
        const firstPart = words.slice(0, -3).join(' ');
        const lastPart = words.slice(-3).join(' ');
        return `${opening}${firstPart} <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">${lastPart}</span>${closing}`;
      }
      return match;
    }
  );

  // Add highlighted spans to description
  content = content.replace(
    /<p className="text-lg md:text-xl text-gray-400 mb-8">\s*(.*?)\s*<\/p>/s,
    (match, desc) => {
      // Find key phrases and highlight them
      let highlighted = desc
        .replace(/(RSI indicator|MACD|trading psychology|prop firm|futures trading|Topstep|MyFundedTrader|FTMO)/gi,
          '<span className="text-white font-semibold">$1</span>')
        .replace(/(comprehensive|proven|complete|advanced|professional)/gi,
          '<span className="text-blue-400">$1</span>');
      return `<p className="text-lg md:text-xl text-gray-400 mb-8">\n              ${highlighted}\n            </p>`;
    }
  );

  // Write updated content
  fs.writeFileSync(filePath, content, 'utf8');
  updated++;
  console.log(`✅ ${slug} - beautified with stats section`);
});

console.log(`\n🎉 Successfully beautified ${updated}/7 trading blog posts!`);
console.log('\nVisual elements added:');
console.log('  • Stats grids with colored metrics');
console.log('  • Gradient text on titles');
console.log('  • Highlighted keywords in descriptions');
console.log('  • Border separators between sections');
