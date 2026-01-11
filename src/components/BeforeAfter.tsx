import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, ArrowRight } from 'lucide-react';
import kubikataImage from '../assets/kubikata.jpeg';
import { ImageUpload } from './ImageUpload';

const initialBeforeAfterData = [
  {
    id: 1,
    title: "肩こり・巻き肩改善",
    beforeImage: "https://www.genspark.ai/api/files/s/bntY4hzc",
    afterImage: "https://www.genspark.ai/api/files/s/bntY4hzc",
    effect: "肩の位置が正常に！巻き肩が大幅に改善されました",
    description: "長年のデスクワークによる巻き肩と肩こりが改善。肩の位置が正しい位置に戻り、首や肩の負担が大幅に軽減されました。",
    customerName: "M.T様（30代）",
    period: "3回の施術後",
    category: "姿勢改善"
  },
  {
    id: 2,
    title: "姿勢改善・猫背矯正",
    beforeImage: "/images/line_album_hpアルバム_251218_49.jpg",
    afterImage: "/images/line_album_hpアルバム_251218_49.jpg",
    effect: "背筋がまっすぐに！美しい姿勢を手に入れました",
    description: "猫背が改善され、背筋が自然にまっすぐ伸びるように。座り姿勢も美しくなり、自信を持って過ごせるようになりました。",
    customerName: "Y.S様（40代）",
    period: "4回の施術後",
    category: "姿勢改善"
  },
  {
    id: 3,
    title: "体の柔軟性向上",
    beforeImage: "https://www.genspark.ai/api/files/s/bdtp6Xj6",
    afterImage: "https://www.genspark.ai/api/files/s/bdtp6Xj6",
    effect: "体の可動域が大幅に向上！柔軟性がアップしました",
    description: "体の硬さが改善され、前屈などの動作がスムーズに。日常生活での動きが楽になり、運動パフォーマンスも向上しました。",
    customerName: "H.K様（20代）",
    period: "5回の施術後",
    category: "柔軟性向上"
  },
  {
    id: 4,
    title: "首の可動域改善",
    beforeImage: "https://www.genspark.ai/api/files/s/tw1ad1Z8",
    afterImage: "https://www.genspark.ai/api/files/s/tw1ad1Z8",
    effect: "首が自由に動くように！可動域が大幅に改善",
    description: "首の動きが制限されていた状態から、上下左右スムーズに動かせるように。頭痛や首の痛みも解消されました。",
    customerName: "A.N様（30代）",
    period: "3回の施術後",
    category: "首・肩改善"
  },
  {
    id: 5,
    title: "全身バランス調整",
    beforeImage: "/images/line_album_hpアルバム_251218_28.jpg",
    afterImage: "/images/line_album_hpアルバム_251218_28.jpg",
    effect: "全身のバランスが整い、美しい座り姿勢に",
    description: "骨盤から背骨まで全身のバランスを調整。座り姿勢が美しくなり、長時間座っていても疲れにくくなりました。",
    customerName: "K.M様（50代）",
    period: "6回の施術後",
    category: "全身調整"
  }
];

