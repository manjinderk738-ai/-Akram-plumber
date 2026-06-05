import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Sparkles, Syringe, ShieldCheck } from 'lucide-react';

const services = [
  {
    title: 'General Dentistry',
    description: 'Comprehensive dental exams, cleanings, and preventative care to keep your smile healthy and bright.',
    icon: Activity,
  },
  {
    title: 'Cosmetic Dentistry',
    description: 'Transform your smile with our premium teeth whitening, veneers, and aesthetic treatments.',
    icon: Sparkles,
  },
  {
    title: 'Surgical Procedures',
    description: 'Expert oral surgery, extractions, and advanced implant procedures with minimal discomfort.',
    icon: Syringe,
  },
  {
    title: 'Dental Implants',
    description: 'Permanent, natural-looking tooth replacements using state-of-the-art materials and techniques.',
    icon: ShieldCheck,
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 relative overflow-hidden bg-[var(--color-navy)] text-white">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[var(--color-gold)] rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass-dark mb-6">
            <div className="w-2 h-2 rounded-full bg-[var(--color-gold)]"></div>
            <span className="text-sm font-medium tracking-widest uppercase text-[var(--color-gold)]">Expertise</span>
          </div>
          <h2 className="text-5xl font-serif mb-6 leading-tight">Elevated Dental Services</h2>
          <p className="text-lg text-gray-300 font-light">
            We provide a wide range of top-tier dental services tailored to meet the unique needs of every patient, using state-of-the-art technology.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -10, transition: { duration: 0.4 } }}
              className="glass-dark rounded-3xl p-8 border border-white/5 hover:border-[var(--color-gold)]/30 transition-all group"
            >
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-8 bg-white/5 text-[var(--color-gold)] group-hover:scale-110 group-hover:bg-[var(--color-gold)]/10 transition-all duration-500">
                <service.icon size={32} strokeWidth={1.5} />
              </div>
              <h4 className="text-2xl font-serif text-white mb-4">{service.title}</h4>
              <p className="text-gray-400 font-light leading-relaxed">
                {service.description}
              </p>
              <div className="mt-8 flex items-center text-[var(--color-gold)] text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
                Learn more <span className="ml-2">→</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
