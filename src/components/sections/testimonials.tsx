import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "M.T様",
    role: "30代 会社員",
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150",
    rating: 5,
    text: "インスタの広告からお試し感覚で訪問しましたが、1回目で長年悩まされている肩と首筋の痛みに変化を感じ、半年ほど通院しました。先生は勉強熱心で、相談した内容もしっかり覚えていてくださって次回の施術に反映してくれたり、安心してカラダのメンテナンスをお任せすることができました。"
  },
  {
    name: "Y.S様",
    role: "40代 主婦",
    image: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150",
    rating: 5,
    text: "カラダの悩みに合ったストレッチも教えてもらえるのでちょっとだるい時にセルフケアができたりと生活改善もできました。症状が良くなり半年で卒業しましたが、困ったときはまたお世話になるつもりです！"
  },
  {
    name: "H.K様",
    role: "30代 会社員",
    image: "https://images.pexels.com/photos/1542085/pexels-photo-1542085.jpeg?auto=compress&cs=tinysrgb&w=150",
    rating: 5,
    text: "まだ2回目ですが、初回で首が回るようになったり、かなり体を軽くして頂きました。院内は清潔感があり、皆様フレンドリーな対応でありながらも、全身痛くない箇所がない位に、痛みを我慢しながらしっかり施術してもらうのですが、施術直後の体の軽さには驚いております。とはいえ、日々の生活で徐々に体が悪い状態に戻ってくる感覚があるのでかなりクセがついてしまっているのだなと危機感を覚え、まだ痛みを自覚できているこの機にしっかり直したいです。昔から整体には毎日レベルで通うものの、改善された実感がなくなってくると、終わりが分からず行かなくなってしまっていたのですが、こちらは無理しない頻度で通えそうです。"
  }
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-appear">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            お客様の声
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            多くのお客様に愛され続ける理由を、実際の体験談でご確認ください。
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="h-full bg-gradient-to-br from-amber-50 to-yellow-50 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden rounded-3xl p-8 animate-appear"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <Quote className="w-8 h-8 text-amber-500 mb-4" />
              
              <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                "{testimonial.text}"
              </p>

              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <div className="flex items-center space-x-4">
                <img
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='48' height='48' viewBox='0 0 48 48'%3E%3Ccircle cx='24' cy='24' r='24' fill='%23fbbf24'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='white' font-family='sans-serif' font-size='20'%3E👤%3C/text%3E%3C/svg%3E"
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-gray-800">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                </div>
              </div>

              <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-amber-200 to-yellow-200 rounded-full opacity-20"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}