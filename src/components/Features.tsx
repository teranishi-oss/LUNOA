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
    <section id="features" className="py-24 md:py-32 bg-[#FAFAF8]">
      <div className="container mx-auto px-4">
        {/* 導入部 */}
        <div className="text-center mb-24 max-w-4xl mx-auto">
          <h2 className="mb-12">
            美容と健康、その本質へ。
          </h2>
          <div className="text-[#2E2E2E] mb-8">
            「小顔矯正」「姿勢矯正」「骨盤調整」「肩こり・腰痛ケア」
          </div>
          <p className="text-[#6A6A6A] mb-6">
            LUNOAは、美容と健康の両面から、身体と向き合う整体サロンです。
          </p>
          <p className="text-[#6A6A6A] mb-6">
            表面的な変化や一時的な心地よさではなく、<br className="hidden md:inline" />
            骨格・筋膜・筋肉のバランスに丁寧に働きかけ、<br className="hidden md:inline" />
            本来あるべき美しさと、軽やかな身体へ導きます。
          </p>
          <p className="text-[#6A6A6A]">
            落ち着いた空間、確かな技術、細部まで行き届いたサービス。<br className="hidden md:inline" />
            日常から少し距離を置き、<br className="hidden md:inline" />
            ご自身の身体と静かに向き合う時間をお過ごしください。
          </p>
        </div>

        {/* LUNOAが選ばれる理由 */}
        <div className="max-w-6xl mx-auto">
          <h3 className="text-center mb-16">
            LUNOAが選ばれる理由
          </h3>
          <div className="grid md:grid-cols-3 gap-12 md:gap-16">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="bg-[#F3F2EE] p-10 transition-opacity duration-200 hover:opacity-90"
              >
                <div className="w-14 h-14 bg-[#B9A98A]/20 flex items-center justify-center text-[#8F846B] mb-8">
                  {reason.icon}
                </div>
                <h4 className="mb-5">
                  {reason.title}
                </h4>
                <p className="text-[#6A6A6A]">
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