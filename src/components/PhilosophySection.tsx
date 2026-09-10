import React from 'react';
import { Layers, Compass, CheckCircle2, ShieldAlert } from 'lucide-react';

export const PhilosophySection: React.FC = () => {
  const pillars = [
    {
      icon: Layers,
      title: 'Disciplina Diária de Caixa',
      subtitle: 'Sem acúmulo no fim do mês',
      description:
        'Nada de empilhar notas fiscais e extratos bancários para tentar fechar no desespero dos últimos dias. A conciliação diária e a gestão rigorosa de pagamentos e recebimentos rodam todos os dias úteis como um relógio.',
    },
    {
      icon: Compass,
      title: 'Melhoria Gradual e Contínua',
      subtitle: 'Sem atalhos ou fórmulas mágicas',
      description:
        'Não impomos softwares mirabolantes que ninguém na obra vai usar. Amamos o processo: implementamos melhorias graduais e contínuas que se integram com naturalidade à rotina do seu escritório e canteiro.',
    },
    {
      icon: CheckCircle2,
      title: 'Previsibilidade e Decisão Antecipada',
      subtitle: 'Olhar pelo para-brisa, não pelo retrovisor',
      description:
        'A maioria dos empresários só sabe o resultado da empresa quando o mês já acabou. Na OECO, a rotina estruturada permite enxergar as semanas e meses à frente, agindo antes que o problema vire um rombo no caixa.',
    },
  ];

  return (
    <section id="filosofia" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#F4EFEA]/70 border-y border-[#EAE7DE]">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#2C1810] tracking-tight mb-5 leading-tight">
            Não acreditamos em fórmulas mágicas <br />
            <span className="text-[#4F6D46]">Acreditamos na solidez do processo</span>
          </h2>
          <p className="text-base sm:text-lg text-[#5C3A1A]/85 leading-relaxed">
            Assim como não se ergue uma edificação sem fundações profundas, não existe lucratividade sustentável sem rotinas financeiras sólidas. Nós amamos o processo de construir consistência dia após dia — sem jeitinhos, sem improvisos e sem atalhos.
          </p>
        </div>

        {/* 3 Pillars Cards (Design Legível, Equilibrado e Sofisticado) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="rounded-3xl p-8 sm:p-10 bg-white border border-[#EAE7DE] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-13 h-13 rounded-2xl bg-[#2C1810] text-[#D1B688] flex items-center justify-center mb-6 shadow-sm">
                    <Icon className="w-6 h-6" />
                  </div>
                  
                  <span className="inline-block text-xs font-bold uppercase tracking-wider text-[#4F6D46] bg-[#4F6D46]/10 px-3 py-1 rounded-md mb-3">
                    {pillar.subtitle}
                  </span>

                  <h3 className="text-xl sm:text-2xl font-bold text-[#1C1815] mb-3 leading-snug tracking-tight">
                    {pillar.title}
                  </h3>

                  <p className="text-sm sm:text-base text-[#5C3A1A]/85 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Highlight box with Foundations Image */}
        <div className="mt-14 rounded-3xl overflow-hidden bg-white border border-[#EAE7DE] shadow-md grid grid-cols-1 lg:grid-cols-12 items-stretch">
          <div className="lg:col-span-5 min-h-[220px] lg:min-h-[260px] relative overflow-hidden group">
            <img
              src="/images/site/fundacoes-solidez.jpg"
              alt="Fundações sólidas em concreto e armadura de aço"
              className="w-full h-full object-cover filter brightness-95 group-hover:scale-103 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-transparent via-black/20 to-transparent lg:to-white/40"></div>
          </div>
          <div className="lg:col-span-7 p-8 sm:p-10 flex flex-col justify-center bg-white">
            <div className="w-12 h-12 rounded-2xl bg-[#4F6D46]/10 text-[#4F6D46] flex items-center justify-center mb-4">
              <ShieldAlert className="w-6 h-6" />
            </div>
            <p className="text-base sm:text-lg text-[#2C1810] font-medium leading-relaxed italic mb-3">
              "Pequenos ajustes e disciplina diária geram resultados exponenciais no longo prazo. Faturamento alto sem processo é apenas um castelo de cartas esperando a primeira crise para ruir."
            </p>
            <p className="text-xs font-bold text-[#6B7F5A] tracking-wider uppercase">
              Princípio Fundamental OECO · Fundações Estruturadas
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
