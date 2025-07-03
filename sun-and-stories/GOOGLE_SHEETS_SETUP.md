# Google Sheets Setup Guide for Questionnaire

## 📋 Step 1: Create Your Google Sheet

1. **Go to Google Sheets**: Visit [sheets.google.com](https://sheets.google.com)
2. **Create New Sheet**: Click "Blank" to create a new spreadsheet
3. **Name Your Sheet**: "Table 4 Six - Questionnaire Responses"
4. **Add Column Headers** in Row 1 (in this exact order):

```
A1: Timestamp
B1: Location
C1: Name
D1: Age
E1: Social Handle
F1: Sunday Vibe
G1: Personality Type
H1: Fashion Statement
I1: Dream Brunch Plate
J1: Alcohol Preference
K1: Introversion Level
L1: Humor Importance
M1: Workout Preference
N1: Motivation
O1: Ticket
P1: Restaurant Preference
```

## 🔑 Step 2: Get Google Sheets API Access

### Option A: Simple API Key (Recommended for testing)

1. **Go to Google Cloud Console**: Visit [console.cloud.google.com](https://console.cloud.google.com)
2. **Create or Select Project**: 
   - If new: Click "New Project", name it "Table 4 Six"
   - If existing: Select your project from dropdown
3. **Enable Google Sheets API**:
   - Go to "APIs & Services" > "Library"
   - Search for "Google Sheets API"
   - Click on it and press "Enable"
4. **Create API Key**:
   - Go to "APIs & Services" > "Credentials"
   - Click "Create Credentials" > "API Key"
   - Copy the API key (save it securely!)
5. **Restrict API Key** (Important for security):
   - Click on your API key to edit it
   - Under "API restrictions", select "Restrict key"
   - Choose "Google Sheets API"
   - Under "Website restrictions", add your domain
   - Save changes

### Option B: Service Account (More secure for production)

1. **Create Service Account**:
   - In Google Cloud Console > "APIs & Services" > "Credentials"
   - Click "Create Credentials" > "Service Account"
   - Name it "questionnaire-service"
   - Download the JSON key file
2. **Share Sheet with Service Account**:
   - Copy the service account email from the JSON file
   - In your Google Sheet, click "Share"
   - Add the service account email with "Editor" permissions

## 📄 Step 3: Get Your Sheet ID

1. **Open Your Google Sheet**
2. **Copy Sheet ID from URL**:
   ```
   https://docs.google.com/spreadsheets/d/SHEET_ID_HERE/edit#gid=0
   ```
   The Sheet ID is the long string between `/d/` and `/edit`

## 🔧 Step 4: Configure Environment Variables

Create a `.env.local` file in your project root:

```bash
# Google Sheets Configuration
NEXT_PUBLIC_GOOGLE_SHEET_ID=your_sheet_id_here
NEXT_PUBLIC_GOOGLE_API_KEY=your_api_key_here
```

**Example:**
```bash
NEXT_PUBLIC_GOOGLE_SHEET_ID=1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms
NEXT_PUBLIC_GOOGLE_API_KEY=AIzaSyBnV7cqcHwMpy-CoOVBoBEBJm6JUHmMDJM
```

## 🚀 Step 5: Make Your Sheet Public (For API Key method)

1. **Open Your Google Sheet**
2. **Click "Share" button**
3. **Change access**: Click "Restricted" → "Anyone with the link"
4. **Set permission**: Choose "Viewer" (this allows reading structure, not editing)
5. **Click "Done"**

## 🧪 Step 6: Test the Integration

1. **Restart your development server**:
   ```bash
   npm run dev
   ```

2. **Fill out the questionnaire** on your website

3. **Check the console** for success/error messages

4. **Verify data** appears in your Google Sheet

## 📊 Step 7: Access Your Data

- **Real-time viewing**: Open your Google Sheet anytime
- **Mobile access**: Use Google Sheets mobile app
- **Export options**: File > Download as (Excel, CSV, PDF)
- **Sharing**: Share with team members via Google Sheets sharing
- **Charts**: Insert > Chart for data visualization

## 📈 Data Structure

Your sheet will capture the following information for each response:

1. **Timestamp** - When the form was submitted
2. **Location** - Preferred brunch location (SoBo / West Mumbai)
3. **Name** - User's full name
4. **Age** - User's age or how young they feel
5. **Social Handle** - Instagram/LinkedIn (optional)
6. **Sunday Vibe** - How they spend Sundays
7. **Personality Type** - Self-described personality (funny/smart/observant/etc.)
8. **Fashion Statement** - Life as fashion choice
9. **Dream Brunch Plate** - Food preferences
10. **Alcohol Preference** - Drinking preference during brunch
11. **Introversion Level** - Scale of 1-10
12. **Humor Importance** - How important humor is to them
13. **Workout Preference** - Exercise habits
14. **Motivation** - Why they're joining Table 4 Six
15. **Ticket** - Selected Table4Six ticket option
16. **Restaurant Preference** - Selected dining preference (Bottomless Brunch, Gourmet Dining, or Local Favourites)

## 🔒 Security Best Practices

- **Never commit `.env.local`** to your git repository
- **Restrict API key** to only Google Sheets API
- **Add website restrictions** to your API key
- **Monitor usage** in Google Cloud Console
- **Rotate API keys** periodically

## 🛠️ Troubleshooting

### Common Issues:

1. **"API key not valid"**
   - Check if Google Sheets API is enabled
   - Verify API key is correct in `.env.local`

2. **"The caller does not have permission"**
   - Make sure sheet is shared publicly or with service account
   - Check API key restrictions

3. **"Unable to parse range"**
   - Ensure your sheet is named "Sheet1" or update the code
   - Check that column headers are in Row 1

4. **Data not appearing**
   - Check browser console for error messages
   - Verify Sheet ID is correct
   - Ensure `.env.local` file is in the right location

### Debug Steps:

1. **Check environment variables**:
   ```javascript
   console.log('Sheet ID:', process.env.NEXT_PUBLIC_GOOGLE_SHEET_ID);
   console.log('API Key:', process.env.NEXT_PUBLIC_GOOGLE_API_KEY ? 'Present' : 'Missing');
   ```

2. **Test API directly**:
   Visit this URL in your browser (replace with your values):
   ```
   https://sheets.googleapis.com/v4/spreadsheets/YOUR_SHEET_ID/values/Sheet1?key=YOUR_API_KEY
   ```

## 📈 Next Steps

Once working, consider:
- Setting up data validation in Google Sheets
- Creating charts and dashboards for response analysis
- Setting up email notifications for new responses
- Connecting to other tools via Zapier or Google Apps Script
- Creating automated matching algorithms based on responses

## 💡 Pro Tips

- **Freeze the header row**: View > Freeze > 1 row
- **Format columns**: Use data validation for consistent entries
- **Create filters**: Data > Create a filter for easy sorting and analysis
- **Backup data**: Regularly export your data as backup
- **Color coding**: Use conditional formatting to highlight interesting patterns
- **Pivot tables**: Create pivot tables to analyze personality trends and preferences 