import React from 'react';
import { Check } from 'lucide-react';
import { FadeIn } from '../FadeIn';

const rows = [
  {
    ordinaryLabel: '施術のみ',
    ordinaryDesc: '毎回同じ施術を繰り返すだけ',
    lunoaLabel: '施術＋教育',
    lunoaDesc: '根本改善 × 自己ケア習得で「卒業」を目指す',
  },
  {
    ordinaryLabel: 'グループ・半個室',
    ordinaryDesc: '周囲の目が気になる施術環境',
    lunoaLabel: '全室プライベート個室',
    lunoaDesc: '集中できる、本気で変わりたい人だけの空間',
  },
  {
    ordinaryLabel: '依存型',
    ordinaryDesc: '来店回数が増えることが目的',
    lunoaLabel: '卒業型',
    lunoaDesc: '顧客の「卒業」が成功＝最高の評価',
  },
  {
    ordinaryLabel: '続けにくい',
    ordinaryDesc: '効果がハッキリしないまま続く',
    lunoaLabel: '継続しやすい',
    lunoaDesc: '1回目から効果を実感\n明確なゴール設定で進捗がわかる',
  },
  {
    ordinaryLabel: '一方的な施術',
    ordinaryDesc: 'なぜ改善するのか説明がない\nホームケア方法を教わらない',
    lunoaLabel: 'パートナー型サポート',
    lunoaDesc: 'なぜ改善するのかを理解できる\nホームケアまでマンツーマンでフォロー',
  },
];

function MultiLine({ text }: { text: string }) {
  const lines = text.split('\n');
  return (
    <>
      {lines.map((line, i) => (
        <React.Fragment key={i}>
          {line}
          {i < lines.length - 1 && <br />}
        </React.Fragment>
      ))}
    </>
  );
}

export function ComparisonTable() {
  return (
    <section className="relative py-28 md:py-40 bg-cream-50 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-14 md:mb-16">
            <p className="text-[13px] tracking-[0.25em] text-gold-600 mb-3">WHY CHOOSE LUNOA？</p>
            <p className="text-[13px] tracking-[0.1em] text-ink-500 mb-6">卒業型美容整体</p>
            <h2 className="font-mincho text-[28px] md:text-[36px] text-ink-900 leading-[1.6]">
              「卒業」を目指すからこそ、
              <br />
              あなたの本当の変身が実現できる。
            </h2>
          </div>
        </FadeIn>

        {/* Desktop: synchronized two-column grid, one shared row structure.
            Every cell (including the background card) is given an explicit
            gridRow/gridColumn — mixing an auto-flowed item with an explicitly
            full-column-spanning background causes the auto-placement
            algorithm to skip that column, so nothing here relies on auto-flow. */}
        <FadeIn delay={0.1}>
          <div
            className="hidden md:grid relative grid-cols-[0.72fr_1fr] gap-x-10"
            style={{ gridTemplateRows: `repeat(${rows.length + 1}, auto)` }}
          >
            <div
              className="bg-cream-50 border border-gold-500/35 shadow-soft rounded-card"
              style={{ gridColumn: 2, gridRow: `1 / ${rows.length + 2}` }}
            />

            <div className="relative flex items-end pb-6" style={{ gridColumn: 1, gridRow: 1 }}>
              <p className="text-[16px] text-ink-500 font-bold">普通の整体</p>
            </div>
            <div className="relative px-9 pt-8 pb-6" style={{ gridColumn: 2, gridRow: 1 }}>
              <p className="text-[13px] tracking-[0.1em] text-ink-500 mb-1">卒業型美容整体</p>
              <p className="font-mincho text-[34px] md:text-[40px] text-gold-700 leading-none">LUNOA</p>
            </div>

            {rows.map((row, i) => (
              <React.Fragment key={row.ordinaryLabel}>
                <div
                  className={`relative py-6 ${i < rows.length - 1 ? 'border-b border-ink-900/10' : ''}`}
                  style={{ gridColumn: 1, gridRow: i + 2 }}
                >
                  <p className="text-[16px] text-ink-700 font-bold mb-1.5">{row.ordinaryLabel}</p>
                  <p className="text-[15px] leading-relaxed text-ink-500">
                    <MultiLine text={row.ordinaryDesc} />
                  </p>
                </div>
                <div
                  className={`relative px-9 py-6 ${i < rows.length - 1 ? 'border-b border-gold-500/20' : ''}`}
                  style={{ gridColumn: 2, gridRow: i + 2 }}
                >
                  <p className="flex items-center gap-2 text-[21px] text-ink-900 font-bold mb-1.5">
                    <Check className="w-4 h-4 text-gold-600 flex-shrink-0" strokeWidth={2.5} />
                    {row.lunoaLabel}
                  </p>
                  <p className="text-[15px] leading-relaxed text-ink-700">
                    <MultiLine text={row.lunoaDesc} />
                  </p>
                </div>
              </React.Fragment>
            ))}
          </div>
        </FadeIn>

        {/* Mobile: paired stacking per item (ordinary -> LUNOA -> next item) */}
        <div className="md:hidden space-y-5">
          {rows.map((row, i) => (
            <FadeIn key={row.ordinaryLabel} delay={i * 0.05}>
              <div>
                <div className="py-4 border-b border-ink-900/10">
                  <p className="text-[12px] tracking-[0.1em] text-ink-500 mb-1.5">普通の整体</p>
                  <p className="text-[16px] text-ink-700 font-bold mb-1">{row.ordinaryLabel}</p>
                  <p className="text-[14.5px] leading-relaxed text-ink-500">
                    <MultiLine text={row.ordinaryDesc} />
                  </p>
                </div>
                <div className="bg-cream-50 border border-gold-500/35 shadow-soft rounded-card px-6 py-5 mt-3">
                  <p className="text-[12px] tracking-[0.1em] text-gold-700 mb-1.5">卒業型美容整体LUNOA</p>
                  <p className="flex items-center gap-2 text-[18px] text-ink-900 font-bold mb-1.5">
                    <Check className="w-4 h-4 text-gold-600 flex-shrink-0" strokeWidth={2.5} />
                    {row.lunoaLabel}
                  </p>
                  <p className="text-[14.5px] leading-relaxed text-ink-700">
                    <MultiLine text={row.lunoaDesc} />
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
