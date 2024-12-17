import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import { supabase } from '../lib/supabaseClient';

export default function Navigation() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [user, setUser] = useState(null);
  const dropdownRef = useRef(null); // Reference for the dropdown menu
  const router = useRouter();

  // Fetch user info on load
  useEffect(() => {
    const getUser = async () => {
      const { data } = await supabase.auth.getUser();
      if (data?.user) {
        setUser(data.user);
      } else {
        setUser(null);
      }
    };
    getUser();
  }, []);

  // Close the dropdown if clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Handle logout
  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push('/auth'); // Redirect to login page
  };

  // Get first name and initial
  const getFirstName = () => user?.user_metadata?.first_name || 'User';
  const getInitial = () => getFirstName().charAt(0).toUpperCase();

  return (
    <nav className="bg-blue-800 text-white py-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-xl font-bold">Booking App</div>

        {/* Right side - Conditional Render for Authenticated Users */}
        {user ? (
          <div className="flex items-center space-x-4">
            {/* Create Booking Button */}
            <button
              onClick={() => router.push('/')} // Navigate to the create booking page
              className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors"
            >
              Create Booking
            </button>

            {/* User Dropdown */}
            <div className="relative flex items-center space-x-4" ref={dropdownRef}>
              {/* Initial Badge */}
              <div
                className="flex items-center space-x-2 cursor-pointer"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                <span className="text-white font-medium">
                  Hi, {getFirstName()}
                </span>
                <div className="flex items-center justify-center w-10 h-10 bg-white text-blue-800 font-bold rounded-full">
                  {getInitial()}
                </div>
              </div>

              {/* Dropdown Icon */}
              <svg
                className={`w-4 h-4 text-white transition-transform transform ${
                  dropdownOpen ? 'rotate-180' : ''
                }`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>

              {/* Dropdown Menu */}
              {dropdownOpen && (
                <div
                  className="absolute right-0 mt-2 bg-white text-gray-800 rounded-lg shadow-lg w-48 z-50"
                  style={{ top: 'calc(100% + 0.5rem)' }} // Position below the badge
                >
                  <ul>
                    <li>
                      <button
                        onClick={() => router.push('/my-bookings')}
                        className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                      >
                        My Bookings
                      </button>
                    </li>
                    <li>
                      <button
                        onClick={handleLogout}
                        className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-red-600"
                      >
                        Logout
                      </button>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        ) : (
          // If no user is logged in, show a login/signup link or button (optional)
          <div className="flex items-center space-x-4">
            <button
              onClick={() => router.push('/auth')} // Navigate to login page
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
            >
              Login
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}