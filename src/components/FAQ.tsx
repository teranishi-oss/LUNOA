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
    answer: 'WEBまたはLINEで24時間受付中です。お好きな時間にご予約いただけます。'
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
    <section id="faq" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#2C2C2C] mb-6">
            よくあるご質問
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <div 
                key={index}
                className="bg-white border border-[#E8D5E8] rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-[#FAF9F6] transition-colors duration-200 rounded-2xl"
                >
                  <span className="font-bold text-[#2C2C2C] pr-4">
                    Q. {faq.question}
                  </span>
                  {openIndex === index ? (
                    <ChevronUp className="w-6 h-6 text-[#D4AF37] flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-[#D4AF37] flex-shrink-0" />
                  )}
                </button>
                
                {openIndex === index && (
                  <div className="px-6 pb-6">
                    <div className="bg-[#FAF9F6] p-4 rounded-xl">
                      <p className="text-[#2C2C2C]/70 leading-relaxed">
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