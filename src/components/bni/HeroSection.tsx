import React from 'react';
import { ProfileData } from '../../types/bni';
import { ChevronRight } from 'lucide-react';
import { AnimatedCounter, AnimatedCurrency } from './AnimatedCounter';

interface HeroSectionProps {
  profile: ProfileData;
  language?: 'pt' | 'en';
  onOpenSchedule: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  profile,
  language = 'pt',
  onOpenSchedule,
}) => {
  const p = profile.personal;
  const net = profile.networking;
  const isEn = language === 'en';

  return (
    <section id="topo" className="pt-20 sm:pt-24 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        
        {/* Main Dark Editorial Hero Card */}
        <div className="bg-[#1C1815] text-[#FAF8F5] rounded-3xl p-6 sm:p-8 lg:p-12 shadow-2xl border border-[#2E2824] relative overflow-hidden">
          
          {/* Subtle Ambient Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#4F6D46]/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#8D6E63]/10 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center relative z-10">
            
            {/* Left Content (8 cols) */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                {/* Header Tag / Chapter */}
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-2 h-2 rounded-full bg-[#4F6D46]"></span>
                  <span className="text-[11px] font-mono tracking-widest text-[#B5AEA4] uppercase">
                    {isEn ? `PROFILE · ${net.groupName || 'BUSINESS NETWORKING'}` : `PERFIL · ${net.groupName || 'NETWORKING EMPRESARIAL'}`}
                  </span>
                </div>

                {/* Main Name */}
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-white mb-2 leading-[1.08]">
                  <span className="block font-sans font-medium text-white">{p.name.split(' ')[0]} {p.name.split(' ')[1] || ''}</span>
                  <span className="block font-serif-italic text-[#D7CEC3] font-normal">
                    {p.name.split(' ').slice(2).join(' ') || ''}
                  </span>
                </h1>

                {/* Subtitle / Company */}
                <p className="text-base sm:text-lg text-[#C7BFB5] font-normal mt-3 mb-1">
                  {p.headline}
                </p>
                {p.formerCompany && (
                  <p className="text-xs font-mono text-[#8C8275] uppercase tracking-wide mb-6">
                    ({p.formerCompany})
                  </p>
                )}

                {/* Intro pitch paragraph */}
                <div className="text-sm sm:text-base text-[#D4CDC3] leading-relaxed max-w-xl space-y-3 pt-2 pb-6 border-t border-[#332C26] mt-4">
                  <p>{p.intro}</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  id="hero-cta-1a1"
                  type="button"
                  onClick={onOpenSchedule}
                  className="px-6 py-3 rounded-full bg-white text-[#1C1815] hover:bg-[#FAF8F5] text-xs sm:text-sm font-bold tracking-wide transition-all shadow-md hover:shadow-lg flex items-center gap-2 cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
                >
                  <span className="text-[#3E5636] font-bold">+</span>
                  <span>{isEn ? "LET'S SCHEDULE A 1:1" : "VAMOS MARCAR 1A1?"}</span>
                </button>

                <a
                  id="hero-btn-produtos"
                  href="#produtos"
                  className="px-5 py-3 rounded-full bg-[#2B241E] hover:bg-[#382F27] border border-[#3E342B] text-[#E5DDD2] text-xs sm:text-sm font-semibold tracking-wide transition-all flex items-center gap-2 hover:text-white"
                >
                  <span>{isEn ? "WHAT I DO" : "VER O QUE EU FAÇO"}</span>
                  <ChevronRight className="w-3.5 h-3.5 text-[#A3998D]" />
                </a>

                <a
                  id="hero-btn-referenciar"
                  href="#referencias"
                  className="px-5 py-3 rounded-full bg-transparent hover:bg-[#2B241E]/60 text-[#B8AEA2] hover:text-white text-xs sm:text-sm font-medium tracking-wide transition-all flex items-center gap-1.5"
                >
                  <span>{isEn ? "HOW TO REFER ME" : "COMO ME REFERENCIAR"}</span>
                </a>
              </div>
            </div>

            {/* Right: Portrait Image & Quick Facts (5 cols) */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="w-full max-w-sm relative">
                
                {/* Image Frame */}
                <div className="relative rounded-2xl overflow-hidden bg-[#241F1A] border-2 border-[#3D332B] shadow-xl aspect-4/5 group">
                  <img
                    src={p.avatarUrl}
                    alt={p.name}
                    style={{
                      objectPosition: p.avatarPosition || '50% 15%',
                      transform: p.avatarZoom ? `scale(${p.avatarZoom})` : undefined,
                    }}
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80";
                    }}
                    className="w-full h-full object-cover filter contrast-105 group-hover:scale-102 transition-all duration-500"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1C1815] via-transparent to-transparent opacity-60"></div>
                                
                  {/* Status Overlay Pill */}
                  <div className="absolute bottom-4 left-4 right-4 bg-[#1C1815]/90 backdrop-blur-md rounded-xl p-3 border border-[#382F27] flex items-center justify-between">
                    <div>
                      <div className="text-[10px] font-mono text-[#A3998D] uppercase tracking-wider">
                        {isEn ? "Active Networking" : "Networking Ativo"}
                      </div>
                      <div className="text-xs font-semibold text-white flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-[#4F6D46]"></span>
                        {net.roleInGroup || (isEn ? 'Specialist & Member' : 'Especialista & Membro')}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-[10px] font-mono text-[#A3998D] uppercase">
                        {isEn ? "Chapter" : "Capítulo"}
                      </div>
                      <div className="text-xs font-semibold text-[#86EFAC]">{net.groupName}</div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* Key Facts Bar - Bottom of Hero */}
          <div className="mt-8 pt-6 border-t border-[#2E2824] grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {profile.keyFacts.map((fact, index) => (
              <div key={index} className="space-y-1">
                <div className="text-[10px] font-mono tracking-widest text-[#8C8275] uppercase">{fact.label}</div>
                <div className="text-xs sm:text-sm font-semibold text-[#EFEBE4]">{fact.value}</div>
              </div>
            ))}
          </div>

        </div>

        {/* Networking Metrics Banner (Olive & Gold Accentuated) */}
        <div className="mt-6 bg-[#FFFFFF] rounded-2xl p-6 sm:p-8 border border-[#E7E2DA] shadow-sm grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-[#EFEBE4]">
          
          <div className="flex flex-col justify-center pt-3 sm:pt-0">
            <span className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#3E5636] font-sans tracking-tight">
              <AnimatedCurrency
                formattedString={net.businessGeneratedFormatted}
                duration={4000}
              />
            </span>
            <span className="text-[11px] font-mono tracking-wider text-[#78716C] uppercase mt-1">
              {net.businessGeneratedLabel}
            </span>
          </div>

          <div className="flex flex-col justify-center sm:pl-6 pt-3 sm:pt-0">
            <span className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#292524] font-sans tracking-tight">
              <AnimatedCounter
                value={net.referencesGiven}
                duration={4000}
              />
            </span>
            <span className="text-[11px] font-mono tracking-wider text-[#78716C] uppercase mt-1">
              {net.referencesLabel}
            </span>
          </div>

          <div className="flex flex-col justify-center sm:pl-6 pt-3 sm:pt-0">
            <span className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#292524] font-sans tracking-tight">
              <AnimatedCounter
                value={net.oneOnOneMeetings}
                duration={4000}
              />
            </span>
            <span className="text-[11px] font-mono tracking-wider text-[#78716C] uppercase mt-1">
              {net.oneOnOneLabel}
            </span>
          </div>

          <div className="flex flex-col justify-center sm:pl-6 pt-3 sm:pt-0">
            <span className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#6D4C41] font-sans tracking-tight">
              <AnimatedCounter
                value={net.yearsInNetwork}
                duration={4000}
                suffix={isEn ? " YRS" : " ANOS"}
              />
            </span>
            <span className="text-[11px] font-mono tracking-wider text-[#78716C] uppercase mt-1">
              {net.yearsLabel}
            </span>
          </div>

        </div>

      </div>
    </section>
  );
};
