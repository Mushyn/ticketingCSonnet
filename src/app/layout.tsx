import { AuthProvider } from '@/contexts/AuthContext';
import { HighContextProvider } from '@/contexts/HighContext';
import { TicketProvider } from '@/contexts/TicketContext';
import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Système de Tickets',
  description: 'Application de gestion de tickets',
  manifest: '/manifest.json'
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className="min-h-screen w-full bg-gray-50">
        <HighContextProvider>
          <AuthProvider>
            <TicketProvider>
              <div className="min-h-screen flex flex-col">
                {children}
              </div>
            </TicketProvider>
          </AuthProvider>
        </HighContextProvider>
      </body>
    </html>
  );
}
