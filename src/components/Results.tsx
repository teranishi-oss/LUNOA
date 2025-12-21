import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import logoImage from '../assets/logo.png';
import result1 from '../assets/kubikata copy.jpeg';
import result2 from '../assets/222.jpg';
import result3 from '../assets/333.jpg';

const beforeAfterData = [
  {
    id: 1,
    title: '肩こり・巻き肩改善',
    description: '肩の位置が正常に！巻き肩が大幅に改善されました',
    details: '長年のデスクワークによる巻き肩と肩こりが改善。肩の位置が正しい位置に戻り、首や肩の負担が大幅に軽減されました。',
    image: result1
  },
  {
    id: 2,
    title: '首の可動域改善',
    description: '首が自由に動くように！可動域が大幅に改善',
    details: '首の動きが制限されていた状態から、上下左右スムーズに動かせるように。頭痛や首の痛みも解消されました。',
    image: result2
  },
  {
    id: 3,
    title: '体の柔軟性向上',
    description: '体の可動域が大幅に向上！柔軟性がアップしました',
    details: '体の硬さが改善され、前屈などの動作がスムーズに。日常生活での動きが楽になり、運動パフォーマンスも向上しました。',
    image: result3
  }
];

export function Results() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % beforeAfterData.length);
    setSliderPosition(50);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + beforeAfterData.length) % beforeAfterData.length);
    setSliderPosition(50);
  };

  const currentData = beforeAfterData[currentIndex];

  return (
    <section id="results" className="py-16 md:py-24 bg-[#FAF9F6]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#2C2C2C] mb-6">
            たった1回でこんなに変わる
          </h2>
          <p className="text-xl text-[#2C2C2C]/70 max-w-2xl mx-auto">
            実際のお客様のBefore/After写真をご覧ください。
            深層部アプローチで驚きの変化を実現します。
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* メインコンテンツ */}
          <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden mb-8">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Before/After画像 */}
              <div className="relative h-96 lg:h-auto bg-[#FAF9F6]">
                <img
                  src={currentData.image}
                  alt={`${currentData.title} Before/After`}
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = logoImage;
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none"></div>

                {/* カテゴリーバッジ */}
                <div className="absolute top-4 left-4">
                  <span className="bg-[#D4AF37] text-white px-4 py-2 rounded-full text-sm font-bold">
                    実績No.{currentData.id}
                  </span>
                </div>
              </div>

              {/* コンテンツ部分 */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="mb-6">
                  <h3 className="text-3xl font-bold text-[#2C2C2C] mb-4">{currentData.title}</h3>
                  <div className="bg-gradient-to-r from-[#E8D5E8] to-[#FFE4E1] p-4 rounded-xl border border-[#D4AF37]/20">
                    <p className="text-[#2C2C2C] font-bold text-lg italic">
                      "{currentData.description}"
                    </p>
                  </div>
                </div>

                <p className="text-[#2C2C2C]/70 leading-relaxed mb-6 text-lg">
                  {currentData.details}
                </p>

                <a
                  href="https://beauty.hotpepper.jp/CSP/kr/reserve/?storeId=H000777760"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-gradient-to-r from-[#D4AF37] to-[#FFD700] hover:from-[#B8941F] hover:to-[#D4AF37] text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 space-x-2"
                >
                  <span>あなたも美しく変身</span>
                  <ChevronRight className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* ナビゲーションボタン */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-[#2C2C2C] p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-[#2C2C2C] p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* インジケーター */}
          <div className="flex justify-center space-x-3 mb-12">
            {beforeAfterData.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  setSliderPosition(50);
                }}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentIndex
                    ? 'bg-[#D4AF37] w-8'
                    : 'bg-[#2C2C2C]/30 hover:bg-[#2C2C2C]/50'
                }`}
              />
            ))}
          </div>

          {/* サムネイル一覧 */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {beforeAfterData.map((item, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`bg-white rounded-2xl p-4 shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-1 ${
                  index === currentIndex ? 'ring-2 ring-[#D4AF37]' : ''
                }`}
              >
                <div className="text-center">
                  <div className="h-32 rounded-lg overflow-hidden mb-3 bg-[#FAF9F6]">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-contain"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = logoImage;
                      }}
                    />
                  </div>
                  <div className="font-semibold text-[#2C2C2C] text-sm mb-1">{item.title}</div>
                  <div className="text-xs text-[#D4AF37] font-medium">実績No.{item.id}</div>
                </div>
              </button>
            ))}
          </div>

          {/* 実績統計 */}
          <div className="bg-white rounded-3xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-[#2C2C2C] text-center mb-8">改善実績</h3>
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-[#D4AF37] mb-2">96.7%</div>
                <div className="text-[#2C2C2C]/70">改善実感率</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-[#D4AF37] mb-2">1400+</div>
                <div className="text-[#2C2C2C]/70">施術実績</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-[#D4AF37] mb-2">最短5分</div>
                <div className="text-[#2C2C2C]/70">で変化を体感</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-[#D4AF37] mb-2">95.2%</div>
                <div className="text-[#2C2C2C]/70">お客様満足度</div>
              </div>
            </div>
          </div>

          {/* 注意書き */}
          <p className="text-center text-[#2C2C2C]/60 text-sm mt-8">
            ※効果には個人差があります。写真は実際のお客様の施術結果です。
          </p>
        </div>
      </div>
    </section>
  );
}