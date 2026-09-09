import React, { useEffect } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { getTreatmentBySlug } from '../data/treatments';
import { FadeIn } from '../components/FadeIn';

export function TreatmentPage() {
  const { treatmentSlug } = useParams<{ treatmentSlug: string }>();
  const treatment = treatmentSlug ? getTreatmentBySlug(treatmentSlug) : undefined;

  useEffect(() => {
    if (treatment) {
      document.title = treatment.meta.title;
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) metaDesc.setAttribute('content', treatment.meta.description);
    }
    return () => {
      document.title = '美容整体LUNOA | 高級美容整体サロン';
    };
  }, [treatment]);

  if (!treatment) {
    return <Navigate to="/" replace />;
  }

  return (
    <>
      {/* Hero */}
      <section className="section-dark pt-32 pb-24 md:pt-44 md:pb-32">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <FadeIn>
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-[11px] tracking-[0.2em] text-white/40 hover:text-white/70 uppercase mb-16 transition-colors duration-500"
            >
              <ArrowLeft className="w-3 h-3" />
              <span>Back</span>
            </Link>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="caption text-accent mb-8">{treatment.heroCaption}</p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <h1 className="mb-6" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
              {treatment.name}
            </h1>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div className="divider mx-auto mb-10" />
          </FadeIn>
          <FadeIn delay={0.4}>
            <p className="text-[#A8A29E] leading-[2.8]">{treatment.tagline}</p>
          </FadeIn>
        </div>
      </section>

      {/* Video */}
      {treatment.videoUrl && (
        <section className="section-dark pb-24 md:pb-32">
          <div className="max-w-2xl mx-auto px-6">
            <FadeIn>
              <div className="relative aspect-video bg-black/50 overflow-hidden">
                <video
                  src={treatment.videoUrl}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                  className="w-full h-full object-contain"
                />
              </div>
            </FadeIn>
          </div>
        </section>
      )}

      {/* Content Sections */}
      {treatment.sections.map((section, i) => (
        <section
          key={section.heading}
          className={`${i % 2 === 0 ? 'section-light' : 'section-dark'} py-24 md:py-32`}
        >
          <div className="max-w-3xl mx-auto px-6 text-center">
            <FadeIn>
              <h2 className="mb-12">{section.heading}</h2>
            </FadeIn>
            <FadeIn delay={0.15}>
              <div className="divider mx-auto mb-12" />
            </FadeIn>
            {section.body.map((text, j) => (
              <FadeIn key={j} delay={0.2 + j * 0.1}>
                <p className={`mb-6 leading-[2.8] ${
                  i % 2 === 0 ? 'text-[#6B6560]' : 'text-[#A8A29E]'
                }`}>
                  {text}
                </p>
              </FadeIn>
            ))}
          </div>
        </section>
      ))}

      {/* Philosophy */}
      {treatment.philosophy && (
        <section className="section-dark py-24 md:py-32">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <FadeIn>
              <p className="caption text-accent mb-8">Message</p>
            </FadeIn>
            <FadeIn delay={0.15}>
              <p className="leading-[2.8] text-[#A8A29E]">{treatment.philosophy}</p>
            </FadeIn>
          </div>
        </section>
      )}

      {/* Benefits */}
      <section className="section-light py-24 md:py-32">
        <div className="max-w-5xl mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-20">
              <p className="caption mb-6" style={{ color: '#B7A482' }}>Benefits</p>
              <h2 className="text-[#1A1A1A]">根本改善で得られるメリット</h2>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-px bg-[#D6D0C7]/30">
            {treatment.benefits.map((benefit, i) => (
              <FadeIn key={benefit.title} delay={i * 0.1}>
                <div className="bg-[#F5F3EF] p-10 md:p-12 text-center h-full">
                  <h3 className="text-[#1A1A1A] mb-6 text-lg">{benefit.title}</h3>
                  <p className="text-[#6B6560] leading-[2.4]">{benefit.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-dark py-24 md:py-32">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <FadeIn>
            <p className="caption text-accent mb-8">Reservation</p>
          </FadeIn>
          <FadeIn delay={0.15}>
            <h2 className="mb-10">ご予約・お問い合わせ</h2>
          </FadeIn>
          <FadeIn delay={0.25}>
            <div className="divider mx-auto mb-10" />
          </FadeIn>
          <FadeIn delay={0.35}>
            <p className="text-[#A8A29E] leading-[2.8] mb-12">{treatment.closingCta}</p>
          </FadeIn>
          <FadeIn delay={0.45}>
            <Link
              to="/reserve"
              className="cta inline-flex items-center gap-3"
            >
              <span>ご予約はこちら</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
