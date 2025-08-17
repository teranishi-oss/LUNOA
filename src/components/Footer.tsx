import React from 'react';
import { Heart, Instagram, Facebook, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-rose-400 to-pink-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">B</span>
              </div>
              <h3 className="text-xl font-bold">Beauty Holistic</h3>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Your sanctuary for holistic beauty and wellness treatments that nurture both body and soul.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-rose-500 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-rose-500 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-rose-500 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-rose-500 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-rose-400 transition-colors">Facial Rejuvenation</a></li>
              <li><a href="#" className="hover:text-rose-400 transition-colors">Body Wellness</a></li>
              <li><a href="#" className="hover:text-rose-400 transition-colors">Anti-Aging</a></li>
              <li><a href="#" className="hover:text-rose-400 transition-colors">Natural Skincare</a></li>
              <li><a href="#" className="hover:text-rose-400 transition-colors">Energy Healing</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-rose-400 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-rose-400 transition-colors">Our Team</a></li>
              <li><a href="#" className="hover:text-rose-400 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-rose-400 transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-rose-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-gray-400">
              <li>123 Wellness Avenue</li>
              <li>Downtown Spa District</li>
              <li>(555) 123-4567</li>
              <li>hello@beautyholistic.com</li>
              <li>Mon-Sat: 9AM-7PM</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 Beauty Holistic. All rights reserved.
            </p>
            <div className="flex items-center space-x-1 text-gray-400 text-sm mt-4 md:mt-0">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-rose-500 fill-current" />
              <span>for your wellness</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;