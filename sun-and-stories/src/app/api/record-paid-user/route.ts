import { NextRequest, NextResponse } from 'next/server';
import { submitToGoogleSheets, QuestionnaireData } from '@/lib/googleSheets';

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

    console.log('📊 Recording PAID user to Google Sheets via record-paid-user API', {
      email: data.email,
    });

    const result = await submitToGoogleSheets(data, 'PAID');

    if (result.success) {
        console.log('✅ Successfully recorded PAID user to Google Sheets via record-paid-user');
        return NextResponse.json({ success: true });
    } else {
        console.error('❌ Error recording PAID user to Google Sheets via record-paid-user:', result.error);
        return NextResponse.json(
            { error: result.error },
            { status: 500 }
        );
    }
  } catch (error) {
    console.error('❌ Error recording PAID user to Google Sheets via record-paid-user:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}
