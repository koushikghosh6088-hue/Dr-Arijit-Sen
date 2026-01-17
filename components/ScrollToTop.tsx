
import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ScrollToTop: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 500) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.button
                    initial={{ opacity: 0, y: 50, scale: 0.8 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 50, scale: 0.8 }}
                    whileHover={{
                        scale: 1.1,
                        y: -5,
                        boxShadow: "0 20px 40px -10px rgba(0,0,0,0.1)"
                    }}
                    whileTap={{ scale: 0.9 }}
                    onClick={scrollToTop}
                    className="fixed bottom-6 right-6 z-[60] group"
                    aria-label="Scroll to top"
                >
                    {/* Circular Tablet-like Container */}
                    <div className="relative p-0.5 bg-slate-200 dark:bg-slate-700 rounded-full shadow-lg border border-white/20 overflow-hidden">
                        {/* Main Surface */}
                        <div className="relative w-12 h-12 bg-white dark:bg-slate-800 rounded-full flex flex-col items-center justify-center gap-0.5 shadow-inner">
                            {/* Camera-like Detail (Tiny dot at top) */}
                            <div className="w-1 h-1 bg-slate-300 dark:bg-slate-600 rounded-full opacity-60"></div>

                            {/* The Arrow */}
                            <motion.div
                                animate={{
                                    y: [0, -2, 0],
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            >
                                <ChevronUp className="w-5 h-5 text-blue-600 dark:text-blue-400" strokeWidth={3} />
                            </motion.div>

                            {/* Home Button Detail (Tiny ring at bottom) */}
                            <div className="w-1.5 h-1.5 border border-slate-200 dark:border-slate-700 rounded-full opacity-60"></div>
                        </div>

                        {/* Reflection Shine */}
                        <motion.div
                            className="absolute top-0 -left-full w-full h-full bg-slate-400/5 skew-x-[-25deg] pointer-events-none"
                            animate={{ left: "200%" }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                repeatDelay: 3,
                                ease: "easeInOut"
                            }}
                        />
                    </div>

                    {/* Label that shows on hover */}
                    <motion.span
                        initial={{ opacity: 0, x: 10 }}
                        whileHover={{ opacity: 1, x: 0 }}
                        className="absolute right-[calc(100%+12px)] top-1/2 -translate-y-1/2 bg-slate-900 dark:bg-slate-800 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-lg border border-white/10 pointer-events-none whitespace-nowrap shadow-xl"
                    >
                        Back to Top
                    </motion.span>
                </motion.button>
            )}
        </AnimatePresence>
    );
};

export default ScrollToTop;
