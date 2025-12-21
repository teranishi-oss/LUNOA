import React from 'react';
import { Calendar, MapPin, MessageCircle, Sparkles } from 'lucide-react';

const flowSteps = [
  {
    number: '01',
    title: 'WEB予約',
    description: '24時間オンライン予約可能',
    icon: Calendar
  },
  {
    number: '02',
    title: 'ご来店',
    description: '渋谷駅から徒歩4分',
    icon: MapPin
  },
  {
    number: '03',
    title: 'カウンセリング',
    description: 'お悩みを丁寧にヒアリング',
    icon: MessageCircle
  },
  {
    number: '04',
    title: '施術',
    description: '完全個室で深層部アプローチ',
    icon: Sparkles
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
            {flowSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-[#E8D5E8] to-[#FFE4E1] rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-[#D4AF37] rounded-full flex items-center justify-center text-white font-bold text-xl">
                        {step.number}
                      </div>
                    </div>
                    <div className="flex-1">
                      <Icon className="w-12 h-12 text-[#D4AF37] mb-4" />
                      <h3 className="text-2xl font-bold text-[#2C2C2C] mb-2">{step.title}</h3>
                      <p className="text-[#2C2C2C]/70">{step.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
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