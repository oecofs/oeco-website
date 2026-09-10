import { ProfileData } from '../types/bni';

export function generateVCard(profile: ProfileData): string {
  const p = profile.personal;
  const vcard = [
    'BEGIN:VCARD',
    'VERSION:3.0',
    `FN:${p.name}`,
    `ORG:${p.company}`,
    `TITLE:${p.headline}`,
    `TEL;TYPE=CELL,VOICE:${p.phone}`,
    `EMAIL;TYPE=WORK,INTERNET:${p.email}`,
    `URL:${p.websiteUrl || window.location.href}`,
    `ADR;TYPE=WORK:;;;${p.city};${p.state};;Brasil`,
    `NOTE:Networking 1a1 - ${profile.networking.groupName}. ${p.intro}`,
    'END:VCARD'
  ].join('\r\n');

  return vcard;
}

export function downloadVCardFile(profile: ProfileData) {
  const vcardString = generateVCard(profile);
  const blob = new Blob([vcardString], { type: 'text/vcard;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  const fileName = `${profile.personal.name.toLowerCase().replace(/\s+/g, '_')}_contato.vcf`;
  link.setAttribute('download', fileName);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

export function buildWhatsAppLink(phone: string, message: string): string {
  const cleanPhone = phone.replace(/\D/g, '');
  const encodedMsg = encodeURIComponent(message);
  return `https://wa.me/${cleanPhone}?text=${encodedMsg}`;
}
