import React, { useState } from 'react';
import { Star, ChevronDown, ChevronUp } from 'lucide-react';
import { FadeIn } from './FadeIn';
import { StoreSlug } from '../data/stores';

interface Testimonial {
  id: number;
  name: string;
  customer: string;
  date: string;
  storeSlug: StoreSlug;
  ratings: {
    overall: number;
    atmosphere: number;
    service: number;
    technique: number;
    price: number;
  };
  comment: string;
}

const allTestimonials: Testimonial[] = [
  // ===== 渋谷院 =====
  {
    id: 101,
    name: 'saoさん',
    customer: '女性/30代後半/会社員',
    date: '2026/02/01',
    storeSlug: 'shibuya',
    ratings: { overall: 5, atmosphere: 5, service: 5, technique: 5, price: 5 },
    comment: `キャンペーン価格に惹かれたのと、行きやすい場所だったので申し込みました。が、本当に良かったです。巻き肩気味だと診断されたので、肩中心にやってもらったのですが、明らかに施術してもらった肩が軽くなり、翌日以降も肩の位置が違うことを実感しました。`,
  },
  {
    id: 102,
    name: 'あーちゃんさん',
    customer: '女性/30代前半',
    date: '2026/01/30',
    storeSlug: 'shibuya',
    ratings: { overall: 4, atmosphere: 4, service: 5, technique: 5, price: 4 },
    comment: `2ヶ月後の結婚式までに巻き肩や姿勢改善をしたくて、立地と初回価格に惹かれてコチラに。どうして巻き肩になってしまうのかなど、日常生活での過ごし方の原因や改善方法までしっかりと教えてくれました。施術後は、嘘みたいに綺麗になっていて感動しました。`,
  },
  {
    id: 103,
    name: 'おむさん',
    customer: '女性/20代後半/会社員',
    date: '2026/01/29',
    storeSlug: 'shibuya',
    ratings: { overall: 5, atmosphere: 5, service: 4, technique: 5, price: 5 },
    comment: `ブライダルの姿勢矯正目的で通っています。当日まで1ヶ月ちょっとというほぼ駆け込みでのお願いでしたが、半月で3回通った現在、すごく効果を感じています。毎回しっかりと現在の体の状態を見つつ丁寧に施術いただけるので、自分の無意識のクセや直ってきたところを通うたびに発見できます。`,
  },
  {
    id: 104,
    name: 'じーさん',
    customer: '女性/20代後半/会社員',
    date: '2026/03/12',
    storeSlug: 'shibuya',
    ratings: { overall: 5, atmosphere: 5, service: 5, technique: 5, price: 5 },
    comment: `5月の結婚式に向けて肩の凝りや肩甲骨を綺麗に見せたく、お願いしました。初めての整体でしたが、丁寧に教えていただき、施術も効果がわかりやすく満足しております。`,
  },
  {
    id: 105,
    name: 'なななさん',
    customer: '女性/20代前半/学生',
    date: '2026/02/08',
    storeSlug: 'shibuya',
    ratings: { overall: 5, atmosphere: 5, service: 5, technique: 5, price: 5 },
    comment: `問診から丁寧にしてくださった。身体の状態の分析が結構正確でしたし、セルフケアについても教えてくださったので家でもやっていきたいです。施術が丁寧でかなり身体が動かしやすくなっていました。`,
  },
  // ===== 梅田院 =====
  {
    id: 201,
    name: 'りなさん',
    customer: '女性/30代前半/会社員',
    date: '2026/03/18',
    storeSlug: 'umeda',
    ratings: { overall: 5, atmosphere: 5, service: 5, technique: 5, price: 4 },
    comment: `結婚式で肩を出すドレスを着ることになり、駆け込みました。施術中には丁寧な声かけがあるので安心して受けることが出来ています。また宅トレの重要性も説明いただき、毎回悩みや身体の状態に合わせて適切な宅トレメニューを出していただける上に、その宅トレメニューも簡単に出来て、身体にはしっかり効くものです。式まであと少しですが、最後までよろしくお願いします！`,
  },
  {
    id: 202,
    name: 'りんさん',
    customer: '女性/20代前半',
    date: '2026/03/09',
    storeSlug: 'umeda',
    ratings: { overall: 5, atmosphere: 5, service: 5, technique: 5, price: 5 },
    comment: `カウンセリングからとても丁寧で、お店の雰囲気も清潔感がある空間で終始リラックスできました。担当していただいた方が物腰柔らかく、施術中も楽しくお話してくださりました。無理な勧誘もなく、自分にあったプランを提案してくださり、簡単なストレッチや、普段から意識する事を教えてくださったりと、とても親身になって対応してくださりました。`,
  },
  {
    id: 203,
    name: 'みゆさん',
    customer: '女性/20代後半/会社員',
    date: '2026/03/16',
    storeSlug: 'umeda',
    ratings: { overall: 4, atmosphere: 4, service: 4, technique: 4, price: 4 },
    comment: `結婚式に向けて、肩甲骨・デコルテ・顔をメインに美容整体でお世話になりました。回数を重ねるごとに体の変化を実感できて、とても満足しています。お世話になる前は体の痛みやしんどさがありましたが、施術を受けるうちにそれがなくなっていき、体がとても楽になりました。また、家でできるストレッチやトレーニングも丁寧に教えていただけたので、自分でもケアしながら変化を実感できたのが嬉しかったです。結婚式に向けて体を整えたい方にとてもおすすめです！`,
  },
  {
    id: 204,
    name: 'ショコラさん',
    customer: '女性/40代/会社員',
    date: '2026/02/26',
    storeSlug: 'umeda',
    ratings: { overall: 5, atmosphere: 4, service: 5, technique: 5, price: 4 },
    comment: `まき肩や猫背が癖になっていて、いつも背中が張った感じがしていましたが、施術して頂いたあとは寝てもなかなか取れなかった疲れもスッキリします。履いて行っていたスカートのウエストも、帰りには緩く感じれました。骨格の歪みからしっかり治して行くのが大事なんだなぁと本当に思います。`,
  },
  {
    id: 205,
    name: 'ねこさん',
    customer: '女性/20代前半/自営業',
    date: '2026/02/12',
    storeSlug: 'umeda',
    ratings: { overall: 5, atmosphere: 5, service: 5, technique: 5, price: 5 },
    comment: `丁寧なカウンセリングで体の状態をしっかり見てから施術してくれました。終わった後は肩や腰がとても軽くなり、姿勢も良くなった気がします。説明も分かりやすく、安心して通える整体院です。`,
  },
];

