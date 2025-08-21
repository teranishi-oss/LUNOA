import React from 'react';
import { Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-gray-200 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          <div className="space-y-4 animate-appear">
            <h3 className="text-xl font-bold text-orange-300 mb-4">美容整体 LUNOA</h3>
            <p className="text-gray-400 leading-relaxed">
              骨格・筋肉・内臓の歪みを根本から改善し、美しさと健康を同時に実現する整体サロンです。
            </p>
          </div>

          <div className="animate-appear delay-100">
            <h4 className="text-lg font-semibold mb-4 text-gray-600">サービス</h4>
            <ul className="space-y-2 text-gray-400">
              <li>姿勢矯正（猫背・巻き肩・反り腰）</li>
              <li>骨格矯正</li>
              <li>内臓調整</li>
              <li>足首矯正</li>
              <li>自律神経整体</li>
              <li>小顔矯正</li>
            </ul>
          </div>

          <div className="animate-appear delay-300">
            <h4 className="text-lg font-semibold mb-4 text-gray-600">アクセス</h4>
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

        <div className="border-t border-gray-200 pt-8 animate-appear delay-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm">
              © 2025 美容整体 LUNOA. All rights reserved.
            </p>
            <div className="flex items-center space-x-1 text-gray-300 text-sm mt-4 md:mt-0">
              <span>美と健康への想いを込めて</span>
              <Heart className="w-4 h-4 fill-current text-orange-300" />
              <Heart className="w-4 h-4 fill-current text-orange-300" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}