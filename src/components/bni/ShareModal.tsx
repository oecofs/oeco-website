import React, { useState } from 'react';
import { ProfileData } from '../../types/bni';
import { X, Copy, Check, Share2, Download, MessageCircle } from 'lucide-react';
import { downloadVCardFile } from '../../utils/bniVcard';

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
  profile: ProfileData;
}

export const ShareModal: React.FC<ShareModalProps> = ({
  isOpen,
  onClose,
  profile
}) => {
  const [copied, setCopied] = useState(false);
  const p = profile.personal;
  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';

  if (!isOpen) return null;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(currentUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleShareWhatsApp = () => {
    const text = `Conheça o perfil de networking do ${p.name} (${profile.networking.groupName}):\n${currentUrl}\n\n"${p.headline}"`;
    const shareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`;
    window.open(shareUrl, '_blank');
  };

  const qrApiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(currentUrl)}&color=28-21-17&bgcolor=250-248-245`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-[#FAF8F5] w-full max-w-md rounded-3xl shadow-2xl border border-[#D8CEBF] overflow-hidden flex flex-col">
        
        {/* Header */}
        <div className="px-6 py-4 bg-[#1C1815] text-white flex items-center justify-between border-b border-[#2E2824]">
          <div className="flex items-center gap-2">
            <Share2 className="w-4 h-4 text-[#86EFAC]" />
            <h3 className="text-base font-bold">Compartilhar Perfil de Networking</h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1 text-[#A89F91] hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6 text-center text-sm text-[#292524]">
          
          {/* QR Code Container */}
          <div className="flex flex-col items-center">
            <div className="p-4 bg-white rounded-2xl border-2 border-[#E7E2DA] shadow-xs inline-block">
              <img
                src={qrApiUrl}
                alt={`QR Code Perfil ${p.name}`}
                className="w-44 h-44 object-contain rounded-lg"
              />
            </div>
            <p className="text-[11px] font-mono text-[#78716C] uppercase tracking-wider mt-3">
              Aponte a câmera para abrir no celular
            </p>
          </div>

          {/* Profile Name info */}
          <div className="space-y-1">
            <h4 className="text-base font-bold text-[#1C1815]">{p.name}</h4>
            <p className="text-xs text-[#665E55]">{p.headline} · {profile.networking.groupName}</p>
          </div>

          {/* Action Buttons */}
          <div className="space-y-2.5">
            {/* Copy Link */}
            <button
              type="button"
              onClick={handleCopyLink}
              className="w-full py-3 px-4 rounded-xl bg-white hover:bg-[#F5EFE6] border border-[#D8CEBF] text-xs font-bold text-[#292524] flex items-center justify-center gap-2 shadow-2xs transition-all cursor-pointer"
            >
              {copied ? <Check className="w-4 h-4 text-[#4F6D46]" /> : <Copy className="w-4 h-4 text-[#8D6E63]" />}
              <span>{copied ? 'Link Copiado para a Área de Transferência!' : 'Copiar Link do Perfil'}</span>
            </button>

            {/* Share to WhatsApp */}
            <button
              type="button"
              onClick={handleShareWhatsApp}
              className="w-full py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#20BE5C] text-white text-xs font-bold flex items-center justify-center gap-2 shadow-xs transition-all cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Enviar no Grupo / WhatsApp</span>
            </button>

            {/* Download vCard */}
            <button
              type="button"
              onClick={() => downloadVCardFile(profile)}
              className="w-full py-3 px-4 rounded-xl bg-[#1C1815] hover:bg-[#332C26] text-white text-xs font-bold flex items-center justify-center gap-2 shadow-xs transition-all cursor-pointer"
            >
              <Download className="w-4 h-4 text-[#86EFAC]" />
              <span>Salvar Contato no Celular (.vcf)</span>
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
