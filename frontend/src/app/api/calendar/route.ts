import { google } from 'googleapis';
import { NextResponse } from 'next/server';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import * as path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, '../../../../../.env.local') });

export async function GET() {
  const calendarId = 'c_d4a570600fdaa112f1ac7be82285135369cdeb870a16b32a4b68df61fdad7dd5@group.calendar.google.com';

  const calendar = google.calendar({
    version: 'v3',
    auth: process.env.GOOGLE_CALENDAR_API_KEY,
  });

  try {
    const events = await calendar.events.list({
      calendarId,
      timeMin: new Date().toISOString(),
      maxResults: 20,
      singleEvents: true,
      orderBy: 'startTime',
    });

    const ans =  NextResponse.json(events.data.items ?? []);
    return ans;
  } catch (err: unknown) {
    const errorMessage = err instanceof Error ? err.message : 'Failed to fetch events';
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
