import React from 'react';
import { FadeIn } from '../FadeIn';
import { SectionPhotoBg } from './SectionPhotoBg';
import centerImage from '../../assets/concerns-portrait-vignette.webp';
import bgImage from '../../assets/concerns-bg.jpg';

const concerns = [
  {
    lines: ['肩や首のこりが気になり、', '毎日すっきりしない。'],
    solution: '姿勢や全身のバランスまで確認し、一人ひとりに合わせたケアをご提案します。',
    size: 'md',
    shift: 'md:-mt-2',
  },
  {
    lines: ['デスクワークや立ち仕事で、', '腰が重くてつらい。'],
    solution: '腰まわりの状態に合わせてケア。負担をかけにくい姿勢や動き方もお伝えします。',
    size: 'sm',
    shift: 'md:mt-8',
  },
  {
    lines: ['猫背や巻き肩が気になり、', '写真に写る姿に自信が持てない。'],
    solution: '姿勢のクセに合わせた施術とセルフケアで、美しい立ち姿を目指します。',
    size: 'lg',
    shift: 'md:-mt-4',
  },
  {
    lines: ['体を整えたいけれど、', 'ずっと通い続けるのは不安。'],
    solution: '目指すのは「卒業」。自分でもよい状態を保てる体づくりをサポートします。',
    size: 'lg',
    shift: 'md:mt-6',
  },
];

const blobShapes = [
  '46% 54% 48% 52% / 52% 46% 54% 48%',
  '50% 50% 44% 56% / 48% 52% 48% 52%',
  '44% 56% 50% 50% / 50% 44% 56% 50%',
  '52% 48% 46% 54% / 46% 54% 46% 54%',
];

const sizeStyles: Record<string, { pad: string; text: string; sub: string; dot: string }> = {
  sm: { pad: 'px-5 py-4 sm:px-8 sm:py-9', text: 'text-[14px]', sub: 'text-[11px]', dot: 'w-2 h-2' },
  md: { pad: 'px-5 py-4 sm:px-9 sm:py-10', text: 'text-[15px]', sub: 'text-[11.5px]', dot: 'w-2.5 h-2.5' },
  lg: { pad: 'px-5 py-4 sm:px-10 sm:py-11', text: 'text-[16px]', sub: 'text-[12px]', dot: 'w-3 h-3' },
};

interface ConcernItem {
  lines: string[];
  solution: string;
  size: string;
  shift: string;
}

function CloudBubble({ item, shape, delay }: { item: ConcernItem; shape: string; delay: number }) {
  const s = sizeStyles[item.size];
  return (
    <FadeIn delay={delay} className={item.shift}>
      <div className="flex flex-col items-center">
        <div
          className={`bg-cream-50/95 border border-gold-500/30 shadow-card text-center w-full max-w-[85vw] sm:max-w-[300px] mx-auto transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg ${s.pad}`}
          style={{ borderRadius: shape, overflowWrap: 'break-word', wordBreak: 'break-word' }}
        >
          <p className={`font-cute font-bold ${s.text} leading-[1.7] sm:leading-[1.8] tracking-[0.03em] text-ink-900 mb-2`}>
            {item.lines.map((line, i) => (
              <span key={i} className="block">
                {line}
              </span>
            ))}
          </p>
          <p className={`${s.sub} leading-[1.7] sm:leading-[1.8] text-ink-700`}>{item.solution}</p>
        </div>
        <div className="flex flex-col items-center gap-1 mt-1.5" aria-hidden="true">
          <span className={`${s.dot} rounded-full bg-cream-50/90 border border-gold-500/30`} />
          <span className="w-1.5 h-1.5 rounded-full bg-cream-50/80 border border-gold-500/25" />
        </div>
      </div>
    </FadeIn>
  );
}

export function Concerns() {
  return (
    <section className="relative py-28 md:py-40 bg-cream-50 overflow-hidden">
      <SectionPhotoBg image={bgImage} alt="LUNOA渋谷院の施術ルーム" opacity={0.72} />
      <div className="max-w-4xl mx-auto px-6 relative">
        <FadeIn>
          <div className="mb-16 md:mb-20 text-center">
            <p className="text-[14px] tracking-[0.3em] text-gold-600 uppercase mb-5">Concerns</p>
            <h2 className="font-mincho text-[26px] sm:text-[36px] md:text-[46px] text-ink-900 leading-[1.6] text-balance mb-4">
              こんなお悩み、
              <br />
              抱えていませんか。
            </h2>
            <p className="inline-block text-[15px] font-bold text-gold-600 bg-gold-500/10 border border-gold-500/30 rounded-pill px-6 py-2.5 leading-relaxed">
              もし一つでも当てはまるなら、ぜひ渋谷院にご相談ください。
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-10 sm:gap-y-12 md:gap-x-8 md:gap-y-14 max-w-2xl mx-auto sm:items-start">
          {concerns.map((item, i) => (
            <CloudBubble key={item.lines.join('')} item={item} shape={blobShapes[i]} delay={i * 0.08} />
          ))}
        </div>

        <FadeIn delay={0.4}>
          <div className="flex justify-center mt-4 md:mt-8">
            <img
              src={centerImage}
              alt="お悩みを抱える女性のイメージ"
              loading="lazy"
              className="w-full max-w-md h-auto object-contain"
            />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
