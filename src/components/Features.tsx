import React from 'react';
import { Shield, Zap, Users } from 'lucide-react';

const features = [
  {
    icon: <Shield className="w-12 h-12" />,
    title: '完全個室のプライベート空間',
    description: '周りを気にせずリラックスできる完全個室。5つの施術ベッドで一人ひとりに集中したケアを提供。',
    image: '/images/treatment-room.jpg',
    imageAlt: '完全個室の施術室'
  },
  {
    icon: <Zap className="w-12 h-12" />,
    title: '深層部アプローチ技術',
    description: '筋膜やマッサージでは届かない筋肉の深層部に直接アプローチ。短時間で圧倒的な変化を実現。',
    image: '/images/treatment-01.jpg',
    imageAlt: '深層部アプローチ施術シーン'
  },
  {
    icon: <Users className="w-12 h-12" />,
    title: '経験豊富なセラピスト',
    description: '解剖学に精通した6名の専門スタッフが、あなたの体の根本原因から整えます。',
    image: '/images/treatment-02.jpg',
    imageAlt: 'LUNOA専門スタッフ'
  }
];

export function Features() {
  return (
    <section id="features" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#2C2C2C] mb-6">
            LUNOAの特長
          </h2>
        </div>

        <div className="max-w-6xl mx-auto space-y-24">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* 画像 */}
              <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                <img 
                  src={feature.image} 
                  alt={feature.imageAlt} 
                  className="w-full h-96 object-cover rounded-2xl shadow-lg"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg';
                  }}
                />
              </div>

              {/* テキスト */}
              <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                <div className="space-y-6">
                  <div className="w-16 h-16 bg-[#E8D5E8] rounded-2xl flex items-center justify-center text-[#D4AF37]">
                    {feature.icon}
                  </div>
                  <h3 className="text-3xl font-bold text-[#2C2C2C]">
                    {feature.title}
                  </h3>
                  <p className="text-lg text-[#2C2C2C]/70 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}