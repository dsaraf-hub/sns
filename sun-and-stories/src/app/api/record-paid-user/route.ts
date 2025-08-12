import { NextRequest, NextResponse } from 'next/server';
import { GoogleAuth } from 'google-auth-library';
import { google } from 'googleapis';

interface QuestionnaireData {
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

export async function POST(request: NextRequest) {
  try {
    const { questionnaireData } = await request.json();

    if (!questionnaireData || typeof questionnaireData !== 'object') {
      return NextResponse.json(
        { error: 'questionnaireData is required' },
        { status: 400 }
      );
    }

    const data = questionnaireData as QuestionnaireData;

    // Check if we have the required environment variables
    const serviceAccountEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
    const serviceAccountKey = process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY;
    const sheetId = process.env.GOOGLE_SHEET_ID;

    if (!serviceAccountEmail || !serviceAccountKey || !sheetId) {
      console.error('Missing required Google Sheets environment variables');
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

    // Prepare the row data in the exact order specified
    const rowData = [
      new Date().toISOString(), // Timestamp
      data.location || '',
      data.name || '',
      data.email || '',
      data.age || '',
      data.phone || '',
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
      data.date || '',
      data.restaurant_preference || '',
      data.ticket || '',
    ];

    console.log('📊 Recording PAID user to Google Sheets via record-paid-user API', {
      sheetId: sheetId.substring(0, 10) + '...',
      email: data.email,
    });

    await sheets.spreadsheets.values.append({
      spreadsheetId: sheetId,
      range: 'Sheet1!A:S',
      valueInputOption: 'RAW',
      requestBody: {
        values: [rowData],
      },
    });

    console.log('✅ Successfully recorded PAID user to Google Sheets via record-paid-user');

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('❌ Error recording PAID user to Google Sheets via record-paid-user:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
} 