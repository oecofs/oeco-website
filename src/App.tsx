import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { ScrollToTop } from './components/ScrollToTop';
import { HomePage } from './pages/HomePage';
import { HistoryPage } from './pages/HistoryPage';
import { OnboardingPage } from './pages/OnboardingPage';
import { MatheusPerfilGainsPage } from './pages/MatheusPerfilGainsPage';
import { BniHubPage } from './pages/bni/BniHubPage';
import { BniBioPage } from './pages/bni/BniBioPage';
import { BniGainsPage } from './pages/bni/BniGainsPage';
import { Forms001Page } from './pages/Forms001Page';
import { BeautyWorkshopPage } from './pages/BeautyWorkshopPage';
import { DiagnosticModalProvider, useDiagnosticModal } from './context/DiagnosticModalContext';
import { DiagnosticModal } from './components/DiagnosticModal';

function AppContent() {
  const location = useLocation();
  const { openModal } = useDiagnosticModal();
  const isBniPage = location.pathname.toLowerCase().startsWith('/bni') || location.pathname.toLowerCase().startsWith('/matheus-perfilgains');
  const isFormsPage = location.pathname.toLowerCase().startsWith('/forms') || location.pathname.toLowerCase().startsWith('/beleza');
  const isStandalone = isBniPage || isFormsPage;

  React.useEffect(() => {
    const path = location.pathname.toLowerCase();
    if (
      path === '/diagnostico' || 
      path === '/pre-diagnostico' || 
      path === '/diagnostico-de-caixa' ||
      location.hash === '#diagnostico'
    ) {
      openModal();
    }
  }, [location.pathname, location.hash, openModal]);

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#292524] flex flex-col font-sans selection:bg-[#4F6D46] selection:text-white">
      <ScrollToTop />
      
      {/* Exibir Navbar institucional da OECO apenas fora do Perfil GAINS BNI e dos Forms de Campo */}
      {!isStandalone && <Navbar />}

      {/* Dynamic Route Content */}
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/diagnostico" element={<HomePage />} />
          <Route path="/pre-diagnostico" element={<HomePage />} />
          <Route path="/diagnostico-de-caixa" element={<HomePage />} />
          <Route path="/historia" element={<HistoryPage />} />
          <Route path="/onboarding" element={<OnboardingPage />} />
          
          {/* Espaço BNI Modular */}
          <Route path="/bni" element={<BniHubPage />} />
          <Route path="/bni/biografia" element={<BniBioPage />} />
          <Route path="/bni/perfil-gains" element={<BniGainsPage />} />
          
          {/* Rota legada BNI */}
          <Route path="/matheus-perfilgains" element={<BniHubPage />} />

          {/* Formulários de Eventos & Pesquisa */}
          <Route path="/forms001" element={<Forms001Page />} />
          <Route path="/forms" element={<Forms001Page />} />
          <Route path="/forms/beleza" element={<BeautyWorkshopPage />} />
          <Route path="/beleza" element={<BeautyWorkshopPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </main>

      {/* Modal de Diagnóstico de Caixa OECO (ocultado em páginas standalone) */}
      {!isStandalone && <DiagnosticModal />}
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
