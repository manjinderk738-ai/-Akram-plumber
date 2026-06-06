import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[var(--color-navy)] text-white py-16 border-t border-white/10 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-px bg-gradient-to-r from-transparent via-[var(--color-gold)]/50 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-3xl font-serif tracking-wide mb-6">
          Dr. Sonal Shrivastava Clinic
        </h2>
        <p className="text-gray-400 mb-10 max-w-md mx-auto font-light leading-relaxed">
          Redefining Hormonal excellence with personalized care and advanced natural treatments.
        </p>

        <div className="flex justify-center gap-6 mb-10">
          {['Home', 'Services', 'Reviews', 'Book Online'].map((item, i) => (
            <a key={i} href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-sm font-medium tracking-wider uppercase text-gray-400 hover:text-[var(--color-gold)] transition-colors duration-300">
              {item}
            </a>
          ))}
        </div>

        <div className="text-gray-500 text-sm font-light border-t border-white/5 pt-8">
          &copy; {new Date().getFullYear()} Dr. Sonal Shrivastava Clinic. All rights reserved. <br/>
          <span className="opacity-50 text-xs mt-2 inline-block">Crafted for premium healthcare.</span>
        </div>
      </div>
    </footer>
  );
}
