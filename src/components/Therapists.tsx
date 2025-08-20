import React from 'react';
import { Award, Clock, Heart, Star } from 'lucide-react';

const therapists = [
  {
    name: "郡山 京梧",
    nameKana: "こおりやま けいご",
    role: "院長",
    experience: "3年（4年目）",
    description: "豊富な経験と確かな技術で、お客様の体の歪みを根本から改善します。",
    initial: "郡",
    image: "/src/assets/111.jpg",
    specialties: ["骨格矯正", "姿勢改善", "根本治療"]
  },
  {
    name: "佐藤 まりな",
    nameKana: "さとう まりな", 
    role: "スタッフ",
    experience: "11年",
    description: "長年の経験を活かし、現代人に多い巻き肩の問題を根本から改善します。",
    initial: "佐",
    image: "/src/assets/222.jpg",
    specialties: ["巻き肩改善", "肩こり治療", "姿勢矯正"]
  },
  {
    name: "高梨 美優",
    nameKana: "たかなし みゆう",
    role: "スタッフ", 
    experience: "3年（4年目）",
    description: "自律神経の乱れや内臓の不調にアプローチし、体の内側から健康をサポートします。",
    initial: "高",
    image: "/src/assets/333.jpg",
    specialties: ["自律神経整体", "内臓調整", "ホルモンバランス"]
  },
  {
    name: "宮川 竜太",
    nameKana: "みやがわ りゅうた",
    role: "スタッフ",
    experience: "8ヶ月", 
    description: "肩こりの根本原因にアプローチし、自律神経のバランスも整えます。",
    initial: "宮",
    image: "/src/assets/444.jpg",
    specialties: ["肩こり改善", "自律神経調整", "筋膜リリース"]
  },
  {
    name: "鈴木 響",
    nameKana: "すずき きょう",
    role: "マネージャー",
    experience: "4年（5年目）",
    description: "美容と癒しを融合した施術で、お客様の内面から輝く美しさを引き出します。",
    initial: "鈴",
    image: "/src/assets/888.jpg",
    specialties: ["美容整体", "小顔矯正", "リラクゼーション"]
  }
];

export function Therapists() {
  return (
    <section id="therapists" className="py-16 md:py-24 bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-appear">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            施術者紹介
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            豊富な経験と確かな技術を持つ施術者が、お客様の美と健康をサポートいたします。
            一人ひとりが専門性を活かし、最高の施術をご提供します。
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {therapists.map((therapist, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-appear"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-center mb-6">
                <div className="w-20 h-20 rounded-full mx-auto mb-4 overflow-hidden shadow-lg">
                  <img 
                    src={therapist.image} 
                    alt={`${therapist.name}の写真`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-1">
                  {therapist.name}
                </h3>
                <p className="text-gray-500 text-sm mb-2">（{therapist.nameKana}）</p>
                <div className="flex items-center justify-center space-x-4 mb-4">
                  <span className="bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-sm font-medium">
                    {therapist.role}
                  </span>
                  <div className="flex items-center space-x-1 text-gray-600">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">経験{therapist.experience}</span>
                  </div>
                </div>
              </div>

              <p className="text-gray-600 leading-relaxed mb-6 text-center">
                {therapist.description}
              </p>

              <div className="space-y-3">
                <h4 className="text-sm font-semibold text-gray-800 flex items-center">
                  <Star className="w-4 h-4 text-amber-500 mr-2" />
                  専門分野
                </h4>
                <div className="flex flex-wrap gap-2">
                  {therapist.specialties.map((specialty, idx) => (
                    <span
                      key={idx}
                      className="bg-gradient-to-r from-amber-100 to-yellow-100 text-amber-700 px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16 animate-appear delay-1000">
          <div className="bg-white rounded-3xl p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-gray-800 mb-6">チーム実績</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-amber-600 mb-2">1400名+</div>
                <div className="text-gray-600">施術実績</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-amber-600 mb-2">96.7%</div>
                <div className="text-gray-600">お客様満足度</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-amber-600 mb-2">平均27年</div>
                <div className="text-gray-600">総合経験年数</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}