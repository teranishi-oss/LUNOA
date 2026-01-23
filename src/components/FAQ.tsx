import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqData = [
  {
    question: '初めてですが、何を持っていけばいいですか？',
    answer: '手ぶらでOKです。着替えもご用意しておりますので、お気軽にお越しください。'
  },
  {
    question: 'クレジットカードは使えますか？',
    answer: 'はい、Visa/Mastercard/JCB/Amex/Diners/Discover対応しております。'
  },
  {
    question: '妊娠中でも受けられますか？',
    answer: '安定期であれば施術可能です。事前にご相談ください。お体の状態を確認させていただきます。'
  },
  {
    question: '予約はどうすればいいですか？',
    answer: 'WEBで24時間受付中です。お好きな時間にご予約いただけます。'
  },
  {
    question: '保険は適用されますか？',
    answer: '美容整体のため保険適用外となります。自費診療となりますのでご了承ください。'
  },
  {
    question: 'どれくらいで効果が出ますか？',
    answer: '初回から変化を実感される方が多いです。個人差はありますが、継続することでより効果を実感いただけます。'
  },
  {
    question: '男性も利用できますか？',
    answer: 'はい、男性の方もご利用いただけます。完全個室なので安心してお越しください。'
  },
  {
    question: '子ども連れでも大丈夫ですか？',
    answer: 'はい、お子さま同伴でも大丈夫です。事前にお知らせいただければ対応いたします。'
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 md:py-32 bg-[#F3F2EE]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="mb-6">
            よくあるご質問
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className="bg-[#FAFAF8] border border-[#B9A98A]/20 transition-opacity duration-200 hover:opacity-90"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-8 text-left flex items-center justify-between transition-opacity duration-200"
                >
                  <span className="pr-4 text-[#2E2E2E]">
                    Q. {faq.question}
                  </span>
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-[#8F846B] flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-[#8F846B] flex-shrink-0" />
                  )}
                </button>

                {openIndex === index && (
                  <div className="px-8 pb-8">
                    <div className="bg-[#F3F2EE] p-6">
                      <p className="text-[#555555]">
                        A. {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}