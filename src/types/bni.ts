export interface ProfileData {
  personal: {
    name: string;
    headline: string;
    company: string;
    formerCompany?: string;
    intro: string;
    city: string;
    state: string;
    timezone: string;
    phone: string;
    whatsapp: string;
    email: string;
    websiteUrl: string;
    avatarUrl: string;
    avatarPosition?: string;
    avatarZoom?: number;
    instagram?: string;
    linkedin?: string;
    statusText: string;
    isAvailableFor1a1: boolean;
  };
  networking: {
    groupName: string;
    groupType: string;
    roleInGroup: string;
    yearsInGroup: number;
    businessGeneratedFormatted: string;
    businessGeneratedLabel: string;
    referencesGiven: number;
    referencesLabel: string;
    oneOnOneMeetings: number;
    oneOnOneLabel: string;
    yearsInNetwork: number;
    yearsLabel: string;
    badges: {
      id: string;
      title: string;
      subtitle: string;
      icon: string;
      color?: string;
    }[];
  };
  keyFacts: {
    label: string;
    value: string;
  }[];
  about: {
    heading: string;
    paragraphs: string[];
    storyBlocks?: {
      tag: string;
      title: string;
      content: string;
      icon?: string;
    }[];
    hobbies: {
      number: string;
      name: string;
    }[];
  };
  photos: {
    id: string;
    url: string;
    caption: string;
    subtitle?: string;
    objectPosition?: string;
    zoom?: number;
    fit?: 'cover' | 'contain';
  }[];
  transformationStory: {
    badge: string;
    title: string;
    paragraphs: string[];
    quote: string;
    quoteAuthor: string;
  };
  goals: {
    badge: string;
    title: string;
    subtitle: string;
    items: {
      number: string;
      title: string;
      description: string;
    }[];
  };
  achievements: {
    badge: string;
    title: string;
    quote: string;
    quoteAuthor: string;
    paragraphs: string[];
  };
  interests: {
    badge: string;
    title: string;
    subtitle: string;
    personalList: string[];
    professionalList: string[];
    technologies: string[];
  };
  influence: {
    badge: string;
    title: string;
    subtitle: string;
    items: {
      category: string;
      title: string;
      description?: string;
    }[];
  };
  products: {
    badge: string;
    title: string;
    subtitle: string;
    items: {
      number: string;
      title: string;
      description: string;
      highlight?: string;
      deliveryTime?: string;
      tags?: string[];
    }[];
  };
  referrals: {
    badge: string;
    title: string;
    subtitle: string;
    goodReferrals: string[];
    badReferrals: string[];
    scriptsBadge: string;
    scriptsTitle: string;
    scriptsSubtitle: string;
    scripts: {
      id: string;
      actionTitle: string;
      actionText: string;
      triggerTitle: string;
      triggerText: string;
      speechText: string;
    }[];
    closingAdvice: string;
  };
  contactCTA: {
    badge: string;
    title: string;
    titleAccent: string;
    description: string;
    whatsappButtonText: string;
    emailButtonText: string;
    footerQuote: string;
  };
}
