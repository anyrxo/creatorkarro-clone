#!/usr/bin/env node

/**
 * PERFORMANCE OPTIMIZATION SCRIPT
 * Removes unnecessary 'Head' component imports from static blog pages
 * This converts them to proper Next.js 15 Server Components
 */

const fs = require('fs');
const path = require('path');
const { glob } = require('glob');

async function optimizeBlogPages() {
  console.log('🚀 Starting blog page optimization...\n');

  // Find all blog page.tsx files
  const blogPages = await glob('src/app/blog/**/page.tsx', {
    cwd: process.cwd(),
    absolute: true
  });

  let optimizedCount = 0;
  let skippedCount = 0;

  for (const filePath of blogPages) {
    try {
      let content = fs.readFileSync(filePath, 'utf-8');
      let modified = false;

      // Skip if it doesn't import Head
      if (!content.includes("import Head from 'next/head'")) {
        skippedCount++;
        continue;
      }

      // Remove Head import
      const beforeImport = content;
      content = content.replace(/import Head from 'next\/head'\n/g, '');

      if (content !== beforeImport) {
        modified = true;
      }

      // Remove <Head> wrapper from return statement
      const beforeHead = content;
      content = content.replace(
        /return \(\s*<>\s*<Head>\s*<script[^>]*type="application\/ld\+json"[^>]*dangerouslySetInnerHTML=\{[^}]+\}\s*\/>\s*<\/Head>\s*<div className="min-h-screen bg-dark">/s,
        'return (\n    <div className="min-h-screen bg-dark">'
      );

      if (content !== beforeHead) {
        modified = true;
      }

      // Remove closing </> tag before final )
      const beforeClosing = content;
      content = content.replace(
        /<\/>\s*\)\s*\n\}/,
        '  )\n}'
      );

      if (content !== beforeClosing) {
        modified = true;
      }

      if (modified) {
        fs.writeFileSync(filePath, content, 'utf-8');
        optimizedCount++;
        console.log(`✅ Optimized: ${path.relative(process.cwd(), filePath)}`);
      } else {
        skippedCount++;
      }

    } catch (error) {
      console.error(`❌ Error processing ${filePath}:`, error.message);
    }
  }

  console.log(`\n📊 Optimization Summary:`);
  console.log(`   ✅ Optimized: ${optimizedCount} files`);
  console.log(`   ⏭️  Skipped: ${skippedCount} files`);
  console.log(`   📦 Total: ${blogPages.length} blog pages`);
  console.log(`\n✨ Blog pages are now Server Components!`);
}

optimizeBlogPages().catch(console.error);
