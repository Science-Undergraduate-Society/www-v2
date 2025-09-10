'use client';

import React, { useEffect, useMemo, useState, useRef } from 'react';
import { createPortal } from 'react-dom';
import { EventDescription, Event } from '@/lib/types';
import styles from './Calendar.module.css';
import { GoChevronLeft, GoChevronRight } from 'react-icons/go';

// -------------------- Utils --------------------
function parseDescription(desc: string = ''): EventDescription {
  const lines = desc.split('\n').map((l) => l.trim());
  const map: Record<string, string> = {};
  for (const line of lines) {
    const [key, ...rest] = line.split(':');
    if (!key || !rest.length) continue;
    map[key.trim().toLowerCase()] = rest.join(':').trim();
  }
  return {
    demographic: map['demographic'] || 'Any student',
    workingGroup: map['working group'] || map['workinggroup'] || 'N/A',
    collaborator: map['collaborator'] || map['collaborators'] || 'None',
    link: map['link'] || map['links'] || 'None',
  };
}

function parseEvents(data: any[]): Event[] {
  return (data || []).map((item) => {
    const startStr = item.start?.dateTime || item.start?.date;
    const startDate = new Date(startStr);
    const match = item.summary?.match(/(?<=\().*?(?=\))/);
    const time = match && match[0].trim() !== '' ? match[0] : 'All day event';

    return {
      title: (item.summary || '').replace(/\s*\([^)]*\)/g, '').trim(),
      location: item.location ?? 'TBA',
      date: startDate,
      time,
      description: parseDescription(item.description || ''),
    } as Event;
  });
}

function startOfMonth(d: Date) {
  return new Date(d.getFullYear(), d.getMonth(), 1);
}

function addDays(d: Date, n: number) {
  const x = new Date(d);
  x.setDate(x.getDate() + n);
  return x;
}

