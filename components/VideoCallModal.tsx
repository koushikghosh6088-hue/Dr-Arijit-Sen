import React, { useState } from 'react';
import { X, Video, Clock, User, Phone, Mail, CheckCircle, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface VideoCallModalProps {
    onClose: () => void;
}

const VideoCallModal: React.FC<VideoCallModalProps> = ({ onClose }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        preferredDate: '',
        preferredTime: '',
        reason: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitted(true);
        setTimeout(() => {
            onClose();
        }, 5000);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <AnimatePresence>
            <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-[100] flex items-center justify-center p-4">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: 20 }}
                    className="bg-white dark:bg-slate-900 rounded-[2.5rem] shadow-[0_30px_60px_rgba(0,0,0,0.5)] max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-white/10"
                >
                    {isSubmitted ? (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="p-16 text-center space-y-8"
                        >
                            <div className="mx-auto w-24 h-24 bg-green-100 dark:bg-green-900/30 rounded-[2rem] flex items-center justify-center shadow-inner">
                                <CheckCircle className="w-12 h-12 text-green-600 dark:text-green-400" />
                            </div>
                            <div>
                                <h2 className="text-4xl font-black text-slate-900 dark:text-white mb-3">Request Sent!</h2>
                                <p className="text-xl text-slate-600 dark:text-slate-400 font-medium">Dr. Arijit will join you at the scheduled time.</p>
                                <div className="mt-8 flex justify-center">
                                    <div className="flex gap-2">
                                        {[0, 1, 2].map((i) => (
                                            <motion.div
                                                key={i}
                                                animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                                                transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
                                                className="w-2 h-2 bg-blue-600 rounded-full"
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ) : (
                        <>
                            {/* Header */}
                            <div className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white p-6 sm:p-10 rounded-t-[2.5rem] relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
                                <button
                                    onClick={onClose}
                                    className="absolute top-6 right-6 p-3 bg-white/10 hover:bg-white/20 rounded-2xl transition-all z-10"
                                >
                                    <X className="w-6 h-6" />
                                </button>
                                <div className="flex items-center gap-5 relative z-10">
                                    <div className="p-4 bg-white/20 backdrop-blur-md rounded-2xl shadow-xl">
                                        <Video className="w-8 h-8" />
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-2 mb-1">
                                            <Sparkles className="w-4 h-4 text-blue-300" />
                                            <span className="text-xs font-black uppercase tracking-[0.2em] text-blue-200">Virtual Clinic</span>
                                        </div>
                                        <h2 className="text-xl sm:text-3xl font-black tracking-tight">Tele-Consultation</h2>
                                    </div>
                                </div>
                            </div>

                            {/* Form */}
                            <form onSubmit={handleSubmit} className="p-5 sm:p-10 space-y-4 sm:space-y-8">
                                <div className="space-y-3">
                                    <label className="text-xs font-black text-slate-500 dark:text-slate-400 uppercase tracking-widest flex items-center gap-2">
                                        <User className="w-4 h-4 text-blue-600" />
                                        Patient Identification
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-slate-50 dark:bg-slate-800/50 border-2 border-slate-100 dark:border-slate-800 rounded-xl sm:rounded-2xl focus:border-blue-500 dark:focus:border-blue-400 focus:outline-none transition-all font-bold text-sm sm:text-base text-slate-900 dark:text-white"
                                        placeholder="Full Name"
                                    />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-3">
                                        <label className="text-xs font-black text-slate-500 dark:text-slate-400 uppercase tracking-widest flex items-center gap-2">
                                            <Mail className="w-4 h-4 text-blue-600" />
                                            Contact Email
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-slate-50 dark:bg-slate-800/50 border-2 border-slate-100 dark:border-slate-800 rounded-xl sm:rounded-2xl focus:border-blue-500 dark:focus:border-blue-400 focus:outline-none transition-all font-bold text-sm sm:text-base text-slate-900 dark:text-white"
                                            placeholder="email@example.com"
                                        />
                                    </div>
                                    <div className="space-y-3">
                                        <label className="text-xs font-black text-slate-500 dark:text-slate-400 uppercase tracking-widest flex items-center gap-2">
                                            <Phone className="w-4 h-4 text-blue-600" />
                                            Whatsapp Number
                                        </label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-slate-50 dark:bg-slate-800/50 border-2 border-slate-100 dark:border-slate-800 rounded-xl sm:rounded-2xl focus:border-blue-500 dark:focus:border-blue-400 focus:outline-none transition-all font-bold text-sm sm:text-base text-slate-900 dark:text-white"
                                            placeholder="+91"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-3">
                                        <label className="text-xs font-black text-slate-500 dark:text-slate-400 uppercase tracking-widest flex items-center gap-2">
                                            <Clock className="w-4 h-4 text-blue-600" />
                                            Select Date
                                        </label>
                                        <input
                                            type="date"
                                            name="preferredDate"
                                            value={formData.preferredDate}
                                            onChange={handleChange}
                                            required
                                            min={new Date().toISOString().split('T')[0]}
                                            className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-slate-50 dark:bg-slate-800/50 border-2 border-slate-100 dark:border-slate-800 rounded-xl sm:rounded-2xl focus:border-blue-500 dark:focus:border-blue-400 focus:outline-none transition-all font-bold text-sm sm:text-base text-slate-900 dark:text-white"
                                        />
                                    </div>
                                    <div className="space-y-3">
                                        <label className="text-xs font-black text-slate-500 dark:text-slate-400 uppercase tracking-widest flex items-center gap-2">
                                            Preferred Slot
                                        </label>
                                        <select
                                            name="preferredTime"
                                            value={formData.preferredTime}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-slate-50 dark:bg-slate-800/50 border-2 border-slate-100 dark:border-slate-800 rounded-xl sm:rounded-2xl focus:border-blue-500 dark:focus:border-blue-400 focus:outline-none transition-all font-bold text-sm sm:text-base text-slate-900 dark:text-white appearance-none cursor-pointer"
                                        >
                                            <option value="">Select time slot</option>
                                            <option value="09:00-10:00">09:00 AM - 10:00 AM</option>
                                            <option value="10:00-11:00">10:00 AM - 11:00 AM</option>
                                            <option value="11:00-12:00">11:00 AM - 12:00 PM</option>
                                            <option value="14:00-15:00">02:00 PM - 03:00 PM</option>
                                            <option value="15:00-16:00">03:00 PM - 04:00 PM</option>
                                            <option value="16:00-17:00">04:00 PM - 05:00 PM</option>
                                            <option value="17:00-18:00">05:00 PM - 06:00 PM</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <label className="text-xs font-black text-slate-500 dark:text-slate-400 uppercase tracking-widest">
                                        Brief Symptoms
                                    </label>
                                    <textarea
                                        name="reason"
                                        value={formData.reason}
                                        onChange={handleChange}
                                        rows={3}
                                        className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-slate-50 dark:bg-slate-800/50 border-2 border-slate-100 dark:border-slate-800 rounded-xl sm:rounded-2xl focus:border-blue-500 dark:focus:border-blue-400 focus:outline-none transition-all font-bold text-sm sm:text-base text-slate-900 dark:text-white resize-none"
                                        placeholder="Enter details..."
                                    />
                                </div>

                                <div className="flex gap-4 pt-4">
                                    <motion.button
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        type="submit"
                                        className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-black py-5 px-8 rounded-[1.5rem] transition-all shadow-2xl shadow-blue-500/20 uppercase tracking-widest text-sm"
                                    >
                                        Request Video Call
                                    </motion.button>
                                </div>
                            </form>
                        </>
                    )}
                </motion.div>
            </div>
        </AnimatePresence>
    );
};

export default VideoCallModal;
