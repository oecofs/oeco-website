import React from 'react';
import { ProfileData } from '../../types/bni';
import { Award, Star, Trophy, HeartHandshake } from 'lucide-react';

interface AwardsSectionProps {
  profile: ProfileData;
}

export const AwardsSection: React.FC<AwardsSectionProps> = ({ profile }) => {
  const badges = profile.networking.badges || [];
  if (badges.length === 0) return null;

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'star':
        return <Star className="w-6 h-6 text-[#936D4D]" />;
      case 'trophy':
        return <Trophy className="w-6 h-6 text-[#4F6D46]" />;
      case 'network':
        return <HeartHandshake className="w-6 h-6 text-[#3E5636]" />;
      default:
        return <Award className="w-6 h-6 text-[#4F6D46]" />;
    }
  };

  return (
    <section className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-2 mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-[#4F6D46]"></span>
          <span className="text-xs font-mono tracking-widest text-[#78716C] uppercase">
            RECONHECIMENTOS · {profile.networking.groupName || 'BNI'}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {badges.map((badge) => (
            <div
              key={badge.id}
              className="bg-white rounded-2xl p-6 border border-[#E7E2DA] shadow-xs hover:border-[#4F6D46]/40 hover:shadow-md transition-all duration-300 flex items-start gap-4"
            >
              <div className="w-12 h-12 rounded-xl bg-[#F5EFE6] border border-[#E8DFC8] flex items-center justify-center shrink-0">
                {getIcon(badge.icon)}
              </div>
              <div className="space-y-1">
                <h3 className="text-base font-bold text-[#292524] tracking-tight">
                  {badge.title}
                </h3>
                <p className="text-xs text-[#665E55] leading-relaxed">
                  {badge.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
