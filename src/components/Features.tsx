import React from 'react';
import { Sparkles, User, Crown } from 'lucide-react';

const reasons = [
  {
    icon: <Sparkles className="w-10 h-10" />,
    title: '一度の施術で感じる、確かな変化',
    description: '骨格・筋膜・筋肉の状態を見極め、顔や身体の歪みに的確にアプローチ。小顔、美しい姿勢、巡りの改善など、多角的な変化を実感していただけます。'
  },
  {
    icon: <User className="w-10 h-10" />,
    title: 'お一人おひとりに寄り添うオーダーメイド施術',
    description: 'お悩みや体質、生活習慣まで丁寧に汲み取り、その方に最適な施術を組み立てます。曖昧な改善ではなく、納得できる結果を目指します。'
  },
  {
    icon: <Crown className="w-10 h-10" />,
    title: '完全プライベートの上質な空間',
    description: '白とゴールドを基調とした、洗練された空間。人目を気にすることなく、心身ともに解きほぐされるひとときをご提供します。'
  }
];

export function Features() {
  return (
    <section id="features" className="py-16 md:py-24 bg-gradient-to-b from-white to-[#F8F6F3]">
      <div className="container mx-auto px-4">
        {/* 導入部 */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#2C2C2C] mb-8">
            美容と健康、その本質へ。
          </h2>
          <div className="text-xl text-[#2C2C2C] mb-6 leading-relaxed">
            「小顔矯正」「姿勢矯正」「骨盤調整」「肩こり・腰痛ケア」
          </div>
          <p className="text-lg text-[#2C2C2C]/80 leading-relaxed mb-4">
            LUNOAは、美容と健康の両面から、身体と向き合う整体サロンです。
          </p>
          <p className="text-lg text-[#2C2C2C]/80 leading-relaxed mb-4">
            表面的な変化や一時的な心地よさではなく、<br className="hidden md:inline" />
            骨格・筋膜・筋肉のバランスに丁寧に働きかけ、<br className="hidden md:inline" />
            本来あるべき美しさと、軽やかな身体へ導きます。
          </p>
          <p className="text-lg text-[#2C2C2C]/80 leading-relaxed">
            落ち着いた空間、確かな技術、細部まで行き届いたサービス。<br className="hidden md:inline" />
            日常から少し距離を置き、<br className="hidden md:inline" />
            ご自身の身体と静かに向き合う時間をお過ごしください。
          </p>
        </div>

        {/* LUNOAが選ばれる理由 */}
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl lg:text-4xl font-bold text-center text-[#2C2C2C] mb-12">
            LUNOAが選ばれる理由
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#E8D5E8] to-[#D4AF37]/20 rounded-2xl flex items-center justify-center text-[#D4AF37] mb-6">
                  {reason.icon}
                </div>
                <h4 className="text-xl font-bold text-[#2C2C2C] mb-4 leading-tight">
                  {reason.title}
                </h4>
                <p className="text-[#2C2C2C]/70 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}