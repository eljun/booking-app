import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';

export default function MyBookingsList() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchBookings() {
      const { data, error } = await supabase
        .from('bookings')
        .select('*, rooms(type, thumbnail_url, amenities, price)'); // Fetch room data including the thumbnail
      if (error) {
        console.error('Error fetching bookings:', error);
      } else {
        setBookings(data);
      }
      setLoading(false);
    }
    fetchBookings();
  }, []);

  if (loading) {
    return <div className="text-center text-blue-600">Loading bookings...</div>;
  }

  if (bookings.length === 0) {
    return <div className="text-center text-gray-500">No bookings found.</div>;
  }

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
      {bookings.map((booking) => (
        <div
          key={booking.id}
          className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden"
        >
          {/* Thumbnail */}
          <img
            src={booking.rooms.thumbnail_url || `https://unsplash.it/300/200?random=${booking.id}`} // Fallback image
            alt={booking.rooms.type}
            className="w-full h-40 object-cover"
          />

          {/* Booking Info */}
          <div className="p-4">
            <h2 className="text-lg font-bold text-blue-800 mb-2">{booking.rooms.type} Room</h2>
            <p className="text-gray-600 mb-2">
              <strong>Check-in:</strong> {new Date(booking.check_in).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>
            <p className="text-gray-600 mb-2">
              <strong>Check-out:</strong> {new Date(booking.check_out).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>
            <p className="text-gray-600 mb-2">
              <strong>Price:</strong> €{booking.rooms.price} / night
            </p>
            <p className="text-gray-600 mb-4">
              <strong>Amenities:</strong> {booking.rooms.amenities || 'N/A'}
            </p>
            <p className="text-gray-600">
              <strong>Status:</strong>{' '}
              <span
                className={`font-bold ${
                  booking.status === 'confirmed' ? 'text-green-600' : 'text-red-600'
                }`}
              >
                <p className="text-gray-600">
                <strong>Status:</strong>{' '}
                <span
                    className={`font-bold ${
                    booking.status === 'confirmed'
                        ? 'text-green-600'
                        : booking.status === 'pending'
                        ? 'text-yellow-600'
                        : 'text-red-600'
                    }`}
                >
                    {booking.status ? booking.status.charAt(0).toUpperCase() + booking.status.slice(1) : 'Unknown'}
                </span>
                </p>
              </span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}