import React, { useEffect } from 'react';
import { MapPin, Clock, Phone, ArrowRight } from 'lucide-react';
import { shibuyaStore } from '../data/stores';
import { FadeIn } from '../components/FadeIn';

export function ReservePage() {
  useEffect(() => {
    window.location.href = shibuyaStore.bookingUrl;
  }, []);

  return (
    <div className="bg-cream-50 min-h-screen pt-32 pb-32">
      <div className="max-w-lg mx-auto px-6 text-center">
        <FadeIn>
          <p className="text-[12px] tracking-[0.3em] text-gold-600 uppercase mb-5">Reservation</p>
          <h1 className="font-mincho text-[30px] text-ink-900 mb-6">ご予約</h1>
          <p className="text-[14px] text-ink-500 leading-relaxed mb-10">
            予約ページへ移動しています。切り替わらない場合は下のボタンからお進みください。
          </p>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div className="bg-cream-50 rounded-card border border-gold-500/40 shadow-card p-8 text-left space-y-4 mb-10">
            <div className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-gold-600 mt-1 flex-shrink-0" />
              <p className="text-[13px] text-ink-700">
                {shibuyaStore.postalCode} {shibuyaStore.address.join(' ')}
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Clock className="w-4 h-4 text-gold-600 flex-shrink-0" />
              <p className="text-[13px] text-ink-700">{shibuyaStore.hours}</p>
            </div>
            {shibuyaStore.phone && (
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gold-600 flex-shrink-0" />
                <p className="text-[13px] text-ink-700">{shibuyaStore.phone}</p>
              </div>
            )}
          </div>
        </FadeIn>

        <FadeIn delay={0.25}>
          <a
            href={shibuyaStore.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-pill bg-gradient-to-br from-gold-500 to-gold-600 text-white font-bold text-[14px] tracking-[0.03em] px-8 py-4 shadow-soft hover:from-gold-600 hover:to-gold-500 transition-all duration-300"
          >
            <span>予約ページへ進む</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </FadeIn>
      </div>
    </div>
  );
}
