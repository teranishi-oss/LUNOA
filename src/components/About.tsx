import React from 'react';
import { Target, Heart, Shield, Award, Users, Clock } from 'lucide-react';

const stats = [
  { icon: <Award className="w-6 h-6" />, value: "1年3ヶ月", label: "の実績" },
  { icon: <Users className="w-6 h-6" />, value: "1400名", label: "以上の実績" },
  { icon: <Clock className="w-6 h-6" />, value: "96.7%", label: "の改善実感率" },
  { icon: <Shield className="w-6 h-6" />, value: "完全", label: "個室対応" }
];

const features = [
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

export function About() {
  return (
    <section 
      id="about" 
      className="py-16 md:py-24 relative"
      style={{
        backgroundImage: `url('/images/1212.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundColor: '#F8F4E9'
      }}
    >
      <div className="absolute inset-0" style={{ backgroundColor: 'rgba(248, 244, 233, 0.92)' }}></div>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-appear relative z-10">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-400 mb-6 font-handwriting">
            LUNOAが選ばれる理由
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            当院では、ただ症状を改善するだけでなく、根本的な原因にアプローチします。
            豊富な経験と確かな技術で、お客様一人ひとりに最適な施術をご提供。
            美しさと健康を同時に手に入れることができます。
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-16 relative z-10">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow animate-appear border border-gold-200">
              <div 
                className="inline-flex items-center justify-center w-12 h-12 text-white rounded-xl mb-3"
                style={{ background: 'linear-gradient(135deg, #f59e0b, #eab308)' }}
              >
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-gray-400 mb-1">{stat.value}</div>
              <div className="text-sm text-gray-400 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="text-center mb-16 animate-appear delay-300">
          <div className="bg-white rounded-3xl p-8 shadow-sm max-w-2xl mx-auto border border-gold-200">
            <h3 className="text-3xl font-bold mb-4 font-handwriting text-orange-300">
              最短5分で変化を体感！
            </h3>
            <p className="text-lg text-gray-400 leading-relaxed">
              初回施術から体の変化を実感していただけます。
              多くのお客様が施術直後に「軽くなった」「楽になった」と驚かれます。
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative z-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-md transform hover:-translate-y-2 transition-all duration-300 animate-appear border border-gold-200"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div 
                className="w-16 h-16 rounded-2xl flex items-center justify-center text-white mb-6"
                style={{ background: 'linear-gradient(135deg, #f59e0b, #eab308)' }}
              >
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold text-slate-400 mb-4">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}