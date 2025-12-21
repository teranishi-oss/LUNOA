import React from 'react';
import heroImage from '../assets/iyaf6ed5_2_2.png';

export function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* 背景画像 */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="美容整体LUNOA"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
    </section>
  );
}