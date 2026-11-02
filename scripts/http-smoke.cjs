#!/usr/bin/env node
// Vendored from persooninc/skills-library skills/quality/smoke-tests/scripts/http-smoke.js — update there first.
/* Dependency-free HTTP smoke runner. One shallow assertion set per URL, short timeout,
   never follows redirects (so a redirect is asserted, not hidden), fails fast and loud.
   checks file (JSON): [{ "path": "/", "status": 200, "contains": ["<h1"], "headers": { "x-content-type-options": "nosniff" } }]
   usage: node http-smoke.js <base-url> <checks.json> [--timeout-ms 10000]   (exit 1 on any failure) */
'use strict';

/** Evaluate one response against one check. Returns failure strings. */
function evaluate(check, res) {
  var failures = [];
  var want = check.status == null ? 200 : check.status;
  if (res.status !== want) failures.push('status ' + res.status + ' != ' + want);
  if (res.status >= 500) failures.push('5xx');
  Object.keys(check.headers || {}).forEach(function (k) {
    var got = res.headers[k.toLowerCase()];
    var exp = check.headers[k];
    if (got == null || String(got).toLowerCase().indexOf(String(exp).toLowerCase()) === -1) {
      failures.push('header ' + k + ': got ' + JSON.stringify(got == null ? null : got) + ', want contains ' + JSON.stringify(exp));
    }
  });
  (check.contains || []).forEach(function (s) { if (res.body.indexOf(s) === -1) failures.push('body missing ' + JSON.stringify(s)); });
  (check.notContains || []).forEach(function (s) { if (res.body.indexOf(s) !== -1) failures.push('body contains ' + JSON.stringify(s)); });
  return failures;
}

async function fetchOne(base, check, timeoutMs) {
  var url = new URL(check.path, base).toString();
  var ctrl = new AbortController();
  var t = setTimeout(function () { ctrl.abort(); }, timeoutMs);
  try {
    var r = await fetch(url, { redirect: 'manual', signal: ctrl.signal, headers: check.requestHeaders || {} });
    var headers = {};
    r.headers.forEach(function (v, k) { headers[k] = v; });
    return { url: url, status: r.status, headers: headers, body: await r.text() };
  } finally { clearTimeout(t); }
}

/** Run every check; returns [{ path, url, status, failures, ms }]. Network errors become failures. */
async function runSmoke(base, checks, opts) {
  var timeoutMs = (opts && opts.timeoutMs) || 10000;
  return Promise.all(checks.map(async function (check) {
    var started = Date.now();
    try {
      var res = await fetchOne(base, check, timeoutMs);
      return { path: check.path, url: res.url, status: res.status, failures: evaluate(check, res), ms: Date.now() - started };
    } catch (e) {
      return { path: check.path, url: String(new URL(check.path, base)), status: 0, failures: ['request failed: ' + (e.name === 'AbortError' ? 'timeout' : e.message)], ms: Date.now() - started };
    }
  }));
}

module.exports = { evaluate: evaluate, runSmoke: runSmoke };

if (require.main === module) {
  var args = process.argv.slice(2);
  var ti = args.indexOf('--timeout-ms');
  var timeoutMs = ti === -1 ? 10000 : Number(args.splice(ti, 2)[1]);
  if (args.length < 2) { console.error('usage: http-smoke.js <base-url> <checks.json> [--timeout-ms N]'); process.exit(2); }
  var checks = JSON.parse(require('fs').readFileSync(args[1], 'utf8'));
  runSmoke(args[0], checks, { timeoutMs: timeoutMs }).then(function (results) {
    var bad = 0;
    results.forEach(function (r) {
      console.log((r.failures.length ? 'FAIL ' : 'ok   ') + r.status + ' ' + r.url + ' (' + r.ms + 'ms)');
      r.failures.forEach(function (f) { console.log('     - ' + f); bad++; });
    });
    process.exit(bad ? 1 : 0);
  });
}
