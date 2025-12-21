import React from 'react';
import { MapPin, Clock, Phone, Brain as Train } from 'lucide-react';

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
          <div>
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
                      03-6455-3271
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 右側：Googleマップ */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.5678901234567!2d139.6936093!3d35.657223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188b71b35f360f%3A0x34bf3f05223d81b9!2z576O5a655pW05L2TTE5OT0GjgJDjg6vjg47jgqLjgJHmuIvos7fpmKg!5e0!3m2!1sja!2sjp!4v1234567890123!5m2!1sja!2sjp"
              width="100%"
              height="500"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="美容整体LUNOAの地図"
            />
          </div>
        </div>
      </div>
    </section>
  );
}