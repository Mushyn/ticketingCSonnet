'use client';
import { useTickets } from '@/contexts/TicketContext';

export default function TicketList() {
  const { tickets, updateTicket } = useTickets();

  return (
    <div className="mt-6">
      {tickets.length === 0 ? (
        <p className="text-gray-500">Aucun ticket pour le moment</p>
      ) : (
        <div className="grid gap-4">
          {tickets.map((ticket) => (
            <div key={ticket.id} className="border p-4 rounded-lg shadow bg-white">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <span className="text-sm text-gray-500 mr-2">#{ticket.number}</span>
                  <h3 className="font-bold text-lg inline">{ticket.title}</h3>
                </div>
                <span className={`px-2 py-1 rounded text-sm ${
                  ticket.status === 'open' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                }`}>
                  {ticket.status === 'open' ? 'Ouvert' : 'Fermé'}
                </span>
              </div>
              <p className="text-gray-600 mb-4">{ticket.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">
                  Créé le {new Date(ticket.createdAt).toLocaleDateString()}
                </span>
                <button
                  onClick={() => updateTicket(ticket.id, ticket.status === 'open' ? 'closed' : 'open')}
                  className={`px-3 py-1 rounded text-sm ${
                    ticket.status === 'open'
                      ? 'bg-red-500 hover:bg-red-600 text-white'
                      : 'bg-green-500 hover:bg-green-600 text-white'
                  }`}
                >
                  {ticket.status === 'open' ? 'Fermer' : 'Réouvrir'}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
