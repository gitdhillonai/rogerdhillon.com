# rogerdhillon.com

Public career hub for Roger Dhillon (VP Technology / Platform & AIOps).

## CTAs
- Calendly: https://calendly.com/rogerdhillon
- LinkedIn: https://www.linkedin.com/in/rogerdhillon
- Resume: `/Roger-Dhillon-Resume.pdf`

## Demos
- **scm.cc** — hosted recording at `/demos/scm-fedramp-demo.mp4` + https://app.scm.cc/demo
- **ShipReady Metrics** — live https://shipreadymetrics.com/demo (recording TBD / #1345)

## Deploy
Vercel project should be linked to this repo (team **dhillonrs**). Master AI moves the
`rogerdhillon.com` apex onto this project after review. Private gated demos remain on
`gitdhillonai/rogerdhillon-demos` / a demos subdomain.

```bash
npm ci
npm run build
npm run start
```
