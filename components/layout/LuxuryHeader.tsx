import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { animate } from 'framer-motion';
import { shibuyaStore } from '../../data/stores';

function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const headerOffset = 90;
  const target = el.getBoundingClientRect().top + window.scrollY - headerOffset;

  // CSS `scroll-behavior: smooth` on <html> (set globally in index.css)
  // intercepts every window.scrollTo() call and starts its own native
  // smooth-scroll animation. When we also drive scrollTo() manually on
  // every animation frame, each frame retriggers a competing native
  // smooth-scroll that never settles. Temporarily force `auto` so our
  // manual per-frame jumps are instant, then restore the original value.
  const html = document.documentElement;
  const previousBehavior = html.style.scrollBehavior;
  html.style.scrollBehavior = 'auto';

  const controls = animate(window.scrollY, target, {
    duration: 0.8,
    ease: [0.25, 0.1, 0.25, 1],
    onUpdate: (v) => window.scrollTo(0, v),
    onComplete: () => {
      html.style.scrollBehavior = previousBehavior;
    },
  });

  return controls;
}

export function LuxuryHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Scroll to the target section once we're on the home page and a hash is
  // present — a plain <a href="/#id"> would trigger a full page reload and
  // the browser tries to jump to the hash before React has rendered that
  // far down the page, so it silently fails to find the element.
  useEffect(() => {
    if (location.pathname !== '/' || !location.hash) return;
    const id = location.hash.slice(1);
    const timer = setTimeout(() => scrollToId(id), 80);
    return () => clearTimeout(timer);
  }, [location.pathname, location.hash]);

  const navLinks = [
    { href: '/#why-selected', label: '選ばれる理由' },
    { href: '/#before-after', label: '施術実績' },
    { href: '/reserve', label: 'アクセス' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!href.startsWith('/#')) {
      setMobileMenuOpen(false);
      return;
    }
    e.preventDefault();
    setMobileMenuOpen(false);
    const id = href.slice(2);
    if (location.pathname === '/') {
      scrollToId(id);
    } else {
      navigate(href);
    }
  };

  return (
    // The bar's background uses backdrop-blur — backdrop-filter creates a new
    // containing block for `position: fixed` descendants, so it must live on
    // an inner wrapper, not on <header> itself. Otherwise the mobile drawer
    // below (also `fixed`) would be positioned relative to this ~64px bar
    // instead of the viewport and collapse to zero height.
    <header className="fixed top-0 left-0 right-0 z-[1000]">
      <div
        className={`transition-all duration-500 ${
          scrolled ? 'bg-cream-50/95 backdrop-blur-md shadow-[0_1px_0_rgba(42,38,32,0.08)]' : 'bg-cream-50/60 backdrop-blur-sm'
        }`}
      >
        <nav className="hidden lg:flex items-center justify-between h-20 px-10 max-w-7xl mx-auto">
          <Link to="/" className="flex flex-col leading-tight">
            <span className="font-mincho font-bold text-[22px] tracking-[0.04em] text-ink-900">LUNOA SHIBUYA</span>
            <span className="text-[13px] tracking-[0.08em] text-gold-600">卒業型美容整体LUNOA 渋谷院</span>
          </Link>

          <div className="flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-[15px] tracking-[0.08em] text-ink-700 hover:text-gold-600 transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
            <a
              href={shibuyaStore.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-[16px] font-bold tracking-[0.03em] text-gold-600 border border-gold-500 bg-cream-50 rounded-pill px-7 py-2.5 shadow-soft hover:bg-gold-500 hover:text-white hover:-translate-y-0.5 transition-all duration-300"
            >
              ご予約
            </a>
          </div>
        </nav>

        <div className="lg:hidden flex items-center justify-between h-16 px-5">
          <Link to="/" className="flex flex-col leading-tight">
            <span className="font-mincho font-bold text-[19px] tracking-[0.04em] text-ink-900">LUNOA SHIBUYA</span>
            <span className="text-[11px] tracking-[0.05em] text-gold-600">卒業型美容整体LUNOA 渋谷院</span>
          </Link>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-ink-900"
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <div
        className={`lg:hidden fixed inset-0 top-16 bg-cream-50 transform transition-transform duration-400 ease-out ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col p-8 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-[17px] tracking-[0.05em] text-ink-700 py-4 border-b border-ink-900/10"
            >
              {link.label}
            </a>
          ))}
          <a
            href={shibuyaStore.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-6 text-center text-[16px] font-bold tracking-[0.03em] text-white bg-gradient-to-br from-gold-500 to-gold-600 rounded-pill py-3.5 shadow-soft"
          >
            ご予約
          </a>
        </div>
      </div>
    </header>
  );
}
