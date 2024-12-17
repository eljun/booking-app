import { useState, useEffect } from 'react';
import BookingsCalendar from './BookingsCalendar';
import MyBookingsList from './MyBookingsList';

export default function MyBookings() {
  const [activeTab, setActiveTab] = useState('calendar'); // Default view is calendar

  return (
    <div className="container mx-auto max-w-screen-lg p-6">
      <h1 className="text-3xl font-bold text-blue-800 mb-6 text-center">Booking</h1>
      
      {/* Tabs for switching views */}
      <div className="flex justify-center mb-6">
        <button
          onClick={() => setActiveTab('calendar')}
          className={`py-2 px-6 rounded-t-lg font-semibold ${
            activeTab === 'calendar' ? 'bg-blue-600 text-white' : 'bg-blue-100 text-blue-800'
          }`}
        >
          Calendar View
        </button>
        <button
          onClick={() => setActiveTab('list')}
          className={`py-2 px-6 rounded-t-lg font-semibold ${
            activeTab === 'list' ? 'bg-blue-600 text-white' : 'bg-blue-100 text-blue-800'
          }`}
        >
          Gallery View
        </button>
      </div>

      {/* Conditional rendering of tabs */}
      <div className="border rounded-lg shadow-md p-4 bg-white">
        {activeTab === 'calendar' && (
          <div>
            <BookingsCalendar />
          </div>
        )}
        {activeTab === 'list' && (
          <div>
            <MyBookingsList />
          </div>
        )}
      </div>
    </div>
  );
}