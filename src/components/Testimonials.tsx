import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "M.T様",
    role: "30代 会社員",
    rating: 5,
    text: "1回目で長年悩まされている肩と首筋の痛みに変化を感じ、半年ほど通院しました。先生は勉強熱心で、相談した内容もしっかり覚えていてくださって安心してお任せできました。"
  },
  {
    name: "Y.S様",
    role: "40代 主婦",
    rating: 5,
    text: "カラダの悩みに合ったストレッチも教えてもらえるのでセルフケアができたりと生活改善もできました。症状が良くなり半年で卒業しましたが、困ったときはまたお世話になるつもりです！"
  },
  {
    name: "H.K様",
    role: "30代 会社員",
    rating: 5,
    text: "初回で首が回るようになったり、かなり体を軽くして頂きました。院内は清潔感があり、皆様フレンドリーな対応でありながらも、しっかり施術してもらい、施術直後の体の軽さには驚いております。"
  }
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-16 md:py-24" style={{ backgroundColor: '#F8F4E9' }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-appear">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-400 mb-6 font-handwriting">
            お客様の声
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            多くのお客様に愛され続ける理由を、実際の体験談でご確認ください。
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-md transition-all duration-300 animate-appear border border-gold-100"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <Quote className="w-8 h-8 text-orange-300 mb-4" />
              
              <p className="text-gray-400 leading-relaxed mb-6 text-lg">
                "{testimonial.text}"
              </p>

              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-300 to-orange-400 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-slate-400">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 animate-appear delay-1000">
          <div className="bg-white rounded-3xl p-8 shadow-sm max-w-4xl mx-auto border border-gold-100">
            <h3 className="text-2xl font-bold text-slate-400 mb-4">お客様満足度</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2 text-orange-300">96.7%</div>
                <div className="text-gray-400">改善実感率</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2 text-orange-300">95.2%</div>
                <div className="text-gray-400">お客様満足度</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2 text-orange-300">88%</div>
                <div className="text-gray-400">リピート率</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}