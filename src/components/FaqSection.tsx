import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';
import { buildWhatsAppLink, DEFAULT_WHATSAPP_MESSAGES } from '../utils/whatsapp';

export const FaqSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: 'A OECO substitui o meu contador atual?',
      a: 'Não. A OECO não concorre com a sua contabilidade; nós somamos forças com ela. O seu contador continua cuidando da conformidade fiscal, apuração de impostos e obrigações fiscais com o Fisco. A OECO assume a rotina diária (contas a pagar, receber, conciliação e planejamento de fluxo de caixa por obra), inclusive entregando todas as informações conciliadas e limpas para o seu contador trabalhar com mais facilidade.',
    },
    {
      q: 'Como funciona a implantação do BPO Financeiro? Vai sobrecarregar minha equipe?',
      a: 'De forma alguma. Nós amamos e respeitamos o processo: a implantação é feita de maneira gradual e estruturada. Começamos mapeando as contas ativas, organizando o plano de contas e assumindo as rotinas diárias passo a passo, sem interromper as atividades do canteiro ou do seu escritório.',
    },
    {
      q: 'Minha construtora já tem um administrativo na obra. Como a OECO atua?',
      a: 'A OECO não concorre com a sua equipe de campo; nós damos método e suporte a ela. O seu colaborador na obra envia comprovantes e pedidos de compra por fluxos rápidos e padronizados, enquanto a OECO cuida da conferência de notas, cronograma financeiro, conciliação e agendamento bancário para aprovação final do gestor.',
    },
    {
      q: 'Qual é a diferença prática entre o BPO Operacional e o BPO Estratégico?',
      a: 'O BPO Operacional foca em manter a casa em ordem: contas a pagar, receber, conciliação bancária diária e relatórios mensais. O BPO Estratégico adiciona uma camada profunda de inteligência para obras: fluxo de caixa projetado individual por projeto (Orçado vs. Realizado), cronograma de compras com desconto à vista, formalização de aditivos e resgate de retenções contratuais.',
    },
    {
      q: 'Quais softwares e plataformas financeiras a OECO utiliza?',
      a: 'Operamos com plataformas líderes e homologadas no mercado nacional (como o Nibo), combinadas com dashboards gerenciais claros e personalizados para a sua operação. Você não precisa se preocupar com parametrizações técnicas: nós estruturamos e gerenciamos tudo para você.',
    },
    {
      q: 'Qual é o primeiro passo para começar com a OECO?',
      a: 'O primeiro passo é um Diagnóstico Financeiro de 30 minutos. Nessa conversa direta, analisamos a dinâmica de pagamentos, prazos de recebimento e controle de projetos da sua empresa para identificar onde o caixa pode estar sangrando e apresentar a melhor solução de gestão.',
    },
  ];

  return (
    <section id="faq" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#FAF8F5]">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-3">
            <HelpCircle className="w-5 h-5 text-[#6B7F5A]" />
            <span className="text-xs font-mono font-bold tracking-widest text-[#6B7F5A] uppercase">
              DÚVIDAS FREQUENTES
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#2C1810] tracking-tight mb-4">
            Perguntas Frequentes sobre a OECO
          </h2>
          <p className="text-base sm:text-lg text-[#5C3A1A]/85 max-w-2xl mx-auto">
            Tudo o que você precisa saber sobre a nossa atuação, divisão de papéis com o seu contador e processo de implantação.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-white border-[#D1B688] shadow-md'
                    : 'bg-white/80 border-[#EAE7DE] hover:border-[#D1B688]/60 hover:bg-white'
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full p-6 sm:p-7 text-left flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className="text-base sm:text-lg font-bold text-[#2C1810] leading-snug">
                    {item.q}
                  </span>
                  <div
                    className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? 'bg-[#2C1810] text-[#D1B688] rotate-180'
                        : 'bg-[#FAF8F5] text-[#5C3A1A]'
                    }`}
                  >
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 sm:px-7 pb-7 pt-2 text-sm sm:text-base text-[#5C3A1A]/90 leading-relaxed border-t border-[#FAF8F5] animate-in fade-in duration-200">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions CTA */}
        <div className="mt-14 text-center p-8 sm:p-10 rounded-3xl bg-[#F4EFEA] border border-[#EAE7DE]">
          <p className="text-base sm:text-lg font-bold text-[#2C1810] mb-2">
            Ficou com alguma dúvida específica sobre o seu modelo de obra ou negócio?
          </p>
          <p className="text-sm text-[#5C3A1A]/80 mb-6 max-w-xl mx-auto">
            Converse diretamente com o nosso time técnico via WhatsApp e receba uma orientação clara.
          </p>
          <a
            href={buildWhatsAppLink(DEFAULT_WHATSAPP_MESSAGES.faq)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-[#2C1810] hover:bg-[#5C3A1A] text-white text-sm font-bold transition-colors shadow-md"
          >
            <MessageCircle className="w-4 h-4 text-[#D1B688]" />
            <span>Tirar Dúvida no WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
