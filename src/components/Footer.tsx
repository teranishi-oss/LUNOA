import React from 'react';
import { Heart, Instagram, Facebook, Twitter, Youtube, MapPin, Phone, Clock, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* ブランド情報 */}
          <div className="space-y-6 animate-appear">
            <div className="flex items-center space-x-3">
              <img 
                src="/images/rogo.png" 
                alt="LUNOA ロゴ" 
                className="h-12 w-auto"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const fallback = target.nextElementSibling as HTMLElement;
                  if (fallback) fallback.style.display = 'block';
                }}
              />
              <h3 className="text-2xl font-bold text-orange-300" style={{ display: 'none' }}>
                美容整体 LUNOA
              </h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              骨格・筋肉・内臓の歪みを根本から改善し、美しさと健康を同時に実現する整体サロンです。
              心身ともにリフレッシュできる空間をご提供いたします。
            </p>
            
            {/* SNSアイコン */}
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-200"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-200"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-200"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-200"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* サービス */}
          <div className="animate-appear delay-100">
            <h4 className="text-xl font-bold mb-6 text-orange-300">サービス</h4>
            <ul className="space-y-3 text-gray-300">
              <li className="hover:text-orange-300 transition-colors duration-200 cursor-pointer">
                姿勢矯正（猫背・巻き肩・反り腰）
              </li>
              <li className="hover:text-orange-300 transition-colors duration-200 cursor-pointer">
                骨格矯正
              </li>
              <li className="hover:text-orange-300 transition-colors duration-200 cursor-pointer">
                内臓調整
              </li>
              <li className="hover:text-orange-300 transition-colors duration-200 cursor-pointer">
                足首矯正
              </li>
              <li className="hover:text-orange-300 transition-colors duration-200 cursor-pointer">
                自律神経整体
              </li>
              <li className="hover:text-orange-300 transition-colors duration-200 cursor-pointer">
                小顔矯正
              </li>
            </ul>
          </div>

          {/* アクセス情報 */}
          <div className="animate-appear delay-200">
            <h4 className="text-xl font-bold mb-6 text-orange-300">アクセス</h4>
            <div className="space-y-4 text-gray-300">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-orange-400 mt-1 flex-shrink-0" />
                <div>
                  <p>〒150-0043</p>
                  <p>東京都渋谷区道玄坂１丁目１９−１３</p>
                  <p>トップヒル並木 5階</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-orange-400 flex-shrink-0" />
                <a href="tel:090-3543-0588" className="hover:text-orange-300 transition-colors duration-200">
                  090-3543-0588
                </a>
              </div>
              
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-orange-400 mt-1 flex-shrink-0" />
                <div>
                  <p>平日: 10:00-21:00</p>
                  <p>土日: 10:00-19:00</p>
                  <p className="text-orange-300 font-medium">定休日なし</p>
                </div>
              </div>
            </div>
          </div>

          {/* お問い合わせ */}
          <div className="animate-appear delay-300">
            <h4 className="text-xl font-bold mb-6 text-orange-300">お問い合わせ</h4>
            <div className="space-y-4">
              <a 
                href="https://beauty.hotpepper.jp/CSP/kr/reserve/?storeId=H000777760"
                target="_blank" 
                rel="noopener noreferrer"
                className="block bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 text-center"
              >
                オンライン予約
              </a>
              
              <a 
                href="https://website-recreation-f-3nce.bolt.host/"
                target="_blank" 
                rel="noopener noreferrer"
                className="block bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 text-center"
              >
                求人情報
              </a>
              
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="w-5 h-5 text-orange-400 flex-shrink-0" />
                <span className="text-sm">お問い合わせフォームは上記よりご利用ください</span>
              </div>
            </div>
          </div>
        </div>

        {/* 法的情報 */}
        <div className="border-t border-gray-700 pt-8 animate-appear delay-500">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-wrap justify-center md:justify-start space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-orange-300 transition-colors duration-200">利用規約</a>
              <a href="#" className="hover:text-orange-300 transition-colors duration-200">プライバシーポリシー</a>
              <a href="#" className="hover:text-orange-300 transition-colors duration-200">特定商取引法に基づく表記</a>
              <a href="#" className="hover:text-orange-300 transition-colors duration-200">サイトマップ</a>
            </div>
            
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span>美と健康への想いを込めて</span>
              <Heart className="w-4 h-4 fill-current text-orange-400" />
              <Heart className="w-4 h-4 fill-current text-orange-400" />
            </div>
          </div>
          
          <div className="text-center mt-6 text-gray-500 text-sm">
            <p>© 2025 美容整体 LUNOA. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}