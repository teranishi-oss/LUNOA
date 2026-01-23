import React from 'react';
import { Check } from 'lucide-react';
import problemsImg from '../assets/onayami.png';

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
    <section id="problems" className="py-24 md:py-32 bg-[#F3F2EE]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="mb-8">
            こんなお悩みありませんか？
          </h2>
          <p className="text-[#555555] max-w-2xl mx-auto">
            現代女性に多いこれらのお悩み、LUNOAの深層部アプローチで根本から改善します
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-16">
          {/* お悩み画像 */}
          <div className="relative">
            <img
              src={problemsImg}
              alt="美容整体のお悩み"
              className="w-full h-auto opacity-95"
            />
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="text-center">
            {/* 解決メッセージ */}
            <div className="bg-[#FAFAF8] p-10 text-center mb-12">
              <h3 className="mb-5">
                → 深層部へのアプローチで根本改善
              </h3>
              <p className="text-[#555555]">
                筋膜やマッサージでは届かない筋肉の深層部に直接アプローチ。<br />
                短時間で圧倒的な変化を実現します。
              </p>
            </div>

            {/* 統計情報 */}
            <div className="grid grid-cols-2 gap-8 md:gap-12">
              <div className="bg-[#FAFAF8] p-8 text-center">
                <div className="text-3xl text-[#8F846B] mb-2">96.7%</div>
                <div className="text-[#555555]">改善実感率</div>
              </div>
              <div className="bg-[#FAFAF8] p-8 text-center">
                <div className="text-3xl text-[#8F846B] mb-2">最短5分</div>
                <div className="text-[#555555]">で変化を体感</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}