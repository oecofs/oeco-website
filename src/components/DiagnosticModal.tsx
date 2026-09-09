import React, { useState, useEffect } from 'react';
import { 
  X, 
  ArrowRight, 
  ArrowLeft, 
  CheckCircle2, 
  ShieldCheck, 
  MessageCircle, 
  Briefcase, 
  User, 
  Building2, 
  Sparkles
} from 'lucide-react';
import { useDiagnosticModal } from '../context/DiagnosticModalContext';
import { buildWhatsAppLink } from '../utils/whatsapp';

interface DiagnosticFormData {
  segment: string;
  revenue: string;
  bottleneck: string;
  currentSystem: string;
  name: string;
  company: string;
}

const SEGMENT_OPTIONS = [
  { id: 'construcao', label: 'Construção Civil & Obras', icon: '🏗️', description: 'Construtoras, incorporadoras e gestão de obras' },
  { id: 'saude', label: 'Clínica Médica / Odontológica / Saúde', icon: '🩺', description: 'Clínicas, consultórios e serviços hospitalares' },
  { id: 'liberal', label: 'Profissional Liberal', icon: '⚖️', description: 'Engenheiros, arquitetos, advogados, psicólogos' },
  { id: 'tech', label: 'Tecnologia & Software (SaaS)', icon: '💻', description: 'Empresas de tecnologia, desenvolvimento e inovação' },
  { id: 'b2b', label: 'Serviços B2B & Consultorias', icon: '🤝', description: 'Prestadores de serviços e assessorias corporativas' },
  { id: 'outro', label: 'Outro Segmento Empresarial', icon: '🏢', description: 'Outros modelos de negócio e comércio' }
];

const REVENUE_OPTIONS = [
  'Até R$ 50 mil / mês',
  'De R$ 50 mil a R$ 100 mil / mês',
  'De R$ 100 mil a R$ 300 mil / mês',
  'De R$ 300 mil a R$ 500 mil / mês',
  'De R$ 500 mil a R$ 1 milhão / mês',
  'Acima de R$ 1 milhão / mês'
];

const BOTTLENECK_OPTIONS = [
  { id: 'tempo', label: 'Falta de tempo operacional', description: 'O operacional financeiro consome minhas noites, fins de semana e foco comercial' },
  { id: 'margem', label: 'Incerteza do lucro real', description: 'Faturamento alto, mas não sei quanto sobra de lucro limpo por obra ou projeto' },
  { id: 'descompasso', label: 'Descompasso de contas e contabilidade', description: 'Contas acumuladas no fim do mês, retrabalho e atritos com envio para a contabilidade' },
  { id: 'previsibilidade', label: 'Falta de previsibilidade de fluxo', description: 'Dificuldade de enxergar o caixa das próximas 4 a 12 semanas com precisão' },
  { id: 'crescimento', label: 'Empresa crescendo sem controle', description: 'O volume aumentou e os controles manuais/planilhas não dão mais conta' }
];

const SYSTEM_OPTIONS = [
  { id: 'planilhas', label: 'Planilhas em Excel / Anotações', description: 'Controle manual vulnerável a erros e esquecimentos' },
  { id: 'proprio', label: 'Eu mesmo faço quando sobra tempo', description: 'Gestão nos intervalos do trabalho ou fora do horário comercial' },
  { id: 'interno', label: 'Pessoa interna sobrecarregada', description: 'Equipe própria sem processos padronizados ou tempo suficiente' },
  { id: 'software_desorganizado', label: 'Já usamos software, mas está desorganizado', description: 'Temos Nibo, Conta Azul ou similar, mas falta rotina e relatórios confiáveis' }
];

