import React from 'react';
import { ArrowRight } from 'lucide-react';

const menuItems = [
  {
    id: 1,
    name: '全身美容整体',
    description: '全身のバランスを整え、姿勢矯正・骨盤矯正で根本から改善',
    link: 'https://beauty.hotpepper.jp/CSP/kr/reserve/?storeId=H000777760'
  },
  {
    id: 2,
    name: '首肩コリ改善',
    description: 'デスクワークなど日々の生活による首肩の疲れを深層筋から根本改善',
    link: 'https://beauty.hotpepper.jp/CSP/kr/reserve/?storeId=H000777760'
  },
  {
    id: 3,
    name: 'ブライダル整体',
    description: '一番大切な日は、史上最高の自分で。ドレスから見える上半身を美しく整える特別プログラム',
    link: 'https://beauty.hotpepper.jp/CSP/kr/reserve/?storeId=H000777760'
  },
  {
    id: 4,
    name: '小顔矯正',
    description: 'フェイスラインを整え、むくみを根本から改善する美容整体',
    link: 'https://beauty.hotpepper.jp/CSP/kr/reserve/?storeId=H000777760'
  }
];

export function Menu() {
  return (
    <section id="menu" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            施術メニュー
          </h2>
          <p className="text-lg text-gray-600">
            お客様のお悩みに合わせた最適な施術をご提供
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {menuItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 p-8"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.name}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{item.description}</p>

              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 group"
              >
                <span>詳しく見る</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}