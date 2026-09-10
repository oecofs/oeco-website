import React from 'react';
import { ProfileData } from '../../types/bni';
import { Network, Building, Shield, GraduationCap, Dumbbell } from 'lucide-react';

interface InfluenceSectionProps {
  profile: ProfileData;
  language?: 'pt' | 'en';
}

export const InfluenceSection: React.FC<InfluenceSectionProps> = ({ profile, language = 'pt' }) => {
  const inf = profile.influence;
  const isEn = language === 'en';
  if (!inf || !inf.items || inf.items.length === 0) return null;

  const getCategoryIcon = (category: string) => {
    const cat = category.toUpperCase();
    if (cat.includes('FITNESS') || cat.includes('ACADEMIA') || cat.includes('ESPORTE') || cat.includes('CORRIDA') || cat.includes('SPORTS')) {
      return <Dumbbell className="w-3.5 h-3.5 text-[#4F6D46]" />;
    }
    if (cat.includes('EDUCAÇÃO') || cat.includes('ESCOLA') || cat.includes('EDUCATION')) {
      return <GraduationCap className="w-3.5 h-3.5 text-[#8D6E63]" />;
    }
    if (cat.includes('CONSELHO') || cat.includes('OAB') || cat.includes('COUNCIL')) {
      return <Shield className="w-3.5 h-3.5 text-[#634832]" />;
    }
    if (cat.includes('NEGÓCIOS') || cat.includes('EMPRESÁRIOS') || cat.includes('BUSINESS')) {
      return <Building className="w-3.5 h-3.5 text-[#4F6D46]" />;
    }
    return <Network className="w-3.5 h-3.5 text-[#4F6D46]" />;
  };

  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-white border-b border-[#EFEBE4]">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end mb-10">
          <div className="lg:col-span-6 space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4F6D46]"></span>
              <span className="text-xs font-mono tracking-widest text-[#78716C] uppercase">
                {inf.badge || (isEn ? 'NETWORKS & INFLUENCE' : 'VÍNCULOS & REDES')}
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-light tracking-tight text-[#1C1815]">
              <span className="font-sans font-bold">{isEn ? 'Where I have ' : 'Onde eu tenho '}</span>
              <span className="font-serif-italic text-[#634832]">{isEn ? 'influence.' : 'influência.'}</span>
            </h2>
          </div>

          <div className="lg:col-span-6">
            <p className="text-sm sm:text-base text-[#665E55] leading-relaxed">
              {inf.subtitle}
            </p>
          </div>
        </div>

        {/* Influence Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {inf.items.map((item, index) => (
            <div
              key={index}
              className="bg-[#FAF8F5] rounded-2xl p-5 border border-[#E7E2DA] hover:border-[#8D6E63]/50 hover:bg-white transition-all duration-300 shadow-2xs group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2 text-[10px] font-mono tracking-wider text-[#8C8275] uppercase mb-2">
                  {getCategoryIcon(item.category)}
                  <span>{item.category}</span>
                </div>

                <h3 className="text-base font-bold text-[#1C1815] group-hover:text-[#4F6D46] transition-colors mb-1.5">
                  {item.title}
                </h3>

                {item.description && (
                  <p className="text-xs text-[#57534E] leading-relaxed">
                    {item.description}
                  </p>
                )}
              </div>

              <div className="mt-4 pt-3 border-t border-[#EFE9DF] text-[11px] font-mono text-[#8D6E63] flex items-center justify-between">
                <span>{isEn ? 'Sphere of Contact' : 'Esfera de Contato'}</span>
                <span className="text-xs font-bold text-[#4F6D46]">● {isEn ? 'Open' : 'Aberto'}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
