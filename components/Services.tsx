import React from 'react';
import { Calendar, Clock, MapPin, Phone, Star, ArrowRight, Heart, Sparkles, Zap } from 'lucide-react';

const beautyServices = [
  {
    name: "小顔美容整体",
    description: "顔の歪みを整え、リフトアップ効果で小顔を実現",
    image: "/images/line_album_hpアルバム_251218_28.jpg",
    duration: "約50分",
    features: ["小顔効果", "リフトアップ", "血行促進", "むくみ解消"],
    effects: "この整体で小顔効果を実感！フェイスラインがすっきり",
    icon: <Heart className="w-8 h-8" />
  },
  {
    name: "姿勢美容整体",
    description: "猫背・巻き肩を改善し、美しい姿勢を作る",
    image: "/images/line_album_hpアルバム_251218_49.jpg",
    duration: "約50分",
    features: ["姿勢改善", "猫背矯正", "肩こり解消", "美しいライン"],
    effects: "この整体で姿勢が改善！背筋が伸びて美しいシルエットに",
    icon: <Sparkles className="w-8 h-8" />
  },
  {
    name: "美脚・骨盤整体",
    description: "骨盤の歪みを整え、美しい脚のラインを作る",
    image: "/images/line_album_hpアルバム_251218_51.jpg",
    duration: "約50分",
    features: ["骨盤矯正", "美脚効果", "O脚改善", "ヒップアップ"],
    effects: "この整体で美脚を実現！脚のラインが美しく変化",
    icon: <Zap className="w-8 h-8" />
  }
];

export function Services() {
  return (
    <section id="services" className="py-16 md:py-24 bg-gradient-to-br from-pink-50 to-rose-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-appear">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6 font-handwriting">
            美容整体サービス
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            美しさを追求する専門的な美容整体で、あなたの理想の体を実現します。
            根本から改善し、持続する美しさを手に入れましょう。
          </p>
        </div>

        {/* 美容整体の特徴 */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {beautyServices.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden animate-appear"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* サービス画像 */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = '/images/rogo.png';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center text-white">
                    {service.icon}
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="flex items-center space-x-2 text-sm">
                    <Clock className="w-4 h-4" />
                    <span>{service.duration}</span>
                  </div>
                </div>
              </div>

              {/* サービス内容 */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">{service.name}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                
                {/* 美容効果 */}
                <div className="mb-6 p-4 bg-gradient-to-r from-pink-50 to-rose-50 rounded-xl border border-pink-200">
                  <p className="text-pink-700 font-medium text-sm italic">
                    "{service.effects}"
                  </p>
                </div>
                
                {/* 特徴 */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-700 mb-3 flex items-center">
                    <Star className="w-4 h-4 text-pink-400 mr-2" />
                    美容効果
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="bg-pink-100 text-pink-600 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* 予約ボタン */}
                <div className="border-t border-gray-100 pt-6">
                  <div className="space-y-3">
                    <a
                      href="https://duplicated-imdj.bolt.host/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group w-full bg-gradient-to-r from-pink-400 to-rose-500 hover:from-pink-500 hover:to-rose-600 text-white font-bold py-4 px-6 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center space-x-2"
                    >
                      <Calendar className="w-5 h-5 group-hover:animate-bounce" />
                      <span>今すぐ予約</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </a>

                    <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-3 px-6 rounded-2xl transition-all duration-300">
                      詳細を見る
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 店舗情報 */}
        <div className="bg-white rounded-3xl shadow-lg p-8 animate-appear delay-1500">
          <h3 className="text-3xl font-bold text-gray-800 text-center mb-8 font-handwriting">店舗情報</h3>
          
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-pink-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-700 mb-2">アクセス</h4>
                  <p className="text-gray-600">
                    〒150-0043<br />
                    東京都渋谷区道玄坂１丁目１９−１３<br />
                    トップヒル並木 5階<br />
                    <span className="text-pink-600 font-medium">JR渋谷駅より徒歩5分</span>
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Phone className="w-6 h-6 text-pink-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-700 mb-2">電話番号</h4>
                  <p className="text-gray-600">090-3543-0588</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Clock className="w-6 h-6 text-pink-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-700 mb-2">営業時間</h4>
                  <p className="text-gray-600">
                    平日: 10:00-21:00<br />
                    土日: 10:00-19:00<br />
                    <span className="text-pink-600 font-medium">定休日なし</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <img 
                src="/images/444.jpg" 
                alt="店舗外観" 
                className="w-full h-32 object-cover rounded-xl"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = '/images/rogo.png';
                }}
              />
              <img 
                src="/images/555.jpg" 
                alt="施術室" 
                className="w-full h-32 object-cover rounded-xl"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = '/images/rogo.png';
                }}
              />
              <img 
                src="/images/888.jpg" 
                alt="美容整体施術風景" 
                className="w-full h-32 object-cover rounded-xl col-span-2"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = '/images/rogo.png';
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}