import { NextRequest, NextResponse } from 'next/server';
import { Cashfree, CFEnvironment } from 'cashfree-pg';

// Generate a valid customer_id from email (alphanumeric + underscore/hyphen only)
function generateValidCustomerId(email: string): string {
  // Replace invalid characters with underscores and add timestamp for uniqueness
  const sanitized = email
    .replace(/[^a-zA-Z0-9]/g, '_') // Replace non-alphanumeric with underscore
    .replace(/_+/g, '_') // Replace multiple underscores with single underscore
    .replace(/^_|_$/g, ''); // Remove leading/trailing underscores
  
  const timestamp = Date.now().toString().slice(-6); // Last 6 digits of timestamp
  return `${sanitized}_${timestamp}`;
}

// Format phone number for Cashfree (ensure it starts with +91 and is 10 digits)
function formatPhoneNumber(phone: string | undefined): string {
  if (!phone) return '+919999999999'; // Default test number
  
  // Remove all non-digits
  const digits = phone.replace(/\D/g, '');
  
  // If it's already 10 digits, add +91
  if (digits.length === 10) {
    return `+91${digits}`;
  }
  
  // If it's 12 digits and starts with 91, add +
  if (digits.length === 12 && digits.startsWith('91')) {
    return `+${digits}`;
  }
  
  // If it's 13 digits and starts with 91, assume it already has country code
  if (digits.length === 13 && digits.startsWith('91')) {
    return `+${digits}`;
  }
  
  // Default fallback
  return '+919999999999';
}

export async function POST(request: NextRequest) {
  try {
    // Get environment variables
    const clientId = process.env.CASHFREE_CLIENT_ID;
    const clientSecret = process.env.CASHFREE_CLIENT_SECRET;
    const environment = process.env.CASHFREE_ENVIRONMENT || 'sandbox';

    if (!clientId || !clientSecret) {
      return NextResponse.json(
        { error: 'Cashfree configuration not found' },
        { status: 500 }
      );
    }

    // Initialize Cashfree
    const cashfreeEnv = environment === 'production' ? CFEnvironment.PRODUCTION : CFEnvironment.SANDBOX;
    const cashfree = new Cashfree(cashfreeEnv, clientId, clientSecret);

    // Parse request body
    const { customerDetails, orderAmount, orderId } = await request.json();

    // Validate required fields
    if (!customerDetails || !orderAmount || !orderId) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Create order request
    const orderRequest = {
      order_id: orderId,
      order_amount: parseFloat(orderAmount), // Ensure it's a number
      order_currency: 'INR',
      customer_details: {
        customer_id: generateValidCustomerId(customerDetails.customer_email || 'customer'),
        customer_name: customerDetails.customer_name || 'Customer',
        customer_email: customerDetails.customer_email,
        customer_phone: formatPhoneNumber(customerDetails.customer_phone),
      },
      order_meta: {
        return_url: `${request.headers.get('origin') || 'http://localhost:3000'}/confirmation?order_id=${orderId}`,
        notify_url: `${request.headers.get('origin') || 'http://localhost:3000'}/api/payment-webhook`,
      },
      order_note: 'Table 4 Six - Dining Experience Booking',
    };

    // Log the request for debugging
    console.log('Creating Cashfree order with request:', JSON.stringify(orderRequest, null, 2));
    console.log('Using environment:', environment);
    console.log('Client ID:', clientId?.substring(0, 10) + '...');

    // Create order with Cashfree
    const response = await cashfree.PGCreateOrder(orderRequest);
    
    console.log('Cashfree response:', JSON.stringify(response.data, null, 2));
    
    if (response.data) {
      return NextResponse.json({
        success: true,
        order_id: response.data.order_id,
        payment_session_id: response.data.payment_session_id,
        order_status: response.data.order_status,
      });
    } else {
      return NextResponse.json(
        { error: 'Failed to create payment order' },
        { status: 500 }
      );
    }

  } catch (error: unknown) {
    console.error('Payment order creation error:', error);
    
    // Log detailed error information
    if (error && typeof error === 'object' && 'response' in error) {
      const axiosError = error as { response: { status: number; data: unknown; headers: unknown } };
      console.error('Cashfree API Error Response:', {
        status: axiosError.response.status,
        data: axiosError.response.data,
        headers: axiosError.response.headers
      });
      
      return NextResponse.json(
        { 
          error: 'Payment order creation failed',
          details: axiosError.response.data || 'Unknown error from payment gateway',
          status: axiosError.response.status
        },
        { status: 400 }
      );
    }
    
    return NextResponse.json(
      { error: 'Internal server error', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
} 