import { person } from '@/lib/site';
import Link from 'next/link';

const year = new Date().getFullYear();

export function SiteFooter() {
  return (
    <footer className="foot">
      <div className="wrap foot-inner">
        <span>© {year} Roger Dhillon</span>
        <nav aria-label="Footer">
          <Link href="/">Home</Link>
          {' · '}
          <Link href="/experience">Experience</Link>
          {' · '}
          <Link href="/#demos">Demos</Link>
          {' · '}
          <a href={person.calendly} target="_blank" rel="noopener noreferrer">
            Calendly
          </a>
          {' · '}
          <a href={person.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          {' · '}
          <a href={person.resumePath}>Resume</a>
        </nav>
      </div>
    </footer>
  );
}
