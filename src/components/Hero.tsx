import React from 'react';
import heroImage from '../assets/iyaf6ed5_2_2.png';

export function Hero() {
  return (
    <section
      id="home"
      className="h-screen flex items-center justify-center relative overflow-hidden bg-[#FAFAF8]"
      style={{ minHeight: '100svh' }}
    >
      {/* 背景画像 */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="美容整体LUNOA"
          className="absolute inset-0 w-full h-full object-contain md:object-cover md:object-[center_20%] brightness-[1.3] contrast-[0.95] saturate-90 md:brightness-[1.15] md:contrast-100 opacity-95"
        />
        {/* シンプルなオーバーレイ */}
        <div className="absolute inset-0 bg-[#FAFAF8]/15" />
      </div>

    </section>
  );
}