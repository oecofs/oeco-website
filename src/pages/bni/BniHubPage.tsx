import React from 'react';
import { Link } from 'react-router-dom';
import { User, Target, ArrowRight, ShieldCheck } from 'lucide-react';

export const BniHubPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#292524] flex flex-col font-sans selection:bg-[#CF2030] selection:text-white">
      {/* Top minimal bar */}
      <header className="w-full border-b border-[#E7DFD5] bg-[#FAF8F5]/90 backdrop-blur-md sticky top-0 z-30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <span className="font-serif font-bold text-xl tracking-tight text-[#1C1815] group-hover:text-[#CF2030] transition-colors">
              OECO
            </span>
            <span className="text-xs font-mono tracking-widest text-[#8C8275] uppercase pl-2 border-l border-[#D7CEC3]">
              BNI
            </span>
          </Link>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#CF2030]"></span>
            <span className="text-xs font-mono font-medium text-[#8C8275] tracking-wider uppercase">
              Espaço Membro
            </span>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="flex-1 flex flex-col justify-center items-center px-4 sm:px-6 py-12 sm:py-16">
        <div className="max-w-2xl w-full text-center">
          
          {/* Tag */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#F2ECE4] border border-[#E2DAD0] text-[#6E6359] text-xs font-mono uppercase tracking-wider mb-6">
            <ShieldCheck className="w-3.5 h-3.5 text-[#CF2030]" />
            <span>Matheus Marques · BPO Financeiro</span>
          </div>

          {/* Welcome Title */}
          <h1 className="text-3xl sm:text-4xl font-light text-[#1C1815] tracking-tight leading-tight mb-4">
            Bem-vindo ao meu <span className="font-serif italic font-normal text-[#CF2030]">espaço BNI</span>
          </h1>

          {/* Welcoming Text */}
          <p className="text-base sm:text-lg text-[#665D52] font-normal leading-relaxed mb-10 max-w-xl mx-auto">
            Preparei este ambiente para que você conheça melhor a minha história pessoal e tenha em mãos todas as informações estratégicas para a nossa reunião de 1 a 1.
          </p>

          {/* Two Minimalist Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-left mb-10">
            
            {/* Card 1: Biografia */}
            <div className="bg-[#FFFFFF] border border-[#E7DFD5] rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-[#CF2030]/40 transition-all flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#FAF6F0] border border-[#E7DFD5] flex items-center justify-center text-[#1C1815] mb-4">
                  <User className="w-5 h-5 text-[#8C8275]" />
                </div>
                <h2 className="text-xl font-medium text-[#1C1815] mb-1">
                  Biografia
                </h2>
                <p className="text-xs text-[#8C8275] font-mono uppercase tracking-wider mb-6">
                  História, propósito & trajetória
                </p>
              </div>

              <Link
                to="/bni/biografia"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#CF2030] text-white font-medium text-sm hover:bg-[#B51A29] active:scale-[0.99] transition-all shadow-sm"
              >
                <span>Ver Biografia</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Card 2: Perfil GAINS */}
            <div className="bg-[#FFFFFF] border border-[#E7DFD5] rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-[#CF2030]/40 transition-all flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#FAF6F0] border border-[#E7DFD5] flex items-center justify-center text-[#1C1815] mb-4">
                  <Target className="w-5 h-5 text-[#CF2030]" />
                </div>
                <h2 className="text-xl font-medium text-[#1C1815] mb-1">
                  Perfil GAINS
                </h2>
                <p className="text-xs text-[#8C8275] font-mono uppercase tracking-wider mb-6">
                  Metas, conexões & referências
                </p>
              </div>

              <Link
                to="/bni/perfil-gains"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#CF2030] text-white font-medium text-sm hover:bg-[#B51A29] active:scale-[0.99] transition-all shadow-sm"
              >
                <span>Acessar Perfil GAINS</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

          </div>

          {/* Subtext info */}
          <div className="text-xs text-[#A89F91] font-mono tracking-wide">
            OECO FINANCIAL SOLUTIONS · BNI RESPEITO
          </div>

        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-[#E7DFD5] py-6 text-center text-xs text-[#8C8275] font-mono">
        © {new Date().getFullYear()} Matheus Marques · Oeco Financial Solutions
      </footer>
    </div>
  );
};
