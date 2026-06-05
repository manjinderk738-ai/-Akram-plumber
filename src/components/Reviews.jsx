import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    name: 'Aarti Sharma',
    date: '2 weeks ago',
    text: 'Best dental clinic in Mohali! Dr. Om is extremely professional and patient. The clinic is very clean and the staff is cooperative.',
    rating: 5
  },
  {
    name: 'Rajinder Singh',
    date: '1 month ago',
    text: 'Got my dental implants done here. Painless experience and very premium care. Highly recommended for anyone looking for serious dental work.',
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
    <section id="reviews" className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/3"
          >
            <h2 className="text-blue-600 font-semibold tracking-wide uppercase mb-2">Patient Reviews</h2>
            <h3 className="text-4xl font-extrabold text-gray-900 mb-6">What Our Patients Say</h3>

            <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 flex items-center gap-6 mb-8">
              <div className="text-5xl font-black text-gray-900">5.0</div>
              <div>
                <div className="flex text-yellow-400 mb-1">
                  {[...Array(5)].map((_, i) => <Star key={i} size={20} className="fill-current" />)}
                </div>
                <div className="text-gray-600 font-medium">Based on 64 reviews</div>
              </div>
            </div>

            <p className="text-gray-600">
              We take pride in delivering the highest quality dental care. Our 5.0 Google rating reflects our commitment to patient satisfaction.
            </p>
          </motion.div>

          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6 relative">
            {reviews.map((review, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`bg-white p-8 rounded-2xl shadow-sm border border-gray-100 relative ${index === 2 ? 'md:col-span-2 md:w-1/2 md:mx-auto' : ''}`}
              >
                <Quote size={40} className="text-blue-100 absolute top-6 right-6" />
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(review.rating)].map((_, i) => <Star key={i} size={16} className="fill-current" />)}
                </div>
                <p className="text-gray-700 mb-6 relative z-10 italic">"{review.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{review.name}</h4>
                    <p className="text-sm text-gray-500">{review.date}</p>
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
