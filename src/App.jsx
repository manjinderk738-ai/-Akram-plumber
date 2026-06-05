import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Reviews from './components/Reviews';
import BookingAndMap from './components/BookingAndMap';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-slate-100 font-sans selection:bg-amber-400/30 overflow-x-hidden relative">
      {/* Ambient background glows */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-amber-600/5 blur-[150px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-amber-600/5 blur-[150px]"></div>
        <div className="absolute top-[40%] right-[20%] w-[30%] h-[30%] rounded-full bg-zinc-600/5 blur-[150px]"></div>
      </div>
      <div className="relative z-10">
      <Header />
      <main>
        <Hero />
        <Services />
        <Reviews />
        <BookingAndMap />
      </main>
      <Footer />
      </div>
    </div>
  );
}

export default App;
