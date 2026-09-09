import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { StoreInfo } from '../data/stores';
import { FadeIn } from './FadeIn';
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
    image: result1,
  },
  {
    id: 2,
    title: '首の可動域改善',
    description: '首が自由に動くように！可動域が大幅に改善',
    details: '首の動きが制限されていた状態から、上下左右スムーズに動かせるように。頭痛や首の痛みも解消されました。',
    image: result2,
  },
  {
    id: 3,
    title: '体の柔軟性向上',
    description: '体の可動域が大幅に向上！柔軟性がアップしました',
    details: '体の硬さが改善され、前屈などの動作がスムーズに。日常生活での動きが楽になり、運動パフォーマンスも向上しました。',
    image: result3,
  },
];

interface ResultsProps {
  store?: StoreInfo;
}

export function Results({ store }: ResultsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const bookingUrl = store?.bookingUrl ?? 'https://duplicated-imdj.bolt.host/';

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % beforeAfterData.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + beforeAfterData.length) % beforeAfterData.length);
  };

  const currentData = beforeAfterData[currentIndex];

  return (
    <>
      {/* Results carousel */}
      <section id="results" className="section-light py-32 md:py-48">
        <div className="max-w-5xl mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-20">
              <p className="caption mb-6" style={{ color: '#B7A482' }}>Results</p>
              <h2 className="text-[#1A1A1A] mb-8">たった1回でこんなに変わる</h2>
              <p className="text-[#6B6560] max-w-2xl mx-auto">
                実際のお客様の施術結果をご覧ください。
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            {/* Main carousel */}
            <div className="relative bg-white overflow-hidden mb-12">
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Image */}
                <div className="relative h-96 lg:h-auto bg-[#F5F3EF]">
                  <img
                    src={currentData.image}
                    alt={`${currentData.title}`}
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = logoImage;
                    }}
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#B7A482] text-white px-4 py-2 text-xs tracking-[0.15em]">
                      No.{currentData.id}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-10 lg:p-12 flex flex-col justify-center">
                  <div className="mb-8">
                    <h3 className="text-[#1A1A1A] mb-6">{currentData.title}</h3>
                    <p className="text-[#1A1A1A] mb-4">{currentData.description}</p>
                  </div>
                  <p className="text-[#6B6560] mb-8 leading-[2.4]">{currentData.details}</p>
                  <Link
                    to="/reserve"
                    className="cta inline-flex items-center gap-2 justify-center"
                    style={{ borderColor: 'rgba(30,30,30,0.3)', color: '#1A1A1A' }}
                  >
                    <span>ご予約はこちら</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* Nav buttons */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/10 hover:bg-black/20 text-[#1A1A1A] p-3 transition-colors duration-300"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/10 hover:bg-black/20 text-[#1A1A1A] p-3 transition-colors duration-300"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </FadeIn>

          {/* Indicators */}
          <div className="flex justify-center space-x-3 mb-16">
            {beforeAfterData.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-px transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-[#B7A482] w-8'
                    : 'bg-[#D6D0C7] hover:bg-[#B7A482]/50 w-6'
                }`}
              />
            ))}
          </div>

          {/* Thumbnails */}
          <div className="grid md:grid-cols-3 gap-px bg-[#D6D0C7]/30">
            {beforeAfterData.map((item, index) => (
              <FadeIn key={index} delay={0.2 + index * 0.1}>
                <button
                  onClick={() => setCurrentIndex(index)}
                  className={`w-full bg-[#F5F3EF] p-6 transition-colors duration-300 ${
                    index === currentIndex ? 'border border-[#B7A482]' : ''
                  }`}
                >
                  <div className="text-center">
                    <div className="h-32 overflow-hidden mb-4 bg-white">
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
                    <div className="text-[#1A1A1A] text-sm mb-1">{item.title}</div>
                    <div className="text-xs text-[#B7A482]">No.{item.id}</div>
                  </div>
                </button>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.4}>
            <p className="text-center text-[#78716C] text-xs tracking-[0.1em] mt-8">
              ※効果には個人差があります。写真は実際のお客様の施術結果です。
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Stats */}
      <section className="section-dark py-32 md:py-40">
        <div className="max-w-5xl mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-20">
              <p className="caption text-accent mb-6">Numbers</p>
              <h2>改善実績</h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8">
            {[
              { num: '96.7', unit: '%', label: '改善実感率' },
              { num: '3,500', unit: '+', label: '施術実績' },
              { num: '95.2', unit: '%', label: 'お客様満足度' },
              { num: '5', unit: '分', label: '最短で変化を体感' },
            ].map((stat, i) => (
              <FadeIn key={stat.label} delay={i * 0.1}>
                <div className="text-center">
                  <div className="font-display text-4xl md:text-5xl text-[#B7A482] mb-3">
                    {stat.num}<span className="text-2xl md:text-3xl">{stat.unit}</span>
                  </div>
                  <p className="text-[#78716C] text-xs tracking-[0.15em]">{stat.label}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
