import { SITE_URL, absoluteUrl, defaultDescription, faqs, person, products } from './site';

const personId = `${SITE_URL}/#person`;
const websiteId = `${SITE_URL}/#website`;

export function personJsonLd() {
  return {
    '@type': 'Person',
    '@id': personId,
    name: person.name,
    url: SITE_URL,
    jobTitle: person.jobTitle,
    email: `mailto:${person.email}`,
    telephone: person.phoneDisplay,
    description: defaultDescription,
    sameAs: [person.linkedin, person.calendly, products.scm.href, products.shipready.href],
  };
}

export function websiteJsonLd() {
  return {
    '@type': 'WebSite',
    '@id': websiteId,
    url: SITE_URL,
    name: person.name,
    description: defaultDescription,
    inLanguage: 'en-US',
    publisher: { '@id': personId },
  };
}

export function profilePageJsonLd(path: string, name: string, description: string) {
  return {
    '@type': 'ProfilePage',
    '@id': `${absoluteUrl(path)}#profile`,
    url: absoluteUrl(path),
    name,
    description,
    isPartOf: { '@id': websiteId },
    mainEntity: { '@id': personId },
    about: { '@id': personId },
  };
}

export function faqPageJsonLd() {
  return {
    '@type': 'FAQPage',
    '@id': `${SITE_URL}/#faq`,
    url: `${SITE_URL}/#faq`,
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function graphJsonLd(nodes: Record<string, unknown>[]) {
  return {
    '@context': 'https://schema.org',
    '@graph': nodes,
  };
}
