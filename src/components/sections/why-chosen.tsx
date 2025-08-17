import React from 'react';
import { Target, Heart, Shield, Award, Users, Clock } from 'lucide-react';

const stats = [
  { icon: <Award className="w-6 h-6" />, value: "1年3ヶ月", label: "の実績" },
  { icon: <Users className="w-6 h-6" />, value: "1400名", label: "以上の実績" },
  { icon: <Clock className="w-6 h-6" />, value: "96.7%", label: "の改善実感率" },
  { icon: <Shield className="w-6 h-6" />, value: "完全", label: "個室対応" }
];

const reasons = [
  {
    icon: <Target className="w-8 h-8" />,
    title: "根本改善へのアプローチ",
    description: "表面的な症状だけでなく、体の歪みの根本原因を見つけ出し改善します。症状の再発を防ぎ、根本的な美しさと健康を追求します。",
    gradient: "from-amber-400 to-yellow-500"
  },
  {
    icon: <Heart className="w-8 h-8" />,
    title: "オーダーメイド施術",
    description: "お客様の体の状態に合わせた完全個別対応の施術プランをご提案。一人ひとりのライフスタイルや目標に合わせて最適な施術を行います。",
    gradient: "from-yellow-400 to-orange-500"
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "美容と健康の両立",
    description: "見た目の美しさだけでなく、体の内側からの健康も重視した総合的なケア。豊富な経験と確かな技術で安心・安全な施術をご提供します。",
    gradient: "from-orange-400 to-red-500"
  }
];

export function WhyChosen() {
  return (
    <section 
      className="py-16 md:py-24 bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 relative"
      style={{
        backgroundImage: `url('/S__374874130_0.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="absolute inset-0 bg-white/80"></div>
      <div className="container mx-auto px-4">
        <div className="relative z-10">
          <div className="space-y-8 animate-appear text-center max-w-4xl mx-auto">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
                LUNOAはなぜ選ばれるのか
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-6">
                当院では、ただ症状を改善するだけでなく、根本的な原因にアプローチします。
                豊富な経験と確かな技術で、お客様一人ひとりに最適な施術をご提供。
                美しさと健康を同時に手に入れることができます。
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow animate-appear">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-amber-500 to-yellow-600 text-white rounded-xl mb-3">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-gray-800 mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16">
          <div className="grid md:grid-cols-3 gap-8">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 animate-appear"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${reason.gradient} rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {reason.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{reason.title}</h3>
                <p className="text-gray-600 leading-relaxed">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-16 animate-appear delay-700">
          <div className="bg-white rounded-3xl p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-gray-800 mb-6">お客様満足度</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-amber-600 mb-2">96.7%</div>
                <div className="text-gray-600">改善実感率</div>
                <div className="text-sm text-gray-500">Googleクチコミ評価（122人中118人高評価）</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-amber-600 mb-2">96.7%</div>
                <div className="text-gray-600">満足度</div>
                <div className="text-sm text-gray-500">Googleクチコミ評価（122人中118人高評価）</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-amber-600 mb-2">88%</div>
                <div className="text-gray-600">リピート率</div>
                <div className="text-sm text-gray-500">既存予約率</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}