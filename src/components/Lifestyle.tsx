import React from 'react';
import { motion } from 'motion/react';
import { Heart, Users, Sparkles } from 'lucide-react';

export const Lifestyle = () => {
  return (
    <section className="bg-coke-gray py-24">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">
              More Than Just a Drink, <br />
              <span className="text-coke-red">It's a Connection.</span>
            </h2>
            <p className="text-lg text-gray-600 mb-10">
              Coca-Cola has been at the center of shared moments for over a century. From family dinners to global celebrations, we're here to refresh the world and make a difference.
            </p>

            <div className="space-y-6">
              {[
                { icon: <Heart className="text-coke-red" />, title: 'Shared Happiness', desc: 'Creating smiles and memories in every corner of the globe.' },
                { icon: <Users className="text-coke-red" />, title: 'Community First', desc: 'Supporting local initiatives and fostering togetherness.' },
                { icon: <Sparkles className="text-coke-red" />, title: 'Real Magic', desc: 'Finding the extraordinary in everyday moments.' },
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="mt-1">{item.icon}</div>
                  <div>
                    <h4 className="font-bold text-xl">{item.title}</h4>
                    <p className="text-gray-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-full overflow-hidden border-[16px] border-white shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&q=80&w=1000" 
                alt="Friends sharing a Coke" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-coke-red text-white p-8 rounded-3xl shadow-xl max-w-[200px]">
              <p className="font-black text-3xl mb-1">130+</p>
              <p className="text-sm font-bold uppercase tracking-wider">Years of Refreshment</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
