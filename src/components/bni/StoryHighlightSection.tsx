import React from 'react';
import { ProfileData } from '../../types/bni';
import { Quote } from 'lucide-react';

interface StoryHighlightSectionProps {
  profile: ProfileData;
}

export const StoryHighlightSection: React.FC<StoryHighlightSectionProps> = ({ profile }) => {
  const story = profile.transformationStory;
  if (!story) return null;

  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-[#F5F1EB]/70 border-y border-[#EAE3D9]">
      <div className="max-w-6xl mx-auto">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Story narrative & Heading (7 cols) */}
          <div className="lg:col-span-7 space-y-5">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4F6D46]"></span>
              <span className="text-xs font-mono tracking-widest text-[#78716C] uppercase">
                {story.badge || 'O QUE QUASE NINGUÉM SABE SOBRE MIM'}
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-light tracking-tight text-[#1C1815]">
              <span className="font-sans font-bold">{story.title.split(' ')[0]} {story.title.split(' ')[1] || ''} </span>
              <span className="font-serif-italic text-[#634832]">{story.title.split(' ').slice(2).join(' ')}</span>
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-[#44403C] leading-relaxed">
              {story.paragraphs.map((p, index) => (
                <p key={index} className="text-justify sm:text-left">
                  {p}
                </p>
              ))}
            </div>
          </div>

          {/* Right Column: Editorial Quote Card (5 cols) */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-2xl p-7 sm:p-9 border-l-4 border-[#4F6D46] border-y border-r border-[#E2DDD3] shadow-md relative">
              <Quote className="w-8 h-8 text-[#4F6D46]/30 mb-3" />
              
              <blockquote className="font-serif-italic text-2xl sm:text-3xl text-[#292524] leading-snug mb-4">
                {story.quote}
              </blockquote>

              <div className="pt-4 border-t border-[#F0EBE3] flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-wider text-[#78716C] font-semibold">
                  {story.quoteAuthor || profile.personal.name}
                </span>
                <span className="text-[11px] font-mono text-[#4F6D46] font-medium">
                  {profile.networking.groupName}
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
