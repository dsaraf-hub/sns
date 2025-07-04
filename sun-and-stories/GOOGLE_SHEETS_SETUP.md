# 📊 Google Sheets Integration Setup Guide

## 🎯 Overview

This guide will help you set up Google Sheets integration to automatically collect questionnaire responses from your Table 4 Six website. All form submissions will be automatically saved to your Google Sheet in real-time.

## 📋 Step 1: Create Your Google Sheet

### 1.1 Create the Sheet
1. **Open Google Sheets**: Go to [sheets.google.com](https://sheets.google.com)
2. **Create New Sheet**: Click "Blank" to create a new spreadsheet
3. **Name Your Sheet**: 
   - Click "Untitled spreadsheet" at the top
   - Rename to "Table 4 Six - Questionnaire Responses"

### 1.2 Set Up Column Headers
**Copy and paste these headers into Row 1 (A1 to P1):**

```
Timestamp	Location	Name	Age	Social Handle	Sunday Vibe	Personality Type	Fashion Statement	Dream Brunch Plate	Alcohol Preference	Introversion Level	Humor Importance	Workout Preference	Motivation	Ticket	Restaurant Preference
```

**Or set up manually:**
- A1: `Timestamp`
- B1: `Location`
- C1: `Name`
- D1: `Age`
- E1: `Social Handle`
- F1: `Sunday Vibe`
- G1: `Personality Type`
- H1: `Fashion Statement`
- I1: `Dream Brunch Plate`
- J1: `Alcohol Preference`
- K1: `Introversion Level`
- L1: `Humor Importance`
- M1: `Workout Preference`
- N1: `Motivation`
- O1: `Ticket`
- P1: `Restaurant Preference`

### 1.3 Format Your Sheet (Optional but Recommended)
1. **Select Row 1**: Click on the "1" to select the entire first row
2. **Make Headers Bold**: Press Ctrl+B (or Cmd+B on Mac)
3. **Freeze Header Row**: Go to View → Freeze → 1 row
4. **Auto-resize columns**: Double-click the column borders to auto-fit content

## 🔑 Step 2: Set Up Google Cloud Console

### 2.1 Create/Select a Google Cloud Project
1. **Go to Google Cloud Console**: Visit [console.cloud.google.com](https://console.cloud.google.com)
2. **Create New Project** (if you don't have one):
   - Click "Select a project" dropdown at the top
   - Click "New Project"
   - Name: "Table 4 Six Website"
   - Click "Create"
3. **Select Your Project**: Make sure your project is selected in the dropdown

### 2.2 Enable Google Sheets API
1. **Navigate to APIs**: Go to "APIs & Services" → "Library"
2. **Search for Sheets API**: Type "Google Sheets API" in the search box
3. **Enable the API**: Click on "Google Sheets API" and press "Enable"

### 2.3 Create API Credentials
1. **Go to Credentials**: Navigate to "APIs & Services" → "Credentials"
2. **Create API Key**:
   - Click "Create Credentials" → "API Key"
   - Copy the generated API key (save it securely!)
   - Click "Restrict Key" (recommended for security)

### 2.4 Restrict API Key (Important for Security)
1. **API Restrictions**:
   - Select "Restrict key"
   - Choose "Google Sheets API" from the list
   - Click "Save"
2. **Website Restrictions** (for production):
   - Select "HTTP referrers (web sites)"
   - Add your website domains (e.g., `https://yourdomain.com/*`)
   - For development, you can temporarily use `http://localhost:3000/*`

## 📄 Step 3: Get Your Sheet ID

1. **Open Your Google Sheet**
2. **Copy the Sheet ID from URL**:
   ```
   https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit#gid=0
                                      ↑ THIS IS YOUR SHEET ID ↑
   ```
   The Sheet ID is the long string between `/d/` and `/edit`

## 🔐 Step 4: Make Your Sheet Accessible

### Option A: Public Access (Simpler, less secure)
1. **Click "Share"** button in your Google Sheet
2. **Change Access**: 
   - Click "Restricted" → "Anyone with the link"
   - Set permission to "Viewer"
   - Click "Done"

### Option B: Service Account (More secure, recommended for production)
1. **Create Service Account**:
   - In Google Cloud Console → "APIs & Services" → "Credentials"
   - Click "Create Credentials" → "Service Account"
   - Name: "table4six-questionnaire"
   - Click "Create and Continue"
   - Skip role assignment for now
   - Click "Done"
2. **Create Key**:
   - Click on your service account email
   - Go to "Keys" tab
   - Click "Add Key" → "Create new key"
   - Choose "JSON" and click "Create"
   - Download and save the JSON file securely
3. **Share Sheet with Service Account**:
   - Copy the service account email from the JSON file
   - In your Google Sheet, click "Share"
   - Paste the service account email
   - Set permission to "Editor"
   - Click "Send"

## 🛠️ Step 5: Configure Your Website

### 5.1 Create Environment Variables
Create a `.env.local` file in your project root (if it doesn't exist):

```bash
# Google Sheets Configuration
NEXT_PUBLIC_GOOGLE_SHEET_ID=your_sheet_id_here
NEXT_PUBLIC_GOOGLE_API_KEY=your_api_key_here
```

### 5.2 Example Configuration
```bash
# Replace with your actual values
NEXT_PUBLIC_GOOGLE_SHEET_ID=1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms
NEXT_PUBLIC_GOOGLE_API_KEY=AIzaSyBnV7cqcHwMpy-CoOVBoBEBJm6JUHmMDJM
```

**⚠️ Important**: Never commit your `.env.local` file to version control!

## 🧪 Step 6: Test the Integration

### 6.1 Quick Test with Test Script (Recommended)
We've included a test script to verify your setup before testing the full application:

```bash
# Option 1: Using npm script (recommended)
npm run test:sheets

# Option 2: Direct execution
node scripts/test-google-sheets.js
```

This script will:
- ✅ Verify your environment variables are set correctly
- ✅ Test Google Sheets API access
- ✅ Submit test data to your sheet
- ✅ Provide detailed error messages if something goes wrong

### 6.2 Test with Your Application
1. **Restart your development server**:
   ```bash
   npm run dev
   ```

2. **Test the Form**:
   - Open your website: Go to `http://localhost:3000`
   - Fill out questionnaire: Complete all questions
   - Submit the form: Click "Proceed to Payment"
   - Check console: Look for success/error messages in browser console (F12)
   - Verify data: Check your Google Sheet for new row

### 6.3 Troubleshooting Test
If the form doesn't work, check:
- Browser console for error messages
- Network tab in developer tools for failed requests
- Environment variables are correctly set
- Sheet ID and API key are correct
- Run the test script first: `npm run test:sheets`

## 📊 Step 7: Understanding Your Data

### 7.1 Data Structure
Each form submission creates a new row with:

| Column | Data Type | Description | Example |
|--------|-----------|-------------|---------|
| A | Timestamp | Auto-generated submission time | 2024-01-15T10:30:00.000Z |
| B | Location | Preferred brunch area | SoBo, West Mumbai |
| C | Name | User's full name | John Doe |
| D | Age | User's age | 28 |
| E | Social Handle | Instagram/LinkedIn | @johndoe |
| F | Sunday Vibe | Sunday personality | Cozy soul wrapped in blanket |
| G | Personality Type | Self-description | The funny one |
| H | Fashion Statement | Life as fashion | Comfort is key |
| I | Dream Brunch Plate | Food preferences | Eggs Benedict with avocado |
| J | Alcohol Preference | Drinking habits | Social drinker |
| K | Introversion Level | 1-10 scale | 7 |
| L | Humor Importance | Importance of humor | Very important |
| M | Workout Preference | Exercise habits | Yoga enthusiast |
| N | Motivation | Why joining | Meet like-minded people |
| O | Ticket | Selected ticket option | table4six_399 |
| P | Restaurant Preference | Dining preference | bottomless_brunch |

### 7.2 Data Analysis Tips
- **Sort by timestamp** to see newest responses first
- **Use filters** to analyze by location or preferences
- **Create pivot tables** for demographic analysis
- **Export data** regularly as backup

## 🔒 Step 8: Security Best Practices

### 8.1 API Key Security
- ✅ **DO**: Restrict API key to Google Sheets API only
- ✅ **DO**: Add website restrictions for production
- ✅ **DO**: Rotate API keys periodically
- ❌ **DON'T**: Commit API keys to version control
- ❌ **DON'T**: Share API keys publicly

### 8.2 Sheet Security
- ✅ **DO**: Use service accounts for production
- ✅ **DO**: Limit sheet access to necessary people
- ✅ **DO**: Regular backup your data
- ❌ **DON'T**: Make sheets publicly editable

## 🚨 Troubleshooting

### Common Issues & Solutions

#### Issue: "API key not valid"
**Solutions:**
1. Check if Google Sheets API is enabled in Google Cloud Console
2. Verify API key is correct in `.env.local`
3. Ensure API key restrictions allow your domain
4. Try creating a new API key

#### Issue: "The caller does not have permission"
**Solutions:**
1. Make sure sheet is shared publicly (Option A) or with service account (Option B)
2. Check API key restrictions in Google Cloud Console
3. Verify sheet ID is correct

#### Issue: "Unable to parse range"
**Solutions:**
1. Ensure your sheet is named "Sheet1" (default name)
2. Check that column headers are in Row 1
3. Verify sheet isn't empty

#### Issue: "Data not appearing in sheet"
**Solutions:**
1. Check browser console for error messages
2. Verify environment variables are loaded (restart dev server)
3. Test API endpoint directly in browser
4. Check sheet permissions

### Debug Steps

#### 1. Test Environment Variables
Add this to your component temporarily:
```javascript
console.log('Sheet ID:', process.env.NEXT_PUBLIC_GOOGLE_SHEET_ID);
console.log('API Key:', process.env.NEXT_PUBLIC_GOOGLE_API_KEY ? 'Present' : 'Missing');
```

#### 2. Test API Endpoint
Visit this URL in your browser (replace with your values):
```
https://sheets.googleapis.com/v4/spreadsheets/YOUR_SHEET_ID/values/Sheet1?key=YOUR_API_KEY
```

#### 3. Check Network Requests
1. Open browser Developer Tools (F12)
2. Go to Network tab
3. Submit form
4. Look for requests to `sheets.googleapis.com`
5. Check response for errors

## 📈 Advanced Features

### 8.1 Data Validation
Set up data validation in Google Sheets:
1. Select column range (e.g., B2:B1000 for Location)
2. Data → Data validation
3. Set criteria (e.g., List of items: "SoBo, West Mumbai")

### 8.2 Conditional Formatting
Highlight interesting responses:
1. Select data range
2. Format → Conditional formatting
3. Set rules (e.g., highlight high introversion scores)

### 8.3 Automated Notifications
Set up email notifications:
1. Extensions → Apps Script
2. Create trigger for form submissions
3. Send email when new data is added

### 8.4 Data Export & Backup
Regular backup strategies:
- **Manual**: File → Download as → Excel/CSV
- **Automated**: Use Google Apps Script to backup to Google Drive
- **API**: Build custom backup solution using Sheets API

## 🎉 You're All Set!

Your Google Sheets integration is now ready! Every questionnaire submission will automatically appear in your sheet with a timestamp. You can now:

- **Monitor responses** in real-time
- **Analyze user preferences** and demographics  
- **Export data** for further analysis
- **Share insights** with your team
- **Plan matching** based on user preferences

## 📞 Need Help?

If you encounter issues:
1. **Run the test script first**: `npm run test:sheets`
2. Check the troubleshooting section above
3. Review Google Cloud Console for API usage and errors
4. Test with a simple form first
5. Verify all environment variables are set correctly

## 🛠️ Included Tools

- **Test Script**: `scripts/test-google-sheets.js` - Automated testing of your Google Sheets integration
- **Template File**: `google-sheets-template.txt` - Copy-paste headers for your sheet
- **Documentation**: This comprehensive setup guide

Happy collecting! 🎊 