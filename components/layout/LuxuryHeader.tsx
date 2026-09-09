import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { shibuyaStore } from '../../data/stores';

export function LuxuryHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { href: '/#why-selected', label: '選ばれる理由' },
    { href: '/#before-after', label: '施術実績' },
    { href: '/reserve', label: 'アクセス' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-500 ${
        scrolled ? 'bg-cream-50/95 backdrop-blur-md shadow-[0_1px_0_rgba(42,38,32,0.08)]' : 'bg-cream-50/60 backdrop-blur-sm'
      }`}
    >
      <nav className="hidden lg:flex items-center justify-between h-20 px-10 max-w-7xl mx-auto">
        <Link to="/" className="flex flex-col leading-tight">
          <span className="font-mincho font-bold text-[18px] tracking-[0.04em] text-ink-900">LUNOA SHIBUYA</span>
          <span className="text-[11px] tracking-[0.08em] text-gold-600">卒業型美容整体LUNOA 渋谷院</span>
        </Link>

        <div className="flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[13px] tracking-[0.08em] text-ink-700 hover:text-gold-600 transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
          <a
            href={shibuyaStore.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-[14px] font-bold tracking-[0.03em] text-gold-600 border border-gold-500 bg-cream-50 rounded-pill px-7 py-2.5 shadow-soft hover:bg-gold-500 hover:text-white hover:-translate-y-0.5 transition-all duration-300"
          >
            ご予約
          </a>
        </div>
      </nav>

      <nav className="lg:hidden">
        <div className="flex items-center justify-between h-16 px-5">
          <Link to="/" className="flex flex-col leading-tight">
            <span className="font-mincho font-bold text-[16px] tracking-[0.04em] text-ink-900">LUNOA SHIBUYA</span>
            <span className="text-[9px] tracking-[0.05em] text-gold-600">卒業型美容整体LUNOA 渋谷院</span>
          </Link>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-ink-900"
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        <div
          className={`fixed inset-0 top-16 bg-cream-50 transform transition-transform duration-400 ease-out ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex flex-col p-8 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-[15px] tracking-[0.05em] text-ink-700 py-4 border-b border-ink-900/10"
              >
                {link.label}
              </a>
            ))}
            <a
              href={shibuyaStore.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-6 text-center text-[14px] font-bold tracking-[0.03em] text-white bg-gradient-to-br from-gold-500 to-gold-600 rounded-pill py-3.5 shadow-soft"
            >
              ご予約
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
