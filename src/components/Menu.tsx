import React from 'react';
import { Clock, ArrowRight } from 'lucide-react';

const menuItems = [
  {
    id: 1,
    name: '全身美容整体',
    duration: '60分',
    originalPrice: '¥12,000',
    price: '初回¥1,100',
    image: "/images/treatment-01.jpg",
    popular: true,
    description: '全身のバランスを整える総合的な美容整体'
  },
  {
    id: 2,
    name: '首肩コリ改善',
    duration: '60分',
    price: '¥3,300',
    image: "/images/treatment-02.jpg",
    description: 'デスクワークによる首肩の疲れを根本改善'
  },
  {
    id: 3,
    name: '小顔矯正',
    duration: '60分',
    price: '¥3,850',
    image: "/images/treatment-01.jpg",
    description: 'フェイスラインを整えて理想の小顔へ'
  },
  {
    id: 4,
    name: 'ブライダル整体',
    duration: '60分',
    price: '¥15,000',
    image: "/images/treatment-02.jpg",
    special: true,
    description: '結婚式に向けた特別な美容整体コース'
  },
  {
    id: 5,
    name: '肩甲骨はがし',
    duration: '60分',
    price: '¥3,300',
    image: "/images/treatment-01.jpg",
    description: '肩甲骨周りの筋肉を徹底的にほぐす'
  },
  {
    id: 6,
    name: 'カスタムオーダー',
    duration: '応相談',
    price: '応相談',
    image: "/images/treatment-02.jpg",
    description: 'お客様のご要望に合わせたオーダーメイド施術'
  }
];

export function Menu() {
  return (
    <section id="menu" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#2C2C2C] mb-6">
            施術メニュー
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {menuItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-100 relative"
            >
              {/* ラベル */}
              {item.popular && (
                <div className="absolute top-4 left-4 z-10">
                  <span className="bg-[#D4AF37] text-white px-3 py-1 rounded-full text-sm font-bold">
                    POPULAR
                  </span>
                </div>
              )}
              {item.special && (
                <div className="absolute top-4 left-4 z-10">
                  <span className="bg-[#E8D5E8] text-[#2C2C2C] px-3 py-1 rounded-full text-sm font-bold">
                    SPECIAL
                  </span>
                </div>
              )}

              {/* 画像 */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>

              {/* コンテンツ */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#2C2C2C] mb-2">{item.name}</h3>
                <p className="text-[#2C2C2C]/70 text-sm mb-4">{item.description}</p>
                
                {/* 時間 */}
                <div className="flex items-center mb-4 text-[#2C2C2C]/60">
                  <Clock className="w-4 h-4 mr-2" />
                  <span className="text-sm">{item.duration}</span>
                </div>
                
                {/* 価格 */}
                <div className="mb-6">
                  {item.originalPrice && (
                    <div className="text-[#2C2C2C]/50 line-through text-sm mb-1">
                      {item.originalPrice}
                    </div>
                  )}
                  <div className="text-2xl font-bold text-[#D4AF37]">{item.price}</div>
                </div>

                {/* ボタン */}
                <button className="w-full bg-[#E8D5E8] hover:bg-[#D4AF37] hover:text-white text-[#2C2C2C] font-semibold py-3 px-6 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 group">
                  <span>詳しく見る</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}