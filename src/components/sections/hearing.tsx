import React from 'react';
import { CheckCircle, MessageSquare, Clock, User } from 'lucide-react';

const hearingItems = [
  {
    icon: <MessageSquare className="w-6 h-6" />,
    title: "お悩みの詳細ヒアリング",
    description: "現在のお体の状態、痛みや不調の箇所、日常生活での困りごとを詳しくお聞きします。",
    items: ["痛みの箇所と程度", "いつから症状があるか", "日常生活への影響", "過去の治療歴"]
  },
  {
    icon: <User className="w-6 h-6" />,
    title: "ライフスタイルの確認",
    description: "お仕事の内容や生活習慣、運動習慣などを確認し、根本原因を特定します。",
    items: ["お仕事の内容（デスクワーク等）", "睡眠時間と質", "運動習慣", "ストレス状況"]
  },
  {
    icon: <CheckCircle className="w-6 h-6" />,
    title: "理想の状態の確認",
    description: "どのような状態になりたいか、どんな生活を送りたいかをお聞きし、目標を設定します。",
    items: ["改善したい症状", "理想の体型・姿勢", "やりたいこと・目標", "通院可能な頻度"]
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "施術プランのご提案",
    description: "ヒアリング内容を基に、お客様に最適な施術プランと通院スケジュールをご提案します。",
    items: ["推奨施術メニュー", "通院頻度の提案", "改善までの期間", "料金プランの説明"]
  }
];

export function Hearing() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-appear">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            初回カウンセリング
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            お客様一人ひとりの状態を詳しくお聞きし、最適な施術プランをご提案いたします。
            丁寧なヒアリングで、根本的な改善を目指します。
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {hearingItems.map((item, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 animate-appear"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-yellow-600 rounded-xl flex items-center justify-center text-white mr-4">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-800">{item.title}</h3>
              </div>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                {item.description}
              </p>

              <ul className="space-y-2">
                {item.items.map((listItem, idx) => (
                  <li key={idx} className="flex items-center text-gray-600">
                    <div className="w-2 h-2 bg-amber-400 rounded-full mr-3"></div>
                    {listItem}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}