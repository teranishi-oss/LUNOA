import React from 'react';
import {
  Bed,
  Sprout,
  Users,
  DoorOpen,
  Calendar,
  GraduationCap,
  HelpCircle,
  TrendingUp,
  MessageCircleQuestion,
  HeartHandshake,
  ArrowRight,
} from 'lucide-react';
import { FadeIn } from '../FadeIn';

const rows = [
  {
    ordinaryIcon: Bed,
    ordinaryLabel: '施術のみ',
    ordinaryDesc: '毎回同じ施術を繰り返すだけ',
    lunoaIcon: Sprout,
    lunoaLabel: '施術＋教育',
    lunoaDesc: '根本改善×自己ケア習得で「卒業」を目指す',
  },
  {
    ordinaryIcon: Users,
    ordinaryLabel: 'グループ・半個室',
    ordinaryDesc: '周囲の目が気になる施術環境',
    lunoaIcon: DoorOpen,
    lunoaLabel: '全室プライベート個室',
    lunoaDesc: '集中できる、本気で変わりたい人だけの空間',
  },
  {
    ordinaryIcon: Calendar,
    ordinaryLabel: '依存型',
    ordinaryDesc: '来店回数が増えることが目的',
    lunoaIcon: GraduationCap,
    lunoaLabel: '卒業型',
    lunoaDesc: '顧客の「卒業」が成功＝最高の評価',
  },
  {
    ordinaryIcon: HelpCircle,
    ordinaryLabel: '続けにくい',
    ordinaryDesc: '効果がハッキリしないまま続く',
    lunoaIcon: TrendingUp,
    lunoaLabel: '継続しやすい',
    lunoaDesc: '1回目から効果を実感\n明確なゴール設定で進捗がわかる',
  },
  {
    ordinaryIcon: MessageCircleQuestion,
    ordinaryLabel: '一方的な施術',
    ordinaryDesc: 'なぜ改善するのか説明がない\nホームケア方法を教わらない',
    lunoaIcon: HeartHandshake,
    lunoaLabel: 'パートナー型サポート',
    lunoaDesc: 'なぜ改善するのかを理解できる\nホームケアまでマンツーマンでフォロー',
  },
];

function MultiLine({ text }: { text: string }) {
  return (
    <>
      {text.split('\n').map((line, i, arr) => (
        <React.Fragment key={i}>
          {line}
          {i < arr.length - 1 && <br />}
        </React.Fragment>
      ))}
    </>
  );
}

export function ComparisonTable() {
  return (
    <section className="relative py-28 md:py-40 bg-cream-50 overflow-hidden">
      <div className="max-w-5xl mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-20">
            <div className="inline-block rounded-pill border border-gold-500/50 bg-cream-50 shadow-soft px-10 py-3 mb-4">
              <p className="font-mincho text-[20px] md:text-[24px] tracking-[0.1em] text-ink-900">
                WHY CHOOSE LUNOA
              </p>
              <div className="flex items-center justify-center gap-3 mt-1">
                <span className="h-px w-6 bg-gold-500/50" />
                <p className="text-[12px] tracking-[0.15em] text-ink-500">卒業型美容整体</p>
                <span className="h-px w-6 bg-gold-500/50" />
              </div>
            </div>
            <h2 className="font-mincho text-[24px] md:text-[30px] text-ink-900 leading-[1.7] mt-6">
              「卒業」を目指すからこそ、
              <br className="hidden md:block" />
              あなたの本当の変身が実現できる。
            </h2>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-[1fr_auto_1fr] gap-0 md:gap-4 items-start">
          <FadeIn>
            <div className="relative bg-cream-200/60 border border-ink-900/10 rounded-card pt-10 pb-6 px-6 md:px-8">
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 rounded-pill bg-ink-700 text-cream-50 px-8 py-2.5 shadow-soft whitespace-nowrap">
                <p className="font-mincho text-[17px] tracking-[0.05em]">普通の整体</p>
              </div>
              <div className="mt-4">
                {rows.map((row, i) => {
                  const Icon = row.ordinaryIcon;
                  return (
                    <div
                      key={row.ordinaryLabel}
                      className={`flex items-center gap-4 py-5 ${i < rows.length - 1 ? 'border-b border-ink-900/10' : ''}`}
                    >
                      <span className="flex-shrink-0 w-11 h-11 rounded-full bg-ink-900/8 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-ink-500" />
                      </span>
                      <div>
                        <p className="text-[14.5px] font-bold text-ink-700">{row.ordinaryLabel}</p>
                        <p className="text-[12px] text-ink-500 leading-relaxed mt-0.5">
                          <MultiLine text={row.ordinaryDesc} />
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </FadeIn>

          <div className="hidden md:flex flex-col justify-center gap-[3.7rem] py-16 px-1">
            {rows.map((row) => (
              <span
                key={row.lunoaLabel}
                className="w-8 h-8 rounded-full bg-gold-500/15 border border-gold-500/40 flex items-center justify-center flex-shrink-0"
              >
                <ArrowRight className="w-4 h-4 text-gold-600" />
              </span>
            ))}
          </div>

          <FadeIn delay={0.15}>
            <div className="relative bg-cream-50 border border-gold-500/50 shadow-card rounded-card pt-10 pb-6 px-6 md:px-8 mt-10 md:mt-0">
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 rounded-pill bg-gradient-to-br from-gold-500 to-gold-600 text-white px-8 py-2.5 shadow-soft whitespace-nowrap">
                <p className="font-mincho text-[17px] tracking-[0.05em]">卒業型美容整体LUNOA</p>
              </div>
              <div className="mt-4">
                {rows.map((row, i) => {
                  const Icon = row.lunoaIcon;
                  return (
                    <div
                      key={row.lunoaLabel}
                      className={`flex items-center gap-4 py-5 ${i < rows.length - 1 ? 'border-b border-gold-500/20' : ''}`}
                    >
                      <span className="flex-shrink-0 w-11 h-11 rounded-full bg-gold-500/15 border border-gold-500/30 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-gold-600" />
                      </span>
                      <div>
                        <p className="text-[14.5px] font-bold text-ink-900">{row.lunoaLabel}</p>
                        <p className="text-[12px] text-gold-600 leading-relaxed mt-0.5">
                          <MultiLine text={row.lunoaDesc} />
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
