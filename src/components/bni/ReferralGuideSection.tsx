import React, { useState } from 'react';
import { ProfileData } from '../../types/bni';
import { CheckCheck, Lightbulb, MessageCircle } from 'lucide-react';

interface ReferralGuideSectionProps {
  profile: ProfileData;
  language?: 'pt' | 'en';
}

export const ReferralGuideSection: React.FC<ReferralGuideSectionProps> = ({ profile, language = 'pt' }) => {
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const ref = profile.referrals;
  const isEn = language === 'en';
  if (!ref) return null;

  const handleCopyScript = (scriptId: string, speechText: string) => {
    navigator.clipboard.writeText(speechText);
    setCopiedId(scriptId);
    setTimeout(() => {
      setCopiedId(null);
    }, 2500);
  };

  return (
    <section id="referencias" className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white border-b border-[#EFEBE4]">
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* PART 1: The Referral Filter (Boas vs Não-referências) */}
        <div>
          {/* Header */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end mb-12">
            <div className="lg:col-span-6 space-y-2">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#4F6D46]"></span>
                <span className="text-xs font-mono tracking-widest text-[#78716C] uppercase">
                  {ref.badge || (isEn ? 'HOW TO REFER ME' : 'COMO ME REFERENCIAR')}
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-[#1C1815] leading-[1.12]">
                <span className="font-sans font-bold">{isEn ? 'The ideal ' : 'A referência '}</span>
                <span className="font-serif-italic text-[#4F6D46] block">{isEn ? 'referral for me.' : 'ideal pra mim.'}</span>
              </h2>
            </div>

            <div className="lg:col-span-6">
              <p className="text-sm sm:text-base text-[#665E55] leading-relaxed">
                {ref.subtitle}
              </p>
            </div>
          </div>

          {/* 2 Big Comparison Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Good Referrals (Olive theme) */}
            <div className="bg-[#FAFDF9] rounded-3xl p-7 sm:p-9 border-2 border-[#D5E5D0] shadow-sm relative">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#DDECD9]">
                <div className="w-8 h-8 rounded-full bg-[#4F6D46] text-white flex items-center justify-center font-bold text-sm">
                  ✓
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#2A4323] tracking-tight">
                  {isEn ? 'Great Referrals' : 'Boas referências'}
                </h3>
              </div>

              <div className="space-y-3.5">
                {ref.goodReferrals.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#4F6D46] mt-2 shrink-0"></span>
                    <p className="text-xs sm:text-sm text-[#33462E] leading-relaxed">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Bad Referrals (Neutral/Warm Gray theme) */}
            <div className="bg-[#FAF8F5] rounded-3xl p-7 sm:p-9 border border-[#E7E2DA] shadow-2xs relative">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#EAE4D9]">
                <div className="w-8 h-8 rounded-full bg-[#8C8275] text-white flex items-center justify-center font-bold text-sm">
                  ✕
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#57534E] tracking-tight">
                  {isEn ? 'Not a Good Fit' : 'Não são boas referências'}
                </h3>
              </div>

              <div className="space-y-3.5">
                {ref.badReferrals.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#A89F91] mt-2 shrink-0"></span>
                    <p className="text-xs sm:text-sm text-[#665E55] leading-relaxed">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* PART 2: Quick 10-Second Pitch Scripts */}
        <div className="pt-10 border-t border-[#EFEBE4]">
          {/* Header */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end mb-10">
            <div className="lg:col-span-7 space-y-2">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#4F6D46]"></span>
                <span className="text-xs font-mono tracking-widest text-[#78716C] uppercase">
                  {ref.scriptsBadge || (isEn ? 'QUICK SCRIPTS' : 'ROTEIRO RÁPIDO')}
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-light tracking-tight text-[#1C1815]">
                <span className="font-sans font-bold">{isEn ? 'Refer me in ' : 'Me referencie em '}</span>
                <span className="font-serif-italic text-[#634832]">{isEn ? '10 seconds.' : '10 segundos.'}</span>
              </h3>
            </div>

            <div className="lg:col-span-5">
              <p className="text-xs sm:text-sm text-[#665E55] leading-relaxed">
                {ref.scriptsSubtitle || (isEn ? 'Short conversational scripts to introduce me seamlessly.' : 'Dois roteiros rápidos pra você me referenciar na hora, sem precisar decorar nada.')}
              </p>
            </div>
          </div>

          {/* Scripts Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ref.scripts.map((script) => {
              const isCopied = copiedId === script.id;
              return (
                <div
                  key={script.id}
                  className="bg-[#FAF8F5] rounded-2xl p-6 border border-[#E7E2DA] hover:border-[#8D6E63] shadow-xs flex flex-col justify-between transition-all"
                >
                  <div className="space-y-4">
                    {/* Ação */}
                    <div>
                      <div className="text-[10px] font-mono tracking-widest text-[#8C8275] uppercase font-bold mb-1">
                        {script.actionTitle}
                      </div>
                      <p className="text-xs text-[#57534E] leading-relaxed">
                        {script.actionText}
                      </p>
                    </div>

                    {/* A Deixa */}
                    <div className="p-3 rounded-xl bg-white border border-[#EFE9DF]">
                      <div className="text-[10px] font-mono tracking-wider text-[#4F6D46] uppercase font-bold mb-1">
                        {script.triggerTitle}
                      </div>
                      <p className="text-xs sm:text-sm font-semibold text-[#1C1815] italic">
                        {script.triggerText}
                      </p>
                    </div>

                    {/* Fala sugerida */}
                    <div>
                      <div className="text-[10px] font-mono tracking-widest text-[#8C8275] uppercase mb-1">
                        {isEn ? 'WHAT TO SAY / TEXT:' : 'O QUE FALAR:'}
                      </div>
                      <p className="text-xs sm:text-sm text-[#3E3832] font-serif-italic leading-relaxed">
                        {script.speechText}
                      </p>
                    </div>
                  </div>

                  {/* Copy Button */}
                  <div className="pt-4 mt-5 border-t border-[#EAE3D9]">
                    <button
                      type="button"
                      onClick={() => handleCopyScript(script.id, script.speechText)}
                      className={`w-full py-2.5 px-3.5 rounded-xl text-xs font-semibold tracking-wide transition-all flex items-center justify-center gap-2 cursor-pointer ${
                        isCopied
                          ? 'bg-[#4F6D46] text-white shadow-xs'
                          : 'bg-white hover:bg-[#1C1917] text-[#292524] hover:text-white border border-[#DCD5C9] shadow-2xs'
                      }`}
                    >
                      {isCopied ? (
                        <>
                          <CheckCheck className="w-4 h-4 text-white" />
                          <span>{isEn ? 'Script Copied!' : 'Roteiro Copiado!'}</span>
                        </>
                      ) : (
                        <>
                          <MessageCircle className="w-4 h-4 text-[#4F6D46]" />
                          <span>{isEn ? 'Copy WhatsApp Message' : 'Copiar Mensagem do WhatsApp'}</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Golden Closing Advice */}
          {ref.closingAdvice && (
            <div className="mt-10 p-6 sm:p-7 rounded-2xl bg-[#FAF6F0] border border-[#E8DFD3] border-l-4 border-l-[#4F6D46] flex flex-col sm:flex-row items-start gap-4 shadow-2xs">
              <div className="w-10 h-10 rounded-xl bg-[#4F6D46]/10 text-[#4F6D46] flex items-center justify-center shrink-0 mt-0.5">
                <Lightbulb className="w-5 h-5" />
              </div>
              <div className="space-y-1.5 flex-1">
                <div className="text-[11px] font-mono font-bold tracking-widest text-[#4F6D46] uppercase">
                  {isEn ? 'GOLDEN RULE FOR WARM BRIDGES' : 'REGRA DE OURO DA CONEXÃO NO WHATSAPP'}
                </div>
                <p className="text-xs sm:text-sm text-[#44403C] leading-relaxed font-medium">
                  {ref.closingAdvice}
                </p>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
