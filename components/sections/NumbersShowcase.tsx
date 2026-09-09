import React from 'react';
import { FadeIn } from '../FadeIn';
import { SectionPhotoBg } from './SectionPhotoBg';
import bgImage from '../../assets/ba-bg.jpg';

const numbers = [
  { val: '7,000+', cap: '母体・卒業型美容整体LUNOA累計施術数' },
  { val: 'HPB全国3位', cap: 'ホットペッパービューティー全国上位表示' },
  { val: '100人/月', cap: '渋谷院ブライダル新規来店' },
  { val: '96.7%', cap: '渋谷院施術後の改善実感率' },
  { val: '3ヶ月', cap: '渋谷院平均・自己管理までの期間' },
  { val: '徒歩7分', cap: '渋谷駅から渋谷院までのアクセス' },
];

export function NumbersShowcase() {
  return (
    <section className="relative py-28 md:py-40 bg-cream-50 overflow-hidden">
      <SectionPhotoBg image={bgImage} alt="LUNOA渋谷院の施術ルーム" opacity={0.78} />
      <div className="max-w-5xl mx-auto px-6 relative">
        <FadeIn>
          <div className="mb-16">
            <p className="text-[12px] tracking-[0.3em] text-gold-600 uppercase mb-5">Numbers</p>
            <h2 className="font-mincho text-[30px] md:text-[38px] text-ink-900 leading-[1.6]">
              LUNOA渋谷院を、
              <br />
              数字で見る。
            </h2>
          </div>
        </FadeIn>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
          {numbers.map((item, i) => (
            <FadeIn key={item.cap} delay={i * 0.08}>
              <div className="bg-cream-50 rounded-card border border-gold-500/40 shadow-card px-7 py-9 text-center h-full">
                <p className="font-mincho text-[26px] text-gold-600 mb-3">{item.val}</p>
                <p className="text-[12.5px] leading-relaxed text-ink-500">{item.cap}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
