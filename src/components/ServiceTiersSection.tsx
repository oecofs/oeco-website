import React from 'react';
import { Check, MessageCircle, Star, Building2, Briefcase } from 'lucide-react';
import { buildWhatsAppLink, DEFAULT_WHATSAPP_MESSAGES } from '../utils/whatsapp';

export const ServiceTiersSection: React.FC = () => {
  return (
    <section id="solucoes" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#2C1810] tracking-tight mb-5 leading-tight">
            Dois Níveis de Atuação. <br />
            <span className="text-[#5C3A1A] underline decoration-[#D1B688]/70 underline-offset-8">
              O rigor exato para o momento da sua empresa.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-[#5C3A1A]/85 leading-relaxed">
            Seja para estancar o trabalho braçal da rotina diária ou para blindar a margem de obras complexas, estruturamos a sua casa com processos claros e previsibilidade de caixa.
          </p>
        </div>

        {/* 2 Main Cards Grid - Equal Widths (50% / 50%) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
          
          {/* Card 1: BPO Operacional */}
          <div className="rounded-3xl p-8 sm:p-10 lg:p-12 bg-white border border-[#EAE7DE] shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl bg-[#FAF8F5] border border-[#EAE7DE] flex items-center justify-center text-[#5C3A1A]">
                  <Briefcase className="w-7 h-7" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#5C3A1A] bg-[#FAF8F5] px-4 py-1.5 rounded-full border border-[#EAE7DE]">
                  Rotina Impecável
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-[#2C1810] mb-2">
                BPO Financeiro Operacional
              </h3>
              <p className="text-xs sm:text-sm font-bold text-[#6B7F5A] mb-4">
                Para empresas com faturamento a partir de R$ 100k/mês
              </p>
              <p className="text-sm sm:text-base text-[#5C3A1A]/85 mb-8 leading-relaxed">
                Ideal para quem precisa delegar o trabalho braçal do financeiro para especialistas, eliminando noites conferindo extratos e atrasos de pagamento.
              </p>

              <div className="space-y-4 mb-8">
                <p className="text-xs font-bold text-[#2C1810] uppercase tracking-wider">
                  O que está incluso:
                </p>
                {[
                  'Gestão completa de Contas a Pagar e Receber no Nibo',
                  'Conciliação bancária diária (zero acúmulo no fim do mês)',
                  'Emissão e envio de Notas Fiscais e boletos de cobrança',
                  'Agendamento de pagamentos para autorização do gestor',
                  'Relatório mensal de Fluxo de Caixa e DRE gerencial',
                  'Envio de documentos organizados para a sua contabilidade',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#6B7F5A]/20 text-[#6B7F5A] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <span className="text-sm sm:text-base text-[#2C1810]/90 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="p-5 rounded-2xl bg-[#FAF8F5] border border-[#EAE7DE] mb-6">
                <p className="text-sm text-[#5C3A1A] font-medium leading-relaxed">
                  <strong>O alívio do dono:</strong> Cabeça livre da operação para focar nas vendas e no crescimento do negócio.
                </p>
              </div>

              <a
                href={buildWhatsAppLink(DEFAULT_WHATSAPP_MESSAGES.operational)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2.5 py-4 px-6 rounded-xl bg-[#2C1810] hover:bg-[#5C3A1A] text-white font-bold text-sm tracking-wide transition-colors shadow-md"
              >
                <MessageCircle className="w-4 h-4 text-[#D1B688]" />
                <span>Quero Organizar Minha Rotina</span>
              </a>
            </div>
          </div>

          {/* Card 2: BPO Estratégico & Projetos */}
          <div className="rounded-3xl p-8 sm:p-10 lg:p-12 bg-[#1C1815] text-[#FAF8F5] border-2 border-[#D1B688] shadow-2xl relative overflow-hidden flex flex-col justify-between">
            {/* Ambient Lighting */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#D1B688]/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>

            <div className="relative z-10">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-[#D1B688]/20 border border-[#D1B688]/50 flex items-center justify-center text-[#D1B688]">
                  <Building2 className="w-7 h-7" />
                </div>
                <div className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#D1B688] text-[#1C1815] text-xs font-extrabold uppercase tracking-wider shadow-sm">
                  <Star className="w-4 h-4 fill-current" />
                  <span>Destaque · Construtoras &amp; Projetos</span>
                </div>
              </div>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#FAF8F5] mb-2">
                BPO Financeiro Estratégico
              </h3>
              <p className="text-xs sm:text-sm font-bold text-[#D1B688] mb-4">
                Para construtoras e contratos com orçamento acima de R$ 3 milhões
              </p>
              <p className="text-sm sm:text-base text-[#FAF8F5]/85 mb-8 leading-relaxed">
                Toda a rotina operacional combinada com inteligência profunda de canteiro: análise por centro de custo, orçado vs. realizado e blindagem ativa de contratos e retenções.
              </p>

              <div className="space-y-4 mb-8">
                <p className="text-xs font-bold text-[#D1B688] uppercase tracking-wider">
                  Tudo do BPO Operacional, mais:
                </p>
                {[
                  'Fluxo de Caixa Orçado vs. Realizado individualizado por obra/projeto',
                  'Equalização de prazos entre pagamentos de folha (dia 20 e 5º DU) e medições',
                  'Gestão e cronograma financeiro de compras (captura de descontos à vista com indústrias)',
                  'Processo ágil de formalização e cobrança de aditivos de escopo',
                  'Régua ativa de monitoramento e resgate de retenções contratuais (5% a 10%)',
                  'Reuniões mensais com consultor dedicado para suporte à tomada de decisão',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#D1B688] text-[#1C1815] flex items-center justify-center shrink-0 mt-0.5 font-bold">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <span className="text-sm sm:text-base text-[#FAF8F5]/90 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative z-10">
              <div className="p-5 rounded-2xl bg-[#FAF8F5]/10 border border-[#D1B688]/30 mb-6 backdrop-blur-sm">
                <p className="text-sm text-[#FAF8F5] font-medium leading-relaxed">
                  <strong className="text-[#D1B688]">O alívio do construtor:</strong> Previsibilidade de cada etapa: você sabe onde cada centavo foi investido e garante que o lucro orçado seja o lucro que entra no bolso.
                </p>
              </div>

              <a
                href={buildWhatsAppLink(DEFAULT_WHATSAPP_MESSAGES.strategic)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2.5 py-4 px-6 rounded-xl bg-[#D1B688] hover:bg-[#b89b6c] text-[#1C1815] font-extrabold text-base tracking-wide transition-all shadow-lg hover:shadow-xl hover:scale-[1.01]"
              >
                <MessageCircle className="w-5 h-5 text-[#1C1815]" />
                <span>Quero Blindar a Margem dos Meus Projetos</span>
              </a>
            </div>
          </div>

        </div>

        {/* Editorial Showcase Banner: Auditoria Física-Financeira (Foto 4 em enquadramento natural) */}
        <div className="mt-14 rounded-3xl overflow-hidden bg-[#1C1815] text-[#FAF8F5] border border-[#D1B688]/40 shadow-2xl grid grid-cols-1 lg:grid-cols-12 items-stretch">
          <div className="lg:col-span-6 relative aspect-[1.83/1] lg:aspect-auto overflow-hidden group bg-[#2C1810]">
            <img
              src="/images/site/analise-orcado-realizado.jpg"
              alt="Auditoria e análise de orçado vs. realizado em projetos de grande porte"
              className="w-full h-full object-cover object-center filter brightness-95 group-hover:scale-102 transition-transform duration-700"
            />
          </div>
          <div className="lg:col-span-6 p-8 sm:p-10 lg:p-12 flex flex-col justify-center">
            <span className="text-xs font-mono font-bold tracking-widest text-[#D1B688] uppercase mb-2">
              AUDITORIA CIRÚRGICA DE CANTEIRO
            </span>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#FAF8F5] mb-4 leading-snug">
              Como auditamos cada medição e contrato na prática
            </h3>
            <p className="text-sm sm:text-base text-[#FAF8F5]/85 leading-relaxed mb-6">
              No BPO Estratégico, nenhuma medição é liberada no escuro. Cruzamos o avanço físico do canteiro com as planilhas orçadas, identificamos desvios em tempo real e garantimos que a margem planejada não seja corroída ao longo da execução da obra.
            </p>
            <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-[#D1B688]">
              <Star className="w-4 h-4 fill-current text-[#D1B688] shrink-0" />
              <span>Controle financeiro de nível executivo para construtoras e obras acima de R$ 3 milhões.</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
