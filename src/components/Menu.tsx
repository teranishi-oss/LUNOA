import React from 'react';
import { Calendar, ArrowRight, Heart, Sparkles, Zap, Shield, Target, Star } from 'lucide-react';

const menuItems = [
  {
    id: 1,
    title: "体の歪みを取りたい",
    subtitle: "骨格・姿勢矯正",
    description: "猫背、巻き肩、骨盤の歪みなど、体全体のバランスを整えて美しい姿勢を作ります。",
    image: "/images/line_album_hpアルバム_251218_49.jpg",
    price: "¥15,400",
    duration: "約50分",
    features: ["骨格矯正", "姿勢改善", "猫背矯正", "骨盤調整"],
    icon: <Target className="w-8 h-8" />,
    color: "from-amber-400 to-yellow-500",
    bgColor: "bg-amber-50"
  },
  {
    id: 2,
    title: "首・肩のつらさを改善したい",
    subtitle: "首肩集中ケア",
    description: "デスクワークによる首こり、肩こりを根本から改善。可動域を広げて楽な毎日を。",
    image: "/images/line_album_hpアルバム_251218_50.jpg",
    price: "¥15,400",
    duration: "約50分",
    features: ["首こり改善", "肩こり解消", "可動域向上", "血行促進"],
    icon: <Shield className="w-8 h-8" />,
    color: "from-blue-400 to-cyan-500",
    bgColor: "bg-blue-50"
  },
  {
    id: 3,
    title: "小顔になりたい",
    subtitle: "小顔美容整体",
    description: "顔の歪みを整え、リフトアップ効果で理想の小顔を実現。むくみも同時に解消。",
    image: "/images/line_album_hpアルバム_251218_28.jpg",
    price: "¥15,400",
    duration: "約50分",
    features: ["小顔効果", "リフトアップ", "むくみ解消", "血行促進"],
    icon: <Heart className="w-8 h-8" />,
    color: "from-pink-400 to-rose-500",
    bgColor: "bg-pink-50"
  },
  {
    id: 4,
    title: "美しい脚のラインが欲しい",
    subtitle: "美脚・骨盤整体",
    description: "O脚、X脚の改善と骨盤矯正で、まっすぐで美しい脚のラインを作ります。",
    image: "/images/line_album_hpアルバム_251218_51.jpg",
    price: "¥15,400",
    duration: "約50分",
    features: ["美脚効果", "O脚改善", "骨盤矯正", "ヒップアップ"],
    icon: <Sparkles className="w-8 h-8" />,
    color: "from-purple-400 to-pink-500",
    bgColor: "bg-purple-50"
  },
  {
    id: 5,
    title: "体の柔軟性を高めたい",
    subtitle: "柔軟性向上整体",
    description: "筋肉の緊張をほぐし、関節の可動域を広げて、しなやかで動きやすい体を作ります。",
    image: "/images/line_album_hpアルバム_251218_55.jpg",
    price: "¥15,400",
    duration: "約50分",
    features: ["柔軟性向上", "可動域拡大", "筋肉リリース", "動作改善"],
    icon: <Zap className="w-8 h-8" />,
    color: "from-green-400 to-emerald-500",
    bgColor: "bg-green-50"
  },
  {
    id: 6,
    title: "全身のバランスを整えたい",
    subtitle: "トータルケア整体",
    description: "体全体のバランスを総合的に調整。美容と健康を同時に手に入れる贅沢なコース。",
    image: "/images/line_album_hpアルバム_251218_28.jpg",
    price: "¥15,400",
    duration: "約50分",
    features: ["全身調整", "バランス改善", "美容効果", "健康促進"],
    icon: <Star className="w-8 h-8" />,
    color: "from-orange-400 to-red-500",
    bgColor: "bg-orange-50"
  }
];

