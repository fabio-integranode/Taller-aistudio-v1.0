import React from 'react';
import { TrendingUp, AlertTriangle, CheckCircle2, ChevronLeft, ChevronRight, Download, Filter, Eye, Truck, Activity } from 'lucide-react';
import { Order, ViewType } from '../types';

const orders: Order[] = [
  { id: 'OF-88219', client: 'Aerospace Dynamics Inc.', pieces: 1250, deliveryDate: 'Oct 24, 2023', status: 'In Progress', priority: 'Urgent' },
  { id: 'OF-88220', client: 'Global Hydraulics Ltd.', pieces: 400, deliveryDate: 'Oct 28, 2023', status: 'Pending', priority: 'Normal' },
  { id: 'OF-88225', client: 'MachinedForge R&D', pieces: 12, deliveryDate: 'Nov 02, 2023', status: 'Ready', priority: 'Internal' },
  { id: 'OF-88228', client: 'Quantum BioSystems', pieces: 5000, deliveryDate: 'Oct 30, 2023', status: 'Delivered', priority: 'Normal' },
  { id: 'OF-88231', client: 'Defense Core LLC', pieces: 850, deliveryDate: 'Oct 25, 2023', status: 'In Progress', priority: 'Urgent' },
  { id: 'OF-88235', client: 'Universal Motors', pieces: 2200, deliveryDate: 'Nov 10, 2023', status: 'Completed', priority: 'Normal' },
];

