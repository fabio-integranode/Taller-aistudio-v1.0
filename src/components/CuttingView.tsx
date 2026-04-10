import React from 'react';
import { 
  Search, 
  Filter, 
  Printer, 
  CheckCircle2, 
  ChevronLeft, 
  ChevronRight,
  TrendingUp,
  AlertTriangle,
  Timer,
  ShieldCheck,
  BadgeCheck
} from 'lucide-react';

import { ViewType } from '../types';

export default function CuttingView({ onViewChange }: { onViewChange?: (view: ViewType) => void }) {
  const instructions = [
    { profile: 'ALU-HEAVY-4040', desc: 'Anodized Silver Finish', len: 1250.0, start: '90.0°', end: '45.0°', qty: 12, notes: 'Check surface for scratches' },
    { profile: 'STEEL-REC-2060', desc: 'Hot Rolled Structural', len: 2400.5, start: '90.0°', end: '90.0°', qty: 4, notes: 'Heavy Item', urgent: true },
    { profile: 'PVC-PIPE-80D', desc: 'High Impact Resistance', len: 450.0, start: '22.5°', end: '22.5°', qty: 24, notes: 'Bundle in sets of 4' },
    { profile: 'ALU-TUBE-2020', desc: 'Clear Coat Finish', len: 885.2, start: '90.0°', end: '45.0°', qty: 8, notes: 'High precision needed' },
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-semibold text-on-surface tracking-tight mb-2">Material Cutting Instructions</h1>
          <p className="text-on-surface-variant flex items-center gap-2">
            <Timer className="w-4 h-4" />
            Batch ID: <span className="font-mono font-bold text-primary">CUT-2023-X92</span>
          </p>
        </div>
        <div className="flex gap-3">
          <button className="px-6 py-2 bg-surface-container-low text-on-surface-variant rounded-md font-medium hover:bg-surface-container-high transition-colors flex items-center gap-2">
            <Printer className="w-4 h-4" /> Print manifest
          </button>
          <button className="px-6 py-2 bg-gradient-to-r from-primary to-primary-container text-white rounded-md font-medium shadow-sm hover:opacity-90 transition-opacity flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4" /> Finalize Batch
          </button>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-6">
        {/* Status & KPI Section */}
        <div className="col-span-12 lg:col-span-3 flex flex-col gap-6">
          <div className="bg-surface-container-lowest p-6 rounded-xl relative overflow-hidden group border border-slate-200/50 shadow-sm">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary"></div>
            <p className="text-[10px] font-bold uppercase tracking-wider text-outline mb-1">Total Pieces</p>
            <h2 className="text-4xl font-black text-on-surface">124<span className="text-xs ml-1 text-outline font-medium tracking-normal">units</span></h2>
            <div className="mt-4 flex items-center gap-2 text-xs text-primary font-bold">
              <TrendingUp className="w-4 h-4" />
              <span>82% Processed</span>
            </div>
          </div>
          
          <div className="bg-surface-container-lowest p-6 rounded-xl relative overflow-hidden group border border-slate-200/50 shadow-sm">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-tertiary"></div>
            <p className="text-[10px] font-bold uppercase tracking-wider text-outline mb-1">Avg. Waste</p>
            <h2 className="text-4xl font-black text-on-surface">4.2<span className="text-xs ml-1 text-outline font-medium tracking-normal">%</span></h2>
            <div className="mt-4 flex items-center gap-2 text-xs text-tertiary font-bold">
              <AlertTriangle className="w-4 h-4" />
              <span>Near limit (5%)</span>
            </div>
          </div>

          <div className="bg-surface-container-highest p-4 rounded-xl flex flex-col items-center justify-center text-center gap-3 border border-slate-200/50">
            <img 
              className="w-full h-32 object-cover rounded-lg shadow-inner" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCAv0ICdl9N2LUwfK9pHge3nQdapADE8OEqSgfZNgVJ64mK4H07VVye5_8UJt03jXoDHfGXEdhFWPdLXZuJ7FKB8gKKcrFLMxCIUVcMhageBoZ946YuU2tLV3WBzko6BAey10ttk3m3HKh6bUgv2yM7a-M5cu15SxEiyosfL8TZ5LXyVulU0aW-McNTZJjkdS_xGKj8PcvP0-Y6puOv22IbWtHTE5Izj6Ix0ef-jaBEgM0tQ3yAIFre9OS08ISw0FmI-AiZI0_lh7g"
              alt="Blade Reference"
              referrerPolicy="no-referrer"
            />
            <p className="text-[10px] uppercase font-black text-outline-variant tracking-[0.2em]">Blade Reference: S-450-GT</p>
          </div>
        </div>

        {/* Main Technical Table Container */}
        <div className="col-span-12 lg:col-span-9 bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden border border-slate-200/50 flex flex-col">
          <div className="p-6 bg-surface-container-highest flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4 w-full sm:w-auto">
              <div className="flex items-center bg-white rounded-md px-3 py-2 border border-outline-variant/20 w-full sm:w-auto">
                <Search className="text-outline w-4 h-4 mr-2" />
                <input className="bg-transparent border-none focus:ring-0 text-sm w-full sm:w-48" placeholder="Filter by Profile..." type="text" />
              </div>
              <div className="flex items-center gap-2 bg-white rounded-md px-3 py-2 border border-outline-variant/20 cursor-pointer hover:bg-slate-50 transition-colors">
                <Filter className="text-tertiary w-4 h-4" />
                <span className="text-[10px] font-bold uppercase">All Materials</span>
              </div>
            </div>
            <div className="text-[10px] font-bold text-outline-variant bg-surface-container px-2 py-1 rounded tracking-wider">
              PRECISION TOLERANCE: +/- 0.5MM
            </div>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-surface-container-low border-b border-outline-variant/10">
                  <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-outline">Confirm</th>
                  <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-outline">Profile/Material</th>
                  <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-outline text-right">Length (mm)</th>
                  <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-outline text-center">Angles</th>
                  <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-outline text-center">Qty</th>
                  <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-outline">Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant/5">
                {instructions.map((item, i) => (
                  <tr key={i} className="hover:bg-surface-container-low transition-colors group">
                    <td className="px-6 py-4">
                      <input type="checkbox" className="w-5 h-5 rounded border-outline-variant text-primary focus:ring-primary/20 cursor-pointer" />
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex flex-col">
                        <span className="text-sm font-bold text-on-surface">{item.profile}</span>
                        <span className="text-[10px] text-outline font-medium">{item.desc}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <span className="text-lg font-black font-mono text-primary">{item.len.toFixed(1)}</span>
                      <span className="text-[10px] text-outline ml-1">mm</span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <div className="flex gap-1 justify-center">
                        <div className="bg-secondary-container px-2 py-1 rounded text-[10px] font-bold text-on-secondary-container">{item.start}</div>
                        <div className="bg-secondary-container px-2 py-1 rounded text-[10px] font-bold text-on-secondary-container">{item.end}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="text-sm font-black bg-surface-container-highest w-8 h-8 inline-flex items-center justify-center rounded-full">{item.qty}</span>
                    </td>
                    <td className="px-6 py-4">
                      {item.urgent ? (
                        <div className="flex items-center gap-1 text-tertiary font-bold text-[10px] uppercase">
                          <AlertTriangle className="w-3 h-3" /> Heavy Item
                        </div>
                      ) : (
                        <p className="text-xs text-on-surface-variant italic truncate max-w-[120px]">{item.notes}</p>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="p-4 bg-surface-container-high border-t border-outline-variant/10 flex items-center justify-between">
            <div className="flex gap-4">
              <div className="text-[10px] font-bold text-outline bg-surface-container px-3 py-1 rounded uppercase tracking-wider">
                Completed: <span className="text-primary">1 / 4 Rows</span>
              </div>
              <div className="text-[10px] font-bold text-outline bg-surface-container px-3 py-1 rounded uppercase tracking-wider">
                Remainder: <span className="text-tertiary">3 Rows</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button className="p-1 hover:bg-surface-container-highest rounded transition-colors"><ChevronLeft className="w-5 h-5" /></button>
              <span className="text-[10px] font-bold tracking-widest">PAGE 01 / 04</span>
              <button className="p-1 hover:bg-surface-container-highest rounded transition-colors"><ChevronRight className="w-5 h-5" /></button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Operator Tools Bento */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-4">
        <div className="bg-primary text-white p-6 rounded-xl flex items-center gap-4 shadow-md">
          <Timer className="w-10 h-10 opacity-80" />
          <div>
            <p className="text-[10px] uppercase font-black tracking-widest opacity-80">Cycle Time</p>
            <p className="text-2xl font-bold">12:45 <span className="text-xs font-medium">min</span></p>
          </div>
        </div>
        <div className="bg-surface-container-lowest border border-slate-200/50 p-6 rounded-xl flex items-center gap-4 shadow-sm">
          <BadgeCheck className="w-10 h-10 text-primary opacity-80" />
          <div>
            <p className="text-[10px] uppercase font-black tracking-widest text-outline">Calibration</p>
            <p className="text-2xl font-bold text-on-surface">NOMINAL</p>
          </div>
        </div>
        <div className="bg-surface-container-lowest border border-slate-200/50 p-6 rounded-xl flex items-center gap-4 shadow-sm">
          <ShieldCheck className="w-10 h-10 text-tertiary opacity-80" />
          <div>
            <p className="text-[10px] uppercase font-black tracking-widest text-outline">Safety Status</p>
            <p className="text-2xl font-bold text-green-600">SECURE</p>
          </div>
        </div>
        <div className="bg-inverse-surface text-inverse-on-surface p-6 rounded-xl flex items-center justify-between shadow-md">
          <div>
            <p className="text-[10px] uppercase font-black tracking-widest opacity-60">Operator ID</p>
            <p className="text-lg font-bold">TECH_UNIT_82</p>
          </div>
          <CheckCircle2 className="w-10 h-10 opacity-40" />
        </div>
      </div>
    </div>
  );
}
