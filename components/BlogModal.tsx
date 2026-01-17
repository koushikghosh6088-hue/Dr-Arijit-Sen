import React from 'react';
import { X, Calendar, User, Tag, Clock, Share2, Sparkles, BookOpen } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { BlogPost } from '../types';

interface BlogModalProps {
    post: BlogPost;
    onClose: () => void;
}

const BlogModal: React.FC<BlogModalProps> = ({ post, onClose }) => {
    return (
        <AnimatePresence>
            <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-[100] flex items-center justify-center p-4 md:p-8 overflow-y-auto">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 30 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: 30 }}
                    className="bg-white dark:bg-slate-900 rounded-[3rem] shadow-[0_30px_60px_rgba(0,0,0,0.5)] max-w-5xl w-full max-h-[90vh] overflow-hidden flex flex-col md:flex-row relative border border-white/10"
                >
                    {/* Close Button Mobile/Desktop Combined */}
                    <button
                        onClick={onClose}
                        className="absolute top-6 right-6 z-[110] p-3 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-2xl text-white border border-white/20 transition-all"
                    >
                        <X className="w-6 h-6" />
                    </button>

                    {/* Image Section */}
                    <div className="w-full md:w-5/12 h-64 md:h-auto relative overflow-hidden group">
                        <img
                            src={post.imageUrl}
                            alt={post.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                        <div className="absolute bottom-10 left-10 text-white space-y-4">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="px-5 py-2 bg-blue-600 rounded-2xl text-xs font-black tracking-[0.2em] uppercase shadow-xl shadow-blue-500/30 inline-flex items-center gap-2"
                            >
                                <Tag className="w-3 h-3" />
                                {post.category}
                            </motion.div>
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-xl sm:text-3xl font-black leading-tight uppercase tracking-tight"
                            >
                                {post.title}
                            </motion.h2>
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="flex-1 overflow-y-auto p-6 md:p-16 space-y-10 bg-white dark:bg-slate-900 dark:text-white custom-scrollbar transition-colors duration-500">
                        {/* Header Info Desktop */}
                        <div className="hidden md:block space-y-6">
                            <div className="flex items-center gap-4">
                                <span className="px-6 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-2xl text-xs font-black tracking-[0.3em] uppercase border border-blue-200/20 shadow-inner">
                                    {post.category}
                                </span>
                                <div className="h-px flex-1 bg-slate-100 dark:bg-slate-800"></div>
                                <Sparkles className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                            </div>
                            <h2 className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white leading-tight uppercase tracking-tight">
                                {post.title}
                            </h2>
                        </div>

                        {/* Meta Info */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 py-8 border-y border-slate-100 dark:border-slate-800">
                            {[
                                { icon: Calendar, label: "Date", value: post.date },
                                { icon: User, label: "Expertise", value: post.author },
                                { icon: Clock, label: "Reading", value: "5 MIN READ" }
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-center gap-4 group">
                                    <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-2xl text-blue-600 dark:text-blue-400 shadow-inner border border-slate-100 dark:border-slate-700 group-hover:bg-blue-600 group-hover:text-white transition-all">
                                        <item.icon className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500 mb-1">{item.label}</p>
                                        <p className="text-sm font-black text-slate-700 dark:text-slate-200 tracking-tight uppercase">{item.value}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Post Content */}
                        <div className="prose prose-slate dark:prose-invert max-w-none">
                            <p className="text-slate-600 dark:text-slate-300 text-lg sm:text-xl leading-relaxed font-medium first-letter:text-6xl first-letter:font-black first-letter:text-blue-600 first-letter:dark:text-blue-500 first-letter:mr-4 first-letter:float-left first-letter:uppercase">
                                {post.content}
                            </p>

                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                className="mt-12 p-8 bg-blue-50 dark:bg-blue-900/10 rounded-[2.5rem] border-l-8 border-blue-600 dark:border-blue-500 shadow-2xl shadow-blue-500/5 relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 p-4 opacity-10">
                                    <BookOpen className="w-24 h-24" />
                                </div>
                                <p className="text-blue-900 dark:text-blue-300 font-black italic text-2xl leading-relaxed relative z-10">
                                    "Wellness is not just the absence of disease, it's a dynamic state of mind, body, and spirit."
                                </p>
                                <div className="flex items-center gap-3 mt-6 relative z-10">
                                    <div className="h-px w-10 bg-blue-600"></div>
                                    <p className="text-blue-700 dark:text-blue-400 text-sm font-black uppercase tracking-[0.3em]">DR. ARIJIT SEN</p>
                                </div>
                            </motion.div>

                            <p className="text-slate-600 dark:text-slate-300 text-xl leading-relaxed mt-12 font-medium">
                                Continuing this journey, our primary goal is to empower every reader with evidence-based medical knowledge. In an era of information overload, Dr. Arijit Sen focuses on distilling complex medical concepts into actionable health insights. Stay tuned for more expert clinical perspectives.
                            </p>
                        </div>

                        {/* Footer Info */}
                        <div className="pt-10 flex items-center justify-between border-t border-slate-100 dark:border-slate-800">
                            <div className="flex items-center gap-5">
                                <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center font-black text-white text-xl shadow-2xl shadow-blue-500/40">
                                    AS
                                </div>
                                <div>
                                    <p className="font-black text-slate-900 dark:text-white text-lg leading-none mb-2 uppercase tracking-tight">Dr. Arijit Sen</p>
                                    <p className="text-xs text-slate-400 dark:text-slate-500 font-black uppercase tracking-[0.2em]">Consultant & Resident Specialist</p>
                                </div>
                            </div>
                            <motion.button
                                whileHover={{ scale: 1.1, rotate: 5 }}
                                whileTap={{ scale: 0.9 }}
                                className="p-4 bg-slate-50 dark:bg-slate-800 hover:bg-blue-600 dark:hover:bg-blue-600 text-slate-400 hover:text-white rounded-2xl transition-all shadow-lg"
                            >
                                <Share2 className="w-6 h-6" />
                            </motion.button>
                        </div>
                    </div>
                </motion.div>
            </div>

            <style>{`
                .custom-scrollbar::-webkit-scrollbar {
                    width: 8px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: transparent;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: #e2e8f0;
                    border-radius: 20px;
                    border: 2px solid transparent;
                    background-clip: content-box;
                }
                .dark .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: #334155;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: #cbd5e1;
                    background-clip: content-box;
                }
            `}</style>
        </AnimatePresence>
    );
};

export default BlogModal;
