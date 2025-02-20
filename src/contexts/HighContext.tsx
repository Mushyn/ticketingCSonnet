'use client';
import { createContext, useContext, ReactNode, useState } from 'react';
import NotificationToast from '@/components/NotificationToast';

interface Notification {
  id: string;
  message: string;
  type: 'success' | 'error' | 'info' | 'warning';
}

interface Theme {
  mode: 'light' | 'dark';
  primaryColor: string;
  secondaryColor: string;
}

interface HighContextType {
  version: string;
  theme: Theme;
  notifications: Notification[];
  isLoading: boolean;
  toggleTheme: () => void;
  addNotification: (notification: Omit<Notification, 'id'>) => void;
  removeNotification: (id: string) => void;
  setIsLoading: (status: boolean) => void;
}

const defaultTheme: Theme = {
  mode: 'light',
  primaryColor: '#3b82f6',
  secondaryColor: '#64748b'
};

const HighContext = createContext<HighContextType | null>(null);

export function HighContextProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(defaultTheme);
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const toggleTheme = () => {
    setTheme(prev => ({
      ...prev,
      mode: prev.mode === 'light' ? 'dark' : 'light'
    }));
  };

  const addNotification = (notification: Omit<Notification, 'id'>) => {
    const id = Date.now().toString();
    setNotifications(prev => [...prev, { ...notification, id }]);
    // Auto-remove notification after 5 seconds
    setTimeout(() => removeNotification(id), 5000);
  };

  const removeNotification = (id: string) => {
    setNotifications(prev => prev.filter(note => note.id !== id));
  };

  const value = {
    version: '1.0.0',
    theme,
    notifications,
    isLoading,
    toggleTheme,
    addNotification,
    removeNotification,
    setIsLoading
  };

  return (
    <>
      <HighContext.Provider value={value}>
        {children}
      </HighContext.Provider>
      
      {notifications.map(note => (
        <NotificationToast
          key={note.id}
          message={note.message}
          type={note.type}
          onClose={() => removeNotification(note.id)}
        />
      ))}

      {isLoading && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[9998]">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
        </div>
      )}
    </>
  );
}

export const useHighContext = () => {
  const context = useContext(HighContext);
  if (!context) {
    throw new Error('useHighContext doit être utilisé dans un HighContextProvider');
  }
  return context;
};
