import React from 'react';
import { MapPin, Clock, Phone, Instagram, Twitter, Facebook } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#2C2C2C] text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* 左：サロン情報 */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-4">美容整体LUNOA</h3>
              <div className="space-y-3 text-white/80">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                  <div>
                    <p>東京都渋谷区道玄坂1-19-13</p>
                    <p>トップヒル並木5F</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 flex-shrink-0" />
                  <p>03-XXXX-XXXX</p>
                </div>
                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 mt-1 flex-shrink-0" />
                  <div>
                    <p>10:00～21:00</p>
                    <p>定休日：不定休</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 中央：サイトマップ */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold">サイトマップ</h4>
            <nav className="space-y-3 text-white/80">
              <a href="#features" className="block hover:text-[#D4AF37] transition-colors duration-200">特長</a>
              <a href="#menu" className="block hover:text-[#D4AF37] transition-colors duration-200">施術メニュー</a>
              <a href="#results" className="block hover:text-[#D4AF37] transition-colors duration-200">実績</a>
              <a href="#testimonials" className="block hover:text-[#D4AF37] transition-colors duration-200">お客様の声</a>
              <a href="#access" className="block hover:text-[#D4AF37] transition-colors duration-200">アクセス</a>
              <a href="#faq" className="block hover:text-[#D4AF37] transition-colors duration-200">FAQ</a>
            </nav>
          </div>

          {/* 右：SNS・予約リンク */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold">ご予約・お問い合わせ</h4>
            <div className="space-y-4">
              <a 
                href="#booking"
                className="block bg-[#D4AF37] hover:bg-[#B8941F] text-white font-bold py-3 px-6 rounded-xl text-center transition-all duration-200"
              >
                WEB予約
              </a>
              <a 
                href="#line"
                className="block bg-white/10 hover:bg-white/20 text-white font-bold py-3 px-6 rounded-xl text-center transition-all duration-200"
              >
                LINE相談
              </a>
            </div>

            {/* SNSリンク */}
            <div>
              <h5 className="font-bold mb-3">SNS</h5>
              <div className="flex space-x-4">
                <a 
                  href="#instagram" 
                  className="w-10 h-10 bg-white/10 hover:bg-[#D4AF37] rounded-full flex items-center justify-center transition-all duration-200"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a 
                  href="#twitter" 
                  className="w-10 h-10 bg-white/10 hover:bg-[#D4AF37] rounded-full flex items-center justify-center transition-all duration-200"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a 
                  href="#facebook" 
                  className="w-10 h-10 bg-white/10 hover:bg-[#D4AF37] rounded-full flex items-center justify-center transition-all duration-200"
                >
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* コピーライト */}
        <div className="border-t border-white/20 pt-8 text-center text-white/60">
          <p>© 2024 LUNOA. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}