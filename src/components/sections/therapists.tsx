import React from 'react';
import { Award, BookOpen, Heart, Users } from 'lucide-react';

const therapists = [
  {
    name: "郡山 京梧（こおりやま けいご）",
    role: "院長",
    experience: "3年（4年目）",
    specialties: ["骨格矯正", "足首矯正"],
    qualifications: [],
    description: "豊富な経験と確かな技術で、お客様の体の歪みを根本から改善します。一人ひとりに最適な施術プランをご提案いたします。"
  },
  {
    name: "佐藤 まりな（さとう まりな）",
    role: "スタッフ",
    experience: "11年",
    specialties: ["巻き肩改善"],
    qualifications: [],
    description: "長年の経験を活かし、現代人に多い巻き肩の問題を根本から改善します。美しい姿勢づくりをサポートいたします。"
  },
  {
    name: "高梨 美優（たかなし みゆう）",
    role: "スタッフ",
    experience: "3年（4年目）",
    specialties: ["自律神経整体", "内臓調整"],
    qualifications: [],
    description: "自律神経の乱れや内臓の不調にアプローチし、体の内側から健康をサポートします。心身のバランスを整える施術を行います。"
  },
  {
    name: "宮川 竜太（みやがわ りゅうた）",
    role: "スタッフ",
    experience: "8ヶ月",
    specialties: ["肩こり改善", "自律神経"],
    qualifications: [],
    description: "肩こりの根本原因にアプローチし、自律神経のバランスも整えます。お客様の日常生活の質向上をサポートいたします。"
  },
  {
    name: "鈴木 響（すずき きょう）",
    role: "マネージャー",
    experience: "4年（5年目）",
    specialties: ["肩甲骨はがし", "フェイシャル整体", "リラクゼーション"],
    qualifications: [],
    description: "美容と癒しを融合した施術で、お客様の内面から輝く美しさを引き出します。心身ともにリラックスできる時間をご提供します。"
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
            経験豊富なプロフェッショナルが、安心・安全な施術をご提供します。
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {therapists.map((therapist, index) => (
            <div
              key={index}
              className="h-full shadow-lg hover:shadow-xl transition-all duration-300 bg-white border-0 rounded-3xl p-8 animate-appear"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="text-center pb-4">
                {therapist.name === "郡山 京梧（こおりやま けいご）" ? (
                  <div className="w-32 h-32 mx-auto mb-4 shadow-lg rounded-full overflow-hidden">
                    <img 
                      src="/LINE_ALBUM_宣材写真_250817_1.jpg" 
                      alt="郡山 京梧" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                ) : therapist.name === "宮川 竜太（みやがわ りゅうた）" ? (
                  <div className="w-32 h-32 mx-auto mb-4 shadow-lg rounded-full overflow-hidden">
                    <img 
                      src="/LINE_ALBUM_宣材写真_250817_2.jpg" 
                      alt="宮川 竜太" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                ) : therapist.name === "佐藤 まりな（さとう まりな）" ? (
                  <div className="w-32 h-32 mx-auto mb-4 shadow-lg rounded-full overflow-hidden">
                    <img 
                      src="/LINE_ALBUM_宣材写真_250817_3.jpg" 
                      alt="佐藤 まりな" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                ) : therapist.name === "鈴木 響（すずき きょう）" ? (
                  <div className="w-32 h-32 mx-auto mb-4 shadow-lg rounded-full overflow-hidden">
                    <img 
                      src="/LINE_ALBUM_宣材写真_250817_4.jpg" 
                      alt="鈴木 響" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                ) : therapist.name === "高梨 美優（たかなし みゆう）" ? (
                  <div className="w-32 h-32 mx-auto mb-4 shadow-lg rounded-full overflow-hidden">
                    <img 
                      src="/LINE_ALBUM_宣材写真_250817_5.jpg" 
                      alt="高梨 美優" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                ) : (
                  <div className="w-32 h-32 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Award className="w-12 h-12 text-white" />
                  </div>
                )}
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{therapist.name}</h3>
                <p className="text-amber-600 font-semibold">{therapist.role}</p>
                <p className="text-gray-600">経験年数: {therapist.experience}</p>
              </div>
              
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed text-sm">
                  {therapist.description}
                </p>
                
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                    <Heart className="w-4 h-4 mr-2 text-amber-500" />
                    専門分野
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {therapist.specialties.map((specialty, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-gradient-to-r from-amber-100 to-yellow-100 text-amber-800 rounded-full text-xs font-medium"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>

                {therapist.qualifications.length > 0 && (
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                      <BookOpen className="w-4 h-4 mr-2 text-amber-500" />
                      保有資格
                    </h4>
                    <ul className="space-y-1">
                      {therapist.qualifications.map((qualification, idx) => (
                        <li key={idx} className="text-sm text-gray-600 flex items-center">
                          <div className="w-2 h-2 bg-amber-400 rounded-full mr-2"></div>
                          {qualification}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 animate-appear delay-1000">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-amber-50 to-yellow-50 border-0 shadow-lg rounded-3xl p-8">
            <div className="flex items-center justify-center mb-4">
              <Users className="w-8 h-8 text-amber-600 mr-3" />
              <h3 className="text-2xl font-bold text-gray-800">チーム一丸となってサポート</h3>
            </div>
            <p className="text-gray-700 leading-relaxed text-lg">
              私たち施術者は定期的な研修と技術向上に努め、常に最新の美容整体技術を習得しています。
              お客様の「美しくなりたい」「健康になりたい」という想いに真摯に向き合い、
              一人ひとりに最適な施術プランをご提案いたします。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}