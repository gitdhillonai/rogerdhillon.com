import type { Metadata } from 'next';
import { SITE_URL, absoluteUrl, defaultDescription, defaultTitle } from './site';

type PageMetaInput = {
  title: string;
  description: string;
  path: string;
  ogType?: 'website' | 'profile' | 'article';
};

export function pageMetadata({
  title,
  description,
  path,
  ogType = 'website',
}: PageMetaInput): Metadata {
  const url = absoluteUrl(path);

  return {
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    openGraph: {
      type: ogType,
      url,
      title,
      description,
      siteName: 'Roger Dhillon',
      locale: 'en_US',
      images: [
        {
          url: '/opengraph-image',
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      ...(ogType === 'profile' ? { firstName: 'Roger', lastName: 'Dhillon' } : {}),
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/opengraph-image'],
    },
  };
}

export const rootMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: defaultTitle,
    template: '%s · Roger Dhillon',
  },
  description: defaultDescription,
  applicationName: 'Roger Dhillon',
  authors: [{ name: 'Roger Dhillon', url: SITE_URL }],
  creator: 'Roger Dhillon',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: 'profile',
    url: SITE_URL,
    title: defaultTitle,
    description: defaultDescription,
    siteName: 'Roger Dhillon',
    locale: 'en_US',
    firstName: 'Roger',
    lastName: 'Dhillon',
  },
  twitter: {
    card: 'summary_large_image',
    title: defaultTitle,
    description: defaultDescription,
  },
};
