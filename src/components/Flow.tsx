import React from 'react';
import step1Image from '../assets/gb6dqnat copy copy.png';
import step2Image from '../assets/uixw7rjj copy.jpeg';
import step3Image from '../assets/ppfjscwj copy copy.jpeg';
import step4Image from '../assets/6f9mcamu copy.jpeg';

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
                className="overflow-hidden rounded-2xl shadow-lg bg-white"
              >
                <img
                  src={step.image}
                  alt={step.title}
                  draggable={false}
                  className="w-full h-[500px] object-contain select-none"
                />
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