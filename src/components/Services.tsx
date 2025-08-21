import React from 'react';

export function Services() {
  return (
    <section id="services" className="py-16 md:py-24" style={{ backgroundColor: '#F8F4E9' }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-appear">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-400 mb-6 font-handwriting">
            施術メニュー・料金
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            姿勢矯正(猫背、巻き肩、反り腰)、骨格矯正、内臓調整、足首矯正、自律神経整体、小顔矯正。
            お客様の状態に合わせた最適な施術をご提供いたします。
          </p>
        </div>

        {/* 都度払い料金 */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-slate-400 text-center mb-12 font-heading">都度払い料金</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            
            {/* 通常価格 */}
            <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-md transition-all duration-300 text-center border border-gold-200">
              <h4 className="text-2xl font-bold text-slate-400 mb-4">通常価格</h4>
              <div className="text-4xl font-bold mb-2 text-orange-300">¥15,400</div>
              <div className="text-gray-400 mb-6">税込（約50分）</div>
              <ul className="text-left space-y-2 text-gray-400 mb-6">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-orange-300 rounded-full mr-3"></div>
                  初回カウンセリング込み
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-orange-300 rounded-full mr-3"></div>
                  全メニュー対応
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-orange-300 rounded-full mr-3"></div>
                  完全個室対応
                </li>
              </ul>
              <a 
                href="https://bookom.jp/reservation?company=69&course=1339&defaultLang=ja&shop=238"
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block w-full bg-gray-100 hover:bg-gradient-to-r hover:from-orange-300 hover:to-orange-400 hover:text-white text-gray-400 font-semibold px-6 py-3 rounded-full transition-all duration-300 text-center no-underline"
              >
                予約する
              </a>
            </div>

            {/* 3回券 */}
            <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-md transition-all duration-300 text-center border border-gold-100">
              <h4 className="text-2xl font-bold text-slate-400 mb-4">3回券</h4>
              <div className="text-4xl font-bold mb-2 text-orange-300">¥46,200</div>
              <div className="text-gray-400 mb-2">税込</div>
              <div className="text-sm text-gray-400 mb-6">¥15,400 × 3回</div>
              <ul className="text-left space-y-2 text-gray-400 mb-6">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-orange-300 rounded-full mr-3"></div>
                  短期集中コース
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-orange-300 rounded-full mr-3"></div>
                  有効期限6ヶ月
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-orange-300 rounded-full mr-3"></div>
                  初期改善に最適
                </li>
              </ul>
              <a 
                href="https://bookom.jp/reservation?company=69&course=1339&defaultLang=ja&shop=238"
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block w-full bg-gray-100 hover:bg-gradient-to-r hover:from-orange-300 hover:to-orange-400 hover:text-white text-gray-400 font-semibold px-6 py-3 rounded-full transition-all duration-300 text-center no-underline"
              >
                予約する
              </a>
            </div>

            {/* 6回券 - おすすめ */}
            <div className="bg-gradient-to-br from-amber-50 to-white rounded-3xl p-8 shadow-md hover:shadow-lg transition-all duration-300 text-center border-2 border-amber-200 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-amber-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                おすすめ
              </div>
              <h4 className="text-2xl font-bold text-slate-400 mb-4">6回券</h4>
              <div className="text-4xl font-bold mb-2 text-orange-300">¥92,400</div>
              <div className="text-gray-400 mb-2">税込</div>
              <div className="text-sm text-gray-400 mb-6">¥15,400 × 6回</div>
              <ul className="text-left space-y-2 text-gray-400 mb-6">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-orange-300 rounded-full mr-3"></div>
                  継続改善コース
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-orange-300 rounded-full mr-3"></div>
                  有効期限6ヶ月
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-orange-300 rounded-full mr-3"></div>
                  根本改善に最適
                </li>
              </ul>
              <a 
                href="https://bookom.jp/reservation?company=69&course=1339&defaultLang=ja&shop=238"
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block w-full font-semibold px-6 py-3 rounded-full transition-all duration-300 text-center no-underline"
                style={{ background: 'linear-gradient(135deg, #d2b48c, #deb887)', color: 'white' }}
              >
                予約する
              </a>
            </div>

            {/* 9回券 */}
            <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-md transition-all duration-300 text-center border border-gold-100">
              <h4 className="text-2xl font-bold text-slate-400 mb-4">9回券</h4>
              <div className="text-4xl font-bold mb-2 text-orange-300">¥138,600</div>
              <div className="text-gray-400 mb-2">税込</div>
              <div className="text-sm text-gray-400 mb-6">¥15,400 × 9回</div>
              <ul className="text-left space-y-2 text-gray-400 mb-6">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-orange-300 rounded-full mr-3"></div>
                  長期改善コース
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-orange-300 rounded-full mr-3"></div>
                  有効期限6ヶ月
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-orange-300 rounded-full mr-3"></div>
                  完全改善に最適
                </li>
              </ul>
              <a 
                href="https://bookom.jp/reservation?company=69&course=1339&defaultLang=ja&shop=238"
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block w-full bg-gray-100 hover:bg-gradient-to-r hover:from-orange-300 hover:to-orange-400 hover:text-white text-gray-400 font-semibold px-6 py-3 rounded-full transition-all duration-300 text-center no-underline"
              >
                予約する
              </a>
            </div>
          </div>
        </div>

        {/* 定期プラン */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-slate-400 text-center mb-6 font-heading">会員 月々払い</h3>
          <h4 className="text-xl font-bold text-slate-400 text-center mb-8 font-handwriting">MONTHLY COURSE PRICE LIST</h4>
          
          {/* 特典セクション */}
          <div className="bg-gradient-to-br from-white to-gold-50 rounded-3xl p-8 shadow-lg max-w-4xl mx-auto mb-8 border border-gold-200">
            <h4 className="text-2xl font-bold text-slate-400 text-center mb-6 font-heading">特典</h4>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="bg-white rounded-2xl p-6 shadow-md">
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ background: 'linear-gradient(135deg, #f59e0b, #eab308)' }}
                >
                  <span className="text-white font-bold text-lg">無料</span>
                </div>
                <h5 className="font-bold text-slate-400 mb-2">入会金無料</h5>
                <p className="text-gray-400 text-sm">初期費用なしで始められます</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-md">
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ background: 'linear-gradient(135deg, #f59e0b, #eab308)' }}
                >
                  <span className="text-white font-bold text-lg">🎂</span>
                </div>
                <h5 className="font-bold text-slate-400 mb-2">誕生日月＋1回無料</h5>
                <p className="text-gray-400 text-sm">お誕生日月は追加施術1回プレゼント</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-md">
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ background: 'linear-gradient(135deg, #f59e0b, #eab308)' }}
                >
                  <span className="text-white font-bold text-lg">✨</span>
                </div>
                <h5 className="font-bold text-slate-400 mb-2">4ヶ月毎オプション無料</h5>
                <p className="text-gray-400 text-sm">継続特典でオプション施術が無料</p>
              </div>
            </div>
          </div>

          {/* 案内文 */}
          <div className="text-center mb-8">
            <p className="text-lg text-gray-400 bg-white rounded-2xl p-6 shadow-md max-w-2xl mx-auto">
              会員の方は都度コースと同額で受けられます。
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            
            {/* COURSE 01 */}
            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
              <div className="bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                COURSE 01
              </div>
              <h4 className="text-2xl font-bold text-slate-400 mb-4">月1回（月々払い）</h4>
              <div className="space-y-3 mb-6">
                <div className="text-lg font-semibold text-slate-400">1メニュー通常価格</div>
                <div className="text-3xl font-bold text-orange-300">¥11,000</div>
                <div className="text-sm text-gray-400">¥11,000×1回</div>
                <div className="border-t border-gray-200 pt-3 mt-3">
                <div className="text-lg font-semibold text-slate-400">オプション付き価格</div>
                <div className="text-3xl font-bold text-orange-300">¥15,400</div>
                <div className="text-sm text-gray-400">¥15,400×1回</div>
                </div>
              </div>
              <ul className="text-left space-y-2 text-gray-400 mb-6">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-orange-300 rounded-full mr-3"></div>
                  月1回の定期施術
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-orange-300 rounded-full mr-3"></div>
                  会員特典適用
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-orange-300 rounded-full mr-3"></div>
                  予約優先権
                </li>
              </ul>
              <a 
                href="https://bookom.jp/reservation?company=69&course=1339&defaultLang=ja&shop=238"
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block w-full bg-gray-100 hover:bg-gradient-to-r hover:from-orange-300 hover:to-orange-400 hover:text-white text-gray-400 font-semibold px-6 py-3 rounded-full transition-all duration-300 text-center no-underline"
              >
                予約する
              </a>
            </div>

            {/* COURSE 02 - おすすめ */}
            <div className="bg-gradient-to-br from-amber-50 to-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center border-2 border-amber-200 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-amber-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                おすすめ
              </div>
              <div className="bg-gold-100 text-gold-700 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                COURSE 02
              </div>
              <h4 className="text-2xl font-bold text-slate-400 mb-4">月2回（月々払い）</h4>
              <div className="space-y-3 mb-6">
                <div className="text-lg font-semibold text-slate-400">1メニュー通常価格</div>
                <div className="text-3xl font-bold text-orange-300">¥20,900</div>
                <div className="text-sm text-gray-400">¥10,450×2回</div>
                <div className="border-t border-gray-200 pt-3 mt-3">
                <div className="text-lg font-semibold text-slate-400">オプション付き価格</div>
                <div className="text-3xl font-bold text-orange-300">¥29,260</div>
                <div className="text-sm text-gray-400">¥14,630×2回</div>
                </div>
              </div>
              <ul className="text-left space-y-2 text-gray-400 mb-6">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-orange-300 rounded-full mr-3"></div>
                  月2回の定期施術
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-orange-300 rounded-full mr-3"></div>
                  会員特典適用
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-orange-300 rounded-full mr-3"></div>
                  予約優先権
                </li>
              </ul>
              <a 
                href="https://bookom.jp/reservation?company=69&course=1339&defaultLang=ja&shop=238"
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block w-full font-semibold px-6 py-3 rounded-full transition-all duration-300 text-center no-underline"
                style={{ background: 'linear-gradient(135deg, #d2b48c, #deb887)', color: 'white' }}
              >
                予約する
              </a>
            </div>

            {/* COURSE 03 */}
            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
              <div className="bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                COURSE 03
              </div>
              <h4 className="text-2xl font-bold text-slate-400 mb-4">月4回（月々払い）</h4>
              <div className="space-y-3 mb-6">
                <div className="text-lg font-semibold text-slate-400">1メニュー通常価格</div>
                <div className="text-3xl font-bold text-orange-300">¥37,400</div>
                <div className="text-sm text-gray-400">¥9,350×4回</div>
                <div className="border-t border-gray-200 pt-3 mt-3">
                <div className="text-lg font-semibold text-slate-400">オプション付き価格</div>
                <div className="text-3xl font-bold text-orange-300">¥52,360</div>
                <div className="text-sm text-gray-400">¥13,090×4回</div>
                </div>
              </div>
              <ul className="text-left space-y-2 text-gray-400 mb-6">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-orange-300 rounded-full mr-3"></div>
                  月4回の定期施術
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-orange-300 rounded-full mr-3"></div>
                  会員特典適用
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-orange-300 rounded-full mr-3"></div>
                  予約優先権
                </li>
              </ul>
              <a 
                href="https://bookom.jp/reservation?company=69&course=1339&defaultLang=ja&shop=238"
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block w-full bg-gray-100 hover:bg-gradient-to-r hover:from-orange-300 hover:to-orange-400 hover:text-white text-gray-400 font-semibold px-6 py-3 rounded-full transition-all duration-300 text-center no-underline"
              >
                予約する
              </a>
            </div>
          </div>
        </div>

        {/* 期待できる効果 */}
        <div className="text-center mt-16 animate-appear delay-1000">
          <div className="bg-white rounded-3xl p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-slate-400 mb-6">期待できる効果</h3>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div>
                <h4 className="text-xl font-semibold mb-3 text-orange-300">美容効果</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>• くびれ・下っ腹改善</li>
                  <li>• 肩の盛り上がり改善</li>
                  <li>• 太もも痩せ・ダイエット</li>
                  <li>• 二の腕痩せ・代謝UP</li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-3 text-orange-300">健康効果</h4>
                <ul className="space-y-2 text-gray-400">
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