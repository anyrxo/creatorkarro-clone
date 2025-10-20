const fs = require('fs');
const path = require('path');

const problematicFiles = [
  'quality-assurance-automation',
  'windsurf-ai-coding', 
  'workflow-automation-guide'
];

problematicFiles.forEach(slug => {
  const filePath = path.join(__dirname, 'src', 'app', 'blog', slug, 'page.tsx');
  
  if (fs.existsSync(filePath)) {
    const placeholderContent = `export default function ${slug.split('-').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)).join('')}Page() {
  return (
    <div className="min-h-screen bg-dark flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-4">Blog Post Coming Soon</h1>
        <p className="text-gray-400">This content is being updated.</p>
      </div>
    </div>
  );
}`;
    
    fs.writeFileSync(filePath, placeholderContent);
    console.log(`✅ Temporarily disabled ${slug}`);
  } else {
    console.log(`❌ File not found: ${slug}`);
  }
});

console.log('🎯 Disabled additional problematic blog files');