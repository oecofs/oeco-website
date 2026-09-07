import React from 'react';
import { CalendarClock, ShoppingCart, FileWarning, Coins, ArrowRight } from 'lucide-react';
import { buildWhatsAppLink, DEFAULT_WHATSAPP_MESSAGES } from '../utils/whatsapp';

export const PainPointsSection: React.FC = () => {
  const painPoints = [
    {
      icon: CalendarClock,
      tag: 'Fluxo de Caixa & Prazos',
      tagColor: 'bg-amber-100/80 text-amber-900 border-amber-300/60',
      title: 'O Abismo do Descasamento (Dia 20 & 5º Dia Útil)',
      description:
        'A folha de pagamento não espera: são duas saídas pesadas a cada 15 dias (adiantamento no dia 20 e saldo no 5º dia útil). Por outro lado, a medição do cliente só é faturada após a conclusão da etapa e o pagamento leva 30, 60 ou até 90 dias para cair. Cobrir esse buraco temporário com cheque especial e empréstimos bancários engole toda a margem que foi orçada.',
      solution: 'Equalização entre prazo médio de pagamento e recebimento com fluxo projetado com antecedência.',
    },
    {
      icon: ShoppingCart,
      tag: 'Compras & Suprimentos',
      tagColor: 'bg-rose-100/80 text-rose-900 border-rose-300/60',
      title: 'O Preço Oculto da Urgência (Compras de Balcão)',
      description:
        'A obra fica sem cimento, tubos ou fiação na sexta-feira à tarde. Para não paralisar os pedreiros, o encarregado compra na loja de materiais da esquina pagando até 40% de ágio. A loja da esquina enriquece com a sua urgência, enquanto os descontos industriais de compras à vista e programadas evaporam.',
      solution: 'Cronograma financeiro de compras alinhado à curva de suprimentos, garantindo descontos à vista.',
    },
    {
      icon: FileWarning,
      tag: 'Gestão de Contratos',
      tagColor: 'bg-orange-100/80 text-orange-900 border-orange-300/60',
      title: 'A Armadilha dos "Pequenos Favores" (Aditivos Esquecidos)',
      description:
        'O cliente visita a obra e pede para trocar acabamentos ou "só mudar uma tomadinha de lugar". A equipe executa para agradar e não travar o canteiro, mas o financeiro não formaliza a cobrança do aditivo. No fechamento, a construtora financiou o luxo do cliente do próprio bolso.',
      solution: 'Régua técnica e despersonalizada de formalização de aditivos antes de qualquer alteração de escopo.',
    },
    {
      icon: Coins,
      tag: 'Recuperação de Margem',
      tagColor: 'bg-emerald-100/80 text-emerald-900 border-emerald-300/60',
      title: 'O Limbo das Retenções Técnicas (Dinheiro Esquecido)',
      description:
        'Muitos contratos exigem retenção de 5% a 10% de garantia até a entrega final. A obra física é entregue, a equipe corre para o próximo canteiro e o escritório esquece de resgatar esse valor meses depois. Muitas vezes, todo o lucro líquido do projeto estava exatamente nesse dinheiro esquecido.',
      solution: 'Auditoria de contratos com régua ativa para liberação e cobrança de cada centavo retido.',
    },
  ];

  return (
    <section id="dores" className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-xs font-mono font-bold tracking-widest text-[#6B7F5A] uppercase bg-[#6B7F5A]/10 px-4 py-1.5 rounded-full border border-[#6B7F5A]/20">
            A TRINCHEIRA DO CANTEIRO DE OBRAS
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#2C1810] tracking-tight mt-4 mb-5 leading-tight">
            A sua obra deu lucro na planilha, mas a conta fechou no vermelho. <br className="hidden sm:inline" />
            <span className="text-[#5C3A1A] underline decoration-[#D1B688]/60 underline-offset-8">
              Por que isso acontece?
            </span>
          </h2>
          <p className="text-sm sm:text-base text-[#5C3A1A]/80 leading-relaxed">
            Faturamento é vaidade; lucro é sanidade. Empresas de engenharia e construção raramente enfrentam dificuldades por falta de contratos; elas sangram nas falhas silenciosas da rotina financeira.
          </p>
        </div>

        {/* 4 Cards Grid (Glassmorphism & Clean Typography) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {painPoints.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="rounded-2xl p-7 sm:p-9 bg-white/80 backdrop-blur-sm border border-[#EAE7DE] shadow-sm hover:shadow-xl hover:border-[#D1B688] transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Card Top */}
                  <div className="flex items-center justify-between gap-3 mb-6">
                    <span
                      className={`text-[11px] font-semibold tracking-wider uppercase px-3 py-1 rounded-md border ${item.tagColor}`}
                    >
                      {item.tag}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-[#FAF8F5] border border-[#EAE7DE] flex items-center justify-center group-hover:bg-[#2C1810] group-hover:text-[#D1B688] text-[#5C3A1A] transition-colors duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-bold text-[#2C1810] mb-3 group-hover:text-[#5C3A1A] transition-colors">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#5C3A1A]/85 leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                {/* OECO Solution Footer */}
                <div className="pt-4 border-t border-[#EAE7DE]/70 bg-[#FAF8F5]/60 -mx-7 -mb-7 p-5 px-7 rounded-b-2xl">
                  <p className="text-[11px] font-bold text-[#4F6D46] uppercase tracking-wide mb-1">
                    Como a OECO estanca esse vazamento:
                  </p>
                  <p className="text-xs text-[#2C1810] font-medium leading-normal">
                    {item.solution}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Section Bottom Callout */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-[#2C1810] text-[#FAF8F5] border border-[#5C3A1A] flex flex-col sm:flex-row items-center justify-between gap-6 shadow-lg">
          <div>
            <p className="text-xs font-mono tracking-widest text-[#D1B688] uppercase mb-1">
              O DIAGNÓSTICO PREVENTIVO
            </p>
            <h4 className="text-base sm:text-lg font-bold text-[#FAF8F5]">
              Identifique quanto a sua construtora está deixando na mesa todo mês.
            </h4>
            <p className="text-xs text-[#FAF8F5]/75 mt-0.5">
              Uma conversa técnica e objetiva de 30 minutos sobre a estrutura de caixa dos seus projetos.
            </p>
          </div>
          <a
            href={buildWhatsAppLink(DEFAULT_WHATSAPP_MESSAGES.strategic)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#D1B688] hover:bg-[#b89b6c] text-[#1C1815] font-bold text-xs tracking-wide shrink-0 transition-all duration-200 group shadow-md"
          >
            <span>Analisar Meus Projetos</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>

      </div>
    </section>
  );
};
