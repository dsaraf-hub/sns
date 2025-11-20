const fs = require('fs');
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../.env.local') });

console.log('🔍 Debugging Environment Variables...');

const email = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
const key = process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY;
const sheetId = process.env.GOOGLE_SHEET_ID;

console.log(`\n1. Service Account Email: ${email ? '✅ Present' : '❌ MISSING'}`);
if (email) console.log(`   Value: ${email}`);

console.log(`\n2. Sheet ID: ${sheetId ? '✅ Present' : '❌ MISSING'}`);
if (sheetId) console.log(`   Value: ${sheetId}`);

console.log(`\n3. Private Key: ${key ? '✅ Present' : '❌ MISSING'}`);
if (key) {
    console.log(`   Length: ${key.length}`);
    console.log(`   Starts with: ${key.substring(0, 10)}...`);
    console.log(`   Ends with: ...${key.substring(key.length - 10)}`);
    
    const newlineCount = (key.match(/\n/g) || []).length;
    const escapedNewlineCount = (key.match(/\\n/g) || []).length;
    
    console.log(`   Newlines (actual): ${newlineCount}`);
    console.log(`   Newlines (escaped \\n): ${escapedNewlineCount}`);
    
    if (newlineCount === 0 && escapedNewlineCount > 0) {
        console.log('   ℹ️  Key contains escaped newlines. Code handles this via .replace(/\\\\n/g, "\\n").');
    } else if (newlineCount > 0) {
        console.log('   ℹ️  Key contains actual newlines. This is good.');
    } else {
        console.log('   ⚠️  WARNING: No newlines found in private key. It might be invalid.');
    }
}

console.log('\nDone.');

