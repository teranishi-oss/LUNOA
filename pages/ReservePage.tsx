import React from 'react';
import { MapPin, Clock, ArrowRight, Phone } from 'lucide-react';
import { storeList } from '../data/stores';
import { FadeIn } from '../components/FadeIn';

export function ReservePage() {
  return (
    <div className="bg-[#0A0A0A] min-h-screen pt-24">
      {/* Header */}
      <section className="py-24 md:py-32">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <FadeIn>
            <p className="caption text-[#B7A482] mb-4">Reservation</p>
            <h1
              className="text-[36px] md:text-[48px] tracking-[0.15em] text-[#E8E4DF] mb-6"
              style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 300 }}
            >
              ご予約
            </h1>
            <p className="text-[14px] md:text-[15px] text-[#A8A29E] leading-relaxed max-w-xl mx-auto">
              ご希望の店舗を選択して、ご予約ページへお進みください
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Store Cards */}
      <section className="pb-32 md:pb-48">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {storeList.map((store, index) => (
              <FadeIn key={store.slug} delay={index * 0.15}>
                <div className="bg-[#111] border border-white/5 p-8 md:p-10 flex flex-col h-full">
                  {/* Store Name */}
                  <p
                    className="text-[11px] tracking-[0.2em] text-[#B7A482] uppercase mb-2"
                    style={{ fontFamily: 'Cinzel, serif' }}
                  >
                    {store.nameEn}
                  </p>
                  <h2
                    className="text-[24px] tracking-[0.1em] text-[#E8E4DF] mb-6"
                    style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 300 }}
                  >
                    {store.name}
                  </h2>

                  {/* Info */}
                  <div className="space-y-4 mb-8 flex-1">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-3.5 h-3.5 mt-1 flex-shrink-0 text-[#B7A482]/50" />
                      <div className="text-[13px] text-[#A8A29E] leading-relaxed">
                        {store.address.map((line) => (
                          <p key={line}>{line}</p>
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="w-3.5 h-3.5 flex-shrink-0 text-[#B7A482]/50" />
                      <p className="text-[13px] text-[#A8A29E]">{store.hours}</p>
                    </div>
                    {store.phone && (
                      <div className="flex items-center gap-3">
                        <Phone className="w-3.5 h-3.5 flex-shrink-0 text-[#B7A482]/50" />
                        <p className="text-[13px] text-[#A8A29E]">{store.phone}</p>
                      </div>
                    )}
                    <p className="text-[12px] text-[#78716C]">{store.access}</p>
                  </div>

                  {/* CTA */}
                  <a
                    href={store.bookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cta inline-flex items-center justify-center gap-3 w-full"
                  >
                    <span>予約する</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
