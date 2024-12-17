import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { addDays } from 'date-fns';

export default function BookingPage() {
  const [rooms, setRooms] = useState([]);
  const [selectedRoom, setSelectedRoom] = useState(null); // Room currently selected for booking
  const [bookedDates, setBookedDates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    checkIn: '',
    checkOut: '',
  });

  // Fetch all available rooms on page load
  useEffect(() => {
    const fetchRooms = async () => {
      const { data, error } = await supabase.from('rooms').select('*');
      if (error) {
        console.error('Error fetching rooms:', error.message);
      } else {
        setRooms(data);
      }
      setLoading(false);
    };

    fetchRooms();
  }, []);

  // Fetch booked dates for a selected room
  useEffect(() => {
    if (selectedRoom) {
      const fetchBookedDates = async () => {
        const { data, error } = await supabase
          .from('bookings')
          .select('check_in, check_out')
          .eq('room_id', selectedRoom.id);

        if (!error) {
          const dates = [];
          data.forEach((booking) => {
            let current = new Date(booking.check_in);
            const end = new Date(booking.check_out);
            while (current <= end) {
              dates.push(new Date(current));
              current.setDate(current.getDate() + 1);
            }
          });
          setBookedDates(dates);
        }
      };

      fetchBookedDates();
    }
  }, [selectedRoom]);

  // Handle booking form submission
  const handleBooking = async () => {
    if (!formData.name || !formData.email || !formData.phone || !formData.checkIn || !formData.checkOut) {
      alert('Please fill in all fields.');
      return;
    }

    const overlapping = bookedDates.some(
      (date) =>
        new Date(date) >= new Date(formData.checkIn) &&
        new Date(date) <= new Date(formData.checkOut)
    );

    if (overlapping) {
      alert('The selected dates are already booked. Please choose different dates.');
      return;
    }

    const { error } = await supabase.from('bookings').insert([
      {
        room_id: selectedRoom.id,
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        check_in: formData.checkIn.toISOString(),
        check_out: formData.checkOut.toISOString(),
        status: 'pending',
      },
    ]);

    if (error) {
      alert('Error booking the room. Please try again.');
    } else {
      alert('Room booked successfully!');
      setSelectedRoom(null);
      setFormData({ name: '', email: '', phone: '', checkIn: '', checkOut: '' });
    }
  };

  if (loading) return <div className="p-8">Loading...</div>;

  return (
    <div>
      <div className="container mx-auto max-w-screen-xl p-4">
        <h1 className="text-3xl font-bold mb-8 text-center text-blue-800">Available Rooms</h1>

        {/* Room Listing */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {rooms.map((room) => (
            <div
              key={room.id}
              className="bg-blue-50 border border-blue-200 rounded-lg shadow-md overflow-hidden"
            >
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

        {/* Booking Form */}
        {selectedRoom && (
          <div className="mt-12 p-6 bg-blue-100 border border-blue-200 rounded-lg shadow-lg max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-blue-800 mb-4 text-center">
              Book a {selectedRoom.type} Room
            </h2>
            <p className="text-blue-600 mb-2 text-center">Price: €{selectedRoom.price} / day</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="p-3 border rounded"
              />
              <input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="p-3 border rounded"
              />
              <input
                type="tel"
                placeholder="Your Phone"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="p-3 border rounded"
              />
              <div>
                <p className="text-blue-600 mb-1">Check-in Date:</p>
                <DatePicker
                  selected={formData.checkIn}
                  onChange={(date) => setFormData({ ...formData, checkIn: date })}
                  minDate={new Date()}
                  excludeDates={bookedDates}
                  placeholderText="Select Check-in Date"
                  className="w-full p-3 border rounded"
                  dayClassName={(date) => {
                    // Check if the date is in the list of booked dates
                    const isBooked = bookedDates.some(
                      (bookedDate) => bookedDate.toDateString() === date.toDateString()
                    );
                    return isBooked ? 'line-through text-gray-400 cursor-not-allowed' : '';
                  }}
                />
              </div>
              <div>
                <p className="text-blue-600 mb-1">Check-out Date:</p>
                <DatePicker
                  selected={formData.checkOut}
                  onChange={(date) => setFormData({ ...formData, checkOut: date })}
                  minDate={formData.checkIn || new Date()}
                  excludeDates={bookedDates}
                  placeholderText="Select Check-out Date"
                  className="w-full p-3 border rounded"
                  dayClassName={(date) => {
                    const isBooked = bookedDates.some(
                      (bookedDate) => bookedDate.toDateString() === date.toDateString()
                    );
                    return isBooked ? 'line-through text-gray-400 cursor-not-allowed' : '';
                  }}
                />
              </div>
            </div>

            <button
              onClick={handleBooking}
              className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded transition w-full"
            >
              Confirm Booking
            </button>
            <button
              onClick={() => setSelectedRoom(null)}
              className="mt-4 bg-gray-400 hover:bg-gray-500 text-white py-2 px-4 rounded transition w-full"
            >
              Cancel
            </button>
          </div>
        )}
      </div>
    </div>
  );
}