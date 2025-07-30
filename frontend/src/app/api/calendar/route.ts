import { google } from 'googleapis';
import { NextResponse } from 'next/server';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import * as path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, '../../../../../.env.local') });

export async function GET() {
  const auth = new google.auth.JWT({
    email: process.env.GOOGLE_CLIENT_EMAIL!,
    key: process.env.GOOGLE_PRIVATE_KEY!.replace(/\\n/g, '\n'),
    scopes: ['https://www.googleapis.com/auth/calendar.readonly'],
  });

  const calendarId = 'e1f9d113998bf7ebd1121aafd4ef44c911436102a57abba096cb5e0cbd19e551@group.calendar.google.com';
  const calendar = google.calendar({ version: 'v3', auth });

  try {
    const events = await calendar.events.list({
      calendarId,
      timeMin: new Date().toISOString(),
      maxResults: 5,
      singleEvents: true,
      orderBy: 'startTime',
    });

    return NextResponse.json(events.data.items ?? []);
  } catch (err: any) {
    return NextResponse.json({ error: err.message || 'Failed to fetch events' }, { status: 500 });
  }
}
