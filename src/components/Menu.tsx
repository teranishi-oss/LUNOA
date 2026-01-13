import React from 'react';
import { ArrowRight } from 'lucide-react';

const menuItems = [
  {
    id: 1,
    name: '全身美容整体',
    description: '全身のバランスを整え、姿勢矯正・骨盤矯正で根本から改善',
    link: 'https://duplicated-imdj.bolt.host/'
  },
  {
    id: 2,
    name: '首肩コリ改善',
    description: 'デスクワークなど日々の生活による首肩の疲れを深層筋から根本改善',
    link: 'https://duplicated-imdj.bolt.host/'
  },
  {
    id: 3,
    name: 'ブライダル整体',
    description: '一番大切な日は、史上最高の自分で。ドレスから見える上半身を美しく整える特別プログラム',
    link: 'https://duplicated-imdj.bolt.host/'
  },
  {
    id: 4,
    name: '小顔矯正',
    description: 'フェイスラインを整え、むくみを根本から改善する美容整体',
    link: 'https://duplicated-imdj.bolt.host/'
  }
];

export function Menu() {
  return (
    <section id="menu" className="py-24 md:py-32 bg-[#F3F2EE]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="mb-6">
            施術メニュー
          </h2>
          <p className="text-[#6A6A6A]">
            お客様のお悩みに合わせた最適な施術をご提供
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-x-16 md:gap-y-20 max-w-5xl mx-auto">
          {menuItems.map((item, index) => (
            <div
              key={item.id}
              className="bg-[#FAFAF8] transition-opacity duration-200 hover:opacity-90 p-10"
              style={{ marginTop: index % 2 === 1 ? '40px' : '0' }}
            >
              <h3 className="mb-6">{item.name}</h3>
              <p className="text-[#6A6A6A] mb-8">{item.description}</p>

              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="cta inline-flex items-center space-x-2"
              >
                <span>店舗予約</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}