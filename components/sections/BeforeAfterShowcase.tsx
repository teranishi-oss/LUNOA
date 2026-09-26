import React from 'react';
import { FadeIn } from '../FadeIn';
import bridalImage1 from '../../assets/kubikata.jpeg';
import bridalImage2 from '../../assets/0586.jpg';
import postureImage1 from '../../assets/0583.jpg';
import postureImage2 from '../../assets/0584.jpg';
import shoulderImage1 from '../../assets/0587.jpg';
import shoulderImage2 from '../../assets/0581.jpg';
import neckImage1 from '../../assets/0579.jpg';
import neckImage2 from '../../assets/0580.jpg';

const categories = [
  { title: 'ブライダル整体', images: [bridalImage1, bridalImage2] },
  { title: '姿勢根本改善', images: [postureImage1, postureImage2] },
  { title: '肩こり根本改善整体', images: [shoulderImage1, shoulderImage2] },
  { title: '首こり、頭痛改善', images: [neckImage1, neckImage2] },
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
            <p className="text-[14px] tracking-[0.3em] text-gold-600 uppercase mb-5">Before &amp; After</p>
            <h2 className="font-mincho text-[26px] sm:text-[36px] md:text-[46px] text-ink-900 leading-[1.6] text-balance">
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
                <p className="text-center font-mincho text-[23px] text-gold-600 mb-6">{cat.title}</p>
                <div className="bg-cream-50 rounded-card border border-gold-500/40 shadow-card p-4 md:p-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    {cat.images.map((img, j) => (
                      <img
                        key={j}
                        src={img}
                        alt={`${cat.title}のビフォーアフター ${j + 1}`}
                        loading="lazy"
                        className="w-full h-auto rounded-2xl"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
