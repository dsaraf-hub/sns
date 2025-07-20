// Test script to send a sample welcome email
// Make sure your Next.js dev server is running on localhost:3001
// Run with: npm run test:email

// For older Node.js versions, uncomment this line and run: npm install node-fetch
// const fetch = require('node-fetch');

async function testWelcomeEmail() {
  try {
    console.log('🧪 Testing welcome email...');
    console.log('📧 Target email: dakshhsaraf@gmail.com');
    console.log('');
    
    // Mock questionnaire data
    const testData = {
      name: 'Daksh Saraf',
      email: 'dakshhsaraf@gmail.com',
      age: '25',
      phone: '9876543210',
      location: 'sobo',
      date: '2025-08-10',
      restaurant_preference: 'bottomless_brunch',
      social: '@dakshhsaraf',
      sunday_vibe: 'cozy',
      personality_type: 'funny',
      fashion: 'effortless',
      brunch_plate: 'indulgent',
      alcohol: 'yes',
      introversion: '6',
      humor: 'everything',
      workout: 'therapy',
      motivation: 'meet_people',
      ticket: 'table4six_ticket'
    };

    console.log('📤 Sending test email with data:', {
      name: testData.name,
      email: testData.email,
      date: testData.date,
      location: testData.location,
      restaurant: testData.restaurant_preference
    });

    const response = await fetch('http://localhost:3001/api/send-welcome-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(testData)
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('❌ Test failed:', {
        status: response.status,
        statusText: response.statusText,
        error: errorData
      });
      console.log('\n💡 Make sure:');
      console.log('   1. Your Next.js dev server is running (npm run dev -- -p 3001)');
      console.log('   2. SendGrid API key is set in environment variables');
      console.log('   3. From email is configured correctly');
      return;
    }

    const result = await response.json();
    console.log('✅ Test email sent successfully!');
    console.log('📧 Sent to:', testData.email);
    console.log('📋 Response:', result);
    console.log('');
    console.log('🎉 Check dakshhsaraf@gmail.com for the welcome email!');
    console.log('📱 Check spam folder if not in inbox');
    console.log('🖼️  Email should show background image from table4six.in');

  } catch (error) {
    console.error('❌ Test error:', error.message);
    
    if (error.message.includes('fetch')) {
      console.log('\n💡 If you get a fetch error, try:');
      console.log('   npm install node-fetch');
      console.log('   Then uncomment the require line at the top of this file');
    }
  }
}

// Run the test
testWelcomeEmail(); 