import { NextRequest, NextResponse } from 'next/server';
import { Cashfree, CFEnvironment } from 'cashfree-pg';

// Email sending function
async function sendPaymentSuccessEmail(details: {
  name: string;
  email: string;
  order_id: string;
  payment_amount: number;
}) {
  try {
    console.log('📧 Sending welcome email after payment verification:', details.email);
    
    // Use production URL - works with Vercel and custom domains
    const baseUrl = process.env.VERCEL_URL 
      ? `https://${process.env.VERCEL_URL}` 
      : process.env.PRODUCTION_URL || 'https://table4six.in';
    
    const response = await fetch(`${baseUrl}/api/send-payment-success-email`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: details.name,
        email: details.email,
        order_id: details.order_id,
        payment_amount: details.payment_amount,
        payment_method: 'Online Payment'
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Email sending failed: ${response.status} - ${errorText}`);
    }

    const result = await response.json();
    console.log('✅ Welcome email sent successfully via payment verification:', result);
  } catch (error) {
    console.error('❌ Error sending welcome email via payment verification:', error);
  }
}

async function verifyPaymentOrder(orderId: string) {
  // Get environment variables
  const clientId = process.env.CASHFREE_CLIENT_ID;
  const clientSecret = process.env.CASHFREE_CLIENT_SECRET;
  const environment = process.env.CASHFREE_ENVIRONMENT || 'sandbox';

  if (!clientId || !clientSecret) {
    throw new Error('Cashfree configuration not found');
  }

  // Initialize Cashfree
  const cashfreeEnv = environment === 'production' ? CFEnvironment.PRODUCTION : CFEnvironment.SANDBOX;
  const cashfree = new Cashfree(cashfreeEnv, clientId, clientSecret);

  // Fetch order details from Cashfree
  const response = await cashfree.PGFetchOrder(orderId);
  
  if (response.data) {
    const orderDetails = response.data;
    
    return {
      success: true,
      order_id: orderDetails.order_id,
      order_status: orderDetails.order_status,
      order_amount: orderDetails.order_amount,
      order_currency: orderDetails.order_currency,
      created_at: orderDetails.created_at,
      customer_details: orderDetails.customer_details,
    };
  } else {
    throw new Error('Failed to fetch order details');
  }
}

export async function POST(request: NextRequest) {
  try {
    // Parse request body
    const { orderId } = await request.json();

    if (!orderId) {
      return NextResponse.json(
        { error: 'Order ID is required' },
        { status: 400 }
      );
    }

    const result = await verifyPaymentOrder(orderId);
    return NextResponse.json(result);

  } catch (error) {
    console.error('Payment verification error:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const orderId = searchParams.get('order_id');
  
  if (!orderId) {
    return NextResponse.json(
      { error: 'Order ID is required' },
      { status: 400 }
    );
  }

  try {
    const result = await verifyPaymentOrder(orderId);
    
    // If payment is successful, send welcome email
    if (result.success && result.order_status === 'PAID' && result.customer_details) {
      const customerName = result.customer_details.customer_name || 'Customer';
      const customerEmail = result.customer_details.customer_email;
      
      if (customerEmail && result.order_id && result.order_amount) {
        // Send welcome email (don't await to avoid blocking the response)
        sendPaymentSuccessEmail({
          name: customerName,
          email: customerEmail,
          order_id: result.order_id,
          payment_amount: result.order_amount
        }).catch(emailError => {
          console.error('Email sending failed but payment verification succeeded:', emailError);
        });
      } else {
        console.warn('Missing required data for email - Order ID:', result.order_id, 'Amount:', result.order_amount, 'Email:', customerEmail);
      }
    }
    
    return NextResponse.json(result);

  } catch (error) {
    console.error('Payment verification error:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Internal server error' },
      { status: 500 }
    );
  }
} 