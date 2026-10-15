import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  ArrowRight, 
  Target, 
  GraduationCap, 
  Briefcase, 
  Compass, 
  Heart, 
  Users, 
  Activity, 
  Sparkles,
  Building2,
  Rocket,
  Globe2
} from 'lucide-react';

export const BniBioPage: React.FC = () => {
  const timelineEvents = [
    {
      period: "2012 — 2016",
      title: "Bacharelado em Ciências Contábeis",
      institution: "Universidade Federal do Rio de Janeiro (UFRJ)",
      icon: GraduationCap,
      description: "Construção da base técnica inegociável de contabilidade clássica, normas internacionais (IFRS), finanças corporativas e análise de balanços."
    },
    {
      period: "2014 — 2016",
      title: "Furnas Centrais Elétricas",
      institution: "Estágio em Demonstrações Contábeis",
      icon: Building2,
      description: "Vivência de grande porte na elaboração das demonstrações contábeis corporativas, consolidando rigor técnico em ambientes de alta responsabilidade."
    },
    {
      period: "2017 — 2019",
      title: "Mestrado em Ciências Contábeis",
      institution: "Universidade Federal do Rio de Janeiro (UFRJ)",
      icon: GraduationCap,
      description: "Dissertação defendida em 2019 sobre a contabilização de criptomoedas, tema pioneiro e disruptivo no cenário nacional e internacional. Trabalho apresentado em congresso internacional no Japão e publicado em revista acadêmica internacional."
    },
    {
      period: "2018 — 2021",
      title: "Lemobs & Ecossistema de Startups",
      institution: "Gestão Financeira & Controladoria",
      icon: Rocket,
      description: "Estruturação completa do setor financeiro em startups de tecnologia, deixando na Lemobs um legado financeiro sólido e processos de controle que continuam rodando com excelência há mais de 4 anos."
    },
    {
      period: "2022 — 2026",
      title: "Carta (EUA)",
      institution: "Implementação de Fundos (VC / PE / PC)",
      icon: Globe2,
      description: "Atuação direta com executivos do mercado americano e gestores de fundos com mais de $500M de AUM (Assets Under Management). Pelo alto desempenho e precisão técnica, assumiu a carteira dos maiores clientes da multinacional."
    }
  ];

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#292524] flex flex-col font-sans selection:bg-[#CF2030] selection:text-white">
      {/* Top Bar with Navigation */}
      <header className="w-full border-b border-[#E7DFD5] bg-[#FAF8F5]/90 backdrop-blur-md sticky top-0 z-30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <Link 
            to="/bni" 
            className="inline-flex items-center gap-2 text-xs font-mono text-[#665D52] hover:text-[#CF2030] transition-colors uppercase tracking-wider"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Voltar ao Hub BNI</span>
          </Link>

          <Link
            to="/bni/perfil-gains"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#FAF6F0] border border-[#E7DFD5] text-xs font-mono text-[#1C1815] hover:border-[#CF2030] hover:text-[#CF2030] transition-colors"
          >
            <span>Ver Perfil GAINS</span>
            <Target className="w-3.5 h-3.5 text-[#CF2030]" />
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 py-10 sm:py-16 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          
          {/* Header Profile Info (com fundo escuro elegante gerando contraste igual ao GAINS) */}
          <div className="bg-[#1C1815] text-[#FAF8F5] border border-[#2E2824] rounded-3xl p-6 sm:p-10 shadow-lg mb-12 relative overflow-hidden">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-8 relative z-10">
              <div className="relative shrink-0">
                <img
                  src="/images/bni/profile.jpg"
                  alt="Matheus Marques"
                  className="w-36 h-36 sm:w-44 sm:h-44 rounded-2xl object-cover object-[center_15%] border-2 border-[#3D342D] shadow-lg ring-4 ring-[#FAF8F5]/10"
                />
              </div>

              <div className="text-center sm:text-left flex-1">
                <h1 className="text-3xl sm:text-4xl font-normal text-[#FAF8F5] tracking-tight mb-2">
                  Matheus Marques
                </h1>
                
                <div className="text-base sm:text-lg text-[#D1B688] font-medium font-sans mb-1">
                  Especialista em BPO Financeiro
                </div>
                
                <div className="text-sm sm:text-base text-[#FAF8F5]/90 font-medium font-sans mb-3">
                  Oeco Financial Solutions
                </div>

                <p className="text-sm sm:text-base text-[#B5AEA4] font-normal leading-relaxed">
                  Fundador da <strong className="text-[#FAF8F5]">Oeco Financial Solutions</strong>, mestre em Ciências Contábeis pela UFRJ e apaixonado por transformar a rotina financeira de empresas através do método diário e diligente do <strong className="text-[#D1B688]">BPO Financeiro</strong>.
                </p>
              </div>
            </div>
          </div>

          {/* Seção: O Propósito & Por que o BPO Financeiro */}
          <section className="mb-14">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-lg bg-[#FAF6F0] border border-[#E7DFD5] flex items-center justify-center text-[#CF2030]">
                <Compass className="w-4 h-4" />
              </div>
              <h2 className="text-2xl font-light text-[#1C1815] tracking-tight">
                O Propósito: <span className="font-serif italic text-[#1C1815]">Por que o BPO Financeiro?</span>
              </h2>
            </div>

            <div className="bg-[#FFFFFF] border border-[#E7DFD5] rounded-3xl p-6 sm:p-8 space-y-5 text-[#594F45] leading-relaxed text-sm sm:text-base">
              <p>
                Eu amo a <strong className="text-[#1C1815]">ciência contábil</strong>. A contabilidade pura é fascinante: é a linguagem dos negócios, a ciência capaz de revelar a saúde, a liquidez e a real capacidade de geração de riqueza de qualquer empreendimento.
              </p>
              
              <div className="p-4 sm:p-5 rounded-2xl bg-[#FAF6F0] border-l-4 border-[#CF2030] text-[#1C1815] italic font-serif text-base sm:text-lg">
                "No entanto, o sistema fiscal e burocrático brasileiro desvirtuou o papel contábil, transformando a maioria dos profissionais em meros geradores de guias de impostos para o governo."
              </div>

              <p>
                Ao longo dos anos, vi de perto o drama do empresário: ele recebe guias tributárias no final do mês, mas segue sem saber para onde o dinheiro foi, quanto realmente lucrou em cada contrato ou qual será o saldo do seu caixa daqui a 15 dias.
              </p>

              <p>
                Foi por buscar algo que gerasse <strong className="text-[#1C1815]">impacto direto e transformador</strong> na vida dos donos de negócios que escolhi fundar a Oeco focando no <strong className="text-[#CF2030]">BPO Financeiro</strong>. No BPO Financeiro, nós não ficamos distantes esperando o mês fechar. Nós estamos na trincheira diária: agendando pagamentos, conciliando cada centavo matinalmente e garantindo que o gestor tenha paz para liderar e vender, com a certeza de que a retaguarda financeira está blindada.
              </p>
            </div>
          </section>

          {/* Seção: Linha do Tempo da Formação e Carreira */}
          <section className="mb-14">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-lg bg-[#FAF6F0] border border-[#E7DFD5] flex items-center justify-center text-[#CF2030]">
                <Briefcase className="w-4 h-4" />
              </div>
              <h2 className="text-2xl font-light text-[#1C1815] tracking-tight">
                Trajetória: <span className="font-serif italic text-[#1C1815]">Estudos e Experiência</span>
              </h2>
            </div>

            <div className="space-y-4">
              {timelineEvents.map((event, idx) => {
                const IconComponent = event.icon;
                return (
                  <div 
                    key={idx}
                    className="bg-[#FFFFFF] border border-[#E7DFD5] rounded-2xl p-5 sm:p-6 shadow-sm hover:border-[#D1B688] transition-colors relative flex flex-col sm:flex-row gap-4 sm:gap-6 items-start"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#FAF6F0] border border-[#E7DFD5] flex items-center justify-center text-[#1C1815] shrink-0">
                      <IconComponent className="w-5 h-5 text-[#8C8275]" />
                    </div>

                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1">
                        <h3 className="text-base sm:text-lg font-medium text-[#1C1815]">
                          {event.title}
                        </h3>
                        <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-[#FAF6F0] border border-[#E7DFD5] text-[#8C8275] w-fit">
                          {event.period}
                        </span>
                      </div>
                      
                      <div className="text-xs font-mono text-[#CF2030] uppercase tracking-wider mb-2">
                        {event.institution}
                      </div>

                      <p className="text-xs sm:text-sm text-[#665D52] leading-relaxed">
                        {event.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Seção: Valores, Família & Vida Comunitária */}
          <section className="mb-14">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-lg bg-[#FAF6F0] border border-[#E7DFD5] flex items-center justify-center text-[#CF2030]">
                <Heart className="w-4 h-4" />
              </div>
              <h2 className="text-2xl font-light text-[#1C1815] tracking-tight">
                Vida Pessoal & <span className="font-serif italic text-[#1C1815]">Valores</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Card Família */}
              <div className="bg-[#FFFFFF] border border-[#E7DFD5] rounded-2xl p-5 sm:p-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono text-[#8C8275] uppercase tracking-wider mb-2">
                    <Users className="w-3.5 h-3.5 text-[#CF2030]" />
                    <span>Família & Raízes</span>
                  </div>
                  <h3 className="text-lg font-medium text-[#1C1815] mb-2">
                    Base e Fundação
                  </h3>
                  <p className="text-xs sm:text-sm text-[#665D52] leading-relaxed">
                    Carioca, 33 anos, casado há 7 anos com a Gabriella e pai dedicado da pequena Isabella, de 1 ano. A família é a razão pela qual a busca por solidez e integridade é inegociável.
                  </p>
                </div>
              </div>

              {/* Card Fé & Comunidade */}
              <div className="bg-[#FFFFFF] border border-[#E7DFD5] rounded-2xl p-5 sm:p-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono text-[#8C8275] uppercase tracking-wider mb-2">
                    <Sparkles className="w-3.5 h-3.5 text-[#CF2030]" />
                    <span>Fé & Princípios</span>
                  </div>
                  <h3 className="text-lg font-medium text-[#1C1815] mb-2">
                    Givers Gain como Modo de Vida
                  </h3>
                  <p className="text-xs sm:text-sm text-[#665D52] leading-relaxed">
                    Cristão, com valores fundamentados no exemplo de Jesus. Membro ativo da Igreja Mananciais, servindo voluntariamente nos ministérios Seeds (pré-adolescentes) e Bem-Vindos.
                  </p>
                </div>
              </div>

              {/* Card Esporte */}
              <div className="bg-[#FFFFFF] border border-[#E7DFD5] rounded-2xl p-5 sm:p-6 sm:col-span-2">
                <div className="flex items-center gap-2 text-xs font-mono text-[#8C8275] uppercase tracking-wider mb-2">
                  <Activity className="w-3.5 h-3.5 text-[#CF2030]" />
                  <span>Saúde & Superação</span>
                </div>
                <h3 className="text-lg font-medium text-[#1C1815] mb-2">
                  Disciplina e Esportes
                </h3>
                <p className="text-xs sm:text-sm text-[#665D52] leading-relaxed">
                  A corrida de rua é um veículo diário de disciplina mental e superação de limites. Nos próximos passos pessoais, o retorno aos pedais de ciclismo e o início nos tatames de Jiu-Jitsu (BJJ).
                </p>
              </div>

            </div>
          </section>

          {/* Bottom Card de Transição para o Perfil GAINS */}
          <div className="bg-[#1C1815] text-[#FAF8F5] rounded-3xl p-6 sm:p-8 text-center relative overflow-hidden border border-[#2E2824]">
            <div className="relative z-10 max-w-lg mx-auto">
              <span className="text-xs font-mono text-[#D1B688] uppercase tracking-widest block mb-2">
                Preparando o nosso 1 a 1
              </span>
              <h3 className="text-xl sm:text-2xl font-light text-white tracking-tight mb-3">
                Conheça minhas metas, redes de contato e o guia de referências
              </h3>
              <p className="text-xs sm:text-sm text-[#B5AEA4] mb-6">
                Acesse o meu Perfil GAINS para consultar o escopo objetivo do BPO Financeiro e como gerar negócios qualificados.
              </p>
              <Link
                to="/bni/perfil-gains"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#CF2030] text-white text-sm font-medium hover:bg-[#B51A29] transition-all shadow-md active:scale-[0.99]"
              >
                <span>Acessar Perfil GAINS</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-[#E7DFD5] py-6 text-center text-xs text-[#8C8275] font-mono">
        © {new Date().getFullYear()} Matheus Marques · Oeco Financial Solutions
      </footer>
    </div>
  );
};
