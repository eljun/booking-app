import { supabase } from '../lib/supabaseClient';
import { useRouter } from 'next/router';

export default function NavBar() {
  const router = useRouter();

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (!error) router.push('/auth');
  };

  return (
    <nav className="bg-blue-800 text-blue-100 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center max-w-screen-xl">
        {/* Left Section: Company Name */}
        <div className="text-2xl font-bold">Booking App</div>

        {/* Middle Section: Navigation Links */}
        <div className="space-x-6">
          <a href="/dashboard" className="hover:text-blue-300 transition">Dashboard</a>
          <a href="/my-bookings" className="hover:text-blue-300 transition">My Bookings</a>
        </div>

        {/* Right Section: Create Booking & Logout */}
        <div className="space-x-6">
          <a href="/" className="hover:text-blue-300 transition">Create Booking</a>
          <button
            onClick={handleLogout}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition"
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
}