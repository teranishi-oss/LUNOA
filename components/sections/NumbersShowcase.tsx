import React from 'react';
import { FadeIn } from '../FadeIn';
import { CountUp } from '../CountUp';
import { SectionPhotoBg } from './SectionPhotoBg';
import bgImage from '../../assets/ba-bg.jpg';

const numbers = [
  { prefix: '', value: 7000, decimals: 0, suffix: '+', cap: '母体・卒業型美容整体LUNOA累計施術数' },
  { prefix: 'HPB全国', value: 3, decimals: 0, suffix: '位', cap: 'ホットペッパービューティー全国上位表示' },
  { prefix: '', value: 100, decimals: 0, suffix: '人/月', cap: '渋谷院ブライダル新規来店' },
  { prefix: '', value: 96.7, decimals: 1, suffix: '%', cap: '渋谷院施術後の改善実感率' },
  { prefix: '', value: 3, decimals: 0, suffix: 'ヶ月', cap: '渋谷院平均・自己管理までの期間' },
  { prefix: '徒歩', value: 7, decimals: 0, suffix: '分', cap: '渋谷駅から渋谷院までのアクセス' },
];

export function NumbersShowcase() {
  return (
    <section className="relative py-28 md:py-40 bg-cream-50 overflow-hidden">
      <SectionPhotoBg image={bgImage} alt="LUNOA渋谷院の施術ルーム" opacity={0.78} />
      <div className="max-w-5xl mx-auto px-6 relative">
        <FadeIn>
          <div className="mb-16">
            <p className="text-[14px] tracking-[0.3em] text-gold-600 uppercase mb-5">Numbers</p>
            <h2 className="font-mincho text-[36px] md:text-[46px] text-ink-900 leading-[1.6]">
              LUNOA渋谷院を、
              <br />
              数字で見る。
            </h2>
          </div>
        </FadeIn>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
          {numbers.map((item, i) => (
            <FadeIn key={item.cap} delay={i * 0.08}>
              <div className="bg-cream-50 rounded-card border border-gold-500/40 shadow-card px-7 py-9 text-center h-full transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg">
                <p className="flex items-baseline justify-center gap-1 mb-3 text-gold-600">
                  {item.prefix && <span className="text-[15px]">{item.prefix}</span>}
                  <span className="font-mincho text-[38px]">
                    <CountUp value={item.value} decimals={item.decimals} delay={i * 0.08} />
                  </span>
                  <span className="text-[16px]">{item.suffix}</span>
                </p>
                <p className="text-[14.5px] leading-relaxed text-ink-700">{item.cap}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
