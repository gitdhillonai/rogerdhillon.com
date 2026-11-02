// Static Content-Security-Policy (skills-library: platform/csp-policy-management, static variant).
// Pages are prerendered, so per-request nonces are not available and Next's inline
// self.__next_f / JSON-LD scripts need 'unsafe-inline'. The policy still pins every other
// directive. Shipped as Report-Only first; flip to enforcing after reports are quiet (BACKLOG S9).
const GA = ['https://www.googletagmanager.com', 'https://*.google-analytics.com', 'https://*.analytics.google.com'];

export const CSP_REPORT_PATH = '/api/csp-report';

export const cspDirectives: Record<string, string[]> = {
  'default-src': ["'self'"],
  'script-src': ["'self'", "'unsafe-inline'", 'https://www.googletagmanager.com'],
  'style-src': ["'self'", "'unsafe-inline'"],
  'img-src': ["'self'", 'data:', ...GA],
  'font-src': ["'self'"],
  'connect-src': ["'self'", ...GA],
  'media-src': ["'self'"],
  'frame-src': ["'none'"],
  'frame-ancestors': ["'none'"],
  'object-src': ["'none'"],
  'base-uri': ["'self'"],
  'form-action': ["'self'"],
  'report-uri': [CSP_REPORT_PATH],
  'report-to': ['csp-endpoint'],
};

export const cspPolicy = Object.entries(cspDirectives)
  .map(([k, v]) => `${k} ${v.join(' ')}`)
  .join('; ');

export const cspHeaders = [
  { key: 'Content-Security-Policy-Report-Only', value: cspPolicy },
  { key: 'Reporting-Endpoints', value: `csp-endpoint="${CSP_REPORT_PATH}"` },
];
