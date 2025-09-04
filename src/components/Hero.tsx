import React from 'react';
import { Calendar, Star, ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center pt-32 relative"
      style={{
        backgroundImage: 'url(/images/374874116.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* 背景オーバーレイ */}
      <div 
        className="absolute inset-0" 
        style={{ backgroundColor: 'rgba(248, 244, 233, 0.85)' }}
      ></div>
      
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <div className="space-y-8 animate-appear">
            <div className="space-y-6">
              <h2 className="text-5xl lg:text-6xl font-bold text-gray-600 leading-tight font-handwriting">
                美しさと健康を
                <span className="block text-orange-300">
                  根本から整える
                </span>
              </h2>
              <p className="text-xl text-gray-400 leading-relaxed">
                骨格・筋肉・内臓の歪みを整え、根本的な美しさと健康を追求する美容整体サロンです。
                一人ひとりの体の状態に合わせたオーダーメイドの施術で、理想の美しさを実現します。
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://duplicated-imdj.bolt.host/"
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
                className="border-2 border-orange-200 text-orange-300 hover:bg-orange-50 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-200 flex items-center justify-center space-x-2 no-underline"
              >
                <span>サービス詳細</span>
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="relative animate-appear delay-300">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl h-96 lg:h-[500px]">
              <img 
                src="/images/374874116.jpg" 
                alt="美容整体 LUNOA - 施術の様子" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                <div className="text-center text-white p-8">
                  <h3 className="text-4xl font-bold mb-4">美容整体</h3>
                  <p className="text-2xl mb-6">LUNOA</p>
                  <p className="text-lg">あなたの美と健康をサポート</p>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl animate-appear delay-1000">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-400">1年3ヶ月</div>
                <div className="text-sm text-gray-400">の実績</div>
              </div>
            </div>

            <div className="absolute -top-6 -right-6 bg-white p-4 rounded-2xl shadow-xl animate-appear delay-700">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-orange-300 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-gray-400">営業中</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}