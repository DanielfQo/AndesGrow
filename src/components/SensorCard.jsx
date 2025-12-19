import { Droplets, Thermometer, AlertCircle, CheckCircle } from 'lucide-react';

export default function SensorCard({ tipo, valor, unidad, alerta }) {
  return (
    <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 mb-4">
      <div className="flex justify-between items-center mb-2">
        <span className="text-gray-500 text-sm font-medium flex items-center gap-1">
          {tipo === 'Humedad' ? <Droplets size={16} /> : <Thermometer size={16} />}
          {tipo}
        </span>
        {alerta ? (
          <span className="bg-red-100 text-red-600 px-2 py-1 rounded-full text-xs font-bold flex items-center gap-1">
            <AlertCircle size={12} /> NECESITA RIEGO
          </span>
        ) : (
          <span className="bg-green-100 text-green-600 px-2 py-1 rounded-full text-xs font-bold flex items-center gap-1">
            <CheckCircle size={12} /> ÓPTIMO
          </span>
        )}
      </div>
      <div className="text-3xl font-bold text-gray-800">
        {valor}<span className="text-lg text-gray-400 font-normal"> {unidad}</span>
      </div>
    </div>
  );
}