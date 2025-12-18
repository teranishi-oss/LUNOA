import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const beforeAfterData = [
  {
    id: 1,
    title: '姿勢改善①',
    beforeImage: '/images/before-after-1-before.jpg',
    afterImage: '/images/before-after-1-after.jpg',
    description: '猫背が改善され、背筋がまっすぐに'
  },
  {
    id: 2,
    title: '姿勢改善②',
    beforeImage: '/images/before-after-2-before.jpg',
    afterImage: '/images/before-after-2-after.jpg',
    description: '肩の位置が正常に戻り、首の負担が軽減'
  },
  {
    id: 3,
    title: '姿勢改善③',
    beforeImage: '/images/before-after-3-before.jpg',
    afterImage: '/images/before-after-3-after.jpg',
    description: '骨盤の歪みが整い、全体のバランスが向上'
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
        </div>

        <div className="max-w-4xl mx-auto">
          {/* メインスライダー */}
          <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
            <div className="relative h-96 overflow-hidden">
              {/* Before/After画像比較 */}
              <div className="relative w-full h-full">
                <img 
                  src={currentData.beforeImage}
                  alt={`${currentData.title} Before`}
                  className="absolute inset-0 w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg';
                  }}
                />
                <div 
                  className="absolute inset-0 overflow-hidden"
                  style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
                >
                  <img 
                    src={currentData.afterImage}
                    alt={`${currentData.title} After`}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = 'https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg';
                    }}
                  />
                </div>
                
                {/* スライダー */}
                <div 
                  className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-10"
                  style={{ left: `${sliderPosition}%` }}
                  onMouseDown={(e) => {
                    const rect = e.currentTarget.parentElement?.getBoundingClientRect();
                    if (!rect) return;
                    
                    const handleMouseMove = (e: MouseEvent) => {
                      const x = e.clientX - rect.left;
                      const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
                      setSliderPosition(percentage);
                    };
                    
                    const handleMouseUp = () => {
                      document.removeEventListener('mousemove', handleMouseMove);
                      document.removeEventListener('mouseup', handleMouseUp);
                    };
                    
                    document.addEventListener('mousemove', handleMouseMove);
                    document.addEventListener('mouseup', handleMouseUp);
                  }}
                >
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center">
                    <div className="w-4 h-4 bg-[#D4AF37] rounded-full"></div>
                  </div>
                </div>

                {/* Before/Afterラベル */}
                <div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-bold">
                  BEFORE
                </div>
                <div className="absolute top-4 right-4 bg-[#D4AF37] text-white px-3 py-1 rounded-full text-sm font-bold">
                  AFTER
                </div>
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

            {/* キャプション */}
            <div className="p-6 bg-white">
              <h3 className="text-xl font-bold text-[#2C2C2C] mb-2">{currentData.title}</h3>
              <p className="text-[#2C2C2C]/70">{currentData.description}</p>
            </div>
          </div>

          {/* インジケーター */}
          <div className="flex justify-center space-x-3 mb-8">
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

          {/* 注意書き */}
          <p className="text-center text-[#2C2C2C]/60 text-sm">
            ※効果には個人差があります
          </p>
        </div>
      </div>
    </section>
  );
}