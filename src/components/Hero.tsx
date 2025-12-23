import React from 'react';
import heroImage from '../assets/iyaf6ed5_2_2.png';

export function Hero() {
  return (
    <section
      id="home"
      className="h-screen flex items-center justify-center relative overflow-hidden bg-[#f8f4ed]"
      style={{ minHeight: '100svh' }}
    >
      {/* 背景画像 */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="美容整体LUNOA"
          className="absolute inset-0 w-full h-full object-contain md:object-cover md:object-[center_20%] brightness-[1.45] contrast-[1.15] saturate-110 md:brightness-[1.2] md:contrast-105"
        />
        {/* モバイル用明るいオーバーレイ */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/10 to-transparent md:from-white/30 md:via-transparent" />
        {/* 追加のハイライト効果（モバイルのみ） */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/25 via-transparent to-transparent md:hidden" />
      </div>

    </section>
  );
}