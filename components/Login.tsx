
import React, { useState } from 'react';
import { Mail, Lock, ArrowRight, HeartPulse } from 'lucide-react';

interface LoginProps {
  onLogin: (email: string) => void;
  onCancel: () => void;
}

const Login: React.FC<LoginProps> = ({ onLogin, onCancel }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && password) {
      onLogin(email);
    }
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm">
      <div className="bg-white w-full max-w-md rounded-[2.5rem] shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300">
        <div className="p-10 space-y-8">
          <div className="text-center space-y-2">
            <div className="inline-flex p-3 bg-blue-600 rounded-2xl mb-4">
              <HeartPulse className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-black text-slate-900">Patient Login</h2>
            <p className="text-slate-500 font-medium">Access your appointments and history</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@example.com"
                  className="w-full bg-slate-50 border border-slate-200 py-5 pl-14 pr-5 rounded-2xl outline-none focus:border-blue-500 transition-colors font-medium text-slate-900"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Password</label>
              <div className="relative">
                <Lock className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full bg-slate-50 border border-slate-200 py-5 pl-14 pr-5 rounded-2xl outline-none focus:border-blue-500 transition-colors font-medium text-slate-900"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-500 text-white font-black py-5 rounded-2xl flex items-center justify-center gap-4 transition-all shadow-xl shadow-blue-200 text-lg uppercase tracking-widest"
            >
              Log In <ArrowRight className="w-6 h-6" />
            </button>
          </form>

          <button
            onClick={onCancel}
            className="w-full text-slate-400 hover:text-slate-600 font-bold text-sm transition-colors"
          >
            Cancel and Return Home
          </button>
        </div>
        
        <div className="bg-slate-50 p-6 text-center border-t border-slate-100">
          <p className="text-slate-500 text-sm font-medium">
            Don't have an account? <span className="text-blue-600 font-bold cursor-pointer">Register now</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
