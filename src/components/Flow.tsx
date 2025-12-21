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
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                <div className="aspect-[4/3] relative">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-2xl pointer-events-none"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
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