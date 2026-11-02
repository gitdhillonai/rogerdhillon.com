// Baseline security headers (skills-library: platform/nextjs-security-headers).
// CSP is intentionally not here; see docs/BACKLOG.md S9.
export type Header = { key: string; value: string };

/** Baseline security headers for every response. */
export const securityHeaders: Header[] = [
  { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(), browsing-topics=()' },
  { key: 'X-Frame-Options', value: 'DENY' },
  // allow-popups keeps the Calendly / LinkedIn links working when opened from the page.
  { key: 'Cross-Origin-Opener-Policy', value: 'same-origin-allow-popups' },
];
