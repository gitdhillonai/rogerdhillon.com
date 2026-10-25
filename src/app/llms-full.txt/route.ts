import { SITE_URL, absoluteUrl, faqs, person, products, publicPages } from '@/lib/site';

export const dynamic = 'force-static';

export function GET() {
  const pageLines = publicPages
    .map((page) => `- ${absoluteUrl(page.path)} — ${page.title}`)
    .join('\n');

  const faqLines = faqs.map((faq) => `Q: ${faq.question}\nA: ${faq.answer}`).join('\n\n');

  const body = `# Roger Dhillon — career hub (full)

This file is an honest machine-readable summary of ${SITE_URL}. It is not a resume substitute and does not claim awards, current employers, or affiliation with Pictage Inc.

## Who

Roger Dhillon is a technology executive focused on platform engineering, AIOps, regulated cloud delivery, and putting AI into production with governance and reliability.

Headline: ${person.jobTitle}
Open to: Director+, VP, and Head of Technology, Platform, AIOps, FedRAMP, and LLMOps roles at product companies and non-tech firms.

## Contact (already public on the site)

- Email: ${person.email}
- Phone: ${person.phoneDisplay}
- Calendly: ${person.calendly}
- LinkedIn: ${person.linkedin}
- Resume: ${absoluteUrl(person.resumePath)}

## Public pages

${pageLines}

## Products Roger ships

These are his products, not employers:

- ${products.scm.name} — ${products.scm.summary}. Site: ${products.scm.href}. Demo: ${products.scm.demo}
- ${products.shipready.name} — ${products.shipready.summary}. Site: ${products.shipready.href}. Demo: ${products.shipready.demo}

Other public projects mentioned in the resume include persoona.ai, pictage.ai (a photography workflow product, not Pictage Inc), and gurdwaras.com.

## Experience highlights (from the public resume)

- VP Technology, Neilson Financial Services (Aug 2025–Aug 2026): 60-person platform and technology-support organization; production AIOps-style alert routing; AI governance inside GRC; FCA-regulated platform modernization.
- Sr. Director, Production Engineering, Episource (acquired by Optum) (Sep 2021–Aug 2025): 80+ engineers across cloud, security, SRE, and test automation for healthcare services.
- Director, Software Engineering, MGM Studios (acquired by Amazon) (Sep 2019–Sep 2021): enterprise AWS platform engineering ahead of Amazon's announced acquisition of MGM.
- Earlier leadership and engineering roles include Freddie Mac, Fannie Mae, Walt Disney Studios, Pictage (2010–2011), Fox Interactive Media, LA Times Interactive, and Yahoo!.

## FAQ

${faqLines}

## Indexing

- Sitemap: ${SITE_URL}/sitemap.xml
- Robots: ${SITE_URL}/robots.txt
- Short LLM file: ${SITE_URL}/llms.txt
`;

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
