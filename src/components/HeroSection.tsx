import React from 'react';
import { MessageCircle, ArrowRight } from 'lucide-react';
import { buildWhatsAppLink, DEFAULT_WHATSAPP_MESSAGES } from '../utils/whatsapp';
import { useDiagnosticModal } from '../context/DiagnosticModalContext';
import heroEngineerImg from '../assets/hero-gestao-canteiro-engenheiro.jpg';

export const HeroSection: React.FC = () => {
  const { openModal } = useDiagnosticModal();
  return (
    <section id="hero" className="pt-28 sm:pt-36 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Main Dark Editorial Hero Card (BNI Perfil-GAINS Style) */}
        <div className="bg-[#1C1815] text-[#FAF8F5] rounded-3xl p-6 sm:p-10 lg:p-14 shadow-2xl border border-[#2E2824] relative overflow-hidden">
          
          {/* Subtle Ambient Glows */}
          <div className="absolute top-0 right-0 w-[32rem] h-[32rem] bg-[#4F6D46]/15 rounded-full blur-3xl pointer-events-none -mr-28 -mt-28"></div>
          <div className="absolute bottom-0 left-0 w-[26rem] h-[26rem] bg-[#8D6E63]/15 rounded-full blur-3xl pointer-events-none -ml-28 -mb-28"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center relative z-10">
            
            {/* Left Content (7 cols) */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              {/* Headline */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#FAF8F5] leading-[1.15] mb-6">
                Você é construtor ou financeira? <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D1B688] via-[#FAF8F5] to-[#D1B688]">
                  Pare de bancar a obra do seu cliente.
                </span>
              </h1>

              {/* Subheadline */}
              <p className="text-base sm:text-lg lg:text-xl text-[#FAF8F5]/90 font-normal leading-relaxed mb-8 max-w-2xl">
                Planejamento de fluxo de caixa orçado vs. realizado, compras programadas e controle rigoroso de contratos. Construímos processos financeiros sólidos e graduais para que cada projeto entregue o lucro real que foi planejado.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
                <button
                  type="button"
                  onClick={() => openModal('Construção Civil & Obras')}
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 sm:py-4 rounded-xl bg-[#D1B688] hover:bg-[#b89b6c] text-[#1C1815] font-bold text-sm sm:text-base tracking-normal shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-200 group whitespace-nowrap cursor-pointer shrink-0"
                >
                  <MessageCircle className="w-5 h-5 text-[#1C1815] shrink-0" />
                  <span className="whitespace-nowrap">Agendar Diagnóstico de Caixa</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform shrink-0" />
                </button>

                <a
                  href="#solucoes"
                  className="inline-flex items-center justify-center px-6 py-3.5 sm:py-4 rounded-xl border border-[#FAF8F5]/30 hover:border-[#FAF8F5]/70 text-[#FAF8F5] hover:bg-white/5 font-semibold text-sm sm:text-base transition-all duration-200 whitespace-nowrap text-center shrink-0"
                >
                  <span className="whitespace-nowrap">Entender Nossas Soluções</span>
                </a>
              </div>
            </div>

            {/* Right Visual Image Column (5 cols) com Foto Oficial Limpa */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-[#FAF8F5]/20 aspect-[3/4] group bg-[#2C1810]">
                <img
                  src={heroEngineerImg}
                  alt="Diretor de engenharia e gestão de obras · OECO"
                  className="w-full h-full object-cover object-[center_20%] group-hover:scale-103 transition-transform duration-700 filter brightness-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1C1815]/70 via-transparent to-transparent"></div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
