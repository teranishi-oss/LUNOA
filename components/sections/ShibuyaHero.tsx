import React from 'react';
import { motion } from 'framer-motion';
import { shibuyaStore } from '../../data/stores';
import heroImage from '../../assets/lunoahero.jpg';

export function ShibuyaHero() {
  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden bg-beige pt-16 lg:pt-0">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="LUNOA渋谷院の店内"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-cream-50 via-cream-50/75 to-cream-50/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-cream-50/40 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 flex min-h-[calc(100svh-64px)] lg:min-h-[100svh] items-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full">
          <div className="max-w-2xl">
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
              className="font-mincho text-[48px] sm:text-[58px] md:text-[68px] leading-[1.3] text-ink-900 mb-7"
            >
              通わなくていい
              <br />
              身体をつくる。
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-mincho font-semibold text-[20px] md:text-[22px] tracking-[0.02em] text-gold-600 mb-7"
            >
              渋谷で根本から。自分のペースで卒業へ。
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-[17px] leading-[1.9] text-ink-700 mb-10 max-w-lg"
            >
              「通い続ける」のではなく、自分の力で整えられる体になるために。25歳から60歳まで、本気で変わりたいすべての女性のための卒業型美容整体、LUNOA渋谷院です。
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row sm:items-center gap-4"
            >
              <a
                href={shibuyaStore.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-pill bg-gradient-to-br from-gold-500 to-gold-600 text-white font-bold text-[16px] tracking-[0.03em] px-9 py-4.5 shadow-soft hover:from-gold-600 hover:to-gold-500 hover:-translate-y-0.5 transition-all duration-300"
              >
                無料カウンセリングを予約する
              </a>
              <p className="text-[14px] tracking-[0.03em] text-ink-500">
                毎月100名以上の花嫁からも選ばれています
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
