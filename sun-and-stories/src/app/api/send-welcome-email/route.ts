import { NextRequest, NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';

interface EmailData {
  name: string;
  email: string;
  date: string;
  location: string;
  restaurant_preference: string;
}

export async function POST(request: NextRequest) {
  try {
    const data: EmailData = await request.json();
    
    // Check if we have the required environment variables
    const sendgridApiKey = process.env.SENDGRID_API_KEY;
    const fromEmail = process.env.FROM_EMAIL || 'hello@table4six.in';

    if (!sendgridApiKey) {
      console.error('Missing SENDGRID_API_KEY environment variable');
      return NextResponse.json(
        { error: 'Email service configuration error' },
        { status: 500 }
      );
    }

    if (!data.email) {
      return NextResponse.json(
        { error: 'Email address is required' },
        { status: 400 }
      );
    }

    // Set SendGrid API key
    sgMail.setApiKey(sendgridApiKey);

    // Format the date nicely
    const formattedDate = data.date === '2025-08-10' ? '10th August, 2025' : '24th August, 2025';
    const formattedLocation = data.location === 'sobo' ? 'SoBo' : 'West Mumbai';
    const formattedRestaurant = data.restaurant_preference?.replace('_', ' ').replace(/\b\w/g, l => l.toUpperCase()) || 'Not specified';

    // Email content
    const emailContent = {
      to: data.email,
      from: {
        email: fromEmail,
        name: 'Table 4 Six'
      },
      replyTo: fromEmail,
      subject: '🎉 Welcome to Table 4 Six - Your Spot is Confirmed!',
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
            <div style="background: linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)), url('https://www.table4six.in/background.jpg') center/cover; background-color: #2d3748; padding: 40px 30px; text-align: center;">
              <h1 style="margin: 0; color: white; font-size: 28px; font-weight: bold; text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.8);">Welcome to Table 4 Six!</h1>
              <p style="margin: 10px 0 0 0; color: rgba(255, 255, 255, 0.95); font-size: 16px; text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);">Your spot has been confirmed ✨</p>
            </div>

            <!-- Main Content -->
            <div style="padding: 40px 30px;">
              <h2 style="color: #4a4a4a; font-size: 24px; margin: 0 0 20px 0;">Hi ${data.name}! 👋</h2>
              
              <p style="color: #666; line-height: 1.6; margin: 0 0 20px 0; font-size: 16px;">
                Thank you for joining Table 4 Six! We're thrilled to have you as part of our community of food lovers and conversation enthusiasts.
              </p>
              
              <p style="color: #666; line-height: 1.6; margin: 0 0 25px 0; font-size: 16px;">
                Your brunch details have been confirmed:
              </p>

              <!-- Brunch Details Card -->
              <div style="background-color: #fffcf5; border: 2px solid #FF6B35; border-radius: 8px; padding: 25px; margin: 25px 0;">
                <h3 style="color: #FF6B35; font-size: 18px; margin: 0 0 15px 0; font-weight: bold;">Your Brunch Experience</h3>
                
                <table style="width: 100%; border-collapse: collapse;">
                  <tr>
                    <td style="padding: 8px 0; color: #666; font-weight: 500;">📅 Date:</td>
                    <td style="padding: 8px 0; color: #4a4a4a; font-weight: bold;">${formattedDate}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; color: #666; font-weight: 500;">📍 Location:</td>
                    <td style="padding: 8px 0; color: #4a4a4a; font-weight: bold;">${formattedLocation}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; color: #666; font-weight: 500;">🍽️ Dining Package:</td>
                    <td style="padding: 8px 0; color: #4a4a4a; font-weight: bold;">${formattedRestaurant}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; color: #666; font-weight: 500;">💰 Ticket Price:</td>
                    <td style="padding: 8px 0; color: #4a4a4a; font-weight: bold;">₹10</td>
                  </tr>
                </table>
              </div>

              <h3 style="color: #4a4a4a; font-size: 20px; margin: 30px 0 15px 0;">What's Next? 🚀</h3>
              
              <ul style="color: #666; line-height: 1.6; padding-left: 20px;">
                <li style="margin-bottom: 10px;"><strong>Payment Instructions:</strong> We'll send you payment details and instructions within the next 24 hours.</li>
                <li style="margin-bottom: 10px;"><strong>Restaurant Details:</strong> The exact restaurant location will be shared once payment is confirmed.</li>
                <li style="margin-bottom: 10px;"><strong>Group Info:</strong> You'll receive details about your table companions closer to the event date.</li>
                <li style="margin-bottom: 10px;"><strong>Event Reminders:</strong> We'll keep you updated with all the important details leading up to your brunch.</li>
              </ul>

              <div style="background-color: #e8f5e9; border-left: 4px solid #4caf50; padding: 20px; margin: 25px 0; border-radius: 4px;">
                <p style="margin: 0; color: #2e7d32; font-size: 14px; line-height: 1.5;">
                                     <strong>💡 Pro Tip:</strong> Add hello@table4six.in to your contacts so you don't miss any important updates!
                </p>
              </div>

              <p style="color: #666; line-height: 1.6; margin: 25px 0 0 0; font-size: 16px;">
                                 If you have any questions, feel free to reply to this email or reach out to us at <a href="mailto:hello@table4six.in" style="color: #FF6B35; text-decoration: none;">hello@table4six.in</a>.
              </p>
              
              <p style="color: #666; line-height: 1.6; margin: 20px 0 0 0; font-size: 16px;">
                Looking forward to seeing you at brunch! 🥂
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
Welcome to Table 4 Six!

Hi ${data.name}!

Thank you for joining Table 4 Six! We're thrilled to have you as part of our community.

Your brunch details:
- Date: ${formattedDate}
- Location: ${formattedLocation}  
- Dining Package: ${formattedRestaurant}
- Ticket Price: ₹10

What's Next?
- Payment instructions will be sent within 24 hours
- Restaurant details will be shared once payment is confirmed
- Group info will be provided closer to the event date

 Questions? Reply to this email or contact us at hello@table4six.in

Looking forward to seeing you at brunch!

The Table 4 Six Team
      `
    };

    console.log('📧 Sending welcome email to:', data.email);

    // Send the email
    const response = await sgMail.send(emailContent);
    
    console.log('✅ Welcome email sent successfully');
    console.log('📧 SendGrid Response Status:', response[0].statusCode);
    console.log('📧 Message ID:', response[0].headers['x-message-id']);
    console.log('📧 From Email:', fromEmail);
    console.log('📧 To Email:', data.email);
    
    return NextResponse.json({ 
      success: true, 
      message: 'Welcome email sent successfully',
      statusCode: response[0].statusCode,
      messageId: response[0].headers['x-message-id'],
      fromEmail: fromEmail,
      toEmail: data.email
    });

  } catch (error) {
    console.error('❌ Error sending welcome email:', error);
    
    return NextResponse.json(
      { 
        error: 'Failed to send welcome email', 
        details: error instanceof Error ? error.message : 'Unknown error' 
      },
      { status: 500 }
    );
  }
} 