export const DiagnosticModal: React.FC = () => {
  const { isOpen, closeModal, initialSegment } = useDiagnosticModal();
  const [step, setStep] = useState<number>(1);
  const [formData, setFormData] = useState<DiagnosticFormData>({
    segment: '',
    revenue: '',
    bottleneck: '',
    currentSystem: '',
    name: '',
    company: ''
  });

  // Set initial segment if passed
  useEffect(() => {
    if (initialSegment) {
      setFormData(prev => ({ ...prev, segment: initialSegment }));
    }
  }, [initialSegment]);

  // Lock background scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleNext = () => {
    if (step < 5) {
      setStep(step + 1);
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const buildDiagnosticMessage = (): string => {
    return [
      `*SOLICITAÇÃO DE PRÉ-DIAGNÓSTICO FINANCEIRO OECO*`,
      `------------------------------------------`,
      `👤 *Responsável:* ${formData.name.trim() || 'Não informado'}`,
      `🏢 *Empresa:* ${formData.company.trim() || 'Não informado'}`,
      ``,
      `📌 *Segmento:* ${formData.segment || 'Não informado'}`,
      `💰 *Faixa de Faturamento:* ${formData.revenue || 'Não informado'}`,
      `⚠️ *Principal Gargalo:* ${formData.bottleneck || 'Não informado'}`,
      `⚙️ *Gestão Atual:* ${formData.currentSystem || 'Não informado'}`,
      `------------------------------------------`,
      `Olá, Matheus! Preenchi o formulário no site da OECO e gostaria de entender como estruturar o financeiro da minha empresa.`
    ].join('\n');
  };

  const handleSubmitWhatsApp = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const message = buildDiagnosticMessage();
    const link = buildWhatsAppLink(message);
    window.open(link, '_blank', 'noopener,noreferrer');
    closeModal();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-[#1C1815]/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl bg-[#FAF8F5] rounded-3xl shadow-2xl border border-[#EAE7DE] overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Bar */}
        <div className="bg-[#1C1815] text-[#FAF8F5] px-6 sm:px-8 py-5 flex items-center justify-between border-b border-[#2E2824]">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-[#D1B688]/20 flex items-center justify-center text-[#D1B688]">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-bold text-[#FAF8F5] tracking-tight flex items-center gap-2">
                Pré-Diagnóstico de Caixa & Rotina OECO
              </h2>
              <p className="text-xs text-[#FAF8F5]/70">
                Mapeamento ágil em etapas para direcionar sua conversa executiva
              </p>
            </div>
          </div>
          <button
            onClick={closeModal}
            className="p-1.5 rounded-full text-[#FAF8F5]/60 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Fechar formulário"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Stepper Progress Indicator (5 Passos) */}
        <div className="px-6 sm:px-8 pt-5 pb-3 bg-[#F4EFEA] border-b border-[#EAE7DE]">
          <div className="flex items-center justify-between gap-2 text-xs font-semibold text-[#5C3A1A]">
            
            {/* Step 1: Segmento */}
            <div className={`flex items-center gap-1.5 ${step >= 1 ? 'text-[#2C1810]' : 'text-[#5C3A1A]/40'}`}>
              <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${
                step > 1 ? 'bg-[#4F6D46] text-white' : step === 1 ? 'bg-[#D1B688] text-[#1C1815] font-bold' : 'bg-stone-300 text-stone-600'
              }`}>
                {step > 1 ? '✓' : '1'}
              </span>
              <span className="hidden sm:inline">Segmento</span>
            </div>
            <div className="h-[2px] flex-1 bg-[#EAE7DE] mx-1">
              <div className={`h-full bg-[#4F6D46] transition-all duration-300 ${
                step === 1 ? 'w-0' : 'w-full'
              }`}></div>
            </div>

            {/* Step 2: Faturamento */}
            <div className={`flex items-center gap-1.5 ${step >= 2 ? 'text-[#2C1810]' : 'text-[#5C3A1A]/40'}`}>
              <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${
                step > 2 ? 'bg-[#4F6D46] text-white' : step === 2 ? 'bg-[#D1B688] text-[#1C1815] font-bold' : 'bg-stone-300 text-stone-600'
              }`}>
                {step > 2 ? '✓' : '2'}
              </span>
              <span className="hidden sm:inline">Faturamento</span>
            </div>
            <div className="h-[2px] flex-1 bg-[#EAE7DE] mx-1">
              <div className={`h-full bg-[#4F6D46] transition-all duration-300 ${
                step <= 2 ? 'w-0' : 'w-full'
              }`}></div>
            </div>

            {/* Step 3: Gargalo */}
            <div className={`flex items-center gap-1.5 ${step >= 3 ? 'text-[#2C1810]' : 'text-[#5C3A1A]/40'}`}>
              <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${
                step > 3 ? 'bg-[#4F6D46] text-white' : step === 3 ? 'bg-[#D1B688] text-[#1C1815] font-bold' : 'bg-stone-300 text-stone-600'
              }`}>
                {step > 3 ? '✓' : '3'}
              </span>
              <span className="hidden sm:inline">Gargalo</span>
            </div>
            <div className="h-[2px] flex-1 bg-[#EAE7DE] mx-1">
              <div className={`h-full bg-[#4F6D46] transition-all duration-300 ${
                step <= 3 ? 'w-0' : 'w-full'
              }`}></div>
            </div>

            {/* Step 4: Gestão Atual */}
            <div className={`flex items-center gap-1.5 ${step >= 4 ? 'text-[#2C1810]' : 'text-[#5C3A1A]/40'}`}>
              <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${
                step > 4 ? 'bg-[#4F6D46] text-white' : step === 4 ? 'bg-[#D1B688] text-[#1C1815] font-bold' : 'bg-stone-300 text-stone-600'
              }`}>
                {step > 4 ? '✓' : '4'}
              </span>
              <span className="hidden sm:inline">Gestão</span>
            </div>
            <div className="h-[2px] flex-1 bg-[#EAE7DE] mx-1">
              <div className={`h-full bg-[#4F6D46] transition-all duration-300 ${
                step <= 4 ? 'w-0' : 'w-full'
              }`}></div>
            </div>

            {/* Step 5: Conexão */}
            <div className={`flex items-center gap-1.5 ${step === 5 ? 'text-[#2C1810]' : 'text-[#5C3A1A]/40'}`}>
              <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${
                step === 5 ? 'bg-[#D1B688] text-[#1C1815] font-bold' : 'bg-stone-300 text-stone-600'
              }`}>
                5
              </span>
              <span className="hidden sm:inline">Conexão</span>
            </div>

          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 max-h-[68vh] overflow-y-auto">
          
          {/* STEP 1: SEGMENT */}
          {step === 1 && (
            <div className="space-y-4 animate-in fade-in duration-200">
              <div className="mb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#4F6D46]">Passo 1 de 5</span>
                <h3 className="text-xl font-extrabold text-[#2C1810] tracking-tight mt-1">
                  Qual é o segmento principal da sua empresa?
                </h3>
                <p className="text-xs text-[#5C3A1A]/80 mt-1">
                  Adaptamos a estrutura de centros de custo e conciliação de acordo com a sua realidade.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {SEGMENT_OPTIONS.map((opt) => {
                  const isSelected = formData.segment === opt.label;
                  return (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => setFormData({ ...formData, segment: opt.label })}
                      className={`text-left p-4 rounded-2xl border transition-all duration-200 flex flex-col justify-between group ${
                        isSelected
                          ? 'border-[#4F6D46] bg-[#4F6D46]/10 ring-2 ring-[#4F6D46]/20 shadow-sm'
                          : 'border-[#EAE7DE] bg-white hover:border-[#D1B688] hover:bg-[#FAF8F5]'
                      }`}
                    >
                      <div className="flex items-center justify-between w-full mb-1.5">
                        <span className="text-2xl">{opt.icon}</span>
                        {isSelected && <CheckCircle2 className="w-5 h-5 text-[#4F6D46]" />}
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-[#2C1810] group-hover:text-[#4F6D46] transition-colors">
                          {opt.label}
                        </h4>
                        <p className="text-[11px] text-[#5C3A1A]/70 mt-1 leading-snug">
                          {opt.description}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* STEP 2: REVENUE RANGE (Apenas lista limpa com as faixas, sem detalhe embaixo) */}
          {step === 2 && (
            <div className="space-y-4 animate-in fade-in duration-200">
              <div className="mb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#4F6D46]">Passo 2 de 5</span>
                <h3 className="text-xl font-extrabold text-[#2C1810] tracking-tight mt-1">
                  Qual é a faixa média de faturamento mensal da empresa?
                </h3>
                <p className="text-xs text-[#5C3A1A]/80 mt-1">
                  Essa informação nos permite dimensionar a equipe e a intensidade ideal do BPO Financeiro.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {REVENUE_OPTIONS.map((opt) => {
                  const isSelected = formData.revenue === opt;
                  return (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => setFormData({ ...formData, revenue: opt })}
                      className={`w-full text-left p-4 rounded-2xl border transition-all duration-200 flex items-center justify-between group ${
                        isSelected
                          ? 'border-[#4F6D46] bg-[#4F6D46]/10 ring-2 ring-[#4F6D46]/20 shadow-sm'
                          : 'border-[#EAE7DE] bg-white hover:border-[#D1B688] hover:bg-[#FAF8F5]'
                      }`}
                    >
                      <span className="text-sm font-bold text-[#2C1810] group-hover:text-[#4F6D46] transition-colors">
                        {opt}
                      </span>
                      <div className={`w-5 h-5 rounded-full border flex items-center justify-center flex-shrink-0 transition-colors ${
                        isSelected ? 'border-[#4F6D46] bg-[#4F6D46] text-white' : 'border-[#5C3A1A]/30 bg-white'
                      }`}>
                        {isSelected && <CheckCircle2 className="w-3.5 h-3.5" />}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* STEP 3: BOTTLENECK */}
          {step === 3 && (
            <div className="space-y-4 animate-in fade-in duration-200">
              <div className="mb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#4F6D46]">Passo 3 de 5</span>
                <h3 className="text-xl font-extrabold text-[#2C1810] tracking-tight mt-1">
                  Qual é a maior dor ou gargalo financeiro hoje?
                </h3>
                <p className="text-xs text-[#5C3A1A]/80 mt-1">
                  Selecione o ponto que mais consome sua energia ou gera insegurança.
                </p>
              </div>

              <div className="space-y-2.5 pt-2">
                {BOTTLENECK_OPTIONS.map((opt) => {
                  const isSelected = formData.bottleneck === opt.label;
                  return (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => setFormData({ ...formData, bottleneck: opt.label })}
                      className={`w-full text-left p-4 rounded-2xl border transition-all duration-200 flex items-start gap-3.5 group ${
                        isSelected
                          ? 'border-[#4F6D46] bg-[#4F6D46]/10 ring-2 ring-[#4F6D46]/20 shadow-sm'
                          : 'border-[#EAE7DE] bg-white hover:border-[#D1B688] hover:bg-[#FAF8F5]'
                      }`}
                    >
                      <div className={`mt-0.5 w-5 h-5 rounded-full border flex items-center justify-center flex-shrink-0 transition-colors ${
                        isSelected ? 'border-[#4F6D46] bg-[#4F6D46] text-white' : 'border-[#5C3A1A]/30 bg-white'
                      }`}>
                        {isSelected && <CheckCircle2 className="w-3.5 h-3.5" />}
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-[#2C1810] group-hover:text-[#4F6D46] transition-colors">
                          {opt.label}
                        </h4>
                        <p className="text-xs text-[#5C3A1A]/75 mt-0.5 leading-snug">
                          {opt.description}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* STEP 4: CURRENT SYSTEM */}
          {step === 4 && (
            <div className="space-y-4 animate-in fade-in duration-200">
              <div className="mb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#4F6D46]">Passo 4 de 5</span>
                <h3 className="text-xl font-extrabold text-[#2C1810] tracking-tight mt-1">
                  Como o financeiro roda na empresa atualmente?
                </h3>
                <p className="text-xs text-[#5C3A1A]/80 mt-1">
                  Não se preocupe: a OECO organiza o legado sem atrito operacional.
                </p>
              </div>

              <div className="space-y-2.5 pt-2">
                {SYSTEM_OPTIONS.map((opt) => {
                  const isSelected = formData.currentSystem === opt.label;
                  return (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => setFormData({ ...formData, currentSystem: opt.label })}
                      className={`w-full text-left p-4 rounded-2xl border transition-all duration-200 flex items-start gap-3.5 group ${
                        isSelected
                          ? 'border-[#4F6D46] bg-[#4F6D46]/10 ring-2 ring-[#4F6D46]/20 shadow-sm'
                          : 'border-[#EAE7DE] bg-white hover:border-[#D1B688] hover:bg-[#FAF8F5]'
                      }`}
                    >
                      <div className={`mt-0.5 w-5 h-5 rounded-full border flex items-center justify-center flex-shrink-0 transition-colors ${
                        isSelected ? 'border-[#4F6D46] bg-[#4F6D46] text-white' : 'border-[#5C3A1A]/30 bg-white'
                      }`}>
                        {isSelected && <CheckCircle2 className="w-3.5 h-3.5" />}
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-[#2C1810] group-hover:text-[#4F6D46] transition-colors">
                          {opt.label}
                        </h4>
                        <p className="text-xs text-[#5C3A1A]/75 mt-0.5 leading-snug">
                          {opt.description}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* STEP 5: IDENTIFICATION & SUBMISSION (Sem campo de WhatsApp) */}
          {step === 5 && (
            <div className="space-y-5 animate-in fade-in duration-200">
              <div className="mb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#4F6D46]">Passo 5 de 5 · Conexão Executiva</span>
                <h3 className="text-xl font-extrabold text-[#2C1810] tracking-tight mt-1">
                  Para quem e onde enviamos a análise prévia?
                </h3>
                <p className="text-xs text-[#5C3A1A]/80 mt-1">
                  Seus dados são protegidos por sigilo ético absoluto. Você falará diretamente com Matheus Marques.
                </p>
              </div>

              {/* Dossiê Summary Card */}
              <div className="p-4 rounded-2xl bg-[#F4EFEA] border border-[#EAE7DE] space-y-2 text-xs">
                <div className="flex items-center gap-2 font-bold text-[#2C1810]">
                  <Briefcase className="w-4 h-4 text-[#4F6D46]" />
                  <span>Resumo do seu Pré-Diagnóstico:</span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1 text-stone-700">
                  <div className="bg-white p-2.5 rounded-xl border border-[#EAE7DE]">
                    <span className="text-[10px] text-stone-400 uppercase font-semibold block">Segmento</span>
                    <span className="font-bold text-[#2C1810] line-clamp-1">{formData.segment || 'Não informado'}</span>
                  </div>
                  <div className="bg-white p-2.5 rounded-xl border border-[#EAE7DE]">
                    <span className="text-[10px] text-stone-400 uppercase font-semibold block">Faturamento</span>
                    <span className="font-bold text-[#2C1810] line-clamp-1">{formData.revenue || 'Não informado'}</span>
                  </div>
                  <div className="bg-white p-2.5 rounded-xl border border-[#EAE7DE]">
                    <span className="text-[10px] text-stone-400 uppercase font-semibold block">Gargalo</span>
                    <span className="font-bold text-[#2C1810] line-clamp-1">{formData.bottleneck || 'Não informado'}</span>
                  </div>
                  <div className="bg-white p-2.5 rounded-xl border border-[#EAE7DE]">
                    <span className="text-[10px] text-stone-400 uppercase font-semibold block">Gestão Atual</span>
                    <span className="font-bold text-[#2C1810] line-clamp-1">{formData.currentSystem || 'Não informado'}</span>
                  </div>
                </div>
              </div>

              {/* Contact Inputs (Apenas Nome e Empresa) */}
              <form onSubmit={handleSubmitWhatsApp} className="space-y-3.5 pt-1">
                <div>
                  <label className="block text-xs font-bold text-[#2C1810] mb-1">
                    Seu Nome Completo *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-[#5C3A1A]/50 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      placeholder="Ex: Carlos Eduardo"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-[#EAE7DE] bg-white text-sm text-[#2C1810] focus:ring-2 focus:ring-[#4F6D46] focus:border-transparent outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#2C1810] mb-1">
                    Nome da Empresa / Projeto *
                  </label>
                  <div className="relative">
                    <Building2 className="w-4 h-4 text-[#5C3A1A]/50 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      placeholder="Ex: Construtora Horizonte"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-[#EAE7DE] bg-white text-sm text-[#2C1810] focus:ring-2 focus:ring-[#4F6D46] focus:border-transparent outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Confidentiality Commitment Badge */}
                <div className="p-3 rounded-xl bg-[#4F6D46]/10 border border-[#4F6D46]/20 flex items-center gap-2.5 text-xs text-[#2C1810]">
                  <ShieldCheck className="w-5 h-5 text-[#4F6D46] flex-shrink-0" />
                  <span className="leading-snug">
                    <strong>Pacto de Sigilo Ético OECO:</strong> Qualquer dado informado é estritamente confidencial e utilizado exclusivamente para desenhar o diagnóstico da sua empresa.
                  </span>
                </div>

                {/* Submit Action */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-4 px-6 rounded-2xl bg-[#2C1810] hover:bg-[#4F6D46] text-[#FAF8F5] font-extrabold text-sm tracking-wide shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2.5 group"
                  >
                    <MessageCircle className="w-5 h-5 text-[#D1B688] group-hover:text-white transition-colors" />
                    <span>Enviar Dossiê & Abrir Conversa no WhatsApp</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </form>
            </div>
          )}

        </div>

        {/* Modal Footer Controls */}
        <div className="px-6 sm:px-8 py-4 bg-[#F4EFEA] border-t border-[#EAE7DE] flex items-center justify-between">
          {step > 1 ? (
            <button
              type="button"
              onClick={handleBack}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#5C3A1A] hover:text-[#2C1810] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Voltar</span>
            </button>
          ) : (
            <button
              type="button"
              onClick={closeModal}
              className="text-xs font-semibold text-[#5C3A1A]/70 hover:text-[#2C1810] transition-colors"
            >
              Cancelar
            </button>
          )}

          {step < 5 ? (
            <button
              type="button"
              onClick={handleNext}
              disabled={
                (step === 1 && !formData.segment) ||
                (step === 2 && !formData.revenue) ||
                (step === 3 && !formData.bottleneck) ||
                (step === 4 && !formData.currentSystem)
              }
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs transition-all duration-200 ${
                ((step === 1 && formData.segment) ||
                 (step === 2 && formData.revenue) ||
                 (step === 3 && formData.bottleneck) ||
                 (step === 4 && formData.currentSystem))
                  ? 'bg-[#2C1810] text-[#FAF8F5] hover:bg-[#4F6D46] shadow-sm'
                  : 'bg-stone-300 text-stone-500 cursor-not-allowed'
              }`}
            >
              <span>Avançar</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          ) : (
            <a
              href={buildWhatsAppLink('Olá, Matheus! Vim pelo site da OECO e gostaria de falar diretamente com você pelo WhatsApp.')}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeModal}
              className="text-xs text-[#5C3A1A]/80 hover:text-[#4F6D46] underline transition-colors"
            >
              Prefere pular e falar direto no WhatsApp?
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
