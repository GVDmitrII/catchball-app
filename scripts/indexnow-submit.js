#!/usr/bin/env node
/**
 * IndexNow submission utility.
 *
 * Notifies Bing and Yandex instantly when a page is published or updated,
 * instead of waiting for their regular crawl schedule. Google does not
 * support IndexNow; this only affects Bing/Yandex (and anything else that
 * consumes the shared IndexNow API).
 *
 * NOTE: this script is intentionally NOT wired into `pnpm build` or any CI
 * step. IndexNow submissions should happen only when content actually
 * changes — run it by hand, deliberately, not on every deploy.
 *
 * Usage:
 *   node scripts/indexnow-submit.js                  # submits all 9 routes below
 *   node scripts/indexnow-submit.js /news             # submits just /news
 *   node scripts/indexnow-submit.js /news /clubs       # submits multiple specific paths
 *
 * Going forward: after publishing a new item in src/data/news.json (or any
 * other content change), run:
 *   node scripts/indexnow-submit.js /news
 * so Bing/Yandex pick up the change immediately instead of on their next crawl.
 */

const HOST = 'catchball-app-rb2x.vercel.app';
const KEY = 'a98ee240785641c284270c8a5f9c7503';
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;

const DEFAULT_ROUTES = [
  '/',
  '/clubs',
  '/events',
  '/rules',
  '/standings',
  '/results',
  '/news',
  '/sponsors',
  '/privacy',
];

async function submit(paths) {
  const urlList = paths.map((p) => `https://${HOST}${p}`);

  const res = await fetch('https://api.indexnow.org/indexnow', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify({
      host: HOST,
      key: KEY,
      keyLocation: KEY_LOCATION,
      urlList,
    }),
  });

  console.log(`IndexNow: submitted ${urlList.length} URL(s), status ${res.status} ${res.statusText}`);
  urlList.forEach((u) => console.log(`  - ${u}`));

  if (!res.ok) {
    const text = await res.text().catch(() => '');
    console.error('IndexNow submission failed:', text);
    process.exitCode = 1;
  }
}

const args = process.argv.slice(2);
const paths = args.length > 0 ? args : DEFAULT_ROUTES;

await submit(paths);
