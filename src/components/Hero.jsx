import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star, Phone } from 'lucide-react';

export default function Hero() {
  const phoneNumber = "+919417689633";
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center bg-transparent overflow-hidden pt-24 pb-16">
      {/* Abstract Background Elements */}
      <div className="absolute top-[-10%] right-[-5%] w-[800px] h-[800px] bg-gradient-to-br from-gold-500/10 to-transparent rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-gradient-to-tr from-zinc-900/5 to-transparent rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="lg:grid lg:grid-cols-12 lg:gap-12 items-center">

          <motion.div
            className="lg:col-span-6 text-center lg:text-left z-20"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 shadow-sm mb-8 backdrop-blur-md">
              <span className="flex h-2 w-2 rounded-full bg-gold-500"></span>
              <span className="text-xs font-semibold tracking-widest uppercase text-slate-300">Premium Homeopathy in Dehradun</span>
            </motion.div>

            <motion.h1 variants={itemVariants} className="text-5xl sm:text-6xl lg:text-7xl font-serif font-bold text-white tracking-tight mb-8 leading-[1.1]">
              Artistry in <br/>
              <span className="relative inline-block mt-2">
                <span className="relative z-10 text-gradient">Homeopathic Care</span>
                <span className="absolute bottom-2 left-0 w-full h-4 bg-gold-500/20 -z-10 transform -rotate-2"></span>
              </span>
            </motion.h1>

            <motion.p variants={itemVariants} className="text-lg text-slate-300 mb-10 max-w-xl mx-auto lg:mx-0 font-light leading-relaxed">
              Experience a new standard of homeopathic excellence. Om Homeopathic Speciality Clinic combines cutting-edge technology with bespoke patient care to restore your natural health.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
              <a
                href="#booking"
                className="group relative overflow-hidden bg-gradient-gold text-black px-8 py-4 rounded-full font-bold text-sm tracking-widest uppercase flex items-center justify-center gap-3 transition-all shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_30px_rgba(212,175,55,0.5)]"
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></span>
                <span>Book Consultation</span>
                <ArrowRight size={18} className="transform group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="https://maps.app.goo.gl/3wz89q2u5q1z8z5Z9"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white/5 backdrop-blur-md border border-white/10 hover:border-gold-500/50 text-white px-8 py-4 rounded-full font-medium text-sm tracking-widest uppercase flex items-center justify-center gap-3 transition-all hover:bg-white/10 shadow-lg"
              >
                <span className="w-2 h-2 rounded-full bg-gold-500 animate-pulse"></span>
                <span>Get Directions</span>
              </a>
            </motion.div>

            <motion.div variants={itemVariants} className="mt-12 flex items-center justify-center lg:justify-start gap-6 pt-8 border-t border-white/10">
              <div className="flex -space-x-4">
                {[1, 2, 3, 4].map((i) => (
                  <img key={i} className="w-12 h-12 rounded-full border-2 border-zinc-900 shadow-sm" src={`https://i.pravatar.cc/100?img=${i + 10}`} alt={`Patient ${i}`} />
                ))}
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} size={16} className="text-gold-500 fill-current" />
                  ))}
                </div>
                <span className="text-sm font-medium text-slate-300 mt-1">5.0 / 5.0 from 64+ Reviews</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="lg:col-span-6 mt-16 lg:mt-0 relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          >
            {/* Decorative Frame */}
            <div className="absolute -inset-4 border border-gold-500/30 rounded-[2.5rem] transform rotate-3 scale-105 z-0 hidden lg:block transition-transform duration-700 hover:rotate-6"></div>

            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl z-10 animate-float">
              <div className="absolute inset-0 bg-zinc-900/10 mix-blend-overlay z-10"></div>
              <img
                src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                alt="Premium Homeopathic Clinic Interior"
                className="w-full h-[600px] object-cover scale-105"
              />

              {/* Premium Floating Badge */}
              <div className="absolute bottom-8 left-8 right-8 z-20">
                <div className="glass-dark rounded-2xl p-6 flex items-center justify-between">
                  <div>
                    <p className="text-white font-serif text-xl mb-1">State of the Art</p>
                    <p className="text-slate-300 text-sm font-light">Specialized Homeopathic Treatments</p>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-gold-500 flex items-center justify-center shadow-lg shadow-gold-500/30">
                    <Star size={20} className="text-white fill-current" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
