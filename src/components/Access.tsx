import React from 'react';
import { MapPin, Clock, Phone, Mail, Brain as Train } from 'lucide-react';

export function Access() {
  return (
    <section id="access" className="py-24 md:py-32 bg-[#FAFAF8]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="mb-6">
            アクセス
          </h2>
        </div>

        {/* 渋谷院 */}
        <div className="max-w-4xl mx-auto mb-16">
          <h3 className="text-center mb-10">渋谷院</h3>
          <div className="bg-[#F3F2EE] p-10">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <MapPin className="w-5 h-5 text-[#8F846B] mt-1 flex-shrink-0" />
                <div>
                  <h4 className="mb-2">住所</h4>
                  <p className="text-[#555555]">
                    東京都渋谷区道玄坂1-19-13<br />
                    トップヒル並木5F
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Train className="w-5 h-5 text-[#8F846B] mt-1 flex-shrink-0" />
                <div>
                  <h4 className="mb-2">アクセス</h4>
                  <p className="text-[#555555]">
                    渋谷駅ハチ公口から徒歩3分
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Clock className="w-5 h-5 text-[#8F846B] mt-1 flex-shrink-0" />
                <div>
                  <h4 className="mb-2">営業時間</h4>
                  <p className="text-[#555555]">
                    10:00～21:00<br />
                    定休日：不定休
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Phone className="w-5 h-5 text-[#8F846B] mt-1 flex-shrink-0" />
                <div>
                  <h4 className="mb-2">電話番号</h4>
                  <p className="text-[#555555]">
                    03-6455-3271
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Mail className="w-5 h-5 text-[#8F846B] mt-1 flex-shrink-0" />
                <div>
                  <h4 className="mb-2">メールアドレス</h4>
                  <p className="text-[#555555]">
                    seitai.lunoa@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 梅田院 */}
        <div className="max-w-4xl mx-auto mb-16">
          <h3 className="text-center mb-10">梅田院</h3>
          <div className="bg-[#F3F2EE] p-10">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <MapPin className="w-5 h-5 text-[#8F846B] mt-1 flex-shrink-0" />
                <div>
                  <h4 className="mb-2">住所</h4>
                  <p className="text-[#555555]">
                    大阪府大阪市北区太融寺町8-2<br />
                    梅田エーワンビル9階　902
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Train className="w-5 h-5 text-[#8F846B] mt-1 flex-shrink-0" />
                <div>
                  <h4 className="mb-2">アクセス</h4>
                  <p className="text-[#555555]">
                    梅田駅から徒歩圏内
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Clock className="w-5 h-5 text-[#8F846B] mt-1 flex-shrink-0" />
                <div>
                  <h4 className="mb-2">営業時間</h4>
                  <p className="text-[#555555]">
                    10:00～21:00<br />
                    定休日：不定休
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Mail className="w-5 h-5 text-[#8F846B] mt-1 flex-shrink-0" />
                <div>
                  <h4 className="mb-2">メールアドレス</h4>
                  <p className="text-[#555555]">
                    seitai.lunoa.umeda@gmail.com
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
            className="cta inline-flex items-center space-x-2"
          >
            <span>詳しい地図を見る</span>
          </a>
        </div>
      </div>
    </section>
  );
}