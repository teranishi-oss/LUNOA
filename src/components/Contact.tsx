import React from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const contactInfo = [
  {
    icon: <MapPin className="w-6 h-6" />,
    title: "所在地",
    content: "〒150-0043 東京都渋谷区道玄坂１丁目１９−１３ トップヒル並木 5階",
    gradient: "from-amber-500 to-yellow-600"
  },
  {
    icon: <Phone className="w-6 h-6" />,
    title: "電話番号",
    content: "090-3543-0588",
    gradient: "from-yellow-500 to-orange-600"
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "営業時間",
    content: "平日: 10:00-21:00 / 土日: 10:00-19:00（定休日なし）",
    gradient: "from-green-500 to-emerald-600"
  }
];

export function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-appear">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-600 mb-6 font-handwriting">
            ご予約・お問い合わせ
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            美と健康の第一歩を、私たちと一緒に始めませんか？お気軽にお問い合わせください。
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8 animate-appear delay-300">
            <div className="grid gap-6">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-4 p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gold-100"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-gold-500 to-gold-600 rounded-xl flex items-center justify-center text-white">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-600 mb-1">{info.title}</h4>
                    <p className="text-gray-400">{info.content}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <a 
                href="https://bookom.jp/reservation?company=69&course=1339&defaultLang=ja&shop=238"
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-md hover:shadow-lg transform hover:scale-[1.02] transition-all duration-200 no-underline"
                style={{ background: 'linear-gradient(135deg, #d2b48c, #deb887)', color: 'white' }}
              >
                <Phone className="w-5 h-5 inline mr-2" />
                オンライン予約システム
              </a>
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-sm p-8 animate-appear delay-300 border border-gold-100">
            <h3 className="text-2xl font-bold text-gray-600 mb-6 font-heading">お問い合わせフォーム</h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-2">お名前</label>
                  <input 
                    type="text"
                    className="w-full px-4 py-3 border border-gold-200 rounded-xl focus:ring-2 focus:ring-gold-500 focus:border-gold-500 transition-colors"
                    placeholder="山田 太郎"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-2">フリガナ</label>
                  <input 
                    type="text"
                    className="w-full px-4 py-3 border border-gold-200 rounded-xl focus:ring-2 focus:ring-gold-500 focus:border-gold-500 transition-colors"
                    placeholder="ヤマダ タロウ"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-600 mb-2">メールアドレス</label>
                <input 
                  type="email"
                  className="w-full px-4 py-3 border border-gold-200 rounded-xl focus:ring-2 focus:ring-gold-500 focus:border-gold-500 transition-colors"
                  placeholder="example@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-600 mb-2">電話番号</label>
                <input 
                  type="tel"
                  className="w-full px-4 py-3 border border-gold-200 rounded-xl focus:ring-2 focus:ring-gold-500 focus:border-gold-500 transition-colors"
                  placeholder="090-1234-5678"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-600 mb-2">メッセージ</label>
                <textarea 
                  rows={4}
                  className="w-full px-4 py-3 border border-gold-200 rounded-xl focus:ring-2 focus:ring-gold-500 focus:border-gold-500 transition-colors resize-none"
                  placeholder="お体の状態やお悩み、ご希望などをお聞かせください。"
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-md hover:shadow-lg transform hover:scale-[1.02] transition-all duration-200 flex items-center justify-center space-x-2"
                style={{ background: 'linear-gradient(135deg, #d2b48c, #deb887)', color: 'white' }}
              >
                <Send className="w-5 h-5" />
                <span>送信する</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}