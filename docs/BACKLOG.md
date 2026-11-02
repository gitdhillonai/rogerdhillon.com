# rogerdhillon.com backlog

Feature review 2026-11-01 (lane persoona). Compares the site with what a finished executive
career hub needs: fast, crawlable, secure, easy to contact, with proof of work. Each story is
one PR. Reusable patterns go to `persooninc/skills-library` first.

Already shipped: homepage, `/experience`, resume PDF, product demos, JSON-LD (Person,
WebSite, ProfilePage, FAQPage), canonical/OG/Twitter metadata, OG image, robots, sitemap,
llms.txt, IndexNow key, www→apex redirect, production-only GA4 gate.

## Stories

- [x] **S1 Security headers.** HSTS, nosniff, Referrer-Policy, Permissions-Policy,
  X-Frame-Options and COOP on every route, with a unit test.
  Skill: `platform/nextjs-security-headers`.
- [x] **S2 Branded 404.** `not-found.tsx` with the site chrome, links back to home, experience,
  and resume, plus `noindex`.
- [x] **S3 Test script.** `npm test` runs `node:test` unit tests for `src/lib` (no new deps).
- [x] **S4 CI.** GitHub Actions workflow on PRs: `tsc --noEmit`, `npm test`, `next build`.
  Branch protection stays an owner decision.
- [ ] **S5 Lint.** ESLint flat config (`eslint-config-next`); wire `npm run lint` into CI.
- [ ] **S6 Case studies.** `/work` index plus 2–3 case-study pages (problem → approach →
  measurable outcome) for scm.cc and ShipReady Metrics. Add them to `publicPages`/sitemap, with
  `CreativeWork` JSON-LD. Copy needs Rajvir's facts; no invented metrics.
- [ ] **S7 vCard download.** `/roger-dhillon.vcf` route handler built from `person` in
  `src/lib/site.ts`, linked from the contact row.
- [ ] **S8 Header/footer smoke test.** Playwright (or `next start` + fetch) smoke test: every
  `publicPages` URL returns 200 and has a canonical link, an h1 and the Calendly CTA.
  Skill: `quality/playwright-regression`.
- [ ] **S9 Content-Security-Policy.** Report-Only static policy (self + googletagmanager/GA
  origins), then enforce. Skill: `platform/csp-policy-management` (static variant).
- [ ] **S10 Accessibility pass.** Contrast check of `--muted` on the background, visible focus
  ring on `.btn`, `prefers-reduced-motion`. Skill: `design:accessibility-review`.
- [ ] **S11 Speaking / writing section.** Optional section listing talks and posts, data-driven
  from `site.ts`. Owner supplies the content.
