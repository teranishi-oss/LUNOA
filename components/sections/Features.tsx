import React from 'react';
import { FadeIn } from '../FadeIn';
import { shibuyaStore } from '../../data/stores';
import treatmentImage from '../../assets/feature-treatment.jpg';
import counselingImage from '../../assets/feature-counseling.jpg';
import selfcareImage from '../../assets/concerns-bg.jpg';
import bridalImage from '../../assets/IMG_0654.jpg';
import accessImage from '../../assets/IMG_0652.jpg';

const features = [
  {
    num: '01',
    flow: '施術で何ができるのかを理解していただく',
    title: '深層部への直接アプローチ',
    image: treatmentImage,
    desc: '筋膜やマッサージでは届かない筋肉の深層部に直接アプローチ。表面的なほぐしではなく、根本原因に働きかけるから、一度の施術でも確かな変化を実感いただけます。',
  },
  {
    num: '02',
    flow: 'どんな環境で受けるのか、安心していただく',
    title: '完全個室のプライベート空間',
    image: counselingImage,
    desc: '人目を気にせず、じっくりと自分の体と向き合える完全個室。落ち着いた上質な空間で、心身ともにリラックスしながら施術を受けていただけます。',
  },
  {
    num: '03',
    flow: '施術後、自分で改善できることを学んでいただく',
    title: '根本解決のための自宅でできるセルフケア',
    image: selfcareImage,
    desc: '施術で整えた状態を、ご自宅でも保てるように。カウンセリングで正しい姿勢の作り方や、日常でできる簡単なセルフケアを一人ひとりに合わせてお伝えします。「通い続ける」のではなく、自分の力で体を管理できるようになることが、卒業型美容整体LUNOAの目指すゴールです。',
  },
  {
    num: '04',
    flow: '実際に効果が出た人たちの証拠を見ていただく',
    title: '圧倒的なブライダル実績と人気',
    image: bridalImage,
    desc: '毎月100名以上の花嫁様にお選びいただいているブライダル整体。結婚式までの日数から逆算した根本改善で、ドレス姿に自信が持てる身体へ。実際に施術を受けたお客様の確かな変化を、写真でご覧いただけます。',
  },
  {
    num: '05',
    flow: '来院のしやすさで、最後の一歩を後押しする',
    title: '渋谷駅から徒歩7分の好立地',
    image: accessImage,
    desc: '渋谷駅から徒歩7分。お仕事帰りやお出かけの前後にも通いやすい、アクセス良好な立地でお待ちしております。',
  },
];

export function Features() {
  return (
    <section className="relative py-28 md:py-40 bg-cream-50 overflow-hidden">
      <div className="max-w-4xl mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-20">
            <p className="text-[14px] tracking-[0.3em] text-gold-600 uppercase mb-5">Features of LUNOA SHIBUYA</p>
            <h2 className="font-mincho text-[36px] md:text-[46px] text-ink-900 leading-[1.6]">
              LUNOA渋谷院の特徴
            </h2>
          </div>
        </FadeIn>

        <div>
          {features.map((feature, i) => (
            <React.Fragment key={feature.num}>
              <FadeIn delay={i * 0.1}>
                <div
                  className={`flex flex-col ${
                    i % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'
                  } items-center gap-8 md:gap-12`}
                >
                  <div className="w-full md:w-[45%] flex-shrink-0">
                    <div className="rounded-card overflow-hidden border border-gold-500/40 shadow-card">
                      <img
                        src={feature.image}
                        alt={feature.title}
                        className="w-full h-[240px] md:h-[280px] object-cover"
                      />
                    </div>
                  </div>

                  <div className="w-full md:w-[55%]">
                    <p className="font-mincho text-[44px] text-gold-500/40 leading-none mb-3">{feature.num}</p>
                    <h3 className="font-mincho text-[22px] md:text-[24px] text-ink-900 mb-3 leading-snug">
                      {feature.title}
                    </h3>
                    <p className="text-[13px] tracking-[0.03em] text-gold-600 mb-4">{feature.flow}</p>
                    <p className="text-[15.5px] leading-loose text-ink-500">{feature.desc}</p>
                  </div>
                </div>
              </FadeIn>

              {i < features.length - 1 && (
                <div className="flex justify-center py-8 md:py-10" aria-hidden="true">
                  <div className="w-px h-10 bg-gold-500/30" />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        <FadeIn delay={0.2}>
          <div className="text-center mt-20">
            <a
              href={shibuyaStore.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-pill bg-gradient-to-br from-gold-500 to-gold-600 text-white font-bold text-[16px] tracking-[0.03em] px-10 py-4 shadow-soft hover:from-gold-600 hover:to-gold-500 hover:-translate-y-0.5 transition-all duration-300"
            >
              無料カウンセリングを予約する
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
