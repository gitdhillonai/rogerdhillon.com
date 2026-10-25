export const SITE_URL = 'https://rogerdhillon.com';

export const person = {
  name: 'Roger Dhillon',
  jobTitle: 'VP Technology / Platform & AIOps',
  email: 'rogerdhillonjobs@gmail.com',
  phoneDisplay: '+1 307-222-8456',
  phoneTel: '+13072228456',
  linkedin: 'https://www.linkedin.com/in/rogerdhillon',
  calendly: 'https://calendly.com/rogerdhillon',
  resumePath: '/Roger-Dhillon-Resume.pdf',
} as const;

export const products = {
  scm: {
    name: 'scm.cc',
    href: 'https://scm.cc',
    demo: 'https://app.scm.cc/demo',
    summary: 'FedRAMP continuous-monitoring operations',
  },
  shipready: {
    name: 'ShipReady Metrics',
    href: 'https://shipreadymetrics.com',
    demo: 'https://shipreadymetrics.com/demo',
    measure: 'https://shipreadymetrics.com/what-we-measure',
    summary: 'AI readiness, governance, and technology-risk scoring',
  },
} as const;

export const defaultTitle = 'Roger Dhillon — VP Technology / Platform & AIOps';
export const defaultDescription =
  'Roger Dhillon — VP Technology / Platform & AIOps, open to Director+, VP, and Head of Technology, Platform, AIOps, FedRAMP, and LLMOps roles. Book a meeting, view LinkedIn, download the resume, and see scm.cc and ShipReady product demos.';

/** Public HTML routes included in sitemap.xml. Add new indexable pages here. */
export const publicPages = [
  {
    path: '/',
    title: defaultTitle,
    description: defaultDescription,
    changeFrequency: 'weekly' as const,
    priority: 1,
  },
  {
    path: '/experience',
    title: 'Experience — Platform, AIOps, FedRAMP & LLMOps',
    description:
      'Roger Dhillon experience: VP Technology / Platform & AIOps leadership across platform engineering, AIOps, regulated cloud, FedRAMP continuous monitoring, and LLMOps. Open to Director+, VP, and Head of roles.',
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  },
] as const;

export const indexNow = {
  key: 'acb24be346974b682105f0ee7c05f6db',
  keyLocation: `${SITE_URL}/acb24be346974b682105f0ee7c05f6db.txt`,
} as const;

export function absoluteUrl(path: string): string {
  if (path.startsWith('http://') || path.startsWith('https://')) return path;
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `${SITE_URL}${normalized}`;
}

export const faqs = [
  {
    question: 'What roles is Roger Dhillon open to?',
    answer:
      'Director+, VP, and Head of Technology, Platform, AIOps, FedRAMP, and LLMOps roles at product companies and non-tech firms that need production AI, platform, and reliability leadership.',
  },
  {
    question: 'How can I contact Roger or book an interview?',
    answer:
      'Email rogerdhillonjobs@gmail.com, call +1 307-222-8456, or schedule on Calendly at calendly.com/rogerdhillon. LinkedIn is linkedin.com/in/rogerdhillon.',
  },
  {
    question: 'What are scm.cc and ShipReady Metrics?',
    answer:
      'They are products Roger built and ships, not employers. scm.cc is FedRAMP continuous-monitoring operations (live demo at app.scm.cc/demo). ShipReady Metrics scores AI readiness, governance, and technology risk (live demo at shipreadymetrics.com/demo).',
  },
  {
    question: 'Where is the resume?',
    answer:
      'The current resume is a public PDF at rogerdhillon.com/Roger-Dhillon-Resume.pdf.',
  },
] as const;
