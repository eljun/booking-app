'use client';
import { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import { format } from 'date-fns';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default function MyBookingsList() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBookings();
  }, []);

  async function fetchBookings() {
    const { data: user, error: userError } = await supabase.auth.getUser();
    if (userError || !user?.user) {
      console.error('Error fetching user:', userError);
      return;
    }

    const { data, error } = await supabase
      .from('bookings')
      .select(`
        id, 
        room_id, 
        check_in, 
        check_out,
        rooms(price)
      `)
      .eq('user_id', user.user.id);

    if (error) {
      console.error('Error fetching bookings:', error);
    } else {
      setBookings(data);
    }
    setLoading(false);
  }

  const calculateSubtotal = (check_in, check_out, price) => {
    const checkInDate = new Date(check_in);
    const checkOutDate = new Date(check_out);
    const days = Math.ceil((checkOutDate - checkInDate) / (1000 * 60 * 60 * 24));
    return days * price;
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6 text-blue-700">My Bookings</h2>
      {loading ? (
        <p className="text-blue-500">Loading...</p>
      ) : bookings.length === 0 ? (
        <p className="text-gray-500 text-center">No bookings available.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {bookings.map((booking) => {
            const subtotal = calculateSubtotal(
              booking.check_in,
              booking.check_out,
              booking.rooms?.price || 0
            );

            return (
              <div
                key={booking.id}
                className="rounded-lg border border-blue-200 shadow-md bg-blue-50 hover:shadow-lg transition-shadow"
              >
                <div className="p-5">
                  {/* Room Image */}
                  <img
                    src="https://via.placeholder.com/300x200" // Placeholder image URL
                    alt={`Room ${booking.room_id}`}
                    className="w-full h-48 object-cover rounded-t"
                  />
                  <h3 className="text-lg font-semibold text-blue-700 mb-3">
                    Room ID: {booking.room_id}
                  </h3>
                  <p className="text-sm text-blue-600 mb-1">
                    Check-in Date: {format(new Date(booking.check_in), 'MMMM dd, yyyy')}
                  </p>
                  <p className="text-sm text-blue-600 mb-1">
                    Check-out Date: {format(new Date(booking.check_out), 'MMMM dd, yyyy')}
                  </p>
                  <p className="text-sm text-blue-600 mb-1">
                    Price per Day: €{booking.rooms?.price || 'N/A'}
                  </p>
                  <p className="text-blue-800 font-semibold">
                    Subtotal: €{subtotal}
                  </p>
                  <button className="mt-4 bg-blue-700 text-white rounded-md py-2 px-4 hover:bg-blue-800 transition-colors">
                    Cancel Booking
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}