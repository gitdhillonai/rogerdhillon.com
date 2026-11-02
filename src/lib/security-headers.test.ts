import { test } from 'node:test';
import assert from 'node:assert/strict';
import { securityHeaders } from './security-headers.ts';

const get = (k: string) => securityHeaders.find((h) => h.key === k)?.value;

test('HSTS is at least one year', () => {
  const maxAge = Number(/max-age=(\d+)/.exec(get('Strict-Transport-Security') ?? '')?.[1]);
  assert.ok(maxAge >= 31536000);
});

test('baseline headers are present', () => {
  assert.equal(get('X-Content-Type-Options'), 'nosniff');
  assert.equal(get('Referrer-Policy'), 'strict-origin-when-cross-origin');
  assert.equal(get('X-Frame-Options'), 'DENY');
  assert.match(get('Permissions-Policy') ?? '', /camera=\(\)/);
});

test('no CSP or deprecated X-XSS-Protection here', () => {
  assert.equal(get('Content-Security-Policy'), undefined);
  assert.equal(get('X-XSS-Protection'), undefined);
});

test('header keys are unique', () => {
  const keys = securityHeaders.map((h) => h.key.toLowerCase());
  assert.equal(new Set(keys).size, keys.length);
});
