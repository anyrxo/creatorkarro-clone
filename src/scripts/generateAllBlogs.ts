#!/usr/bin/env ts-node

// 🚀 EXECUTE MASS BLOG GENERATION - TOXIC SEO DOMINATION
// Run: npm run generate-blogs OR npx ts-node src/scripts/generateAllBlogs.ts

import { generateMassBlogs } from './content/massBlogGenerator'

async function main() {
  console.log('🚀 INITIATING TOXIC SEO DOMINATION - MASS BLOG GENERATION')
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')
  console.log('🎯 TARGET: Generate hundreds of authority-building blogs')
  console.log('💪 GOAL: Position IImagined.ai as THE ultimate authority')
  console.log('📊 COURSES: All 5 courses promoted with expert positioning')
  console.log('⚡ STRATEGY: TOXIC SEO DOMINATION')
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')
  
  try {
    await generateMassBlogs()
    
    console.log('\n🎉 TOXIC SEO DOMINATION COMPLETE!')
    console.log('✅ All blogs generated successfully')
    console.log('🚀 Ready to deploy and dominate search results')
    console.log('💰 Positioned as THE authority for all 5 courses')
    
  } catch (error) {
    console.error('❌ Error during mass blog generation:', error)
    process.exit(1)
  }
}

if (require.main === module) {
  main()
}