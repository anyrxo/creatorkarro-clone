#!/usr/bin/env node

/**
 * TEST CHATGPT BLOG GENERATOR - Quick test with 3 posts
 * Ensures system works before running full 550 post generation
 */

const ChatGPTBulkBlogGenerator = require('./chatgpt-bulk-blog-generator');

class TestChatGPTGenerator extends ChatGPTBulkBlogGenerator {
  async generateBlogPostData() {
    // Test with just 3 high-value posts
    this.blogPosts = [
      {
        id: 1,
        slug: 'ai-automation-guide-2025',
        title: 'The Complete AI Automation Guide: Build $10,000/Month Systems That Work While You Sleep',
        keyword: 'ai automation guide',
        course: 'N8N AI Automations',
        revenue: '$10,000/month',
        studentCount: '2,000+',
        totalRevenue: '$1.2M+',
        category: 'AI & Automation'
      },
      {
        id: 2,
        slug: 'instagram-growth-secrets-2025',
        title: 'Instagram Growth Secrets: How I Hit 1M Followers + $5,000/Month',
        keyword: 'instagram growth secrets',
        course: 'Instagram Ignited',
        revenue: '$5,000/month',
        studentCount: '4,000+',
        totalRevenue: '$2.1M+',
        category: 'Social Media'
      },
      {
        id: 3,
        slug: 'digital-products-empire-2025',
        title: 'Digital Products Empire: Build a $100,000/Month Passive Income Machine',
        keyword: 'digital products empire',
        course: 'Digital Products Empire',
        revenue: '$100,000/month',
        studentCount: '3,500+',
        totalRevenue: '$1.8M+',
        category: 'Digital Products'
      }
    ];
  }

  async generateAllPosts() {
    console.log('\n🧪 TESTING CHATGPT BLOG GENERATOR...');
    console.log('🎯 GENERATING 3 TEST POSTS FOR QUALITY VERIFICATION');
    console.log('⚡ POWERED BY: ChatGPT-3.5-Turbo + Advanced Psychology Framework\n');
    
    for (let i = 0; i < this.blogPosts.length; i++) {
      const post = this.blogPosts[i];
      console.log(`\n📝 Generating test post ${i + 1}/3: ${post.title}`);
      
      const result = await this.generateBlogPost(post);
      
      if (result.success) {
        console.log(`✅ SUCCESS: Generated ${result.content.length} characters`);
        console.log(`💰 Cost: $${((result.tokens / 1000) * 0.002).toFixed(4)}`);
      } else {
        console.log(`❌ FAILED: ${result.error}`);
      }
      
      // Small delay between test posts
      if (i < this.blogPosts.length - 1) {
        console.log('⏳ Waiting 5 seconds...');
        await new Promise(resolve => setTimeout(resolve, 5000));
      }
    }
    
    this.generateTestReport();
  }

  generateTestReport() {
    console.log('\n' + '='.repeat(60));
    console.log('🧪 CHATGPT TEST GENERATION COMPLETE!');
    console.log('='.repeat(60));
    console.log(`✅ Test posts generated: ${this.successes.length}/3`);
    console.log(`❌ Test errors: ${this.errors.length}/3`);
    console.log(`💰 Total test cost: $${this.estimatedCost.toFixed(4)}`);
    console.log(`📁 Test files saved to: ${this.outputDir}`);
    
    if (this.successes.length === 3) {
      console.log('\n🎉 ALL TESTS PASSED! System ready for full generation.');
      console.log('🚀 Run the main script to generate all 550 posts:');
      console.log('   node scripts/chatgpt-bulk-blog-generator.js');
    } else {
      console.log('\n⚠️  Some tests failed. Check errors before running full generation.');
      this.errors.forEach(({ post, error }) => {
        console.log(`   - ${post.title}: ${error}`);
      });
    }
    
    console.log('\n🔥 TEST COMPLETE! 🔥\n');
  }
}

// Run the test
async function main() {
  const testGenerator = new TestChatGPTGenerator();
  await testGenerator.run();
}

if (require.main === module) {
  main();
}

module.exports = TestChatGPTGenerator;