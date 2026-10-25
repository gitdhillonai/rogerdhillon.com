import type { ReactNode } from 'react';
import { OptionalGoogleAnalytics } from '@/components/google-analytics';
import { JsonLd } from '@/components/JsonLd';
import { SiteFooter } from '@/components/SiteFooter';
import { SiteHeader } from '@/components/SiteHeader';
import { graphJsonLd, personJsonLd, websiteJsonLd } from '@/lib/json-ld';
import { rootMetadata } from '@/lib/metadata';
import './globals.css';

export const metadata = rootMetadata;

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <JsonLd data={graphJsonLd([personJsonLd(), websiteJsonLd()])} />
        <a className="skip" href="#main">
          Skip to content
        </a>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
      <OptionalGoogleAnalytics />
    </html>
  );
}
