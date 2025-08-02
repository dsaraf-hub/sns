import { NextRequest, NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';

// Set SendGrid API key
if (process.env.SENDGRID_API_KEY) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
} else {
  console.error('❌ SENDGRID_API_KEY is not set');
}

export async function POST(request: NextRequest) {
  try {
    const { name, email } = await request.json();

    // Validate required fields
    if (!name || !email) {
      return NextResponse.json(
        { error: 'Missing required fields: name, email' },
        { status: 400 }
      );
    }

    // Validate email address
    if (!email.includes('@')) {
      console.error('❌ Invalid email address provided:', email);
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    console.log('📧 Sending waitlist conversion email to:', email);

    const msg = {
      to: email,
      from: {
        email: 'hello@table4six.in',
        name: 'Table 4 Six'
      },
      replyTo: 'hello@table4six.in',
      subject: '🎉 Your Wait is Over - Table 4 Six is Ready!',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Your Wait is Over - Table 4 Six</title>
        </head>
        <body style="margin: 0; padding: 0; font-family: 'Arial', sans-serif; background-color: #fffcf5;">
          <div style="max-width: 600px; margin: 20px auto; background-color: white; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);">
            
            <!-- Header -->
            <div style="background: linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)), url('https://www.table4six.in/background.jpg') center/cover; background-color: #2d3748; padding: 25px 30px; text-align: center;">
              <img src="https://www.table4six.in/logo.png" alt="Table 4 Six Logo" style="width: 120px; height: auto; margin: 0 auto; display: block; filter: drop-shadow(3px 3px 6px rgba(0, 0, 0, 0.8));" />
            </div>

            <!-- Main Content -->
            <div style="padding: 40px 30px 30px 30px;">
              <h2 style="color: #4a4a4a; font-size: 24px; margin: 0 0 20px 0;">Hi ${name}! 🎉</h2>
              
              <p style="color: #666; line-height: 1.6; margin: 0 0 20px 0; font-size: 16px;">
                <strong>The wait is finally over!</strong> Your table is now set and ready for an unforgettable dining experience.
              </p>
              
              <p style="color: #666; line-height: 1.6; margin: 0 0 25px 0; font-size: 16px;">
                We're excited to invite you to confirm your spot at Table 4 Six. This is your exclusive opportunity to join our curated dining community and connect with like-minded food enthusiasts.
              </p>

              <!-- Highlight Box -->
              <div style="background: linear-gradient(135deg, #FF6B35 0%, #FF8E53 100%); border-radius: 12px; padding: 25px; margin: 25px 0; text-align: center;">
                <h3 style="color: white; font-size: 20px; margin: 0 0 15px 0; font-weight: bold;">🍽️ Your Table Awaits</h3>
                <p style="color: rgba(255, 255, 255, 0.95); margin: 0 0 20px 0; font-size: 16px; line-height: 1.5;">
                  Secure your seat for an exclusive Sunday brunch experience with carefully matched dining companions.
                </p>
                
                <!-- CTA Button -->
                <a href="https://payments.cashfree.com/forms/table4six" 
                   style="display: inline-block; background-color: white; color: #FF6B35; font-weight: bold; font-size: 16px; padding: 15px 30px; border-radius: 25px; text-decoration: none; margin: 10px 0; box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2); transition: all 0.3s ease;">
                  🪑 Confirm Your Seat
                </a>
              </div>

              <h3 style="color: #4a4a4a; font-size: 20px; margin: 30px 0 15px 0;">What's Included? ✨</h3>
              
              <ul style="color: #666; line-height: 1.6; padding-left: 20px; margin-bottom: 25px;">
                <li style="margin-bottom: 10px;"><strong>Curated Experience:</strong> Thoughtfully matched dining companions based on your preferences</li>
                <li style="margin-bottom: 10px;"><strong>Premium Venues:</strong> Exclusive access to Mumbai's finest restaurants and hidden gems</li>
                <li style="margin-bottom: 10px;"><strong>All-Inclusive:</strong> Your Table 4 Six experience fee covers the coordination and matching</li>
                <li style="margin-bottom: 10px;"><strong>Memorable Moments:</strong> Create lasting connections over exceptional food and conversation</li>
              </ul>

              <div style="background-color: #e8f5e9; border-left: 4px solid #4caf50; padding: 20px; margin: 25px 0; border-radius: 4px;">
                <p style="margin: 0; color: #2e7d32; font-size: 14px; line-height: 1.5;">
                  <strong>⏰ Limited Time:</strong> Spots are filling up quickly! Secure your seat today to avoid disappointment.
                </p>
              </div>

              <p style="color: #666; line-height: 1.6; margin: 25px 0 0 0; font-size: 16px;">
                Have questions? Simply reply to this email or reach out to us at <a href="mailto:hello@table4six.in" style="color: #FF6B35; text-decoration: none;">hello@table4six.in</a>.
              </p>
              
              <p style="color: #666; line-height: 1.6; margin: 20px 0 0 0; font-size: 16px;">
                We can't wait to welcome you to our table! 🥂
              </p>
              
              <p style="color: #666; line-height: 1.6; margin: 20px 0 0 0; font-size: 16px;">
                <strong>The Table 4 Six Team</strong>
              </p>
            </div>

            <!-- Footer -->
            <div style="background-color: #f8f6f0; padding: 35px 30px; text-align: center; border-top: 1px solid #e0e0e0; margin-top: 0;">
              <p style="margin: 0 0 15px 0; color: #999; font-size: 14px; line-height: 1.4;">
                Follow us for updates and behind-the-scenes content:
              </p>
              <div style="margin: 20px 0;">
                <a href="https://www.instagram.com/table4.six/" style="display: inline-block; margin: 0 10px; text-decoration: none; color: #FF6B35; font-weight: bold; font-size: 14px;">📸 @table4.six</a>
              </div>
              <p style="margin: 20px 0 0 0; color: #999; font-size: 12px; line-height: 1.4;">
                © 2025 Table 4 Six. Designed with ❤️ in Mumbai.
              </p>
            </div>
          </div>
          <!-- Add some bottom spacing -->
          <div style="height: 30px;"></div>
        </body>
        </html>
      `,
      text: `Hi ${name}!

The wait is finally over! Your table is now set and ready for an unforgettable dining experience.

We're excited to invite you to confirm your spot at Table 4 Six. This is your exclusive opportunity to join our curated dining community.

Confirm your seat: https://payments.cashfree.com/forms/table4six

What's Included:
- Curated Experience: Thoughtfully matched dining companions
- Premium Venues: Access to Mumbai's finest restaurants  
- All-Inclusive: Experience fee covers coordination and matching
- Memorable Moments: Create lasting connections over exceptional food

Limited spots available - secure your seat today!

Questions? Reply to this email or contact hello@table4six.in

We can't wait to welcome you to our table!

The Table 4 Six Team
`
    };

    await sgMail.send(msg);
    
    console.log('✅ Waitlist conversion email sent successfully to:', email);

    return NextResponse.json({ success: true, message: 'Waitlist conversion email sent successfully' });

  } catch (error) {
    console.error('❌ Error sending waitlist conversion email:', error);
    return NextResponse.json(
      { error: 'Failed to send email', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}