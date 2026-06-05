import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Sparkles, Syringe, ShieldCheck } from 'lucide-react';

const services = [
  {
    title: 'General Dentistry',
    description: 'Comprehensive dental exams, cleanings, and preventative care to keep your smile healthy and bright.',
    icon: Activity,
    color: 'bg-blue-100 text-blue-600',
  },
  {
    title: 'Cosmetic Dentistry',
    description: 'Transform your smile with our premium teeth whitening, veneers, and aesthetic treatments.',
    icon: Sparkles,
    color: 'bg-purple-100 text-purple-600',
  },
  {
    title: 'Surgical Procedures',
    description: 'Expert oral surgery, extractions, and advanced implant procedures with minimal discomfort.',
    icon: Syringe,
    color: 'bg-rose-100 text-rose-600',
  },
  {
    title: 'Dental Implants',
    description: 'Permanent, natural-looking tooth replacements using state-of-the-art materials and techniques.',
    icon: ShieldCheck,
    color: 'bg-emerald-100 text-emerald-600',
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-blue-600 font-semibold tracking-wide uppercase mb-2">Our Services</h2>
          <h3 className="text-4xl font-extrabold text-gray-900 mb-4">Premium Dental Care</h3>
          <p className="text-lg text-gray-600">
            We provide a wide range of top-tier dental services tailored to meet the unique needs of every patient.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-gray-50 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all border border-gray-100"
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${service.color}`}>
                <service.icon size={28} />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h4>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
