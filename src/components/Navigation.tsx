'use client'

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { createClient } from '@/utils/supabase/client';
import { Session } from '@supabase/supabase-js';

export function Navigation() {
  const router = useRouter();
  const supabase = createClient();
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event: string, newSession: Session | null) => {
      setSession(newSession);
    });

    return () => subscription.unsubscribe();
  }, [supabase]);

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error(error);
    } else {
      router.refresh();
    }
  };

  return (
    <nav className="container mx-auto p-6 flex justify-between items-center bg-gradient-to-b from-purple-700 to-indigo-900 text-white">
      <Link href="/" className="text-2xl font-bold">PolicyFeeler</Link>
      <div className="space-x-4">
        <Link href="/bills" className="hover:text-purple-300">Bills</Link>
        <Link href="/about" className="hover:text-purple-300">About</Link>
        {session ? (
          <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 transition-colors">
            Sign Out
          </button>
        ) : (
          <Link href="/auth/signin" className="bg-white text-purple-700 px-4 py-2 rounded-full hover:bg-purple-100 transition-colors">
            Sign In
          </Link>
        )}
      </div>
    </nav>
  );
} 
