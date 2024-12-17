'use client';
import { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

const localizer = momentLocalizer(moment);

export default function BookingsCalendar() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchBookings();
  }, []);

  async function fetchBookings() {
    const { data: user, error: userError } = await supabase.auth.getUser();
    if (userError || !user?.user) {
      console.error('Error fetching user:', userError);
      return;
    }

    // Fetch bookings with check-in and check-out
    const { data, error } = await supabase
      .from('bookings')
      .select('id, room_id, check_in, check_out')
      .eq('user_id', user.user.id);

    if (error) {
      console.error('Error fetching bookings:', error);
    } else {
      const calendarEvents = data.map((booking) => ({
        id: booking.id,
        title: `Room ID: ${booking.room_id}`,
        start: new Date(booking.check_in),
        end: new Date(booking.check_out),
      }));
      setEvents(calendarEvents);
    }
  }

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Booking Calendar</h2>
      <div style={{ height: '500px' }}>
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{ height: '100%' }}
          eventPropGetter={() => ({
            style: { backgroundColor: '#2563eb', color: '#fff', borderRadius: '4px' },
          })}
        />
      </div>
    </div>
  );
}