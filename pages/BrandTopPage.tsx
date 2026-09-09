import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { storeList } from '../data/stores';
import { FadeIn } from '../components/FadeIn';
import heroImage from '../assets/lunoahero.jpg';

export function BrandTopPage() {
  useEffect(() => {
    document.title = '美容整体LUNOA | 高級美容整体サロン';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', '美容整体LUNOA。渋谷・梅田・三宮の3院展開。筋肉の深層部に直接アプローチし、初回から変化を実感。完全個室の高級美容整体サロン。');
    }
  }, []);

  return (
    <>
      {/* Hero - Full screen cinematic */}
      <section className="relative h-screen min-h-[700px] w-full overflow-hidden bg-black">
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2.5, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <img
            src={heroImage}
            alt="LUNOA"
            className="w-full h-full object-cover opacity-60"
          />
        </motion.div>

        <div className="relative z-10 h-full flex flex-col items-center justify-center">
          <div className="text-center px-6 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <p className="text-[13px] tracking-[0.4em] text-white/50 uppercase mb-8">
                Beauty Osteopathy Salon
              </p>
            </motion.div>

            <motion.h1
              className="text-6xl md:text-8xl lg:text-[120px] tracking-[0.25em] mb-8 text-white"
              style={{ fontFamily: 'Cinzel, serif', fontWeight: 300 }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.4, delay: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            >
              LUNOA
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
            >
              <div className="w-[40px] h-px bg-white/30 mx-auto mb-8" />
              <p className="text-[15px] tracking-[0.3em] text-white/70 font-light leading-relaxed">
                あなたの美しさを、内側から引き出す
              </p>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 1 }}
        >
          <span className="text-[10px] tracking-[0.3em] text-white/30 uppercase">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-white/40 to-transparent" />
        </motion.div>
      </section>

      {/* Philosophy - Dark editorial */}
      <section className="section-dark py-32 md:py-48">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <FadeIn>
            <p className="caption text-accent mb-8">Philosophy</p>
          </FadeIn>
          <FadeIn delay={0.15}>
            <h2 className="mb-12 text-3xl md:text-4xl lg:text-[42px]" style={{ fontFamily: 'Cormorant Garamond, serif', lineHeight: 1.5 }}>
              美容と健康、<br />その本質へ。
            </h2>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div className="divider mx-auto mb-12" />
          </FadeIn>
          <FadeIn delay={0.4}>
            <p className="mb-8 leading-[2.8] text-[#A8A29E]">
              表面的な変化や一時的な心地よさではなく、
              <br className="hidden md:inline" />
              骨格・筋膜・筋肉のバランスに丁寧に働きかけ、
              <br className="hidden md:inline" />
              本来あるべき美しさと、軽やかな身体へ導きます。
            </p>
          </FadeIn>
          <FadeIn delay={0.5}>
            <p className="leading-[2.8] text-[#78716C]">
              落ち着いた空間、確かな技術、細部まで行き届いたサービス。
              <br className="hidden md:inline" />
              日常から少し距離を置き、
              <br className="hidden md:inline" />
              ご自身の身体と静かに向き合う時間をお過ごしください。
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Features - Light section with generous spacing */}
      <section className="section-light py-32 md:py-48">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-24">
              <p className="caption mb-6" style={{ color: '#B7A482' }}>Why LUNOA</p>
              <h2 className="text-[#1A1A1A]">選ばれる理由</h2>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-0 md:divide-x md:divide-[#D6D0C7]/40">
            {[
              {
                num: '01',
                title: '確かな変化',
                sub: 'Visible Change',
                desc: '骨格・筋膜・筋肉の状態を見極め、顔や身体の歪みに的確にアプローチ。一度の施術で実感できる確かな技術力。',
              },
              {
                num: '02',
                title: 'オーダーメイド',
                sub: 'Personalized',
                desc: 'お悩みや体質、生活習慣まで丁寧に汲み取り、その方に最適な施術を組み立てます。',
              },
              {
                num: '03',
                title: '上質な空間',
                sub: 'Private Room',
                desc: '洗練された完全個室。人目を気にすることなく、心身ともに解きほぐされるひとときを。',
              },
            ].map((item, i) => (
              <FadeIn key={item.num} delay={i * 0.15}>
                <div className="px-8 md:px-12 py-12 md:py-0 text-center">
                  <span className="font-display text-4xl text-[#B7A482]/40 block mb-6">{item.num}</span>
                  <p className="caption mb-4" style={{ color: '#B7A482' }}>{item.sub}</p>
                  <h3 className="text-[#1A1A1A] mb-6 text-lg">{item.title}</h3>
                  <p className="text-[#6B6560] leading-[2.4]">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Treatments - Dark with horizontal layout */}
      <section className="section-dark py-32 md:py-48">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-24">
              <p className="caption text-accent mb-6">Treatments</p>
              <h2>施術メニュー</h2>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-px bg-white/5">
            {[
              { name: '全身美容整体', en: 'Full Body', desc: '姿勢矯正・骨盤矯正で根本から改善', slug: 'full-body' },
              { name: '首肩コリ改善', en: 'Neck & Shoulder', desc: '深層筋から根本改善', slug: 'neck-shoulder' },
              { name: 'ブライダル整体', en: 'Bridal', desc: '史上最高の自分で迎える特別な日', slug: 'bridal' },
              { name: '小顔矯正', en: 'Face Sculpting', desc: 'フェイスラインを整え根本改善', slug: 'face-sculpting' },
            ].map((item, i) => (
              <FadeIn key={item.en} delay={i * 0.1}>
                <Link
                  to={`/treatment/${item.slug}`}
                  className="block bg-[#0A0A0A] p-12 md:p-16 group hover:bg-[#111] transition-colors duration-500 no-underline"
                >
                  <p className="caption text-accent mb-4">{item.en}</p>
                  <h3 className="mb-4">{item.name}</h3>
                  <p className="text-[#78716C] mb-8">{item.desc}</p>
                  <div className="flex items-center gap-3 text-[#B7A482] opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <span className="text-xs tracking-[0.2em]">VIEW MORE</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Numbers - Stats */}
      <section className="section-light py-32 md:py-40">
        <div className="max-w-5xl mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-20">
              <p className="caption mb-6" style={{ color: '#B7A482' }}>Results</p>
              <h2 className="text-[#1A1A1A]">実績</h2>
            </div>
          </FadeIn>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8">
            {[
              { num: '96.7', unit: '%', label: '改善実感率' },
              { num: '3,500', unit: '+', label: '施術実績' },
              { num: '95.2', unit: '%', label: 'お客様満足度' },
              { num: '5', unit: '分', label: '最短で変化を体感' },
            ].map((stat, i) => (
              <FadeIn key={stat.label} delay={i * 0.1}>
                <div className="text-center">
                  <div className="font-display text-4xl md:text-5xl text-[#B7A482] mb-3">
                    {stat.num}<span className="text-2xl md:text-3xl">{stat.unit}</span>
                  </div>
                  <p className="text-[#6B6560] text-xs tracking-[0.15em]">{stat.label}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Store Selector - Dark editorial */}
      <section id="store-selector" className="section-dark py-32 md:py-48">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-24">
              <p className="caption text-accent mb-6">Locations</p>
              <h2>店舗一覧</h2>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-px bg-white/5">
            {storeList.map((store, i) => (
              <FadeIn key={store.slug} delay={i * 0.15}>
                <Link
                  to={`/${store.slug}`}
                  className="block bg-[#0A0A0A] p-12 md:p-16 group hover:bg-[#111] transition-all duration-500 no-underline"
                >
                  <div className="text-center">
                    <p
                      className="font-display text-3xl md:text-4xl tracking-[0.15em] text-white/20 group-hover:text-[#B7A482]/50 transition-colors duration-500 mb-8"
                    >
                      {store.nameEn}
                    </p>
                    <h3 className="text-white mb-3 text-lg">{store.name}</h3>
                    <p className="text-[#78716C] text-xs tracking-[0.15em] mb-8">{store.region}</p>
                    <p className="text-[#A8A29E] text-sm mb-10">{store.access}</p>
                    <div className="inline-flex items-center gap-3 text-[#B7A482] text-xs tracking-[0.2em] opacity-50 group-hover:opacity-100 transition-opacity duration-500">
                      <span>ENTER</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Company Overview - Light section */}
      <section className="section-light py-32 md:py-48">
        <div className="max-w-4xl mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-20">
              <p className="caption mb-6" style={{ color: '#B7A482' }}>Company</p>
              <h2 className="text-[#1A1A1A]">会社概要</h2>
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="divide-y divide-[#D6D0C7]/40">
              {[
                { label: '会社名', value: '株式会社LUNOA' },
                { label: '代表者名', value: '鈴木響' },
                { label: '設立年月日', value: '2025年9月12日' },
                { label: '資本金', value: '1,000,000円' },
                { label: '所在地', value: '〒150-0043\n東京都渋谷区道玄坂1-19-13\nトップヒル並木5階' },
                { label: '電話番号', value: '03-6455-3271' },
                { label: 'メールアドレス', value: 'seitai.lunoa@gmail.com' },
              ].map((item, i) => (
                <div key={item.label} className="flex flex-col md:flex-row md:items-start py-6 md:py-8">
                  <dt className="md:w-48 flex-shrink-0 text-[#B7A482] text-xs tracking-[0.15em] uppercase mb-2 md:mb-0 md:pt-0.5">
                    {item.label}
                  </dt>
                  <dd className="text-[#1A1A1A] leading-[2]">
                    {item.value.split('\n').map((line, j) => (
                      <React.Fragment key={j}>
                        {line}{j < item.value.split('\n').length - 1 && <br />}
                      </React.Fragment>
                    ))}
                  </dd>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
