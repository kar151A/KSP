import React from 'react';
import { AlertTriangle, Table, Map, Network, Copy, RefreshCw } from 'lucide-react';

interface ResponseCardProps {
  type: 'text' | 'table' | 'heatmap' | 'network' | 'stats';
  data: any;
}

export const ResponseCard: React.FC<ResponseCardProps> = ({ type, data }) => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(JSON.stringify(data, null, 2));
    alert("Data copied to investigation folder clipboard.");
  };

  switch (type) {
    case 'table':
      return (
        <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-4 w-full my-2">
          <div className="flex items-center justify-between mb-3 border-b pb-2">
            <div className="flex items-center gap-2 font-semibold text-gray-800">
              <Table className="h-4 w-4 text-blue-600" /> Compiled Structured Crime Records
            </div>
            <span className="text-xs font-bold px-2 py-0.5 bg-red-100 text-red-800 rounded">Risk Level: {data.riskLevel || 'High'}</span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="bg-slate-50 border-b border-gray-200 text-gray-600">
                  {data.headers?.map((h: string, idx: number) => <th key={idx} className="p-2.5 font-semibold">{h}</th>)}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {data.rows?.map((row: any[], rIdx: number) => (
                  <tr key={rIdx} className="hover:bg-slate-50/80 transition-colors">
                    {row.map((cell: any, cIdx: number) => <td key={cIdx} className="p-2.5 text-gray-700">{cell}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-3 flex justify-end gap-2">
            <button onClick={copyToClipboard} className="text-xs flex items-center gap-1 text-gray-500 hover:text-gray-800 bg-gray-50 border p-1 px-2 rounded">
              <Copy className="h-3 w-3" /> Copy Data
            </button>
          </div>
        </div>
      );

    case 'heatmap':
      return (
        <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-4 w-full my-2">
          <div className="flex items-center gap-2 font-semibold text-gray-800 border-b pb-2 mb-3">
            <Map className="h-4 w-4 text-amber-600" /> Geographic Coordinates (Leaflet Map Vector Input Data)
          </div>
          <div className="bg-slate-900 text-emerald-400 p-3 rounded-lg font-mono text-xs space-y-1">
            <p>// LEAFLET INTEGRATION LAYER METADATA</p>
            <p>Center Coordinate Cluster: {JSON.stringify(data.center)}</p>
            <p>Hotspot Density Index: {data.intensity}</p>
            <p>Radius Context Area: {data.radius}</p>
            <p>Recommended Extra Patrol Contingents: {data.recommendedPatrols}</p>
          </div>
          <p className="text-xs text-gray-500 mt-2">Ready to bind to interactive React-Leaflet map canvas component.</p>
        </div>
      );

    case 'network':
      return (
        <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-4 w-full my-2">
          <div className="flex items-center gap-2 font-semibold text-gray-800 border-b pb-2 mb-3">
            <Network className="h-4 w-4 text-purple-600" /> Cytoscape.js Relationship Schema
          </div>
          <div className="grid grid-cols-2 gap-4 text-xs">
            <div className="bg-gray-50 p-2.5 rounded border">
              <span className="font-bold block text-gray-600 mb-1">Extracted Entities (Nodes):</span>
              <ul className="list-disc pl-4 space-y-0.5 text-gray-700">
                {data.nodes?.map((n: string, idx: number) => <li key={idx}>{n}</li>)}
              </ul>
            </div>
            <div className="bg-gray-50 p-2.5 rounded border">
              <span className="font-bold block text-gray-600 mb-1">Identified Intersects (Edges):</span>
              <ul className="list-disc pl-4 space-y-0.5 text-gray-700">
                {data.edges?.map((e: any[], idx: number) => <li key={idx}>{e[0]} → {e[1]} ({e[2]})</li>)}
              </ul>
            </div>
          </div>
        </div>
      );

    default:
      return null;
  }
};