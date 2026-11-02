// CSP violation collector: logs one compact line per report (visible in Vercel runtime logs).
// Accepts legacy application/csp-report and Reporting API application/reports+json bodies.
export const dynamic = 'force-dynamic';

const MAX_BODY = 16 * 1024;

type Report = Record<string, unknown>;

function normalize(body: unknown): Report[] {
  if (Array.isArray(body)) return body.map((r) => ((r as Report)?.body ?? r) as Report);
  if (body && typeof body === 'object' && 'csp-report' in body) return [(body as Report)['csp-report'] as Report];
  return [];
}

const pick = (r: Report, ...keys: string[]) => {
  for (const k of keys) if (typeof r?.[k] === 'string') return (r[k] as string).slice(0, 300);
  return '';
};

export async function POST(request: Request) {
  const text = await request.text();
  if (text.length > MAX_BODY) return new Response(null, { status: 413 });
  let parsed: unknown;
  try {
    parsed = JSON.parse(text);
  } catch {
    return new Response(null, { status: 400 });
  }
  for (const r of normalize(parsed).slice(0, 20)) {
    console.warn(
      'csp-violation',
      JSON.stringify({
        directive: pick(r, 'effectiveDirective', 'effective-directive', 'violated-directive'),
        blocked: pick(r, 'blockedURL', 'blocked-uri'),
        document: pick(r, 'documentURL', 'document-uri'),
      }),
    );
  }
  return new Response(null, { status: 204 });
}
