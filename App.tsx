import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { LuxuryHeader } from './components/layout/LuxuryHeader';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { BrandTopPage } from './pages/BrandTopPage';
import { StorePage } from './pages/StorePage';
import { TreatmentPage } from './pages/TreatmentPage';
import { ReservePage } from './pages/ReservePage';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <ScrollToTop />
      <LuxuryHeader />
      <main>
        <Routes>
          <Route path="/" element={<BrandTopPage />} />
          <Route path="/reserve" element={<ReservePage />} />
          <Route path="/treatment/:treatmentSlug" element={<TreatmentPage />} />
          <Route path="/:storeSlug" element={<StorePage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
