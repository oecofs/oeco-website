import React from 'react';
import { ProfileData } from '../../types/bni';
import { UserCheck, Briefcase, Cpu } from 'lucide-react';

interface InterestsSectionProps {
  profile: ProfileData;
  language?: 'pt' | 'en';
}

export const InterestsSection: React.FC<InterestsSectionProps> = ({ profile, language = 'pt' }) => {
  const interests = profile.interests;
  const isEn = language === 'en';
  if (!interests) return null;

  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-[#FAF8F5] border-b border-[#EFEBE4]">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end mb-10">
          <div className="lg:col-span-6 space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4F6D46]"></span>
              <span className="text-xs font-mono tracking-widest text-[#78716C] uppercase">
                {interests.badge || (isEn ? 'INTERESTS & AFFINITIES' : 'INTERESSES & AFINIDADES')}
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-light tracking-tight text-[#1C1815]">
              <span className="font-sans font-bold">{isEn ? 'What drives ' : 'O que me '}</span>
              <span className="font-serif-italic text-[#634832]">{isEn ? 'me.' : 'move.'}</span>
            </h2>
          </div>

          <div className="lg:col-span-6">
            <p className="text-sm sm:text-base text-[#665E55] leading-relaxed">
              {interests.subtitle}
            </p>
          </div>
        </div>

        {/* 2-Column Affinity Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          
          {/* Pessoal & Desenvolvimento */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E7E2DA] shadow-2xs">
            <div className="flex items-center gap-2 text-xs font-mono text-[#8D6E63] uppercase tracking-wider mb-5 pb-3 border-b border-[#F0EBE3]">
              <UserCheck className="w-4 h-4 text-[#8D6E63]" />
              <span className="font-semibold">{isEn ? 'Personal & Growth' : 'Pessoal & Desenvolvimento'}</span>
            </div>

            <ul className="space-y-3">
              {interests.personalList.map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-sm text-[#3E3832]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8D6E63]/70"></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Áreas Profissionais */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E7E2DA] shadow-2xs">
            <div className="flex items-center gap-2 text-xs font-mono text-[#4F6D46] uppercase tracking-wider mb-5 pb-3 border-b border-[#F0EBE3]">
              <Briefcase className="w-4 h-4 text-[#4F6D46]" />
              <span className="font-semibold">{isEn ? 'Professional Focus' : 'Áreas Profissionais'}</span>
            </div>

            <ul className="space-y-3">
              {interests.professionalList.map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-sm text-[#3E3832]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#4F6D46]"></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Tecnologias / Skills Chips */}
        {interests.technologies && interests.technologies.length > 0 && (
          <div className="pt-6 border-t border-[#E7E2DA]">
            <div className="text-[11px] font-mono text-[#8C8275] uppercase tracking-wider mb-3 flex items-center gap-2">
              <Cpu className="w-3.5 h-3.5 text-[#634832]" />
              <span>{isEn ? 'TECHNOLOGIES & PLATFORMS' : 'TECNOLOGIAS & FERRAMENTAS'}</span>
            </div>

            <div className="flex flex-wrap gap-2">
              {interests.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 rounded-lg bg-white border border-[#E2DDD3] text-[#3E3832] text-xs font-mono font-medium shadow-2xs hover:border-[#4F6D46] hover:text-[#4F6D46] transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
