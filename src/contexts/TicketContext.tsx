'use client';
import { createContext, useContext, useState, ReactNode } from 'react';

export interface Ticket {
  id: string;
  number: number;  // Ajout du numéro de ticket
  title: string;
  description: string;
  status: 'open' | 'closed';
  createdAt: Date;
}

interface TicketContextType {
  tickets: Ticket[];
  addTicket: (title: string, description: string) => void;
  updateTicket: (id: string, status: 'open' | 'closed') => void;
  lastTicketNumber: number;
}

const TicketContext = createContext<TicketContextType | null>(null);

export function TicketProvider({ children }: { children: ReactNode }) {
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [lastTicketNumber, setLastTicketNumber] = useState(0);

  const addTicket = (title: string, description: string) => {
    const newNumber = lastTicketNumber + 1;
    const newTicket: Ticket = {
      id: Date.now().toString(),
      number: newNumber,
      title,
      description,
      status: 'open',
      createdAt: new Date(),
    };
    setTickets(prev => [newTicket, ...prev]);
    setLastTicketNumber(newNumber);
  };

  const updateTicket = (id: string, status: 'open' | 'closed') => {
    setTickets(prev => 
      prev.map(ticket => 
        ticket.id === id ? { ...ticket, status } : ticket
      )
    );
  };

  return (
    <TicketContext.Provider value={{ tickets, addTicket, updateTicket, lastTicketNumber }}>
      {children}
    </TicketContext.Provider>
  );
}

export const useTickets = () => {
  const context = useContext(TicketContext);
  if (!context) {
    throw new Error('useTickets doit être utilisé dans un TicketProvider');
  }
  return context;
};
