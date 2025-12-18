import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Menu } from './components/Menu';
import { Services } from './components/Services';
import { BeforeAfter } from './components/BeforeAfter';
import { Therapists } from './components/Therapists';
import { About } from './components/About';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Menu />
        <About />
        <Services />
        <BeforeAfter />
        <Therapists />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;