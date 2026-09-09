import React from 'react';
import { FadeIn } from '../FadeIn';
import bridalImage from '../../assets/kubikata.jpeg';
import postureImage from '../../assets/shisei.jpg';

const categories = [
  { title: 'ブライダル整体', image: bridalImage },
  { title: '姿勢根本改善', image: postureImage },
];

export function BeforeAfterShowcase() {
  return (
    <section id="before-after" className="relative py-28 md:py-40 bg-cream-50 overflow-hidden">
      <p
        className="absolute inset-x-0 top-1/2 -translate-y-1/2 text-center font-mincho text-[22vw] leading-none text-ink-900/[0.03] select-none pointer-events-none whitespace-nowrap"
        aria-hidden="true"
      >
        LUNOA
      </p>

      <div className="max-w-4xl mx-auto px-6 relative">
        <FadeIn>
          <div className="text-center mb-20">
            <p className="text-[12px] tracking-[0.3em] text-gold-600 uppercase mb-5">Before &amp; After</p>
            <h2 className="font-mincho text-[30px] md:text-[38px] text-ink-900 leading-[1.6]">
              施術による
              <br />
              確かな変化
            </h2>
          </div>
        </FadeIn>

        <div className="space-y-16">
          {categories.map((cat, i) => (
            <FadeIn key={cat.title} delay={i * 0.15}>
              <div>
                <p className="text-center font-mincho text-[19px] text-gold-600 mb-6">{cat.title}</p>
                <div className="bg-cream-50 rounded-card border border-gold-500/40 shadow-card p-4 md:p-6 max-w-lg mx-auto">
                  <img
                    src={cat.image}
                    alt={`${cat.title}のビフォーアフター`}
                    className="w-full h-auto rounded-2xl"
                  />
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
