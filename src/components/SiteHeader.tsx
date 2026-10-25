import { person } from '@/lib/site';

export function SiteHeader() {
  return (
    <header className="top">
      <div className="wrap top-inner">
        <a className="brand" href="/">
          Roger Dhillon
        </a>
        <nav aria-label="Primary">
          <a href="/#about">About</a>
          <a href="/experience">Experience</a>
          <a href="/#demos">Demos</a>
          <a href="/#contact">Contact</a>
          <a className="btn btn-sm" href={person.calendly} target="_blank" rel="noopener noreferrer">
            Book a meeting
          </a>
        </nav>
      </div>
    </header>
  );
}
