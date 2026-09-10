import React from 'react';
import { ProfileData } from '../../types/bni';
import { TrendingUp } from 'lucide-react';

interface GoalsSectionProps {
  profile: ProfileData;
  language?: 'pt' | 'en';
}

export const GoalsSection: React.FC<GoalsSectionProps> = ({ profile, language = 'pt' }) => {
  const goals = profile.goals;
  const isEn = language === 'en';
  if (!goals || !goals.items || goals.items.length === 0) return null;

  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 border-b border-[#EFEBE4]">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end mb-10">
          <div className="lg:col-span-6 space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4F6D46]"></span>
              <span className="text-xs font-mono tracking-widest text-[#78716C] uppercase">
                {goals.badge || (isEn ? 'STRATEGIC GOALS' : 'OBJETIVOS')}
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-light tracking-tight text-[#1C1815]">
              <span className="font-sans font-bold">{isEn ? 'Where I aim to ' : 'Aonde eu quero '}</span>
              <span className="font-serif-italic text-[#4F6D46]">{isEn ? 'go.' : 'chegar.'}</span>
            </h2>
          </div>

          <div className="lg:col-span-6">
            <p className="text-sm sm:text-base text-[#665E55] leading-relaxed">
              {goals.subtitle}
            </p>
          </div>
        </div>

        {/* 3 Numbered Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {goals.items.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-7 border border-[#E7E2DA] hover:border-[#4F6D46] shadow-xs hover:shadow-md transition-all duration-300 relative group overflow-hidden flex flex-col justify-between"
            >
              {/* Subtle top accent bar in olive */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-[#E7E2DA] group-hover:bg-[#4F6D46] transition-colors"></div>

              <div>
                <span className="text-3xl sm:text-4xl font-mono font-bold text-[#8D6E63] group-hover:text-[#4F6D46] transition-colors block mb-4">
                  {item.number}
                </span>

                <h3 className="text-lg sm:text-xl font-bold text-[#1C1815] mb-2 group-hover:text-[#292524]">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[#F2EDE4] flex items-center gap-2 text-xs font-mono text-[#4F6D46]">
                <TrendingUp className="w-3.5 h-3.5" />
                <span className="uppercase tracking-wider">{isEn ? 'Strategic Goal' : 'Meta Estratégica'}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
