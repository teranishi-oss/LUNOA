import React from 'react';
import { Calendar, Star, ArrowRight, Play } from 'lucide-react';

export function Hero() {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center pt-0 relative overflow-hidden"
    >
      {/* 背景動画風エフェクト */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/images/374874116.jpg)',
        }}
      >
        {/* 動的オーバーレイ */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-transparent to-black/30"></div>
        
        {/* アニメーション要素 */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-orange-300/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-amber-300/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* メインキャッチコピー */}
          <div className="space-y-8 animate-appear">
            <h1 className="text-6xl lg:text-8xl font-bold text-white leading-tight font-handwriting drop-shadow-2xl">
              心身ともに
              <span className="block bg-gradient-to-r from-orange-300 to-amber-400 bg-clip-text text-transparent">
                リフレッシュしませんか？
              </span>
            </h1>
            
            <p className="text-2xl lg:text-3xl text-white/90 leading-relaxed drop-shadow-lg font-medium">
              美しさと健康を根本から整える
              <span className="block text-orange-200">プロフェッショナルな美容整体</span>
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
                background: 'linear-gradient(135deg, #f59e0b, #eab308)',
                boxShadow: '0 20px 40px rgba(245, 158, 11, 0.3)'
              }}
            >
              {/* ボタンアニメーション背景 */}
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
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
                <span>サービス詳細を見る</span>
              </a>
              
              <div className="flex items-center space-x-2 text-white/70">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-sm">96.7%のお客様が満足</span>
              </div>
            </div>
          </div>

          {/* 実績表示 */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 animate-appear delay-1000">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
              <div className="text-4xl font-bold text-white mb-2">1400+</div>
              <div className="text-white/80">施術実績</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
              <div className="text-4xl font-bold text-white mb-2">96.7%</div>
              <div className="text-white/80">改善実感率</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
              <div className="text-4xl font-bold text-white mb-2">1年3ヶ月</div>
              <div className="text-white/80">の実績</div>
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
  );
}