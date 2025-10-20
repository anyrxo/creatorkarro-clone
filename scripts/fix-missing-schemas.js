const fs = require('fs');
const path = require('path');

const blogDir = path.join(__dirname, '..', 'src', 'app', 'blog');

// Get all blog post directories
const dirs = fs.readdirSync(blogDir, { withFileTypes: true })
  .filter(dirent => dirent.isDirectory())
  .map(dirent => dirent.name);

let fixed = 0;
let skipped = 0;

dirs.forEach(dir => {
  const pageFile = path.join(blogDir, dir, 'page.tsx');

  if (!fs.existsSync(pageFile)) {
    skipped++;
    return;
  }

  let content = fs.readFileSync(pageFile, 'utf8');

  // Check if file has schema reference but missing schema generation
  if (content.includes('dangerouslySetInnerHTML={{ __html: JSON.stringify(schema)') &&
      !content.includes('const schema = generateBlogPostSchema')) {

    // Extract the canonical URL to get the slug
    const canonicalMatch = content.match(/canonical:\s*"https:\/\/iimagined\.ai\/blog\/([^"]+)"/);
    if (!canonicalMatch) {
      console.log(`Could not find canonical URL in ${dir}/page.tsx`);
      skipped++;
      return;
    }

    const slug = canonicalMatch[1];

    // Find the export default function line
    const functionMatch = content.match(/(export default function \w+\(\) \{)/);
    if (!functionMatch) {
      console.log(`Could not find function declaration in ${dir}/page.tsx`);
      skipped++;
      return;
    }

    // Insert schema generation after the function declaration
    const schemaCode = `\n\nconst schema = generateBlogPostSchema({
  title: metadata.title,
  description: metadata.description,
  slug: "${slug}",
  publishedTime: metadata.openGraph.publishedTime,
  modifiedTime: metadata.openGraph.modifiedTime,
  category: metadata.category || "Technology",
  keywords: metadata.keywords || [],
  image: metadata.openGraph.images[0].url
})\n`;

    content = content.replace(
      functionMatch[0],
      functionMatch[0] + schemaCode
    );

    fs.writeFileSync(pageFile, content, 'utf8');
    console.log(`Fixed: ${dir}/page.tsx`);
    fixed++;
  } else {
    skipped++;
  }
});

console.log(`\nFixed: ${fixed} files`);
console.log(`Skipped: ${skipped} files`);
