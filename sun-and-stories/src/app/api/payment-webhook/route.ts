import { NextRequest, NextResponse } from 'next/server';

// Define webhook data interfaces
interface WebhookOrder {
  order_id: string;
  order_status: string;
  customer_details?: {
    customer_name?: string;
    customer_email?: string;
  };
}

interface WebhookPayment {
  payment_amount?: number;
  payment_method?: {
    upi?: unknown;
    card?: unknown;
    netbanking?: unknown;
  };
  payment_message?: string;
  payment_status?: string;
}

interface WebhookData {
  order: WebhookOrder;
  payment?: WebhookPayment;
  customer_details?: {
    customer_name?: string;
    customer_email?: string;
  };
}

interface WebhookPayload {
  type: string;
  data: WebhookData;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.text();
    const signature = request.headers.get('x-webhook-signature');
    const timestamp = request.headers.get('x-webhook-timestamp');
    const webhookVersion = request.headers.get('x-webhook-version');

    // Log webhook headers for debugging
    console.log('Webhook received:', {
      signature: signature ? 'present' : 'missing',
      timestamp,
      version: webhookVersion,
      contentLength: body.length
    });

    // Note: Cashfree signature verification requires specific implementation
    // For now, we'll accept webhooks and log them for debugging
    // In production, you may want to implement IP whitelisting or other security measures

    // Parse webhook data
    const webhookData: WebhookPayload = JSON.parse(body);
    
    console.log('Received payment webhook:', {
      type: webhookData.type,
      order_id: webhookData.data?.order?.order_id,
      order_status: webhookData.data?.order?.order_status,
      payment_status: webhookData.data?.payment?.payment_status,
    });

    // Handle different webhook events
    switch (webhookData.type) {
      case 'PAYMENT_SUCCESS_WEBHOOK':
        await handlePaymentSuccess(webhookData.data);
        break;
      case 'PAYMENT_FAILED_WEBHOOK':
        await handlePaymentFailure(webhookData.data);
        break;
      case 'PAYMENT_USER_DROPPED_WEBHOOK':
        await handlePaymentDropped(webhookData.data);
        break;
      default:
        console.log('Unhandled webhook type:', webhookData.type);
    }

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error('Webhook processing error:', error);
    return NextResponse.json({ error: 'Webhook processing failed' }, { status: 500 });
  }
}

async function handlePaymentSuccess(data: WebhookData) {
  try {
    const order = data.order;
    const payment = data.payment;
    const customerDetails = data.customer_details || order.customer_details;

    console.log('Payment successful:', {
      order_id: order?.order_id,
      payment_amount: payment?.payment_amount,
      payment_method: payment?.payment_method,
    });

    // Log the full webhook data structure for debugging
    console.log('Full webhook data structure:', JSON.stringify(data, null, 2));

    // Extract customer info from either location
    const customerName = customerDetails?.customer_name || order?.customer_details?.customer_name || 'Customer';
    const customerEmail = customerDetails?.customer_email || order?.customer_details?.customer_email;

    if (!customerEmail) {
      console.error('No customer email found in webhook data. Skipping email send.');
      return;
    }

    // Send payment success email to customer
    await sendPaymentSuccessEmail({
      name: customerName,
      email: customerEmail,
      order_id: order?.order_id || 'N/A',
      payment_amount: payment?.payment_amount || 0,
      payment_method: payment?.payment_method?.upi ? 'UPI' : 
                     payment?.payment_method?.card ? 'Card' : 
                     payment?.payment_method?.netbanking ? 'Net Banking' : 'Online Payment'
    });

  } catch (error) {
    console.error('Error handling payment success:', error);
  }
}

async function sendPaymentSuccessEmail(details: {
  name: string;
  email: string;
  order_id: string;
  payment_amount: number;
  payment_method: string;
}) {
  try {
    // Validate email address
    if (!details.email || !details.email.includes('@')) {
      console.error('❌ Invalid email address provided:', details.email);
      return;
    }

    console.log('📧 Sending payment success email to:', details.email);
    console.log('📋 Email details:', {
      name: details.name,
      order_id: details.order_id,
      payment_amount: details.payment_amount,
      payment_method: details.payment_method
    });

    // Use production URL - works with Vercel and custom domains
    const baseUrl = process.env.VERCEL_URL 
      ? `https://${process.env.VERCEL_URL}` 
      : process.env.PRODUCTION_URL || 'http://localhost:3000';
    
    const response = await fetch(`${baseUrl}/api/send-payment-success-email`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(details),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Email sending failed: ${response.status} - ${errorText}`);
    }

    const result = await response.json();
    console.log('✅ Payment success email sent successfully:', result);
  } catch (error) {
    console.error('❌ Error sending payment success email:', error);
  }
}

async function handlePaymentFailure(data: WebhookData) {
  try {
    const order = data.order;
    const payment = data.payment;

    console.log('Payment failed:', {
      order_id: order.order_id,
      failure_reason: payment?.payment_message,
    });

    // Here you can:
    // 1. Update your database with payment failure
    // 2. Send payment failure notification to customer
    // 3. Trigger retry mechanisms if needed

  } catch (error) {
    console.error('Error handling payment failure:', error);
  }
}

async function handlePaymentDropped(data: WebhookData) {
  try {
    const order = data.order;

    console.log('Payment dropped by user:', {
      order_id: order.order_id,
    });

    // Here you can:
    // 1. Update your database with payment abandonment
    // 2. Send abandoned cart reminders (if applicable)
    // 3. Track conversion metrics

  } catch (error) {
    console.error('Error handling payment drop:', error);
  }
} 