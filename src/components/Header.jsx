import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Phone } from 'lucide-react';

export default function Header() {
  const whatsappNumber = "919417689633"; // without the plus, required format for WhatsApp API
  const phoneNumber = "+919417689633";

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 glass"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          <div className="flex-shrink-0 flex items-center">
            <div className="flex flex-col">
              <h1 className="text-2xl font-serif font-bold text-navy-900 tracking-tight leading-none">
                Dr. OM
              </h1>
              <span className="text-[10px] uppercase tracking-[0.2em] text-gold-600 font-semibold mt-1">Dental & Implant Centre</span>
            </div>
          </div>

          <nav className="hidden md:flex space-x-10">
            {['Home', 'Services', 'Reviews', 'Book Online'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().split(' ')[0]}`}
                className="text-slate-600 hover:text-gold-600 text-sm uppercase tracking-wider font-medium transition-colors relative group"
              >
                {item}
                <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-gold-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <a
              href={`tel:${phoneNumber}`}
              className="group relative overflow-hidden bg-navy-900 hover:bg-navy-800 text-white px-6 py-3 rounded-full font-medium flex items-center gap-2 transition-all shadow-xl shadow-navy-900/20"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></span>
              <Phone size={16} className="text-gold-500" />
              <span className="hidden sm:inline text-sm uppercase tracking-wider">Call Now</span>
            </a>
            <a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden bg-[#25D366] hover:bg-[#20bd5a] text-white px-6 py-3 rounded-full font-medium flex items-center gap-2 transition-all shadow-xl shadow-[#25D366]/20"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></span>
              <MessageCircle size={18} />
              <span className="hidden lg:inline text-sm uppercase tracking-wider">WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
