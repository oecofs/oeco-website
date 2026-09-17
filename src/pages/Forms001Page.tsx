import React, { useState, useEffect, useMemo } from 'react';
import { 
  ClipboardList, 
  FileSpreadsheet, 
  Mail, 
  Plus, 
  Check, 
  Trash2, 
  ChevronRight, 
  ArrowLeft, 
  Smartphone, 
  Building2, 
  Scale, 
  Sparkles, 
  Download, 
  Share2, 
  User, 
  MessageSquare,
  BarChart3,
  Search,
  ExternalLink
} from 'lucide-react';

export type SurveyResponse = {
  id: string;
  timestamp: string;
  // Aba 1: Produto / Mercado
  software: string;
  customSoftware?: string;
  practiceAreas: string[];
  firmSize: string;
  painPoints: string[];
  innovationProfile: string;
  // Aba 2: Contato
  lawyerName: string;
  firmName: string;
  whatsapp: string;
  email: string;
  city: string;
  notes: string;
};

const STORAGE_KEY = 'oeco_forms001_responses';

const SOFTWARE_OPTIONS = [
  'Astrea',
  'Projuris',
  'ADVBOX',
  'SAJ ADV',
  'Legal One (Thomson Reuters)',
  'Themis',
  'Espaider',
  'Planilha / Excel',
  'Nenhum / Manual',
  'Outro'
];

const PRACTICE_AREAS = [
  { id: 'trabalhista', label: '⚖️ Trabalhista' },
  { id: 'civel', label: '📄 Cível & Consumidor' },
  { id: 'previdenciario', label: '🏛️ Previdenciário (INSS)' },
  { id: 'tributario', label: '💰 Tributário' },
  { id: 'familia', label: '👨‍👩‍👧 Família & Sucessões' },
  { id: 'penal', label: '🚨 Penal & Criminal' },
  { id: 'empresarial', label: '🏢 Empresarial & Societário' },
  { id: 'imobiliario', label: '🏠 Imobiliário' },
  { id: 'agro', label: '🌾 Agronegócio' },
  { id: 'medico', label: '🩺 Direito Médico' },
  { id: 'bancario', label: '🏦 Bancário' }
];

const FIRM_SIZES = [
  { id: 'solo', label: '👤 Autônomo / Individual' },
  { id: 'small', label: '👥 Pequeno (2 a 5 advogados)' },
  { id: 'medium', label: '🏢 Médio (6 a 15 advogados)' },
  { id: 'large', label: '🏛️ Grande (15+ advogados)' }
];

const PAIN_POINTS = [
  { id: 'custas', label: '💸 Esquecem de cobrar custas processuais adiantadas do cliente' },
  { id: 'alvaras', label: '🏛️ Dificuldade fiscal em alvarás / separar honorários vs dinheiro do cliente' },
  { id: 'splits', label: '🤝 Descontrole em repasses de correspondentes & parceiros (splits)' },
  { id: 'pipeline', label: '📊 Falta de visibilidade de honorários futuros de êxito (caixa futuro)' },
  { id: 'integracao', label: '🔌 Software de processos não conversa com extrato bancário / financeiro' },
  { id: 'cobranca', label: '📱 Dificuldade em mandar prestação de contas formal para o cliente' }
];

const INNOVATION_PROFILES = [
  { id: 'high', label: '🔥 Muito Aberto / Inovador', color: 'bg-emerald-100 text-emerald-800 border-emerald-300' },
  { id: 'medium', label: '⚡ Moderado / Pragmático', color: 'bg-amber-100 text-amber-800 border-amber-300' },
  { id: 'low', label: '🧊 Conservador / Tradicional', color: 'bg-slate-100 text-slate-700 border-slate-300' }
];

