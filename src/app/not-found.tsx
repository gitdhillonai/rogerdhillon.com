import type { Metadata } from 'next';
import { person } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Page not found — Roger Dhillon',
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <main id="main">
      <section className="page-hero wrap">
        <p className="eyebrow">404</p>
        <h1>Page not found</h1>
        <p className="lede">That page doesn&apos;t exist. Try one of these instead.</p>
        <div className="cta-row">
          <a className="btn btn-primary" href="/">
            Home
          </a>
          <a className="btn btn-secondary" href="/experience">
            Experience
          </a>
          <a className="btn btn-secondary" href={person.resumePath}>
            Resume (PDF)
          </a>
        </div>
      </section>
    </main>
  );
}
