import React from 'react';
import { X, CheckCircle, AlertCircle, Heart, TrendingUp, Shield, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ServiceDetail {
    id: string;
    title: string;
    bengaliTitle: string;
    description: string;
    fullDescription: string;
    symptoms: string[];
    treatments: string[];
    prevention: string[];
    icon: React.ReactNode;
}

interface ServiceDetailModalProps {
    service: ServiceDetail;
    onClose: () => void;
}

const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({ service, onClose }) => {
    return (
        <AnimatePresence>
            <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-[100] flex items-center justify-center p-4 overflow-y-auto">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 30 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 30 }}
                    className="bg-white dark:bg-slate-900 rounded-[3rem] shadow-[0_30px_60px_rgba(0,0,0,0.5)] max-w-5xl w-full my-8 overflow-hidden border border-white/10"
                >
                    {/* Header with Gradient */}
                    <div className="relative bg-gradient-to-br from-blue-700 via-blue-800 to-indigo-900 text-white p-6 sm:p-12 md:p-16 overflow-hidden">
                        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
                        <button
                            onClick={onClose}
                            className="absolute top-6 right-6 sm:top-10 sm:right-10 p-3 bg-white/10 hover:bg-white/20 rounded-2xl transition-all z-20 backdrop-blur-md border border-white/20"
                        >
                            <X className="w-6 h-6" />
                        </button>

                        <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-8 relative z-10">
                            <motion.div
                                initial={{ scale: 0.8, rotate: -10 }}
                                animate={{ scale: 1, rotate: 0 }}
                                className="p-5 sm:p-6 bg-white/15 backdrop-blur-md rounded-3xl border border-white/20 shadow-2xl"
                            >
                                <div className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center text-white">
                                    {service.icon}
                                </div>
                            </motion.div>
                            <div className="flex-1 space-y-4">
                                <div className="space-y-1">
                                    <div className="flex items-center justify-center sm:justify-start gap-2 mb-2 text-blue-200">
                                        <Sparkles className="w-4 h-4" />
                                        <span className="text-xs font-black uppercase tracking-[0.3em]">Medical Expertise</span>
                                    </div>
                                    <h2 className="text-2xl sm:text-5xl md:text-6xl font-black mb-2 leading-tight tracking-tight uppercase">
                                        {service.title}
                                    </h2>
                                    <p className="text-xl sm:text-3xl text-blue-300 font-black mb-4 flex items-center justify-center sm:justify-start gap-3">
                                        <span className="h-px w-8 bg-blue-300/30 hidden sm:block"></span>
                                        {service.bengaliTitle}
                                    </p>
                                </div>
                                <p className="text-base sm:text-xl text-blue-50/80 leading-relaxed max-w-3xl font-medium">
                                    {service.fullDescription}
                                </p>
                            </div>
                        </div>

                        {/* Decorative Wave */}
                        <div className="absolute bottom-0 left-0 right-0">
                            <svg viewBox="0 0 1200 120" className="w-full h-16 text-white dark:text-slate-900 fill-current">
                                <path d="M0,0 C300,80 600,80 900,40 L1200,60 L1200,120 L0,120 Z" />
                            </svg>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 md:p-16 space-y-12 sm:space-y-16 dark:bg-slate-900 transition-colors duration-500">
                        {/* Symptoms Section */}
                        <div className="space-y-8">
                            <div className="flex items-center gap-4">
                                <div className="p-4 bg-red-100 dark:bg-red-900/30 rounded-2xl shadow-inner">
                                    <AlertCircle className="w-8 h-8 text-red-600 dark:text-red-400" />
                                </div>
                                <h3 className="text-xl sm:text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tight">Symptoms</h3>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {service.symptoms.map((symptom, index) => (
                                    <motion.div
                                        key={index}
                                        whileHover={{ x: 10 }}
                                        className="flex items-center gap-4 p-5 bg-red-50 dark:bg-red-900/10 border border-red-100 dark:border-red-900/30 rounded-[1.5rem] transition-all group"
                                    >
                                        <div className="w-3 h-3 bg-red-500 dark:bg-red-400 rounded-full flex-shrink-0 animate-pulse"></div>
                                        <p className="text-slate-800 dark:text-slate-200 font-bold text-base sm:text-lg">{symptom}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Treatment Section */}
                        <div className="space-y-8">
                            <div className="flex items-center gap-4">
                                <div className="p-4 bg-emerald-100 dark:bg-emerald-900/30 rounded-2xl shadow-inner">
                                    <Heart className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
                                </div>
                                <h3 className="text-xl sm:text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tight">Treatment</h3>
                            </div>
                            <div className="space-y-4">
                                {service.treatments.map((treatment, index) => (
                                    <motion.div
                                        key={index}
                                        whileHover={{ scale: 1.01 }}
                                        className="flex items-start gap-5 p-7 bg-gradient-to-r from-emerald-50 to-green-50 dark:from-emerald-900/20 dark:to-green-900/20 border-l-8 border-emerald-500 rounded-[1.5rem] shadow-sm"
                                    >
                                        <CheckCircle className="w-7 h-7 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
                                        <p className="text-slate-800 dark:text-slate-200 font-bold text-lg sm:text-xl leading-relaxed">{treatment}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Prevention Section */}
                        <div className="space-y-8">
                            <div className="flex items-center gap-4">
                                <div className="p-4 bg-blue-100 dark:bg-blue-900/30 rounded-2xl shadow-inner">
                                    <Shield className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                                </div>
                                <h3 className="text-xl sm:text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tight">Prevention</h3>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {service.prevention.map((tip, index) => (
                                    <motion.div
                                        key={index}
                                        whileHover={{ y: -5 }}
                                        className="flex items-start gap-5 p-6 bg-blue-50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-900/30 rounded-[2rem] transition-all group"
                                    >
                                        <TrendingUp className="w-7 h-7 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" />
                                        <p className="text-slate-800 dark:text-slate-200 font-bold text-base sm:text-lg leading-relaxed">{tip}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* CTA Section */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="bg-gradient-to-r from-blue-700 to-indigo-800 dark:from-blue-600 dark:to-indigo-700 rounded-[2.5rem] sm:rounded-[3rem] p-6 sm:p-16 text-white text-center space-y-8 shadow-3xl border border-white/10"
                        >
                            <div className="space-y-4">
                                <h4 className="text-2xl sm:text-4xl font-black uppercase tracking-tight">Priority Healthcare</h4>
                                <p className="text-xl text-blue-200 max-w-2xl mx-auto font-medium">Dr. Arijit provides personalized, data-driven care for {service.title.toLowerCase()}</p>
                            </div>
                            <div className="flex flex-wrap gap-6 justify-center pt-4">
                                <motion.a
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
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
                                    className="bg-white text-blue-700 hover:bg-blue-50 font-black py-4 sm:py-5 px-8 sm:px-12 rounded-[1.5rem] transition-all shadow-2xl shadow-blue-950/20 uppercase tracking-[0.2em] text-[10px] sm:text-sm"
                                >
                                    Book Now
                                </motion.a>
                                <motion.button
                                    whileHover={{ backgroundColor: "rgba(255,255,255,0.1)" }}
                                    onClick={onClose}
                                    className="border-2 border-white/30 text-white font-black py-4 sm:py-5 px-8 sm:px-12 rounded-[1.5rem] transition-all uppercase tracking-[0.2em] text-[10px] sm:text-sm"
                                >
                                    Dismiss
                                </motion.button>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </AnimatePresence>
    );
};

export default ServiceDetailModal;
