import React, { useEffect, useState } from 'react';
import { FileText, Download, Share2, Plus, Filter } from 'lucide-react';
import { apiUrl } from '../lib/api';

const InvestigationReports: React.FC = () => {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    fetch(apiUrl('/api/v1/reports/list'))
      .then(res => res.json())
      .then(setReports);
  }, []);

  return (
    <div className="p-8 space-y-6 overflow-y-auto h-[calc(100vh-4rem)]">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Compiled Investigation Reports Dossier</h1>
          <p className="text-xs text-gray-500">Official summaries compiled and vetted via structural police clearance.</p>
        </div>
        <button className="flex items-center gap-1.5 text-xs bg-[#008DDA] text-white font-bold p-2.5 rounded-lg shadow-md hover:bg-[#1E3E62] transition-colors">
          <Plus className="h-3.5 w-3.5" /> Initialize Fresh Report
        </button>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
        <div className="p-4 border-b bg-slate-50 flex gap-2 items-center text-xs font-semibold text-gray-600">
          <Filter className="h-3.5 w-3.5 text-gray-400" /> Filter Criteria Configuration Placeholders Active
        </div>
        <table className="w-full text-left border-collapse text-xs">
          <thead>
            <tr className="bg-slate-50/50 border-b font-bold text-gray-500">
              <th className="p-3.5">Report ID</th>
              <th className="p-3.5">Dossier Classification Title</th>
              <th className="p-3.5">Generation Date</th>
              <th className="p-3.5">Authoring Officer</th>
              <th className="p-3.5">District Context</th>
              <th className="p-3.5">Clearance Status</th>
              <th className="p-3.5 text-right">Operational Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-gray-700">
            {reports.map((rep: any) => (
              <tr key={rep.id} className="hover:bg-slate-50/60 transition-colors">
                <td className="p-3.5 font-mono font-bold text-gray-900">{rep.id}</td>
                <td className="p-3.5 font-medium text-blue-900">{rep.title}</td>
                <td className="p-3.5">{rep.date}</td>
                <td className="p-3.5">{rep.author}</td>
                <td className="p-3.5">{rep.district}</td>
                <td className="p-3.5">
                  <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${rep.status === 'Approved' ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'}`}>
                    {rep.status}
                  </span>
                </td>
                <td className="p-3.5 text-right space-x-2">
                  <button title="Download PDF Blueprint" className="inline-flex p-1.5 border rounded hover:bg-gray-50 text-gray-600"><Download className="h-3.5 w-3.5" /></button>
                  <button title="Transmit Node Link" className="inline-flex p-1.5 border rounded hover:bg-gray-50 text-gray-600"><Share2 className="h-3.5 w-3.5" /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InvestigationReports;