import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { 
  LayoutDashboard, MessageSquare, BarChart3, Map, Network, 
  FileSpreadsheet, Bell, Settings, LogOut, ShieldAlert 
} from 'lucide-react';

const Sidebar: React.FC = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const menuItems = [
    { name: 'Dashboard', path: '/', icon: LayoutDashboard },
    { name: 'AI Crime Assistant', path: '/assistant', icon: MessageSquare },
    { name: 'Crime Analytics', path: '/analytics', icon: BarChart3 },
    { name: 'Crime Hotspots', path: '/hotspots', icon: Map },
    { name: 'Criminal Network', path: '/network', icon: Network },
    { name: 'Investigation Reports', path: '/reports', icon: FileSpreadsheet },
    { name: 'Notifications', path: '/notifications', icon: Bell },
    { name: 'Settings', path: '/settings', icon: Settings },
  ];

  return (
    <aside className="w-64 text-white flex flex-col h-screen sticky top-0 border-r border-[#1E3E62]/80 bg-[linear-gradient(170deg,#06111f_0%,#0b192c_42%,#132944_100%)] shadow-2xl shadow-slate-950/30">
      <div className="absolute inset-0 pointer-events-none opacity-30 bg-[radial-gradient(circle_at_20%_0%,#35c4ff_0%,transparent_26%)]" />
      <div className="p-5 border-b border-[#1E3E62] flex items-center gap-3 relative z-10">
        <ShieldAlert className="text-red-500 h-8 w-8" />
        <div>
          <h1 className="font-bold tracking-wider text-sm">KSP INTELLIGENCE</h1>
          <p className="text-xs text-gray-400">Gov of Karnataka</p>
        </div>
      </div>
      
      <div className="p-4 bg-[#1E3E62]/24 border-b border-[#1E3E62] relative z-10">
        <div className="text-xs text-gray-400">Active Officer</div>
        <div className="font-medium text-sm">{user?.username}</div>
        <div className="text-xs text-amber-400 font-semibold mt-0.5">Role: {user?.role}</div>
      </div>

      <nav className="flex-1 p-3 space-y-1 overflow-y-auto relative z-10">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm transition-all duration-150 ${
                  isActive 
                    ? 'bg-[linear-gradient(135deg,#008DDA_0%,#0069c2_100%)] text-white font-medium shadow-md shadow-[#008DDA]/30 ring-1 ring-cyan-300/35' 
                    : 'text-gray-300 hover:bg-[#1E3E62]/95 hover:text-white hover:translate-x-0.5'
                }`
              }
            >
              <Icon className="h-4 w-4" />
              {item.name}
            </NavLink>
          );
        })}
      </nav>

      <div className="p-3 border-t border-[#1E3E62] relative z-10">
        <button
          onClick={() => { logout(); navigate('/login'); }}
          className="flex items-center gap-3 w-full px-4 py-2.5 text-sm text-red-300 hover:bg-red-900/30 rounded-xl transition-colors"
        >
          <LogOut className="h-4 w-4" />
          Secure Logout
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;