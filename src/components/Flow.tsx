import React from 'react';
import { Calendar, MapPin, MessageSquare, Zap, Heart } from 'lucide-react';
import step1Image from '../assets/5ss05lf4.jpeg';

const flowSteps: Array<{
  icon: React.ReactNode;
  title: string;
  description: string;
  detail: string;
  image?: string;
}> = [
  {
    icon: <Calendar className="w-8 h-8" />,
    title: 'WEB予約',
    description: '24時間オンライン予約可能',
    detail: 'お好きな時間にWEBから簡単予約',
    image: step1Image
  },
  {
    icon: <MapPin className="w-8 h-8" />,
    title: 'ご来店',
    description: '渋谷駅から徒歩3分',
    detail: 'アクセス抜群の立地でお待ちしております'
  },
  {
    icon: <MessageSquare className="w-8 h-8" />,
    title: 'カウンセリング',
    description: 'お悩みを丁寧にヒアリング',
    detail: 'お体の状態を詳しくお聞きします'
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: '施術',
    description: '完全個室で深層部アプローチ',
    detail: 'プライベート空間で集中的にケア'
  },
  {
    icon: <Heart className="w-8 h-8" />,
    title: 'アフターケア',
    description: '自宅でできるケア方法をアドバイス',
    detail: '効果を持続させるためのサポート'
  }
];

export function Flow() {
  return (
    <section id="flow" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#2C2C2C] mb-6">
            ご来店から施術までの流れ
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* タイムライン */}
          <div className="relative">
            {/* 縦線 */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-[#E8D5E8] hidden md:block"></div>

            {flowSteps.map((step, index) => (
              <div key={index} className="relative flex items-start mb-12 last:mb-0">
                {/* アイコン */}
                <div className="w-16 h-16 bg-[#D4AF37] rounded-full flex items-center justify-center text-white flex-shrink-0 relative z-10">
                  {step.icon}
                </div>

                {/* コンテンツ */}
                <div className="ml-8 flex-1">
                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-[#E8D5E8]">
                    <div className="flex items-center mb-3">
                      <span className="bg-[#E8D5E8] text-[#2C2C2C] px-3 py-1 rounded-full text-sm font-bold mr-4">
                        STEP {index + 1}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-[#2C2C2C] mb-2">
                      {step.title}
                    </h3>
                    <p className="text-[#D4AF37] font-medium mb-2">
                      {step.description}
                    </p>
                    <p className="text-[#2C2C2C]/70 mb-4">
                      {step.detail}
                    </p>
                    {step.image && (
                      <div className="mt-4 rounded-xl overflow-hidden">
                        <img
                          src={step.image}
                          alt={step.title}
                          className="w-full h-auto object-cover"
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* 注記 */}
          <div className="mt-12 text-center">
            <p className="text-[#2C2C2C]/70 text-sm bg-[#FAF9F6] p-4 rounded-xl">
              ※無理な勧誘は一切ありません
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}