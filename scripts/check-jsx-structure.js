#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const filePath = 'src/app/blog/youtube-shorts-strategy/page.tsx';
const content = fs.readFileSync(filePath, 'utf-8');
const lines = content.split('\n');

console.log('Checking JSX structure...\n');

// Find return statement
let returnLine = -1;
for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes('return (')) {
    returnLine = i;
    console.log(`Return statement at line ${i + 1}:`);
    console.log(`  "${lines[i]}"`);
    if (i + 1 < lines.length) console.log(`  "${lines[i + 1]}"`);
    if (i + 2 < lines.length) console.log(`  "${lines[i + 2]}"`);
    break;
  }
}

// Check around line 4759 (error location)
console.log(`\nChecking around line 4759 (error location):`);
for (let i = 4755; i < Math.min(4765, lines.length); i++) {
  const marker = i === 4758 ? ' >>> ' : '     ';
  console.log(`${marker}${i + 1}: ${lines[i]}`);
}

// Count braces in JSX context (not in strings)
let braceCount = 0;
let parenCount = 0;
let inString = false;
let stringChar = '';
let inJSX = false;
let jsxStartLine = -1;

for (let i = returnLine; i < lines.length; i++) {
  const line = lines[i];
  
  // Simple string detection (not perfect but good enough)
  for (let j = 0; j < line.length; j++) {
    const char = line[j];
    const prevChar = j > 0 ? line[j - 1] : '';
    
    // Toggle string state
    if ((char === '"' || char === "'" || char === '`') && prevChar !== '\\') {
      if (!inString) {
        inString = true;
        stringChar = char;
      } else if (char === stringChar) {
        inString = false;
        stringChar = '';
      }
    }
    
    if (!inString) {
      if (char === '{') {
        braceCount++;
        if (braceCount === 1 && !inJSX) {
          inJSX = true;
          jsxStartLine = i;
        }
      }
      if (char === '}') {
        braceCount--;
        if (braceCount === 0 && inJSX) {
          inJSX = false;
          jsxStartLine = -1;
        }
      }
      if (char === '(') parenCount++;
      if (char === ')') parenCount--;
      
      // Check for problematic state at error line
      if (i === 4758 && braceCount !== 0) {
        console.log(`\n⚠️  PROBLEM: At line ${i + 1}, braceCount = ${braceCount} (should be 0)`);
        console.log(`   This means we're inside ${braceCount > 0 ? 'an unclosed' : 'an extra closing'} JSX expression`);
      }
    }
  }
}

console.log(`\nFinal counts:`);
console.log(`  Braces: ${braceCount} (should be 0)`);
console.log(`  Parens: ${parenCount} (should be 0)`);
console.log(`  In JSX expression: ${inJSX}`);

if (braceCount !== 0 || parenCount !== 0) {
  console.log(`\n❌ STRUCTURE ISSUE DETECTED!`);
  if (braceCount > 0) {
    console.log(`   Missing ${braceCount} closing brace(s)`);
  }
  if (braceCount < 0) {
    console.log(`   Extra ${Math.abs(braceCount)} closing brace(s)`);
  }
  if (parenCount > 0) {
    console.log(`   Missing ${parenCount} closing paren(s)`);
  }
  if (parenCount < 0) {
    console.log(`   Extra ${Math.abs(parenCount)} closing paren(s)`);
  }
} else {
  console.log(`\n✅ Structure looks correct`);
}

