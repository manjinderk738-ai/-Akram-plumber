import React from 'react';
import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';

export default function Header() {
  const whatsappNumber = "919417689633"; // without the plus, required format for WhatsApp API

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <h1 className="text-2xl font-bold text-gray-900 tracking-tight">
              Dr. <span className="text-blue-600">Om's</span> Dental
            </h1>
          </div>

          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">Home</a>
            <a href="#services" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">Services</a>
            <a href="#reviews" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">Reviews</a>
            <a href="#booking" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">Book Online</a>
          </nav>

          <div className="flex items-center">
            <a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white px-5 py-2.5 rounded-full font-medium flex items-center gap-2 transition-all transform hover:scale-105 shadow-md hover:shadow-lg"
            >
              <Phone size={18} />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
