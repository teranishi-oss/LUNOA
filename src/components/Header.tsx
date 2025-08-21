import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);


  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gold-100' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-3">
            <img 
              src="/images/rogo.png"
              alt="LUNOA Logo" 
              className="w-16 h-16 object-contain"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-amber-600 font-medium transition-colors duration-200 relative group">
              ホーム
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-600 transition-all duration-200 group-hover:w-full"></span>
            </a>
            <a href="#about" className="text-gray-700 hover:text-amber-600 font-medium transition-colors duration-200 relative group">
              サロンについて
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-600 transition-all duration-200 group-hover:w-full"></span>
            </a>
            <a href="#services" className="text-gray-700 hover:text-amber-600 font-medium transition-colors duration-200 relative group">
              サービス
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-600 transition-all duration-200 group-hover:w-full"></span>
            </a>
            <a href="#therapists" className="text-gray-700 hover:text-amber-600 font-medium transition-colors duration-200 relative group">
              セラピスト
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-600 transition-all duration-200 group-hover:w-full"></span>
            </a>
            <a href="#testimonials" className="text-gray-700 hover:text-amber-600 font-medium transition-colors duration-200 relative group">
              お客様の声
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-600 transition-all duration-200 group-hover:w-full"></span>
            </a>
            <a href="#contact" className="text-gray-700 hover:text-amber-600 font-medium transition-colors duration-200 relative group">
              お問い合わせ
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-600 transition-all duration-200 group-hover:w-full"></span>
            </a>
          </nav>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-gray-700 hover:text-gold-600 transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md border-b border-gold-100 shadow-lg">
            <nav className="py-4">
              <a href="#home" onClick={() => setIsMenuOpen(false)} className="block px-4 py-3 text-gray-700 hover:text-amber-600 hover:bg-amber-50 transition-colors duration-200">
                ホーム
              </a>
              <a href="#about" onClick={() => setIsMenuOpen(false)} className="block px-4 py-3 text-gray-700 hover:text-amber-600 hover:bg-amber-50 transition-colors duration-200">
                サロンについて
              </a>
              <a href="#services" onClick={() => setIsMenuOpen(false)} className="block px-4 py-3 text-gray-700 hover:text-amber-600 hover:bg-amber-50 transition-colors duration-200">
                サービス
              </a>
              <a href="#therapists" onClick={() => setIsMenuOpen(false)} className="block px-4 py-3 text-gray-700 hover:text-amber-600 hover:bg-amber-50 transition-colors duration-200">
                セラピスト
              </a>
              <a href="#testimonials" onClick={() => setIsMenuOpen(false)} className="block px-4 py-3 text-gray-700 hover:text-amber-600 hover:bg-amber-50 transition-colors duration-200">
                お客様の声
              </a>
              <a href="#contact" onClick={() => setIsMenuOpen(false)} className="block px-4 py-3 text-gray-700 hover:text-amber-600 hover:bg-amber-50 transition-colors duration-200">
                お問い合わせ
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}