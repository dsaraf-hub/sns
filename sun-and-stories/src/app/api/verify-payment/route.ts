import { NextRequest, NextResponse } from 'next/server';
import { Cashfree, CFEnvironment } from 'cashfree-pg';

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
    return NextResponse.json(result);

  } catch (error) {
    console.error('Payment verification error:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Internal server error' },
      { status: 500 }
    );
  }
} 