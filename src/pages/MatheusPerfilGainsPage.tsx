import React, { useState } from 'react';
import { ProfileData } from '../types/bni';
import { DEFAULT_PROFILE } from '../data/bni/defaultProfile';
import { DEFAULT_PROFILE_EN } from '../data/bni/defaultProfileEn';
import { Navbar } from '../components/bni/Navbar';
import { HeroSection } from '../components/bni/HeroSection';
import { AwardsSection } from '../components/bni/AwardsSection';
import { AboutSection } from '../components/bni/AboutSection';
import { StoryHighlightSection } from '../components/bni/StoryHighlightSection';
import { GoalsSection } from '../components/bni/GoalsSection';
import { AchievementsSection } from '../components/bni/AchievementsSection';
import { InterestsSection } from '../components/bni/InterestsSection';
import { InfluenceSection } from '../components/bni/InfluenceSection';
import { ProductsSection } from '../components/bni/ProductsSection';
import { ReferralGuideSection } from '../components/bni/ReferralGuideSection';
import { CTASection } from '../components/bni/CTASection';
import { Footer } from '../components/bni/Footer';
import { ScheduleModal } from '../components/bni/ScheduleModal';
import { ShareModal } from '../components/bni/ShareModal';

export const MatheusPerfilGainsPage: React.FC = () => {
  const [language, setLanguage] = useState<'pt' | 'en'>('pt');
  const [isShareOpen, setIsShareOpen] = useState(false);
  const [isScheduleOpen, setIsScheduleOpen] = useState(false);

  const profile: ProfileData = language === 'en' ? DEFAULT_PROFILE_EN : DEFAULT_PROFILE;

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#292524] flex flex-col font-sans selection:bg-[#4F6D46] selection:text-white">
      
      {/* Dedicated BNI Top Bar with Language Switcher */}
      <Navbar
        profile={profile}
        language={language}
        onToggleLanguage={(newLang) => setLanguage(newLang)}
        onOpenShare={() => setIsShareOpen(true)}
        onOpenSchedule={() => setIsScheduleOpen(true)}
      />

      {/* Main Flow */}
      <main className="flex-1">
        {/* 1. Hero with portrait, headline, pitch, key facts & stats bar */}
        <HeroSection
          profile={profile}
          language={language}
          onOpenSchedule={() => setIsScheduleOpen(true)}
        />

        {/* 2. Networking Recognitions & Badges */}
        <AwardsSection profile={profile} />

        {/* 3. About Me, story, hobbies & moments deck */}
        <AboutSection
          profile={profile}
          language={language}
        />

        {/* 4. Story Highlight (Adversity & transformation + quote) */}
        <StoryHighlightSection profile={profile} />

        {/* 5. Goals & Vision (Metas 01, 02, 03) */}
        <GoalsSection
          profile={profile}
          language={language}
        />

        {/* 6. Achievements: From Personal to Professional */}
        <AchievementsSection profile={profile} />

        {/* 7. What Moves Me: Personal vs Professional topics & tech stack */}
        <InterestsSection
          profile={profile}
          language={language}
        />

        {/* 8. Where I Have Influence: Spheres of contact */}
        <InfluenceSection
          profile={profile}
          language={language}
        />

        {/* 9. Core Products & Services */}
        <ProductsSection
          profile={profile}
        />

        {/* 10. How to Refer Me: Good referrals, Bad referrals & 10-Second Scripts with 1-click copy */}
        <ReferralGuideSection
          profile={profile}
          language={language}
        />

        {/* 11. Final High-Conversion CTA: "Bora marcar um 1a1?" */}
        <CTASection
          profile={profile}
          language={language}
          onOpenSchedule={() => setIsScheduleOpen(true)}
        />
      </main>

      {/* Dedicated BNI Footer */}
      <Footer
        profile={profile}
        language={language}
      />

      {/* Modals */}
      <ScheduleModal
        isOpen={isScheduleOpen}
        onClose={() => setIsScheduleOpen(false)}
        profile={profile}
        language={language}
      />

      <ShareModal
        isOpen={isShareOpen}
        onClose={() => setIsShareOpen(false)}
        profile={profile}
      />

    </div>
  );
};
