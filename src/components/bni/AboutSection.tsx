import React, { useState } from 'react';
import { ProfileData } from '../../types/bni';
import { ChevronLeft, ChevronRight, Sparkles, HeartHandshake, Users, Briefcase, ShieldCheck, Dumbbell } from 'lucide-react';

interface AboutSectionProps {
  profile: ProfileData;
  language?: 'pt' | 'en';
}

const getBlockIcon = (iconName?: string) => {
  switch (iconName) {
    case 'heart-handshake':
      return <HeartHandshake className="w-3.5 h-3.5" />;
    case 'users':
      return <Users className="w-3.5 h-3.5" />;
    case 'briefcase':
      return <Briefcase className="w-3.5 h-3.5" />;
    case 'shield-check':
      return <ShieldCheck className="w-3.5 h-3.5" />;
    case 'dumbbell':
      return <Dumbbell className="w-3.5 h-3.5" />;
    default:
      return <Sparkles className="w-3.5 h-3.5" />;
  }
};

export const AboutSection: React.FC<AboutSectionProps> = ({ profile, language = 'pt' }) => {
  const [activePhotoIndex, setActivePhotoIndex] = useState(0);
  const about = profile.about;
  const photos = profile.photos || [];
  const isEn = language === 'en';

  const nextPhoto = () => {
    if (photos.length > 0) {
      setActivePhotoIndex((prev) => (prev + 1) % photos.length);
    }
  };

  const prevPhoto = () => {
    if (photos.length > 0) {
      setActivePhotoIndex((prev) => (prev - 1 + photos.length) % photos.length);
    }
  };

  return (
    <section id="sobre" className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 border-t border-[#EFEBE4]">
      <div className="max-w-6xl mx-auto">
        
        {/* Top Header */}
        <div className="flex items-center gap-2 mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-[#4F6D46]"></span>
          <span className="text-xs font-mono tracking-widest text-[#78716C] uppercase">
            {isEn ? "ABOUT ME & STORY" : "SOBRE MIM & HISTÓRIA"}
          </span>
        </div>

        {/* Section Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Heading, Title & Hobbies list (5 cols) */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-24">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-[#1C1815] leading-[1.12]">
              <span className="block font-sans font-semibold">
                {about.heading.split(',')[0]}
              </span>
              <span className="block font-serif-italic text-[#634832] font-normal">
                {about.heading.includes(',') ? about.heading.split(',').slice(1).join(',') : ''}
              </span>
            </h2>

            {/* Hobbies list */}
            <div className="pt-4 border-t border-[#E7E2DA]">
              <div className="text-[11px] font-mono text-[#8C8275] uppercase tracking-wider mb-4 flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-[#4F6D46]" />
                <span>{isEn ? "MY HOBBIES & ROUTINE" : "MEUS HOBBIES & ROTINA"}</span>
              </div>

              <div className="space-y-3">
                {about.hobbies.map((hobby, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 rounded-xl bg-white border border-[#E7E2DA] hover:border-[#4F6D46]/40 transition-colors shadow-2xs"
                  >
                    <span className="text-xs font-mono font-bold text-[#8D6E63]">{hobby.number}</span>
                    <span className="text-xs sm:text-sm font-medium text-[#292524] text-right">{hobby.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Bio Narrative Editorial Cards (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            {about.storyBlocks && about.storyBlocks.length > 0 ? (
              about.storyBlocks.map((block, index) => (
                <div
                  key={index}
                  className="p-5 sm:p-6 rounded-2xl bg-white border border-[#E7E2DA] hover:border-[#4F6D46]/40 transition-all duration-300 shadow-2xs hover:shadow-sm group"
                >
                  <div className="flex items-center justify-between gap-3 mb-2.5">
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-lg bg-[#4F6D46]/10 text-[#4F6D46] flex items-center justify-center shrink-0 group-hover:bg-[#4F6D46] group-hover:text-white transition-colors duration-200">
                        {getBlockIcon(block.icon)}
                      </div>
                      <span className="text-[11px] font-mono font-bold tracking-wider text-[#4F6D46] uppercase">
                        {block.tag}
                      </span>
                    </div>
                    <span className="text-[11px] font-mono font-medium text-[#A8A29E]">
                      {(index + 1).toString().padStart(2, '0')}
                    </span>
                  </div>

                  {block.title && (
                    <h3 className="text-sm sm:text-base font-semibold text-[#1C1815] mb-2 font-sans">
                      {block.title}
                    </h3>
                  )}

                  <p className="text-sm leading-relaxed text-[#44403C] text-justify sm:text-left">
                    {block.content}
                  </p>
                </div>
              ))
            ) : (
              about.paragraphs.map((paragraph, index) => (
                <div
                  key={index}
                  className="p-5 rounded-xl bg-white border border-[#E7E2DA] shadow-2xs"
                >
                  <p className="text-sm sm:text-base text-[#44403C] leading-relaxed text-justify sm:text-left">
                    {paragraph}
                  </p>
                </div>
              ))
            )}
          </div>

        </div>

        {/* Photo Gallery Deck ("FORA DO TRABALHO: UM POUCO DE MIM") */}
        {photos.length > 0 && (
          <div className="mt-14 pt-8 border-t border-[#E7E2DA]">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div>
                <div className="text-[11px] font-mono text-[#8C8275] uppercase tracking-wider flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#4F6D46]"></span>
                  <span>{isEn ? "OUTSIDE WORK · A BIT OF ME" : "FORA DO TRABALHO · UM POUCO DE MIM"}</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#1C1815] mt-1">
                  {isEn ? "Moments that shape who I am." : "Momentos que moldam quem eu sou."}
                </h3>
              </div>

              {/* Navigation Arrows */}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={prevPhoto}
                  className="p-2 rounded-full border border-[#D8CEBF] bg-white hover:bg-[#F5EFE6] text-[#292524] transition-all shadow-2xs cursor-pointer"
                  aria-label={isEn ? "Previous photo" : "Foto anterior"}
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={nextPhoto}
                  className="p-2 rounded-full border border-[#D8CEBF] bg-white hover:bg-[#F5EFE6] text-[#292524] transition-all shadow-2xs cursor-pointer"
                  aria-label={isEn ? "Next photo" : "Próxima foto"}
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Photo Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {photos.map((photo, index) => (
                <div
                  key={photo.id || index}
                  onClick={() => setActivePhotoIndex(index)}
                  className={`relative rounded-2xl overflow-hidden bg-white border transition-all duration-300 cursor-pointer group shadow-sm hover:shadow-md ${
                    activePhotoIndex === index
                      ? 'border-[#4F6D46] ring-2 ring-[#4F6D46]/20'
                      : 'border-[#E7E2DA] hover:border-[#A89F91]'
                  }`}
                >
                  <div className="aspect-4/3 sm:aspect-square overflow-hidden bg-[#26201B] relative">
                    <img
                      src={photo.url}
                      alt={photo.caption}
                      style={{
                        objectPosition: photo.objectPosition || '50% 50%',
                        transform: photo.zoom ? `scale(${photo.zoom})` : undefined,
                        objectFit: photo.fit || 'cover',
                      }}
                      onError={(e) => {
                        const fallbackImgs = [
                          '/images/bni/family.jpg',
                          'https://i.ytimg.com/vi/ug0pR-7LhV4/hqdefault.jpg',
                          '/images/bni/running.jpg',
                          '/images/bni/friends.jpg'
                        ];
                        (e.currentTarget as HTMLImageElement).src = fallbackImgs[index % fallbackImgs.length];
                      }}
                      className="w-full h-full group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  
                  <div className="p-4 bg-white">
                    <h4 className="text-sm font-bold text-[#1C1815] group-hover:text-[#4F6D46] transition-colors">
                      {photo.caption}
                    </h4>
                    {photo.subtitle && (
                      <p className="text-xs text-[#78716C] mt-0.5">
                        {photo.subtitle}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
