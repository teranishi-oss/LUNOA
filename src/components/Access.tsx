import React from 'react';
import { MapPin, Clock, Phone, Train } from 'lucide-react';

export function Access() {
  return (
    <section id="access" className="py-16 md:py-24 bg-gradient-to-br from-[#FAF9F6] to-[#F5F5F5]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#2C2C2C] mb-6">
            アクセス
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* 左側：サロン情報 */}
          <div className="space-y-8">
            {/* サロン情報カード */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-[#2C2C2C] mb-6">美容整体LUNOA</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-[#D4AF37] mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-[#2C2C2C] mb-1">住所</h4>
                    <p className="text-[#2C2C2C]/70">
                      東京都渋谷区道玄坂1-19-13<br />
                      トップヒル並木5F
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Train className="w-6 h-6 text-[#D4AF37] mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-[#2C2C2C] mb-1">アクセス</h4>
                    <p className="text-[#2C2C2C]/70">
                      渋谷駅ハチ公口から徒歩3分
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="w-6 h-6 text-[#D4AF37] mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-[#2C2C2C] mb-1">営業時間</h4>
                    <p className="text-[#2C2C2C]/70">
                      10:00～21:00<br />
                      定休日：不定休
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-[#D4AF37] mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-[#2C2C2C] mb-1">電話番号</h4>
                    <p className="text-[#2C2C2C]/70">
                      03-XXXX-XXXX
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 受付画像 */}
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img 
                src="/images/reception-area.jpg" 
                alt="LUNOA受付エリア" 
                className="w-full h-64 object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = 'https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg';
                }}
              />
            </div>
          </div>

          {/* 右側：Googleマップ */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="h-96 lg:h-full min-h-[400px] bg-gray-200 flex items-center justify-center">
              {/* Googleマップ埋め込み予定地 */}
              <div className="text-center text-[#2C2C2C]/50">
                <MapPin className="w-16 h-16 mx-auto mb-4" />
                <p className="text-lg font-medium">Googleマップ</p>
                <p className="text-sm">（後日埋め込み予定）</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}