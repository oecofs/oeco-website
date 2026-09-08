import React from 'react';
import { Handshake, FileSpreadsheet, Calculator, CheckCircle2, ArrowRightLeft } from 'lucide-react';

export const AccountingPartnerSection: React.FC = () => {
  return (
    <section id="contabilidade" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 mb-3">
            <Handshake className="w-5 h-5 text-[#4F6D46]" />
            <span className="text-xs font-mono font-bold tracking-widest text-[#4F6D46] uppercase">
              ALIANÇA &amp; COMPLEMENTARIDADE
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#2C1810] tracking-tight mb-5 leading-tight">
            Trabalhamos ao lado da sua contabilidade, <br />
            <span className="text-[#5C3A1A] underline decoration-[#D1B688]/70 underline-offset-8">
              não no lugar dela.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-[#5C3A1A]/85 leading-relaxed">
            Uma gestão financeira eficiente não concorre com a contabilidade: elas se potencializam. O seu contador cuida da legalidade fiscal e tributária; nós cuidamos do oxigênio e da estratégia diária do seu caixa.
          </p>
        </div>

        {/* 2 Roles Comparison Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
          
          {/* Contador Card */}
          <div className="rounded-3xl p-8 sm:p-10 bg-white/90 border border-[#EAE7DE] shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-3 mb-6">
                <span className="text-xs font-mono font-bold tracking-wider text-[#5C3A1A] uppercase bg-[#FAF8F5] px-4 py-1.5 rounded-lg border border-[#EAE7DE]">
                  CONFORMIDADE &amp; TRIBUTOS
                </span>
                <Calculator className="w-7 h-7 text-[#5C3A1A]/70" />
              </div>

              <h3 className="text-2xl font-bold text-[#2C1810] mb-3">
                O que o seu Contador faz (e faz com excelência):
              </h3>
              <p className="text-sm sm:text-base text-[#5C3A1A]/80 mb-8 leading-relaxed">
                Garante que a sua empresa cumpra todas as exigências do Fisco com máxima segurança jurídica.
              </p>

              <ul className="space-y-4 mb-8 text-sm sm:text-base text-[#2C1810]/90 font-medium">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#D1B688] shrink-0 mt-0.5" />
                  <span>Cálculo de impostos e emissão de guias fiscais (DAS, ICMS, ISS, IRPJ).</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#D1B688] shrink-0 mt-0.5" />
                  <span>Balanço Patrimonial, DRE Contábil oficial e livros fiscais.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#D1B688] shrink-0 mt-0.5" />
                  <span>Envio de obrigações acessórias federais, estaduais e municipais.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#D1B688] shrink-0 mt-0.5" />
                  <span>Folha de pagamento formal, eSocial e rotinas trabalhistas.</span>
                </li>
              </ul>
            </div>

            <div className="pt-5 border-t border-[#EAE7DE] text-sm text-[#5C3A1A]/80 font-medium">
              Papel indispensável para a segurança fiscal e societária da sua construtora.
            </div>
          </div>

          {/* OECO Card (Highlighted) */}
          <div className="rounded-3xl p-8 sm:p-10 bg-[#1C1815] text-[#FAF8F5] border-2 border-[#D1B688]/50 shadow-xl relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-72 h-72 bg-[#4F6D46]/15 rounded-full blur-2xl pointer-events-none -mr-16 -mt-16"></div>

            <div className="relative z-10">
              <div className="flex items-center justify-between gap-3 mb-6">
                <span className="text-xs font-mono font-bold tracking-wider text-[#D1B688] uppercase bg-[#FAF8F5]/10 px-4 py-1.5 rounded-lg border border-[#D1B688]/40">
                  OPERAÇÃO &amp; ESTRATÉGIA DE CAIXA
                </span>
                <FileSpreadsheet className="w-7 h-7 text-[#D1B688]" />
              </div>

              <h3 className="text-2xl font-bold text-[#FAF8F5] mb-3">
                O que a OECO assume no seu dia a dia:
              </h3>
              <p className="text-sm sm:text-base text-[#FAF8F5]/80 mb-8 leading-relaxed">
                Entra na trincheira da sua operação para cuidar da rotina de contas e proteger o lucro real dos seus contratos.
              </p>

              <ul className="space-y-4 mb-8 text-sm sm:text-base text-[#FAF8F5]/90 font-medium">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#D1B688] shrink-0 mt-0.5" />
                  <span>Gestão diária de contas a pagar, contas a receber e conciliação bancária.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#D1B688] shrink-0 mt-0.5" />
                  <span>Planejamento de fluxo de caixa futuro e visão de Orçado vs. Realizado por obra.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#D1B688] shrink-0 mt-0.5" />
                  <span>Cronograma financeiro de compras, formalização de aditivos e cobrança de retenções.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#D1B688] shrink-0 mt-0.5" />
                  <span>Envio de informações 100% organizadas e conciliadas para a contabilidade fechar o mês sem atritos.</span>
                </li>
              </ul>
            </div>

            <div className="pt-5 border-t border-[#FAF8F5]/15 text-sm text-[#D1B688] font-semibold relative z-10 flex items-center gap-2.5">
              <ArrowRightLeft className="w-4 h-4 shrink-0" />
              <span>O contador do seu negócio trabalha muito mais tranquilo quando a OECO está na operação.</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
