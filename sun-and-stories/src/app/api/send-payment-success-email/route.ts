import { NextRequest, NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';

// Initialize SendGrid with API key
if (process.env.SENDGRID_API_KEY) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
}

export async function POST(request: NextRequest) {
  try {
    const { name, email, order_id, payment_amount, payment_method } = await request.json();

    // Validate required fields
    if (!name || !email || !order_id || !payment_amount) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    if (!process.env.SENDGRID_API_KEY) {
      console.error('SendGrid API key not configured');
      return NextResponse.json(
        { error: 'Email service not configured' },
        { status: 500 }
      );
    }

    // Email content with the original beautiful design
    const msg = {
      to: email,
      from: {
        email: 'hello@table4six.in',
        name: 'Table 4 Six'
      },
      replyTo: 'hello@table4six.in',
      subject: '🎉 Payment Successful - Welcome to Table 4 Six!',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Payment Successful - Table 4 Six</title>
        </head>
        <body style="margin: 0; padding: 0; font-family: 'Arial', sans-serif; background-color: #fffcf5;">
          <div style="max-width: 600px; margin: 0 auto; background-color: white; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);">
            
            <!-- Header -->
            <div style="background: linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)), url('https://www.table4six.in/background.jpg') center/cover; background-color: #2d3748; padding: 40px 30px; text-align: center;">
              <img src="https://www.table4six.in/logo.png" alt="Table 4 Six Logo" style="max-width: 120px; height: auto; margin: 0 auto;">
            </div>

            <!-- Main Content -->
            <div style="padding: 40px 30px;">
              <h2 style="color: #4a4a4a; font-size: 24px; margin: 0 0 20px 0;">Hi ${name}! 👋</h2>
              
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
                    <td style="padding: 8px 0; color: #4a4a4a; font-weight: bold;">₹${payment_amount}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; color: #666; font-weight: 500;">💳 Payment Method:</td>
                    <td style="padding: 8px 0; color: #4a4a4a; font-weight: bold;">${payment_method}</td>
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
      text: `
Payment Successful - Welcome to Table 4 Six!

Hi ${name}!

Congratulations! Your payment has been successfully processed and you're now officially part of the Table 4 Six community. Get ready for an unforgettable dining experience!

Payment Details:
- Amount Paid: ₹${payment_amount}
- Payment Method: ${payment_method}

What's Next?
- Restaurant Location: The exact restaurant location and event details will be shared closer to the date
- Table Companions: We'll carefully match you with like-minded individuals for the best experience
- Event Reminders: We'll keep you updated with all the important details leading up to your dining experience

Questions? Reply to this email or contact us at hello@table4six.in

We're excited to have you join our table!

The Table 4 Six Team
      `
    };

    // Send email
    await sgMail.send(msg);

    console.log(`Payment success email sent to: ${email}`);

    return NextResponse.json({
      success: true,
      message: 'Payment success email sent successfully'
    });

  } catch (error) {
    console.error('Error sending payment success email:', error);
    
    return NextResponse.json(
      { 
        error: 'Failed to send email',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
} 