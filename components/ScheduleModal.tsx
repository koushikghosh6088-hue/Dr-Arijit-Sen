import React from 'react';
import { X, Clock, Calendar, MapPin, Video, Info, Sparkles, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ScheduleModalProps {
    onClose: () => void;
}

const ScheduleModal: React.FC<ScheduleModalProps> = ({ onClose }) => {
    return (
        <AnimatePresence>
            <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-[100] flex items-center justify-center p-4 overflow-y-auto">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 30 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: 30 }}
                    className="bg-white dark:bg-slate-900 rounded-[3rem] shadow-[0_30px_60px_rgba(0,0,0,0.5)] max-w-3xl w-full my-8 overflow-hidden border border-white/10"
                >
                    {/* Header */}
                    <div className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white p-6 sm:p-10 rounded-t-[3rem] relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
                        <button
                            onClick={onClose}
                            className="absolute top-6 right-6 p-3 bg-white/10 hover:bg-white/20 rounded-2xl transition-all z-10 border border-white/20"
                        >
                            <X className="w-6 h-6" />
                        </button>
                        <div className="flex items-center gap-6 relative z-10">
                            <motion.div
                                initial={{ rotate: -10, scale: 0.8 }}
                                animate={{ rotate: 0, scale: 1 }}
                                className="p-4 bg-white/20 backdrop-blur-md rounded-2xl shadow-xl border border-white/30"
                            >
                                <Calendar className="w-8 h-8" />
                            </motion.div>
                            <div>
                                <div className="flex items-center gap-2 mb-1">
                                    <Sparkles className="w-4 h-4 text-blue-200" />
                                    <span className="text-xs font-black uppercase tracking-[0.3em] text-blue-200">Official Hours</span>
                                </div>
                                <h2 className="text-2xl sm:text-4xl font-black tracking-tight uppercase">Medical Schedule</h2>
                            </div>
                        </div>
                    </div>

                    {/* Schedule Content */}
                    <div className="p-6 md:p-14 space-y-12 dark:bg-slate-900 transition-colors duration-500">
                        {/* Weekly Schedule */}
                        <div className="space-y-6">
                            <h3 className="text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tight flex items-center gap-3">
                                <Clock className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                                Availability Timeline
                            </h3>
                            <div className="space-y-4">
                                {/* Saturday - Sunday */}
                                <motion.div
                                    whileHover={{ x: 10 }}
                                    className="bg-blue-50/50 dark:bg-blue-900/10 border-l-8 border-blue-600 dark:border-blue-500 p-4 sm:p-6 rounded-2xl shadow-sm border border-blue-100/20"
                                >
                                    <div className="flex justify-between items-center">
                                        <div className="space-y-1">
                                            <p className="font-black text-xl text-slate-900 dark:text-white uppercase tracking-tight">Weekend Clinics</p>
                                            <p className="text-blue-600 dark:text-blue-400 font-bold flex items-center gap-2">
                                                <ChevronRight className="w-4 h-4" /> Comprehensive Consultations
                                            </p>
                                            <p className="text-sm text-slate-600 dark:text-slate-400 font-medium">Saturday & Sunday</p>
                                        </div>
                                        <div className="text-right bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-inner border border-blue-100/50 dark:border-slate-700">
                                            <p className="font-black text-slate-900 dark:text-white text-lg">09:00 - 18:00</p>
                                            <p className="text-[10px] font-black text-blue-600 dark:text-blue-400 uppercase tracking-widest">By Booking</p>
                                        </div>
                                    </div>
                                </motion.div>

                                {/* Monday - Friday */}
                                <motion.div
                                    whileHover={{ x: 10 }}
                                    className="bg-slate-50 dark:bg-slate-800/50 border-l-8 border-slate-400 dark:border-slate-600 p-4 sm:p-6 rounded-2xl shadow-sm border border-slate-200/20"
                                >
                                    <div className="flex justify-between items-center">
                                        <div className="space-y-1">
                                            <p className="font-black text-xl text-slate-900 dark:text-white uppercase tracking-tight">Weekday Rounds</p>
                                            <p className="text-slate-600 dark:text-slate-400 font-bold flex items-center gap-2">
                                                <ChevronRight className="w-4 h-4" /> ICU & Critical Care
                                            </p>
                                            <p className="text-sm text-slate-600 dark:text-slate-400 font-medium">Monday to Friday</p>
                                        </div>
                                        <div className="text-right bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-inner border border-slate-100 dark:border-slate-700">
                                            <p className="font-black text-slate-900 dark:text-white text-lg">24/7 CALL</p>
                                            <p className="text-[10px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-widest">Emergency Only</p>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>

                        {/* Appointment Types */}
                        <div className="space-y-6">
                            <h3 className="text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tight">Service Modalities</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <motion.div
                                    whileHover={{ scale: 1.02 }}
                                    className="bg-slate-50 dark:bg-slate-800 p-6 rounded-[2rem] border-2 border-slate-100 dark:border-slate-700 group hover:border-blue-500 dark:hover:border-blue-400 transition-all shadow-sm"
                                >
                                    <div className="flex items-center gap-5">
                                        <div className="p-4 bg-blue-100 dark:bg-blue-900/30 rounded-2xl text-blue-600 dark:text-blue-400 shadow-inner group-hover:bg-blue-600 group-hover:text-white transition-all">
                                            <MapPin className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <p className="font-black text-slate-900 dark:text-white text-lg uppercase tracking-tight">Physical</p>
                                            <p className="text-sm text-slate-600 dark:text-slate-400 font-bold">Clinic Visits</p>
                                        </div>
                                    </div>
                                </motion.div>
                                <motion.div
                                    whileHover={{ scale: 1.02 }}
                                    className="bg-slate-50 dark:bg-slate-800 p-6 rounded-[2rem] border-2 border-slate-100 dark:border-slate-700 group hover:border-emerald-500 dark:hover:border-emerald-400 transition-all shadow-sm"
                                >
                                    <div className="flex items-center gap-5">
                                        <div className="p-4 bg-emerald-100 dark:bg-emerald-900/30 rounded-2xl text-emerald-600 dark:text-emerald-400 shadow-inner group-hover:bg-emerald-600 group-hover:text-white transition-all">
                                            <Video className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <p className="font-black text-slate-900 dark:text-white text-lg uppercase tracking-tight">Digital</p>
                                            <p className="text-sm text-slate-600 dark:text-slate-400 font-bold">Tele-Health</p>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>

                        {/* Important Notes */}
                        <div className="bg-amber-50 dark:bg-amber-900/10 border-2 border-amber-100 dark:border-amber-900/30 rounded-[2.5rem] p-8 space-y-4 shadow-inner relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
                                <Info className="w-32 h-32 text-amber-900" />
                            </div>
                            <h4 className="font-black text-amber-900 dark:text-amber-400 flex items-center gap-3 uppercase tracking-widest text-sm">
                                <Info className="w-5 h-5" /> Clinical Directives
                            </h4>
                            <ul className="space-y-3 relative z-10">
                                {[
                                    "Prior booking is mandatory for weekend clinics",
                                    "Weekday emergencies handled on-call basis",
                                    "Video slots must be confirmed 24h prior",
                                    "Mandatory: Bring previous health reports"
                                ].map((note, idx) => (
                                    <li key={idx} className="flex items-center gap-3 text-amber-800 dark:text-amber-300 font-bold text-sm">
                                        <div className="w-1.5 h-1.5 bg-amber-500 rounded-full"></div>
                                        {note}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-6 pt-6">
                            <motion.a
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                href="#appointment"
                                onClick={(e) => {
                                    e.preventDefault();
                                    onClose();
                                    setTimeout(() => {
                                        const element = document.getElementById('appointment');
                                        if (element) {
                                            const offset = 80;
                                            const bodyRect = document.body.getBoundingClientRect().top;
                                            const elementRect = element.getBoundingClientRect().top;
                                            const elementPosition = elementRect - bodyRect;
                                            const offsetPosition = elementPosition - offset;
                                            window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                                        }
                                    }, 100);
                                }}
                                className="flex-[2] bg-blue-600 hover:bg-blue-700 text-white font-black py-6 px-10 rounded-[1.5rem] transition-all shadow-2xl shadow-blue-500/30 uppercase tracking-[0.2em] text-sm text-center"
                            >
                                Secure Your Slot
                            </motion.a>
                            <motion.button
                                whileHover={{ backgroundColor: "rgba(0,0,0,0.05)" }}
                                onClick={onClose}
                                className="flex-1 px-10 py-6 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-black rounded-[1.5rem] transition-all uppercase tracking-[0.2em] text-sm border-2 border-transparent hover:border-slate-200 dark:hover:border-slate-700"
                            >
                                Dismiss
                            </motion.button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
};

export default ScheduleModal;
