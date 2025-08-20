import React from 'react';

export function Services() {
  return (
    <section id="services" className="py-16 md:py-24 bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-appear">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6 font-handwriting">
            施術メニュー・料金
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            姿勢矯正(猫背、巻き肩、反り腰)、骨格矯正、内臓調整、足首矯正、自律神経整体、小顔矯正。
            お客様の状態に合わせた最適な施術をご提供いたします。
          </p>
        </div>

        {/* 都度払い料金 */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-800 text-center mb-12 font-heading">都度払い料金</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            
            {/* 通常価格 */}
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

            {/* 6回券 - おすすめ */}
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

        {/* 定期プラン */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-800 text-center mb-12 font-heading">定期プラン</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            
            {/* 月2回プラン */}
            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
              <h4 className="text-2xl font-bold text-gray-800 mb-4">月2回プラン</h4>
              <div className="text-4xl font-bold text-amber-600 mb-2">¥30,800</div>
              <div className="text-gray-600 mb-2">税込 / 月</div>
              <div className="text-sm text-gray-500 mb-6">¥15,400 × 2回</div>
              <ul className="text-left space-y-2 text-gray-600 mb-6">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-amber-400 rounded-full mr-3"></div>
                  月2回の定期施術
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-amber-400 rounded-full mr-3"></div>
                  継続的な体調管理
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-amber-400 rounded-full mr-3"></div>
                  予約優先権
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

            {/* 月3回プラン - おすすめ */}
            <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center border-2 border-amber-200">
              <div className="bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                おすすめ
              </div>
              <h4 className="text-2xl font-bold text-gray-800 mb-4">月3回プラン</h4>
              <div className="text-4xl font-bold text-amber-600 mb-2">¥46,200</div>
              <div className="text-gray-600 mb-2">税込 / 月</div>
              <div className="text-sm text-gray-500 mb-6">¥15,400 × 3回</div>
              <ul className="text-left space-y-2 text-gray-600 mb-6">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-amber-400 rounded-full mr-3"></div>
                  月3回の定期施術
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-amber-400 rounded-full mr-3"></div>
                  最適な改善ペース
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-amber-400 rounded-full mr-3"></div>
                  予約優先権
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

            {/* 月4回プラン */}
            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
              <h4 className="text-2xl font-bold text-gray-800 mb-4">月4回プラン</h4>
              <div className="text-4xl font-bold text-amber-600 mb-2">¥61,600</div>
              <div className="text-gray-600 mb-2">税込 / 月</div>
              <div className="text-sm text-gray-500 mb-6">¥15,400 × 4回</div>
              <ul className="text-left space-y-2 text-gray-600 mb-6">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-amber-400 rounded-full mr-3"></div>
                  月4回の集中施術
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-amber-400 rounded-full mr-3"></div>
                  短期集中改善
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-amber-400 rounded-full mr-3"></div>
                  予約優先権
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

        {/* 期待できる効果 */}
        <div className="text-center mt-16 animate-appear delay-1000">
          <div className="bg-white rounded-3xl p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-gray-800 mb-6">期待できる効果</h3>
            <h3 className="text-3xl font-bold text-gray-800 mb-6 font-heading">期待できる効果</h3>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div>
                <h4 className="text-xl font-semibold text-amber-600 mb-3">美容効果</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• くびれ・下っ腹改善</li>
                  <li>• 肩の盛り上がり改善</li>
                  <li>• 太もも痩せ・ダイエット</li>
                  <li>• 二の腕痩せ・代謝UP</li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-amber-600 mb-3">健康効果</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• 首肩こり・腰痛の改善</li>
                  <li>• 頭痛の改善</li>
                  <li>• 痺れ・眼精疲労の改善</li>
                  <li>• 睡眠の質向上</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}