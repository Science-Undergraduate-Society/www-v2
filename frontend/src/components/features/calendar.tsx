'use client';

import Calendar from 'react-calendar';
import { useEffect, useState } from 'react';
import { Event, EventDescription } from '@/lib/types';
import 'react-calendar/dist/Calendar.css';
import { format } from 'date-fns';
import styles from './features.module.css'

export default function SusCalendar() {
  const [loading, setLoading] = useState(true);
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    fetch('/api/calendar')
      .then((res) => res.json())
      .then((data) => {
        const parsed = parseEvents(data);
        setEvents(parsed);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Failed to fetch calendar events:', err);
        setLoading(false);
      });
  }, []);

const parseEvents = (data: any[]): Event[] => {
  return data.map((item) => {
    const startStr = item.start?.dateTime || item.start?.date;
    const startDate = new Date(startStr);

    const match = item.summary.match(/(?<=\().*?(?=\))/);
  const time = match && match[0].trim() !== "" ? match[0] : "All day event";

    return {
      title: item.summary.replace(/\s*\([^)]*\)/g, '').trim(),
      location: item.location ?? 'TBA',
      date: startDate,
      time: time,
      description: parseDescription(item.description),
    };
  });
};

  const parseDescription = (desc: string = ''): EventDescription => {
    const lines = desc.split('\n').map(line => line.trim());
    const descMap: Record<string, string> = {};

    for (const line of lines) {
      const [key, ...rest] = line.split(':');
      if (!key || !rest.length) continue;
      descMap[key.trim().toLowerCase()] = rest.join(':').trim();
    }

    return {
      demographic: descMap['demographic'] || 'Any student',
      workingGroup: descMap['working group'] || descMap['workinggroup'] || 'N/A',
      collaborator: descMap['collaborator'] || descMap['collaborators'] || 'None',
    };
  };

  // const getEventsForDate = (date: Date): Event[] => {
  //   const key = format(date, 'yyyy-MM-dd');
  //   return events.filter((e) => e.date === key);
  // };

  const EventCard = ({ event }: { event: Event }) => {
    const match = event.location.match(/^(.*?),.*/);
    const eventLocation = match ? match[1] : event.location;
    console.log(event.title)
    console.log(event.time.length === 0)
    const month = new Intl.DateTimeFormat('en', { month: 'short' }).format(event.date);
    const weekday = new Intl.DateTimeFormat('en', { weekday: 'short' }).format(event.date);
    const date = event.date.getDate()
    const eventDesc = "Grab your best Y2K fit and party it up like it's the 2000s with a free photo booth, sick beats, and nostalgic refreshments. The first 50 people to arrive get a free tote bag! (Note: This is an alcohol-free event.)"

    return (
      <div className={styles.parentEventCard}>
        <div className={styles.header}>
          <div className={styles.headerCorner}>
            <div className={styles.cornerText} > {month}. </div>
            <div className={styles.cornerText} > {date} </div>
        </div>

        <div className={styles.headerTextContainer}>
          <div className= {styles.headerTextRow}>
            <div className={styles.calendarIcon}></div>
            <div className={styles.headerText} > {weekday}. | {event.time}</div>
          </div>
          
          <div className= {styles.headerTextRow}>
            <div className={styles.locationIcon}></div>
            <div className={styles.headerText} >{eventLocation}</div>
          </div>
          
        </div>
        
      </div>
      <div className={styles.bodyTextContainer} >
        <div className={styles.eventTitle} > {event.title}</div>
        <div className={styles.bodyText} > {eventDesc} </div>
      </div>
      <div className={styles.buttonContainer} >
         <div className={styles.button} >RSVP</div>
      </div>
    </div>
    )
    
  };

  const EventList = () => (
  <>
    {events.map((e: Event) => (
      <EventCard event= {e}/>
    ))}
  </>
);

  if (loading) return <p>Loading events...</p>;

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">SUS Events Calendar</h2>
      {/* <Calendar
        tileContent={({ date, view }) => {
          if (view !== 'month') return null;
          const dayEvents = getEventsForDate(date);
          return (
            <div className="overflow-y-auto max-h-20">
              {dayEvents.map((event, i) => (
                <EventCard key={i} event={event} />
              ))}
            </div>
          );
        }}
        tileClassName={({ date, view }) => {
          if (view !== 'month') return '';
          return getEventsForDate(date).length > 0 ? 'bg-yellow-100' : '';
        }}
        onClickDay={(date) => {
          const dayEvents = getEventsForDate(date);
          if (dayEvents.length > 0) {
            console.log('Events on', date.toDateString(), dayEvents);
          }
        }}
      /> */}
      <EventList></EventList>
    </div>
  );
}

