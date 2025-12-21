import React from 'react';
import { Check } from 'lucide-react';
import problemsImage from '../assets/problems-image.jpg';

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

        <div className="max-w-5xl mx-auto mb-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* 画像 */}
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src={problemsImage}
                alt="お悩み相談"
                className="w-full h-full object-cover"
              />
            </div>

            {/* お悩みリスト */}
            <div className="grid grid-cols-2 gap-4">
              {problems.map((problem, index) => (
                <div key={index} className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-all">
                  <Check className="w-8 h-8 text-[#D4AF37] mx-auto mb-3" />
                  <p className="text-[#2C2C2C] font-semibold">{problem}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="text-center">
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