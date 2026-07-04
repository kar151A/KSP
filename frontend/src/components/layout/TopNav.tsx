import React from 'react';
import { useAuth } from '../../context/AuthContext';
import { ShieldCheck, UserCheck } from 'lucide-react';

const TopNav: React.FC = () => {
  const { user } = useAuth();

  return (
    <header className="h-16 ksp-glass border-b border-slate-200/60 flex items-center justify-between px-8 sticky top-0 z-10">
      <div className="flex items-center gap-2">
        <span className="text-[11px] font-semibold bg-blue-100/85 text-blue-800 px-3 py-1 rounded-full border border-blue-200 uppercase tracking-[0.12em]">
          Secure Intranet Zone
        </span>
      </div>
      
      <div className="flex items-center gap-4">
        <div className="text-right">
          <p className="text-xs text-gray-500 font-mono">{user?.badgeNumber}</p>
          <p className="text-sm font-semibold text-slate-800">State Server Node #4</p>
        </div>
        <div className="h-10 w-10 rounded-full bg-[linear-gradient(135deg,#dbeafe_0%,#c7e5ff_100%)] flex items-center justify-center border border-blue-200/80 shadow-inner shadow-blue-200/55">
          <UserCheck className="h-5 w-5 text-blue-900" />
        </div>
      </div>
    </header>
  );
};

export default TopNav;