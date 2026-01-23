import React, { useState, useEffect } from 'react';
import { Menu, X, Calendar } from 'lucide-react';
import logoImage from '../assets/logo.jpg';

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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
      isScrolled
        ? 'bg-[#FAFAF8]/95 backdrop-blur-sm'
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          {/* ロゴ */}
          <div className="flex items-center">
            <img
              src={logoImage}
              alt="LUNOA 美容整体ロゴ"
              className="h-11 w-auto opacity-90"
              style={!isScrolled ? { filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3)) drop-shadow(0 1px 2px rgba(0,0,0,0.5))' } : {}}
            />
          </div>

          {/* デスクトップナビゲーション */}
          <nav className="hidden lg:flex items-center space-x-10">
            <button
              onClick={() => handleNavClick('#features')}
              className={`transition-opacity duration-200 ${
                isScrolled ? 'text-[#2E2E2E] hover:opacity-70' : 'text-white hover:opacity-70'
              }`}
              style={!isScrolled ? { textShadow: '0 2px 4px rgba(0,0,0,0.3), 0 1px 2px rgba(0,0,0,0.5)' } : {}}
            >
              特長
            </button>
            <button
              onClick={() => handleNavClick('#menu')}
              className={`transition-opacity duration-200 ${
                isScrolled ? 'text-[#2E2E2E] hover:opacity-70' : 'text-white hover:opacity-70'
              }`}
              style={!isScrolled ? { textShadow: '0 2px 4px rgba(0,0,0,0.3), 0 1px 2px rgba(0,0,0,0.5)' } : {}}
            >
              施術メニュー
            </button>
            <button
              onClick={() => handleNavClick('#results')}
              className={`transition-opacity duration-200 ${
                isScrolled ? 'text-[#2E2E2E] hover:opacity-70' : 'text-white hover:opacity-70'
              }`}
              style={!isScrolled ? { textShadow: '0 2px 4px rgba(0,0,0,0.3), 0 1px 2px rgba(0,0,0,0.5)' } : {}}
            >
              実績
            </button>
            <button
              onClick={() => handleNavClick('#access')}
              className={`transition-opacity duration-200 ${
                isScrolled ? 'text-[#2E2E2E] hover:opacity-70' : 'text-white hover:opacity-70'
              }`}
              style={!isScrolled ? { textShadow: '0 2px 4px rgba(0,0,0,0.3), 0 1px 2px rgba(0,0,0,0.5)' } : {}}
            >
              アクセス
            </button>
            <button
              onClick={() => handleNavClick('#faq')}
              className={`transition-opacity duration-200 ${
                isScrolled ? 'text-[#2E2E2E] hover:opacity-70' : 'text-white hover:opacity-70'
              }`}
              style={!isScrolled ? { textShadow: '0 2px 4px rgba(0,0,0,0.3), 0 1px 2px rgba(0,0,0,0.5)' } : {}}
            >
              FAQ
            </button>
          </nav>

          {/* CTAボタン */}
          <div className="hidden lg:block">
            <a
              href="https://duplicated-imdj.bolt.host/"
              target="_blank"
              rel="noopener noreferrer"
              className="cta inline-flex items-center space-x-2"
            >
              <Calendar className="w-4 h-4" />
              <span>WEB予約</span>
            </a>
          </div>

          {/* モバイルメニューボタン */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`lg:hidden p-2 transition-opacity ${
              isScrolled ? 'text-[#2E2E2E]' : 'text-white'
            }`}
            style={!isScrolled ? { filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.3)) drop-shadow(0 1px 2px rgba(0,0,0,0.5))' } : {}}
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* モバイルナビゲーション */}
        {isMenuOpen && (
          <div className="lg:hidden mt-6 pb-4 bg-[#F3F2EE]">
            <nav className="flex flex-col space-y-5 p-6">
              <button
                onClick={() => handleNavClick('#features')}
                className="text-[#2E2E2E] hover:opacity-70 text-left transition-opacity duration-200"
              >
                特長
              </button>
              <button
                onClick={() => handleNavClick('#menu')}
                className="text-[#2E2E2E] hover:opacity-70 text-left transition-opacity duration-200"
              >
                施術メニュー
              </button>
              <button
                onClick={() => handleNavClick('#results')}
                className="text-[#2E2E2E] hover:opacity-70 text-left transition-opacity duration-200"
              >
                実績
              </button>
              <button
                onClick={() => handleNavClick('#access')}
                className="text-[#2E2E2E] hover:opacity-70 text-left transition-opacity duration-200"
              >
                アクセス
              </button>
              <button
                onClick={() => handleNavClick('#faq')}
                className="text-[#2E2E2E] hover:opacity-70 text-left transition-opacity duration-200"
              >
                FAQ
              </button>
              <a
                href="https://duplicated-imdj.bolt.host/"
                target="_blank"
                rel="noopener noreferrer"
                className="cta text-center inline-block"
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