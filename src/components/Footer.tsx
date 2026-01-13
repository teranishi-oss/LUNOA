import React from 'react';
import { MapPin, Clock, Phone, Instagram } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#2E2E2E] text-[#FAFAF8] py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-16 mb-16">
          {/* 左：サロン情報 */}
          <div className="space-y-8">
            <div>
              <h3 className="mb-6">美容整体LUNOA</h3>
              <div className="space-y-4 text-[#FAFAF8]/70">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                  <div>
                    <p>東京都渋谷区道玄坂1-19-13</p>
                    <p>トップヒル並木5F</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  <p>03-6455-3271</p>
                </div>
                <div className="flex items-start space-x-3">
                  <Clock className="w-4 h-4 mt-1 flex-shrink-0" />
                  <div>
                    <p>10:00～21:00</p>
                    <p>定休日：不定休</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 中央：サイトマップ */}
          <div className="space-y-8">
            <h4>サイトマップ</h4>
            <nav className="space-y-4 text-[#FAFAF8]/70">
              <a href="#features" className="block hover:opacity-70 transition-opacity duration-200">特長</a>
              <a href="#menu" className="block hover:opacity-70 transition-opacity duration-200">施術メニュー</a>
              <a href="#results" className="block hover:opacity-70 transition-opacity duration-200">実績</a>
              <a href="#testimonials" className="block hover:opacity-70 transition-opacity duration-200">お客様の声</a>
              <a href="#access" className="block hover:opacity-70 transition-opacity duration-200">アクセス</a>
              <a href="#faq" className="block hover:opacity-70 transition-opacity duration-200">FAQ</a>
            </nav>
          </div>

          {/* 右：SNS・予約リンク */}
          <div className="space-y-8">
            <h4>ご予約・お問い合わせ</h4>
            <div className="space-y-6">
              <a
                href="https://duplicated-imdj.bolt.host/"
                target="_blank"
                rel="noopener noreferrer"
                className="block border border-[#B9A98A] text-[#FAFAF8] py-3 px-6 text-center hover:bg-[#B9A98A]/10 transition-all duration-200"
              >
                WEB予約
              </a>
            </div>

            {/* SNSリンク */}
            <div>
              <h5 className="mb-4">SNS</h5>
              <div className="flex space-x-4">
                <a
                  href="https://www.instagram.com/lunoa_biyouseitai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 border border-[#B9A98A] hover:bg-[#B9A98A]/10 flex items-center justify-center transition-all duration-200"
                >
                  <Instagram className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* コピーライト */}
        <div className="border-t border-[#FAFAF8]/20 pt-10 text-center text-[#FAFAF8]/50">
          <p>© 2024 LUNOA. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}