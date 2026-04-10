import React from 'react';
import { 
  Search, 
  Calendar, 
  AlertTriangle, 
  Info, 
  PlusCircle,
  BarChart2
} from 'lucide-react';

import { ViewType } from '../types';

export default function EntryView({ onViewChange }: { onViewChange?: (view: ViewType) => void }) {
  return (
    <div className="max-w-4xl mx-auto space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <PlusCircle className="text-primary w-8 h-8" />
          <h1 className="text-2xl font-semibold text-on-surface tracking-tight">Manual OF Entry Form</h1>
        </div>
        <p className="text-on-surface-variant max-w-2xl text-sm leading-relaxed">
          Create a new manufacturing Fabrication Order (OF). Please ensure all technical specifications are cross-referenced with the design blueprints before submission.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Main Form Body */}
        <div className="md:col-span-8 bg-surface-container-lowest rounded-xl p-8 shadow-[0px_12px_32px_-4px_rgba(24,28,30,0.08)] border border-slate-200/50">
          <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 gap-y-6">
              {/* Client Field */}
              <div className="group">
                <label className="block text-[10px] font-bold uppercase tracking-widest text-outline mb-2">Client</label>
                <div className="relative">
                  <input 
                    className="w-full bg-surface-container-highest border-0 border-b-2 border-transparent focus:border-primary focus:ring-0 px-4 py-3 text-on-surface placeholder:text-outline transition-all duration-200 rounded-t-md" 
                    placeholder="Search or enter client name" 
                    type="text" 
                  />
                  <Search className="absolute right-4 top-3.5 text-outline w-5 h-5" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Order Number */}
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-outline mb-2">Order Number</label>
                  <input 
                    className="w-full bg-surface-container-highest border-0 border-b-2 border-transparent focus:border-primary focus:ring-0 px-4 py-3 text-on-surface placeholder:text-outline transition-all rounded-t-md" 
                    placeholder="OF-2024-0000" 
                    type="text" 
                  />
                </div>
                {/* Delivery Date */}
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-widest text-outline mb-2">Estimated Delivery Date</label>
                  <div className="relative">
                    <input 
                      className="w-full bg-surface-container-highest border-0 border-b-2 border-transparent focus:border-primary focus:ring-0 px-4 py-3 text-on-surface transition-all rounded-t-md" 
                      type="date" 
                    />
                  </div>
                </div>
              </div>

              {/* Project Name */}
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest text-outline mb-2">Project Name</label>
                <input 
                  className="w-full bg-surface-container-highest border-0 border-b-2 border-transparent focus:border-primary focus:ring-0 px-4 py-3 text-on-surface placeholder:text-outline transition-all rounded-t-md" 
                  placeholder="e.g. Turbine Assembly Phase II" 
                  type="text" 
                />
              </div>

              {/* Priority Level Selection */}
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-widest text-outline mb-3">Priority Level</label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                  {[
                    { id: 'low', label: 'Low', color: 'peer-checked:bg-secondary-container peer-checked:text-on-secondary-container' },
                    { id: 'medium', label: 'Medium', color: 'peer-checked:bg-secondary-container peer-checked:text-on-secondary-container', default: true },
                    { id: 'high', label: 'High', color: 'peer-checked:bg-tertiary-fixed peer-checked:text-on-tertiary-fixed-variant' },
                    { id: 'urgent', label: 'Urgent', color: 'peer-checked:bg-error-container peer-checked:text-on-error-container' },
                  ].map((p) => (
                    <label key={p.id} className="relative cursor-pointer">
                      <input className="peer sr-only" name="priority" type="radio" value={p.id} defaultChecked={p.default} />
                      <div className={`flex flex-col items-center justify-center p-4 rounded bg-surface-container-high text-on-surface-variant transition-all hover:bg-slate-200 ${p.color}`}>
                        <span className="text-sm font-bold">{p.label}</span>
                      </div>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            {/* Submission Actions */}
            <div className="pt-6 flex flex-col sm:flex-row items-center gap-4">
              <button className="w-full sm:w-auto px-8 py-3 bg-gradient-to-r from-primary to-primary-container text-on-primary font-semibold rounded-md shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all" type="submit">
                Create Order
              </button>
              <button className="w-full sm:w-auto px-8 py-3 text-primary font-semibold hover:bg-surface-container-low rounded-md transition-all" type="reset">
                Clear Form
              </button>
            </div>
          </form>
        </div>

        {/* Technical Specs Sidebar */}
        <div className="md:col-span-4 space-y-6">
          <div className="bg-surface-container-lowest p-6 rounded-xl relative overflow-hidden shadow-sm border border-slate-200/50">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-surface-tint"></div>
            <div className="text-[10px] font-bold uppercase tracking-widest text-outline mb-2">Plant Capacity</div>
            <div className="text-3xl font-bold text-on-surface">82%</div>
            <div className="mt-4 flex items-center gap-2">
              <div className="flex-1 h-1 bg-surface-container-highest rounded-full overflow-hidden">
                <div className="bg-primary h-full w-[82%]"></div>
              </div>
              <span className="text-[10px] font-bold text-primary">OPTIMAL</span>
            </div>
          </div>

          <div className="bg-surface-container-low p-6 rounded-xl border border-outline-variant/15">
            <h3 className="text-sm font-bold uppercase tracking-widest text-on-surface mb-4">Entry Guidelines</h3>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <Info className="text-tertiary w-5 h-5 shrink-0" />
                <p className="text-xs text-on-surface-variant leading-relaxed">Ensure the <span className="font-bold text-on-surface">Order Number</span> follows the ISO-9001 factory convention.</p>
              </li>
              <li className="flex gap-3">
                <AlertTriangle className="text-tertiary w-5 h-5 shrink-0" />
                <p className="text-xs text-on-surface-variant leading-relaxed"><span className="font-bold text-on-surface">Urgent</span> priority triggers immediate line supervisor notification.</p>
              </li>
            </ul>
          </div>

          <div className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm h-48 group border border-slate-200/50">
            <img 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCNspMxKQ-AewAitCyqjEENG8xrJ5Zj4nPbJDZ7CcizESvymUPlEgck4X_ZEeiUB6aNwT3MkvPni3zFG6CH8HSzdx2qGMoxwqKP5QEuhppNwjalPnaa6MLmXsiDQcBWowYcjnjWRt4lvxySSYpxOW_BH3En92zt9VspwqLzyyuhVWOzfZNQDo2Ape7B4EaGYDWy8LsNeol4kP8HeKfmY284J6wBbNVQIq5cDzc6cmPxBTLtDQDlBQzkrRDsXrUAeyFzBSureW3nZHc"
              alt="Technical CAD"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
