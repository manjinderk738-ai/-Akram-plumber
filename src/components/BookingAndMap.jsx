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
    <section id="booking" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-blue-600 font-semibold tracking-wide uppercase mb-2">Visit Us</h2>
          <h3 className="text-4xl font-extrabold text-gray-900 mb-4">Book Your Appointment</h3>
          <p className="text-lg text-gray-600">
            Schedule a visit easily online. We look forward to giving you the best dental care in Mohali.
          </p>
        </motion.div>

        <div className="lg:grid lg:grid-cols-2 gap-12 lg:gap-8">
          {/* Booking Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gray-50 rounded-3xl p-8 shadow-sm border border-gray-100"
          >
            <h4 className="text-2xl font-bold text-gray-900 mb-6">Appointment Form</h4>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" placeholder="John Doe" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  <input type="tel" id="phone" name="phone" required value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" placeholder="+91 00000 00000" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-2">Preferred Date</label>
                  <input type="date" id="date" name="date" required value={formData.date} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" />
                </div>
                <div>
                  <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-2">Preferred Time</label>
                  <select id="time" name="time" required value={formData.time} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all">
                    <option value="">Select Time</option>
                    <option value="10:00 AM">10:00 AM</option>
                    <option value="11:30 AM">11:30 AM</option>
                    <option value="1:00 PM">1:00 PM</option>
                    <option value="5:30 PM">5:30 PM</option>
                    <option value="7:00 PM">7:00 PM</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">Service Required</label>
                <select id="service" name="service" value={formData.service} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all">
                  <option value="General Checkup">General Checkup</option>
                  <option value="Cosmetic Dentistry">Cosmetic Dentistry</option>
                  <option value="Dental Implants">Dental Implants</option>
                  <option value="Orthodontics">Orthodontics</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Additional Notes (Optional)</label>
                <textarea id="message" name="message" rows="3" value={formData.message} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" placeholder="Tell us about your dental concern..."></textarea>
              </div>

              <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-xl flex items-center justify-center gap-2 transition-all transform hover:-translate-y-1 shadow-lg hover:shadow-xl">
                <span>Confirm Booking</span>
                <Send size={18} />
              </button>
            </form>
          </motion.div>

          {/* Contact & Map Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-12 lg:mt-0 flex flex-col gap-8"
          >
            <div className="bg-blue-600 text-white rounded-3xl p-8 shadow-xl">
              <h4 className="text-2xl font-bold mb-6">Clinic Information</h4>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin size={24} className="flex-shrink-0 mt-1 text-blue-200" />
                  <div>
                    <h5 className="font-semibold text-lg">Location</h5>
                    <p className="text-blue-100 mt-1">Booth No-44, Sector 55, Phase 1,<br/>Sahibzada Ajit Singh Nagar,<br/>Punjab 160055</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock size={24} className="flex-shrink-0 mt-1 text-blue-200" />
                  <div>
                    <h5 className="font-semibold text-lg">Working Hours</h5>
                    <p className="text-blue-100 mt-1">Mon - Sat: 10:00 am - 2:00 pm,<br/> 5:00 pm - 9:00 pm</p>
                    <p className="text-blue-200 font-medium mt-1">Sunday Closed</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone size={24} className="flex-shrink-0 mt-1 text-blue-200" />
                  <div>
                    <h5 className="font-semibold text-lg">Contact</h5>
                    <p className="text-blue-100 mt-1">+91 94176 89633</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex-grow rounded-3xl overflow-hidden shadow-sm border border-gray-200 h-[300px] relative bg-gray-100">
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
