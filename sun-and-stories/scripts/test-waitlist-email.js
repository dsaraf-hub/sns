require('dotenv').config({ path: '.env.local' });

async function testWaitlistEmail() {
  try {
    console.log('🧪 Testing Waitlist Conversion Email...\n');
    
    // Check if required environment variables are set
    if (!process.env.SENDGRID_API_KEY) {
      console.error('❌ SENDGRID_API_KEY is not set in .env.local');
      process.exit(1);
    }

    console.log('SendGrid API Key:', process.env.SENDGRID_API_KEY.substring(0, 10) + '...');

    // Test data - simple fields for waitlist conversion
    const testData = {
      name: 'Daksh Saraf',
      email: 'dakshh.saraf@skyminyr.com'
    };

    console.log('📋 Test Waitlist Data:');
    console.log(JSON.stringify(testData, null, 2));
    console.log();

    console.log('📧 Sending test waitlist conversion email...');

    // Make request to the API endpoint
    const response = await fetch('http://localhost:3000/api/send-waitlist-to-payment-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(testData),
    });

    if (!response.ok) {
      const errorData = await response.text();
      throw new Error(`HTTP ${response.status}: ${errorData}`);
    }

    const result = await response.json();
    console.log('✅ SUCCESS! Waitlist conversion email sent successfully.');
    console.log('📄 Response:', result);
    console.log();
    console.log('🎉 Check your email inbox for the waitlist conversion email!');

  } catch (error) {
    console.error('❌ ERROR:', error.message);
    console.log();
    console.log('💡 Make sure:');
    console.log('1. Your Next.js development server is running (npm run dev)'); 
    console.log('2. SENDGRID_API_KEY is set in .env.local');
    console.log('3. The API route exists at /api/send-waitlist-to-payment-email');
    process.exit(1);
  }
}

testWaitlistEmail(); 