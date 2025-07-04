import { NextRequest, NextResponse } from 'next/server';
import { GoogleAuth } from 'google-auth-library';
import { google } from 'googleapis';

// Interface for the request body
interface QuestionnaireData {
  location: string;
  name: string;
  age: string;
  social: string;
  sunday_vibe: string;
  personality_type: string;
  fashion: string;
  brunch_plate: string;
  alcohol: string;
  introversion: string;
  humor: string;
  workout: string;
  motivation: string;
  ticket: string;
  restaurant_preference: string;
}

export async function POST(request: NextRequest) {
  try {
    const data: QuestionnaireData = await request.json();
    
    // Check if we have the required environment variables
    const serviceAccountEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
    const serviceAccountKey = process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY;
    const sheetId = process.env.GOOGLE_SHEET_ID;

    if (!serviceAccountEmail || !serviceAccountKey || !sheetId) {
      console.error('Missing required environment variables');
      return NextResponse.json(
        { error: 'Server configuration error' },
        { status: 500 }
      );
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

    // Prepare the row data in the order of your sheet columns
    const rowData = [
      new Date().toISOString(), // Timestamp
      data.location || '',
      data.name || '',
      data.age || '',
      data.social || '',
      data.sunday_vibe || '',
      data.personality_type || '',
      data.fashion || '',
      data.brunch_plate || '',
      data.alcohol || '',
      data.introversion || '',
      data.humor || '',
      data.workout || '',
      data.motivation || '',
      data.ticket || '',
      data.restaurant_preference || '',
    ];

    console.log('📊 Submitting to Google Sheets...', {
      sheetId: sheetId.substring(0, 10) + '...',
      dataLength: rowData.length
    });

    // Append the data to the sheet
    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: sheetId,
      range: 'Sheet1!A:P',
      valueInputOption: 'RAW',
      requestBody: {
        values: [rowData],
      },
    });

    console.log('✅ Successfully submitted to Google Sheets');
    
    return NextResponse.json({ 
      success: true, 
      message: 'Data submitted successfully',
      updatedRows: response.data.updates?.updatedRows || 0
    });

  } catch (error) {
    console.error('❌ Error submitting to Google Sheets:', error);
    
    return NextResponse.json(
      { 
        error: 'Failed to submit data', 
        details: error instanceof Error ? error.message : 'Unknown error' 
      },
      { status: 500 }
    );
  }
} 