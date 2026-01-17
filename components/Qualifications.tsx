
import React, { useRef } from 'react';
import { GraduationCap, Award, Trophy, Star, Medal, Sparkles } from 'lucide-react';
import { QUALIFICATIONS } from '../constants';
import { motion, useScroll, useTransform } from 'framer-motion';

const Qualifications: React.FC = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const b1 = useTransform(scrollYProgress, [0, 1], [-50, 50]);
  const b2 = useTransform(scrollYProgress, [0, 1], [50, -50]);

  const achievements = [
    {
      title: '7th Rank',
      subtitle: 'State Level',
      exam: '10th Board Exam',
      icon: <Trophy className="w-8 h-8" />,
      gradient: 'from-amber-400 to-orange-500'
    },
    {
      title: '11th Position',
      subtitle: 'State Level',
      exam: '12th Board Exam',
      icon: <Medal className="w-8 h-8" />,
      gradient: 'from-blue-400 to-purple-500'
    }
  ];

  return (
    <section ref={containerRef} className="py-24 bg-gradient-to-b from-white via-slate-50 to-white dark:from-slate-900 dark:via-slate-950 dark:to-slate-900 relative overflow-hidden transition-colors duration-500">
      {/* Background Decorations */}
      <motion.div
        style={{ y: b1 }}
        className="absolute top-20 right-0 w-72 h-72 bg-blue-200 dark:bg-blue-900/20 rounded-full blur-3xl opacity-20"
      ></motion.div>
      <motion.div
        style={{ y: b2 }}
        className="absolute bottom-20 left-0 w-72 h-72 bg-purple-200 dark:bg-purple-900/20 rounded-full blur-3xl opacity-20"
      ></motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-4 mb-16"
        >
          <motion.div
            whileHover={{ scale: 1.05, rotate: [0, -2, 2, 0] }}
            className="inline-flex items-center gap-2 px-5 py-2 border-2 border-blue-200 dark:border-blue-800 rounded-full bg-gradient-to-r from-blue-50 to-purple-50 dark:from-slate-800 dark:to-slate-900"
          >
            <GraduationCap className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span className="text-xs font-bold text-blue-600 dark:text-blue-400 tracking-wider">EDUCATION & ACHIEVEMENTS</span>
          </motion.div>
          <h2 className="text-5xl md:text-6xl font-black text-slate-900 dark:text-white leading-tight">
            Qualifications & Excellence
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Academic achievements and professional credentials
          </p>
        </motion.div>

        {/* Academic Achievements */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, rotateX: 15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -10, rotateZ: index % 2 === 0 ? 1 : -1 }}
              className="group relative bg-white dark:bg-slate-800/50 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform border border-transparent dark:border-slate-700/50"
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${achievement.gradient} opacity-5 group-hover:opacity-10 transition-opacity`}></div>

              <div className="relative p-8 flex items-center gap-6">
                {/* Icon */}
                <div className={`p-4 bg-gradient-to-br ${achievement.gradient} rounded-2xl text-white shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                  {achievement.icon}
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Star className="w-5 h-5 text-amber-500 fill-amber-500" />
                    <span className="text-sm font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wide">{achievement.subtitle}</span>
                  </div>
                  <h3 className="text-3xl font-black text-slate-900 dark:text-white mb-1">
                    {achievement.title}
                  </h3>
                  <p className="text-lg font-semibold text-slate-600 dark:text-slate-400">
                    {achievement.exam}
                  </p>
                </div>

                {/* Badge */}
                <div className="absolute top-4 right-4 focus-visible:outline-none">
                  <div className={`px-3 py-1 bg-gradient-to-r ${achievement.gradient} text-white text-[10px] font-bold rounded-full shadow-md`}>
                    EXCELLENCE
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Professional Qualifications */}
        <div className="space-y-6">
          {QUALIFICATIONS.map((q, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              whileHover={{ x: idx % 2 === 0 ? 10 : -10 }}
              className="group relative bg-white dark:bg-slate-800/30 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-transparent dark:border-slate-800"
            >
              {/* Gradient Accent */}
              <div className="absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-b from-blue-600 via-purple-600 to-blue-600"></div>

              <div className="flex flex-col md:flex-row items-start md:items-center gap-6 p-8 pl-10">
                {/* Icon */}
                <div className="p-4 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/40 dark:to-purple-900/40 rounded-xl group-hover:scale-110 transition-transform duration-300">
                  <GraduationCap className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                </div>

                {/* Institution */}
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-bold text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-1">
                    {q.institution}
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                    {q.period}
                  </p>
                </div>

                {/* Divider */}
                <div className="hidden md:block w-px h-16 bg-gradient-to-b from-transparent via-slate-300 dark:via-slate-700 to-transparent"></div>

                {/* Degree */}
                <div className="flex-1">
                  <p className="text-2xl font-black text-slate-900 dark:text-white leading-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {q.degree}
                  </p>
                </div>

                {/* Badge */}
                {idx === 0 && (
                  <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-amber-100 to-orange-100 dark:from-amber-900/30 dark:to-orange-900/30 rounded-full border-2 border-amber-300 dark:border-amber-700">
                    <Award className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                    <span className="text-sm font-bold text-amber-700 dark:text-amber-400">HONORS</span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: <GraduationCap className="w-8 h-8" />, value: 'MBBS', label: 'Degree' },
            { icon: <Award className="w-8 h-8" />, value: 'HONS', label: 'With Honors' },
            { icon: <Trophy className="w-8 h-8" />, value: '7th', label: 'State Rank (10th)' },
            { icon: <Medal className="w-8 h-8" />, value: '11th', label: 'State Rank (12th)' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5, rotateY: 10 }}
              className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-slate-800 dark:to-slate-900 rounded-xl p-6 text-center border-2 border-blue-100 dark:border-slate-800 hover:border-blue-300 dark:hover:border-blue-600 transition-colors group"
            >
              <div className="inline-flex p-3 bg-white dark:bg-slate-700 rounded-xl shadow-md mb-3 group-hover:scale-110 transition-transform">
                <div className="text-blue-600 dark:text-blue-400">
                  {stat.icon}
                </div>
              </div>
              <p className="text-2xl font-black text-slate-900 dark:text-white mb-1">{stat.value}</p>
              <p className="text-sm font-semibold text-slate-600 dark:text-slate-400">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Sparkle Decoration */}
        <motion.div
          animate={{ scale: [1, 1.2, 1], rotate: [0, 10, 0], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute top-10 right-10 opacity-20 pointer-events-none"
        >
          <Sparkles className="w-16 h-16 text-blue-600 dark:text-blue-400" />
        </motion.div>
      </div>
    </section>
  );
};

export default Qualifications;