export function BeforeAfter() {
  const [beforeAfterData, setBeforeAfterData] = useState(initialBeforeAfterData);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const handleImageChange = (id: number, newImage: string) => {
    setBeforeAfterData(prevData =>
      prevData.map(item =>
        item.id === id
          ? { ...item, beforeImage: newImage, afterImage: newImage }
          : item
      )
    );
  };

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
            実際のビフォーアフター
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            美容整体LUNOAで実際に施術を受けられたお客様の変化をご覧ください。
            確かな技術で理想の体を実現します。
          </p>
        </div>

        {/* メインスライドショー */}
        <div className="relative max-w-6xl mx-auto mb-12">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            {currentData.id === 1 ? (
              // 肩こり・巻き肩改善（Before/After画像が1枚に含まれている場合）
              <div>
                <div className="relative">
                  <ImageUpload
                    defaultImage={currentData.beforeImage}
                    alt={`${currentData.title}のビフォーアフター`}
                    className="w-full object-contain brightness-[1.4] contrast-[1.15] saturate-110"
                    onImageChange={(newImage) => handleImageChange(currentData.id, newImage)}
                    height="auto"
                  />
                  {/* ハイライトオーバーレイ */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent pointer-events-none" style={{ zIndex: 20 }}></div>
                  {/* 実績No.1バッジ */}
                  <div className="absolute pointer-events-none" style={{ top: '16px', left: '16px', zIndex: 30 }}>
                    <span style={{
                      backgroundColor: '#c9a961',
                      color: 'white',
                      padding: '8px 16px',
                      borderRadius: '20px',
                      fontSize: '0.875rem',
                      fontWeight: 700,
                      boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
                      display: 'inline-block'
                    }}>
                      実績No.1
                    </span>
                  </div>
                  {/* カテゴリーバッジ */}
                  <div className="absolute top-4 right-4 pointer-events-none" style={{ zIndex: 30 }}>
                    <span className="bg-pink-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                      {currentData.category}
                    </span>
                  </div>
                </div>

                {/* コンテンツ部分 */}
                <div className="p-8 lg:p-12">
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

                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="space-y-2">
                      <div className="font-bold text-gray-800">{currentData.customerName}</div>
                      <div className="text-pink-600 font-medium">{currentData.period}</div>
                    </div>

                    <a
                      href="https://duplicated-imdj.bolt.host/"
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
            ) : (
              // その他のビフォーアフター（従来のレイアウト）
              <div className="grid lg:grid-cols-2 gap-0">
                {/* ビフォーアフター画像 */}
                <div className="relative">
                  <div className="h-96 lg:h-auto">
                    <ImageUpload
                      defaultImage={currentData.beforeImage}
                      alt={`${currentData.title}のビフォーアフター`}
                      className="w-full h-full object-cover brightness-[1.4] contrast-[1.15] saturate-110"
                      onImageChange={(newImage) => handleImageChange(currentData.id, newImage)}
                      height="400px"
                    />
                    {/* ハイライトオーバーレイ */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/15 via-transparent to-transparent pointer-events-none" style={{ zIndex: 5 }}></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" style={{ zIndex: 10 }}></div>

                    {/* カテゴリーバッジ */}
                    <div className="absolute top-4 left-4 pointer-events-none" style={{ zIndex: 30 }}>
                      <span className="bg-pink-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                        {currentData.category}
                      </span>
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
                    href="https://duplicated-imdj.bolt.host/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 space-x-2"
                  >
                    <span>あなたも美しく変身</span>
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </div>
              </div>
            )}
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
        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
          {beforeAfterData.map((item, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl p-4 shadow-md hover:shadow-lg transition-all duration-200 ${
                index === currentIndex ? 'ring-2 ring-pink-400' : ''
              }`}
            >
              <div className="text-center">
                <div
                  className="h-20 rounded-lg overflow-hidden mb-3 cursor-pointer"
                  onClick={() => goToSlide(index)}
                >
                  <ImageUpload
                    defaultImage={item.beforeImage}
                    alt={item.title}
                    className="w-full h-full object-cover brightness-[1.4] contrast-[1.15] saturate-110"
                    onImageChange={(newImage) => handleImageChange(item.id, newImage)}
                    height="80px"
                  />
                </div>
                <div className="font-semibold text-gray-800 text-sm">{item.title}</div>
                <div className="text-xs text-gray-500">{item.customerName}</div>
                <div className="text-xs text-pink-600 font-medium mt-1">{item.category}</div>
              </div>
            </div>
          ))}
        </div>

        {/* 実績統計 */}
        <div className="bg-white rounded-3xl shadow-lg p-8 animate-appear delay-1000">
          <h3 className="text-2xl font-bold text-gray-800 text-center mb-8">改善実績</h3>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-pink-500 mb-2">96.7%</div>
              <div className="text-gray-600">改善実感率</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-pink-500 mb-2">1400+</div>
              <div className="text-gray-600">施術実績</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-pink-500 mb-2">最短5分</div>
              <div className="text-gray-600">で変化を体感</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-pink-500 mb-2">95.2%</div>
              <div className="text-gray-600">お客様満足度</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}