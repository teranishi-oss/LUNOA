import React from 'react';
import { Check } from 'lucide-react';

const problems = [
  '姿勢が悪い',
  '肩こりがつらい', 
  '小顔になりたい',
  '冷えやすい',
  '疲れが取れない',
  'ブライダル前',
  '骨盤の歪み',
  '頭痛持ち'
];

export function Problems() {
  return (
    <section id="problems" className="py-16 md:py-24 bg-[#FAF9F6]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#2C2C2C] mb-6">
            こんなお悩みありませんか？
          </h2>
          <p className="text-xl text-[#2C2C2C]/70 max-w-2xl mx-auto">
            現代女性に多いこれらのお悩み、LUNOAの深層部アプローチで根本から改善します
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* 左側：お悩み画像 */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <img 
                src="src/assets/unnamed.jpg" 
                alt="美容整体のお悩み - 姿勢が悪い、小顔になりたい、疲れが取れない、骨盤の歪み" 
                className="w-full h-auto rounded-2xl shadow-lg"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = 'https://placehold.co/600x400/E8D5E8/2C2C2C?text=お悩み改善';
                }}
              />
              {/* オーバーレイテキスト */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <p className="text-lg font-bold mb-2">これらのお悩み、ありませんか？</p>
                <p className="text-sm opacity-90">✓ 姿勢が悪い ✓ 小顔になりたい ✓ 疲れが取れない ✓ 骨盤の歪み</p>
              </div>
            </div>
          </div>

          {/* 右側：チェックリスト */}
          <div className="order-1 lg:order-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {problems.map((problem, index) => (
                <div 
                  key={index}
                  className="flex items-center space-x-3 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-200 transform hover:-translate-y-1"
                >
                  <div className="w-6 h-6 bg-[#E8D5E8] rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-[#2C2C2C]" />
                  </div>
                  <span className="text-[#2C2C2C] font-medium">{problem}</span>
                </div>
              ))}
            </div>

            {/* 解決メッセージ */}
            <div className="bg-gradient-to-r from-[#E8D5E8] to-[#FFE4E1] rounded-2xl p-6 text-center">
              <h3 className="text-xl font-bold text-[#2C2C2C] mb-3">
                → 深層部へのアプローチで根本改善
              </h3>
              <p className="text-[#2C2C2C]/80 text-sm leading-relaxed">
                筋膜やマッサージでは届かない筋肉の深層部に直接アプローチ。<br />
                短時間で圧倒的な変化を実現します。
              </p>
            </div>

            {/* 統計情報 */}
            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="bg-white rounded-xl p-4 text-center shadow-sm">
                <div className="text-2xl font-bold text-[#D4AF37] mb-1">96.7%</div>
                <div className="text-sm text-[#2C2C2C]/70">改善実感率</div>
              </div>
              <div className="bg-white rounded-xl p-4 text-center shadow-sm">
                <div className="text-2xl font-bold text-[#D4AF37] mb-1">最短5分</div>
                <div className="text-sm text-[#2C2C2C]/70">で変化を体感</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}