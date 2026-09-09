import React from 'react';
import { MapPin, Clock, Phone, Instagram } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { getStoreBySlug, storeList } from '../data/stores';

export function Footer() {
  const location = useLocation();
  const pathSlug = location.pathname.replace('/', '');
  const currentStore = pathSlug ? getStoreBySlug(pathSlug) : undefined;

  return (
    <footer className="bg-[#0A0A0A] border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6 py-24 md:py-32">
        <div className="grid md:grid-cols-3 gap-16 md:gap-12">
          {/* Left: Brand + Store Info */}
          <div>
            <p
              className="text-[20px] tracking-[0.2em] text-white/90 mb-8"
              style={{ fontFamily: 'Cinzel, serif', fontWeight: 400 }}
            >
              LUNOA
            </p>

            {currentStore ? (
              <div className="space-y-5">
                <p className="text-[12px] tracking-[0.15em] text-[#B7A482] uppercase mb-2">
                  {currentStore.nameEn}
                </p>
                <div className="flex items-start gap-3">
                  <MapPin className="w-3.5 h-3.5 mt-1 flex-shrink-0 text-white/30" />
                  <div className="text-[13px] text-white/50 leading-relaxed">
                    {currentStore.address.map((line) => (
                      <p key={line}>{line}</p>
                    ))}
                  </div>
                </div>
                {currentStore.phone && (
                  <div className="flex items-center gap-3">
                    <Phone className="w-3.5 h-3.5 flex-shrink-0 text-white/30" />
                    <p className="text-[13px] text-white/50">{currentStore.phone}</p>
                  </div>
                )}
                <div className="flex items-start gap-3">
                  <Clock className="w-3.5 h-3.5 mt-1 flex-shrink-0 text-white/30" />
                  <div className="text-[13px] text-white/50 leading-relaxed">
                    <p>{currentStore.hours}</p>
                    <p>定休日：{currentStore.closedDay}</p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <p className="text-[12px] tracking-[0.15em] text-white/50 uppercase mb-4">Locations</p>
                {storeList.map((store) => (
                  <Link
                    key={store.slug}
                    to={`/${store.slug}`}
                    className="block text-[14px] text-white/70 hover:text-white/90 transition-colors duration-400"
                  >
                    {store.name}
                    <span className="text-white/40 ml-3 text-[12px] tracking-[0.1em]">{store.region}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Center: Sitemap */}
          <div>
            <p className="text-[12px] tracking-[0.15em] text-white/50 uppercase mb-8">Sitemap</p>
            <nav className="space-y-4">
              <Link
                to="/"
                className="block text-[14px] text-white/70 hover:text-white/90 transition-colors duration-400"
              >
                Top
              </Link>
              {storeList.map((store) => (
                <Link
                  key={store.slug}
                  to={`/${store.slug}`}
                  className="block text-[14px] text-white/70 hover:text-white/90 transition-colors duration-400"
                >
                  {store.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Right: Reservation */}
          <div>
            <p className="text-[12px] tracking-[0.15em] text-white/50 uppercase mb-8">Reservation</p>
            <Link
              to="/reserve"
              className="inline-block text-[12px] tracking-[0.2em] uppercase border border-white/25 text-white/80 px-8 py-3 hover:border-[#B7A482]/40 hover:text-white/90 transition-all duration-500 mb-10"
            >
              Reserve
            </Link>

            <p className="text-[12px] tracking-[0.15em] text-white/50 uppercase mb-5">Follow</p>
            <a
              href="https://www.instagram.com/lunoa_biyouseitai/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-10 h-10 border border-white/25 text-white/60 hover:text-white/90 hover:border-white/40 transition-all duration-400"
            >
              <Instagram className="w-4.5 h-4.5" />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/5 py-8">
        <p className="text-center text-[12px] tracking-[0.15em] text-white/30">
          &copy; 2024 LUNOA. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
