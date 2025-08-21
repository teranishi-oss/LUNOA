import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

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
        <div className="flex flex-col space-y-3">
          {/* ロゴと連絡先情報 */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3 flex-shrink-0">
              <img 
                src="/images/rogo.png" 
                alt="LUNOA ロゴ" 
                className="h-24 w-auto"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const fallback = target.nextElementSibling as HTMLElement;
                  if (fallback) fallback.style.display = 'block';
                }}
              />
              <h1 className="text-6xl font-bold text-orange-300" style={{ display: 'none' }}>
                美容整体 LUNOA
              </h1>
            </div>
            
            {/* 連絡先情報 */}
            <div className="hidden lg:block text-right flex-1 ml-6">
              <div className="text-base text-gray-600 mb-1 font-medium">
                <span className="font-medium">所在地：</span>
                〒150-0043 東京都渋谷区道玄坂１丁目１９−１３ トップヒル並木 5階
              </div>
              <div className="text-base text-gray-600 font-medium">
                <span className="font-medium">電話番号：</span>
                090-3543-0588
              </div>
            </div>
          </div>

          {/* デスクトップナビゲーション */}
          <nav className="hidden lg:flex items-center justify-center space-x-8">
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

          {/* モバイルメニューボタン */}
          <div className="lg:hidden flex justify-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-600 hover:text-orange-300 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

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