import React from 'react';
import { Stethoscope, Laptop, UserCheck, Briefcase, MessageCircle, ArrowRight } from 'lucide-react';
import { buildWhatsAppLink, DEFAULT_WHATSAPP_MESSAGES } from '../utils/whatsapp';

export const HaloSection: React.FC = () => {
  const sectors = [
    {
      icon: Stethoscope,
      name: 'Clínicas & Saúde em Geral',
      tag: 'Médicas, Odontológicas & Terapias',
      desc: 'Conciliação de convênios, cartões, repasses a profissionais parceiros e controle apurado de custos operacionais e insumos.',
    },
    {
      icon: UserCheck,
      name: 'Profissionais Liberais',
      tag: 'Engenheiros, Psicólogos, Médicos, Advogados',
      desc: 'Gestão financeira e conciliação dedicada, separando com clareza a pessoa física da jurídica e eliminando o retrabalho.',
    },
    {
      icon: Laptop,
      name: 'Empresas de Tecnologia',
      tag: 'Startups, Software Houses & SaaS',
      desc: 'Previsibilidade de receitas recorrentes, controle rígido de despesas e relatórios gerenciais claros para os sócios.',
    },
    {
      icon: Briefcase,
      name: 'Serviços B2B & Consultorias',
      tag: 'Contratos & Prestação de Serviços',
      desc: 'Emissão de notas fiscais, cobrança ativa, controle de retenções tributárias e acompanhamento diário de fluxo de caixa.',
    },
  ];

  return (
    <section id="segmentos" className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#F4EFEA]/60 border-t border-[#EAE7DE]">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#2C1810] tracking-tight mb-4">
            Não atua na construção civil? <br className="hidden sm:inline" />
            <span className="text-[#4F6D46]">
              Aplicamos o mesmo rigor de processo ao seu negócio.
            </span>
          </h2>
          <p className="text-sm sm:text-base text-[#5C3A1A]/85 leading-relaxed">
            Quem domina a complexidade de canteiros, compras industriais e contratos rigorosos opera a rotina financeira da sua empresa com facilidade, método e segurança inabalável.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {sectors.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div
                key={idx}
                className="p-7 rounded-3xl bg-white border border-[#EAE7DE] shadow-sm hover:border-[#D1B688] hover:shadow-md transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#FAF8F5] border border-[#EAE7DE] flex items-center justify-center text-[#5C3A1A] mb-5">
                    <Icon className="w-6 h-6 text-[#4F6D46]" />
                  </div>
                  <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-[#6B7F5A] bg-[#4F6D46]/10 px-2.5 py-0.5 rounded mb-2">
                    {s.tag}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-[#2C1810] mb-2.5">{s.name}</h3>
                  <p className="text-sm text-[#5C3A1A]/80 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Destaque de Alto Impacto */}
        <div className="mt-14 p-8 sm:p-10 lg:p-12 rounded-3xl bg-gradient-to-br from-[#2C1810] via-[#1C1815] to-[#2C1810] text-[#FAF8F5] border border-[#D1B688]/40 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8 relative overflow-hidden">
          {/* Ambient Glow */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-[#4F6D46]/20 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>

          <div className="relative z-10 max-w-2xl text-center lg:text-left">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#FAF8F5] mb-3 leading-snug">
              Quer entender como a metodologia OECO se aplica ao seu negócio?
            </h3>
            <p className="text-sm sm:text-base text-[#FAF8F5]/85 leading-relaxed">
              Analisamos a rotina e os desafios da sua empresa para desenhar uma gestão sob medida, trazendo clareza, previsibilidade e noites tranquilas de sono.
            </p>
          </div>

          <div className="relative z-10 shrink-0 w-full sm:w-auto">
            <a
              href={buildWhatsAppLink(DEFAULT_WHATSAPP_MESSAGES.operational)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-[#D1B688] hover:bg-[#b89b6c] text-[#1C1815] font-extrabold text-base tracking-wide shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-200 group"
            >
              <MessageCircle className="w-5 h-5 text-[#1C1815]" />
              <span>Falar com Nossa Equipe no WhatsApp</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
