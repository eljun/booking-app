import { useState } from 'react';
import { supabase } from '../lib/supabaseClient';
import { useRouter } from 'next/router';

export default function Auth() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [resendEmailVisible, setResendEmailVisible] = useState(false);
  const [resetMode, setResetMode] = useState(false); // State for reset password mode
  const router = useRouter();

  // Handle Login or Sign-Up
  const handleAuth = async (type) => {
    setLoading(true);
    setErrorMessage('');
    setResendEmailVisible(false);

    if (!email || !password) {
      alert('Please provide both email and password.');
      setLoading(false);
      return;
    }

    if (type === 'login') {
      // Login User
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) {
        setErrorMessage('Invalid credentials or unverified email.');
        setResendEmailVisible(true); // Show resend verification button
      } else {
        alert('Login successful!');
        router.push('/');
      }
    } else {
      // Register User
      const { error } = await supabase.auth.signUp({ email, password });
      if (error) {
        setErrorMessage(error.message);
      } else {
        alert('Sign-up successful! Please check your email to verify your account.');
      }
    }
    setLoading(false);
  };

  // Resend Verification Email
  const resendVerificationEmail = async () => {
    setLoading(true);
    const { error } = await supabase.auth.resetPasswordForEmail(email);
    if (error) {
      alert(`Error: ${error.message}`);
    } else {
      alert('Verification email resent! Please check your inbox.');
    }
    setLoading(false);
  };

  // Handle Reset Password
  const handleResetPassword = async () => {
    if (!email) {
      alert('Please enter your email to reset your password.');
      return;
    }

    setLoading(true);
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: 'http://localhost:3000/auth', // Optional: Redirect after reset
    });
    if (error) {
      setErrorMessage(error.message);
    } else {
      alert('Password reset email sent! Check your inbox.');
    }
    setLoading(false);
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold mb-4">
        {resetMode ? 'Reset Password' : 'Login / Sign Up'}
      </h1>

      <input
        type="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
        className="border p-2 mb-2 w-72 rounded"
      />

      {!resetMode && (
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          className="border p-2 mb-2 w-72 rounded"
        />
      )}

      {/* Buttons */}
      {!resetMode ? (
        <>
          <button
            onClick={() => handleAuth('login')}
            className="bg-blue-500 text-white px-4 py-2 rounded w-72 mb-2 hover:bg-blue-700 transition"
          >
            {loading ? 'Loading...' : 'Login'}
          </button>
          <button
            onClick={() => handleAuth('signup')}
            className="bg-green-500 text-white px-4 py-2 rounded w-72 hover:bg-green-700 transition"
          >
            {loading ? 'Loading...' : 'Sign Up'}
          </button>

          {/* Forgot Password */}
          <button
            onClick={() => setResetMode(true)}
            className="mt-2 text-blue-500 underline"
          >
            Forgot Password?
          </button>
        </>
      ) : (
        <>
          <button
            onClick={handleResetPassword}
            className="bg-yellow-500 text-white px-4 py-2 rounded w-72 hover:bg-yellow-600 transition"
          >
            {loading ? 'Loading...' : 'Reset Password'}
          </button>
          <button
            onClick={() => setResetMode(false)}
            className="mt-2 text-blue-500 underline"
          >
            Back to Login
          </button>
        </>
      )}

      {/* Error Message */}
      {errorMessage && (
        <p className="text-red-500 text-sm mt-2">{errorMessage}</p>
      )}

      {/* Resend Verification Email */}
      {resendEmailVisible && (
        <button
          onClick={resendVerificationEmail}
          className="mt-4 text-blue-500 underline"
        >
          Resend Verification Email
        </button>
      )}
    </div>
  );
}