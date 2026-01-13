import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import logoImage from '../assets/logo.png';
import result1 from '../assets/kubikata copy.jpeg';
import result2 from '../assets/kubikadouiki.jpg';
import result3 from '../assets/shisei.jpg';

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
    <section id="results" className="py-24 md:py-32 bg-[#FAFAF8]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="mb-8">
            たった1回でこんなに変わる
          </h2>
          <p className="text-[#6A6A6A] max-w-2xl mx-auto">
            実際のお客様のBefore/After写真をご覧ください。
            深層部アプローチで驚きの変化を実現します。
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* メインコンテンツ */}
          <div className="relative bg-[#F3F2EE] overflow-hidden mb-12">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Before/After画像 */}
              <div className="relative h-96 lg:h-auto bg-[#F3F2EE]">
                <img
                  src={currentData.image}
                  alt={`${currentData.title} Before/After`}
                  className="w-full h-full object-contain opacity-95"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = logoImage;
                  }}
                />

                {/* カテゴリーバッジ */}
                <div className="absolute top-4 left-4">
                  <span className="bg-[#8F846B] text-[#FAFAF8] px-4 py-2 text-sm">
                    実績No.{currentData.id}
                  </span>
                </div>
              </div>

              {/* コンテンツ部分 */}
              <div className="p-10 lg:p-12 flex flex-col justify-center">
                <div className="mb-8">
                  <h3 className="mb-6">{currentData.title}</h3>
                  <div className="bg-[#FAFAF8] p-6">
                    <p className="text-[#2E2E2E]">
                      {currentData.description}
                    </p>
                  </div>
                </div>

                <p className="text-[#6A6A6A] mb-8">
                  {currentData.details}
                </p>

                <a
                  href="https://duplicated-imdj.bolt.host/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta inline-flex items-center space-x-2 justify-center"
                >
                  <span>あなたも美しく変身</span>
                  <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* ナビゲーションボタン */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-[#FAFAF8]/90 hover:bg-[#FAFAF8] text-[#2E2E2E] p-3 transition-opacity duration-200 hover:opacity-70"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-[#FAFAF8]/90 hover:bg-[#FAFAF8] text-[#2E2E2E] p-3 transition-opacity duration-200 hover:opacity-70"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* インジケーター */}
          <div className="flex justify-center space-x-3 mb-16">
            {beforeAfterData.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  setSliderPosition(50);
                }}
                className={`h-1 transition-all duration-200 ${
                  index === currentIndex
                    ? 'bg-[#8F846B] w-8'
                    : 'bg-[#B9A98A]/30 hover:bg-[#B9A98A]/50 w-6'
                }`}
              />
            ))}
          </div>

          {/* サムネイル一覧 */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {beforeAfterData.map((item, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`bg-[#F3F2EE] p-6 transition-opacity duration-200 hover:opacity-90 ${
                  index === currentIndex ? 'border border-[#B9A98A]' : ''
                }`}
              >
                <div className="text-center">
                  <div className="h-32 overflow-hidden mb-4 bg-[#FAFAF8]">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-contain opacity-95"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = logoImage;
                      }}
                    />
                  </div>
                  <div className="text-[#2E2E2E] text-sm mb-1">{item.title}</div>
                  <div className="text-xs text-[#8F846B]">実績No.{item.id}</div>
                </div>
              </button>
            ))}
          </div>

          {/* 実績統計 */}
          <div className="bg-[#F3F2EE] p-10">
            <h3 className="text-center mb-12">改善実績</h3>
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl text-[#8F846B] mb-2">96.7%</div>
                <div className="text-[#6A6A6A]">改善実感率</div>
              </div>
              <div>
                <div className="text-3xl text-[#8F846B] mb-2">3500+</div>
                <div className="text-[#6A6A6A]">施術実績</div>
              </div>
              <div>
                <div className="text-3xl text-[#8F846B] mb-2">最短5分</div>
                <div className="text-[#6A6A6A]">で変化を体感</div>
              </div>
              <div>
                <div className="text-3xl text-[#8F846B] mb-2">95.2%</div>
                <div className="text-[#6A6A6A]">お客様満足度</div>
              </div>
            </div>
          </div>

          {/* 注意書き */}
          <p className="text-center text-[#6A6A6A] text-sm mt-8">
            ※効果には個人差があります。写真は実際のお客様の施術結果です。
          </p>
        </div>
      </div>
    </section>
  );
}