import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, ArrowRight, ShieldCheck, Phone, MapPin } from 'lucide-react';
import { buildWhatsAppLink, DEFAULT_WHATSAPP_MESSAGES } from '../utils/whatsapp';

export const CtaFooterSection: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1C1815] text-[#FAF8F5] pt-16 pb-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden border-t border-[#2E2824]">
      
      {/* Subtle Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[40rem] h-[20rem] bg-[#4F6D46]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Pre-Footer Action Box */}
        <div className="p-8 sm:p-12 lg:p-16 rounded-3xl bg-gradient-to-br from-[#2C1810] to-[#1C1815] border border-[#D1B688]/40 shadow-2xl text-center mb-20 relative overflow-hidden">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#FAF8F5] tracking-tight mb-5 leading-tight">
              Vamos analisar o fluxo de caixa dos seus projetos atuais?
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-[#FAF8F5]/85 leading-relaxed mb-8 max-w-2xl mx-auto">
              Em 30 minutos, mostramos onde a sua empresa pode estar perdendo margem e como estruturar processos diários sólidos sem interromper o andamento do canteiro.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={buildWhatsAppLink(DEFAULT_WHATSAPP_MESSAGES.hero)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-[#D1B688] hover:bg-[#b89b6c] text-[#1C1815] font-extrabold text-base tracking-wide shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-200 group"
              >
                <MessageCircle className="w-5 h-5 text-[#1C1815]" />
                <span>Agendar Diagnóstico no WhatsApp</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
            <div className="mt-6 flex items-center justify-center gap-2 text-xs sm:text-sm text-[#FAF8F5]/70">
              <ShieldCheck className="w-4 h-4 text-[#4F6D46]" />
              <span>Conversa técnica, confidencial e sem compromisso.</span>
            </div>
          </div>
        </div>

        {/* Footer Navigation Columns */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#FAF8F5]/10">
          
          {/* Brand Info (5 cols) */}
          <div className="md:col-span-5">
            <div className="mb-5">
              <img
                src="/images/brand/logo-oeco-gold.png?v=2"
                alt="OECO Financial Solutions"
                className="h-9 sm:h-10 w-auto object-contain"
              />
            </div>
            <p className="text-sm text-[#FAF8F5]/75 leading-relaxed max-w-sm mb-6">
              Gestão financeira estratégica e BPO para construtoras, empresas de projetos e negócios em expansão. Construindo processos financeiros sólidos, consistentes e sem atalhos.
            </p>
            <div className="space-y-2.5 text-sm text-[#FAF8F5]/80">
              <p className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-[#D1B688]" />
                <span>Rio de Janeiro, RJ · Atendimento Nacional</span>
              </p>
              <p className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#D1B688]" />
                <span>(21) 97341-3967</span>
              </p>
            </div>
          </div>

          {/* Nav Links (4 cols) */}
          <div className="md:col-span-4">
            <p className="text-xs font-mono font-bold tracking-widest text-[#D1B688] uppercase mb-4">
              NAVEGAÇÃO
            </p>
            <ul className="space-y-3 text-sm text-[#FAF8F5]/80">
              <li>
                <Link to="/historia" className="text-[#D1B688] font-semibold hover:underline transition-colors flex items-center gap-1.5">
                  <span>🌿 Nossa História &amp; Propósito</span>
                </Link>
              </li>
              <li>
                <Link to="/#dores" className="hover:text-[#FAF8F5] transition-colors">Dores do Canteiro</Link>
              </li>
              <li>
                <Link to="/#filosofia" className="hover:text-[#FAF8F5] transition-colors">Metodologia &amp; Processo</Link>
              </li>
              <li>
                <Link to="/#contabilidade" className="hover:text-[#FAF8F5] transition-colors">Aliança Contábil</Link>
              </li>
              <li>
                <Link to="/#solucoes" className="hover:text-[#FAF8F5] transition-colors">BPO Operacional vs. Estratégico</Link>
              </li>
              <li>
                <Link to="/#faq" className="hover:text-[#FAF8F5] transition-colors">Dúvidas Frequentes (FAQ)</Link>
              </li>
            </ul>
          </div>

          {/* Quick Contact (3 cols) */}
          <div className="md:col-span-3">
            <p className="text-xs font-mono font-bold tracking-widest text-[#D1B688] uppercase mb-4">
              ATENDIMENTO DIRETO
            </p>
            <p className="text-sm text-[#FAF8F5]/75 leading-relaxed mb-4">
              Atendemos de segunda a sexta, das 09h às 18h com suporte consultivo dedicado.
            </p>
            <a
              href={buildWhatsAppLink(DEFAULT_WHATSAPP_MESSAGES.general)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-[#FAF8F5]/10 hover:bg-[#FAF8F5]/20 text-[#D1B688] text-sm font-semibold border border-[#D1B688]/30 transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chamar no WhatsApp</span>
            </a>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#FAF8F5]/60">
          <p>© {currentYear} OECO Financial Solutions. Todos os direitos reservados.</p>
          <p className="font-mono text-[11px] tracking-wider text-[#D1B688]/80">
            PRECISÃO · PROCESSO CONTÍNUO · DISCIPLINA
          </p>
        </div>

      </div>
    </footer>
  );
};
