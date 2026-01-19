import React, { useState, useEffect } from 'react';
import { X, Video, Clock, User, Phone, Mail, CheckCircle, Sparkles, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';

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
    const [isSending, setIsSending] = useState(false);

    // Initialize EmailJS on component mount
    useEffect(() => {
        emailjs.init("KLjg3n2MInRiFd6Wd");
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (isSending) return;
        setIsSending(true);

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
                        .badge { display: inline-block; background: #2563eb; color: white; padding: 5px 15px; border-radius: 20px; font-size: 12px; font-weight: bold; margin-top: 10px; }
                    </style>
                </head>
                <body>
                    <div class="container">
                        <div class="header">
                            <h1>📹 New Video Call Request</h1>
                            <p style="margin: 10px 0 0 0; opacity: 0.9;">Virtual Consultation Booking</p>
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
                                <div class="info-label">📅 Preferred Date</div>
                                <div class="info-value">${formData.preferredDate}</div>
                                
                                <div class="info-label">🕐 Preferred Time Slot</div>
                                <div class="info-value">${formData.preferredTime}</div>
                                
                                <div class="info-label">💼 Consultation Type</div>
                                <div class="info-value">
                                    VIDEO CALL (Online)
                                    <span class="badge">VIRTUAL</span>
                                </div>
                            </div>

                            ${formData.reason ? `
                            <div class="info-section">
                                <div class="info-label">📝 Symptoms / Reason</div>
                                <div class="info-value">${formData.reason}</div>
                            </div>
                            ` : ''}
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
                    </style>
                </head>
                <body>
                    <div class="container">
                        <div class="header">
                            <h1>✅ Video Call Request Received</h1>
                            <p style="margin: 10px 0 0 0; opacity: 0.9;">Dr. Arijit Sen</p>
                        </div>
                        <div class="content">
                            <div class="info-section">
                                <p style="font-size: 16px; color: #059669; margin-bottom: 20px;">
                                    Dear <strong>${formData.name}</strong>,
                                </p>
                                <p style="font-size: 14px; color: #1e293b; margin-bottom: 15px;">
                                    We have received your request for a video consultation. Dr. Arijit will review your preferred time and send you the joining link shortly.
                                </p>
                            </div>

                            <div class="info-section">
                                <div class="info-label">📅 Requested Slot</div>
                                <div class="info-value">
                                    <strong>Date:</strong> ${formData.preferredDate}<br>
                                    <strong>Time:</strong> ${formData.preferredTime}
                                </div>
                            </div>

                            <div class="info-section">
                                <div class="info-label">📞 Support</div>
                                <div class="info-value">
                                    <strong>WhatsApp:</strong> +91 8481939664<br>
                                    <strong>Email:</strong> senarijitdoctor07@gmail.com
                                </div>
                            </div>

                            <div class="footer">
                                <p>Please keep an eye on your email/WhatsApp for the meeting link.</p>
                            </div>
                        </div>
                    </div>
                </body>
                </html>
            `;

            // Common params for doctor emails
            const baseParams = {
                to_name: 'Dr. Arijit Sen',
                subject: `Video Call Request: ${formData.name}`,
                html_content: doctorEmailHTML,
                message: `Video call request from ${formData.name}`
            };

            // Send to Doctor Email 1
            const doctorResponse1 = await emailjs.send(SERVICE_ID, TEMPLATE_ID, {
                ...baseParams,
                to_email: 'koushikghosh6077@gmail.com'
            }, PUBLIC_KEY);

            // Send to Doctor Email 2
            const doctorResponse2 = await emailjs.send(SERVICE_ID, TEMPLATE_ID, {
                ...baseParams,
                to_email: 'senarijitdoctor07@gmail.com'
            }, PUBLIC_KEY);

            // Send to Patient
            const patientResponse = await emailjs.send(SERVICE_ID, TEMPLATE_ID, {
                to_name: formData.name,
                to_email: formData.email,
                subject: 'Video Consultation Request Received',
                html_content: patientEmailHTML,
                message: 'Your video call request has been received.'
            }, PUBLIC_KEY);

            if (doctorResponse1.status === 200 && doctorResponse2.status === 200 && patientResponse.status === 200) {
                setIsSubmitted(true);
                // Reset form
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    preferredDate: '',
                    preferredTime: '',
                    reason: ''
                });

                // Auto close after 4 seconds
                setTimeout(() => {
                    onClose();
                }, 4000);
            }

        } catch (error) {
            console.error("Submission failed:", error);
            alert("Something went wrong. Please try again.");
        } finally {
            setIsSending(false);
        }
    };

    return (
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
                            <p className="text-xl text-slate-600 dark:text-slate-400 font-medium">We've received your request. Check your email for confirmation.</p>
                            <div className="mt-8 flex justify-center">
                                <motion.div
                                    initial={{ width: "0%" }}
                                    animate={{ width: "100%" }}
                                    transition={{ duration: 4 }}
                                    className="h-1.5 bg-green-500 rounded-full w-48 opacity-50"
                                ></motion.div>
                            </div>
                            <p className="text-xs text-slate-400 mt-2 font-bold uppercase tracking-widest">Closing...</p>
                        </div>
                    </motion.div>
                ) : (
                    <>
                        {/* Header */}
                        <div className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white p-6 sm:p-10 rounded-t-[2.5rem] relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
                            <button
                                onClick={onClose}
                                className="absolute top-6 right-6 p-3 bg-white/10 hover:bg-white/20 rounded-2xl transition-all z-20"
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
                                    disabled={isSending}
                                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-black py-5 px-8 rounded-[1.5rem] transition-all shadow-2xl shadow-blue-500/20 uppercase tracking-widest text-sm flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed"
                                >
                                    {isSending ? (
                                        <>
                                            <Loader2 className="w-5 h-5 animate-spin" />
                                            Processing...
                                        </>
                                    ) : (
                                        'Request Video Call'
                                    )}
                                </motion.button>
                            </div>
                        </form>
                    </>
                )}
            </motion.div>
        </div>
    );
};

export default VideoCallModal;
