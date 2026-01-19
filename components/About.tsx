
import React, { useState, useRef } from 'react';
import { Clock, Phone, Send, Video, ArrowRight, Heart } from 'lucide-react';
import VideoCallModal from './VideoCallModal';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';

const About: React.FC = () => {
  const [showVideoCallModal, setShowVideoCallModal] = useState(false);
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  return (
    <section ref={containerRef} className="py-24 bg-white dark:bg-slate-900 relative overflow-hidden transition-colors duration-500">
      {/* Background Graphic */}
      <motion.div
        style={{ y: y1 }}
        className="absolute left-0 bottom-0 opacity-5 dark:opacity-10 pointer-events-none"
      >
        <img src="https://picsum.photos/seed/steth/400/400" alt="steth" className="grayscale dark:invert" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

          {/* Schedule Sidebar */}
          <motion.div
            style={{ y: y2 }}
            className="lg:col-span-4 space-y-0 shadow-2xl rounded-3xl overflow-hidden group border border-slate-100 dark:border-slate-800"
          >
            <div className="bg-[#0f172a] dark:bg-slate-950 p-6 sm:p-10 text-white space-y-8">
              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="text-2xl sm:text-3xl font-bold tracking-tight"
              >
                Time For Meet
              </motion.h3>
              <div className="w-full h-px bg-slate-800 dark:bg-slate-700"></div>

              <div className="space-y-6">
                <div className="flex justify-between items-center group/item">
                  <div>
                    <p className="font-bold text-base sm:text-lg">Saturday - Sunday</p>
                    <p className="text-blue-400 font-medium text-sm sm:text-base">Clinics & Consults</p>
                  </div>
                  <p className="text-blue-100 font-mono text-sm sm:text-base">By Booking</p>
                </div>
                <div className="w-full h-px border-t border-dashed border-slate-700 dark:border-slate-600"></div>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-bold text-base sm:text-lg">Monday - Friday</p>
                    <p className="text-blue-400 font-medium text-sm sm:text-base">ICU Shifts</p>
                  </div>
                  <p className="text-blue-100 font-mono text-sm sm:text-base">Emergency</p>
                </div>
              </div>
            </div>

            <div className="bg-blue-600 dark:bg-blue-700 p-6 sm:p-8 text-center space-y-2">
              <p className="text-blue-100 font-bold tracking-widest text-[10px] sm:text-xs uppercase">For Emergency Care</p>
              <p className="text-xl sm:text-2xl font-extrabold text-white">+91 8481939664</p>
            </div>
          </motion.div>

          {/* Journey Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-8 space-y-8"
          >
            <motion.div
              whileHover={{ scale: 1.05, x: 10 }}
              className="inline-flex items-center gap-2 px-4 py-2 border border-blue-200 dark:border-blue-800 rounded-full bg-blue-50 dark:bg-blue-900/30 w-fit"
            >
              <Heart className="w-4 h-4 text-blue-600 dark:text-blue-400 fill-blue-600 dark:fill-blue-400" />
              <span className="text-xs font-bold text-blue-600 dark:text-blue-400 tracking-wider">About Me</span>
            </motion.div>

            <h2 className="text-2xl sm:text-5xl font-extrabold text-slate-900 dark:text-white leading-tight">My Journey in Medicine</h2>

            <p className="text-sm sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl">
              I'm Dr. Arijit, an ICU Resident at Sharanya Superspeciality Hospital with a passion for holistic, evidence-based medical care. With extensive experience in Cardiology and Neuromedicine, I've had the privilege of treating thousands of patients with empathy and accuracy.
            </p>

            <p className="text-sm sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl">
              I strongly believe that medicine is not just about treating diseases, but about understanding people, building trust, and guiding them toward long-term wellness.
            </p>

            <motion.div
              whileInView={{ scale: [0.95, 1], opacity: [0, 1] }}
              className="flex items-start gap-4 p-5 sm:p-6 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border-l-4 border-blue-600 dark:border-blue-400"
            >
              <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 dark:text-blue-400 mt-1" />
              <div>
                <span className="font-bold text-slate-900 dark:text-white text-sm sm:text-base">Doctor's Motto or Belief:</span>
                <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">Healing begins with listening.</p>
              </div>
            </motion.div>

            <div className="flex flex-col sm:flex-row flex-wrap gap-4 pt-4">
              <motion.a
                whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(37, 99, 235, 0.3)" }}
                whileTap={{ scale: 0.98 }}
                href="https://wa.me/918481939664"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-blue-600 dark:bg-blue-500 hover:bg-blue-500 dark:hover:bg-blue-400 text-white font-bold py-3.5 px-6 sm:px-8 rounded-2xl flex items-center justify-center gap-3 transition-all text-xs sm:text-sm"
              >
                SEND MESSAGE <Send className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </motion.a>
              <motion.button
                whileHover={{ scale: 1.05, borderColor: "rgba(37, 99, 235, 0.5)" }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setShowVideoCallModal(true)}
                className="w-full sm:w-auto bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800 hover:border-slate-400 dark:hover:border-slate-600 text-slate-900 dark:text-white font-bold py-3.5 px-6 sm:px-8 rounded-2xl flex items-center justify-center gap-3 transition-all text-xs sm:text-sm"
              >
                VIDEO CALL <Video className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </motion.button>
            </div>

            {/* Video Consultation Notice */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-600 dark:border-blue-400 rounded-lg"
            >
              <p className="text-xs font-bold text-blue-900 dark:text-blue-100 mb-1.5">
                📹 Video Consultation: Available 7 days/week
              </p>
              <p className="text-xs text-blue-800 dark:text-blue-200">
                Book 24 hours in advance • For emergencies within 24 hours: <a href="https://wa.me/918481939664" target="_blank" rel="noopener noreferrer" className="font-bold underline hover:text-blue-600">WhatsApp directly</a>
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Video Call Modal */}
      <AnimatePresence>
        {showVideoCallModal && (
          <VideoCallModal onClose={() => setShowVideoCallModal(false)} />
        )}
      </AnimatePresence>
    </section>
  );
};

export default About;
