import React from 'react';
import { MockChart } from '../components/shared/MockCharts';

const CrimeAnalytics: React.FC = () => {
  return (
    <div className="p-8 space-y-6 overflow-y-auto h-[calc(100vh-4rem)]">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Advanced Analytics Matrix</h1>
        <p className="text-xs text-gray-500">Aggregated structural records across state police systems.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <MockChart title="Monthly Incident Progression Curve" type="line" />
        <MockChart title="Distribution of Typologies" type="pie" />
        <MockChart title="Inter-District Crime Volume Weight" type="bar" />
        <MockChart title="Top Reporting Stations Matrix" type="bar" />
        <MockChart title="Current Case Resolution Ratios" type="pie" />
        <MockChart title="Temporal Scatter (Time of Offense)" type="radar" />
      </div>
    </div>
  );
};

export default CrimeAnalytics;