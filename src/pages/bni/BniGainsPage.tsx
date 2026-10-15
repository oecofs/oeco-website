import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  ArrowRight, 
  User, 
  Target, 
  Trophy, 
  Compass, 
  Network, 
  Wrench, 
  CheckCircle2, 
  XCircle, 
  Ear, 
  Copy, 
  Check, 
  ShieldCheck, 
  Building2, 
  CreditCard, 
  CalendarCheck,
  TrendingUp,
  FileSpreadsheet
} from 'lucide-react';

export const BniGainsPage: React.FC = () => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2500);
  };

  const scripts = [
    {
      title: "Para quem está sobrecarregado com rotina financeira",
      text: "Olá! Lembrei de você porque conheci o Matheus Marques, especialista em BPO Financeiro na Oeco. Ele assume toda a rotina de contas a pagar, receber e conciliação bancária diária da empresa para o dono focar em vendas. Vale muito a pena bater um papo de 15 minutos com ele. Posso conectar vocês no WhatsApp?"
    },
    {
      title: "Para quem reclama de falta de visibilidade do caixa",
      text: "Opa, tudo bem? Você comentou recentemente sobre a dificuldade de organizar o fluxo de caixa. O Matheus Marques (da Oeco) é mestre em contabilidade pela UFRJ e faz a terceirização financeira operacional com conciliação matinal diária, deixando o caixa 100% previsível. Posso passar o contato dele?"
    },
    {
      title: "Para construtoras, clínicas ou escritórios de serviços",
      text: "Olá! Sei como a rotina financeira no seu segmento é pesada. O Matheus Marques cuida exatamente do BPO Financeiro especializado para empresas como a sua, organizando pagamentos e comprovantes sem você precisar contratar uma equipe interna cara. Posso apresentar vocês?"
    }
  ];

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#292524] flex flex-col font-sans selection:bg-[#CF2030] selection:text-white">
      {/* Top Bar */}
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
            to="/bni/biografia"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#FAF6F0] border border-[#E7DFD5] text-xs font-mono text-[#1C1815] hover:border-[#CF2030] hover:text-[#CF2030] transition-colors"
          >
            <span>Ver Biografia</span>
            <User className="w-3.5 h-3.5 text-[#CF2030]" />
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 py-10 sm:py-16 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">

          {/* Member Card */}
          <div className="bg-[#1C1815] text-[#FAF8F5] border border-[#2E2824] rounded-3xl p-6 sm:p-10 shadow-lg mb-10 relative overflow-hidden">
            <div className="relative z-10">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2A2420] border border-[#3D342D] text-[#D1B688] text-xs font-mono tracking-wider uppercase">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#CF2030]" />
                  <span>BNI Respeito · Perfil GAINS</span>
                </div>
                <span className="text-xs font-mono text-[#A89F91] uppercase tracking-widest">
                  Exclusivo p/ 1 a 1
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl font-light text-white tracking-tight mb-2">
                Matheus <span className="font-serif italic font-normal text-[#D1B688]">Marques</span>
              </h1>
              
              <div className="text-base sm:text-lg text-[#CF2030] font-medium mb-4">
                Especialidade: BPO Financeiro (Oeco Financial Solutions)
              </div>

              <p className="text-sm sm:text-base text-[#D7CEC3] font-normal leading-relaxed bg-[#231E1B] border border-[#3D342D] p-4 sm:p-5 rounded-2xl">
                <strong className="text-white">Pitch de 30 Segundos:</strong> "Ajudo empresários a saírem do operacional financeiro desgastante. A Oeco assume as contas a pagar, receber, emissão de notas e conciliação bancária diária, entregando clareza de caixa para o gestor focar exclusivamente no crescimento das vendas."
              </p>
            </div>
          </div>

          {/* MATRIZ G.A.I.N.S. */}
          <div className="mb-14">
            <div className="flex items-center gap-2 mb-6">
              <span className="w-2.5 h-2.5 rounded-full bg-[#CF2030]"></span>
              <h2 className="text-2xl font-light text-[#1C1815] tracking-tight">
                Estrutura <span className="font-serif italic text-[#1C1815]">G.A.I.N.S.</span>
              </h2>
            </div>

            <div className="space-y-4">
              
              {/* G - Goals */}
              <div className="bg-[#FFFFFF] border border-[#E7DFD5] rounded-2xl p-5 sm:p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-xl bg-[#FAF6F0] border border-[#E7DFD5] flex items-center justify-center text-[#CF2030]">
                    <Target className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-[#CF2030] uppercase tracking-widest block font-bold">G</span>
                    <h3 className="text-lg font-medium text-[#1C1815]">Goals (Metas)</h3>
                  </div>
                </div>
                <div className="space-y-2 text-xs sm:text-sm text-[#594F45] leading-relaxed pl-12">
                  <p>• <strong className="text-[#1C1815]">No Negócio:</strong> Expandir a carteira de clientes de BPO Financeiro nos nichos de construção civil, clínicas e serviços B2B, consolidando a rotina financeira sem atalhos.</p>
                  <p>• <strong className="text-[#1C1815]">No BNI:</strong> Praticar ativamente o Givers Gain, gerando referências de alto valor para os parceiros e construindo relações confiáveis de longo prazo.</p>
                </div>
              </div>

              {/* A - Accomplishments */}
              <div className="bg-[#FFFFFF] border border-[#E7DFD5] rounded-2xl p-5 sm:p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-xl bg-[#FAF6F0] border border-[#E7DFD5] flex items-center justify-center text-[#CF2030]">
                    <Trophy className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-[#CF2030] uppercase tracking-widest block font-bold">A</span>
                    <h3 className="text-lg font-medium text-[#1C1815]">Accomplishments (Conquistas)</h3>
                  </div>
                </div>
                <div className="space-y-2 text-xs sm:text-sm text-[#594F45] leading-relaxed pl-12">
                  <p>• Mestre (2019) e Bacharel (2016) em Ciências Contábeis pela UFRJ.</p>
                  <p>• Estruturação de setores financeiros em startups de tecnologia, deixando processos sólidos mantidos até hoje.</p>
                  <p>• Experiência internacional na Carta (EUA) com fundos de Venture Capital e Private Equity.</p>
                  <p>• Fundação da Oeco com metodologia de conciliação diária matinal e 100% de precisão de caixa.</p>
                </div>
              </div>

              {/* I - Interests */}
              <div className="bg-[#FFFFFF] border border-[#E7DFD5] rounded-2xl p-5 sm:p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-xl bg-[#FAF6F0] border border-[#E7DFD5] flex items-center justify-center text-[#CF2030]">
                    <Compass className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-[#CF2030] uppercase tracking-widest block font-bold">I</span>
                    <h3 className="text-lg font-medium text-[#1C1815]">Interests (Interesses)</h3>
                  </div>
                </div>
                <div className="space-y-2 text-xs sm:text-sm text-[#594F45] leading-relaxed pl-12">
                  <p>• <strong className="text-[#1C1815]">Profissionais:</strong> Eficiência operacional, gestão por processos, fluxo de caixa, mercado imobiliário/construção civil e tecnologia aplicada a finanças.</p>
                  <p>• <strong className="text-[#1C1815]">Pessoais:</strong> Família, valores cristãos, serviço comunitário na Igreja Mananciais, corrida de rua, ciclismo e Jiu-Jitsu.</p>
                </div>
              </div>

              {/* N - Networks */}
              <div className="bg-[#FFFFFF] border border-[#E7DFD5] rounded-2xl p-5 sm:p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-xl bg-[#FAF6F0] border border-[#E7DFD5] flex items-center justify-center text-[#CF2030]">
                    <Network className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-[#CF2030] uppercase tracking-widest block font-bold">N</span>
                    <h3 className="text-lg font-medium text-[#1C1815]">Networks (Redes de Contato)</h3>
                  </div>
                </div>
                <div className="space-y-2 text-xs sm:text-sm text-[#594F45] leading-relaxed pl-12">
                  <p>• Construtoras, incorporadoras, arquitetos e engenheiros de obras.</p>
                  <p>• Médicos, dentistas e gestores de clínicas de saúde.</p>
                  <p>• Advogados, consultores e prestadores de serviços corporativos B2B.</p>
                  <p>• Fundadores de startups e ecossistema de tecnologia e inovação.</p>
                  <p>• Rede comunitária e eclesiástica da Igreja Mananciais.</p>
                </div>
              </div>

              {/* S - Skills */}
              <div className="bg-[#FFFFFF] border border-[#E7DFD5] rounded-2xl p-5 sm:p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-xl bg-[#FAF6F0] border border-[#E7DFD5] flex items-center justify-center text-[#CF2030]">
                    <Wrench className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-[#CF2030] uppercase tracking-widest block font-bold">S</span>
                    <h3 className="text-lg font-medium text-[#1C1815]">Skills (Habilidades em BPO Financeiro)</h3>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-[#594F45] pl-12 mt-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#CF2030] shrink-0" />
                    <span>Contas a Pagar & Receber</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#CF2030] shrink-0" />
                    <span>Conciliação Bancária Diária</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#CF2030] shrink-0" />
                    <span>Emissão de Boletos & Notas Fiscais</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#CF2030] shrink-0" />
                    <span>Régua Preventiva de Inadimplência</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#CF2030] shrink-0" />
                    <span>Relatórios Diários e Semanais</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#CF2030] shrink-0" />
                    <span>Sinergia com a Contabilidade</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* GUIA DE REFERENCIAMENTO */}
          <section className="mb-14">
            <div className="flex items-center gap-2 mb-6">
              <span className="w-2.5 h-2.5 rounded-full bg-[#CF2030]"></span>
              <h2 className="text-2xl font-light text-[#1C1815] tracking-tight">
                Guia Prático: <span className="font-serif italic text-[#1C1815]">Como me Referenciar</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              
              {/* Boas referências */}
              <div className="bg-[#FFFFFF] border border-[#E7DFD5] rounded-2xl p-5 sm:p-6 shadow-sm">
                <div className="flex items-center gap-2 text-xs font-mono text-[#3D7A54] uppercase tracking-wider mb-3">
                  <CheckCircle2 className="w-4 h-4 text-[#3D7A54]" />
                  <strong className="text-sm text-[#1C1815]">Ótimas Referências</strong>
                </div>
                <ul className="space-y-2 text-xs sm:text-sm text-[#594F45] leading-relaxed">
                  <li>• <strong>Construtoras & Empreiteiras:</strong> Gestão de pagamentos de obras, compras e notas de prestadores.</li>
                  <li>• <strong>Clínicas Médicas & Odontológicas:</strong> Dificuldade com conciliação de cartões, convênios e rotina de pagamentos.</li>
                  <li>• <strong>Advocacia & Serviços B2B:</strong> Emissão de faturas, custas e régua de cobrança preventiva.</li>
                  <li>• <strong>PMEs (Faturamento R$ 30k a R$ 500k/mês):</strong> Onde o sócio perde noites emitindo boleto e conferindo extrato.</li>
                </ul>
              </div>

              {/* Más referências */}
              <div className="bg-[#FFFFFF] border border-[#E7DFD5] rounded-2xl p-5 sm:p-6 shadow-sm">
                <div className="flex items-center gap-2 text-xs font-mono text-[#CF2030] uppercase tracking-wider mb-3">
                  <XCircle className="w-4 h-4 text-[#CF2030]" />
                  <strong className="text-sm text-[#1C1815]">O que NÃO é boa referência</strong>
                </div>
                <ul className="space-y-2 text-xs sm:text-sm text-[#594F45] leading-relaxed">
                  <li>• Empresas buscando "atalhos fiscais", sonegação ou caixa dois.</li>
                  <li>• Microempreendedores individuais (MEI) com volume de menos de 10 transações no mês.</li>
                  <li>• Empresas que não têm interesse em formalizar ou padronizar processos.</li>
                </ul>
              </div>

            </div>

            {/* Gatilhos de Dor */}
            <div className="bg-[#FFFFFF] border border-[#E7DFD5] rounded-2xl p-5 sm:p-6 mb-8 shadow-sm">
              <div className="flex items-center gap-2 text-xs font-mono text-[#CF2030] uppercase tracking-wider mb-3">
                <Ear className="w-4 h-4 text-[#CF2030]" />
                <strong className="text-sm text-[#1C1815]">Gatilhos de Dor para Ouvir no Mercado</strong>
              </div>
              <p className="text-xs sm:text-sm text-[#665D52] mb-3">
                Se você ouvir um empresário dizer qualquer uma dessas frases, ele precisa de BPO Financeiro:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm">
                <div className="p-3 rounded-xl bg-[#FAF6F0] border border-[#E7DFD5] italic text-[#1C1815]">
                  "Não tenho mais tempo de vender porque fico preso emitindo nota e boleto."
                </div>
                <div className="p-3 rounded-xl bg-[#FAF6F0] border border-[#E7DFD5] italic text-[#1C1815]">
                  "Minha empresa fatura bem, mas não sei para onde está indo o dinheiro no fim do mês."
                </div>
                <div className="p-3 rounded-xl bg-[#FAF6F0] border border-[#E7DFD5] italic text-[#1C1815]">
                  "Meu financeiro é uma bagunça e já paguei juros por esquecer boleto."
                </div>
                <div className="p-3 rounded-xl bg-[#FAF6F0] border border-[#E7DFD5] italic text-[#1C1815]">
                  "Meu contador reclama todo mês que os extratos e comprovantes chegam atrasados."
                </div>
              </div>
            </div>

            {/* Scripts de 10 Segundos */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-[#1C1815]">
                Scripts de Indicação de 10 Segundos (Copie e Cole no WhatsApp)
              </h3>
              
              {scripts.map((script, idx) => (
                <div key={idx} className="bg-[#FFFFFF] border border-[#E7DFD5] rounded-2xl p-5 shadow-sm">
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-mono text-[#CF2030] uppercase tracking-wider font-semibold">
                      {script.title}
                    </span>
                    <button
                      onClick={() => copyToClipboard(script.text, idx)}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#FAF6F0] border border-[#E7DFD5] text-xs font-mono text-[#1C1815] hover:border-[#CF2030] hover:text-[#CF2030] transition-all"
                    >
                      {copiedIndex === idx ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-[#3D7A54]" />
                          <span className="text-[#3D7A54]">Copiado!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copiar Texto</span>
                        </>
                      )}
                    </button>
                  </div>
                  <p className="text-xs sm:text-sm text-[#594F45] leading-relaxed bg-[#FAF6F0] p-3.5 rounded-xl border border-[#EDE5DA]">
                    "{script.text}"
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Bottom Card de Transição para Biografia */}
          <div className="bg-[#FFFFFF] border border-[#E7DFD5] rounded-3xl p-6 sm:p-8 text-center shadow-sm">
            <span className="text-xs font-mono text-[#8C8275] uppercase tracking-widest block mb-2">
              Conheça mais sobre quem eu sou
            </span>
            <h3 className="text-xl sm:text-2xl font-light text-[#1C1815] tracking-tight mb-2">
              Quer conhecer minha história, formação e propósito?
            </h3>
            <p className="text-xs sm:text-sm text-[#665D52] mb-6 max-w-md mx-auto">
              Veja a minha biografia completa, a linha do tempo de carreira e os valores que fundamentam a Oeco.
            </p>
            <Link
              to="/bni/biografia"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#CF2030] text-white text-sm font-medium hover:bg-[#B51A29] transition-all shadow-sm active:scale-[0.99]"
            >
              <span>Ver Minha Biografia</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-[#E7DFD5] py-6 text-center text-xs text-[#8C8275] font-mono">
        © {new Date().getFullYear()} Matheus Marques · Oeco Financial Solutions · BNI Respeito
      </footer>
    </div>
  );
};
