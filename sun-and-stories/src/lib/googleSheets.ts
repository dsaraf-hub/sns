import { GoogleAuth } from 'google-auth-library';
import { google } from 'googleapis';

export interface QuestionnaireData {
  location?: string;
  name?: string;
  age?: string;
  phone?: string;
  email?: string;
  social?: string;
  sunday_vibe?: string;
  personality_type?: string;
  fashion?: string;
  brunch_plate?: string;
  alcohol?: string;
  introversion?: string;
  humor?: string;
  workout?: string;
  motivation?: string;
  date?: string;
  restaurant_preference?: string;
  ticket?: string;
}

export async function submitToGoogleSheets(questionnaireData: QuestionnaireData, status: 'PAID' | 'PENDING' = 'PAID') {
  try {
    // Check if we have the required environment variables
    const serviceAccountEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
    const serviceAccountKey = process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY;
    const sheetId = process.env.GOOGLE_SHEET_ID;

    if (!serviceAccountEmail || !serviceAccountKey || !sheetId) {
      console.error('Missing required Google Sheets environment variables');
      return { success: false, error: 'Server configuration error: Missing env vars' };
    }

    // Set up Google Auth
    const auth = new GoogleAuth({
      credentials: {
        client_email: serviceAccountEmail,
        private_key: serviceAccountKey.replace(/\\n/g, '\n'),
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    // Create Google Sheets client
    const sheets = google.sheets({ version: 'v4', auth });

    // Prepare the row data in the exact order specified
    // Timestamp, Location, Name, Email, Age, Phone, Social Handle, Sunday Vibe, Personality Type, 
    // Fashion Statement, Dream Brunch Plate, Alcohol Preference, Introversion Level, Humor Importance, 
    // Workout Preference, Motivation, Date, Restaurant Preference, Ticket
    
    const timestamp = new Date().toISOString();
    // Append [PENDING] to ticket if status is PENDING to distinguish
    const ticketValue = status === 'PENDING' 
      ? `[PENDING] ${questionnaireData.ticket || ''}`
      : questionnaireData.ticket || '';

    const rowData = [
      timestamp, // A: Timestamp
      questionnaireData.location || '', // B: Location
      questionnaireData.name || '', // C: Name
      questionnaireData.email || '', // D: Email
      questionnaireData.age || '', // E: Age
      questionnaireData.phone || '', // F: Phone
      questionnaireData.social || '', // G: Social Handle
      questionnaireData.sunday_vibe || '', // H: Sunday Vibe
      questionnaireData.personality_type || '', // I: Personality Type
      questionnaireData.fashion || '', // J: Fashion Statement
      questionnaireData.brunch_plate || '', // K: Dream Brunch Plate
      questionnaireData.alcohol || '', // L: Alcohol Preference
      questionnaireData.introversion || '', // M: Introversion Level
      questionnaireData.humor || '', // N: Humor Importance
      questionnaireData.workout || '', // O: Workout Preference
      questionnaireData.motivation || '', // P: Motivation
      questionnaireData.date || '', // Q: Date
      questionnaireData.restaurant_preference || '', // R: Restaurant Preference
      ticketValue, // S: Ticket
    ];

    // Append the data to the sheet
    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: sheetId,
      range: 'Sheet1!A:S',
      valueInputOption: 'RAW',
      requestBody: {
        values: [rowData],
      },
    });

    return { success: true, updatedRows: response.data.updates?.updatedRows || 0 };

  } catch (error) {
    console.error('Error submitting to Google Sheets:', error);
    
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Unknown error' 
    };
  }
}

