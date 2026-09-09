import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { FadeIn } from './FadeIn';

const menuItems = [
  { name: '全身美容整体', en: 'Full Body', desc: '姿勢矯正・骨盤矯正で根本から改善', slug: 'full-body' },
  { name: '首肩コリ改善', en: 'Neck & Shoulder', desc: '深層筋から根本改善', slug: 'neck-shoulder' },
  { name: 'ブライダル整体', en: 'Bridal', desc: '史上最高の自分で迎える特別な日', slug: 'bridal' },
  { name: '小顔矯正', en: 'Face Sculpting', desc: 'フェイスラインを整え根本改善', slug: 'face-sculpting' },
];

export function Menu() {
  return (
    <section id="menu" className="section-dark py-32 md:py-48">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-24">
            <p className="caption text-accent mb-6">Treatments</p>
            <h2>施術メニュー</h2>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-px bg-white/5">
          {menuItems.map((item, i) => (
            <FadeIn key={item.en} delay={i * 0.1}>
              <Link
                to={`/treatment/${item.slug}`}
                className="block bg-[#0A0A0A] p-12 md:p-16 group hover:bg-[#111] transition-colors duration-500 no-underline"
              >
                <p className="caption text-accent mb-4">{item.en}</p>
                <h3 className="mb-4">{item.name}</h3>
                <p className="text-[#78716C] mb-8">{item.desc}</p>
                <div className="flex items-center gap-3 text-[#B7A482] opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="text-xs tracking-[0.2em]">VIEW MORE</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
