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
  GraduationCap,
  Users
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

          {/* Member Card Inicial com Foto Bem Enquadrada e Sem Pitch */}
          <div className="bg-[#1C1815] text-[#FAF8F5] border border-[#2E2824] rounded-3xl p-6 sm:p-8 shadow-lg mb-10 relative overflow-hidden">
            <div className="flex flex-col sm:flex-row items-center sm:items-center gap-6 sm:gap-7 relative z-10">
              
              {/* Foto do Matheus */}
              <div className="relative shrink-0">
                <img
                  src="/images/bni/profile.jpg"
                  alt="Matheus Marques"
                  className="w-36 h-36 sm:w-44 sm:h-44 rounded-2xl object-cover object-[center_15%] border-2 border-[#3D342D] shadow-lg ring-4 ring-[#FAF8F5]/10"
                />
              </div>

              {/* Informações: Nome uniforme, segregação de Especialista em BPO Financeiro e Oeco */}
              <div className="text-center sm:text-left flex-1">
                <h1 className="text-3xl sm:text-4xl font-normal text-[#FAF8F5] tracking-tight mb-2 font-sans">
                  Matheus Marques
                </h1>
                
                <div className="text-base sm:text-lg text-[#D1B688] font-medium font-sans">
                  Especialista em BPO Financeiro
                </div>

                <div className="text-sm sm:text-base text-[#FAF8F5]/90 font-medium font-sans mb-2">
                  Oeco Financial Solutions
                </div>

                <div className="text-xs sm:text-sm text-[#A89F91] font-mono">
                  BNI Respeito · Rio de Janeiro / RJ
                </div>
              </div>

            </div>
          </div>

          {/* MATRIZ G.A.I.N.S. (Sem letras soltas) */}
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
                  <h3 className="text-lg font-medium text-[#1C1815]">Metas (Goals)</h3>
                </div>
                <div className="space-y-2 text-xs sm:text-sm text-[#594F45] leading-relaxed pl-12">
                  <p>• Faturar R$ 10.000 recorrentes advindos do BNI.</p>
                  <p>• Fechar mais 20 clientes recorrentes nos próximos 6 meses.</p>
                </div>
              </div>

              {/* A - Accomplishments */}
              <div className="bg-[#FFFFFF] border border-[#E7DFD5] rounded-2xl p-5 sm:p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-xl bg-[#FAF6F0] border border-[#E7DFD5] flex items-center justify-center text-[#CF2030]">
                    <Trophy className="w-4 h-4" />
                  </div>
                  <h3 className="text-lg font-medium text-[#1C1815]">Conquistas (Accomplishments)</h3>
                </div>
                <div className="space-y-2.5 text-xs sm:text-sm text-[#594F45] leading-relaxed pl-12">
                  <p>• <strong className="text-[#1C1815]">Startups & Governança:</strong> Estruturação completa do setor financeiro em startups de tecnologia, sendo a <strong className="text-[#1C1815]">Lemobs</strong> a de maior impacto, onde os processos e a governança implementados continuam rodando com excelência há mais de 4 anos.</p>
                  <p>• <strong className="text-[#1C1815]">Carta (EUA):</strong> Atuação direta com altos executivos dos EUA e donos de fundos com mais de $500M de AUM (Assets Under Management). Devido ao alto desempenho comprovado, assumiu e cuidava dos maiores clientes da Carta antes de sair.</p>
                </div>
              </div>

              {/* I - Interests */}
              <div className="bg-[#FFFFFF] border border-[#E7DFD5] rounded-2xl p-5 sm:p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-xl bg-[#FAF6F0] border border-[#E7DFD5] flex items-center justify-center text-[#CF2030]">
                    <Compass className="w-4 h-4" />
                  </div>
                  <h3 className="text-lg font-medium text-[#1C1815]">Interesses (Interests)</h3>
                </div>
                <div className="space-y-2 text-xs sm:text-sm text-[#594F45] leading-relaxed pl-12">
                  <p>• Amor por números e por traduzi-los de forma legível e estratégica para quem decide.</p>
                  <p>• Dar aula e ensinar contabilidade e finanças.</p>
                  <p>• Tecnologia e uso prático de Inteligência Artificial (IA) no dia a dia, tanto no trabalho quanto na vida pessoal.</p>
                  <p>• Passar tempo com minha esposa Gabriella e com minha filha Isabella de 1 ano.</p>
                  <p>• Tempo de comunhão com os amigos.</p>
                  <p>• Serviço comunitário voluntário na igreja.</p>
                  <p>• Corrida de rua como disciplina e superação pessoal.</p>
                </div>
              </div>

              {/* N - Networks */}
              <div className="bg-[#FFFFFF] border border-[#E7DFD5] rounded-2xl p-5 sm:p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-xl bg-[#FAF6F0] border border-[#E7DFD5] flex items-center justify-center text-[#CF2030]">
                    <Network className="w-4 h-4" />
                  </div>
                  <h3 className="text-lg font-medium text-[#1C1815]">Redes de Contato (Networks)</h3>
                </div>
                <ul className="space-y-2 text-xs sm:text-sm text-[#594F45] leading-relaxed pl-12">
                  <li>• CRC (Conselho Regional de Contabilidade)</li>
                  <li>• UFRJ (Academia contábil)</li>
                  <li>• 1 franqueado da escola Legacy (com 2 unidades)</li>
                  <li>• Grupo de empresários de Vila Valqueire</li>
                  <li>• Grupo de corrida de Vila Valqueire</li>
                </ul>
              </div>

              {/* S - Skills */}
              <div className="bg-[#FFFFFF] border border-[#E7DFD5] rounded-2xl p-5 sm:p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-xl bg-[#FAF6F0] border border-[#E7DFD5] flex items-center justify-center text-[#CF2030]">
                    <Wrench className="w-4 h-4" />
                  </div>
                  <h3 className="text-lg font-medium text-[#1C1815]">Habilidades & Competências Pessoais (Skills)</h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm text-[#594F45] pl-12 mt-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#CF2030] shrink-0" />
                    <span>Visão analítica de números e processos</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#CF2030] shrink-0" />
                    <span>Disciplina e rigor na execução diária</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#CF2030] shrink-0" />
                    <span>Comunicação clara e didática de finanças</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#CF2030] shrink-0" />
                    <span>Organização, método e estruturação de rotinas</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#CF2030] shrink-0" />
                    <span>Facilidade com tecnologia, sistemas e IA</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#CF2030] shrink-0" />
                    <span>Confiabilidade e transparência com dados sensíveis</span>
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
              
              {/* Boas referências (Reordenado do menor para o maior, sem descrições) */}
              <div className="bg-[#FFFFFF] border border-[#E7DFD5] rounded-2xl p-5 sm:p-6 shadow-sm">
                <div className="flex items-center gap-2 text-xs font-mono text-[#3D7A54] uppercase tracking-wider mb-3">
                  <CheckCircle2 className="w-4 h-4 text-[#3D7A54]" />
                  <strong className="text-sm text-[#1C1815]">Ótimas Referências</strong>
                </div>
                <ul className="space-y-2.5 text-xs sm:text-sm text-[#594F45] leading-relaxed">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#3D7A54]"></span>
                    <span>Profissionais liberais e MEIs</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#3D7A54]"></span>
                    <span>Clínicas médicas e odontológicas</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#3D7A54]"></span>
                    <span>Escritórios de advocacia</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#3D7A54]"></span>
                    <span>Arquitetos e engenheiros</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#3D7A54]"></span>
                    <span>Construção civil — obras e reformas</span>
                  </li>
                </ul>
              </div>

              {/* Más referências (Ajustadas com as novas regras) */}
              <div className="bg-[#FFFFFF] border border-[#E7DFD5] rounded-2xl p-5 sm:p-6 shadow-sm">
                <div className="flex items-center gap-2 text-xs font-mono text-[#CF2030] uppercase tracking-wider mb-3">
                  <XCircle className="w-4 h-4 text-[#CF2030]" />
                  <strong className="text-sm text-[#1C1815]">O que NÃO é boa referência</strong>
                </div>
                <ul className="space-y-2 text-xs sm:text-sm text-[#594F45] leading-relaxed">
                  <li>• Empresas buscando atalhos fiscais, sonegação ou caixa dois.</li>
                  <li>• Empresas onde o dono do negócio é centralizador e não deseja delegar processos.</li>
                  <li>• Grandes corporações que possuem equipe interna completa no financeiro (de estagiário a VP de finanças).</li>
                  <li>• Aquele conhecido da fila do pão que falou uma das frases-chave mas com quem não se possui relacionamento ativo para acompanhar a referência.</li>
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
