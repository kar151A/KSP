import React from 'react';
import { Map, Filter, Layers } from 'lucide-react';

const CrimeHotspots: React.FC = () => {
  return (
    <div className="p-8 space-y-6 flex flex-col h-[calc(100vh-4rem)]">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Geospatial Hotspots Tracking</h1>
          <p className="text-xs text-gray-500">Live coordinate cluster processing framework preview.</p>
        </div>
        <div className="flex gap-2">
          <button className="flex items-center gap-1.5 text-xs bg-white border p-2 rounded-lg font-semibold text-gray-700 shadow-sm"><Filter className="h-3.5 w-3.5" /> Set Geofence Filters</button>
          <button className="flex items-center gap-1.5 text-xs bg-white border p-2 rounded-lg font-semibold text-gray-700 shadow-sm"><Layers className="h-3.5 w-3.5" /> Map Canvas Layer</button>
        </div>
      </div>

      <div className="flex-1 bg-slate-900 border border-slate-800 rounded-2xl relative overflow-hidden flex items-center justify-center text-center shadow-inner">
        <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(#1E3E62_1px,transparent_1px)] [background-size:16px_16px]" />
        
        <div className="z-10 max-w-md p-6 bg-slate-950/80 rounded-xl border border-slate-800 shadow-xl backdrop-blur-sm">
          <Map className="h-10 w-10 text-emerald-500 mx-auto mb-3 animate-pulse" />
          <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-1">Interactive Map Vector Framework Layer</h3>
          <p className="text-xs text-slate-400 font-mono leading-relaxed">
            FUTURE INTEGRATION: Ready to bind Leaflet / OpenStreetMap elements. Targets mock array coordinates representing Bengaluru Central, Whitefield, and Hubli clusters.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CrimeHotspots;