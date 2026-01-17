
import React from 'react';
import { HeartPulse, Mail, MapPin, Phone, ArrowUpRight } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="footer" className="bg-[#020617] text-white pt-24 pb-12 transition-colors duration-500 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-20 border-b border-slate-900">

          {/* Brand */}
          <div className="space-y-8">
            <div className="flex items-center gap-2">
              <div className="p-2 sm:p-2.5 bg-blue-600 rounded-xl sm:rounded-2xl shadow-lg shadow-blue-500/20">
                <HeartPulse className="w-5 h-5 sm:w-6 h-6 text-white" />
              </div>
              <span className="text-xl sm:text-3xl font-black tracking-tight uppercase">
                Dr. <span className="text-blue-500">Arijit</span> Sen
              </span>
            </div>
            <p className="text-slate-400 leading-relaxed font-medium">
              Dr. Arijit provides world-class medical consultation focusing on hypertension, diabetes, and critical care management.
            </p>
            <div className="flex gap-4">
              {['FB', 'TW', 'LI', 'YT'].map((s) => (
                <div key={s} className="w-12 h-12 bg-slate-900 rounded-2xl flex items-center justify-center text-xs font-black hover:bg-blue-600 transition-all cursor-pointer border border-slate-800 hover:border-blue-500 shadow-xl">
                  {s}
                </div>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="space-y-8">
            <h4 className="text-xl font-black uppercase tracking-widest text-slate-200">Quick Links</h4>
            <ul className="space-y-4 text-slate-400 font-bold">
              {[
                { label: 'Home', href: '#home' },
                { label: 'About Us', href: '#about' },
                { label: 'Services', href: '#services' },
                { label: 'Our Blogs', href: '#blog' },
                { label: 'Contact', href: '#footer' }
              ].map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="hover:text-blue-400 transition-colors flex items-center gap-2 group text-sm uppercase tracking-wide">
                    <ArrowUpRight className="w-4 h-4 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-8">
            <h4 className="text-xl font-black uppercase tracking-widest text-slate-200">Contact Info</h4>
            <ul className="space-y-6">
              <li className="flex gap-5 group">
                <div className="w-14 h-14 bg-slate-900 rounded-[1.25rem] flex items-center justify-center shrink-0 group-hover:bg-blue-600 transition-all border border-slate-800 group-hover:border-blue-500 shadow-xl">
                  <Mail className="w-6 h-6 text-blue-400 group-hover:text-white" />
                </div>
                <div>
                  <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] mb-1">Email Us</p>
                  <p className="font-bold text-slate-200 text-sm break-all">senarijitronaldo7@gmail.com</p>
                </div>
              </li>
              <li className="flex gap-5 group">
                <div className="w-14 h-14 bg-slate-900 rounded-[1.25rem] flex items-center justify-center shrink-0 group-hover:bg-blue-600 transition-all border border-slate-800 group-hover:border-blue-500 shadow-xl">
                  <MapPin className="w-6 h-6 text-blue-400 group-hover:text-white" />
                </div>
                <div>
                  <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] mb-1">Clinic Venue</p>
                  <p className="font-bold text-slate-200 text-sm">Mahesh, Serampore, WB</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Appointment CTA */}
          <div className="space-y-8">
            <h4 className="text-xl font-black uppercase tracking-widest text-slate-200">Appointment</h4>
            <div className="bg-slate-900/50 p-8 rounded-[2rem] border border-slate-800 space-y-6 shadow-2xl">
              <p className="text-slate-400 text-sm font-medium leading-relaxed">Ready to consult? Book your slot now for a comprehensive health review.</p>
              <a
                href="#appointment"
                className="w-full bg-blue-600 hover:bg-blue-500 py-4 font-black rounded-2xl transition-all flex items-center justify-center gap-2 uppercase tracking-widest text-xs shadow-lg shadow-blue-500/20"
              >
                BOOK NOW <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        <div className="pt-12 flex flex-col sm:flex-row justify-between items-center gap-8 text-slate-500 text-xs font-black uppercase tracking-[0.1em]">
          <p>© 2024 Dr. Arijit Sen. Crafted for Excellence.</p>
          <div className="flex gap-10">
            <a href="#" className="hover:text-blue-400 transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
