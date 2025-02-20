export interface Ticket {
  id: string;
  title: string;
  description: string;
  status: 'open' | 'closed';
  createdAt: Date;
  updatedAt: Date;
}
