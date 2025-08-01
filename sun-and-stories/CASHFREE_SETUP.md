# Cashfree Payment Integration Setup

This document explains how to set up Cashfree payments for your Table 4 Six application.

## Prerequisites

1. **Cashfree Account**: You should have already created a Cashfree merchant account
2. **API Keys**: Generate your Client ID and Client Secret from the Cashfree dashboard
3. **Domain Whitelist**: Ensure your domain is whitelisted in Cashfree dashboard

## Environment Variables Setup

### For Local Development
Create a `.env.local` file in the root directory (`sun-and-stories/.env.local`):

```env
# Cashfree Configuration (use sandbox for local testing)
CASHFREE_CLIENT_ID=your_cashfree_sandbox_client_id_here
CASHFREE_CLIENT_SECRET=your_cashfree_sandbox_client_secret_here
CASHFREE_ENVIRONMENT=sandbox

# Email Configuration
SENDGRID_API_KEY=your_sendgrid_api_key_here

# Google Sheets Configuration
GOOGLE_PRIVATE_KEY=your_google_private_key_here
GOOGLE_CLIENT_EMAIL=your_google_client_email_here
GOOGLE_SHEET_ID=your_google_sheet_id_here
```

### For Production Deployment
Set these environment variables in your hosting platform (Vercel, Netlify, etc.):

```env
# Cashfree Configuration (use production keys)
CASHFREE_CLIENT_ID=CF12345...  # Your production Client ID (starts with CF)
CASHFREE_CLIENT_SECRET=cfsk_ma_prod_...  # Your production Client Secret
CASHFREE_ENVIRONMENT=production

# Optional: Custom domain for webhook callbacks (if not using Vercel)
PRODUCTION_URL=https://yourdomain.com

# Email Configuration
SENDGRID_API_KEY=SG.xxxxx...

# Google Sheets Configuration  
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"
GOOGLE_CLIENT_EMAIL=your-service-account@project.iam.gserviceaccount.com
GOOGLE_SHEET_ID=1AbCdEfGhIjKlMnOpQrStUvWxYz
```

**⚠️ Important Production Notes:**
- Use **production** Cashfree keys (not sandbox keys)
- Ensure your domain uses **HTTPS** (required by Cashfree)
- Never commit production secrets to version control
- Update Cashfree dashboard with your production domain
- Test thoroughly before going live

## How to Get Your Cashfree Credentials

### 1. Client ID and Client Secret

