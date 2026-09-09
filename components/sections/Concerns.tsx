import React from 'react';
import { FadeIn } from '../FadeIn';
import centerImage from '../../assets/concerns-portrait.jpg';

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

function Bubble({ text, solution, delay }: { text: string; solution: string; delay: number }) {
  return (
    <FadeIn delay={delay}>
      <div className="bg-cream-50/90 backdrop-blur-sm rounded-[2.25rem] border border-gold-500/30 shadow-card px-6 py-6 text-center h-full flex flex-col justify-center">
        <p className="text-[15px] leading-relaxed text-ink-900 mb-2">{text}</p>
        <p className="text-[12px] leading-relaxed text-gold-600">{solution}</p>
      </div>
    </FadeIn>
  );
}

export function Concerns() {
  return (
    <section className="relative py-28 md:py-40 bg-gradient-to-b from-beige to-cream-50 overflow-hidden">
      <div className="max-w-4xl mx-auto px-6">
        <FadeIn>
          <div className="mb-6 text-center">
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

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 md:grid-rows-3 gap-5 items-center">
          <div className="md:col-start-1 md:row-start-1">
            <Bubble {...concerns[0]} delay={0} />
          </div>
          <div className="md:col-start-1 md:row-start-2">
            <Bubble {...concerns[2]} delay={0.08} />
          </div>
          <div className="md:col-start-1 md:row-start-3">
            <Bubble {...concerns[4]} delay={0.16} />
          </div>

          <FadeIn delay={0.24}>
            <div className="order-first md:order-none md:col-start-2 md:row-start-1 md:row-span-3 flex justify-center">
              <div className="w-52 h-52 md:w-48 md:h-48 rounded-full overflow-hidden border-[6px] border-cream-50 shadow-card ring-1 ring-gold-500/40">
                <img src={centerImage} alt="お悩みを抱える女性のイメージ" className="w-full h-full object-cover" />
              </div>
            </div>
          </FadeIn>

          <div className="md:col-start-3 md:row-start-1">
            <Bubble {...concerns[1]} delay={0.08} />
          </div>
          <div className="md:col-start-3 md:row-start-2">
            <Bubble {...concerns[3]} delay={0.16} />
          </div>
          <div className="md:col-start-3 md:row-start-3">
            <Bubble {...concerns[5]} delay={0.24} />
          </div>
        </div>
      </div>
    </section>
  );
}
