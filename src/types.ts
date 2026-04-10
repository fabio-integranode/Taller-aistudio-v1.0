export type ViewType = 'dashboard' | 'orders' | 'order-detail' | 'piece-detail' | 'materials' | 'cutting' | 'progress' | 'entry';

export interface Order {
  id: string;
  client: string;
  pieces: number;
  deliveryDate: string;
  status: 'In Progress' | 'Pending' | 'Ready' | 'Delivered' | 'Completed';
  priority: 'Urgent' | 'Normal' | 'Internal';
}

export interface Piece {
  id: string;
  name: string;
  material: string;
  weight: string;
  length: string;
  width: string;
  thickness: string;
  status: string;
}
