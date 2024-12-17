// pages/register.js
'use client';
import { useState } from 'react';
import { supabase } from '../lib/supabaseClient'; // Update path if needed

export default function Register() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    setLoading(true);
    setError('');
  
    // Step 1: Create user in Supabase authentication (email and password)
    try {
      const { user, error: authError } = await supabase.auth.signUp({
        email,
        password,
      });
  
      // Log the response to see what's returned
      console.log('Supabase signUp response:', { user, authError });
  
      if (authError) {
        console.error('Authentication error:', authError.message);
        setError('User creation failed. Please try again.');
        setLoading(false);
        return;
      }
  
      // Check if user object is available before accessing its id
      if (!user || !user.id) {
        console.error('User object or ID is undefined');
        setError('User creation failed. Please try again.');
        setLoading(false);
        return;
      }
  
      // Step 2: Save additional user information in your 'users' table
      const { data, error: dbError } = await supabase
        .from('users') // Make sure 'users' table exists in your database
        .insert([
          {
            id: user.id, // Ensure the user object contains the id
            first_name: firstName,
            last_name: lastName,
            address: address,
            email: email,
          },
        ]);
  
      if (dbError) {
        console.error('Database error:', dbError.message);
        setError('There was an error saving your details. Please try again.');
        setLoading(false);
        return;
      }
  
      setLoading(false);
      alert('Registration successful!');
    } catch (error) {
      console.error('Unexpected error:', error);
      setError('An unexpected error occurred. Please try again later.');
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold mb-6 text-blue-700">Register</h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-blue-700" htmlFor="firstName">
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-blue-700" htmlFor="lastName">
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-blue-700" htmlFor="address">
            Address
          </label>
          <input
            type="text"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-blue-700" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-blue-700" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md"
          />
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="mt-4 bg-blue-700 text-white rounded-md py-2 px-4 hover:bg-blue-800 transition-colors"
            disabled={loading}
          >
            {loading ? 'Registering...' : 'Register'}
          </button>
        </div>
      </form>
    </div>
  );
}