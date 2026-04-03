import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProductShowcase } from './components/ProductShowcase';
import { Lifestyle } from './components/Lifestyle';
import { Sustainability } from './components/Sustainability';
import { Newsletter } from './components/Newsletter';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        
        <div id="products">
          <ProductShowcase />
        </div>
        
        <div id="about">
          <Lifestyle />
        </div>
        
        <div id="campaigns">
          {/* Campaigns could be a separate component, but for now we'll use a featured section */}
          <section className="bg-coke-black py-24 text-white overflow-hidden relative">
            <div className="section-container relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <span className="text-coke-red font-bold uppercase tracking-widest text-sm mb-4 block">Limited Edition</span>
                  <h2 className="text-4xl md:text-6xl font-black mb-6">Coca-Cola <br /> Creations</h2>
                  <p className="text-white/70 text-lg mb-10 max-w-md">
                    Experience the unexpected. Our limited-edition drops bring together music, gaming, and culture in a bottle.
                  </p>
                  <button className="btn-primary">Explore Creations</button>
                </div>
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1629203851122-3726ecdf080e?auto=format&fit=crop&q=80&w=800" 
                    alt="Coca-Cola Creation" 
                    className="rounded-3xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute -top-10 -right-10 w-40 h-40 bg-coke-red rounded-full flex items-center justify-center animate-bounce">
                    <span className="font-black text-xl text-center">New <br /> Drop!</span>
                  </div>
                </div>
              </div>
            </div>
            {/* Background Accent */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-coke-red/10 rounded-full blur-[120px] pointer-events-none" />
          </section>
        </div>

        <Sustainability />
        
        <Newsletter />
      </main>

      <Footer />
    </div>
  );
}
