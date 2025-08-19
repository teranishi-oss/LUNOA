import React from 'react';
import { Header } from './components/layout/header';
import { Hero } from './components/sections/hero';
import { Hearing } from './components/sections/hearing';
import { WhyChosen } from './components/sections/why-chosen';
import { Effects } from './components/sections/effects';
import { Services } from './components/sections/services';
import { Therapists } from './components/sections/therapists';
import { Testimonials } from './components/sections/testimonials';
import { Contact } from './components/sections/contact';
import { Footer } from './components/layout/footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Hearing />
        <WhyChosen />
        <Effects />
        <Services />
        <Therapists />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;