import React from 'react';
import { motion } from 'motion/react';
import { Leaf, Droplets, Recycle } from 'lucide-react';

export const Sustainability = () => {
  return (
    <section id="sustainability" className="section-container">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="order-2 lg:order-1"
        >
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <img 
                src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=600" 
                alt="Recycling" 
                className="rounded-3xl w-full aspect-[4/5] object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="bg-green-50 p-6 rounded-3xl">
                <Recycle className="text-green-600 mb-4" size={32} />
                <h4 className="font-bold text-lg mb-2">World Without Waste</h4>
                <p className="text-sm text-gray-600">Our goal is to recycle every bottle we sell by 2030.</p>
              </div>
            </div>
            <div className="space-y-4 pt-12">
              <div className="bg-blue-50 p-6 rounded-3xl">
                <Droplets className="text-blue-600 mb-4" size={32} />
                <h4 className="font-bold text-lg mb-2">Water Stewardship</h4>
                <p className="text-sm text-gray-600">Returning 100% of the water we use to nature.</p>
              </div>
              <img 
                src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=600" 
                alt="Nature" 
                className="rounded-3xl w-full aspect-[4/5] object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="order-1 lg:order-2"
        >
          <div className="flex items-center gap-2 text-green-600 font-bold uppercase tracking-widest text-sm mb-4">
            <Leaf size={18} />
            Sustainability
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">
            A Better Shared <br />
            <span className="text-green-600">Future.</span>
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            We're committed to making a positive impact on the planet. From reducing our carbon footprint to empowering communities, sustainability is at the heart of everything we do.
          </p>
          <button className="btn-secondary !border-green-600 !text-green-600 hover:!bg-green-600 hover:!text-white">
            Our Sustainability Goals
          </button>
        </motion.div>
      </div>
    </section>
  );
};
