import React from 'react';
import { Calendar, Star, ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center pt-20 bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 relative"
      style={{
        backgroundImage: `url('/LUNOA/S__374874114 copy copy.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="absolute inset-0 bg-white/70"></div>
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <div className="space-y-8 animate-appear">
            <div className="space-y-6">
              <h2 className="text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
                美しさと健康を
                <span className="block bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent">
                  根本から整える
                </span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
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
                <span className="text-gray-600 font-medium">5.0評価</span>
              </div>
              <div className="text-gray-500">•</div>
              <span className="text-gray-600 font-medium">500名以上のお客様</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://bookom.jp/reservation?company=69&course=1339&defaultLang=ja&shop=238"
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700 text-white px-8 py-6 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 text-center no-underline"
              >
                <Calendar className="w-5 h-5 inline mr-2" />
                ご予約はこちら
              </a>
              <button className="border-2 border-amber-300 text-amber-600 hover:bg-amber-50 px-8 py-6 rounded-full text-lg font-semibold transition-all duration-200 flex items-center justify-center space-x-2">
                <span>サービス詳細</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="relative animate-appear delay-300">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/LUNOA/S__374874114 copy copy.jpg"
                alt="美容整体施術の様子"
                className="w-full h-96 lg:h-[500px] object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>

            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl animate-appear delay-1000">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-800">1年3ヶ月</div>
                <div className="text-sm text-gray-600">の実績</div>
              </div>
            </div>

            <div className="absolute -top-6 -right-6 bg-white p-4 rounded-2xl shadow-xl animate-appear delay-700">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-gray-700">営業中</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}