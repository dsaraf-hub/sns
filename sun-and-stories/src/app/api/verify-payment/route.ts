import { NextRequest, NextResponse } from 'next/server';
import { Cashfree, CFEnvironment } from 'cashfree-pg';
import sgMail from '@sendgrid/mail';
import { GoogleAuth } from 'google-auth-library';
import { google } from 'googleapis';

// TypeScript interfaces
interface QuestionnaireData {
  location?: string;
  name?: string;
  age?: string;
  phone?: string;
  email?: string;
  social?: string;
  sunday_vibe?: string;
  personality_type?: string;
  fashion?: string;
  brunch_plate?: string;
  alcohol?: string;
  introversion?: string;
  humor?: string;
  workout?: string;
  motivation?: string;
  date?: string;
  restaurant_preference?: string;
  ticket?: string;
}

interface OrderMetaWithQuestionnaire {
  return_url?: string;
  questionnaire_data?: string;
  [key: string]: unknown;
}

// Set SendGrid API key
if (process.env.SENDGRID_API_KEY) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
} else {
  console.error('❌ SENDGRID_API_KEY is not set');
}

// Google Sheets submission function
async function submitToGoogleSheets(questionnaireData: QuestionnaireData) {
  try {
    // Check if we have the required environment variables
    const serviceAccountEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
    const serviceAccountKey = process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY;
    const sheetId = process.env.GOOGLE_SHEET_ID;

    if (!serviceAccountEmail || !serviceAccountKey || !sheetId) {
      console.error('Missing required Google Sheets environment variables');
      return { success: false, error: 'Server configuration error' };
    }

    // Set up Google Auth
    const auth = new GoogleAuth({
      credentials: {
        client_email: serviceAccountEmail,
        private_key: serviceAccountKey.replace(/\\n/g, '\n'),
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    // Create Google Sheets client
    const sheets = google.sheets({ version: 'v4', auth });

    // Prepare the row data in the exact order specified
    // Timestamp, Location, Name, Email, Age, Phone, Social Handle, Sunday Vibe, Personality Type, 
    // Fashion Statement, Dream Brunch Plate, Alcohol Preference, Introversion Level, Humor Importance, 
    // Workout Preference, Motivation, Date, Restaurant Preference, Ticket
    const rowData = [
      new Date().toISOString(), // A: Timestamp
      questionnaireData.location || '', // B: Location
      questionnaireData.name || '', // C: Name
      questionnaireData.email || '', // D: Email
      questionnaireData.age || '', // E: Age
      questionnaireData.phone || '', // F: Phone
      questionnaireData.social || '', // G: Social Handle
      questionnaireData.sunday_vibe || '', // H: Sunday Vibe
      questionnaireData.personality_type || '', // I: Personality Type
      questionnaireData.fashion || '', // J: Fashion Statement
      questionnaireData.brunch_plate || '', // K: Dream Brunch Plate
      questionnaireData.alcohol || '', // L: Alcohol Preference
      questionnaireData.introversion || '', // M: Introversion Level
      questionnaireData.humor || '', // N: Humor Importance
      questionnaireData.workout || '', // O: Workout Preference
      questionnaireData.motivation || '', // P: Motivation
      questionnaireData.date || '', // Q: Date
      questionnaireData.restaurant_preference || '', // R: Restaurant Preference
      questionnaireData.ticket || '', // S: Ticket
    ];

    console.log('📊 Submitting PAID user to Google Sheets...', {
      sheetId: sheetId.substring(0, 10) + '...',
      email: questionnaireData.email,
      dataLength: rowData.length
    });

    // Append the data to the sheet
    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: sheetId,
      range: 'Sheet1!A:S',
      valueInputOption: 'RAW',
      requestBody: {
        values: [rowData],
      },
    });

    console.log('✅ Successfully submitted PAID user to Google Sheets');
    return { success: true, updatedRows: response.data.updates?.updatedRows || 0 };

  } catch (error) {
    console.error('❌ Error submitting PAID user to Google Sheets:', error);
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Unknown error' 
    };
  }
}

