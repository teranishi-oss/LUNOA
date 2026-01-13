import React from 'react';
import { Calendar, MessageCircle } from 'lucide-react';

export function FinalCTA() {
  return (
    <section id="booking" className="py-24 md:py-32 bg-[#F3F2EE]">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="mb-8">
            今すぐ体感してください
          </h2>

          <p className="text-[#6A6A6A] mb-12">
            初回限定キャンペーン実施中
          </p>

          {/* 価格強調 */}
          <div className="mb-16">
            <div className="inline-block bg-[#FAFAF8] p-12">
              <div className="text-[#6A6A6A] line-through text-xl mb-3">¥12,000</div>
              <div className="price mb-3">¥1,100</div>
              <div className="text-[#6A6A6A]">初回限定価格</div>
            </div>
          </div>

          {/* CTAボタン */}
          <div className="space-y-8">
            <a
              href="https://duplicated-imdj.bolt.host/"
              target="_blank"
              rel="noopener noreferrer"
              className="cta inline-flex items-center space-x-3 text-lg"
            >
              <Calendar className="w-5 h-5" />
              <span>WEB予約する</span>
            </a>

            <div className="block">
              <a
                href="#line-contact"
                className="cta inline-flex items-center space-x-3"
              >
                <MessageCircle className="w-5 h-5" />
                <span>LINEで問い合わせ</span>
              </a>
            </div>
          </div>

          {/* 追加情報 */}
          <div className="mt-16 grid md:grid-cols-3 gap-8 text-[#6A6A6A]">
            <div className="bg-[#FAFAF8] p-6">
              <div className="mb-2">完全個室</div>
              <div className="text-sm">プライベート空間</div>
            </div>
            <div className="bg-[#FAFAF8] p-6">
              <div className="mb-2">渋谷駅徒歩3分</div>
              <div className="text-sm">アクセス抜群</div>
            </div>
            <div className="bg-[#FAFAF8] p-6">
              <div className="mb-2">無理な勧誘なし</div>
              <div className="text-sm">安心してご利用ください</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}