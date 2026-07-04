import React from 'react';
import { Database, ShieldAlert, Cpu, Sliders, Globe } from 'lucide-react';

const Settings: React.FC = () => {
  return (
    <div className="p-8 space-y-6 overflow-y-auto h-[calc(100vh-4rem)] max-w-4xl">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">System Parameters & Gateway Settings</h1>
        <p className="text-xs text-gray-500">Configure connection vectors, localization setups, and authorization levels.</p>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl shadow-sm divide-y">
        <div className="p-5 flex items-start gap-4">
          <Globe className="h-5 w-5 text-blue-600 mt-0.5" />
          <div className="flex-1 space-y-2">
            <h3 className="text-sm font-bold text-gray-800 uppercase tracking-wide">Language / Localization</h3>
            <select className="text-xs border p-2 rounded-md bg-white w-48 focus:outline-none focus:border-blue-500">
              <option>English (United Kingdom / India)</option>
              <option>ಕನ್ನಡ (Kannada)</option>
            </select>
          </div>
        </div>

        <div className="p-5 flex items-start gap-4">
          <Database className="h-5 w-5 text-slate-700 mt-0.5" />
          <div className="flex-1">
            <h3 className="text-sm font-bold text-gray-800 uppercase tracking-wide mb-1">PostgreSQL Relational Core Database Binding</h3>
            <p className="text-xs text-gray-400 font-mono bg-slate-50 p-2 rounded border border-dashed mb-2">
              FUTURE INTEGRATION LAYER: Set DATABASE_URL target endpoint inside backend/.env mapping configuration profiles.
            </p>
          </div>
        </div>

        <div className="p-5 flex items-start gap-4">
          <Cpu className="h-5 w-5 text-amber-600 mt-0.5" />
          <div className="flex-1">
            <h3 className="text-sm font-bold text-gray-800 uppercase tracking-wide mb-1">Google Gemini Large Language Model Integration Vector</h3>
            <p className="text-xs text-gray-400 font-mono bg-slate-50 p-2 rounded border border-dashed">
              FUTURE INTEGRATION LAYER: Map GEMINI_API_KEY environment string credentials. Enables fine-tuned custom system data token generation pipelines.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;