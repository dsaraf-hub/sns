require('dotenv').config({ path: '.env.local' });

async function testPaymentSuccessEmail() {
  console.log('🧪 Testing Payment Success Email...\n');

  // Check if SendGrid API key is configured
  const apiKey = process.env.SENDGRID_API_KEY;
  console.log('SendGrid API Key:', apiKey ? `${apiKey.substring(0, 10)}...` : '❌ MISSING');

  if (!apiKey) {
    console.error('❌ SENDGRID_API_KEY not found in .env.local');
    console.log('Please add: SENDGRID_API_KEY=your_sendgrid_api_key_here');
    return;
  }

  // Test data - matches the interface expected by the API
  const testData = {
    name: 'Daksh Saraf',
    email: 'dakshh.saraf@skyminyr.com',
    order_id: 'test_order_' + Date.now(),
    payment_amount: 299,
    payment_method: 'Test Card'
  };

  console.log('📋 Test Payment Data:');
  console.log(JSON.stringify(testData, null, 2));
  console.log('');

  try {
    console.log('📧 Sending test payment success email...');
    
    const response = await fetch('http://localhost:3000/api/send-payment-success-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(testData),
    });

    if (response.ok) {
      const result = await response.json();
      console.log('✅ SUCCESS! Payment success email sent successfully.');
      console.log('📄 Response:', result);
      console.log('\n🎉 Check your email inbox for the payment confirmation!');
    } else {
      const error = await response.json();
      console.error('❌ Email sending failed:');
      console.error('Status:', response.status);
      console.error('Error:', JSON.stringify(error, null, 2));
    }

  } catch (error) {
    console.error('❌ Error testing payment success email:', error.message);
    console.log('\n💡 Make sure your development server is running: npm run dev');
  }
}

// Run the test
testPaymentSuccessEmail(); 