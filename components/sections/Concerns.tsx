import React from 'react';
import { FadeIn } from '../FadeIn';
import { SectionPhotoBg } from './SectionPhotoBg';
import bgImage from '../../assets/concerns-bg.jpg';

const concerns = [
  { num: '01', text: '年々気になる、姿勢の崩れ。' },
  { num: '02', text: 'いろんな整体にいったけど、改善されない。' },
  { num: '03', text: '自分で頑張ってみたけど変わらない。' },
  { num: '04', text: '大切なイベント（結婚式など）までに、間に合うか不安。' },
];

export function Concerns() {
  return (
    <section className="relative py-28 md:py-40 bg-cream-50 overflow-hidden">
      <SectionPhotoBg image={bgImage} alt="LUNOA渋谷院の施術ルーム" />
      <div className="max-w-4xl mx-auto px-6 relative">
        <FadeIn>
          <div className="mb-16">
            <p className="text-[14px] tracking-[0.3em] text-gold-600 uppercase mb-5">Concerns</p>
            <h2 className="font-mincho text-[36px] md:text-[46px] text-ink-900 leading-[1.6]">
              こんなお悩み、
              <br />
              抱えていませんか。
            </h2>
          </div>
        </FadeIn>

        <div className="grid sm:grid-cols-2 gap-5">
          {concerns.map((item, i) => (
            <FadeIn key={item.num} delay={i * 0.1}>
              <div className="flex items-start gap-5 bg-cream-50 rounded-card border border-gold-500/40 shadow-card px-7 py-7 h-full">
                <span className="font-mincho text-[20px] text-gold-600 flex-shrink-0">{item.num}</span>
                <p className="text-[17px] leading-relaxed text-ink-900">{item.text}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
