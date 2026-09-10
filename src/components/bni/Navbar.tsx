import React, { useState, useEffect } from 'react';
import { ProfileData } from '../../types/bni';
import { Share2, MessageCircle, Clock, MapPin } from 'lucide-react';

interface NavbarProps {
  profile: ProfileData;
  language: 'pt' | 'en';
  onToggleLanguage: (lang: 'pt' | 'en') => void;
  onOpenShare: () => void;
  onOpenSchedule: () => void;
}

// Crisp Vector Flags for perfect rendering across all devices & OS
const BrazilFlag: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg viewBox="0 0 64 64" className={`${className} rounded-full overflow-hidden shadow-2xs`} aria-label="Brasil">
    <rect width="64" height="64" fill="#009c3b" />
    <polygon points="32,8 58,32 32,56 6,32" fill="#ffdf00" />
    <circle cx="32" cy="32" r="14" fill="#002776" />
    <path d="M 18,34 Q 32,26 46,34" stroke="#ffffff" strokeWidth="2.5" fill="none" />
  </svg>
);

const USAFlag: React.FC<{ className?: string }> = ({ className = "w-5 h-5" }) => (
  <svg viewBox="0 0 64 64" className={`${className} rounded-full overflow-hidden shadow-2xs`} aria-label="United States">
    <rect width="64" height="64" fill="#bd3d44" />
    <path d="M0,5h64M0,15h64M0,25h64M0,35h64M0,45h64M0,55h64" stroke="#ffffff" strokeWidth="5" />
    <rect width="30" height="32" fill="#192f5d" />
    <circle cx="8" cy="8" r="2" fill="#ffffff" />
    <circle cx="15" cy="8" r="2" fill="#ffffff" />
    <circle cx="22" cy="8" r="2" fill="#ffffff" />
    <circle cx="11.5" cy="16" r="2" fill="#ffffff" />
    <circle cx="18.5" cy="16" r="2" fill="#ffffff" />
    <circle cx="8" cy="24" r="2" fill="#ffffff" />
    <circle cx="15" cy="24" r="2" fill="#ffffff" />
    <circle cx="22" cy="24" r="2" fill="#ffffff" />
  </svg>
);

export const Navbar: React.FC<NavbarProps> = ({
  profile,
  language,
  onToggleLanguage,
  onOpenShare,
  onOpenSchedule
}) => {
  const [time, setTime] = useState<string>('');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString(language === 'en' ? 'en-US' : 'pt-BR', {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false
        })
      );
    };

    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, [language]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#FAF8F5]/92 backdrop-blur-md border-b border-[#E7E2DA] shadow-xs py-2.5'
          : 'bg-[#FAF8F5] py-3.5 border-b border-[#EFEBE4]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-2 sm:gap-4">
          {/* Left: Path / Breadcrumb & Status */}
          <div className="flex items-center gap-3 sm:gap-5 min-w-0">
            <a
              href="#topo"
              className="text-xs sm:text-sm font-semibold tracking-wider text-[#292524] hover:text-[#4F6D46] transition-colors flex items-center gap-1.5 whitespace-nowrap"
            >
              <span className="text-[#8D6E63] font-mono font-normal">/</span> {language === 'en' ? 'profile' : 'perfil'}
            </a>

            <div className="hidden md:flex items-center gap-2 px-2.5 py-1 rounded-full bg-[#EBF1E8] border border-[#D5E2D2] text-[#3E5636] text-[11px] font-medium tracking-wide">
              <span className="w-2 h-2 rounded-full bg-[#4F6D46] animate-pulse"></span>
              <span>{profile.personal.statusText || (language === 'en' ? 'AVAILABLE FOR 1:1' : 'DISPONÍVEL P/ 1A1')}</span>
            </div>

            {/* City & Live Time */}
            <div className="hidden lg:flex items-center gap-2 text-[11px] text-[#78716C] font-mono">
              <MapPin className="w-3 h-3 text-[#8D6E63]" />
              <span className="uppercase">{profile.personal.city} · {profile.personal.timezone || 'GMT-3'}</span>
              <span className="text-[#D6D0C7]">·</span>
              <Clock className="w-3 h-3 text-[#8D6E63]" />
              <span className="text-[#44403C] font-semibold">{time || '09:00:00'}</span>
            </div>
          </div>

          {/* Right: Flag switcher, Quick actions & 1a1 trigger */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            
            {/* Visual Flag Language Switcher */}
            <div 
              className="bg-white border border-[#D8CEBF] p-1 rounded-full flex items-center gap-1 shadow-xs hover:border-[#8D6E63] transition-colors"
              role="group"
              aria-label="Seletor de Idioma / Language Selector"
            >
              {/* Brazil Flag Button */}
              <button
                type="button"
                onClick={() => onToggleLanguage('pt')}
                className={`relative p-1 rounded-full transition-all duration-300 cursor-pointer flex items-center justify-center ${
                  language === 'pt'
                    ? 'bg-[#EBF1E8] ring-2 ring-[#4F6D46] scale-110 shadow-sm'
                    : 'opacity-50 hover:opacity-100 hover:scale-105'
                }`}
                title="Versão em Português (Brasil & BNI)"
                aria-pressed={language === 'pt'}
              >
                <BrazilFlag className="w-5 h-5 sm:w-5.5 sm:h-5.5" />
                {language === 'pt' && (
                  <span className="sr-only">(Selecionado: Português)</span>
                )}
              </button>

              {/* USA Flag Button */}
              <button
                type="button"
                onClick={() => onToggleLanguage('en')}
                className={`relative p-1 rounded-full transition-all duration-300 cursor-pointer flex items-center justify-center ${
                  language === 'en'
                    ? 'bg-[#F2EDEA] ring-2 ring-[#8D6E63] scale-110 shadow-sm'
                    : 'opacity-50 hover:opacity-100 hover:scale-105'
                }`}
                title="English Version (USA & Europe Expansion)"
                aria-pressed={language === 'en'}
              >
                <USAFlag className="w-5 h-5 sm:w-5.5 sm:h-5.5" />
                {language === 'en' && (
                  <span className="sr-only">(Selected: English)</span>
                )}
              </button>
            </div>

            {/* Share / QR button */}
            <button
              id="btn-nav-share"
              onClick={onOpenShare}
              title={language === 'en' ? 'Share profile & QR Code' : 'Compartilhar perfil & QR Code'}
              className="p-2 sm:px-3 sm:py-1.5 rounded-full border border-[#E0D9CE] hover:border-[#4F6D46] bg-white hover:bg-[#FAF8F5] text-[#57534E] hover:text-[#292524] text-xs font-medium transition-all flex items-center gap-1.5 shadow-2xs cursor-pointer"
            >
              <Share2 className="w-3.5 h-3.5 text-[#6D4C41]" />
              <span className="hidden sm:inline">{language === 'en' ? 'Share' : 'Compartilhar'}</span>
            </button>

            {/* Primary CTA: Marcar 1a1 */}
            <button
              id="btn-nav-marcar-1a1"
              onClick={onOpenSchedule}
              className="px-3.5 py-1.5 sm:px-4 sm:py-1.5 rounded-full bg-[#1C1917] hover:bg-[#2E2824] text-[#FAF8F5] text-xs font-semibold tracking-wide transition-all shadow-sm hover:shadow flex items-center gap-1.5 cursor-pointer whitespace-nowrap active:scale-98"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#86EFAC]" />
              <span>{language === 'en' ? 'SCHEDULE 1:1' : 'MARCAR 1A1'}</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