export default function DashboardView({ onOrderClick, onViewChange }: { onOrderClick: (id: string) => void, onViewChange?: (view: ViewType) => void }) {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      {/* KPI Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-surface-container-lowest p-6 rounded-lg relative overflow-hidden group shadow-sm border border-slate-200/50">
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-surface-tint"></div>
          <div className="flex justify-between items-start mb-4">
            <span className="text-on-surface-variant font-bold text-[10px] uppercase tracking-widest">Active Orders</span>
            <TrendingUp className="text-primary w-5 h-5" />
          </div>
          <div className="flex items-baseline gap-2">
            <h2 className="text-3xl font-bold text-on-surface">142</h2>
            <span className="text-xs text-primary font-medium">+12% vs last shift</span>
          </div>
        </div>

        <div className="bg-surface-container-lowest p-6 rounded-lg relative overflow-hidden group shadow-sm border border-slate-200/50">
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-tertiary"></div>
          <div className="flex justify-between items-start mb-4">
            <span className="text-on-surface-variant font-bold text-[10px] uppercase tracking-widest">Urgent Today</span>
            <AlertTriangle className="text-tertiary w-5 h-5 fill-tertiary/20" />
          </div>
          <div className="flex items-baseline gap-2">
            <h2 className="text-3xl font-bold text-on-surface">08</h2>
            <span className="text-xs text-tertiary font-medium">Critical Deadline (4h)</span>
          </div>
        </div>

        <div className="bg-surface-container-lowest p-6 rounded-lg relative overflow-hidden group shadow-sm border border-slate-200/50">
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-outline"></div>
          <div className="flex justify-between items-start mb-4">
            <span className="text-on-surface-variant font-bold text-[10px] uppercase tracking-widest">Completed Week</span>
            <CheckCircle2 className="text-outline w-5 h-5" />
          </div>
          <div className="flex items-baseline gap-2">
            <h2 className="text-3xl font-bold text-on-surface">584</h2>
            <span className="text-xs text-on-surface-variant font-medium">Target: 600</span>
          </div>
        </div>
      </section>

      {/* Main Dashboard Layout */}
      <div className="flex flex-col lg:flex-row gap-6 min-h-0">
        {/* Sidebar Filter */}
        <aside className="w-full lg:w-64 flex flex-col gap-6 bg-surface-container-low p-5 rounded-xl self-start border border-slate-200/50">
          <div>
            <h3 className="text-xs font-black uppercase tracking-tighter mb-4 text-on-surface">Order Filters</h3>
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-on-surface-variant uppercase">Search Number</label>
                <div className="bg-surface-container-highest rounded px-3 py-2 border-b-2 border-primary">
                  <input className="w-full bg-transparent border-none p-0 text-sm focus:ring-0" placeholder="OF-####" type="text" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-on-surface-variant uppercase">Production Status</label>
                <div className="space-y-1">
                  {['In Progress', 'Pending Review', 'Ready for QC'].map((status) => (
                    <label key={status} className="flex items-center gap-2 cursor-pointer hover:bg-surface-container-highest p-1 rounded transition-colors">
                      <input type="checkbox" defaultChecked={status === 'In Progress'} className="rounded-sm border-outline-variant text-primary focus:ring-primary" />
                      <span className="text-xs font-medium">{status}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <button className="mt-4 text-xs font-bold text-primary flex items-center justify-center gap-1 py-2 hover:bg-primary/5 rounded transition-colors">
            <Activity className="w-4 h-4" />
            Clear Filters
          </button>
        </aside>

        {/* High-Density Table Section */}
        <div className="flex-1 bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm border border-slate-200/50 flex flex-col">
          <div className="px-6 py-4 flex justify-between items-center border-b border-surface-container-highest">
            <h3 className="text-sm font-bold text-on-surface">Current Manufacturing Orders</h3>
            <div className="flex gap-2">
              <button className="p-1.5 hover:bg-surface-container-high rounded text-on-surface-variant transition-colors">
                <Download className="w-5 h-5" />
              </button>
              <button className="p-1.5 hover:bg-surface-container-high rounded text-on-surface-variant transition-colors">
                <Filter className="w-5 h-5" />
              </button>
            </div>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead className="bg-surface-container-low">
                <tr>
                  <th className="px-6 py-3 text-[10px] font-black uppercase tracking-wider text-on-surface-variant">Priority</th>
                  <th className="px-6 py-3 text-[10px] font-black uppercase tracking-wider text-on-surface-variant">OF Number</th>
                  <th className="px-6 py-3 text-[10px] font-black uppercase tracking-wider text-on-surface-variant">Client</th>
                  <th className="px-6 py-3 text-[10px] font-black uppercase tracking-wider text-on-surface-variant text-right">Pieces</th>
                  <th className="px-6 py-3 text-[10px] font-black uppercase tracking-wider text-on-surface-variant">Delivery Date</th>
                  <th className="px-6 py-3 text-[10px] font-black uppercase tracking-wider text-on-surface-variant">Status</th>
                  <th className="px-6 py-3 text-[10px] font-black uppercase tracking-wider text-on-surface-variant text-center">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-surface-container-high">
                {orders.map((order) => (
                  <tr key={order.id} className="hover:bg-surface-container-low transition-colors group cursor-pointer" onClick={() => onOrderClick(order.id)}>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <div className={`w-2 h-2 rounded-full ${order.priority === 'Urgent' ? 'bg-error' : order.priority === 'Normal' ? 'bg-primary' : 'bg-tertiary'}`}></div>
                        <span className={`text-[10px] font-bold uppercase ${order.priority === 'Urgent' ? 'text-error' : order.priority === 'Normal' ? 'text-primary' : 'text-tertiary'}`}>
                          {order.priority}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-sm font-bold text-primary">{order.id}</span>
                    </td>
                    <td className="px-6 py-4 text-xs font-medium text-on-surface">{order.client}</td>
                    <td className="px-6 py-4 text-xs text-right font-medium">
                      {order.pieces.toLocaleString()} <span className="text-[9px] text-outline ml-0.5">pc</span>
                    </td>
                    <td className="px-6 py-4 text-xs text-on-surface-variant">{order.deliveryDate}</td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 rounded text-[10px] font-bold uppercase tracking-tight ${
                        order.status === 'In Progress' ? 'bg-secondary-container text-on-secondary-container' :
                        order.status === 'Ready' ? 'bg-primary-fixed text-on-primary-fixed' :
                        order.status === 'Delivered' ? 'bg-surface-dim text-on-surface' :
                        'bg-surface-container-high text-on-surface-variant'
                      }`}>
                        {order.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <button className="opacity-0 group-hover:opacity-100 text-primary p-1 rounded hover:bg-primary/10 transition-all">
                        <Eye className="w-5 h-5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="px-6 py-3 bg-surface-container-low flex justify-between items-center text-[10px] font-bold uppercase tracking-widest text-on-surface-variant border-t border-surface-container-high">
            <span>Showing {orders.length} of 142 Orders</span>
            <div className="flex items-center gap-4">
              <button className="flex items-center gap-1 hover:text-primary transition-colors">
                <ChevronLeft className="w-4 h-4" /> Prev
              </button>
              <span className="text-on-surface">Page 1 / 24</span>
              <button className="flex items-center gap-1 hover:text-primary transition-colors">
                Next <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bento Status Cards Section */}
      <section className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="md:col-span-2 bg-surface-container-lowest p-6 rounded-xl flex items-center justify-between shadow-sm border border-slate-200/50">
          <div className="space-y-1">
            <p className="text-[10px] font-black uppercase text-on-surface-variant tracking-widest">Next Scheduled Shipment</p>
            <h4 className="text-xl font-bold text-on-surface">OF-88219 for Aerospace Dynamics</h4>
            <div className="flex items-center gap-2 text-xs text-primary font-medium mt-2">
              <Activity className="w-4 h-4" />
              Departs in 3h 14m
            </div>
          </div>
          <div className="w-16 h-16 rounded-lg bg-secondary-fixed flex items-center justify-center">
            <Truck className="w-8 h-8 text-primary" />
          </div>
        </div>

        <div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm border border-slate-200/50">
          <p className="text-[10px] font-black uppercase text-on-surface-variant tracking-widest mb-2">Machine Load</p>
          <div className="flex items-end gap-1 h-12">
            {[100, 75, 50, 85, 65, 100].map((h, i) => (
              <div key={i} className={`w-2 rounded-t-sm ${i === 5 ? 'bg-error' : 'bg-primary'}`} style={{ height: `${h}%` }}></div>
            ))}
          </div>
          <p className="text-xs font-bold text-on-surface mt-2">88% Capacity</p>
        </div>

        <div className="bg-gradient-to-br from-tertiary to-tertiary-container p-6 rounded-xl shadow-sm text-on-tertiary-container">
          <p className="text-[10px] font-black uppercase tracking-widest opacity-80 mb-2">System Alert</p>
          <p className="text-sm font-bold leading-snug">Tool calibration required on CNC-04 by end of shift.</p>
          <button className="mt-4 text-[10px] font-black uppercase bg-on-tertiary-container text-tertiary px-3 py-1.5 rounded hover:bg-white transition-colors">
            View Schedule
          </button>
        </div>
      </section>
    </div>
  );
}
