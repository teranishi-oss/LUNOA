import React from 'react';
import { Check } from 'lucide-react';
import { FadeIn } from '../FadeIn';
import weddingImage from '../../assets/IMG_0653.jpg';

const reasons = [
  '結婚式までの日数から逆算し、平均3ヶ月で結果を出す設計にしているから。',
  '渋谷駅から徒歩7分。通いやすい立地だから。',
  '「その場限り」ではなく根本改善だから、当日も、その先も安心できるから。',
  '上品な空間で、人生の節目にふさわしい特別な時間を過ごせるから。',
];

export function BridalReasons() {
  return (
    <section className="relative py-28 md:py-40 bg-gradient-to-b from-beige to-cream-50 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <div className="mb-16 text-center">
            <p className="text-[14px] tracking-[0.3em] text-gold-600 uppercase mb-5">Bridal</p>
            <h2 className="font-mincho text-[36px] md:text-[46px] text-ink-900 leading-[1.6]">
              毎月100名の花嫁が、
              <br />
              渋谷院を選ぶ理由。
            </h2>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-10 md:gap-12 items-center">
          <FadeIn>
            <div className="rounded-card overflow-hidden border border-gold-500/40 shadow-card">
              <img
                src={weddingImage}
                alt="LUNOAをご利用いただいた花嫁様の結婚式"
                className="w-full h-[340px] md:h-[440px] object-cover"
              />
            </div>
          </FadeIn>

          <div className="grid gap-5">
            {reasons.map((text, i) => (
              <FadeIn key={text} delay={i * 0.1}>
                <div className="flex items-start gap-4 bg-cream-50 rounded-card border border-gold-500/40 shadow-card px-7 py-6">
                  <span className="flex-shrink-0 w-7 h-7 rounded-full bg-gold-500/15 flex items-center justify-center mt-0.5">
                    <Check className="w-4 h-4 text-gold-600" />
                  </span>
                  <p className="text-[16.5px] leading-relaxed text-ink-900">{text}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
