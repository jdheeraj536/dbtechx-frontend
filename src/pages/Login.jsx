import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Dynamic Base URL Configuration matching port 5005
  const currentHost = window.location.hostname || 'localhost';
  const API_BASE = `http://${currentHost}:5005/api`;

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    // ⚡ Bypass Routing (Testing Mechanism matched with Leads state)
    if (email === 'admin@dbtechx.com' && password === 'admin123') {
      const dummyUserData = { token: 'dummy-token-dbtechx-2026', role: 'owner' };
      localStorage.setItem('adminToken', 'dummy-token-dbtechx-2026');
      localStorage.setItem('userRole', 'owner'); 
      localStorage.setItem('user', JSON.stringify(dummyUserData)); // Syncing with Leads.jsx auth check
      
      navigate('/admin/leads');
      return;
    }

    try {
      const response = await axios.post(`${API_BASE}/auth/login`, {
        email,
        password,
      });

      if (response.data.token) {
        localStorage.setItem('adminToken', response.data.token);
        
        // Handling nesting structured user objects safely
        const userObj = response.data.user || response.data;
        const role = userObj.role || 'owner';
        
        localStorage.setItem('userRole', role); 
        localStorage.setItem('user', JSON.stringify(userObj)); 

        // Role-based navigation tree
        if (role === 'owner') {
          navigate('/admin/dashboard'); 
        } else {
          navigate('/admin/leads'); 
        }
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Invalid Credentials! Server setup verify karein.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-900 px-4">
      <div className="max-w-md w-full bg-slate-800 p-8 rounded-2xl shadow-2xl border border-slate-700">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-extrabold text-blue-500 tracking-wide">DBTECHX ERP</h1>
          <p className="text-slate-400 mt-2 text-sm">Secure Admin Portal Login</p>
        </div>

        {error && (
          <div className="bg-red-500/10 border border-red-500 text-red-400 p-3 rounded-lg text-sm mb-4 text-center">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">Admin Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-blue-500 transition-colors text-base"
              placeholder="admin@dbtechx.com"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-blue-500 transition-colors text-base"
              placeholder="••••••••"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-lg shadow-blue-600/30 transition-all transform active:scale-95 disabled:opacity-50 cursor-pointer"
          >
            {loading ? 'Logging in...' : 'Sign In'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;