import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';

export default function Hero() {
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
    <section id="home" className="relative bg-gradient-to-br from-blue-50 to-white overflow-hidden pt-12 sm:pt-20 lg:pt-24 pb-16">
      {/* Background Graphic Elements */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
      <div className="absolute top-40 left-0 -ml-20 w-[500px] h-[500px] bg-blue-50 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">

          <motion.div
            className="lg:col-span-6 text-center lg:text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-semibold text-sm mb-6 shadow-sm">
              <Star size={16} className="fill-current" />
              <span>Best Dental Clinic in Mohali (5.0 Rating)</span>
            </motion.div>

            <motion.h1 variants={itemVariants} className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-gray-900 tracking-tight mb-6 leading-tight">
              Premium Dental <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                Care & Implants
              </span>
            </motion.h1>

            <motion.p variants={itemVariants} className="text-lg sm:text-xl text-gray-600 mb-10 max-w-2xl mx-auto lg:mx-0">
              Experience world-class dentistry with state-of-the-art technology. Dr. Om's Dental & Implant Centre ensures your smile is in the best hands.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#booking"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Book an Appointment
                <ArrowRight size={20} />
              </a>
              <a
                href="#services"
                className="bg-white hover:bg-gray-50 text-gray-900 border border-gray-200 px-8 py-4 rounded-full font-semibold text-lg flex items-center justify-center transition-all shadow-sm hover:shadow-md"
              >
                Explore Services
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            className="lg:col-span-6 mt-16 lg:mt-0"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
              {/* Using a placeholder for the hero image representing a modern dental clinic */}
              <img
                src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Modern Dental Clinic"
                className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 p-8 z-20">
                <div className="bg-white/20 backdrop-blur-md rounded-2xl p-4 border border-white/30 flex items-center gap-4">
                  <div className="bg-blue-600 text-white p-3 rounded-full">
                    <Star size={24} className="fill-current" />
                  </div>
                  <div>
                    <p className="text-white font-bold text-xl">5.0 / 5.0</p>
                    <p className="text-blue-100 text-sm">Based on 64 Reviews</p>
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
