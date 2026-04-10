import React from 'react';
import { Search, Filter, Download, Printer, ChevronLeft, ChevronRight, Eye, MoreVertical } from 'lucide-react';
import { Order, ViewType } from '../types';

const orders: Order[] = [
  { id: 'OF-88219', client: 'Aerospace Dynamics Inc.', pieces: 1250, deliveryDate: 'Oct 24, 2023', status: 'In Progress', priority: 'Urgent' },
  { id: 'OF-88220', client: 'Global Hydraulics Ltd.', pieces: 400, deliveryDate: 'Oct 28, 2023', status: 'Pending', priority: 'Normal' },
  { id: 'OF-88225', client: 'MachinedForge R&D', pieces: 12, deliveryDate: 'Nov 02, 2023', status: 'Ready', priority: 'Internal' },
  { id: 'OF-88228', client: 'Quantum BioSystems', pieces: 5000, deliveryDate: 'Oct 30, 2023', status: 'Delivered', priority: 'Normal' },
  { id: 'OF-88231', client: 'Defense Core LLC', pieces: 850, deliveryDate: 'Oct 25, 2023', status: 'In Progress', priority: 'Urgent' },
  { id: 'OF-88235', client: 'Universal Motors', pieces: 2200, deliveryDate: 'Nov 10, 2023', status: 'Completed', priority: 'Normal' },
  { id: 'OF-88240', client: 'Precision Robotics', pieces: 150, deliveryDate: 'Nov 15, 2023', status: 'Pending', priority: 'Normal' },
  { id: 'OF-88245', client: 'Solar Array Systems', pieces: 3000, deliveryDate: 'Nov 20, 2023', status: 'In Progress', priority: 'Urgent' },
];

export default function OrdersView({ onOrderClick, onViewChange }: { onOrderClick: (id: string) => void, onViewChange?: (view: ViewType) => void }) {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black text-on-surface tracking-tight">Fabrication Orders</h1>
          <p className="text-on-surface-variant text-sm mt-1">Manage and track all manufacturing orders across the plant.</p>
        </div>
        <div className="flex gap-3">
          <button className="px-4 py-2 bg-surface-container-high text-on-surface font-bold text-xs uppercase tracking-widest rounded hover:bg-surface-dim transition-colors flex items-center gap-2">
            <Download className="w-4 h-4" /> Export CSV
          </button>
          <button 
            onClick={() => onViewChange?.('entry')}
            className="px-6 py-2 bg-primary text-white font-bold text-xs uppercase tracking-widest rounded shadow-md hover:opacity-90 transition-opacity"
          >
            Create New OF
          </button>
        </div>
      </div>

      <div className="bg-surface-container-lowest rounded-2xl shadow-sm border border-slate-200/50 overflow-hidden">
        <div className="p-6 border-b border-surface-container-high flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-4 w-full md:w-auto">
            <div className="relative flex-1 md:w-80">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-outline w-4 h-4" />
              <input 
                className="w-full bg-surface-container-low border-none text-sm py-2.5 pl-10 rounded-xl focus:ring-2 focus:ring-primary/20" 
                placeholder="Search by OF, client, or status..." 
                type="text" 
              />
            </div>
            <button className="flex items-center gap-2 px-4 py-2.5 bg-surface-container-low text-on-surface-variant text-xs font-bold uppercase tracking-wider rounded-xl hover:bg-surface-container-high transition-colors">
              <Filter className="w-4 h-4" /> Filters
            </button>
          </div>
          <div className="flex items-center gap-2 text-xs font-bold text-outline uppercase tracking-widest">
            <Printer className="w-4 h-4 cursor-pointer hover:text-primary transition-colors" />
            <span className="h-4 w-[1px] bg-outline-variant mx-2"></span>
            <span>8 Active Orders</span>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-surface-container-low/50">
                <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-outline">Priority</th>
                <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-outline">OF Number</th>
                <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-outline">Client</th>
                <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-outline text-right">Pieces</th>
                <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-outline">Delivery</th>
                <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-outline">Status</th>
                <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-outline text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-surface-container-high">
              {orders.map((order) => (
                <tr 
                  key={order.id} 
                  className="hover:bg-surface-container-low transition-colors group cursor-pointer"
                  onClick={() => onOrderClick(order.id)}
                >
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full ${order.priority === 'Urgent' ? 'bg-error' : order.priority === 'Normal' ? 'bg-primary' : 'bg-tertiary'}`}></div>
                      <span className={`text-[10px] font-black uppercase ${order.priority === 'Urgent' ? 'text-error' : order.priority === 'Normal' ? 'text-primary' : 'text-tertiary'}`}>
                        {order.priority}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-5">
                    <span className="text-sm font-black text-primary group-hover:underline">{order.id}</span>
                  </td>
                  <td className="px-6 py-5">
                    <p className="text-sm font-bold text-on-surface">{order.client}</p>
                    <p className="text-[10px] text-outline font-medium uppercase tracking-tighter">Standard Contract</p>
                  </td>
                  <td className="px-6 py-5 text-right">
                    <span className="text-sm font-bold text-on-surface">{order.pieces.toLocaleString()}</span>
                    <span className="text-[10px] text-outline ml-1">PCS</span>
                  </td>
                  <td className="px-6 py-5">
                    <p className="text-xs font-bold text-on-surface">{order.deliveryDate}</p>
                    <p className="text-[9px] text-outline font-black uppercase tracking-tighter">In 12 Days</p>
                  </td>
                  <td className="px-6 py-5">
                    <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-tight ${
                      order.status === 'In Progress' ? 'bg-secondary-container text-on-secondary-container' :
                      order.status === 'Ready' ? 'bg-primary-fixed text-on-primary-fixed' :
                      order.status === 'Delivered' ? 'bg-surface-dim text-on-surface' :
                      'bg-surface-container-high text-on-surface-variant'
                    }`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="px-6 py-5 text-center">
                    <div className="flex items-center justify-center gap-2">
                      <button className="p-2 hover:bg-primary/10 text-primary rounded-lg transition-colors">
                        <Eye className="w-5 h-5" />
                      </button>
                      <button className="p-2 hover:bg-surface-container-high text-outline rounded-lg transition-colors">
                        <MoreVertical className="w-5 h-5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="p-6 bg-surface-container-low/30 border-t border-surface-container-high flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">Showing 8 of 142 Orders</p>
          <div className="flex items-center gap-2">
            <button className="p-2 hover:bg-surface-container-high rounded-lg transition-colors disabled:opacity-30">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-1">
              {[1, 2, 3, '...', 12].map((p, i) => (
                <button 
                  key={i} 
                  className={`w-8 h-8 flex items-center justify-center rounded-lg text-xs font-bold transition-all ${
                    p === 1 ? 'bg-primary text-white shadow-md shadow-primary/20' : 'hover:bg-surface-container-high text-on-surface-variant'
                  }`}
                >
                  {p}
                </button>
              ))}
            </div>
            <button className="p-2 hover:bg-surface-container-high rounded-lg transition-colors">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
