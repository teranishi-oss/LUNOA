export type TreatmentSlug = 'full-body' | 'neck-shoulder' | 'bridal' | 'face-sculpting';

export interface TreatmentSection {
  heading: string;
  body: string[];
}

export interface TreatmentInfo {
  slug: TreatmentSlug;
  name: string;
  nameEn: string;
  tagline: string;
  heroCaption: string;
  videoUrl?: string;
  sections: TreatmentSection[];
  philosophy?: string;
  benefits: { title: string; description: string }[];
  closingCta: string;
  meta: {
    title: string;
    description: string;
  };
}

export const treatments: Record<TreatmentSlug, TreatmentInfo> = {
  'full-body': {
    slug: 'full-body',
    name: '全身美容整体',
    nameEn: 'Full Body',
    tagline: '姿勢矯正・骨盤矯正で根本から改善',
    heroCaption: 'Full Body Beauty Osteopathy',
    videoUrl: '/videos/full-body-treatment.mp4',
    sections: [
      {
        heading: '美容整体が整えるもの',
        body: [
          '骨盤・背骨のゆがみ調整',
          '肩甲骨まわりの可動域改善',
          '深層筋へのアプローチで姿勢を安定',
          '呼吸、自律神経が整いやすい身体づくり',
          '柔らかくしなやかな筋肉で疲れにくい体へ',
        ],
      },
      {
        heading: 'ゆがみが整うと',
        body: [
          '身体は正しい位置で使えるようになり、見た目も自然と美しくなります。',
        ],
      },
    ],
    philosophy:
      '「その場しのぎではなく、本気で身体を変えたい」——そんな方にこそ、美容整体の根本改善はぴったりです。不調が続いている方ほど、原因を知り、整え、続けてみる価値があります。',
    benefits: [
      {
        title: '戻りにくい身体へ',
        description: '症状が戻りにくい身体になる',
      },
      {
        title: 'スタイルアップ',
        description: '姿勢が整い、自然と美しいシルエットに',
      },
      {
        title: '肌の調子もUP',
        description: '血流改善で肌のトーンや質感が向上',
      },
      {
        title: '睡眠・メンタル改善',
        description: '自律神経が整い睡眠の質やメンタルにも良い変化',
      },
      {
        title: '疲れにくい身体',
        description: '柔軟な筋肉で毎日が快適に',
      },
    ],
    closingCta:
      '気になる方はお気軽にご相談ください。初回から変化を実感していただけます。',
    meta: {
      title: '全身美容整体 | 美容整体LUNOA',
      description:
        '骨盤・背骨のゆがみ調整から深層筋アプローチまで。全身のバランスを根本から整え、姿勢改善・疲労回復・自律神経の調整を実現する美容整体。',
    },
  },

  'neck-shoulder': {
    slug: 'neck-shoulder',
    name: '首肩コリ改善',
    nameEn: 'Neck & Shoulder',
    tagline: '深層筋から根本改善',
    heroCaption: 'Neck & Shoulder Relief',
    videoUrl: '/videos/neck-shoulder-treatment.mp4',
    sections: [
      {
        heading: '肩こりの本当の原因',
        body: [
          '長時間のデスクワークによる同じ姿勢の継続',
          '頭が前に出る「ストレートネック」',
          '猫背による肩甲骨の可動域低下',
          '合っていないデスク環境による負担の蓄積',
          '単なる疲れではなく、姿勢や骨格の歪みが根本原因。約5kgの頭が前に傾くだけで、首への負担は何倍にもなり、慢性的な肩こり・首こりへとつながる。',
        ],
      },
      {
        heading: 'LUNOAのアプローチ',
        body: [
          'ボキボキしない優しい施術で身体の歪みを調整',
          '骨格のバランスを根本から整え、首肩への負担を軽減',
          '硬くなった深層筋を緩め、可動域を回復',
          '姿勢のクセそのものを改善し、戻りにくい身体へ',
          '一般的なマッサージのような一時的な緩和ではなく、姿勢・骨格から原因にアプローチすることで、根本からの改善を目指す。',
        ],
      },
    ],
    philosophy:
      '「肩が軽くなった」「呼吸がしやすくなった」「姿勢が良くなったと言われた」——そんな声が多く届いている。放置すれば頭痛や眼精疲労にもつながる肩こり。早めに身体を整える価値がある。',
    benefits: [
      {
        title: '骨格バランスの調整',
        description: '歪みを正し、首肩への負担を根本から軽減',
      },
      {
        title: '深層筋のリリース',
        description: '硬くなった筋肉を緩め、施術直後から軽さを体感',
      },
      {
        title: '姿勢のクセを改善',
        description: '日常の姿勢を見直し、戻りにくい身体へ',
      },
      {
        title: '頭痛・眼精疲労の緩和',
        description: '首肩のコリに起因する不調を連鎖的に改善',
      },
    ],
    closingCta:
      '慢性的な首肩のコリに悩んでいる方、まずはお気軽にご相談を。初回から変化を実感していただける。',
    meta: {
      title: '首肩コリ改善 | 美容整体LUNOA',
      description:
        'デスクワークによる慢性的な首肩のコリを深層筋から根本改善。姿勢や骨格の歪みにアプローチし、肩こりの原因から改善する美容整体LUNOA。',
    },
  },

  bridal: {
    slug: 'bridal',
    name: 'ブライダル整体',
    nameEn: 'Bridal',
    tagline: '史上最高の自分で迎える特別な日',
    heroCaption: 'Bridal Osteopathy',
    videoUrl: '/videos/bridal-treatment.mp4',
    sections: [
      {
        heading: '花嫁が本当に悩むこと',
        body: [
          '多くの花嫁が悩むのは"体重"ではなく、姿勢とライン',
          'ドレスは肩・肩甲骨・鎖骨・背中・二の腕がとても目立つ',
          '同じ体重でも"見え方"で印象は大きく変わる',
          '脂肪ではなく"身体の使い方のクセ"が原因で起きている歪み——肩が前に入れば背中が丸く見え、肩甲骨が埋まれば背中が大きく、肋骨が開けばくびれがなくなり、骨盤が前傾すれば下腹が出る。',
        ],
      },
      {
        heading: 'LUNOAのブライダル整体',
        body: [
          '単にほぐしたり流したりする施術ではない',
          '身体の歪みを整え、関節の位置を正しく戻す',
          '筋肉が自然に使える状態へ導き、ドレス姿が綺麗に見える身体へ',
          '【細くする】のではなく"細く見える構造"を作る',
        ],
      },
      {
        heading: '回数を重ねるごとに',
        body: [
          '肩の位置が変わる',
          '鎖骨が出る',
          '背中が薄くなる',
          '二の腕が締まる',
          'ウエストがくびれる',
          '写真に写ったときの印象が大きく変わる。「ダイエットより効果を感じた」「姿勢だけでこんなに変わるとは思わなかった」——そんな声が多く届いている。',
        ],
      },
    ],
    philosophy:
      '一生に一度の大切な一日。ドレスを着た瞬間に自信が持てる身体へ。"頑張って痩せる"ではなく、整えて綺麗になる——その準備を、ここから。',
    benefits: [
      {
        title: 'デコルテラインの美しさ',
        description: '肩甲骨まわりを整え、ドレス映えするラインを実現',
      },
      {
        title: '背中・二の腕の引き締め',
        description: '骨格を正し、薄く締まった上半身へ導く',
      },
      {
        title: 'くびれの形成',
        description: '肋骨・骨盤の位置を整え、自然なウエストラインに',
      },
      {
        title: '写真映えする姿勢',
        description: '全身のバランスを整え、どの角度からも美しく',
      },
    ],
    closingCta:
      '特別な日のために、早めの準備を。初回から変化を実感していただける。',
    meta: {
      title: 'ブライダル整体 | 美容整体LUNOA',
      description:
        '結婚式に向けた美容整体。ドレスから見える肩・背中・二の腕のラインを骨格から整え、"細く見える構造"を作る。美容整体LUNOA。',
    },
  },

  'face-sculpting': {
    slug: 'face-sculpting',
    name: '小顔矯正',
    nameEn: 'Face Sculpting',
    tagline: 'フェイスラインを整え根本改善',
    heroCaption: 'Face Sculpting',
    sections: [
      {
        heading: '施術の特徴',
        body: [
          'フェイスラインのたるみやむくみを、骨格・筋膜・筋肉のバランスから根本的に改善。一時的な変化ではなく、持続する小顔を目指します。',
        ],
      },
    ],
    benefits: [
      {
        title: 'フェイスラインの引き締め',
        description: '顔周りの筋膜と筋肉を整え、シャープなラインを実現',
      },
      {
        title: 'むくみの改善',
        description: 'リンパの流れを促進し、慢性的なむくみを根本改善',
      },
    ],
    closingCta: '一度の施術で変化を実感。まずはお気軽にご予約ください。',
    meta: {
      title: '小顔矯正 | 美容整体LUNOA',
      description:
        'フェイスラインのたるみやむくみを根本から改善する小顔矯正。持続する変化を実現する美容整体LUNOA。',
    },
  },
};

export const treatmentList: TreatmentInfo[] = Object.values(treatments);

export function getTreatmentBySlug(slug: string): TreatmentInfo | undefined {
  return treatments[slug as TreatmentSlug];
}
