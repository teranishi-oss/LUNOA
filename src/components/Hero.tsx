import React from 'react';
import heroImage from '../assets/iyaf6ed5_2_2.png';

export function Hero() {
  return (
    <section
      id="home"
      className="h-screen flex items-center justify-center relative overflow-hidden"
      style={{ minHeight: '100svh' }}
    >
      {/* 背景画像 */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="美容整体LUNOA"
          className="absolute inset-0 w-full h-full object-cover object-center md:object-[center_20%] brightness-110"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-transparent to-transparent" />
      </div>

    </section>
  );
}