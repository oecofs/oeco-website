import React from 'react';
import { ProfileData } from '../../types/bni';
import { MessageCircle, Mail, Calendar } from 'lucide-react';
import { buildWhatsAppLink } from '../../utils/bniVcard';

interface CTASectionProps {
  profile: ProfileData;
  language?: 'pt' | 'en';
  onOpenSchedule: () => void;
}

export const CTASection: React.FC<CTASectionProps> = ({ profile, language = 'pt', onOpenSchedule }) => {
  const cta = profile.contactCTA;
  const p = profile.personal;
  const isEn = language === 'en';

  const handleWhatsApp = () => {
    const msg = isEn
      ? `Hi ${p.name}! I viewed your networking profile from ${profile.networking.groupName} and would like to connect for a 1-on-1. What is your best time this week?`
      : `Olá ${p.name}! Acessei seu perfil do ${profile.networking.groupName} e gostaria de marcar um 1a1 contigo. Qual o seu melhor horário essa semana?`;
    window.open(buildWhatsAppLink(p.whatsapp, msg), '_blank');
  };

  return (
    <section id="contato" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#FAF8F5] relative overflow-hidden">
      
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3xl h-96 bg-[#4F6D46]/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-4xl mx-auto text-center relative z-10 space-y-8">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EFEBE4] text-[11px] font-mono tracking-widest text-[#78716C] uppercase">
          <span className="w-1.5 h-1.5 rounded-full bg-[#4F6D46]"></span>
          <span>{cta.badge || (isEn ? "LET'S CONNECT" : 'VAMOS CONVERSAR')}</span>
        </div>

        {/* Big Display Title */}
        <h2 className="text-4xl sm:text-6xl lg:text-7xl font-light tracking-tight text-[#1C1815] leading-[1.05]">
          <span className="font-sans font-normal block sm:inline">{cta.title} </span>
          <span className="font-serif-italic text-[#634832] font-normal block sm:inline">{cta.titleAccent || (isEn ? 'a 1-on-1?' : 'um 1a1?')}</span>
        </h2>

        {/* Narrative bio note */}
        <p className="text-base sm:text-lg text-[#665E55] max-w-xl mx-auto leading-relaxed">
          {cta.description}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <button
            id="cta-btn-whatsapp"
            type="button"
            onClick={handleWhatsApp}
            className="px-8 py-4 rounded-full bg-[#1C1917] hover:bg-[#2F2925] text-white text-xs sm:text-sm font-bold tracking-wide transition-all shadow-lg hover:shadow-xl flex items-center gap-2.5 cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
          >
            <MessageCircle className="w-4 h-4 text-[#86EFAC]" />
            <span>{cta.whatsappButtonText || (isEn ? 'MESSAGE ON WHATSAPP' : 'CHAMAR NO WHATSAPP')}</span>
          </button>

          <button
            id="cta-btn-schedule-form"
            type="button"
            onClick={onOpenSchedule}
            className="px-6 py-4 rounded-full bg-white hover:bg-[#F5EFE6] text-[#292524] border border-[#D8CEBF] text-xs sm:text-sm font-semibold tracking-wide transition-all shadow-xs flex items-center gap-2 cursor-pointer hover:border-[#4F6D46]"
          >
            <Calendar className="w-4 h-4 text-[#4F6D46]" />
            <span>{isEn ? 'PROPOSE DATE & TIME' : 'PROPOR DATA & HORÁRIO'}</span>
          </button>

          <a
            id="cta-btn-email"
            href={`mailto:${p.email}?subject=${isEn ? `1-on-1 ${profile.networking.groupName} - Professional Connection` : `1a1 ${profile.networking.groupName} - Conexão Profissional`}`}
            className="px-6 py-4 rounded-full bg-transparent hover:bg-[#EAE4D9]/60 text-[#57534E] hover:text-[#1C1917] text-xs sm:text-sm font-medium tracking-wide transition-all flex items-center gap-1.5"
          >
            <Mail className="w-4 h-4 text-[#8D6E63]" />
            <span className="font-mono">{p.email}</span>
          </a>
        </div>

      </div>
    </section>
  );
};
