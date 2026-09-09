import React from 'react';
import { FadeIn } from '../FadeIn';

const phases = [
  {
    num: '01',
    month: '1ヶ月目 — PHASE 1',
    title: '集中改善',
    desc: '不調の根本原因にアプローチし、体の土台を集中的に整える期間。変化を最も実感しやすいフェーズです。',
  },
  {
    num: '02',
    month: '2ヶ月目 — PHASE 2',
    title: '定着',
    desc: '整った状態をセルフケアとして習慣化し、自分の力で変化を保てるようにしていく期間。',
  },
  {
    num: '03',
    month: '3ヶ月目 — PHASE 3',
    title: '卒業',
    desc: '通わなくても、自分自身で身体を整えられる状態へ。ここがLUNOA渋谷院のゴールです。',
  },
];

export function PhaseFlow() {
  return (
    <section className="relative py-28 md:py-40 bg-gradient-to-b from-beige to-cream-50">
      <div className="max-w-5xl mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-6">
            <p className="text-[12px] tracking-[0.3em] text-gold-600 uppercase mb-5">Improvement Journey</p>
            <h2 className="font-mincho text-[30px] md:text-[38px] text-ink-900 leading-[1.6] mb-6">
              卒業までの
              <br />
              3つのフェーズ
            </h2>
            <p className="text-[14px] text-ink-500 max-w-lg mx-auto leading-relaxed">
              平均3ヶ月。通い続けるためではなく、自分の体を自分で管理できるようになるための設計です。
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-8 mt-16 relative">
          <div className="hidden md:block absolute top-8 left-[16.5%] right-[16.5%] h-px bg-gold-500/40" aria-hidden="true" />
          {phases.map((phase, i) => (
            <FadeIn key={phase.num} delay={i * 0.15}>
              <div className="relative bg-cream-50 rounded-card border border-gold-500/40 shadow-card p-8 text-center h-full">
                <div className="w-16 h-16 rounded-full border-2 border-gold-500 bg-cream-50 flex items-center justify-center mx-auto mb-6 font-mincho text-[17px] text-gold-600 relative z-10">
                  {phase.num}
                </div>
                <p className="text-[11px] tracking-[0.15em] text-gold-600 uppercase mb-2">{phase.month}</p>
                <h3 className="font-mincho text-[19px] text-ink-900 mb-4">{phase.title}</h3>
                <p className="text-[13.5px] leading-loose text-ink-500">{phase.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
