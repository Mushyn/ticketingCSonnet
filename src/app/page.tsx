'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import TicketList from '@/components/TicketList';
import NewTicketButton from '@/components/NewTicketButton';

export default function Home() {
  console.log('Home component rendered'); // Log de montage

  const { user, logout } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.replace('/login');  // Utiliser replace au lieu de push
    }
    console.log('Home component mounted, user:', user);
  }, [user, router]);

  if (!user) {
    return null;
  }

  return (
    <main className="flex-1 container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Système de Tickets</h1>
        <div className="flex items-center gap-4">
          <span>Bienvenue, {user.name}</span>
          <button
            onClick={() => logout()}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
          >
            Déconnexion
          </button>
        </div>
      </div>
      <div className="flex flex-col flex-1">
        <NewTicketButton />
        <TicketList />
      </div>
    </main>
  );
}
