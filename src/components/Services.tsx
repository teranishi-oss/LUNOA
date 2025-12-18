import React from 'react';
import { Calendar, Clock, MapPin, Phone, Star, ArrowRight } from 'lucide-react';

const services = [
  {
    name: "姿勢矯正・骨格矯正",
    description: "猫背、巻き肩、反り腰を根本から改善",
    image: "/images/111.jpg",
    price: "¥15,400",
    duration: "約50分",
    features: ["姿勢分析", "骨格調整", "筋肉バランス改善"],
    steps: ["1. 姿勢チェック", "2. 施術プラン作成", "3. 骨格矯正施術"]
  },
  {
    name: "内臓調整・自律神経整体",
    description: "体の内側から健康をサポート",
    image: "/images/222.jpg",
    price: "¥15,400",
    duration: "約50分",
    features: ["内臓機能改善", "自律神経調整", "ホルモンバランス"],
    steps: ["1. 体調ヒアリング", "2. 内臓の状態確認", "3. 調整施術"]
  },
  {
    name: "小顔矯正・美容整体",
    description: "美しさを引き出す専門施術",
    image: "/images/333.jpg",
    price: "¥15,400",
    duration: "約50分",
    features: ["小顔効果", "リフトアップ", "血行促進"],
    steps: ["1. フェイスライン分析", "2. 美容施術", "3. アフターケア"]
  }
];

export function Services() {
  return (
    <section id="services" className="py-16 md:py-24 bg-gradient-to-br from-orange-50 to-amber-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-appear">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6 font-handwriting">
            予約サービス
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            あなたの美と健康をサポートする専門サービス。
            お客様一人ひとりに最適な施術をご提供いたします。
          </p>
        </div>

        {/* サービス一覧 */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
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
                
                {/* 特徴 */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-700 mb-3 flex items-center">
                    <Star className="w-4 h-4 text-orange-400 mr-2" />
                    特徴
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* 予約の流れ */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-700 mb-3">予約の流れ</h4>
                  <div className="space-y-2">
                    {service.steps.map((step, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-600">
                        <div className="w-6 h-6 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center text-xs font-bold mr-3">
                          {idx + 1}
                        </div>
                        {step}
                      </div>
                    ))}
                  </div>
                </div>

                {/* 料金と予約ボタン */}
                <div className="border-t border-gray-100 pt-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-3xl font-bold text-orange-500">{service.price}</div>
                    <div className="text-sm text-gray-500">税込</div>
                  </div>
                  
                  <a 
                    href="https://beauty.hotpepper.jp/CSP/kr/reserve/?storeId=H000777760"
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group w-full bg-gradient-to-r from-orange-400 to-amber-500 hover:from-orange-500 hover:to-amber-600 text-white font-bold py-4 px-6 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center space-x-2"
                  >
                    <Calendar className="w-5 h-5 group-hover:animate-bounce" />
                    <span>予約する</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 料金プラン */}
        <div className="bg-white rounded-3xl shadow-lg p-8 mb-16 animate-appear delay-1000">
          <h3 className="text-3xl font-bold text-gray-800 text-center mb-8 font-handwriting">料金プラン</h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-200">
              <h4 className="text-xl font-bold text-gray-700 mb-4">都度払い</h4>
              <div className="text-3xl font-bold text-orange-500 mb-2">¥15,400</div>
              <div className="text-sm text-gray-500 mb-4">1回あたり</div>
              <a 
                href="https://beauty.hotpepper.jp/CSP/kr/reserve/?storeId=H000777760"
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block w-full bg-gray-100 hover:bg-orange-400 hover:text-white text-gray-600 font-semibold px-4 py-3 rounded-xl transition-all duration-300"
              >
                予約する
              </a>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl border border-orange-200">
              <h4 className="text-xl font-bold text-gray-700 mb-4">3回券</h4>
              <div className="text-3xl font-bold text-orange-500 mb-2">¥33,000</div>
              <div className="text-sm text-gray-500 mb-4">¥11,000×3回</div>
              <a 
                href="https://beauty.hotpepper.jp/CSP/kr/reserve/?storeId=H000777760"
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block w-full bg-orange-100 hover:bg-orange-400 hover:text-white text-orange-600 font-semibold px-4 py-3 rounded-xl transition-all duration-300"
              >
                予約する
              </a>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-amber-100 to-yellow-100 rounded-2xl border-2 border-amber-300 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-amber-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                おすすめ
              </div>
              <h4 className="text-xl font-bold text-gray-700 mb-4">6回券</h4>
              <div className="text-3xl font-bold text-orange-500 mb-2">¥62,700</div>
              <div className="text-sm text-gray-500 mb-4">¥10,450×6回</div>
              <a 
                href="https://beauty.hotpepper.jp/CSP/kr/reserve/?storeId=H000777760"
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block w-full bg-amber-400 hover:bg-amber-500 text-white font-semibold px-4 py-3 rounded-xl transition-all duration-300 transform hover:scale-105"
              >
                予約する
              </a>
            </div>

            <div className="text-center p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-200">
              <h4 className="text-xl font-bold text-gray-700 mb-4">9回券</h4>
              <div className="text-3xl font-bold text-orange-500 mb-2">¥89,100</div>
              <div className="text-sm text-gray-500 mb-4">¥9,900×9回</div>
              <a 
                href="https://beauty.hotpepper.jp/CSP/kr/reserve/?storeId=H000777760"
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block w-full bg-gray-100 hover:bg-orange-400 hover:text-white text-gray-600 font-semibold px-4 py-3 rounded-xl transition-all duration-300"
              >
                予約する
              </a>
            </div>
          </div>
        </div>

        {/* 店舗情報 */}
        <div className="bg-white rounded-3xl shadow-lg p-8 animate-appear delay-1500">
          <h3 className="text-3xl font-bold text-gray-800 text-center mb-8 font-handwriting">店舗情報</h3>
          
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-orange-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-700 mb-2">アクセス</h4>
                  <p className="text-gray-600">
                    〒150-0043<br />
                    東京都渋谷区道玄坂１丁目１９−１３<br />
                    トップヒル並木 5階
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Phone className="w-6 h-6 text-orange-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-700 mb-2">電話番号</h4>
                  <p className="text-gray-600">090-3543-0588</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Clock className="w-6 h-6 text-orange-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-700 mb-2">営業時間</h4>
                  <p className="text-gray-600">
                    平日: 10:00-21:00<br />
                    土日: 10:00-19:00<br />
                    定休日なし
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
                alt="施術風景" 
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