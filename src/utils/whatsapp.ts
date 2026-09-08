export const OECO_PHONE = '5521973413967';

export const buildWhatsAppLink = (message: string): string => {
  return `https://wa.me/${OECO_PHONE}?text=${encodeURIComponent(message)}`;
};

export const DEFAULT_WHATSAPP_MESSAGES = {
  hero: 'Olá! Vim pelo site da OECO e gostaria de agendar um diagnóstico de caixa para a minha empresa/obra.',
  strategic: 'Olá! Tenho interesse no BPO Financeiro Estratégico da OECO para gestão de obras e projetos acima de R$ 3 milhões.',
  operational: 'Olá! Gostaria de entender mais sobre o BPO Financeiro Operacional da OECO para organizar a rotina financeira da minha empresa.',
  general: 'Olá! Gostaria de conversar com um especialista da OECO sobre gestão financeira.',
  faq: 'Olá! Li o FAQ no site da OECO e gostaria de tirar uma dúvida sobre a atuação financeira com meu negócio.',
  history: 'Olá, Matheus! Conheci a história da OECO e me identifiquei muito com a filosofia de sustentabilidade, sem atalhos e foco no processo. Gostaria de conversar sobre as finanças da minha empresa.',
};
