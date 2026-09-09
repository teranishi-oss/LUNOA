import React from 'react';
import { FadeIn } from '../FadeIn';

const ordinary = [
  { label: '施術のみ', desc: '毎回同じ施術を繰り返すだけ' },
  { label: 'グループ・半個室', desc: '周囲の目が気になる施術環境' },
  { label: '依存型', desc: '来店回数が増えることが目的' },
  { label: '続けにくい', desc: '効果がハッキリしないまま続く' },
  { label: '一方的な施術', desc: 'なぜ改善するのか説明がない\nホームケア方法を教わらない' },
];

const lunoa = [
  { label: '施術＋教育', desc: '根本改善×自己ケア習得で「卒業」を目指す' },
  { label: '全室プライベート個室', desc: '集中できる、本気で変わりたい人だけの空間' },
  { label: '卒業型', desc: '顧客の「卒業」が成功＝最高の評価' },
  { label: '継続しやすい', desc: '1回目から効果を実感\n明確なゴール設定で進捗がわかる' },
  { label: 'パートナー型サポート', desc: 'なぜ改善するのかを理解できる\nホームケアまでマンツーマンでフォロー' },
];

function Row({ label, desc, emphasized }: { label: string; desc: string; emphasized: boolean }) {
  return (
    <div className="py-6 text-center border-b border-ink-900/10 last:border-0">
      <span
        className={`inline-block rounded-pill px-6 py-2 text-[14px] font-bold mb-3 ${
          emphasized
            ? 'bg-gold-500/15 border border-gold-500/50 text-gold-600'
            : 'bg-ink-900/5 border border-ink-900/10 text-ink-700'
        }`}
      >
        {label}
      </span>
      <p className={`text-[13.5px] leading-relaxed ${emphasized ? 'text-ink-900' : 'text-ink-500'}`}>
        {desc.split('\n').map((line, j) => (
          <React.Fragment key={j}>
            {line}
            {j < desc.split('\n').length - 1 && <br />}
          </React.Fragment>
        ))}
      </p>
    </div>
  );
}

export function ComparisonTable() {
  return (
    <section className="relative py-28 md:py-40 bg-cream-50 overflow-hidden">
      <div className="max-w-5xl mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-6">
            <div className="flex items-center justify-center gap-4 mb-3">
              <span className="h-px w-10 bg-gold-500/40" />
              <p className="text-[13px] tracking-[0.3em] text-gold-600 uppercase">Why Choose LUNOA?</p>
              <span className="h-px w-10 bg-gold-500/40" />
            </div>
            <p className="text-[13px] tracking-[0.15em] text-ink-500 mb-8">卒業型美容整体</p>
            <h2 className="font-mincho text-[26px] md:text-[34px] text-ink-900 leading-[1.7] max-w-2xl mx-auto">
              『卒業』を目指すからこそ、
              <br className="hidden md:block" />
              あなたの本当の変身が実現できる。
            </h2>
            <div className="w-16 h-px bg-gold-500/40 mx-auto mt-8" />
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 mt-16">
          <FadeIn>
            <div className="bg-ink-900/5 border border-ink-900/10 rounded-card p-8 md:p-10 h-full">
              <h3 className="font-mincho text-[22px] text-ink-700 text-center mb-8">普通の整体</h3>
              <div>
                {ordinary.map((item) => (
                  <Row key={item.label} label={item.label} desc={item.desc} emphasized={false} />
                ))}
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="bg-cream-50 border border-gold-500/40 shadow-card rounded-card p-8 md:p-10 h-full">
              <h3 className="font-mincho text-[22px] text-gold-600 text-center mb-8">卒業型美容整体LUNOA</h3>
              <div>
                {lunoa.map((item) => (
                  <Row key={item.label} label={item.label} desc={item.desc} emphasized />
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
