import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export function LuxuryHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'メニュー', href: '#menu' },
    { label: 'お問合せ', href: '#contact' },
    { label: 'ご予約', href: '#reservation', isPrimary: true }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-500 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      }`}
    >
      {/* PC Navigation */}
      <nav className="hidden lg:flex items-center justify-between h-20 px-10">
        {/* Logo */}
        <a
          href="#"
          className={`font-serif text-[26px] tracking-[0.15em] font-normal transition-colors duration-300 ${
            scrolled ? 'text-[#2C2C2C]' : 'text-white'
          }`}
          style={{ fontFamily: 'Cinzel, serif' }}
        >
          LUNOA
        </a>

        {/* Menu Items */}
        <div className="flex items-center gap-12">
          {menuItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`text-sm tracking-wider transition-all duration-300 hover:opacity-70 ${
                scrolled ? 'text-[#2C2C2C]' : 'text-white'
              } ${
                item.isPrimary
                  ? scrolled
                    ? 'border border-[#2C2C2C] px-6 py-2.5 hover:bg-[#2C2C2C] hover:text-white'
                    : 'border border-white px-6 py-2.5 hover:bg-white hover:text-[#2C2C2C]'
                  : ''
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="lg:hidden">
        <div className="flex items-center justify-between h-16 px-6">
          {/* Logo */}
          <a
            href="#"
            className={`font-serif text-xl tracking-[0.15em] font-normal transition-colors duration-300 ${
              scrolled ? 'text-[#2C2C2C]' : 'text-white'
            }`}
            style={{ fontFamily: 'Cinzel, serif' }}
          >
            LUNOA
          </a>

          {/* Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`p-2 transition-colors duration-300 ${
              scrolled ? 'text-[#2C2C2C]' : 'text-white'
            }`}
            aria-label="メニュー"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Drawer */}
        <div
          className={`fixed inset-0 top-16 bg-white transform transition-transform duration-300 ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex flex-col p-8 space-y-6">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-lg tracking-wider text-[#2C2C2C] hover:opacity-70 transition-opacity py-3 border-b border-gray-200 ${
                  item.isPrimary ? 'font-medium' : ''
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}
