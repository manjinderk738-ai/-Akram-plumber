import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Phone, Send } from 'lucide-react';

export default function BookingAndMap() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '',
    service: 'General Checkup',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate booking
    alert(`Thank you, ${formData.name}! Your request for an appointment on ${formData.date} at ${formData.time} has been sent to the clinic.`);
    setFormData({ name: '', phone: '', date: '', time: '', service: 'General Checkup', message: '' });
  };

  return (
    <section id="booking" className="py-32 bg-[zinc-900] text-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[gold-500]/5 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass-dark mb-6">
            <div className="w-2 h-2 rounded-full bg-[gold-500]"></div>
            <span className="text-sm font-medium tracking-widest uppercase text-[gold-500]">Reservations</span>
          </div>
          <h3 className="text-5xl font-serif mb-6 leading-tight">Request an Appointment</h3>
          <p className="text-lg text-gray-300 font-light">
            Schedule a private consultation at our state-of-the-art facility. Experience a new standard of personalized dental care.
          </p>
        </motion.div>

        <div className="lg:grid lg:grid-cols-2 gap-16 lg:gap-12">
          {/* Booking Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
            className="glass-dark-card rounded-3xl p-10 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold-600/5 rounded-full blur-[40px]"></div>
            <h4 className="text-3xl font-serif text-white mb-8">Your Details</h4>
            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-400 mb-2 uppercase tracking-widest">Full Name</label>
                  <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange} className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:ring-1 focus:ring-gold-500 focus:border-gold-500 outline-none transition-all placeholder-slate-600 shadow-inner" placeholder="John Doe" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-400 mb-2 uppercase tracking-widest">Phone Number</label>
                  <input type="tel" id="phone" name="phone" required value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:ring-1 focus:ring-gold-500 focus:border-gold-500 outline-none transition-all placeholder-slate-600 shadow-inner" placeholder="+91 00000 00000" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="date" className="block text-sm font-medium text-slate-400 mb-2 uppercase tracking-widest">Preferred Date</label>
                  <input type="date" id="date" name="date" required value={formData.date} onChange={handleChange} className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:ring-1 focus:ring-gold-500 focus:border-gold-500 outline-none transition-all [color-scheme:dark] shadow-inner" />
                </div>
                <div>
                  <label htmlFor="time" className="block text-sm font-medium text-slate-400 mb-2 uppercase tracking-widest">Preferred Time</label>
                  <select id="time" name="time" required value={formData.time} onChange={handleChange} className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:ring-1 focus:ring-gold-500 focus:border-gold-500 outline-none transition-all appearance-none [&>option]:bg-zinc-900 shadow-inner">
                    <option value="" disabled className="text-slate-500">Select Time</option>
                    <option value="10:00 AM">10:00 AM</option>
                    <option value="11:30 AM">11:30 AM</option>
                    <option value="1:00 PM">1:00 PM</option>
                    <option value="5:30 PM">5:30 PM</option>
                    <option value="7:00 PM">7:00 PM</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-slate-400 mb-2 uppercase tracking-widest">Service Required</label>
                <select id="service" name="service" value={formData.service} onChange={handleChange} className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:ring-1 focus:ring-gold-500 focus:border-gold-500 outline-none transition-all appearance-none [&>option]:bg-zinc-900 shadow-inner">
                  <option value="General Checkup">General Checkup</option>
                  <option value="Cosmetic Dentistry">Cosmetic Dentistry</option>
                  <option value="Dental Implants">Dental Implants</option>
                  <option value="Orthodontics">Orthodontics</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-400 mb-2 uppercase tracking-widest">Additional Notes (Optional)</label>
                <textarea id="message" name="message" rows="3" value={formData.message} onChange={handleChange} className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:ring-1 focus:ring-gold-500 focus:border-gold-500 outline-none transition-all placeholder-slate-600 resize-none shadow-inner" placeholder="Tell us about your dental concern..."></textarea>
              </div>

              <button type="submit" className="w-full btn-gold py-4 px-8 rounded-xl flex items-center justify-center gap-3 mt-4">
                <span className="uppercase tracking-widest">Confirm Reservation</span>
                <Send size={18} />
              </button>
            </form>
          </motion.div>

          {/* Contact & Map Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="mt-12 lg:mt-0 flex flex-col gap-8"
          >
            <div className="glass-dark-card rounded-3xl p-10 relative overflow-hidden group">
              <div className="absolute -right-16 -top-16 w-48 h-48 bg-gold-600/10 rounded-full group-hover:scale-150 transition-transform duration-1000 ease-out"></div>
              <h4 className="text-3xl font-serif mb-8 relative z-10 text-white">Clinic Information</h4>

              <div className="space-y-8 relative z-10">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 shadow-lg">
                    <MapPin size={24} className="text-gold-500" />
                  </div>
                  <div>
                    <h5 className="font-bold text-lg uppercase tracking-widest mb-1 text-white">Location</h5>
                    <p className="text-slate-400 font-light leading-relaxed mb-4">Booth No-44, Sector 55, Phase 1,<br/>Sahibzada Ajit Singh Nagar,<br/>Punjab 160055</p>
                    <a
                      href="https://maps.google.com/maps?daddr=Dr.+Om's+Dental+%26+Implant+Centre,+Booth+No-44,+Sector+55,+Phase+1,+Sahibzada+Ajit+Singh+Nagar,+Punjab+160055"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/5 hover:bg-gradient-gold hover:text-black border border-white/10 hover:border-gold-500 text-white text-sm font-bold uppercase tracking-widest rounded-full transition-all duration-500 shadow-lg"
                    >
                      <MapPin size={16} />
                      GET DIRECTIONS
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Clock size={24} className="text-gold-500" />
                  </div>
                  <div>
                    <h5 className="font-bold text-lg uppercase tracking-widest mb-1 text-white">Working Hours</h5>
                    <p className="text-slate-400 font-light leading-relaxed">Mon - Sat: 10:00 am - 2:00 pm,<br/> 5:00 pm - 9:00 pm</p>
                    <p className="text-gold-500 font-bold tracking-widest text-xs uppercase mt-2">Sunday Closed</p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 shadow-lg">
                    <Phone size={24} className="text-gold-500" />
                  </div>
                  <div>
                    <h5 className="font-bold text-lg uppercase tracking-widest mb-1 text-white">Contact</h5>
                    <p className="text-slate-400 font-light text-lg">+91 94176 89633</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex-grow rounded-3xl overflow-hidden shadow-2xl border border-white/5 min-h-[350px] relative bg-zinc-900 group">
              <div className="absolute inset-0 pointer-events-none border-4 border-transparent group-hover:border-gold-500/20 transition-colors duration-700 z-10 rounded-3xl"></div>
              {/* Google Maps Embed using exact provided address */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.404870020163!2d76.7027471!3d30.7323864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fef9e8f176de7%3A0x8e8eb4bd9235e115!2sDr.%20Om&#39;s%20Dental%20%26%20Implant%20Centre!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Clinic Location"
                className="absolute inset-0"
              ></iframe>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
