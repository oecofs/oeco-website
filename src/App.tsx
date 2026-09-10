import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { ScrollToTop } from './components/ScrollToTop';
import { HomePage } from './pages/HomePage';
import { HistoryPage } from './pages/HistoryPage';
import { OnboardingPage } from './pages/OnboardingPage';
import { MatheusPerfilGainsPage } from './pages/MatheusPerfilGainsPage';
import { DiagnosticModalProvider } from './context/DiagnosticModalContext';
import { DiagnosticModal } from './components/DiagnosticModal';

function AppContent() {
  const location = useLocation();
  const isBniPage = location.pathname.toLowerCase().startsWith('/matheus-perfilgains');

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#292524] flex flex-col font-sans selection:bg-[#4F6D46] selection:text-white">
      <ScrollToTop />
      
      {/* Exibir Navbar institucional da OECO apenas fora do Perfil GAINS BNI */}
      {!isBniPage && <Navbar />}

      {/* Dynamic Route Content */}
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/historia" element={<HistoryPage />} />
          <Route path="/onboarding" element={<OnboardingPage />} />
          <Route path="/matheus-perfilgains" element={<MatheusPerfilGainsPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </main>

      {/* Modal de Diagnóstico de Caixa OECO (ocultado na rota do BNI) */}
      {!isBniPage && <DiagnosticModal />}
    </div>
  );
}

export default function App() {
  return (
    <DiagnosticModalProvider>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </DiagnosticModalProvider>
  );
}
