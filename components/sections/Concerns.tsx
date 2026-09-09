import React from 'react';
import { FadeIn } from '../FadeIn';
import { SectionPhotoBg } from './SectionPhotoBg';
import centerImage from '../../assets/concerns-portrait-vignette.png';
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

const blobShapes = [
  '58% 42% 45% 55% / 55% 48% 52% 45%',
  '42% 58% 55% 45% / 45% 55% 45% 55%',
  '50% 50% 40% 60% / 60% 40% 60% 40%',
  '55% 45% 60% 40% / 45% 60% 40% 55%',
  '45% 55% 50% 50% / 50% 45% 55% 50%',
  '60% 40% 55% 45% / 40% 55% 45% 60%',
];

function CloudBubble({ text, solution, shape, delay }: { text: string; solution: string; shape: string; delay: number }) {
  return (
    <FadeIn delay={delay}>
      <div className="flex flex-col items-center">
        <div
          className="bg-cream-50/95 border border-gold-500/30 shadow-card px-6 py-6 text-center w-full"
          style={{ borderRadius: shape }}
        >
          <p className="text-[14.5px] leading-relaxed text-ink-900 mb-1.5">{text}</p>
          <p className="text-[11.5px] leading-relaxed text-gold-600">{solution}</p>
        </div>
        <div className="flex flex-col items-center gap-1 mt-1.5" aria-hidden="true">
          <span className="w-2.5 h-2.5 rounded-full bg-cream-50/90 border border-gold-500/30" />
          <span className="w-1.5 h-1.5 rounded-full bg-cream-50/80 border border-gold-500/25" />
        </div>
      </div>
    </FadeIn>
  );
}

export function Concerns() {
  return (
    <section className="relative py-28 md:py-40 bg-cream-50 overflow-hidden">
      <SectionPhotoBg image={bgImage} alt="LUNOA渋谷院の施術ルーム" opacity={0.72} />
      <div className="max-w-4xl mx-auto px-6 relative">
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

        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-5 gap-y-8 md:gap-x-6">
          {concerns.map((item, i) => (
            <CloudBubble key={item.text} {...item} shape={blobShapes[i]} delay={i * 0.08} />
          ))}
        </div>

        <FadeIn delay={0.4}>
          <div className="flex justify-center -mt-2 md:-mt-4">
            <img
              src={centerImage}
              alt="お悩みを抱える女性のイメージ"
              className="w-full max-w-md h-auto object-contain"
            />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
