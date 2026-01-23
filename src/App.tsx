import React from 'react';
import { LuxuryHeader } from './components/layout/LuxuryHeader';
import { LuxuryHero } from './components/sections/LuxuryHero';
import { Problems } from './components/Problems';
import { Features } from './components/Features';
import { Menu } from './components/Menu';
import { Results } from './components/Results';
import { Testimonials } from './components/Testimonials';
import { Flow } from './components/Flow';
import { Access } from './components/Access';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <LuxuryHeader />
      <main>
        <LuxuryHero />
        <Features />
        <Problems />
        <Menu />
        <Results />
        <Testimonials />
        <Flow />
        <Access />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

export default App;