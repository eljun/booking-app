import '../styles/globals.css';
import { supabase } from '../lib/supabaseClient';
import { useEffect, useState } from 'react';
import NavBar from '../components/NavBar'; // Import the NavBar component

function MyApp({ Component, pageProps }) {
  const [session, setSession] = useState(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  return (
    <>
      {/* Add the global navigation bar */}
      <NavBar />

      {/* Render the current page with session passed as props */}
      <Component {...pageProps} session={session} />
    </>
  );
}

export default MyApp;