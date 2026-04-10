import React from 'react';
import { 
  ChevronRight, 
  Printer, 
  Share2, 
  Check, 
  Settings2, 
  Download, 
  ExternalLink,
  FileText,
  Box,
  AlertCircle,
  Search,
  ZoomIn
} from 'lucide-react';

import { ViewType } from '../types';

export default function PieceDetailView({ id, onBack, onViewChange }: { id: string, onBack: () => void, onViewChange?: (view: ViewType) => void }) {
  return (
    <div className="animate-in slide-in-from-right duration-500">
      {/* Back Navigation & Breadcrumb */}
      <div className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2 text-on-surface-variant text-[10px] uppercase tracking-widest font-bold">
            <button onClick={onBack} className="hover:text-primary transition-colors">Orders</button>
            <ChevronRight className="w-3 h-3" />
            <span>OF-2934-B</span>
            <ChevronRight className="w-3 h-3" />
            <span className="text-primary">{id}</span>
          </div>
          <h1 className="text-3xl font-extrabold text-on-surface tracking-tight">Main Frame Support Pin</h1>
        </div>
        <div className="flex gap-3">
          <button className="px-5 py-2.5 bg-surface-container-highest text-on-surface-variant font-semibold rounded-md border-b-2 border-transparent hover:border-outline-variant transition-all flex items-center gap-2">
            <Printer className="w-4 h-4" />
            Label
          </button>
          <button className="px-5 py-2.5 bg-gradient-to-r from-primary to-primary-container text-on-primary font-semibold rounded-md shadow-sm flex items-center gap-2 hover:opacity-90 transition-opacity">
            <Share2 className="w-4 h-4" />
            Export CAD
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Specs & Progress */}
        <div className="lg:col-span-8 space-y-8">
          {/* Main Specs Bento */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-1 rounded-xl overflow-hidden shadow-sm border border-slate-200/50">
            <div className="bg-surface-container-low p-6">
              <span className="text-[10px] uppercase font-bold text-on-surface-variant tracking-wider">Piece ID</span>
              <p className="text-2xl font-black text-primary mt-1">MF-2024-0882</p>
            </div>
            <div className="bg-surface-container-low p-6">
              <span className="text-[10px] uppercase font-bold text-on-surface-variant tracking-wider">Material</span>
              <p className="text-2xl font-black text-on-surface mt-1">Stainless 316L</p>
            </div>
            <div className="bg-surface-container-low p-6">
              <span className="text-[10px] uppercase font-bold text-on-surface-variant tracking-wider">Weight</span>
              <div className="flex items-baseline gap-1 mt-1">
                <p className="text-2xl font-black text-on-surface">12.45</p>
                <p className="text-xs font-bold text-on-surface-variant">kg</p>
              </div>
            </div>
            <div className="bg-surface-container-highest p-6 md:col-span-3 flex flex-wrap items-center justify-between gap-6">
              <div className="flex gap-12">
                <div>
                  <span className="text-[10px] uppercase font-bold text-outline tracking-widest">Length</span>
                  <p className="text-lg font-bold text-on-surface">450.00 <span className="text-xs text-outline">mm</span></p>
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-outline tracking-widest">Width</span>
                  <p className="text-lg font-bold text-on-surface">120.00 <span className="text-xs text-outline">mm</span></p>
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-outline tracking-widest">Thickness</span>
                  <p className="text-lg font-bold text-on-surface">25.50 <span className="text-xs text-outline">mm</span></p>
                </div>
              </div>
              <div className="flex items-center gap-2 px-3 py-1 bg-tertiary-fixed rounded-full text-on-tertiary-fixed font-bold text-[10px] uppercase tracking-tighter">
                <AlertCircle className="w-4 h-4 fill-on-tertiary-fixed/20" />
                Critical Tolerance: +/- 0.02
              </div>
            </div>
          </div>

          {/* Visual Progress Tracker */}
          <div className="bg-surface-container-lowest p-8 rounded-xl relative overflow-hidden shadow-sm border border-slate-200/50">
            <div className="absolute left-0 top-0 w-1.5 h-full bg-surface-tint"></div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-on-surface-variant mb-8 flex items-center gap-2">
              <Settings2 className="w-5 h-5 text-primary" />
              Manufacturing Lifecycle
            </h3>
            <div className="relative">
              {/* Connecting Line */}
              <div className="absolute top-5 left-0 w-full h-1 bg-surface-container-highest"></div>
              <div className="absolute top-5 left-0 w-1/2 h-1 bg-primary"></div>
              <div className="relative flex justify-between">
                {[
                  { label: 'Material Allocation', date: 'Aug 12, 08:30', status: 'completed' },
                  { label: 'Cutting', date: 'Aug 14, 11:20', status: 'completed' },
                  { label: 'Machining', status: 'active' },
                  { label: 'QC Inspection', status: 'pending' },
                  { label: 'Assembly', status: 'pending' },
                ].map((step, i) => (
                  <div key={i} className="flex flex-col items-center text-center">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center z-10 border-4 border-surface-container-lowest ${
                      step.status === 'completed' ? 'bg-primary text-on-primary' :
                      step.status === 'active' ? 'bg-surface-container-lowest text-primary border-primary' :
                      'bg-surface-container-highest text-outline'
                    }`}>
                      {step.status === 'completed' ? <Check className="w-5 h-5" /> : <Box className="w-5 h-5" />}
                    </div>
                    <span className={`mt-3 text-[10px] font-bold uppercase tracking-tight ${step.status === 'pending' ? 'text-outline' : 'text-on-surface-variant'}`}>
                      {step.label}
                    </span>
                    {step.date && <span className="text-[9px] text-outline">{step.date}</span>}
                    {step.status === 'active' && (
                      <span className="px-2 py-0.5 mt-1 bg-secondary-fixed text-on-secondary-fixed rounded text-[8px] font-black uppercase">In Progress</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Attached Revisions */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold uppercase tracking-widest text-on-surface-variant flex items-center gap-2">
                <FileText className="w-5 h-5 text-primary" />
                Attached Revisions
              </h3>
              <button className="text-[10px] font-bold text-primary uppercase border-b border-primary hover:text-primary-container transition-colors">Upload Revision</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-surface-container-low p-4 rounded-lg flex items-center gap-4 group cursor-pointer hover:bg-surface-container-high transition-colors border border-slate-200/50">
                <div className="w-12 h-12 bg-white rounded border border-outline-variant flex items-center justify-center">
                  <FileText className="text-primary w-6 h-6" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-bold text-on-surface">MF-2024-0882_v3.pdf</p>
                  <p className="text-[10px] text-outline uppercase font-medium">Final Tech Drawing • 4.2MB</p>
                </div>
                <Download className="w-5 h-5 text-outline group-hover:text-primary transition-colors" />
              </div>
              <div className="bg-surface-container-low p-4 rounded-lg flex items-center gap-4 group cursor-pointer hover:bg-surface-container-high transition-colors border border-slate-200/50">
                <div className="w-12 h-12 bg-white rounded border border-outline-variant flex items-center justify-center">
                  <Box className="text-primary w-6 h-6" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-bold text-on-surface">3D_Model_Support_Pin.step</p>
                  <p className="text-[10px] text-outline uppercase font-medium">Step File • 12.8MB</p>
                </div>
                <ExternalLink className="w-5 h-5 text-outline group-hover:text-primary transition-colors" />
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Quick Actions & Technical Specs */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-surface-container-highest p-6 rounded-xl space-y-6 shadow-sm">
            <h3 className="text-sm font-black uppercase tracking-tighter text-on-surface">Quick Actions</h3>
            <div className="space-y-3">
              <button className="w-full py-4 px-6 bg-white text-on-surface font-bold rounded-lg border-l-4 border-primary shadow-sm hover:bg-slate-50 transition-all flex items-center justify-between group">
                <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-primary" />
                  <span>Mark Cutting Finished</span>
                </div>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="w-full py-4 px-6 bg-white text-on-surface font-bold rounded-lg border-l-4 border-secondary shadow-sm hover:bg-slate-50 transition-all flex items-center justify-between group">
                <div className="flex items-center gap-3">
                  <Settings2 className="w-5 h-5 text-secondary" />
                  <span>Ready for Assembly</span>
                </div>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            <div className="pt-4 border-t border-outline-variant/30">
              <p className="text-[10px] text-outline font-bold uppercase tracking-widest mb-3">Operator Notes</p>
              <div className="bg-surface-container-low p-3 rounded text-xs text-on-surface-variant leading-relaxed italic">
                "Edge deburring required on the secondary flange. Material hardness verified at 220 HB."
              </div>
            </div>
          </div>

          <div className="rounded-xl overflow-hidden bg-white border border-outline-variant/20 shadow-lg">
            <div className="p-4 bg-surface-container-low border-b border-outline-variant/10 flex justify-between items-center">
              <span className="text-[10px] font-bold uppercase text-on-surface-variant">Technical Render</span>
              <ZoomIn className="w-4 h-4 text-outline cursor-pointer" />
            </div>
            <div className="h-64 w-full bg-slate-100 flex items-center justify-center relative">
              <img 
                alt="Machined Part Reference" 
                className="w-full h-full object-contain p-8" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCU4CC3BDC0A20nltjYeNH8TF8u_JDBHGWBt6arf1yuNt9hTay2DlfQblfIoTco5qgyJ3pmku5Ci6v-zKeWmXB9roVogK-IlWcmTmausPyq69TPfIy5brOPSyqW6cpREdwDzEe9Euo_MvBAD9C8JQC6uPSWHDa0evoow5xBqhxS8-Cu5oQBQWvAPOXxvycGzvrXg8DA-_Tg01EbCXOopG8bv4WRdaXtzDl-l572qK5uMGg83LeO-n3i7Nk43-XuuBE5VJZlldFNXNc"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-4 right-4 bg-primary/90 text-white px-2 py-1 rounded text-[8px] font-black uppercase backdrop-blur-sm">Isometric View</div>
            </div>
          </div>

          <div className="p-6 border border-outline-variant/20 rounded-xl space-y-4 bg-surface-container-lowest shadow-sm">
            <h3 className="text-sm font-bold text-on-surface">Logistics Context</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center text-xs">
                <span className="text-on-surface-variant">Storage Bin:</span>
                <span className="font-bold">B-12 / RACK-4</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-on-surface-variant">Next Workcenter:</span>
                <span className="font-bold">Surface Polishing</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-on-surface-variant">Due Date:</span>
                <span className="font-bold text-tertiary">Aug 22, 2024</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
