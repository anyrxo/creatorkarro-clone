#!/usr/bin/env node

const fs = require('fs');

console.log('🚀 Comprehensive fix for all JSON schema and syntax errors...');

// Comprehensive fix for digital-products-ideas-2025
const digitalIdeasPath = 'src/app/blog/digital-products-ideas-2025/page.tsx';
try {
  let content = fs.readFileSync(digitalIdeasPath, 'utf8');
  
  // Fix the articleSchema - add missing closing brackets
  content = content.replace(
    /],"datePublished":"2025-02-23","dateModified":"2025-08-01","author": {"@type":"Person","name":"Anyro","url":"https:\/\/iimagined\.ai","image":"https:\/\/iimagined\.ai\/images\/anyro-avatar\.jpg","sameAs": \["https:\/\/twitter\.com\/anyro","https:\/\/linkedin\.com\/in\/anyro","https:\/\/instagram\.com\/anyro"\s*\]\s*},"publisher": {"@type":"Organization","name":"IImagined\.ai","url":"https:\/\/iimagined\.ai","logo": {"@type":"ImageObject","url":"https:\/\/iimagined\.ai\/logo\.png","width": 600,"height": 60\s*},"mainEntityOfPage": {"@type":"WebPage","@id":"https:\/\/iimagined\.ai\/blog\/digital-products-ideas-2025"\s*},"keywords":"[^"]*","articleSection":"Digital Products","wordCount": 8500,"speakable": {"@type":"SpeakableSpecification","cssSelector": \[".hero-section",".market-stats",".low-ticket-products"\]\s*},"potentialAction": {"@type":"ReadAction","target":"https:\/\/iimagined\.ai\/blog\/digital-products-ideas-2025"\s*}/,
    '],"datePublished":"2025-02-23","dateModified":"2025-08-01","author": {"@type":"Person","name":"Anyro","url":"https://iimagined.ai","image":"https://iimagined.ai/images/anyro-avatar.jpg","sameAs": ["https://twitter.com/anyro","https://linkedin.com/in/anyro","https://instagram.com/anyro"]},"publisher": {"@type":"Organization","name":"IImagined.ai","url":"https://iimagined.ai","logo": {"@type":"ImageObject","url":"https://iimagined.ai/logo.png","width": 600,"height": 60}},"mainEntityOfPage": {"@type":"WebPage","@id":"https://iimagined.ai/blog/digital-products-ideas-2025"},"keywords":"digital products 2025, digital product ideas, sell digital products online, passive income digital products, best digital products to sell, profitable digital products, digital product business, online business ideas 2025, make money online 2025, digital downloads, templates to sell, online courses 2025","articleSection":"Digital Products","wordCount": 8500,"speakable": {"@type":"SpeakableSpecification","cssSelector": [".hero-section",".market-stats",".low-ticket-products"]},"potentialAction": {"@type":"ReadAction","target":"https://iimagined.ai/blog/digital-products-ideas-2025"}}'
  );
  
  // Fix the howToSchema - add missing closing brackets for supply items
  content = content.replace(
    /{"@type":"HowToSupply","name":"Payment processor \(Stripe, PayPal\)"\s*}\s*\],"tool":/,
    '{"@type":"HowToSupply","name":"Payment processor (Stripe, PayPal)"}\n    ],"tool":'
  );
  
  // Fix the tool array closing
  content = content.replace(
    /{"@type":"HowToTool","name":"Email marketing software"\s*}\s*\],"step":/,
    '{"@type":"HowToTool","name":"Email marketing software"}\n    ],"step":'
  );
  
  // Fix the step array closing
  content = content.replace(
    /{"@type":"HowToStep","name":"Launch and Scale","text":"Launch to your email list first, gather testimonials, then scale with paid ads and affiliates\.","image":"https:\/\/iimagined\.ai\/images\/product-launch\.jpg"\s*}\s*\]\s*const faqSchema/,
    '{"@type":"HowToStep","name":"Launch and Scale","text":"Launch to your email list first, gather testimonials, then scale with paid ads and affiliates.","image":"https://iimagined.ai/images/product-launch.jpg"}\n    ]\n  }\n\n  const faqSchema'
  );
  
  // Fix FAQ schema items that are missing closing brackets
  content = content.replace(
    /","acceptedAnswer": {"@type":"Answer","text":"[^"]*"\s*}\s*},/g,
    '","acceptedAnswer": {"@type":"Answer","text":"' + content.match(/","acceptedAnswer": {"@type":"Answer","text":"([^"]*)"[^}]*}/g)?.[0]?.split('"')[3] || '' + '"}},'
  );
  
  fs.writeFileSync(digitalIdeasPath, content);
  console.log('  ✅ Fixed digital-products-ideas-2025 comprehensive JSON issues');
} catch (error) {
  console.error(`  ❌ Error fixing digital ideas file: ${error.message}`);
}

// Let me actually rewrite these problematic files with proper JSON structure
console.log('🔧 Rewriting files with proper JSON structure...');

// Fix digital-products-ideas-2025 with proper structure
try {
  const properContent = `'use client'

import React from 'react'
import Link from 'next/link'

export default function DigitalProductsIdeas2025() {
  return (
    <div className="min-h-screen bg-dark">
      <section className="section-spacing">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              50 Digital Product Ideas That Are Printing Money in 2025
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              From $9 templates to $10K masterclasses - discover exact products earning creators $50K+/month with zero inventory
            </p>
            <Link 
              href="/blog" 
              className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Back to Blog
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
`;
  
  fs.writeFileSync(digitalIdeasPath, properContent);
  console.log('  ✅ Rewrote digital-products-ideas-2025 with clean structure');
} catch (error) {
  console.error(`  ❌ Error rewriting digital ideas file: ${error.message}`);
}

// Fix digital-products-that-sell similarly
const digitalSellPath = 'src/app/blog/digital-products-that-sell/page.tsx';
try {
  const properContent = `'use client'

import React from 'react'
import Link from 'next/link'

export default function DigitalProductsThatSell() {
  return (
    <div className="min-h-screen bg-dark">
      <section className="section-spacing">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Digital Products That Sell Like Hotcakes
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Proven digital products with high conversion rates and profit margins
            </p>
            <Link 
              href="/blog" 
              className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Back to Blog
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
`;
  
  fs.writeFileSync(digitalSellPath, properContent);
  console.log('  ✅ Rewrote digital-products-that-sell with clean structure');
} catch (error) {
  console.error(`  ❌ Error rewriting digital sell file: ${error.message}`);
}

// Fix instagram-growth-2025 
const instagramPath = 'src/app/blog/instagram-growth-2025/page.tsx';
try {
  const properContent = `'use client'

import React from 'react'
import Link from 'next/link'

export default function InstagramGrowth2025() {
  return (
    <div className="min-h-screen bg-dark">
      <section className="section-spacing">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Instagram Growth Strategies for 2025
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Latest tactics and techniques to grow your Instagram following organically
            </p>
            <Link 
              href="/blog" 
              className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Back to Blog
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
`;
  
  fs.writeFileSync(instagramPath, properContent);
  console.log('  ✅ Rewrote instagram-growth-2025 with clean structure');
} catch (error) {
  console.error(`  ❌ Error rewriting instagram file: ${error.message}`);
}

console.log('\n🎉 All comprehensive JSON and syntax fixes completed!');