import React, { useState } from 'react';
import { 
  CheckCircle2, 
  ArrowRight, 
  FileText, 
  Calendar, 
  Search, 
  Sliders, 
  Rocket, 
  KeyRound, 
  Database, 
  RefreshCw, 
  BarChart3
} from 'lucide-react';
import { useDiagnosticModal } from '../context/DiagnosticModalContext';

export const OnboardingSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'presales' | 'postsales'>('presales');
  const { openModal } = useDiagnosticModal();

  const preSalesSteps = [
    {
      step: '01',
      title: 'Pré-Diagnóstico no Site',
      subtitle: 'Entendimento rápido de contexto',
      description: 'Você responde a 3 perguntas essenciais sobre o seu segmento, rotina e gargalos. Isso nos permite ir direto ao ponto sem perder seu tempo.',
      icon: Search
    },
    {
      step: '02',
      title: 'Agendamento Executivo',
      subtitle: 'Direto pelo WhatsApp oficial',
      description: 'Conexão direta com Matheus Marques para fixar o horário que melhor se adapta à sua rotina de obras, consultório ou empresa.',
      icon: Calendar
    },
    {
      step: '03',
      title: 'Diagnóstico de Caixa (30 min)',
      subtitle: 'Reunião de alta densidade',
      description: 'Uma conversa cirúrgica onde analisamos a dor raiz da sua operação: descasamento de caixa, compras sem programação ou falta de conciliação diária.',
      icon: Sliders
    },
    {
      step: '04',
      title: 'Desenho de Escopo Sob Medida',
      subtitle: 'Sem modelos genéricos',
      description: 'Estruturamos se o seu momento pede um BPO Financeiro Operacional (organização da rotina e contas) ou Estratégico (obras e margens por projeto).',
      icon: FileText
    },
    {
      step: '05',
      title: 'Apresentação da Proposta & Entrega Real',
      subtitle: 'Demonstração prática dos relatórios',
      description: 'Apresentamos a proposta comercial e demonstramos na prática exatamente os DREs, projeções e rotinas de autorização que você passará a receber.',
      icon: BarChart3
    },
    {
      step: '06',
      title: 'Acordo & Transição Segura',
      subtitle: 'Alinhamento claro de expectativas',
      description: 'Contrato transparente, sem pegadinhas ou amarras forçadas. Alinhamento de canais e início imediato do onboarding real.',
      icon: Rocket
    }
  ];

  const postSalesSteps = [
    {
      step: 'Semana 01',
      title: 'Imersão & Acessos Seguros',
      subtitle: 'Parametrização bancária com zero risco',
      description: 'Configuração de acessos bancários restritos a consulta e agendamento de pagamentos (zero poder de saque). Criação do ambiente no software de gestão financeira (Nibo) e parametrização do plano de contas inicial.',
      deliverables: [
        'Acessos de operador bancário cadastrados',
        'Ambiente do software criado e homologado',
        'Mapeamento inicial de fornecedores e contas'
      ],
      badge: 'Segurança Máxima',
      icon: KeyRound
    },
    {
      step: 'Semana 02',
      title: 'Saneamento & Aliança Contábil',
      subtitle: 'Limpeza de passivos e integração com seu contador',
      description: 'Auditoria de pendências dos meses anteriores para começar com a casa limpa. Reunião direta com a sua contabilidade parceira para sincronizar categorias e estruturar os centros de custo (por obra, projeto ou unidade).',
      deliverables: [
        'Saneamento de extratos e conciliações passadas',
        'Alinhamento direto com o seu escritório de contabilidade',
        'Estruturação de centros de custo por projeto/obra'
      ],
      badge: 'Paz com a Contabilidade',
      icon: Database
    },
    {
      step: 'Semanas 03 e 04',
      title: 'A Engrenagem Diária em Movimento',
      subtitle: 'Rotina ativa de conciliação e pagamentos',
      description: 'Início da rotina matinal: conciliação de cada centavo movimentado, lançamento de notas e contas a pagar inseridas no banco para autorização do gestor em 1 clique. Você para de perder tempo com tarefas braçais.',
      deliverables: [
        'Conciliação diária matinal sem acúmulo',
        'Contas agendadas para aprovação rápida no celular',
        'Régua de emissão de NF e cobrança automática'
      ],
      badge: 'Rotina Blindada',
      icon: RefreshCw
    },
    {
      step: 'Mês 01 em Diante',
      title: 'Governança & Rituais Perenes',
      subtitle: 'Decisões baseadas em números reais, não em intuição',
      description: 'No 1º dia útil de cada mês, sua contabilidade recebe os documentos 100% organizados e conciliados. Realizamos a Reunião Mensal Executiva com apresentação do DRE Gerencial, Margem Real por Obra e Projeção de Caixa.',
      deliverables: [
        'Fechamento contábil no dia 1º útil sem correria',
        'DRE Gerencial e Margem Real por Projeto/Obra',
        'Reunião Executiva Mensal de Tomada de Decisão'
      ],
      badge: 'Controle de Nível Executivo',
      icon: BarChart3
    }
  ];

  return (
    <section id="onboarding" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#FAF8F5] relative overflow-hidden border-t border-[#EAE7DE]">
      {/* Background Decorative Accents */}
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-[#4F6D46]/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#D1B688]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header (Título restaurado e sem a tag conforme solicitado) */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#2C1810] tracking-tight leading-[1.15] mb-4">
            Do primeiro contato à governança permanente
          </h2>
          <p className="text-base sm:text-lg text-[#5C3A1A] font-medium leading-relaxed">
            Nada de promessas genéricas ou caixas pretas. Conheça com total transparência o caminho até fechar contrato e exatamente como organizamos sua empresa nos primeiros 30 dias.
          </p>

          {/* Interactive Tab Switcher (Sem barra de rolagem horizontal) */}
          <div className="mt-8 inline-flex items-center justify-center p-1.5 rounded-2xl bg-[#EAE7DE] border border-[#D5CFC5] shadow-inner max-w-full">
            <button
              onClick={() => setActiveTab('presales')}
              className={`px-5 sm:px-8 py-3 rounded-xl text-sm sm:text-base font-bold transition-all duration-200 flex items-center gap-2.5 ${
                activeTab === 'presales'
                  ? 'bg-[#1C1815] text-[#FAF8F5] shadow-md'
                  : 'text-[#5C3A1A] hover:text-[#2C1810]'
              }`}
            >
              <span>1. Jornada de Contratação</span>
              <span className={`text-xs px-2.5 py-0.5 rounded-full font-extrabold ${
                activeTab === 'presales' ? 'bg-[#D1B688] text-[#1C1815]' : 'bg-stone-300 text-stone-700'
              }`}>
                Até Fechar
              </span>
            </button>

            <button
              onClick={() => setActiveTab('postsales')}
              className={`px-5 sm:px-8 py-3 rounded-xl text-sm sm:text-base font-bold transition-all duration-200 flex items-center gap-2.5 ${
                activeTab === 'postsales'
                  ? 'bg-[#1C1815] text-[#FAF8F5] shadow-md'
                  : 'text-[#5C3A1A] hover:text-[#2C1810]'
              }`}
            >
              <span>2. Implantação Real</span>
              <span className={`text-xs px-2.5 py-0.5 rounded-full font-extrabold ${
                activeTab === 'postsales' ? 'bg-[#D1B688] text-[#1C1815]' : 'bg-stone-300 text-stone-700'
              }`}>
                Primeiros 30 Dias
              </span>
            </button>
          </div>
        </div>

        {/* TAB CONTENT: PRE-SALES (JORNADA ATÉ FECHAR) */}
        {activeTab === 'presales' && (
          <div className="space-y-8 animate-in fade-in duration-300">
            {/* Context Callout */}
            <div className="bg-[#1C1815] text-[#FAF8F5] p-6 sm:p-8 rounded-3xl border border-[#D1B688]/30 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-2 text-center md:text-left">
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[#FAF8F5]">
                  Como avaliamos se sua empresa tem fit com o método OECO
                </h3>
                <p className="text-sm sm:text-base text-[#FAF8F5]/85 max-w-2xl leading-relaxed">
                  Não vendemos contratos se não tivermos certeza de que conseguimos gerar previsibilidade e economizar seu tempo. O processo é consultivo e ético desde o primeiro minuto.
                </p>
              </div>

              <button
                onClick={() => openModal()}
                className="flex-shrink-0 inline-flex items-center gap-2.5 px-7 py-4 rounded-xl bg-[#D1B688] hover:bg-[#b89b6c] text-[#1C1815] font-extrabold text-xs uppercase tracking-wider shadow-lg transition-all duration-200 group"
              >
                <span>Iniciar Pré-Diagnóstico</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Grid of 6 Steps com fundo marrom suave e textos ampliados */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {preSalesSteps.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.step}
                    className="p-7 sm:p-8 rounded-3xl border border-[#D6C5B1] bg-[#EFE8DF] hover:border-[#B89B6C] shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between group"
                  >
                    <div>
                      {/* Top Row: Etapa Number + Icon */}
                      <div className="flex items-center justify-between mb-6">
                        <span className="text-sm font-mono font-black px-3.5 py-1.5 rounded-xl bg-[#2C1810] text-[#FAF8F5]">
                          Etapa {item.step}
                        </span>
                        <div className="w-12 h-12 rounded-2xl bg-[#FAF8F5] border border-[#D6C5B1] flex items-center justify-center text-[#4F6D46] group-hover:scale-110 transition-transform">
                          <Icon className="w-6 h-6" />
                        </div>
                      </div>

                      {/* Card Title */}
                      <h3 className="text-xl sm:text-2xl font-extrabold text-[#2C1810] tracking-tight leading-snug mb-2 group-hover:text-[#4F6D46] transition-colors">
                        {item.title}
                      </h3>

                      {/* Subtitle com alto contraste */}
                      <h4 className="text-sm sm:text-base font-bold text-[#4F6D46] mb-3">
                        {item.subtitle}
                      </h4>

                      {/* Card Description */}
                      <p className="text-sm sm:text-base text-[#2C1810]/85 leading-relaxed font-normal">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* TAB CONTENT: POST-SALES (IMPLANTAÇÃO REAL 30 DIAS) */}
        {activeTab === 'postsales' && (
          <div className="space-y-8 animate-in fade-in duration-300">
            {/* Context Callout */}
            <div className="bg-[#1C1815] text-[#FAF8F5] p-6 sm:p-8 rounded-3xl border border-[#D1B688]/30 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-2 text-center md:text-left">
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[#FAF8F5]">
                  O que acontece no seu negócio nas primeiras 4 semanas
                </h3>
                <p className="text-sm sm:text-base text-[#FAF8F5]/85 max-w-2xl leading-relaxed">
                  Você não precisa parar sua empresa nem mudar tudo do dia para a noite. Assumimos a engrenagem com precisão cirúrgica, limpamos o passado e você passa a autorizar pagamentos no celular.
                </p>
              </div>

              <button
                onClick={() => openModal()}
                className="flex-shrink-0 inline-flex items-center gap-2.5 px-7 py-4 rounded-xl bg-[#D1B688] hover:bg-[#b89b6c] text-[#1C1815] font-extrabold text-xs uppercase tracking-wider shadow-lg transition-all duration-200 group"
              >
                <span>Solicitar Implantação</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Timeline Cards in Soft Warm Brown (Marrom suave/claro harmonioso) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {postSalesSteps.map((phase) => {
                const Icon = phase.icon;
                return (
                  <div
                    key={phase.step}
                    className="p-7 sm:p-9 rounded-3xl bg-[#EFE8DF] text-[#2C1810] border border-[#D6C5B1] shadow-sm hover:shadow-md hover:border-[#B89B6C] transition-all duration-200 flex flex-col justify-between"
                  >
                    <div>
                      {/* Top Badges */}
                      <div className="flex items-center justify-between mb-5">
                        <span className="text-xs sm:text-sm font-extrabold uppercase tracking-wider px-4 py-1.5 rounded-full bg-[#2C1810] text-[#FAF8F5]">
                          {phase.step}
                        </span>
                        <span className="text-xs sm:text-sm font-bold text-[#4F6D46] bg-[#4F6D46]/10 border border-[#4F6D46]/25 px-3.5 py-1 rounded-full">
                          {phase.badge}
                        </span>
                      </div>

                      {/* Header with Icon + Title */}
                      <div className="flex items-start gap-4 mb-4">
                        <div className="w-14 h-14 rounded-2xl bg-[#FAF8F5] border border-[#D6C5B1] flex items-center justify-center text-[#4F6D46] flex-shrink-0">
                          <Icon className="w-7 h-7" />
                        </div>
                        <div>
                          <h3 className="text-xl sm:text-2xl font-extrabold text-[#2C1810] tracking-tight leading-snug">
                            {phase.title}
                          </h3>
                          <h4 className="text-sm sm:text-base font-semibold text-[#5C3A1A] mt-1">
                            {phase.subtitle}
                          </h4>
                        </div>
                      </div>

                      {/* Description (Texto maior e com leitura suave e confortável) */}
                      <p className="text-sm sm:text-base text-[#2C1810]/85 leading-relaxed mb-6 font-normal">
                        {phase.description}
                      </p>

                      {/* Deliverables */}
                      <div className="space-y-3 pt-5 border-t border-[#D6C5B1]/70">
                        <span className="text-xs font-bold uppercase tracking-wider text-[#2C1810] block">
                          Entregas concretas desta fase:
                        </span>
                        {phase.deliverables.map((d, i) => (
                          <div key={i} className="flex items-start gap-3 text-sm sm:text-base text-[#2C1810]">
                            <CheckCircle2 className="w-5 h-5 text-[#4F6D46] flex-shrink-0 mt-0.5" />
                            <span>{d}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Bottom CTA Card */}
        <div className="mt-14 p-8 sm:p-10 rounded-3xl bg-white border border-[#EAE7DE] shadow-xl text-center max-w-2xl mx-auto">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-[#2C1810] tracking-tight mb-2">
            Pronto para colocar o seu financeiro nos trilhos?
          </h3>
          <p className="text-sm sm:text-base text-[#5C3A1A] mb-6">
            O primeiro passo leva menos de 2 minutos e não custa absolutamente nada.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => openModal()}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-[#2C1810] hover:bg-[#4F6D46] text-[#FAF8F5] font-extrabold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all duration-200 group"
            >
              <span>Preencher Pré-Diagnóstico Interativo</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
