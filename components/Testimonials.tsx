
import React, { useEffect, useRef } from 'react';
import { Heart, Star, Quote, Users } from 'lucide-react';
import { TESTIMONIALS } from '../constants';
import { motion } from 'framer-motion';

const Testimonials: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollInterval: NodeJS.Timeout;
    let isHovered = false;

    const startAutoScroll = () => {
      scrollInterval = setInterval(() => {
        if (!isHovered && scrollContainer) {
          const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth;

          if (scrollContainer.scrollLeft >= maxScroll) {
            scrollContainer.scrollLeft = 0;
          } else {
            scrollContainer.scrollLeft += 1;
          }
        }
      }, 30);
    };

    const handleMouseEnter = () => {
      isHovered = true;
    };

    const handleMouseLeave = () => {
      isHovered = false;
    };

    scrollContainer.addEventListener('mouseenter', handleMouseEnter);
    scrollContainer.addEventListener('mouseleave', handleMouseLeave);
    startAutoScroll();

    return () => {
      clearInterval(scrollInterval);
      scrollContainer.removeEventListener('mouseenter', handleMouseEnter);
      scrollContainer.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900 relative overflow-hidden transition-colors duration-500">
      {/* Background Decorations */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-200 dark:bg-blue-900/10 rounded-full blur-3xl opacity-10"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-200 dark:bg-purple-900/10 rounded-full blur-3xl opacity-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-center space-y-4 mb-16"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2 border-2 border-blue-200 dark:border-blue-800 rounded-full bg-gradient-to-r from-blue-50 to-purple-50 dark:from-slate-800 dark:to-slate-900">
            <Users className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span className="text-xs font-bold text-blue-600 dark:text-blue-400 tracking-wider uppercase">Patient Stories</span>
          </div>
          <h2 className="text-3xl md:text-6xl font-black text-slate-900 dark:text-white leading-tight">
            Trusted by Hundreds of Patients
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Real experiences from people who chose quality healthcare
          </p>
        </motion.div>

        {/* Stats Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12 max-w-3xl mx-auto">
          {[
            { value: '500+', label: 'Happy Patients' },
            { value: '4.9/5', label: 'Average Rating' },
            { value: '98%', label: 'Satisfaction Rate' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-slate-800 dark:to-slate-900 rounded-2xl p-6 text-center border-2 border-blue-100 dark:border-slate-800 shadow-sm"
            >
              <p className="text-3xl font-black text-blue-600 dark:text-blue-400 mb-1">{stat.value}</p>
              <p className="text-sm font-semibold text-slate-600 dark:text-slate-400">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Scrolling Testimonials */}
        <div className="relative">
          {/* Gradient Overlays */}
          <div className="hidden md:block absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-slate-50 to-transparent dark:from-slate-900 to-transparent z-10 pointer-events-none"></div>
          <div className="hidden md:block absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-slate-50 to-transparent dark:from-slate-900 to-transparent z-10 pointer-events-none"></div>

          {/* Scrolling Container */}
          <div
            ref={scrollRef}
            className="flex gap-4 md:gap-6 overflow-x-auto scrollbar-hide pb-4"
            style={{ scrollBehavior: 'smooth' }}
          >
            {/* Infinite scroll items */}
            {[...TESTIMONIALS, ...TESTIMONIALS].map((testimonial, index) => (
              <motion.div
                key={`${testimonial.id}-${index}`}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (index % TESTIMONIALS.length) * 0.1 }}
                whileHover={{ y: -5 }}
                className="flex-shrink-0 w-[260px] sm:w-96 bg-white dark:bg-slate-800/50 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group border-2 border-slate-100 dark:border-slate-800 hover:border-blue-200 dark:hover:border-blue-500/50"
              >
                {/* Gradient Top Bar */}
                <div className="h-2 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600"></div>

                <div className="p-6 md:p-8 relative">
                  {/* Quote Icon */}
                  <div className="absolute top-4 right-4 md:top-6 md:right-6 p-2 md:p-3 bg-blue-50 dark:bg-slate-700 rounded-full group-hover:bg-blue-100 dark:group-hover:bg-slate-600 transition-colors">
                    <Quote className="w-5 h-5 md:w-6 md:h-6 text-blue-600 dark:text-blue-400" />
                  </div>

                  {/* Stars */}
                  <div className="flex gap-1 mb-4 md:mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 md:w-5 md:h-5 ${i < testimonial.rating ? 'text-amber-400 fill-amber-400' : 'text-slate-200 dark:text-slate-700'} transition-all group-hover:scale-110`}
                        style={{ transitionDelay: `${i * 50}ms` }}
                      />
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="text-slate-700 dark:text-slate-300 text-base md:text-lg leading-relaxed mb-6 md:mb-8 min-h-[100px] md:min-h-[120px]">
                    "{testimonial.text}"
                  </p>

                  {/* Patient Info */}
                  <div className="flex items-center gap-3 md:gap-4 pt-4 md:pt-6 border-t-2 border-slate-100 dark:border-slate-700">
                    <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center font-bold text-white text-lg md:text-xl shadow-lg group-hover:scale-110 transition-transform">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 dark:text-white text-base md:text-lg">{testimonial.name}</h4>
                      <p className="text-slate-500 dark:text-slate-400 text-xs md:text-sm font-semibold flex items-center gap-1">
                        <span className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full"></span>
                        {testimonial.location}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-col items-center gap-4 p-8 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-700 dark:to-purple-700 rounded-3xl text-white shadow-2xl border border-white/10">
            <Heart className="w-12 h-12 fill-white animate-pulse" />
            <p className="text-2xl font-black">
              Join Our Happy Patients
            </p>
            <p className="text-blue-50 dark:text-blue-100 max-w-md">
              Experience compassionate, expert medical care that puts your health first
            </p>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              href="#appointment"
              className="bg-white text-blue-600 hover:bg-blue-50 dark:bg-white dark:text-blue-700 font-bold py-4 px-10 rounded-2xl transition-all shadow-lg mt-2 uppercase tracking-widest text-sm"
            >
              Book Your Appointment
            </motion.a>
          </div>
        </motion.div>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
