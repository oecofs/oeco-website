import React from 'react';
import { Stethoscope, Laptop, Wrench, Building, ArrowRight } from 'lucide-react';
import { buildWhatsAppLink, DEFAULT_WHATSAPP_MESSAGES } from '../utils/whatsapp';

export const HaloSection: React.FC = () => {
  const sectors = [
    {
      icon: Wrench,
      name: 'Engenharia Consultiva & Projetos',
      desc: 'Controle de custos por contrato, alocação de horas e fluxo financeiro por cliente.',
    },
    {
      icon: Stethoscope,
      name: 'Clínicas & Centros de Saúde',
      desc: 'Conciliação de repasses médicos, convênios, cartão e controle de custos de insumos.',
    },
    {
      icon: Laptop,
      name: 'Tecnologia & Serviços B2B',
      desc: 'Gestão de contratos recorrentes, previsão de faturamento e controle rígido de margem.',
    },
    {
      icon: Building,
      name: 'Empresas em Expansão (> R$ 100k/mês)',
      desc: 'Estrutura financeira profissional para empresas que atingiram um patamar que exige rigor.',
    },
  ];

  return (
    <section className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#F4EFEA]/60 border-t border-[#EAE7DE]">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#2C1810] tracking-tight mb-4">
            Não atua na construção civil? <br className="hidden sm:inline" />
            <span className="text-[#4F6D46]">
              Aplicamos o mesmo rigor de processo ao seu negócio.
            </span>
          </h2>
          <p className="text-sm sm:text-base text-[#5C3A1A]/85 leading-relaxed">
            Quem domina a complexidade de canteiros, compras industriais e contratos de milhões opera a rotina financeira da sua empresa com facilidade, método e segurança inabalável.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {sectors.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div
                key={idx}
                className="p-7 rounded-3xl bg-white border border-[#EAE7DE] shadow-sm hover:border-[#D1B688] hover:shadow-md transition-all duration-200"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#FAF8F5] border border-[#EAE7DE] flex items-center justify-center text-[#5C3A1A] mb-5">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[#2C1810] mb-2.5">{s.name}</h3>
                <p className="text-sm text-[#5C3A1A]/80 leading-relaxed">{s.desc}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <a
            href={buildWhatsAppLink(DEFAULT_WHATSAPP_MESSAGES.operational)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm sm:text-base font-bold text-[#5C3A1A] hover:text-[#2C1810] hover:underline transition-colors"
          >
            <span>Quer entender como o BPO se aplica ao seu setor? Fale com nossa equipe</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
