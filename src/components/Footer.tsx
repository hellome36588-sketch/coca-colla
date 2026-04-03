import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Globe } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 pt-20 pb-10">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-1">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/c/ce/Coca-Cola_logo.svg" 
              alt="Coca-Cola" 
              className="h-8 mb-8"
              referrerPolicy="no-referrer"
            />
            <p className="text-gray-500 mb-8 max-w-xs">
              Refreshing the world and making a difference since 1886.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-coke-red hover:text-white transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-black text-lg mb-6 uppercase tracking-wider">Products</h4>
            <ul className="space-y-4 text-gray-500 font-medium">
              <li><a href="#" className="hover:text-coke-red transition-colors">Coca-Cola Original</a></li>
              <li><a href="#" className="hover:text-coke-red transition-colors">Coca-Cola Zero Sugar</a></li>
              <li><a href="#" className="hover:text-coke-red transition-colors">Diet Coke</a></li>
              <li><a href="#" className="hover:text-coke-red transition-colors">Sprite</a></li>
              <li><a href="#" className="hover:text-coke-red transition-colors">Fanta</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-black text-lg mb-6 uppercase tracking-wider">Company</h4>
            <ul className="space-y-4 text-gray-500 font-medium">
              <li><a href="#" className="hover:text-coke-red transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-coke-red transition-colors">Sustainability</a></li>
              <li><a href="#" className="hover:text-coke-red transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-coke-red transition-colors">Investors</a></li>
              <li><a href="#" className="hover:text-coke-red transition-colors">Newsroom</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-black text-lg mb-6 uppercase tracking-wider">Support</h4>
            <ul className="space-y-4 text-gray-500 font-medium">
              <li><a href="#" className="hover:text-coke-red transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-coke-red transition-colors">Store Locator</a></li>
              <li><a href="#" className="hover:text-coke-red transition-colors">FAQs</a></li>
              <li className="flex items-center gap-2 pt-4">
                <Globe size={18} />
                <span className="text-coke-black font-bold">United States | English</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-gray-400 font-medium">
          <p>© 2026 The Coca-Cola Company. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-coke-black transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-coke-black transition-colors">Terms of Use</a>
            <a href="#" className="hover:text-coke-black transition-colors">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
