import React from 'react';
import { 
  FileText, 
  Send, 
  Filter, 
  AlertCircle, 
  Clock, 
  CheckCircle2,
  TrendingUp,
  Timer
} from 'lucide-react';

import { ViewType } from '../types';

export default function ProgressView({ onViewChange }: { onViewChange?: (view: ViewType) => void }) {
  const activeOrders = [
    { id: '#OF-88219', type: 'Milling', title: 'Aerospace Titanium Strut (Set B)', operator: 'R. Miller', machine: 'CNC-04', progress: 78, color: 'bg-secondary-container text-on-secondary-container' },
    { id: '#OF-88225', type: 'Lathe', title: 'Pressure Vessel Valve Shells', operator: 'J. Chen', machine: 'L-12', progress: 42, color: 'bg-tertiary-fixed text-on-tertiary-fixed-variant' },
    { id: '#OF-88241', type: 'Assembly', title: 'Hydraulic Actuator Pistons', operator: 'S. Gupta', machine: 'B-02', progress: 12, color: 'bg-secondary-container text-on-secondary-container' },
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h2 className="text-on-surface font-semibold text-2xl tracking-tight">Daily Manufacturing Progress</h2>
          <p className="text-on-surface-variant text-sm mt-1">Shift 02 (14:00 - 22:00) • Oct 24, 2023</p>
        </div>
        <div className="flex gap-3">
          <button className="px-4 py-2 bg-surface-container-high text-on-surface font-medium text-sm flex items-center gap-2 rounded hover:bg-surface-dim transition-colors">
            <FileText className="w-4 h-4" /> Export Report
          </button>
          <button className="px-6 py-2 bg-gradient-to-r from-primary to-primary-container text-on-primary font-bold text-sm rounded shadow-sm hover:opacity-90 transition-opacity">
            Submit All Updates
          </button>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-6">
        {/* Main Progress List */}
        <section className="col-span-12 lg:col-span-8 space-y-4">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-bold text-[10px] uppercase tracking-widest text-on-surface-variant flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-surface-tint"></div>
              Active Fabrication Orders (OF)
            </h3>
            <div className="flex items-center gap-2 cursor-pointer hover:text-primary transition-colors">
              <span className="text-[10px] font-bold text-outline uppercase">Filter by Priority</span>
              <Filter className="w-4 h-4" />
            </div>
          </div>

          {activeOrders.map((order) => (
            <div key={order.id} className="bg-surface-container-lowest p-5 rounded-xl flex flex-col md:flex-row md:items-center gap-6 group transition-all border border-slate-200/50 shadow-sm hover:shadow-md">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-1">
                  <span className="text-primary font-bold text-sm">{order.id}</span>
                  <span className={`${order.color} text-[10px] px-2 py-0.5 rounded font-bold uppercase`}>{order.type}</span>
                </div>
                <h4 className="text-on-surface font-semibold text-base">{order.title}</h4>
                <p className="text-on-surface-variant text-xs mt-1">Operator: {order.operator} • Machine: {order.machine}</p>
              </div>
              <div className="flex-1 flex flex-col gap-2">
                <div className="flex justify-between text-[10px] font-bold uppercase tracking-wider">
                  <span className="text-on-surface-variant">Completion</span>
                  <span className="text-primary">{order.progress}%</span>
                </div>
                <div className="w-full h-1.5 bg-surface-container-high rounded-full overflow-hidden">
                  <div className="h-full bg-primary transition-all duration-500" style={{ width: `${order.progress}%` }}></div>
                </div>
              </div>
              <div className="w-24">
                <input 
                  className="w-full bg-surface-container-highest border-none text-center font-bold text-sm py-2 rounded focus:ring-2 focus:ring-primary" 
                  type="number" 
                  defaultValue={order.progress} 
                />
              </div>
            </div>
          ))}
        </section>

        {/* Sidebar Forms */}
        <aside className="col-span-12 lg:col-span-4 space-y-6">
          <div className="bg-surface-container-low p-6 rounded-xl shadow-sm border-l-4 border-primary border border-slate-200/50">
            <h3 className="font-bold text-[10px] uppercase tracking-widest text-on-surface mb-4 flex items-center gap-2">
              <FileText className="w-4 h-4" /> Shift Summary Notes
            </h3>
            <textarea 
              className="w-full h-32 bg-surface-container-lowest border-none p-3 text-sm rounded focus:ring-2 focus:ring-primary placeholder:text-outline resize-none" 
              placeholder="Record general workshop conditions, tool maintenance, or personnel updates..."
            ></textarea>
            <div className="mt-3 flex items-center gap-2">
              <input className="rounded border-outline-variant text-primary focus:ring-primary" id="urgent-handover" type="checkbox" />
              <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-wider" htmlFor="urgent-handover">Mark for Night Shift handover</label>
            </div>
          </div>

          <div className="bg-surface-container-highest p-6 rounded-xl shadow-sm border-l-4 border-error border border-slate-200/50">
            <div className="flex justify-between items-start mb-4">
              <h3 className="font-bold text-[10px] uppercase tracking-widest text-on-surface-variant flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-error" /> Incident Reporting
              </h3>
              <span className="text-[9px] font-black text-error border border-error px-1 rounded tracking-tighter">OSHA REQ</span>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-[10px] font-bold uppercase text-outline mb-1">Incident Type</label>
                <select className="w-full bg-surface-container-lowest border-none text-xs rounded py-2 focus:ring-1 focus:ring-error">
                  <option>Equipment Failure</option>
                  <option>Material Waste</option>
                  <option>Minor Injury</option>
                  <option>Safety Near-Miss</option>
                </select>
              </div>
              <div>
                <label className="block text-[10px] font-bold uppercase text-outline mb-1">Brief Description</label>
                <textarea className="w-full h-20 bg-surface-container-lowest border-none p-3 text-sm rounded focus:ring-2 focus:ring-error resize-none" placeholder="Describe the event..."></textarea>
              </div>
              <button className="w-full py-2 bg-error text-on-error font-bold text-[10px] uppercase tracking-widest rounded hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
                <Send className="w-3 h-3" /> Log Incident
              </button>
            </div>
          </div>

          <div className="bg-surface-container p-6 rounded-xl shadow-sm overflow-hidden relative group border border-slate-200/50">
            <img 
              alt="Workshop Overview" 
              className="absolute inset-0 w-full h-full object-cover opacity-10 group-hover:scale-105 transition-transform duration-700" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAeXR-xZ1lRvn0BCOpBmPP0TvAycz3TcuvO1ZOwCZxrBxz5tXUJgglOZWWC3b8hD8hRXMbvlEFx2oIVDEtUBPMealjyDaWrN514AUraz9RVltOgBZMfL32RL7Znujo4g8LXVC7h3uT1-6iJxIvryJgDfoDtBZrnAh98Wg2eDoVuaLiQMWBM3C9xssWaGBh9YvLICeVigkT-_p25GeF-V7DU9y9aPJh3xyiIIbbsL6qXmTkWcVRwhQSSbnX65WxhswtwZ3rGZojDuug"
              referrerPolicy="no-referrer"
            />
            <div className="relative z-10">
              <h4 className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-4">Shift Stats so far</h4>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-2xl font-bold text-primary">04</p>
                  <p className="text-[10px] font-medium uppercase text-outline">Units Finished</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-tertiary">01</p>
                  <p className="text-[10px] font-medium uppercase text-outline">Downtime hrs</p>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
