import React from 'react';
import { shibuyaStore } from '../../data/stores';
import { FadeIn } from '../FadeIn';
import { SectionPhotoBg } from './SectionPhotoBg';
import bgImage from '../../assets/cta-bg.jpg';
import mapImage from '../../assets/IMG_0652.jpg';

const rows: [string, string][] = [
  ['店舗名', `LUNOA SHIBUYA（卒業型美容整体LUNOA 渋谷院）`],
  ['住所', `${shibuyaStore.postalCode} ${shibuyaStore.address.join(' ')}`],
  ['アクセス', shibuyaStore.access],
  ['電話', shibuyaStore.phone ?? '-'],
  ['営業時間', shibuyaStore.hours],
  ['定休日', shibuyaStore.closedDay],
];

export function ReservationCta() {
  return (
    <section className="relative py-28 md:py-40 bg-beige overflow-hidden">
      <SectionPhotoBg image={bgImage} alt="LUNOA渋谷院のロゴプレート" opacity={0.72} />
      <div className="max-w-2xl mx-auto px-6 text-center relative">
        <FadeIn>
          <p className="text-[14px] tracking-[0.3em] text-gold-600 uppercase mb-5">Reservation</p>
          <h2 className="font-mincho text-[32px] md:text-[40px] text-ink-900 leading-[1.6] mb-6">
            まずは、<span className="text-gold-600 text-[44px] md:text-[56px]">渋谷院</span>へ。
          </h2>
          <p className="text-[16px] text-ink-500 leading-relaxed mb-10">
            無料カウンセリングで、あなたの体の状態と、卒業までの道のりをお伝えします。
          </p>
        </FadeIn>

        <FadeIn delay={0.15}>
          <a
            href={shibuyaStore.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-pill bg-gradient-to-br from-gold-500 to-gold-600 text-white font-bold text-[17px] tracking-[0.03em] px-10 py-4.5 shadow-soft hover:from-gold-600 hover:to-gold-500 hover:-translate-y-0.5 transition-all duration-300 mb-14"
          >
            無料カウンセリングを予約する
          </a>
        </FadeIn>

        <FadeIn delay={0.25}>
          <div className="bg-cream-50 rounded-card border border-gold-500/40 shadow-card text-left divide-y divide-gold-500/15 overflow-hidden">
            {rows.map(([label, value]) => (
              <div key={label} className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-6 px-7 py-5">
                <dt className="sm:w-24 flex-shrink-0 text-[14px] tracking-[0.1em] text-gold-600">{label}</dt>
                <dd className="text-[16px] text-ink-900">{value}</dd>
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.35}>
          <div className="mt-6 bg-cream-50 rounded-card border border-gold-500/40 shadow-card overflow-hidden">
            <img
              src={mapImage}
              alt="渋谷駅からLUNOA渋谷院までのアクセスマップ"
              className="w-full h-auto"
            />
            <p className="text-[13px] text-ink-500 text-center py-4">渋谷駅から徒歩約5〜7分</p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
