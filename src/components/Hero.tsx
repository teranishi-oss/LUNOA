import React from 'react';
import { Calendar, Star, ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center pt-20 relative"
      style={{
        backgroundImage: `url('/images/374874116.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundColor: '#F8F4E9'
      }}
    >
      <div className="absolute inset-0" style={{ backgroundColor: 'rgba(248, 244, 233, 0.95)' }}></div>
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <div className="space-y-8 animate-appear">
            <div className="space-y-6">
              <h2 className="text-5xl lg:text-6xl font-bold text-gray-600 leading-tight">
                美しさと健康を
                <span className="block text-amber-500">
                  根本から整える
                </span>
              </h2>
              <p className="text-xl text-gray-500 leading-relaxed">
                骨格・筋肉・内臓の歪みを整え、根本的な美しさと健康を追求する美容整体サロンです。
                一人ひとりの体の状態に合わせたオーダーメイドの施術で、理想の美しさを実現します。
              </p>
            </div>

            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <div className="flex -space-x-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-gray-500 font-medium">5.0評価</span>
              </div>
              <div className="text-gray-400">•</div>
              <span className="text-gray-500 font-medium">500名以上のお客様</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://bookom.jp/reservation?company=69&course=1339&defaultLang=ja&shop=238"
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 text-center no-underline text-white"
                style={{ background: 'linear-gradient(135deg, #d2b48c, #deb887)', color: 'white' }}
              >
                <Calendar className="w-5 h-5 inline mr-2" />
                ご予約はこちら
              </a>
              <a
                href="#services"
                className="border-2 border-amber-200 text-amber-500 hover:bg-amber-50 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-200 flex items-center justify-center space-x-2 no-underline"
              >
                <span>サービス詳細</span>
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="relative animate-appear delay-300">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-white to-gold-50 h-96 lg:h-[500px] flex items-center justify-center">
              <img 
                src="/images/555.jpg" 
                alt="美容整体 LUNOA 施術風景" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent flex items-end">
                <div className="text-center p-8 w-full">
                  <h3 className="text-2xl font-bold text-white mb-2">美容整体 LUNOA</h3>
                  <p className="text-white/90">あなたの美と健康をサポート</p>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl animate-appear delay-1000">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-600">1年3ヶ月</div>
                <div className="text-sm text-gray-500">の実績</div>
              </div>
            </div>

            <div className="absolute -top-6 -right-6 bg-white p-4 rounded-2xl shadow-xl animate-appear delay-700">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-amber-400 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-gray-600">営業中</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}