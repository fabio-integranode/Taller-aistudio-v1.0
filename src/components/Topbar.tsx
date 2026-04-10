import React from 'react';
import { Bell, Settings, Search } from 'lucide-react';
import { ViewType } from '../types';

interface TopbarProps {
  currentView: ViewType;
  onViewChange: (view: ViewType) => void;
}

export default function Topbar({ currentView, onViewChange }: TopbarProps) {
  const navItems = [
    { id: 'dashboard', label: 'Dashboard' },
    { id: 'materials', label: 'Inventory' },
    { id: 'orders', label: 'Orders' },
  ];

  return (
    <header className="flex justify-between items-center h-16 px-6 w-full sticky top-0 z-50 bg-slate-50/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
      <div className="flex items-center gap-8">
        <span className="text-lg font-black tracking-tight text-slate-900 dark:text-slate-100">MachinedForge Pro</span>
        <nav className="hidden md:flex gap-6">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onViewChange(item.id as ViewType)}
              className={`pb-2 text-sm font-medium transition-colors ${
                currentView === item.id || (item.id === 'orders' && (currentView === 'order-detail' || currentView === 'piece-detail'))
                  ? 'text-blue-700 dark:text-blue-400 border-b-2 border-blue-700 dark:border-blue-400'
                  : 'text-slate-500 dark:text-slate-400 hover:text-blue-700'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative hidden sm:block">
          <span className="absolute inset-y-0 left-3 flex items-center text-slate-400">
            <Search className="w-4 h-4" />
          </span>
          <input 
            className="bg-slate-200/50 dark:bg-slate-800 border-none rounded-md pl-10 pr-4 py-1.5 text-sm w-64 focus:ring-2 focus:ring-primary" 
            placeholder="Search OF, client, or part..." 
            type="text" 
          />
        </div>
        
        <button className="p-2 text-slate-600 hover:bg-slate-100 rounded-full transition-colors relative">
          <Bell className="w-5 h-5" />
          <span className="absolute top-2 right-2 w-2 h-2 bg-error rounded-full border-2 border-slate-50"></span>
        </button>
        
        <button className="p-2 text-slate-600 hover:bg-slate-100 rounded-full transition-colors">
          <Settings className="w-5 h-5" />
        </button>
        
        <div className="h-8 w-[1px] bg-slate-200 dark:bg-slate-800 mx-2"></div>
        
        <div className="flex items-center gap-3">
          <div className="text-right hidden lg:block">
            <p className="text-xs font-bold text-slate-900">Alex Rivera</p>
            <p className="text-[10px] text-slate-500">Lead Tech</p>
          </div>
          <div className="w-8 h-8 rounded-full overflow-hidden border border-outline-variant">
            <img 
              alt="Technician Profile" 
              className="w-full h-full object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuANMwl_junFSaZE1c2C3wZAeloE-3Vkzi5wrNgRjs94dVOI19bAgE-yLp7VGNIZtFYjmwN3dytnUSAj3TOUZdsXPFDib7aVskw2Qfg9--h_634DFJGEd-DXtgQHjxH3VzSZM3OyvskRbsoIOv087ewGHfwrVnhPyu3D-LCrDwEeQtZJiaF-SISnHJwp0j6VBHXDadCZKRdmojHD2KLi0cQDD9cSICUGcNU6wrJmjs-_EGsxC3jalNpAtJ6bQZKG269Pe92Av7zn0ZY"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
