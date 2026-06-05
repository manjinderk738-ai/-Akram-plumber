import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Phone } from 'lucide-react';

export default function Header() {
  const whatsappNumber = "919760578884"; // without the plus, required format for WhatsApp API
  const phoneNumber = "+919760578884";

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 glass-dark"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-24">
            <div className="flex-shrink-0 flex items-center">
              <div className="flex flex-col">
                <h1 className="text-2xl font-serif font-bold text-white tracking-tight leading-none">
                  Dr. OM
                </h1>
                <span className="text-[10px] uppercase tracking-[0.2em] text-gold-500 font-semibold mt-1">Homeopathic Speciality Clinic</span>
              </div>
            </div>

            <nav className="hidden md:flex space-x-10">
              {['Home', 'Services', 'Reviews', 'Book Online'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().split(' ')[0]}`}
                  className="text-slate-300 hover:text-gold-400 text-sm uppercase tracking-wider font-medium transition-colors relative group"
                >
                  {item}
                  <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-gradient-gold transition-all duration-300 group-hover:w-full shadow-[0_0_10px_rgba(212,175,55,0.5)]"></span>
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-4">
              <a
                href={`tel:${phoneNumber}`}
                className="group relative overflow-hidden bg-white/5 border border-white/10 hover:border-gold-500/50 text-white px-6 py-3 rounded-full font-medium flex items-center gap-2 transition-all shadow-xl"
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></span>
                <Phone size={16} className="text-gold-500" />
                <span className="hidden sm:inline text-sm uppercase tracking-wider">Call Now</span>
              </a>
              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden bg-[#25D366]/20 border border-[#25D366]/30 hover:border-[#25D366] hover:bg-[#25D366]/30 text-white px-6 py-3 rounded-full font-medium flex items-center gap-2 transition-all shadow-xl shadow-[#25D366]/10"
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></span>
                <MessageCircle size={18} className="text-[#25D366]" />
                <span className="hidden lg:inline text-sm uppercase tracking-wider">WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Floating Global WhatsApp Button */}
      <motion.a
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, duration: 0.5, type: "spring" }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        href={`https://wa.me/${whatsappNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(37,211,102,0.4)] hover:shadow-[0_0_40px_rgba(37,211,102,0.6)] text-white transition-shadow group overflow-hidden"
      >
        <span className="absolute inset-0 w-full h-full rounded-full border-2 border-[#25D366] animate-ping opacity-20"></span>
        <span className="absolute inset-0 w-full h-full bg-gradient-to-tr from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></span>
        <MessageCircle size={32} />
      </motion.a>
    </>
  );
}
