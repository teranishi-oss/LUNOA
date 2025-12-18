import React from 'react';
import { Calendar, Star, ArrowRight, Play } from 'lucide-react';

export function Hero() {
  return (
    <>
      {/* 固定予約ボタン */}
      <div className="fixed top-20 right-4 z-50 animate-appear delay-2000">
        <a 
          href="https://beauty.hotpepper.jp/CSP/kr/reserve/?storeId=H000777760"
          target="_blank" 
          rel="noopener noreferrer"
          className="group bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-bold px-6 py-4 rounded-full shadow-2xl transform transition-all duration-300 hover:scale-110 hover:shadow-3xl flex items-center space-x-2"
        >
          <Calendar className="w-5 h-5 group-hover:animate-bounce" />
          <span className="hidden sm:inline">今すぐ予約</span>
          <span className="sm:hidden">予約</span>
        </a>
      </div>

      <section 
        id="home" 
        className="min-h-screen flex items-center justify-center pt-0 relative overflow-hidden"
      >
        {/* 美容整体をテーマにした背景画像 */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg)',
          }}
        >
          {/* 動的オーバーレイ */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-transparent to-black/40"></div>
          
          {/* アニメーション要素 */}
          <div className="absolute top-20 left-10 w-32 h-32 bg-pink-300/20 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-48 h-48 bg-rose-300/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-5xl mx-auto">
            {/* メインキャッチコピー */}
            <div className="space-y-8 animate-appear">
              <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight font-handwriting drop-shadow-2xl">
                美しい体を作り上げる
                <span className="block bg-gradient-to-r from-pink-300 to-rose-400 bg-clip-text text-transparent">
                  美容整体
                </span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-white/90 leading-relaxed drop-shadow-lg font-medium">
                骨格・筋肉・内臓の歪みを根本から改善
                <span className="block text-pink-200">美しさと健康を同時に手に入れる</span>
              </p>
            </div>

            {/* CTAボタン */}
            <div className="mt-12 space-y-6 animate-appear delay-500">
              <a 
                href="https://beauty.hotpepper.jp/CSP/kr/reserve/?storeId=H000777760"
                target="_blank" 
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center px-12 py-6 text-2xl font-bold text-white rounded-full shadow-2xl transform transition-all duration-300 hover:scale-110 hover:shadow-3xl relative overflow-hidden"
                style={{ 
                  background: 'linear-gradient(135deg, #ec4899, #f43f5e)',
                  boxShadow: '0 20px 40px rgba(236, 72, 153, 0.3)'
                }}
              >
                {/* ボタンアニメーション背景 */}
                <div className="absolute inset-0 bg-gradient-to-r from-rose-400 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <Calendar className="w-8 h-8 mr-4 relative z-10 group-hover:animate-bounce" />
                <span className="relative z-10">今すぐ予約</span>
                <ArrowRight className="w-8 h-8 ml-4 relative z-10 group-hover:translate-x-2 transition-transform duration-300" />
                
                {/* 光るエフェクト */}
                <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </a>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="#services"
                  className="group flex items-center space-x-3 text-white/80 hover:text-white transition-colors duration-200 text-lg"
                >
                  <Play className="w-6 h-6 group-hover:scale-110 transition-transform duration-200" />
                  <span>美容整体の詳細を見る</span>
                </a>
                
                <div className="flex items-center space-x-2 text-white/70">
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-sm">96.7%のお客様が美容効果を実感</span>
                </div>
              </div>
            </div>

            {/* 美容整体の効果実績 */}
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 animate-appear delay-1000">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                <div className="text-4xl font-bold text-white mb-2">1400+</div>
                <div className="text-white/80">美容整体実績</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                <div className="text-4xl font-bold text-white mb-2">96.7%</div>
                <div className="text-white/80">美容効果実感率</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                <div className="text-4xl font-bold text-white mb-2">最短5分</div>
                <div className="text-white/80">で変化を体感</div>
              </div>
            </div>
          </div>
        </div>

        {/* スクロールインジケーター */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>
    </>
  );
}