import React from 'react';
import { Calendar, MessageCircle } from 'lucide-react';

export function FinalCTA() {
  return (
    <section id="booking" className="py-16 md:py-24 bg-gradient-to-br from-[#FFE4E1] to-[#D4AF37]">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl lg:text-6xl font-bold text-[#2C2C2C] mb-6">
            今すぐ体感してください
          </h2>
          
          <p className="text-xl lg:text-2xl text-[#2C2C2C]/80 mb-8">
            初回限定キャンペーン実施中
          </p>

          {/* 価格強調 */}
          <div className="mb-12">
            <div className="inline-block bg-white rounded-2xl p-8 shadow-lg">
              <div className="text-[#2C2C2C]/50 line-through text-2xl mb-2">¥12,000</div>
              <div className="text-6xl lg:text-8xl font-bold text-[#D4AF37] mb-4">¥1,100</div>
              <div className="text-[#2C2C2C]/70">初回限定価格</div>
            </div>
          </div>

          {/* CTAボタン */}
          <div className="space-y-6">
            <a 
              href="#web-booking"
              className="inline-block bg-[#D4AF37] hover:bg-[#B8941F] text-white font-bold px-16 py-6 rounded-full text-2xl shadow-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-3xl"
            >
              <Calendar className="w-8 h-8 inline mr-4" />
              WEB予約する
            </a>
            
            <div className="block">
              <a 
                href="#line-contact"
                className="inline-block bg-white hover:bg-gray-50 text-[#2C2C2C] font-bold px-12 py-4 rounded-full text-xl border-2 border-white transition-all duration-300 hover:scale-105"
              >
                <MessageCircle className="w-6 h-6 inline mr-3" />
                LINEで問い合わせ
              </a>
            </div>
          </div>

          {/* 追加情報 */}
          <div className="mt-12 grid md:grid-cols-3 gap-6 text-[#2C2C2C]/70">
            <div className="bg-white/20 rounded-xl p-4">
              <div className="font-bold">完全個室</div>
              <div className="text-sm">プライベート空間</div>
            </div>
            <div className="bg-white/20 rounded-xl p-4">
              <div className="font-bold">渋谷駅徒歩3分</div>
              <div className="text-sm">アクセス抜群</div>
            </div>
            <div className="bg-white/20 rounded-xl p-4">
              <div className="font-bold">無理な勧誘なし</div>
              <div className="text-sm">安心してご利用ください</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}