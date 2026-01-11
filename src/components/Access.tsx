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

        {/* 渋谷院 */}
        <div className="max-w-6xl mx-auto mb-16">
          <h3 className="text-3xl font-bold text-[#2C2C2C] mb-8 text-center">渋谷院</h3>
          <div className="grid lg:grid-cols-2 gap-8">
            {/* 左側：サロン情報 */}
            <div>
              <div className="bg-white rounded-2xl p-8 shadow-lg h-full">
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
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden h-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.5678901234567!2d139.6936093!3d35.657223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188b71b35f360f%3A0x34bf3f05223d81b9!2z576O5a655pW05L2TTE5OT0GjgJDjg6vjg47jgqLjgJHmuIvos7fpmKg!5e0!3m2!1sja!2sjp!4v1234567890123!5m2!1sja!2sjp"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '400px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="美容整体LUNOA 渋谷院の地図"
              />
            </div>
          </div>
        </div>

        {/* 梅田院 */}
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-[#2C2C2C] mb-8 text-center">梅田院</h3>
          <div className="grid lg:grid-cols-2 gap-8">
            {/* 左側：サロン情報 */}
            <div>
              <div className="bg-white rounded-2xl p-8 shadow-lg h-full">
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <MapPin className="w-6 h-6 text-[#D4AF37] mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-[#2C2C2C] mb-1">住所</h4>
                      <p className="text-[#2C2C2C]/70">
                        大阪府大阪市北区太融寺町8-2<br />
                        梅田エーワンビル9階　902
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Train className="w-6 h-6 text-[#D4AF37] mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-[#2C2C2C] mb-1">アクセス</h4>
                      <p className="text-[#2C2C2C]/70">
                        梅田駅から徒歩圏内
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
                        090-4331-6914
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 右側：Googleマップ */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden h-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3280.0!2d135.495!3d34.703!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDQyJzEwLjgiTiAxMzXCsDI5JzQyLjAiRQ!5e0!3m2!1sja!2sjp!4v1234567890123!5m2!1sja!2sjp"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '400px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="美容整体LUNOA 梅田院の地図"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}