import React from 'react';
import { Heart } from 'lucide-react';

export function Services() {
  return (
    <section id="services" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-appear">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            施術メニュー
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            姿勢矯正(猫背、巻き肩、反り腰)、骨格矯正、内臓調整、足首矯正、自律神経整体、小顔矯正。
          </p>
        </div>

        {/* 料金プラン */}
        <div className="mt-16 animate-appear delay-1000">
          <h3 className="text-3xl font-bold text-gray-800 text-center mb-12">料金プラン</h3>
          
          {/* 都度払い料金 */}
          <div className="mb-16">
            <h4 className="text-2xl font-bold text-gray-800 text-center mb-8">都度払い料金</h4>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {/* 単発料金 */}
            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
              <h4 className="text-2xl font-bold text-gray-800 mb-4">通常価格</h4>
              <div className="text-4xl font-bold text-amber-600 mb-2">¥15,400</div>
              <div className="text-gray-600 mb-6">税込（約50分）</div>
              <ul className="text-left space-y-2 text-gray-600 mb-6">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-amber-400 rounded-full mr-3"></div>
                  初回カウンセリング込み
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-amber-400 rounded-full mr-3"></div>
                  全メニュー対応
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-amber-400 rounded-full mr-3"></div>
                  完全個室対応
                </li>
              </ul>
              <a 
                href="https://bookom.jp/reservation?company=69&course=1339&defaultLang=ja&shop=238"
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block w-full bg-gray-100 hover:bg-gradient-to-r hover:from-amber-500 hover:to-yellow-600 hover:text-white text-gray-700 font-semibold px-6 py-3 rounded-full transition-all duration-300 text-center no-underline"
              >
                予約する
              </a>
            </div>

            {/* 3回券 */}
            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
              <h4 className="text-2xl font-bold text-gray-800 mb-4">3回券</h4>
              <div className="text-4xl font-bold text-amber-600 mb-2">¥46,200</div>
              <div className="text-gray-600 mb-2">税込</div>
              <div className="text-sm text-gray-500 mb-6">¥15,400 × 3回</div>
              <ul className="text-left space-y-2 text-gray-600 mb-6">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-amber-400 rounded-full mr-3"></div>
                  短期集中コース
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-amber-400 rounded-full mr-3"></div>
                  有効期限6ヶ月
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-amber-400 rounded-full mr-3"></div>
                  初期改善に最適
                </li>
              </ul>
              <a 
                href="https://bookom.jp/reservation?company=69&course=1339&defaultLang=ja&shop=238"
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block w-full bg-gray-100 hover:bg-gradient-to-r hover:from-amber-500 hover:to-yellow-600 hover:text-white text-gray-700 font-semibold px-6 py-3 rounded-full transition-all duration-300 text-center no-underline"
              >
                予約する
              </a>
            </div>

            {/* 6回券 */}
            <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center border-2 border-amber-200">
              <div className="bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                おすすめ
              </div>
              <h4 className="text-2xl font-bold text-gray-800 mb-4">6回券</h4>
              <div className="text-4xl font-bold text-amber-600 mb-2">¥92,400</div>
              <div className="text-gray-600 mb-2">税込</div>
              <div className="text-sm text-gray-500 mb-6">¥15,400 × 6回</div>
              <ul className="text-left space-y-2 text-gray-600 mb-6">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-amber-400 rounded-full mr-3"></div>
                  継続改善コース
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-amber-400 rounded-full mr-3"></div>
                  有効期限6ヶ月
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-amber-400 rounded-full mr-3"></div>
                  根本改善に最適
                </li>
              </ul>
              <a 
                href="https://bookom.jp/reservation?company=69&course=1339&defaultLang=ja&shop=238"
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block w-full bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700 text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 text-center no-underline"
              >
                予約する
              </a>
            </div>

            {/* 9回券 */}
            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
              <h4 className="text-2xl font-bold text-gray-800 mb-4">9回券</h4>
              <div className="text-4xl font-bold text-amber-600 mb-2">¥138,600</div>
              <div className="text-gray-600 mb-2">税込</div>
              <div className="text-sm text-gray-500 mb-6">¥15,400 × 9回</div>
              <ul className="text-left space-y-2 text-gray-600 mb-6">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-amber-400 rounded-full mr-3"></div>
                  長期改善コース
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-amber-400 rounded-full mr-3"></div>
                  有効期限6ヶ月
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-amber-400 rounded-full mr-3"></div>
                  完全改善に最適
                </li>
              </ul>
              <a 
                href="https://bookom.jp/reservation?company=69&course=1339&defaultLang=ja&shop=238"
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block w-full bg-gray-100 hover:bg-gradient-to-r hover:from-amber-500 hover:to-yellow-600 hover:text-white text-gray-700 font-semibold px-6 py-3 rounded-full transition-all duration-300 text-center no-underline"
              >
                予約する
              </a>
            </div>
          </div>
          </div>
          
          {/* サブスクプラン */}
          <div className="mb-16">
            <h4 className="text-2xl font-bold text-gray-800 text-center mb-4">サブスクプラン（月々払い）</h4>
            <p className="text-center text-gray-600 mb-8">MONTHLY COURSE PRICE LIST</p>
            
            {/* 特典 */}
            <div className="bg-gradient-to-r from-amber-50 to-yellow-50 rounded-3xl p-6 mb-8 max-w-4xl mx-auto">
              <h5 className="text-xl font-bold text-gray-800 mb-4 text-center">会員特典</h5>
              <div className="grid md:grid-cols-3 gap-4 text-center">
                <div className="flex items-center justify-center">
                  <div className="w-2 h-2 bg-amber-400 rounded-full mr-2"></div>
                  <span className="text-gray-700">入会金無料</span>
                </div>
                <div className="flex items-center justify-center">
                  <div className="w-2 h-2 bg-amber-400 rounded-full mr-2"></div>
                  <span className="text-gray-700">誕生日月+1回無料</span>
                </div>
                <div className="flex items-center justify-center">
                  <div className="w-2 h-2 bg-amber-400 rounded-full mr-2"></div>
                  <span className="text-gray-700">4ヶ月毎オプション無料</span>
                </div>
              </div>
              <p className="text-center text-gray-600 mt-4">会員の方は都度コースと同額で受けられます。</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {/* COURSE 01 月1回 */}
              <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <h5 className="text-xl font-bold text-gray-800 mb-4 text-center">COURSE 01</h5>
                <p className="text-center text-gray-600 mb-6">月1回</p>
                
                <div className="space-y-4 mb-6">
                  <div className="border-b border-gray-100 pb-4">
                    <div className="text-lg font-semibold text-gray-800">1メニュー</div>
                    <div className="text-2xl font-bold text-amber-600">¥11,000</div>
                    <div className="text-sm text-gray-500">¥11,000×1回</div>
                  </div>
                  <div>
                    <div className="text-lg font-semibold text-gray-800">Quick付き</div>
                    <div className="text-2xl font-bold text-amber-600">¥15,400</div>
                    <div className="text-sm text-gray-500">¥15,400×1回</div>
                  </div>
                </div>
                
                <a 
                  href="https://bookom.jp/reservation?company=69&course=1339&defaultLang=ja&shop=238"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block w-full bg-gray-100 hover:bg-gradient-to-r hover:from-amber-500 hover:to-yellow-600 hover:text-white text-gray-700 font-semibold px-6 py-3 rounded-full transition-all duration-300 text-center no-underline"
                >
                  申し込む
                </a>
              </div>
              
              {/* COURSE 02 月2回 */}
              <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-amber-200">
                <div className="bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  人気
                </div>
                <h5 className="text-xl font-bold text-gray-800 mb-4 text-center">COURSE 02</h5>
                <p className="text-center text-gray-600 mb-6">月2回</p>
                
                <div className="space-y-4 mb-6">
                  <div className="border-b border-gray-100 pb-4">
                    <div className="text-lg font-semibold text-gray-800">1メニュー</div>
                    <div className="text-2xl font-bold text-amber-600">¥20,900</div>
                    <div className="text-sm text-gray-500">¥10,450×2回</div>
                  </div>
                  <div>
                    <div className="text-lg font-semibold text-gray-800">Quick付き</div>
                    <div className="text-2xl font-bold text-amber-600">¥29,260</div>
                    <div className="text-sm text-gray-500">¥14,630×2回</div>
                  </div>
                </div>
                
                <a 
                  href="https://bookom.jp/reservation?company=69&course=1339&defaultLang=ja&shop=238"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block w-full bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700 text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 text-center no-underline"
                >
                  申し込む
                </a>
              </div>
              
              {/* COURSE 03 月4回 */}
              <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <h5 className="text-xl font-bold text-gray-800 mb-4 text-center">COURSE 03</h5>
                <p className="text-center text-gray-600 mb-6">月4回</p>
                
                <div className="space-y-4 mb-6">
                  <div className="border-b border-gray-100 pb-4">
                    <div className="text-lg font-semibold text-gray-800">1メニュー</div>
                    <div className="text-2xl font-bold text-amber-600">¥37,400</div>
                    <div className="text-sm text-gray-500">¥9,350×4回</div>
                  </div>
                  <div>
                    <div className="text-lg font-semibold text-gray-800">Quick付き</div>
                    <div className="text-2xl font-bold text-amber-600">¥52,360</div>
                    <div className="text-sm text-gray-500">¥13,090×4回</div>
                  </div>
                </div>
                
                <a 
                  href="https://bookom.jp/reservation?company=69&course=1339&defaultLang=ja&shop=238"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block w-full bg-gray-100 hover:bg-gradient-to-r hover:from-amber-500 hover:to-yellow-600 hover:text-white text-gray-700 font-semibold px-6 py-3 rounded-full transition-all duration-300 text-center no-underline"
                >
                  申し込む
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}