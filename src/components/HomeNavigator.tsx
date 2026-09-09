import React, { useEffect, useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface SlideItem {
  id: string;
  label: string;
  short: string;
}

const HOME_SLIDES: SlideItem[] = [
  { id: 'hero', label: 'Início & Proposta de Valor', short: '01' },
  { id: 'dores', label: 'Dores do Canteiro', short: '02' },
  { id: 'filosofia', label: 'Metodologia & Processo', short: '03' },
  { id: 'contabilidade', label: 'Aliança Contábil', short: '04' },
  { id: 'solucoes', label: 'Esteira de Serviços', short: '05' },
  { id: 'segmentos', label: 'Outros Segmentos', short: '06' },
  { id: 'faq', label: 'Dúvidas Frequentes', short: '07' },
  { id: 'contato', label: 'Diagnóstico & Contato', short: '08' },
];

export const HomeNavigator: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState<string>(HOME_SLIDES[0].id);

  // Monitora qual seção está visível na tela
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight * 0.35;

      for (let i = HOME_SLIDES.length - 1; i >= 0; i--) {
        const element = document.getElementById(HOME_SLIDES[i].id);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSlide(HOME_SLIDES[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Atalhos de teclado estilo apresentação (Setas Cima/Baixo e PageUp/PageDown)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement)?.tagName)) return;

      const currentIndex = HOME_SLIDES.findIndex((s) => s.id === activeSlide);

      if (e.key === 'ArrowDown' || e.key === 'PageDown') {
        if (currentIndex < HOME_SLIDES.length - 1) {
          e.preventDefault();
          scrollToSlide(HOME_SLIDES[currentIndex + 1].id);
        }
      } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
        if (currentIndex > 0) {
          e.preventDefault();
          scrollToSlide(HOME_SLIDES[currentIndex - 1].id);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeSlide]);

  const scrollToSlide = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const navOffset = 70;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - navOffset,
        behavior: 'smooth',
      });
    }
  };

  const currentIndex = HOME_SLIDES.findIndex((s) => s.id === activeSlide);

  return (
    <>
      {/* Navegador Lateral Fixo (Estilo Deck/Canva) - Desktop */}
      <aside 
        aria-label="Navegador de Seções"
        className="fixed right-4 sm:right-6 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col items-end gap-3 pointer-events-none"
      >
        <div className="bg-[#1C1815]/90 backdrop-blur-md p-2 rounded-2xl border border-[#D1B688]/30 shadow-2xl flex flex-col items-center gap-2 pointer-events-auto">
          {HOME_SLIDES.map((slide) => {
            const isActive = activeSlide === slide.id;
            return (
              <button
                key={slide.id}
                onClick={() => scrollToSlide(slide.id)}
                title={slide.label}
                className="group relative flex items-center justify-center p-1.5 focus:outline-none"
              >
                {/* Indicador visual */}
                <div
                  className={`w-2.5 rounded-full transition-all duration-300 ${
                    isActive
                      ? 'h-6 bg-[#D1B688] shadow-[0_0_8px_#D1B688]'
                      : 'h-2.5 bg-[#FAF8F5]/30 group-hover:bg-[#FAF8F5]/70'
                  }`}
                />

                {/* Tooltip flutuante com o nome da seção */}
                <span className="absolute right-7 py-1 px-3 rounded-lg bg-[#1C1815] border border-[#D1B688]/40 text-xs font-semibold text-[#FAF8F5] whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity shadow-lg">
                  {slide.label}
                </span>
              </button>
            );
          })}
        </div>
      </aside>

      {/* Controles Flutuantes de Seção (Prev / Next) no canto inferior direito */}
      <div className="fixed bottom-6 right-6 z-40 hidden sm:flex items-center gap-2 bg-[#1C1815]/90 backdrop-blur-md px-3 py-1.5 rounded-full border border-[#D1B688]/40 shadow-2xl">
        <button
          onClick={() => currentIndex > 0 && scrollToSlide(HOME_SLIDES[currentIndex - 1].id)}
          disabled={currentIndex === 0}
          className="p-1.5 text-[#FAF8F5] hover:text-[#D1B688] disabled:opacity-30 disabled:hover:text-[#FAF8F5] transition-colors focus:outline-none"
          title="Seção anterior (Seta para cima)"
        >
          <ChevronUp className="w-4 h-4" />
        </button>

        <span className="text-[11px] font-mono font-bold text-[#D1B688] px-1">
          {currentIndex + 1} / {HOME_SLIDES.length}
        </span>

        <button
          onClick={() => currentIndex < HOME_SLIDES.length - 1 && scrollToSlide(HOME_SLIDES[currentIndex + 1].id)}
          disabled={currentIndex === HOME_SLIDES.length - 1}
          className="p-1.5 text-[#FAF8F5] hover:text-[#D1B688] disabled:opacity-30 disabled:hover:text-[#FAF8F5] transition-colors focus:outline-none"
          title="Próxima seção (Seta para baixo)"
        >
          <ChevronDown className="w-4 h-4" />
        </button>
      </div>
    </>
  );
};
