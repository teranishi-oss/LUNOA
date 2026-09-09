import React from 'react';
import { FadeIn } from './FadeIn';

const reasons = [
  {
    num: '01',
    title: '確かな変化',
    sub: 'Visible Change',
    desc: '骨格・筋膜・筋肉の状態を見極め、顔や身体の歪みに的確にアプローチ。一度の施術で実感できる確かな技術力。',
  },
  {
    num: '02',
    title: 'オーダーメイド施術',
    sub: 'Personalized',
    desc: 'お悩みや体質、生活習慣まで丁寧に汲み取り、その方に最適な施術を組み立てます。',
  },
  {
    num: '03',
    title: '上質な空間',
    sub: 'Private Room',
    desc: '洗練された完全個室。人目を気にすることなく、心身ともに解きほぐされるひとときを。',
  },
];

export function Features() {
  return (
    <>
      {/* Philosophy */}
      <section className="section-dark py-32 md:py-48">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <FadeIn>
            <p className="caption text-accent mb-8">Philosophy</p>
          </FadeIn>
          <FadeIn delay={0.15}>
            <h2 className="mb-12 text-3xl md:text-4xl lg:text-[42px]" style={{ fontFamily: 'Cormorant Garamond, serif', lineHeight: 1.5 }}>
              美容と健康、<br />その本質へ。
            </h2>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div className="divider mx-auto mb-12" />
          </FadeIn>
          <FadeIn delay={0.4}>
            <p className="mb-8 leading-[2.8] text-[#A8A29E]">
              表面的な変化や一時的な心地よさではなく、
              <br className="hidden md:inline" />
              骨格・筋膜・筋肉のバランスに丁寧に働きかけ、
              <br className="hidden md:inline" />
              本来あるべき美しさと、軽やかな身体へ導きます。
            </p>
          </FadeIn>
          <FadeIn delay={0.5}>
            <p className="leading-[2.8] text-[#78716C]">
              落ち着いた空間、確かな技術、細部まで行き届いたサービス。
              <br className="hidden md:inline" />
              日常から少し距離を置き、
              <br className="hidden md:inline" />
              ご自身の身体と静かに向き合う時間をお過ごしください。
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Why LUNOA */}
      <section className="section-light py-32 md:py-48">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-24">
              <p className="caption mb-6" style={{ color: '#B7A482' }}>Why LUNOA</p>
              <h2 className="text-[#1A1A1A]">選ばれる理由</h2>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-0 md:divide-x md:divide-[#D6D0C7]/40">
            {reasons.map((item, i) => (
              <FadeIn key={item.num} delay={i * 0.15}>
                <div className="px-8 md:px-12 py-12 md:py-0 text-center">
                  <span className="font-display text-4xl text-[#B7A482]/40 block mb-6">{item.num}</span>
                  <p className="caption mb-4" style={{ color: '#B7A482' }}>{item.sub}</p>
                  <h3 className="text-[#1A1A1A] mb-6 text-lg">{item.title}</h3>
                  <p className="text-[#6B6560] leading-[2.4]">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
