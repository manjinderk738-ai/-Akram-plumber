import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Reviews from './components/Reviews';
import BookingAndMap from './components/BookingAndMap';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      <Header />
      <main className="pt-20">
        <Hero />
        <Services />
        <Reviews />
        <BookingAndMap />
      </main>
      <Footer />
    </div>
  );
}

export default App;
