# Test Scripts

This folder contains utility scripts for testing various functionality of the Table 4 Six application.

## Available Scripts

### 1. Google Sheets Test (`test-google-sheets.js`)
Tests the Google Sheets integration for questionnaire submissions.

```bash
npm run test:sheets
```

### 2. Welcome Email Test (`test-email.js`)
Tests the SendGrid welcome email functionality. Sends a sample email to `dakshhsaraf@gmail.com` with mock questionnaire data.

```bash
npm run test:email
```

**Prerequisites:**
- Next.js dev server must be running (`npm run dev`)
- SendGrid API key must be configured in environment variables
- From email must be properly set up

**What it tests:**
- Email sending functionality
- Email template rendering
- Background image from `table4six.in`
- All questionnaire data formatting

## Setup

Make sure you have your environment variables configured:
- `SENDGRID_API_KEY`
- `FROM_EMAIL`
- `GOOGLE_SHEETS_PRIVATE_KEY`
- `GOOGLE_SHEETS_CLIENT_EMAIL`
- `GOOGLE_SHEETS_SHEET_ID`

## Troubleshooting

If you encounter fetch errors with Node.js versions older than 18:
1. Install node-fetch: `npm install node-fetch`
2. Uncomment the require line in the respective test file 