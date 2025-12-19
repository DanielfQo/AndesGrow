import { useState } from 'react';
import Dashboard from './views/Dashboard';
import History from './views/History';
import Config from './views/Config';
import BottomNav from './components/BottomNav';

function App() {
  const [activeTab, setActiveTab] = useState('dash');

  return (
    <div className="max-w-md mx-auto bg-gray-50 h-screen relative shadow-2xl overflow-hidden flex flex-col">
      {/* Status Bar Simulación */}
      <div className="h-10 bg-white flex justify-between px-6 items-end pb-2 text-xs font-bold text-gray-800">
        <span>9:41</span>
        <div className="flex gap-2">
          <span>📶</span><span>🔋</span>
        </div>
      </div>

      {/* Renderizado Condicional de Vistas */}
      <main className="flex-1 overflow-hidden">
        {activeTab === 'dash' && <Dashboard />}
        {activeTab === 'hist' && <History />}
        {activeTab === 'conf' && <Config />}
      </main>

      <BottomNav active={activeTab} setActive={setActiveTab} />
    </div>
  );
}

export default App;