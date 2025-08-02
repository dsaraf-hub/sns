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

# Optional: Custom domain (if not using Vercel)
PRODUCTION_URL=https://yourdomain.com

# Email Configuration
SENDGRID_API_KEY=SG.xxxxx...

# Google Sheets Configuration  
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"
GOOGLE_CLIENT_EMAIL=your-service-account@project.iam.gserviceaccount.com
GOOGLE_SHEET_ID=1AbCdEfGhIjKlMnOpQrStUvWxYz
```

## Cashfree Dashboard Configuration

### 1. API Key Generation
1. Log into your Cashfree merchant dashboard
2. Navigate to **Developers** → **API Keys**
3. Generate or copy your **Client ID** and **Client Secret**
4. Use sandbox keys for testing, production keys for live deployment

### 2. Domain Whitelisting
1. In the Cashfree Dashboard, go to **Settings** → **Webhooks & API**
2. Add your domain to the whitelist:
   - **Local Testing**: `http://localhost:3000`
   - **Production**: `https://yourdomain.com` (must be HTTPS)

## How Payment Processing Works

Our integration uses **Payment Verification** instead of webhooks for a more reliable experience:

1. **User completes payment** → Cashfree processes the transaction
2. **User redirected to success page** → `/confirmation?order_id=...`
3. **Page verifies payment** → Calls `/api/verify-payment` with order ID
4. **Direct API check** → Our server calls `cashfree.PGFetchOrder(orderId)`
5. **Real-time status** → Cashfree returns current payment status (`PAID`, `FAILED`, etc.)
6. **Success actions** → If `PAID`: Show checkmark ✅ + Send welcome email 📧

### Benefits of Payment Verification:
- ✅ **More reliable** than webhooks (no delivery failures)
- ✅ **Real-time accuracy** (always current status)
- ✅ **User-triggered emails** (sent when user sees success)
- ✅ **Secure verification** (uses private API keys)

## Testing

### Local Testing
1. Start your development server: `npm run dev`
2. Test the payment flow end-to-end
3. Use Cashfree's test payment methods
4. Verify payment verification works on success page

### Test Scripts
Run these commands to test individual components:

```bash
# Test Cashfree API connectivity
npm run test:cashfree

# Test payment success email  
npm run test:payment-email

# Test waitlist conversion email
npm run test:waitlist-email
```

## Production Deployment Checklist

- [ ] Switch to production Cashfree credentials
- [ ] Update `CASHFREE_ENVIRONMENT=production`
- [ ] Whitelist your production domain in Cashfree dashboard
- [ ] Test payment flow with small amounts
- [ ] Verify email delivery works
- [ ] Test payment verification on success page

## API Endpoints

- **POST** `/api/create-payment-order` - Creates Cashfree payment order
- **GET/POST** `/api/verify-payment` - Verifies payment status and sends emails
- **POST** `/api/send-payment-success-email` - Sends welcome email
- **POST** `/api/send-waitlist-to-payment-email` - Sends waitlist conversion email

## Troubleshooting

### 1. **Payment order creation fails**
- Verify Cashfree API keys are correct
- Check `CASHFREE_ENVIRONMENT` matches your keys (sandbox/production)
- Ensure domain is whitelisted in Cashfree dashboard

### 2. **Success page doesn't show**
- Check if `return_url` is correct (must be HTTPS in production)
- Verify payment verification endpoint is working
- Check browser console for JavaScript errors

### 3. **Welcome email not sent**
- Check SendGrid API key configuration
- Verify payment verification is working (`/api/verify-payment`)
- Check server logs for email sending errors

### 4. **Payment verification fails**
- Ensure order ID is correct and exists in Cashfree
- Verify API credentials have proper permissions
- Check network connectivity to Cashfree API

## Security Notes

- Store all API keys securely as environment variables
- Never expose Client Secret in frontend code
- Use HTTPS for all production URLs
- Validate all payment data server-side

### Security Headers

Cashfree provides these security features:
- Direct API verification using authenticated requests
- Order status validation through official SDK
- Secure customer data handling

## File Structure

```
src/app/api/
├── create-payment-order/
│   └── route.ts          # Creates Cashfree orders
├── verify-payment/
│   └── route.ts          # Verifies payments + sends emails
├── send-payment-success-email/
│   └── route.ts          # Welcome email service
└── send-waitlist-to-payment-email/
    └── route.ts          # Waitlist conversion email
``` 