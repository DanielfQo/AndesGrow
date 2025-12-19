import { Settings, Save, MapPin, Sprout, Droplets } from 'lucide-react';

export default function Config() {
  return (
    <div className="p-4 app-content">
      <header className="mb-6">
        <h1 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
          <Settings className="text-gray-600" /> Configuración (F5)
        </h1>
        <p className="text-gray-500 text-sm">Personaliza los umbrales de tu parcela</p>
      </header>

      <form className="space-y-6">
        {/* Información General */}
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2 flex items-center gap-2">
              <MapPin size={16}/> Nombre de la Parcela
            </label>
            <input type="text" className="w-full p-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none" placeholder="Ej: Lote Norte 01" />
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2 flex items-center gap-2">
              <Sprout size={16}/> Tipo de Cultivo
            </label>
            <select className="w-full p-3 bg-white border border-gray-200 rounded-xl outline-none">
              <option>Arándanos</option>
              <option>Paltos (Aguacate)</option>
              <option>Cítricos</option>
              <option>Uva de mesa</option>
            </select>
          </div>
        </div>

        {/* Umbrales de Alerta (F4) */}
        <div className="bg-blue-50 p-4 rounded-2xl space-y-4">
          <h3 className="font-bold text-blue-800 text-sm flex items-center gap-2">
            <Droplets size={16}/> Umbrales de Riego
          </h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-xs text-blue-600 font-bold">Mínimo (%)</label>
              <input type="number" defaultValue="20" className="w-full p-2 mt-1 rounded-lg border-none outline-none" />
            </div>
            <div>
              <label className="text-xs text-blue-600 font-bold">Máximo (%)</label>
              <input type="number" defaultValue="45" className="w-full p-2 mt-1 rounded-lg border-none outline-none" />
            </div>
          </div>
        </div>

        <button type="button" className="w-full bg-blue-600 text-white font-bold py-4 rounded-2xl flex items-center justify-center gap-2 shadow-lg shadow-blue-200 active:scale-95 transition-transform">
          <Save size={20} /> Guardar Cambios
        </button>
      </form>
    </div>
  );
}