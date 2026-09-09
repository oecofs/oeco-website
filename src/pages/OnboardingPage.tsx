import React from 'react';
import { OnboardingSection } from '../components/OnboardingSection';
import { FaqSection } from '../components/FaqSection';
import { CtaFooterSection } from '../components/CtaFooterSection';

export const OnboardingPage: React.FC = () => {
  return (
    <div className="flex flex-col pt-16 sm:pt-20">
      <OnboardingSection />
      <FaqSection />
      <CtaFooterSection />
    </div>
  );
};
