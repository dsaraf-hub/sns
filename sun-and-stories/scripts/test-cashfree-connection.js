require('dotenv').config({ path: '.env.local' });
const { Cashfree, CFEnvironment } = require('cashfree-pg');

async function testCashfreeConnection() {
  console.log('🧪 Testing Cashfree Connection...\n');

  // Check environment variables
  const clientId = process.env.CASHFREE_CLIENT_ID;
  const clientSecret = process.env.CASHFREE_CLIENT_SECRET;
  const environment = process.env.CASHFREE_ENVIRONMENT || 'sandbox';

  console.log('Environment Variables:');
  console.log('- CASHFREE_CLIENT_ID:', clientId ? `${clientId.substring(0, 10)}...` : '❌ MISSING');
  console.log('- CASHFREE_CLIENT_SECRET:', clientSecret ? `${clientSecret.substring(0, 10)}...` : '❌ MISSING');
  console.log('- CASHFREE_ENVIRONMENT:', environment);
  console.log('');

  if (!clientId || !clientSecret) {
    console.error('❌ Missing Cashfree credentials in .env.local');
    console.log('Please add:');
    console.log('CASHFREE_CLIENT_ID=your_client_id_here');
    console.log('CASHFREE_CLIENT_SECRET=your_client_secret_here');
    console.log('CASHFREE_ENVIRONMENT=sandbox');
    return;
  }

  try {
    // Initialize Cashfree
    const cashfreeEnv = environment === 'production' ? CFEnvironment.PRODUCTION : CFEnvironment.SANDBOX;
    const cashfree = new Cashfree(cashfreeEnv, clientId, clientSecret);

    console.log('🔧 Initializing Cashfree SDK...');
    console.log('- Environment:', environment);
    console.log('- SDK Environment:', cashfreeEnv);
    console.log('');

    // Test with a minimal order request
    const testOrderId = `test_order_${Date.now()}`;
    const testOrderRequest = {
      order_id: testOrderId,
      order_amount: 1.00, // Minimum amount for testing
      order_currency: 'INR',
      customer_details: {
        customer_id: 'test_customer_123',
        customer_name: 'Test Customer',
        customer_email: 'test@example.com',
        customer_phone: '+919999999999',
      },
      order_meta: {
        return_url: 'https://test.com/return',
      },
      order_note: 'Test order for API connectivity',
    };

    console.log('📋 Test Order Request:');
    console.log(JSON.stringify(testOrderRequest, null, 2));
    console.log('');

    console.log('🚀 Creating test order...');
    const response = await cashfree.PGCreateOrder(testOrderRequest);

    if (response.data) {
      console.log('✅ SUCCESS! Cashfree connection is working.');
      console.log('📄 Response:');
      console.log(JSON.stringify(response.data, null, 2));
      
      console.log('\n🎉 Your Cashfree integration is properly configured!');
      console.log('You can now test the payment flow in your application.');
    } else {
      console.log('⚠️  Unexpected response format from Cashfree API');
    }

  } catch (error) {
    console.error('❌ Cashfree API Error:');
    
    if (error.response) {
      console.error('Status:', error.response.status);
      console.error('Error Data:', JSON.stringify(error.response.data, null, 2));
      
      // Common error explanations
      if (error.response.status === 401) {
        console.log('\n💡 This is usually an authentication error.');
        console.log('- Check your CASHFREE_CLIENT_ID and CASHFREE_CLIENT_SECRET');
        console.log('- Make sure you\'re using the correct environment (sandbox/production)');
      } else if (error.response.status === 400) {
        console.log('\n💡 This is a bad request error.');
        console.log('- Check the request format above');
        console.log('- Verify all required fields are present and valid');
      }
    } else {
      console.error('Error:', error.message);
    }
  }
}

// Run the test
testCashfreeConnection(); 