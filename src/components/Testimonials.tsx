import React, { useState } from 'react';
import { Star, ChevronDown, ChevronUp } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'xxyxxさん',
    customer: '女性/30代前半',
    date: '2025/10/16',
    ratings: {
      overall: 5,
      atmosphere: 5,
      service: 5,
      technique: 5,
      price: 5
    },
    comment: `久々に"本物"に出会えました◎
そんな一言がぴったりの整体です。

慢性的に全身が張っている状態で伺い、
本当に楽しみにしていました。

これまでいくつものサロンに通い、
月の半分ほど通っていた時期もありましたが、
こちらは入ってすぐに身体の状態を一瞬で見抜き、
迷いなく施術に入ってくださったのが印象的でした。

寝落ちするほど心地よい施術…というより、
正直最初は普通に痛い（笑）けれど、
半身を終えるころにはみるみる身体が変わっていくのが分かり、指先まで血が巡るような感覚に。

施術翌日の今、あれほどつらかった首や背中が軽く、
痛みもなくなっていて驚きました。
どこかをかばうような違和感もなく、
全身が整っている感覚です。

そして何より店内は驚くほど綺麗で、
タオルの香りまで心地いい。

技術も空間も気配りも完璧で
スタッフさんのマニアックな知識、接客面含め
通いたくなる理由が詰まっている！
★★★★★5つ星サロンです。`
  },
  {
    id: 2,
    name: 'みゆさん',
    customer: '女性/20代前半',
    date: '2025/12/19',
    ratings: {
      overall: 5,
      atmosphere: 5,
      service: 5,
      technique: 5,
      price: 5
    },
    comment: `毎回一回の施術で効果を感じれるくらい丁寧に施術して頂けて体がすごく楽になります。
丁寧なカウンセリングと接客で通いたくなるってこういう事なんだなと実感しています。
本日もありがとうございました！！！`
  },
  {
    id: 3,
    name: 'ゆみさん',
    customer: '女性/30代後半/その他',
    date: '2025/12/16',
    ratings: {
      overall: 5,
      atmosphere: 4,
      service: 5,
      technique: 5,
      price: 5
    },
    comment: `先日は施術していただきありがとうございました。
肩周りを主に診ていただきましたが、的確かつ迅速な判断ですぐに施術に入って、時間いっぱい凝りをほぐしていただきました。他にも不調を感じる部分はないですか？ときいていただき、少し腰も施術してくださり、本当に身体がラクになりました。可動域が広がり、腕の上げ下げがしやすくなりました☆
また施術中、お邪魔してしまうかなと思いつつも、、身体の話、世間話にもたくさん付き合ってくださいました。お話が楽しくて時間はあっという間でした。
身体もラクにしていただき、気分も明るくしていただきありがとうございました。
教えていただいたストレッチも自宅で続けていきます☆
またよろしくお願い致します。`
  }
];

export function Testimonials() {
  const [expandedIds, setExpandedIds] = useState<number[]>([]);

  const toggleExpand = (id: number) => {
    setExpandedIds(prev =>
      prev.includes(id)
        ? prev.filter(expandedId => expandedId !== id)
        : [...prev, id]
    );
  };

  const getPreviewText = (text: string) => {
    const lines = text.split('\n').filter(line => line.trim());
    return lines.slice(0, 2).join('\n');
  };

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-gradient-to-br from-[#E8D5E8] to-[#FFE4E1]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#2C2C2C] mb-6">
            お客様の声
          </h2>
          <p className="text-[#2C2C2C]/70 text-sm">Hot Pepper Beauty 参照</p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {testimonials.map((testimonial) => {
            const isExpanded = expandedIds.includes(testimonial.id);

            return (
              <div
                key={testimonial.id}
                className="bg-white rounded-2xl shadow-lg p-6 md:p-8 transition-all duration-300 hover:shadow-xl"
              >
                {/* ヘッダー */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div className="flex items-center mb-3 md:mb-0">
                    <div className="w-12 h-12 bg-[#E8D5E8] rounded-full flex items-center justify-center mr-3">
                      <span className="text-[#2C2C2C] font-bold text-lg">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <div className="font-bold text-[#2C2C2C]">{testimonial.name}</div>
                      <div className="text-[#2C2C2C]/60 text-sm">{testimonial.customer}</div>
                    </div>
                  </div>
                  <div className="text-[#2C2C2C]/60 text-sm">
                    [投稿日] {testimonial.date}
                  </div>
                </div>

                {/* 評価 */}
                <div className="flex flex-wrap gap-3 mb-4">
                  <div className="flex items-center">
                    <span className="text-sm text-[#2C2C2C]/70 mr-2">総合</span>
                    <span className="font-bold text-[#2C2C2C]">{testimonial.ratings.overall}</span>
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ml-0.5 ${
                          i < testimonial.ratings.overall
                            ? 'fill-[#D4AF37] text-[#D4AF37]'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <div className="flex flex-wrap items-center text-sm md:text-base text-[#2C2C2C]/80 gap-2">
                    <span>雰囲気{testimonial.ratings.atmosphere}</span>
                    <span className="hidden md:inline">|</span>
                    <span>接客{testimonial.ratings.service}</span>
                    <span className="hidden md:inline">|</span>
                    <span>技術{testimonial.ratings.technique}</span>
                    <span className="hidden md:inline">|</span>
                    <span>料金{testimonial.ratings.price}</span>
                  </div>
                </div>

                {/* コメント */}
                <div className="text-[#2C2C2C]/80 leading-relaxed whitespace-pre-line">
                  {isExpanded ? testimonial.comment : getPreviewText(testimonial.comment)}
                  {!isExpanded && testimonial.comment.split('\n').filter(line => line.trim()).length > 2 && (
                    <span className="text-[#2C2C2C]/60">...</span>
                  )}
                </div>

                {/* 続きを読むボタン */}
                {testimonial.comment.split('\n').filter(line => line.trim()).length > 2 && (
                  <button
                    onClick={() => toggleExpand(testimonial.id)}
                    className="mt-4 flex items-center text-[#D4AF37] hover:text-[#B8941F] font-semibold transition-colors duration-200"
                  >
                    <span>{isExpanded ? '閉じる' : '続きを読む'}</span>
                    {isExpanded ? (
                      <ChevronUp className="w-5 h-5 ml-1" />
                    ) : (
                      <ChevronDown className="w-5 h-5 ml-1" />
                    )}
                  </button>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}