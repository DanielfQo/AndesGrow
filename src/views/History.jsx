import { Calendar, Droplets, ArrowDown, ArrowUp } from 'lucide-react';

export default function History() {
  // Datos simulados (F2: organizados por fecha y profundidad)
  const logs = [
    { id: 1, fecha: 'Hoy, 08:00 AM', humedad: '18.5%', tension: '45 cb', estado: 'Bajo' },
    { id: 2, fecha: 'Ayer, 06:00 PM', humedad: '22.1%', tension: '38 cb', estado: 'Óptimo' },
    { id: 3, fecha: 'Ayer, 08:00 AM', humedad: '24.5%', tension: '32 cb', estado: 'Óptimo' },
    { id: 4, fecha: '16 Dic, 05:00 PM', humedad: '15.2%', tension: '55 cb', estado: 'Crítico' },
  ];

  return (
    <div className="p-4 app-content">
      <header className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
          <Calendar className="text-blue-600" /> Histórico (F2)
        </h1>
        <p className="text-gray-500 text-sm">Registros de Sensor A - Profundidad 30cm</p>
      </header>

      <div className="space-y-3">
        {logs.map((log) => (
          <div key={log.id} className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm flex justify-between items-center">
            <div>
              <p className="text-xs text-gray-400 font-bold uppercase">{log.fecha}</p>
              <div className="flex gap-4 mt-1">
                <span className="text-sm font-medium flex items-center gap-1">
                  <Droplets size={14} className="text-blue-500" /> {log.humedad}
                </span>
                <span className="text-sm font-medium text-gray-600">
                  {log.tension}
                </span>
              </div>
            </div>
            <div className={`text-xs px-2 py-1 rounded-lg font-bold ${
              log.estado === 'Crítico' ? 'bg-red-50 text-red-500' : 'bg-green-50 text-green-500'
            }`}>
              {log.estado}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}