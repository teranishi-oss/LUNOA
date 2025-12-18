import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, ArrowRight } from 'lucide-react';

const beforeAfterData = [
  {
    id: 1,
    title: "小顔効果",
    beforeImage: "/images/111.jpg",
    afterImage: "/images/333.jpg",
    effect: "フェイスラインがすっきり！小顔効果を実感",
    description: "顔の歪みを整えることで、自然な小顔効果を実現。むくみも解消され、表情も明るくなりました。",
    customerName: "M.T様（30代）",
    period: "3回の施術後"
  },
  {
    id: 2,
    title: "姿勢改善",
    beforeImage: "/images/222.jpg",
    afterImage: "/images/444.jpg",
    effect: "猫背が改善！美しい姿勢を手に入れました",
    description: "長年の猫背が改善され、背筋が伸びて美しいシルエットに。肩こりも解消されました。",
    customerName: "Y.S様（40代）",
    period: "6回の施術後"
  },
  {
    id: 3,
    title: "美脚効果",
    beforeImage: "/images/555.jpg",
    afterImage: "/images/888.jpg",
    effect: "O脚改善で美しい脚のラインに",
    description: "骨盤矯正により脚のラインが整い、O脚も改善。ヒップアップ効果も実感できました。",
    customerName: "H.K様（20代）",
    period: "4回の施術後"
  },
  {
    id: 4,
    title: "肩こり解消",
    beforeImage: "/images/111.jpg",
    afterImage: "/images/222.jpg",
    effect: "慢性的な肩こりが解消！",
    description: "デスクワークによる慢性的な肩こりが改善。首の可動域も広がり、日常生活が楽になりました。",
    customerName: "A.N様（30代）",
    period: "5回の施術後"
  }
];

export function BeforeAfter() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // 自動スライド
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % beforeAfterData.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % beforeAfterData.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + beforeAfterData.length) % beforeAfterData.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  const currentData = beforeAfterData[currentIndex];

  return (
    <section id="before-after" className="py-16 md:py-24 bg-gradient-to-br from-rose-50 to-pink-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-appear">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6 font-handwriting">
            ビフォーアフター
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            実際の美容整体の効果をご覧ください。
            お客様の美しい変化をビフォーアフター写真でご紹介します。
          </p>
        </div>

        {/* メインスライドショー */}
        <div className="relative max-w-6xl mx-auto mb-12">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* ビフォーアフター画像 */}
              <div className="relative">
                <div className="grid grid-cols-2 h-96">
                  {/* Before画像 */}
                  <div className="relative overflow-hidden">
                    <img 
                      src={currentData.beforeImage}
                      alt="Before"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = '/images/rogo.png';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-4 left-4">
                      <span className="bg-red-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                        BEFORE
                      </span>
                    </div>
                  </div>
                  
                  {/* After画像 */}
                  <div className="relative overflow-hidden">
                    <img 
                      src={currentData.afterImage}
                      alt="After"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = '/images/rogo.png';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-4 right-4">
                      <span className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                        AFTER
                      </span>
                    </div>
                  </div>
                </div>
                
                {/* 中央の矢印 */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center">
                    <ArrowRight className="w-6 h-6 text-pink-500" />
                  </div>
                </div>
              </div>

              {/* コンテンツ部分 */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="mb-6">
                  <h3 className="text-3xl font-bold text-gray-800 mb-4">{currentData.title}</h3>
                  <div className="bg-gradient-to-r from-pink-100 to-rose-100 p-4 rounded-xl border border-pink-200">
                    <p className="text-pink-700 font-bold text-lg italic">
                      "{currentData.effect}"
                    </p>
                  </div>
                </div>

                <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                  {currentData.description}
                </p>

                <div className="flex items-center space-x-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <div className="space-y-2 mb-6">
                  <div className="font-bold text-gray-800">{currentData.customerName}</div>
                  <div className="text-pink-600 font-medium">{currentData.period}</div>
                </div>

                <a 
                  href="https://beauty.hotpepper.jp/CSP/kr/reserve/?storeId=H000777760"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 space-x-2"
                >
                  <span>あなたも美しく変身</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* ナビゲーションボタン */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* インジケーター */}
        <div className="flex justify-center space-x-3 mb-12">
          {beforeAfterData.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentIndex 
                  ? 'bg-pink-500 w-8' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

        {/* サムネイル一覧 */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {beforeAfterData.map((item, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`bg-white rounded-2xl p-4 shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-1 ${
                index === currentIndex ? 'ring-2 ring-pink-400' : ''
              }`}
            >
              <div className="text-center">
                <div className="grid grid-cols-2 gap-1 mb-3 h-20 rounded-lg overflow-hidden">
                  <img 
                    src={item.beforeImage} 
                    alt="Before" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = '/images/rogo.png';
                    }}
                  />
                  <img 
                    src={item.afterImage} 
                    alt="After" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = '/images/rogo.png';
                    }}
                  />
                </div>
                <div className="font-semibold text-gray-800 text-sm">{item.title}</div>
                <div className="text-xs text-gray-500">{item.customerName}</div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}