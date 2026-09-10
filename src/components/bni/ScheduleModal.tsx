import React, { useState } from 'react';
import { ProfileData } from '../../types/bni';
import { X, Calendar, MessageCircle, Video, Coffee } from 'lucide-react';
import { buildWhatsAppLink } from '../../utils/bniVcard';

interface ScheduleModalProps {
  isOpen: boolean;
  onClose: () => void;
  profile: ProfileData;
  language?: 'pt' | 'en';
}

export const ScheduleModal: React.FC<ScheduleModalProps> = ({
  isOpen,
  onClose,
  profile,
  language = 'pt'
}) => {
  const isEn = language === 'en';
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [dateSuggestion, setDateSuggestion] = useState(isEn ? 'This week' : 'Esta semana');
  const [timeSuggestion, setTimeSuggestion] = useState(isEn ? 'Morning (09am - 11am)' : 'Manhã (09h - 11h)');
  const [format, setFormat] = useState(isEn ? 'Google Meet / Online' : 'Google Meet / Online');
  const [topic, setTopic] = useState(isEn ? 'Learn about our businesses & explore referral synergies' : 'Conhecer melhor os negócios e trocar referências');

  if (!isOpen) return null;

  const generatedMessage = isEn
    ? `Hello ${profile.personal.name}!
I'm ${name || '[Your Name]'}${company ? ` from ${company}` : ''} (member/partner from ${profile.networking.groupName}).

I would love to schedule a 1-on-1 meeting with you:
📌 Agenda: ${topic}
🗓 Suggested timing: ${dateSuggestion}
⏰ Preferred time: ${timeSuggestion}
📍 Format: ${format}

What is the best day and time for us to connect?`
    : `Olá ${profile.personal.name}!
Sou o(a) ${name || '[Seu Nome]'}${company ? ` da ${company}` : ''} (membro/parceiro do ${profile.networking.groupName}).

Gostaria de agendar um 1a1 com você para:
📌 Pauta: ${topic}
🗓 Sugestão de data: ${dateSuggestion}
⏰ Horário: ${timeSuggestion}
📍 Formato: ${format}

Qual o seu melhor dia e horário para alinharmos?`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const link = buildWhatsAppLink(profile.personal.whatsapp, generatedMessage);
    window.open(link, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-[#FAF8F5] w-full max-w-lg rounded-3xl shadow-2xl border border-[#D8CEBF] overflow-hidden flex flex-col">
        
        {/* Header */}
        <div className="px-6 py-4 bg-[#1C1815] text-white flex items-center justify-between border-b border-[#2E2824]">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-[#86EFAC]" />
            <h3 className="text-base font-bold">
              {isEn ? `Schedule 1-on-1 with ${profile.personal.name.split(' ')[0]}` : `Marcar 1a1 com ${profile.personal.name.split(' ')[0]}`}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1 text-[#A89F91] hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4 text-sm text-[#292524]">
          <p className="text-xs text-[#665E55] leading-relaxed">
            {isEn
              ? `Fill in the fields below to generate an intro message ready to send directly to ${profile.personal.name.split(' ')[0]}'s WhatsApp.`
              : `Preencha os campos abaixo para gerar uma mensagem personalizada pronta para enviar direto no WhatsApp do ${profile.personal.name.split(' ')[0]}.`}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-[11px] font-mono font-bold text-[#57534E] uppercase mb-1">
                {isEn ? 'Your Name' : 'Seu Nome'}
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={isEn ? "Ex: Robert Miller" : "Ex: Roberto Lima"}
                className="w-full px-3 py-2 rounded-xl bg-white border border-[#D5CCC0] focus:border-[#4F6D46] outline-hidden text-xs"
              />
            </div>

            <div>
              <label className="block text-[11px] font-mono font-bold text-[#57534E] uppercase mb-1">
                {isEn ? 'Your Company / Field' : 'Sua Empresa / Área'}
              </label>
              <input
                type="text"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                placeholder={isEn ? "Ex: Apex Consulting" : "Ex: Alfa Contabilidade"}
                className="w-full px-3 py-2 rounded-xl bg-white border border-[#D5CCC0] focus:border-[#4F6D46] outline-hidden text-xs"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-[11px] font-mono font-bold text-[#57534E] uppercase mb-1">
                {isEn ? 'Preferred Timing' : 'Sugestão de Período'}
              </label>
              <select
                value={dateSuggestion}
                onChange={(e) => setDateSuggestion(e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-white border border-[#D5CCC0] text-xs font-medium"
              >
                {isEn ? (
                  <>
                    <option value="Today">Today</option>
                    <option value="Tomorrow">Tomorrow</option>
                    <option value="This week">This week</option>
                    <option value="Next week">Next week</option>
                    <option value="Next Tuesday">Next Tuesday</option>
                    <option value="Next Thursday">Next Thursday</option>
                  </>
                ) : (
                  <>
                    <option value="Hoje">Hoje</option>
                    <option value="Amanhã">Amanhã</option>
                    <option value="Esta semana">Esta semana</option>
                    <option value="Próxima semana">Próxima semana</option>
                    <option value="Próxima terça-feira">Próxima terça-feira</option>
                    <option value="Próxima quinta-feira">Próxima quinta-feira</option>
                  </>
                )}
              </select>
            </div>

            <div>
              <label className="block text-[11px] font-mono font-bold text-[#57534E] uppercase mb-1">
                {isEn ? 'Preferred Time' : 'Horário Preferido'}
              </label>
              <select
                value={timeSuggestion}
                onChange={(e) => setTimeSuggestion(e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-white border border-[#D5CCC0] text-xs font-medium"
              >
                {isEn ? (
                  <>
                    <option value="Morning (08am - 10am)">Morning (08am - 10am)</option>
                    <option value="Morning (10am - 12pm)">Morning (10am - 12pm)</option>
                    <option value="Lunch / Coffee">Lunch / Coffee</option>
                    <option value="Afternoon (02pm - 04pm)">Afternoon (02pm - 04pm)</option>
                    <option value="Afternoon (04pm - 06pm)">Afternoon (04pm - 06pm)</option>
                    <option value="End of day (06pm+)">End of day (06pm+)</option>
                  </>
                ) : (
                  <>
                    <option value="Manhã (08h às 10h)">Manhã (08h às 10h)</option>
                    <option value="Manhã (10h às 12h)">Manhã (10h às 12h)</option>
                    <option value="Almoço / Café">Almoço / Café</option>
                    <option value="Tarde (14h às 16h)">Tarde (14h às 16h)</option>
                    <option value="Tarde (16h às 18h)">Tarde (16h às 18h)</option>
                    <option value="Final do dia (18h+)">Final do dia (18h+)</option>
                  </>
                )}
              </select>
            </div>
          </div>

          <div>
            <label className="block text-[11px] font-mono font-bold text-[#57534E] uppercase mb-1">
              {isEn ? 'Meeting Format' : 'Formato da Reunião'}
            </label>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setFormat(isEn ? 'Google Meet / Video Call' : 'Google Meet / Videochamada')}
                className={`p-2.5 rounded-xl border text-xs font-medium flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                  format.includes('Meet') || format.includes('Video')
                    ? 'bg-[#1C1815] text-white border-[#1C1815]'
                    : 'bg-white text-[#57534E] border-[#D5CCC0]'
                }`}
              >
                <Video className="w-3.5 h-3.5" />
                <span>{isEn ? 'Online (Meet/Zoom)' : 'Online (Meet/Zoom)'}</span>
              </button>

              <button
                type="button"
                onClick={() => setFormat(isEn ? 'In-Person / Coffee' : 'Presencial / Café')}
                className={`p-2.5 rounded-xl border text-xs font-medium flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                  format.includes('Presencial') || format.includes('Person')
                    ? 'bg-[#1C1815] text-white border-[#1C1815]'
                    : 'bg-white text-[#57534E] border-[#D5CCC0]'
                }`}
              >
                <Coffee className="w-3.5 h-3.5" />
                <span>{isEn ? 'In-Person / Coffee' : 'Presencial / Café'}</span>
              </button>
            </div>
          </div>

          <div>
            <label className="block text-[11px] font-mono font-bold text-[#57534E] uppercase mb-1">
              {isEn ? '1-on-1 Agenda / Main Topic' : 'Pauta Principal do 1a1'}
            </label>
            <input
              type="text"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              placeholder={isEn ? "Ex: Cross-border financial operations..." : "Ex: Trocar referências na área de saúde..."}
              className="w-full px-3 py-2 rounded-xl bg-white border border-[#D5CCC0] text-xs"
            />
          </div>

          {/* Preview Box */}
          <div className="p-3 bg-[#F0EBE3] rounded-xl border border-[#E0D7C9] text-xs text-[#57534E] space-y-1">
            <span className="font-mono font-bold uppercase text-[10px] text-[#8C8275]">
              {isEn ? 'WhatsApp Message Preview:' : 'Prévia no WhatsApp:'}
            </span>
            <p className="font-mono text-[11px] leading-relaxed line-clamp-3 italic">
              "{generatedMessage}"
            </p>
          </div>

          {/* Action */}
          <div className="pt-2 flex items-center gap-2">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 py-2.5 rounded-xl bg-transparent hover:bg-[#EAE4D9] text-xs font-semibold text-[#57534E] cursor-pointer"
            >
              {isEn ? 'Cancel' : 'Cancelar'}
            </button>
            <button
              type="submit"
              className="flex-2 py-2.5 rounded-xl bg-[#1C1917] hover:bg-[#2F2925] text-white text-xs font-bold flex items-center justify-center gap-2 shadow-md cursor-pointer active:scale-98"
            >
              <MessageCircle className="w-4 h-4 text-[#86EFAC]" />
              <span>{isEn ? 'Send via WhatsApp' : 'Enviar via WhatsApp'}</span>
            </button>
          </div>
        </form>

      </div>
    </div>
  );
};
