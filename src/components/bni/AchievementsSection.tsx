import React from 'react';
import { ProfileData } from '../../types/bni';

interface AchievementsSectionProps {
  profile: ProfileData;
}

export const AchievementsSection: React.FC<AchievementsSectionProps> = ({ profile }) => {
  const ach = profile.achievements;
  if (!ach) return null;

  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-white border-b border-[#EFEBE4]">
      <div className="max-w-6xl mx-auto">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Heading & Quote (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4F6D46]"></span>
              <span className="text-xs font-mono tracking-widest text-[#78716C] uppercase">
                {ach.badge || 'REALIZAÇÕES'}
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-[#1C1815] leading-[1.12]">
              <span className="font-sans font-bold">{ach.title?.split(' ')[0] || 'Do pessoal'} </span>
              <span className="font-serif-italic text-[#634832] block">{ach.title?.split(' ').slice(1).join(' ') || 'ao profissional.'}</span>
            </h2>

            {ach.quote && (
              <div className="p-5 rounded-2xl bg-[#F8F5F0] border-l-3 border-[#8D6E63] text-[#44403C]">
                <p className="font-serif-italic text-lg sm:text-xl leading-relaxed text-[#292524]">
                  {ach.quote}
                </p>
                <div className="text-xs font-mono text-[#8C8275] uppercase mt-2">
                  {ach.quoteAuthor || profile.personal.name}
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Narrative paragraphs (7 cols) */}
          <div className="lg:col-span-7 space-y-4 text-sm sm:text-base text-[#44403C] leading-relaxed">
            {ach.paragraphs.map((paragraph, index) => (
              <div key={index} className="flex gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#4F6D46] mt-2.5 shrink-0"></span>
                <p className="text-justify sm:text-left">{paragraph}</p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
