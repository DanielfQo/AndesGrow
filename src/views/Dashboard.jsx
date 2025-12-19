import SensorCard from '../components/SensorCard';
import { BarChart3 } from 'lucide-react';

export default function Dashboard() {
  return (
    <div className="p-4 app-content">
      <header className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Parcela: Lote Norte</h1>
        <p className="text-gray-500">Cultivo: Arándanos</p>
      </header>

      {/* F4: Alerta Crítica */}
      <div className="bg-blue-600 text-white p-4 rounded-2xl mb-6 flex items-center justify-between">
        <div>
          <p className="text-sm opacity-90">Recomendación:</p>
          <p className="font-bold">Iniciar riego de 20 min</p>
        </div>
        <button className="bg-white text-blue-600 px-4 py-2 rounded-xl text-sm font-bold">
          OK
        </button>
      </div>

      <h2 className="font-bold text-gray-700 mb-3">Estado Actual (F1)</h2>
      <SensorCard tipo="Humedad" valor="18.5" unidad="%" alerta={true} />
      <SensorCard tipo="Tensión" valor="45" unidad="cb" alerta={false} />
      
      <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
        <h3 className="font-bold text-gray-700 mb-4 flex items-center gap-2">
          <BarChart3 size={18} /> Tendencia 24h (F3)
        </h3>
        {/* Aquí iría un componente de Chart.js o Recharts */}
        <div className="h-32 bg-gray-50 rounded-lg flex items-end justify-between p-2">
            {[40, 60, 45, 30, 20, 18].map((h, i) => (
              <div key={i} className="w-8 bg-blue-400 rounded-t-sm" style={{height: `${h}%`}}></div>
            ))}
        </div>
      </div>
    </div>
  );
}