import React, { createContext, useContext, useEffect, useRef, useState } from 'react';

interface ElevationContextType {
  isVisible: boolean;
  direction: 'down' | 'up';
}

const ElevationContext = createContext<ElevationContextType | null>(null);

interface ElevationSectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

/**
 * Container do Ato/Slide que monitora a visibilidade na tela e a direção do scroll (down/up).
 * Distribui o estado para todos os ElevationItem filhos para sincronizar a coreografia de elevação.
 */
export const ElevationSection: React.FC<ElevationSectionProps> = ({
  children,
  className = '',
  id,
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [direction, setDirection] = useState<'down' | 'up'>('down');
  const lastScrollY = useRef(typeof window !== 'undefined' ? window.scrollY : 0);

  useEffect(() => {
    const onScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY.current + 6) {
        setDirection('down');
      } else if (currentScrollY < lastScrollY.current - 6) {
        setDirection('up');
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.08,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <ElevationContext.Provider value={{ isVisible, direction }}>
      <div ref={sectionRef} id={id} className={className}>
        {children}
      </div>
    </ElevationContext.Provider>
  );
};

// Mantém ElevationAct como alias compatível
export const ElevationAct = ElevationSection;

interface ElevationItemProps {
  children: React.ReactNode;
  className?: string;
  delay?: number; // Delay em milissegundos (ex: 0, 150, 300, 450...)
}

/**
 * Item individual que executa a transição Canva "Elevação" (Rise):
 * - Ao descer (scroll down): sobe suavemente de +48px para 0 com fade-in e escala natural.
 * - Ao subir (scroll up): desce suavemente de -48px para 0 com movimento reverso.
 * - Suporta atraso escalonado (delay) para efeito cascata em cards e elementos.
 */
export const ElevationItem: React.FC<ElevationItemProps> = ({
  children,
  className = '',
  delay = 0,
}) => {
  const context = useContext(ElevationContext);
  const itemRef = useRef<HTMLDivElement>(null);
  const [selfVisible, setSelfVisible] = useState(false);
  const [selfDirection, setSelfDirection] = useState<'down' | 'up'>('down');
  const lastScrollY = useRef(typeof window !== 'undefined' ? window.scrollY : 0);

  // Fallback se usado fora de um ElevationSection
  useEffect(() => {
    if (context) return;

    const onScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY.current + 6) {
        setSelfDirection('down');
      } else if (currentScrollY < lastScrollY.current - 6) {
        setSelfDirection('up');
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    const el = itemRef.current;
    if (!el) return () => window.removeEventListener('scroll', onScroll);

    const observer = new IntersectionObserver(
      ([entry]) => {
        setSelfVisible(entry.isIntersecting);
      },
      { threshold: 0.1, rootMargin: '0px 0px -30px 0px' }
    );
    observer.observe(el);

    return () => {
      window.removeEventListener('scroll', onScroll);
      observer.disconnect();
    };
  }, [context]);

  const isVisible = context ? context.isVisible : selfVisible;
  const direction = context ? context.direction : selfDirection;

  const transformClass = isVisible
    ? 'translate-y-0 opacity-100 scale-100'
    : direction === 'down'
    ? 'translate-y-12 opacity-0 scale-[0.98]'
    : '-translate-y-12 opacity-0 scale-[0.98]';

  return (
    <div
      ref={itemRef}
      style={{
        transitionDelay: isVisible ? `${delay}ms` : '0ms',
      }}
      className={`transition-all duration-900 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform ${transformClass} ${className}`}
    >
      {children}
    </div>
  );
};
