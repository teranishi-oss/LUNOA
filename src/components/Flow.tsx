import React from 'react';

const flowSteps = [
  {
    title: 'WEB予約',
    description: '24時間オンライン予約可能'
  },
  {
    title: 'ご来店',
    description: '渋谷駅から徒歩4分'
  },
  {
    title: 'カウンセリング',
    description: 'お悩みを丁寧にヒアリング'
  },
  {
    title: '施術',
    description: '完全個室で深層部アプローチ'
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {flowSteps.map((step, index) => (
              <div
                key={index}
                className="bg-[#FAF9F6] rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="flex items-center justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-[#D4AF37] flex items-center justify-center text-white text-2xl font-bold">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-[#2C2C2C] text-center mb-3">
                  {step.title}
                </h3>
                <p className="text-[#2C2C2C]/70 text-center">
                  {step.description}
                </p>
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