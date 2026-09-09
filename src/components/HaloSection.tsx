import React from 'react';
import { MessageCircle, ArrowRight } from 'lucide-react';
import { buildWhatsAppLink, DEFAULT_WHATSAPP_MESSAGES } from '../utils/whatsapp';
import { useDiagnosticModal } from '../context/DiagnosticModalContext';

export const HaloSection: React.FC = () => {
  const { openModal } = useDiagnosticModal();
  const sectors = [
    {
      title: 'Clínicas & Saúde em Geral',
      badge: 'Saúde & Terapias',
      image: '/images/site/setor-saude-clinicas.jpg?v=1',
      profiles: [
        'Clínicas Médicas e Especialidades',
        'Consultórios Odontológicos',
        'Centros de Fisioterapia e Psicologia',
        'Clínicas de Estética e Diagnóstico',
      ],
    },
    {
      title: 'Profissionais Liberais',
      badge: 'Atuação Autônoma',
      image: '/images/site/setor-profissionais-liberais.jpg?v=1',
      profiles: [
        'Engenheiros Consultores e Peritos',
        'Médicos e Cirurgiões',
        'Advogados e Escritórios Jurídicos',
        'Arquitetos e Designers de Interiores',
      ],
    },
    {
      title: 'Empresas de Tecnologia',
      badge: 'Inovação & Digital',
      image: '/images/site/setor-tecnologia-software.jpg?v=1',
      profiles: [
        'Startups e Negócios Digitais',
        'Software Houses e SaaS',
        'Fábricas de Aplicativos e Tech',
        'Agências e Estúdios de Produto',
      ],
    },
    {
      title: 'Serviços B2B & Consultorias',
      badge: 'Corporativo & Contratos',
      image: '/images/site/setor-servicos-b2b.jpg?v=1',
      profiles: [
        'Consultorias de Gestão e RH',
        'Empresas de Projetos e Fiscalização',
        'Prestadores de Serviços Corporativos',
        'Negócios Baseados em Contratos',
      ],
    },
  ];

  return (
    <section id="segmentos" className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#F4EFEA]/60 border-t border-[#EAE7DE]">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header Refinado */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#2C1810] tracking-tight mb-4 leading-tight">
            Não atua na construção civil? <br className="hidden sm:inline" />
            <span className="text-[#4F6D46]">
              O mesmo método e governança para o seu setor.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-[#5C3A1A]/85 leading-relaxed">
            A disciplina de conciliação diária, previsibilidade de fluxo de caixa e governança sólida da OECO estruturadas para a dinâmica e os desafios da sua empresa.
          </p>
        </div>

        {/* 4 Cards Grid com Ilustrações e Perfis de Clientes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {sectors.map((s, idx) => (
            <div
              key={idx}
              className="rounded-3xl bg-white border border-[#EAE7DE] shadow-sm hover:border-[#D1B688] hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between group"
            >
              {/* Illustration Banner */}
              <div className="relative aspect-[4/3] overflow-hidden bg-[#FAF8F5] border-b border-[#EAE7DE]">
                <img
                  src={s.image}
                  alt={s.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 filter contrast-[1.02]"
                />
                <div className="absolute top-3 left-3">
                  <span className="inline-block text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[#4F6D46] bg-white/95 backdrop-blur-sm border border-[#EAE7DE] px-2.5 py-1 rounded-full shadow-sm">
                    {s.badge}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#1C1815] mb-4 leading-snug">
                    {s.title}
                  </h3>

                  <ul className="space-y-2.5 text-sm text-[#5C3A1A]/85">
                    {s.profiles.map((profile, pIdx) => (
                      <li key={pIdx} className="flex items-center gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#4F6D46] shrink-0" />
                        <span>{profile}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
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
            <button
              type="button"
              onClick={() => openModal()}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-[#D1B688] hover:bg-[#b89b6c] text-[#1C1815] font-extrabold text-base tracking-wide shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-200 group"
            >
              <MessageCircle className="w-5 h-5 text-[#1C1815]" />
              <span>Solicitar Diagnóstico para Minha Empresa</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
