import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { StoreInfo } from '../../data/stores';
import defaultHeroImage from '../../assets/lunoahero.jpg';

interface LuxuryHeroProps {
  store?: StoreInfo;
}

export function LuxuryHero({ store }: LuxuryHeroProps) {
  const heroImage = store?.heroImage ?? defaultHeroImage;

  return (
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
            className="text-5xl md:text-7xl lg:text-[100px] tracking-[0.25em] mb-6 text-white"
            style={{ fontFamily: 'Cinzel, serif', fontWeight: 300 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, delay: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          >
            {store?.nameEn ?? 'LUNOA'}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.3 }}
          >
            <p className="text-lg md:text-xl tracking-[0.15em] text-white/70 font-light mb-4">
              {store ? store.name : '高級美容整体サロン'}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.6 }}
          >
            <div className="w-[40px] h-px bg-white/30 mx-auto mb-8" />
            <p className="text-[15px] tracking-[0.3em] text-white/70 font-light leading-relaxed mb-12">
              あなたの美しさを、内側から引き出す
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2 }}
          >
            <Link
              to="/reserve"
              className="cta inline-flex items-center gap-3"
              style={{ borderColor: 'rgba(255,255,255,0.3)', color: '#fff' }}
            >
              <span>ご予約はこちら</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <a
              href="#menu"
              className="cta inline-flex items-center gap-3"
              style={{ borderColor: 'rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.6)' }}
            >
              <span>メニューを見る</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
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
  );
}
