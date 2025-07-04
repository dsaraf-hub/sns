# Scripts Directory

This directory contains utility scripts for the Table 4 Six project.

## 📊 test-google-sheets.js

A comprehensive test script for validating your Google Sheets integration setup.

### Usage

```bash
# Using npm script (recommended)
npm run test:sheets

# Direct execution
node scripts/test-google-sheets.js
```

### What it does

1. **Environment Check**: Validates that your `.env.local` file exists and contains the required variables
2. **API Access Test**: Verifies that your Google Sheets API credentials work correctly
3. **Data Submission Test**: Attempts to submit test data to your sheet
4. **Detailed Reporting**: Provides clear success/error messages with troubleshooting tips

### Prerequisites

- `.env.local` file with `GOOGLE_SHEET_ID`, `GOOGLE_SERVICE_ACCOUNT_EMAIL`, and `GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY`
- Google Sheet set up with service account access according to the instructions in `GOOGLE_SHEETS_SETUP.md`
- Next.js development server running (`npm run dev`)
- Internet connection for API calls

### Sample Output

**Success:**
```
🚀 Google Sheets Integration Test (via Service Account)

✅ Environment variables loaded
📊 Sheet ID: 1BxiMVs0XR...
🔑 Service Account: your-service-account@...

📝 Testing data submission via API route...
⚠️  Make sure your Next.js server is running on localhost:3000
✅ Test data submission successful
📈 API Response: { success: true, message: 'Data submitted successfully', updatedRows: 1 }

🎉 All tests passed! Your Google Sheets integration is working correctly.
```

**Error:**
```
❌ Test failed: Data submission failed: 500 Internal Server Error

🔧 Troubleshooting tips:
1. Make sure your Next.js server is running: npm run dev
2. Check that your Google Sheet is shared with your service account
3. Verify your service account has Editor permissions on the sheet
4. Ensure the Google Sheets API is enabled in your Google Cloud Console
5. Make sure your sheet is named "Sheet1" (or update the code)
6. Check that your sheet has the correct column headers in Row 1
```

### Troubleshooting

If the test fails, check:
- Next.js development server is running (`npm run dev`)
- Google Sheets API is enabled in Google Cloud Console
- Your sheet is shared with your service account (Editor permissions)
- Service account credentials are correctly set in .env.local
- Sheet has correct column headers in Row 1
- Sheet is named "Sheet1" (default name)

## Adding More Scripts

To add more utility scripts:

1. Create a new `.js` file in this directory
2. Make it executable: `chmod +x scripts/your-script.js`
3. Add a corresponding npm script in `package.json`
4. Document it in this README 