import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Sparkles, Syringe, ShieldCheck } from 'lucide-react';

const services = [
  {
    title: 'Consultation',
    description: 'Comprehensive evaluation and personalized homeopathic treatment plans.',
    icon: Activity,
  },
  {
    title: 'Chronic Diseases',
    description: 'Effective homeopathic treatment for chronic illnesses, focusing on root causes for long-term relief.',
    icon: ShieldCheck,
  },
  {
    title: 'Skin & Hair Care',
    description: 'Safe and natural remedies for various skin conditions and hair loss without side effects.',
    icon: Sparkles,
  },
  {
    title: 'Holistic Wellness',
    description: 'Immunity boosting and general well-being treatments using natural homeopathic medicines.',
    icon: Activity,
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 relative overflow-hidden bg-transparent text-white">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 pointer-events-none z-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gold-600 rounded-full blur-[150px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <div className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8">
            <div className="w-2 h-2 rounded-full bg-gold-500 animate-pulse"></div>
            <span className="text-xs font-semibold tracking-widest uppercase text-gold-400">Expertise</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-serif mb-6 leading-tight">Specialized Homeopathic Services</h2>
          <p className="text-lg text-slate-300 font-light max-w-2xl mx-auto">
            We offer a comprehensive range of premium treatments tailored to restore your natural health and well-being.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1, delay: index * 0.15, ease: [0.25, 0.1, 0.25, 1] }}
              whileHover={{ y: -15, scale: 1.02, transition: { duration: 0.5 } }}
              className="glass-dark-card rounded-3xl p-8 group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-gold-500/0 to-gold-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-8 bg-white/5 border border-white/10 text-gold-500 group-hover:scale-110 group-hover:bg-gold-500/10 group-hover:border-gold-500/30 transition-all duration-500 relative z-10 shadow-lg">
                <service.icon size={32} strokeWidth={1.5} />
              </div>
              <h4 className="text-2xl font-serif text-white mb-4 relative z-10">{service.title}</h4>
              <p className="text-slate-400 font-light leading-relaxed relative z-10">
                {service.description}
              </p>
              <div className="mt-8 flex items-center text-gold-400 text-sm font-bold tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0 relative z-10">
                Learn more <span className="ml-2">→</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
