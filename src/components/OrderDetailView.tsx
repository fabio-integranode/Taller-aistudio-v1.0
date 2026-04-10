import React from 'react';
import { 
  Calendar, 
  Search, 
  Filter, 
  Download, 
  Printer, 
  ChevronLeft, 
  ChevronRight,
  RefreshCcw,
  Info,
  Layers,
  List
} from 'lucide-react';

import { ViewType } from '../types';

export default function OrderDetailView({ id, onPieceClick, onViewChange }: { id: string, onPieceClick: (pieceId: string) => void, onViewChange?: (view: ViewType) => void }) {
  const pieces = [
    { id: '#SH-9011-A', material: 'Steel Alloy 4140', specs: 'Dia: 42mm ± 0.05, Len: 156mm', station: 'CNC Lathe 04', progress: 100, lastAction: 'Finishing Pass', time: '12 min ago', status: 'Completed' },
    { id: '#SH-9011-B', material: 'Steel Alloy 4140', specs: 'Dia: 42mm ± 0.05, Len: 156mm', station: 'CNC Lathe 04', progress: 45, lastAction: 'Rough Milling', time: 'Just now', status: 'Processing' },
    { id: '#SH-9012-A', material: 'High-Carbon Plate', specs: 'Width: 200mm, Thk: 12.5mm', station: 'Plasma Cut 02', progress: 0, lastAction: '--', time: 'Awaiting queue', status: 'Pending' },
    { id: '#SH-8821-X', material: 'Aluminum 6061', specs: 'Custom Bracket, Anodize Grade', station: 'Quality Control', progress: 92, lastAction: 'Tolerance Breach', time: '5 min ago', status: 'Flagged' },
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      {/* Back Navigation */}
      <div className="flex items-center gap-2">
        <button 
          onClick={() => onViewChange?.('dashboard')}
          className="flex items-center gap-1 text-xs font-bold text-on-surface-variant hover:text-primary transition-colors uppercase tracking-widest"
        >
          <ChevronLeft className="w-4 h-4" /> Back to Dashboard
        </button>
      </div>

      {/* Summary Header */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-surface-container-lowest p-6 rounded-xl relative overflow-hidden group border border-slate-200/50 shadow-sm">
          <div className="absolute top-0 left-0 w-1 h-full bg-surface-tint"></div>
          <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-[10px] font-bold text-tertiary uppercase tracking-widest">Order Reference</span>
                <span className="bg-secondary-container text-on-secondary-container text-[10px] px-2 py-0.5 rounded font-bold uppercase">Priority: High</span>
              </div>
              <h2 className="text-2xl font-extrabold text-on-surface mb-2">{id}</h2>
              <p className="text-on-surface-variant text-sm flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                Created on Oct 24, 2023 · Estimated Completion: Nov 12, 2023
              </p>
            </div>
            <div className="text-right">
              <span className="inline-flex items-center px-4 py-2 bg-primary text-white text-sm font-bold rounded-lg shadow-md bg-gradient-to-br from-primary to-primary-container">
                <RefreshCcw className="mr-2 w-4 h-4 animate-spin-slow" />
                IN PRODUCTION
              </span>
            </div>
          </div>
          <div className="mt-8 grid grid-cols-3 gap-4 border-t border-surface-container-high pt-6">
            <div>
              <p className="text-[10px] font-bold text-outline uppercase tracking-wider mb-1">Total Pieces</p>
              <p className="text-xl font-bold text-on-surface">1,240 <span className="text-xs font-medium text-outline">Units</span></p>
            </div>
            <div>
              <p className="text-[10px] font-bold text-outline uppercase tracking-wider mb-1">Batch Yield</p>
              <p className="text-xl font-bold text-on-surface">98.2<span className="text-xs font-medium text-outline">%</span></p>
            </div>
            <div>
              <p className="text-[10px] font-bold text-outline uppercase tracking-wider mb-1">Elapsed Time</p>
              <p className="text-xl font-bold text-on-surface">42 <span className="text-xs font-medium text-outline">Hours</span></p>
            </div>
          </div>
        </div>

        <div className="bg-surface-container-low p-6 rounded-xl flex flex-col justify-between border border-slate-200/50 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-bold text-on-surface uppercase tracking-tight">Total Progress</h3>
            <span className="text-primary font-black text-lg">74%</span>
          </div>
          <div className="h-4 w-full bg-surface-container-highest rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-primary to-primary-container w-[74%] rounded-full"></div>
          </div>
          <div className="mt-6 flex flex-col gap-2">
            <div className="flex justify-between text-xs font-medium">
              <span className="text-on-surface-variant">Machining Completed</span>
              <span className="text-on-surface">918 / 1,240</span>
            </div>
            <div className="flex justify-between text-xs font-medium">
              <span className="text-on-surface-variant">Quality Control Checked</span>
              <span className="text-on-surface">880 / 1,240</span>
            </div>
          </div>
          <button className="mt-4 w-full text-center py-2 text-xs font-bold text-primary hover:bg-surface-container-highest rounded transition-colors">
            View Detailed Log
          </button>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="flex gap-1 p-1 bg-surface-container-low rounded-xl self-start border border-slate-200/50">
        <button className="px-6 py-2 bg-surface-container-lowest text-on-surface shadow-sm rounded-lg text-sm font-bold flex items-center gap-2">
          <List className="w-4 h-4" /> Pieces List
        </button>
        <button className="px-6 py-2 text-on-surface-variant hover:bg-surface-container-high transition-colors rounded-lg text-sm font-semibold flex items-center gap-2">
          <Info className="w-4 h-4" /> General Info
        </button>
        <button className="px-6 py-2 text-on-surface-variant hover:bg-surface-container-high transition-colors rounded-lg text-sm font-semibold flex items-center gap-2">
          <Layers className="w-4 h-4" /> Material Consumption
        </button>
      </div>

      {/* Primary Data: Pieces List Table */}
      <div className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm border border-slate-200/50">
        <div className="p-6 flex flex-col sm:flex-row justify-between items-center gap-4 bg-surface-container-highest/30">
          <div className="flex items-center gap-4 w-full sm:w-auto">
            <div className="relative w-full sm:w-64">
              <Search className="absolute inset-y-0 left-3 flex items-center text-outline w-4 h-4" />
              <input className="pl-10 pr-4 py-2 bg-surface border-none text-xs rounded-lg w-full focus:ring-2 focus:ring-primary" placeholder="Filter pieces by ID..." type="text" />
            </div>
            <button className="flex items-center gap-2 text-xs font-bold text-on-surface-variant hover:text-on-surface px-3 py-2 transition-colors">
              <Filter className="w-4 h-4" /> Filter Status
            </button>
          </div>
          <div className="flex gap-2">
            <button className="bg-surface-container-low hover:bg-surface-container-high p-2 rounded transition-colors">
              <Download className="w-4 h-4" />
            </button>
            <button className="bg-surface-container-low hover:bg-surface-container-high p-2 rounded transition-colors">
              <Printer className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead className="bg-surface-container-low">
              <tr>
                <th className="px-6 py-4 text-[10px] font-bold text-outline uppercase tracking-wider">Component ID</th>
                <th className="px-6 py-4 text-[10px] font-bold text-outline uppercase tracking-wider">Specifications</th>
                <th className="px-6 py-4 text-[10px] font-bold text-outline uppercase tracking-wider">Station</th>
                <th className="px-6 py-4 text-[10px] font-bold text-outline uppercase tracking-wider text-center">Progress</th>
                <th className="px-6 py-4 text-[10px] font-bold text-outline uppercase tracking-wider text-right">Last Action</th>
                <th className="px-6 py-4 text-[10px] font-bold text-outline uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y-0">
              {pieces.map((piece) => (
                <tr key={piece.id} className="hover:bg-surface-container-low transition-colors group cursor-pointer" onClick={() => onPieceClick(piece.id)}>
                  <td className="px-6 py-4">
                    <p className="text-sm font-bold text-primary">{piece.id}</p>
                    <p className="text-[10px] text-outline">{piece.material}</p>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-xs text-on-surface">{piece.specs}</p>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full ${piece.status === 'Flagged' ? 'bg-error' : piece.status === 'Completed' ? 'bg-primary' : 'bg-tertiary'}`}></div>
                      <span className="text-xs font-medium">{piece.station}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex flex-col items-center gap-1">
                      <span className={`text-[10px] font-bold ${piece.status === 'Flagged' ? 'text-error' : 'text-on-surface'}`}>{piece.progress}%</span>
                      <div className="w-24 h-1.5 bg-surface-container-highest rounded-full overflow-hidden">
                        <div className={`h-full ${piece.status === 'Flagged' ? 'bg-error' : 'bg-primary'}`} style={{ width: `${piece.progress}%` }}></div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <p className={`text-xs font-medium ${piece.status === 'Flagged' ? 'text-error' : ''}`}>{piece.lastAction}</p>
                    <p className="text-[10px] text-outline">{piece.time}</p>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 text-[10px] font-bold rounded-md uppercase ${
                      piece.status === 'Completed' ? 'bg-surface-dim text-on-surface' :
                      piece.status === 'Processing' ? 'bg-secondary-container text-on-secondary-container' :
                      piece.status === 'Flagged' ? 'bg-error-container text-on-error-container' :
                      'bg-surface-container-high text-outline'
                    }`}>
                      {piece.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="p-6 bg-surface-container-low/20 flex justify-between items-center border-t border-surface-container-high">
          <p className="text-xs text-on-surface-variant">Showing 4 of 1,240 components in this order</p>
          <div className="flex gap-1">
            <button className="px-3 py-1.5 bg-surface-container-lowest border border-surface-container-highest rounded text-xs font-bold text-outline hover:bg-slate-50 transition-colors">Prev</button>
            <button className="px-3 py-1.5 bg-primary text-white rounded text-xs font-bold">1</button>
            <button className="px-3 py-1.5 bg-surface-container-lowest border border-surface-container-highest rounded text-xs font-bold hover:bg-slate-50 transition-colors">2</button>
            <button className="px-3 py-1.5 bg-surface-container-lowest border border-surface-container-highest rounded text-xs font-bold hover:bg-slate-50 transition-colors">3</button>
            <span className="px-2 py-1 text-outline">...</span>
            <button className="px-3 py-1.5 bg-surface-container-lowest border border-surface-container-highest rounded text-xs font-bold hover:bg-slate-50 transition-colors">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}
