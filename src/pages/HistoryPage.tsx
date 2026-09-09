import React from 'react';
import { 
  Trees, 
  Leaf, 
  Sprout, 
  ShieldCheck, 
  CheckCircle2, 
  Compass, 
  Sparkles, 
  ArrowUpRight, 
  MessageCircle, 
  Building2, 
  Quote, 
  Layers, 
  Award, 
  BookOpen,
  Calendar,
  Check,
  Target,
  Users,
  TrendingUp,
  FileSpreadsheet,
  AlertCircle
} from 'lucide-react';
import { buildWhatsAppLink, DEFAULT_WHATSAPP_MESSAGES } from '../utils/whatsapp';

export const HistoryPage: React.FC = () => {
  return (
    <div className="bg-[#FAF8F5] text-[#292524] flex flex-col font-sans selection:bg-[#4F6D46] selection:text-white">
      
      {/* ========================================================================= */}
      {/* 1. HERO EDITORIAL DA FLORESTA & SUSTENTABILIDADE */}
      {/* ========================================================================= */}
      <section className="relative min-h-[85vh] flex items-center justify-center pt-32 pb-24 px-4 sm:px-6 lg:px-8 bg-[#112010] text-[#FAF8F5] overflow-hidden">
        {/* Background Forest Canopy Image with Ambient Scrim */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/site/floresta-sustentabilidade.jpg"
            alt="Dossel da floresta iluminado pela luz da manhã"
            className="w-full h-full object-cover object-center filter brightness-[0.45] contrast-105 scale-105 animate-in fade-in duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#112010]/80 via-[#112010]/60 to-[#112010]"></div>
          {/* Subtle Organic Green Glow */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#4F6D46]/20 rounded-full blur-[120px] pointer-events-none"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15] mb-8 text-[#FAF8F5]">
            Não viemos para derrubar a árvore.{' '}
            <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D1B688] via-[#E2D2B2] to-[#6B7F5A]">
              Viemos para tecer a estrutura
            </span>{' '}
            que protege o seu trabalho.
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-xl text-[#FAF8F5]/90 max-w-3xl mx-auto leading-relaxed font-normal">
            A OECO nasceu da união entre o rigor analítico da alta controladoria e a sabedoria biológica das formigas-tecelãs: construir a partir do que já existe, com diligência diária, sustentabilidade perene e zero atalhos.
          </p>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. A INQUIETAÇÃO NA TRINCHEIRA (Condensado + Imagem) */}
      {/* ========================================================================= */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            
            {/* Coluna Esquerda: Texto Condensado & Ágil (7 cols) */}
            <div className="lg:col-span-7">
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#112010] tracking-tight mb-6 leading-tight">
                Por que tantas empresas que vendem bem sangram no escuro?
              </h2>

              <blockquote className="p-5 rounded-2xl bg-[#F2F5ED] border-l-4 border-[#4F6D46] mb-8 text-[#112010] font-medium text-base sm:text-lg italic leading-relaxed">
                “O empresário brasileiro é um mestre da execução: acorda cedo, mobiliza equipes e entrega. Mas quando a noite cai, descobre-se refém de uma rotina financeira cega e estafante.”
              </blockquote>

              <div className="space-y-4">
                {/* Ponto 1 */}
                <div className="p-5 rounded-2xl bg-white border border-[#EAE7DE] shadow-sm flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#F2F5ED] text-[#4F6D46] flex items-center justify-center shrink-0 mt-0.5">
                    <AlertCircle className="w-5 h-5 text-[#4F6D46]" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#112010] mb-1">
                      O Paradoxo do Faturamento
                    </h3>
                    <p className="text-sm text-[#2C1810]/80 leading-relaxed">
                      Faturar alto não significa ter lucro no bolso. Sem fluxo de caixa diário, a margem do negócio sangra silenciosamente em juros, multas e descasamento de prazos.
                    </p>
                  </div>
                </div>

                {/* Ponto 2 */}
                <div className="p-5 rounded-2xl bg-white border border-[#EAE7DE] shadow-sm flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#F2F5ED] text-[#4F6D46] flex items-center justify-center shrink-0 mt-0.5">
                    <FileSpreadsheet className="w-5 h-5 text-[#4F6D46]" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#112010] mb-1">
                      O Vazio das Consultorias Teóricas
                    </h3>
                    <p className="text-sm text-[#2C1810]/80 leading-relaxed">
                      O mercado tenta vender relatórios de 100 páginas que ninguém aplica na prática. O que a empresa precisa é de uma esteira diária que execute e cuide das contas.
                    </p>
                  </div>
                </div>

                {/* Ponto 3 */}
                <div className="p-5 rounded-2xl bg-white border border-[#EAE7DE] shadow-sm flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#F2F5ED] text-[#4F6D46] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-5 h-5 text-[#4F6D46]" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#112010] mb-1">
                      Falta de Método, Não de Esforço
                    </h3>
                    <p className="text-sm text-[#2C1810]/80 leading-relaxed">
                      O problema nunca foi a dedicação do dono. Faltava uma esteira de trabalho silenciosa, disciplinada e sustentável que protegesse a saúde do caixa.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Coluna Direita: Imagem da Trincheira (5 cols) */}
            <div className="lg:col-span-5">
              <div className="rounded-3xl overflow-hidden border border-[#EAE7DE] shadow-xl bg-white group">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src="/images/site/canteiro-gestao-obra.jpg"
                    alt="Gestor acompanhando indicadores financeiros e fluxo de caixa em tablet no canteiro de obras"
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700"
                  />
                </div>
                <div className="p-6 bg-[#FAF8F5] border-t border-[#EAE7DE]">
                  <p className="text-xs sm:text-sm text-[#5C3A1A] font-medium leading-relaxed">
                    <strong>A trincheira da gestão:</strong> A conciliação diária entre a execução no canteiro e o controle cirúrgico de caixa, assegurando que cada obra gere lucro real.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. A REVELAÇÃO DA NATUREZA — POR QUE OECO? (Oecophylla) */}
      {/* ========================================================================= */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#1B2E18] text-[#FAF8F5] relative overflow-hidden">
        {/* Glow ambient */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#D1B688]/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-5 text-[#FAF8F5]">
              A Sabedoria das Formigas-Tecelãs:{' '}
              <span className="text-[#D1B688]">Oecophylla</span>
            </h2>
            <p className="text-base sm:text-lg text-[#FAF8F5]/85 leading-relaxed">
              A resposta que buscávamos para transformar as finanças empresariais não veio de um manual corporativo de Wall Street. Veio de um dos fenômenos mais sofisticados da bio-arquitetura natural.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-14 items-center">
            {/* Macro Image Card */}
            <div className="lg:col-span-6 rounded-3xl overflow-hidden border-2 border-[#D1B688]/40 shadow-2xl bg-[#112010] relative group">
              <img
                src="/images/site/oecophylla-tecela.jpg"
                alt="Formigas-tecelãs Oecophylla unindo folhas com fios de seda natural"
                className="w-full h-auto object-cover group-hover:scale-102 transition-transform duration-700"
              />
              <div className="p-6 bg-[#112010]/95 border-t border-[#D1B688]/30">
                <span className="text-xs font-mono font-bold tracking-wider text-[#D1B688] uppercase block mb-1">
                  ENGENHARIA COOPERATIVA DA NATUREZA
                </span>
                <p className="text-xs sm:text-sm text-[#FAF8F5]/80 leading-relaxed">
                  Operárias da espécie <em>Oecophylla</em> constroem seu ninho unindo folhas vivas com fios de seda microscópicos produzidos por suas larvas — preservando a integridade da árvore e construindo a partir do que já existe.
                </p>
              </div>
            </div>

            {/* Narrative Content */}
            <div className="lg:col-span-6 space-y-6">
              <div className="p-6 rounded-2xl bg-[#FAF8F5]/5 border border-[#D1B688]/25 backdrop-blur-sm">
                <h3 className="text-xl font-bold text-[#D1B688] mb-2 flex items-center gap-2.5">
                  <Sprout className="w-5 h-5 text-[#D1B688]" />
                  <span>Construir sem romper com a árvore</span>
                </h3>
                <p className="text-sm sm:text-base text-[#FAF8F5]/85 leading-relaxed">
                  Uma formiga comum apenas corta e carrega folhas caídas. A <strong>Oecophylla</strong> é diferente: ela não destrói a folha, não arranca galhos e não adoece a árvore. Ela utiliza a própria folhagem viva como alicerce, conectando as bordas com precisão cirúrgica.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#FAF8F5]/5 border border-[#D1B688]/25 backdrop-blur-sm">
                <h3 className="text-xl font-bold text-[#D1B688] mb-2 flex items-center gap-2.5">
                  <Layers className="w-5 h-5 text-[#D1B688]" />
                  <span>A analogia fundamental com a OECO</span>
                </h3>
                <p className="text-sm sm:text-base text-[#FAF8F5]/85 leading-relaxed">
                  Na OECO Financial Solutions, nós <strong>nunca chegamos para romper com a história da sua empresa</strong>, impor demissões traumáticas ou substituir seus softwares de trabalho por sistemas caros. Nós identificamos o que você já construiu — seu faturamento, suas rotinas e seus parceiros — e tecemos os fios de processos diários que unem vendas, bancos, compras e contabilidade em uma estrutura impenetrável.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-[#FAF8F5]/5 border border-[#D1B688]/25 backdrop-blur-sm">
                <h3 className="text-xl font-bold text-[#D1B688] mb-2 flex items-center gap-2.5">
                  <ShieldCheck className="w-5 h-5 text-[#D1B688]" />
                  <span>Diligência &amp; Cooperação Extrema</span>
                </h3>
                <p className="text-sm sm:text-base text-[#FAF8F5]/85 leading-relaxed">
                  Quando as folhas estão distantes, as operárias formam <em>correntes vivas</em> com seus próprios corpos para aproximar as pontas lentamente. Esse é o espírito da OECO: cooperação estreita e leal com a sua equipe e com a sua contabilidade, sem atrito e com foco exclusivo no resultado do negócio.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. O LEMA INEQUEBRÁVEL — "AME O PROCESSO" */}
      {/* ========================================================================= */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#FAF8F5]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#112010] tracking-tight mb-4">
              “Ame o Processo”: A Disciplina do 1% Diário
            </h2>
            <p className="text-base sm:text-lg text-[#5C3A1A]/85 max-w-2xl mx-auto">
              Rejeitamos o fetiche pelos saltos mágicos e pelas promessas de ganhos fáceis. Acreditamos na força imbatível da rotina bem executada.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="p-8 rounded-3xl bg-white border border-[#EAE7DE] shadow-sm hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 rounded-2xl bg-[#F2F5ED] text-[#4F6D46] flex items-center justify-center mb-6">
                <BookOpen className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#112010] mb-3">
                A Sabedoria de Provérbios 6:6
              </h3>
              <p className="text-sm sm:text-base text-[#2C1810]/80 leading-relaxed">
                <em>“Vai ter com a formiga, ó preguiçoso; olha para os seus caminhos, e sê sábio.”</em> A formiga trabalha com constância silenciosa durante todo o verão para garantir sustento e proteção no inverno. Previsibilidade financeira se constrói na calmaria da rotina, não no pânico do final do mês.
              </p>
            </div>

            {/* Card 2 */}
            <div className="p-8 rounded-3xl bg-white border border-[#EAE7DE] shadow-sm hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 rounded-2xl bg-[#F2F5ED] text-[#4F6D46] flex items-center justify-center mb-6">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#112010] mb-3">
                Beleza na Rotina Diária
              </h3>
              <p className="text-sm sm:text-base text-[#2C1810]/80 leading-relaxed">
                Há uma dignidade profunda em saber que todo boleto agendado foi auditado, que cada nota fiscal foi emitida no prazo e que o saldo do banco bate 100% com o sistema todo dia às 18h. A rotina bem feita não engessa: ela liberta a mente do empresário.
              </p>
            </div>

            {/* Card 3 */}
            <div className="p-8 rounded-3xl bg-white border border-[#EAE7DE] shadow-sm hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 rounded-2xl bg-[#F2F5ED] text-[#4F6D46] flex items-center justify-center mb-6">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#112010] mb-3">
                O Efeito Composto do 1%
              </h3>
              <p className="text-sm sm:text-base text-[#2C1810]/80 leading-relaxed">
                Uma empresa que melhora 1% ao dia nos seus controles, na negociação com fornecedores e na formalização de contratos não precisa de movimentos desesperados. Em doze meses, ela se torna inabalável e muito mais lucrativa.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. A TRAJETÓRIA DO FUNDADOR (A Solidez Técnica) */}
      {/* ========================================================================= */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#F4F6F0]">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#112010] tracking-tight mb-5">
              Rigor de Elite a Serviço da Economia Real
            </h2>
            <p className="text-base sm:text-lg text-[#5C3A1A]/85 leading-relaxed">
              A metodologia da OECO não é fruto de teorias. É sustentada por mais de uma década de rigor contábil acadêmico e vivência executiva em ambientes de altíssima exigência.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 items-center">
            {/* Foto Oficial do Fundador */}
            <div className="lg:col-span-5">
              <div className="rounded-3xl overflow-hidden border-2 border-[#D1B688] shadow-2xl bg-[#112010] relative group max-w-md mx-auto">
                <img
                  src="/images/photoshoot/web/IMG_8156_-_v2-web.jpg"
                  alt="Matheus Marques - Fundador da OECO Financial Solutions"
                  className="w-full h-auto object-cover group-hover:scale-102 transition-transform duration-700 filter brightness-95"
                />
                <div className="p-6 bg-[#112010] text-[#FAF8F5]">
                  <h3 className="text-2xl font-bold text-[#FAF8F5]">Matheus Marques</h3>
                  <p className="text-sm font-semibold text-[#D1B688] mb-2">
                    Fundador &amp; Especialista em BPO Financeiro
                  </p>
                  <p className="text-xs text-[#FAF8F5]/80 leading-relaxed font-mono">
                    Mestre em Ciências Contábeis (UFRJ) · CRC-RJ Ativo · Especialista em Controladoria de Obras e Gestão por Centros de Custo.
                  </p>
                </div>
              </div>
            </div>

            {/* Timeline dos 4 Pilares da Trajetória */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Etapa 1: UFRJ (Ajustado com datas exatas: 2012-2016 e 2017-2019) */}
              <div className="p-6 rounded-2xl bg-white border border-[#EAE7DE] shadow-sm hover:border-[#4F6D46]/40 transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono font-bold tracking-wider text-[#4F6D46] uppercase">
                    2012 — 2019 · FORMAÇÃO DE ELITE
                  </span>
                  <span className="text-xs font-bold text-[#D1B688] bg-[#112010] px-3 py-1 rounded-full">
                    UFRJ
                  </span>
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-[#112010] mb-2">
                  Bacharelado (2012–2016) &amp; Mestrado (2017–2019) em Ciências Contábeis
                </h4>
                <p className="text-sm sm:text-base text-[#2C1810]/80 leading-relaxed">
                  Formação integral pela Universidade Federal do Rio de Janeiro: Bacharelado concluído em 2016 e Mestrado em Ciências Contábeis em 2019. Rigor em normas contábeis internacionais (IFRS), auditoria e inteligência fiscal — a base técnica inegociável que ancora cada número auditado na OECO.
                </p>
              </div>

              {/* Etapa 2: Furnas */}
              <div className="p-6 rounded-2xl bg-white border border-[#EAE7DE] shadow-sm hover:border-[#4F6D46]/40 transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono font-bold tracking-wider text-[#4F6D46] uppercase">
                    2014 — 2016 · INFRAESTRUTURA &amp; GOVERNANÇA
                  </span>
                  <span className="text-xs font-bold text-[#D1B688] bg-[#112010] px-3 py-1 rounded-full">
                    FURNAS
                  </span>
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-[#112010] mb-2">
                  Demonstrações Financeiras de Grande Porte
                </h4>
                <p className="text-sm sm:text-base text-[#2C1810]/80 leading-relaxed">
                  Atuação direta na elaboração de demonstrações contábeis de uma das maiores estatais de energia e infraestrutura do país. Vivência em auditorias rigorosas e controle de ativos de grande escala.
                </p>
              </div>

              {/* Etapa 3: Startups & Lemobs */}
              <div className="p-6 rounded-2xl bg-white border border-[#EAE7DE] shadow-sm hover:border-[#4F6D46]/40 transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono font-bold tracking-wider text-[#4F6D46] uppercase">
                    2018 — 2021 · CRESCIMENTO ACELERADO
                  </span>
                  <span className="text-xs font-bold text-[#D1B688] bg-[#112010] px-3 py-1 rounded-full">
                    LEMOBS &amp; STARTUPS
                  </span>
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-[#112010] mb-2">
                  4 Anos Estruturando o Financeiro do Zero
                </h4>
                <p className="text-sm sm:text-base text-[#2C1810]/80 leading-relaxed">
                  Liderança financeira na trincheira de empresas de tecnologia em rápida expansão. Criação de processos de faturamento, conciliação diária e DRE gerencial, construindo um legado perene de governança.
                </p>
              </div>

              {/* Etapa 4: Carta EUA */}
              <div className="p-6 rounded-2xl bg-white border border-[#EAE7DE] shadow-sm hover:border-[#4F6D46]/40 transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono font-bold tracking-wider text-[#4F6D46] uppercase">
                    2022 — 2026 · VENTURE CAPITAL GLOBAL
                  </span>
                  <span className="text-xs font-bold text-[#D1B688] bg-[#112010] px-3 py-1 rounded-full">
                    CARTA (EUA)
                  </span>
                </div>
                <h4 className="text-lg sm:text-xl font-bold text-[#112010] mb-2">
                  Fund Implementation Accountant
                </h4>
                <p className="text-sm sm:text-base text-[#2C1810]/80 leading-relaxed">
                  Na líder americana de administração de fundos de Private Equity e Venture Capital. Relacionamento com gestores globais, integração de operações complexas e execução sob o padrão mais exigente do mercado financeiro mundial.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. OS 4 ALICERCES DO ECOSSISTEMA FINANCEIRO OECO (Cards Centralizados & Destacados) */}
      {/* ========================================================================= */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#112010] text-[#FAF8F5]">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-5 text-[#FAF8F5]">
              Os 4 Alicerces da Sua Floresta Financeira
            </h2>
            <p className="text-base sm:text-lg text-[#FAF8F5]/85 leading-relaxed">
              Como garantimos que a sua empresa cresça com raízes profundas, tronco firme e copa protegida de tempestades.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {/* Pilar 1: Raízes Profundas */}
            <div className="p-8 rounded-3xl bg-[#1A2E17] border border-[#D1B688]/30 flex flex-col justify-between items-center text-center hover:border-[#D1B688] transition-all duration-300 hover:shadow-xl group">
              <div className="w-full flex flex-col items-center">
                <div className="w-14 h-14 rounded-2xl bg-[#D1B688]/15 border border-[#D1B688]/40 text-[#D1B688] flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                  <Sparkles className="w-7 h-7 text-[#D1B688]" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-[#FAF8F5] mb-3 leading-snug">
                  Raízes Profundas <br />
                  <span className="text-[#D1B688] text-sm font-semibold">(Rotina Diária)</span>
                </h3>
                <p className="text-sm text-[#FAF8F5]/80 leading-relaxed">
                  Zero pendências acumuladas para o final do mês. Conciliação bancária diária e contas a pagar agendadas sem atrasos nem multas.
                </p>
              </div>

              {/* Solução em Destaque */}
              <div className="w-full mt-6 pt-4 border-t border-[#D1B688]/20">
                <div className="py-3.5 px-4 rounded-2xl bg-[#D1B688]/15 border border-[#D1B688]/40 shadow-sm group-hover:bg-[#D1B688]/25 group-hover:border-[#D1B688]/70 transition-all text-center">
                  <span className="text-sm sm:text-base font-bold text-[#FAF8F5] tracking-wide block">
                    Alívio da rotina braçal
                  </span>
                </div>
              </div>
            </div>

            {/* Pilar 2: Tronco Firme */}
            <div className="p-8 rounded-3xl bg-[#1A2E17] border border-[#D1B688]/30 flex flex-col justify-between items-center text-center hover:border-[#D1B688] transition-all duration-300 hover:shadow-xl group">
              <div className="w-full flex flex-col items-center">
                <div className="w-14 h-14 rounded-2xl bg-[#D1B688]/15 border border-[#D1B688]/40 text-[#D1B688] flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                  <Target className="w-7 h-7 text-[#D1B688]" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-[#FAF8F5] mb-3 leading-snug">
                  Tronco Firme <br />
                  <span className="text-[#D1B688] text-sm font-semibold">(Orçado vs. Realizado)</span>
                </h3>
                <p className="text-sm text-[#FAF8F5]/80 leading-relaxed">
                  Cada obra, projeto ou centro de custo é auditado como uma miniempresa. Você sabe com exatidão onde o lucro foi gerado.
                </p>
              </div>

              {/* Solução em Destaque */}
              <div className="w-full mt-6 pt-4 border-t border-[#D1B688]/20">
                <div className="py-3.5 px-4 rounded-2xl bg-[#D1B688]/15 border border-[#D1B688]/40 shadow-sm group-hover:bg-[#D1B688]/25 group-hover:border-[#D1B688]/70 transition-all text-center">
                  <span className="text-sm sm:text-base font-bold text-[#FAF8F5] tracking-wide block">
                    Blindagem ativa da margem
                  </span>
                </div>
              </div>
            </div>

            {/* Pilar 3: Simbioses Leais */}
            <div className="p-8 rounded-3xl bg-[#1A2E17] border border-[#D1B688]/30 flex flex-col justify-between items-center text-center hover:border-[#D1B688] transition-all duration-300 hover:shadow-xl group">
              <div className="w-full flex flex-col items-center">
                <div className="w-14 h-14 rounded-2xl bg-[#D1B688]/15 border border-[#D1B688]/40 text-[#D1B688] flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                  <Users className="w-7 h-7 text-[#D1B688]" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-[#FAF8F5] mb-3 leading-snug">
                  Simbioses Leais <br />
                  <span className="text-[#D1B688] text-sm font-semibold">(Aliança Contábil)</span>
                </h3>
                <p className="text-sm text-[#FAF8F5]/80 leading-relaxed">
                  Não competimos com o seu contador. Somos o braço direito dele na trincheira diária, enviando documentos redondos todo dia 1º.
                </p>
              </div>

              {/* Solução em Destaque */}
              <div className="w-full mt-6 pt-4 border-t border-[#D1B688]/20">
                <div className="py-3.5 px-4 rounded-2xl bg-[#D1B688]/15 border border-[#D1B688]/40 shadow-sm group-hover:bg-[#D1B688]/25 group-hover:border-[#D1B688]/70 transition-all text-center">
                  <span className="text-sm sm:text-base font-bold text-[#FAF8F5] tracking-wide block">
                    Contabilidade sem retrabalho
                  </span>
                </div>
              </div>
            </div>

            {/* Pilar 4: Copa Viva */}
            <div className="p-8 rounded-3xl bg-[#1A2E17] border border-[#D1B688]/30 flex flex-col justify-between items-center text-center hover:border-[#D1B688] transition-all duration-300 hover:shadow-xl group">
              <div className="w-full flex flex-col items-center">
                <div className="w-14 h-14 rounded-2xl bg-[#D1B688]/15 border border-[#D1B688]/40 text-[#D1B688] flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                  <TrendingUp className="w-7 h-7 text-[#D1B688]" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-[#FAF8F5] mb-3 leading-snug">
                  Copa Viva <br />
                  <span className="text-[#D1B688] text-sm font-semibold">(Previsibilidade de Caixa)</span>
                </h3>
                <p className="text-sm text-[#FAF8F5]/80 leading-relaxed">
                  Equalização entre pagamentos de folha e recebimentos de clientes. Gestão preventiva para nunca mais pagar a obra do seu cliente.
                </p>
              </div>

              {/* Solução em Destaque */}
              <div className="w-full mt-6 pt-4 border-t border-[#D1B688]/20">
                <div className="py-3.5 px-4 rounded-2xl bg-[#D1B688]/15 border border-[#D1B688]/40 shadow-sm group-hover:bg-[#D1B688]/25 group-hover:border-[#D1B688]/70 transition-all text-center">
                  <span className="text-sm sm:text-base font-bold text-[#FAF8F5] tracking-wide block">
                    Segurança para o futuro
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. O CONVITE & CTA BOTÂNICA FINAL */}
      {/* ========================================================================= */}
      <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#FAF8F5] relative">
        <div className="max-w-5xl mx-auto rounded-3xl bg-gradient-to-br from-[#112010] via-[#1B2E18] to-[#112010] text-[#FAF8F5] p-8 sm:p-14 lg:p-16 border-2 border-[#D1B688] shadow-2xl relative overflow-hidden text-center">
          {/* Ambient Lighting */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#D1B688]/15 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>

          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#FAF8F5] tracking-tight mb-6 leading-tight">
              Sua empresa merece uma estrutura tão sólida quanto o seu trabalho.
            </h2>
            <p className="text-base sm:text-lg text-[#FAF8F5]/85 leading-relaxed mb-10 max-w-2xl mx-auto">
              Se você acredita no valor do processo, quer eliminar o trabalho braçal da rotina e busca previsibilidade real de caixa, nós tecemos essa ponte com você.
            </p>

            <a
              href={buildWhatsAppLink(DEFAULT_WHATSAPP_MESSAGES.history)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 py-4 sm:py-5 px-8 sm:px-10 rounded-2xl bg-[#D1B688] hover:bg-[#c4a673] text-[#112010] font-extrabold text-base sm:text-lg tracking-wide transition-all shadow-xl hover:shadow-2xl hover:scale-102 group"
            >
              <MessageCircle className="w-5 h-5 text-[#112010] group-hover:scale-110 transition-transform" />
              <span>Conversar Diretamente com Matheus Marques</span>
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>

            <p className="text-xs text-[#D1B688] font-mono mt-6">
              Conversa inicial consultiva e sigilosa · Sem intermediários
            </p>
          </div>
        </div>
      </section>

    </div>
  );
};