interface TestimonialsProps {
  storeSlug?: StoreSlug;
}

export function Testimonials({ storeSlug }: TestimonialsProps) {
  const [expandedIds, setExpandedIds] = useState<number[]>([]);

  const testimonials = storeSlug
    ? allTestimonials.filter((t) => t.storeSlug === storeSlug)
    : allTestimonials;

  const toggleExpand = (id: number) => {
    setExpandedIds((prev) =>
      prev.includes(id)
        ? prev.filter((expandedId) => expandedId !== id)
        : [...prev, id]
    );
  };

  const getPreviewText = (text: string) => {
    const lines = text.split('\n').filter((line) => line.trim());
    return lines.slice(0, 2).join('\n');
  };

  if (testimonials.length === 0) return null;

  return (
    <section id="testimonials" className="section-dark py-32 md:py-48">
      <div className="max-w-4xl mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-20">
            <p className="caption text-accent mb-6">Voice</p>
            <h2 className="mb-4">お客様の声</h2>
            <p className="text-[#78716C] text-xs tracking-[0.15em]">Hot Pepper Beauty 参照</p>
          </div>
        </FadeIn>

        <div className="space-y-0 divide-y divide-white/5">
          {testimonials.map((testimonial, idx) => {
            const isExpanded = expandedIds.includes(testimonial.id);

            return (
              <FadeIn key={testimonial.id} delay={idx * 0.1}>
                <div className="py-10 md:py-12">
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                    <div className="flex items-center mb-3 md:mb-0">
                      <div className="w-10 h-10 bg-[#B7A482]/10 flex items-center justify-center mr-4">
                        <span className="text-[#B7A482] text-sm font-light">
                          {testimonial.name.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <div className="text-[#E8E4DF] text-sm">{testimonial.name}</div>
                        <div className="text-[#78716C] text-xs">{testimonial.customer}</div>
                      </div>
                    </div>
                    <div className="text-[#78716C] text-xs tracking-[0.1em]">
                      {testimonial.date}
                    </div>
                  </div>

                  {/* Ratings */}
                  <div className="flex flex-wrap gap-3 mb-6">
                    <div className="flex items-center">
                      <span className="text-xs text-[#78716C] mr-2">総合</span>
                      <span className="text-[#E8E4DF] text-sm mr-1">{testimonial.ratings.overall}</span>
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-3.5 h-3.5 ml-0.5 ${
                            i < testimonial.ratings.overall
                              ? 'fill-[#B7A482] text-[#B7A482]'
                              : 'text-white/10'
                          }`}
                        />
                      ))}
                    </div>
                    <div className="flex flex-wrap items-center text-xs text-[#78716C] gap-2">
                      <span>雰囲気{testimonial.ratings.atmosphere}</span>
                      <span className="hidden md:inline text-white/10">|</span>
                      <span>接客{testimonial.ratings.service}</span>
                      <span className="hidden md:inline text-white/10">|</span>
                      <span>技術{testimonial.ratings.technique}</span>
                      <span className="hidden md:inline text-white/10">|</span>
                      <span>料金{testimonial.ratings.price}</span>
                    </div>
                  </div>

                  {/* Comment */}
                  <div className="text-[#A8A29E] leading-[2.2] whitespace-pre-line text-sm">
                    {isExpanded ? testimonial.comment : getPreviewText(testimonial.comment)}
                    {!isExpanded &&
                      testimonial.comment.split('\n').filter((line) => line.trim()).length > 2 && (
                        <span className="text-[#78716C]">...</span>
                      )}
                  </div>

                  {/* Expand button */}
                  {testimonial.comment.split('\n').filter((line) => line.trim()).length > 2 && (
                    <button
                      onClick={() => toggleExpand(testimonial.id)}
                      className="mt-4 flex items-center text-[#B7A482] hover:text-[#B7A482]/70 text-xs tracking-[0.15em] transition-colors duration-300"
                    >
                      <span>{isExpanded ? '閉じる' : '続きを読む'}</span>
                      {isExpanded ? (
                        <ChevronUp className="w-3.5 h-3.5 ml-1" />
                      ) : (
                        <ChevronDown className="w-3.5 h-3.5 ml-1" />
                      )}
                    </button>
                  )}
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
