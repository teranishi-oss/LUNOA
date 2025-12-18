import React, { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, User } from 'lucide-react';

const testimonials = [
  {
    name: "M.T様",
    age: "30代",
    role: "会社員",
    rating: 5,
    text: "1回目で長年悩まされている肩と首筋の痛みに変化を感じ、半年ほど通院しました。先生は勉強熱心で、相談した内容もしっかり覚えていてくださって安心してお任せできました。",
    beforeAfter: {
      before: "慢性的な肩こりと首の痛み",
      after: "痛みが大幅に改善、姿勢も良くなった"
    },
    image: "/images/111.jpg"
  },
  {
    name: "Y.S様",
    age: "40代",
    role: "主婦",
    rating: 5,
    text: "カラダの悩みに合ったストレッチも教えてもらえるのでセルフケアができたりと生活改善もできました。症状が良くなり半年で卒業しましたが、困ったときはまたお世話になるつもりです！",
    beforeAfter: {
      before: "腰痛と体の歪み",
      after: "腰痛解消、体のバランスが整った"
    },
    image: "/images/222.jpg"
  },
  {
    name: "H.K様",
    age: "30代",
    role: "会社員",
    rating: 5,
    text: "初回で首が回るようになったり、かなり体を軽くして頂きました。院内は清潔感があり、皆様フレンドリーな対応でありながらも、しっかり施術してもらい、施術直後の体の軽さには驚いております。",
    beforeAfter: {
      before: "首の可動域制限と重だるさ",
      after: "首の動きがスムーズに、体が軽やか"
    },
    image: "/images/333.jpg"
  },
  {
    name: "A.N様",
    age: "20代",
    role: "OL",
    rating: 5,
    text: "デスクワークで猫背がひどく、見た目も気になっていました。3ヶ月の施術で姿勢が改善され、周りからも「背筋が伸びて綺麗になった」と言われるようになりました。",
    beforeAfter: {
      before: "猫背と肩の内巻き",
      after: "美しい姿勢と自信のある立ち姿"
    },
    image: "/images/444.jpg"
  },
  {
    name: "K.M様",
    age: "50代",
    role: "自営業",
    rating: 5,
    text: "長年の腰痛で悩んでいましたが、根本的な原因を見つけて治療してくださいました。今では痛みもなく、仕事にも集中できるようになりました。本当に感謝しています。",
    beforeAfter: {
      before: "慢性腰痛で日常生活に支障",
      after: "腰痛完全解消、活動的な毎日"
    },
    image: "/images/555.jpg"
  }
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // 自動スライド
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-appear">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6 font-handwriting">
            お客様の声
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            実際にLUNOAで施術を受けられたお客様の体験談をご紹介します。
            ビフォー・アフターの変化をぜひご覧ください。
          </p>
        </div>

        {/* メインスライドショー */}
        <div className="relative max-w-6xl mx-auto mb-12">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* 画像部分 */}
              <div className="relative h-96 lg:h-auto">
                <img 
                  src={testimonials[currentIndex].image}
                  alt={`${testimonials[currentIndex].name}の施術イメージ`}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = '/images/rogo.png';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-black/30"></div>
                
                {/* ビフォー・アフター表示 */}
                <div className="absolute bottom-6 left-6 right-6 lg:right-auto lg:max-w-sm">
                  <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4">
                    <h4 className="font-bold text-gray-800 mb-3 text-center">変化の実感</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-start space-x-2">
                        <span className="bg-red-100 text-red-600 px-2 py-1 rounded text-xs font-medium">Before</span>
                        <span className="text-gray-600 flex-1">{testimonials[currentIndex].beforeAfter.before}</span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <span className="bg-green-100 text-green-600 px-2 py-1 rounded text-xs font-medium">After</span>
                        <span className="text-gray-600 flex-1">{testimonials[currentIndex].beforeAfter.after}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* コンテンツ部分 */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <Quote className="w-12 h-12 text-orange-400 mb-6" />
                
                <p className="text-lg lg:text-xl text-gray-700 leading-relaxed mb-8 font-medium">
                  "{testimonials[currentIndex].text}"
                </p>

                <div className="flex items-center space-x-1 mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-amber-500 rounded-full flex items-center justify-center">
                    <User className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-800 text-lg">{testimonials[currentIndex].name}</div>
                    <div className="text-gray-600">{testimonials[currentIndex].age} {testimonials[currentIndex].role}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ナビゲーションボタン */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* インジケーター */}
        <div className="flex justify-center space-x-3 mb-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-200 ${
                index === currentIndex 
                  ? 'bg-orange-400 w-8' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

        {/* サムネイル一覧 */}
        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
          {testimonials.map((testimonial, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`bg-white rounded-2xl p-4 shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-1 ${
                index === currentIndex ? 'ring-2 ring-orange-400' : ''
              }`}
            >
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-amber-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold">{testimonial.name.charAt(0)}</span>
                </div>
                <div className="font-semibold text-gray-800 text-sm">{testimonial.name}</div>
                <div className="text-xs text-gray-500">{testimonial.age}</div>
                <div className="flex justify-center mt-2">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* 統計情報 */}
        <div className="bg-white rounded-3xl shadow-lg p-8 animate-appear delay-1000">
          <h3 className="text-2xl font-bold text-gray-800 text-center mb-8">お客様満足度</h3>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-orange-500 mb-2">96.7%</div>
              <div className="text-gray-600">改善実感率</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-500 mb-2">95.2%</div>
              <div className="text-gray-600">お客様満足度</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-500 mb-2">88%</div>
              <div className="text-gray-600">リピート率</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-500 mb-2">1400+</div>
              <div className="text-gray-600">施術実績</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}