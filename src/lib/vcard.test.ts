import { test } from 'node:test';
import assert from 'node:assert/strict';
import { buildVCard, escapeText, fold } from './vcard.ts';

test('CRLF vCard 3.0 with structured name', () => {
  const out = buildVCard({ name: 'Roger Dhillon', title: 'VP Technology / Platform & AIOps', phone: '+13072228456' });
  assert.ok(out.startsWith('BEGIN:VCARD\r\nVERSION:3.0\r\n'));
  assert.ok(out.endsWith('END:VCARD\r\n'));
  assert.ok(!/[^\r]\n/.test(out));
  assert.match(out, /\r\nN:Dhillon;Roger;;;\r\n/);
  assert.match(out, /\r\nTEL;TYPE=CELL,VOICE:\+13072228456\r\n/);
});

test('escapes TEXT values', () => {
  assert.equal(escapeText('a,b;c\\d\ne'), 'a\\,b\;c\\\\d\\ne');
});

test('folds at 75 octets without splitting UTF-8', () => {
  const line = 'NOTE:' + 'é'.repeat(100);
  const folded = fold(line).split('\r\n');
  assert.ok(folded.length > 1);
  for (const l of folded) assert.ok(new TextEncoder().encode(l).length <= 75);
  assert.equal(folded.map((l, i) => (i ? l.slice(1) : l)).join(''), line);
});
