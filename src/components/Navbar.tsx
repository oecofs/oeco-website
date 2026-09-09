import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MessageCircle, Menu, X, ArrowUpRight, Leaf, Sparkles } from 'lucide-react';
import { buildWhatsAppLink, DEFAULT_WHATSAPP_MESSAGES } from '../utils/whatsapp';
import { useDiagnosticModal } from '../context/DiagnosticModalContext';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHistoryPage = location.pathname === '/historia';
  const { openModal } = useDiagnosticModal();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Início', href: '/' },
    { label: 'Nossa História', href: '/historia', isSpecial: true },
    { label: 'Dores do Canteiro', href: '/#dores' },
    { label: 'O Processo', href: '/#filosofia' },
    { label: 'Aliança Contábil', href: '/#contabilidade' },
    { label: 'Soluções BPO', href: '/#solucoes' },
    { label: 'Onboarding', href: '/#onboarding' },
    { label: 'FAQ', href: '/#faq' },
  ];

  const handleCtaClick = (e: React.MouseEvent) => {
    if (!isHistoryPage) {
      e.preventDefault();
      openModal();
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? isHistoryPage 
            ? 'bg-[#112010]/90 backdrop-blur-md shadow-md border-b border-[#D1B688]/20 py-3.5'
            : 'bg-[#FAF8F5]/90 backdrop-blur-md shadow-sm border-b border-[#EAE7DE] py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Official Sublogo (Apenas OECO) */}
          <Link to="/" className="flex items-center group py-1">
            <img
              src={isHistoryPage ? '/images/brand/sublogo-oeco-gold.png?v=3' : '/images/brand/sublogo-oeco-dark.png?v=3'}
              alt="OECO"
              className="h-8 sm:h-9 w-auto object-contain transition-transform duration-200 group-hover:scale-102"
            />
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-5">
            {navLinks.map((link) => {
              const isLinkActive = location.pathname === link.href;
              return (
                <Link
                  key={link.label}
                  to={link.href}
                  className={`text-sm font-medium transition-all duration-200 flex items-center gap-1.5 ${
                    link.isSpecial
                      ? isHistoryPage
                        ? 'text-[#D1B688] font-bold bg-[#D1B688]/15 px-3 py-1.5 rounded-full border border-[#D1B688]/30'
                        : 'text-[#4F6D46] font-bold bg-[#4F6D46]/10 px-3 py-1.5 rounded-full border border-[#4F6D46]/20 hover:bg-[#4F6D46]/20'
                      : isHistoryPage
                        ? isLinkActive
                          ? 'text-[#D1B688] font-bold'
                          : 'text-[#FAF8F5]/80 hover:text-[#FAF8F5]'
                        : isLinkActive
                          ? 'text-[#2C1810] font-bold'
                          : 'text-[#5C3A1A]/80 hover:text-[#2C1810]'
                  }`}
                >
                  {link.isSpecial && <Leaf className="w-3.5 h-3.5" />}
                  <span>{link.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Right Action CTA */}
          <div className="hidden sm:flex items-center gap-3">
            {isHistoryPage ? (
              <a
                href={buildWhatsAppLink(DEFAULT_WHATSAPP_MESSAGES.history)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold tracking-wide shadow-md hover:shadow-lg transition-all duration-300 group bg-[#D1B688] text-[#112010] hover:bg-[#FAF8F5]"
              >
                <span className="w-2 h-2 rounded-full animate-pulse bg-[#112010]"></span>
                <MessageCircle className="w-4 h-4 text-[#112010]" />
                <span>Conversar com Matheus</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            ) : (
              <button
                onClick={() => openModal()}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold tracking-wide shadow-md hover:shadow-lg transition-all duration-300 group bg-[#2C1810] text-[#FAF8F5] hover:bg-[#4F6D46]"
              >
                <span className="w-2 h-2 rounded-full animate-pulse bg-[#D1B688]"></span>
                <Sparkles className="w-4 h-4 text-[#D1B688] group-hover:text-white" />
                <span>Diagnóstico de Caixa</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`lg:hidden p-2 rounded-xl transition-colors ${
              isHistoryPage
                ? 'text-[#FAF8F5] hover:bg-[#1B2E18]'
                : 'text-[#2C1810] hover:bg-[#EAE7DE]'
            }`}
            aria-label="Abrir menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className={`lg:hidden mt-3 p-5 rounded-2xl backdrop-blur-xl border shadow-xl animate-in fade-in slide-in-from-top-3 duration-200 ${
            isHistoryPage
              ? 'bg-[#112010]/95 border-[#D1B688]/30 text-[#FAF8F5]'
              : 'bg-white/95 border-[#EAE7DE] text-[#2C1810]'
          }`}>
            <div className="flex flex-col gap-2.5">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors flex items-center gap-2 ${
                    link.isSpecial
                      ? isHistoryPage
                        ? 'bg-[#D1B688]/20 text-[#D1B688] font-bold'
                        : 'bg-[#4F6D46]/10 text-[#4F6D46] font-bold'
                      : isHistoryPage
                        ? 'hover:bg-[#1B2E18] text-[#FAF8F5]/90'
                        : 'hover:bg-[#FAF8F5] text-[#2C1810]'
                  }`}
                >
                  {link.isSpecial && <Leaf className="w-4 h-4" />}
                  <span>{link.label}</span>
                </Link>
              ))}
              <div className={`pt-3 border-t mt-1 ${isHistoryPage ? 'border-[#D1B688]/20' : 'border-[#EAE7DE]'}`}>
                {isHistoryPage ? (
                  <a
                    href={buildWhatsAppLink(DEFAULT_WHATSAPP_MESSAGES.history)}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-semibold transition-colors bg-[#D1B688] text-[#112010] hover:bg-[#FAF8F5]"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Conversar com Matheus</span>
                  </a>
                ) : (
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      openModal();
                    }}
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-semibold transition-colors bg-[#2C1810] text-white hover:bg-[#4F6D46]"
                  >
                    <Sparkles className="w-4 h-4 text-[#D1B688]" />
                    <span>Agendar Diagnóstico de Caixa</span>
                  </button>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
