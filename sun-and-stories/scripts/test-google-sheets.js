#!/usr/bin/env node

/**
 * Google Sheets Integration Test Script
 * 
 * This script helps you test your Google Sheets integration setup
 * before deploying your application.
 * 
 * Usage: node scripts/test-google-sheets.js
 */

const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');

// Load environment variables from .env.local
function loadEnvFile() {
  const envPath = path.join(__dirname, '..', '.env.local');
  
  if (!fs.existsSync(envPath)) {
    console.error('❌ .env.local file not found!');
    console.log('Please create a .env.local file with your Google Sheets credentials.');
    process.exit(1);
  }

  const envContent = fs.readFileSync(envPath, 'utf8');
  const lines = envContent.split('\n');
  
  const env = {};
  lines.forEach(line => {
    if (line.trim() && !line.startsWith('#')) {
      const [key, ...valueParts] = line.split('=');
      env[key.trim()] = valueParts.join('=').trim();
    }
  });

  return env;
}

// Test server health (optional)
function testServerHealth() {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: 'localhost',
      port: 3000,
      path: '/api/health',
      method: 'GET',
      timeout: 5000
    };

    const req = http.request(options, (res) => {
      resolve(res.statusCode === 200);
    });

    req.on('error', (error) => {
      reject(error);
    });

    req.on('timeout', () => {
      req.destroy();
      reject(new Error('Server health check timed out'));
    });

    req.end();
  });
}

// Test data submission via API route
function testDataSubmission() {
  return new Promise((resolve, reject) => {
    const testData = {
      location: 'west',
      name: 'Test User',
      age: '28',
      social: '@testuser',
      sunday_vibe: 'cozy',
      personality_type: 'funny',
      fashion: 'effortless',
      brunch_plate: 'indulgent',
      alcohol: 'yes',
      introversion: '5',
      humor: 'everything',
      workout: 'therapy',
      motivation: 'meet_people',
      ticket: 'table4six_ticket',
      restaurant_preference: 'bottomless_brunch'
    };

    const postData = JSON.stringify(testData);

    const options = {
      hostname: 'localhost',
      port: 3000,
      path: '/api/submit-questionnaire',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(postData)
      }
    };

    console.log('📝 Testing data submission via API route...');

    const req = http.request(options, (res) => {
      let data = '';
      
      res.on('data', (chunk) => {
        data += chunk;
      });
      
      res.on('end', () => {
        if (res.statusCode === 200) {
          try {
            const result = JSON.parse(data);
            resolve(result);
          } catch (error) {
            reject(new Error('Invalid JSON response'));
          }
        } else {
          reject(new Error(`Data submission failed: ${res.statusCode} ${res.statusMessage}\n${data}`));
        }
      });
    });

    req.on('error', (error) => {
      reject(error);
    });

    req.write(postData);
    req.end();
  });
}

// Main test function
async function runTests() {
  console.log('🚀 Google Sheets Integration Test (via Service Account)\n');

  // Load environment variables
  const env = loadEnvFile();
  const sheetId = env.GOOGLE_SHEET_ID;
  const serviceAccountEmail = env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  const serviceAccountKey = env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY;

  // Validate environment variables
  if (!sheetId) {
    console.error('❌ GOOGLE_SHEET_ID not found in .env.local');
    process.exit(1);
  }

  if (!serviceAccountEmail) {
    console.error('❌ GOOGLE_SERVICE_ACCOUNT_EMAIL not found in .env.local');
    process.exit(1);
  }

  if (!serviceAccountKey) {
    console.error('❌ GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY not found in .env.local');
    process.exit(1);
  }

  console.log('✅ Environment variables loaded');
  console.log(`📊 Sheet ID: ${sheetId.substring(0, 10)}...`);
  console.log(`🔑 Service Account: ${serviceAccountEmail.substring(0, 20)}...\n`);

  try {
    // Test: Data Submission via API Route
    console.log('📝 Testing data submission via API route...');
    console.log('⚠️  Make sure your Next.js server is running on localhost:3000');
    
    const submitResult = await testDataSubmission();
    console.log('✅ Test data submission successful');
    console.log(`📈 API Response:`, submitResult);

    console.log('\n🎉 All tests passed! Your Google Sheets integration is working correctly.');
    console.log('\n📌 Next steps:');
    console.log('1. Check your Google Sheet to see the test data');
    console.log('2. You can now run your application with confidence');
    console.log('3. Remember to delete the test row from your sheet');

  } catch (error) {
    console.error('\n❌ Test failed:', error.message);
    console.log('\n🔧 Troubleshooting tips:');
    console.log('1. Make sure your Next.js server is running: npm run dev');
    console.log('2. Check that your Google Sheet is shared with your service account');
    console.log('3. Verify your service account has Editor permissions on the sheet');
    console.log('4. Ensure the Google Sheets API is enabled in your Google Cloud Console');
    console.log('5. Make sure your sheet is named "Sheet1" (or update the code)');
    console.log('6. Check that your sheet has the correct column headers in Row 1');
    console.log('\n📖 See GOOGLE_SHEETS_SETUP.md for detailed setup instructions');
    process.exit(1);
  }
}

// Run the tests
runTests().catch(console.error); 