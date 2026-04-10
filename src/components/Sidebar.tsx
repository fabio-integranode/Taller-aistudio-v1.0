import React from 'react';
import { 
  LayoutDashboard, 
  Package, 
  Layers, 
  Scissors, 
  BarChart3, 
  PlusSquare, 
  HelpCircle, 
  History,
  Plus
} from 'lucide-react';
import { ViewType } from '../types';

interface SidebarProps {
  currentView: ViewType;
  onViewChange: (view: ViewType) => void;
}

export default function Sidebar({ currentView, onViewChange }: SidebarProps) {
  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'orders', label: 'Orders', icon: Package },
    { id: 'materials', label: 'Materials', icon: Layers },
    { id: 'cutting', label: 'Cutting', icon: Scissors },
    { id: 'progress', label: 'Progress', icon: BarChart3 },
    { id: 'entry', label: 'Entry', icon: PlusSquare },
  ];

  return (
    <aside className="flex flex-col fixed left-0 top-0 h-full w-64 z-40 bg-slate-100 dark:bg-slate-950 border-r border-slate-200 dark:border-slate-800">
      <div className="p-6">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 bg-primary-container flex items-center justify-center rounded-lg shadow-sm">
            <Package className="text-white w-6 h-6" />
          </div>
          <div>
            <h1 className="text-slate-900 dark:text-slate-100 font-black text-sm tracking-normal">Plant Floor</h1>
            <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Unit 04 - Sector B</p>
          </div>
        </div>

        <nav className="space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentView === item.id || (item.id === 'orders' && (currentView === 'order-detail' || currentView === 'piece-detail'));
            return (
              <button
                key={item.id}
                onClick={() => onViewChange(item.id as ViewType)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-md transition-all duration-200 ease-in-out font-sans text-xs uppercase tracking-wider font-bold ${
                  isActive
                    ? 'bg-slate-200 dark:bg-slate-800 text-blue-700 dark:text-blue-400 border-l-4 border-blue-600'
                    : 'text-slate-600 dark:text-slate-400 hover:bg-slate-200/50 dark:hover:bg-slate-800/50'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>
      </div>

      <div className="mt-auto p-6 border-t border-slate-200/50">
        <button 
          onClick={() => onViewChange('entry')}
          className="w-full bg-primary hover:bg-primary-container text-white py-3 rounded-md mb-6 flex items-center justify-center gap-2 transition-all shadow-md active:scale-95"
        >
          <Plus className="w-4 h-4" />
          <span className="text-[10px] font-bold uppercase tracking-widest">New Order</span>
        </button>

        <nav className="space-y-1">
          <button className="w-full flex items-center gap-3 text-slate-500 px-4 py-2 hover:bg-slate-200/50 rounded transition-all text-xs font-bold uppercase tracking-wider">
            <HelpCircle className="w-5 h-5" />
            <span>Support</span>
          </button>
          <button className="w-full flex items-center gap-3 text-slate-500 px-4 py-2 hover:bg-slate-200/50 rounded transition-all text-xs font-bold uppercase tracking-wider">
            <History className="w-5 h-5" />
            <span>Logs</span>
          </button>
        </nav>
      </div>
    </aside>
  );
}
