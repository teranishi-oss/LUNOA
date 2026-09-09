import React from 'react';
import { FadeIn } from './FadeIn';
import problemsImg from '../assets/onayami.png';

export function Problems() {
  return (
    <section id="problems" className="section-dark py-32 md:py-48">
      <div className="max-w-5xl mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-20">
            <p className="caption text-accent mb-6">Concerns</p>
            <h2>こんなお悩みありませんか？</h2>
          </div>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div className="max-w-4xl mx-auto mb-16">
            <img
              src={problemsImg}
              alt="美容整体のお悩み"
              className="w-full h-auto opacity-80"
            />
          </div>
        </FadeIn>

        <div className="max-w-4xl mx-auto">
          <FadeIn delay={0.3}>
            <div className="bg-[#111] p-10 md:p-12 text-center mb-16">
              <h3 className="mb-5">深層部へのアプローチで根本改善</h3>
              <p className="text-[#A8A29E] leading-[2.4]">
                筋膜やマッサージでは届かない筋肉の深層部に直接アプローチ。
                <br className="hidden md:inline" />
                短時間で圧倒的な変化を実現します。
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-2 gap-8 md:gap-12">
            {[
              { num: '96.7', unit: '%', label: '改善実感率' },
              { num: '5', unit: '分', label: '最短で変化を体感' },
            ].map((stat, i) => (
              <FadeIn key={stat.label} delay={0.4 + i * 0.1}>
                <div className="text-center">
                  <div className="font-display text-4xl md:text-5xl text-[#B7A482] mb-3">
                    {stat.num}<span className="text-2xl md:text-3xl">{stat.unit}</span>
                  </div>
                  <p className="text-[#78716C] text-xs tracking-[0.15em]">{stat.label}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
