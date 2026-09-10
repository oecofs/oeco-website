import React from 'react';
import { ProfileData } from '../../types/bni';
import { ArrowUp, Download } from 'lucide-react';
import { downloadVCardFile } from '../../utils/bniVcard';

interface FooterProps {
  profile: ProfileData;
  language?: 'pt' | 'en';
}

export const Footer: React.FC<FooterProps> = ({ profile, language = 'pt' }) => {
  const p = profile.personal;
  const cta = profile.contactCTA;
  const isEn = language === 'en';

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-[#FAF8F5] border-t border-[#EFEBE4] text-xs text-[#8C8275]">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left: Branding */}
        <div className="flex flex-wrap items-center gap-2 font-mono uppercase tracking-wider text-[#57534E]">
          <span className="font-bold text-[#1C1815]">{p.name}</span>
          <span className="text-[#C4B9AD]">·</span>
          <span>{p.company}</span>
          {profile.networking.groupName && (
            <>
              <span className="text-[#C4B9AD]">·</span>
              <span className="text-[#4F6D46] font-semibold">{profile.networking.groupName}</span>
            </>
          )}
        </div>

        {/* Center: Quote / Motto */}
        {cta.footerQuote && (
          <div className="font-serif-italic text-sm text-[#8D6E63]">
            {cta.footerQuote}
          </div>
        )}

        {/* Right: Actions */}
        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={() => downloadVCardFile(profile)}
            className="hover:text-[#1C1815] transition-colors flex items-center gap-1 cursor-pointer"
          >
            <Download className="w-3 h-3" />
            <span>{isEn ? 'Save Contact (.vcf)' : 'Salvar Contato (.vcf)'}</span>
          </button>

          <button
            type="button"
            onClick={scrollToTop}
            className="p-2 rounded-full border border-[#E0D9CE] hover:border-[#292524] text-[#292524] transition-all cursor-pointer"
            aria-label={isEn ? "Back to top" : "Voltar ao topo"}
          >
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
