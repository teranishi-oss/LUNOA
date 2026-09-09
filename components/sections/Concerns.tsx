import React from 'react';
import { FadeIn } from '../FadeIn';
import { SectionPhotoBg } from './SectionPhotoBg';
import centerImage from '../../assets/concerns-portrait-cutout.png';
import bgImage from '../../assets/concerns-bg.jpg';

const concerns = [
  {
    text: '年々気になる、姿勢の崩れ。',
    solution: '骨格から根本的に整え、美しい姿勢へ導きます。',
  },
  {
    text: 'いろんな整体にいったけど、改善されない。',
    solution: '深層部への直接アプローチで、これまでと違う変化を。',
  },
  {
    text: '自分で頑張ってみたけど変わらない。',
    solution: 'プロの手技とセルフケア指導で、着実な変化を実感。',
  },
  {
    text: '大切なイベント（結婚式など）までに、間に合うか不安。',
    solution: '逆算した施術計画で、当日までにしっかり結果を。',
  },
  {
    text: 'マッサージやエステでは、その場しのぎにしかならなかった。',
    solution: '表面的なケアでは届かない、筋肉の深層部から根本改善。',
  },
  {
    text: '忙しくて、なかなか自分の体と向き合う時間がない。',
    solution: '完全個室・渋谷駅徒歩7分だから、忙しい方でも通いやすい。',
  },
];

export function Concerns() {
  return (
    <section className="relative py-28 md:py-40 bg-cream-50 overflow-hidden">
      <SectionPhotoBg image={bgImage} alt="LUNOA渋谷院の施術ルーム" opacity={0.72} />
      <div className="max-w-5xl mx-auto px-6 relative">
        <FadeIn>
          <div className="mb-16 md:mb-20 text-center">
            <p className="text-[14px] tracking-[0.3em] text-gold-600 uppercase mb-5">Concerns</p>
            <h2 className="font-mincho text-[36px] md:text-[46px] text-ink-900 leading-[1.6] mb-4">
              こんなお悩み、
              <br />
              抱えていませんか。
            </h2>
            <p className="text-[14px] text-ink-500 leading-relaxed">
              もし一つでも当てはまるなら、ぜひ渋谷院にご相談ください。
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-[0.8fr_1.2fr] gap-10 md:gap-16 items-start">
          <FadeIn>
            <div className="flex justify-center md:justify-start md:sticky md:top-28">
              <img
                src={centerImage}
                alt="お悩みを抱える女性のイメージ"
                className="w-auto h-[340px] md:h-[520px] object-contain"
                style={{ filter: 'drop-shadow(0 24px 20px rgba(42,38,32,0.22)) drop-shadow(0 8px 8px rgba(42,38,32,0.12))' }}
              />
            </div>
          </FadeIn>

          <div className="bg-cream-50/85 backdrop-blur-sm rounded-card border border-gold-500/20 shadow-card px-7 py-2 md:px-10">
            {concerns.map((item, i) => (
              <FadeIn key={item.text} delay={i * 0.08}>
                <div className="flex items-start gap-5 py-6 border-b border-gold-500/20 last:border-0">
                  <span className="font-mincho text-[26px] md:text-[30px] text-gold-500/60 flex-shrink-0 w-11 leading-none pt-1">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <p className="text-[17px] leading-relaxed text-ink-900 mb-2">{item.text}</p>
                    <p className="text-[13px] leading-relaxed text-gold-600">{item.solution}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
