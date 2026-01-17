
import React, { useState, useRef } from 'react';
import { ArrowUpRight, Heart, Quote } from 'lucide-react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import ScheduleModal from './ScheduleModal';

const Hero: React.FC = () => {
  const [showScheduleModal, setShowScheduleModal] = useState(false);
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);

  return (
    <section
      ref={containerRef}
      className="relative medical-gradient dark:from-slate-950 dark:to-[#020617] text-white overflow-hidden pt-32 pb-20 lg:pt-48 lg:pb-32"
    >
      {/* Background patterns with Parallax */}
      <motion.div
        style={{ y: y1, opacity }}
        className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none"
      >
        <svg viewBox="0 0 100 100" className="w-full h-full text-white fill-current">
          <path d="M0,50 Q25,25 50,50 T100,50" fill="none" stroke="currentColor" strokeWidth="0.5" />
        </svg>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            style={{ y: y2 }}
            className="space-y-8"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 dark:bg-blue-900/40 rounded-full border border-blue-400/30 dark:border-blue-700/50"
            >
              <Heart className="w-4 h-4 text-[#d9f99d] fill-[#d9f99d]" />
              <span className="text-sm font-bold tracking-widest text-blue-50">HI I AM</span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight">
              Meet Dr. Arijit — Your <span className="text-blue-400">Trusted</span> Healthcare Partner
            </h1>

            <p className="text-lg sm:text-xl text-blue-100 dark:text-slate-400 max-w-lg leading-relaxed font-light">
              Dr. Arijit (MBBS Hons) is a highly experienced ICU Resident and Physician dedicated to comprehensive care for Hypertension, Diabetes, and Critical Care.
            </p>

            <div className="flex flex-wrap gap-4">
              <motion.a
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(37, 99, 235, 0.4)" }}
                whileTap={{ scale: 0.98 }}
                href="#appointment"
                className="w-full sm:w-auto bg-blue-600 dark:bg-blue-500 hover:bg-blue-500 text-white font-bold py-4 px-10 rounded-2xl flex items-center justify-center gap-3 transition-all shadow-xl shadow-blue-900/40"
              >
                BOOK APPOINTMENT <ArrowUpRight className="w-5 h-5" />
              </motion.a>
              <motion.button
                whileHover={{ scale: 1.05, borderColor: "rgba(255,255,255,0.4)" }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setShowScheduleModal(true)}
                className="w-full sm:w-auto bg-transparent border-2 border-slate-700 dark:border-slate-800 hover:border-slate-500 text-white font-bold py-4 px-8 rounded-2xl flex items-center justify-center gap-3 transition-all"
              >
                VIEW SCHEDULE <ArrowUpRight className="w-5 h-5" />
              </motion.button>
            </div>
          </motion.div>

          {/* Image & Quote Section */}
          <div className="relative mt-12 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -2 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              style={{ scale, rotateY: useTransform(scrollYProgress, [0, 1], [0, 15]) }}
              className="relative z-10 rounded-3xl sm:rounded-[3rem] overflow-hidden border-4 sm:border-8 border-blue-800/50 dark:border-blue-900/30 shadow-2xl"
            >
              <img
                src="/hero-doctor.jpg"
                alt="Dr. Arijit Professional Portrait"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 dark:from-slate-950/80 to-transparent"></div>
            </motion.div>

            {/* Mission Box - Bottom Left Overlap */}
            <motion.div
              initial={{ opacity: 0, y: 50, rotateX: 20 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
              whileHover={{ y: -10, rotate: -1 }}
              className="absolute -bottom-6 sm:-bottom-8 -left-2 sm:-left-6 lg:-left-12 bg-white/10 dark:bg-slate-900/40 backdrop-blur-2xl p-6 sm:p-8 rounded-[1.5rem] sm:rounded-[3rem] border border-white/20 dark:border-slate-800 max-w-[280px] sm:max-w-sm shadow-2xl z-20 transition-all duration-300"
            >
              <Quote className="w-8 h-8 sm:w-10 sm:h-10 text-[#d9f99d] mb-4 opacity-50" />
              <p className="text-white text-sm sm:text-lg font-medium italic leading-relaxed mb-4 sm:mb-6">
                "My mission is to treat every patient with care, respect, and the highest standard of medical knowledge."
              </p>
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center font-bold text-white shadow-lg border-2 border-white/20 text-xs sm:text-sm">
                  AS
                </div>
                <div>
                  <h4 className="font-bold text-white text-xs sm:text-sm">Dr. Arijit Sen</h4>
                  <p className="text-[10px] sm:text-xs font-bold text-[#d9f99d] uppercase tracking-widest">MBBS Hons</p>
                </div>
              </div>
            </motion.div>

            {/* Social Floating */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1 }}
              className="absolute top-1/2 -right-4 lg:-right-8 flex flex-col gap-4 z-20"
            >
              {['f', 't', 'y', 'i'].map((s, i) => (
                <motion.div
                  key={i}
                  whileHover={{ x: -10, scale: 1.1, backgroundColor: "#2563eb" }}
                  className="w-12 h-12 bg-blue-600 dark:bg-slate-800 flex items-center justify-center rounded-2xl shadow-lg cursor-pointer transition-all uppercase font-black text-xs text-white"
                >
                  {s}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Schedule Modal */}
      {showScheduleModal && (
        <ScheduleModal onClose={() => setShowScheduleModal(false)} />
      )}
    </section>
  );
};

export default Hero;
