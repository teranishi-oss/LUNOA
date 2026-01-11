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
        <div className="max-w-4xl mx-auto mb-12">
          <h3 className="text-3xl font-bold text-[#2C2C2C] mb-8 text-center">渋谷院</h3>
          <div className="bg-white rounded-2xl p-8 shadow-lg">
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

        {/* 梅田院 */}
        <div className="max-w-4xl mx-auto mb-12">
          <h3 className="text-3xl font-bold text-[#2C2C2C] mb-8 text-center">梅田院</h3>
          <div className="bg-white rounded-2xl p-8 shadow-lg">
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

        <div className="text-center">
          <a
            href="https://duplicated-imdj.bolt.host/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#D4AF37] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#C4A037] transition-colors duration-300 shadow-lg"
          >
            詳しい地図を見る
          </a>
        </div>
      </div>
    </section>
  );
}