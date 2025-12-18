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
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* 左側：画像 */}
          <div className="order-2 lg:order-1">
            <img 
              src="/images/staff-02.jpg" 
              alt="LUNOA施術シーン" 
              className="w-full h-96 object-cover rounded-2xl shadow-lg"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = '/images/logo.png';
              }}
            />
          </div>

          {/* 右側：チェックリスト */}
          <div className="order-1 lg:order-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {problems.map((problem, index) => (
                <div 
                  key={index}
                  className="flex items-center space-x-3 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200"
                >
                  <div className="w-6 h-6 bg-[#E8D5E8] rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-[#2C2C2C]" />
                  </div>
                  <span className="text-[#2C2C2C] font-medium">{problem}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-[#E8D5E8] to-[#FFE4E1] rounded-2xl">
              <p className="text-[#2C2C2C] font-bold text-lg text-center">
                → 深層部へのアプローチで根本改善
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}