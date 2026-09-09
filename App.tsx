import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { LuxuryHeader } from './components/layout/LuxuryHeader';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { HomePage } from './pages/HomePage';
import { TreatmentPage } from './pages/TreatmentPage';
import { ReservePage } from './pages/ReservePage';

function App() {
  return (
    <div className="min-h-screen bg-cream-50">
      <ScrollToTop />
      <LuxuryHeader />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/reserve" element={<ReservePage />} />
          <Route path="/treatment/:treatmentSlug" element={<TreatmentPage />} />
          <Route path="/shibuya" element={<Navigate to="/" replace />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
