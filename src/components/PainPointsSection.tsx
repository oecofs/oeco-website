import React from 'react';
import { CalendarClock, ShoppingCart, FileWarning, Coins, ArrowRight } from 'lucide-react';
import { buildWhatsAppLink, DEFAULT_WHATSAPP_MESSAGES } from '../utils/whatsapp';

export const PainPointsSection: React.FC = () => {
  const painPoints = [
    {
      icon: CalendarClock,
      tag: 'Fluxo de Caixa & Prazos',
      tagColor: 'bg-amber-100/90 text-amber-950 border-amber-300',
      title: 'O Abismo do Descasamento (Dia 20 & 5º Dia Útil)',
      description:
        'A folha de pagamento não espera: são duas saídas pesadas a cada 15 dias (adiantamento no dia 20 e saldo no 5º dia útil). Por outro lado, a medição do cliente só é faturada após a conclusão da etapa e o pagamento leva 30, 60 ou até 90 dias para cair. Cobrir esse buraco temporário com cheque especial e empréstimos bancários engole toda a margem que foi orçada.',
      solution: 'Equalização entre prazo médio de pagamento e recebimento com fluxo projetado com antecedência.',
    },
    {
      icon: ShoppingCart,
      tag: 'Compras & Suprimentos',
      tagColor: 'bg-rose-100/90 text-rose-950 border-rose-300',
      title: 'O Preço Oculto da Urgência (Compras de Balcão)',
      description:
        'A obra fica sem cimento, tubos ou fiação na sexta-feira à tarde. Para não paralisar os pedreiros, o encarregado compra na loja de materiais da esquina pagando até 40% de ágio. A loja da esquina enriquece com a sua urgência, enquanto os descontos industriais de compras à vista e programadas evaporam.',
      solution: 'Cronograma financeiro de compras alinhado à curva de suprimentos, garantindo descontos à vista.',
    },
    {
      icon: FileWarning,
      tag: 'Gestão de Contratos',
      tagColor: 'bg-orange-100/90 text-orange-950 border-orange-300',
      title: 'A Armadilha dos "Pequenos Favores" (Aditivos Esquecidos)',
      description:
        'O cliente visita a obra e pede para trocar acabamentos ou "só mudar uma tomadinha de lugar". A equipe executa para agradar e não travar o canteiro, mas o financeiro não formaliza a cobrança do aditivo. No fechamento, a construtora financiou o luxo do cliente do próprio bolso.',
      solution: 'Régua técnica e despersonalizada de formalização de aditivos antes de qualquer alteração de escopo.',
    },
    {
      icon: Coins,
      tag: 'Recuperação de Margem',
      tagColor: 'bg-emerald-100/90 text-emerald-950 border-emerald-300',
      title: 'O Limbo das Retenções Técnicas (Dinheiro Esquecido)',
      description:
        'Muitos contratos exigem retenção de 5% a 10% de garantia até a entrega final. A obra física é entregue, a equipe corre para o próximo canteiro e o escritório esquece de resgatar esse valor meses depois. Muitas vezes, todo o lucro líquido do projeto estava exatamente nesse dinheiro esquecido.',
      solution: 'Auditoria de contratos com régua ativa para liberação e cobrança de cada centavo retido.',
    },
  ];

  return (
    <section id="dores" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#2C1810] tracking-tight mb-5 leading-tight">
            A sua obra deu lucro na planilha, mas a conta fechou no vermelho <br className="hidden sm:inline" />
            <span className="text-[#5C3A1A] underline decoration-[#D1B688]/70 underline-offset-8">
              Por que isso acontece?
            </span>
          </h2>
          <p className="text-base sm:text-lg text-[#5C3A1A]/85 leading-relaxed">
            Faturamento é vaidade; lucro é sanidade. Empresas de engenharia e construção raramente enfrentam dificuldades por falta de contratos; elas sangram nas falhas silenciosas da rotina financeira.
          </p>
        </div>

        {/* Editorial Visual Banner: Canteiro em Ação (Enquadramento Natural 2.35/1) */}
        <div className="mb-14 rounded-3xl overflow-hidden border border-[#EAE7DE] shadow-lg relative aspect-[16/9] sm:aspect-[2.35/1] group bg-[#1C1815]">
          <img
            src="/images/site/canteiro-sunset.jpg"
            alt="Canteiro de obras de grande porte ao entardecer"
            className="w-full h-full object-cover object-center filter brightness-[0.92] group-hover:scale-102 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1C1815]/95 via-[#1C1815]/40 to-transparent sm:bg-gradient-to-r sm:from-[#1C1815]/95 sm:via-[#1C1815]/50 sm:to-transparent"></div>
          <div className="absolute inset-0 p-6 sm:p-10 flex flex-col justify-end max-w-xl">
            <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-white leading-snug">
              Grandes obras exigem controle de caixa no mesmo rigor da engenharia de campo
            </p>
          </div>
        </div>

        {/* 4 Cards Grid (Glassmorphism & Legibilidade Confortável) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {painPoints.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="rounded-3xl p-8 sm:p-10 bg-white/90 backdrop-blur-sm border border-[#EAE7DE] shadow-sm hover:shadow-xl hover:border-[#D1B688] transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Card Top */}
                  <div className="flex items-center justify-between gap-3 mb-6">
                    <span
                      className={`text-xs font-bold tracking-wider uppercase px-3.5 py-1.5 rounded-lg border ${item.tagColor}`}
                    >
                      {item.tag}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-[#FAF8F5] border border-[#EAE7DE] flex items-center justify-center group-hover:bg-[#2C1810] group-hover:text-[#D1B688] text-[#5C3A1A] transition-colors duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-bold text-[#2C1810] mb-4 group-hover:text-[#5C3A1A] transition-colors leading-snug">
                    {item.title}
                  </h3>

                  {/* Description (Ampliado para 15px-16px) */}
                  <p className="text-sm sm:text-base text-[#5C3A1A]/90 leading-relaxed mb-8">
                    {item.description}
                  </p>
                </div>

                {/* OECO Solution Footer */}
                <div className="pt-5 border-t border-[#EAE7DE] bg-[#FAF8F5]/80 -mx-8 sm:-mx-10 -mb-8 sm:-mb-10 p-6 px-8 sm:px-10 rounded-b-3xl">
                  <p className="text-xs font-bold text-[#4F6D46] uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#4F6D46]"></span>
                    Como a OECO estanca esse vazamento:
                  </p>
                  <p className="text-sm sm:text-base text-[#2C1810] font-semibold leading-relaxed">
                    {item.solution}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Section Bottom Callout */}
        <div className="mt-14 p-8 sm:p-10 rounded-3xl bg-[#2C1810] text-[#FAF8F5] border border-[#5C3A1A] flex flex-col sm:flex-row items-center justify-between gap-8 shadow-xl">
          <div>
            <h4 className="text-lg sm:text-xl font-bold text-[#FAF8F5]">
              Identifique quanto a sua construtora está deixando na mesa todo mês
            </h4>
            <p className="text-sm text-[#FAF8F5]/80 mt-1">
              Uma conversa técnica e objetiva de 30 minutos sobre a estrutura de caixa dos seus projetos.
            </p>
          </div>
          <a
            href={buildWhatsAppLink(DEFAULT_WHATSAPP_MESSAGES.strategic)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-7 py-4 rounded-xl bg-[#D1B688] hover:bg-[#b89b6c] text-[#1C1815] font-extrabold text-sm tracking-wide shrink-0 transition-all duration-200 group shadow-lg"
          >
            <span>Analisar Meus Projetos</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

      </div>
    </section>
  );
};
