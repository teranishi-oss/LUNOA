import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

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
        ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gold-100' 
        : 'bg-white/90 backdrop-blur-md'
    }`}>
      <div className="container mx-auto px-4 py-4">
        {/* ロゴセクション - 完全中央配置 */}
        <div className="flex justify-center items-center mb-4">
          <img 
            src="/images/rogo.png"
            alt="LUNOA Logo" 
            className="w-16 h-16 object-contain"
          />
          <h1 className="ml-3 text-2xl font-bold text-orange-300">
            美容整体 LUNOA
          </h1>
        </div>

        {/* デスクトップナビゲーション */}
        <div className="hidden lg:block">
          <nav className="flex justify-center items-center space-x-8">
            <button 
              onClick={() => handleNavClick('#home')}
              className="text-gray-600 hover:text-orange-300 font-medium transition-colors duration-200"
            >
              ホーム
            </button>
            <button 
              onClick={() => handleNavClick('#about')}
              className="text-gray-600 hover:text-orange-300 font-medium transition-colors duration-200"
            >
              サロンについて
            </button>
            <button 
              onClick={() => handleNavClick('#services')}
              className="text-gray-600 hover:text-orange-300 font-medium transition-colors duration-200"
            >
              サービス
            </button>
            <button 
              onClick={() => handleNavClick('#therapists')}
              className="text-gray-600 hover:text-orange-300 font-medium transition-colors duration-200"
            >
              セラピスト
            </button>
            <button 
              onClick={() => handleNavClick('#testimonials')}
              className="text-gray-600 hover:text-orange-300 font-medium transition-colors duration-200"
            >
              お客様の声
            </button>
            <button 
              onClick={() => handleNavClick('#contact')}
              className="text-gray-600 hover:text-orange-300 font-medium transition-colors duration-200"
            >
              お問い合わせ
            </button>
            <a 
              href="https://bookom.jp/reservation?company=69&course=1339&defaultLang=ja&shop=238"
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white px-6 py-2 rounded-full font-medium transition-all duration-200 hover:shadow-lg"
              style={{ background: 'linear-gradient(135deg, #d2b48c, #deb887)' }}
            >
              ご予約
            </a>
          </nav>
        </div>

        {/* モバイルメニューボタン */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden absolute top-4 right-4 p-2 text-gray-600 hover:text-orange-300 transition-colors"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* モバイルナビゲーション */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4">
            <nav className="flex flex-col items-center space-y-4">
              <button 
                onClick={() => handleNavClick('#home')}
                className="text-gray-600 hover:text-orange-300 font-medium transition-colors duration-200"
              >
                ホーム
              </button>
              <button 
                onClick={() => handleNavClick('#about')}
                className="text-gray-600 hover:text-orange-300 font-medium transition-colors duration-200"
              >
                サロンについて
              </button>
              <button 
                onClick={() => handleNavClick('#services')}
                className="text-gray-600 hover:text-orange-300 font-medium transition-colors duration-200"
              >
                サービス
              </button>
              <button 
                onClick={() => handleNavClick('#therapists')}
                className="text-gray-600 hover:text-orange-300 font-medium transition-colors duration-200"
              >
                セラピスト
              </button>
              <button 
                onClick={() => handleNavClick('#testimonials')}
                className="text-gray-600 hover:text-orange-300 font-medium transition-colors duration-200"
              >
                お客様の声
              </button>
              <button 
                onClick={() => handleNavClick('#contact')}
                className="text-gray-600 hover:text-orange-300 font-medium transition-colors duration-200"
              >
                お問い合わせ
              </button>
              <a 
                href="https://bookom.jp/reservation?company=69&course=1339&defaultLang=ja&shop=238"
                target="_blank" 
                rel="noopener noreferrer"
                onClick={() => setIsMenuOpen(false)}
                className="text-white px-6 py-3 rounded-full font-medium transition-all duration-200 hover:shadow-lg"
                style={{ background: 'linear-gradient(135deg, #d2b48c, #deb887)' }}
              >
                ご予約
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}