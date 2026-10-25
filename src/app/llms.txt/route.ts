import { SITE_URL, absoluteUrl, person, products, publicPages } from '@/lib/site';

export const dynamic = 'force-static';

export function GET() {
  const pageLines = publicPages
    .map((page) => `- [${page.title}](${absoluteUrl(page.path)}): ${page.description}`)
    .join('\n');

  const body = `# Roger Dhillon

> Career hub for Roger Dhillon, VP Technology / Platform & AIOps. Open to Director+, VP, and Head of Technology, Platform, AIOps, FedRAMP, and LLMOps roles.

Roger leads platform, cloud operations, security, and production AI work. Public products he ships (not employers): ${products.scm.name} (${products.scm.summary}) and ${products.shipready.name} (${products.shipready.summary}).

## Pages

${pageLines}

## Demos and documents

- [Resume PDF](${absoluteUrl(person.resumePath)})
- [${products.scm.name} live demo](${products.scm.demo})
- [${products.shipready.name} live demo](${products.shipready.demo})
- [What ShipReady measures](${products.shipready.measure})

## Contact

- Email: ${person.email}
- Phone: ${person.phoneDisplay}
- Calendly: ${person.calendly}
- LinkedIn: ${person.linkedin}
- Site: ${SITE_URL}

## Optional

- [Full LLM source](${SITE_URL}/llms-full.txt): longer honest summary of roles, products, and contact paths
`;

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
