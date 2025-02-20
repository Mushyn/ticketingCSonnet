'use client';
import { useState, useEffect } from 'react';
import { useHighContext } from '@/contexts/HighContext';
import { useTickets } from '@/contexts/TicketContext';

export default function NewTicketButton() {
  console.log('NewTicketButton component rendered'); // Log de montage

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const { addNotification, setIsLoading } = useHighContext();
  const { addTicket } = useTickets();

  useEffect(() => {
    console.log('NewTicketButton mounted');
    return () => console.log('NewTicketButton unmounted');
  }, []);

  useEffect(() => {
    console.log('Modal state changed:', isModalOpen);
  }, [isModalOpen]);

  const handleClick = (e: React.MouseEvent) => {
    console.log('Button clicked');
    e.preventDefault();
    setIsModalOpen(true);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      addTicket(title, description);
      setTitle('');
      setDescription('');
      setIsModalOpen(false);
      addNotification({
        message: 'Ticket créé avec succès !',
        type: 'success'
      });
    } catch (error) {
      addNotification({
        message: 'Erreur lors de la création du ticket',
        type: 'error'
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleOpen = () => {
    console.log('Opening modal'); // Déboggage
    setIsModalOpen(true);
  };

  const handleClose = () => {
    console.log('Closing modal'); // Déboggage
    setIsModalOpen(false);
  };

  return (
    <div onClick={() => console.log('Container clicked')}>
      <button
        onClick={handleClick}
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
      >
        Nouveau Ticket
      </button>
      
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-96 relative">
            <button
              onClick={handleClose}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>
            <h2 className="text-xl font-bold mb-4">Créer un nouveau ticket</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-700 mb-2">Titre</label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Description</label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  rows={4}
                  required
                />
              </div>
              <div className="flex justify-end gap-2 pt-4">
                <button
                  type="button"
                  onClick={handleClose}
                  className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"
                >
                  Annuler
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                >
                  Créer
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
