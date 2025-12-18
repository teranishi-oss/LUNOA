import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    rating: 5.0,
    comment: '本格的な整体で慢性的な痛みが改善！施術後は体が軽くなり、姿勢も良くなりました。',
    customer: '30代女性',
    name: 'A.S様'
  },
  {
    id: 2,
    rating: 4.9,
    comment: 'たった1回で体のバランスが整った感じがします。完全個室なのでリラックスできました。',
    customer: '40代女性',
    name: 'M.T様'
  },
  {
    id: 3,
    rating: 5.0,
    comment: '深層部アプローチの技術が素晴らしい。他の整体とは全く違う効果を実感できました。',
    customer: '20代女性',
    name: 'Y.K様'
  },
  {
    id: 4,
    rating: 4.8,
    comment: 'ブライダル前に通いました。結婚式当日は最高の姿勢で臨むことができて感謝しています。',
    customer: '30代女性',
    name: 'R.H様'
  },
  {
    id: 5,
    rating: 5.0,
    comment: 'スタッフの方が親切で、技術も確か。渋谷駅から近いのも通いやすくて良いです。',
    customer: '40代女性',
    name: 'K.N様'
  }
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-gradient-to-br from-[#E8D5E8] to-[#FFE4E1]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#2C2C2C] mb-6">
            お客様の声
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* メインカルーセル */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-lg p-8 mx-4">
              <Quote className="w-12 h-12 text-[#D4AF37] mb-6" />
              
              {/* 評価 */}
              <div className="flex items-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-6 h-6 ${
                      i < Math.floor(testimonials[currentIndex].rating) 
                        ? 'fill-[#D4AF37] text-[#D4AF37]' 
                        : 'text-gray-300'
                    }`} 
                  />
                ))}
                <span className="ml-3 text-xl font-bold text-[#2C2C2C]">
                  {testimonials[currentIndex].rating}
                </span>
              </div>

              {/* コメント */}
              <p className="text-lg text-[#2C2C2C] leading-relaxed mb-8">
                "{testimonials[currentIndex].comment}"
              </p>

              {/* お客様情報 */}
              <div className="flex items-center">
                <div className="w-12 h-12 bg-[#E8D5E8] rounded-full flex items-center justify-center mr-4">
                  <span className="text-[#2C2C2C] font-bold">
                    {testimonials[currentIndex].name.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="font-bold text-[#2C2C2C]">
                    {testimonials[currentIndex].name}
                  </div>
                  <div className="text-[#2C2C2C]/70 text-sm">
                    {testimonials[currentIndex].customer}
                  </div>
                </div>
              </div>
            </div>

            {/* ナビゲーションボタン */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white hover:bg-[#E8D5E8] text-[#2C2C2C] p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white hover:bg-[#E8D5E8] text-[#2C2C2C] p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* インジケーター */}
          <div className="flex justify-center space-x-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentIndex 
                    ? 'bg-[#D4AF37] w-8' 
                    : 'bg-white/50 hover:bg-white/70'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}