import { person } from '@/lib/site';

const year = new Date().getFullYear();

export function SiteFooter() {
  return (
    <footer className="foot">
      <div className="wrap foot-inner">
        <span>© {year} Roger Dhillon</span>
        <nav aria-label="Footer">
          <a href="/">Home</a>
          {' · '}
          <a href="/experience">Experience</a>
          {' · '}
          <a href="/#demos">Demos</a>
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
