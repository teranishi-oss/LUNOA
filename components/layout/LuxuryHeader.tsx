import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { getStoreBySlug, storeList } from '../../data/stores';

export function LuxuryHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [storeDropdownOpen, setStoreDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const location = useLocation();
  const pathSlug = location.pathname.replace('/', '');
  const currentStore = pathSlug ? getStoreBySlug(pathSlug) : undefined;
  const isStorePage = !!currentStore;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setStoreDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setStoreDropdownOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-700 ${
        scrolled
          ? 'bg-[#0A0A0A]/95 backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      {/* PC Navigation */}
      <nav className="hidden lg:flex items-center justify-between h-20 px-12">
        <Link
          to="/"
          className="text-[22px] tracking-[0.2em] transition-colors duration-500 text-white/90 hover:text-white"
          style={{ fontFamily: 'Cinzel, serif', fontWeight: 400 }}
        >
          LUNOA
        </Link>

        <div className="flex items-center gap-10">
          {isStorePage && (
            <span className="text-[11px] tracking-[0.2em] text-[#B7A482]/70 uppercase">
              {currentStore.nameEn}
            </span>
          )}

          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setStoreDropdownOpen(!storeDropdownOpen)}
              className="text-[11px] tracking-[0.2em] text-white/60 hover:text-white/90 flex items-center gap-2 transition-all duration-400 uppercase"
            >
              Locations
              <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${storeDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {storeDropdownOpen && (
              <div className="absolute right-0 top-full mt-4 bg-[#141414] border border-white/5 min-w-[220px] py-3">
                {storeList.map((store) => (
                  <Link
                    key={store.slug}
                    to={`/${store.slug}`}
                    onClick={() => setStoreDropdownOpen(false)}
                    className={`block px-6 py-3 text-[12px] tracking-[0.1em] text-white/60 hover:text-white hover:bg-white/5 transition-all duration-300 ${
                      store.slug === pathSlug ? 'text-[#B7A482]' : ''
                    }`}
                  >
                    <span className="font-display text-lg tracking-[0.1em] mr-3 opacity-30">{store.nameEn.charAt(0)}</span>
                    {store.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {isStorePage && (
            <a
              href="#menu"
              className="text-[11px] tracking-[0.2em] text-white/60 hover:text-white/90 transition-all duration-400 uppercase"
            >
              Menu
            </a>
          )}

          <Link
            to="/reserve"
            className="text-[11px] tracking-[0.2em] uppercase border border-white/20 text-white/70 px-7 py-2.5 hover:border-[#B7A482]/50 hover:text-white transition-all duration-500"
          >
            Reserve
          </Link>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="lg:hidden">
        <div className="flex items-center justify-between h-16 px-6">
          <Link
            to="/"
            className="text-lg tracking-[0.2em] text-white/90"
            style={{ fontFamily: 'Cinzel, serif', fontWeight: 400 }}
          >
            LUNOA
          </Link>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-white/70"
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Menu Drawer */}
        <div
          className={`fixed inset-0 top-16 bg-[#0A0A0A] transform transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex flex-col p-10 space-y-2">
            <p className="caption text-accent mb-4">Locations</p>
            {storeList.map((store) => (
              <Link
                key={store.slug}
                to={`/${store.slug}`}
                className={`text-base tracking-[0.15em] text-white/60 hover:text-white transition-all duration-300 py-4 border-b border-white/5 flex items-center justify-between ${
                  store.slug === pathSlug ? 'text-[#B7A482]' : ''
                }`}
              >
                <span>{store.name}</span>
                <span className="text-[11px] text-white/30 tracking-[0.2em]">{store.region}</span>
              </Link>
            ))}

            {isStorePage && (
              <a
                href="#menu"
                onClick={() => setMobileMenuOpen(false)}
                className="text-base tracking-[0.15em] text-white/60 hover:text-white transition-all duration-300 py-4 border-b border-white/5 mt-6"
              >
                Menu
              </a>
            )}

            <Link
              to="/reserve"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base tracking-[0.15em] text-[#B7A482] hover:text-white transition-all duration-300 py-4 border-b border-white/5"
            >
              Reserve
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
