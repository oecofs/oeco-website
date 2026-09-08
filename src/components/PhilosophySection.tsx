import React from 'react';
import { Layers, Compass, CheckCircle2, ShieldAlert } from 'lucide-react';

export const PhilosophySection: React.FC = () => {
  const pillars = [
    {
      icon: Layers,
      title: 'Rotina Diária & Disciplina Inegociável',
      subtitle: 'Sem acúmulo no fim do mês',
      description:
        'Nada de empilhar notas fiscais e extratos bancários para tentar fechar no desespero dos últimos dias. A conciliação diária e a gestão rigorosa de pagamentos e recebimentos rodam todos os dias úteis como um relógio.',
    },
    {
      icon: Compass,
      title: 'Ajuste Gradativo & Respeito à Operação',
      subtitle: 'Sem atalhos ou fórmulas mágicas',
      description:
        'Não impomos softwares mirabolantes que ninguém na obra vai usar. Amamos o processo: implementamos melhorias graduais e contínuas que se integram com naturalidade à rotina do seu escritório e canteiro.',
    },
    {
      icon: CheckCircle2,
      title: 'Previsibilidade & Decisão Antecipada',
      subtitle: 'Olhar pelo para-brisa, não pelo retrovisor',
      description:
        'A maioria dos empresários só sabe o resultado da empresa quando o mês já acabou. Na Oeco, a rotina estruturada permite enxergar as semanas e meses à frente, agindo antes que o problema vire um rombo no caixa.',
    },
  ];

  return (
    <section id="filosofia" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#F4EFEA]/70 border-y border-[#EAE7DE]">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
          <span className="text-xs font-mono font-bold tracking-widest text-[#5C3A1A] uppercase bg-[#D1B688]/30 px-4 py-1.5 rounded-full border border-[#D1B688]/60">
            A NOSSA METODOLOGIA
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#2C1810] tracking-tight mt-4 mb-5 leading-tight">
            Não acreditamos em fórmulas mágicas. <br />
            <span className="text-[#4F6D46]">Acreditamos na solidez do processo.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#5C3A1A]/85 leading-relaxed">
            Assim como não se ergue uma edificação sem fundações profundas, não existe lucratividade sustentável sem rotinas financeiras sólidas. Nós amamos o processo de construir consistência dia após dia — sem jeitinhos, sem improvisos e sem atalhos.
          </p>
        </div>

        {/* 3 Pillars Cards (Fontes confortáveis e visual respirado) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="rounded-3xl p-8 sm:p-10 bg-white/95 backdrop-blur-sm border border-[#EAE7DE] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-[#2C1810] text-[#D1B688] flex items-center justify-center mb-6 shadow-md">
                    <Icon className="w-7 h-7" />
                  </div>
                  <p className="text-xs font-mono font-bold tracking-wider text-[#6B7F5A] uppercase mb-2">
                    {pillar.subtitle}
                  </p>
                  <h3 className="text-xl font-bold text-[#2C1810] mb-4 leading-snug">
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

        {/* Highlight quote box */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-white border-l-4 border-[#4F6D46] shadow-sm max-w-4xl mx-auto flex flex-col sm:flex-row items-start sm:items-center gap-5">
          <div className="w-12 h-12 rounded-full bg-[#4F6D46]/10 text-[#4F6D46] flex items-center justify-center shrink-0">
            <ShieldAlert className="w-6 h-6" />
          </div>
          <div>
            <p className="text-sm sm:text-base text-[#2C1810] font-medium leading-relaxed italic">
              "Pequenos ajustes e disciplina diária geram resultados exponenciais no longo prazo. Faturamento alto sem processo é apenas um castelo de cartas esperando a primeira crise para ruir."
            </p>
            <p className="text-xs font-bold text-[#6B7F5A] tracking-wider uppercase mt-1.5">
              Princípio Fundamental OECO
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