export const Forms001Page: React.FC = () => {
  // Navigation State: 'menu' | 'form' | 'report'
  const [view, setView] = useState<'menu' | 'form' | 'report'>('menu');
  const [formTab, setFormTab] = useState<'product' | 'contact'>('product');

  // Responses in localStorage
  const [responses, setResponses] = useState<SurveyResponse[]>([]);
  const [showSavedFeedback, setShowSavedFeedback] = useState(false);
  const [searchReport, setSearchReport] = useState('');

  // Form State
  const [software, setSoftware] = useState<string>('');
  const [customSoftware, setCustomSoftware] = useState<string>('');
  const [practiceAreas, setPracticeAreas] = useState<string[]>([]);
  const [firmSize, setFirmSize] = useState<string>('');
  const [painPoints, setPainPoints] = useState<string[]>([]);
  const [innovationProfile, setInnovationProfile] = useState<string>('high');

  const [lawyerName, setLawyerName] = useState<string>('');
  const [firmName, setFirmName] = useState<string>('');
  const [whatsapp, setWhatsapp] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [city, setCity] = useState<string>('');
  const [notes, setNotes] = useState<string>('');

  // Load from localStorage
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        setResponses(JSON.parse(stored));
      }
    } catch (e) {
      console.error('Erro ao ler localStorage', e);
    }
  }, []);

  // Save to localStorage
  const persistResponses = (updated: SurveyResponse[]) => {
    setResponses(updated);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    } catch (e) {
      console.error('Erro ao gravar localStorage', e);
    }
  };

  const resetForm = () => {
    setSoftware('');
    setCustomSoftware('');
    setPracticeAreas([]);
    setFirmSize('');
    setPainPoints([]);
    setInnovationProfile('high');
    setLawyerName('');
    setFirmName('');
    setWhatsapp('');
    setEmail('');
    setCity('');
    setNotes('');
    setFormTab('product');
  };

  const handleTogglePracticeArea = (id: string) => {
    setPracticeAreas(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const handleTogglePainPoint = (id: string) => {
    setPainPoints(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const handleSaveForm = (e?: React.FormEvent) => {
    if (e) e.preventDefault();

    const newEntry: SurveyResponse = {
      id: String(Date.now()),
      timestamp: new Date().toISOString(),
      software: software === 'Outro' && customSoftware.trim() ? customSoftware.trim() : software,
      customSoftware: customSoftware.trim() || undefined,
      practiceAreas,
      firmSize,
      painPoints,
      innovationProfile,
      lawyerName: lawyerName.trim(),
      firmName: firmName.trim(),
      whatsapp: whatsapp.trim(),
      email: email.trim().toLowerCase(),
      city: city.trim(),
      notes: notes.trim()
    };

    const updated = [newEntry, ...responses];
    persistResponses(updated);

    setShowSavedFeedback(true);
    resetForm();

    setTimeout(() => {
      setShowSavedFeedback(false);
      setView('menu');
    }, 1200);
  };

  const handleDeleteResponse = (id: string) => {
    if (confirm('Deseja excluir esta resposta?')) {
      const updated = responses.filter(r => r.id !== id);
      persistResponses(updated);
    }
  };

  const handleClearAll = () => {
    if (confirm('ATENÇÃO: Deseja apagar todas as respostas coletadas do seu celular? Certifique-se de ter baixado o Excel antes.')) {
      persistResponses([]);
    }
  };

  // Exportar Excel / CSV com UTF-8 BOM
  const handleExportCSV = () => {
    if (responses.length === 0) {
      alert('Nenhuma resposta para exportar.');
      return;
    }

    const headers = [
      'Data/Hora',
      'Nome do Advogado',
      'Escritorio',
      'WhatsApp',
      'Email',
      'Cidade',
      'Software de Processos',
      'Porte da Banca',
      'Areas de Atuacao',
      'Principais Dores / Gargalos',
      'Perfil de Inovacao',
      'Notas da Conversa'
    ];

    const rows = responses.map(r => {
      const dateStr = new Date(r.timestamp).toLocaleString('pt-BR');
      const areasStr = r.practiceAreas.join(', ');
      const painsStr = r.painPoints
        .map(p => PAIN_POINTS.find(item => item.id === p)?.label || p)
        .join('; ');
      
      return [
        `"${dateStr}"`,
        `"${(r.lawyerName || '').replace(/"/g, '""')}"`,
        `"${(r.firmName || '').replace(/"/g, '""')}"`,
        `"${(r.whatsapp || '').replace(/"/g, '""')}"`,
        `"${(r.email || '').replace(/"/g, '""')}"`,
        `"${(r.city || '').replace(/"/g, '""')}"`,
        `"${(r.software || '').replace(/"/g, '""')}"`,
        `"${(r.firmSize || '').replace(/"/g, '""')}"`,
        `"${areasStr.replace(/"/g, '""')}"`,
        `"${painsStr.replace(/"/g, '""')}"`,
        `"${r.innovationProfile || ''}"`,
        `"${(r.notes || '').replace(/"/g, '""')}"`
      ].join(';');
    });

    const csvContent = '\uFEFF' + [headers.join(';'), ...rows].join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    const today = new Date().toISOString().split('T')[0];
    link.href = url;
    link.setAttribute('download', `pesquisa_juridica_oeco_${today}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  // Enviar por E-mail via mailto:
  const handleSendEmail = () => {
    if (responses.length === 0) {
      alert('Nenhuma resposta para enviar.');
      return;
    }

    const today = new Date().toLocaleDateString('pt-BR');
    const subject = encodeURIComponent(`📊 Relatório de Pesquisa Jurídica — Evento ${today} (${responses.length} respostas)`);
    
    let bodyText = `RELATÓRIO DE PESQUISA DE CAMPO COM ADVOGADOS\nData: ${today}\nTotal de Entrevistas: ${responses.length}\n\n`;
    bodyText += `==========================================\n\n`;

    responses.forEach((r, idx) => {
      bodyText += `[Entrevista #${idx + 1}]\n`;
      bodyText += `• Advogado: ${r.lawyerName || 'Não informado'}\n`;
      bodyText += `• Escritório: ${r.firmName || 'Não informado'}\n`;
      bodyText += `• WhatsApp: ${r.whatsapp || 'Não informado'}\n`;
      bodyText += `• E-mail: ${r.email || 'Não informado'}\n`;
      bodyText += `• Software Atual: ${r.software || 'Não informado'}\n`;
      bodyText += `• Áreas: ${r.practiceAreas.join(', ') || 'Não especificado'}\n`;
      bodyText += `• Porte: ${r.firmSize || 'Não especificado'}\n`;
      bodyText += `• Dores Relatadas: ${r.painPoints.join(', ') || 'Nenhuma'}\n`;
      bodyText += `• Notas: ${r.notes || 'Sem observações'}\n\n`;
      bodyText += `------------------------------------------\n\n`;
    });

    bodyText += `Gerado pelo OECO Forms 001 - oecofs.com/forms001`;

    const mailtoUrl = `mailto:?subject=${subject}&body=${encodeURIComponent(bodyText)}`;
    window.location.href = mailtoUrl;
  };

  // Copiar Resumo para WhatsApp
  const handleCopyWhatsAppSummary = () => {
    if (responses.length === 0) {
      alert('Nenhuma resposta para copiar.');
      return;
    }

    const today = new Date().toLocaleDateString('pt-BR');
    let text = `*📊 RELATÓRIO DO EVENTO JURÍDICO - ${today}*\n`;
    text += `*Total de Advogados Mapeados:* ${responses.length}\n\n`;

    responses.forEach((r, idx) => {
      text += `*#${idx + 1} ${r.lawyerName || 'Advogado'}* (${r.firmName || 'Escritório'})\n`;
      text += `📱 Whats: ${r.whatsapp || 'S/N'}\n`;
      text += `💻 Software: ${r.software || 'N/A'}\n`;
      text += `⚖️ Áreas: ${r.practiceAreas.join(', ') || 'N/A'}\n`;
      if (r.notes) text += `📝 Nota: ${r.notes}\n`;
      text += `\n`;
    });

    navigator.clipboard.writeText(text);
    alert('✅ Resumo copiado para a área de transferência! Cole no seu WhatsApp.');
  };

  // Resumo Estatístico para a aba Relatório
  const stats = useMemo(() => {
    const total = responses.length;
    if (total === 0) return null;

    // Contagem de softwares
    const softwareCounts: Record<string, number> = {};
    responses.forEach(r => {
      const sw = r.software || 'Não Informado';
      softwareCounts[sw] = (softwareCounts[sw] || 0) + 1;
    });

    // Contagem de áreas
    const areaCounts: Record<string, number> = {};
    responses.forEach(r => {
      r.practiceAreas.forEach(a => {
        areaCounts[a] = (areaCounts[a] || 0) + 1;
      });
    });

    return { total, softwareCounts, areaCounts };
  }, [responses]);

  const filteredResponses = useMemo(() => {
    if (!searchReport.trim()) return responses;
    const term = searchReport.toLowerCase();
    return responses.filter(r => 
      (r.lawyerName && r.lawyerName.toLowerCase().includes(term)) ||
      (r.firmName && r.firmName.toLowerCase().includes(term)) ||
      (r.software && r.software.toLowerCase().includes(term)) ||
      (r.whatsapp && r.whatsapp.includes(term)) ||
      (r.notes && r.notes.toLowerCase().includes(term))
    );
  }, [responses, searchReport]);

  return (
    <div className="min-h-screen bg-[#F8F9FA] text-[#1E293B] font-sans pb-24">
      {/* Top Header Barra Fixa */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 px-4 py-3 shadow-xs">
        <div className="max-w-xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-[#4F6D46] flex items-center justify-center text-white font-black text-sm shadow-xs">
              Ø
            </div>
            <div>
              <h1 className="text-xs font-bold uppercase tracking-wider text-[#4F6D46]">Oeco Forms • 001</h1>
              <p className="text-sm font-extrabold text-slate-900 leading-tight">Pesquisa com Advogados</p>
            </div>
          </div>

          <div className="flex items-center gap-1.5">
            <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 flex items-center gap-1">
              <span>📱</span>
              <span>{responses.length} salvos</span>
            </span>
          </div>
        </div>
      </header>

      {/* FEEDBACK POPUP AO SALVAR */}
      {showSavedFeedback && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs animate-in fade-in">
          <div className="bg-white rounded-3xl p-6 text-center space-y-2 shadow-2xl max-w-xs w-full animate-in zoom-in-95">
            <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto text-2xl font-bold">
              ✓
            </div>
            <h3 className="text-base font-bold text-slate-900">Salvo com Sucesso!</h3>
            <p className="text-xs text-slate-500">Gravado no celular. Pronto para o próximo papo!</p>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 1. TELA: MENU PRINCIPAL / HUB                                             */}
      {/* ========================================================================= */}
      {view === 'menu' && (
        <div className="max-w-xl mx-auto p-4 space-y-5 pt-6 animate-in fade-in">
          {/* Card de Boas-Vindas */}
          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Evento de Networking
              </span>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-700">
                100% Offline
              </span>
            </div>
            <h2 className="text-xl font-extrabold text-slate-900 leading-snug">
              Mapeamento de Softwares & Dores na Advocacia
            </h2>
            <p className="text-xs text-slate-600 leading-relaxed">
              Use este aplicativo para registrar em menos de 1 minuto o software usado, áreas de atuação e contatos dos advogados com quem você conversar hoje.
            </p>
          </div>

          {/* 2 GRANDES BOTÕES DE AÇÃO */}
          <div className="grid grid-cols-1 gap-3.5">
            <button
              onClick={() => {
                resetForm();
                setView('form');
              }}
              className="p-5 bg-[#4F6D46] hover:bg-[#3D5537] text-white rounded-3xl shadow-md transition-all active:scale-[0.98] flex items-center justify-between cursor-pointer group"
            >
              <div className="flex items-center gap-3.5 text-left">
                <div className="w-12 h-12 rounded-2xl bg-white/15 flex items-center justify-center text-2xl shrink-0">
                  📝
                </div>
                <div>
                  <h3 className="font-extrabold text-base">Iniciar Novo Formulário</h3>
                  <p className="text-xs text-white/80 mt-0.5">Preencher dados do papo em 30 segundos</p>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-white/70 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => setView('report')}
              className="p-5 bg-white hover:bg-slate-50 border border-slate-200 text-slate-800 rounded-3xl shadow-xs transition-all active:scale-[0.98] flex items-center justify-between cursor-pointer group"
            >
              <div className="flex items-center gap-3.5 text-left">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center text-2xl shrink-0">
                  📊
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-extrabold text-base">Relatório & Exportar Excel</h3>
                    <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded-full">
                      {responses.length}
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 mt-0.5">Baixar planilha XLS ou enviar por e-mail</p>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-slate-400 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Prévia dos Últimos Cadastrados */}
          {responses.length > 0 && (
            <div className="bg-white rounded-3xl p-5 border border-slate-200 shadow-xs space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Últimos Cadastrados ({responses.length})
                </h4>
                <button
                  onClick={() => setView('report')}
                  className="text-xs font-bold text-[#4F6D46] hover:underline"
                >
                  Ver todos →
                </button>
              </div>

              <div className="divide-y divide-slate-100">
                {responses.slice(0, 3).map((r) => (
                  <div key={r.id} className="py-2.5 flex items-center justify-between text-xs">
                    <div>
                      <p className="font-bold text-slate-800">{r.lawyerName || 'Advogado sem nome'}</p>
                      <p className="text-[11px] text-slate-500">
                        {r.firmName ? `${r.firmName} • ` : ''}💻 {r.software || 'S/ Software'}
                      </p>
                    </div>
                    <span className="text-[10px] text-slate-400 font-mono">
                      {new Date(r.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* ========================================================================= */}
      {/* 2. TELA: FORMULÁRIO RÁPIDO                                                */}
      {/* ========================================================================= */}
      {view === 'form' && (
        <div className="max-w-xl mx-auto p-4 space-y-4 animate-in fade-in">
          {/* Barra de Voltar e Abas */}
          <div className="flex items-center justify-between">
            <button
              onClick={() => setView('menu')}
              className="px-3 py-1.5 bg-white border border-slate-200 text-slate-700 text-xs font-bold rounded-xl flex items-center gap-1 shadow-2xs hover:bg-slate-50"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Menu</span>
            </button>

            <span className="text-xs font-bold text-slate-500">
              {formTab === 'product' ? 'Passo 1 de 2: Produto' : 'Passo 2 de 2: Contato'}
            </span>
          </div>

          {/* Abas Alternáveis */}
          <div className="grid grid-cols-2 gap-2 bg-slate-200/70 p-1 rounded-2xl">
            <button
              type="button"
              onClick={() => setFormTab('product')}
              className={`py-2.5 text-xs font-bold rounded-xl transition-all flex items-center justify-center gap-1.5 ${
                formTab === 'product'
                  ? 'bg-white text-[#4F6D46] shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <span>💡</span>
              <span>1. Produto & Dores</span>
            </button>

            <button
              type="button"
              onClick={() => setFormTab('contact')}
              className={`py-2.5 text-xs font-bold rounded-xl transition-all flex items-center justify-center gap-1.5 ${
                formTab === 'contact'
                  ? 'bg-white text-[#4F6D46] shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <span>👤</span>
              <span>2. Contato / Escritório</span>
              {(lawyerName || whatsapp) && (
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              )}
            </button>
          </div>

          {/* ===================================================================== */}
          {/* CONTEÚDO DA ABA 1: PRODUTO / MERCADO                                  */}
          {/* ===================================================================== */}
          {formTab === 'product' && (
            <div className="space-y-4">
              {/* 1. Software Atual */}
              <div className="bg-white rounded-3xl p-5 border border-slate-200 shadow-2xs space-y-2.5">
                <label className="block text-xs font-extrabold text-slate-800 uppercase tracking-wider">
                  💻 1. Qual software eles usam para os processos?
                </label>
                <p className="text-[11px] text-slate-500">Selecione o software mencionado pelo advogado:</p>

                <div className="flex flex-wrap gap-2 pt-1">
                  {SOFTWARE_OPTIONS.map((sw) => {
                    const isSelected = software === sw;
                    return (
                      <button
                        key={sw}
                        type="button"
                        onClick={() => setSoftware(sw)}
                        className={`px-3.5 py-2 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-[#4F6D46] border-[#4F6D46] text-white shadow-xs'
                            : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300'
                        }`}
                      >
                        {sw}
                      </button>
                    );
                  })}
                </div>

                {software === 'Outro' && (
                  <div className="pt-2">
                    <input
                      type="text"
                      placeholder="Digite o nome do outro software..."
                      value={customSoftware}
                      onChange={(e) => setCustomSoftware(e.target.value)}
                      className="w-full px-3 py-2 border border-slate-300 rounded-xl text-xs bg-slate-50 outline-none focus:border-[#4F6D46] focus:bg-white"
                      autoFocus
                    />
                  </div>
                )}
              </div>

              {/* 2. Áreas de Atuação */}
              <div className="bg-white rounded-3xl p-5 border border-slate-200 shadow-2xs space-y-2.5">
                <div className="flex items-center justify-between">
                  <label className="block text-xs font-extrabold text-slate-800 uppercase tracking-wider">
                    ⚖️ 2. Áreas de Atuação do Escritório
                  </label>
                  <span className="text-[10px] text-slate-400 font-semibold">Seleção Múltipla</span>
                </div>

                <div className="flex flex-wrap gap-2 pt-1">
                  {PRACTICE_AREAS.map((area) => {
                    const isSelected = practiceAreas.includes(area.label);
                    return (
                      <button
                        key={area.id}
                        type="button"
                        onClick={() => handleTogglePracticeArea(area.label)}
                        className={`px-3 py-2 rounded-xl text-xs font-semibold border transition-all cursor-pointer flex items-center gap-1.5 ${
                          isSelected
                            ? 'bg-amber-100 border-amber-400 text-amber-950 font-bold shadow-2xs'
                            : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300'
                        }`}
                      >
                        <span>{isSelected ? '✓' : '+'}</span>
                        <span>{area.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 3. Porte da Banca */}
              <div className="bg-white rounded-3xl p-5 border border-slate-200 shadow-2xs space-y-2.5">
                <label className="block text-xs font-extrabold text-slate-800 uppercase tracking-wider">
                  🏢 3. Tamanho / Porte do Escritório
                </label>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {FIRM_SIZES.map((size) => {
                    const isSelected = firmSize === size.label;
                    return (
                      <button
                        key={size.id}
                        type="button"
                        onClick={() => setFirmSize(size.label)}
                        className={`p-2.5 px-3 rounded-xl text-xs font-semibold border text-left transition-all cursor-pointer flex items-center justify-between ${
                          isSelected
                            ? 'bg-emerald-50 border-emerald-500 text-emerald-950 font-bold'
                            : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300'
                        }`}
                      >
                        <span>{size.label}</span>
                        {isSelected && <span className="text-emerald-700 font-bold">✓</span>}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 4. Dores & Gargalos Relatados */}
              <div className="bg-white rounded-3xl p-5 border border-slate-200 shadow-2xs space-y-2.5">
                <div className="flex items-center justify-between">
                  <label className="block text-xs font-extrabold text-slate-800 uppercase tracking-wider">
                    🚨 4. Maiores Dores / Gargalos Identificados
                  </label>
                  <span className="text-[10px] text-slate-400 font-semibold">Toque para marcar</span>
                </div>

                <div className="space-y-2">
                  {PAIN_POINTS.map((pain) => {
                    const isSelected = painPoints.includes(pain.id);
                    return (
                      <button
                        key={pain.id}
                        type="button"
                        onClick={() => handleTogglePainPoint(pain.id)}
                        className={`w-full p-3 rounded-2xl text-xs text-left border transition-all flex items-start gap-2.5 cursor-pointer ${
                          isSelected
                            ? 'bg-red-50/80 border-red-300 text-red-950 font-bold shadow-2xs'
                            : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300'
                        }`}
                      >
                        <span className={`w-4 h-4 rounded-md border flex items-center justify-center shrink-0 mt-0.5 text-[10px] font-bold ${
                          isSelected ? 'bg-red-600 border-red-600 text-white' : 'border-slate-300 bg-white'
                        }`}>
                          {isSelected ? '✓' : ''}
                        </span>
                        <span>{pain.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 5. Perfil de Inovação */}
              <div className="bg-white rounded-3xl p-5 border border-slate-200 shadow-2xs space-y-2.5">
                <label className="block text-xs font-extrabold text-slate-800 uppercase tracking-wider">
                  ✨ 5. Perfil / Abertura para Tecnologia & IA
                </label>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {INNOVATION_PROFILES.map((prof) => {
                    const isSelected = innovationProfile === prof.id;
                    return (
                      <button
                        key={prof.id}
                        type="button"
                        onClick={() => setInnovationProfile(prof.id)}
                        className={`p-2.5 rounded-xl text-xs font-bold border text-center transition-all cursor-pointer ${
                          isSelected
                            ? `${prof.color} shadow-xs font-extrabold`
                            : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300'
                        }`}
                      >
                        {prof.label}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Botão de Avançar para Contato */}
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => setFormTab('contact')}
                  className="w-full py-3.5 bg-slate-900 hover:bg-slate-800 text-white font-extrabold rounded-2xl text-xs shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <span>Preencher Dados de Contato</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* ===================================================================== */}
          {/* CONTEÚDO DA ABA 2: DADOS DO CONTATO                                   */}
          {/* ===================================================================== */}
          {formTab === 'contact' && (
            <div className="bg-white rounded-3xl p-5 border border-slate-200 shadow-2xs space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Nome do Advogado(a)
                </label>
                <input
                  type="text"
                  placeholder="Ex: Dr. Roberto Martins"
                  value={lawyerName}
                  onChange={(e) => setLawyerName(e.target.value)}
                  className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl text-xs bg-slate-50 focus:bg-white focus:ring-2 focus:ring-[#4F6D46]/20 focus:border-[#4F6D46] outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Nome da Sociedade / Escritório
                </label>
                <input
                  type="text"
                  placeholder="Ex: Martins & Associados Advocacia"
                  value={firmName}
                  onChange={(e) => setFirmName(e.target.value)}
                  className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl text-xs bg-slate-50 focus:bg-white focus:ring-2 focus:ring-[#4F6D46]/20 focus:border-[#4F6D46] outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    WhatsApp (DDD + Número)
                  </label>
                  <input
                    type="tel"
                    placeholder="11 99999-9999"
                    value={whatsapp}
                    onChange={(e) => setWhatsapp(e.target.value)}
                    className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl text-xs bg-slate-50 focus:bg-white focus:ring-2 focus:ring-[#4F6D46]/20 focus:border-[#4F6D46] outline-none font-mono"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    E-mail de Contato
                  </label>
                  <input
                    type="email"
                    placeholder="roberto@martinsadv.com.br"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl text-xs bg-slate-50 focus:bg-white focus:ring-2 focus:ring-[#4F6D46]/20 focus:border-[#4F6D46] outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Cidade / Estado (UF)
                </label>
                <input
                  type="text"
                  placeholder="Ex: São Paulo / SP"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl text-xs bg-slate-50 focus:bg-white focus:ring-2 focus:ring-[#4F6D46]/20 focus:border-[#4F6D46] outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  📝 Anotações Rápidas do Papo / Contexto
                </label>
                <textarea
                  rows={3}
                  placeholder="Ex: Conversamos sobre alvarás na Caixa, achou muito boa a ideia de cobrança via Whats, pediu para mandar mensagem na terça..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-3.5 py-2.5 border border-slate-300 rounded-xl text-xs bg-slate-50 focus:bg-white focus:ring-2 focus:ring-[#4F6D46]/20 focus:border-[#4F6D46] outline-none"
                />
              </div>
            </div>
          )}

          {/* BARRA FIXA INFERIOR DE SALVAMENTO */}
          <div className="fixed bottom-0 left-0 right-0 p-4 bg-white/95 backdrop-blur-md border-t border-slate-200 z-30 shadow-lg">
            <div className="max-w-xl mx-auto flex items-center gap-3">
              <button
                type="button"
                onClick={() => setView('menu')}
                className="px-4 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-2xl text-xs font-bold transition-all"
              >
                Cancelar
              </button>

              <button
                type="button"
                onClick={handleSaveForm}
                className="flex-1 py-3.5 bg-[#4F6D46] hover:bg-[#3D5537] text-white font-extrabold rounded-2xl text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-[0.98]"
              >
                <span>💾 Salvar Entrevista (Offline)</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 3. TELA: RELATÓRIO, EXCEL & EXPORTAÇÃO                                    */}
      {/* ========================================================================= */}
      {view === 'report' && (
        <div className="max-w-xl mx-auto p-4 space-y-4 animate-in fade-in">
          {/* Top Back Header */}
          <div className="flex items-center justify-between">
            <button
              onClick={() => setView('menu')}
              className="px-3 py-1.5 bg-white border border-slate-200 text-slate-700 text-xs font-bold rounded-xl flex items-center gap-1 shadow-2xs hover:bg-slate-50"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Menu</span>
            </button>

            <span className="text-xs font-bold text-slate-900 bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full">
              {responses.length} Respostas Coletadas
            </span>
          </div>

          {/* BOTÕES PRINCIPAIS DE EXPORTAÇÃO */}
          <div className="bg-white rounded-3xl p-5 border border-slate-200 shadow-sm space-y-3">
            <h3 className="text-xs font-extrabold uppercase tracking-wider text-slate-700">
              📥 Exportar Dados para Análise
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              <button
                onClick={handleExportCSV}
                className="p-3.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-2xl font-bold text-xs shadow-xs transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <FileSpreadsheet className="w-4 h-4" />
                <span>Baixar Excel / CSV</span>
              </button>

              <button
                onClick={handleSendEmail}
                className="p-3.5 bg-slate-900 hover:bg-slate-800 text-white rounded-2xl font-bold text-xs shadow-xs transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Mail className="w-4 h-4" />
                <span>Enviar por E-mail</span>
              </button>
            </div>

            <button
              onClick={handleCopyWhatsAppSummary}
              className="w-full p-3 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 rounded-2xl font-bold text-xs transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Share2 className="w-4 h-4" />
              <span>Copiar Resumo Formatado (para WhatsApp)</span>
            </button>
          </div>

          {/* ESTATÍSTICAS RÁPIDAS (SE HOUVER DADOS) */}
          {stats && (
            <div className="bg-white rounded-3xl p-5 border border-slate-200 shadow-xs space-y-3">
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
                <BarChart3 className="w-4 h-4 text-[#4F6D46]" />
                <span>Softwares mais citados no evento</span>
              </h4>

              <div className="space-y-2">
                {Object.entries(stats.softwareCounts)
                  .sort((a, b) => b[1] - a[1])
                  .map(([sw, count]) => {
                    const percent = Math.round((count / stats.total) * 100);
                    return (
                      <div key={sw} className="space-y-1">
                        <div className="flex justify-between text-xs font-semibold">
                          <span className="text-slate-800">{sw}</span>
                          <span className="text-slate-500 font-mono">{count} ({percent}%)</span>
                        </div>
                        <div className="w-full h-2 rounded-full bg-slate-100 overflow-hidden">
                          <div
                            className="h-full bg-[#4F6D46] rounded-full transition-all"
                            style={{ width: `${percent}%` }}
                          ></div>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          )}

          {/* LISTA COMPLETA DAS RESPOSTAS */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-700">
                Lista de Respostas ({filteredResponses.length})
              </h4>

              {responses.length > 0 && (
                <button
                  onClick={handleClearAll}
                  className="text-[11px] font-bold text-red-500 hover:text-red-700"
                >
                  Limpar tudo
                </button>
              )}
            </div>

            {/* Busca rápida */}
            {responses.length > 0 && (
              <div className="relative">
                <input
                  type="text"
                  placeholder="🔍 Filtrar respostas..."
                  value={searchReport}
                  onChange={(e) => setSearchReport(e.target.value)}
                  className="w-full px-3.5 py-2.5 border border-slate-200 rounded-2xl text-xs bg-white focus:outline-none focus:ring-2 focus:ring-[#4F6D46]/20"
                />
              </div>
            )}

            {filteredResponses.length === 0 ? (
              <div className="bg-white rounded-3xl p-8 text-center text-xs text-slate-400 border border-slate-200">
                Nenhuma resposta cadastrada ainda.
              </div>
            ) : (
              <div className="space-y-2.5">
                {filteredResponses.map((r, idx) => (
                  <div
                    key={r.id}
                    className="bg-white rounded-3xl p-4 border border-slate-200 shadow-2xs space-y-2 text-xs"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                          #{filteredResponses.length - idx} • {new Date(r.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </span>
                        <h5 className="font-bold text-slate-900 text-sm">{r.lawyerName || 'Advogado não identificado'}</h5>
                        {r.firmName && <p className="text-slate-600 font-medium">{r.firmName}</p>}
                      </div>

                      <button
                        onClick={() => handleDeleteResponse(r.id)}
                        className="text-slate-300 hover:text-red-500 p-1 transition-colors"
                        title="Excluir resposta"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {r.software && (
                        <span className="px-2 py-0.5 rounded-md bg-blue-50 text-blue-700 font-bold text-[10px] border border-blue-200">
                          💻 {r.software}
                        </span>
                      )}

                      {r.firmSize && (
                        <span className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 font-medium text-[10px]">
                          {r.firmSize}
                        </span>
                      )}

                      {r.whatsapp && (
                        <a
                          href={`https://wa.me/55${r.whatsapp.replace(/\D/g, '')}`}
                          target="_blank"
                          rel="noreferrer"
                          className="px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-700 font-bold text-[10px] border border-emerald-200 flex items-center gap-1"
                        >
                          💬 {r.whatsapp}
                        </a>
                      )}
                    </div>

                    {r.practiceAreas.length > 0 && (
                      <p className="text-[11px] text-slate-500">
                        <strong>Áreas:</strong> {r.practiceAreas.join(', ')}
                      </p>
                    )}

                    {r.notes && (
                      <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 text-[11px] text-slate-600 italic">
                        "{r.notes}"
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
