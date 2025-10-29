const fs = require('fs');
const path = require('path');

const blogDir = path.join(__dirname, '..', 'src', 'app', 'blog');
const archiveDir = path.join(__dirname, '..', '_ARCHIVE', '2025-01-29-cleanup', 'blog-posts');

// Create archive directory
if (!fs.existsSync(archiveDir)) {
  fs.mkdirSync(archiveDir, { recursive: true });
}

const report = JSON.parse(
  fs.readFileSync(path.join(__dirname, '..', '_ARCHIVE', '2025-01-29-cleanup', 'blog-health-report.json'))
);

console.log('\n🗄️  ARCHIVING DEAD CONTENT\n');

// Archive empty directories (no page.tsx)
let archived = 0;
report.categories.empty.forEach(dir => {
  const sourcePath = path.join(blogDir, dir);
  const destPath = path.join(archiveDir, 'empty', dir);

  if (fs.existsSync(sourcePath)) {
    fs.mkdirSync(path.dirname(destPath), { recursive: true });
    fs.cpSync(sourcePath, destPath, { recursive: true });
    fs.rmSync(sourcePath, { recursive: true });
    archived++;
  }
});

console.log(`✅ Archived ${archived} empty directories`);

// Archive redirect posts (<100 lines)
archived = 0;
report.categories.redirect.forEach(dir => {
  const sourcePath = path.join(blogDir, dir);
  const destPath = path.join(archiveDir, 'redirects', dir);

  if (fs.existsSync(sourcePath)) {
    fs.mkdirSync(path.dirname(destPath), { recursive: true });
    fs.cpSync(sourcePath, destPath, { recursive: true });
    fs.rmSync(sourcePath, { recursive: true });
    archived++;
  }
});

console.log(`✅ Archived ${archived} redirect/empty posts`);

// Create list of short posts for review (don't delete yet)
const shortPostsList = path.join(archiveDir, 'SHORT_POSTS_TO_REVIEW.txt');
fs.writeFileSync(
  shortPostsList,
  'SHORT POSTS FOR MANUAL REVIEW (<300 lines):\n\n' +
  report.categories.short.map((dir, i) => `${i+1}. ${dir}`).join('\n') +
  '\n\nThese posts are short but may still be valuable. Review manually before archiving.'
);

console.log(`\n📝 Created review list: ${report.categories.short.length} short posts`);
console.log(`   See: _ARCHIVE/2025-01-29-cleanup/blog-posts/SHORT_POSTS_TO_REVIEW.txt`);

console.log('\n✅ Archive complete!');
console.log(`\n📊 SUMMARY:`);
console.log(`   Archived: ${report.categories.empty.length + report.categories.redirect.length} directories`);
console.log(`   Kept: ${report.categories.beautified.length + report.categories.hasPage.length + report.categories.short.length} posts`);
console.log(`   Review: ${report.categories.short.length} short posts`);
