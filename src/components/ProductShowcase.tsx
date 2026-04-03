import React from 'react';
import { motion } from 'motion/react';

const products = [
  {
    id: 1,
    name: 'Coca-Cola Original',
    description: 'The classic refreshing taste since 1886.',
    image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&q=80&w=800',
    color: 'bg-coke-red',
  },
  {
    id: 2,
    name: 'Coca-Cola Zero Sugar',
    description: 'Great Coke taste, zero sugar.',
    image: 'https://images.unsplash.com/photo-1543253687-c931c8e01820?auto=format&fit=crop&q=80&w=800',
    color: 'bg-black',
  },
  {
    id: 3,
    name: 'Diet Coke',
    description: 'Light, crisp, and refreshing.',
    image: 'https://images.unsplash.com/photo-1594498257602-32638e985296?auto=format&fit=crop&q=80&w=800',
    color: 'bg-gray-400',
  },
];

export const ProductShowcase = () => {
  return (
    <section id="products" className="section-container">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-black mb-4">Find Your Drink</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Explore our range of refreshing beverages designed for every taste and occasion.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group cursor-pointer"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl mb-6">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                <button className="w-full py-3 bg-white text-coke-black font-bold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform">
                  View Details
                </button>
              </div>
            </div>
            <h3 className="text-2xl font-black mb-2">{product.name}</h3>
            <p className="text-gray-500">{product.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
