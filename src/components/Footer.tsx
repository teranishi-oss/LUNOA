import React from 'react';
import { Heart, Instagram, Facebook, Twitter, Mail } from 'lucide-react';

const socialLinks = [
  { icon: <Instagram className="w-5 h-5" />, href: "https://www.instagram.com/seitai_lunoa/", label: "Instagram" },
  { icon: <Facebook className="w-5 h-5" />, href: "#", label: "Facebook" },
  { icon: <Twitter className="w-5 h-5" />, href: "#", label: "Twitter" },
  { icon: <Mail className="w-5 h-5" />, href: "#", label: "Email" }
];

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-white to-gray-50 border-t border-gray-200 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          <div className="space-y-4 animate-appear">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/images/rogo.png" 
                alt="LUNOA Logo" 
                className="w-12 h-12 object-contain"
              />
              <h3 className="text-xl font-bold" style={{ color: '#f59e0b' }}>美容整体 LUNOA</h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              骨格・筋肉・内臓の歪みを根本から改善し、美しさと健康を同時に実現する整体サロンです。
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-gray-100 text-gray-600 rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-amber-500 hover:to-yellow-600 hover:text-white transition-all duration-300"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="animate-appear delay-100">
            <h4 className="text-lg font-semibold mb-4">サービス</h4>
            <ul className="space-y-2 text-gray-600">
              <li>姿勢矯正（猫背・巻き肩・反り腰）</li>
              <li>骨格矯正</li>
              <li>内臓調整</li>
              <li>足首矯正</li>
              <li>自律神経整体</li>
              <li>小顔矯正</li>
            </ul>
          </div>

          <div className="animate-appear delay-300">
            <h4 className="text-lg font-semibold mb-4">アクセス</h4>
            <ul className="space-y-2 text-gray-600">
              <li>〒150-0043</li>
              <li>東京都渋谷区道玄坂１丁目１９−１３</li>
              <li>トップヒル並木 5階</li>
              <li>090-3543-0588</li>
              <li>平日: 10:00-21:00</li>
              <li>土日: 10:00-19:00（定休日なし）</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 animate-appear delay-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              © 2025 美容整体 LUNOA. All rights reserved.
            </p>
            <div className="flex items-center space-x-1 text-gray-500 text-sm mt-4 md:mt-0">
              <span>美と健康への想いを込めて</span>
              <Heart className="w-4 h-4 fill-current" style={{ color: '#f59e0b' }} />
              <Heart className="w-4 h-4 fill-current" style={{ color: '#f59e0b' }} />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}