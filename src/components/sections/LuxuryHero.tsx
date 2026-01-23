import React from 'react';
import heroImage from '../../assets/lunoahero.jpg';

export function LuxuryHero() {
  return (
    <section className="relative h-screen min-h-[600px] w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="LUNOA Salon Interior"
          className="w-full h-full object-cover"
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/45 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="text-center text-white px-6 max-w-4xl mx-auto">
          {/* Main Heading */}
          <h1
            className="text-5xl md:text-7xl lg:text-8xl tracking-[0.2em] mb-8 font-medium"
            style={{
              fontFamily: 'Cinzel, serif',
              textShadow: '0 4px 20px rgba(0, 0, 0, 0.8), 0 2px 8px rgba(0, 0, 0, 0.6)'
            }}
          >
            LUNOA
          </h1>

          {/* Subheading */}
          <p
            className="text-lg md:text-xl lg:text-2xl tracking-[0.15em] mb-4 font-normal"
            style={{ textShadow: '0 2px 12px rgba(0, 0, 0, 0.8), 0 1px 4px rgba(0, 0, 0, 0.6)' }}
          >
            高級美容整体サロン
          </p>

          {/* Tagline */}
          <p
            className="text-sm md:text-base tracking-wider mb-12 max-w-2xl mx-auto leading-relaxed"
            style={{ textShadow: '0 2px 10px rgba(0, 0, 0, 0.8), 0 1px 4px rgba(0, 0, 0, 0.6)' }}
          >
            あなたの美しさを、内側から引き出す
            <br className="hidden md:block" />
            究極のリラクゼーション体験
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#reservation"
              className="inline-block bg-white text-[#2C2C2C] px-10 py-4 text-sm tracking-widest hover:bg-opacity-90 transition-all duration-300 min-w-[200px] font-medium shadow-2xl"
            >
              ご予約はこちら
            </a>
            <a
              href="#menu"
              className="inline-block border-2 border-white text-white px-10 py-4 text-sm tracking-widest hover:bg-white hover:text-[#2C2C2C] transition-all duration-300 min-w-[200px] font-medium shadow-2xl backdrop-blur-sm"
              style={{ textShadow: '0 2px 8px rgba(0, 0, 0, 0.6)' }}
            >
              メニューを見る
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-px h-16 bg-white/50 animate-pulse" />
      </div>
    </section>
  );
}
