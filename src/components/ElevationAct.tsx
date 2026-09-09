import React, { useEffect, useRef, useState } from 'react';

interface ElevationActProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  delay?: number;
}

/**
 * Componente que aplica a transição de "Elevação" (Canva Rise):
 * - Ao avançar para baixo (scroll down), o ato sobe suavemente de baixo (+48px) para a posição neutra com fade-in.
 * - Ao retroceder para cima (scroll up), o ato surge descendo suavemente do topo (-48px) com fade-in inverso.
 */
export const ElevationAct: React.FC<ElevationActProps> = ({
  children,
  className = '',
  id,
  delay = 0,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [scrollDirection, setScrollDirection] = useState<'down' | 'up'>('down');
  const lastScrollY = useRef(typeof window !== 'undefined' ? window.scrollY : 0);

  useEffect(() => {
    const onScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY.current + 8) {
        setScrollDirection('down');
      } else if (currentScrollY < lastScrollY.current - 8) {
        setScrollDirection('up');
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          // Permite reanimar quando sai da tela para que o retorno também tenha efeito de elevação
          setIsVisible(false);
        }
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Transição Canva 'Elevação' / 'Rise' mais lenta, majestosa e fluida
  const transformClass = isVisible
    ? 'translate-y-0 opacity-100 scale-100'
    : scrollDirection === 'down'
    ? 'translate-y-16 opacity-0 scale-[0.98]'
    : '-translate-y-16 opacity-0 scale-[0.98]';

  return (
    <div
      ref={containerRef}
      id={id}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform ${transformClass} ${className}`}
    >
      {children}
    </div>
  );
};
