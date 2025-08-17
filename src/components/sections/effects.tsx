import React from 'react';
import { Zap, Smile, Activity, Sparkles } from 'lucide-react';

const effects = [
  {
    category: "美容効果",
    icon: <Sparkles className="w-8 h-8" />,
    gradient: "from-pink-400 to-rose-500",
    items: [
      { title: "くびれ・下っ腹改善", description: "骨盤矯正により、美しいウエストラインを実現" },
      { title: "肩の盛り上がり改善", description: "肩甲骨を正しい位置に戻し、美しい肩のラインに" },
      { title: "太もも痩せ・ダイエット", description: "O脚・X脚の改善で、すっきりとした脚のラインに" },
      { title: "二の腕痩せ・代謝UP", description: "全身の歪みを整え、基礎代謝を向上させる" }
    ]
  },
  {
    category: "健康効果",
    icon: <Activity className="w-8 h-8" />,
    gradient: "from-green-400 to-emerald-500",
    items: [
      { title: "首肩こり・腰痛の改善", description: "筋肉の緊張をほぐし、血流を改善" },
      { title: "頭痛の改善", description: "首や肩の緊張を解消し、頭痛の根本原因を改善" },
      { title: "痺れ・眼精疲労の改善", description: "神経の圧迫を解消し、目の疲れも軽減" },
      { title: "睡眠の質向上", description: "自律神経を整え、深い眠りを得られる体に" }
    ]
  },
  {
    category: "精神的効果",
    icon: <Smile className="w-8 h-8" />,
    gradient: "from-blue-400 to-indigo-500",
    items: [
      { title: "ストレス軽減", description: "リラックス効果により、心身の緊張を解放" },
      { title: "睡眠の質向上", description: "体の歪みが整うことで、深い眠りを得られる" },
      { title: "自信の向上", description: "美しい姿勢と体型により、自信を持って過ごせる" },
      { title: "気分の向上", description: "体調改善により、前向きな気持ちに" }
    ]
  },
  {
    category: "機能的効果",
    icon: <Zap className="w-8 h-8" />,
    gradient: "from-amber-400 to-yellow-500",
    items: [
      { title: "可動域の改善", description: "関節の動きがスムーズになり、日常動作が楽に" },
      { title: "バランス能力向上", description: "体幹が安定し、転倒リスクが減少" },
      { title: "代謝の向上", description: "血流改善により、基礎代謝がアップ" },
      { title: "免疫力向上", description: "自律神経のバランスが整い、免疫機能が向上" }
    ]
  }
];

export function Effects() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-appear">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            期待できる効果
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            LUNOAの施術により、美容・健康・精神面で様々な効果を実感していただけます。
            お客様一人ひとりの状態に合わせて、最適な効果をご提供します。
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {effects.map((category, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-amber-50 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 animate-appear"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="flex items-center mb-6">
                <div className={`w-16 h-16 bg-gradient-to-r ${category.gradient} rounded-2xl flex items-center justify-center text-white mr-4`}>
                  {category.icon}
                </div>
                <h3 className="text-3xl font-bold text-gray-800">{category.category}</h3>
              </div>

              <div className="space-y-4">
                {category.items.map((item, idx) => (
                  <div key={idx} className="bg-white rounded-2xl p-4 shadow-sm">
                    <h4 className="font-semibold text-gray-800 mb-2">{item.title}</h4>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16 animate-appear delay-1000">
          <div className="bg-gradient-to-r from-amber-50 to-yellow-50 rounded-3xl p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">効果を実感いただくまでの期間</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-600 mb-2">1回目</div>
                <div className="text-gray-700">施術直後の変化を実感</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-600 mb-2">3〜5回</div>
                <div className="text-gray-700">明確な改善を実感</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-600 mb-2">10回〜</div>
                <div className="text-gray-700">根本的な改善・定着</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}