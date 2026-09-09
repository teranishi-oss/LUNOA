import React from 'react';
import { FadeIn } from '../FadeIn';

const reasons = [
  {
    num: '01',
    title: '肩こり、腰痛、頭痛',
    desc: '長年の不調に悩む方。毎日の痛みから解放されたい。そんな方へ根本改善をお届けします。',
  },
  {
    num: '02',
    title: '他の整体で改善しなかった方',
    desc: '様々な施術を試してきたけど改善しない。その理由は、根本原因へのアプローチが違うから。',
  },
  {
    num: '03',
    title: '歳をとっても不自由ない生活',
    desc: 'セルフケアで卒業へ。生涯、自分の力で身体を整える力を手に入れてください。',
  },
];

export function WhySelected() {
  return (
    <section id="why-selected" className="relative py-28 md:py-40 bg-cream-50 overflow-hidden">
      <div
        className="absolute left-1/2 top-16 -translate-x-1/2 w-[420px] h-[420px] rounded-full border border-gold-400/30 pointer-events-none"
        aria-hidden="true"
      />
      <div className="max-w-5xl mx-auto px-6 relative">
        <FadeIn>
          <div className="text-center mb-20">
            <p className="text-[12px] tracking-[0.3em] text-gold-600 uppercase mb-5">What Is Graduation Beauty</p>
            <h2 className="font-mincho text-[30px] md:text-[38px] text-ink-900 leading-[1.6]">
              卒業型美容整体が
              <br />
              選ばれる理由
            </h2>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-6">
          {reasons.map((reason, i) => (
            <FadeIn key={reason.num} delay={i * 0.12}>
              <div className="bg-cream-50 rounded-card border border-gold-500/40 shadow-card p-9 text-center h-full">
                <p className="font-mincho text-[22px] text-gold-600 mb-5">{reason.num}</p>
                <h3 className="text-[17px] text-ink-900 mb-4">{reason.title}</h3>
                <p className="text-[13.5px] leading-loose text-ink-500">{reason.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
