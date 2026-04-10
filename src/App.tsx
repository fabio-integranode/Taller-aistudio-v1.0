/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import DashboardView from './components/DashboardView';
import OrderDetailView from './components/OrderDetailView';
import PieceDetailView from './components/PieceDetailView';
import MaterialsView from './components/MaterialsView';
import CuttingView from './components/CuttingView';
import ProgressView from './components/ProgressView';
import EntryView from './components/EntryView';
import OrdersView from './components/OrdersView';
import { ViewType } from './types';

export default function App() {
  const [currentView, setCurrentView] = useState<ViewType>('dashboard');
  const [selectedOrderId, setSelectedOrderId] = useState<string | null>(null);
  const [selectedPieceId, setSelectedPieceId] = useState<string | null>(null);

  const handleOrderClick = (id: string) => {
    setSelectedOrderId(id);
    setCurrentView('order-detail');
  };

  const handlePieceClick = (id: string) => {
    setSelectedPieceId(id);
    setCurrentView('piece-detail');
  };

  const renderView = () => {
    switch (currentView) {
      case 'dashboard':
        return <DashboardView onOrderClick={handleOrderClick} />;
      case 'order-detail':
        return <OrderDetailView id={selectedOrderId || 'OF-88219'} onPieceClick={handlePieceClick} />;
      case 'piece-detail':
        return <PieceDetailView id={selectedPieceId || '#SH-9011-A'} onBack={() => setCurrentView('order-detail')} />;
      case 'materials':
        return <MaterialsView onViewChange={setCurrentView} />;
      case 'cutting':
        return <CuttingView onViewChange={setCurrentView} />;
      case 'progress':
        return <ProgressView onViewChange={setCurrentView} />;
      case 'entry':
        return <EntryView onViewChange={setCurrentView} />;
      case 'orders':
        return <OrdersView onOrderClick={handleOrderClick} onViewChange={setCurrentView} />;
      default:
        return <DashboardView onOrderClick={handleOrderClick} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex">
      <Sidebar currentView={currentView} onViewChange={setCurrentView} />
      
      <div className="flex-1 flex flex-col ml-64">
        <Topbar currentView={currentView} onViewChange={setCurrentView} />
        
        <main className="flex-1 overflow-y-auto p-8">
          {renderView()}
        </main>
      </div>
    </div>
  );
}
