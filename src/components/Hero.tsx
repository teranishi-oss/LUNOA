import React from 'react';
import { Star, MapPin, Shield, Zap, Calendar, MessageCircle } from 'lucide-react';

export function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* 背景動画 */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            filter: 'brightness(0.7) blur(1px)'
          }}
        >
          <source src="/src/assets/video.webm" type="video/webm" />
          <source src="/src/assets/video.mp4" type="video/mp4" />
          お使いのブラウザは動画タグをサポートしていません。
        </video>
        {/* 動画が読み込めない場合のフォールバック画像 */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-0 [video:not([src])_+_&]:opacity-100"
          style={{
            backgroundImage: 'url("src/assets/iyaf6ed5 copy.png")'
          }}
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-6xl mx-auto">
          {/* メインキャッチコピー */}
          <div className="space-y-8 animate-appear">
            <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight drop-shadow-2xl">
              渋谷で結果を出す美容整体
            </h1>
            
            <p className="text-xl lg:text-2xl text-white/90 leading-relaxed drop-shadow-lg">
              筋肉の深層部に直接アプローチ
            </p>
          </div>

          {/* 実績バッジ */}
          <div className="mt-12 flex justify-center space-x-8 animate-appear delay-300">
            <div className="bg-[#D4AF37] rounded-full p-6 text-white text-center min-w-[120px]">
              <div className="flex items-center justify-center mb-2">
                <Star className="w-6 h-6 fill-current" />
              </div>
              <div className="font-bold text-lg">口コミ★4.88</div>
            </div>
            <div className="bg-[#D4AF37] rounded-full p-6 text-white text-center min-w-[120px]">
              <div className="font-bold text-2xl">59</div>
              <div className="text-sm">店舗展開</div>
            </div>
          </div>

          {/* 特長カード */}
          <div className="mt-16 grid md:grid-cols-3 gap-6 max-w-4xl mx-auto animate-appear delay-500">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <Zap className="w-8 h-8 text-[#D4AF37] mx-auto mb-4" />
              <h3 className="font-bold text-[#2C2C2C] mb-2">深層部アプローチ</h3>
              <p className="text-sm text-[#2C2C2C]/70">筋肉の奥まで届く技術</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <Shield className="w-8 h-8 text-[#D4AF37] mx-auto mb-4" />
              <h3 className="font-bold text-[#2C2C2C] mb-2">完全個室</h3>
              <p className="text-sm text-[#2C2C2C]/70">プライベート空間</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <MapPin className="w-8 h-8 text-[#D4AF37] mx-auto mb-4" />
              <h3 className="font-bold text-[#2C2C2C] mb-2">渋谷駅徒歩3分</h3>
              <p className="text-sm text-[#2C2C2C]/70">アクセス抜群</p>
            </div>
          </div>

          {/* CTAボタン */}
          <div className="mt-16 space-y-4 animate-appear delay-700">
            <a 
              href="https://beauty.hotpepper.jp/CSP/kr/reserve/?storeId=H000777760"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#D4AF37] hover:bg-[#B8941F] text-white font-bold px-12 py-6 rounded-full text-xl shadow-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-3xl"
            >
              <Calendar className="w-6 h-6 inline mr-3" />
              初回¥1,100で体験する
            </a>
            
            <div className="block">
              <a 
                href="#line"
                className="inline-block bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#2C2C2C] font-bold px-8 py-4 rounded-full transition-all duration-300"
              >
            backgroundImage: 'url("/images/hero-reception.jpg")',
                LINEで相談する
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}