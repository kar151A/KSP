import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { ShieldAlert, KeyRound, User } from 'lucide-react';
import { apiUrl } from '../lib/api';

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await fetch(apiUrl('/api/v1/auth/login'), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        throw new Error('Authentication failed. Hint: use password ksp@123');
      }

      const data = await response.json();
      login(data);
      navigate('/');
    } catch (err: any) {
      setError(err.message || 'Server connection error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-screen min-h-screen bg-[linear-gradient(145deg,#09172a_0%,#0c2038_44%,#143256_100%)] flex items-center justify-center p-4 relative overflow-hidden">
      <div className="absolute -top-28 -left-24 h-80 w-80 rounded-full bg-cyan-400/20 blur-3xl" />
      <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-blue-600/20 blur-3xl" />

      <div className="w-full max-w-md bg-white/97 border border-[#1E3E62]/50 rounded-2xl shadow-2xl shadow-black/35 overflow-hidden relative z-10">
        <div className="bg-[linear-gradient(140deg,#102642_0%,#1E3E62_55%,#1b4d84_100%)] p-6 text-center text-white flex flex-col items-center gap-2">
          <ShieldAlert className="h-12 w-12 text-red-500" />
          <div>
            <h2 className="text-xl font-bold tracking-wider">KSP CRIME INTELLIGENCE HUB</h2>
            <p className="text-xs text-gray-300 mt-1">Law Enforcement Secure Authentication Entryway</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="p-8 space-y-5">
          {error && (
            <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded-lg font-medium">
              {error}
            </div>
          )}

          <div>
            <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Officer Username / Badge Context</label>
            <div className="relative">
              <User className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
              <input
                type="text"
                required
                placeholder="e.g., Inspector Patil"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full pl-10 pr-4 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:border-[#008DDA] focus:ring-4 focus:ring-blue-100"
              />
            </div>
            <p className="text-[10px] text-gray-400 mt-1">Enter your title (e.g. Admin, Constable) to evaluate role dashboard configurations</p>
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Security Core Passcode</label>
            <div className="relative">
              <KeyRound className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
              <input
                type="password"
                required
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-4 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:border-[#008DDA] focus:ring-4 focus:ring-blue-100"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-2.5 bg-[linear-gradient(135deg,#008DDA_0%,#006ac7_100%)] text-white font-bold text-sm rounded-lg hover:brightness-95 transition-all focus:outline-none shadow-md shadow-blue-500/30"
          >
            {loading ? "Decrypting Token Vault..." : "Establish Secure Session"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;