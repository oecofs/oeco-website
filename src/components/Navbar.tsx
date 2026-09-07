import React, { useState, useEffect } from 'react';
import { MessageCircle, Menu, X, ArrowUpRight } from 'lucide-react';
import { buildWhatsAppLink, DEFAULT_WHATSAPP_MESSAGES } from '../utils/whatsapp';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Dores do Canteiro', href: '#dores' },
    { label: 'O Processo', href: '#filosofia' },
    { label: 'Aliança Contábil', href: '#contabilidade' },
    { label: 'Soluções BPO', href: '#solucoes' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAF8F5]/90 backdrop-blur-md shadow-sm border-b border-[#EAE7DE] py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-[#2C1810] text-[#D1B688] flex items-center justify-center font-bold text-lg shadow-md group-hover:scale-105 transition-transform duration-200 border border-[#5C3A1A]/30">
              O
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-[#2C1810]">
                OECO
              </span>
              <span className="text-[10px] font-semibold tracking-widest text-[#6B7F5A] uppercase -mt-1">
                Financial Solutions
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-[#5C3A1A]/80 hover:text-[#2C1810] hover:scale-102 transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={buildWhatsAppLink(DEFAULT_WHATSAPP_MESSAGES.hero)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#2C1810] text-[#FAF8F5] text-xs font-semibold tracking-wide hover:bg-[#4F6D46] shadow-md hover:shadow-lg transition-all duration-300 group"
            >
              <span className="w-2 h-2 rounded-full bg-[#D1B688] animate-pulse"></span>
              <MessageCircle className="w-4 h-4 text-[#D1B688] group-hover:text-white transition-colors" />
              <span>Diagnóstico de Caixa</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl text-[#2C1810] hover:bg-[#EAE7DE] transition-colors"
            aria-label="Abrir menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 p-5 rounded-2xl bg-white/95 backdrop-blur-xl border border-[#EAE7DE] shadow-xl animate-in fade-in slide-in-from-top-3 duration-200">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-sm font-medium text-[#2C1810] hover:bg-[#FAF8F5] rounded-lg transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-3 border-t border-[#EAE7DE]">
                <a
                  href={buildWhatsAppLink(DEFAULT_WHATSAPP_MESSAGES.hero)}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#2C1810] text-white text-xs font-semibold hover:bg-[#4F6D46] transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-[#D1B688]" />
                  <span>Agendar Diagnóstico de Caixa</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
