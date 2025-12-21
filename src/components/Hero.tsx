import React from 'react';
import heroImage from '../assets/iyaf6ed5_2_2.png';
import logo from '../assets/logo.png';

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
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* コンテンツ */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <img src={logo} alt="LUNOA" className="w-48 h-auto mx-auto mb-8" />
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          美容整体LUNOA
        </h1>
        <p className="text-xl md:text-2xl mb-4">
          一度で実感。圧倒的に結果を出す美容整体。
        </p>
        <p className="text-lg md:text-xl mb-8">
          筋肉の『深層部』に直接アプローチ
        </p>
        <a
          href="#contact"
          className="inline-block bg-amber-600 hover:bg-amber-700 text-white font-bold py-4 px-12 rounded-full text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
        >
          ご予約はこちら
        </a>
      </div>
    </section>
  );
}