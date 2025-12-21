import React from 'react';
import step1Image from '../assets/5ss05lf4.jpeg';
import step2Image from '../assets/uixw7rjj.jpeg';
import step3Image from '../assets/ppfjscwj copy.jpeg';
import step4Image from '../assets/6f9mcamu.jpeg';

const flowSteps = [
  {
    title: 'WEB予約',
    description: '24時間オンライン予約可能',
    image: step1Image
  },
  {
    title: 'ご来店',
    description: '渋谷駅から徒歩4分',
    image: step2Image
  },
  {
    title: 'カウンセリング',
    description: 'お悩みを丁寧にヒアリング',
    image: step3Image
  },
  {
    title: '施術',
    description: '完全個室で深層部アプローチ',
    image: step4Image
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

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {flowSteps.map((step, index) => (
              <div key={index} className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
                <div className="aspect-[4/3] relative">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

                  <div className="absolute top-6 left-6">
                    <span className="inline-block bg-[#D4AF37] text-white px-6 py-2 rounded-full text-lg font-bold shadow-lg">
                      STEP {index + 1}
                    </span>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-2xl lg:text-3xl font-bold mb-2">
                      {step.title}
                    </h3>
                    <p className="text-base lg:text-lg opacity-90">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-[#2C2C2C]/70 text-sm bg-[#FAF9F6] p-4 rounded-xl inline-block">
              ※無理な勧誘は一切ありません
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}