1. Log in to your [Cashfree Dashboard](https://merchant.cashfree.com/)
2. Navigate to **API Keys** section
3. Generate or copy your:
   - **Client ID** (starts with `CF`)
   - **Client Secret** (long alphanumeric string)

### 2. Webhook Configuration

#### For Local Development (Sandbox):
1. In the Cashfree Dashboard, go to **Webhooks** section
2. Create a webhook endpoint: `http://localhost:3000/api/payment-webhook` (for local testing only)
3. Configure the following webhook events:
   - `PAYMENT_SUCCESS_WEBHOOK`
   - `PAYMENT_FAILED_WEBHOOK`
   - `PAYMENT_USER_DROPPED_WEBHOOK`
4. Select webhook version: `2025-01-01`

#### For Production:
1. Create a webhook endpoint: `https://yourdomain.com/api/payment-webhook`
2. Configure the same webhook events as above
3. **Important**: Production webhooks require HTTPS URLs

Note: Cashfree doesn't use configurable webhook secrets. Instead, they provide signature verification through headers.

### 3. Environment Configuration

- **Sandbox**: Use `sandbox` for testing
- **Production**: Use `production` for live payments

⚠️ **Important**: Always test thoroughly in sandbox mode before switching to production!

## Domain Whitelisting

Ensure your domains are whitelisted in the Cashfree dashboard:

1. Go to **Settings** → **Domain Whitelisting**
2. Add your domains:
   - **Development**: `http://localhost:3000` (for local testing)
   - **Production**: `https://yourdomain.com` (replace with your actual domain)
   - **Vercel**: If using Vercel, add your `.vercel.app` domain

**Important**: Production domains must use HTTPS.

## Testing the Integration

### 1. Local Development Testing

1. Set `CASHFREE_ENVIRONMENT=sandbox` in your `.env.local`
2. Start your development server: `npm run dev`
3. Navigate to `/questionnaire`
4. Fill out the form completely
5. Click "Join Table" to trigger the payment flow
6. Use Cashfree's test card details for sandbox testing
7. Check your email for confirmation after successful payment

### 2. Production Testing

1. Deploy your application to your hosting platform
2. Set production environment variables
3. Update Cashfree dashboard with your production domain
4. Test with real payment methods in production environment

### 2. Test Cards (Sandbox Only)

**Successful Payment:**
- Card Number: `4111111111111111`
- Expiry: Any future date
- CVV: Any 3 digits
- OTP: `123456`

**Failed Payment:**
- Card Number: `4111111111111112`
- Expiry: Any future date
- CVV: Any 3 digits

### 3. Verify Integration

After completing a test payment:
1. Check the browser console for logs
2. Verify the confirmation page shows the correct status
3. Check your Cashfree dashboard for the transaction
4. Ensure webhooks are received (check server logs)

## Production Deployment Checklist

### Before Going Live:

**Environment Configuration:**
- [ ] Set `CASHFREE_ENVIRONMENT=production` in your hosting platform
- [ ] Use **production** Cashfree API keys (not sandbox)
- [ ] Configure `PRODUCTION_URL` if not using Vercel
- [ ] Verify all other environment variables are set

**Cashfree Dashboard Setup:**
- [ ] Whitelist your production domain (must be HTTPS)
- [ ] Update webhook endpoint to your production URL
- [ ] Verify webhook events are enabled
- [ ] Test webhook connectivity

**Security & Testing:**
- [ ] Ensure your domain has SSL certificate (HTTPS)
- [ ] Test the complete payment flow in production
- [ ] Test email delivery after successful payments
- [ ] Verify payment confirmation page works correctly

**Final Checks:**
- [ ] All sensitive data stored securely in environment variables
- [ ] No hardcoded URLs or credentials in code
- [ ] Error handling and logging are working
- [ ] Customer support contact information is accurate

## Quick Deployment Guide

### Deploy to Vercel (Recommended):

1. **Push to GitHub**: Commit your code to GitHub repository
2. **Connect to Vercel**: Import your project at [vercel.com](https://vercel.com)
3. **Set Environment Variables**: In Vercel dashboard, add all production environment variables
4. **Deploy**: Vercel will automatically deploy your application
5. **Update Cashfree**: Add your `.vercel.app` domain to Cashfree dashboard
6. **Test**: Test the complete payment flow with your live domain

### Deploy to Other Platforms:

For Netlify, Railway, or other platforms:
1. Set all environment variables in your platform's dashboard
2. Ensure `PRODUCTION_URL` is set to your domain (e.g., `https://yourdomain.com`)
3. Update Cashfree dashboard with your production domain
4. Test the deployment thoroughly

## API Endpoints

The integration includes these API endpoints:

- **POST** `/api/create-payment-order` - Creates a new payment order
- **GET/POST** `/api/verify-payment` - Verifies payment status
- **POST** `/api/payment-webhook` - Handles payment webhooks

## Troubleshooting

### Common Issues

1. **"Payment system not available"**
   - Check if Cashfree SDK is loading properly
   - Verify your domain is whitelisted in Cashfree dashboard
   - Check browser console for JavaScript errors
   - Ensure environment variables are set correctly

2. **"Failed to create payment order"**
   - Verify your API keys are correct and match your environment
   - Check if you're using the right environment (sandbox/production)
   - Ensure all required fields are provided
   - **Production**: Verify your domain uses HTTPS

3. **"return_url_invalid" Error**
   - This occurs when using HTTP instead of HTTPS
   - Ensure your production domain uses HTTPS
   - For local development, use sandbox environment only

4. **Webhook not receiving**
   - Verify webhook URL is publicly accessible
   - **Production**: Webhook URL must use HTTPS
   - Ensure webhook events are configured in Cashfree dashboard
   - Check that webhook endpoint returns 200 OK status
   - Review server logs for webhook processing errors

5. **Email not sending after payment**
   - Check SendGrid API key is configured
   - Verify webhook is receiving payment success events
   - Check server logs for email sending errors

### Debug Mode

Enable debug logging by checking browser console and server logs. The integration logs:
- Payment order creation
- SDK loading status
- Webhook events
- Payment verification results

## Security Notes

- Never expose your Client Secret in frontend code
- Always verify payments on the server side
- Cashfree webhooks include signature headers (`x-webhook-signature`, `x-webhook-timestamp`) for verification
- Implement proper error handling and logging
- Keep your API keys secure and rotate them regularly
- Consider IP whitelisting for webhook endpoints in production

### Webhook Security

According to the [Cashfree webhook documentation](https://www.cashfree.com/docs/api-reference/payments/latest/payments/webhooks), webhooks include these security headers:

- `x-webhook-signature`: Signature for verification
- `x-webhook-timestamp`: Timestamp of the webhook
- `x-webhook-version`: Version of the webhook format

For enhanced security in production, you can implement signature verification or IP whitelisting.

## Support

If you encounter issues:
1. Check the [Cashfree Documentation](https://docs.cashfree.com/)
2. Review the browser console and server logs
3. Test in sandbox mode first
4. Contact Cashfree support if needed

## File Structure

The integration adds these files:
```
src/
├── app/
│   └── api/
│       ├── create-payment-order/
│       │   └── route.ts
│       ├── verify-payment/
│       │   └── route.ts
│       └── payment-webhook/
│           └── route.ts
└── components/
    └── Questionnaire.tsx (updated)
``` 