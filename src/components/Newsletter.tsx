import React from 'react';
import { motion } from 'motion/react';
import { Send } from 'lucide-react';

export const Newsletter = () => {
  return (
    <section className="bg-coke-red py-20 px-6">
      <div className="max-w-4xl mx-auto text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-black mb-6">Join the Experience</h2>
          <p className="text-white/80 text-lg mb-10 max-w-xl mx-auto">
            Subscribe to get exclusive updates on new products, seasonal campaigns, and limited edition drops.
          </p>

          <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-6 py-4 rounded-full text-coke-black focus:outline-none focus:ring-4 focus:ring-white/20 transition-all font-medium"
              required
            />
            <button className="bg-coke-black text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-coke-red transition-all flex items-center justify-center gap-2">
              Subscribe
              <Send size={18} />
            </button>
          </form>
          <p className="mt-6 text-sm text-white/60">
            By subscribing, you agree to our Privacy Policy and Terms of Service.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
