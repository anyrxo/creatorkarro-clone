const fs = require('fs');
const path = require('path');

const BLOG_DIR = path.join(__dirname, '../src/app/blog');

const tradingPosts = [
  'topstep-vs-myfundedtrader-comparison',
  'ftmo-vs-topstep-prop-firm-review',
  'trading-psychology-master-your-emotions',
  'macd-indicator-trading-strategy',
  'futures-trading-for-beginners-guide',
  'es-futures-trading-strategy'
];

console.log('🎨 Enhancing trading blog posts with visual elements...\n');

let enhanced = 0;

tradingPosts.forEach(slug => {
  const filePath = path.join(BLOG_DIR, slug, 'page.tsx');

  if (!fs.existsSync(filePath)) {
    console.log(`⏭️  Skipping ${slug} - file not found`);
    return;
  }

  let content = fs.readFileSync(filePath, 'utf8');

  // Check if already enhanced (has bg-zinc-900 rounded-xl cards)
  if (content.includes('bg-zinc-900 rounded-xl p-6')) {
    console.log(`✓ ${slug} - already enhanced`);
    return;
  }

  // Wrap each H2 section in a beautiful card
  content = content.replace(
    /<h2>(.*?)<\/h2>\s*<p>(.*?)<\/p>/gs,
    `<div className="bg-zinc-900 rounded-2xl p-8 mb-8">
      <h2 className="text-3xl font-bold text-white mb-6">$1</h2>
      <p className="text-xl text-gray-300 leading-relaxed">$2</p>
    </div>`
  );

  // Wrap H3 sections in colored cards
  content = content.replace(
    /<h3>(.*?)<\/h3>/g,
    `<div className="mt-8 mb-6">
      <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
        <span className="text-2xl">📊</span> $1
      </h3>
    </div>`
  );

  // Style ul lists with checkmarks
  content = content.replace(
    /<ul>\s*(.*?)\s*<\/ul>/gs,
    (match, items) => {
      const styledItems = items.replace(
        /<li>(.*?)<\/li>/g,
        `<li className="flex items-start gap-3">
          <span className="text-blue-400 text-xl mt-1">✓</span>
          <span className="text-gray-300">$1</span>
        </li>`
      );
      return `<ul className="space-y-3 mb-6">${styledItems}</ul>`;
    }
  );

  // Add gradient to important keywords
  content = content.replace(
    /(profit split|prop firm|evaluation|funded|trading|strategy|risk management|psychology)/gi,
    '<span className="text-white font-semibold">$1</span>'
  );

  // Write enhanced content
  fs.writeFileSync(filePath, content, 'utf8');
  enhanced++;
  console.log(`✅ ${slug} - enhanced with visual cards and styling`);
});

console.log(`\n🎉 Successfully enhanced ${enhanced}/${tradingPosts.length} trading posts!`);
console.log('\nVisual enhancements added:');
console.log('  • Wrapped H2 sections in dark cards');
console.log('  • Added emoji icons to H3 headers');
console.log('  • Styled lists with checkmarks');
console.log('  • Highlighted key trading terms');
