import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    name: 'Aarti Sharma',
    date: '2 weeks ago',
    text: 'Osteo arthritis and joint problems relieved fastly by om clinic treatment. Highly recommend their personalized care.',
    rating: 5
  },
  {
    name: 'Rajinder Singh',
    date: '1 month ago',
    text: 'Best doctor for consultation and treatment for skin disorders. Very professional and caring approach.',
    rating: 5
  },
  {
    name: 'Priya Verma',
    date: '2 months ago',
    text: 'Amazing experience. I went for a cosmetic procedure and the results are fantastic. Truly 5-star service.',
    rating: 5
  }
];

export default function Reviews() {
  return (
    <section id="reviews" className="py-32 bg-transparent relative overflow-hidden">
      {/* Background elegant accents */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-64 h-64 bg-gold-600/10 rounded-full blur-[100px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
            className="lg:w-1/3"
          >
            <div className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8">
              <div className="w-2 h-2 rounded-full bg-gold-500 animate-pulse"></div>
              <span className="text-xs font-semibold tracking-widest uppercase text-gold-400">Testimonials</span>
            </div>
            <h3 className="text-5xl md:text-6xl font-serif text-white mb-8 leading-tight">Patient<br />Experiences</h3>

            <div className="glass-dark-card p-8 rounded-3xl flex items-center gap-6 mb-8 group hover:-translate-y-2 transition-transform duration-500">
              <div className="text-6xl font-serif text-white">5.0</div>
              <div>
                <div className="flex text-gold-500 mb-2">
                  {[...Array(5)].map((_, i) => <Star key={i} size={22} className="fill-current" />)}
                </div>
                <div className="text-slate-400 font-medium tracking-widest text-xs uppercase">Based on 64+ reviews</div>
              </div>
            </div>

            <p className="text-slate-300 text-lg font-light leading-relaxed">
              We take pride in delivering the highest quality homeopathic care. Our perfect rating reflects an unwavering commitment to patient excellence.
            </p>
          </motion.div>

          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8 relative">
            {reviews.map((review, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 1, delay: index * 0.2, ease: [0.25, 0.1, 0.25, 1] }}
                className={`glass-dark-card p-10 rounded-3xl relative group hover:-translate-y-2 transition-all duration-500 ${index === 2 ? 'md:col-span-2 md:w-3/4 md:mx-auto' : ''}`}
              >
                <Quote size={60} className="text-gold-500/10 absolute top-8 right-8 group-hover:scale-110 group-hover:text-gold-500/20 transition-all duration-500" />
                <div className="flex text-gold-500 mb-6">
                  {[...Array(review.rating)].map((_, i) => <Star key={i} size={18} className="fill-current" />)}
                </div>
                <p className="text-slate-300 mb-8 relative z-10 font-serif text-lg leading-relaxed">"{review.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-gold flex items-center justify-center text-black font-serif text-xl shadow-lg">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-white">{review.name}</h4>
                    <p className="text-sm text-slate-400 font-light">{review.date}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
