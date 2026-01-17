
import React, { useState } from 'react';
import { Heart, ArrowUpRight, Sparkles } from 'lucide-react';
import { SERVICES } from '../constants';
import ServiceDetailModal from './ServiceDetailModal';
import { Service } from '../types';
import { motion } from 'framer-motion';

const Services: React.FC = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-950 relative overflow-hidden transition-colors duration-500">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-100 dark:bg-blue-900/10 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-100 dark:bg-purple-900/10 rounded-full blur-3xl opacity-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-4 mb-16"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2 border-2 border-blue-200 dark:border-blue-800 rounded-full bg-gradient-to-r from-blue-50 to-purple-50 dark:from-slate-800 dark:to-slate-900">
            <Sparkles className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span className="text-xs font-bold text-blue-600 dark:text-blue-400 tracking-wider uppercase">EXPERT MEDICAL SERVICES</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-slate-900 dark:text-white leading-tight">
            Specialized Care for Your Health
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Comprehensive treatment plans tailored to your unique health needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{
                y: -10,
                rotateZ: 1,
                boxShadow: "0 25px 50px -12px rgba(37, 99, 235, 0.25)"
              }}
              className="group relative bg-white dark:bg-slate-800/50 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer transform border border-transparent dark:border-slate-800"
              onClick={() => setSelectedService(service)}
            >
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/0 via-blue-600/0 to-blue-600/5 group-hover:from-blue-600/10 group-hover:via-purple-600/10 group-hover:to-blue-600/20 transition-all duration-500"></div>

              {/* Content */}
              <div className="relative p-8 space-y-6">
                {/* Icon */}
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-50 dark:from-slate-700 dark:to-slate-800 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-md">
                    <span className="group-hover:scale-110 transition-transform duration-500">
                      {service.icon}
                    </span>
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-lg">
                    <ArrowUpRight className="w-4 h-4 text-white" />
                  </div>
                </div>

                {/* Title */}
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-lg font-semibold text-blue-600 dark:text-blue-400">
                    {service.bengaliTitle}
                  </p>
                </div>

                {/* Description */}
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-3">
                  {service.description}
                </p>

                {/* CTA */}
                <div className="flex items-center gap-2 text-sm font-bold text-blue-600 dark:text-blue-400 group-hover:gap-4 transition-all">
                  <span>Learn More</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>

                {/* Bottom Accent */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-col items-center gap-4 p-8 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-slate-800 dark:to-slate-900 rounded-3xl border-2 border-blue-100 dark:border-blue-900/30 shadow-xl">
            <Heart className="w-12 h-12 text-blue-600 dark:text-blue-400 fill-blue-600 dark:fill-blue-400 animate-pulse" />
            <p className="text-xl font-bold text-slate-700 dark:text-slate-300">
              Don't see what you're looking for?
            </p>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              href="#appointment"
              className="bg-blue-600 dark:bg-blue-500 hover:bg-blue-700 dark:hover:bg-blue-400 text-white font-black py-4 px-10 rounded-2xl transition-all shadow-lg hover:shadow-xl uppercase tracking-widest text-sm"
            >
              Book a Consultation
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <ServiceDetailModal
          service={selectedService}
          onClose={() => setSelectedService(null)}
        />
      )}
    </section>
  );
};

export default Services;
