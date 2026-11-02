import { test } from 'node:test';
import assert from 'node:assert/strict';
import { cspDirectives, cspHeaders, cspPolicy } from './csp.ts';

test('no unsafe-eval and locked-down object/base/frame directives', () => {
  assert.ok(!cspPolicy.includes("'unsafe-eval'"));
  assert.deepEqual(cspDirectives['object-src'], ["'none'"]);
  assert.deepEqual(cspDirectives['base-uri'], ["'self'"]);
  assert.deepEqual(cspDirectives['frame-ancestors'], ["'none'"]);
});

test('GA origins are allowed where gtag needs them', () => {
  assert.ok(cspDirectives['script-src'].includes('https://www.googletagmanager.com'));
  assert.ok(cspDirectives['connect-src'].includes('https://*.google-analytics.com'));
});

test('ships Report-Only (not enforcing) with a reporting endpoint', () => {
  const keys = cspHeaders.map((h) => h.key);
  assert.ok(keys.includes('Content-Security-Policy-Report-Only'));
  assert.ok(!keys.includes('Content-Security-Policy'));
  assert.match(cspPolicy, /report-uri \/api\/csp-report/);
});