export function Menu() {
  return (
    <section id="menu" className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-appear">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6 font-handwriting">
            お悩み別メニュー
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            あなたのお悩みに合わせた専門的な美容整体メニューをご用意しています。
            一人ひとりの体の状態に合わせて、最適な施術をご提供いたします。
          </p>
        </div>

        {/* メニューカードグリッド */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {menuItems.map((item, index) => (
            <div
              key={item.id}
              className={`bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden animate-appear border border-gray-100 ${item.bgColor}`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* カード画像 */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = '/images/rogo.png';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                
                {/* アイコン */}
                <div className="absolute top-4 left-4">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white bg-gradient-to-r ${item.color}`}>
                    {item.icon}
                  </div>
                </div>
                
                {/* 価格表示 */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                  <span className="text-lg font-bold" style={{ color: '#C9A03D' }}>{item.price}</span>
                </div>
              </div>

              {/* カード内容 */}
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-sm font-medium" style={{ color: '#C9A03D' }}>{item.subtitle}</p>
                </div>
                
                <p className="text-gray-600 mb-4 leading-relaxed text-sm">{item.description}</p>
                
                {/* 施術時間 */}
                <div className="flex items-center mb-4 text-gray-500 text-sm">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>{item.duration}</span>
                </div>
                
                {/* 特徴タグ */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {item.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-medium"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* ボタン */}
                <div className="space-y-3">
                  <a 
                    href="https://beauty.hotpepper.jp/CSP/kr/reserve/?storeId=H000777760"
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group w-full bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-bold py-3 px-6 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center space-x-2"
                  >
                    <Calendar className="w-5 h-5 group-hover:animate-bounce" />
                    <span>今すぐ予約</span>
                  </a>
                  
                  <button 
                    className="group w-full border-2 hover:bg-gray-50 text-gray-700 font-semibold py-3 px-6 rounded-2xl transition-all duration-300 flex items-center justify-center space-x-2"
                    style={{ borderColor: '#C9A03D', color: '#C9A03D' }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#C9A03D';
                      e.currentTarget.style.color = 'white';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'transparent';
                      e.currentTarget.style.color = '#C9A03D';
                    }}
                  >
                    <span>詳細を見る</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 料金プラン */}
        <div className="mt-16 bg-white rounded-3xl shadow-lg p-8 animate-appear delay-1000">
          <h3 className="text-3xl font-bold text-gray-800 text-center mb-8 font-handwriting">料金プラン</h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-200">
              <h4 className="text-xl font-bold text-gray-700 mb-4">都度払い</h4>
              <div className="text-3xl font-bold mb-2" style={{ color: '#C9A03D' }}>¥15,400</div>
              <div className="text-sm text-gray-500 mb-4">1回あたり</div>
              <a 
                href="https://beauty.hotpepper.jp/CSP/kr/reserve/?storeId=H000777760"
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block w-full bg-gray-100 hover:text-white text-gray-600 font-semibold px-4 py-3 rounded-xl transition-all duration-300"
                style={{ 
                  '&:hover': { 
                    backgroundColor: '#C9A03D' 
                  } 
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#C9A03D';
                  e.currentTarget.style.color = 'white';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#f3f4f6';
                  e.currentTarget.style.color = '#4b5563';
                }}
              >
                予約する
              </a>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-amber-50 to-yellow-50 rounded-2xl border border-amber-200">
              <h4 className="text-xl font-bold text-gray-700 mb-4">3回券</h4>
              <div className="text-3xl font-bold mb-2" style={{ color: '#C9A03D' }}>¥33,000</div>
              <div className="text-sm text-gray-500 mb-4">¥11,000×3回</div>
              <a 
                href="https://beauty.hotpepper.jp/CSP/kr/reserve/?storeId=H000777760"
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block w-full bg-amber-100 hover:text-white text-amber-600 font-semibold px-4 py-3 rounded-xl transition-all duration-300"
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#C9A03D';
                  e.currentTarget.style.color = 'white';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#fef3c7';
                  e.currentTarget.style.color = '#d97706';
                }}
              >
                予約する
              </a>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-yellow-100 to-amber-100 rounded-2xl border-2 relative" style={{ borderColor: '#C9A03D' }}>
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 text-white px-4 py-1 rounded-full text-sm font-medium" style={{ backgroundColor: '#C9A03D' }}>
                人気
              </div>
              <h4 className="text-xl font-bold text-gray-700 mb-4">6回券</h4>
              <div className="text-3xl font-bold mb-2" style={{ color: '#C9A03D' }}>¥62,700</div>
              <div className="text-sm text-gray-500 mb-4">¥10,450×6回</div>
              <a 
                href="https://beauty.hotpepper.jp/CSP/kr/reserve/?storeId=H000777760"
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block w-full text-white font-semibold px-4 py-3 rounded-xl transition-all duration-300 transform hover:scale-105"
                style={{ backgroundColor: '#C9A03D' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#D1B35A';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#C9A03D';
                }}
              >
                予約する
              </a>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-200">
              <h4 className="text-xl font-bold text-gray-700 mb-4">9回券</h4>
              <div className="text-3xl font-bold mb-2" style={{ color: '#C9A03D' }}>¥89,100</div>
              <div className="text-sm text-gray-500 mb-4">¥9,900×9回</div>
              <a 
                href="https://beauty.hotpepper.jp/CSP/kr/reserve/?storeId=H000777760"
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block w-full bg-gray-100 hover:text-white text-gray-600 font-semibold px-4 py-3 rounded-xl transition-all duration-300"
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#C9A03D';
                  e.currentTarget.style.color = 'white';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#f3f4f6';
                  e.currentTarget.style.color = '#4b5563';
                }}
              >
                予約する
              </a>
            </div>
          </div>
        </div>

        {/* お客様へのメッセージ */}
        <div className="mt-16 text-center animate-appear delay-1500">
          <div className="bg-gradient-to-r from-amber-50 to-yellow-50 rounded-3xl p-8 border border-amber-200">
            <h3 className="text-2xl font-bold mb-4 font-handwriting" style={{ color: '#C9A03D' }}>
              どのメニューがいいか迷ったら...
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              お客様の体の状態やお悩みに合わせて、最適なメニューをご提案いたします。
              初回カウンセリングで詳しくお話を伺い、あなたにぴったりの施術プランを作成します。
            </p>
            <a 
              href="https://beauty.hotpepper.jp/CSP/kr/reserve/?storeId=H000777760"
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 space-x-2"
              style={{ backgroundColor: '#C9A03D' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#D1B35A';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#C9A03D';
              }}
            >
              <Calendar className="w-5 h-5" />
              <span>まずは相談予約</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}