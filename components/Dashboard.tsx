
import React, { useState } from 'react';
import { Calendar, Clock, User, XCircle, LogOut, CheckCircle2, AlertCircle, MapPin } from 'lucide-react';
import { INITIAL_USER_APPOINTMENTS } from '../constants';
import { UserAppointment } from '../types';

interface DashboardProps {
  userEmail: string;
  onLogout: () => void;
}

const Dashboard: React.FC<DashboardProps> = ({ userEmail, onLogout }) => {
  const [appointments, setAppointments] = useState<UserAppointment[]>(INITIAL_USER_APPOINTMENTS);

  const handleCancel = (id: string) => {
    if (confirm('Are you sure you want to cancel this appointment?')) {
      setAppointments(prev => prev.map(apt => 
        apt.id === id ? { ...apt, status: 'Cancelled' as const } : apt
      ));
    }
  };

  const getStatusStyle = (status: UserAppointment['status']) => {
    switch (status) {
      case 'Confirmed': return 'bg-emerald-100 text-emerald-700 border-emerald-200';
      case 'Pending': return 'bg-amber-100 text-amber-700 border-amber-200';
      case 'Cancelled': return 'bg-rose-100 text-rose-700 border-rose-200';
      default: return 'bg-slate-100 text-slate-700 border-slate-200';
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      {/* Dashboard Nav */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold">
              <User className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest leading-none">Logged in as</p>
              <h2 className="text-lg font-black text-slate-900">{userEmail.split('@')[0]}</h2>
            </div>
          </div>
          <button 
            onClick={onLogout}
            className="flex items-center gap-2 text-slate-500 hover:text-rose-600 font-bold transition-colors text-sm px-4 py-2 rounded-xl hover:bg-rose-50"
          >
            <LogOut className="w-4 h-4" /> Log Out
          </button>
        </div>
      </header>

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-12">
          {/* Welcome Header */}
          <div className="bg-[#0f172a] rounded-[2.5rem] p-10 lg:p-16 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 blur-[100px] rounded-full"></div>
            <div className="relative z-10 space-y-4">
              <h1 className="text-4xl lg:text-5xl font-black">Welcome Back!</h1>
              <p className="text-slate-400 text-lg max-w-xl">
                Manage your medical journey with Dr. Arijit. View your upcoming visits or schedule a new consultation.
              </p>
              <div className="flex gap-4 pt-4">
                <a href="#/" className="bg-blue-600 hover:bg-blue-500 px-8 py-4 rounded-xl font-bold transition-all shadow-xl shadow-blue-900/40">
                  New Appointment
                </a>
              </div>
            </div>
          </div>

          {/* Appointments Grid */}
          <div className="space-y-6">
            <h3 className="text-2xl font-black text-slate-900 px-2 flex items-center gap-3">
              Your Appointments <span className="text-sm font-bold bg-slate-200 text-slate-600 px-2 py-1 rounded-md">{appointments.length}</span>
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {appointments.map((apt) => (
                <div key={apt.id} className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-md transition-all space-y-6">
                  <div className="flex justify-between items-start">
                    <div className="space-y-1">
                      <p className="text-xs font-black text-slate-400 uppercase tracking-widest">{apt.type} Consultation</p>
                      <h4 className="text-xl font-black text-slate-900">{apt.doctorName} (MBBS Hons)</h4>
                    </div>
                    <span className={`px-4 py-1.5 rounded-full text-xs font-bold border ${getStatusStyle(apt.status)}`}>
                      {apt.status}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-3 text-slate-600">
                      <div className="p-2 bg-slate-50 rounded-lg">
                        <Calendar className="w-4 h-4 text-blue-600" />
                      </div>
                      <span className="font-bold text-sm">{apt.date}</span>
                    </div>
                    <div className="flex items-center gap-3 text-slate-600">
                      <div className="p-2 bg-slate-50 rounded-lg">
                        <Clock className="w-4 h-4 text-blue-600" />
                      </div>
                      <span className="font-bold text-sm">{apt.time}</span>
                    </div>
                  </div>

                  {apt.type === 'Offline' && (
                    <div className="flex items-center gap-3 text-slate-500 text-sm">
                      <MapPin className="w-4 h-4 text-slate-400" />
                      <span className="font-medium">Polymedica Clinic, Mahesh</span>
                    </div>
                  )}

                  <div className="pt-2 flex gap-3">
                    {apt.status !== 'Cancelled' && (
                      <button 
                        onClick={() => handleCancel(apt.id)}
                        className="flex-1 flex items-center justify-center gap-2 bg-slate-50 hover:bg-rose-50 hover:text-rose-600 text-slate-500 py-4 rounded-xl font-bold transition-all border border-slate-100 hover:border-rose-100"
                      >
                        <XCircle className="w-4 h-4" /> Cancel Appointment
                      </button>
                    )}
                    {apt.status === 'Cancelled' && (
                      <button className="flex-1 bg-slate-100 text-slate-400 py-4 rounded-xl font-bold cursor-not-allowed">
                        Appointment Cancelled
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {appointments.length === 0 && (
              <div className="bg-white p-20 rounded-[2.5rem] text-center space-y-4 border border-slate-100">
                <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto text-slate-300">
                  <AlertCircle className="w-10 h-10" />
                </div>
                <h4 className="text-xl font-bold text-slate-900">No appointments found</h4>
                <p className="text-slate-500">You haven't scheduled any consultations yet.</p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
