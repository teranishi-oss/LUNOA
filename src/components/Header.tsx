import React, { useState, useEffect } from 'react';
import { Menu, X, Calendar } from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* ロゴ */}
          <div className="flex items-center">
            <img 
              src="/images/logo.png" 
              alt="LUNOA 美容整体ロゴ" 
              className="h-12 w-auto"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                const fallback = target.nextElementSibling as HTMLElement;
                if (fallback) fallback.style.display = 'block';
              }}
            />
            <h1 className="text-2xl font-bold text-[#2C2C2C] ml-3" style={{ display: 'none' }}>
              LUNOA
            </h1>
          </div>

          {/* デスクトップナビゲーション */}
          <nav className="hidden lg:flex items-center space-x-8">
            <button 
              onClick={() => handleNavClick('#features')}
              className={`font-medium transition-colors duration-200 ${
                isScrolled ? 'text-[#2C2C2C] hover:text-[#D4AF37]' : 'text-white hover:text-[#D4AF37]'
              }`}
            >
              特長
            </button>
            <button 
              onClick={() => handleNavClick('#menu')}
              className={`font-medium transition-colors duration-200 ${
                isScrolled ? 'text-[#2C2C2C] hover:text-[#D4AF37]' : 'text-white hover:text-[#D4AF37]'
              }`}
            >
              施術メニュー
            </button>
            <button 
              onClick={() => handleNavClick('#results')}
              className={`font-medium transition-colors duration-200 ${
                isScrolled ? 'text-[#2C2C2C] hover:text-[#D4AF37]' : 'text-white hover:text-[#D4AF37]'
              }`}
            >
              実績
            </button>
            <button 
              onClick={() => handleNavClick('#access')}
              className={`font-medium transition-colors duration-200 ${
                isScrolled ? 'text-[#2C2C2C] hover:text-[#D4AF37]' : 'text-white hover:text-[#D4AF37]'
              }`}
            >
              アクセス
            </button>
            <button 
              onClick={() => handleNavClick('#faq')}
              className={`font-medium transition-colors duration-200 ${
                isScrolled ? 'text-[#2C2C2C] hover:text-[#D4AF37]' : 'text-white hover:text-[#D4AF37]'
              }`}
            >
              FAQ
            </button>
          </nav>

          {/* CTAボタン */}
          <div className="hidden lg:block">
            <a 
              href="#booking"
              className="bg-[#D4AF37] hover:bg-[#B8941F] text-white font-bold px-6 py-3 rounded-full transition-all duration-200 hover:shadow-lg hover:scale-105 flex items-center space-x-2"
            >
              <Calendar className="w-5 h-5" />
              <span>WEB予約</span>
            </a>
          </div>

          {/* モバイルメニューボタン */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`lg:hidden p-2 transition-colors ${
              isScrolled ? 'text-[#2C2C2C]' : 'text-white'
            }`}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* モバイルナビゲーション */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 bg-white rounded-lg shadow-lg">
            <nav className="flex flex-col space-y-4 p-4">
              <button 
                onClick={() => handleNavClick('#features')}
                className="text-[#2C2C2C] hover:text-[#D4AF37] font-medium text-left transition-colors duration-200"
              >
                特長
              </button>
              <button 
                onClick={() => handleNavClick('#menu')}
                className="text-[#2C2C2C] hover:text-[#D4AF37] font-medium text-left transition-colors duration-200"
              >
                施術メニュー
              </button>
              <button 
                onClick={() => handleNavClick('#results')}
                className="text-[#2C2C2C] hover:text-[#D4AF37] font-medium text-left transition-colors duration-200"
              >
                実績
              </button>
              <button 
                onClick={() => handleNavClick('#access')}
                className="text-[#2C2C2C] hover:text-[#D4AF37] font-medium text-left transition-colors duration-200"
              >
                アクセス
              </button>
              <button 
                onClick={() => handleNavClick('#faq')}
                className="text-[#2C2C2C] hover:text-[#D4AF37] font-medium text-left transition-colors duration-200"
              >
                FAQ
              </button>
              <a 
                href="#booking"
                className="bg-[#D4AF37] hover:bg-[#B8941F] text-white font-bold px-6 py-3 rounded-full transition-all duration-200 text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                WEB予約
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}