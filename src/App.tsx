import React from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { PainPointsSection } from './components/PainPointsSection';
import { PhilosophySection } from './components/PhilosophySection';
import { AccountingPartnerSection } from './components/AccountingPartnerSection';
import { ServiceTiersSection } from './components/ServiceTiersSection';
import { HaloSection } from './components/HaloSection';
import { FaqSection } from './components/FaqSection';
import { CtaFooterSection } from './components/CtaFooterSection';

export default function App() {
  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#292524] flex flex-col font-sans selection:bg-[#4F6D46] selection:text-white">
      {/* Sticky Header */}
      <Navbar />

      {/* Main Page Content */}
      <main className="flex-1">
        {/* Dobra 1: Hero Editorial Dark */}
        <HeroSection />

        {/* Dobra 2: Dores da Trincheira (4 Cards) */}
        <PainPointsSection />

        {/* Dobra 3: A Força do Processo (Filosofia sem atalhos) */}
        <PhilosophySection />

        {/* Dobra 4: Aliança Estratégica com a Contabilidade */}
        <AccountingPartnerSection />

        {/* Dobra 5: Esteira de Serviços (Operacional vs. Estratégico) */}
        <ServiceTiersSection />

        {/* Dobra 6: Efeito Halo (Para Outros Setores) */}
        <HaloSection />

        {/* Dobra 7: FAQ Interativo */}
        <FaqSection />

        {/* Dobra 8: CTA Final & Rodapé */}
        <CtaFooterSection />
      </main>
    </div>
  );
}
