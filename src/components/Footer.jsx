import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl font-bold tracking-tight mb-4">
          Dr. <span className="text-blue-500">Om's</span> Dental & Implant Centre
        </h2>
        <p className="text-gray-400 mb-6 max-w-md mx-auto">
          Delivering premium dental care in Mohali with state-of-the-art facilities and a commitment to your smile.
        </p>
        <div className="text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Dr. Om's Dental Clinic. All rights reserved. Built with ❤️ for premium healthcare.
        </div>
      </div>
    </footer>
  );
}
