const year = new Date().getFullYear();

export default function HomePage() {
  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <header className="top">
        <div className="wrap top-inner">
          <a className="brand" href="/">
            Roger Dhillon
          </a>
          <nav aria-label="Primary">
            <a href="#about">About</a>
            <a href="#demos">Demos</a>
            <a href="#contact">Contact</a>
            <a
              className="btn btn-sm"
              href="https://calendly.com/rogerdhillon"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book a meeting
            </a>
          </nav>
        </div>
      </header>

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
              href="https://calendly.com/rogerdhillon"
              target="_blank"
              rel="noopener noreferrer"
            >
              Schedule a meeting
            </a>
            <a
              className="btn btn-secondary"
              href="https://www.linkedin.com/in/rogerdhillon"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a className="btn btn-secondary" href="/Roger-Dhillon-Resume.pdf">
              Download resume
            </a>
          </div>
          <p className="contact-line">
            <a href="mailto:rogerdhillonjobs@gmail.com">rogerdhillonjobs@gmail.com</a>
            <span aria-hidden="true"> · </span>
            <a href="tel:+13072228456">+1 307-222-8456</a>
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
            <a href="https://shipreadymetrics.com" target="_blank" rel="noopener noreferrer">
              ShipReady Metrics
            </a>{' '}
            (AI readiness, governance, and technology-risk scoring) and{' '}
            <a href="https://scm.cc" target="_blank" rel="noopener noreferrer">
              scm.cc
            </a>{' '}
            (FedRAMP continuous-monitoring operations).
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
                <a href="https://app.scm.cc/demo" target="_blank" rel="noopener noreferrer">
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
                <a
                  href="https://shipreadymetrics.com/demo"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  shipreadymetrics.com/demo
                </a>
                {' · '}
                <a
                  href="https://shipreadymetrics.com/what-we-measure"
                  target="_blank"
                  rel="noopener noreferrer"
                >
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
                  href="https://shipreadymetrics.com/demo"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open live demo
                </a>
              </div>
            </div>
          </article>
        </section>

        <section className="close wrap">
          <h2>Let&apos;s talk</h2>
          <p>Prefer a calendar hold over email ping-pong.</p>
          <a
            className="btn btn-primary"
            href="https://calendly.com/rogerdhillon"
            target="_blank"
            rel="noopener noreferrer"
          >
            Schedule a meeting with me
          </a>
        </section>
      </main>

      <footer className="foot">
        <div className="wrap foot-inner">
          <span>© {year} Roger Dhillon</span>
          <span>
            <a href="https://calendly.com/rogerdhillon" target="_blank" rel="noopener noreferrer">
              Calendly
            </a>
            {' · '}
            <a
              href="https://www.linkedin.com/in/rogerdhillon"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            {' · '}
            <a href="/Roger-Dhillon-Resume.pdf">Resume</a>
          </span>
        </div>
      </footer>
    </>
  );
}
