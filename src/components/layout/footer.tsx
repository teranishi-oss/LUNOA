import React from 'react';
import { Heart, Instagram, Facebook, Twitter, Mail } from 'lucide-react';
import { Icons } from '../ui/icons';

const footerLinks = {
  company: [
    { name: "院について", href: "#" },
    { name: "スタッフ紹介", href: "#" },
    { name: "施術の流れ", href: "#" },
    { name: "お問い合わせ", href: "#" }
  ]
};

const socialLinks = [
  { icon: <Instagram className="w-5 h-5" />, href: "https://www.instagram.com/seitai_lunoa/", label: "Instagram" },
  { icon: <Facebook className="w-5 h-5" />, href: "#", label: "Facebook" },
  { icon: <Twitter className="w-5 h-5" />, href: "#", label: "Twitter" },
  { icon: <Mail className="w-5 h-5" />, href: "#", label: "Email" }
];

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4 animate-appear">
            <div className="flex items-center space-x-3">
              <img 
                src="/LUNOA/LINE_ALBUM_ロゴ_250817_1 copy copy.jpg" 
                alt="LUNOA Logo" 
                className="w-10 h-10 object-contain"
              />
              <h3 className="text-xl font-bold">美容整体 LUNOA</h3>
            </div>
            <p className="text-gray-400 leading-relaxed">
              骨格・筋肉・内臓の歪みを根本から改善し、美しさと健康を同時に実現する整体サロンです。
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-amber-500 transition-colors"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="animate-appear delay-100">
            <h4 className="text-lg font-semibold mb-4">会社情報</h4>
            <ul className="space-y-2 text-gray-400">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="hover:text-amber-400 transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="animate-appear delay-300">
            <h4 className="text-lg font-semibold mb-4">アクセス</h4>
            <ul className="space-y-2 text-gray-400">
              <li>〒150-0043</li>
              <li>東京都渋谷区道玄坂１丁目１９−１３</li>
              <li>トップヒル並木 5階</li>
              <li>090-3543-0588</li>
              <li>平日: 10:00-21:00</li>
              <li>土日: 10:00-19:00（定休日なし）</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 animate-appear delay-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 美容整体 LUNOA. All rights reserved.
            </p>
            <div className="flex items-center space-x-1 text-gray-400 text-sm mt-4 md:mt-0">
              <span>美と健康への想いを込めて</span>
              <Heart className="w-4 h-4 text-amber-500 fill-current" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}