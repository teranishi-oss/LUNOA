import React from 'react';
import { PersonStanding, RefreshCw, Frown, CalendarClock } from 'lucide-react';
import { FadeIn } from '../FadeIn';
import { SectionPhotoBg } from './SectionPhotoBg';
import bgImage from '../../assets/concerns-bg.jpg';

const concerns = [
  { num: '01', icon: PersonStanding, text: '年々気になる、姿勢の崩れ。' },
  { num: '02', icon: RefreshCw, text: 'いろんな整体にいったけど、改善されない。' },
  { num: '03', icon: Frown, text: '自分で頑張ってみたけど変わらない。' },
  { num: '04', icon: CalendarClock, text: '大切なイベント（結婚式など）までに、間に合うか不安。' },
];

export function Concerns() {
  return (
    <section className="relative py-28 md:py-40 bg-cream-50 overflow-hidden">
      <SectionPhotoBg image={bgImage} alt="LUNOA渋谷院の施術ルーム" opacity={0.5} />
      <div className="max-w-4xl mx-auto px-6 relative">
        <FadeIn>
          <div className="mb-20 text-center">
            <p className="text-[14px] tracking-[0.3em] text-gold-600 uppercase mb-5">Concerns</p>
            <h2 className="font-mincho text-[36px] md:text-[46px] text-ink-900 leading-[1.6]">
              こんなお悩み、
              <br />
              抱えていませんか。
            </h2>
          </div>
        </FadeIn>

        <div className="grid sm:grid-cols-2 gap-6 sm:gap-x-6 sm:gap-y-10">
          {concerns.map((item, i) => {
            const Icon = item.icon;
            return (
              <FadeIn key={item.num} delay={i * 0.1} className={i % 2 === 1 ? 'sm:mt-12' : ''}>
                <div className="group relative bg-cream-50/75 backdrop-blur-md rounded-card border border-gold-500/40 shadow-card px-7 pt-8 pb-8 h-full overflow-hidden transition-transform duration-300 hover:-translate-y-1.5">
                  <span
                    className="absolute -top-3 -right-2 font-mincho text-[92px] leading-none text-gold-500/10 select-none pointer-events-none"
                    aria-hidden="true"
                  >
                    {item.num}
                  </span>

                  <div className="relative flex items-center gap-4 mb-5">
                    <span className="flex-shrink-0 w-11 h-11 rounded-full bg-gradient-to-br from-gold-400/25 to-gold-600/25 border border-gold-500/40 flex items-center justify-center transition-colors duration-300 group-hover:from-gold-500 group-hover:to-gold-600">
                      <Icon className="w-5 h-5 text-gold-600 transition-colors duration-300 group-hover:text-white" />
                    </span>
                    <span className="font-mincho text-[15px] tracking-[0.15em] text-gold-600">{item.num}</span>
                  </div>

                  <p className="relative text-[17px] leading-relaxed text-ink-900">{item.text}</p>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
