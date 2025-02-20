'use client';
import { useEffect, useState } from 'react';

interface NotificationToastProps {
  message: string;
  type: 'success' | 'error' | 'info' | 'warning';
  onClose: () => void;
}

export default function NotificationToast({ message, type, onClose }: NotificationToastProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onClose, 300); // Attendre la fin de l'animation avant de supprimer
    }, 5000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div
      className={`
        fixed bottom-4 right-4 
        min-w-[300px] 
        p-4 
        rounded-lg 
        shadow-lg 
        transition-all 
        duration-300
        ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}
        ${
          type === 'success' ? 'bg-green-500' :
          type === 'error' ? 'bg-red-500' :
          type === 'warning' ? 'bg-yellow-500' :
          'bg-blue-500'
        }
        text-white
        z-[100000]
      `}
    >
      <div className="flex justify-between items-center gap-4">
        <span>{message}</span>
        <button
          onClick={() => setIsVisible(false)}
          className="text-white hover:text-gray-200"
        >
          ×
        </button>
      </div>
    </div>
  );
}
