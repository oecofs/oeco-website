import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { 
  Sparkles, 
  CheckCircle2, 
  Calendar, 
  Clock, 
  MessageCircle, 
  ArrowRight, 
  Printer, 
  Share2, 
  ShieldCheck, 
  HelpCircle,
  Building2,
  Briefcase,
  AlertCircle,
  FileSpreadsheet,
  Download,
  Trash2,
  X,
  Check,
  Trophy,
  Award,
  Gift,
  Copy,
  CheckCheck
} from 'lucide-react';

export interface BeautyLead {
  id: string;
  createdAt: string;
  fullName: string;
  whatsapp: string;
  email: string;
  instagram: string;
  niche: string;
  businessModel: string;
  formalization: string;
  painPoints: string[];
  session: string;
  referredBy?: string;
}

const STORAGE_KEY = 'oeco_beauty_workshop_leads';
const WEBHOOK_STORAGE_KEY = 'oeco_beauty_webhook_url';
export const DEFAULT_WEBHOOK_URL = 'https://script.google.com/macros/s/AKfycbw48G8RTwp6MybXMa0BHnTNXKRUJHAffU7pUM-RK9Ii80qW2HtuEuHIdy7VQFFlgSAC/exec';
export const TOTAL_SEATS_PER_SESSION = 90;

// 4 Turmas com links dos grupos de WhatsApp e Google Agenda
export const SESSIONS = [
  {
    id: 'seg-18',
    label: 'Segunda-feira (26/10) • 18:00',
    day: '26/10 (Segunda)',
    time: '18:00',
    whatsappGroupUrl: 'https://chat.whatsapp.com/L28bVWfDbsP72xs9mfHF4E',
    googleCalendarUrl: 'https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=NHU0NTdsdDA5OHRrZDNrZGxjcXA3ZWRpMXIgb2Vjb2ZzQG0&tmsrc=oecofs%40gmail.com'
  },
  {
    id: 'seg-19',
    label: 'Segunda-feira (26/10) • 19:00',
    day: '26/10 (Segunda)',
    time: '19:00',
    whatsappGroupUrl: 'https://chat.whatsapp.com/IC8KNSmgyfj9zp1LQq42JT',
    googleCalendarUrl: 'https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=NXF0bjFyNmUwMzFmMDNwOXFtbGI2OWEwOHEgb2Vjb2ZzQG0&tmsrc=oecofs%40gmail.com'
  },
  {
    id: 'ter-18',
    label: 'Terça-feira (27/10) • 18:00',
    day: '27/10 (Terça)',
    time: '18:00',
    whatsappGroupUrl: 'https://chat.whatsapp.com/Jb9u7VsIcou4S5DJWaEtLd',
    googleCalendarUrl: 'https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=NG5hcXFlZzByNGUxcWE4NHZzbmF1ZXZkODggb2Vjb2ZzQG0&tmsrc=oecofs%40gmail.com'
  },
  {
    id: 'ter-19',
    label: 'Terça-feira (27/10) • 19:00',
    day: '27/10 (Terça)',
    time: '19:00',
    whatsappGroupUrl: 'https://chat.whatsapp.com/Jb9u7VsIcou4S5DJWaEtLd',
    googleCalendarUrl: 'https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=NWhhaG82NmYydTNzcW91YWtyYTBmMzlyMzMgb2Vjb2ZzQG0&tmsrc=oecofs%40gmail.com'
  }
];

export const NICHES = [
  { id: 'nails', label: '💅 Nails & Manicure' },
  { id: 'hair', label: '💇‍♀️ Cabelo & Terapia Capilar' },
  { id: 'barber', label: '💈 Barbearia' },
  { id: 'lash', label: '👁️ Lash & Sobrancelhas' },
  { id: 'estetica', label: '💆‍♀️ Estética Facial & Corporal / Spa' },
  { id: 'depilacao', label: '🍯 Depilação & Epilação' },
  { id: 'podologia', label: '🦶 Podologia' },
  { id: 'make', label: '💄 Maquiagem Profissional' },
  { id: 'salao', label: '🏢 Salão / Clínica Multidisciplinar' },
  { id: 'outro', label: '✨ Outro Nicho da Beleza' },
];

export const BUSINESS_MODELS = [
  { id: 'autonoma', label: '👤 Atuo 100% autônoma (alugo cadeira/espaço ou a domicílio)' },
  { id: 'estudio_solo', label: '🏠 Tenho meu próprio estúdio / espaço (atendimento solo)' },
  { id: 'equipe', label: '👥 Tenho salão / espaço com equipe ou parceiros' }
];

export const FORMALIZATIONS = [
  { id: 'mei', label: '📑 Sim, sou MEI' },
  { id: 'me_ltda', label: '🏢 Sim, sou ME / LTDA (empresa formal)' },
  { id: 'informal', label: '⏳ Ainda não (Pessoa Física / informal)' },
  { id: 'processo', label: '🔄 Em processo de abertura de CNPJ' }
];

export const PAIN_POINTS = [
  { 
    id: 'mistura_contas', 
    label: '🌪️ Mistura de contas PF e PJ',
    desc: 'Uso a mesma conta ou cartão para despesas pessoais e do salão, sem saber meu salário real.'
  },
  { 
    id: 'precificacao', 
    label: '💸 Insegurança na precificação',
    desc: 'Não sei se o valor cobrado pelos procedimentos cobre todos os custos de produtos, tempo e margem.'
  },
  { 
    id: 'taxas_cartao', 
    label: '💳 Taxas de maquininha & antecipação',
    desc: 'Desconto automático de taxas e antecipação comendo uma fatia invisível do meu faturamento.'
  },
  { 
    id: 'comissoes', 
    label: '🤝 Repasses e comissões de parceiros',
    desc: 'Dificuldade em calcular divisões justas de equipe/parceiros e organizar a Lei do Salão-Parceiro.'
  },
  { 
    id: 'sem_lucro', 
    label: '📉 Agenda cheia, mas bolso vazio',
    desc: 'Trabalho muito o mês todo, entra dinheiro, mas chega no dia 30 e quase não sobra lucro no banco.'
  },
  { 
    id: 'sazonalidade', 
    label: '📊 Falta de reserva para meses fracos',
    desc: 'O caixa oscila muito de um mês para o outro e não tenho previsibilidade para pagar contas fixas.'
  },
  { 
    id: 'outro', 
    label: '✍️ Outro desafio financeiro',
    desc: 'Quero compartilhar uma dificuldade específica do meu negócio ou rotina.'
  }
];

