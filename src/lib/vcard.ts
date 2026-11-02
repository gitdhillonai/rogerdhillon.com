// vCard 3.0 builder (skills-library: platform/vcard-contact-export).
export type VCardContact = {
  name: string;
  org?: string;
  title?: string;
  email?: string;
  phone?: string;
  url?: string;
  urls?: { type: string; url: string }[];
  note?: string;
};

export const escapeText = (v: string) =>
  v.replace(/\\/g, '\\\\').replace(/\r?\n/g, '\\n').replace(/,/g, '\\,').replace(/;/g, '\;');

/** Fold at 75 octets without splitting a UTF-8 sequence; continuation lines start with a space. */
export function fold(line: string): string {
  const encoder = new TextEncoder();
  const out: string[] = [];
  let cur = '';
  let bytes = 0;
  for (const ch of line) {
    const b = encoder.encode(ch).length;
    if (bytes + b > 75) {
      out.push(cur);
      cur = ' ';
      bytes = 1;
    }
    cur += ch;
    bytes += b;
  }
  out.push(cur);
  return out.join('\r\n');
}

export function buildVCard(c: VCardContact): string {
  const parts = c.name.trim().split(/\s+/);
  const family = parts.length > 1 ? parts.pop()! : '';
  const given = parts.shift() ?? '';
  const lines = [
    'BEGIN:VCARD',
    'VERSION:3.0',
    `FN:${escapeText(c.name)}`,
    `N:${[family, given, parts.join(' '), '', ''].map(escapeText).join(';')}`,
  ];
  if (c.org) lines.push(`ORG:${escapeText(c.org)}`);
  if (c.title) lines.push(`TITLE:${escapeText(c.title)}`);
  if (c.email) lines.push(`EMAIL;TYPE=INTERNET:${c.email}`);
  if (c.phone) lines.push(`TEL;TYPE=CELL,VOICE:${c.phone}`);
  if (c.url) lines.push(`URL:${c.url}`);
  for (const u of c.urls ?? []) lines.push(`URL;TYPE=${u.type.replace(/[^A-Za-z0-9-]/g, '')}:${u.url}`);
  if (c.note) lines.push(`NOTE:${escapeText(c.note)}`);
  lines.push('END:VCARD');
  return lines.map(fold).join('\r\n') + '\r\n';
}
