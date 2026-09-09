import React from 'react';
import { FadeIn } from '../FadeIn';
import { SectionPhotoBg } from './SectionPhotoBg';
import bgImage from '../../assets/hero.jpg';

const stats = [
  { num: '250', unit: '人/月', label: '新規ご来店（うちブライダル100名）' },
  { num: '96.7', unit: '%', label: '施術後の改善実感率' },
  { num: '3', unit: 'ヶ月', label: '平均・自己管理までの期間' },
];

export function TrustSignal() {
  return (
    <section className="relative py-24 md:py-32 bg-gradient-to-b from-cream-50 via-beige to-cream-50 overflow-hidden">
      <SectionPhotoBg image={bgImage} alt="LUNOA渋谷院の施術ルーム" />
      <div className="max-w-5xl mx-auto px-6 relative">
        <FadeIn>
          <div className="text-center mb-16">
            <p className="text-[14px] tracking-[0.3em] text-gold-600 uppercase mb-5">Trust Signal</p>
            <h2 className="font-mincho text-[36px] md:text-[44px] text-ink-900 leading-relaxed">
              選ばれる理由を、数字で。
            </h2>
          </div>
        </FadeIn>

        <div className="grid sm:grid-cols-3 gap-6">
          {stats.map((stat, i) => (
            <FadeIn key={stat.label} delay={i * 0.12}>
              <div className="bg-cream-50 rounded-card border border-gold-500/40 shadow-card px-6 py-10 text-center h-full transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg">
                <div className="font-mincho text-[46px] text-gold-600 mb-3">
                  {stat.num}
                  <span className="text-[24px] ml-1">{stat.unit}</span>
                </div>
                <p className="text-[15px] text-ink-500 leading-relaxed">{stat.label}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.4}>
          <p className="text-center text-[15px] text-ink-500 leading-loose mt-12 max-w-2xl mx-auto">
            母体である卒業型美容整体LUNOAが積み上げてきた7,000件超の施術実績を土台に、渋谷院はこの街のお客様と向き合っています。
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
