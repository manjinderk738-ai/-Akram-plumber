import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Reviews from './components/Reviews';
import BookingAndMap from './components/BookingAndMap';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#050B14] text-slate-100 font-sans selection:bg-amber-400/30">
      <Header />
      <main>
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
