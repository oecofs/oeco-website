import React from 'react';
import { MessageCircle, ArrowRight, TrendingUp, ShieldCheck, HardHat, CheckCircle2 } from 'lucide-react';
import { buildWhatsAppLink, DEFAULT_WHATSAPP_MESSAGES } from '../utils/whatsapp';

export const HeroSection: React.FC = () => {
  return (
    <section className="pt-28 sm:pt-36 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Main Dark Editorial Hero Card (BNI Perfil-GAINS Style) */}
        <div className="bg-[#1C1815] text-[#FAF8F5] rounded-3xl p-6 sm:p-10 lg:p-14 shadow-2xl border border-[#2E2824] relative overflow-hidden">
          
          {/* Subtle Ambient Glows */}
          <div className="absolute top-0 right-0 w-[32rem] h-[32rem] bg-[#4F6D46]/15 rounded-full blur-3xl pointer-events-none -mr-28 -mt-28"></div>
          <div className="absolute bottom-0 left-0 w-[26rem] h-[26rem] bg-[#8D6E63]/15 rounded-full blur-3xl pointer-events-none -ml-28 -mb-28"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center relative z-10">
            
            {/* Left Content (7 cols) */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              
              {/* Discrete Tag */}
              <div className="inline-flex items-center gap-2 mb-5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#D1B688]"></span>
                <span className="text-xs font-mono tracking-widest text-[#D1B688] uppercase font-bold">
                  GESTÃO FINANCEIRA ESTRATÉGICA · OBRAS &amp; PROJETOS
                </span>
              </div>

              {/* Headline */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#FAF8F5] leading-[1.15] mb-6">
                Você é construtor ou financeira? <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D1B688] via-[#FAF8F5] to-[#D1B688]">
                  Pare de bancar a obra do seu cliente.
                </span>
              </h1>

              {/* Subheadline (Ampliado para 18px-20px com máximo conforto) */}
              <p className="text-base sm:text-lg lg:text-xl text-[#FAF8F5]/90 font-normal leading-relaxed mb-8 max-w-2xl">
                Planejamento de fluxo de caixa orçado vs. realizado, compras programadas e controle rigoroso de contratos. Construímos processos financeiros sólidos e graduais para que cada projeto entregue o lucro real que foi planejado.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
                <a
                  href={buildWhatsAppLink(DEFAULT_WHATSAPP_MESSAGES.hero)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-[#D1B688] hover:bg-[#b89b6c] text-[#1C1815] font-extrabold text-base tracking-wide shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-200 group"
                >
                  <MessageCircle className="w-5 h-5 text-[#1C1815]" />
                  <span>Agendar Diagnóstico de Caixa</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>

                <a
                  href="#solucoes"
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl border border-[#FAF8F5]/25 hover:border-[#FAF8F5]/60 text-[#FAF8F5] hover:bg-white/5 font-semibold text-base transition-all duration-200"
                >
                  <span>Entender Nossas Soluções</span>
                </a>
              </div>

              {/* 3 Key Operational Pillars (Legibilidade reforçada) */}
              <div className="pt-6 border-t border-[#FAF8F5]/15 grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="w-5 h-5 text-[#D1B688] shrink-0" />
                  <span className="text-sm text-[#FAF8F5]/90 font-medium">Projetos &gt; R$ 3 Milhões</span>
                </div>
                <div className="flex items-center gap-3">
                  <TrendingUp className="w-5 h-5 text-[#4F6D46] shrink-0" />
                  <span className="text-sm text-[#FAF8F5]/90 font-medium">Orçado vs. Realizado</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#D1B688] shrink-0" />
                  <span className="text-sm text-[#FAF8F5]/90 font-medium">Processo &amp; Disciplina</span>
                </div>
              </div>

            </div>

            {/* Right Visual Image Column (5 cols) com Foto Oficial do Ensaio v2 */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-[#FAF8F5]/20 aspect-[3/4] group bg-[#2C1810]">
                <img
                  src="/images/photoshoot/web/IMG_8156_-_v2-web.jpg"
                  alt="Matheus Marques · OECO Financial Solutions"
                  className="w-full h-full object-cover object-[center_15%] group-hover:scale-103 transition-transform duration-700 filter brightness-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1C1815]/95 via-[#1C1815]/20 to-transparent"></div>
                
                {/* Floating Glassmorphism Metric Badge */}
                <div className="absolute bottom-5 left-4 right-4 p-4 sm:p-5 rounded-xl bg-[#1C1815]/95 backdrop-blur-md border border-[#D1B688]/40 shadow-xl">
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-lg bg-[#4F6D46]/40 border border-[#4F6D46] flex items-center justify-center shrink-0">
                      <HardHat className="w-5 h-5 text-[#FAF8F5]" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[#D1B688] tracking-wider uppercase">Visão de Canteiro &amp; Caixa</p>
                      <p className="text-xs sm:text-sm text-[#FAF8F5] leading-snug font-medium">Cada 1% de margem protegido na obra é lucro líquido no seu bolso.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
