import React from 'react';
import { Network, Cpu } from 'lucide-react';

const CriminalNetwork: React.FC = () => {
  return (
    <div className="p-8 space-y-6 flex flex-col h-[calc(100vh-4rem)]">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Relational Syndicate Network Graph</h1>
        <p className="text-xs text-gray-500">Visual mapping connecting criminal nodes, shared telephony assets, and vehicles.</p>
      </div>

      <div className="flex-1 bg-[#0B192C] border border-[#1E3E62] rounded-2xl relative overflow-hidden flex items-center justify-center shadow-2xl">
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[linear-gradient(to_right,#1E3E62_1px,transparent_1px),linear-gradient(to_bottom,#1E3E62_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        
        <div className="z-10 max-w-lg p-6 bg-slate-950/90 rounded-xl border border-[#1E3E62] text-center shadow-xl">
          <Network className="h-10 w-10 text-purple-400 mx-auto mb-3" />
          <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-2">Cytoscape.js Relationship Visualization Engine</h3>
          <p className="text-xs text-slate-400 font-mono leading-relaxed">
            FUTURE INTEGRATION: Node-link schema binds directly to system relational databases. Pre-configured endpoints return JSON structures containing suspect identity correlations, physical hideouts, and vehicle registrations.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CriminalNetwork;