import React, { useState, useRef, useEffect } from 'react';
import { Calendar, Clock, User, Mail, Phone, FileText, CheckCircle, MapPin, Sparkles, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';

const AppointmentForm: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
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
  const [isSending, setIsSending] = useState(false);

  // Initialize EmailJS on component mount
  useEffect(() => {
    emailjs.init("KLjg3n2MInRiFd6Wd");
    console.log("EmailJS initialized");
  }, []);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Prevent double submission
    if (isSending) {
      console.log("Already sending, ignoring duplicate submission");
      return;
    }

    // Validate consultation type (custom field without HTML5 validation)
    if (!formData.consultationType) {
      alert("Please select a Consultation Mode (In-Person or Video Call)");
      return;
    }

    setIsSending(true);
    console.log("=== STARTING FORM SUBMISSION ===");
    console.log("Form Data:", formData);

    try {
      const SERVICE_ID = 'service_amasahp';
      const TEMPLATE_ID = 'template_43ybu0n';
      const PUBLIC_KEY = 'KLjg3n2MInRiFd6Wd';

      // Create HTML email template for DOCTOR
      const doctorEmailHTML = `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #2563eb 0%, #9333ea 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
            .header h1 { margin: 0; font-size: 28px; }
            .content { background: #f8fafc; padding: 30px; border-radius: 0 0 10px 10px; }
            .info-section { background: white; padding: 20px; margin: 15px 0; border-radius: 8px; border-left: 4px solid #2563eb; }
            .info-label { font-weight: bold; color: #2563eb; margin-bottom: 5px; }
            .info-value { color: #1e293b; font-size: 16px; margin-bottom: 15px; }
            .footer { text-align: center; margin-top: 20px; color: #64748b; font-size: 14px; }
            .badge { display: inline-block; background: #2563eb; color: white; padding: 5px 15px; border-radius: 20px; font-size: 12px; font-weight: bold; margin-top: 10px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>🏥 New Appointment Booking</h1>
              <p style="margin: 10px 0 0 0; opacity: 0.9;">You have received a new appointment request</p>
            </div>
            <div class="content">
              <div class="info-section">
                <div class="info-label">👤 Patient Name</div>
                <div class="info-value">${formData.name}</div>
                
                <div class="info-label">📧 Email Address</div>
                <div class="info-value">${formData.email}</div>
                
                <div class="info-label">📱 Phone Number</div>
                <div class="info-value">${formData.phone}</div>
              </div>

              <div class="info-section">
                <div class="info-label">📅 Appointment Date</div>
                <div class="info-value">${formData.date}</div>
                
                <div class="info-label">🕐 Time Slot</div>
                <div class="info-value">${formData.timeSlot}</div>
                
                <div class="info-label">💼 Consultation Type</div>
                <div class="info-value">
                  ${formData.consultationType === 'online' ? '🎥 Video Call (Online)' : '🏥 In-Person (Offline)'}
                  <span class="badge">${formData.consultationType.toUpperCase()}</span>
                </div>
              </div>

              ${formData.message ? `
              <div class="info-section">
                <div class="info-label">📝 Additional Notes / Symptoms</div>
                <div class="info-value">${formData.message}</div>
              </div>
              ` : ''}

              <div class="footer">
                <p>This appointment request was submitted through your website booking form.</p>
                <p>Please contact the patient to confirm the appointment.</p>
              </div>
            </div>
          </div>
        </body>
        </html>
      `;

      // Create HTML email template for PATIENT
      const patientEmailHTML = `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #10b981 0%, #059669 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
            .header h1 { margin: 0; font-size: 28px; }
            .content { background: #f0fdf4; padding: 30px; border-radius: 0 0 10px 10px; }
            .info-section { background: white; padding: 20px; margin: 15px 0; border-radius: 8px; border-left: 4px solid #10b981; }
            .info-label { font-weight: bold; color: #059669; margin-bottom: 5px; }
            .info-value { color: #1e293b; font-size: 16px; margin-bottom: 15px; }
            .footer { text-align: center; margin-top: 20px; color: #64748b; font-size: 14px; }
            .badge { display: inline-block; background: #10b981; color: white; padding: 5px 15px; border-radius: 20px; font-size: 12px; font-weight: bold; margin-top: 10px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>✅ Appointment Confirmed!</h1>
              <p style="margin: 10px 0 0 0; opacity: 0.9;">Thank you for booking with Dr. Arijit Sen</p>
            </div>
            <div class="content">
              <div class="info-section">
                <p style="font-size: 16px; color: #059669; margin-bottom: 20px;">
                  Dear <strong>${formData.name}</strong>,
                </p>
                <p style="font-size: 14px; color: #1e293b; margin-bottom: 15px;">
                  Your appointment request has been received successfully. Dr. Arijit Sen will review your booking and contact you shortly to confirm.
                </p>
              </div>

              <div class="info-section">
                <div class="info-label">📅 Appointment Details</div>
                <div class="info-value">
                  <strong>Date:</strong> ${formData.date}<br>
                  <strong>Time:</strong> ${formData.timeSlot}<br>
                  <strong>Type:</strong> ${formData.consultationType === 'online' ? '🎥 Video Call (Online)' : '🏥 In-Person (Offline)'}
                  <span class="badge">${formData.consultationType.toUpperCase()}</span>
                </div>
              </div>

              ${formData.message ? `
              <div class="info-section">
                <div class="info-label">📝 Your Notes</div>
                <div class="info-value">${formData.message}</div>
              </div>
              ` : ''}

              <div class="info-section">
                <div class="info-label">📞 Need Help?</div>
                <div class="info-value">
                  For any questions or to reschedule, please contact:<br>
                  <strong>WhatsApp:</strong> +91 8481939664<br>
                  <strong>Email:</strong> senarijitdoctor07@gmail.com
                </div>
              </div>

              <div class="footer">
                <p>We look forward to seeing you!</p>
                <p style="font-size: 12px; color: #94a3b8;">This is an automated confirmation. Dr. Arijit will contact you to finalize the appointment.</p>
              </div>
            </div>
          </div>
        </body>
        </html>
      `;

      // Send email to DOCTOR (both email addresses)
      const doctorParams1 = {
        to_name: 'Dr. Arijit Sen',
        to_email: 'koushikghosh6077@gmail.com',
        subject: `New Appointment: ${formData.name} - ${formData.date}`,
        html_content: doctorEmailHTML,
        message: `New appointment from ${formData.name}`
      };

      const doctorParams2 = {
        to_name: 'Dr. Arijit Sen',
        to_email: 'senarijitdoctor07@gmail.com',
        subject: `New Appointment: ${formData.name} - ${formData.date}`,
        html_content: doctorEmailHTML,
        message: `New appointment from ${formData.name}`
      };

      console.log("Sending emails to doctor (both addresses)...");
      const doctorResponse1 = await emailjs.send(SERVICE_ID, TEMPLATE_ID, doctorParams1, PUBLIC_KEY);
      console.log("✅ Doctor email 1 sent:", doctorResponse1.status);

      const doctorResponse2 = await emailjs.send(SERVICE_ID, TEMPLATE_ID, doctorParams2, PUBLIC_KEY);
      console.log("✅ Doctor email 2 sent:", doctorResponse2.status);

      // Send confirmation email to PATIENT
      const patientParams = {
        to_name: formData.name,
        to_email: formData.email,
        subject: `Appointment Confirmation - Dr. Arijit Sen`,
        html_content: patientEmailHTML,
        message: `Your appointment on ${formData.date} at ${formData.timeSlot} has been confirmed.`
      };

      console.log("Sending confirmation email to patient...");
      const patientResponse = await emailjs.send(SERVICE_ID, TEMPLATE_ID, patientParams, PUBLIC_KEY);
      console.log("✅ Patient email sent:", patientResponse.status);

      if (doctorResponse1.status === 200 && doctorResponse2.status === 200 && patientResponse.status === 200) {
        console.log("✅ All emails sent successfully!");
        setIsSubmitted(true);

        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          date: '',
          timeSlot: '',
          consultationType: '',
          message: ''
        });

        // Hide success message after 4 seconds
        setTimeout(() => {
          setIsSubmitted(false);
        }, 4000);
      }

    } catch (error: any) {
      console.error("❌ SUBMISSION FAILED:", error);

      let errorMessage = "Unknown error occurred";

      try {
        if (error?.text) {
          errorMessage = error.text;
        } else if (error?.message) {
          errorMessage = error.message;
        } else if (typeof error === 'string') {
          errorMessage = error;
        } else {
          errorMessage = JSON.stringify(error);
        }
      } catch (stringifyError) {
        errorMessage = "Error details unavailable";
      }

      console.error("Error details:", errorMessage);
      alert(`❌ Submission Failed!\n\nError: ${errorMessage}\n\nPlease check:\n1. Your internet connection\n2. EmailJS configuration\n3. Browser console for details`);
    } finally {
      setIsSending(false);
      console.log("=== SUBMISSION COMPLETE ===");
    }
  };

  return (
    <section className="py-24 bg-gradient-to-b from-white via-slate-50 to-white dark:from-slate-900 dark:via-slate-950 dark:to-slate-900 relative overflow-hidden transition-colors duration-500">
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200 dark:bg-blue-900/10 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-200 dark:bg-purple-900/10 rounded-full blur-3xl opacity-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Success Popup Modal */}
        <AnimatePresence>
          {isSubmitted && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
            >
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.5, opacity: 0 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                className="bg-white dark:bg-slate-900 rounded-[2.5rem] p-8 sm:p-12 shadow-2xl max-w-lg w-full text-center relative overflow-hidden border border-white/20"
              >
                {/* Background Decorations */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-green-200 dark:bg-green-900/30 rounded-full blur-2xl opacity-50 -mr-10 -mt-10"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-200 dark:bg-blue-900/30 rounded-full blur-2xl opacity-50 -ml-10 -mb-10"></div>

                <div className="relative z-10">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring" }}
                    className="w-24 h-24 mx-auto bg-green-100 dark:bg-green-900/50 rounded-full flex items-center justify-center mb-6"
                  >
                    <CheckCircle className="w-12 h-12 text-green-600 dark:text-green-400" />
                  </motion.div>

                  <h3 className="text-3xl font-black text-slate-900 dark:text-white mb-4 leading-tight">
                    Booking Confirmed!
                  </h3>

                  <p className="text-lg text-slate-600 dark:text-slate-300 font-medium mb-8">
                    We've received your request. Dr. Arijit will contact you shortly via email.
                  </p>

                  <div className="flex justify-center">
                    <motion.div
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 4 }}
                      className="h-1.5 bg-green-500 rounded-full w-full max-w-[12rem] mx-auto opacity-50"
                    ></motion.div>
                  </div>
                  <p className="text-xs text-slate-400 mt-2 font-bold uppercase tracking-widest">Redirecting...</p>
                </div>
              </motion.div>
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
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.6087449891634!2d88.38965597516908!3d22.56461037952082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0277a9b3c3c3c3%3A0x3c3c3c3c3c3c3c3c!2sKolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1737279000000!5m2!1sen!2sin"
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
            <form ref={formRef} onSubmit={handleSubmit} className="p-6 sm:p-10 space-y-8">
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

                {/* Video Consultation Notice */}
                {formData.consultationType === 'online' && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-3 p-4 bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-600 dark:border-blue-400 rounded-lg"
                  >
                    <p className="text-sm font-bold text-blue-900 dark:text-blue-100 mb-2">
                      📹 Video Consultation Guidelines:
                    </p>
                    <ul className="text-xs text-blue-800 dark:text-blue-200 space-y-1">
                      <li>• Available 7 days a week - Book 24 hours in advance</li>
                      <li>• For emergency consultations within 24 hours: <a href="https://wa.me/918481939664" target="_blank" rel="noopener noreferrer" className="font-bold underline hover:text-blue-600">WhatsApp directly</a></li>
                    </ul>
                  </motion.div>
                )}
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
                disabled={isSending}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-600 dark:to-purple-700 hover:from-blue-700 hover:to-purple-800 text-white font-black py-5 px-8 rounded-3xl transition-all shadow-2xl hover:shadow-[0_20px_40px_rgba(37,99,235,0.4)] text-lg uppercase tracking-[0.2em] flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSending ? (
                  <>
                    <Loader2 className="w-6 h-6 animate-spin" />
                    Processing...
                  </>
                ) : (
                  'Confirm Appointment'
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AppointmentForm;
