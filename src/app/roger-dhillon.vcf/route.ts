import { buildVCard } from '@/lib/vcard';
import { person, SITE_URL } from '@/lib/site';

export const dynamic = 'force-static';

export function GET() {
  const body = buildVCard({
    name: person.name,
    title: person.jobTitle,
    email: person.email,
    phone: person.phoneTel,
    url: SITE_URL,
    urls: [
      { type: 'LinkedIn', url: person.linkedin },
      { type: 'Calendly', url: person.calendly },
    ],
  });
  return new Response(body, {
    headers: {
      'Content-Type': 'text/vcard; charset=utf-8',
      'Content-Disposition': 'attachment; filename="roger-dhillon.vcf"',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
