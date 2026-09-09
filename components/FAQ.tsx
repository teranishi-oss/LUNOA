import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { FadeIn } from './FadeIn';

const faqData = [
  {
    question: '初めてですが、何を持っていけばいいですか？',
    answer: '手ぶらでOKです。着替えもご用意しておりますので、お気軽にお越しください。',
  },
  {
    question: 'クレジットカードは使えますか？',
    answer: 'はい、Visa/Mastercard/JCB/Amex/Diners/Discover対応しております。',
  },
  {
    question: '妊娠中でも受けられますか？',
    answer: '安定期であれば施術可能です。事前にご相談ください。お体の状態を確認させていただきます。',
  },
  {
    question: '予約はどうすればいいですか？',
    answer: 'WEBで24時間受付中です。お好きな時間にご予約いただけます。',
  },
  {
    question: '保険は適用されますか？',
    answer: '美容整体のため保険適用外となります。自費診療となりますのでご了承ください。',
  },
  {
    question: 'どれくらいで効果が出ますか？',
    answer: '初回から変化を実感される方が多いです。個人差はありますが、継続することでより効果を実感いただけます。',
  },
  {
    question: '男性も利用できますか？',
    answer: 'はい、男性の方もご利用いただけます。完全個室なので安心してお越しください。',
  },
  {
    question: '子ども連れでも大丈夫ですか？',
    answer: 'はい、お子さま同伴でも大丈夫です。事前にお知らせいただければ対応いたします。',
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section-light py-32 md:py-48">
      <div className="max-w-4xl mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-20">
            <p className="caption mb-6" style={{ color: '#B7A482' }}>FAQ</p>
            <h2 className="text-[#1A1A1A]">よくあるご質問</h2>
          </div>
        </FadeIn>

        <div className="space-y-px bg-[#D6D0C7]/20">
          {faqData.map((faq, index) => (
            <FadeIn key={index} delay={index * 0.05}>
              <div className="bg-[#F5F3EF]">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-8 text-left flex items-center justify-between transition-colors duration-300 hover:bg-white/50"
                >
                  <span className="pr-4 text-[#1A1A1A] text-sm">
                    Q. {faq.question}
                  </span>
                  {openIndex === index ? (
                    <ChevronUp className="w-4 h-4 text-[#B7A482] flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-[#B7A482] flex-shrink-0" />
                  )}
                </button>

                {openIndex === index && (
                  <div className="px-8 pb-8">
                    <p className="text-[#6B6560] leading-[2.2]">
                      A. {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
