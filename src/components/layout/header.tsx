import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MapPin } from 'lucide-react';

const navigation = [
  { name: "ホーム", href: "#home" },
  { name: "施術メニュー", href: "#services" },
  { name: "サロンについて", href: "#about" },
  { name: "施術者紹介", href: "#therapists" },
  { name: "お客様の声", href: "#testimonials" },
  { name: "ご予約・お問い合わせ", href: "#contact" },
  { 
    name: "ご予約", 
    href: "https://bookom.jp/reservation?company=69&course=1339&defaultLang=ja&shop=238",
    isExternal: true 
  },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-sm shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img 
              src="/スクリーンショット 2025-08-10 20.06.29 copy copy.png" 
              alt="LUNOA Logo" 
              className="w-10 h-10 object-contain"
            />
            <h1 className="text-2xl font-bold bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent">
              美容整体 LUNOA
            </h1>
          </div>

          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className={`text-gray-700 hover:text-amber-600 transition-colors font-medium ${
                  item.name === 'ご予約' ? 'bg-gradient-to-r from-amber-500 to-yellow-600 text-white px-4 py-2 rounded-full hover:from-amber-600 hover:to-yellow-700' : ''
                }`}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              >
                {item.name}
              </a>
            ))}
          </nav>

          <div className="hidden xl:flex items-center space-x-6 text-sm">
            <div className="flex items-center space-x-2 text-gray-600">
              <Phone className="w-4 h-4" />
              <span>090-3543-0588</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600">
              <MapPin className="w-4 h-4" />
              <span>渋谷区道玄坂</span>
            </div>
          </div>

          <button
            className="lg:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="lg:hidden mt-4 pb-4">
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-amber-600 transition-colors font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}