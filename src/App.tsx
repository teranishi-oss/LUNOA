import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Problems } from './components/Problems';
import { Features } from './components/Features';
import { Menu } from './components/Menu';
import { Results } from './components/Results';
import { Testimonials } from './components/Testimonials';
import { Flow } from './components/Flow';
import { Access } from './components/Access';
import { FAQ } from './components/FAQ';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Problems />
        <Features />
        <Menu />
        <Results />
        <Testimonials />
        <Flow />
        <Access />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;