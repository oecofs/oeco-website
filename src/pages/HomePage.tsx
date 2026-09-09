import React from 'react';
import { HeroSection } from '../components/HeroSection';
import { PainPointsSection } from '../components/PainPointsSection';
import { PhilosophySection } from '../components/PhilosophySection';
import { AccountingPartnerSection } from '../components/AccountingPartnerSection';
import { ServiceTiersSection } from '../components/ServiceTiersSection';
import { HaloSection } from '../components/HaloSection';
import { FaqSection } from '../components/FaqSection';
import { CtaFooterSection } from '../components/CtaFooterSection';
import { HomeNavigator } from '../components/HomeNavigator';

export const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col">
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

      {/* Navegador Lateral & Controles Estilo Apresentação */}
      <HomeNavigator />
    </div>
  );
};
