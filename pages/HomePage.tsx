import React, { useEffect } from 'react';
import { shibuyaStore } from '../data/stores';
import { ShibuyaHero } from '../components/sections/ShibuyaHero';
import { Features } from '../components/sections/Features';
import { WhySelected } from '../components/sections/WhySelected';
import { ComparisonTable } from '../components/sections/ComparisonTable';
import { Concerns } from '../components/sections/Concerns';
import { PhaseFlow } from '../components/sections/PhaseFlow';
import { NumbersShowcase } from '../components/sections/NumbersShowcase';
import { BridalReasons } from '../components/sections/BridalReasons';
import { BeforeAfterShowcase } from '../components/sections/BeforeAfterShowcase';
import { ReservationCta } from '../components/sections/ReservationCta';

export function HomePage() {
  useEffect(() => {
    document.title = shibuyaStore.meta.title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', shibuyaStore.meta.description);
  }, []);

  return (
    <>
      <ShibuyaHero />
      <Concerns />
      <WhySelected />
      <NumbersShowcase />
      <ComparisonTable />
      <PhaseFlow />
      <BeforeAfterShowcase />
      <Features />
      <BridalReasons />
      <ReservationCta />
    </>
  );
}
