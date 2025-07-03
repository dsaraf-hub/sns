# Questionnaire Data Collection Setup

## Quick Setup Options

### Option 1: Airtable (Recommended)

1. **Create Airtable Account**: Go to [airtable.com](https://airtable.com) and sign up
2. **Create Base**: Create a new base called "Table 4 Six Questionnaire"
3. **Create Table**: Name it "Questionnaire_Responses" with these columns:
   - Name (Single line text)
   - Email (Email)
   - Age Range (Single line text)
   - Instagram Handle (Single line text)
   - Personality Type (Single line text)
   - Social Energy (Single line text)
   - Weekend Preference (Single line text)
   - Conversation Style (Single line text)
   - Food Adventure (Single line text)
   - Budget Range (Single line text)
   - Location Preference (Single line text)
   - Group Dynamic (Single line text)
   - Networking Interest (Single line text)
   - Activity Preference (Single line text)
   - Communication Style (Single line text)
   - Spontaneity Level (Single line text)
   - Social Goals (Single line text)
   - Experience Expectation (Single line text)
   - Follow Up Interest (Single line text)
   - Additional Info (Long text)
   - Submitted At (Date)

4. **Get API Credentials**:
   - Go to [airtable.com/api](https://airtable.com/api)
   - Select your base
   - Copy the Base ID from the URL
   - Generate API key from Account settings

5. **Add Environment Variables**:
   Create `.env.local` file in the root directory:
   ```
   NEXT_PUBLIC_AIRTABLE_API_KEY=your_api_key_here
   NEXT_PUBLIC_AIRTABLE_BASE_ID=your_base_id_here
   ```

### Option 2: Google Sheets (Free)

1. **Create Google Sheet**: Create a new sheet with column headers matching the Airtable setup
2. **Enable Google Sheets API**: Go to Google Cloud Console
3. **Get API Key**: Create credentials for your project
4. **Update code**: Replace Airtable function with Google Sheets API calls

### Option 3: Supabase (Most Scalable)

1. **Create Supabase Project**: Go to [supabase.com](https://supabase.com)
2. **Create Table**: Use SQL editor to create questionnaire_responses table
3. **Get API Keys**: Copy URL and anon key from project settings
4. **Install Supabase**: `npm install @supabase/supabase-js`

## Testing

Once configured, test by:
1. Filling out the questionnaire
2. Checking console logs for success/error messages
3. Verifying data appears in your chosen platform

## Data Access

- **Airtable**: Access via web interface or mobile app
- **Google Sheets**: Access via Google Sheets interface
- **Supabase**: Access via dashboard or connect to BI tools

## Security Notes

- Never commit `.env.local` to git
- Use environment variables for all API keys
- Consider rate limiting for production use
- Validate and sanitize user input before storage 