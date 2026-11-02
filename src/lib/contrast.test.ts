import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { contrastRatio } from './contrast.ts';

const css = readFileSync(new URL('../app/globals.css', import.meta.url), 'utf8');
const root = /:root\s*\{([^}]*)\}/.exec(css)?.[1] ?? '';
const token = (name: string) => {
  const v = new RegExp(`--${name}:\\s*(#[0-9a-fA-F]{3,6})`).exec(root)?.[1];
  assert.ok(v, `--${name} missing from :root`);
  return v;
};

test('contrastRatio matches known WCAG values', () => {
  assert.equal(contrastRatio('#000', '#fff').toFixed(1), '21.0');
  assert.equal(contrastRatio('#fff', '#fff').toFixed(1), '1.0');
});

// [foreground, background, minimum] — 4.5 for text (1.4.3), 3 for focus indicators (1.4.11).
const pairs: [string, string, number][] = [
  ['text', 'bg', 4.5],
  ['muted', 'bg', 4.5],
  ['muted', 'card', 4.5],
  ['accent', 'bg', 4.5],
  ['accent', 'card', 4.5],
  ['on-accent', 'accent', 4.5],
  ['focus', 'bg', 3],
];

for (const [fg, bg, min] of pairs) {
  test(`--${fg} on --${bg} meets ${min}:1`, () => {
    const ratio = contrastRatio(token(fg), token(bg));
    assert.ok(ratio >= min, `${ratio.toFixed(2)} < ${min}`);
  });
}
