const fs = require('fs');
const path = require('path');

// Course pages to update
const courses = [
  {
    path: 'src/app/ai-influencers/page.tsx',
    oldPrice: '169',
    whopLink: 'https://whop.com/iimagined/ai-influencers-reimagined/'
  },
  {
    path: 'src/app/digital-products/page.tsx',
    oldPrice: '197', // common price
    whopLink: 'https://whop.com/iimagined/digital-products-reimagined/'
  },
  {
    path: 'src/app/fx-trading/page.tsx',
    oldPrice: '297', // common price
    whopLink: 'https://whop.com/iimagined/futures-trading-reimagined/'
  }
];

console.log('🔧 Updating course pricing across all pages...\n');

courses.forEach(course => {
  const filePath = path.join(__dirname, '..', course.path);

  if (!fs.existsSync(filePath)) {
    console.log(`❌ File not found: ${course.path}`);
    return;
  }

  let content = fs.readFileSync(filePath, 'utf-8');
  let changed = false;

  // Update schema price to 399
  if (content.includes(`'${course.oldPrice}'`) || content.includes(`"${course.oldPrice}"`)) {
    content = content.replace(new RegExp(`['"]${course.oldPrice}['"]`, 'g'), "'399'");
    changed = true;
    console.log(`✅ Updated schema price: ${course.oldPrice} → 399`);
  }

  // Update Whop All-Access to All Access Reimagined with $99
  if (content.includes('"Whop All-Access"') || content.includes("'Whop All-Access'")) {
    content = content.replace(/"Whop All-Access"|'Whop All-Access'/g, '"All Access Reimagined"');
    changed = true;
    console.log(`✅ Renamed: Whop All-Access → All Access Reimagined`);
  }

  // Update $39.99 to $99
  if (content.includes('"$39.99"') || content.includes("'$39.99'")) {
    content = content.replace(/['"]\$39\.99['"]/g, '"$99"');
    changed = true;
    console.log(`✅ Updated All-Access price: $39.99 → $99`);
  }

  // Update All-Access link
  if (content.includes('whop.com/anyro/premium-monthly')) {
    content = content.replace(/https:\/\/whop\.com\/anyro\/premium-monthly[^"']*/g, 'https://whop.com/iimagined/all-access-reimagined/');
    changed = true;
    console.log(`✅ Updated All-Access link`);
  }

  // Update original price display $99.99 to $199
  if (content.includes('"$99.99"')) {
    content = content.replace(/['"]\$99\.99['"]/g, '"$199"');
    changed = true;
    console.log(`✅ Updated original price: $99.99 → $199`);
  }

  // Update "ALL 5 COURSES" to "ALL 4 COURSES"
  if (content.includes('ALL 5 COURSES')) {
    content = content.replace(/ALL 5 COURSES/g, 'ALL 4 COURSES');
    changed = true;
    console.log(`✅ Updated badge: ALL 5 → ALL 4 COURSES`);
  }

  if (changed) {
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log(`✅ ${course.path} updated successfully!\n`);
  } else {
    console.log(`ℹ️  ${course.path} - no changes needed\n`);
  }
});

console.log('🎉 All course pricing updated!');
