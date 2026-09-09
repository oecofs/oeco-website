import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { ScrollToTop } from './components/ScrollToTop';
import { HomePage } from './pages/HomePage';
import { HistoryPage } from './pages/HistoryPage';
import { OnboardingPage } from './pages/OnboardingPage';
import { DiagnosticModalProvider } from './context/DiagnosticModalContext';
import { DiagnosticModal } from './components/DiagnosticModal';

export default function App() {
  return (
    <DiagnosticModalProvider>
      <BrowserRouter>
        <ScrollToTop />
        <div className="min-h-screen bg-[#FAF8F5] text-[#292524] flex flex-col font-sans selection:bg-[#4F6D46] selection:text-white">
          {/* Persistent Sticky Navbar */}
          <Navbar />

          {/* Dynamic Route Content */}
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/historia" element={<HistoryPage />} />
              <Route path="/onboarding" element={<OnboardingPage />} />
              <Route path="*" element={<HomePage />} />
            </Routes>
          </main>

          {/* Global Interactive Pre-Diagnostic Modal */}
          <DiagnosticModal />
        </div>
      </BrowserRouter>
    </DiagnosticModalProvider>
  );
}