function isSameDay(a: Date, b: Date) {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

function getMonthMatrix(viewDate: Date): Date[] {
  const start = startOfMonth(viewDate);
  const startWeekday = start.getDay();
  const days: Date[] = [];
  const gridStart = addDays(start, -startWeekday);
  for (let i = 0; i < 42; i++) {
    days.push(addDays(gridStart, i));
  }
  return days;
}

// -------------------- Main --------------------
export default function SusCalendar() {
  const [loading, setLoading] = useState(true);
  const [events, setEvents] = useState<Event[]>([]);
  const [viewDate, setViewDate] = useState(new Date());
  const [popupInfo, setPopupInfo] = useState<{ events: Event[]; rect: DOMRect } | null>(null);
  const [openMode, setOpenMode] = useState<'hover' | 'click' | null>(null);
  const popupRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    fetch('/api/calendar')
      .then((r) => r.json())
      .then((data) => setEvents(parseEvents(data)))
      .catch((e) => console.error('Failed to fetch calendar events:', e))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (popupRef.current && !popupRef.current.contains(e.target as Node)) {
        setPopupInfo(null);
        setOpenMode(null);
      }
    }
    if (popupInfo) document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [popupInfo]);

  const days = useMemo(() => getMonthMatrix(viewDate), [viewDate]);
  const monthLabel = useMemo(
    () => new Intl.DateTimeFormat('en', { month: 'long', year: 'numeric' }).format(viewDate),
    [viewDate]
  );

  const eventsByDay = useMemo(() => {
    const key = (d: Date) => `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`;
    const map = new Map<string, Event[]>();
    for (const ev of events) {
      const k = key(ev.date);
      if (!map.has(k)) map.set(k, []);
      map.get(k)!.push(ev);
    }
    return (date: Date) => map.get(key(date)) || [];
  }, [events]);

  const goPrev = () => setViewDate((d) => new Date(d.getFullYear(), d.getMonth() - 1, 1));
  const goNext = () => setViewDate((d) => new Date(d.getFullYear(), d.getMonth() + 1, 1));

  // ---------------- Popup Handling ----------------
  const handleEventClick = (event: Event, targetRect: DOMRect, mode: 'hover' | 'click') => {
    const popupWidth = 320;
    const popupHeight = 220;

    let left = targetRect.right + window.scrollX; 
    let top = targetRect.top + window.scrollY;

    const viewportWidth = window.innerWidth + window.scrollX;
    const viewportHeight = window.innerHeight + window.scrollY;

    
    if (left + popupWidth > viewportWidth) {
      left = targetRect.left - popupWidth - 8 + window.scrollX;
      if (left < 8) {
        left = Math.max(8, viewportWidth - popupWidth - 8); 
      }
    }


    if (top + popupHeight > viewportHeight) {
      top = Math.max(8, viewportHeight - popupHeight - 8);
    }

    setPopupInfo({ events: [event], rect: { ...targetRect, top, left } as DOMRect });
    setOpenMode(mode);
  };


  const renderCell = (date: Date, idx: number) => {
    const inMonth = date.getMonth() === viewDate.getMonth();
    const dayEvents = eventsByDay(date);
    const hasEvents = dayEvents.length > 0;
    const isSingleEvent = dayEvents.length === 1;
    const isToday = isSameDay(date, new Date());

    return (
      <div
        key={idx}
        className={[
          styles.cell,
          inMonth ? '' : styles.cellOutside,
          hasEvents ? styles.cellWithEvents : styles.cellPlain,
          isToday ? styles.cellToday : '',
        ].join(' ')}
      >
        <div className={styles.cellHeaderCorner}>
          <span className={styles.cellDayNumber}>{date.getDate()}</span>
        </div>
        
        {/* Single Event Cell */}
        {hasEvents && isSingleEvent &&(
          <div className={styles.cellEventsWrapper}>
            <button className={styles.singleEvent}
                onClick={(e) => handleEventClick(dayEvents[0], e.currentTarget.getBoundingClientRect(), 'click')}
                onMouseEnter={(e) =>
                  handleEventClick(dayEvents[0], e.currentTarget.getBoundingClientRect(), 'hover')
                }
                onMouseLeave={() => {
                  if (openMode === 'hover') setPopupInfo(null);
                }}
                title={dayEvents[0].title}>
                  {dayEvents[0].title}
            </button>
          </div>
        )}

        {/* Multiple Event Cell */}
        {hasEvents && !isSingleEvent &&(
          <div className={styles.cellEventsWrapper}>
            {dayEvents.map((ev, eventIdx) => (
              <button
                key={eventIdx}
                className={styles.cellEventRow}
                title={ev.title}
                onMouseEnter={(e) =>
                  handleEventClick(ev, e.currentTarget.getBoundingClientRect(), 'hover')
                }
                onMouseLeave={() => {
                  if (openMode === 'hover') setPopupInfo(null);
                }}
                onClick={(e) =>
                  handleEventClick(ev, e.currentTarget.getBoundingClientRect(), 'click')
                }
              >
                {ev.title}
              </button>
            ))}
          </div>
        )}
      </div>
    );
  };

  if (loading) return (
    <p className={styles.loading}>
      Loading events<span className={styles.dots}>
        <span>.</span>
        <span>.</span>
        <span>.</span>
      </span>
    </p>
  );

  return (
    <div className={styles.calendarParentContainer}>
      <div className={styles.calendarBox}>
        <div className={styles.calendarContainer}>
          <div className={styles.headerBar}>
            <div className={styles.headerLeft}>
              <div className={styles.monthLabel}>{monthLabel}</div>
              <button className={styles.navBtn} onClick={goPrev} aria-label="Previous month">
                <GoChevronLeft />
              </button>
              <button className={styles.navBtn} onClick={goNext} aria-label="Next month">
                <GoChevronRight />
              </button>
            </div>
          </div>

          <div className={styles.grid}>
            {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((d) => (
              <div key={d} className={styles.weekday}>
                {d}
              </div>
            ))}
            {days.map((date, idx) => renderCell(date, idx))}
          </div>

          {popupInfo &&
            createPortal(
              <div
                ref={popupRef}
                className={styles.popup}
                style={{
                  top: popupInfo.rect.top,
                  left: popupInfo.rect.left,
                }}
                onMouseLeave={() => {
                  if (openMode === 'hover') setPopupInfo(null);
                }}
              >
                {popupInfo.events.length ? (
                  popupInfo.events.map((e, i) => <EventCard key={i} event={e} />)
                ) : (
                  <p className={styles.noEvents}>No events for this day.</p>
                )}
              </div>,
              document.body
            )}
        </div>
      </div>
    </div>
  );
}

// ---------------- Event Card ----------------
function EventCard({ event }: { event: Event }) {
  const m = event.location.match(/^(.*?),.*/);
  const eventLocation = m ? m[1] : event.location;
  const month = new Intl.DateTimeFormat('en', { month: 'short' }).format(event.date);
  const weekday = new Intl.DateTimeFormat('en', { weekday: 'short' }).format(event.date);
  const date = event.date.getDate();

  return (
    <div className={styles.parentEventCard}>
      <div className={styles.header}>
        <div className={styles.headerCorner}>
          <div className={styles.cornerText}>{month}.</div>
          <div className={styles.cornerText}>{date}</div>
        </div>
        <div className={styles.headerTextContainer}>
          <div className={styles.headerTextRow}>
            <div className={styles.calendarIcon} />
            <div className={styles.headerText}>
              {weekday}. | {event.time}
            </div>
          </div>
          <div className={styles.headerTextRow}>
            <div className={styles.locationIcon} />
            <div className={styles.headerText}>{eventLocation}</div>
          </div>
        </div>
      </div>
      <div className={styles.bodyTextContainer}>
        <div className={styles.eventTitle}>{event.title}</div>
        <div className={styles.bodyText}>
          <div>
            <strong>Demographic:</strong> {event.description.demographic}
          </div>
          <div>
            <strong>Collaborator(s):</strong> {event.description.collaborator}
          </div>
        </div>
      </div>
    </div>
  );
}
