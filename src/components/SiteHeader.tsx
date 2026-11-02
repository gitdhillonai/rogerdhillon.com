import { person } from '@/lib/site';
import Link from 'next/link';

export function SiteHeader() {
  return (
    <header className="top">
      <div className="wrap top-inner">
        <Link className="brand" href="/">
          Roger Dhillon
        </Link>
        <nav aria-label="Primary">
          <Link href="/#about">About</Link>
          <Link href="/experience">Experience</Link>
          <Link href="/#demos">Demos</Link>
          <Link href="/#contact">Contact</Link>
          <a className="btn btn-sm" href={person.calendly} target="_blank" rel="noopener noreferrer">
            Book a meeting
          </a>
        </nav>
      </div>
    </header>
  );
}
