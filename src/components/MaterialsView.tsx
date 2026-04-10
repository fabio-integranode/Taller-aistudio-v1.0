import React from 'react';
import { 
  Search, 
  Filter, 
  Download, 
  Printer, 
  ChevronLeft, 
  ChevronRight,
  Wrench,
  Trash2,
  Zap,
  CheckCircle2,
  AlertTriangle,
  Info
} from 'lucide-react';

import { ViewType } from '../types';

export default function MaterialsView({ onViewChange }: { onViewChange?: (view: ViewType) => void }) {
  const materials = [
    { code: 'ALU-6061-T6-B', name: '6061-T6 Aluminum Bar', desc: '150mm x 150mm Square Stock', unit: 'meters', qty: 12.5, status: 'IN STOCK' },
    { code: 'SST-316-V12', name: '316 Stainless Steel Valve Body', desc: 'Pre-Machined Casting Component', unit: 'units', qty: 4.0, status: 'TO ORDER' },
    { code: 'HYD-F12-BSPP', name: 'Hydraulic Fitting F12', desc: 'BSPP Threaded High-Pressure', unit: 'units', qty: 12.0, status: 'IN STOCK' },
    { code: 'GAS-VIT-092', name: 'Viton Gasket Seal Kit', desc: 'Size 92-D, Temp Grade High', unit: 'sets', qty: 1.0, status: 'TO ORDER' },
    { code: 'SCR-M8-35-SS', name: 'Socket Head Screw M8 x 35', desc: 'Stainless Steel A4-80 Grade', unit: 'units', qty: 48.0, status: 'IN STOCK' },
  ];

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-primary font-semibold mb-1">
            <Info className="w-4 h-4" />
            <span className="text-[10px] uppercase tracking-widest">Order Specification</span>
          </div>
          <h1 className="text-2xl font-bold text-on-surface">Required Materials: ORD-9928-TX</h1>
          <p className="text-on-surface-variant text-sm mt-1">Component: High-Pressure Hydraulic Manifold Assembly (Unit A-04)</p>
        </div>
        <div className="flex gap-3">
          <button className="px-4 py-2 bg-surface-container-highest text-on-surface text-sm font-medium rounded-md hover:bg-surface-dim transition-colors flex items-center gap-2">
            <Download className="w-4 h-4" /> Export Manifest
          </button>
          <button className="px-6 py-2 bg-gradient-to-r from-primary to-primary-container text-on-primary text-sm font-bold rounded-md shadow-sm flex items-center gap-2 hover:opacity-90 transition-opacity">
            <Wrench className="w-4 h-4" /> Bulk Order Missing
          </button>
        </div>
      </div>

      {/* Summary Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          { label: 'Total Line Items', val: '24', color: 'border-primary' },
          { label: 'Ready for Picking', val: '18', sub: '/ 24', color: 'border-surface-tint' },
          { label: 'Procurement Required', val: '06', color: 'border-tertiary', text: 'text-tertiary' },
          { label: 'Est. Lead Time', val: '4.2', sub: 'days', color: 'border-primary-container' },
        ].map((item, i) => (
          <div key={i} className={`bg-surface-container-lowest p-5 rounded-lg border-l-4 ${item.color} shadow-sm border border-slate-200/50`}>
            <div className="text-on-surface-variant text-[10px] font-bold uppercase mb-2 tracking-wider">{item.label}</div>
            <div className={`text-3xl font-bold ${item.text || 'text-on-surface'}`}>
              {item.val} {item.sub && <span className="text-sm font-normal text-on-surface-variant">{item.sub}</span>}
            </div>
          </div>
        ))}
      </div>

      {/* Material Table Container */}
      <div className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm border border-slate-200/50">
        <div className="p-4 bg-surface-container-high flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="relative w-full sm:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-outline w-4 h-4" />
            <input className="w-full bg-surface-container-highest border-none text-xs py-2 pl-10 rounded focus:ring-1 focus:ring-primary" placeholder="Filter materials..." type="text" />
          </div>
          <div className="flex gap-2">
            <button className="p-2 bg-surface-container-highest rounded hover:bg-surface-dim transition-colors">
              <Filter className="w-4 h-4" />
            </button>
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-surface-container-low">
                <th className="px-6 py-3 text-[10px] font-bold uppercase tracking-wider text-on-surface-variant">Material Code</th>
                <th className="px-6 py-3 text-[10px] font-bold uppercase tracking-wider text-on-surface-variant">Description</th>
                <th className="px-6 py-3 text-[10px] font-bold uppercase tracking-wider text-on-surface-variant">Unit</th>
                <th className="px-6 py-3 text-[10px] font-bold uppercase tracking-wider text-on-surface-variant">Quantity Required</th>
                <th className="px-6 py-3 text-[10px] font-bold uppercase tracking-wider text-on-surface-variant">Stock Status</th>
                <th className="px-6 py-3 text-[10px] font-bold uppercase tracking-wider text-on-surface-variant text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant/5">
              {materials.map((m, i) => (
                <tr key={i} className="hover:bg-surface-container-low transition-colors group">
                  <td className="px-6 py-4 font-mono text-xs font-bold text-primary">{m.code}</td>
                  <td className="px-6 py-4">
                    <div className="text-sm font-semibold text-on-surface">{m.name}</div>
                    <div className="text-[10px] text-on-surface-variant">{m.desc}</div>
                  </td>
                  <td className="px-6 py-4 text-xs font-medium text-on-surface-variant">{m.unit}</td>
                  <td className="px-6 py-4 text-sm font-bold text-on-surface">
                    {m.qty.toFixed(1)} <span className="text-[10px] text-outline font-normal">{m.unit === 'meters' ? 'm' : m.unit === 'units' ? 'ea' : 'set'}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold ${
                      m.status === 'IN STOCK' ? 'bg-surface-dim text-on-surface' : 'bg-tertiary-fixed text-on-tertiary-fixed-variant'
                    }`}>
                      <div className={`w-1.5 h-1.5 rounded-full mr-1.5 ${m.status === 'IN STOCK' ? 'bg-outline' : 'bg-tertiary'}`}></div>
                      {m.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-primary hover:bg-primary/10 p-1.5 rounded transition-colors">
                      <Wrench className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="p-4 border-t border-outline-variant/10 flex justify-between items-center text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">
          <div>Showing 1 - 5 of 24 Materials</div>
          <div className="flex gap-2">
            <button className="px-3 py-1 bg-surface-container-high rounded disabled:opacity-50 hover:bg-surface-dim transition-colors">Prev</button>
            <button className="px-3 py-1 bg-primary text-on-primary rounded hover:opacity-90 transition-colors">Next</button>
          </div>
        </div>
      </div>

      {/* Asymmetric Note & Documentation Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-surface-container-low p-6 rounded-xl border border-dashed border-outline-variant">
          <h3 className="text-sm font-bold uppercase tracking-wider mb-3 flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 text-tertiary" /> Procurement Priority Notes
          </h3>
          <div className="space-y-3">
            <div className="flex gap-4 p-3 bg-surface-container-lowest rounded shadow-sm border border-slate-200/50">
              <div className="text-tertiary font-bold text-xs shrink-0">CRITICAL</div>
              <div className="text-xs text-on-surface-variant leading-relaxed">
                SST-316-V12 Casting body is currently at 0 stock. Lead time from preferred supplier (MetalForge Ltd) is 14 days. Suggest alternative sourcing or early ordering to avoid production halt at Stage 3.
              </div>
            </div>
            <div className="flex gap-4 p-3 bg-surface-container-lowest rounded shadow-sm border border-slate-200/50">
              <div className="text-primary font-bold text-xs shrink-0">ADVISORY</div>
              <div className="text-xs text-on-surface-variant leading-relaxed">
                All standard fasteners (M8-35-SS) are allocated from general stock. Please verify physical count before production start.
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-surface-container-highest p-6 rounded-xl flex flex-col justify-center items-center text-center">
          <div className="w-16 h-16 rounded-full bg-primary-container/20 flex items-center justify-center mb-4">
            <Zap className="text-primary w-8 h-8" />
          </div>
          <h4 className="text-sm font-bold mb-1">CAD Blueprint Linked</h4>
          <p className="text-[10px] text-on-surface-variant mb-4">Drawing: HP-MN-A04-REV_D.pdf</p>
          <button className="w-full py-2 bg-on-surface text-surface text-xs font-bold rounded hover:opacity-90 transition-opacity">
            View Specification
          </button>
        </div>
      </div>
    </div>
  );
}
