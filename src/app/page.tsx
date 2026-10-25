import { JsonLd } from '@/components/JsonLd';
import { faqPageJsonLd, graphJsonLd, profilePageJsonLd } from '@/lib/json-ld';
import { pageMetadata } from '@/lib/metadata';
import { defaultDescription, defaultTitle, faqs, person, products } from '@/lib/site';

export const metadata = pageMetadata({
  title: defaultTitle,
  description: defaultDescription,
  path: '/',
  ogType: 'profile',
});

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={graphJsonLd([
          profilePageJsonLd('/', defaultTitle, defaultDescription),
          faqPageJsonLd(),
        ])}
      />
      <main id="main">
        <section className="hero wrap">
          <p className="eyebrow">Open to Director+ / VP / Head of roles</p>
          <h1>Roger Dhillon</h1>
          <p className="headline">VP Technology / Platform &amp; AIOps</p>
          <p className="lede">
            Platform and AIOps leader focused on putting AI into production with
            governance, reliability, and clear operating rhythms—not slideware.
          </p>
          <div className="cta-row" id="contact">
            <a
              className="btn btn-primary"
              href={person.calendly}
              target="_blank"
              rel="noopener noreferrer"
            >
              Schedule a meeting
            </a>
            <a
              className="btn btn-secondary"
              href={person.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a className="btn btn-secondary" href={person.resumePath}>
              Download resume
            </a>
          </div>
          <p className="contact-line">
            <a href={`mailto:${person.email}`}>{person.email}</a>
            <span aria-hidden="true"> · </span>
            <a href={`tel:${person.phoneTel}`}>{person.phoneDisplay}</a>
          </p>
        </section>

        <section className="about wrap" id="about">
          <h2>About</h2>
          <p>
            I lead technology organizations that combine platform engineering,
            cloud operations, security, and production AI. Recent work includes
            multi-team platform orgs, AIOps-style alert routing from operational
            signals, AI governance inside GRC programs, and large-scale cloud /
            Kubernetes delivery in regulated environments.
          </p>
          <p>
            Side products I ship with AI coding agents:{' '}
            <a href={products.shipready.href} target="_blank" rel="noopener noreferrer">
              ShipReady Metrics
            </a>{' '}
            (AI readiness, governance, and technology-risk scoring) and{' '}
            <a href={products.scm.href} target="_blank" rel="noopener noreferrer">
              scm.cc
            </a>{' '}
            (FedRAMP continuous-monitoring operations).
          </p>
          <p>
            For role history, publications, and the Platform / AIOps / FedRAMP /
            LLMOps brief, see{' '}
            <a href="/experience">experience</a>.
          </p>
          <ul className="focus">
            <li>AI Platform / LLMOps / Agentic production systems</li>
            <li>Enterprise AIOps and reliability leadership</li>
            <li>Platform engineering, cloud, and security-by-design</li>
            <li>Director+ / VP / Head of Technology at product and non-tech firms</li>
          </ul>
        </section>

        <section className="demos wrap" id="demos">
          <h2>Product demos</h2>
          <p className="section-lede">
            Live products I built. Primary CTAs stay Calendly, LinkedIn, and resume.
          </p>

          <article className="demo-card">
            <div className="demo-copy">
              <h3>scm.cc — FedRAMP 20x readiness</h3>
              <p>
                Continuous-monitoring style walkthrough: dashboard, evidence package,
                POA&amp;M, and FedRAMP 20x readiness views.
              </p>
              <p className="meta">
                Recording ~3:46 · Live demo:{' '}
                <a href={products.scm.demo} target="_blank" rel="noopener noreferrer">
                  app.scm.cc/demo
                </a>
              </p>
            </div>
            <div className="demo-media">
              <video
                controls
                playsInline
                preload="metadata"
                poster="/demos/scm-thumb.png"
                width={1280}
                height={720}
                aria-label="scm.cc FedRAMP readiness demo recording"
              >
                <source src="/demos/scm-fedramp-demo.mp4" type="video/mp4" />
              </video>
            </div>
          </article>

          <article className="demo-card demo-card-stub">
            <div className="demo-copy">
              <h3>ShipReady Metrics</h3>
              <p>
                Executive operating system for AI-native technology organizations—
                readiness, governance, and technology-risk scoring.
              </p>
              <p className="meta">
                <strong>Recording TBD</strong> (tracked as #1345) · Interactive demo:{' '}
                <a href={products.shipready.demo} target="_blank" rel="noopener noreferrer">
                  shipreadymetrics.com/demo
                </a>
                {' · '}
                <a href={products.shipready.measure} target="_blank" rel="noopener noreferrer">
                  What we measure
                </a>
              </p>
              <p className="stub-note">
                No hosted walkthrough video yet. Use the live product demo until a
                recording is added under <code>public/demos/</code>.
              </p>
            </div>
            <div className="demo-media stub">
              <div className="stub-panel">
                <span>Recording TBD</span>
                <a
                  className="btn btn-sm"
                  href={products.shipready.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open live demo
                </a>
              </div>
            </div>
          </article>
        </section>

        <section className="about wrap" id="faq">
          <h2>Questions recruiters ask</h2>
          {faqs.map((faq) => (
            <div className="faq-item" key={faq.question}>
              <h3>{faq.question}</h3>
              <p>{faq.answer}</p>
            </div>
          ))}
        </section>

        <section className="close wrap">
          <h2>Let&apos;s talk</h2>
          <p>Prefer a calendar hold over email ping-pong.</p>
          <a
            className="btn btn-primary"
            href={person.calendly}
            target="_blank"
            rel="noopener noreferrer"
          >
            Schedule a meeting with me
          </a>
        </section>
      </main>
    </>
  );
}
