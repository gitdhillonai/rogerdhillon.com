import { JsonLd } from '@/components/JsonLd';
import { graphJsonLd, profilePageJsonLd } from '@/lib/json-ld';
import { pageMetadata } from '@/lib/metadata';
import { person, products, publicPages } from '@/lib/site';

const page = publicPages.find((entry) => entry.path === '/experience')!;

export const metadata = pageMetadata({
  title: page.title,
  description: page.description,
  path: page.path,
  ogType: 'profile',
});

export default function ExperiencePage() {
  return (
    <>
      <JsonLd data={graphJsonLd([profilePageJsonLd(page.path, page.title, page.description)])} />
      <main id="main">
        <section className="page-hero wrap">
          <p className="eyebrow">Career brief for recruiters and hiring managers</p>
          <h1>Experience</h1>
          <p className="lede">
            Open to Director+, VP, and Head of Technology, Platform, AIOps, FedRAMP,
            and LLMOps roles. This page extends the{' '}
            <a href="/">homepage</a> with role history from the public{' '}
            <a href={person.resumePath}>resume</a>—not a second copy of the hero.
          </p>
          <div className="cta-row">
            <a className="btn btn-primary" href={person.calendly} target="_blank" rel="noopener noreferrer">
              Schedule a meeting
            </a>
            <a className="btn btn-secondary" href={person.resumePath}>
              Download resume
            </a>
          </div>
        </section>

        <section className="about wrap">
          <h2>Recent leadership</h2>
          <article className="role">
            <h3>VP Technology, Neilson Financial Services</h3>
            <p className="meta">Aug 2025 – Aug 2026</p>
            <p>
              Led a 60-person organization (14 teams) across platform engineering
              and technology support: cloud automation and operations, cybersecurity,
              database engineering, developer services, test automation, and corporate
              systems. Work included production AIOps-style alert routing from
              operational signals, AI governance inside the GRC program, and
              zero-downtime modernization of an FCA-regulated application estate on
              Azure Kubernetes Service.
            </p>
          </article>
          <article className="role">
            <h3>Sr. Director, Production Engineering, Episource (acquired by Optum)</h3>
            <p className="meta">Sep 2021 – Aug 2025</p>
            <p>
              Built and scaled 80+ engineers across cloud engineering, application
              and cloud security, site reliability, and test automation for 100+
              healthcare services. Strengthened the security and compliance posture
              that supported Episource&apos;s acquisition by Optum and integration
              into a Fortune 5 enterprise.
            </p>
          </article>
          <article className="role">
            <h3>Director, Software Engineering, MGM Studios (acquired by Amazon)</h3>
            <p className="meta">Sep 2019 – Sep 2021</p>
            <p>
              Led the cloud engineering team that built MGM&apos;s enterprise AWS
              platform in the period leading up to Amazon&apos;s announced $8.45B
              acquisition. That is MGM platform work prior to the deal—not a claim
              of current Amazon employment.
            </p>
          </article>
        </section>

        <section className="about wrap">
          <h2>Earlier roles</h2>
          <ul className="focus">
            <li>Development Director, Freddie Mac (2017–2019)</li>
            <li>Manager, DevOps, Fannie Mae (2016–2017)</li>
            <li>Senior Manager, DevOps, Walt Disney Studios (2011–2016)</li>
            <li>Director, Software Engineering, Pictage (2010–2011) — historical role only</li>
            <li>Senior Manager, SCM, Fox Interactive Media (2008–2010)</li>
            <li>Manager, Technology, LA Times Interactive (2007–2008)</li>
            <li>Senior Software Engineer, Yahoo! (2002–2007)</li>
          </ul>
        </section>

        <section className="about wrap">
          <h2>Platform, AIOps, FedRAMP, and LLMOps</h2>
          <p>
            These are the job-hunt angles this site is meant to be found for.
            They describe work already on the resume and in the{' '}
            <a href="/#demos">product demos</a>, not new employers or awards.
          </p>
          <article className="role">
            <h3>Platform engineering</h3>
            <p>
              Multi-team platform organizations, cloud automation, Kubernetes,
              infrastructure-as-code, and developer services in regulated
              financial-services and healthcare environments.
            </p>
          </article>
          <article className="role">
            <h3>AIOps and reliability</h3>
            <p>
              Production operating models that turn Datadog, Kubernetes, database,
              security, and investigation signals into context-rich alerts routed
              to the right on-call engineers—plus incident-response discipline that
              cut P0 noise at NFS.
            </p>
          </article>
          <article className="role">
            <h3>FedRAMP and regulated delivery</h3>
            <p>
              <a href={products.scm.href} target="_blank" rel="noopener noreferrer">
                scm.cc
              </a>{' '}
              is a FedRAMP continuous-monitoring product Roger built, with a public
              walkthrough of dashboard, evidence, POA&amp;M, and FedRAMP 20x
              readiness views. Resume work also covers FCA, GDPR, HIPAA, HITRUST,
              and SOC 2 controls inside engineering workflows.
            </p>
          </article>
          <article className="role">
            <h3>LLMOps and production AI</h3>
            <p>
              AI platform and agentic systems with human oversight, access control,
              production monitoring, auditability, and release controls.{' '}
              <a href={products.shipready.href} target="_blank" rel="noopener noreferrer">
                ShipReady Metrics
              </a>{' '}
              scores AI readiness, governance, and technology risk for executives.
            </p>
          </article>
        </section>

        <section className="about wrap">
          <h2>Publications</h2>
          <ul className="focus">
            <li>
              Co-author, <em>Implementing Enterprise AI: Building a Company-Wide Skill Library and Running AI Agents at Scale</em> (Amazon, 2026)
            </li>
            <li>
              Editor, <em>From AI Scaffolding to Structure: The C-Suite Operating Model for AI Strategy, Value, Governance, and Risk</em> (Amazon, 2026)
            </li>
          </ul>
        </section>

        <section className="close wrap">
          <h2>Let&apos;s talk</h2>
          <p>
            {person.email}
            <span aria-hidden="true"> · </span>
            <a href={`tel:${person.phoneTel}`}>{person.phoneDisplay}</a>
          </p>
          <a className="btn btn-primary" href={person.calendly} target="_blank" rel="noopener noreferrer">
            Schedule a meeting with me
          </a>
        </section>
      </main>
    </>
  );
}