export const BeautyWorkshopPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const isPrintMode = searchParams.get('print') === 'true';

  // Form State
  const [fullName, setFullName] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [email, setEmail] = useState('');
  const [instagram, setInstagram] = useState('');
  const [niche, setNiche] = useState('');
  const [customNiche, setCustomNiche] = useState('');
  const [businessModel, setBusinessModel] = useState('');
  const [formalization, setFormalization] = useState('');
  const [painPoints, setPainPoints] = useState<string[]>([]);
  const [customPainPoint, setCustomPainPoint] = useState('');
  const [sessionId, setSessionId] = useState('seg-19');
  const [sessionCounts, setSessionCounts] = useState<Record<string, number>>({});

  // UI State
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedLead, setSubmittedLead] = useState<BeautyLead | null>(null);
  const [showAdminModal, setShowAdminModal] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);
  const [copiedMessage, setCopiedMessage] = useState(false);
  const [referralName, setReferralName] = useState('');
  const [referralPhone, setReferralPhone] = useState('');
  const [isSavingReferrer, setIsSavingReferrer] = useState(false);
  const [referrerSavedSuccess, setReferrerSavedSuccess] = useState(false);

  // Referral code vindo da URL (ex: ?ref=21999999999)
  const incomingRef = (searchParams.get('ref') || searchParams.get('indicado_por') || '').trim();
  const [leadsList, setLeadsList] = useState<BeautyLead[]>([]);
  const [webhookUrl, setWebhookUrl] = useState('');

  // Load leads, webhook and session counts from localStorage & Webhook
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed: BeautyLead[] = JSON.parse(stored);
        setLeadsList(parsed);

        // Contar inscritos por turma localmente
        const counts: Record<string, number> = {};
        parsed.forEach(lead => {
          const matchedSession = SESSIONS.find(s => s.label === lead.session || s.id === lead.session);
          const key = matchedSession ? matchedSession.id : lead.session;
          counts[key] = (counts[key] || 0) + 1;
        });
        setSessionCounts(prev => ({ ...counts, ...prev }));
      }
      const savedWebhook = localStorage.getItem(WEBHOOK_STORAGE_KEY);
      if (savedWebhook) {
        setWebhookUrl(savedWebhook);
      }
    } catch (e) {
      console.error('Erro ao ler leads do storage:', e);
    }

    // Tentar sincronizar contagem remota do Google Sheets (se endpoint suportar GET)
    const target = (webhookUrl || DEFAULT_WEBHOOK_URL).trim();
    if (target) {
      fetch(`${target}?action=getCounts`)
        .then(res => res.json())
        .then(data => {
          if (data && typeof data === 'object') {
            setSessionCounts(prev => ({ ...prev, ...data }));
          }
        })
        .catch(() => {
          // Silencioso em caso de CORS ou sem endpoint GET
        });
    }

    // Suporte para teste visual na URL (ex: ?test_vagas=15)
    const testVagas = searchParams.get('test_vagas');
    if (testVagas && !isNaN(Number(testVagas))) {
      const remaining = Number(testVagas);
      const simulatedCount = Math.max(0, TOTAL_SEATS_PER_SESSION - remaining);
      setSessionCounts({
        'seg-18': simulatedCount,
        'seg-19': Math.min(TOTAL_SEATS_PER_SESSION, simulatedCount + 3),
        'ter-18': Math.max(0, simulatedCount - 4),
        'ter-19': simulatedCount
      });
    }

    if (searchParams.get('admin') === 'true') {
      setShowAdminModal(true);
    }
  }, [searchParams]);

  // Format WhatsApp: (99) 99999-9999
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 11) value = value.slice(0, 11);
    
    if (value.length > 6) {
      value = `(${value.slice(0, 2)}) ${value.slice(2, 7)}-${value.slice(7)}`;
    } else if (value.length > 2) {
      value = `(${value.slice(0, 2)}) ${value.slice(2)}`;
    } else if (value.length > 0) {
      value = `(${value}`;
    }
    setWhatsapp(value);
  };

  const togglePainPoint = (id: string) => {
    setPainPoints(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  // Submit Handler
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!fullName.trim() || !whatsapp.trim()) {
      alert('Por favor, preencha pelo menos seu nome e WhatsApp para garantir sua vaga.');
      return;
    }

    if (!niche) {
      alert('Por favor, selecione sua área principal de atuação.');
      return;
    }

    setIsSubmitting(true);

    const resolvedNiche = niche === 'outro' && customNiche.trim()
      ? `✨ Outro: ${customNiche.trim()}`
      : (NICHES.find(n => n.id === niche)?.label || niche);

    const resolvedPainPoints = painPoints.map(p => {
      if (p === 'outro') {
        return customPainPoint.trim() ? `✍️ Outro: ${customPainPoint.trim()}` : '✍️ Outro desafio específico';
      }
      return PAIN_POINTS.find(item => item.id === p)?.label || p;
    });

    const newLead: BeautyLead = {
      id: String(Date.now()),
      createdAt: new Date().toISOString(),
      fullName: fullName.trim(),
      whatsapp: whatsapp.trim(),
      email: email.trim().toLowerCase(),
      instagram: instagram.trim().replace(/^@/, ''),
      niche: resolvedNiche,
      businessModel: BUSINESS_MODELS.find(b => b.id === businessModel)?.label || businessModel,
      formalization: FORMALIZATIONS.find(f => f.id === formalization)?.label || formalization,
      painPoints: resolvedPainPoints,
      session: SESSIONS.find(s => s.id === sessionId)?.label || sessionId,
      referredBy: incomingRef || undefined
    };

    // 1. Persist localmente
    try {
      const updated = [newLead, ...leadsList];
      setLeadsList(updated);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      setSessionCounts(prev => ({
        ...prev,
        [sessionId]: (prev[sessionId] || 0) + 1
      }));
    } catch (err) {
      console.warn('Erro ao salvar lead localmente:', err);
    }

    // 2. Disparar webhook para Google Sheets
    const targetWebhook = (webhookUrl.trim() || DEFAULT_WEBHOOK_URL).trim();
    if (targetWebhook) {
      try {
        await fetch(targetWebhook, {
          method: 'POST',
          mode: 'no-cors',
          headers: { 'Content-Type': 'text/plain;charset=utf-8' },
          body: JSON.stringify(newLead)
        });
      } catch (err) {
        console.warn('Webhook falhou (continuando fluxo normalmente):', err);
      }
    }

    setIsSubmitting(false);
    setSubmittedLead(newLead);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const selectedSessionData = SESSIONS.find(s => s.id === sessionId) || SESSIONS[0];

  // Export CSV
  const handleExportCSV = () => {
    if (leadsList.length === 0) {
      alert('Nenhum cadastro para exportar ainda.');
      return;
    }

    const headers = [
      'Data/Hora',
      'Nome Completo',
      'WhatsApp',
      'E-mail',
      'Instagram',
      'Nicho',
      'Modelo de Atuação',
      'Formalização (CNPJ)',
      'Turma Escolhida',
      'Dores Mapeadas',
      'Indicado Por (Ref)'
    ];

    const rows = leadsList.map(lead => [
      new Date(lead.createdAt).toLocaleString('pt-BR'),
      `"${lead.fullName.replace(/"/g, '""')}"`,
      `"${lead.whatsapp}"`,
      `"${lead.email}"`,
      `"${lead.instagram}"`,
      `"${lead.niche}"`,
      `"${lead.businessModel}"`,
      `"${lead.formalization}"`,
      `"${lead.session}"`,
      `"${lead.painPoints.join(' | ').replace(/"/g, '""')}"`,
      `"${lead.referredBy || ''}"`
    ]);

    const csvContent = '\uFEFF' + [headers.join(';'), ...rows.map(r => r.join(';'))].join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `leads-workshop-beleza-${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Folheto & Cartão Imprimível com QR Code
  if (isPrintMode) {
    const format = searchParams.get('format') || 'card';
    const colorTheme = searchParams.get('theme') || 'rose'; // 'rose' | 'emerald' | 'gold' | 'marsala' | 'warm' | 'fendi'

    // Temas de cor disponíveis calibrados para estética e feiras de beleza
    const themeStyles = {
      // 1. Rosé Gold & Bronze Luxo (Estética Avançada / Harmonização)
      rose: {
        id: 'rose',
        name: 'Rosé Gold & Bronze',
        category: 'Beleza & Estética',
        cardBg: 'bg-gradient-to-br from-[#FFF5F2] via-[#FCEAE5] to-[#F5DDD6]',
        textColor: 'text-[#2C1814]',
        titleColor: 'text-[#2C1814]',
        titleHighlight: 'text-[#B8543B]',
        subtextColor: 'text-[#5A3831]',
        borderColor: 'border-[#E8B8AA]',
        dividerColor: 'border-[#ECC2B5]',
        qrBg: 'bg-white',
        qrBorder: 'border-[#E8B8AA]',
        qrTextColor: 'text-[#2C1814]',
        footerBg: 'text-[#6C4239]',
        pillBg: 'bg-[#B8543B] text-white',
        qrDotColor: '2C1814',
        logoSrc: '/images/brand/sublogo-oeco-dark.png',
        badgeBg: 'bg-[#F2CCC0]',
      },
      // 2. Emerald Green & Dourado (Cosmética de Luxo & Verde OECO)
      emerald: {
        id: 'emerald',
        name: 'Esmeralda & Ouro (Dark)',
        category: 'Beleza & Estética',
        cardBg: 'bg-gradient-to-br from-[#122318] via-[#1A3324] to-[#0E1D14]',
        textColor: 'text-[#F5EEDB]',
        titleColor: 'text-[#FAF5EB]',
        titleHighlight: 'text-[#E2C382]',
        subtextColor: 'text-[#D8CDBC]',
        borderColor: 'border-[#C9A96E]/50',
        dividerColor: 'border-[#C9A96E]/30',
        qrBg: 'bg-white',
        qrBorder: 'border-[#C9A96E]',
        qrTextColor: 'text-[#122318]',
        footerBg: 'text-[#D8CDBC]',
        pillBg: 'bg-[#C9A96E] text-[#122318]',
        qrDotColor: '122318',
        logoSrc: '/images/brand/sublogo-oeco-gold.png',
        badgeBg: 'bg-[#1A3324]',
      },
      // 3. Dourado Âmbar & Champagne (Iluminação Glamour / Alta Maquiagem)
      gold: {
        id: 'gold',
        name: 'Dourado Âmbar & Sol',
        category: 'Beleza & Estética',
        cardBg: 'bg-gradient-to-br from-[#FFFDF7] via-[#FFF6DD] to-[#F7E5B5]',
        textColor: 'text-[#261A0C]',
        titleColor: 'text-[#261A0C]',
        titleHighlight: 'text-[#9E650D]',
        subtextColor: 'text-[#573E1D]',
        borderColor: 'border-[#DFBA73]',
        dividerColor: 'border-[#E7C684]',
        qrBg: 'bg-white',
        qrBorder: 'border-[#DFBA73]',
        qrTextColor: 'text-[#261A0C]',
        footerBg: 'text-[#614520]',
        pillBg: 'bg-[#1C1815] text-[#F9E29D]',
        qrDotColor: '261A0C',
        logoSrc: '/images/brand/sublogo-oeco-dark.png',
        badgeBg: 'bg-[#F7E5B5]',
      },
      // 4. Borgonha / Marsala & Nude (Esmalteria & Cabelo de Poder)
      marsala: {
        id: 'marsala',
        name: 'Marsala & Nude Chic',
        category: 'Beleza & Estética',
        cardBg: 'bg-gradient-to-br from-[#FFF7F7] via-[#F9EBEB] to-[#F3D7D7]',
        textColor: 'text-[#2D0F16]',
        titleColor: 'text-[#2D0F16]',
        titleHighlight: 'text-[#7D1D32]',
        subtextColor: 'text-[#562B34]',
        borderColor: 'border-[#D9A3AF]',
        dividerColor: 'border-[#E0B2BD]',
        qrBg: 'bg-white',
        qrBorder: 'border-[#D9A3AF]',
        qrTextColor: 'text-[#2D0F16]',
        footerBg: 'text-[#63353F]',
        pillBg: 'bg-[#7D1D32] text-white',
        qrDotColor: '2D0F16',
        logoSrc: '/images/brand/sublogo-oeco-dark.png',
        badgeBg: 'bg-[#F3D7D7]',
      },
      // 5. Bege Areia Quente (Clean Clássico)
      warm: {
        id: 'warm',
        name: 'Bege Areia Quente',
        category: 'Neutros OECO',
        cardBg: 'bg-[#F5EFE6]',
        textColor: 'text-[#241B14]',
        titleColor: 'text-[#241B14]',
        titleHighlight: 'text-[#4F6D46]',
        subtextColor: 'text-[#4A3E36]',
        borderColor: 'border-[#D9CEBF]',
        dividerColor: 'border-[#DFD5C6]',
        qrBg: 'bg-[#FCFAF7]',
        qrBorder: 'border-[#DFD5C6]',
        qrTextColor: 'text-stone-900',
        footerBg: 'text-[#5C4D42]',
        pillBg: 'bg-[#4F6D46] text-white',
        qrDotColor: '241B14',
        logoSrc: '/images/brand/sublogo-oeco-dark.png',
        badgeBg: 'bg-[#F5EFE6]',
      },
      // 6. Bege Fendi / Linho
      fendi: {
        id: 'fendi',
        name: 'Bege Fendi / Linho',
        category: 'Neutros OECO',
        cardBg: 'bg-[#ECE5DC]',
        textColor: 'text-[#1F1C19]',
        titleColor: 'text-[#1F1C19]',
        titleHighlight: 'text-[#2E2823]',
        subtextColor: 'text-[#4E4741]',
        borderColor: 'border-[#D2C8BC]',
        dividerColor: 'border-[#D8CFB5]',
        qrBg: 'bg-white',
        qrBorder: 'border-[#CEC4B7]',
        qrTextColor: 'text-stone-900',
        footerBg: 'text-[#5E564F]',
        pillBg: 'bg-[#2E2823] text-white',
        qrDotColor: '1F1C19',
        logoSrc: '/images/brand/sublogo-oeco-dark.png',
        badgeBg: 'bg-[#ECE5DC]',
      }
    };

    const currentTheme = themeStyles[colorTheme as keyof typeof themeStyles] || themeStyles.rose;
    const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=600x600&data=${encodeURIComponent('https://oecofs.com/forms/beleza')}&color=${currentTheme.qrDotColor}`;

    // Helper para alternar query param sem perder o outro
    const getThemeUrl = (t: string) => `/forms/beleza?print=true&format=${format}&theme=${t}`;
    const getFormatUrl = (f: string) => `/forms/beleza?print=true&format=${f}&theme=${colorTheme}`;

    // Componente do Cartão 90x50 mm (Proporção 60% / 40%)
    const renderCard = (key?: number) => (
      <div 
        key={key}
        className={`w-[90mm] h-[50mm] ${currentTheme.cardBg} ${currentTheme.textColor} border ${currentTheme.borderColor} rounded-lg p-3 flex flex-row items-center justify-between overflow-hidden shadow-xs relative font-sans box-border select-none print:shadow-none print:border-dashed`}
      >
        {/* Lado Esquerdo (60%): Logo Oficial, Título, Subtítulo Magnético e Data */}
        <div className="w-[58%] pr-2 flex flex-col justify-between h-full">
          <div>
            {/* Logo Oficial OECO */}
            <div className="mb-1">
              <img 
                src={currentTheme.logoSrc} 
                alt="OECO Financial Solutions" 
                className="h-[4.5mm] w-auto object-contain"
              />
            </div>

            {/* Título do Webinar */}
            <div className={`text-[12px] font-black leading-tight ${currentTheme.titleColor} tracking-tight`}>
              Webinar <span className={currentTheme.titleHighlight}>Beleza das Finanças</span>
            </div>

            {/* Subtítulo de Alto Desejo */}
            <p className={`text-[8px] ${currentTheme.subtextColor} font-medium leading-[1.25] mt-1 pr-1`}>
              Pare de pagar para trabalhar: o método prático para precificar certo, blindar seu caixa e ter lucro real no seu negócio de beleza.
            </p>
          </div>

          {/* Rodapé do Cartão */}
          <div className={`pt-1 border-t ${currentTheme.dividerColor} text-[7.5px] ${currentTheme.footerBg} font-bold flex items-center justify-between`}>
            <span>🗓️ 26 e 27/10 • Ao Vivo</span>
            <span className={`px-1.5 py-0.5 rounded text-[7px] font-black uppercase tracking-wider ${currentTheme.pillBg}`}>
              100% Gratuito
            </span>
          </div>
        </div>

        {/* Lado Direito (40%): QR Code em Destaque com Chamada */}
        <div className={`w-[42%] flex flex-col items-center justify-center shrink-0 pl-1 border-l ${currentTheme.dividerColor} h-full`}>
          <div className={`${currentTheme.qrBg} p-1 rounded-md border ${currentTheme.qrBorder} shadow-xs`}>
            <img 
              src={qrCodeUrl} 
              alt="QR Code de Inscrição" 
              className="w-[26mm] h-[26mm] object-contain"
            />
          </div>
          <div className={`text-[8px] font-extrabold text-center ${currentTheme.textColor} mt-1 uppercase tracking-wider flex items-center justify-center gap-0.5`}>
            <span>Aponte a câmera</span>
          </div>
        </div>
      </div>
    );

    return (
      <div className="min-h-screen bg-stone-100 text-[#1C1815] p-4 sm:p-8 flex flex-col items-center font-sans print:bg-white print:p-0">
        {/* Barra Superior de Formatos e Temas (Ocultada na Impressão) */}
        <div className="max-w-3xl w-full bg-white p-4 rounded-2xl shadow-sm border border-stone-200 mb-6 flex flex-col gap-3.5 print:hidden">
          {/* Linha 1: Formatos */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-100 pb-3">
            <div className="flex items-center gap-1.5 text-xs font-semibold">
              <span className="text-stone-400 text-[11px] uppercase mr-1">Formato:</span>
              <Link
                to={getFormatUrl('card')}
                className={`px-3 py-1.5 rounded-xl transition-colors ${
                  format === 'card' ? 'bg-[#1C1815] text-white' : 'hover:bg-stone-100 text-stone-700'
                }`}
              >
                💳 Cartão 90x50mm
              </Link>
              <Link
                to={getFormatUrl('sheet')}
                className={`px-3 py-1.5 rounded-xl transition-colors ${
                  format === 'sheet' ? 'bg-[#1C1815] text-white' : 'hover:bg-stone-100 text-stone-700'
                }`}
              >
                📄 Folha A4 (10 Cartões)
              </Link>
              <Link
                to={getFormatUrl('flyer')}
                className={`px-3 py-1.5 rounded-xl transition-colors ${
                  format === 'flyer' ? 'bg-[#1C1815] text-white' : 'hover:bg-stone-100 text-stone-700'
                }`}
              >
                📋 Folheto Display
              </Link>
            </div>

            <div className="flex items-center gap-2">
              <button 
                onClick={() => window.print()}
                className="bg-[#4F6D46] hover:bg-[#3d5536] text-white px-3.5 py-1.5 rounded-xl font-bold text-xs flex items-center gap-1.5 shadow-sm transition-colors"
              >
                <Printer className="w-3.5 h-3.5" /> Imprimir
              </button>
              <Link 
                to="/forms/beleza"
                className="text-xs text-stone-500 hover:text-stone-800 underline px-2"
              >
                Voltar
              </Link>
            </div>
          </div>

          {/* Linha 2: Filtros de Cores Específicas para o Setor de Beleza */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <span className="text-stone-500 text-[11px] font-bold uppercase tracking-wider">
                🎨 Cores de Alto Impacto para Feira de Beleza:
              </span>
              <span className="text-[10px] text-stone-400">
                Clique para alternar e pré-visualizar
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold">
              {/* Opção Rosé Gold */}
              <Link
                to={getThemeUrl('rose')}
                className={`px-3 py-1.5 rounded-xl transition-all flex items-center gap-2 border ${
                  colorTheme === 'rose' 
                    ? 'bg-[#FCEAE5] border-[#E8B8AA] text-[#2C1814] ring-2 ring-[#B8543B] font-bold shadow-xs' 
                    : 'bg-white border-stone-200 text-stone-600 hover:bg-stone-50'
                }`}
              >
                <span className="w-3.5 h-3.5 rounded-full bg-gradient-to-tr from-[#E8B8AA] to-[#FFF5F2] border border-[#E8B8AA] inline-block shadow-inner" />
                <span>✨ Rosé Gold Luxo</span>
              </Link>

              {/* Opção Emerald & Gold */}
              <Link
                to={getThemeUrl('emerald')}
                className={`px-3 py-1.5 rounded-xl transition-all flex items-center gap-2 border ${
                  colorTheme === 'emerald' 
                    ? 'bg-[#1A3324] border-[#C9A96E] text-[#FAF5EB] ring-2 ring-[#C9A96E] font-bold shadow-xs' 
                    : 'bg-white border-stone-200 text-stone-600 hover:bg-stone-50'
                }`}
              >
                <span className="w-3.5 h-3.5 rounded-full bg-[#1A3324] border border-[#C9A96E] inline-block shadow-inner" />
                <span>💎 Esmeralda & Ouro (Dark)</span>
              </Link>

              {/* Opção Gold Amber */}
              <Link
                to={getThemeUrl('gold')}
                className={`px-3 py-1.5 rounded-xl transition-all flex items-center gap-2 border ${
                  colorTheme === 'gold' 
                    ? 'bg-[#FFF6DD] border-[#DFBA73] text-[#261A0C] ring-2 ring-[#9E650D] font-bold shadow-xs' 
                    : 'bg-white border-stone-200 text-stone-600 hover:bg-stone-50'
                }`}
              >
                <span className="w-3.5 h-3.5 rounded-full bg-gradient-to-tr from-[#F7E5B5] to-[#FFFDF7] border border-[#DFBA73] inline-block shadow-inner" />
                <span>🌟 Dourado Âmbar Glamour</span>
              </Link>

              {/* Opção Marsala */}
              <Link
                to={getThemeUrl('marsala')}
                className={`px-3 py-1.5 rounded-xl transition-all flex items-center gap-2 border ${
                  colorTheme === 'marsala' 
                    ? 'bg-[#F9EBEB] border-[#D9A3AF] text-[#2D0F16] ring-2 ring-[#7D1D32] font-bold shadow-xs' 
                    : 'bg-white border-stone-200 text-stone-600 hover:bg-stone-50'
                }`}
              >
                <span className="w-3.5 h-3.5 rounded-full bg-gradient-to-tr from-[#D9A3AF] to-[#FFF7F7] border border-[#D9A3AF] inline-block shadow-inner" />
                <span>💄 Marsala & Nude Chic</span>
              </Link>

              {/* Opção Bege Areia Quente */}
              <Link
                to={getThemeUrl('warm')}
                className={`px-3 py-1.5 rounded-xl transition-all flex items-center gap-2 border ${
                  colorTheme === 'warm' 
                    ? 'bg-[#F5EFE6] border-[#D9CEBF] text-[#241B14] ring-2 ring-[#4F6D46] font-bold shadow-xs' 
                    : 'bg-white border-stone-200 text-stone-600 hover:bg-stone-50'
                }`}
              >
                <span className="w-3.5 h-3.5 rounded-full bg-[#F5EFE6] border border-[#D9CEBF] inline-block shadow-inner" />
                <span>☕ Bege Areia Clássico</span>
              </Link>

              {/* Opção Bege Fendi */}
              <Link
                to={getThemeUrl('fendi')}
                className={`px-3 py-1.5 rounded-xl transition-all flex items-center gap-2 border ${
                  colorTheme === 'fendi' 
                    ? 'bg-[#ECE5DC] border-[#D2C8BC] text-[#1F1C19] ring-2 ring-[#4F6D46] font-bold shadow-xs' 
                    : 'bg-white border-stone-200 text-stone-600 hover:bg-stone-50'
                }`}
              >
                <span className="w-3.5 h-3.5 rounded-full bg-[#ECE5DC] border border-[#D2C8BC] inline-block shadow-inner" />
                <span>🏛️ Fendi / Linho</span>
              </Link>
            </div>
          </div>
        </div>

        {/* FORMATO 1: CARTÃO INDIVIDUAL (90x50 mm) */}
        {format === 'card' && (
          <div className="flex flex-col items-center gap-4 my-auto">
            <div className="text-center text-xs text-stone-500 mb-2 print:hidden">
              Tamanho padrão: <strong>90 mm × 50 mm</strong> (estilo cartão de visita).
            </div>
            {renderCard()}
          </div>
        )}

        {/* FORMATO 2: FOLHA A4 COM 10 CARTÕES PARA RECORTE */}
        {format === 'sheet' && (
          <div className="flex flex-col items-center">
            <div className="text-center text-xs text-stone-500 mb-4 print:hidden">
              Grade de 10 cartões (2 colunas × 5 linhas) com guias pontilhadas para corte com régua ou tesoura.
            </div>
            <div className="w-[190mm] bg-white p-4 rounded-xl border border-stone-200 grid grid-cols-2 gap-2 print:border-none print:p-0 print:gap-1">
              {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((idx) => renderCard(idx))}
            </div>
          </div>
        )}

        {/* FORMATO 3: FOLHETO DISPLAY VERTICAL */}
        {format === 'flyer' && (
          <div className={`max-w-md w-full ${currentTheme.cardBg} ${currentTheme.textColor} border-2 border-dashed ${currentTheme.borderColor} rounded-3xl p-8 text-center space-y-6 shadow-md print:border-none print:shadow-none transition-colors`}>
            {/* Logo Oficial OECO */}
            <div className="flex justify-center mb-2">
              <img 
                src={currentTheme.logoSrc} 
                alt="OECO Financial Solutions" 
                className="h-[6mm] w-auto object-contain"
              />
            </div>

            <div className="space-y-2">
              <h1 className={`text-2xl sm:text-3xl font-extrabold tracking-tight ${currentTheme.titleColor}`}>
                Webinar <span className={currentTheme.titleHighlight}>Beleza das Finanças</span>
              </h1>
              <p className={`text-sm ${currentTheme.subtextColor} font-medium leading-relaxed`}>
                Pare de pagar para trabalhar: o método prático para precificar certo, blindar seu caixa e ter lucro real no seu negócio de beleza.
              </p>
            </div>

            {/* QR Code */}
            <div className={`${currentTheme.qrBg} p-5 rounded-3xl border-2 ${currentTheme.qrBorder} inline-block shadow-sm`}>
              <img 
                src={qrCodeUrl} 
                alt="QR Code de Inscrição no Webinar"
                className="w-56 h-56 mx-auto rounded-xl object-contain"
              />
            </div>

            <div className="space-y-1">
              <p className={`text-xs uppercase tracking-wider font-extrabold ${currentTheme.titleHighlight} flex items-center justify-center gap-1.5`}>
                <span>📸 Aponte a câmera do seu celular</span>
              </p>
              <div className="inline-block mt-1">
                <span className={`px-2.5 py-1 rounded-full text-xs font-black uppercase tracking-wider ${currentTheme.pillBg}`}>
                  100% Gratuito
                </span>
              </div>
            </div>

            <div className={`border ${currentTheme.dividerColor} rounded-2xl p-3.5 text-xs ${currentTheme.footerBg} space-y-1 bg-black/5`}>
              <div className="font-bold">🗓️ 26 e 27 de Outubro • Online ao Vivo</div>
              <div>Turmas exclusivas às 18:00 e 19:00 • Vagas Limitadas</div>
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FDF9F8] text-[#2D0F16] font-sans pb-16 selection:bg-[#7D1D32] selection:text-white">
      {/* Top Banner do Evento em Marsala & Nude Chic */}
      <header className="bg-gradient-to-b from-[#2E0B13] via-[#3F111C] to-[#24080E] text-[#FFF7F7] border-b border-[#521A26] py-7 px-4 sm:px-6 relative overflow-hidden shadow-lg">
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#7D1D32]/25 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#D9A3AF]/10 rounded-full blur-2xl pointer-events-none" />
        
        <div className="max-w-2xl mx-auto space-y-3.5 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#D9A3AF]/20 border border-[#D9A3AF]/40 text-[#FCEBEB] text-xs font-bold uppercase tracking-wider shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#E8B2BD]" /> Edição Especial Professional Fair RJ • 100% Gratuito
          </div>
          <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
            Webinar <span className="text-[#E8B2BD]">Beleza das Finanças</span>
          </h1>
          <p className="text-sm text-[#FCEBEB]/90 max-w-lg mx-auto leading-relaxed">
            Pare de pagar para trabalhar: o método prático para precificar certo, blindar seu caixa e ter lucro real no seu negócio de beleza.
          </p>

          <div className="flex items-center justify-center gap-4 pt-2 text-xs text-[#FCEBEB]/80 font-medium">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-[#E8B2BD]" /> 26 e 27 de Outubro
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-[#E8B2BD]" /> Turmas 18h e 19h
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#E8B2BD]" /> 100% Online
            </span>
          </div>
        </div>
      </header>

      {/* Conteúdo Principal */}
      <main className="max-w-2xl mx-auto px-4 sm:px-6 -mt-3">
        {submittedLead ? (
          /* TELA DE SUCESSO & ENTRADA NO GRUPO VIP */
          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-stone-200 mt-6 space-y-6 animate-in fade-in zoom-in-95 duration-200 text-center">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <h2 className="text-2xl font-bold text-stone-900 tracking-tight">
                Vaga Pré-Reservada com Sucesso, {submittedLead.fullName.split(' ')[0]}! 🎉
              </h2>
              <p className="text-sm text-stone-600 max-w-md mx-auto">
                Sua inscrição para a turma de{' '}
                <strong className="text-stone-900 font-semibold">{submittedLead.session}</strong> foi confirmada.
              </p>
            </div>

            {/* Passo Obrigatório: Entrar no WhatsApp */}
            <div className="bg-[#FAF8F5] border-2 border-emerald-500/40 rounded-2xl p-5 sm:p-6 text-left space-y-4 shadow-sm">
              <div className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-sm shrink-0">
                  1
                </div>
                <div>
                  <h3 className="text-base font-bold text-stone-900">
                    Passo Obrigatório: Entre no Grupo VIP da sua Turma
                  </h3>
                  <p className="text-xs text-stone-600 mt-1">
                    O link do Google Meet e os materiais de apoio serão enviados exclusivamente dentro desse grupo silencioso.
                  </p>
                </div>
              </div>

              <a
                href={selectedSessionData.whatsappGroupUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#25D366] hover:bg-[#20ba5a] text-white py-4 px-6 rounded-xl font-bold text-base flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <MessageCircle className="w-6 h-6 fill-current" />
                <span>Entrar no Grupo VIP no WhatsApp</span>
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>

            {/* Passo 2: Adicionar à Agenda */}
            <div className="bg-stone-50 border border-stone-200 rounded-2xl p-4 text-left flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-full bg-stone-300 text-stone-700 flex items-center justify-center font-bold text-sm shrink-0">
                  2
                </div>
                <div className="text-xs text-stone-700">
                  <div className="font-semibold text-stone-900">Adicionar ao Calendário</div>
                  <div>Receba um lembrete no celular 15 minutos antes.</div>
                </div>
              </div>

              <a
                href={selectedSessionData.googleCalendarUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto text-xs font-semibold px-4 py-2.5 bg-white border border-stone-300 rounded-xl hover:bg-stone-100 text-stone-800 transition-colors flex items-center justify-center gap-1.5 shadow-sm"
              >
                <Calendar className="w-4 h-4 text-stone-600" /> Salvar no Google Agenda
              </a>
            </div>

            {/* SEGUNDA ETAPA: PROGRAMA DE REFERÊNCIA & PREMIAÇÃO EXCLUSIVA */}
            {(() => {
              // Código de referência do usuário: strictly número de telefone limpo (ex: 21999999999)
              const cleanPhone = submittedLead.whatsapp.replace(/\D/g, '');
              const activeRefCode = cleanPhone;
              const personalShareUrl = `https://oecofs.com/forms/beleza?ref=${encodeURIComponent(activeRefCode)}`;
              
              const shareMessage = `Oi! Me inscrevi no Webinar Beleza das Finanças da OECO (100% gratuito e ao vivo nos dias 26 e 27/10) e lembrei de você! Eles vão ensinar como precificar procedimentos, separar as contas e ter lucro real no salão/estúdio. Garante sua vaga por esse link exclusivo: ${personalShareUrl}`;

              const handleCopyLink = () => {
                navigator.clipboard.writeText(personalShareUrl);
                setCopiedLink(true);
                setTimeout(() => setCopiedLink(false), 2500);
              };

              const handleCopyMessage = () => {
                navigator.clipboard.writeText(shareMessage);
                setCopiedMessage(true);
                setTimeout(() => setCopiedMessage(false), 2500);
              };

              const handleWhatsAppShare = () => {
                window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(shareMessage)}`, '_blank');
              };

              return (
                <div className="mt-8 pt-6 border-t-2 border-dashed border-[#EAC9D1] text-left space-y-5 animate-in fade-in duration-300">
                  {/* Cabeçalho da Premiação & Banner de R$ 7.500 */}
                  <div className="bg-gradient-to-r from-[#FFF5F7] via-[#FDF0F3] to-[#FCEAEF] border-2 border-[#D9A3AF] rounded-3xl p-5 sm:p-6 relative overflow-hidden shadow-sm">
                    {/* Banner Dourado / Marsala de Destaque Total de Premiação */}
                    <div className="bg-gradient-to-r from-[#7D1D32] via-[#94263F] to-[#681729] text-white rounded-2xl p-4 sm:p-5 mb-5 shadow-md flex flex-col sm:flex-row items-center justify-between gap-3 relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full blur-2xl pointer-events-none" />
                      <div className="flex items-center gap-3.5 relative z-10 text-center sm:text-left">
                        <div className="w-12 h-12 rounded-xl bg-white/15 border border-white/20 flex items-center justify-center shrink-0 text-2xl shadow-inner">
                          🏆
                        </div>
                        <div>
                          <div className="text-[10px] font-black uppercase tracking-widest text-[#FCEBEB] bg-white/20 inline-block px-2 py-0.5 rounded-full mb-0.5">
                            Premiação Exclusiva do Evento
                          </div>
                          <div className="text-xl sm:text-2xl font-black tracking-tight text-white">
                            R$ 7.500,00 em Prêmios
                          </div>
                        </div>
                      </div>
                      <div className="text-center sm:text-right relative z-10 border-t sm:border-t-0 sm:border-l border-white/20 pt-2 sm:pt-0 sm:pl-4">
                        <span className="text-[11px] text-[#FCEBEB]/90 font-medium block">
                          Serão 3 profissionais premiadas ao vivo
                        </span>
                        <span className="text-xs font-bold text-amber-200 uppercase tracking-wide">
                          Ganha quem indicar mais!
                        </span>
                      </div>
                    </div>

                    <div className="flex items-start gap-3.5">
                      <div className="w-10 h-10 rounded-xl bg-[#7D1D32] text-white flex items-center justify-center shrink-0 shadow-sm">
                        <Gift className="w-5 h-5 text-[#FCEBEB]" />
                      </div>
                      <div className="space-y-1">
                        <h3 className="text-base sm:text-lg font-black text-[#2D0F16] tracking-tight">
                          Como Funciona o Desafio de Indicação?
                        </h3>
                        <p className="text-xs sm:text-sm text-[#5C2B36] font-medium leading-relaxed">
                          A premiação será entregue para as 3 pessoas que gerarem o maior número de amigas e profissionais inscritas no <strong>Webinar Beleza das Finanças</strong>. Todas as premiadas recebem diagnóstico com Matheus!
                        </p>
                      </div>
                    </div>

                    {/* Os 3 Prêmios Oficiais OECO com Valores */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-4">
                      {/* 1º Lugar */}
                      <div className="bg-white/95 rounded-2xl p-4 border-2 border-[#D9A3AF] shadow-xs flex flex-col justify-between relative overflow-hidden">
                        <div className="absolute top-0 right-0 bg-[#7D1D32] text-white text-[9px] font-black uppercase px-2.5 py-0.5 rounded-bl-lg">
                          1º Lugar
                        </div>
                        <div>
                          <div className="flex items-center gap-1.5 mb-1.5">
                            <span className="text-2xl">🥇</span>
                            <span className="px-2 py-0.5 rounded-full bg-[#7D1D32]/10 text-[#7D1D32] font-black text-xs">
                              R$ 4.100 em prêmios
                            </span>
                          </div>
                          <div className="text-xs font-black text-[#7D1D32] leading-tight">
                            6 Meses de Consultoria + Oeco Start
                          </div>
                          <ul className="text-[11px] text-stone-600 mt-2 space-y-1 leading-snug">
                            <li>• <strong>Diagnóstico Financeiro Oeco</strong> (sessão de 30min a 1h com Matheus)</li>
                            <li>• <strong>6 meses de consultoria</strong> (1h exclusiva por mês)</li>
                            <li>• Sistema <strong>Oeco Start 100% gratuito</strong> durante os 6 meses de consultoria</li>
                          </ul>
                        </div>
                        <div className="mt-3 pt-2 border-t border-stone-100 text-[10px] font-black text-[#7D1D32] uppercase tracking-wide">
                          Troféu de Ouro
                        </div>
                      </div>

                      {/* 2º Lugar */}
                      <div className="bg-white/95 rounded-2xl p-4 border border-stone-200 shadow-xs flex flex-col justify-between relative overflow-hidden">
                        <div className="absolute top-0 right-0 bg-stone-800 text-white text-[9px] font-black uppercase px-2.5 py-0.5 rounded-bl-lg">
                          2º Lugar
                        </div>
                        <div>
                          <div className="flex items-center gap-1.5 mb-1.5">
                            <span className="text-2xl">🥈</span>
                            <span className="px-2 py-0.5 rounded-full bg-stone-100 text-stone-800 font-black text-xs">
                              R$ 2.300 em prêmios
                            </span>
                          </div>
                          <div className="text-xs font-black text-stone-900 leading-tight">
                            3 Meses de Consultoria + Oeco Start
                          </div>
                          <ul className="text-[11px] text-stone-600 mt-2 space-y-1 leading-snug">
                            <li>• <strong>Diagnóstico Financeiro Oeco</strong> (sessão de 30min a 1h com Matheus)</li>
                            <li>• <strong>3 meses de consultoria</strong> (1h exclusiva por mês)</li>
                            <li>• Sistema <strong>Oeco Start 100% gratuito</strong> durante os 3 meses de consultoria</li>
                          </ul>
                        </div>
                        <div className="mt-3 pt-2 border-t border-stone-100 text-[10px] font-black text-stone-600 uppercase tracking-wide">
                          Troféu de Prata
                        </div>
                      </div>

                      {/* 3º Lugar */}
                      <div className="bg-white/95 rounded-2xl p-4 border border-stone-200 shadow-xs flex flex-col justify-between relative overflow-hidden">
                        <div className="absolute top-0 right-0 bg-stone-600 text-white text-[9px] font-black uppercase px-2.5 py-0.5 rounded-bl-lg">
                          3º Lugar
                        </div>
                        <div>
                          <div className="flex items-center gap-1.5 mb-1.5">
                            <span className="text-2xl">🥉</span>
                            <span className="px-2 py-0.5 rounded-full bg-stone-100 text-stone-700 font-black text-xs">
                              R$ 1.100 em prêmios
                            </span>
                          </div>
                          <div className="text-xs font-black text-stone-900 leading-tight">
                            1 Mês de Consultoria + Oeco Start
                          </div>
                          <ul className="text-[11px] text-stone-600 mt-2 space-y-1 leading-snug">
                            <li>• <strong>Diagnóstico Financeiro Oeco</strong> (sessão de 30min a 1h com Matheus)</li>
                            <li>• <strong>1 mês de consultoria</strong> (1h exclusiva individual)</li>
                            <li>• Sistema <strong>Oeco Start 100% gratuito</strong> durante o mês de consultoria</li>
                          </ul>
                        </div>
                        <div className="mt-3 pt-2 border-t border-stone-100 text-[10px] font-black text-stone-600 uppercase tracking-wide">
                          Troféu de Bronze
                        </div>
                      </div>
                    </div>

                    {/* Caixa de Geração e Cópia do Link Pessoal */}
                    <div className="mt-5 bg-white rounded-2xl p-4 border border-[#EAC9D1] space-y-3">
                      <div>
                        <div className="flex items-center justify-between mb-1">
                          <label className="block text-xs font-bold text-[#2D0F16]">
                            🔗 Seu Link Exclusivo de Indicação:
                          </label>
                          <span className="text-[10px] text-stone-500 font-medium">
                            Identificador: <strong className="text-[#7D1D32]">{cleanPhone}</strong>
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <input
                            type="text"
                            readOnly
                            value={personalShareUrl}
                            className="w-full bg-[#FFF9FA] border border-[#D9A3AF] px-3.5 py-2.5 rounded-xl text-xs text-[#2D0F16] font-mono select-all focus:outline-none"
                          />
                          <button
                            type="button"
                            onClick={handleCopyLink}
                            className="px-4 py-2.5 bg-[#7D1D32] hover:bg-[#681729] text-white text-xs font-bold rounded-xl flex items-center gap-1.5 shrink-0 transition-colors shadow-xs"
                          >
                            {copiedLink ? (
                              <>
                                <CheckCheck className="w-3.5 h-3.5" /> Copiado!
                              </>
                            ) : (
                              <>
                                <Copy className="w-3.5 h-3.5" /> Copiar Link
                              </>
                            )}
                          </button>
                        </div>
                      </div>

                      {/* Botões de Ação Rápida no WhatsApp */}
                      <div className="flex flex-col sm:flex-row gap-2 pt-1">
                        <button
                          type="button"
                          onClick={handleWhatsAppShare}
                          className="flex-1 bg-[#25D366] hover:bg-[#20ba5a] text-white px-4 py-3 rounded-xl font-bold text-xs flex items-center justify-center gap-2 shadow-sm transition-all transform hover:-translate-y-0.5 active:translate-y-0"
                        >
                          <MessageCircle className="w-4 h-4 fill-current" />
                          <span>Compartilhar Direto no WhatsApp</span>
                        </button>

                        <button
                          type="button"
                          onClick={handleCopyMessage}
                          className="px-4 py-3 bg-[#FDF0F3] hover:bg-[#F9E2E8] text-[#7D1D32] border border-[#EAC9D1] rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-colors"
                        >
                          {copiedMessage ? (
                            <>
                              <CheckCheck className="w-4 h-4" /> Texto Pronto Copiado!
                            </>
                          ) : (
                            <>
                              <Share2 className="w-4 h-4" /> Copiar Texto Pronto
                            </>
                          )}
                        </button>
                      </div>

                      <p className="text-[10px] text-stone-500 text-center italic pt-1">
                        💡 Cada amiga que se cadastrar usando o seu link terá o seu telefone registrado como indicadora. A premiação ocorrerá ao final dos webinars!
                      </p>
                    </div>
                  </div>
                </div>
              );
            })()}

            {/* Suporte Matheus */}
            <div className="pt-2 text-xs text-stone-500">
              Precisa falar com a gente ou tirar alguma dúvida?{' '}
              <a 
                href="https://wa.me/5521973413967?text=Olá,%20Matheus!%20Me%20cadastrei%20no%20workshop%20de%20beleza%20e%20gostaria%20de%20falar%20com%20você."
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#7D1D32] font-semibold underline hover:text-stone-900"
              >
                Falar com Matheus pelo WhatsApp
              </a>
            </div>
          </div>
        ) : searchParams.get('indicar') === 'true' || searchParams.get('desafio') === 'true' ? (
          /* PÁGINA DEDICADA DE INDICAÇÃO & GERAÇÃO DE LINK PARA QUEM JÁ ESTÁ NO WHATSAPP */
          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-[#EAC9D1] mt-6 space-y-6 animate-in fade-in duration-200 text-left">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#7D1D32] to-[#A32A44] text-white flex items-center justify-center shrink-0 shadow-md">
                <Trophy className="w-6 h-6 text-[#FCEBEB]" />
              </div>
              <div>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#7D1D32] text-white text-[10px] font-black uppercase tracking-wider">
                  🎁 Desafio Oficial de Indicação
                </span>
                <h2 className="text-xl sm:text-2xl font-black text-[#2D0F16] tracking-tight mt-1">
                  Gere Seu Link Exclusivo & Concorra a Prêmios
                </h2>
              </div>
            </div>

            {/* Banner Dourado / Marsala de Destaque Total de Premiação */}
            <div className="bg-gradient-to-r from-[#7D1D32] via-[#94263F] to-[#681729] text-white rounded-2xl p-4 sm:p-5 shadow-md flex flex-col sm:flex-row items-center justify-between gap-3 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full blur-2xl pointer-events-none" />
              <div className="flex items-center gap-3.5 relative z-10 text-center sm:text-left">
                <div className="w-12 h-12 rounded-xl bg-white/15 border border-white/20 flex items-center justify-center shrink-0 text-2xl shadow-inner">
                  🏆
                </div>
                <div>
                  <div className="text-[10px] font-black uppercase tracking-widest text-[#FCEBEB] bg-white/20 inline-block px-2 py-0.5 rounded-full mb-0.5">
                    Premiação Total do Evento
                  </div>
                  <div className="text-xl sm:text-2xl font-black tracking-tight text-white">
                    R$ 7.500,00 em Prêmios
                  </div>
                </div>
              </div>
              <div className="text-center sm:text-right relative z-10 border-t sm:border-t-0 sm:border-l border-white/20 pt-2 sm:pt-0 sm:pl-4">
                <span className="text-[11px] text-[#FCEBEB]/90 font-medium block">
                  Serão 3 profissionais premiadas ao vivo
                </span>
                <span className="text-xs font-bold text-amber-200 uppercase tracking-wide">
                  Ganha quem indicar mais!
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              Para validar sua participação e vincular as indicações a você, <strong>preencha seu nome e WhatsApp</strong>. A premiação será dada para quem gerar o maior número de referências confirmadas no <strong>Webinar Beleza das Finanças</strong>:
            </p>

            {/* Os 3 Prêmios Oficiais OECO com Valores */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {/* 1º Lugar */}
              <div className="bg-white rounded-2xl p-4 border-2 border-[#D9A3AF] shadow-xs flex flex-col justify-between relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-[#7D1D32] text-white text-[9px] font-black uppercase px-2.5 py-0.5 rounded-bl-lg">
                  1º Lugar
                </div>
                <div>
                  <div className="flex items-center gap-1.5 mb-1.5">
                    <span className="text-2xl">🥇</span>
                    <span className="px-2 py-0.5 rounded-full bg-[#7D1D32]/10 text-[#7D1D32] font-black text-xs">
                      R$ 4.100 em prêmios
                    </span>
                  </div>
                  <div className="text-xs font-black text-[#7D1D32] leading-tight">
                    6 Meses de Consultoria + Oeco Start
                  </div>
                  <ul className="text-[11px] text-stone-600 mt-2 space-y-1 leading-snug">
                    <li>• <strong>Diagnóstico Financeiro Oeco</strong> (sessão de 30min a 1h com Matheus)</li>
                    <li>• <strong>6 meses de consultoria</strong> (1h exclusiva por mês)</li>
                    <li>• Sistema <strong>Oeco Start 100% gratuito</strong> durante os 6 meses de consultoria</li>
                  </ul>
                </div>
                <div className="mt-3 pt-2 border-t border-stone-100 text-[10px] font-black text-[#7D1D32] uppercase tracking-wide">
                  Troféu de Ouro
                </div>
              </div>

              {/* 2º Lugar */}
              <div className="bg-white rounded-2xl p-4 border border-stone-200 shadow-xs flex flex-col justify-between relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-stone-800 text-white text-[9px] font-black uppercase px-2.5 py-0.5 rounded-bl-lg">
                  2º Lugar
                </div>
                <div>
                  <div className="flex items-center gap-1.5 mb-1.5">
                    <span className="text-2xl">🥈</span>
                    <span className="px-2 py-0.5 rounded-full bg-stone-100 text-stone-800 font-black text-xs">
                      R$ 2.300 em prêmios
                    </span>
                  </div>
                  <div className="text-xs font-black text-stone-900 leading-tight">
                    3 Meses de Consultoria + Oeco Start
                  </div>
                  <ul className="text-[11px] text-stone-600 mt-2 space-y-1 leading-snug">
                    <li>• <strong>Diagnóstico Financeiro Oeco</strong> (sessão de 30min a 1h com Matheus)</li>
                    <li>• <strong>3 meses de consultoria</strong> (1h exclusiva por mês)</li>
                    <li>• Sistema <strong>Oeco Start 100% gratuito</strong> durante os 3 meses de consultoria</li>
                  </ul>
                </div>
                <div className="mt-3 pt-2 border-t border-stone-100 text-[10px] font-black text-stone-600 uppercase tracking-wide">
                  Troféu de Prata
                </div>
              </div>

              {/* 3º Lugar */}
              <div className="bg-white rounded-2xl p-4 border border-stone-200 shadow-xs flex flex-col justify-between relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-stone-600 text-white text-[9px] font-black uppercase px-2.5 py-0.5 rounded-bl-lg">
                  3º Lugar
                </div>
                <div>
                  <div className="flex items-center gap-1.5 mb-1.5">
                    <span className="text-2xl">🥉</span>
                    <span className="px-2 py-0.5 rounded-full bg-stone-100 text-stone-700 font-black text-xs">
                      R$ 1.100 em prêmios
                    </span>
                  </div>
                  <div className="text-xs font-black text-stone-900 leading-tight">
                    1 Mês de Consultoria + Oeco Start
                  </div>
                  <ul className="text-[11px] text-stone-600 mt-2 space-y-1 leading-snug">
                    <li>• <strong>Diagnóstico Financeiro Oeco</strong> (sessão de 30min a 1h com Matheus)</li>
                    <li>• <strong>1 mês de consultoria</strong> (1h exclusiva individual)</li>
                    <li>• Sistema <strong>Oeco Start 100% gratuito</strong> durante o mês de consultoria</li>
                  </ul>
                </div>
                <div className="mt-3 pt-2 border-t border-stone-100 text-[10px] font-black text-stone-600 uppercase tracking-wide">
                  Troféu de Bronze
                </div>
              </div>
            </div>

            {/* Formulário Obrigatório: Nome + Telefone */}
            <div className="bg-[#FFF9FA] rounded-3xl p-5 sm:p-6 border border-[#EAC9D1] space-y-4">
              <div className="border-b border-[#F4DEE3] pb-2">
                <h3 className="text-sm font-bold text-[#2D0F16] flex items-center gap-1.5">
                  <span>📝 Identifique-se para Gerar seu Link</span>
                </h3>
                <p className="text-[11px] text-stone-500">
                  Precisamos do seu nome e WhatsApp para confirmar suas indicações e entrar em contato com você ao final do sorteio.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    Seu Nome Completo *
                  </label>
                  <input
                    type="text"
                    required
                    value={referralName}
                    onChange={(e) => setReferralName(e.target.value)}
                    placeholder="Ex: Amanda Silva"
                    className="w-full bg-white border border-stone-300 px-3.5 py-2.5 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#7D1D32]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    Seu WhatsApp com DDD *
                  </label>
                  <input
                    type="tel"
                    required
                    value={referralPhone}
                    onChange={(e) => {
                      let val = e.target.value.replace(/\D/g, '');
                      if (val.length > 11) val = val.slice(0, 11);
                      if (val.length > 6) {
                        val = `(${val.slice(0, 2)}) ${val.slice(2, 7)}-${val.slice(7)}`;
                      } else if (val.length > 2) {
                        val = `(${val.slice(0, 2)}) ${val.slice(2)}`;
                      } else if (val.length > 0) {
                        val = `(${val}`;
                      }
                      setReferralPhone(val);
                    }}
                    placeholder="(21) 99999-9999"
                    className="w-full bg-white border border-stone-300 px-3.5 py-2.5 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#7D1D32]"
                  />
                </div>
              </div>

              {(() => {
                const cleanPhoneDigits = referralPhone.replace(/\D/g, '');
                const isValid = referralName.trim().length >= 3 && cleanPhoneDigits.length >= 10;
                const personalLink = `https://oecofs.com/forms/beleza?ref=${cleanPhoneDigits}`;
                const shareText = `Oi! Me inscrevi no Webinar Beleza das Finanças da OECO (100% gratuito e ao vivo nos dias 26 e 27/10) e lembrei de você! Eles vão ensinar como precificar procedimentos, separar as contas e ter lucro real no salão/estúdio. Garante sua vaga por esse link exclusivo: ${personalLink}`;

                if (!isValid) {
                  return (
                    <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 text-xs text-amber-800 text-center">
                      ⚠️ Preencha seu <strong>nome completo</strong> e seu <strong>WhatsApp com DDD</strong> acima para desbloquear seu link oficial.
                    </div>
                  );
                }

                return (
                  <div className="space-y-3.5 animate-in fade-in duration-200 pt-2 border-t border-[#F4DEE3]">
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <label className="block text-xs font-bold text-[#2D0F16]">
                          🔗 Seu Link de Indicação (Pronto para Uso):
                        </label>
                        <span className="text-[10px] text-stone-500 font-mono">
                          ref={cleanPhoneDigits}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <input
                          type="text"
                          readOnly
                          value={personalLink}
                          className="w-full bg-white border border-[#D9A3AF] px-3.5 py-2.5 rounded-xl text-xs font-mono select-all text-[#2D0F16]"
                        />
                        <button
                          type="button"
                          onClick={() => {
                            navigator.clipboard.writeText(personalLink);
                            setCopiedLink(true);
                            setTimeout(() => setCopiedLink(false), 2500);
                          }}
                          className="px-4 py-2.5 bg-[#7D1D32] hover:bg-[#681729] text-white text-xs font-bold rounded-xl flex items-center gap-1.5 shrink-0 transition-colors shadow-xs"
                        >
                          {copiedLink ? <CheckCheck className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                          <span>{copiedLink ? 'Copiado!' : 'Copiar'}</span>
                        </button>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-2">
                      <button
                        type="button"
                        onClick={() => {
                          window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(shareText)}`, '_blank');
                        }}
                        className="flex-1 bg-[#25D366] hover:bg-[#20ba5a] text-white px-4 py-3 rounded-xl font-bold text-xs flex items-center justify-center gap-2 shadow-sm transition-all transform hover:-translate-y-0.5 active:translate-y-0"
                      >
                        <MessageCircle className="w-4 h-4 fill-current" />
                        <span>Compartilhar no WhatsApp</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => {
                          navigator.clipboard.writeText(shareText);
                          setCopiedMessage(true);
                          setTimeout(() => setCopiedMessage(false), 2500);
                        }}
                        className="px-4 py-3 bg-white hover:bg-stone-50 border border-[#D9A3AF] text-[#7D1D32] rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-colors"
                      >
                        {copiedMessage ? <CheckCheck className="w-4 h-4" /> : <Share2 className="w-4 h-4" />}
                        <span>{copiedMessage ? 'Mensagem Copiada!' : 'Copiar Texto Pronto'}</span>
                      </button>
                    </div>

                    <p className="text-[10px] text-stone-500 text-center italic">
                      💡 Cada inscrição confirmada com seu telefone contará pontos para você no ranking oficial!
                    </p>
                  </div>
                );
              })()}
            </div>

            <div className="text-center pt-2">
              <Link
                to="/forms/beleza"
                className="text-xs text-stone-500 hover:text-stone-800 underline font-medium"
              >
                ← Voltar para o formulário de inscrição
              </Link>
            </div>
          </div>
        ) : (
          /* FORMULÁRIO DE CAPTURA RÁPIDA */
          <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-5 sm:p-8 shadow-xl border border-[#EAC9D1] mt-4 space-y-7">
            
            {/* ETAPA 1: CONTATO */}
            <section className="space-y-4">
              <div className="flex items-center gap-2 border-b border-[#F4DEE3] pb-2.5">
                <span className="w-6 h-6 rounded-full bg-[#7D1D32] text-white text-xs font-bold flex items-center justify-center shadow-xs">
                  1
                </span>
                <h2 className="text-base font-bold text-[#2D0F16]">
                  Seus Dados de Contato
                </h2>
              </div>

              <div className="space-y-3.5">
                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Ex: Amanda Silva"
                    className="w-full px-4 py-3 rounded-xl border border-stone-300 bg-[#FFFDFD] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#7D1D32] focus:border-transparent text-sm transition-all"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      value={whatsapp}
                      onChange={handlePhoneChange}
                      placeholder="(21) 99999-9999"
                      className="w-full px-4 py-3 rounded-xl border border-stone-300 bg-[#FFFDFD] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#7D1D32] focus:border-transparent text-sm transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      E-mail <span className="text-stone-400 font-normal">(opcional)</span>
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="amanda@exemplo.com"
                      className="w-full px-4 py-3 rounded-xl border border-stone-300 bg-[#FFFDFD] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#7D1D32] focus:border-transparent text-sm transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Instagram do seu trabalho / salão <span className="text-stone-400 font-normal">(opcional)</span>
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-3 text-[#B26B7B] text-sm font-medium">@</span>
                    <input
                      type="text"
                      value={instagram}
                      onChange={(e) => setInstagram(e.target.value)}
                      placeholder="studio.amanda"
                      className="w-full pl-8 pr-4 py-3 rounded-xl border border-stone-300 bg-[#FFFDFD] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#7D1D32] focus:border-transparent text-sm transition-all"
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* ETAPA 2: NICHO DE ATUAÇÃO */}
            <section className="space-y-3">
              <div className="flex items-center gap-2 border-b border-[#F4DEE3] pb-2.5">
                <span className="w-6 h-6 rounded-full bg-[#7D1D32] text-white text-xs font-bold flex items-center justify-center shadow-xs">
                  2
                </span>
                <h2 className="text-base font-bold text-[#2D0F16]">
                  Qual é a sua principal área de atuação? *
                </h2>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {NICHES.map(item => {
                  const isSelected = niche === item.id;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setNiche(item.id)}
                      className={`p-3 rounded-xl text-left border text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
                        isSelected
                          ? 'border-[#7D1D32] bg-[#7D1D32]/10 text-[#2D0F16] ring-2 ring-[#7D1D32]'
                          : 'border-stone-200 bg-stone-50/70 hover:bg-[#FDF3F5] hover:border-[#D9A3AF] text-stone-700'
                      }`}
                    >
                      <span>{item.label}</span>
                    </button>
                  );
                })}
              </div>

              {/* Campo para Outro Nicho */}
              {niche === 'outro' && (
                <div className="pt-2 animate-in fade-in duration-200">
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Qual é a sua especialidade ou nicho?
                  </label>
                  <input
                    type="text"
                    value={customNiche}
                    onChange={(e) => setCustomNiche(e.target.value)}
                    placeholder="Ex: Bronzeamento, Tatuagem, Piercing, Terapias..."
                    className="w-full px-4 py-2.5 rounded-xl border border-[#7D1D32] bg-white focus:outline-none focus:ring-2 focus:ring-[#7D1D32] text-xs sm:text-sm"
                    autoFocus
                  />
                </div>
              )}
            </section>

            {/* ETAPA 3: ESTRUTURA E FORMALIZAÇÃO */}
            <section className="space-y-4">
              <div className="flex items-center gap-2 border-b border-[#F4DEE3] pb-2.5">
                <span className="w-6 h-6 rounded-full bg-[#7D1D32] text-white text-xs font-bold flex items-center justify-center shadow-xs">
                  3
                </span>
                <h2 className="text-base font-bold text-[#2D0F16]">
                  Estrutura & Formalização do seu Negócio
                </h2>
              </div>

              {/* Subtópico 1: Modelo */}
              <div className="space-y-2">
                <label className="block text-xs font-semibold text-stone-700">
                  Como você atua hoje?
                </label>
                <div className="space-y-2">
                  {BUSINESS_MODELS.map(model => {
                    const isSelected = businessModel === model.id;
                    return (
                      <label
                        key={model.id}
                        className={`flex items-center gap-3 p-3 rounded-xl border text-xs sm:text-sm cursor-pointer transition-all ${
                          isSelected
                            ? 'border-[#7D1D32] bg-[#7D1D32]/10 font-bold text-[#2D0F16]'
                            : 'border-stone-200 bg-stone-50/70 hover:bg-[#FDF3F5] text-stone-700'
                        }`}
                      >
                        <input
                          type="radio"
                          name="businessModel"
                          value={model.id}
                          checked={isSelected}
                          onChange={() => setBusinessModel(model.id)}
                          className="accent-[#7D1D32] w-4 h-4"
                        />
                        <span>{model.label}</span>
                      </label>
                    );
                  })}
                </div>
              </div>

              {/* Subtópico 2: CNPJ */}
              <div className="space-y-2 pt-2">
                <label className="block text-xs font-semibold text-stone-700">
                  Como está seu registro formal / CNPJ hoje?
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {FORMALIZATIONS.map(form => {
                    const isSelected = formalization === form.id;
                    return (
                      <label
                        key={form.id}
                        className={`flex items-center gap-3 p-3 rounded-xl border text-xs sm:text-sm cursor-pointer transition-all ${
                          isSelected
                            ? 'border-[#7D1D32] bg-[#7D1D32]/10 font-bold text-[#2D0F16]'
                            : 'border-stone-200 bg-stone-50/70 hover:bg-[#FDF3F5] text-stone-700'
                        }`}
                      >
                        <input
                          type="radio"
                          name="formalization"
                          value={form.id}
                          checked={isSelected}
                          onChange={() => setFormalization(form.id)}
                          className="accent-[#7D1D32] w-4 h-4"
                        />
                        <span>{form.label}</span>
                      </label>
                    );
                  })}
                </div>
              </div>
            </section>

            {/* ETAPA 4: DORES DO NEGÓCIO (CHECKBOXES) */}
            <section className="space-y-3">
              <div className="flex items-center gap-2 border-b border-[#F4DEE3] pb-2.5">
                <span className="w-6 h-6 rounded-full bg-[#7D1D32] text-white text-xs font-bold flex items-center justify-center shadow-xs">
                  4
                </span>
                <div>
                  <h2 className="text-base font-bold text-[#2D0F16]">
                    Seus Maiores Desafios Financeiros
                  </h2>
                  <p className="text-xs text-stone-500">
                    Marque todos os pontos que você gostaria de ver solucionados no workshop:
                  </p>
                </div>
              </div>

              <div className="space-y-2.5">
                {PAIN_POINTS.map(pain => {
                  const isChecked = painPoints.includes(pain.id);
                  return (
                    <div
                      key={pain.id}
                      role="checkbox"
                      aria-checked={isChecked}
                      tabIndex={0}
                      onClick={() => togglePainPoint(pain.id)}
                      onKeyDown={(e) => {
                        if (e.key === ' ' || e.key === 'Enter') {
                          e.preventDefault();
                          togglePainPoint(pain.id);
                        }
                      }}
                      className={`flex items-start gap-3.5 p-4 rounded-2xl border text-xs sm:text-sm cursor-pointer transition-all select-none ${
                        isChecked
                          ? 'border-[#7D1D32] bg-[#7D1D32]/10 shadow-sm ring-1 ring-[#7D1D32]'
                          : 'border-stone-200 bg-stone-50/60 hover:bg-[#FDF3F5] hover:border-[#D9A3AF] text-stone-700'
                      }`}
                    >
                      <div className={`w-5 h-5 rounded-md flex items-center justify-center shrink-0 mt-0.5 border transition-all ${
                        isChecked
                          ? 'bg-[#7D1D32] border-[#7D1D32] text-white shadow-xs'
                          : 'border-stone-300 bg-white'
                      }`}>
                        {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                      </div>
                      <div className="space-y-0.5 flex-1">
                        <div className={`font-semibold ${isChecked ? 'text-[#2D0F16] font-bold' : 'text-stone-800'}`}>
                          {pain.label}
                        </div>
                        {pain.desc && (
                          <div className="text-[11px] text-stone-500 leading-normal">
                            {pain.desc}
                          </div>
                        )}
                        {pain.id === 'outro' && isChecked && (
                          <div 
                            className="pt-2.5 animate-in fade-in duration-200" 
                            onClick={(e) => e.stopPropagation()}
                          >
                            <input
                              type="text"
                              value={customPainPoint}
                              onChange={(e) => setCustomPainPoint(e.target.value)}
                              placeholder="Qual outro desafio você enfrenta? Ex: clientes que desmarcam em cima da hora, cobrança..."
                              className="w-full px-3 py-2 rounded-xl border border-[#7D1D32] bg-white text-xs sm:text-sm focus:outline-none focus:ring-1 focus:ring-[#7D1D32]"
                              autoFocus
                            />
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* ETAPA 5: ESCOLHA DA TURMA DO WORKSHOP */}
            <section className="space-y-3">
              <div className="flex items-center gap-2 border-b border-[#F4DEE3] pb-2.5">
                <span className="w-6 h-6 rounded-full bg-[#7D1D32] text-white text-xs font-bold flex items-center justify-center shadow-xs">
                  5
                </span>
                <div>
                  <h2 className="text-base font-bold text-[#2D0F16]">
                    Escolha sua Turma do Workshop *
                  </h2>
                  <p className="text-xs text-stone-500">
                    Selecione o melhor dia e horário para participar ao vivo:
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {SESSIONS.map(session => {
                  const isSelected = sessionId === session.id;
                  const count = sessionCounts[session.id] || 0;
                  const remaining = Math.max(0, TOTAL_SEATS_PER_SESSION - count);
                  const isAlmostFull = remaining <= 20 && remaining > 0;
                  const isSoldOut = remaining === 0;

                  return (
                    <label
                      key={session.id}
                      className={`p-4 rounded-2xl border transition-all flex items-center justify-between gap-3 ${
                        isSoldOut
                          ? 'border-stone-200 bg-stone-100/70 opacity-60 cursor-not-allowed'
                          : isSelected
                            ? 'border-[#7D1D32] bg-[#7D1D32]/15 ring-2 ring-[#7D1D32] shadow-sm cursor-pointer'
                            : 'border-stone-200 bg-stone-50/70 hover:bg-[#FDF3F5] cursor-pointer'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <input
                          type="radio"
                          name="session"
                          value={session.id}
                          disabled={isSoldOut}
                          checked={isSelected}
                          onChange={() => !isSoldOut && setSessionId(session.id)}
                          className="accent-[#7D1D32] w-4 h-4 cursor-pointer disabled:cursor-not-allowed"
                        />
                        <div>
                          <div className="text-xs sm:text-sm font-bold text-[#2D0F16]">
                            {session.day}
                          </div>
                          <div className="text-xs text-stone-600 font-medium flex items-center gap-1 mt-0.5">
                            <Clock className="w-3 h-3 text-[#7D1D32]" /> Às {session.time} (ao vivo)
                          </div>
                        </div>
                      </div>

                      {isSoldOut ? (
                        <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-red-100 border border-red-200 text-red-700">
                          Esgotado
                        </span>
                      ) : isAlmostFull ? (
                        <span className="text-[10px] uppercase font-extrabold tracking-wider px-2 py-0.5 rounded-full bg-amber-100 border border-amber-300 text-amber-800 animate-pulse flex items-center gap-1 shadow-xs">
                          🔥 {remaining} vagas restantes
                        </span>
                      ) : (
                        <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-white/80 border border-stone-200 text-stone-600">
                          Vagas Limitadas
                        </span>
                      )}
                    </label>
                  );
                })}
              </div>
            </section>

            {/* BOTÃO DE SUBMIT */}
            <div className="pt-3">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-[#7D1D32] via-[#91223A] to-[#681729] hover:from-[#681729] hover:to-[#52111F] text-white py-4 px-6 rounded-2xl font-black text-base flex items-center justify-center gap-3 shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50 tracking-wide"
              >
                {isSubmitting ? (
                  <span>Salvando inscrição...</span>
                ) : (
                  <>
                    <span>Garantir Minha Vaga Gratuita</span>
                    <ArrowRight className="w-5 h-5 text-[#FCEBEB]" />
                  </>
                )}
              </button>

              <p className="text-[11px] text-center text-stone-400 mt-2.5 flex items-center justify-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5" /> Seus dados estão seguros. Não enviamos spam.
              </p>
            </div>
          </form>
        )}

        {/* Rodapé Limpo para Visitantes */}
        <footer className="mt-10 text-center space-y-2">
          <p className="text-xs text-stone-400">
            © {new Date().getFullYear()} OECO Financial Solutions • Feito para o setor de beleza
          </p>
        </footer>
      </main>

      {/* MODAL ADMIN / EXPORTAR LEADS */}
      {showAdminModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[85vh] flex flex-col shadow-2xl border border-stone-200 overflow-hidden">
            <div className="p-5 border-b border-stone-200 flex items-center justify-between bg-stone-50">
              <div className="flex items-center gap-2">
                <FileSpreadsheet className="w-5 h-5 text-[#4F6D46]" />
                <h3 className="text-base font-bold text-stone-900">
                  Leads do Workshop de Beleza ({leadsList.length})
                </h3>
              </div>
              <button 
                onClick={() => setShowAdminModal(false)}
                className="p-1 rounded-lg hover:bg-stone-200 text-stone-500"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-5 flex-1 overflow-y-auto space-y-5 text-xs text-stone-700">
              {/* Webhook Google Sheets */}
              <div className="bg-stone-50 border border-stone-200 rounded-xl p-3.5 space-y-2">
                <div className="font-bold text-stone-900 flex items-center justify-between">
                  <span>URL de Webhook (Google Sheets / Make):</span>
                  {webhookUrl && <span className="text-emerald-600 font-semibold">Ativo</span>}
                </div>
                <input
                  type="url"
                  placeholder="https://script.google.com/macros/s/.../exec"
                  value={webhookUrl}
                  onChange={(e) => {
                    setWebhookUrl(e.target.value);
                    localStorage.setItem(WEBHOOK_STORAGE_KEY, e.target.value);
                  }}
                  className="w-full px-3 py-2 border rounded-lg bg-white text-xs"
                />
                <p className="text-[11px] text-stone-500">
                  Se preenchida, cada lead preenchido será disparado automaticamente para sua planilha Google.
                </p>
              </div>

              {/* Botões de Ação */}
              <div className="flex items-center justify-between gap-3">
                <button
                  onClick={handleExportCSV}
                  className="bg-[#4F6D46] hover:bg-[#3d5536] text-white px-4 py-2 rounded-xl font-bold flex items-center gap-2 text-xs shadow"
                >
                  <Download className="w-4 h-4" /> Exportar para Planilha (.CSV)
                </button>

                {leadsList.length > 0 && (
                  <button
                    onClick={() => {
                      if (confirm('Tem certeza que deseja apagar todos os leads deste dispositivo?')) {
                        setLeadsList([]);
                        localStorage.removeItem(STORAGE_KEY);
                      }
                    }}
                    className="text-red-600 hover:text-red-800 flex items-center gap-1 font-medium"
                  >
                    <Trash2 className="w-3.5 h-3.5" /> Limpar Leads Locais
                  </button>
                )}
              </div>

              {/* Lista Rápida */}
              {leadsList.length === 0 ? (
                <div className="text-center py-8 text-stone-400">
                  Nenhum cadastro recebido ainda. Preencha o formulário para testar!
                </div>
              ) : (
                <div className="divide-y divide-stone-100 border rounded-xl overflow-hidden">
                  {leadsList.map(lead => (
                    <div key={lead.id} className="p-3 bg-white space-y-1">
                      <div className="flex items-center justify-between font-bold text-stone-900">
                        <span>{lead.fullName}</span>
                        <span className="text-[10px] text-stone-500">{new Date(lead.createdAt).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}</span>
                      </div>
                      <div className="text-stone-600 flex flex-wrap gap-2 text-[11px]">
                        <span>📱 {lead.whatsapp}</span>
                        <span>✉️ {lead.email}</span>
                        {lead.instagram && <span>📸 @{lead.instagram}</span>}
                      </div>
                      <div className="text-stone-500 text-[11px]">
                        <strong>Turma:</strong> {lead.session} | <strong>Nicho:</strong> {lead.niche}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
