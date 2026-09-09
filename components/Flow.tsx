import React from 'react';
import { StoreInfo } from '../data/stores';
import { FadeIn } from './FadeIn';
import step1Image from '../assets/step1-1.jpeg';
import step2Image from '../assets/step2-1.jpeg';
import step3Image from '../assets/step3-1.jpeg';
import step4Image from '../assets/step4-1.jpeg';

interface FlowProps {
  store?: StoreInfo;
}

export function Flow({ store }: FlowProps) {
  const flowSteps = [
    {
      num: '01',
      title: 'WEB予約',
      description: '24時間オンライン予約可能',
      image: step1Image,
    },
    {
      num: '02',
      title: 'ご来店',
      description: store?.access ?? '駅から徒歩圏内',
      image: step2Image,
    },
    {
      num: '03',
      title: 'カウンセリング',
      description: 'お悩みを丁寧にヒアリング',
      image: step3Image,
    },
    {
      num: '04',
      title: '施術',
      description: '完全個室で深層部アプローチ',
      image: step4Image,
    },
  ];

  return (
    <section id="flow" className="section-light py-32 md:py-48">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-24">
            <p className="caption mb-6" style={{ color: '#B7A482' }}>Flow</p>
            <h2 className="text-[#1A1A1A]">ご来店から施術までの流れ</h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#D6D0C7]/30">
          {flowSteps.map((step, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <div className="relative bg-[#F5F3EF] overflow-hidden">
                <img
                  src={step.image}
                  alt={step.title}
                  draggable={false}
                  className="w-full h-[300px] md:h-[400px] object-contain select-none"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#F5F3EF] to-transparent p-8 pt-16">
                  <span className="font-display text-3xl text-[#B7A482]/40 block mb-2">{step.num}</span>
                  <h3 className="text-[#1A1A1A] text-lg mb-1">{step.title}</h3>
                  <p className="text-[#6B6560] text-sm">{step.description}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.4}>
          <p className="text-center text-[#78716C] text-xs tracking-[0.1em] mt-12">
            ※無理な勧誘は一切ありません
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
