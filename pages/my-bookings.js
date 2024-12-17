import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';
import { useRouter } from 'next/router';

export default function MyBookings() {
  const [bookings, setBookings] = useState([]); // State to store user-specific bookings
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    const { data: { session }, error: sessionError } = await supabase.auth.getSession();
  
    if (!session || sessionError) {
      console.error('Session Error:', sessionError?.message);
      router.push('/auth'); // Redirect unauthenticated users
      return;
    }
  
    // Fetch user-specific bookings with related room details
    const { data, error } = await supabase
      .from('bookings')
      .select(`
        id, 
        check_in, 
        check_out, 
        status, 
        rooms (id, type, price, amenities)
      `)
      .eq('user_id', session.user.id); // Filter by the authenticated user
  
    if (error) {
      console.error('Error fetching bookings:', error.message);
      alert('Error fetching your bookings. Please try again.');
    } else {
      setBookings(data || []);
    }
    setLoading(false);
  };

  if (loading) {
    return <div className="p-8">Loading your bookings...</div>;
  }

  return (
    <>
      {/* My Bookings Section */}
      <div className="container mx-auto max-w-screen-xl p-4">
        <h1 className="text-3xl font-bold text-blue-800 mb-6 text-center">My Bookings</h1>

        {bookings.length === 0 ? (
          <p className="text-center text-gray-600">You have no bookings yet.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {bookings.map((booking) => (
              <div key={booking.id} className="bg-blue-50 border border-blue-200 rounded-lg shadow-md p-4">
                <h2 className="text-xl font-bold text-blue-800 mb-2">
                  {booking.rooms?.type} Room
                </h2>
                <p className="text-blue-600 mb-1">Check-in: {booking.check_in}</p>
                <p className="text-blue-600 mb-1">Check-out: {booking.check_out}</p>
                <p className="text-blue-600 mb-1">Status: {booking.status}</p>
                <p className="text-blue-600">Price: €{booking.rooms?.price} / day</p>
                <p className="text-blue-600">Amenities: {booking.rooms?.amenities}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}