// Direct email sending function (no internal API calls)
async function sendPaymentSuccessEmailDirect(details: {
  name: string;
  email: string;
  order_id: string;
  payment_amount: number;
}) {
  try {
    if (!process.env.SENDGRID_API_KEY) {
      console.error('SendGrid API key not configured');
      return;
    }

    console.log('📧 Sending welcome email directly via SendGrid:', details.email);

    const msg = {
      to: details.email,
      from: {
        email: 'hello@table4six.in',
        name: 'Table 4 Six'
      },
      replyTo: 'hello@table4six.in',
      subject: '🎉 Welcome to Table 4 Six!',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Welcome to Table 4 Six</title>
        </head>
        <body style="margin: 0; padding: 0; font-family: 'Arial', sans-serif; background-color: #fffcf5;">
          <div style="max-width: 600px; margin: 0 auto; background-color: white; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);">
            
            <!-- Header -->
            <div style="background: linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)), url('https://www.table4six.in/background.jpg') center/cover; background-color: #2d3748; padding: 25px 30px; text-align: center;">
              <img src="https://www.table4six.in/logo.png" alt="Table 4 Six Logo" style="width: 120px; height: auto; margin: 0 auto; display: block; filter: drop-shadow(3px 3px 6px rgba(0, 0, 0, 0.8));" />
            </div>

            <!-- Main Content -->
            <div style="padding: 40px 30px;">
              <h2 style="color: #4a4a4a; font-size: 24px; margin: 0 0 20px 0;">Hi ${details.name}! 👋</h2>
              
              <p style="color: #666; line-height: 1.6; margin: 0 0 20px 0; font-size: 16px;">
                Congratulations! Your payment has been successfully processed and you're now officially part of the Table 4 Six community. Get ready for an unforgettable dining experience!
              </p>
              
              <p style="color: #666; line-height: 1.6; margin: 0 0 25px 0; font-size: 16px;">
                Your payment details:
              </p>

              <!-- Payment Details Card -->
              <div style="background-color: #fffcf5; border: 2px solid #FF6B35; border-radius: 8px; padding: 25px; margin: 25px 0;">
                <h3 style="color: #FF6B35; font-size: 18px; margin: 0 0 15px 0; font-weight: bold;">Payment Confirmation</h3>
                
                <table style="width: 100%; border-collapse: collapse;">
                  <tr>
                    <td style="padding: 8px 0; color: #666; font-weight: 500;">💰 Amount Paid:</td>
                    <td style="padding: 8px 0; color: #4a4a4a; font-weight: bold;">₹${details.payment_amount}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; color: #666; font-weight: 500;">💳 Payment Method:</td>
                    <td style="padding: 8px 0; color: #4a4a4a; font-weight: bold;">Online Payment</td>
                  </tr>
                </table>
              </div>

              <h3 style="color: #4a4a4a; font-size: 20px; margin: 30px 0 15px 0;">What's Next? 🚀</h3>
              
              <ul style="color: #666; line-height: 1.6; padding-left: 20px;">
                <li style="margin-bottom: 10px;"><strong>Restaurant Location:</strong> The exact restaurant location and event details will be shared closer to the date.</li>
                <li style="margin-bottom: 10px;"><strong>Table Companions:</strong> We'll carefully match you with like-minded individuals for the best experience.</li>
                <li style="margin-bottom: 10px;"><strong>Event Reminders:</strong> We'll keep you updated with all the important details leading up to your dining experience.</li>
              </ul>

              <div style="background-color: #e8f5e9; border-left: 4px solid #4caf50; padding: 20px; margin: 25px 0; border-radius: 4px;">
                <p style="margin: 0; color: #2e7d32; font-size: 14px; line-height: 1.5;">
                  <strong>💡 Pro Tip:</strong> Add hello@table4six.in to your contacts so you don't miss any important updates about your dining experience!
                </p>
              </div>

              <p style="color: #666; line-height: 1.6; margin: 25px 0 0 0; font-size: 16px;">
                If you have any questions, feel free to reply to this email or reach out to us at <a href="mailto:hello@table4six.in" style="color: #FF6B35; text-decoration: none;">hello@table4six.in</a>.
              </p>
              
              <p style="color: #666; line-height: 1.6; margin: 20px 0 0 0; font-size: 16px;">
                We're excited to have you join our table! 🥂
              </p>
              
              <p style="color: #666; line-height: 1.6; margin: 20px 0 0 0; font-size: 16px;">
                <strong>The Table 4 Six Team</strong>
              </p>
            </div>

            <!-- Footer -->
            <div style="background-color: #f8f6f0; padding: 30px; text-align: center; border-top: 1px solid #e0e0e0;">
              <p style="margin: 0 0 10px 0; color: #999; font-size: 14px;">
                Follow us for updates and behind-the-scenes content:
              </p>
              <div style="margin: 15px 0;">
                <a href="https://www.instagram.com/table4.six/" style="display: inline-block; margin: 0 10px; text-decoration: none; color: #FF6B35; font-weight: bold;">📸 @table4.six</a>
              </div>
              <p style="margin: 15px 0 0 0; color: #999; font-size: 12px;">
                © 2025 Table 4 Six. Designed with ❤️ in Mumbai.
              </p>
            </div>
          </div>
        </body>
        </html>
      `,
      text: `Hi ${details.name}!

Congratulations! Your payment has been successfully processed and you're now officially part of the Table 4 Six community.

Payment Details:
- Amount Paid: ₹${details.payment_amount}
- Payment Method: Online Payment

What's Next?
- Restaurant Location: The exact location will be shared closer to the date
- Table Companions: We'll match you with like-minded individuals
- Event Reminders: We'll keep you updated with important details

Pro Tip: Add hello@table4six.in to your contacts so you don't miss updates!

Questions? Reply to this email or contact hello@table4six.in

We're excited to have you join our table!

The Table 4 Six Team
`
    };

    await sgMail.send(msg);
    console.log('✅ Welcome email sent successfully via direct SendGrid:', details.email);

  } catch (error) {
    console.error('❌ Error sending welcome email directly:', error);
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
      order_meta: orderDetails.order_meta, // Include metadata to access questionnaire data
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
    
    // If payment is successful, send welcome email AND record to Google Sheets
    if (result.success && result.order_status === 'PAID' && result.customer_details) {
      const customerName = result.customer_details.customer_name || 'Customer';
      const customerEmail = result.customer_details.customer_email;
      
      if (customerEmail && result.order_id && result.order_amount) {
        // Send welcome email (don't await to avoid blocking the response)
        sendPaymentSuccessEmailDirect({
          name: customerName,
          email: customerEmail,
          order_id: result.order_id,
          payment_amount: result.order_amount
        }).catch(emailError => {
          console.error('Email sending failed but payment verification succeeded:', emailError);
        });

        // Record questionnaire data to Google Sheets for PAID users only
        const orderMeta = result.order_meta as OrderMetaWithQuestionnaire;
        if (orderMeta && orderMeta.questionnaire_data) {
          try {
            const questionnaireData: QuestionnaireData = JSON.parse(orderMeta.questionnaire_data);
            console.log('🎯 Payment confirmed - recording PAID user to Google Sheets:', customerEmail);
            
            // Record to Google Sheets (don't await to avoid blocking the response)
            submitToGoogleSheets(questionnaireData).catch(sheetsError => {
              console.error('Google Sheets recording failed but payment verification succeeded:', sheetsError);
            });
          } catch (parseError) {
            console.error('Failed to parse questionnaire data from order metadata:', parseError);
          }
        } else {
          console.warn('No questionnaire data found in order metadata for PAID user:', customerEmail);
        }
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