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
- [x] **S5 Lint.** ESLint flat config (`eslint-config-next`); wire `npm run lint` into CI.
- [ ] **S6 Case studies.** `/work` index plus 2–3 case-study pages (problem → approach →
  measurable outcome) for scm.cc and ShipReady Metrics. Add them to `publicPages`/sitemap, with
  `CreativeWork` JSON-LD. Copy needs Rajvir's facts; no invented metrics.
- [x] **S7 vCard download.** `/roger-dhillon.vcf` route handler built from `person` in
  `src/lib/site.ts`, linked from the contact row. Skill: `platform/vcard-contact-export`.
- [x] **S8 Smoke test.** `npm run smoke` (fetch-based, `smoke.checks.json`) against `next start`
  in CI: public pages, robots, sitemap, llms.txt, OG image, resume, vCard, 404, www→apex.
  Skill: `quality/smoke-tests` (`scripts/http-smoke.js`).
- [x] **S9a CSP Report-Only.** Static policy in `src/lib/csp.ts` (self + GA origins, `object-src
  'none'`, `frame-ancestors 'none'`, `base-uri`/`form-action` self) sent as Report-Only; violations
  are logged by `/api/csp-report`. Skill: `platform/csp-policy-management` (static variant).
- [ ] **S9b Enforce CSP.** After a week of quiet `csp-violation` lines in Vercel runtime logs,
  change `Content-Security-Policy-Report-Only` to `Content-Security-Policy` in `src/lib/csp.ts`.
  Moving off `'unsafe-inline'` scripts needs nonces, which means dynamic rendering. That is a
  separate trade-off.
- [x] **S10 Accessibility pass.** Contrast gate test over `:root` tokens (skip link fixed:
  3.2:1 → 6.1:1), `:focus-visible` ring, `prefers-reduced-motion`. Skills: `ui/design-system-tokens`
  (contrast gate), `quality/web-accessibility-audit`.
- [ ] **S11 Speaking / writing section.** Optional section listing talks and posts, data-driven
  from `site.ts`. Owner supplies the content.
