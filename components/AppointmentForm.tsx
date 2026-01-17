
import React, { useState } from 'react';
import { Calendar, Clock, User, Mail, Phone, FileText, CheckCircle, MapPin, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const AppointmentForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    timeSlot: '',
    consultationType: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Generate time slots from 12 PM to 5 PM (hourly)
  const timeSlots = [
    '12:00 PM - 1:00 PM',
    '1:00 PM - 2:00 PM',
    '2:00 PM - 3:00 PM',
    '3:00 PM - 4:00 PM',
    '4:00 PM - 5:00 PM'
  ];

  // Get next 4 weekends (Saturdays and Sundays)
  const getUpcomingWeekends = () => {
    const dates = [];
    const today = new Date();
    let currentDate = new Date(today);

    while (dates.length < 8) {
      const dayOfWeek = currentDate.getDay();
      if (dayOfWeek === 0 || dayOfWeek === 6) { // Sunday or Saturday
        const dateStr = currentDate.toISOString().split('T')[0];
        const displayDate = currentDate.toLocaleDateString('en-US', {
          weekday: 'short',
          month: 'short',
          day: 'numeric',
          year: 'numeric'
        });
        dates.push({ value: dateStr, label: displayDate });
      }
      currentDate.setDate(currentDate.getDate() + 1);
    }

    return dates;
  };

  const upcomingWeekends = getUpcomingWeekends();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Appointment Data:', formData);

    setIsSubmitted(true);

    // Reset form after 7 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        date: '',
        timeSlot: '',
        consultationType: '',
        message: ''
      });
    }, 7000);
  };

  return (
    <section className="py-24 bg-gradient-to-b from-white via-slate-50 to-white dark:from-slate-900 dark:via-slate-950 dark:to-slate-900 relative overflow-hidden transition-colors duration-500">
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200 dark:bg-blue-900/10 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-200 dark:bg-purple-900/10 rounded-full blur-3xl opacity-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Success Banner */}
        <AnimatePresence>
          {isSubmitted && (
            <motion.div
              initial={{ opacity: 0, height: 0, marginBottom: 0 }}
              animate={{ opacity: 1, height: 'auto', marginBottom: 48 }}
              exit={{ opacity: 0, height: 0, marginBottom: 0 }}
              className="bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-3xl p-8 shadow-2xl overflow-hidden"
            >
              <div className="flex items-center gap-6">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="p-4 bg-white/20 rounded-full"
                >
                  <CheckCircle className="w-10 h-10" />
                </motion.div>
                <div>
                  <h3 className="text-3xl font-black mb-2 tracking-tight">Appointment Confirmed!</h3>
                  <p className="text-green-50 text-lg">We've received your booking request. Dr. Arijit will contact you shortly to confirm.</p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Side - Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <div className="inline-flex items-center gap-2 px-5 py-2 border-2 border-blue-200 dark:border-blue-800 rounded-full bg-gradient-to-r from-blue-50 to-purple-50 dark:from-slate-800 dark:to-slate-900">
              <Calendar className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span className="text-xs font-bold text-blue-600 dark:text-blue-400 tracking-wider uppercase">Book Appointment</span>
            </div>

            <h2 className="text-3xl md:text-7xl font-black text-slate-900 dark:text-white leading-tight">
              Schedule <br /><span className="text-blue-600 dark:text-blue-400">Your Visit</span>
            </h2>

            <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-lg">
              Book your consultation with Dr. Arijit for expert medical care and personalized treatment plans.
            </p>

            {/* Availability Info */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-blue-50 to-slate-50 dark:from-slate-800 dark:to-slate-900 rounded-[2rem] p-6 sm:p-8 border-2 border-white dark:border-slate-700 shadow-xl"
            >
              <div className="flex items-start gap-6">
                <div className="p-4 bg-blue-600 dark:bg-blue-500 rounded-2xl shadow-lg">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-black text-slate-900 dark:text-white mb-3 tracking-tight">Clinic Availability</h3>
                  <p className="text-slate-700 dark:text-slate-200 font-bold text-lg mb-2">Saturday & Sunday</p>
                  <p className="text-slate-600 dark:text-slate-400 font-medium">12:00 PM - 5:00 PM</p>
                  <motion.p
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="text-sm text-blue-600 dark:text-blue-400 font-black mt-4 uppercase tracking-widest flex items-center gap-2"
                  >
                    <span className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full animate-ping"></span>
                    Online & Offline Consultations
                  </motion.p>
                </div>
              </div>
            </motion.div>

            {/* Location */}
            <div className="space-y-6">
              <motion.div
                whileHover={{ scale: 1.01 }}
                className="rounded-[2.5rem] overflow-hidden border-8 border-white dark:border-slate-800 shadow-2xl h-72 group"
              >
                <iframe
                  title="Clinic Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14721.493774618774!2d88.31828854442125!3d22.751493433589417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f8983e29f03677%3A0x640b72c918ee770c!2sSerampore%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1711200000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  className="grayscale dark:invert group-hover:grayscale-0 transition-all duration-700"
                ></iframe>
              </motion.div>
              <div className="flex items-center gap-3 text-slate-600 dark:text-slate-400 bg-white/50 dark:bg-slate-800/50 p-4 rounded-2xl w-fit border border-white dark:border-slate-800">
                <MapPin className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                <p className="font-black uppercase tracking-widest text-sm">Serampore, West Bengal, India</p>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-slate-800/40 rounded-[3rem] shadow-2xl overflow-hidden border border-slate-100 dark:border-slate-800 backdrop-blur-xl"
          >
            {/* Form Header */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-700 dark:to-purple-800 text-white p-6 sm:p-10">
              <div className="flex items-center gap-4 mb-3">
                <div className="p-3 bg-white/20 rounded-2xl">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl sm:text-3xl font-black tracking-tight">Secure Booking</h3>
              </div>
              <p className="text-blue-50 text-base sm:text-lg opacity-80 font-medium">Please provide accurate health details</p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="p-6 sm:p-10 space-y-8">
              {/* Name */}
              <div className="space-y-3">
                <label className="text-sm font-black text-slate-700 dark:text-slate-300 uppercase tracking-widest flex items-center gap-2">
                  <User className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  Full Patient Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                  className="w-full px-6 py-4 bg-slate-50 dark:bg-slate-900 border-2 border-slate-100 dark:border-slate-800 rounded-2xl outline-none focus:border-blue-500 dark:focus:border-blue-400 focus:bg-white dark:focus:bg-slate-950 transition-all font-bold text-slate-900 dark:text-white"
                />
              </div>

              {/* Email & Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-sm font-black text-slate-700 dark:text-slate-300 uppercase tracking-widest flex items-center gap-2">
                    <Mail className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                    className="w-full px-6 py-4 bg-slate-50 dark:bg-slate-900 border-2 border-slate-100 dark:border-slate-800 rounded-2xl outline-none focus:border-blue-500 dark:focus:border-blue-400 focus:bg-white dark:focus:bg-slate-950 transition-all font-bold text-slate-900 dark:text-white"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-sm font-black text-slate-700 dark:text-slate-300 uppercase tracking-widest flex items-center gap-2">
                    <Phone className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                    Contact Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="+91"
                    className="w-full px-6 py-4 bg-slate-50 dark:bg-slate-900 border-2 border-slate-100 dark:border-slate-800 rounded-2xl outline-none focus:border-blue-500 dark:focus:border-blue-400 focus:bg-white dark:focus:bg-slate-950 transition-all font-bold text-slate-900 dark:text-white"
                  />
                </div>
              </div>

              {/* Date & Time */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-sm font-black text-slate-700 dark:text-slate-300 uppercase tracking-widest flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                    Consult Date
                  </label>
                  <select
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 bg-slate-50 dark:bg-slate-900 border-2 border-slate-100 dark:border-slate-800 rounded-2xl outline-none focus:border-blue-500 dark:focus:border-blue-400 focus:bg-white dark:focus:bg-slate-950 transition-all font-bold text-slate-900 dark:text-white appearance-none cursor-pointer"
                  >
                    <option value="">Select Sunday/Saturday</option>
                    {upcomingWeekends.map((weekend) => (
                      <option key={weekend.value} value={weekend.value}>{weekend.label}</option>
                    ))}
                  </select>
                </div>
                <div className="space-y-3">
                  <label className="text-sm font-black text-slate-700 dark:text-slate-300 uppercase tracking-widest flex items-center gap-2">
                    <Clock className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                    Time Slot
                  </label>
                  <select
                    name="timeSlot"
                    value={formData.timeSlot}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 bg-slate-50 dark:bg-slate-900 border-2 border-slate-100 dark:border-slate-800 rounded-2xl outline-none focus:border-blue-500 dark:focus:border-blue-400 focus:bg-white dark:focus:bg-slate-950 transition-all font-bold text-slate-900 dark:text-white appearance-none cursor-pointer"
                  >
                    <option value="">Choose Duration</option>
                    {timeSlots.map((slot) => (
                      <option key={slot} value={slot}>{slot}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Consultation Type */}
              <div className="space-y-3">
                <label className="text-sm font-black text-slate-700 dark:text-slate-300 uppercase tracking-widest">
                  Consultation Mode
                </label>
                <div className="grid grid-cols-2 gap-4">
                  {['offline', 'online'].map((mode) => (
                    <button
                      key={mode}
                      type="button"
                      onClick={() => setFormData({ ...formData, consultationType: mode })}
                      className={`py-4 rounded-2xl font-black text-sm uppercase tracking-widest transition-all border-2 ${formData.consultationType === mode
                        ? 'bg-blue-600 dark:bg-blue-500 text-white border-blue-600 dark:border-blue-500 shadow-lg'
                        : 'bg-slate-50 dark:bg-slate-900 text-slate-500 dark:text-slate-400 border-slate-100 dark:border-slate-800 hover:border-blue-200'
                        }`}
                    >
                      {mode === 'offline' ? 'In-Person' : 'Video Call'}
                    </button>
                  ))}
                </div>
              </div>

              {/* Message */}
              <div className="space-y-3">
                <label className="text-sm font-black text-slate-700 dark:text-slate-300 uppercase tracking-widest flex items-center gap-2">
                  <FileText className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  Additional Notes
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Describe your symptoms briefly..."
                  className="w-full px-6 py-4 bg-slate-50 dark:bg-slate-900 border-2 border-slate-100 dark:border-slate-800 rounded-2xl outline-none focus:border-blue-500 dark:focus:border-blue-400 focus:bg-white dark:focus:bg-slate-950 transition-all font-bold text-slate-900 dark:text-white resize-none"
                />
              </div>

              {/* Submit Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-600 dark:to-purple-700 hover:from-blue-700 hover:to-purple-800 text-white font-black py-5 px-8 rounded-3xl transition-all shadow-2xl hover:shadow-[0_20px_40px_rgba(37,99,235,0.4)] text-lg uppercase tracking-[0.2em]"
              >
                Confirm Appointment
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AppointmentForm;
