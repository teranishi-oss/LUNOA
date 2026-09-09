import React from 'react';
import { Check } from 'lucide-react';
import { FadeIn } from '../FadeIn';
import logoImage from '../../assets/bridal-bg.jpg';

const reasons = [
  '結婚式までの日数から逆算し、平均3ヶ月で結果を出す設計にしているから。',
  '渋谷駅から徒歩7分。通いやすい立地だから。',
  '「その場限り」ではなく根本改善だから、当日も、その先も安心できるから。',
  '上品な空間で、人生の節目にふさわしい特別な時間を過ごせるから。',
];

export function BridalReasons() {
  return (
    <section className="relative py-28 md:py-40 bg-gradient-to-b from-beige to-cream-50 overflow-hidden">
      <img
        src={logoImage}
        alt=""
        aria-hidden="true"
        className="absolute -right-16 -top-10 w-[260px] md:w-[320px] opacity-[0.14] pointer-events-none select-none mix-blend-multiply"
      />

      <div className="max-w-4xl mx-auto px-6 relative">
        <FadeIn>
          <div className="mb-16">
            <p className="text-[12px] tracking-[0.3em] text-gold-600 uppercase mb-5">Bridal</p>
            <h2 className="font-mincho text-[30px] md:text-[38px] text-ink-900 leading-[1.6]">
              毎月100名の花嫁が、
              <br />
              渋谷院を選ぶ理由。
            </h2>
          </div>
        </FadeIn>

        <div className="grid sm:grid-cols-2 gap-5">
          {reasons.map((text, i) => (
            <FadeIn key={text} delay={i * 0.1}>
              <div className="flex items-start gap-4 bg-cream-50 rounded-card border border-gold-500/40 shadow-card px-7 py-7 h-full">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gold-500/15 flex items-center justify-center mt-0.5">
                  <Check className="w-3.5 h-3.5 text-gold-600" />
                </span>
                <p className="text-[14.5px] leading-relaxed text-ink-900">{text}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
