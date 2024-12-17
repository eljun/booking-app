import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';
import { useRouter } from 'next/router';

export default function Home() {
  const [rooms, setRooms] = useState([]); // List of rooms
  const [selectedRoom, setSelectedRoom] = useState(null); // Selected room for booking
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    checkIn: '',
    checkOut: '',
  });
  const [loading, setLoading] = useState(true);
  const [session, setSession] = useState(null);
  const router = useRouter();

  // Check user session on page load
  useEffect(() => {
    const getSession = async () => {
      const { data } = await supabase.auth.getSession();
      if (!data.session) {
        router.push('/auth'); // Redirect unauthenticated users
      } else {
        setSession(data.session);
        fetchRooms();
      }
      setLoading(false);
    };

    getSession();
  }, [router]);

  // Fetch rooms from Supabase
  async function fetchRooms() {
    const { data, error } = await supabase.from('rooms').select('*');
    if (error) console.log('Error:', error.message);
    else setRooms(data);
  }

  // Handle input changes for the booking form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Confirm booking submission
  const handleBooking = async () => {
    if (!formData.name || !formData.email || !formData.phone || !formData.checkIn || !formData.checkOut) {
      alert('Please fill in all fields.');
      return;
    }
  
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
      alert('User not authenticated. Please log in again.');
      router.push('/auth');
      return;
    }
  
    // Log the payload to debug
    console.log('Payload being sent:', {
      room_id: selectedRoom.id,
      user_id: user.id,
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      check_in: formData.checkIn,
      check_out: formData.checkOut,
      status: 'pending',
    });
  
    const { error } = await supabase.from('bookings').insert([
      {
        room_id: selectedRoom.id,
        user_id: user.id,
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        check_in: formData.checkIn,
        check_out: formData.checkOut,
        status: 'pending',
      },
    ]);
  
    if (error) {
      console.error('Supabase Insert Error:', error.message);
      alert('Error booking the room: ' + error.message);
    } else {
      alert('Room booked successfully!');
      setSelectedRoom(null);
      setFormData({ name: '', email: '', phone: '', checkIn: '', checkOut: '' });
    }
  };

  if (loading) {
    return <div className="p-8">Loading...</div>;
  }

  return (
    <div>
      {/* Main Content */}
      <div className="container mx-auto max-w-screen-xl p-4">
        <h1 className="text-3xl font-bold mb-8 text-center text-blue-800">Available Rooms</h1>

        {/* Grid of Rooms */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {rooms.map((room) => (
            <div key={room.id} className="bg-blue-50 border border-blue-200 rounded-lg shadow-md overflow-hidden">
              <img
                src={`https://unsplash.it/300/200?image=${room.id + 50}`}
                alt={room.type}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-bold text-blue-800 mb-2">{room.type} Room</h2>
                <p className="text-blue-600 mb-4">Amenities: {room.amenities}</p>
                <p className="text-blue-600 mb-4">Price: €{room.price} / day</p>
                <button
                  onClick={() => setSelectedRoom(room)}
                  className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded transition"
                >
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Booking Form for Selected Room */}
        {selectedRoom && (
          <div className="mt-12 p-6 bg-blue-50 border border-blue-200 rounded-lg shadow-lg max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-blue-800 mb-4 text-center">
              Book a {selectedRoom.type} Room
            </h2>
            <p className="text-blue-600 mb-2 text-center">Price: €{selectedRoom.price} / day</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleInputChange}
                className="border border-blue-300 p-3 rounded w-full bg-white"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleInputChange}
                className="border border-blue-300 p-3 rounded w-full bg-white"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Your Phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="border border-blue-300 p-3 rounded w-full bg-white"
              />
              <input
                type="date"
                name="checkIn"
                value={formData.checkIn}
                onChange={handleInputChange}
                className="border border-blue-300 p-3 rounded w-full bg-white"
              />
              <input
                type="date"
                name="checkOut"
                value={formData.checkOut}
                onChange={handleInputChange}
                className="border border-blue-300 p-3 rounded w-full bg-white"
              />
            </div>
            <button
              onClick={handleBooking}
              className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded transition w-full"
            >
              Confirm Booking
            </button>
            <button
              onClick={() => setSelectedRoom(null)}
              className="mt-4 bg-gray-400 hover:bg-gray-500 text-white py-2 px-6 rounded transition w-full"
            >
              Cancel
            </button>
          </div>
        )}
      </div>
    </div>
  );
}