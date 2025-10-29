const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'src', 'app', 'fx-trading', 'page.tsx');
let content = fs.readFileSync(filePath, 'utf-8');

// Replace key terms
const replacements = [
  ['successful forex traders', 'successful futures traders'],
  ['THE FOREX REALITY', 'THE FUTURES REALITY'],
  ['Why 90% of Forex Traders Fail', 'Why 90% of Futures Traders Fail'],
  ['Currency pairs and market sessions', 'ES, NQ, Gold futures contracts'],
  ['currency master', 'futures master'],
  ['forex trader', 'futures trader'],
  ['Professional Forex Trading', 'Professional Futures Trading'],
  ['Complete FX Trading Mastery System', 'Complete Futures Trading Mastery System'],
  ['Master Professional FX Trading', 'Master Professional Futures Trading'],
  ['Complete trading education + professional tools', 'Pass prop firm challenges & get funded'],
  ['FX Trading: Professional forex mastery', 'Futures Trading: ES, NQ, Gold mastery'],
  ['Professional forex education', 'Pass prop firm challenges'],
  ['forex markets', 'futures markets'],
  ['currency market', 'futures market'],
  ['FX course', 'Futures course'],
  ['This FX course', 'This Futures course'],
  ['"Complete Trading System"', '"Futures Trading Mastery"'],
  ['"Learn Alone Method"', '"Trial & Error Method"'],
  ['LOST PROFITS', 'LOST CAPITAL']
];

replacements.forEach(([oldText, newText]) => {
  content = content.split(oldText).join(newText);
});

fs.writeFileSync(filePath, content);
console.log('✅ Updated FX → Futures terminology');
