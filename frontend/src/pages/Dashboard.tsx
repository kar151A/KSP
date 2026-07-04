import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { ShieldCheck, Activity, TrendingUp, AlertTriangle } from 'lucide-react';
import { MockChart } from '../components/shared/MockCharts';
import { apiUrl } from '../lib/api';

const Dashboard: React.FC = () => {
  const { user } = useAuth();
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    fetch(apiUrl('/api/v1/dashboard/metrics'))
      .then(res => res.json())
      .then(setData);
  }, []);

  if (!data) return <div className="p-8 text-sm font-mono text-ksp-slate-400 animate-pulse">Initializing Command Console Telemetry...</div>;

  return (
    <div className="p-8 space-y-8 overflow-y-auto h-[calc(100vh-4rem)] tech-grid">
      {/* Top Banner Header section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-ksp-slate-200 pb-5 gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-ksp-slate-900">National Intelligence Console</h1>
          <p className="text-xs text-ksp-slate-700 mt-1">
            Secure Node Deployment Framework Context: <span className="font-mono text-ksp-blue-600 bg-ksp-blue-50 px-1.5 py-0.5 rounded border border-ksp-blue-100 font-semibold">{user?.role} Workspace</span>
          </p>
        </div>
        <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg border border-ksp-slate-200 shadow-sm text-xs font-mono">
          <span className="w-2 h-2 rounded-full bg-ksp-status-green animate-pulse" />
          <span className="text-ksp-slate-700 font-medium">State Infrastructure Node Live</span>
        </div>
      </div>

      {/* Metrics Counter Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
        {Object.entries(data.stats).map(([key, val]: any) => (
          <div key={key} className="tactical-card p-5 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-1 h-full bg-ksp-blue-accent opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="block text-[10px] uppercase font-bold text-ksp-slate-700 tracking-wider font-mono">
              {key.replace(/([A-Z])/g, ' $1')}
            </span>
            <span className="block text-3xl font-extrabold text-ksp-slate-900 mt-2 font-mono tracking-tight">
              {val.toLocaleString()}
            </span>
          </div>
        ))}
      </div>

      {/* Two-Column Midsection Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Activity Feed Streams */}
        <div className="tactical-card p-5 col-span-1 flex flex-col">
          <div className="flex items-center gap-2 border-b border-ksp-slate-100 pb-3 mb-4 font-semibold text-ksp-slate-800 text-xs uppercase tracking-wider font-mono">
            <Activity className="h-4 w-4 text-ksp-blue-500" /> Operational Log Stream
          </div>
          <div className="space-y-4 flex-1">
            {data.recentActivities.map((act: any) => (
              <div key={act.id} className="text-xs border-b border-ksp-slate-100 pb-3 last:border-none last:pb-0">
                <div className="flex justify-between items-center text-ksp-slate-700 mb-1">
                  <span className="font-mono bg-ksp-slate-100 px-1 py-0.5 rounded text-[10px] border border-ksp-slate-200">{act.type}</span>
                  <span className="text-ksp-slate-700 text-[10px]">{act.time}</span>
                </div>
                <p className="text-ksp-slate-900 font-medium leading-relaxed">{act.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* AI Insight Panels */}
        <div className="tactical-card p-5 col-span-2 flex flex-col">
          <div className="flex items-center gap-2 border-b border-ksp-slate-100 pb-3 mb-4 font-semibold text-ksp-slate-800 text-xs uppercase tracking-wider font-mono">
            <ShieldCheck className="h-4 w-4 text-ksp-status-rose" /> AI Synthesized Threat Evaluation Matrix
          </div>
          <div className="space-y-3 flex-1">
            {data.aiInsights.map((ins: any) => (
              <div key={ins.id} className="p-4 bg-ksp-slate-50 border border-ksp-slate-200/80 rounded-xl flex items-start gap-3 transition-colors hover:bg-white">
                <span className={ins.severity === 'High' ? 'badge-critical' : 'badge-warning'}>
                  {ins.severity}
                </span>
                <p className="text-xs text-ksp-slate-900 leading-relaxed font-medium">{ins.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Visual Data Analytics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <MockChart title="State Crime Frequency Metrics Pipeline" type="line" />
        <MockChart title="Target Categorization Breakdown Profiles" type="pie" />
      </div>
    </div>
  );
};

export default Dashboard;